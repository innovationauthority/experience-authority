import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch55 } from "../src/lib/guide-batch-55";
import {
  edition20261021SeventhPass,
  discoveryBatch55,
} from "../src/lib/discovery-batch-55";
import { discoveryEdition55 } from "../src/lib/daily-discovery-batch-55";
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

test("seventh pass adds eighteen distinct experiences and three primary allocations per area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021SeventhPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch55.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021SeventhPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 460);
  for (const [area, allocated] of Object.entries(edition20261021SeventhPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch55.find((g) => g.slug === slug)!;
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
      assert.ok(discoveryBatch55[slug]);
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
  assert.equal(publicGuides.length, 478);
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-21")).length,
    464,
  );
});

test("eighteen genuine photographs have reviewed provenance and fourteen documented licences", () => {
  const photos = guideBatch55.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    14,
  );
  for (const g of guideBatch55) {
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
  const g = (id: string) => guideBatch55.find((g) => g.id === id)!;
  assert.match(
    g("paris-sainte-chapelle-concert").responsibility,
    /scaffolding/,
  );
  assert.match(
    g("seville-torres-macarena-flamenco").responsibility,
    /no online ticket sale/,
  );
  assert.match(g("palermo-stanze-maiolica").responsibility, /no lift/);
  assert.match(
    g("san-sebastian-igueldo-funicular").responsibility,
    /wheelchair|stairs/,
  );
});

test("Ljubljana links contrasting local experiences without claiming a shared booking", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 44);
  const ljubljana = chapters.find((c) => c.slug === "ljubljana")!;
  assert.equal(ljubljana.stops.length, 3);
  assert.equal(new Set(ljubljana.stops.map((s) => s.item.field)).size, 2);
  for (const g of guideBatch55) {
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

test("six new daily discoveries extend publication without pretending to schedule an event", () => {
  assert.equal(discoveryEdition55.length, 6);
  assert.equal(dailyDiscoveries.length, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.date)).size, 128);
  assert.equal(new Set(dailyDiscoveries.map((d) => d.slug)).size, 128);
  assert.equal(discoveryEdition55[0].date, "2027-01-12");
  assert.equal(discoveryEdition55.at(-1)!.date, "2027-01-17");
  for (const d of discoveryEdition55) {
    assert.ok(d.angle.length > 180);
    assert.ok(d.notice.length > 80);
    assert.ok(
      canPublishGuide(
        guideBatch55.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
  }
});

test("nine same-day passes remain one release of 162 unique guides", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 162);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 162);
});
