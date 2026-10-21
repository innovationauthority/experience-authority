import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch56 } from "../src/lib/guide-batch-56";
import {
  edition20261021EighthPass,
  discoveryBatch56,
} from "../src/lib/discovery-batch-56";
import { discoveryEdition56 } from "../src/lib/daily-discovery-batch-56";
import { dailyDiscoveries } from "../src/lib/daily-discovery";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor, imageCreditText } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { resolveCityChapters } from "../src/lib/city-chapters";
import { guideReleases, publishedReleases } from "../src/lib/releases";

test("eighth pass adds eighteen distinct experiences and three primary allocations per area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021EighthPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch56.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021EighthPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 442);
  for (const [area, allocated] of Object.entries(edition20261021EighthPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch56.find((g) => g.slug === slug)!;
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
      assert.ok(discoveryBatch56[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
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

test("eighteen genuine photographs have reviewed provenance and fourteen documented licences", () => {
  const photos = guideBatch56.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    14,
  );
  for (const g of guideBatch56) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.equal(m.visualReview.outcome, "approved");
    assert.ok(imageCreditText(m).trim());
    assert.doesNotMatch(
      imageCreditText(m),
      /Wikimedia Commons \/ Wikimedia Commons/,
    );
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
});

test("operating and participation boundaries stay explicit", () => {
  const g = (id: string) => guideBatch56.find((g) => g.id === id)!;
  assert.match(
    g("prague-klementinum-meridian").responsibility,
    /172 stairs and no lift/,
  );
  assert.match(g("ikeda-chicken-ramen-making").responsibility, /pairs/);
  assert.match(
    g("seoul-tongin-token-lunch").responsibility,
    /conflicting weekday/,
  );
  assert.match(
    g("lisbon-cinemateca-screening").responsibility,
    /prohibits visitor photography/,
  );
  assert.match(
    g("marrakech-anima-garden-pause").responsibility,
    /separate advance reservation/,
  );
});

test("Ljubljana links contrasting local experiences without claiming a shared booking", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 44);
  const ljubljana = chapters.find((c) => c.slug === "ljubljana")!;
  assert.equal(ljubljana.stops.length, 3);
  assert.equal(new Set(ljubljana.stops.map((s) => s.item.field)).size, 2);
  for (const g of guideBatch56) {
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

test("one daily discovery stays within the verified source window", () => {
  assert.equal(discoveryEdition56.length, 1);
  assert.equal(dailyDiscoveries.length, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.date)).size, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.slug)).size, 128);
  assert.equal(discoveryEdition56[0].date, "2027-01-18");
  assert.equal(discoveryEdition56.at(-1)!.date, "2027-01-18");
  for (const d of discoveryEdition56) {
    assert.ok(d.angle.length > 180);
    assert.ok(d.notice.length > 80);
    assert.ok(
      canPublishGuide(
        guideBatch56.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
  }
});

test("eight same-day passes remain one release of 144 unique guides", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 144);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 144);
});
