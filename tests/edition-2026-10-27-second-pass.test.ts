import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch59 } from "../src/lib/guide-batch-59";
import {
  edition20261027SecondPass,
  discoveryBatch59,
} from "../src/lib/discovery-batch-59";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor, imageCreditText } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { publishedReleases } from "../src/lib/releases";

test("27 October second pass adds eighteen net-new guides, three per primary area", () => {
  const slugs = Object.values(
    edition20261027SecondPass,
  ).flat() as readonly string[];
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.equal(publicGuides.length, 532);
  assert.deepEqual([...slugs].sort(), guideBatch59.map((g) => g.slug).sort());
  const previous = publicGuides.filter(
    (g) => !slugs.includes(g.slug) && g.guideReview!.checkedOn <= "2026-10-27",
  );
  assert.equal(previous.length, 496);
  assert.deepEqual(
    Object.keys(edition20261027SecondPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-27"));
  assert.equal(current.length, 490);
  for (const [area, allocated] of Object.entries(edition20261027SecondPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch59.find((g) => g.slug === slug)!;
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
      assert.ok(discoveryBatch59[slug]);
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
      assert.match(g.evidence, /EA has not/);
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
  for (const slug of slugs)
    assert.ok(release.guides.some((g) => g.slug === slug));
});

test("second-pass photos are reviewed real local images with transparent rights and attribution", () => {
  const photos = guideBatch59.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  for (const g of guideBatch59) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.equal(m.visualReview.outcome, "approved");
    assert.ok(
      imageCreditText(m).split("Wikimedia Commons").length <= 2,
      "Source appears once in the rendered credit",
    );
    assert.doesNotMatch(m.src, /chatgpt|generated/i);
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
});

test("second-pass visitor boundaries preserve closures, age and language limits and the future concert season", () => {
  const g = (id: string) => guideBatch59.find((g) => g.id === id)!;
  assert.match(
    g("amsterdam-het-schip-housing").responsibility,
    /Tuesday 3 November 2026/,
  );
  assert.match(g("kanazawa-tsuda-mizuhiki").responsibility, /two to nine/);
  assert.match(
    g("paris-coulee-verte-walk").responsibility,
    /lifts.*out of service/,
  );
  assert.match(
    g("lyon-guignol-puppet-audience").responsibility,
    /Salle Gnafron is not wheelchair accessible/,
  );
  assert.match(
    g("helsinki-winter-garden-pause").responsibility,
    /Fridays closed/,
  );
  assert.match(
    g("cape-town-kirstenbosch-sunset-concert").rootedness,
    /22 November 2026 to 28 March 2027/,
  );
  assert.match(
    g("cape-town-kirstenbosch-sunset-concert").responsibility,
    /upcoming summer season/,
  );
  assert.match(g("barcelona-liceu-opera-evening").responsibility, /under-35/);
  assert.match(
    g("budapest-szamos-chocolate-decoration").responsibility,
    /language/i,
  );
  assert.match(
    g("valencia-albufera-day-boat").responsibility,
    /not the longer sunset/,
  );
});
