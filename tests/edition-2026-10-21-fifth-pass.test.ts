import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch53 } from "../src/lib/guide-batch-53";
import {
  discoveryBatch53,
  edition20261021FifthPass,
} from "../src/lib/discovery-batch-53";
import { discoveryEdition53 } from "../src/lib/daily-discovery-batch-53";
import { dailyDiscoveries } from "../src/lib/daily-discovery";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
  regionsForCountry,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor, imageCreditText } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { cityChapters, resolveCityChapters } from "../src/lib/city-chapters";
import { guideReleases, publishedReleases } from "../src/lib/releases";

test("fifth October 21 pass adds eighteen new programmes, three per primary area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021FifthPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch53.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021FifthPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 442);
  for (const [area, allocated] of Object.entries(edition20261021FifthPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch53.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-21"), slug);
      assert.ok(!canPublishGuide(g, "2026-10-20"));
      assert.ok(
        !earlier.some(
          (p) =>
            p.id === g.id ||
            p.slug === slug ||
            p.guideReview!.accessUrl === g.guideReview!.accessUrl,
        ),
        slug,
      );
      assert.equal(g.guideReview!.requiresSpecialPermission, false);
      assert.equal(g.guideReview!.basis, "public_sources");
      assert.ok(new Set(g.guideReview!.sources.map((s) => s.url)).size >= 2);
      assert.match(g.evidence, /EA has not/);
      assert.ok(discoveryBatch53[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
        slug,
      );
      const prose = [
        g.title,
        g.summary,
        g.kernel,
        g.rootedness,
        g.shift,
        g.humanReturn,
        g.responsibility,
        g.evidence,
        g.duration,
        g.participation,
        g.access,
      ].join(" ");
      assert.doesNotMatch(prose, /[;—]/);
      assert.ok(prose.split(/\s+/).length >= 300, slug);
    }
  }
  assert.equal(publicGuides.length, 460);
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-21")).length,
    446,
  );
});
test("all eighteen new photographs have subject-specific review and honest rights records", () => {
  const photos = guideBatch53.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    16,
  );
  for (const g of guideBatch53) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.equal(m.visualReview.outcome, "approved");
    assert.ok(imageCreditText(m).trim());
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
  assert.match(guideMediaFor("nashville-station-inn-jam")!.depiction, /2013/);
  assert.match(
    guideMediaFor("seoul-bukchon-small-loom")!.depiction,
    /not a weaving lesson/,
  );
  assert.match(guideMediaFor("tokyo-ozu-washi-sheet")!.depiction, /exterior/);
  assert.match(
    guideMediaFor("nairobi-museum-human-origins")!.depiction,
    /not the human-origins/,
  );
});
test("current closures, specific workshop formats and source conflicts stay visible", () => {
  const g = (id: string) => guideBatch53.find((g) => g.id === id)!;
  assert.match(
    g("rio-santa-teresa-bonde").summary,
    /suspended on 21 October 2026/,
  );
  assert.match(
    g("rio-santa-teresa-bonde").responsibility,
    /confirm resumed service/,
  );
  assert.ok(
    g("rio-santa-teresa-bonde").guideReview!.sources.some((s) =>
      s.url.includes("trilhosdorio.org"),
    ),
  );
  assert.match(g("bangkok-thipsamai-padthai").responsibility, /Tuesdays/);
  assert.match(
    g("seoul-bukchon-small-loom").rootedness,
    /Saturday.*Jigmulnori/,
  );
  assert.match(
    g("seoul-bukchon-small-loom").rootedness,
    /distinct from Donglim/,
  );
  assert.match(
    g("ubud-widya-batik-cap").responsibility,
    /Transport and lunch are not included/,
  );
  assert.match(
    g("santiago-chile-before-chile").responsibility,
    /temporarily closed/,
  );
  assert.match(g("sydney-manly-ferry").responsibility, /different services/);
  assert.match(
    g("buenos-aires-colon-performance").responsibility,
    /Not every location is seated/,
  );
});
test("Lima connects a class and a public pause without a fabricated package", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(
    regionsForCountry("peru", current).find((r) => r.slug === "lima")?.name,
    "Lima",
  );
  assert.equal(cityChapters.length, 45);
  assert.equal(chapters.length, 44);
  const lima = chapters.find((c) => c.slug === "lima")!;
  assert.equal(lima.stops.length, 2);
  assert.equal(new Set(lima.stops.map((s) => s.item.field)).size, 2);
  assert.match(lima.planning, /independently/);
  assert.ok(
    !resolveCityChapters(
      current.filter((g) => g.id !== "lima-olivar-pause"),
    ).some((c) => c.slug === "lima"),
  );
  for (const g of guideBatch53) {
    const related = connectedExperiences(g, current, 3);
    assert.ok(related.length > 0, g.id);
    if (
      current.some(
        (p) =>
          p.id !== g.id &&
          p.countrySlug === g.countrySlug &&
          p.regionSlug === g.regionSlug,
      )
    )
      assert.equal(related[0].scope, "same_area", g.id);
  }
});
test("six new daily discoveries respect the year boundary and holiday uncertainty", () => {
  assert.equal(discoveryEdition53.length, 6);
  assert.equal(dailyDiscoveries.length, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.date)).size, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.slug)).size, 128);
  assert.equal(discoveryEdition53[0].date, "2026-12-31");
  assert.equal(discoveryEdition53.at(-1)!.date, "2027-01-05");
  for (const d of discoveryEdition53) {
    assert.ok(d.angle.length > 180);
    assert.ok(d.notice.length > 80);
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
    assert.ok(
      canPublishGuide(
        guideBatch53.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
  }
  assert.match(discoveryEdition53[0].notice, /not advice to board tonight/);
  assert.match(
    discoveryEdition53[3].notice,
    /does not confirm this specific January date/,
  );
});
test("eight same-day passes remain one dated release with 144 unique guides", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 144);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 144);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
});
