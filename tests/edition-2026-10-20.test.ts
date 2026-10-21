import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch47 } from "../src/lib/guide-batch-47";
import {
  edition20261020,
  discoveryBatch47,
} from "../src/lib/discovery-batch-47";
import { discoveryEdition47 } from "../src/lib/daily-discovery-batch-47";
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

test("20 October adds eighteen genuinely new guides and three primary allocations in all six areas", () => {
  const slugs = Object.values(edition20261020).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch47.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261020).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const thisOrFuture = new Set<string>(
    guideReleases
      .filter((r) => r.date >= "2026-10-20")
      .flatMap((r) => [...r.slugs]),
  );
  const earlier = publicGuides.filter((g) => !thisOrFuture.has(g.slug));
  assert.equal(earlier.length, 280);
  for (const [area, allocated] of Object.entries(edition20261020)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch47.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-20"), slug);
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
      assert.ok(discoveryBatch47[slug]);
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
    guideBatch47.filter(
      (g) => guideMediaFor(g.id)!.rightsBasis === "documented_license",
    ).length,
    8,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-19")[0].date,
    "2026-10-17",
  );
});

test("programme boundaries keep the actual role, branch, season and conditions visible", () => {
  const byId = (id: string) => guideBatch47.find((g) => g.id === id)!;
  assert.match(byId("athens-greek-kitchen").rootedness, /bought ready-made/);
  assert.match(
    byId("taipei-cookinn-dumplings").responsibility,
    /four-person minimum/,
  );
  assert.match(byId("taipei-cookinn-dumplings").access, /actual branch/);
  assert.match(
    byId("palermo-streaty-markets").responsibility,
    /not suitable for vegans/,
  );
  assert.match(
    byId("kyoto-kanshundo-wagashi").responsibility,
    /written material/,
  );
  assert.match(
    byId("kyoto-kanshundo-wagashi").responsibility,
    /without a lift/,
  );
  assert.match(
    byId("seoul-donglim-knots").responsibility,
    /Ordinary opening hours do not guarantee/,
  );
  assert.match(byId("dublin-claddagh-ring").kernel, /demonstration/);
  assert.match(
    byId("copenhagen-goboat-classic").access,
    /not a shared-seat cruise/,
  );
  assert.match(byId("lisbon-cacilhas-ferry").responsibility, /15 October 2026/);
  assert.match(
    byId("singapore-ubin-cycle").responsibility,
    /excludes the technical Ketam/,
  );
  assert.match(
    byId("singapore-ubin-cycle").responsibility,
    /guided wetlands tour is suspended/,
  );
  assert.match(byId("barcelona-palau-guided").participation, /not a concert/);
  assert.match(byId("vienna-globe-museum").kernel, /do not touch or turn/);
  assert.match(
    byId("helsinki-aalto-house").responsibility,
    /Studio Aalto is a separate site/,
  );
  assert.match(
    byId("buenos-aires-botanical-pause").responsibility,
    /Mondays are closed/,
  );
  assert.match(
    byId("granada-hammam-water").rootedness,
    /contemporary commercial/,
  );
  assert.match(
    byId("rio-carioca-samba").responsibility,
    /Portuguese show calendar/,
  );
  assert.match(
    byId("buenos-aires-bomba-tiempo").responsibility,
    /adults eighteen and over/,
  );
  assert.match(
    byId("porto-casa-musica-concert").responsibility,
    /separate products/,
  );
  assert.equal(
    canPublishGuide(byId("buenos-aires-bomba-tiempo"), "2026-11-04"),
    false,
  );
  assert.equal(canPublishGuide(byId("rio-carioca-samba"), "2026-11-11"), false);
});
test("local chapters connect real choices and never fabricate a combined itinerary", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-20"));
  const chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 30);
  for (const [slug, count] of [
    ["buenos-aires", 4],
    ["rio-de-janeiro", 2],
    ["dublin", 4],
    ["taipei", 3],
  ] as const) {
    const c = chapters.find((c) => c.slug === slug)!;
    assert.equal(c.stops.length, count);
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2);
    assert.ok(
      c.stops.every(
        (s) =>
          s.item.countrySlug === c.country &&
          c.regions.includes(s.item.regionSlug),
      ),
    );
    assert.match(c.planning, /package|shared booking|shared ticket/);
  }
  assert.match(
    chapters.find((c) => c.slug === "buenos-aires")!.planning,
    /do not schedule it before a Monday/,
  );
  assert.match(
    chapters.find((c) => c.slug === "rio-de-janeiro")!.planning,
    /January 2027/,
  );
  assert.ok(
    chapters.some(
      (c) =>
        c.slug === "amsterdam-waterland" &&
        c.stops.some(
          (s) => s.slug === "find-a-church-inside-an-amsterdam-house",
        ) &&
        !c.stops.some((s) => s.slug === "follow-amsterdams-winter-ice-loop"),
    ),
    "Fresh attic-museum evidence restores the chapter without renewing expired skating",
  );
  assert.ok(
    !canPublishGuide(
      publicGuides.find((g) => g.id === "amsterdam-jaap-eden")!,
      "2026-10-20",
    ),
  );
  for (const g of guideBatch47) {
    const hasLocal = current.some(
      (other) =>
        other.id !== g.id &&
        other.countrySlug === g.countrySlug &&
        other.regionSlug === g.regionSlug,
    );
    const connection = connectedExperiences(g, current)[0];
    assert.equal(
      connection.scope,
      hasLocal ? "same_area" : "same_country",
      g.slug,
    );
    assert.equal(connection.item.countrySlug, g.countrySlug);
    if (hasLocal) assert.equal(connection.item.regionSlug, g.regionSlug);
  }
  assert.equal(publicGuides.length, 370);
  assert.equal(current.length, 305);
});
test("six future discoveries extend rather than overwrite the preceding editions", () => {
  assert.equal(discoveryEdition47.length, 6);
  for (const d of discoveryEdition47) {
    assert.ok(d.date >= "2026-11-20" && d.date <= "2026-11-25");
    assert.ok(d.angle.length > 180);
    assert.ok(
      canPublishGuide(
        guideBatch47.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  }
  for (const d of [
    ...discoveryEdition44,
    ...discoveryEdition45,
    ...discoveryEdition46,
  ])
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.slug)).size,
    dailyDiscoveries.length,
  );
});
