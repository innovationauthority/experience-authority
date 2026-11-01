import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch62 } from "../src/lib/guide-batch-62";
import { edition20261101SecondPass } from "../src/lib/discovery-batch-62";
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
test("second November pass adds sixteen unique guides, two per current visitor category", () => {
  const slugs = Object.values(edition20261101SecondPass).flat();
  assert.equal(slugs.length, 16);
  assert.equal(new Set(slugs).size, 16);
  assert.deepEqual(
    Object.keys(edition20261101SecondPass).sort(),
    browseInterests.map((i) => i.slug).sort(),
  );
  for (const [area, members] of Object.entries(edition20261101SecondPass)) {
    assert.equal(members.length, 2);
    for (const slug of members) {
      const g = guideBatch62.find((g) => g.slug === slug)!;
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
test("dated exhibition expires and regional discovery preserves Geneva identity", () => {
  const nxt = guideBatch62.find((g) => g.id === "amsterdam-nxt-pioneers")!;
  assert.equal(canPublishGuide(nxt, "2027-01-11"), false);
  assert.equal(
    regionDisplayName("switzerland", "geneva", "Meyrin, CERN"),
    "Geneva",
  );
  const rca = guideMediaFor("nashville-rca-studio-b")!;
  assert.equal(rca.rightsBasis, "documented_license");
  assert.match(rca.photographer, /Doug Force/);
});
