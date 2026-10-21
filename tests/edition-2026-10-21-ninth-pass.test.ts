import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch57 } from "../src/lib/guide-batch-57";
import {
  edition20261021NinthPass,
  discoveryBatch57,
} from "../src/lib/discovery-batch-57";
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

test("ninth-pass practical boundaries reflect current primary evidence", () => {
  const g = (id: string) => guideBatch57.find((g) => g.id === id)!;
  assert.match(
    g("chicago-garfield-glasshouse-pause").responsibility,
    /Ticketed entry is required/,
  );
  assert.match(
    g("chicago-garfield-glasshouse-pause").responsibility,
    /excludes the Fern Room/,
  );
  assert.match(g("melbourne-fitzroy-barefoot-bowls").rootedness, /synthetic/);
  assert.match(
    g("seoul-hwiho-mother-of-pearl").responsibility,
    /does not itself guarantee English/,
  );
  assert.match(
    g("valencia-llotja-stone-columns").responsibility,
    /Tower visits are separately guided/,
  );
  assert.match(g("chicago-green-mill-jazz").responsibility, /21 and over/);
  assert.equal(g("kyoto-shunkoin-kissako").guideReview!.reviewBy, "2026-12-30");
  assert.equal(
    g("tokyo-national-noh-performance").guideReview!.reviewBy,
    "2026-11-20",
  );
  assert.ok(!guideBatch57.some((g) => /almoina/i.test(g.id)));
});

test("new guides have complementary routes without extending unverified daily scheduling", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  assert.equal(resolveCityChapters(current).length, 44);
  assert.equal(dailyDiscoveries.length, 128);
  for (const g of guideBatch57) {
    const related = connectedExperiences(g, current, 3);
    assert.ok(related.length, g.id);
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
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 162);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 162);
});

test("ninth pass adds eighteen distinct experiences and three primary allocations per area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021NinthPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch57.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021NinthPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 460);
  for (const [area, allocated] of Object.entries(edition20261021NinthPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch57.find((g) => g.slug === slug)!;
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
      assert.ok(discoveryBatch57[slug]);
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

test("eighteen genuine photographs have reviewed provenance and eleven documented licences", () => {
  const photos = guideBatch57.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    11,
  );
  for (const g of guideBatch57) {
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
