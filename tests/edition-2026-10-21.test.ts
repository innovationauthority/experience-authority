import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { guideBatch49 } from "../src/lib/guide-batch-49";
import {
  edition20261021,
  discoveryBatch49,
} from "../src/lib/discovery-batch-49";
import { discoveryEdition49 } from "../src/lib/daily-discovery-batch-49";
import { discoveryEdition48 } from "../src/lib/daily-discovery-batch-48";
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

test("21 October adds eighteen genuinely new guides with exactly three primary allocations in each area", () => {
  const slugs = Object.values(edition20261021).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch49.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261021).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const earlier = publicGuides.filter(
    (g) => g.guideReview!.checkedOn < "2026-10-21",
  );
  assert.equal(earlier.length, 316);
  for (const [area, allocated] of Object.entries(edition20261021)) {
    assert.equal(allocated.length, 3);
    for (const slug of allocated) {
      const g = guideBatch49.find((g) => g.slug === slug)!;
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
      assert.ok(discoveryBatch49[slug]);
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
    guideBatch49.filter(
      (g) => guideMediaFor(g.id)!.rightsBasis === "documented_license",
    ).length,
    15,
  );
  assert.equal(guideReleases.filter((r) => r.date === "2026-10-21").length, 1);
  assert.equal(
    publishedReleases(publicGuides, "2026-10-21")[0].guides.length,
    54,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-20")[0].guides.length,
    36,
  );
  assert.equal(publicGuides.length, 370);
  assert.equal(
    publicGuides.filter((g) => canPublishGuide(g, "2026-10-21")).length,
    356,
  );
});

test("new visitor roles and current operating constraints stay explicit", () => {
  const byId = (id: string) => guideBatch49.find((g) => g.id === id)!;
  assert.match(
    byId("nice-socca-chez-pipo").responsibility,
    /Wednesday to Sunday/,
  );
  assert.match(byId("nice-socca-chez-pipo").responsibility, /cross-contact/);
  assert.match(byId("edinburgh-islander-tweed-bag").kernel, /prepared parts/);
  assert.match(byId("edinburgh-islander-tweed-bag").responsibility, /twelve/);
  assert.match(
    byId("berlin-frau-tonis-scent").responsibility,
    /only after separate confirmation/,
  );
  assert.match(
    byId("taipei-suho-papermaking").responsibility,
    /20 October to 1 November 2026/,
  );
  assert.match(
    byId("taipei-suho-papermaking").responsibility,
    /drying and packing/,
  );
  assert.match(
    byId("hong-kong-star-ferry-crossing").responsibility,
    /Harbour Tour is a different product/,
  );
  assert.equal(byId("hong-kong-star-ferry-crossing").regionSlug, "central");
  assert.match(byId("toronto-wards-island-walk").responsibility, /14 October/);
  assert.match(
    byId("toronto-wards-island-walk").responsibility,
    /not a compulsory route or a return-loop distance/,
  );
  assert.match(
    byId("sydney-bondi-tamarama-walk").responsibility,
    /does not promise an uninterrupted/,
  );
  assert.match(
    byId("porto-serralves-treetop").responsibility,
    /Serralves em Luz/,
  );
  assert.match(
    byId("madrid-chamberi-metro-museum").responsibility,
    /requires advance booking/,
  );
  assert.match(
    byId("paris-music-museum-listening").responsibility,
    /visioguide offers French, English, Spanish/,
  );
  assert.match(byId("kyoto-funaoka-sento").responsibility, /Tuesday closure/);
  assert.match(
    byId("kyoto-funaoka-sento").rootedness,
    /dates its beginnings to 1923/,
  );
  assert.doesNotMatch(
    byId("kyoto-funaoka-sento").rootedness,
    /building dates from 1923/,
  );
  assert.match(
    byId("kyoto-funaoka-sento").responsibility,
    /translated summaries differ/,
  );
  assert.match(
    byId("florence-oblate-library-pause").responsibility,
    /separate registration conditions/,
  );
  assert.match(
    byId("new-york-village-vanguard-set").responsibility,
    /fifteen entrance steps and no wheelchair accessibility/,
  );
  assert.match(
    byId("new-york-village-vanguard-set").responsibility,
    /non-alcoholic drink counts/,
  );
  assert.equal(
    canPublishGuide(byId("barcelona-cathedral-sardana"), "2026-11-09"),
    false,
  );
  assert.match(
    byId("barcelona-cathedral-sardana").responsibility,
    /Sagrada Família is a different venue/,
  );
  assert.match(
    byId("tokyo-tsukiji-organ-concert").responsibility,
    /30 October, 27 November and 25 December 2026/,
  );
  assert.match(
    byId("tokyo-tsukiji-organ-concert").rootedness,
    /replacement donated in 2025/,
  );
});

test("five new local chapters connect different roles without re-opening expired source windows", () => {
  const current = publicGuides.filter((g) => canPublishGuide(g, "2026-10-21"));
  const chapters = resolveCityChapters(current);
  assert.equal(chapters.length, 39);
  for (const slug of ["berlin", "hanoi", "edinburgh", "madrid", "florence"]) {
    const c = chapters.find((c) => c.slug === slug)!;
    assert.equal(c.stops.length, 3, slug);
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2, slug);
    assert.match(c.planning, /separate|different/);
  }
  assert.ok(!chapters.some((c) => c.slug === "valencia"));
  for (const g of guideBatch49) {
    const related = connectedExperiences(g, current, 3);
    assert.ok(related.length > 0, g.slug);
    const local = current.some(
      (p) =>
        p.id !== g.id &&
        p.countrySlug === g.countrySlug &&
        p.regionSlug === g.regionSlug,
    );
    if (local) assert.equal(related[0].scope, "same_area", g.slug);
  }
  assert.equal(
    current.filter((g) => !guideBatch49.some((n) => n.id === g.id)).length,
    338,
  );
});

test("six future daily discoveries preserve earlier editions and remain eligible on their dates", () => {
  assert.equal(discoveryEdition49.length, 6);
  for (const d of discoveryEdition49) {
    assert.ok(d.date >= "2026-12-02" && d.date <= "2026-12-07");
    assert.ok(d.angle.length > 180);
    assert.ok(
      canPublishGuide(
        guideBatch49.find((g) => g.slug === d.slug)!,
        d.date,
      ),
    );
    assert.deepEqual(
      dailyDiscoveries.find((x) => x.date === d.date),
      d,
    );
  }
  for (const d of discoveryEdition48)
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
});
