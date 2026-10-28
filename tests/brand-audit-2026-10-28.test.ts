import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { publicGuides } from "../src/lib/public-guides";
import { regionDisplayName, regionsForCountry } from "../src/lib/catalog";
import {
  chapterDestinationCount,
  cityChapters,
} from "../src/lib/city-chapters";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { collectionOpening } from "../src/lib/collection-opening";
import { emptyTrip, hasTripDraft } from "../src/lib/trip";

test("destination labels never inherit the venue address from recent guides", () => {
  for (const [country, region, address, expected] of [
    ["united-kingdom", "london", "London, St Bride Foundation", "London"],
    ["france", "nice", "Nice, Chez Pipo, 13 rue Bavastro", "Nice"],
    ["canada", "toronto", "Toronto, Jack Layton Ferry Terminal", "Toronto"],
    ["belgium", "antwerp", "Antwerp, MoMu", "Antwerp"],
    ["italy", "bologna", "Bologna, Archiginnasio", "Bologna"],
  ])
    assert.equal(regionDisplayName(country, region, address), expected);
  assert.doesNotThrow(() =>
    regionDisplayName("example", "new-area", undefined),
  );
  for (const country of new Set(publicGuides.map((item) => item.countrySlug))) {
    const labels = regionsForCountry(country, publicGuides).sort((a, b) =>
      a.slug.localeCompare(b.slug),
    );
    const reversed = regionsForCountry(
      country,
      [...publicGuides].reverse(),
    ).sort((a, b) => a.slug.localeCompare(b.slug));
    assert.deepEqual(
      labels,
      reversed,
      `Labels must not depend on publishing order: ${country}`,
    );
  }
});

test("home destination counts match the scope of the destination link", () => {
  for (const chapter of cityChapters) {
    const expected = publicGuides.filter(
      (item) =>
        item.countrySlug === chapter.country &&
        (chapter.regions.length !== 1 ||
          item.regionSlug === chapter.regions[0]),
    ).length;
    assert.equal(chapterDestinationCount(chapter, publicGuides), expected);
  }
  const london = cityChapters.find((item) => item.slug === "london")!;
  assert.ok(
    chapterDestinationCount(london, publicGuides) > london.stops.length,
  );
});

test("collection introductions are bounded, photographic and preserve every eligible member once", () => {
  for (const pathway of editorialPathways) {
    const { opening, remaining, guides } = collectionOpening(
      pathway,
      publicGuides,
    );
    assert.ok(opening.length <= 6);
    assert.deepEqual(
      new Set([...opening, ...remaining].map((item) => item.id)),
      new Set(guides.map((item) => item.id)),
    );
    assert.equal(opening.length + remaining.length, guides.length);
    assert.ok(
      guides.every(
        (item) =>
          item.image && new Set<string>(pathway.guideSlugs).has(item.slug),
      ),
    );
    const reduced = publicGuides.filter(
      (item) => !opening.some((lead) => lead.id === item.id),
    );
    assert.ok(
      collectionOpening(pathway, reduced).opening.every((item) =>
        reduced.includes(item),
      ),
    );
  }
  const timed = editorialPathways.find(
    (item) => item.slug === "timed-by-place",
  )!;
  assert.equal(
    collectionOpening(timed, publicGuides).guides[0].slug,
    "the-tide-brings-the-horses",
  );
});

test("onboarding never hides existing named, notes-only or populated journey drafts", () => {
  assert.equal(hasTripDraft(emptyTrip), false);
  assert.equal(hasTripDraft({ ...emptyTrip, name: "Autumn in London" }), true);
  assert.equal(
    hasTripDraft({ ...emptyTrip, logistics: "Train on Tuesday" }),
    true,
  );
  assert.equal(
    hasTripDraft({ ...emptyTrip, entries: [{ id: "one", day: 1, note: "" }] }),
    true,
  );
});

test("photo links have explicit names and Aeonik uses real self-hosted cuts", () => {
  const card = readFileSync("src/components/editorial.tsx", "utf8");
  assert.match(card, /aria-label=\{`Explore \$\{item.title\}`\}/);
  const home = readFileSync("src/app/page.tsx", "utf8");
  assert.match(home, /aria-label=\{`Explore \$\{chapter.name\}`\}/);
  const layout = readFileSync("src/app/layout.tsx", "utf8");
  for (const cut of ["Regular", "Light", "Bold"])
    assert.ok(layout.includes(`AeonikPro-${cut}.woff2`));
  assert.ok(!layout.includes("Newsreader-"));
});
