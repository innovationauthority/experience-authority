import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

type CityGuide = Omit<
  PublicExperience,
  | "id"
  | "country"
  | "countrySlug"
  | "regionSlug"
  | "status"
  | "demo"
  | "image"
  | "imageAlt"
  | "guideReview"
> & {
  guideReview: Pick<GuideReview, "scope" | "accessUrl" | "sources">;
};

const cities = {
  bath: { country: "United Kingdom", countrySlug: "united-kingdom" },
  tampere: { country: "Finland", countrySlug: "finland" },
};

function cityGuide(
  regionSlug: keyof typeof cities,
  { guideReview, ...guide }: CityGuide,
): PublicExperience {
  return {
    ...guide,
    id: guide.slug,
    ...cities[regionSlug],
    regionSlug,
    status: "public_guide",
    demo: false,
    ...guideImage(guide.slug),
    guideReview: {
      ...guideReview,
      basis: "public_sources",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-23",
    },
  };
}

const herschelVisit = "https://herschelmuseum.org.uk/visit/";
const bathsVisit = "https://www.romanbaths.co.uk/visit";
const vapriikkiVisit = "https://www.vapriikki.fi/en/";
const marketShops = "https://kauppahalli.tampere.fi/en/shops/";

export const bathTampereGuides = [
  cityGuide("bath", {
    slug: "bath-herschel-garden-uranus",
    title: "Stand in the Bath garden where Uranus was discovered",
    summary:
      "Follow the work from a mirror-making workshop to a small back garden. At the Herschels’ house, a discovery that changed the map of the solar system began at home.",
    field: "learn",
    place: "Bath, New King Street",
    kernel:
      "Start with the workshop and look for the damage to the flagstones from a spill of molten metal. Use the telescope replica to picture how a polished mirror gathered light. Then step into the garden, if open, and look back at the distance between the house and the spot where William Herschel made his observation in 1781.",
    rootedness:
      "William and Caroline Herschel lived on New King Street when he identified what became known as Uranus. Caroline went on to discover comets herself. The museum puts their music and astronomy back into a domestic setting, where the rooms were used for work as well as ordinary life.",
    shift:
      "Go from a mark on a workshop floor to a discovery made in the night sky.",
    humanReturn:
      "A sense of how much making and repeated observation can sit behind one moment of discovery.",
    responsibility:
      "The museum occupies a historic townhouse with steps and stairs. Check the access information or call ahead if you need a step-free route. This visit uses objects, displays and the garden. It includes no observing session.",
    evidence:
      "The museum identifies the house and garden, documents the siblings’ work and lists its workshop and telescope displays. Visit Bath corroborates the setting. EA has not visited the house or checked the rooms open on any particular day.",
    duration: "Allow 45 to 60 minutes for the house, workshop and garden.",
    participation: "Independent visit to the house museum and garden.",
    access:
      "Go to 19 New King Street. The current schedule lists Tuesday to Sunday, 10:00 to 17:00, with last full entry at 16:00 and holiday exceptions. Reserve a ticket or ask about walk-in space. Check the current timetable before going.",
    guideReview: {
      scope: "public_admission",
      accessUrl: herschelVisit,
      sources: [
        {
          title: "Herschel Museum of Astronomy: visit",
          url: herschelVisit,
          note: "Current seasonal hours, admissions and access information for the townhouse.",
        },
        {
          title: "Herschel Museum of Astronomy: explore the museum",
          url: "https://herschelmuseum.org.uk/about/explore/",
          note: "Workshop, garden and telescope replica.",
        },
        {
          title: "Visit Bath: Herschel Museum of Astronomy",
          url: "https://www.visitbath.co.uk/things-to-do/herschel-museum-of-astronomy-p26431",
          note: "Local visitor listing and context for the Herschels’ house.",
        },
      ],
    },
  }),
  cityGuide("bath", {
    slug: "bath-roman-baths-follow-the-spring",
    title: "Follow the spring through Bath’s Roman engineering",
    summary:
      "See the Great Bath, then follow the thermal water through the site. The overflow and drain explain how a spring became a bathing complex.",
    field: "witness",
    place: "Bath, Abbey Church Yard",
    kernel:
      "Take in the Great Bath from above and then at water level if the route suits you. At the Sacred Spring, look for where the water collects. Follow the visitor route to the overflow and Roman drain and look for how the builders gave surplus water a route away from the pools.",
    rootedness:
      "The hot spring drew people to Roman Aquae Sulis. Here it supplied a place of worship as well as a bathing complex. The water still moves through parts of the site. The terrace above the Great Bath belongs to a later phase of the city’s history, which makes the view from above a useful point of comparison.",
    shift:
      "Look past the familiar terrace view and work out where the water actually goes.",
    humanReturn:
      "A way to read a famous site through an engineering decision you can still see at work.",
    responsibility:
      "Keep behind barriers and out of the historic water. Expect uneven paving and wet surfaces. Check the museum’s lift route and access details in advance if you need them. The modern Thermae Bath Spa is separately ticketed.",
    evidence:
      "The Roman Baths document the Sacred Spring, overflow and drain in their walkthrough and publish timed admissions and access information. EA has not assessed crowding, lift availability or any temporary route changes on site.",
    duration: "Set aside about 90 minutes.",
    participation:
      "Timed museum admission with a self-paced archaeological route.",
    access:
      "Book timed admission for the Roman Baths at Abbey Church Yard. Use the museum’s visit page for current opening and last entry. An audio guide is included. Ask staff about the lift route if you need to avoid the stairs.",
    guideReview: {
      scope: "public_admission",
      accessUrl: bathsVisit,
      sources: [
        {
          title: "The Roman Baths: visit",
          url: bathsVisit,
          note: "Timed tickets, visitor entrance and opening details.",
        },
        {
          title: "The Roman Baths: walkthrough",
          url: "https://www.romanbaths.co.uk/walkthrough",
          note: "The Sacred Spring, the Great Bath and the spring overflow.",
        },
        {
          title: "The Roman Baths: accessibility",
          url: "https://www.romanbaths.co.uk/accessibility",
          note: "Lift routes and access limits on the historic site.",
        },
      ],
    },
  }),
  cityGuide("tampere", {
    slug: "tampere-vapriikki-play-finnish-games",
    title: "Play across eras at Tampere’s Finnish Museum of Games",
    summary:
      "Choose two games from different decades and spend a few minutes with each. The move from one set of controls to the next makes the history tangible.",
    field: "learn",
    place: "Tampere, Vapriikki",
    kernel:
      "Pick a playable title from one of the earlier rooms and try to work out its controls before looking for help. Then try a later title, or compare the first game with one of the tabletop examples. Look for where each game teaches you its rules. If a station has a queue, choose another and give someone else a turn when you are done.",
    rootedness:
      "Tampere’s Finnish Museum of Games grew from collaboration between the city, local researchers, museum staff and game preservation volunteers. Its renewed exhibition, which opened in October 2026, follows Finnish play from early board games into recent releases. Period rooms put the games alongside some of the settings people played them in.",
    shift:
      "Use the first few moves of two games to compare what each expects you to know.",
    humanReturn:
      "A more personal way to understand game history, through choices and mistakes you make yourself.",
    responsibility:
      "Follow posted game age ratings and give other visitors a turn. Ask about adapted controls, seating or a quieter visit if needed. Individual controls, sound and on-screen languages vary by game.",
    evidence:
      "Vapriikki confirms the renewed display, playable games and public opening. Game Makers of Finland documents the collaboration and period rooms. The photograph shows the museum before the renewal. EA has not played the stations or checked which titles are available on a specific day.",
    duration: "Allow 75 to 120 minutes for the games museum alone.",
    participation: "Self-guided museum visit with play at available stations.",
    access:
      "Go to Vapriikki at Alaverstaanraitti 5. The general museum ticket includes the exhibition. Published hours are Tuesday to Sunday, 10:00 to 18:00, with exceptions. Exhibition texts are available in Finnish and English. Check the current tickets and exceptions before visiting.",
    guideReview: {
      scope: "public_admission",
      accessUrl: vapriikkiVisit,
      sources: [
        {
          title: "Vapriikki: opening and admission",
          url: vapriikkiVisit,
          note: "Address, weekly opening, general admission and exhibition language.",
        },
        {
          title: "Vapriikki: the renewed Finnish Museum of Games",
          url: "https://www.vapriikki.fi/en/news/the-renewed-finnish-museum-of-games-will-open-on-saturday-october-10/",
          note: "October 2026 reopening, expanded display and range of playable games.",
        },
        {
          title: "Game Makers of Finland: the Finnish Museum of Games",
          url: "https://www.peliala.fi/en/news/gmoffi-corner-industry-highlight-th/",
          note: "Period rooms, hands-on hardware and the Tampere institutions behind the museum.",
        },
      ],
    },
  }),
  cityGuide("tampere", {
    slug: "tampere-kauppahalli-warm-mustamakkara",
    title: "Order warm mustamakkara at Tampere’s market hall",
    summary:
      "Try a small serving of Tampere’s dark blood sausage with lingonberries. It is the kind of lunch you can order at the counter and eat while it is still warm.",
    field: "taste",
    place: "Tampere, Kauppahalli",
    kernel:
      "At the counter, ask whether the mustamakkara is being served warm and order a small portion with lingonberries. Try it on its own first, then with the berries. The contrast between the dark, grainy sausage and the tart fruit is the point of the pairing.",
    rootedness:
      "Mustamakkara is a Tampere speciality made with pork blood and rye. The city’s market hall has more than one counter associated with it. The value of the stop is trying it in the ordinary way it is sold in the city, in a simple serving rather than as part of a tasting menu.",
    shift: "See what changes when you add the tart lingonberries.",
    humanReturn:
      "A specific Tampere lunch and one local combination you can recognise again.",
    responsibility:
      "The sausage contains animal blood and rye. Ask the counter about its recipe, other ingredients and shared preparation if you have an allergy or dietary restriction. Leave room for others at the counter and check seating if you need it.",
    evidence:
      "The municipal market hall directory names Lihakipparit and posts its hours. Visit Tampere documents the local dish and other market hall counters. EA has not sampled a serving or verified daily stock, prices or seating.",
    duration: "Allow 30 to 45 minutes for a counter lunch.",
    participation: "Order a portion during public opening hours.",
    access:
      "Enter Tampere Market Hall from Hämeenkatu 19. Lihakipparit lists weekdays 09:00 to 18:00 and Saturdays 09:00 to 16:00 in the hall directory. Aim for lunch and check the counter if warm service matters. Individual stalls keep their own hours.",
    guideReview: {
      scope: "public_hospitality",
      accessUrl: marketShops,
      sources: [
        {
          title: "Tampere Market Hall: shops and hours",
          url: marketShops,
          note: "Municipal directory identifying Lihakipparit as a mustamakkara counter and publishing its opening hours.",
        },
        {
          title: "Visit Tampere: food to try in Tampere",
          url: "https://visittampere.fi/en/articles/8-must-try-foods-from-finland-where-to-find-them-in-tampere/",
          note: "The dish, customary serving and examples of places to find it in the market hall.",
        },
      ],
    },
  }),
];
