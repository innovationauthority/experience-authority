import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch63 } from "../src/lib/guide-batch-63";
import { edition20261101ThirdPass } from "../src/lib/discovery-batch-63";
import {
  browseInterests,
  matchesInterest,
  regionDisplayName,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { guideMediaFor } from "../src/lib/media";
import { canPublishGuide } from "../src/lib/publication";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { guideReleases } from "../src/lib/releases";
test("third November pass adds sixteen unique guides, two per current visitor category", () => {
  const slugs = Object.values(edition20261101ThirdPass).flat();
  assert.equal(slugs.length, 16);
  assert.equal(new Set(slugs).size, 16);
  assert.deepEqual(
    Object.keys(edition20261101ThirdPass).sort(),
    browseInterests.map((i) => i.slug).sort(),
  );
  for (const [area, members] of Object.entries(edition20261101ThirdPass)) {
    assert.equal(members.length, 2);
    for (const slug of members) {
      const g = guideBatch63.find((g) => g.slug === slug)!;
      assert.ok(g, slug);
      assert.equal(publicGuides.filter((x) => x.slug === slug).length, 1);
      assert.ok(
        matchesInterest(
          g,
          browseInterests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-11-01"), slug);
      assert.ok(g.guideReview!.sources.length >= 2);
      assert.ok(guideMediaFor(g.id)?.visualReview.outcome === "approved");
      assert.ok(
        editorialPathways.some((p) => p.guideSlugs.some((s) => s === slug)),
      );
      assert.equal(
        guideReleases.filter((r) => r.slugs.some((s) => s === slug)).length,
        1,
      );
    }
  }
});
test("temporary Matisse guide expires and licensed garden photographs retain attribution", () => {
  const g = guideBatch63.find((g) => g.id === "bordeaux-bassins-matisse")!;
  assert.equal(canPublishGuide(g, "2026-12-02"), false);
  for (const id of ["london-kew-treetops", "paarl-babylonstoren-garden"])
    assert.equal(guideMediaFor(id)!.rightsBasis, "documented_license");
});
