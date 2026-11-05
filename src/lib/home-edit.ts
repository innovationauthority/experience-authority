import type { PublicExperience } from "./catalog";
import type { resolveCityChapters } from "./city-chapters";

/** Photographs reviewed at card size on 5 November 2026. This is an
 * editorial cover pool, not a ranking or a claim that the guides are new. */
export const homeEditSlugs = [
  "follow-the-landscape-through-a-menu-in-tokyo",
  "shape-hot-glass-with-an-artist-in-adelaide",
  "read-chicagos-buildings-from-a-kayak",
  "read-stone-light-and-water-in-vals",
  "watch-a-sports-car-take-shape-in-malvern",
  "istanbul-nardis-jazz",
  "quito-toak-chocolate-art",
  "aarhus-godsbanen-open-ceramics-workshop",
  "singapore-altitudex-first-flight",
] as const;

/** Additional reviewed covers keep the first category rows as considered as
 * the opening edit. Publication gates and normal interest matching still apply. */
export const homeInterestCoverSlugs = [
  "new-york-artechouse-twilight-zone",
  "kyoto-biovortex-athletics-forest",
  "naoshima-chichu-daylight",
  "follow-a-car-through-the-factory-in-munich",
  "try-the-ideas-behind-a-particle-accelerator-at-cern",
  "let-a-garden-guide-change-what-you-notice",
  "penang-habitat-langur-way",
  "find-the-plants-behind-everyday-things-in-cornwall",
  "step-from-smoke-sauna-into-the-lake",
  "take-a-sauna-break-inside-a-milan-tram",
  "listen-for-the-conversation-inside-flamenco",
  "give-a-green-mill-jazz-set-your-attention",
  "melbourne-urbnsurf-beginner",
] as const;

function dayNumber(date: string) {
  const day = Math.floor(Date.parse(`${date}T00:00:00Z`) / 86400000);
  return Number.isFinite(day) ? day : 0;
}

/** Stable while reading, different on another day. Exclusions are applied
 * before selection so a guide cannot reappear through a different image. */
export function selectHomeEdit(
  items: PublicExperience[],
  date: string,
  excludedSlugs: Iterable<string> = [],
  excludedImages: Iterable<string> = [],
) {
  const slugs = new Set(excludedSlugs);
  const images = new Set(excludedImages);
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const offset = (((dayNumber(date) % 3) + 3) % 3) * 3;
  const order = [
    ...homeEditSlugs.slice(offset),
    ...homeEditSlugs.slice(0, offset),
  ];
  const pool = order.flatMap((slug) => {
    const item = bySlug.get(slug);
    return item?.image && !slugs.has(slug) && !images.has(item.image)
      ? [item]
      : [];
  });
  const result: PublicExperience[] = [];
  // Each visible row mixes countries and activities. Never pad with unreviewed photographs.
  while (pool.length) {
    const row: PublicExperience[] = [];
    for (const item of pool) {
      if (
        row.some(
          (other) =>
            other.countrySlug === item.countrySlug ||
            other.field === item.field,
        )
      )
        continue;
      if (result.some((other) => other.image === item.image)) continue;
      row.push(item);
      if (row.length === 3) break;
    }
    if (!row.length) break;
    result.push(...row);
    for (const item of row) pool.splice(pool.indexOf(item), 1);
  }
  return result;
}

const dayEdits = [
  {
    slug: "bath",
    photoSlug: "meet-baths-warm-water-under-open-sky",
    title: "A day in Bath, from stars to steam.",
    labels: ["The Herschels’ garden", "The Roman spring", "A rooftop soak"],
  },
  {
    slug: "antwerp",
    photoSlug: "look-at-the-shape-before-the-label-in-antwerp",
    title: "A day in Antwerp, beyond the shopfronts.",
    labels: ["Passenger stories", "Fashion at MoMu", "The city’s brewery"],
  },
] as const;

export function selectHomeDay(
  chapters: ReturnType<typeof resolveCityChapters>,
  date: string,
) {
  const available = dayEdits.flatMap((edit) => {
    const chapter = chapters.find((entry) => entry.slug === edit.slug);
    const photoItem = chapter?.stops.find(
      (stop) => stop.slug === edit.photoSlug,
    )?.item;
    return chapter && chapter.stops.length === 3 && photoItem?.image
      ? [{ ...edit, chapter, photoItem }]
      : [];
  });
  return available.length
    ? available[
        ((dayNumber(date) % available.length) + available.length) %
          available.length
      ]
    : undefined;
}
