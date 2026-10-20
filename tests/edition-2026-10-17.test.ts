import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch46 } from "../src/lib/guide-batch-46";
import {
  edition20261017,
  discoveryBatch46,
} from "../src/lib/discovery-batch-46";
import { discoveryEdition46 } from "../src/lib/daily-discovery-batch-46";
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
import { guideMediaFor, imageCreditText } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { resolveCityChapters } from "../src/lib/city-chapters";
import { publishedReleases, guideReleases } from "../src/lib/releases";

test("17 October adds eighteen genuinely new guides and three primary allocations in all six areas", () => {
  const slugs = Object.values(edition20261017).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch46.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261017).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const thisOrFuture = new Set<string>(
    guideReleases
      .filter((r) => r.date >= "2026-10-17")
      .flatMap((r) => [...r.slugs]),
  );
  const earlier = publicGuides.filter((g) => !thisOrFuture.has(g.slug));
  assert.equal(earlier.length, 262);
  for (const [area, allocated] of Object.entries(edition20261017)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch46.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-17"), slug);
      assert.ok(!canPublishGuide(g, "2026-10-16"));
      assert.ok(
        !earlier.some(
          (p) =>
            p.id === g.id ||
            p.slug === g.slug ||
            p.guideReview!.accessUrl === g.guideReview!.accessUrl,
        ),
        slug,
      );
      assert.equal(g.guideReview!.requiresSpecialPermission, false);
      assert.ok(new Set(g.guideReview!.sources.map((s) => s.url)).size >= 2);
      assert.ok(discoveryBatch46[slug]);
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
      const m = guideMediaFor(g.id)!;
      assert.equal(g.image, m.src);
      assert.ok(m.visualReview.rationale.length > 80);
      assert.ok(
        statSync(new URL(`../public${m.src}`, import.meta.url)).size > 10000,
      );
      assert.ok(imageCreditText(m).trim());
      if (m.sourceUrl.includes("commons.wikimedia.org"))
        assert.ok(imageCreditText(m).endsWith(" / Wikimedia Commons"));
    }
  }
  assert.equal(
    guideBatch46.filter(
      (g) => guideMediaFor(g.id)!.rightsBasis === "documented_license",
    ).length,
    8,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-17")[0].guides.length,
    18,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-16")[0].date,
    "2026-10-14",
  );
});

test("precise programme distinctions and current exceptions survive publication", () => {
  const byId = (id: string) => guideBatch46.find((g) => g.id === id)!;
  assert.match(
    byId("valencia-my-first-paella").responsibility,
    /market closes on Sundays/,
  );
  assert.match(byId("marrakech-amal").responsibility, /conflicts/);
  assert.match(byId("kuala-lumpur-pewter").responsibility, /under twelve/);
  assert.match(byId("bagru-qala").kernel, /observation-only/);
  assert.match(
    byId("london-lcba-foundation").responsibility,
    /three-day commitment/,
  );
  assert.match(byId("melbourne-lake-punt").kernel, /not to learn to punt/);
  assert.match(
    byId("naples-pietrarsa").responsibility,
    /28 and 29 October 2026/,
  );
  assert.match(
    byId("athens-snfcc-tour").responsibility,
    /paid seventy-five-minute/,
  );
  assert.match(byId("paris-salle-ovale").responsibility, /20 October 2026/);
  assert.match(
    byId("london-chelsea-physic").responsibility,
    /closes on Saturdays/,
  );
  assert.match(
    byId("cape-town-athletic-jazz").evidence,
    /no specific future lineup/i,
  );
  assert.equal(canPublishGuide(byId("athens-snfcc-tour"), "2026-10-31"), false);
  assert.equal(
    canPublishGuide(byId("naples-napulitanata"), "2026-11-01"),
    false,
  );
});

test("new local chapters and existing chapters connect distinct roles without fictional packages", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-20"));
  const chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 28);
  for (const slug of ["valencia", "naples"]) {
    const c = chapters.find((c) => c.slug === slug)!;
    assert.equal(c.stops.length, 3);
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2);
    assert.match(c.planning, /No combined/);
  }
  assert.equal(chapters.find((c) => c.slug === "london")!.stops.length, 7);
  assert.equal(chapters.find((c) => c.slug === "paris")!.stops.length, 7);
  for (const id of [
    "valencia-my-first-paella",
    "naples-pietrarsa",
    "paris-salle-ovale",
    "london-thames-riverbus",
  ]) {
    assert.equal(
      connectedExperiences(
        guideBatch46.find((g) => g.id === id)!,
        current,
      )[0].scope,
      "same_area",
    );
  }
});

test("six new future discoveries preserve both preceding editions and remain inside evidence windows", () => {
  assert.equal(discoveryEdition46.length, 6);
  for (const d of discoveryEdition46) {
    assert.ok(d.date > "2026-11-13");
    assert.ok(d.angle.length > 180);
    assert.ok(
      canPublishGuide(
        guideBatch46.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  }
  for (const d of [...discoveryEdition44, ...discoveryEdition45])
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.slug)).size,
    dailyDiscoveries.length,
  );
});
