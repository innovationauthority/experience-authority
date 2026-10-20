import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch44 } from "../src/lib/guide-batch-44";
import {
  edition20261007,
  discoveryBatch44,
} from "../src/lib/discovery-batch-44";
import { discoveryEdition44 } from "../src/lib/daily-discovery-batch-44";
import { dailyDiscoveries } from "../src/lib/daily-discovery";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { publishedReleases } from "../src/lib/releases";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { resolveCityChapters } from "../src/lib/city-chapters";
import { guideReleases } from "../src/lib/releases";

test("7 October adds exactly eighteen distinct guides and three primary allocations per area", () => {
  const slugs = Object.values(edition20261007).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch44.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20261007).sort(),
    interests.map((i) => i.slug).sort(),
  );
  const thisOrFuture = new Set<string>(
    guideReleases
      .filter((r) => r.date >= "2026-10-07")
      .flatMap((r) => [...r.slugs]),
  );
  const earlier = publicGuides.filter((g) => !thisOrFuture.has(g.slug));
  assert.equal(earlier.length, 226, "All preceding guides remain present");
  for (const [primary, allocated] of Object.entries(edition20261007)) {
    assert.equal(allocated.length, 3, primary);
    for (const slug of allocated) {
      const guide = guideBatch44.find((g) => g.slug === slug)!;
      assert.ok(
        matchesInterest(
          guide,
          interests.find((i) => i.slug === primary)!,
        ),
        slug,
      );
      assert.ok(canPublishGuide(guide, "2026-10-07"), slug);
      assert.ok(!canPublishGuide(guide, "2026-10-06"), slug);
      assert.ok(
        !earlier.some(
          (g) =>
            g.id === guide.id ||
            g.slug === slug ||
            g.guideReview?.accessUrl === guide.guideReview?.accessUrl,
        ),
        slug,
      );
      assert.ok(discoveryBatch44[slug]);
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
      );
      assert.equal(guide.image, guideMediaFor(guide.id)?.src);
      assert.match(guide.evidence, /EA has not/);
      assert.doesNotMatch(
        [
          guide.title,
          guide.summary,
          guide.kernel,
          guide.rootedness,
          guide.shift,
          guide.humanReturn,
          guide.responsibility,
          guide.evidence,
          guide.duration,
          guide.participation,
          guide.access,
        ].join(" "),
        /[;—]/,
        slug,
      );
    }
  }
  assert.equal(
    publishedReleases(publicGuides, "2026-10-07")[0].guides.length,
    18,
  );
  assert.equal(
    publishedReleases(publicGuides, "2026-10-06")[0].date,
    "2026-09-27",
  );
});

test("new access and photo boundaries remain visible, including the not-yet-open rink", () => {
  const byId = (id: string) => guideBatch44.find((g) => g.id === id)!;
  assert.match(
    byId("amsterdam-jaap-eden").responsibility,
    /not open on this guide's 7 October/,
  );
  assert.match(
    byId("york-chocolate").responsibility,
    /21 September to 21 October 2026/,
  );
  assert.match(
    byId("beaune-fallot").responsibility,
    /do not assume an October visit is in English/,
  );
  assert.match(byId("puebla-talavera").responsibility, /five working days/);
  assert.match(
    byId("nara-gripped-ink").responsibility,
    /Do not open.*three months/,
  );
  assert.match(
    byId("kasukabe-flood-chamber").responsibility,
    /roughly 100 stairs/,
  );
  assert.match(
    byId("kasukabe-flood-chamber").responsibility,
    /Guiding is in Japanese/,
  );
  assert.match(
    byId("new-orleans-bacchanal").responsibility,
    /strictly 21 and over/,
  );
  assert.match(byId("vancouver-bloedel").rootedness, /captive birds/);
  assert.match(
    guideMediaFor("puebla-talavera")!.depiction,
    /not necessarily the pictured vessel/,
  );
  assert.equal(
    guideMediaFor("kasukabe-flood-chamber")!.rightsBasis,
    "documented_license",
  );
});

test("every new guide has a valid future daily angle while published history is unchanged", () => {
  assert.equal(discoveryEdition44.length, 18);
  assert.deepEqual(
    discoveryEdition44.map((d) => d.slug).sort(),
    guideBatch44.map((g) => g.slug).sort(),
  );
  for (const entry of discoveryEdition44) {
    assert.ok(entry.date > "2026-10-07");
    assert.ok(
      dailyDiscoveries.some(
        (d) => d.date === entry.date && d.slug === entry.slug,
      ),
    );
    assert.ok(
      canPublishGuide(
        guideBatch44.find((g) => g.slug === entry.slug)!,
        entry.date,
      ),
    );
    assert.ok(entry.angle.length > 180);
  }
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-10-07")?.slug,
    "ask-the-market-where-london-came-from",
  );
  assert.equal(
    dailyDiscoveries.find((d) => d.date === "2026-10-13")?.slug,
    "read-a-ship-before-the-sails-arrive",
    "Time-specific upcoming maritime context is retained",
  );
});

test("local connections and contrasting chapters keep their geographic and booking boundaries", () => {
  const byId = (id: string) => guideBatch44.find((g) => g.id === id)!;
  for (const id of [
    "dublin-cobblestone",
    "vancouver-bloedel",
    "florence-leather",
  ]) {
    assert.equal(
      connectedExperiences(byId(id), publicGuides)[0].scope,
      "same_area",
    );
  }
  assert.equal(
    connectedExperiences(byId("carcavelos-surf"), publicGuides)[0].scope,
    "connected_area",
  );
  assert.equal(
    connectedExperiences(byId("kasukabe-flood-chamber"), publicGuides)[0].scope,
    "connected_area",
  );
  const chapters = resolveCityChapters(publicGuides);
  for (const slug of ["dublin", "vancouver"]) {
    const c = chapters.find((c) => c.slug === slug)!;
    assert.equal(c.stops.length, slug === "dublin" ? 4 : 2);
    assert.ok(new Set(c.stops.map((s) => s.item.field)).size >= 2);
    assert.match(c.planning, /No (combined|shared) ticket/);
  }
  assert.match(
    chapters.find((c) => c.slug === "lisbon")!.planning,
    /outside central Lisbon/,
  );
});
