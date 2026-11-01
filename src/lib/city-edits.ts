import type { PublicExperience } from "./catalog";
export type CityEdit = {
  slug: string;
  chapter: string;
  country: string;
  regions: string[];
  name: string;
  title: string;
  intro: string;
  stops: { slug: string; role: string; note: string }[];
};
/** Editorial alternatives, never a promised timetable or bundled reservation. */
export const cityEdits: CityEdit[] = [
  {
    slug: "tokyo-art-and-after-dark",
    chapter: "tokyo",
    country: "japan",
    regions: ["tokyo"],
    name: "Tokyo",
    title: "Art, a remarkable table, a live set.",
    intro:
      "Start with art that moves between rooms. Choose a destination meal or a jazz set as your evening anchor. Give both separate evenings if the timings compete.",
    stops: [
      {
        slug: "follow-the-art-beyond-the-room-in-tokyo",
        role: "Art in Azabudai Hills",
        note: "Book teamLab’s entry slot first. Leave an interval for the journey onwards rather than promising a fixed finish.",
      },
      {
        slug: "follow-the-landscape-through-a-menu-in-tokyo",
        role: "A meal to build around",
        note: "Narisawa is a reservation-led experience in Minami Aoyama. Keep the full meal free of pressure from a concert booking.",
      },
      {
        slug: "make-an-evening-of-live-jazz-in-aoyama",
        role: "An Aoyama evening",
        note: "Choose Blue Note’s artist and set before fixing dinner. The same district does not guarantee compatible timings.",
      },
    ],
  },
  {
    slug: "tokyo-made-by-you",
    chapter: "tokyo",
    country: "japan",
    regions: ["tokyo"],
    name: "Tokyo",
    title: "Make something only you could bring home.",
    intro:
      "Choose one Tokyo workshop as the main event, then add a small taste of the city. The two workshops are alternatives or separate days.",
    stops: [
      {
        slug: "make-a-lunch-you-cannot-eat",
        role: "Play with the everyday",
        note: "Make food replicas in the kitchenware district. Check the available beginner workshop and booking rules.",
      },
      {
        slug: "cut-a-line-that-catches-the-light",
        role: "Or work in glass",
        note: "Reserve Sokichi separately. Give the session its own time and check collection, payment and glass options.",
      },
      {
        slug: "meet-tokyo-in-a-cup-of-dashi",
        role: "A short flavour stop",
        note: "Nihonbashi is a separate part of the city. Check opening hours and allow travel from your workshop.",
      },
    ],
  },
  {
    slug: "singapore-food-and-future",
    chapter: "singapore",
    country: "singapore",
    regions: ["singapore"],
    name: "Singapore",
    title: "A hawker table. A planted mountain. A new tasting menu.",
    intro:
      "Read Singapore through three very different scales of invention. Choose an everyday meal or a tasting menu, with the Cloud Forest as a separate daytime anchor.",
    stops: [
      {
        slug: "look-closer-at-a-mountain-of-plants-in-singapore",
        role: "An indoor landscape",
        note: "Choose the correct Gardens by the Bay ticket and check temporary programmes before booking.",
      },
      {
        slug: "taste-singapore-in-another-form",
        role: "A destination dinner",
        note: "Labyrinth reworks Singaporean food into a tasting menu. Confirm the reservation and dietary fit before organising the evening.",
      },
      {
        slug: "a-morning-at-the-hawker-table",
        role: "Another kind of table",
        note: "Keep a hawker meal in the stay too. It is a separate experience, with individual stalls and opening times.",
      },
    ],
  },
  {
    slug: "singapore-make-and-city",
    chapter: "singapore",
    country: "singapore",
    regions: ["singapore"],
    name: "Singapore",
    title: "Make something. Read the city.",
    intro:
      "Give a tufting session the time it needs, then consider Singapore at the scale of a model. Batik offers a second making direction for another day.",
    stops: [
      {
        slug: "turn-a-drawing-into-a-rug-in-singapore",
        role: "Make the anchor",
        note: "Check the session length, age rules and finishing or delivery arrangements. Your rug is not necessarily ready that day.",
      },
      {
        slug: "see-singapore-at-the-scale-of-a-model",
        role: "A different scale of looking",
        note: "Check the Singapore City Gallery’s visitor hours. The model offers another way to read the city, with travel between visits arranged separately.",
      },
      {
        slug: "draw-with-wax-in-kampong-gelam",
        role: "Another day, another material",
        note: "Book batik as its own workshop rather than squeezing two classes into one afternoon.",
      },
    ],
  },
  {
    slug: "london-backstage-and-live",
    chapter: "london",
    country: "united-kingdom",
    regions: ["london"],
    name: "London",
    title: "See the work. Stay for the performance.",
    intro:
      "A theatre tour and a live evening reveal different sides of a working city. Borough Market gives another day an appetite-led starting point.",
    stops: [
      {
        slug: "meet-the-work-before-the-curtain-rises",
        role: "Behind the performance",
        note: "Choose an available theatre tour. The working programme can change the route.",
      },
      {
        slug: "let-a-live-show-fill-wiltons-music-hall",
        role: "Make an evening of it",
        note: "Choose Wilton’s current show and book independently. Check travel from your earlier visit.",
      },
      {
        slug: "ask-the-market-where-london-came-from",
        role: "A different morning",
        note: "The market tour is a substantial booked experience. Keep it as another day’s anchor.",
      },
    ],
  },
  {
    slug: "london-make-and-green",
    chapter: "london",
    country: "united-kingdom",
    regions: ["london"],
    name: "London",
    title: "Print something. Find another level of the city.",
    intro:
      "A letterpress workshop and Kew offer two distinct outings. Choose by the time you have, with chamber music as a date-led alternative.",
    stops: [
      {
        slug: "set-a-few-words-in-wood-type-in-london",
        role: "A workshop day",
        note: "Check the next public letterpress date. Give the class its stated duration rather than treating it as a drop-in.",
      },
      {
        slug: "meet-the-trees-at-canopy-height-in-kew",
        role: "A separate garden outing",
        note: "Kew is outside central London. Check garden entry, weather and walkway access, then allow the travel time.",
      },
      {
        slug: "give-londons-lunch-hour-to-live-chamber-music",
        role: "A performance-led choice",
        note: "Use the published concert calendar. Choose this for a compatible day, not during the workshop.",
      },
    ],
  },
  {
    slug: "porto-architecture-and-port",
    chapter: "porto-and-gaia",
    country: "portugal",
    regions: ["porto", "vila-nova-de-gaia"],
    name: "Porto and Gaia",
    title: "A concert hall, a market, the other bank.",
    intro:
      "Explore the architecture around music, make your own market choices and give Port its own visit across the river.",
    stops: [
      {
        slug: "follow-the-building-around-the-music",
        role: "Architecture as the anchor",
        note: "Choose Casa da Música’s public tour and confirm its language and current access.",
      },
      {
        slug: "let-the-market-write-your-menu",
        role: "A flexible food choice",
        note: "Check Bolhão’s opening day before relying on it. Let individual traders and your appetite determine the stop.",
      },
      {
        slug: "taste-what-time-does-to-port",
        role: "Across the river in Gaia",
        note: "Book the cellar visit separately and plan the crossing. Do not turn separate admissions into a guaranteed timed route.",
      },
    ],
  },
  {
    slug: "porto-make-and-listen",
    chapter: "porto-and-gaia",
    country: "portugal",
    regions: ["porto", "vila-nova-de-gaia"],
    name: "Porto and Gaia",
    title: "A silver thread and a room full of sound.",
    intro:
      "Choose filigree or tile painting for a hands-on session. A performance can give another part of the stay its own focus.",
    stops: [
      {
        slug: "fit-a-silver-thread-into-portos-filigree",
        role: "Work with a fine detail",
        note: "Check the public workshop and what the beginner session includes before choosing a date.",
      },
      {
        slug: "paint-the-pattern-you-noticed",
        role: "Or start with a tile",
        note: "Treat tile painting as an alternative class. Confirm firing and collection if your departure is close.",
      },
      {
        slug: "hear-the-room-you-came-to-see-in-porto",
        role: "Choose the live programme",
        note: "A concert requires its own ticket and schedule. The room alone does not promise a performance.",
      },
    ],
  },
  {
    slug: "paris-taste-and-jazz",
    chapter: "paris",
    country: "france",
    regions: ["paris"],
    name: "Paris",
    title: "An ordinary meal. An extraordinary live evening.",
    intro:
      "Keep a Paris meal direct and approachable, then choose the musician who makes you want to stay out. A reading room offers a separate daytime contrast.",
    stops: [
      {
        slug: "read-a-paris-bouillon-through-an-ordinary-meal",
        role: "Choose a meal",
        note: "Read the current menu and arrival arrangements. Leave a buffer before any ticketed evening.",
      },
      {
        slug: "hear-a-new-trio-in-an-old-paris-room",
        role: "Book the music",
        note: "Choose the current jazz programme and set. Check the venue’s own terms before committing.",
      },
      {
        slug: "open-a-book-inside-pariss-salle-ovale",
        role: "A daytime possibility",
        note: "Visit the reading room during public hours and use it for reading. It is not an extension of the evening venues.",
      },
    ],
  },
  {
    slug: "paris-play-and-water",
    chapter: "paris",
    country: "france",
    regions: ["paris"],
    name: "Paris",
    title: "Fairground mechanics and a city seen from water.",
    intro:
      "See historic fairground objects in action on a public visit. Give a canal trip a separate block of time, with an elevated walk as a flexible alternative.",
    stops: [
      {
        slug: "let-pariss-old-fairground-objects-move",
        role: "A visit to book",
        note: "Confirm the public guided session and language. Do not assume walk-in access to the fairground collection.",
      },
      {
        slug: "let-paris-rise-around-a-canal-boat",
        role: "Another view of the city",
        note: "Check departure point, route and duration. Choose a separate outing if the guided visit leaves too little time.",
      },
      {
        slug: "walk-paris-above-its-old-railway",
        role: "A flexible alternative",
        note: "Check access and weather before walking. This is not a timed connection between the other two experiences.",
      },
    ],
  },
  {
    slug: "kyoto-colour-and-water",
    chapter: "kyoto",
    country: "japan",
    regions: ["kyoto"],
    name: "Kyoto",
    title: "Make a pattern. Follow the river.",
    intro:
      "Choose a textile session or a river-gorge railway outing as the main commitment. A bathhouse can offer an independent evening choice.",
    stops: [
      {
        slug: "unfold-the-pattern-you-kept-out-of-the-dye-in-kyoto",
        role: "Colour you make yourself",
        note: "Book the beginner dyeing session and check the language and collection arrangements.",
      },
      {
        slug: "follow-kyotos-river-gorge-by-slow-train",
        role: "A different day outdoors",
        note: "Check the railway’s operating season, tickets and departure point. Keep travel to the gorge in the plan.",
      },
      {
        slug: "give-kyoto-an-ordinary-bathhouse-evening",
        role: "An ordinary evening ritual",
        note: "Check bathing rules and opening times. Choose the bathhouse independently from the day’s bookings.",
      },
    ],
  },
  {
    slug: "kyoto-tea-and-small-details",
    chapter: "kyoto",
    country: "japan",
    regions: ["kyoto"],
    name: "Kyoto",
    title: "Tea, scent and a garden’s borrowed view.",
    intro:
      "Keep the tea session as a booked anchor. Add scent or a garden when opening hours, travel and your energy leave room.",
    stops: [
      {
        slug: "a-bowl-of-attention",
        role: "Begin with a reservation",
        note: "Confirm the tea session and language. Arrive for the booked time rather than treating it as a café stop.",
      },
      {
        slug: "find-a-place-through-its-scent",
        role: "A smaller visit",
        note: "Check the scent gallery’s opening hours and leave time to reach it.",
      },
      {
        slug: "follow-water-through-murin-ans-borrowed-landscape",
        role: "A garden choice",
        note: "Check admission and any reservation requirements. The garden is a separate visit, not part of the tea session.",
      },
    ],
  },
];
export function resolveCityEdits(items: PublicExperience[], chapter?: string) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return cityEdits
    .filter((edit) => !chapter || edit.chapter === chapter)
    .flatMap((edit) => {
      const stops = edit.stops.flatMap((stop) => {
        const item = bySlug.get(stop.slug);
        return item &&
          item.image &&
          item.countrySlug === edit.country &&
          edit.regions.includes(item.regionSlug)
          ? [{ ...stop, item }]
          : [];
      });
      return stops.length === edit.stops.length ? [{ ...edit, stops }] : [];
    });
}
