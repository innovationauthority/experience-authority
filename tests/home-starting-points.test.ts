import test from "node:test";
import assert from "node:assert/strict";
import { selectHomeStartingPoints } from "../src/lib/home-starting-points";
import { publicGuides } from "../src/lib/public-guides";

test("empty home search offers five different places and countries", () => {
  const choices = selectHomeStartingPoints(publicGuides, 5, () => 0.42);
  assert.equal(choices.length, 5);
  assert.equal(new Set(choices.map((item) => item.place)).size, 5);
  assert.equal(new Set(choices.map((item) => item.country)).size, 5);
});

test("different draws do not permanently privilege one destination", () => {
  const first = selectHomeStartingPoints(publicGuides, 5, () => 0.02);
  const second = selectHomeStartingPoints(publicGuides, 5, () => 0.91);
  assert.notDeepEqual(
    first.map((item) => item.slug),
    second.map((item) => item.slug),
  );
  assert.ok(!first.every((item) => item.place === "Istanbul"));
  assert.ok(!second.every((item) => item.place === "Istanbul"));
});

test("starting points retain familiar entries before broader discoveries", () => {
  const items = [
    { slug: "a-bowl-of-attention", place: "Kyoto", country: "Japan" },
    {
      slug: "a-morning-at-the-hawker-table",
      place: "Singapore",
      country: "Singapore",
    },
    {
      slug: "taste-what-time-does-to-port",
      place: "Gaia",
      country: "Portugal",
    },
    { slug: "unexpected", place: "Ambalavao", country: "Madagascar" },
    { slug: "another", place: "Mutalau", country: "Niue" },
  ];
  const choices = selectHomeStartingPoints(items, 5, () => 0.42);
  assert.deepEqual(
    new Set(choices.slice(0, 3).map((item) => item.slug)),
    new Set(items.slice(0, 3).map((item) => item.slug)),
  );
  assert.equal(choices.length, 5);
  assert.deepEqual(selectHomeStartingPoints(items, 0), []);
});
