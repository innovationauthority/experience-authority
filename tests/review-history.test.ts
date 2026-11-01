import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";

test("renewal preserves historical eligibility without reviving expired current evidence", () => {
 for (const slug of ["swim-a-sydney-harbour-length", "make-room-for-a-cape-town-jazz-set"]) {
  const guide = publicGuides.find(g => g.slug === slug)!;
  assert.ok(canPublishGuide(guide, "2026-10-20"));
  assert.ok(canPublishGuide(guide, "2026-11-01"));
  assert.ok(!canPublishGuide(guide, "2026-11-16"));
  assert.ok(!canPublishGuide(guide, "2026-09-01"));
  assert.equal(guide.guideReview!.checkedOn, "2026-11-01");
 }
});
