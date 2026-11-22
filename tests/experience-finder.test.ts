import test from "node:test";
import assert from "node:assert/strict";
import {
  matchesFinder,
  finderUrl,
  compassReturnHref,
} from "../src/lib/experience-finder";
import { publicGuides } from "../src/lib/public-guides";

test("discovery matches multiword intent and accents while intersecting participation, place and time", () => {
  const kyoto = publicGuides.find(
    (item) => item.slug === "a-bowl-of-attention",
  )!;
  assert.ok(
    matchesFinder(kyoto, {
      q: "Kyoto tea",
      mode: "hands-on",
      time: "short",
      place: "japan",
    }),
  );
  assert.ok(!matchesFinder(kyoto, { q: "Kyoto tea", place: "italy" }));
  assert.ok(!matchesFinder(kyoto, { q: "Kyoto", time: "half-day" }));
  const pool = publicGuides.find(
    (item) => item.slug === "a-city-in-the-water",
  )!;
  assert.ok(matchesFinder(pool, { q: "reykjavik swimming", time: "own-pace" }));
  assert.ok(!matchesFinder(pool, { q: "reykjavik surfing" }));
  const halloumi = publicGuides.find(
    (item) => item.slug === "make-halloumi-before-it-reaches-the-plate",
  )!;
  assert.ok(matchesFinder(halloumi, { q: "halloumi", time: "full-day" }));
  assert.ok(!matchesFinder(halloumi, { q: "halloumi", time: "half-day" }));
  const tunnel = publicGuides.find(
    (item) => item.slug === "antwerp-sint-annatunnel-wooden-escalators",
  )!;
  assert.ok(matchesFinder(tunnel, { q: "Antwerp", time: "short" }));
  assert.ok(!matchesFinder(tunnel, { mode: "outdoors" }));
});
test("finder links preserve combined choices and escape user queries", () => {
  const href = finderUrl({
    q: " tea & <script> ",
    mode: "hands-on",
    place: "japan",
    view: "list",
  });
  assert.equal(
    new URL(href, "https://experienceauthority.com").searchParams.get("q"),
    "tea & <script>",
  );
  assert.equal(
    new URL(href, "https://experienceauthority.com").searchParams.get("mode"),
    "hands-on",
  );
  assert.equal(finderUrl({ q: " ", view: "grid" }), "/explore");
});

test("a guide can return to the exact Compass search using a safe local result link", () => {
  const from =
    finderUrl({
      q: "Antwerp & café",
      place: "belgium",
      region: "antwerp",
      view: "list",
    }) + "#compass-results";
  assert.equal(compassReturnHref(from), from);
  assert.equal(
    compassReturnHref("/explore?unknown=1&q=tea#compass-results"),
    "/explore?q=tea#compass-results",
  );
  assert.equal(
    compassReturnHref("/explore#compass-results"),
    "/explore#compass-results",
  );
  assert.equal(
    compassReturnHref("//example.org/explore#compass-results"),
    undefined,
  );
  assert.equal(compassReturnHref("/explore/other#compass-results"), undefined);
  assert.equal(compassReturnHref("/explore#another-anchor"), undefined);
  assert.equal(compassReturnHref([from, from]), undefined);
});
