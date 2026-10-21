import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch51 } from "../src/lib/guide-batch-51";
import {
  discoveryBatch51,
  edition20261021ThirdPass,
} from "../src/lib/discovery-batch-51";
import { discoveryEdition51 } from "../src/lib/daily-discovery-batch-51";
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

test("third 21 October pass adds eighteen distinct guides with three in each primary area", () => {
  const slugs: readonly string[] = Object.values(
    edition20261021ThirdPass,
  ).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch51.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021ThirdPass).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter((g) => !slugs.includes(g.slug));
  assert.equal(earlier.length, 460);
  for (const [area, allocated] of Object.entries(edition20261021ThirdPass)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch51.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          g,
          interests.find((i) => i.slug === area)!,
        ),
      );
      assert.ok(canPublishGuide(g, "2026-10-21"), slug);
      assert.ok(!canPublishGuide(g, "2026-10-20"), slug);
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
      assert.ok(discoveryBatch51[slug]);
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
      assert.ok(prose.split(/\s+/).length >= 300, slug);
    }
  }
  assert.equal(publicGuides.length, 478);
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-21")).length,
    464,
  );
});
test("all eighteen new documentary photographs have explicit provenance and exact-place context", () => {
  const photos = guideBatch51.map((g) => guideMediaFor(g.id)!);
  assert.equal(new Set(photos.map((m) => m.src)).size, 18);
  assert.equal(new Set(photos.map((m) => m.sourceUrl)).size, 18);
  assert.equal(
    photos.filter((m) => m.rightsBasis === "documented_license").length,
    13,
  );
  for (const g of guideBatch51) {
    const m = guideMediaFor(g.id)!;
    assert.equal(g.image, m.src);
    assert.ok(
      statSync(new URL("../public" + m.src, import.meta.url)).size > 10000,
      g.id,
    );
    assert.ok(m.alt.length > 45);
    assert.ok(m.visualReview.rationale.length > 80);
    assert.ok(imageCreditText(m).trim());
    assert.equal(m.visualReview.outcome, "approved");
    if (m.rightsBasis === "official_source") {
      assert.match(m.licenseName, /not independently cleared/);
      assert.match(m.depiction, /Attribution is not permission/);
    } else assert.match(m.licenseUrl, /^https:\/\/creativecommons.org\//);
  }
  assert.match(guideMediaFor("brussels-dandoy-waffles")!.depiction, /2007/);
  assert.match(
    guideMediaFor("bangkok-nang-loeng-lunch")!.visualReview.rationale,
    /explicit reuse restriction/,
  );
  assert.match(guideMediaFor("taipei-eye-opera")!.depiction, /Taiwanese/i);
});
test("visitor roles, timed programmes and important access limitations remain explicit", () => {
  const g = (id: string) => guideBatch51.find((g) => g.id === id)!;
  assert.match(
    g("lisbon-graca-tile-painting").responsibility,
    /next day|next-day|following day/,
  );
  assert.match(
    g("brussels-gerbaud-chocolate-workshop").responsibility,
    /voucher/i,
  );
  assert.match(g("tokyo-maruyoshi-furin").access, /4-25-10/);
  assert.match(
    g("lucerne-sgv-lake-cruise").responsibility,
    /direct round trips/,
  );
  assert.match(g("kyoto-sagano-railway").responsibility, /sixty steps/);
  assert.match(g("stockholm-hallwyl-house").responsibility, /no lift/);
  assert.match(g("buenos-aires-barolo-day-tour").responsibility, /eight/);
  assert.match(
    g("tokyo-kiyosumi-garden").responsibility,
    /22 and 23 October 2026/,
  );
  assert.match(
    g("london-cecil-country-dance").responsibility,
    /no class on 29 October/,
  );
  assert.match(
    g("berlin-claerchens-ballroom").responsibility,
    /card payment only/,
  );
  assert.match(g("taipei-eye-opera").responsibility, /14 November 2026/);
  assert.ok(!canPublishGuide(g("taipei-eye-opera"), "2026-11-15"));
  assert.ok(!canPublishGuide(g("berlin-claerchens-ballroom"), "2026-11-25"));
  assert.ok(!canPublishGuide(g("london-cecil-country-dance"), "2026-12-04"));
});
test("three complementary local chapters remain complete, sourced and separately planned", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(cityChapters.length, 45);
  assert.equal(chapters.length, 44);
  for (const name of ["brussels", "stockholm", "san-francisco"]) {
    const c = chapters.find((c) => c.slug === name)!;
    assert.ok(c);
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
    regionsForCountry("switzerland", current).find((r) => r.slug === "lucerne")
      ?.name,
    "Lucerne",
  );
  for (const g of guideBatch51) {
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
test("six appended discoveries preserve prior authored slots and expire with their evidence", () => {
  assert.equal(discoveryEdition51.length, 6);
  assert.equal(dailyDiscoveries.length, 128);
  for (const d of discoveryEdition51) {
    assert.ok(d.date >= "2026-12-19" && d.date <= "2026-12-24");
    assert.ok(d.angle.length > 180);
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
    assert.ok(
      canPublishGuide(
        guideBatch51.find((g) => g.slug === d.slug)!,
        d.date,
      ),
      d.slug,
    );
  }
  for (const d of [...discoveryEdition49, ...discoveryEdition50])
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.date)).size,
    dailyDiscoveries.length,
  );
  assert.equal(
    new Set(dailyDiscoveries.map((d) => d.slug)).size,
    dailyDiscoveries.length,
  );
});
test("five same-day passes form one ninety-guide release without duplicate publication dates", () => {
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  const release = publishedReleases(publicGuides, "2026-10-21")[0];
  assert.equal(release.guides.length, 162);
  assert.equal(new Set(release.guides.map((g) => g.id)).size, 162);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
});
