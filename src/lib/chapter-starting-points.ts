import type { PublicExperience } from "./catalog";
import type { resolveCityChapters } from "./city-chapters";

export const featuredChapterSlugs = [
  "kyoto",
  "porto-and-gaia",
  "singapore",
  "london",
  "paris",
  "lisbon",
];
export type ChapterChoice = { slug: string; role: string; note: string };

/** Authored decisions, never generated travel times or implied shared bookings. */
const startingPoints: Record<string, readonly ChapterChoice[]> = {
  lisbon: [
    {
      slug: "fold-the-pastry-before-the-first-bite",
      role: "Choose a making session",
      note: "Book the pastry class as its own commitment. Confirm dietary needs before choosing a date.",
    },
    {
      slug: "cross-lisbon-on-the-route-of-its-water",
      role: "A separate city perspective",
      note: "Use the aqueduct's admitted crossing in Campolide. Check weather, last entry and whether the elevated route suits you.",
    },
    {
      slug: "let-the-fado-room-fall-quiet",
      role: "Reserve an evening",
      note: "Plan around the dinner programme and listening rhythm. Leave the Carcavelos surf lesson in the full selection for another suitable day.",
    },
  ],
  paris: [
    {
      slug: "open-a-book-inside-pariss-salle-ovale",
      role: "A lighter beginning",
      note: "Use the reading room for its ordinary purpose. Check opening days and leave room for a seat to become available.",
    },
    {
      slug: "make-the-morning-before-it-reaches-the-cafe",
      role: "Another day's anchor",
      note: "Give pastry its full five-and-a-half-hour class. This is the main commitment of a day, not a breakfast stop before other bookings.",
    },
    {
      slug: "hear-a-new-trio-in-an-old-paris-room",
      role: "An evening you choose",
      note: "Let the current musician and programme decide the date. Book the concert separately and allow your own travel time.",
    },
  ],
  kyoto: [
    {
      slug: "a-bowl-of-attention",
      role: "A booked anchor",
      note: "Begin with tea in Higashiyama. Confirm the session and language first.",
    },
    {
      slug: "find-a-place-through-its-scent",
      role: "A lighter visit",
      note: "A separate scent-gallery visit offers a quieter contrast. Check its opening and allow travel time.",
    },
    {
      slug: "build-a-pattern-in-colour",
      role: "Another day's workshop",
      note: "Give the textile session its own time. Choose it as another anchor rather than fitting every workshop into one day.",
    },
  ],
  "porto-and-gaia": [
    {
      slug: "let-the-market-write-your-menu",
      role: "An independent beginning",
      note: "Begin with a market purchase. Bolhão is closed on Sundays and public holidays.",
    },
    {
      slug: "hear-the-church-before-you-climb",
      role: "A fixed point to check",
      note: "Make room for listening at Clérigos. Confirm the advertised noon concert before arranging your day.",
    },
    {
      slug: "taste-what-time-does-to-port",
      role: "Across the river",
      note: "Keep the cellar visit as a separate reservation in Gaia and allow for the crossing.",
    },
  ],
  singapore: [
    {
      slug: "a-morning-at-the-hawker-table",
      role: "An everyday beginning",
      note: "Begin with breakfast and the shared routines of a hawker centre.",
    },
    {
      slug: "draw-with-wax-in-kampong-gelam",
      role: "A booked anchor",
      note: "Give the batik session its full two hours, with separate arrival and travel time.",
    },
    {
      slug: "walk-the-island-between-forest-and-shore",
      role: "A separate nature outing",
      note: "Choose Coney Island for another day, or consider Sungei Buloh in the full guide below. They are separate outings, not consecutive stops.",
    },
  ],
  london: [
    {
      slug: "ask-the-market-where-london-came-from",
      role: "A morning to reserve",
      note: "Give the market tour its approximately three hours and confirm dietary needs.",
    },
    {
      slug: "meet-the-work-before-the-curtain-rises",
      role: "Another day's anchor",
      note: "Choose a separate theatre tour. Its route depends on a working building.",
    },
    {
      slug: "watch-a-small-house-change-shape",
      role: "An alternative visit",
      note: "Soane's house is another choice for a smaller visit. Check its opening and limited capacity.",
    },
  ],
};

export function chapterStartingPoints(
  chapter: ReturnType<typeof resolveCityChapters>[number],
) {
  const authored = startingPoints[chapter.slug];
  return (
    authored ||
    chapter.stops
      .slice(0, 3)
      .map((stop) => ({ slug: stop.slug, role: stop.moment, note: stop.why }))
  ).flatMap((choice) => {
    const stop = chapter.stops.find((entry) => entry.slug === choice.slug);
    return stop ? [{ ...choice, item: stop.item }] : [];
  });
}

export function chapterPlaceItems(
  chapter: { country: string; regions: readonly string[] },
  items: PublicExperience[],
) {
  return items.filter(
    (item) =>
      item.countrySlug === chapter.country &&
      chapter.regions.includes(item.regionSlug),
  );
}
