import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch48 } from "../src/lib/guide-batch-48";
import {
  edition20261020SecondPass,
  discoveryBatch48,
} from "../src/lib/discovery-batch-48";
import { discoveryEdition48 } from "../src/lib/daily-discovery-batch-48";
import { discoveryEdition47 } from "../src/lib/daily-discovery-batch-47";
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
import { guideReleases, publishedReleases } from "../src/lib/releases";

test("second 20 October pass adds eighteen distinct guides with three primary allocations per area", () => {
  const slugs = Object.values(edition20261020SecondPass).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch48.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261020SecondPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter(
    (g) =>
      g.guideReview!.checkedOn <= "2026-10-20" &&
      !slugs.some((s) => s === g.slug),
  );
  assert.equal(earlier.length, 298);
  for (const [area, allocated] of Object.entries(edition20261020SecondPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch48.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-20"));
      assert.ok(!canPublishGuide(g, "2026-10-19"));
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
      assert.ok(discoveryBatch48[slug]);
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
        statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
      );
      assert.ok(imageCreditText(m).trim());
    }
  }
  assert.equal(
    guideBatch48.filter(
      (g) => guideMediaFor(g.id)!.rightsBasis === "documented_license",
    ).length,
    12,
  );
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-20").length, 1);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
  assert.equal(publicGuides.length, 388);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides[0].slug,
    guideBatch48[0].slug,
  );
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-20")).length,
    305,
  );
});

test("new programme boundaries protect dates, visitor roles, access and separate products", () => {
  const byId = (id: string) => guideBatch48.find((g) => g.id === id)!;
  assert.match(
    byId("venice-camacana-mask-decoration").responsibility,
    /free reservation is not a free class/,
  );
  assert.match(
    byId("tokyo-shunkaen-bonsai-class").responsibility,
    /import permission/,
  );
  assert.equal(byId("oaxaca-tenido-mano-indigo").regionSlug, "oaxaca-city");
  assert.match(
    byId("budapest-childrens-railway").rootedness,
    /Drivers and other safety-critical staff are adults/,
  );
  assert.match(
    byId("san-francisco-cable-car").responsibility,
    /not wheelchair accessible/,
  );
  assert.match(byId("montreal-lachine-cycle").responsibility, /Des Seigneurs/);
  assert.equal(
    canPublishGuide(byId("montreal-lachine-cycle"), "2026-11-16"),
    false,
  );
  assert.match(
    byId("amsterdam-attic-church").responsibility,
    /11:30 on Wednesday 21 October/,
  );
  assert.match(
    byId("cape-town-zeitz-guided").responsibility,
    /12:30, Monday to Friday/,
  );
  assert.match(
    byId("mexico-city-anahuacalli").rootedness,
    /not an ancient temple/,
  );
  assert.match(
    byId("helsinki-oodi-reading").responsibility,
    /No library card is needed/,
  );
  assert.match(
    byId("brooklyn-japanese-garden").responsibility,
    /24 October 2026/,
  );
  assert.match(
    byId("brooklyn-japanese-garden").responsibility,
    /closed for construction/,
  );
  assert.equal(byId("brooklyn-japanese-garden").regionSlug, "new-york-city");
  assert.equal(
    canPublishGuide(byId("edinburgh-storytelling-festival"), "2026-11-01"),
    false,
  );
  assert.equal(
    canPublishGuide(byId("mexico-city-ballet-folklorico"), "2026-11-01"),
    false,
  );
  assert.match(
    byId("melbourne-jazzlab-set").responsibility,
    /ramp entrance needs advance notice/,
  );
});

test("local depth connects real choices without reopening expired evidence", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-20")),
    chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 30);
  assert.equal(chapters.find((c) => c.slug === "new-orleans")!.stops.length, 3);
  const amsterdam = chapters.find((c) => c.slug === "amsterdam-waterland")!;
  assert.ok(
    amsterdam.stops.some(
      (s) => s.slug === "find-a-church-inside-an-amsterdam-house",
    ),
  );
  assert.ok(
    !amsterdam.stops.some(
      (s) => s.slug === "follow-amsterdams-winter-ice-loop",
    ),
  );
  assert.equal(
    canPublishGuide(
      publicGuides.find((g) => g.id === "amsterdam-jaap-eden")!,
      "2026-10-20",
    ),
    false,
  );
  assert.equal(
    chapters.find((c) => c.slug === "new-york-city")!.stops.length,
    5,
  );
  assert.equal(chapters.find((c) => c.slug === "rome")!.stops.length, 4);
  for (const g of guideBatch48) {
    const related = connectedExperiences(g, current, 3);
    assert.ok(related.length > 0);
    const local = current.filter(
      (p) =>
        p.id !== g.id &&
        p.countrySlug === g.countrySlug &&
        p.regionSlug === g.regionSlug,
    );
    if (local.length) assert.equal(related[0].scope, "same_area", g.slug);
  }
});

test("six future daily angles preserve previous authored slots and remain eligible on their dates", () => {
  assert.equal(discoveryEdition48.length, 6);
  for (const d of discoveryEdition48) {
    assert.ok(d.date >= "2026-11-26" && d.date <= "2026-12-01");
    assert.ok(d.angle.length > 180);
    assert.ok(
      canPublishGuide(
        guideBatch48.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  }
  for (const d of discoveryEdition47)
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.slug)).size,
    dailyDiscoveries.length,
  );
});
