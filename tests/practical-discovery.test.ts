import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { localAreas, localTimeChoices } from "../src/lib/local-discovery";
import { cardPlanning } from "../src/lib/card-planning";
import { matchesFinder } from "../src/lib/experience-finder";
import {
  heroLeadPositions,
  heroGuideRotations,
  curateHome,
} from "../src/lib/home-curation";
import { editorialPathways } from "../src/lib/editorial-pathways";

const items = publicGuides.filter((item) =>
  canPublishGuide(item, "2026-10-27"),
);

test("local discovery counts exactly match Compass, without geography inflation", () => {
  const areas = localAreas(items);
  assert.ok(areas.length > 100);
  assert.equal(
    areas.reduce((total, area) => total + area.count, 0),
    items.length,
  );
  assert.equal(new Set(areas.map((area) => area.key)).size, areas.length);
  for (const area of areas) {
    assert.ok(area.count > 0);
    assert.equal(
      items.filter((item) =>
        matchesFinder(item, { place: area.country, region: area.region }),
      ).length,
      area.count,
    );
    for (const { value } of localTimeChoices) {
      assert.equal(
        area.times[value],
        items.filter((item) =>
          matchesFinder(item, {
            place: area.country,
            region: area.region,
            time: value,
          }),
        ).length,
      );
    }
  }
  assert.deepEqual(localAreas([]), []);
});

test("card planning reuses reviewed discovery lenses and never invents booking status", () => {
  const curry = items.find((item) => item.id === "berlin-konnopke-currywurst")!;
  assert.deepEqual(cardPlanning(curry), {
    time: "A short visit",
    mode: "Eat & drink",
  });
  assert.equal(cardPlanning({ ...curry, demo: true }), null);
  assert.equal(cardPlanning({ ...curry, status: "paused" }), null);
  assert.equal(cardPlanning({ ...curry, slug: "unreviewed-profile" }), null);
  for (const item of items)
    assert.doesNotMatch(
      JSON.stringify(cardPlanning(item)),
      /booking|reservation|available today/i,
    );
});

test("each cover lead has an explicit reviewed crop and remains an available guide", () => {
  for (const edition of heroGuideRotations) {
    assert.ok(heroLeadPositions[edition[0]]);
    assert.ok(items.some((item) => item.slug === edition[0]));
  }
  assert.equal(
    new Set(heroGuideRotations.map((edition) => edition[0])).size,
    heroGuideRotations.length,
  );
});

test("recent homepage cards mix activities as well as countries", () => {
  const home = curateHome(items, editorialPathways, undefined, "2026-10-27");
  const first = home.newGuides.slice(0, 3);
  assert.equal(first.length, 3);
  assert.equal(new Set(first.map((item) => item.countrySlug)).size, 3);
  assert.equal(new Set(first.map((item) => item.field)).size, 3);
});
