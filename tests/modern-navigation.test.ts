import test from "node:test";
import assert from "node:assert/strict";
import {
  browseInterests,
  interests,
  interestForSlug,
  matchesInterest,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { matchesFinder } from "../src/lib/experience-finder";
import { toCardExperience } from "../src/lib/catalog-projections";

test("visitor interests are populated and preserve historical discovery links", () => {
  const live = publicGuides.filter((g) => canPublishGuide(g, "2026-11-01"));
  assert.equal(browseInterests.length, 8);
  assert.equal(interests.length, 6);
  for (const interest of browseInterests)
    assert.ok(
      live.some((g) => matchesInterest(g, interest)),
      interest.slug,
    );
  for (const guide of live)
    assert.ok(
      browseInterests.some((i) => matchesInterest(guide, i)),
      guide.slug,
    );
  for (const legacy of interests) {
    assert.ok(interestForSlug(legacy.slug));
    for (const guide of publicGuides)
      assert.equal(
        matchesFinder(guide, { interest: legacy.slug }),
        matchesInterest(guide, legacy),
      );
  }
});

test("design guides have consistent card labels and do not turn every museum into innovation", () => {
  const turin = publicGuides.find(
    (g) => g.slug === "read-a-century-of-car-design-in-turin",
  )!;
  const bologna = publicGuides.find(
    (g) => g.slug === "read-a-bologna-lecture-room-carved-in-wood",
  )!;
  assert.equal(matchesFinder(turin, { interest: "design-innovation" }), true);
  assert.equal(toCardExperience(turin).category, "Design & innovation");
  assert.equal(
    matchesFinder(bologna, { interest: "design-innovation" }),
    false,
  );
  assert.equal(matchesFinder(bologna, { interest: "art-culture" }), true);
});
