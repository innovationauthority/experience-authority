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
  zagreb: { country: "Croatia", countrySlug: "croatia" },
  rotterdam: { country: "Netherlands", countrySlug: "netherlands" },
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
      reviewBy: "2027-01-20",
    },
  };
}

const bistro = "https://lebistro.hr/en/";
const teslaLab = "https://tmnt.hr/nikolatesla";
const depotVisit = "https://www.boijmans.nl/en/visit/depot";
const fenixVisit = "https://www.fenix.nl/en/plan-your-visit/";

export const destinationDayGuides = [
  cityGuide("zagreb", {
    slug: "zagreb-esplanade-baked-strukli",
    title: "Break the golden crust on Esplanade štrukli",
    summary:
      "Order the baked version of this Zagorje dish at Le Bistro in Zagreb. The kitchen has been serving its version since 1951, and the crust is part of the reason to wait.",
    field: "taste",
    place: "Zagreb, Lower Town",
    kernel:
      "Order the baked štrukli and leave time for the dish to come from the oven. Break the browned cream with the edge of your spoon. Try a little from the edge and then from the softer centre. The same parcel gives you the contrast between baked cream, stretched dough and the fresh cheese it holds.",
    rootedness:
      "The dish comes from the Zagorje region. The Esplanade began serving its own version at formal occasions in Zagreb in 1951, turning a regional household dish into a city dining-room classic. The hotel describes stretching the dough, filling it with fresh cheese, steaming the parcels and baking them in cream.",
    shift:
      "Pay attention to what the second cooking does to the same dough and filling.",
    humanReturn:
      "A particular version of štrukli to remember the next time you see them served boiled or baked.",
    responsibility:
      "The classic contains dairy and wheat. Ask the restaurant about egg, other allergens and cross-contact before ordering. Confirm step-free seating or other access needs when making a reservation.",
    evidence:
      "The restaurant lists baked štrukli on its regular menu. The hotel’s press material documents the house method and date, and Michelin independently identifies the dish as a house specialty. EA has not tasted it on site. The winter promotion described in the image source was a separate, dated offer.",
    duration:
      "Allow about an hour. The published menu gives 25 to 30 minutes for preparation.",
    participation:
      "Order and eat the dish at Le Bistro. The kitchen does the preparation.",
    access:
      "Le Bistro is at Mihanovićeva 1. The à la carte menu starts at noon. Check the current menu and book a table directly if you are building lunch around a timed museum visit.",
    guideReview: {
      scope: "public_hospitality",
      accessUrl: bistro,
      sources: [
        {
          title: "Le Bistro: restaurant and reservations",
          url: bistro,
          note: "Address, regular dish and direct reservation route.",
        },
        {
          title: "Hotel Esplanade: à la carte menu",
          url: "https://www.esplanade.hr/press/download/menus/Esplanade-Zagreb-Hotel-Le-Bistro-a-la-Carte-Menu.pdf",
          note: "Baked štrukli, menu service and estimated preparation time.",
        },
        {
          title: "Hotel Esplanade: the house method",
          url: "https://esplanade.hr/esplanade-strukli-days-return-to-le-bistro-the-beloved-winter-gastro-tradition-of-hotel-esplanade-zagreb/",
          note: "Zagorje origin, 1951 date and preparation. The promotion has ended.",
        },
        {
          title: "Michelin Guide: Le Bistro Esplanade",
          url: "https://guide.michelin.com/en/zagreb-region/zagreb/restaurant/le-bistro-esplanade",
          note: "Independent coverage of the restaurant and its long-standing house dish.",
        },
      ],
    },
  }),
  cityGuide("zagreb", {
    slug: "zagreb-tesla-demonstration-lab",
    title: "Watch Tesla’s experiments run in Zagreb",
    summary:
      "Take a seat in the Technical Museum’s demonstration lab to see staff run experiments from Tesla’s work on rotating fields, high-frequency currents and wireless transmission.",
    field: "witness",
    place: "Zagreb, Savska cesta",
    kernel:
      "At the demonstration, choose one experiment to follow from setup to result. If the rotating field is on the programme, watch for the instant the metal object responds before you look back at the apparatus. Several instruments are working reconstructions based on drawings or patent applications. Ask staff what the reconstruction lets you see.",
    rootedness:
      "Zagreb’s Nikola Tesla Technical Museum keeps a demonstration room alongside its collections. It houses an 1895 Tesla transformer as well as replicas made to show how parts of his work operate. The public session turns a museum object back into an experiment you can follow.",
    shift:
      "Watch the apparatus produce an effect before you reach for the explanation.",
    humanReturn:
      "A mental picture of a magnetic field at work, attached to an experiment you saw run.",
    responsibility:
      "Follow staff instructions around live equipment. Some demonstrations involve bright discharges or sudden sound. Ask the museum about sensory and mobility needs, and about the session language. Any participation is at staff invitation.",
    evidence:
      "The museum publishes a regular individual demonstration schedule and describes the equipment and typical experiments. It does not guarantee an experiment list or an English individual session. EA has not attended the current programme.",
    duration:
      "Keep about an hour free for arrival, the demonstration and a look at the museum. Ask staff for the session length.",
    participation: "Watch a staff-led demonstration from the audience.",
    access:
      "Go to Savska cesta 18. The museum lists 15:30 Tuesday to Friday and 11:30 on Saturday and Sunday for individuals, with exceptions on holidays. The demonstration is included in permanent-exhibition admission. Check the day’s timetable and arrive before the start.",
    guideReview: {
      scope: "public_programme",
      accessUrl: teslaLab,
      sources: [
        {
          title: "Nikola Tesla Technical Museum: demonstration laboratory",
          url: teslaLab,
          note: "Individual session times, typical experiments, transformer and reconstructions.",
        },
        {
          title: "Nikola Tesla Technical Museum: visit",
          url: "https://tmnt.hr/en-gb/Visit",
          note: "Opening, address, public transport and what admission includes.",
        },
        {
          title: "Zagreb Museum Weekend: Nikola Tesla show",
          url: "https://zg-muv.hr/en/program/nikola-tesla-show/",
          note: "Documents a September 2026 demonstration and the role of working replicas. Use the museum for current times.",
        },
      ],
    },
  }),
  cityGuide("rotterdam", {
    slug: "rotterdam-depot-boijmans-art-storage",
    title: "See how Rotterdam keeps its art in storage",
    summary:
      "Start with the glass and stairs at Depot Boijmans Van Beuningen, then see how a working art store arranges what a gallery would put on the wall.",
    field: "work",
    place: "Rotterdam, Museumpark",
    kernel:
      "Look through a storage window and try to work out why objects are arranged the way they are. Pay attention to frames, racks and the room around them. Ask at the entrance which compartments have a short Walk-in session. If there is space, use it to ask what material or condition determines where an object goes.",
    rootedness:
      "The museum opened its public depot in Museumpark in 2021. MVRDV’s mirrored building houses the collection and its storage and care facilities. The storage compartments use different climate conditions for different materials, a way of grouping art you rarely see in a gallery.",
    shift:
      "Look at a picture and the conditions that let it survive in the same visit.",
    humanReturn:
      "A better question to ask the next time a work is absent from a gallery wall.",
    responsibility:
      "This is a working store. Stay in visitor areas and follow staff guidance around objects and compartments. Check lift access, ticket arrangements and any language needs with the museum.",
    evidence:
      "The museum publishes public admission and describes Walk-in compartment visits of about ten minutes, with limited places. EA has not inspected the current rooms or verified which compartments will open on a given date.",
    duration:
      "Allow 90 minutes or more for the public route. A Walk-in visit is about ten minutes when available.",
    participation:
      "Visit a working art store independently, with an optional staff-led look inside an available compartment.",
    access:
      "Go to Museumpark 24. The Depot lists Tuesday to Sunday, 11:00 to 17:00. Use the museum’s ticket page for the date and time of your visit. Ask at the entrance about Walk-in places and which languages are available.",
    guideReview: {
      scope: "public_admission",
      accessUrl: depotVisit,
      sources: [
        {
          title: "Boijmans: visit the Depot",
          url: depotVisit,
          note: "Public opening, tickets and the limited Walk-in sessions.",
        },
        {
          title: "Boijmans: about the Depot",
          url: "https://www.boijmans.nl/en/depot/about-depot",
          note: "Architecture, opening history and working collection storage.",
        },
      ],
    },
  }),
  cityGuide("rotterdam", {
    slug: "rotterdam-fenix-migration-warehouse",
    title: "Read a departure from Rotterdam’s Fenix warehouse",
    summary:
      "Follow individual journeys through Fenix, then return to the quay that gives the museum its setting. The staircase takes you back to the city’s river and its former passenger port.",
    field: "learn",
    place: "Rotterdam, Katendrecht",
    kernel:
      "Start with one suitcase or photograph and read the story beside it. Hold onto a detail from that account as you move through the former warehouse. Take the Tornado if it suits you, then use the view from the top or the quay to place the building beside the water. The contrast is between a journey someone remembers and the infrastructure that made departure possible.",
    rootedness:
      "Fenix opened in a former harbour warehouse in Katendrecht. It brings contemporary art, documentary photography and personal accounts into a building on Rotterdam’s historic departure and arrival quays. MAD Architects’ Tornado reconnects the visitor with that setting above the roof.",
    shift: "Put one person’s account next to the physical scale of the port.",
    humanReturn:
      "A more specific way to remember a quay than the skyline alone.",
    responsibility:
      "Allow space for accounts of difficult journeys and choose what you wish to read. The staircase is optional. Ask Fenix about lift access and assistance for your visit, and follow guidance on photographing exhibits.",
    evidence:
      "Fenix describes the public exhibits, the Tornado, admission and visitor access. Displays and individual objects can change. EA has not verified the current arrangement on site.",
    duration: "Fenix advises at least 90 minutes for the museum and Tornado.",
    participation:
      "An independently ticketed exhibition visit, with an optional staircase and rooftop view.",
    access:
      "Enter at Paul Nijghkade 5. The museum generally lists 10:00 to 17:00 Tuesday to Sunday, with holiday exceptions. Choose an afternoon ticket after confirming travel. Fenix lists Wilhelminaplein as a public transport approach if you skip the water taxi.",
    guideReview: {
      scope: "public_admission",
      accessUrl: fenixVisit,
      sources: [
        {
          title: "Fenix: plan your visit",
          url: fenixVisit,
          note: "Hours, tickets, routes, accessibility and Plein’s separate hours.",
        },
        {
          title: "Fenix: visitor questions",
          url: "https://www.fenix.nl/en/veelgestelde-vragen/",
          note: "Migration collections, visit duration and visitor guidance.",
        },
        {
          title: "Fenix: the Tornado",
          url: "https://www.fenix.nl/nl/tornado/",
          note: "Architectural staircase and views back across the river.",
        },
        {
          title: "Watertaxi Rotterdam: official landings",
          url: "https://www.watertaxirotterdam.nl/steigerlocaties",
          note: "The operator lists Fenix / Walhalla as landing 50.",
        },
      ],
    },
  }),
];
