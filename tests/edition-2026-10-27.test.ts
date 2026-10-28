import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch58 } from "../src/lib/guide-batch-58";
import { guideBatch59 } from "../src/lib/guide-batch-59";
import {
  edition20261027,
  discoveryBatch58,
} from "../src/lib/discovery-batch-58";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { publishedReleases } from "../src/lib/releases";

test("27 October adds eighteen distinct source-checked guides with three primary allocations per area", () => {
  const slugs = Object.values(edition20261027).flat() as readonly string[];
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.equal(publicGuides.length, 532);
  assert.deepEqual([...slugs].sort(), guideBatch58.map((g) => g.slug).sort());
  const previous = publicGuides.filter(
    (g) =>
      !slugs.includes(g.slug) &&
      g.guideReview!.checkedOn <= "2026-10-27" &&
      !guideBatch59.some((newGuide) => newGuide.id === g.id),
  );
  assert.equal(previous.length, 478);
  assert.deepEqual(
    Object.keys(edition20261027).sort(),
    interests.map((i) => i.slug).sort(),
  );
  for (const [area, allocated] of Object.entries(edition20261027)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch58.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-27"), slug);
      assert.ok(!canPublishGuide(g, "2026-10-26"), slug);
      assert.ok(
        !previous.some(
          (p) =>
            p.id === g.id ||
            p.slug === slug ||
            p.guideReview!.accessUrl === g.guideReview!.accessUrl,
        ),
        slug,
      );
      assert.equal(g.guideReview!.requiresSpecialPermission, false);
      assert.ok(new Set(g.guideReview!.sources.map((s) => s.url)).size >= 2);
      assert.ok(discoveryBatch58[slug]);
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
      assert.match(g.evidence, /EA has not|not an EA visit/);
      const current = publicGuides.filter((p) =>
        canPublishGuide(p, "2026-10-27"),
      );
      const related = connectedExperiences(g, current, 3);
      assert.ok(related.length);
      if (
        current.some(
          (p) =>
            p.id !== g.id &&
            p.countrySlug === g.countrySlug &&
            p.regionSlug === g.regionSlug,
        )
      )
        assert.equal(related[0].scope, "same_area", slug);
    }
  }
  const release = publishedReleases(publicGuides, "2026-10-27")[0];
  assert.equal(release.guides.length, 36);
});

test("all new photographs are local, visually reviewed and honestly credited", () => {
  const photos = guideBatch58.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  for (const g of guideBatch58) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.equal(m.visualReview.outcome, "approved");
    assert.doesNotMatch(m.src, /chatgpt|generated/i);
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
});

test("new practical boundaries preserve closures, programme distinctions and uncertainty", () => {
  const g = (id: string) => guideBatch58.find((g) => g.id === id)!;
  assert.match(
    g("singapore-chinese-garden-pause").responsibility,
    /Waterwall Court.*closed/,
  );
  assert.match(
    g("kyoto-murinan-water-garden").responsibility,
    /9 December 2026/,
  );
  assert.match(
    g("vienna-amalienbad-swim").responsibility,
    /diving tower is for schools and clubs only/,
  );
  assert.match(g("hanoi-binh-minh-jazz").responsibility, /cover charge/);
  assert.match(
    g("vienna-porgy-bess-listening").responsibility,
    /Photography and filming are prohibited/,
  );
  assert.match(g("kuala-lumpur-batik-boutique").responsibility, /two weeks/);
  assert.equal(g("new-york-transit-museum-cars").regionSlug, "new-york-city");
  assert.equal(
    g("osaka-housing-living-street").guideReview!.reviewBy,
    "2026-11-26",
  );
});
