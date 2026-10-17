import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { guideBatch45 } from "../src/lib/guide-batch-45";
import {
  edition20261014,
  discoveryBatch45,
} from "../src/lib/discovery-batch-45";
import { discoveryEdition45 } from "../src/lib/daily-discovery-batch-45";
import { discoveryEdition44 } from "../src/lib/daily-discovery-batch-44";
import { dailyDiscoveries } from "../src/lib/daily-discovery";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { resolveCityChapters } from "../src/lib/city-chapters";
import { publishedReleases, guideReleases } from "../src/lib/releases";
import { imageCreditText } from "../src/lib/media";

test("14 October adds eighteen net-new guides with exactly three primary allocations per area", () => {
  const slugs = Object.values(edition20261014).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch45.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261014).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const thisOrFuture = new Set<string>(
    guideReleases
      .filter((r) => r.date >= "2026-10-14")
      .flatMap((r) => [...r.slugs]),
  );
  const earlier = publicGuides.filter((g) => !thisOrFuture.has(g.slug));
  assert.equal(earlier.length, 244, "All preceding guides remain present");
  for (const [primary, allocated] of Object.entries(edition20261014)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch45.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === primary)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-14"));
      assert.ok(!canPublishGuide(g, "2026-10-13"));
      assert.ok(
        !earlier.some(
          (p) =>
            p.id === g.id ||
            p.slug === g.slug ||
            p.guideReview!.accessUrl === g.guideReview!.accessUrl,
        ),
      );
      assert.equal(g.guideReview!.sources.length >= 2, true);
      assert.ok(discoveryBatch45[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
      );
      assert.match(g.evidence, /EA has not/);
      assert.doesNotMatch(
        [
          g.title,
          g.summary,
          g.kernel,
          g.rootedness,
          g.shift,
          g.humanReturn,
          g.responsibility,
          g.evidence,
          g.duration,
          g.participation,
          g.access,
        ].join(" "),
        /[;—]/,
      );
      assert.equal(g.image, guideMediaFor(g.id)?.src);
    }
  }
  assert.equal(
    publishedReleases(publicGuides, "2026-10-14")[0].date,
    "2026-10-14",
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-14")[0].guides.length,
    18,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-13")[0].date,
    "2026-10-07",
  );
  assert.ok(
    matchesInterest(
      guideBatch45.find((g) => g.id === "copenhagen-absalon-dinner")!,
      interests.find((i) => i.slug === "eat-drink")!,
    ),
  );
  assert.ok(
    matchesInterest(
      guideBatch45.find((g) => g.id === "lisbon-nata")!,
      interests.find((i) => i.slug === "make-learn")!,
    ),
  );
});

test("actual roles, seasonal access and uncertain conditions survive catalogue integration", () => {
  const byId = (id: string) => guideBatch45.find((g) => g.id === id)!;
  assert.match(
    byId("hoi-an-thanh-truc-lantern").responsibility,
    /prepared|Frame construction/,
  );
  assert.match(byId("lisbon-nata").responsibility, /differ on minimum/);
  assert.match(
    byId("chiang-mai-silver-ring").responsibility,
    /charged separately by weight/,
  );
  assert.match(
    byId("takaoka-nousaku").responsibility,
    /factory tour is separately reserved/,
  );
  assert.match(
    byId("auckland-cup-sailing").responsibility,
    /minimum age is ten/,
  );
  assert.match(
    byId("new-york-governors-cycle").responsibility,
    /not daily year-round/,
  );
  assert.match(byId("madrid-beti-jai").responsibility, /no visitor toilets/);
  assert.match(
    byId("mexico-city-vasconcelos-reading").responsibility,
    /return carts, not on shelves/,
  );
  assert.match(
    byId("nashville-songwriter-session").responsibility,
    /does not guarantee a programme seat/,
  );
  assert.match(
    byId("vienna-musikverein-standing").responsibility,
    /not suitable for everyone/,
  );
  assert.match(
    byId("copenhagen-absalon-dinner").responsibility,
    /not guaranteed/,
  );
  assert.match(
    guideMediaFor("penang-keng-kwee-chendul")!.depiction,
    /not a current price/,
  );
  assert.equal(
    guideBatch45.filter(
      (g) => guideMediaFor(g.id)!.rightsBasis === "documented_license",
    ).length,
    6,
  );
});

test("smoke review windows match all catalogue dates and photo credits do not repeat the source", () => {
  const windows = JSON.parse(
    readFileSync(
      new URL("../scripts/guide-review-windows.json", import.meta.url),
      "utf8",
    ),
  );
  assert.deepEqual(
    windows,
    Object.fromEntries(
      publicGuides.map((g) => [
        `/experiences/${g.slug}`,
        {
          availableFrom: [
            g.guideReview!.checkedOn,
            guideMediaFor(g.id)!.visualReview.checkedOn,
          ]
            .sort()
            .at(-1),
          reviewBy: g.guideReview!.reviewBy,
          countrySlug: g.countrySlug,
          regionSlug: g.regionSlug,
        },
      ]),
    ),
  );
  for (const g of guideBatch45) {
    const credit = imageCreditText(guideMediaFor(g.id)!);
    assert.ok((credit.match(/Wikimedia Commons/g) || []).length <= 1);
  }
});

test("future discoveries keep every preceding-edition slot and publication history intact", () => {
  assert.equal(discoveryEdition45.length, 18);
  assert.deepEqual(
    discoveryEdition45.map((d) => d.slug).sort(),
    guideBatch45.map((g) => g.slug).sort(),
  );
  for (const entry of discoveryEdition45) {
    assert.ok(entry.date > "2026-10-14");
    assert.ok(entry.angle.length > 180);
    assert.ok(
      canPublishGuide(
        guideBatch45.find((g) => g.slug === entry.slug)!,
        entry.date,
      ),
    );
    assert.ok(
      dailyDiscoveries.some(
        (d) => d.date === entry.date && d.slug === entry.slug,
      ),
    );
  }
  for (const entry of discoveryEdition44)
    assert.deepEqual(
      dailyDiscoveries.find((d) => d.date === entry.date),
      entry,
    );
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-10-13")?.slug,
    "read-a-ship-before-the-sails-arrive",
  );
});

test("local combinations provide contrasting roles without inventing shared reservations", () => {
  const chapters = resolveCityChapters(publicGuides);
  const currentChapters = resolveCityChapters(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-17")),
  );
  assert.equal(
    currentChapters.length,
    27,
    "A stale programme must not strand a city that has contrasting current alternatives",
  );
  for (const slug of ["amsterdam-waterland", "singapore", "sydney"])
    assert.ok(currentChapters.some((c) => c.slug === slug));
  for (const [slug, count] of [
    ["copenhagen", 2],
    ["dublin", 3],
    ["lisbon", 4],
    ["new-york-city", 4],
    ["vienna", 3],
    ["mexico-city", 4],
  ] as const) {
    const c = chapters.find((c) => c.slug === slug)!;
    assert.equal(c.stops.length, count);
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2);
  }
  assert.match(
    chapters.find((c) => c.slug === "copenhagen")!.planning,
    /No combined ticket/,
  );
  assert.match(
    chapters.find((c) => c.slug === "new-york-city")!.planning,
    /not on the Ellis Island ferry route/,
  );
  for (const id of [
    "lisbon-nata",
    "copenhagen-absalon-dinner",
    "dublin-glasnevin-gardens",
    "mexico-city-vasconcelos-reading",
  ]) {
    const g = guideBatch45.find((g) => g.id === id)!;
    assert.equal(connectedExperiences(g, publicGuides)[0].scope, "same_area");
  }
});
