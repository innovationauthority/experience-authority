import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-21",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-21",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

export const guideBatch49: PublicExperience[] = [
  {
    id: "hanoi-giang-egg-coffee",
    slug: "find-hanois-coffee-beneath-the-egg-cream",
    title: "Find Hanoi's coffee beneath the egg cream",
    summary:
      "Order egg coffee at Café Giảng's Nguyễn Hữu Huân address and let a small cup interrupt your Old Quarter walk.",
    field: "taste",
    place: "Hanoi, 39 Nguyễn Hữu Huân",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hanoi",
    kernel:
      "Choose cà phê trứng rather than the shop's packaged instant products. Before stirring, notice the contrast between the pale topping and the coffee underneath. Taste slowly enough to find both. The cup is small, but it gives you a useful question for the next café: what has this place chosen to do differently with the same familiar drink?",
    rootedness:
      "Egg coffee belongs to Hanoi's contemporary café identity. Giảng presents its family business as dating from 1946, while Vietnam's national tourism site identifies the drink as a recognisable Hanoi experience. That does not make one shop the only legitimate version, or turn a commercial café into a private family invitation.",
    shift:
      "A familiar coffee stop becomes a meeting of textures rather than a name to tick off.",
    humanReturn:
      "Remember the order in which the flavours arrived, not only the cup's appearance.",
    responsibility:
      "Allow an unhurried stop, with extra time if seats are busy. The operator currently lists 07:00 to 22:00 daily for 39 Nguyễn Hữu Huân. Its other Hanoi branches have different hours. Egg and dairy matter for allergies and dietary choices. Ask about preparation rather than assuming a cooked, pasteurised or allergen-free product. Caffeine-free options are a separate menu question. Confirm stairs, seating and any mobility needs directly. Photograph your own table without making other customers part of the attraction.",
    evidence:
      "The current operator site confirms this address, its egg-coffee offer and opening hours. National tourism supplies the wider Hanoi context. EA has not visited, tasted the drink or independently assessed preparation, health claims or competing origin stories.",
    duration: "Allow 30 to 45 minutes, plus any wait",
    participation: "Order and taste at a working café",
    access:
      "Use Café Giảng's official menu and confirm the 39 Nguyễn Hữu Huân branch. An online packaged product, another branch or a generic egg-coffee tour is not this café stop. EA does not reserve a table.",
    ...common,
    ...guideImage("hanoi-giang-egg-coffee"),
    guideReview: review("public_hospitality", [
      {
        title: "Café Giảng: current menu and Hanoi branches",
        url: "https://cafegiang.vn/",
        note: "Egg-coffee offer, original-address branch and branch-specific daily hours.",
      },
      {
        title: "Vietnam Tourism: a perfect weekend in Hanoi",
        url: "https://vietnam.travel/node/193",
        note: "National tourism context for Hanoi's egg-coffee experience, not a food-safety assessment.",
      },
    ]),
  },
  {
    id: "nice-socca-chez-pipo",
    slug: "taste-nice-in-a-hot-piece-of-socca",
    title: "Taste Nice in a hot piece of socca",
    summary:
      "Share a freshly served chickpea pancake near Nice's port and pay attention to the crisp edge before it softens.",
    field: "taste",
    place: "Nice, Chez Pipo, 13 rue Bavastro",
    country: "France",
    countrySlug: "france",
    regionSlug: "nice",
    kernel:
      "Go for socca while the kitchen is serving, not simply for a photograph of the oven. Break a piece from the hot serving and compare its thin centre with the more toasted edge. Add pepper if you like. Keep the first order simple enough to notice the chickpea flavour before other dishes fill the table. A modest, shared portion can make the city's food more tangible than a lengthy list of specialities.",
    rootedness:
      "Socca is part of Nice's everyday food vocabulary. Chez Pipo is one established commercial place to try it, not a verdict on every other vendor. The dish connects a few ingredients, a broad hot pan and eating together. Similar chickpea preparations elsewhere need not be erased to appreciate this local version.",
    shift:
      "The Riviera acquires a flavour that does not depend on a formal restaurant or a sea view.",
    humanReturn:
      "Keep the difference between crisp and soft as the useful part of the memory.",
    responsibility:
      "The town restaurant's current French and English pages agree on Wednesday to Sunday, 11:30 to 14:30 and 17:30 to 22:00, without ordinary reservations. Check holiday changes and expect a possible wait. Group arrangements are separate. Chickpea flour is not a guarantee against gluten cross-contact in a kitchen also preparing wheat-based dishes. Ask about allergies, ingredients and access before ordering. The airport branch is not the rue Bavastro restaurant. Do not enter the working kitchen or expect a making lesson.",
    evidence:
      "The operator's current restaurant page and dedicated socca history establish the dish and public service. EA has not eaten here, inspected the kitchen or verified the restaurant's comparative claims. A documentary preparation photograph is context for Nice's socca, not proof of a particular future serving.",
    duration: "Allow 45 to 60 minutes, with extra time for a queue",
    participation: "Order, share and taste at a public restaurant",
    access:
      "Check Chez Pipo's official hours for 13 rue Bavastro before going. Ordinary walk-in service and separately arranged groups have different conditions. No table, tasting menu or EA booking is included.",
    ...common,
    ...guideImage("nice-socca-chez-pipo"),
    guideReview: review("public_hospitality", [
      {
        title: "Chez Pipo: restaurant and current hours",
        url: "https://www.chezpipo.fr/fr/",
        note: "Town-restaurant address, walk-in service and Wednesday-to-Sunday hours.",
      },
      {
        title: "Chez Pipo: the history of socca",
        url: "https://www.chezpipo.fr/en/histoire-de-la-socca",
        note: "The operator's account of the chickpea preparation, distinct from an independent origin verdict.",
      },
    ]),
  },
  {
    id: "vienna-sperl-coffeehouse",
    slug: "give-a-viennese-coffeehouse-an-unhurried-hour",
    title: "Give a Viennese coffeehouse an unhurried hour",
    summary:
      "Sit down at Café Sperl and let the room, a coffee and something to read become a proper part of the day.",
    field: "taste",
    place: "Vienna, Café Sperl, Gumpendorfer Straße 11",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    kernel:
      "Choose a coffee from the current menu and ask about a name you do not recognise. Find an available seat through the staff rather than treating an occupied corner as a photo opportunity. Bring a few pages of your own to read. Look up occasionally at how the room is used: a meeting, a solitary pause, a table being cleared. The experience is not made better by rushing through a second café.",
    rootedness:
      "Sperl dates its business to 1880. Vienna's tourism office also documents it as a film location, but a recognisable interior is only the beginning. A coffeehouse remains a working hospitality space, sustained by staff and customers rather than by its ability to look unchanged in photographs.",
    shift:
      "Vienna becomes somewhere you can spend time, not only move between monuments.",
    humanReturn:
      "Keep a small interval without your phone in the routine you take home.",
    responsibility:
      "Current operator hours are Monday to Saturday 07:00 to 22:00 and Sunday 10:00 to 20:00. Sundays in July and August are closed. Confirm holidays and any table arrangements. Ordering food or drink supports the space, but does not secure an unlimited seat, a particular corner, a newspaper or live music. Ask about milk, egg, nuts and other ingredients when relevant. Check physical access before travel. Keep cameras away from other customers and do not stage a film scene in their day.",
    evidence:
      "The operator's menu and contact information establish the café and current hours. Vienna Tourism corroborates the setting. EA has not visited or tasted the menu, and does not certify service, heritage claims or a film-location experience.",
    duration: "Allow about an hour within current service",
    participation: "Seated coffeehouse visit and quiet observation",
    access:
      "Check Café Sperl's official menu and contact page for Gumpendorfer Straße 11. A café visit is not a booked historical tour, guaranteed concert or reserved film-location table.",
    ...common,
    ...guideImage("vienna-sperl-coffeehouse"),
    guideReview: review("public_hospitality", [
      {
        title: "Café Sperl: the café and menu",
        url: "https://www.cafesperl.at/en",
        note: "The working coffeehouse and its own history, not an independent quality ranking.",
      },
      {
        title: "Café Sperl: current contact and hours",
        url: "https://www.cafesperl.at/kontakt",
        note: "Weekly hours and the July-August Sunday closure.",
      },
      {
        title: "Vienna Tourism: Café Sperl as a film location",
        url: "https://www.wien.info/en/caf%C3%A9-sperl-film-location-920732",
        note: "City-tourism corroboration of the venue and screen context, not a promise of a particular table.",
      },
    ]),
  },
  {
    id: "edinburgh-islander-tweed-bag",
    slug: "give-harris-tweed-a-bag-shaped-afternoon",
    title: "Give Harris Tweed a bag-shaped afternoon",
    summary:
      "Choose a cloth panel and prepared components at an Edinburgh workshop, then assemble the bag you will carry away.",
    field: "make",
    place: "Edinburgh, Islander workshop, selected city venue",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    kernel:
      "Select an Edinburgh session in Islander's booking system. Compare the available Harris Tweed panels before choosing a bag shape and straps. With the supplied tools and instructor's help, attach the prepared parts. Notice what a different cloth does to the same outline. The satisfying task is a sequence of assembly decisions, not pretending to weave the fabric or construct a leather bag from raw material in an hour.",
    rootedness:
      "Harris Tweed connects the object to cloth made in the Outer Hebrides. This workshop happens in Edinburgh, not at an island loom. The distinction matters: you are selecting and assembling a contemporary product that uses that cloth, while the weaving and preparation have already happened elsewhere.",
    shift:
      "A souvenir becomes an object whose components you had to consider together.",
    humanReturn:
      "Let the panel you chose remind you to ask where a material was actually made.",
    responsibility:
      "The operator lists about sixty minutes and a minimum participant age of twelve. Book the actual Edinburgh venue and time, since London and St Andrews also appear in the same system. Cloth, shapes and straps depend on stock. Standard prepared materials and genuine-leather upgrades differ, so read the selected product rather than assuming every bag is leather. Confirm tool assistance, language and step-free access before paying. The stated cancellation notice is at least 48 hours. An unfinished booking does not hold a place.",
    evidence:
      "The current operator workshop and introduction pages explain the prepared-component format, age and booking steps. Edinburgh's tourism office corroborates the experience. EA has not assembled a bag, assessed durability or inspected the supply chain. Operator awards do not establish those things.",
    duration: "About 60 minutes for the booked session",
    participation: "Supervised assembly from prepared bag components",
    access:
      "Choose Edinburgh, then the actual workshop, date, bag and participant places through Islander's official calendar. Confirm the venue on the completed reservation. No island weaving visit or EA booking is implied.",
    ...common,
    ...guideImage("edinburgh-islander-tweed-bag"),
    guideReview: review("public_programme", [
      {
        title: "Islander: workshop experience",
        url: "https://islanderuk.com/pages/islander-workshop-experience",
        note: "Current multi-city booking, approximately sixty minutes, minimum age twelve and stock-dependent choices.",
      },
      {
        title: "Islander: workshop introduction",
        url: "https://islanderuk.com/pages/workshop-introduction",
        note: "Prepared components and the distinction between standard materials and upgrades.",
      },
      {
        title: "Forever Edinburgh: Islander Bag Workshop Experience",
        url: "https://edinburgh.org/point-of-interest/islander-bag-workshop-experience/",
        note: "City-tourism corroboration, not a guarantee that an older listed address is your selected venue.",
      },
    ]),
  },
  {
    id: "berlin-frau-tonis-scent",
    slug: "compose-a-berlin-scent-by-smelling-before-naming",
    title: "Compose a Berlin scent by smelling before naming",
    summary:
      "Compare house fragrances with a scent expert and choose a personal combination at Frau Tonis in Berlin.",
    field: "make",
    place: "Berlin, Frau Tonis, Zimmerstraße 13",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    kernel:
      "Arrive with a confirmed workshop appointment and begin with the scent, not the label. Tell the expert what an impression brings to mind, then compare a second possibility. The process combines fragrances from the house's existing range into a composition prepared for you. Ask what changed between the combinations. A fifty-millilitre bottle gives the session a practical ending, but the new vocabulary is just as portable.",
    rootedness:
      "Frau Tonis is a contemporary Berlin fragrance business founded in 2009. Its studio offers a deliberate way to encounter one local creative practice. This is guided co-composition using a prepared palette, not a historic Berlin ritual, a professional perfumery qualification or unrestricted work with raw aroma chemicals.",
    shift:
      "A fragrance becomes a set of comparisons you can describe instead of an image chosen for you.",
    humanReturn:
      "Keep your own first description alongside the finished fragrance's name.",
    responsibility:
      "The one-person product lists about an hour and a fifty-millilitre composition. First buy the workshop voucher, then request an appointment. The request becomes binding only after separate confirmation. Check the desired date and language before committing to a voucher. Non-participating companions have a separate charge. Discuss sensitivities, ingredients, minimum age and physical access rather than assuming universal suitability. House-fragrance blending does not mean you will personally pipette every ingredient. Retail opening hours do not establish a workshop vacancy.",
    evidence:
      "The current workshop product, FAQ and appointment form establish the task, volume and two-stage booking process. EA has not attended, tested the fragrances or verified sustainability, health or longevity claims.",
    duration: "About 1 hour for the confirmed appointment",
    participation: "Guided smelling, comparison and fragrance co-composition",
    access:
      "Use Frau Tonis's official one-person workshop product and its appointment process for Zimmerstraße 13. A purchased voucher alone is not a dated reservation. No reproduction of another brand's perfume or EA booking is promised.",
    ...common,
    ...guideImage("berlin-frau-tonis-scent"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Frau Tonis: one-person fragrance workshop",
          url: "https://www.frau-tonis-parfum.com/shop/en/Fragrance-Workshop-1-pers-225.html",
          note: "Specific approximately one-hour product and fifty-millilitre composition.",
        },
        {
          title: "Frau Tonis: workshop FAQ",
          url: "https://www.frau-tonis-parfum.com/en/faq/",
          note: "House-fragrance combination, voucher-first booking and paid companions.",
        },
        {
          title: "Frau Tonis: appointment request",
          url: "https://www.frau-tonis-parfum.com/shop/termin-buchung/",
          note: "A request needs separate confirmation before the appointment is binding.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "taipei-suho-papermaking",
    slug: "lift-a-sheet-of-paper-from-a-taipei-rooftop-vat",
    title: "Lift a sheet of paper from a Taipei rooftop vat",
    summary:
      "Join the Suho Memorial Paper Museum's scheduled papermaking session and watch wet fibres become something you can hold.",
    field: "make",
    place: "Taipei, Suho Memorial Paper Museum, Zhongshan",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    kernel:
      "Choose the museum's floral-paper experience and arrive before the session. Follow the instructor as the frame meets the vat and lifts a thin layer of fibres from the water. Watch how uneven movement changes the sheet. Leave time for drying rather than expecting the wet result to travel immediately. The rooftop setting makes an everyday material briefly unfamiliar.",
    rootedness:
      "Suho brings paper history, making and a small museum together in Taipei. The visitor session introduces a particular handmade process. It is not access to a commercial mill, a long apprenticeship or the separate self-guided handmade-book kit. A single sheet can still change how you look at what carries a drawing, a message or a receipt.",
    shift:
      "Paper stops being an invisible surface and becomes an arrangement of fibres.",
    humanReturn:
      "Hold an ordinary sheet up to the light when you get home and look for its structure.",
    responsibility:
      "The fourth-floor session takes about forty minutes plus fifteen for drying and packing. The museum lists age three and above, with adult supervision to be confirmed. Tuesday to Friday sessions are 10:30 and 14:30, with an additional 15:30 session on Saturdays. Capacity is limited. Arrive around thirty minutes early for on-site registration or follow the linked individual booking's check-in deadline. A companion needs admission. Confirm teaching language, stairs or lift access and assistance before booking. From 20 October to 1 November 2026 floors one and two are changing exhibitions, while the third-floor collection and fourth-floor making remain open. Do not photograph restricted displays or record video without permission.",
    evidence:
      "The museum's current experience and visitor pages establish the session, floor, age, drying interval and temporary exhibition changes. EA has not taken the class or assessed materials. Conflicting older translated prices are not quoted as current.",
    duration: "About 40 minutes making, then 15 minutes drying",
    participation: "Instructed sheet-making at the rooftop workshop",
    access:
      "Check the official experience page and its reservation link for 68, Section 2, Chang'an East Road. The museum normally opens Tuesday to Saturday. Check holiday closures and the precise arrival deadline. Admission alone does not guarantee a class place.",
    ...common,
    ...guideImage("taipei-suho-papermaking"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Suho Paper Museum: making experience",
          url: "https://www.suhopaper.org.tw/index.php?route=information/information&information_id=98",
          note: "Fourth-floor making, forty-minute session, drying time, age, capacity and reservation conditions.",
        },
        {
          title: "Suho Paper Museum: current visitor information",
          url: "https://www.suhopaper.org.tw/index.php?route=information/information&information_id=88",
          note: "Opening days, 20 October to 1 November exhibition changes, companion admission and recording restrictions.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "hong-kong-star-ferry-crossing",
    slug: "let-the-star-ferry-put-hong-kong-in-motion",
    title: "Let the Star Ferry put Hong Kong in motion",
    summary:
      "Take the scheduled Central to Tsim Sha Tsui crossing and give the harbour a practical role in your day.",
    field: "move",
    place: "Hong Kong, Central and Tsim Sha Tsui ferry piers",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "central",
    kernel:
      "Find the Star Ferry's Central to Tsim Sha Tsui service, choose the correct entrance and follow the boarding crew. Once settled, let the gap between the two shores change without trying to record every second. Notice the ferry working through a harbour used by many other vessels. On arrival, continue on the Kowloon waterfront instead of immediately turning the crossing into a return-photo exercise.",
    rootedness:
      "This is a scheduled public transport connection, not only a sightseeing product. The skyline is familiar, but boarding, waiting and arriving make the image into a journey. Central and Tsim Sha Tsui are on different shores. Nan Lian Garden and other Kowloon experiences need separately planned onward travel.",
    shift: "A postcard view becomes a connection between two parts of a city.",
    humanReturn:
      "Give an ordinary transport journey enough attention to count as part of the visit.",
    responsibility:
      "The crossing itself is short. Allow extra time to find the pier, buy entry and wait for boarding. Check the current service and weather notices on the day. Decks, day types and concessions have different fares. A Harbour Tour is a different product. Do not assume a visitor qualifies for resident concessions or that bicycles are accepted on the Central route. Confirm accessible boarding and the appropriate deck if needed. Stay behind barriers and follow the crew, especially when the vessel moves.",
    evidence:
      "The ferry operator's current service page and Hong Kong Transport Department confirm the public route. EA has not ridden, checked boarding conditions on site or reserved a seat. A historical ferry photograph is not evidence of today's vessel or skyline.",
    duration: "A short crossing, plus pier access and waiting",
    participation: "Ordinary scheduled ferry passenger",
    access:
      "Use the official Central to Tsim Sha Tsui service information, not the separate harbour-tour calendar. Confirm the departure pier and return or onward route. No guided commentary or EA ticket is included.",
    ...common,
    ...guideImage("hong-kong-star-ferry-crossing"),
    guideReview: review("public_admission", [
      {
        title: "Star Ferry: current services",
        url: "https://www.starferry.com.hk/en/service",
        note: "Central to Tsim Sha Tsui schedule, deck and fare distinctions and weather-dependent service.",
      },
      {
        title: "Hong Kong Transport Department: ferry services",
        url: "https://www.td.gov.hk/en/transport_in_hong_kong/public_transport/ferries/service_details/index_t.html",
        note: "Transport-authority corroboration of the franchised ferry route, distinct from sightseeing tours.",
      },
    ]),
  },
  {
    id: "toronto-wards-island-walk",
    slug: "cross-to-wards-island-and-let-toronto-recede",
    title: "Cross to Ward's Island and let Toronto recede",
    summary:
      "Use the municipal ferry to reach Toronto's islands, then choose a manageable public-path walk with the return timetable in mind.",
    field: "move",
    place: "Toronto, Jack Layton Ferry Terminal and Ward's Island",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "toronto",
    kernel:
      "Check the day's Ward's Island departures before leaving the city terminal. On the island, choose a public waterside path rather than following someone into a residential garden. Let the skyline become a changing reference as you walk. Decide on a turn-around point while the return still feels easy. You do not need to cover every island for the crossing to change your sense of Toronto.",
    rootedness:
      "The islands are parkland and a lived-in neighbourhood, not an empty recreational set. A public ferry and pedestrian paths make a small outing possible without a private charter. Residents' houses and front gardens remain private even when the surrounding streets look unusually quiet.",
    shift:
      "The city becomes something you can look back at from a different pace.",
    humanReturn:
      "Remember the point where you chose to turn back without having to complete a circuit.",
    responsibility:
      "The current winter schedule begins 14 October and runs to mid-April, with municipal service to Ward's Island rather than all three summer destinations. Weather or mechanical problems can change sailings. Many facilities are seasonal, so bring what you need and check open washrooms. The city's indicative walk from Ward's to Centre Island is 2.9 kilometres one way. That is not a compulsory route or a return-loop distance. Follow path conditions and daylight. Do not take a mainland Bike Share Toronto bicycle onto the ferry. Confirm boarding and path accessibility independently.",
    evidence:
      "Toronto's current ferry schedule and island visitor guidance establish the winter route, path distances and seasonal limits. EA has not made the trip or checked the surfaces on site. The skyline photograph is not a weather forecast or proof that every facility is open.",
    duration: "Allow a half-day, adapted to the ferry and your chosen walk",
    participation:
      "Municipal ferry passenger and independent public-path walker",
    access:
      "Use the City of Toronto's Jack Layton Ferry Terminal information and the current Ward's Island timetable. Check the last suitable return before walking away from the pier. Water taxis and private tours have separate terms.",
    ...common,
    ...guideImage("toronto-wards-island-walk"),
    guideReview: review(
      "public_admission",
      [
        {
          title: "City of Toronto: ferry routes and current schedules",
          url: "https://www.toronto.ca/explore-enjoy/toronto-island-ferries/ferry-routes-schedules/",
          note: "Winter schedule from 14 October, Ward's Island departures and changeable service.",
        },
        {
          title: "City of Toronto: getting around the islands",
          url: "https://www.toronto.ca/explore-enjoy/toronto-island-ferries/getting-around/",
          note: "Public paths, indicative walking distances, seasonal facilities and Bike Share restrictions.",
        },
      ],
      "2026-12-14",
    ),
  },
  {
    id: "sydney-bondi-tamarama-walk",
    slug: "walk-from-bondi-to-tamarama-with-time-to-look",
    title: "Walk from Bondi to Tamarama with time to look",
    summary:
      "Take a bounded section of Sydney's coastal path and let rock, surf and the next bay share your attention.",
    field: "move",
    place: "Sydney, South Bondi to Tamarama",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    kernel:
      "Begin at the public coastal-path approach by Hunter Park and South Bondi, not inside the ticketed Icebergs pool. Follow the open signed path towards Mackenzies Bay and Tamarama. Pause where you can stand without blocking others. Watch how the coast changes around a headland, then turn back or leave by an independently planned land route. The walk is worthwhile without adding a swim or completing the longer coastal itinerary.",
    rootedness:
      "Sydney's coastline is also a daily walking environment. This section connects two well-known beaches through a more detailed encounter with their edges. It is not an empty wilderness or permission to climb onto every shelf of rock. Other people use the same narrow path for ordinary exercise and getting outside.",
    shift:
      "A famous beach becomes one part of a changing shoreline rather than a single destination.",
    humanReturn:
      "Keep the habit of looking back after a bend, when a familiar view has quietly changed.",
    responsibility:
      "Allow roughly an hour each way with pauses, adjusted to your pace and conditions. There are stairs, gradients, exposed sections and limited shade. Check council notices, wind, heat and any event crowding. North Bronte cliff damage currently closes parts of the longer coastal walk. This guide stops at Tamarama and does not promise an uninterrupted Bondi to Bronte or Coogee route. Never cross barriers or use rocks as a bypass. Walking access says nothing about safe swimming. Confirm an appropriate accessible alternative if stairs are unsuitable.",
    evidence:
      "Waverley Council identifies Hunter Park as a coastal-walk approach and separately documents the continuing North Bronte closure. EA has not walked or surveyed the route. On-site barriers and current instructions override this suggested outing.",
    duration: "Allow about 1 hour each way with pauses, depending on pace",
    participation: "Independent walking on the open signed coastal path",
    access:
      "Check Waverley Council's current notices and the South Bondi approach before setting out. Use public paths only and stop at Tamarama. No guided walk, swim, pool ticket or onward coastal access is implied.",
    ...common,
    ...guideImage("sydney-bondi-tamarama-walk"),
    guideReview: review(
      "public_observation",
      [
        {
          title: "Waverley Council: Hunter Park",
          url: "https://www.waverley.nsw.gov.au/recreation/parks_and_reserves/hunter_park",
          note: "Official South Bondi location and public coastal-path approach, separate from pool admission.",
        },
        {
          title: "Waverley Council: North Bronte cliff remediation",
          url: "https://haveyoursay.waverley.nsw.gov.au/nth-bronte-cliff-remediation",
          note: "Continuing rockfall-related closures on the longer walk. The suggested outing is deliberately limited to Tamarama.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "porto-serralves-treetop",
    slug: "meet-portos-trees-at-canopy-height",
    title: "Meet Porto's trees at canopy height",
    summary:
      "Walk Serralves' elevated timber route and look across a park from a level normally left to branches.",
    field: "learn",
    place: "Porto, Serralves Park",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    kernel:
      "Choose ordinary park admission that explicitly includes the Treetop Walk. Follow the designated elevated route and notice what changes when a tree is no longer seen only from its base. Compare the spaces between branches with the ground below, then return to a park path and look up at the same kind of canopy. A change of height can do more than another wide photograph.",
    rootedness:
      "Serralves joins a designed landscape with a contemporary cultural institution. The elevated route, conceived by Carlos Castanheira with Álvaro Siza Vieira, adds another way to observe its trees. This is a managed Porto park, not a wild forest or a scientific field session supplied with every ticket.",
    shift:
      "A tree becomes a layered living space rather than a shape beside the path.",
    humanReturn:
      "Look at the space held by branches in the next ordinary park you enter.",
    responsibility:
      "Allow a flexible park visit of around ninety minutes or more, rather than treating that as a required duration on the structure. Check hours, weather and any route closure. Keep to the deck and barriers without touching wildlife or collecting material. Ask about step-free entry and the particular elevated route if height or mobility affects your choice. The independent daytime park ticket is not the separate guided programme, school workshop, museum-wide ticket or Serralves em Luz night event. Child and resident concessions need their own current conditions.",
    evidence:
      "Serralves' Treetop Walk and park pages establish the setting and intended public use. The official park-ticket listing explicitly includes the elevated route. EA has not visited, inspected the structure or assessed the institution's environmental marketing.",
    duration: "Allow 90 minutes or more for the park at your own pace",
    participation:
      "Independent observation from a designated elevated park route",
    access:
      "Check Serralves' official park information and the Bilhete Só Parque / Treetop Walk product. Confirm what your dated ticket admits. Guided interpretation, museum entry and evening illumination are separate questions.",
    ...common,
    ...guideImage("porto-serralves-treetop"),
    guideReview: review("public_admission", [
      {
        title: "Serralves: Treetop Walk",
        url: "https://www.serralves.pt/institucional-serralves/parque_treetop-walk/",
        note: "Elevated public route, design authorship and separate guided educational formats.",
      },
      {
        title: "Serralves: visiting the park",
        url: "https://www.serralves.pt/institucional-serralves/parque_visitar-o-parque/",
        note: "Managed eighteen-hectare park and different independent visit circuits.",
      },
      {
        title: "Serralves official ticketing: park and Treetop Walk",
        url: "https://serralves.byblueticket.pt/Eventos/11210",
        note: "Current ordinary park-admission product. Separate from Serralves em Luz and all-institution tickets.",
      },
    ]),
  },
  {
    id: "madrid-chamberi-metro-museum",
    slug: "step-off-madrids-timetable-at-chamberi",
    title: "Step off Madrid's timetable at Chamberí",
    summary:
      "Book a guided visit to a former metro station and read the tiled advertising of a platform trains no longer serve.",
    field: "learn",
    place: "Madrid, Plaza de Chamberí",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "madrid",
    kernel:
      "Reserve the Chamberí station museum, then let the guide connect entrance, finishes and platform. Look at a tiled advertisement as something once meant to catch a commuter's passing attention. Compare it with the signs you used on your own journey there. The museum becomes more interesting when you notice the work the station once had to do, not simply its reputation as a ghost station.",
    rootedness:
      "Chamberí was one of the original eight stations of Madrid's 1919 first metro line. It closed in 1966 when the network's longer trains could not be accommodated there, and reopened as a restored museum in 2008. What you enter is curated public heritage, not an abandoned station to explore independently.",
    shift:
      "A transport network acquires a past visible in the surfaces people once passed without stopping.",
    humanReturn:
      "Read one ordinary station sign on your next journey as a design decision.",
    responsibility:
      "The official guided visit is free, requires advance booking and lasts roughly thirty to forty minutes. Current ordinary opening is Friday afternoon, Saturday morning and afternoon, and Sunday morning. New monthly places normally open between the nineteenth and twenty-second of the previous month. Availability is not guaranteed. Confirm the session language and accessible arrangements. The operator identifies the space as adapted for reduced mobility, but individual boarding or transfer needs still require confirmation. Stay with the guide and behind all barriers. A museum reservation is not permission to enter tracks or tunnels.",
    evidence:
      "Metro Madrid's station page establishes the history, current visit format, booking and access statement. Its museum portal distinguishes Chamberí from other heritage spaces. EA has not attended or assessed accessibility on site.",
    duration: "About 30 to 40 minutes for the reserved guided visit",
    participation: "Guided museum visitor in the former station",
    access:
      "Reserve Estación de Chamberí through Museos Metro Madrid for Plaza de Chamberí. Do not substitute another metro museum or assume an ordinary transport ticket provides museum entry. No EA reservation is implied.",
    ...common,
    ...guideImage("madrid-chamberi-metro-museum"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Museos Metro Madrid: Estación de Chamberí",
          url: "https://museosmetromadrid.es/estacion-de-chamberi_0/",
          note: "History, free reserved guided visit, approximate duration, opening pattern and reduced-mobility statement.",
        },
        {
          title: "Museos Metro Madrid: public heritage spaces",
          url: "https://museosmetromadrid.es/",
          note: "Official reservation route and distinction from the network's other visitable museums.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "paris-music-museum-listening",
    slug: "hear-the-instruments-inside-pariss-music-museum",
    title: "Hear the instruments inside Paris's music museum",
    summary:
      "Use the Musée de la musique's listening guide to connect an instrument in a case with the sound it can make.",
    field: "learn",
    place: "Paris, Musée de la musique, Cité de la musique",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    kernel:
      "Choose the permanent collection and pick up or connect to the museum's visioguide. Begin with an instrument whose shape you cannot immediately explain. Look first, then listen to its recording or demonstration material, and look again. Ask what a player must do to produce that sound. Following a few objects closely can be more revealing than trying to remember every name in the cases.",
    rootedness:
      "The museum places European instrument history in relation to musical cultures from other regions and to modern electronic practice. Instruments carry histories of making, circulation and use, not just a sequence of improved inventions. The collection is part of the Philharmonie's public cultural work, but a museum visit is not automatically a concert-hall performance.",
    shift:
      "An unfamiliar instrument becomes a relationship between material, gesture and listening.",
    humanReturn:
      "Listen for one instrument you can now picture when the next piece of music begins.",
    responsibility:
      "The current permanent-collection page lists Tuesday to Friday 12:00 to 18:00 and weekends 10:00 to 18:00. Check holiday closures. Allow ninety minutes or adapt the visit to your attention. The free visioguide offers French, English, Spanish and French Sign Language. Admission and any concession still need checking. Do not touch collection objects unless staff explicitly designate a handling activity. A live musician is described in the museum programme, but confirm the day's timing rather than assuming a performance throughout your visit. Temporary exhibitions, concerts and family workshops have separate conditions.",
    evidence:
      "The current 2026-27 permanent-collection page establishes the route, listening guide and visiting hours. The institution's museum page supplies context. EA has not visited the redesigned collection or heard a particular performance.",
    duration: "Allow around 90 minutes, at your own pace",
    participation: "Museum looking and guided recorded listening",
    access:
      "Select Collection permanente at the Musée de la musique, 221 avenue Jean-Jaurès. Check the actual admission and accessibility information. The nearby Philharmonie des enfants and temporary exhibitions are different products. No EA booking.",
    ...common,
    ...guideImage("paris-music-museum-listening"),
    guideReview: review("public_admission", [
      {
        title: "Philharmonie de Paris: permanent collection 2026-27",
        url: "https://philharmoniedeparis.fr/fr/activite/exposition/29954-collection-permanente",
        note: "Current collection, free visioguide languages, opening pattern and separate activities.",
      },
      {
        title: "Philharmonie de Paris: Musée de la musique",
        url: "https://philharmoniedeparis.fr/fr/musee-de-la-musique",
        note: "Institutional context and the distinction between collection, exhibitions and concerts.",
      },
    ]),
  },
  {
    id: "berlin-koernerpark-pause",
    slug: "step-below-neukoellns-streets-into-koernerpark",
    title: "Step below Neukölln's streets into Körnerpark",
    summary:
      "Find a sunken public garden in Berlin and let the change in level give an ordinary pause a different setting.",
    field: "restore",
    place: "Berlin, Körnerpark, Neukölln",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    kernel:
      "Use an open public entrance and descend into the garden if the route suits you. Look back at the edge where the surrounding streets remain higher. Walk the formal paths, choose an available seat and give the room of the park a few quiet minutes. You do not need a café purchase, an exhibition or a photograph of yourself to make the stop count.",
    rootedness:
      "Körnerpark occupies a former gravel quarry, several metres below the surrounding streets. Its early twentieth-century garden and orangery can look like palace grounds, but this is a neighbourhood public park. That contrast is the useful surprise: a formal landscape can sit inside everyday Neukölln without being a royal estate.",
    shift: "A neighbourhood changes scale through a small change in height.",
    humanReturn:
      "Look for the public spaces your usual street-level pace makes easy to miss.",
    responsibility:
      "Allow thirty to sixty minutes in daylight, with no need to complete a fixed route. Check entrances, surfaces and current restrictions, especially in poor weather. Steps and the sunken layout matter for mobility, so confirm the appropriate entrance rather than assuming every approach is step-free. Gallery and café hours are separate from ordinary park access. A fountain, flowers or a summer performance are not guaranteed in winter. Keep to public paths, leave planted areas alone and respect other people's quiet use of the space.",
    evidence:
      "Neukölln's official district heritage and tourism pages establish the quarry history and public-park context. EA has not visited, measured the entrances or verified a particular seasonal display. This is a pause, not a wellness treatment.",
    duration: "Allow 30 to 60 minutes at your own pace",
    participation: "Independent public-garden walking and sitting",
    access:
      "Check the district's Körnerpark information and the entrance that suits your needs. Ordinary park use is distinct from gallery events, café service or any privately organised activity. No reserved seat is implied.",
    ...common,
    ...guideImage("berlin-koernerpark-pause"),
    guideReview: review("public_admission", [
      {
        title: "Berlin Neukölln district: Körnerpark",
        url: "https://www.berlin.de/ba-neukoelln/ueber-den-bezirk/sehenswertes/artikel.105139.php",
        note: "Former quarry, sunken garden history and public setting.",
      },
      {
        title: "Berlin Neukölln tourism: green spaces",
        url: "https://www.berlin.de/tourismus-neukoelln/entdecken/artikel.1153452.php",
        note: "District context for public parks, separate from café and gallery programmes.",
      },
    ]),
  },
  {
    id: "kyoto-funaoka-sento",
    slug: "give-kyoto-an-ordinary-bathhouse-evening",
    title: "Give Kyoto an ordinary bathhouse evening",
    summary:
      "Enter Funaoka Onsen as a bather, not a spectator, and let a historic neighbourhood sentō slow the evening.",
    field: "restore",
    place: "Kyoto, Funaoka Onsen, Kita ward",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    kernel:
      "Check the current opening arrangement, remove your shoes and follow the bathhouse's entry instructions. Wash before using the shared tubs and choose a comfortable, short soak rather than trying every facility. The building's decorative detail can enter your attention without becoming a photography task. Afterwards, leave time to cool down before returning to the street.",
    rootedness:
      "Funaoka's building dates from 1923 and is documented by Kyoto's tourism office as registered cultural heritage. It also remains a public bath used by people with their own routines. The name Onsen does not establish a natural hot-spring, medical or therapeutic claim. A sentō visit is different from a private spa appointment or a tour of the bathing rooms.",
    shift:
      "Kyoto's heritage becomes a setting for an ordinary shared practice, not only something viewed from outside.",
    humanReturn:
      "Keep the care involved in entering a shared space on somebody else's terms.",
    responsibility:
      "The bathhouse union's current Japanese listing gives 15:00 to 23:30, Sunday from 08:00, and Tuesday closure. Its translated summaries differ, so reconfirm before travel rather than relying on an old late-night listing. Bathing is unclothed in the assigned facilities. Wash first and keep towels out of tubs. Leave cameras and phones out of changing and bathing spaces. Ask directly about tattoos, age, mobility, accompaniment and any health-related suitability. Electric baths and sauna are optional, not a challenge or a promised benefit. Bring or obtain the required washing items.",
    evidence:
      "The Kyoto bathhouse union provides current Japanese operating details and general bathing etiquette. City tourism documents the building. EA has not bathed here or independently checked water origin, individual admission policies or physical access.",
    duration: "Allow about an hour, including washing and cooling down",
    participation: "Ordinary public-bath customer following the house rules",
    access:
      "Use the Kyoto bathhouse union's Japanese Funaoka listing for 82-1 Murasakino Minamifunaoka-chō and verify current conditions. This is a paid public bath, not a private session, photography visit or EA reservation.",
    ...common,
    ...guideImage("kyoto-funaoka-sento"),
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Kyoto bathhouse union: Funaoka Onsen, Japanese listing",
          url: "https://1010.kyoto/spot/funaokaonsen/",
          note: "Current Japanese hours and Tuesday closure. Translated listings conflict and should not override confirmation.",
        },
        {
          title: "Kyoto bathhouse union: how to use a sentō",
          url: "https://1010.kyoto/how_to_use/",
          note: "Unclothed shared bathing, washing first, towels outside tubs and optional facility cautions.",
        },
        {
          title: "Kyoto City Tourism: Funaoka Onsen",
          url: "https://ja.kyoto.travel/tourism/single01.php?category_id=2&tourism_id=2483",
          note: "1923 building and registered cultural-heritage context, not current operating hours.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "florence-oblate-library-pause",
    slug: "bring-a-book-to-florences-oblate-courtyard",
    title: "Bring a book to Florence's Oblate courtyard",
    summary:
      "Use a public library's quieter spaces for a reading pause instead of making the next stop another ticket.",
    field: "restore",
    place: "Florence, Biblioteca delle Oblate",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "florence",
    kernel:
      "Bring a book or a few pages of your own, check the library's current public entrances and find an available reading place. Let the courtyard and arcades establish the pace before opening the book. Read enough to stop watching the clock. The useful contrast is not a secret view, but a part of Florence where you can participate by being quietly present.",
    rootedness:
      "The Oblate complex connects a former religious and care-giving institution with a modern municipal library. Its public role matters as much as the architecture. Students and other readers are not extras in a visitor's discovery, and a library is not a substitute café terrace or a place to stage an unobstructed cathedral photograph.",
    shift:
      "A city visit makes room for a public service that does not require you to keep buying admission.",
    humanReturn:
      "Remember that reading your own few pages can be a genuine part of being somewhere.",
    responsibility:
      "Ordinary library entry is free and requires no application or identity document. Using library collections and some services has separate registration conditions, so this suggestion begins with your own reading. Confirm hours carefully. On Wednesday to Saturday selected rooms and external spaces remain open after 19:00, but that does not extend every collection or staffed service. Sundays and listed holidays close unless a specific opening is announced. Seats are not reserved for visitors. Confirm accessible entry and facilities if needed. Keep voices and devices quiet and follow rules on food, photography and children's areas.",
    evidence:
      "Florence's current library page establishes hours and the after-19:00 service boundary. Municipal access rules confirm free public entry, while consultation rules distinguish registered services. EA has not visited or checked seat availability, café service or a particular view.",
    duration: "Allow 30 to 60 minutes during suitable public hours",
    participation:
      "Quiet public-library and courtyard use with your own reading",
    access:
      "Check Biblioteca delle Oblate's current municipal page before going. No booking is needed for ordinary entry, but events, borrowing, collection services and café seating are separate. No particular seat or view is guaranteed.",
    ...common,
    ...guideImage("florence-oblate-library-pause"),
    guideReview: review("public_admission", [
      {
        title: "Florence municipal libraries: Biblioteca delle Oblate",
        url: "https://cultura.comune.fi.it/biblioteca-delle-oblate",
        note: "Current hours, holiday closures and the limited after-19:00 opening of selected spaces.",
      },
      {
        title: "City of Florence: public library access",
        url: "https://www.comune.firenze.it/servizi/cultura-e-tempo-libero/biblioteche-comunali-fiorentine-accesso",
        note: "Free ordinary entry for everyone, without an application or entry documentation.",
      },
      {
        title: "City of Florence: consultation and on-site reading services",
        url: "https://www.comune.firenze.it/servizi/cultura-e-tempo-libero/biblioteche-comunali-fiorentine-consultazione-e-lettura-sede",
        note: "Separate registration conditions for library-document consultation and related services.",
      },
      {
        title: "Florence: the Oblate library's history",
        url: "https://cultura.comune.fi.it/pagina/le-biblioteche-comunali-fiorentine/biblioteca-delle-oblate",
        note: "History of the complex and its modern municipal-library role.",
      },
    ]),
  },
  {
    id: "new-york-village-vanguard-set",
    slug: "give-a-greenwich-village-jazz-set-your-full-attention",
    title: "Give a Greenwich Village jazz set your full attention",
    summary:
      "Book one Village Vanguard set and let a small listening room, rather than a long evening's checklist, decide the pace.",
    field: "gather",
    place: "New York City, Village Vanguard, Greenwich Village",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    kernel:
      "Choose a named artist and dated set from the club's official calendar. Arrive for the appropriate doors, take the available seating as staff direct and put the screen away. Follow a phrase long enough to hear another musician answer it. An attentive set is a complete evening's musical encounter, even if you leave without filming proof that you were there.",
    rootedness:
      "The Village Vanguard is a working New York jazz club with a substantial recording and performance history. The present programme matters more than borrowing prestige from a famous past recording. You are an audience member for the musicians booked that night, not entering a museum or being promised a particular style, solo or historic line-up.",
    shift:
      "Jazz becomes a relationship unfolding in a room rather than background for conversation.",
    humanReturn:
      "Look up the actual musicians afterwards and let one recording lead you to another live set.",
    responsibility:
      "The club currently lists 20:00 and 22:00 sets, with doors at 19:00 and 21:30. Minimum age is fifteen. Admission and a one-drink minimum are separate, and a non-alcoholic drink counts. There is no food, including outside food. Seating is first come, first served. The club explicitly reports fifteen entrance steps and no wheelchair accessibility. Check current access needs and ticket terms before paying. Use the dated calendar, since artists and availability can change. Follow house rules on conversation and recording. A ticket does not guarantee your preferred table.",
    evidence:
      "The current artist calendar contains dated October and November 2026 programmes. The club's FAQ establishes age, drinks, seating, entrance steps and booking conditions. EA has not attended, heard these sets or inspected the venue.",
    duration: "One booked set, plus arrival and seating time",
    participation: "Ticketed listening audience in a working jazz club",
    access:
      "Select the artist, date and set through the Village Vanguard's linked official calendar for 178 Seventh Avenue South. Different sets need their own booking. No dinner or fixed table is included. No EA booking.",
    ...common,
    ...guideImage("new-york-village-vanguard-set"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Village Vanguard: current programme",
          url: "https://villagevanguard.com/",
          note: "Working venue and links to the actual artist calendar.",
        },
        {
          title: "Village Vanguard: FAQ",
          url: "https://villagevanguard.com/faq/",
          note: "Age fifteen and above, non-alcoholic drink minimum, no food, first-come seating and fifteen entrance steps.",
        },
        {
          title: "Village Vanguard: official artist and ticket calendar",
          url: "https://vv.squadup.com/artists?direct=true",
          note: "Dated October-November 2026 artists and set availability. No named performance is implied beyond its own listing.",
        },
      ],
      "2026-11-30",
    ),
  },
  {
    id: "barcelona-cathedral-sardana",
    slug: "watch-a-sardana-circle-form-outside-barcelonas-cathedral",
    title: "Watch a sardana circle form outside Barcelona's cathedral",
    summary:
      "Choose a confirmed public ballada and listen to the cobla before deciding whether to join the dance.",
    field: "gather",
    place: "Barcelona, Pla de la Catedral",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    kernel:
      "Check the precise ballada date and arrive without expecting an event to appear on demand. Watch one circle long enough to notice how a shared pattern holds together. Listen to the live ensemble as well as watching feet. If a welcoming opening appears, ask before joining and follow the dancers' guidance. Remaining an attentive observer is a complete and respectful way to take part in the public occasion.",
    rootedness:
      "The sardana is a Catalan social dance sustained through associations, musicians and participants. Barcelona's ACFB organises a free public cycle in front of the cathedral. It is a present-day community event, not a performance commissioned for visitors or proof that everyone in Catalonia shares one cultural practice.",
    shift:
      "A famous square becomes somewhere people make a pattern together, not just a backdrop.",
    humanReturn:
      "Remember the small coordination between people rather than trying to take possession of the tradition.",
    responsibility:
      "The federation calendar lists 24 October 2026 at 17:00 at Pla de la Catedral. The organiser announces the 2026 cycle's closing double ballada for 8 November at 10:45. Confirm both with current notices and weather. Do not assume every weekend or time remains the same. A 25 October event at Sagrada Família is a different venue. There is no guaranteed lesson, dancing partner or place in a circle. Keep bags and cameras clear of dancers and give musicians space. Ask about step-free approaches and a comfortable observation point if needed.",
    evidence:
      "The organiser's September 2026 announcement establishes the public cycle and its 8 November ending. The federation's current agenda provides an upcoming 24 October cathedral date. EA has not attended, confirmed weather-dependent operation or arranged visitor participation.",
    duration: "Choose part of the confirmed ballada, at your own pace",
    participation:
      "Public audience, with optional participation only when welcomed",
    access:
      "Check ACFB and the current SomSardana agenda for Pla de la Catedral, Barcelona. This guide concerns the remaining 2026 outdoor cycle only and expires after its announced ending. Indoor cobla concerts and other squares are separate programmes.",
    ...common,
    ...guideImage("barcelona-cathedral-sardana"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "ACFB: 2026 cathedral ballades announcement",
          url: "https://acfbarcelona.cat/comunicat-ballades-de-sardanes/",
          note: "Current organiser announcement, free public cycle and closing double ballada on 8 November at 10:45.",
        },
        {
          title: "SomSardana: current federation agenda",
          url: "https://app.somsardana.cat/",
          note: "Upcoming 24 October 2026, 17:00, Pla de la Catedral. Other Barcelona locations are not interchangeable.",
        },
      ],
      "2026-11-08",
    ),
  },
  {
    id: "tokyo-tsukiji-organ-concert",
    slug: "hear-a-pipe-organ-inside-a-tokyo-buddhist-temple",
    title: "Hear a pipe organ inside a Tokyo Buddhist temple",
    summary:
      "Attend Tsukiji Hongwanji's scheduled lunchtime concert and hear an unexpected instrument within a working temple.",
    field: "gather",
    place: "Tokyo, Tsukiji Hongwanji main hall",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    kernel:
      "Choose a date from the temple's current organ-concert schedule and be seated before the opening talk. Let the instrument and the main hall share your attention. Notice how a held note continues through the room after the player's gesture. The surprise is not a novelty show in a borrowed setting. It is an instrument used within the temple's own programme, with visitors invited to listen.",
    rootedness:
      "Tsukiji Hongwanji is a Jōdo Shinshū Buddhist temple. Its organ history includes a 1970 donation and a replacement donated in 2025, with the new instrument entering the 2026 programme. Older English visitor material still describes the earlier organ, so it should not be read as a specification of the instrument now in use.",
    shift:
      "An assumption about which sounds belong in which building becomes less fixed.",
    humanReturn:
      "Listen for the relationship between a room and an instrument the next time you enter a public performance.",
    responsibility:
      "The current programme starts with a Buddhist talk at 12:10 and music at 12:20. Be seated before the talk. The temple states no application is required. Its October-to-March schedule lists 30 October, 27 November and 25 December 2026, followed by 29 January, 26 February and 26 March 2027. Check the actual date and any change rather than assuming a daily recital. The opening talk is part of the occasion, not an English guided tour. Follow temple instructions on silence, seating, photography and recording. Confirm accessible entry and any assistance. Visiting does not require participating in worship or make ceremonies a visitor performance.",
    evidence:
      "The current Japanese concert page and its published October 2026 to March 2027 schedule establish dates, arrival and no-application entry. The temple's global visitor guide supplies religious context but retains older organ details. EA has not attended or heard the replacement instrument.",
    duration: "A scheduled lunchtime programme from 12:10, plus arrival",
    participation: "Public listening audience in the temple's main hall",
    access:
      "Check Tsukiji Hongwanji's current Japanese pipe-organ concert page for 3-15-1 Tsukiji. Arrive before 12:10 on a listed concert date. This is not the temple's separate worship service, memorial booking, tour or café reservation.",
    ...common,
    ...guideImage("tokyo-tsukiji-organ-concert"),
    guideReview: review("public_programme", [
      {
        title: "Tsukiji Hongwanji: current pipe-organ concert programme",
        url: "https://tsukijihongwanji.jp/enjoy/lunchtime-concert/",
        note: "Current replacement-organ history, 12:10 talk, 12:20 music, no application and the October 2026 to March 2027 schedule image.",
      },
      {
        title: "Tsukiji Hongwanji: global visitor guide",
        url: "https://tsukijihongwanji.jp/global/guide/",
        note: "Working Buddhist temple and visitor context. Older organ specifications are not used for the replacement instrument.",
      },
    ]),
  },
];
