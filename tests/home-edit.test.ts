import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import { resolveCityChapters } from "../src/lib/city-chapters";
import { guideMediaFor } from "../src/lib/media";
import {
  homeEditSlugs,
  homeInterestCoverSlugs,
  selectHomeEdit,
  selectHomeDay,
} from "../src/lib/home-edit";

test("category cover selections resolve to credited photographs in the catalogue", () => {
  for (const slug of homeInterestCoverSlugs) {
    const item = publicGuides.find((entry) => entry.slug === slug);
    assert.ok(item?.image, slug);
    const media = guideMediaFor(item.id);
    assert.ok(media?.sourceUrl, slug);
    assert.equal(item.image, media.src, slug);
  }
});

test("the photographic edit rotates without changing inside a day or inventing new guides", () => {
  const openings = new Set<string>();
  for (const date of ["2026-11-05", "2026-11-06", "2026-11-07"]) {
    const edit = selectHomeEdit(publicGuides, date);
    assert.deepEqual(edit, selectHomeEdit(publicGuides, date));
    assert.equal(edit.length, homeEditSlugs.length);
    assert.equal(new Set(edit.map((item) => item.image)).size, edit.length);
    for (let index = 0; index < edit.length; index += 3) {
      const row = edit.slice(index, index + 3);
      assert.equal(
        new Set(row.map((item) => item.countrySlug)).size,
        row.length,
      );
      assert.equal(new Set(row.map((item) => item.field)).size, row.length);
    }
    assert.ok(edit.every((item) => guideMediaFor(item.id)?.sourceUrl));
    openings.add(edit[0].slug);
  }
  assert.equal(openings.size, 3);
});

test("a guide reserved elsewhere stays excluded even if its photograph changes", () => {
  const original = selectHomeEdit(publicGuides, "2026-11-05");
  const changed = publicGuides.map((item) =>
    item.slug === original[0].slug ? { ...item, image: "/changed.jpg" } : item,
  );
  const edit = selectHomeEdit(
    changed,
    "2026-11-05",
    [original[0].slug],
    [original[1].image!],
  );
  assert.ok(
    !edit.some(
      (item) =>
        item.slug === original[0].slug || item.image === original[1].image,
    ),
  );
  assert.deepEqual(selectHomeEdit([], "2026-11-05"), []);
});

test("day previews contain three published stops and a photograph from that same day", () => {
  const chapters = resolveCityChapters(publicGuides);
  const seen = new Set<string>();
  for (const date of ["2026-11-05", "2026-11-06"]) {
    const day = selectHomeDay(chapters, date)!;
    assert.ok(day);
    assert.equal(day.chapter.stops.length, day.labels.length);
    assert.ok(
      day.chapter.stops.some((stop) => stop.slug === day.photoItem.slug),
    );
    assert.ok(guideMediaFor(day.photoItem.id));
    seen.add(day.slug);
  }
  assert.equal(seen.size, 2);
});

test("an incomplete day cannot keep advertising a three-stop plan", () => {
  const chapters = resolveCityChapters(publicGuides).map((chapter) => ({
    ...chapter,
    stops: chapter.stops.slice(0, 2),
  }));
  assert.equal(selectHomeDay(chapters, "2026-11-05"), undefined);
});
