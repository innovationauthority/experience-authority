import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch50 } from "../src/lib/guide-batch-50";
import {
  edition20261021SecondPass,
  discoveryBatch50,
} from "../src/lib/discovery-batch-50";
import { discoveryEdition50 } from "../src/lib/daily-discovery-batch-50";
import { discoveryEdition49 } from "../src/lib/daily-discovery-batch-49";
import { dailyDiscoveries } from "../src/lib/daily-discovery";
import { publicGuides } from "../src/lib/public-guides";
import {
  interests,
  matchesInterest,
  connectedExperiences,
  regionsForCountry,
} from "../src/lib/catalog";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor, imageCreditText } from "../src/lib/media";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { cityChapters, resolveCityChapters } from "../src/lib/city-chapters";
import { guideReleases, publishedReleases } from "../src/lib/releases";

test("the second 21 October pass adds eighteen new experiences, exactly three per primary area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021SecondPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch50.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021SecondPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 424);
  for (const [area, allocated] of Object.entries(edition20261021SecondPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch50.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-21"));
      assert.ok(!canPublishGuide(g, "2026-10-20"));
      assert.ok(
        !earlier.some(
          (p) =>
            p.id === g.id ||
            p.slug === slug ||
            p.guideReview!.accessUrl === g.guideReview!.accessUrl,
        ),
        slug,
      );
      assert.equal(g.guideReview!.requiresSpecialPermission, false);
      assert.ok(new Set(g.guideReview!.sources.map((s) => s.url)).size >= 2);
      assert.match(g.evidence, /EA has not/);
      assert.ok(discoveryBatch50[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
        slug,
      );
      const prose = [
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
      ].join(" ");
      assert.doesNotMatch(prose, /[;—]/);
      assert.ok(prose.split(/\s+/).length >= 250, slug);
    }
  }
  assert.equal(publicGuides.length, 442);
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-21")).length,
    428,
  );
});

test("all eighteen photographs remain attributable, real and tied to the exact place or a disclosed historical context", () => {
  const photos = guideBatch50.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    16,
  );
  for (const g of guideBatch50) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
      g.id,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.ok(imageCreditText(m).trim());
    assert.match(m.sourceUrl, /^https:\/\//);
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
  assert.match(guideMediaFor("kyoto-yamamoto-roketsu")!.depiction, /2006/);
  assert.match(
    guideMediaFor("kyoto-yamamoto-roketsu")!.depiction,
    /rather than a photograph of the current/,
  );
  assert.match(
    guideMediaFor("ponikla-rautis-bead-ornament")!.depiction,
    /not promised as hands-on visitor tasks/,
  );
  assert.match(
    guideMediaFor("berlin-museum-der-dinge")!.visualReview.rationale,
    /expressly forbids/,
  );
});

