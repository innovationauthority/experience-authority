import type { PublicExperience } from "./catalog";
import type { EditorialPathway } from "./editorial-pathways";
import { recentGuideReleases } from "./releases";
import { collectionOpening } from "./collection-opening";

/**
 * Hand-composed hero editions. Each row balances a recognisable point of entry
 * with two less expected ways into a place. The order is main image, upper
 * story and lower story. It is editorial rotation, never a random shuffle.
 */
export const heroGuideRotations = [
  [
    "follow-the-art-beyond-the-room-in-tokyo",
    "taste-what-time-does-to-port",
    "turn-a-drawing-into-a-rug-in-singapore",
  ],
  [
    "let-light-change-the-room-in-miami",
    "taste-singapore-in-another-form",
    "lift-a-pattern-from-the-water",
  ],
  [
    "mexico-city-grown-on-water",
    "compare-buildings-on-foot-at-the-vitra-campus",
    "shape-a-kyoto-season-in-sweet-paste",
  ],
  [
    "follow-kyotos-river-gorge-by-slow-train",
    "follow-video-art-into-the-room-in-amsterdam",
    "take-a-watch-movement-apart-in-geneva",
  ],
  [
    "walk-inside-colour-at-inhotim",
    "taste-the-roca-brothers-girona",
    "play-a-familiar-game-with-a-giant-controller-in-uji",
  ],
] as const;

/** Lead photographs reviewed at portrait and landscape crops, 27 October 2026.
 * Other documentary images remain in the catalogue, but are not automatic covers.
 */
export const heroLeadPositions: Record<string, string> = {
  "follow-the-art-beyond-the-room-in-tokyo": "50% 50%",
  "let-light-change-the-room-in-miami": "50% 50%",
  "compare-buildings-on-foot-at-the-vitra-campus": "50% 50%",
  "walk-inside-colour-at-inhotim": "50% 50%",

  "pick-the-leaf-before-the-cup": "35% 50%",
  "marble-steam-istanbul": "50% 64%",
  "follow-balis-water-before-the-rice": "60% 55%",
  "mexico-city-grown-on-water": "44% 60%",
  "follow-kyotos-river-gorge-by-slow-train": "52% 50%",
  "venice-through-an-oar": "42% 75%",
  "lift-a-pattern-from-the-water": "48% 52%",
  "a-bowl-of-attention": "50% 40%",
  "cook-beyond-the-postcard": "58% 62%",
  "shape-a-kyoto-season-in-sweet-paste": "50% 60%",
  "raise-a-room-from-a-circle": "50% 40%",
};

const compassOpeningGuideSlugs = [
  "follow-the-art-beyond-the-room-in-tokyo",
  "let-light-change-the-room-in-miami",
  "compare-buildings-on-foot-at-the-vitra-campus",
  "follow-the-landscape-through-a-menu-in-tokyo",
  "play-a-familiar-game-with-a-giant-controller-in-uji",
  "make-an-evening-of-live-jazz-in-aoyama",

  "meet-the-island-through-the-uga",
  "stay-until-the-desert-loses-its-colour",
  "follow-the-colour-back-to-the-wool",
  "let-the-room-introduce-mindelo",
  "stay-where-the-town-knows-your-host",
  "build-hudut-from-the-coconut-outward",
  "meet-the-largest-fish-on-its-terms",
  "raise-a-room-from-a-circle",
  "coil-the-lowcountry-one-stitch-at-a-time",
  "walk-where-terere-is-everyday-language",
  "pick-the-leaf-before-the-cup",
  "let-the-drum-recover-its-history",
  "hear-the-wooden-racket-crack",
  "enter-sevdah-through-the-room-that-remembers-it",
  "move-the-stone-that-holds-the-water",
  "let-the-clay-keep-the-fingerprints",
  "hear-the-drum-after-sunset",
  "taste-what-time-does-to-port",
  "ask-the-market-where-london-came-from",
  "read-monument-valley-beyond-the-scenic-drive",
  "a-bowl-of-attention",
  "venice-through-an-oar",
  "follow-the-agave-into-the-still",
  "the-fish-behind-the-islands",
  "kimchi-before-the-jar",
  "follow-balis-water-before-the-rice",
  "marble-steam-istanbul",
  "a-morning-at-the-hawker-table",
  "read-the-desert-at-ground-level",
  "stay-for-the-session",
  "play-the-wall-in-biarritz",
  "before-the-chocolate-bar",
  "a-city-in-the-water",
  "leave-room-for-devotion",
  "paint-the-pattern-you-noticed",
] as const;

const heroEditionMilliseconds = 3 * 60 * 60 * 1000;

export function homeHeroRotationIndex(date: Date | string = new Date()) {
  const value = typeof date === "string" ? new Date(`${date}T00:00:00Z`) : date;
  const edition = Math.floor(value.getTime() / heroEditionMilliseconds);
  return edition % heroGuideRotations.length;
}

