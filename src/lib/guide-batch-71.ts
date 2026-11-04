import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

type MontevideoGuide = Omit<
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

const torresVisit = "https://www2.torresgarcia.org.uy/visita.php";
const marketVisit = "https://www.descubrimontevideo.uy/mercado-del-puerto";
const solisVisit =
  "https://www.teatrosolis.org.uy/MAS-SOLIS/Visitas-Guiadas-uc1390";
const ramblaVisit = "https://www.descubrimontevideo.uy/rambla-sur";

function montevideoGuide({
  guideReview,
  ...guide
}: MontevideoGuide): PublicExperience {
  return {
    ...guide,
    id: guide.slug,
    country: "Uruguay",
    countrySlug: "uruguay",
    regionSlug: "montevideo",
    status: "public_guide",
    demo: false,
    ...guideImage(guide.slug),
    guideReview: {
      ...guideReview,
      basis: "public_sources",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-27",
    },
  };
}

export const montevideoDayGuides = [
  montevideoGuide({
    slug: "montevideo-torres-garcia-museum",
    title: "Read Torres García’s grids in Ciudad Vieja",
    summary:
      "Spend a morning with the small signs and strong lines of Joaquín Torres García. His museum occupies a former bazaar on Montevideo’s pedestrian Sarandí.",
    field: "learn",
    place: "Montevideo, Ciudad Vieja",
    kernel:
      "Choose a work with a visible grid and follow a single line until it meets a sign or changes direction. See which details look like things you recognise and which work more like punctuation. Try the same exercise with a second piece. Look at what the artist can change while keeping the underlying structure.",
    rootedness:
      "After returning to Montevideo in 1934, Torres García developed and taught the approach he called Constructive Universalism. The museum connects that work to the city where he wrote, taught and set up a workshop. Its Art Nouveau building on Sarandí originally housed the Broqua y Sholberg bazaar.",
    shift:
      "Read the lines between the signs as carefully as the signs themselves.",
    humanReturn:
      "A way to look closely at a picture before reaching for the label.",
    responsibility:
      "Follow gallery photography signs and give others room at the cases. The museum lists a ramp and a lift to all floors. Ask in advance if you need interpretation in a particular language.",
    evidence:
      "The museum publishes admission, opening hours and physical access. Its exhibition archive describes the visual ideas behind this visit. Individual works rotate, and EA has not verified the current installation or gallery languages on site.",
    duration: "Allow about an hour for a self-paced visit.",
    participation:
      "Look closely at artworks during an independent museum visit.",
    access:
      "Enter at Peatonal Sarandí 683. The museum lists daily opening from 10:00 to 18:00, with holiday exceptions and gallery clearing ten minutes before closing. Check current admission and exhibitions before visiting. The museum lists guided visits separately.",
    guideReview: {
      scope: "public_admission",
      accessUrl: torresVisit,
      sources: [
        {
          title: "Museo Torres García: visiting information",
          url: torresVisit,
          note: "Address, opening, admission, ramp, lift and separate guided formats.",
        },
        {
          title: "Museo Torres García: Constructive Universalism",
          url: "https://www2.torresgarcia.org.uy/exposiciones/itinerantes/universalismo-constructivo.php",
          note: "The artist’s return, visual vocabulary and book. This is an exhibition archive.",
        },
      ],
    },
  }),
  montevideoGuide({
    slug: "montevideo-mercado-del-puerto-parrilla",
    title: "Read the fire before ordering at Mercado del Puerto",
    summary:
      "Choose lunch beside a working parrilla in Montevideo’s old port market. Start by watching how the cook moves embers and food across the grill.",
    field: "taste",
    place: "Montevideo, Ciudad Vieja",
    kernel:
      "Look for an open grill and ask whether a seat with a view is available. Watch where the cook builds the fire and where the heat is used. If it is on the menu, order asado de tira and see how the thin cross-cut ribs cook. Ask about portion size before ordering a mixed grill.",
    rootedness:
      "Mercado del Puerto opened in 1868 under an iron structure made in Liverpool. The port and the iron roof explain its scale. The grills explain why people sit down and stay. Several independent dining rooms share the same building and each keeps its own menu.",
    shift: "Use the grill to understand the meal before the plate arrives.",
    humanReturn:
      "A better eye for how a fire is managed and a specific cut to ask for again.",
    responsibility:
      "Expect open fires, smoke and busy aisles. Ask about ingredients, shared grills and access before sitting if any of these affect you. Keep the working area clear and ask before photographing staff.",
    evidence:
      "Municipal sources document the market and its food offer. El Palenque publishes daytime service for its market address. Hours, menu, seating and dietary accommodations vary by business. EA has not assessed the kitchens on site.",
    duration:
      "Set aside 60 to 90 minutes for lunch, with extra time if there is a wait.",
    participation: "Choose and pay for lunch at an independently run parrilla.",
    access:
      "Enter at Piedras 237, near Pérez Castellano. Compare the menus of open stalls. El Palenque lists daily daytime hours at Pérez Castellano 1579, within the market. Confirm seating, prices and any reservation with the restaurant you choose.",
    guideReview: {
      scope: "public_hospitality",
      accessUrl: marketVisit,
      sources: [
        {
          title: "Descubrí Montevideo: Mercado del Puerto",
          url: marketVisit,
          note: "Official visitor introduction to the market and its parrillas.",
        },
        {
          title: "Uruguay’s Ministry of Social Development: city guide",
          url: "https://www.gub.uy/ministerio-desarrollo-social/sites/ministerio-desarrollo-social/files/documentos/publicaciones/880.pdf",
          note: "Market opening, port setting and iron structure.",
        },
        {
          title: "El Palenque: Montevideo branch",
          url: "https://elpalenque.com.uy/",
          note: "One market restaurant’s address, daytime hours and contact details.",
        },
      ],
    },
  }),
  montevideoGuide({
    slug: "montevideo-teatro-solis-guided-tour",
    title: "Read the room from inside Teatro Solís",
    summary:
      "Join a public guided visit in Ciudad Vieja and look at what the tiers, boxes and sightlines tell you about a working theatre that opened in 1856.",
    field: "witness",
    place: "Montevideo, Ciudad Vieja",
    kernel:
      "When the guide takes the group into a performance space, start with the audience. Look at which seats face the stage directly and which see it from an angle. Ask which parts of the room changed in the restoration. The route may shift with rehearsals and technical work.",
    rootedness:
      "The Solís opened with Verdi’s Ernani in 1856 and reopened after a major renovation in 2004. The building in Ciudad Vieja still has active performance rooms, alongside an archive and exhibition spaces. A visit lets you see how a historic room is used in a contemporary programme.",
    shift: "Read a theatre from where the audience sits.",
    humanReturn:
      "Something to look for next time you choose a seat in a performance hall.",
    responsibility:
      "Stay with the guide and follow room and photography restrictions. The city visitor guide lists accessible circulation and a lift. Confirm the day’s route and any specific language or mobility needs with the theatre.",
    evidence:
      "The dedicated tour page lists the public afternoon sessions and warns that routes and hours change. The theatre’s general information lists Spanish, English and Portuguese, but its times differ from the dedicated page. Confirm the session and language together. EA has not taken the tour on site.",
    duration:
      "Keep about an hour free as a planning allowance and ask the box office for the actual tour length.",
    participation:
      "Join a guided public building visit. Performances have their own admission.",
    access:
      "Go to Teatro Solís at Buenos Aires and Bartolomé Mitre. The dedicated tour page generally lists 16:00 Wednesday through Friday and 15:00 and 16:00 on weekends. Check date exceptions and buy at the theatre box office where a fee applies. Ask which language is offered in your slot.",
    guideReview: {
      scope: "public_programme",
      accessUrl: solisVisit,
      sources: [
        {
          title: "Teatro Solís: public guided tours",
          url: solisVisit,
          note: "Dedicated schedule, exceptions, box office and changes for technical or artistic reasons.",
        },
        {
          title: "Teatro Solís: general information",
          url: "https://www.teatrosolis.org.uy/categoria/Informacion-general-119",
          note: "Venue contact and published tour languages. Use the dedicated programme for times.",
        },
        {
          title: "Descubrí Montevideo: Teatro Solís",
          url: "https://www.descubrimontevideo.uy/teatro-solis",
          note: "Opening history, current use and access information.",
        },
      ],
    },
  }),
  montevideoGuide({
    slug: "montevideo-rambla-sur-playa-ramirez",
    title: "Follow Montevideo’s Rambla Sur to Playa Ramírez",
    summary:
      "Walk east from Plaza España along the Río de la Plata to the small bay opposite Parque Rodó. Give the working edge of the city a stretch of daylight.",
    field: "move",
    place: "Montevideo, Rambla Sur and Parque Rodó",
    kernel:
      "Join the waterfront by Plaza España and follow the public promenade east, with the water to your right. Watch the line of the sea wall give way to the curve of Playa Ramírez. Pause above the sand if it is windy, or end at the park across the road using a marked crossing.",
    rootedness:
      "The Rambla Sur opened in 1935. Its straight lines and low walls reshaped the edge of Ciudad Vieja and the neighbourhoods beyond it. The city’s visitor guide traces the project back to a shoreline of small beaches, quarries and houses. At Playa Ramírez the sea wall opens into a sandy bay.",
    shift:
      "See how the city’s street grid gives way to an uninterrupted public shore.",
    humanReturn:
      "A route you can return to without an appointment, with a different river each time.",
    responsibility:
      "Check wind and waterfront notices. Stay on the promenade if waves are breaking over the edge, use marked crossings and leave room for others. This is a shore walk. Follow municipal beach advice separately if you plan to swim.",
    evidence:
      "Municipal sources document the promenade, the beach and their relationship to Parque Rodó. The walk is an EA editorial suggestion. Current surface conditions, crossings along the full stretch and end-to-end step-free access have not been checked on site.",
    duration:
      "Allow 45 to 75 minutes on foot with pauses. For a shorter visit, start and finish on the promenade at Playa Ramírez.",
    participation: "Independent walk on a public waterfront, at your own pace.",
    access:
      "Start near Plaza España at the Ciudad Vieja end and finish at Playa Ramírez on Rambla Presidente Wilson, opposite Parque Rodó. Public promenade access is free. Check the weather, daylight and any city notices before setting off.",
    guideReview: {
      scope: "public_observation",
      accessUrl: ramblaVisit,
      sources: [
        {
          title: "Descubrí Montevideo: Rambla Sur",
          url: ramblaVisit,
          note: "Free public access and the history of the waterfront project.",
        },
        {
          title: "Descubrí Montevideo: beaches and the Rambla",
          url: "https://www.descubrimontevideo.uy/playas-y-rambla",
          note: "Relationship between the Río de la Plata, the promenade and Montevideo’s public beaches.",
        },
        {
          title: "Descubrí Montevideo: Playa Ramírez",
          url: "https://www.descubrimontevideo.uy/playa-ramirez",
          note: "Free access and accessibility details for the beach end of the walk.",
        },
      ],
    },
  }),
];
