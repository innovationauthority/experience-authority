import test from "node:test";
import assert from "node:assert/strict";
import { mergeTripStops, type Trip } from "../src/lib/trip";
import { publicGuides } from "../src/lib/public-guides";
import {
  chapterHref,
  chapterDestinationCount,
  cityChapters,
  resolveCityChapters,
} from "../src/lib/city-chapters";
import { chapterStartingPoints } from "../src/lib/chapter-starting-points";
import { destinationCoverage } from "../src/lib/destinations";
import {
  availableDiscoveries,
  currentDiscovery,
  dailyDiscoveries,
} from "../src/lib/daily-discovery";
import { sitemapEntries } from "../src/lib/discovery";

test("adding a chapter preserves existing private work and accepts only explicit eligible days", () => {
  const trip: Trip = {
    name: "Private name",
    logistics: "Private travel note",
    entries: [
      { id: "withdrawn-guide", day: 8, stage: "arranged", note: "Keep this" },
      { id: "existing-guide", day: 2, stage: "checking", note: "My question" },
    ],
  };
  const next = mergeTripStops(
    trip,
    [
      { id: "existing-guide", day: 1 },
      { id: "new-guide", day: 3 },
      { id: "new-guide", day: 4 },
      { id: "bad-day", day: 0 },
      { id: "fractional", day: 1.5 },
      { id: "unknown-guide", day: 2 },
      { id: "constructor", day: 1 },
    ],
    ["existing-guide", "new-guide", "bad-day", "fractional", "constructor"],
  );
  assert.deepEqual(next.entries.slice(0, 2), trip.entries);
  assert.equal(next.name, trip.name);
  assert.equal(next.logistics, trip.logistics);
  assert.deepEqual(next.entries[2], {
    id: "new-guide",
    day: 3,
    note: "",
    stage: "idea",
  });
  assert.equal(next.entries.length, 3);
  assert.equal(trip.entries.length, 2);
  assert.deepEqual(
    mergeTripStops(next, [{ id: "new-guide", day: 6 }], ["new-guide"]),
    next,
  );
  const full = {
    ...trip,
    entries: Array.from({ length: 100 }, (_, i) => ({
      id: `stop-${i}`,
      day: 1,
      note: "",
    })),
  };
  assert.equal(
    mergeTripStops(full, [{ id: "new-guide", day: 1 }], ["new-guide"]).entries
      .length,
    100,
  );
});

test("Porto and Gaia has an exact area route, coverage count and sitemap entry", () => {
  const chapter = cityChapters.find(
    (entry) => entry.slug === "porto-and-gaia",
  )!;
  assert.equal(
    chapterHref(chapter).split("#")[0],
    "/places/portugal/porto-and-gaia",
  );
  const coverage = destinationCoverage(
    publicGuides,
    chapter.country,
    chapter.regions,
  );
  assert.equal(
    coverage.local.length,
    chapterDestinationCount(chapter, publicGuides),
  );
  assert.ok(
    coverage.local.every((item) => chapter.regions.includes(item.regionSlug)),
  );
  assert.ok(
    coverage.elsewhere.every(
      (item) => !chapter.regions.includes(item.regionSlug),
    ),
  );
  const sitemap = sitemapEntries(publicGuides, {
    NODE_ENV: "production",
    EA_SITE_URL: "https://experienceauthority.com",
    EA_LAUNCH_READY: "true",
    EA_INDEXING_ENABLED: "true",
  });
  assert.ok(
    sitemap.some(
      (entry) =>
        entry.url ===
        "https://experienceauthority.com/places/portugal/porto-and-gaia",
    ),
  );
});

test("starter previews use only eligible authored chapter stops", () => {
  for (const chapter of resolveCityChapters(publicGuides)) {
    const starters = chapterStartingPoints(chapter);
    assert.ok(starters.length > 0 && starters.length <= 3);
    assert.ok(
      starters.every((choice) =>
        chapter.stops.some((stop) => stop.item.id === choice.item.id),
      ),
    );
  }
  const singapore = resolveCityChapters(publicGuides).find(
    (entry) => entry.slug === "singapore",
  )!;
  assert.match(
    chapterStartingPoints(singapore).at(-1)!.note,
    /separate outings/,
  );
});

test("Daily discovery follows dates rather than batch import order and omits unavailable references", () => {
  const entries = availableDiscoveries(publicGuides, "2027-12-31");
  assert.deepEqual(
    entries.map((entry) => entry.date),
    entries.map((entry) => entry.date).sort(),
  );
  const newest = entries.at(-1)!;
  assert.equal(currentDiscovery(publicGuides, "2027-12-31")?.date, newest.date);
  const removed = publicGuides.filter((item) => item.slug !== newest.slug);
  assert.notEqual(currentDiscovery(removed, "2027-12-31")?.slug, newest.slug);
  const date = dailyDiscoveries[1].date;
  assert.ok(
    availableDiscoveries(publicGuides, date).every(
      (entry) => entry.date <= date,
    ),
  );
  assert.equal(
    currentDiscovery(publicGuides, dailyDiscoveries[0].date)?.date,
    dailyDiscoveries[0].date,
  );
});
