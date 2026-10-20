import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-20",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-20",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

export const guideBatch47: PublicExperience[] = [
  {
    id: "athens-greek-kitchen",
    slug: "cook-athens-from-market-to-table",
    title: "Cook Athens from market to table",
    summary:
      "Look around the Central Market, then turn vine leaves, phyllo and vegetables into a meal you help prepare.",
    field: "taste",
    place: "Athens, Athinas Street",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "athens",
    ...common,
    ...guideImage("athens-greek-kitchen"),
    kernel:
      "Choose The Greek Kitchen's Classic Cooking Class. A short market walk precedes communal preparation and eating. Notice how wrapping rice in a leaf differs from arranging a spinach filling in phyllo. The ingredients become easier to remember when each asks your hands to do something different. Stay for the meal rather than treating the finished dishes as props.",
    rootedness:
      "The teaching kitchen is on Athinas Street near Athens Central Market. It offers a contemporary public introduction to several Greek dishes, not entry to a family home or a complete account of Greek food. The phyllo is bought ready-made, an honest and useful distinction from a pastry-making lesson.",
    shift:
      "A familiar taverna menu becomes a set of decisions you can recognise and try again.",
    humanReturn:
      "Take the recipes home and begin with one technique rather than reproducing a whole holiday meal.",
    responsibility:
      "Book the Classic format, not the separate evening meze class. Current sessions are Monday to Saturday, with about four hours including the market and meal. Request ingredient substitutions at least 24 hours ahead. Confirm allergens, teaching language, children's places and physical access. Wear closed shoes and arrive before the market walk departs. Alcohol is restricted to adults and need not define the experience. Do not assume every market stall operates for the full afternoon.",
    evidence:
      "The current class page specifies communal hands-on cooking, the menu, a market walk and dining. Its FAQ explains arrival and dietary arrangements. EA has not attended or tasted the class. The photograph documents the teaching kitchen, not an EA visit or a promised instructor.",
    duration: "About 4 hours including the market walk and meal",
    participation:
      "Communal cooking with instruction, followed by eating together",
    access:
      "Reserve the Classic Cooking Class through the school's official link and confirm your date, language and Athinas 36 meeting point. No EA reservation, private-home invitation or market purchase is implied.",
    guideReview: review("public_programme", [
      {
        title: "The Greek Kitchen: Classic Cooking Class",
        url: "https://www.greekkitchenathens.com/cooking-in-athens",
        note: "Current menu, four-hour scope, prepared phyllo, dietary notice and reservation link.",
      },
      {
        title: "The Greek Kitchen: practical FAQ",
        url: "https://www.greekkitchenathens.com/faq",
        note: "Communal participation, arrival and clothing advice. The school's claims are not independent quality validation.",
      },
    ]),
  },
  {
    id: "taipei-cookinn-dumplings",
    slug: "fold-taipeis-soup-inside-a-dumpling",
    title: "Fold Taipei's soup inside a dumpling",
    summary:
      "Make xiao long bao at a Taipei cooking class and discover the practical work hidden inside a familiar steamed basket.",
    field: "taste",
    place: "Taipei, CookInn teaching kitchens",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    ...common,
    ...guideImage("taipei-cookinn-dumplings"),
    kernel:
      "Choose CookInn's Xiao Long Bao & Beef Noodles class. Follow the preparation of a dumpling wrapper, filling and seal, then sit down to the cooked meal. The advertised menu also includes noodles, a vegetable side and bubble milk tea. Let the small problem of containing soup explain more than another photograph of a steamer.",
    rootedness:
      "Taipei has made soup dumplings a recognisable part of its dining landscape, without being the sole origin of the dish. A local teaching kitchen lets visitors ask how the food is assembled. The city tourism office's earlier class report supplies context, not evidence of today's staff or menu.",
    shift:
      "The dumpling you already wanted to eat becomes something you can understand from its edges inward.",
    humanReturn:
      "Remember one fold that improved with practice, not a promised professional number of pleats.",
    responsibility:
      "The published three-hour class has a four-person minimum and a maximum of twelve. A session can move or be refunded if the minimum is unmet. English, Japanese and Mandarin are offered, but confirm the selected session's language and branch. Declare allergies before booking. Pork is standard, chicken must be requested, and the vegetarian version is a different menu. Wheat, milk and sesame are among the stated allergens. Floor levels and access differ between the Zhongshan and Ximen kitchens.",
    evidence:
      "The current school page describes the dishes, hands-on wrapper preparation and participation conditions. Official locations distinguish two kitchens. Taipei's 2024 report corroborates the school's teaching context. EA has not attended, tasted the food or independently assessed dietary accommodation.",
    duration: "3 hours including the meal",
    participation:
      "Instructed dumpling preparation and cooking, followed by lunch",
    access:
      "Use the school's official reservation link for Xiao Long Bao & Beef Noodles. Confirm the actual branch, date, minimum numbers and language before travel. The separate market class is not included.",
    guideReview: review("public_programme", [
      {
        title: "CookInn: Xiao Long Bao & Beef Noodles",
        url: "https://cookinn.tw/signature-taiwanese-dumplings-and-noodles-2/",
        note: "Current three-hour menu, teaching languages, participant limits and dietary variants.",
      },
      {
        title: "CookInn: locations",
        url: "https://cookinn.tw/location-and-transport-2/",
        note: "Distinct Zhongshan and Ximen addresses. The booking confirmation decides the venue.",
      },
      {
        title: "Taipei City: Cooking with CookInn Taiwan",
        url: "https://www.travel.taipei/en/pictorial/article/58270",
        note: "Official 2024 contextual report, accessible through ordinary web search. Direct retrieval returned 403. Not used for current availability.",
      },
    ]),
  },
  {
    id: "palermo-streaty-markets",
    slug: "taste-palermo-between-the-market-counters",
    title: "Taste Palermo between the market counters",
    summary:
      "Walk Palermo's Capo and Vucciria markets with a guide and make a meal from the city's street-food vocabulary.",
    field: "taste",
    place: "Palermo, Capo and Vucciria",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "palermo",
    ...common,
    ...guideImage("palermo-streaty-markets"),
    kernel:
      "Join Streaty's morning market and street-food walk from Teatro Massimo. Ask what a fried rice ball, chickpea fritter or piece of sfincione contributes to the meal. Taste at the stops actually operating that day. The interest is how several ordinary counters build a picture of Palermo, not how many unfamiliar ingredients you can be persuaded to eat.",
    rootedness:
      "Capo and Vucciria remain working parts of the city, not a food set reserved for a tour. The operator describes a route through market streets and local food businesses. Shops, customers and residents keep their own purposes while visitors pass through.",
    shift:
      "Street food becomes a way of noticing a neighbourhood rather than a list of famous bites.",
    humanReturn:
      "Leave knowing a few ingredients and how you prefer to order them, with room for a different counter next time.",
    responsibility:
      "The advertised English-language group walk lasts about three hours and involves standing with no guaranteed seat at every stop. The menu varies and can include meat and offal. Decline anything you do not wish to try and agree a suitable menu in advance. Vegetarian alternatives are advertised, but the tour is not suitable for vegans. Gluten-sensitive options need advance confirmation and are not offered on Sundays. Do not equate these with a medically allergy-safe kitchen. Ask before photographing vendors or diners.",
    evidence:
      "The current morning programme identifies its markets, meeting point, language, duration and dietary limits. The city overview distinguishes other Streaty products. EA has not joined the tour or evaluated the vendors. Marketing rankings and promised friendships are not adopted.",
    duration: "Around 3 hours, with substantial walking and standing",
    participation:
      "Guided neighbourhood walking and tasting, not cooking or market work",
    access:
      "Reserve the morning street-food and market tour on the official page. Read the actual date's meeting instructions and cancellation terms. A different evening or seated-food product is not interchangeable.",
    guideReview: review("public_programme", [
      {
        title: "Streaty: Palermo morning market tour",
        url: "https://www.streaty.com/street-food-tours/palermo-morning-tour/",
        note: "Three-hour English route, changing food selection, mobility and dietary constraints.",
      },
      {
        title: "Streaty: Palermo programme overview",
        url: "https://www.streaty.com/city/street-food-tours-in-palermo/",
        note: "Distinguishes morning, evening and other products. Provider claims are not independent cultural validation.",
      },
    ]),
  },
  {
    id: "kyoto-kanshundo-wagashi",
    slug: "shape-a-kyoto-season-in-sweet-paste",
    title: "Shape a Kyoto season in sweet paste",
    summary:
      "Use simple confectionery tools to make seasonal sweets at Kanshundo, then give one of them its proper companion: tea.",
    field: "make",
    place: "Kyoto, Higashiyama",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    ...common,
    ...guideImage("kyoto-kanshundo-wagashi"),
    kernel:
      "Reserve the general wagashi course at Kanshundo's Higashiyama venue. Work with the supplied confectionery materials and tools, then taste a sweet with matcha. A small indentation or shaped edge can suggest a leaf or flower without reproducing it literally. Follow the month's actual designs rather than expecting a particular autumn motif from a photograph.",
    rootedness:
      "Kyoto confectionery often gives changing seasons a small, edible form. Kanshundo's public class offers an introductory making process rather than professional training or a tea ceremony. The general course and school-group course have different contents and should not be confused.",
    shift:
      "A sweet becomes a compact decision about shape, season and the moment in which it is served.",
    humanReturn:
      "The next shop window may reveal an idea you would previously have seen only as decoration.",
    responsibility:
      "The general course lists three fresh sweets, one dry sweet and matcha, taking about seventy-five minutes with eating. It normally requires two participants, though a solo visitor may join an existing group. Reserve a few days ahead. Request the available English, Chinese or Korean written material, not an assumed English-speaking teacher. Confirm ingredients and serious allergies directly. Under-fives are excluded from ordinary shared classes. The classroom is upstairs without a lift, so any alternative arrangement must be confirmed, not presumed.",
    evidence:
      "The Japanese programme and reservation form establish the course, venue, approximate length and participation limits. Older English booking listings describe another schedule and are not substituted. EA has not attended, tasted the sweets or confirmed a specific session's remaining seats.",
    duration: "About 75 minutes including making and tasting",
    participation:
      "Guided shaping of supplied confectionery materials, followed by tea and tasting",
    access:
      "Use Kanshundo's official class request form and select the Higashiyama venue. A request needs confirmation. The Sagano branch and separately advertised English course are different arrangements.",
    guideReview: review("public_programme", [
      {
        title: "Kanshundo: Kyoto wagashi experience",
        url: "https://www.kanshundo.co.jp/class/",
        note: "Current Japanese general course, seventy-five-minute estimate, age, language-material and stair limitations.",
      },
      {
        title: "Kanshundo: official class request form",
        url: "https://www.kanshundo.co.jp/wagashiform/",
        note: "Venue selection and requested dates. Not submitted and no booking made.",
      },
    ]),
  },
  {
    id: "seoul-donglim-knots",
    slug: "tie-a-small-piece-of-seoul-by-hand",
    title: "Tie a small piece of Seoul by hand",
    summary:
      "Look at Korean decorative knots in a Bukchon hanok, then arrange an introductory making session at Donglim.",
    field: "make",
    place: "Seoul, Bukchon",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    ...common,
    ...guideImage("seoul-donglim-knots"),
    kernel:
      "Use the official visitor listing to arrange one of Donglim's introductory knot-making experiences. Begin with the displayed cords and finished forms before following the instructor's chosen bracelet or small accessory. Watch how tension changes the same length of cord. One repeatable movement can make an apparently intricate object less mysterious.",
    rootedness:
      "Maedeup decorative knotting appears in dress and accessories as well as contemporary work. Donglim combines an exhibition and workshop in a Bukchon hanok. A beginner lesson introduces a technique, not ownership of a whole tradition or permission to reproduce a maker's work commercially.",
    shift:
      "The decoration becomes a structure your fingers have begun to understand.",
    humanReturn:
      "Keep the first attempt as a record of learning rather than comparing it with the master's display.",
    responsibility:
      "Seoul's current official listing advertises one-day experiences, while the national tourism listing asks visitors to inquire about programme fees. Confirm the actual lesson, length, age suitability, teaching language, price and mobility needs directly before travel. Website language options do not establish the instructor's language. Ordinary opening hours do not guarantee an available class. Mondays are listed as closed. Bukchon is residential, so keep voices low, respect posted visitor rules and do not photograph residents without permission.",
    evidence:
      "Official Seoul tourism describes the hands-on offerings and current address. Korea Tourism Organization corroborates the museum, craft context and inquiry requirement. The older linked maker website was not reliably retrievable. EA has not attended or confirmed a particular lesson or instructor.",
    duration: "Confirm the chosen lesson's length directly before booking",
    participation:
      "An arranged beginner knot-making session, distinct from browsing the exhibition",
    access:
      "Use the museum contact in the official Seoul listing to confirm a public workshop at 10 Bukchon-ro 12-gil. Do not make a special journey on the assumption that a walk-in class is running.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Visit Seoul: Donglim Knot Workshop",
          url: "https://english.visitseoul.net/entertainment/Donglim-Knot-Workshop/ENP018898",
          note: "Official city listing updated in 2026 advertises accessory-making experiences and the contact route.",
        },
        {
          title: "Korea Tourism Organization: Dong-Lim Knot Museum",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=97767",
          note: "Craft and hanok context, opening days and instruction to inquire about programme fees.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "dublin-claddagh-ring",
    slug: "make-the-irish-ring-you-can-read",
    title: "Make the Irish ring you can read",
    summary:
      "Shape a Claddagh ring in Dublin and connect a familiar Irish symbol with the work needed to make it fit.",
    field: "make",
    place: "Dublin, South Great George's Street",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    ...common,
    ...guideImage("dublin-claddagh-ring"),
    kernel:
      "Choose Silver Works' two-hour Claddagh workshop. Start with the supplied silver strip and follow the permitted sawing, shaping and filing steps. Ask what the hands, heart and crown mean before making the ring fit your own finger. The soldering and motor polishing are taught through demonstration and explanation, not a promise that beginners handle every tool.",
    rootedness:
      "The Claddagh is an Irish ring form associated with Galway, here introduced through a contemporary Dublin teaching studio. The workshop does not claim the design originated in Dublin or that a visitor makes it entirely from raw metal. Its supplied starting piece makes the beginner scope clear.",
    shift:
      "A souvenir symbol becomes a small object whose structure and meaning you can explain.",
    humanReturn:
      "The fit and finish can carry the memory of an afternoon at the bench, not only an address on a receipt.",
    responsibility:
      "Prebooking is required. Minimum age is ten, with under-sixteens accompanied by a participating, ticketed adult. The period buildings have stairs and no lift. Confirm the Claddagh session's George's Street venue, teaching language and any assistance needs. The ordinary Forge a Silver Ring class is a different product. Gold plating and other extras have additional charges and lead times. Follow supervision around sharp tools and heat. Do not bring an unticketed observer or large luggage.",
    evidence:
      "The specific Claddagh page describes the starting strip, participant tasks, demonstrations, duration and restrictions. The workshop overview confirms separate products and venues. EA has not taken the class or evaluated the jewellery's durability or the tuition.",
    duration: "2 hours for the Claddagh workshop",
    participation:
      "Supervised shaping and finishing, with some processes demonstrated by the instructor",
    access:
      "Book Make Your Own Claddagh Ring, not the plain-band, charm, wedding-ring or Galway pop-up class. Use the confirmation's precise Dublin venue and arrive on time. No EA reservation or endorsement is implied.",
    guideReview: review("public_programme", [
      {
        title: "Silver Works: Make Your Own Claddagh Ring",
        url: "https://silverworks.ie/workshop/make-your-own-claddagh-ring-workshop/",
        note: "Specific two-hour beginner class, supplied strip, supervised role, minimum age and stair restrictions.",
      },
      {
        title: "Silver Works: workshop overview",
        url: "https://silverworks.ie/workshops/",
        note: "Separate class formats and confirmation of the actual venue, not independent quality assessment.",
      },
    ]),
  },
  {
    id: "copenhagen-goboat-classic",
    slug: "take-the-tiller-in-copenhagen",
    title: "Take the tiller in Copenhagen",
    summary:
      "Steer a small electric boat from Islands Brygge and see the harbour as a shared route, not just a waterfront view.",
    field: "move",
    place: "Copenhagen, Islands Brygge",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    ...common,
    ...guideImage("copenhagen-goboat-classic"),
    kernel:
      "Reserve a Classic GoBoat, arrive for the briefing and follow the permitted harbour map. Take turns noticing the relationship between bridges, quays and the boat's slow movement, while an eligible adult remains responsible at the tiller. Plan a modest out-and-back within your booked time. A smaller stretch navigated attentively can tell you more than racing to fit every canal in.",
    rootedness:
      "Copenhagen's harbour is working public space shared by several kinds of vessel. The self-drive picnic boat offers a contemporary visitor role within it. This is not a traditional fishing practice, unrestricted navigation or the separate captained sightseeing product.",
    shift:
      "The waterfront becomes a place in which you must notice other people and make small practical decisions.",
    humanReturn:
      "Remember a bridge from below and the responsibility that made the view possible.",
    responsibility:
      "The captain must be at least eighteen and attend the safety instruction. The boat holds up to eight people including children. Follow current life-jacket, weather, alcohol and route rules, and do not treat an easy-to-use boat as risk-free. Arrive fifteen minutes ahead. The page gives differing opening-time summaries, so use the actual booking time. Confirm child jackets and assistance before payment. No swimming, harbour crossing outside the allowed area or party package is included.",
    evidence:
      "Current GoBoat pages distinguish self-drive Classic boats, captained cruises and shared harbour tours. They describe capacity, briefing, adult captain and permitted maps. EA has not sailed this route or independently audited safety or environmental claims.",
    duration: "Choose a rental slot and allow extra time for the briefing",
    participation:
      "Self-drive boating within the operator's permitted harbour area",
    access:
      "Select Classic GoBoat Copenhagen and confirm your rental duration at Islands Brygge. This guide is not a shared-seat cruise or a boat supplied with a captain. Current operating conditions control departure.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "GoBoat: Copenhagen",
          url: "https://goboat.dk/en/copenhagen",
          note: "Current products, Islands Brygge base, adult captain, capacity and briefing. Exact booking time takes precedence over conflicting summaries.",
        },
        {
          title: "GoBoat: how it works",
          url: "https://goboat.dk/en/how-goboat-works",
          note: "Steering, life jackets, permitted maps and responsibility. Health and safety marketing claims are not adopted as EA guarantees.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "lisbon-cacilhas-ferry",
    slug: "give-lisbon-a-ten-minute-change-of-shore",
    title: "Give Lisbon a ten-minute change of shore",
    summary:
      "Take the ordinary ferry from Cais do Sodré to Cacilhas and let the Tagus turn the city into a moving relationship.",
    field: "move",
    place: "Lisbon and Cacilhas, Tagus crossing",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    ...common,
    ...guideImage("lisbon-cacilhas-ferry"),
    kernel:
      "Check the Cacilhas service, buy the appropriate ticket and board at the indicated Cais do Sodré gate. Look back as the Lisbon waterfront changes distance and scale. Step off at Cacilhas, orient yourself and decide separately how long to stay before returning. The crossing has an ordinary transport purpose, which is part of its interest.",
    rootedness:
      "The ferry connects Lisbon with the south bank at Almada. Commuters and residents use the same link for reasons unrelated to sightseeing. Watching the river from this practical connection is different from buying a narrated cruise or a private sailing experience.",
    shift:
      "The Tagus stops being a backdrop and becomes a connection you have actually used.",
    humanReturn:
      "A short journey may help the two banks stay together in your memory.",
    responsibility:
      "The official average crossing is ten minutes, not the total outing including queues and waiting. Check live departures, service notices, fares and the last suitable return. A gate change at Cais do Sodré took effect on 15 October 2026. Ask about step-free boarding for your actual vessel. Do not obstruct commuters or expect a specific historic orange boat. Viewpoints, onward walks, restaurants and return travel are separate choices, not included excursions.",
    evidence:
      "TTSL publishes the current route timetable and live service notices. Its fleet reporting describes electric vessels as well as changing operations. EA has not travelled on the service or verified conditions at either pier. The photograph is a historical shore view, not proof of today's assigned vessel.",
    duration: "Average crossing 10 minutes, plus boarding and waiting",
    participation: "An ordinary paid passenger ferry journey",
    access:
      "Use the official Cacilhas–Cais do Sodré route and current terminal signage. Confirm the fare product before boarding. No cruise commentary, return ticket, onward transfer or EA booking is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "TTSL: Cacilhas–Cais do Sodré timetable",
          url: "https://ttsl.pt/passageiros/horarios-de-ligacoes-fluviais/ligacao-cacilhas-cais-do-sodre/",
          note: "Current day-specific departures and ten-minute average crossing.",
        },
        {
          title: "TTSL: live departures and notices",
          url: "https://ttsl.pt/",
          note: "Current terminal and disruption notices, including the boarding-room change from 15 October.",
        },
        {
          title: "TTSL: electric fleet reporting",
          url: "https://ttsl.pt/ttsl-apresenta-maior-operacao-eletrica-do-mundo-no-tejo/",
          note: "Current fleet context, not a promise of a particular vessel or independently audited environmental performance.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "singapore-ubin-cycle",
    slug: "cycle-singapore-at-island-pace",
    title: "Cycle Singapore at island pace",
    summary:
      "Cross to Pulau Ubin, check a bicycle and choose a manageable ride on the island's designated roads and trails.",
    field: "move",
    place: "Singapore, Pulau Ubin",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    ...common,
    ...guideImage("singapore-ubin-cycle"),
    kernel:
      "Take a daytime bumboat from Changi Point and arrange a suitable bicycle near the village. Check its condition, consult the current map and choose an open route you can comfortably ride and return from. Notice how settlement, former plantations and vegetation replace the mainland's usual scale. Stop safely to look rather than trying to photograph while moving.",
    rootedness:
      "Pulau Ubin has residents, working businesses and managed habitats. NParks permits cycling on designated routes, while the island's quarrying and village history remain part of the landscape. It is not an untouched island or a place where visitors can enter homes and working land at will.",
    shift:
      "A familiar city acquires another pace without needing to be described as a place outside time.",
    humanReturn:
      "Keep one change of road surface, shade or village sound in mind when you cross back.",
    responsibility:
      "Boat departures are on demand, not a fixed ten-minute timetable. Confirm fares and a daytime return plan. Inspect brakes and tyres, wear a helmet, bring water and avoid routes beyond your ability. This guide excludes the technical Ketam mountain-bike tracks. Follow storm, flood and closure notices. Part of the Chek Jawa Coastal Loop is closed from September 2026 for maintenance, and the guided wetlands tour is suspended. Boardwalk access is not permission to cycle on it. Do not feed wildlife or enter residents' property.",
    evidence:
      "NParks describes bicycle rental, designated routes, privately operated bumboats and current maintenance notices. These sources support a bounded independent outing, not a guided package or guaranteed equipment availability. EA has not ridden the current paths or inspected rental bicycles.",
    duration: "Allow a flexible half day including both boat crossings",
    participation:
      "Independent cycling on suitable open routes, with separate boat and bicycle arrangements",
    access:
      "Start at Changi Point Ferry Terminal and confirm transport and rental arrangements yourself. Keep the route modest and leave a return buffer. No included bicycle, guide, wetland tour or EA reservation is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "NParks: visit Pulau Ubin",
          url: "https://pulau-ubin.nparks.gov.sg/visitubin/",
          note: "On-demand bumboats, separate bicycle arrangements and designated island access.",
        },
        {
          title: "NParks: nature-based recreation",
          url: "https://pulau-ubin.nparks.gov.sg/nature-based-recreation/",
          note: "Ordinary cycling distinguished from technical mountain-bike tracks and other activities.",
        },
        {
          title: "NParks: current island notices",
          url: "https://pulau-ubin.nparks.gov.sg/notices/",
          note: "Partial Coastal Loop closure, suspended guided wetlands tour and weather precautions checked, not ignored.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "barcelona-palau-guided",
    slug: "find-barcelonas-daylight-inside-a-concert-hall",
    title: "Find Barcelona's daylight inside a concert hall",
    summary:
      "Join a guided visit to the Palau de la Música Catalana and see how glass, mosaic and sculpture give music a setting.",
    field: "learn",
    place: "Barcelona, Sant Pere",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    ...common,
    ...guideImage("barcelona-palau-guided"),
    kernel:
      "Book the ordinary guided visit in a language you understand. Look at the light before photographing the skylight, then follow how the hall's materials work together. The guide supplies the building's history, while you notice the practical difference between a façade seen from the street and a room made to hold listeners.",
    rootedness:
      "The Palau was built as the home of the Orfeó Català and remains a working concert venue. Its Catalan modernist design brings several applied arts into one building. An architectural visit provides context for that musical life without being a concert or permission to enter rehearsals.",
    shift:
      "A famous decorative interior becomes a building with a purpose, not a collection of surfaces.",
    humanReturn:
      "The next performance space may prompt a question about what the room contributes before the first note.",
    responsibility:
      "Choose the guided visit, not an audio guide, independent entry or separately sold choir experience. The current page gives approximately fifty minutes in one section and fifty-five in another, so allow around an hour. Language options depend on the slot. Access to the stage is conditional, not guaranteed. Follow event-related route changes and photo instructions. The venue advertises lift access, but confirm assistance and your actual route before booking if needed.",
    evidence:
      "The current Palau page and official ticket site offer separate visit formats and describe guided access. Conflicting duration summaries are retained as an approximate range. EA has not toured the current route or attended a performance here.",
    duration: "Allow around 1 hour for the advertised 50–55-minute visit",
    participation:
      "A guided architectural visit, not a concert or singing session",
    access:
      "Book Guided Tour through the Palau's own site and select the appropriate language and time. Stage access depends on the venue. No performance ticket, rehearsal access or EA reservation is included.",
    guideReview: review("public_programme", [
      {
        title: "Palau de la Música Catalana: guided tour",
        url: "https://www.palaumusica.cat/en/guided-tour_1649781/",
        note: "Current visit, conditional stage access, language slots and fifty versus fifty-five-minute summaries.",
      },
      {
        title: "Palau: official visit tickets",
        url: "https://tickets.palaumusica.cat/es",
        note: "Distinct guided, audio-guided and independent tickets. No purchase made.",
      },
    ]),
  },
  {
    id: "vienna-globe-museum",
    slug: "turn-the-world-around-in-vienna",
    title: "Turn the world around in Vienna",
    summary:
      "Compare terrestrial and celestial globes at Vienna's Globe Museum and notice what each maker chose to place at the centre.",
    field: "learn",
    place: "Vienna, Palais Mollard",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    ...common,
    ...guideImage("vienna-globe-museum"),
    kernel:
      "Visit the Globe Museum and choose two objects to compare closely. Look at lettering, blank spaces, the supports and the different work done by a terrestrial or celestial sphere. Read the labels instead of treating old place names as current facts. The interesting movement is in your point of view, not your hands: do not touch or turn collection objects.",
    rootedness:
      "The Austrian National Library presents globes as historical instruments as well as crafted objects. At Palais Mollard, geographical knowledge can be considered through material, projection and the conditions in which an object was made. A beautiful map is still somebody's account of the world.",
    shift:
      "A globe becomes an argument and an instrument, not only a recognisable classroom shape.",
    humanReturn:
      "You may look differently at the centre and edges of the next map you open.",
    responsibility:
      "The Globe Museum normally closes on Mondays. It has its own opening page and is not the library's State Hall. State Hall event closures must not be applied to this museum. Check the actual museum ticket, access and holiday schedule. Ordinary admission does not include a personally guided tour or handling historic objects. Photograph only as permitted and keep circulation clear.",
    evidence:
      "The library's current museum overview and opening page establish the collection and public access. EA has not inspected the present display or tested accessibility. The historical museum photograph is not a promise that a particular case remains arranged the same way.",
    duration: "Allow 45 to 90 minutes at your own pace",
    participation:
      "Independent museum looking and comparison, without handling collection objects",
    access:
      "Use the Austrian National Library's Globe Museum page for current tickets and Palais Mollard entry. Check which museums your ticket covers. No State Hall admission or EA booking is implied.",
    guideReview: review("public_admission", [
      {
        title: "Austrian National Library: Globe Museum opening hours",
        url: "https://www.onb.ac.at/en/opening-hours/globe-museum",
        note: "Current museum-specific opening days, holiday notes and barrier-free access information.",
      },
      {
        title: "Austrian National Library: Globe Museum",
        url: "https://www.onb.ac.at/en/museums/globe-museum",
        note: "Collection and historical-instrument context. Not an independent review of today's display.",
      },
    ]),
  },
  {
    id: "helsinki-aalto-house",
    slug: "notice-how-the-aaltos-made-room-for-living",
    title: "Notice how the Aaltos made room for living",
    summary:
      "Visit Aino and Alvar Aalto's Helsinki home on a guided tour and look for the decisions connecting work with everyday life.",
    field: "learn",
    place: "Helsinki, Munkkiniemi",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    ...common,
    ...guideImage("helsinki-aalto-house"),
    kernel:
      "Book a public Aalto House tour at Riihitie 20. Follow the guide between the former work and domestic spaces, then use the remaining visit time to notice a material change, a window or the way one room meets another. The scale of a home offers a useful counterpoint to looking at architecture only through monumental façades.",
    rootedness:
      "Aino and Alvar Aalto designed the house as both a residence and an architectural workplace. The foundation now manages it as a museum. It is a conserved account of a particular household and design practice, not a template for every Finnish home or an invitation to use its furniture.",
    shift:
      "Modern architecture becomes a series of choices around ordinary activities rather than a style label.",
    humanReturn:
      "Carry one observation about light, thresholds or materials into the rooms you use at home.",
    responsibility:
      "Entry is by guided tour only, with a maximum of fifteen visitors. The total visit lasts an hour, including about thirty to forty minutes of guiding. Confirm the actual date and language. There are stairs and no wheelchair access. Large bags are not permitted, and the door opens only shortly before the tour. Private photography is allowed without flash or tripod, not unrestricted commercial photography. Studio Aalto is a separate site with a separate timetable and ticket.",
    evidence:
      "The foundation publishes the public tour conditions, physical restrictions and current booking route. Its shop lists the English house tour separately from Studio Aalto. EA has not visited the house or confirmed remaining places for a particular departure.",
    duration:
      "1 hour including the guided section and permitted independent looking",
    participation:
      "A guided museum-house visit, not using the furnishings or visiting a private household",
    access:
      "Reserve the Aalto House tour through the foundation's official shop. Check the house name, Riihitie address, language and time carefully. No Studio Aalto admission, transport or EA booking is included.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Alvar Aalto Foundation: the Aalto House",
          url: "https://www.alvaraalto.fi/en/location/the-aalto-house/",
          note: "Current public guided access, one-hour format, visitor cap, stair and photography restrictions.",
        },
        {
          title: "Alvar Aalto Foundation: guided-tour shop",
          url: "https://shop.alvaraalto.fi/en_US/guided-tours",
          note: "Distinct English Aalto House and Studio Aalto products, not a combined admission.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "buenos-aires-botanical-pause",
    slug: "follow-shade-through-buenos-aires",
    title: "Follow shade through Buenos Aires",
    summary:
      "Slow a Palermo outing inside the Carlos Thays Botanical Garden and let plant labels change what you notice.",
    field: "restore",
    place: "Buenos Aires, Palermo",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    ...common,
    ...guideImage("buenos-aires-botanical-pause"),
    kernel:
      "Enter the public botanical garden and choose a short loop rather than attempting every collection. Compare a plant labelled as native to the region with one from elsewhere. Sit where permitted, look at a leaf or branching shape and allow an ordinary green detail to hold your attention. The useful pause needs neither a secret entrance nor a promised wildlife sighting.",
    rootedness:
      "Carlos Thays' garden is part of Buenos Aires' public landscape and botanical work. Its collections bring regional and introduced plants into an urban setting. It is distinct from Parque Carlos Thays in Recoleta and is not a claim that the whole city once looked like this.",
    shift:
      "Palermo becomes more than a neighbourhood to pass through between meals and evening plans.",
    humanReturn:
      "One labelled tree may give the next street's canopy a little more meaning.",
    responsibility:
      "Ordinary admission is free and Mondays are closed. The current spring and summer schedule runs Tuesday to Friday from 08:00 and weekends from 09:30, with last entry at 18:30 and closing at 19:00. Seasonal hours, designated holidays and severe-weather closures take precedence. Keep to public paths, do not pick plants or enter working spaces, and follow current food, animal and photography rules. Greenhouse entry and guided activities are not automatically included in an independent garden walk.",
    evidence:
      "The current city garden page gives seasonal opening and weather closures. City tourism identifies the Palermo garden and public botanical purpose. EA has not walked the current paths or verified that a greenhouse, bench or particular collection is accessible on your date.",
    duration: "Allow 45 to 90 minutes for a short loop and pauses",
    participation:
      "An independent public garden visit, not plant collecting or access to research areas",
    access:
      "Check the city garden's current notice and use the Palermo entrance identified on its map. Confirm mobility needs and any separately programmed visit directly. Do not confuse it with Parque Carlos Thays in Recoleta.",
    guideReview: review("public_admission", [
      {
        title: "Buenos Aires City: Jardín Botánico",
        url: "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/jardin-botanico",
        note: "Current seasonal hours, free admission, last entry and weather closures. Despite the archive-style URL, the page contains 2026 notices.",
      },
      {
        title: "Buenos Aires tourism: Botanical Garden",
        url: "https://turismo.buenosaires.gob.ar/en/atractivo/botanical-garden",
        note: "Palermo setting and ordinary public visit, not the different Recoleta park.",
      },
      {
        title: "Argentina: Carlos Thays Botanical Garden heritage",
        url: "https://www.argentina.gob.ar/jardin-botanico-carlos-thays",
        note: "Landscape context and the named Luis Picarelli photograph. Not current greenhouse admission information.",
      },
    ]),
  },
  {
    id: "hong-kong-nan-lian-pause",
    slug: "pause-where-kowloons-towers-meet-a-garden",
    title: "Pause where Kowloon's towers meet a garden",
    summary:
      "Take an unhurried public walk through Nan Lian Garden and notice the city remaining visible beyond the trees.",
    field: "restore",
    place: "Hong Kong, Diamond Hill, Kowloon",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "kowloon",
    ...common,
    ...guideImage("hong-kong-nan-lian-pause"),
    kernel:
      "Enter Nan Lian Garden and follow the permitted paths around its water, timber structures and planted rocks. Let the golden pavilion be an orientation point rather than the only reason to stop. Look up occasionally: nearby towers keep the garden in conversation with Kowloon. There is no need to pretend the city has disappeared for the pause to be worthwhile.",
    rootedness:
      "Nan Lian is a modern public garden designed with references to Tang-dynasty landscape and architecture. It is not an ancient surviving park. The adjoining Chi Lin Nunnery has its own religious purpose and visitor boundaries, distinct from an ordinary garden walk.",
    shift:
      "Contrast becomes part of the experience: a deliberate garden can belong inside a dense city rather than outside it.",
    humanReturn:
      "Remember a borrowed view through branches as well as the famous pavilion.",
    responsibility:
      "The government listing gives ordinary garden hours of 07:00 to 21:00. Check local notices and weather before setting out. Follow posted rules around noise, food, photography and access to structures. Do not enter planted areas for a better frame. A walk does not include a restaurant, tea service, religious participation or permission to photograph inside the nunnery. Confirm the route suitable for your mobility needs rather than assuming every bridge and path is accessible.",
    evidence:
      "Hong Kong's Leisure and Cultural Services Department supplies the address, public hours and transport. The Tourism Board describes the landscaped setting and distinguishes the neighbouring nunnery. EA has not inspected current conditions or independently evaluated spiritual or therapeutic benefits.",
    duration: "Allow 45 to 90 minutes at your own pace",
    participation:
      "A quiet public garden walk, not a ceremony or guided wellness treatment",
    access:
      "Use the garden entrance at 60 Fung Tak Road, Diamond Hill, and current on-site instructions. Tea, food and any adjacent religious visit have separate conditions. No EA booking or hosted access is implied.",
    guideReview: review("public_admission", [
      {
        title: "LCSD: Nan Lian Garden",
        url: "https://www.lcsd.gov.hk/en/parks/nlg/",
        note: "Current official public opening hours, Diamond Hill address and facilities.",
      },
      {
        title: "Hong Kong Tourism Board: Nan Lian Garden and Chi Lin Nunnery",
        url: "https://www.discoverhongkong.com/eng/place-to-go/travel.guide-chi-lin-nunnery-and-nan-lian-garden.html",
        note: "Official contextual description read through ordinary web search. Direct retrieval returned 403. Not evidence of a private hosted visit.",
      },
    ]),
  },
  {
    id: "granada-hammam-water",
    slug: "make-time-for-granadas-warm-rooms",
    title: "Make time for Granada's warm rooms",
    summary:
      "Book the bath-only Water Journey at Hammam Al Ándalus and give one part of Granada a quieter pace.",
    field: "restore",
    place: "Granada, Calle Santa Ana",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "granada",
    ...common,
    ...guideImage("granada-hammam-water"),
    kernel:
      "Choose the Emerge bath-only experience and follow the host's instructions between the permitted bathing and resting spaces. Leave the phone in the locker and let the architecture remain around an ordinary act of slowing down. Use the booked time without trying to add every treatment or treating temperature changes as a challenge.",
    rootedness:
      "This is a contemporary commercial hammam drawing on Andalusian bathing traditions. It is not Granada's historic El Bañuelo monument or evidence of uninterrupted medieval operation. The distinction lets a present-day bathing experience stand on its own terms.",
    shift:
      "An impressive interior becomes somewhere you spend time respectfully, not another image to collect.",
    humanReturn:
      "The memory may be a change of pace rather than a list of rooms completed.",
    responsibility:
      "Reserve the actual bath-only slot and confirm its duration. Other products exchange some bathing time for massage or treatments. Swimwear is compulsory and photography inside is prohibited. The spaces are shared, not private rooms. Ask about age rules, health restrictions, fragrance sensitivities and assistance before payment. Lift access does not remove steps into pools. Consult your own health professional where relevant rather than relying on wellness marketing. No therapeutic effect or universally suitable temperature sequence is promised.",
    evidence:
      "The current Granada experience page and FAQ distinguish Emerge, massage and Kessa products and publish booking, privacy and access conditions. The live booking page requires a chosen date to establish availability. EA has not bathed here or assessed the facility or claimed health benefits.",
    duration: "Confirm the selected bath-only slot's duration when booking",
    participation:
      "Shared commercial bathing and resting, following the host's rules",
    access:
      "Reserve Emerge at the Granada location through its official booking route. Confirm the chosen service, date, duration and restrictions. Gift cards, promotions and treatment packages do not establish a particular available slot.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Hammam Al Ándalus Granada: experiences",
          url: "https://granada.hammamalandalus.com/en/hammam-experiences/",
          note: "Current bath-only and treatment distinctions, shared spaces and reservation route.",
        },
        {
          title: "Hammam Granada: FAQ",
          url: "https://granada.hammamalandalus.com/en/faqs/",
          note: "Swimwear, no photography, steps, age and health restrictions must be checked for the actual visitor.",
        },
        {
          title: "Hammam Granada: official booking",
          url: "https://granadareservas.hammamalandalus.com/datos-reserva.php?id=en",
          note: "Date-specific booking path reviewed without selecting or purchasing a slot. Old promotion prices are not reused.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "rio-carioca-samba",
    slug: "let-a-lapa-samba-room-set-the-evening",
    title: "Let a Lapa samba room set the evening",
    summary:
      "Choose a current show at Carioca da Gema and give Rio's live samba the centre of one evening.",
    field: "gather",
    place: "Rio de Janeiro, Lapa",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    ...common,
    ...guideImage("rio-carioca-samba"),
    kernel:
      "Choose a dated programme at Carioca da Gema, arrive for the actual admission time and listen before deciding whether to dance. Notice the conversation between the singer, rhythm section and audience. A samba evening in a small venue offers a different encounter from a parade, a school visit or a lesson. You do not need to know every chorus to become an attentive listener.",
    rootedness:
      "The venue is part of Lapa's live-music landscape, with changing samba performers and groups. It is a commercial public programme, not access to a private community gathering or proof that one room represents all of Rio's musical life.",
    shift:
      "Samba becomes something unfolding between people in a room, not only an image attached to Carnaval.",
    humanReturn:
      "Keep the sound of one exchange in mind and let another evening belong to a different group.",
    responsibility:
      "Use the current Portuguese show calendar rather than older homepage or English listings. October 21 to 31 programmes were advertised at the source check. Confirm door time, actual show time, age rules, physical access and the chosen ticket's seating conditions. A general admission is not automatically a reserved table. Expect amplified music and a lively evening setting. Agree food, drink and any dietary needs separately, and plan a suitable late return. Do not enter the musicians' space or assume that filming is permitted.",
    evidence:
      "The current official show calendar identifies forthcoming programmes and the Lapa venue. Riotur independently lists the venue and one of its samba groups as a public cultural offer. EA has not attended, inspected access or confirmed remaining seats. Older reseller availability is not used as evidence of current closure or booking.",
    duration: "Reserve an evening and confirm the selected show's actual times",
    participation:
      "Listening and optional audience dancing at a public samba show",
    access:
      "Select the actual date through Carioca da Gema's current show page and follow its official ticket route. Confirm admission, table conditions and the address at Avenida Mem de Sá 79. No dinner, dance tuition, private introduction or EA reservation is included.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Carioca da Gema: current show calendar",
          url: "https://www.barcariocadagema.com.br/shows",
          note: "Current Portuguese October programmes, distinct from older homepage and English listings. Availability remains date-specific.",
        },
        {
          title: "Riotur: Família Moadir at Carioca da Gema",
          url: "https://riotur.rio/evento/familia-moadir/",
          note: "City tourism corroborates the samba venue and Avenida Mem de Sá address. Its undated event description is context, not the current calendar.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "buenos-aires-bomba-tiempo",
    slug: "follow-the-hands-conducting-buenos-aires",
    title: "Follow the hands conducting Buenos Aires",
    summary:
      "Choose a Lunes Bomba performance at Konex and watch a percussion ensemble compose through visible signals.",
    field: "gather",
    place: "Buenos Aires, Abasto",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    ...common,
    ...guideImage("buenos-aires-bomba-tiempo"),
    kernel:
      "Book the next confirmed Lunes Bomba at Ciudad Cultural Konex. Watch the conductor's hands as well as the percussionists: a signal can change how the group answers a pattern. Listen first, then move with the audience if you wish. Participation means paying attention and sharing space, not stepping into the ensemble or demanding a particular rhythm.",
    rootedness:
      "La Bomba de Tiempo is a contemporary Buenos Aires percussion ensemble using conducted improvisation. The Monday series has become part of the city's musical week, but is not presented here as an inherited religious or national ritual. Its European tour dates are different events with different admission rules.",
    shift:
      "Live music becomes a composition you can see being negotiated, not only a finished song delivered from a stage.",
    humanReturn:
      "An unfamiliar hand signal may remain more vivid than a set list.",
    responsibility:
      "The Buenos Aires event is for adults eighteen and over. Check the chosen date's door and performance times rather than treating the website's headline time as both. The current calendar lists 26 October after the already-past 19 October date. Space and weather arrangements vary between the patio and Sala de las Columnas. Expect amplified sound and a standing crowd, and confirm access or quieter-position needs in advance. Read bag, food and drink rules. No particular guest, audience interaction or guaranteed outdoor setting is promised.",
    evidence:
      "The ensemble's current calendar confirms a forthcoming Monday performance. Its event page and Konex ticket listing identify the venue, adult admission and weather arrangements. EA has not attended, booked a place or independently assessed sound levels or crowd conditions.",
    duration:
      "Reserve the evening and check the actual date's door and show times",
    participation:
      "Listening and optional audience dancing at a public percussion performance",
    access:
      "Follow the ensemble's official link to Tickets Konex for Lunes Bomba at Sarmiento 3131. A tour date in another city or a different Konex event is not the same product. No EA booking or reserved personal interaction is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "La Bomba de Tiempo: current dates",
          url: "https://www.labombadetiempo.com/",
          note: "26 October 2026 Lunes Bomba listed as forthcoming, with adult admission distinguished from overseas dates.",
        },
        {
          title: "La Bomba de Tiempo: Lunes Bomba",
          url: "https://www.labombadetiempo.com/lunes-bomba/",
          note: "Venue, seasonal spaces and public ticket route, not a traditional ceremony or musical training.",
        },
        {
          title: "Tickets Konex: La Bomba de Tiempo",
          url: "https://entradas.cckonex.org/event/la-bomba-de-tiempo-2026",
          note: "Official event conditions and age restrictions read. Embedded error and anti-abuse messages do not establish a completed booking or remaining seats.",
        },
      ],
      "2026-11-03",
    ),
  },
  {
    id: "porto-casa-musica-concert",
    slug: "hear-the-room-you-came-to-see-in-porto",
    title: "Hear the room you came to see in Porto",
    summary:
      "Choose a public concert at Casa da Música and let the building become a place for listening, not only an architectural stop.",
    field: "gather",
    place: "Porto, Boavista",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    ...common,
    ...guideImage("porto-casa-musica-concert"),
    kernel:
      "Start with the concert calendar rather than buying a building tour and hoping music is included. Choose a programme and read which room it uses. If Sala Suggia is the space you want to hear, select a concert explicitly listed there. Arrive with enough time to settle, then notice how the musicians and audience give a photographed room its purpose.",
    rootedness:
      "Casa da Música is an active Porto music institution with several rooms, ensembles and public formats. Its contemporary architecture houses more than one musical tradition. The visit can begin with a familiar interest or an unfamiliar composer, without asking one evening to represent all Portuguese music.",
    shift:
      "Architecture changes from an object you look at into a setting you spend time within.",
    humanReturn:
      "The piece and the room may remain connected in memory, giving you a reason to try another programme.",
    responsibility:
      "A concert ticket and the guided architectural visit are separate products. The agenda mixes Sala Suggia, Sala 2, café events, workshops and rehearsals. Do not assume that free admission means unrestricted entry or a reserved seat. Check age guidance, access, running time, language-dependent content, recording rules and late-entry policy for the chosen event. The current calendar includes forthcoming 23 and 24 October programmes, not a permanent lineup. A rehearsal photograph does not make a rehearsal publicly bookable.",
    evidence:
      "The current official agenda and English programme overview identify future concerts and their actual rooms. The existing EA architectural-tour guide remains a separate experience. EA has not attended or evaluated the current performance, acoustics or seating.",
    duration: "Follow the chosen programme's running time, with early arrival",
    participation: "Listening at a separately booked public concert",
    access:
      "Choose an actual concert and its room through Casa da Música's official agenda. Confirm the date, admission terms and venue before payment. No guided tour, café service, combined reservation or EA booking is included.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Casa da Música: current agenda",
          url: "https://casadamusica.com/agenda/",
          note: "Forthcoming concerts, rooms and different public formats checked. Examples include 23 and 24 October, not a fixed evergreen programme.",
        },
        {
          title: "Casa da Música: English programme overview",
          url: "https://casadamusica.com/en/",
          note: "Current concerts distinct from architectural visits. No claim of independent performance review.",
        },
      ],
      "2026-11-10",
    ),
  },
];
