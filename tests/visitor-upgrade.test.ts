import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { cityEdits, resolveCityEdits } from "../src/lib/city-edits";
import { heroGuideRotations } from "../src/lib/home-curation";
import {
  publishedEditorialPathways,
  getEditorialPathway,
} from "../src/lib/editorial-pathways";
import { toPlanExperience } from "../src/lib/catalog-projections";
import {
  journeyDayWarnings,
  journeySuggestions,
} from "../src/lib/journey-suggestions";
import { emptyTrip, mergeTripStops } from "../src/lib/trip";
import { modernDiscoveries } from "../src/lib/daily-modern-edit";
import {
  dailyDiscoveries,
  publishedDiscoveries,
  currentDiscovery,
} from "../src/lib/daily-discovery";
const items = publicGuides.filter((item) =>
  canPublishGuide(item, "2026-11-01"),
);
const plans = items.map(toPlanExperience);
test("each new cover combines a contemporary experience with distinct photographs", () => {
  const contemporary = new Set([
    "follow-the-art-beyond-the-room-in-tokyo",
    "let-light-change-the-room-in-miami",
    "compare-buildings-on-foot-at-the-vitra-campus",
    "follow-video-art-into-the-room-in-amsterdam",
    "walk-inside-colour-at-inhotim",
  ]);
  const slugs = heroGuideRotations.flat();
  assert.equal(new Set(slugs).size, slugs.length);
  for (const edition of heroGuideRotations) {
    assert.ok(edition.some((slug) => contemporary.has(slug)));
    for (const slug of edition)
      assert.ok(items.some((item) => item.slug === slug));
  }
});
test("six cities offer two complete local edits each and missing evidence hides the affected edit", () => {
  const edits = resolveCityEdits(items);
  assert.equal(edits.length, 12);
  for (const chapter of new Set(cityEdits.map((edit) => edit.chapter)))
    assert.equal(edits.filter((edit) => edit.chapter === chapter).length, 2);
  for (const edit of edits) {
    assert.equal(new Set(edit.stops.map((stop) => stop.slug)).size, 3);
    for (const stop of edit.stops) {
      assert.equal(stop.item.countrySlug, edit.country);
      assert.ok(edit.regions.includes(stop.item.regionSlug));
    }
  }
  const missing = edits[0].stops[0].slug;
  assert.ok(
    !resolveCityEdits(items.filter((item) => item.slug !== missing)).some(
      (edit) => edit.slug === edits[0].slug,
    ),
  );
});
test("suggestions exclude selected guides and stay in the same city or area with different interests", () => {
  const anchor = plans.find((item) => item.id === "tokyo-narisawa-satoyama")!;
  const trip = mergeTripStops(
    emptyTrip,
    [{ id: anchor.id, day: 1 }],
    plans.map((item) => item.id),
  );
  const { suggestions } = journeySuggestions(trip, plans, 1);
  assert.equal(suggestions.length, 3);
  for (const item of suggestions) {
    assert.equal(item.countrySlug, anchor.countrySlug);
    assert.equal(item.regionSlug, anchor.regionSlug);
    assert.notEqual(item.id, anchor.id);
  }
  assert.equal(new Set(suggestions.map((item) => item.category)).size, 3);
  assert.equal(journeySuggestions(trip, plans, 2).suggestions.length, 0);
  assert.equal(
    journeySuggestions(
      trip,
      plans.map((item) => ({ ...item, regionSlug: undefined })),
      1,
    ).suggestions.length,
    0,
  );
});
test("planning detects cross-area days and competing substantial visits without inventing travel times", () => {
  const trip = mergeTripStops(
    emptyTrip,
    [
      { id: "tokyo-narisawa-satoyama", day: 1 },
      { id: "uji-nintendo-big-controller", day: 1 },
    ],
    plans.map((item) => item.id),
  );
  const notes = journeyDayWarnings(trip, plans, 1);
  assert.ok(notes.some((note) => note.includes("different cities")));
  assert.ok(notes.some((note) => note.includes("substantial")));
  assert.equal(journeyDayWarnings(trip, plans, 2).length, 0);
});
test("public beginner selection is twelve hands-on choices while excluded guides remain discoverable", () => {
  const p = publishedEditorialPathways.find(
    (p) => p.slug === "the-pleasure-of-being-a-beginner",
  )!;
  assert.equal(p.guideSlugs.length, 12);
  assert.equal(getEditorialPathway(p.slug), p);
  assert.ok(
    !p.guideSlugs.some(
      (slug) =>
        slug.includes("miniature-airport") || slug.includes("giant-controller"),
    ),
  );
  assert.ok(items.some((item) => item.id === "hamburg-miniatur-airport"));
  assert.ok(items.some((item) => item.id === "uji-nintendo-big-controller"));
  for (const collection of publishedEditorialPathways)
    for (const slug of collection.guideSlugs)
      assert.ok(publicGuides.some((item) => item.slug === slug));
});
test("published discovery revision preserves history and serves seven eligible contemporary guides on their dates", () => {
  assert.equal(modernDiscoveries.length, 7);
  for (const old of dailyDiscoveries.filter((d) => d.date <= "2026-11-01"))
    assert.deepEqual(
      publishedDiscoveries.find((d) => d.date === old.date),
      old,
    );
  for (const edit of modernDiscoveries) {
    assert.ok(edit.date > "2026-11-01");
    assert.deepEqual(
      publishedDiscoveries.find((d) => d.date === edit.date),
      edit,
    );
    const available = publicGuides.filter((item) =>
      canPublishGuide(item, edit.date),
    );
    assert.equal(currentDiscovery(available, edit.date)?.slug, edit.slug);
  }
  assert.equal(
    new Set(publishedDiscoveries.map((d) => d.date)).size,
    publishedDiscoveries.length,
  );
  assert.equal(
    new Set(publishedDiscoveries.map((d) => d.slug)).size,
    publishedDiscoveries.length,
  );
});
