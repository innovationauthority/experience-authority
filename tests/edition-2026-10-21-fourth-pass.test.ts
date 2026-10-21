import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch52 } from "../src/lib/guide-batch-52";
import {
  discoveryBatch52,
  edition20261021FourthPass,
} from "../src/lib/discovery-batch-52";
import { discoveryEdition52 } from "../src/lib/daily-discovery-batch-52";
import { discoveryEdition50 } from "../src/lib/daily-discovery-batch-50";
import { discoveryEdition49 } from "../src/lib/daily-discovery-batch-49";
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

test("fourth 21 October pass adds eighteen distinct guides with three in each primary area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021FourthPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch52.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021FourthPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 442);
  for (const [area, allocated] of Object.entries(edition20261021FourthPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch52.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-21"), slug);
      assert.ok(!canPublishGuide(g, "2026-10-20"), slug);
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
      assert.ok(new Set(g.guideReview!.sources.map((s) => s.url)).size >= 2);
      assert.match(g.evidence, /EA has not/);
      assert.ok(discoveryBatch52[slug]);
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

test("fourth pass photographs have reviewed documentary provenance", () => {
  const photos = guideBatch52.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    15,
  );
  for (const g of guideBatch52) {
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
  assert.match(
    guideMediaFor("kyoto-adachi-kumihimo")!.depiction,
    /not.*Adachi/i,
  );
  assert.match(
    guideMediaFor("melbourne-city-baths-swim")!.depiction,
    /exterior/i,
  );
  assert.match(
    guideMediaFor("hamburg-elbphilharmonie-concert")!.depiction,
    /not the auditorium/i,
  );
});
test("access boundaries preserve the actual activity, geography and evidence", () => {
  const g = (id: string) => guideBatch52.find((g) => g.id === id)!;
  assert.equal(g("alboraya-daniel-horchata").regionSlug, "alboraya");
  assert.match(g("tallinn-kalev-marzipan").rootedness, /Roseni 7/);
  assert.match(
    g("seville-barroazul-cuerda-seca").responsibility,
    /next.day|following evening/i,
  );
  assert.match(g("kyoto-adachi-kumihimo").responsibility, /language|English/i);
  assert.match(g("seoul-yeouinaru-cycling").responsibility, /payment|phone/i);
  assert.match(g("london-dennis-severs-silent").responsibility, /photograph/i);
  assert.match(
    g("hamburg-elbphilharmonie-concert").responsibility,
    /Plaza ticket does not/,
  );
  assert.match(g("oslo-frank-znort-sunday").responsibility, /inconsistent/i);
  assert.match(g("franeker-eisinga-planetarium").responsibility, /Christmas/);
  assert.match(g("istanbul-ataturk-arboretum").evidence, /not|unavailable/i);
});
test("Hamburg and Oslo connect contrasting public experiences without a fabricated package", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(cityChapters.length, 45);
  assert.equal(chapters.length, 44);
  for (const name of ["hamburg", "oslo"]) {
    const c = chapters.find((c) => c.slug === name)!;
    assert.equal(c.stops.length, 2);
    assert.equal(new Set(c.stops.map((s) => s.item.field)).size, 2);
    assert.match(c.planning, /separate|independently/);
    assert.ok(
      !resolveCityChapters(
        current.filter((g) => g.slug !== c.stops[0].slug),
      ).some((c) => c.slug === name),
    );
  }
  for (const g of guideBatch52) {
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
test("six holiday-aware discoveries append without overwriting or repeating earlier slots", () => {
  assert.equal(discoveryEdition52.length, 6);
  assert.equal(dailyDiscoveries.length, 128);
  for (const d of discoveryEdition52) {
    assert.ok(d.date >= "2026-12-25" && d.date <= "2026-12-30");
    assert.ok(d.angle.length > 180);
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
    assert.ok(
      canPublishGuide(
        guideBatch52.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
  }
  for (const d of [...discoveryEdition49, ...discoveryEdition50])
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(new Set(dailyDiscoveries.map((d) => d.date)).size, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.slug)).size, 128);
  assert.match(discoveryEdition52[0].notice, /Christmas Day as closed/);
});
test("five passes remain one dated release with ninety unique guides", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 144);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 144);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
});