test("critical visitor-role, date, venue and access boundaries are not lost in inspiring copy", () => {
  const byId = (id: string) => guideBatch50.find((g) => g.id === id)!;
  assert.match(
    byId("montreal-jean-talon-market").responsibility,
    /19 to 23 October 2026/,
  );
  assert.match(
    byId("naples-avpn-pizza-day").responsibility,
    /age bands start at five/,
  );
  assert.match(
    byId("lisbon-conserveira-counter").responsibility,
    /not a guaranteed on-site tasting/,
  );
  assert.match(
    byId("ponikla-rautis-bead-ornament").kernel,
    /not blowing glass/,
  );
  assert.match(
    byId("prague-truhlar-marionette").kernel,
    /prepared turned-wood components/,
  );
  assert.match(
    byId("kyoto-yamamoto-roketsu").responsibility,
    /Wednesday as closed/,
  );
  assert.match(
    byId("paris-canauxrama-saint-martin").responsibility,
    /one-way itinerary/,
  );
  assert.match(byId("melbourne-city-circle-tram").responsibility, /clockwise/);
  assert.match(
    byId("wellington-kelburn-cable-car").responsibility,
    /flashing light displays/,
  );
  assert.match(
    byId("london-leighton-house").responsibility,
    /14 and 15 November 2026/,
  );
  assert.match(
    byId("rome-museo-delle-mura").responsibility,
    /not accessible to visitors with mobility disabilities/,
  );
  assert.match(
    byId("berlin-museum-der-dinge").responsibility,
    /Leipziger Straße 54/,
  );
  assert.match(
    byId("new-york-met-cloisters-pause").rootedness,
    /modern New York museum/,
  );
  assert.match(
    byId("lisbon-estufa-fria-pause").rootedness,
    /not a promise of a fixed cool temperature/,
  );
  assert.match(
    byId("copenhagen-glyptotek-winter-garden").responsibility,
    /last Wednesday/,
  );
  assert.match(byId("ghent-sunday-carillon").responsibility, /11:00 to 12:00/);
  assert.match(
    byId("dublin-ifi-archive-lunchtime").responsibility,
    /26 October at 11:45/,
  );
  assert.ok(
    !canPublishGuide(byId("dublin-ifi-archive-lunchtime"), "2026-10-28"),
  );
  assert.ok(!canPublishGuide(byId("amsterdam-bimhuis-concert"), "2026-11-05"));
});

test("Prague and Montréal become useful complete local chapters without reopening expired guides", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(cityChapters.length, 45);
  assert.equal(chapters.length, 44);
  assert.equal(chapters.find((c) => c.slug === "prague")!.stops.length, 3);
  assert.equal(chapters.find((c) => c.slug === "montreal")!.stops.length, 2);
  for (const name of ["prague", "montreal"]) {
    const c = chapters.find((c) => c.slug === name)!;
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2);
    assert.match(c.planning, /separate/);
    assert.ok(
      !resolveCityChapters(
        current.filter((g) => g.slug !== c.stops[0].slug),
      ).some((x) => x.slug === name),
    );
  }
  assert.ok(!chapters.some((c) => c.slug === "valencia"));
  assert.equal(
    regionsForCountry("czechia", current).find((r) => r.slug === "ponikla")
      ?.name,
    "Poniklá",
  );
  assert.equal(
    regionsForCountry("new-zealand", current).find(
      (r) => r.slug === "wellington",
    )?.name,
    "Wellington",
  );
  assert.equal(
    regionsForCountry("belgium", current).find((r) => r.slug === "ghent")?.name,
    "Ghent",
  );
  assert.equal(
    regionsForCountry("canada", current).find((r) => r.slug === "montreal")
      ?.name,
    "Montréal",
  );
  for (const g of guideBatch50) {
    const related = connectedExperiences(g, current, 3);
    assert.ok(related.length > 0, g.id);
    if (
      current.some(
        (p) =>
          p.id !== g.id &&
          p.countrySlug === g.countrySlug &&
          p.regionSlug === g.regionSlug,
      )
    )
      assert.equal(related[0].scope, "same_area", g.id);
  }
});

test("six new future discoveries preserve all earlier authored angles and avoid short-lived programme promises", () => {
  assert.equal(discoveryEdition50.length, 6);
  for (const d of discoveryEdition50) {
    assert.ok(d.date >= "2026-12-08" && d.date <= "2026-12-13");
    assert.ok(d.angle.length > 180);
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
    assert.ok(
      canPublishGuide(
        guideBatch50.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
  }
  for (const d of discoveryEdition49)
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.slug)).size,
    dailyDiscoveries.length,
  );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.date)).size,
    dailyDiscoveries.length,
  );
  const wax = discoveryEdition50.find(
    (d) => d.slug === "draw-kyoto-in-wax-before-the-indigo-arrives",
  )!;
  assert.notEqual(new Date(wax.date + "T12:00:00Z").getUTCDay(), 3);
});

test("same-day passes merge into one honest same-day release", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 126);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 126);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
});