/** Resolve only complete hand-composed editions so an expired guide cannot leave a gap. */
export function resolveHomeHeroEditions(items: PublicExperience[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return heroGuideRotations.flatMap((edition) => {
    const guides = edition.flatMap((slug) => bySlug.get(slug) ?? []);
    return guides.length === 3 ? [guides] : [];
  });
}

/** A stable three-hour selection. Missing or expired guides fail over gracefully. */
export function selectHomeHero(
  items: PublicExperience[],
  date: Date | string = new Date(),
) {
  const edition = heroGuideRotations[homeHeroRotationIndex(date)];
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const selected = edition.flatMap((slug) => bySlug.get(slug) ?? []);
  for (const item of items) {
    if (selected.length === 3) break;
    if (item.image && !selected.includes(item)) selected.push(item);
  }
  return selected;
}

/**
 * Give the unfiltered Compass a deliberate opening sequence instead of the
 * implementation order of the guide files. The opening alternates familiar
 * points of reference with less expected discoveries and strong documentary
 * frames. Filtered results keep this order while still including every guide.
 */
export function orderExperienceDirectory(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const seen = new Set<string>();
  const opening = compassOpeningGuideSlugs.flatMap((slug) => {
    const item = bySlug.get(slug);
    if (!item || seen.has(item.slug)) return [];
    seen.add(item.slug);
    return [item];
  });

  // A stable daily opening rewards returning without reordering a visitor's
  // results mid-search. Only the reviewed photographic opening rotates.
  const day = Math.floor(Date.parse(`${today}T00:00:00Z`) / 86400000);
  const offset =
    opening.length && Number.isFinite(day)
      ? (((day * 7) % opening.length) + opening.length) % opening.length
      : 0;
  const rotated = [...opening.slice(offset), ...opening.slice(0, offset)];
  return [...rotated, ...items.filter((item) => !seen.has(item.slug))];
}
/** A photograph gets one place on the homepage, even when a guide belongs to several pathways. */
export function curateHome(
  items: PublicExperience[],
  pathways: readonly EditorialPathway[],
  hero: PublicExperience[] = selectHomeHero(items),
  today = new Date().toISOString().slice(0, 10),
  reservedImages: string[] = [],
) {
  const usedImages = new Set<string>(reservedImages);
  const claim = (item: PublicExperience) => {
    const key = item.image || item.id;
    if (usedImages.has(key)) return false;
    usedImages.add(key);
    return true;
  };
  // The client can show any edition without replacing the server-rendered sections.
  // Reserve every available hero photograph, not only the initial three.
  resolveHomeHeroEditions(items).flat().forEach(claim);
  hero.forEach(claim);
  const familiar = [
    "a-morning-at-the-hawker-table",
    "step-into-the-dance",
    "a-city-in-the-water",
  ].flatMap((slug) => items.find((item) => item.slug === slug) || []);
  const startingPool = [
    ...familiar,
    ...items.filter((item) => !familiar.includes(item)),
  ].filter((item) => !usedImages.has(item.image || item.id));
  const startingPoints: PublicExperience[] = [];
  const startingCountries = new Set<string>();
  for (const item of startingPool) {
    if (startingCountries.has(item.countrySlug)) continue;
    startingPoints.push(item);
    startingCountries.add(item.countrySlug);
    if (startingPoints.length === 3) break;
  }
  // Small or filtered editions can still offer up to three distinct guides.
  for (const item of startingPool) {
    if (startingPoints.length === 3) break;
    if (!startingPoints.includes(item)) startingPoints.push(item);
  }
  // Starting points currently render as text-only destination prompts. Do not
  // reserve their photographs from sections that actually display an image.
  const recent = recentGuideReleases(items, today).filter(
    (item) =>
      ![
        "tampere-kauppahalli-warm-mustamakkara",
        "tampere-vapriikki-play-finnish-games",
      ].includes(item.slug) && !usedImages.has(item.image || item.id),
  );
  const newGuides: PublicExperience[] = [];
  const countries = new Set<string>();
  for (const item of recent) {
    if (
      countries.has(item.countrySlug) ||
      newGuides.some((guide) => guide.field === item.field)
    )
      continue;
    newGuides.push(item);
    countries.add(item.countrySlug);
    if (newGuides.length === 6) break;
  }
  for (const item of recent) {
    if (newGuides.length === 6) break;
    if (!newGuides.includes(item)) newGuides.push(item);
  }
  newGuides.forEach(claim);
  const offset =
    Math.floor(Date.parse(`${today}T00:00:00Z`) / 86400000) %
    Math.max(pathways.length, 1);
  const featured = ["a-place-still-being-invented", "what-a-place-tastes-like"];
  const rotated = [...pathways.slice(offset), ...pathways.slice(0, offset)];
  const orderedPathways = [
    ...featured.flatMap(
      (slug) => pathways.find((pathway) => pathway.slug === slug) ?? [],
    ),
    ...rotated.filter((pathway) => !featured.includes(pathway.slug)),
  ];
  let pathwayCount = 0;
  const homePathways = orderedPathways
    .flatMap((pathway) => {
      if (pathwayCount === 3) return [];
      const item = collectionOpening(pathway, items).guides.find(
        (entry) =>
          pathway.guideSlugs.includes(entry.slug) &&
          !usedImages.has(entry.image || entry.id),
      );
      if (!item) return [];
      pathwayCount += 1;
      claim(item);
      return [{ pathway, item }];
    })
    .slice(0, 3);
  return { hero, startingPoints, newGuides, homePathways, usedImages };
}
