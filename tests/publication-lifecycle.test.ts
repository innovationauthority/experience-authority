import test from "node:test";
import assert from "node:assert/strict";
import { sanitizePassport } from "../src/lib/passport";
import { sanitizeTrip, tripText } from "../src/lib/trip";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import {
  toCardExperience,
  toPlanExperience,
  toPassportExperience,
} from "../src/lib/catalog-projections";
import { publisherStructuredData, websiteStructuredData } from "../src/lib/seo";
import { orderExperienceDirectory } from "../src/lib/home-curation";

test("expiry, another edit and a later renewal never erase a personal stop or Passport stage", () => {
  const item = publicGuides.find(
    (guide) => guide.slug === "give-dublin-a-glasshouse-paced-morning",
  )!;
  assert.equal(canPublishGuide(item, "2026-10-31"), true);
  assert.equal(canPublishGuide(item, "2026-11-01"), false);
  const storedPassport = {
    saved: { [item.id]: "experienced" },
    compare: [item.id],
  };
  const storedTrip = {
    name: "Dublin",
    logistics: "Train on Tuesday",
    entries: [
      {
        id: item.id,
        day: 2,
        note: "Meet my friend after lunch",
        stage: "arranged",
      },
    ],
  };
  const expired = sanitizePassport(storedPassport, []);
  assert.equal(expired.saved[item.id], "experienced");
  assert.deepEqual(expired.compare, []);
  const afterAnotherSave = sanitizePassport(
    JSON.parse(
      JSON.stringify({
        ...expired,
        saved: { ...expired.saved, other: "saved" },
      }),
    ),
    ["other"],
  );
  assert.equal(afterAnotherSave.saved[item.id], "experienced");
  const trip = sanitizeTrip(storedTrip);
  assert.deepEqual(
    sanitizeTrip(
      JSON.parse(JSON.stringify({ ...trip, name: "Dublin in spring" })),
    ).entries,
    storedTrip.entries,
  );
  const publicShare = tripText(trip, []);
  assert.ok(publicShare.includes("Day 2 | Guide currently unavailable"));
  for (const privateText of [
    item.id,
    storedTrip.name,
    storedTrip.entries[0].note,
    "I have arranged this",
    item.slug,
  ])
    assert.ok(!publicShare.includes(privateText));
  const download = tripText(trip, [], true);
  assert.ok(download.includes(storedTrip.entries[0].note));
  assert.ok(download.includes("I have arranged this"));
  assert.ok(!download.includes(`/experiences/${item.slug}`));
  // Reconnection needs only a newly eligible public item, never a private lookup.
  assert.equal(
    sanitizePassport(afterAnotherSave, [item.id]).saved[item.id],
    "experienced",
  );
  assert.ok(
    tripText(trip, [toPlanExperience(item)], true).includes(item.title),
  );
});

test("malformed local references cannot become object prototype keys or public guide URLs", () => {
  const input = JSON.parse(
    '{"saved":{"__proto__":"saved","constructor":"saved","../bad":"saved","good-id":"return-to"},"compare":["good-id"]}',
  );
  assert.deepEqual(sanitizePassport(input, []), {
    saved: { "good-id": "return-to" },
    compare: [],
  });
  assert.equal(
    sanitizeTrip({
      entries: Array.from({ length: 120 }, (_, i) => ({
        id: `guide-${i}`,
        note: "x",
        day: 1,
      })),
    }).entries.length,
    100,
  );
});

test("workspace and card projections exclude long-form copy and source ledgers", () => {
  const item = publicGuides[0];
  for (const projection of [
    toCardExperience(item),
    toPlanExperience(item),
    toPassportExperience(item),
  ]) {
    for (const key of ["kernel", "rootedness", "responsibility", "humanReturn"])
      assert.ok(!Object.hasOwn(projection, key));
    assert.ok(
      !("guideReview" in projection) ||
        !Object.hasOwn(projection.guideReview!, "sources"),
    );
  }
  assert.ok(toCardExperience(item).media?.sourceUrl);
  assert.ok(toCardExperience(item).media?.credit);
  const full = JSON.stringify(publicGuides).length;
  assert.ok(
    JSON.stringify(publicGuides.map(toPlanExperience)).length < full * 0.3,
  );
  assert.ok(
    JSON.stringify(publicGuides.map(toPassportExperience)).length < full * 0.6,
  );
});

test("EA keeps its own website entity and identifies its legal publisher", () => {
  const graph = websiteStructuredData()["@graph"];
  const legal = publisherStructuredData();
  assert.equal(legal.name, "Innovation Authority Ltd");
  assert.equal(legal.url, "https://innovationauthority.com");
  const site = graph.find((entity) => entity["@type"] === "WebSite")!;
  assert.equal(site.url, "https://experienceauthority.com");
  assert.deepEqual("publisher" in site && site.publisher, {
    "@id": legal["@id"],
  });
  assert.equal(graph.filter((entity) => entity["@type"] === "Brand").length, 1);
});

test("the daily Compass opening changes without losing or duplicating any guides", () => {
  const first = orderExperienceDirectory(publicGuides, "2026-11-01");
  const second = orderExperienceDirectory(publicGuides, "2026-11-02");
  assert.notEqual(first[0].id, second[0].id);
  assert.deepEqual(first, orderExperienceDirectory(publicGuides, "2026-11-01"));
  assert.equal(new Set(first.map((item) => item.id)).size, publicGuides.length);
  assert.deepEqual(
    new Set(first.map((item) => item.id)),
    new Set(second.map((item) => item.id)),
  );
});
