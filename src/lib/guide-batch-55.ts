import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: NonNullable<PublicExperience["guideReview"]>["scope"],
  sources: [string, string, string][],
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-21",
  reviewBy: "2027-01-18",
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "istanbul-vefa-boza",
    slug: "taste-istanbuls-winter-in-a-glass-of-boza",
    title: "Taste Istanbul's winter in a glass of boza",
    field: "taste",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    place: "Istanbul, Vefa",
    summary:
      "At Vefa Bozacısı, order the thick fermented grain drink that gives an Istanbul cold-weather pause a different texture from tea or coffee.",
    kernel:
      "Begin with a single glass and a little curiosity about texture. Taste it before deciding whether to add anything, then notice how sweetness and a gentle sourness sit together. Ask what the drink is made from and how the shop serves it that day. The useful comparison is with your own expectation of a drink, not with a list of famous Istanbul foods. Let the visit be brief if the shop is busy. An ordinary purchase can open a conversation without requiring the people serving you to perform their history for your camera.",
    rootedness:
      "Vefa's published family history places the business in this Istanbul neighbourhood from 1876 and describes a particularly thick, pale style of boza. Türkiye's tourism body situates boza within the city's winter food culture. Those sources support a specific local stop, not a claim that fermentation belongs to one nation or that this shop invented every version. A taste here is one encounter with a wider regional drink tradition.",
    shift:
      "A city's seasons can be carried by a texture as much as by a landscape.",
    humanReturn:
      "Leave with a new reference point for what a drink can feel like, rather than another famous-shop photograph.",
    responsibility:
      "Confirm current hours and availability before travelling to Vefa Cad. 66. Ask directly about grains, toppings, allergens and cross-contact. Fermentation and storage matter, so do not assume a bottled product will travel unrefrigerated. EA does not repeat the operator's nutritional or health claims and does not certify alcohol content or suitability for dietary or medical needs. Photograph other customers only with consent. Check entrance access directly if steps or a crowded interior would be difficult.",
    evidence:
      "The operator identifies the Vefa premises and its product tradition. The national tourism source corroborates boza's winter association. EA has not tasted a current serving, inspected production or verified health and exclusivity claims.",
    duration: "Allow 20 to 30 minutes, plus any queue",
    participation: "An ordinary purchase and attentive, self-directed tasting",
    access:
      "Use the official Vefa contact listing to confirm the neighbourhood shop, not the factory in Çorlu. This guide does not include a production visit, organised tasting or reservation. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Vefa: shop address and contact",
        "https://www.vefa.com.tr/index.php?dil=en&sayfa=iletisim",
        "Distinguishes the public Istanbul shop from the separate production location.",
      ],
      [
        "Vefa: family history",
        "https://www.vefa.com.tr/index.php?dil=en&sayfa=tarihce",
        "Operator account of its local history and drink style, not independent adjudication of invention claims.",
      ],
      [
        "GoTürkiye: Istanbul's winter drinks",
        "https://goturkiye.com/branding/press-releases/the-unique-turkish-flavours-that-warm-up-istanbul-winters-salep-and-boza",
        "National tourism context for the seasonal association of boza.",
      ],
    ]),
  },
  {
    id: "stockholm-ostermalm-counter-lunch",
    slug: "build-a-stockholm-lunch-from-the-food-hall-counter",
    title: "Build a Stockholm lunch from the food-hall counter",
    field: "taste",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    place: "Stockholm, Östermalm",
    summary:
      "At Östermalms Saluhall, use the counters to ask how something is prepared before deciding what to eat. The red-brick landmark becomes a practical introduction to the city's food.",
    kernel:
      "Walk through once before choosing a counter. Look for something whose preparation you cannot quite identify and ask a short question when staff have time. If fish appeals, ask which choices are cured, smoked or cooked, rather than treating every pink slice as the same thing. Order a manageable portion or a listed lunch and find the seating that belongs to that business. You do not need a tasting marathon. One ingredient understood a little better can make the room more useful than a dozen photographs of its displays.",
    rootedness:
      "The hall's operator dates its opening to 1888, while Visit Stockholm describes its place within Östermalm and its range of fresh food counters. Today's traders also represent cuisines beyond Sweden. That mixture is part of the present city, not something to edit out in search of a single frozen definition of local food. The setting offers an accessible point of comparison, though it should not be taken as representative of every Stockholm household's shopping budget.",
    shift:
      "A market becomes easier to read when you ask about a preparation instead of ordering the most photographed dish.",
    humanReturn:
      "Take away one useful food word, one preparation you recognise and a lunch you actually chose for yourself.",
    responsibility:
      "Check the hall's current opening and the chosen trader's hours separately. Ordinary Sunday closure has holiday exceptions. Food, tastings and restaurant seating are not included in entry. Ask about fish, shellfish, dairy, gluten and cross-contact before ordering. Do not assume samples are free, every product is Swedish or a fish counter guarantees a particular sourcing standard. Keep aisles clear and ask before photographing staff or their work. Confirm seating and step-free arrangements directly where needed.",
    evidence:
      "The hall publishes access details and trader information, corroborated by the city destination organisation. EA has not eaten at each counter, audited suppliers or independently ranked the hall.",
    duration: "Allow 45 to 90 minutes for a walk and lunch",
    participation:
      "A self-directed food-hall visit with purchases from individual traders",
    access:
      "Go to the permanent Östermalmstorg hall using its official visitor information. Reserve directly if a particular restaurant requires it. A general visit does not book a table or guarantee any day's product selection. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Östermalms Saluhall: visit",
        "https://en.ostermalmshallen.se/visit-us/",
        "Current hall address, regular hours and holiday exceptions.",
      ],
      [
        "Östermalms Saluhall: traders and context",
        "https://en.ostermalmshallen.se/",
        "Operator's present food-hall context. Promotional rankings are not adopted.",
      ],
      [
        "Visit Stockholm: Östermalm district",
        "https://www.visitstockholm.com/see-do/attractions/district-guide-ostermalm/",
        "City destination context for the market hall and neighbourhood.",
      ],
    ]),
  },
  {
    id: "singapore-ya-kun-kaya",
    slug: "learn-singapores-breakfast-rhythm-with-kaya-and-kopi",
    title: "Learn Singapore's breakfast rhythm with kaya and kopi",
    field: "taste",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore",
    summary:
      "Order kaya toast and a coffee at a Ya Kun outlet, then notice how crisp bread, a soft spread and the way you order a drink fit into a short everyday pause.",
    kernel:
      "Choose an outlet that fits your day rather than crossing the island for a supposed secret version. Read the drink options before reaching the counter and ask for help if the ordering vocabulary is unfamiliar. Try the toast while it is fresh, first noticing the contrast between its crisp edges and the filling. Eggs are an optional part of your order, not a test of whether you are doing breakfast correctly. Sit, eat and watch the rhythm of orders without photographing strangers. The encounter works because it fits into ordinary time.",
    rootedness:
      "Ya Kun is a Singaporean business whose core menu gives a clear public route into kaya toast and kopi. Its published product and FAQ pages distinguish ingredients and set components. The value of this guide is the breakfast combination, not a claim that a chain is the only authentic place to eat it. Different kopitiams and households have their own preferences. Familiarity and repeatability can be useful when you are learning a new food vocabulary.",
    shift:
      "A small breakfast order can make a city's everyday routines feel more legible.",
    humanReturn:
      "Leave knowing how to ask for a drink you want and which part of the toast's contrast you enjoyed.",
    responsibility:
      "Check the selected branch's hours and menu. Kaya contains egg, and the butter toast involves dairy and wheat. Ask about other allergens and cross-contact. Soft-boiled eggs are not a suitable choice for everyone, so choose an alternative if undercooked egg is inappropriate for you. The operator says it is not halal-certified. Do not infer certification from ingredients alone. Confirm seating and physical access at the specific outlet. Prices and availability can differ across locations.",
    evidence:
      "Current operator menu and FAQ pages establish the toast, common set components and stated dietary boundaries. EA has not tasted the current food, inspected preparation or verified identical service across branches.",
    duration: "Allow 20 to 40 minutes, plus any queue",
    participation: "An ordinary café purchase, not a hosted food tour",
    access:
      "Use Ya Kun's Find Us page to choose a Singapore outlet and verify its opening. Order directly on arrival. This guide does not require a flagship visit or include a reservation, lesson or meal voucher. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Ya Kun: find a Singapore outlet",
        "https://app.yakun.com/find-us",
        "Official route to branch-specific location and opening details.",
      ],
      [
        "Ya Kun: kaya toast with butter",
        "https://app.yakun.com/kaya-toast-with-butter.html",
        "Current operator product description for the proposed order.",
      ],
      [
        "Ya Kun: frequently asked questions",
        "https://app.yakun.com/faq",
        "Egg content, certification boundary and the distinction between outlets and menu products.",
      ],
    ]),
  },
  {
    id: "meissen-underglaze-painting",
    slug: "paint-a-line-in-meissens-blue-before-the-firing",
    title: "Paint a line in Meissen's blue before the firing",
    field: "make",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "meissen",
    place: "Meissen",
    summary:
      "In MEISSEN's booked DIY session, paint a porcelain mug or small dish using underglaze blue, then let the manufactory glaze, fire and dispatch the finished piece.",
    kernel:
      "Arrive with a simple motif in mind and leave room for your hand to change it. Ask the instructor how the colour behaves before and after firing, then try one deliberate line before filling the surface. The curve of a mug is a different problem from a flat page. Keep the design manageable enough to notice pressure and spacing, rather than spending the whole session chasing a complex image. A slightly uneven mark can be the part that later reminds you of making the object yourself.",
    rootedness:
      "Meissen's identity is closely tied to porcelain production. The current visitor programme separates watching skilled makers in demonstration workshops from a bookable opportunity to decorate an object yourself. This DIY format uses the manufactory's blue underglaze colour, but it is not training in the complete production process or a promise that a beginner can reproduce a historic pattern. Looking at professional work afterwards can make the distance between an introductory session and a practiced hand more interesting.",
    shift:
      "A celebrated material becomes less distant when you discover what one line asks of your hand.",
    humanReturn:
      "Receive an object whose decoration you remember making, rather than only recognising its mark on the base.",
    responsibility:
      "Book the specific DIY product and shipping destination, not just museum admission. The operator recommends ages 12 and above and describes a session of about an hour. Finished pieces are shipped after glazing and firing, with an indicative four-to-six-week dispatch interval. Do not plan to take the completed ceramic home that day. Confirm language, assistance, available object shapes, delivery charges and any customs implications before paying. Follow staff handling instructions and ask about physical access for the workshop itself.",
    evidence:
      "The current official 2026 DIY listing specifies the underglaze activity, objects, suggested age, duration and dispatch process. The visitor site distinguishes workshops from general admission. EA has not attended the class or verified a delivery date.",
    duration: "About one hour for the painting session, plus arrival time",
    participation:
      "A separately booked introductory porcelain-decoration session",
    access:
      "Reserve an available DIY session through Erlebniswelt MEISSEN at Talstraße 9. Confirm the workshop language and shipping option. A museum ticket or show-workshop visit does not itself reserve a painting place. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "MEISSEN: current DIY session",
        "https://www.erlebniswelt-meissen.com/en/do-it-yourself-bei-meissen-2026.html",
        "Specific public product with recommended age, object choices, duration and post-firing delivery.",
      ],
      [
        "MEISSEN: visitor programme",
        "https://www.erlebniswelt-meissen.com/en",
        "Current calendar, location and distinction between admission and bookable activities.",
      ],
    ]),
  },
  {
    id: "tokyo-ameshin-candy-shaping",
    slug: "find-a-rabbit-in-a-soft-piece-of-sugar-in-asakusa",
    title: "Find a rabbit in a soft piece of sugar in Asakusa",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Asakusa",
    summary:
      "At Ameshin's Hanakawado workshop, try the beginner's rabbit in amezaiku, a sugar-shaping craft where the material changes while you work. Confirm a booking directly before planning around it.",
    kernel:
      "Start by watching how the instructor reads the material. A small change in timing or movement can alter an ear, a face or the balance of the whole figure. Follow the demonstrated method and let the beginner exercise stay a beginner exercise. The point is not to reproduce the elaborate fish or animals in professional displays. Notice the moment when a round mass begins to suggest something recognisable, then stop when the instructor tells you to. Here, the clock belongs partly to the material rather than to your ambition.",
    rootedness:
      "Amezaiku turns pliable sugar into figures using hand tools. Japan's national tourism organisation and the Greater Tokyo visitor resource identify Ameshin's Asakusa workshop as a public, reservable introduction. The Hanakawado teaching location is distinct from the Solamachi retail and demonstration outlet. That distinction matters more than chasing a particular shop photograph. This is contemporary teaching within an established craft, not a claim that the visitor enters an unchanged historical scene.",
    shift:
      "Making something edible can be an exercise in timing and restraint, not just decoration.",
    humanReturn:
      "Keep a memory of the moment a shape emerged, along with a clearer respect for practiced hands.",
    responsibility:
      "Hot material and tools require direct supervision. Confirm minimum age, guardian requirements, language, ingredients, handling needs and current duration with the shop. Do not use this description as instructions for trying hot-sugar work at home. The operator's HTTPS reservation site could not be securely validated during this check, so do not bypass a browser security warning. Use the contact details in the Greater Tokyo listing and obtain a confirmed booking before travelling. Ask how to protect the finished piece from heat and humidity.",
    evidence:
      "Official national and regional tourism sources describe the bookable beginner experience and its correct location. EA has not attended, tested the safety arrangements or verified live online availability. The operator website's certificate problem remains an explicit access limitation.",
    duration:
      "Confirm the current session length when booking and leave time for arrival",
    participation:
      "A supervised, prebooked introduction to shaping a sugar figure",
    access:
      "Use the Greater Tokyo listing's direct shop contact for the Hanakawado location at 2-9-1. Confirm the date, language, age suitability and total price before committing. Do not substitute the Solamachi shop for a workshop reservation. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Greater Tokyo: Asakusa Ame-shin",
        "https://greatertokyo.jp/see-and-do/872/",
        "Regional visitor resource identifies the beginner rabbit workshop, Hanakawado address and direct contact. Its linked operator website has a certificate problem.",
      ],
      [
        "Japan National Tourism Organization: amezaiku in Asakusa",
        "https://www.japan.travel/en/au/news-blog/create-adorable-confectionery-at-an-amezaiku-workshop-in-asakusa/",
        "Official national tourism account corroborates the craft and workshop. Historical prices are not treated as current.",
      ],
    ]),
  },
  {
    id: "ljubljana-umbrella-mending",
    slug: "give-an-umbrella-another-life-in-ljubljana",
    title: "Give an umbrella another life in Ljubljana",
    field: "make",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "ljubljana",
    place: "Ljubljana",
    summary:
      "Join a tiny workshop at Dežnik and learn how an umbrella can be repaired. A familiar disposable object becomes a structure worth understanding.",
    kernel:
      "Bring a damaged umbrella if you have one, but ask first whether its problem suits the session. Otherwise, the published experience provides the possibility of working on one at the workshop. Start by looking at the failure with the repairer. Follow how the fabric, ribs and moving parts depend on each other, then try the task she judges appropriate. Resist treating the first successful movement as the end of the lesson. Ask how to use and store the umbrella so that the same fault is less likely to return.",
    rootedness:
      "Ljubljana Tourism offers this public workshop with Marija Lah at the Dežnik repair shop on Trubarjeva cesta. Slovenia's national tourism organisation includes it among the city's craft experiences. The local connection is not a decorative motif applied to a souvenir. It is a continuing repair practice in a specific small business. Visiting through the booked format gives the work time and context, rather than interrupting ordinary customers with an unannounced request for a demonstration.",
    shift:
      "A trip can change your relationship with something you already own, rather than give you another thing to buy.",
    humanReturn:
      "Leave with a repaired umbrella and a reason to look for a fix before looking for a replacement.",
    responsibility:
      "The listed workshop takes one or two participants and lasts 75 to 90 minutes, with Slovenian and English listed. Reserve a confirmed slot rather than assuming normal shop opening includes teaching. Describe any personal umbrella you want to bring and accept that some damage may be unsuitable. Confirm age suitability, manual dexterity needs and physical access in advance. Handle sharp or spring-loaded parts only as directed. Ask before recording the repairer, her customers or the interior.",
    evidence:
      "The city tourism booking page specifies the location, small group size, duration and guided mending. The national tourism source corroborates the programme's place in Ljubljana's craft offer. EA has not attended or assessed whether a particular umbrella can be repaired.",
    duration: "75 to 90 minutes for the booked workshop",
    participation:
      "A one- or two-person repair workshop, not an informal shop drop-in",
    access:
      "Book Mend Your Umbrella through Ljubljana Tourism and confirm Dežnik, Trubarjeva cesta 13. Published weekly slots are subject to confirmation. The workshop does not guarantee every repair or replace an individual assessment of your item. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Ljubljana Tourism: Mend Your Umbrella",
        "https://www.visitljubljana.com/en/visitors/tours-and-trips/mend-your-umbrella",
        "Official bookable experience, exact shop, participant limit, duration and languages.",
      ],
      [
        "Slovenian Tourist Board: Ljubljana's creative experiences",
        "https://www.slovenia.info/en/stories/ljubljana-europe-s-best-city-destination-for-creativity-in-2026",
        "National destination source corroborates this specific craft workshop rather than an invented visitor activity.",
      ],
    ]),
  },
  {
    id: "wellington-zealandia-day-walk",
    slug: "walk-into-wellingtons-regenerating-valley-at-zealandia",
    title: "Walk into Wellington's regenerating valley at Zealandia",
    field: "move",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "wellington",
    place: "Wellington, Karori",
    summary:
      "Take a daytime walk at Zealandia Te Māra a Tāne and let listening slow your pace. The discovery is a regenerating ecosystem inside the city, not a guaranteed wildlife encounter.",
    kernel:
      "At the visitor centre, choose an open route that suits your mobility and the day's conditions. Walk a short distance, then stop long enough for the soundscape to become more than background. Notice where vegetation, water and human-made structures meet. If a bird appears, observe from the path without following it into cover. A shorter walk with patient pauses can reveal more than a fast circuit. Ask staff or a volunteer about something you genuinely noticed, rather than working through a list of species you feel entitled to see.",
    rootedness:
      "Zealandia is managed by a community-led charitable trust in a former Wellington water-supply valley. Its conservation purpose makes the setting more than a scenic park. Predator exclusion, regenerating habitat and public involvement are part of the story visitors encounter. The official site also treats walking routes as changeable infrastructure, with a map and track updates. This guide is for a self-directed daytime visit, not an after-dark kiwi tour or a claim that an entire valley route is always open.",
    shift:
      "A city walk can show how a landscape is being repaired, not just what it looks like today.",
    humanReturn:
      "Leave with one sound or behaviour you noticed yourself, and a more concrete idea of what habitat restoration involves.",
    responsibility:
      "Check opening, the current map and track notices directly before setting out. EA could not independently retrieve the live track-update page, so no particular upper trail is guaranteed open. Follow biosecurity checks and staff instructions. Stay on authorised paths, keep away from wildlife and do not feed or call animals closer. Carry suitable footwear, water and weather protection. Some paths are gentler than others, but general admission does not make every track accessible. Ask staff for an appropriate route. There is no promise of kiwi, tuatara or any other sighting.",
    evidence:
      "The sanctuary's current public pages establish daytime admission, conservation purpose and visitor planning resources. EA has not walked the present tracks, checked wildlife sightings or confirmed live closures. On-arrival route advice remains essential.",
    duration: "Allow two to three hours for a modest daytime walk with pauses",
    participation: "A self-directed walk within a managed ecosanctuary",
    access:
      "Use Zealandia's official site to arrange general admission at the Waiapu Road visitor entrance in Karori. A guided day or night tour is a separate product. Confirm transport, the final entry time and the route available on your date. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Zealandia: official visitor entry point",
        "https://www.visitzealandia.com/",
        "Current official opening and links to tickets, map and track notices, checked through its public indexed content.",
      ],
      [
        "Zealandia: purpose and management",
        "https://www.visitzealandia.com/about/",
        "Official context for the charitable trust and restoration of the former reservoir valley.",
      ],
      [
        "Zealandia: visitor planning",
        "https://www.visitzealandia.com/visit/",
        "Public route to admission and visitor facilities. Direct automated retrieval is restricted, not treated as successful HTTP access.",
      ],
    ]),
  },
  {
    id: "san-sebastian-igueldo-funicular",
    slug: "watch-la-concha-open-out-from-monte-igueldo",
    title: "Watch La Concha open out from Monte Igueldo",
    field: "move",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "san-sebastian",
    place: "San Sebastián",
    summary:
      "Ride the historic Monte Igueldo funicular and give the bay a second look from above. The brief climb changes how the beaches, island and city fit together.",
    kernel:
      "Approach the lower station with enough time to enjoy the journey rather than treating it as a queue before a photograph. Notice the carriage and the slope, then watch how the view changes as you rise. At the top, find a permitted viewpoint and trace the curve of the bay back towards the streets you have walked. Choose one feature you recognise and another you had missed from ground level. You can make the outing about that change in scale without buying tickets for the amusement rides.",
    rootedness:
      "Monte Igueldo combines a historic funicular with a viewpoint and amusement-park setting above San Sebastián. The operator distinguishes the funicular and grounds from individual attractions, while the Basque tourism authority identifies the site's place in the city's visitor landscape. This is a familiar landmark worth experiencing carefully, not an undiscovered secret. The contrast between everyday city geography and a leisure landscape above it gives the ride more substance than a quick ascent for a skyline image.",
    shift:
      "A place you think you have understood can rearrange itself after a short change in height.",
    humanReturn:
      "Return to the waterfront with a clearer mental map of the bay and a new detail to look for.",
    responsibility:
      "The operator states that the historic funicular is not wheelchair-adapted and involves numerous steps. Confirm suitability before making the journey. Bikes and scooters are not allowed aboard. Check the day's calendar and weather alerts, plus the last return. The funicular fare includes entry to the grounds, not rides. The operator does not sell descent-only tickets to visitors arriving by road, so do not assume you can improvise that return. Stay behind barriers and do not climb for a photograph. Visibility is weather-dependent.",
    evidence:
      "Current operator visitor information and FAQs establish access, ticket distinctions and mobility limits. The regional tourism listing corroborates the funicular and viewpoint setting. EA has not inspected the current service or verified visibility on a future day.",
    duration:
      "Allow 60 to 90 minutes including queues and time at the viewpoint",
    participation:
      "A public funicular ride and self-directed look from designated viewpoints",
    access:
      "Check Monte Igueldo's official operating calendar and purchase the appropriate funicular ticket at the lower station. Confirm payment and return arrangements. No amusement ride, guided commentary or guaranteed departure time is included by EA. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Monte Igueldo: plan your visit",
        "https://www.monteigueldo.es/organiza-tu-visita",
        "Official calendar and visitor planning, rather than a third-party timetable.",
      ],
      [
        "Monte Igueldo: access and ticket FAQs",
        "https://www.monteigueldo.es/faq",
        "Explicit wheelchair, bicycle, grounds-entry and ticket conditions.",
      ],
      [
        "Basque Government Tourism: Monte Igueldo",
        "https://www.euskadi.eus/gobierno-vasco/-/es/parques-tematicos-atracciones/parque-de-atracciones-del-monte-igueldo/",
        "Regional public tourism context for the funicular and leisure site.",
      ],
    ]),
  },
  {
    id: "stockholm-djurgarden-ferry",
    slug: "make-stockholms-islands-part-of-the-journey",
    title: "Make Stockholm's islands part of the journey",
    field: "move",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    place: "Stockholm, Slussen to Djurgården",
    summary:
      "Use the ordinary line 82 ferry between Slussen and Djurgården. A practical crossing turns the water from scenery into the thing that connects the city.",
    kernel:
      "Plan a real destination on the other side, then let the crossing become part of it. From your seat or a safe place on deck, follow the shoreline as familiar buildings separate into different islands. Watch the approach to the landing rather than spending the whole journey looking backwards. If you want to stop at Skeppsholmen, follow the operator's request-stop procedure. Otherwise, continue to Allmänna gränd and walk onwards. It is a small journey, but the city can feel more understandable after you have crossed one of its gaps.",
    rootedness:
      "Djurgårdsfärjan is SL public transport, not a sightseeing cruise with a fixed commentary. Its route connects Slussen, Skeppsholmen and Djurgården within Stockholm's daily transport network. That ordinary function is the point of the experience. The water is not an empty foreground for monuments. It shapes how people get between places. Pair the crossing with a separately planned museum visit or walk, without assuming a transport fare includes entry anywhere else.",
    shift:
      "Travelling across a city's water can explain its geography better than standing beside it.",
    humanReturn:
      "Keep a more useful picture of Stockholm's islands and a crossing you can confidently use again.",
    responsibility:
      "Check SL's current journey planner and departure point, particularly around works at Slussen. Validate the correct ticket before boarding as instructed. Tell the crew if you want to disembark at Skeppsholmen, which is not an automatic stop on every passage. Its smaller landing can have a gap, slope and wave movement. Ask staff about assistance and access. Bicycles are subject to space and cannot be assumed to fit. Remain clear of doors, respect commuters and follow crew directions in poor weather.",
    evidence:
      "SL publishes the route, request-stop procedure, ticket validation and accessibility information. EA has not ridden the current service or confirmed a particular vessel, seat, terminal layout or sailing on your date.",
    duration: "A short crossing, with time added for the wait and onward walk",
    participation:
      "An ordinary public-transport journey, not a guided harbour cruise",
    access:
      "Search line 82 in SL's official planner and travel between the currently marked Slussen and Allmänna gränd stops. Check the fare and validity for your journey. Museums, attractions and a return journey may require separate purchases. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "SL: commuter boats and line 82",
        "https://sl.se/reseplanering/var-trafik/pendelbatarna",
        "Official route, request-stop instructions and current planning route, checked in publicly indexed operator content.",
      ],
      [
        "SL: ferry accessibility",
        "https://sl.se/reseplanering/tillganglighet/sl-trafikens-tillganglighet/pendelbatarnas-tillganglighet",
        "Specific boarding, ramp and Slussen works information rather than a universal accessibility claim.",
      ],
      [
        "SL: where to validate a payment card",
        "https://sl.se/biljetter/res-med-betalkort/har-kan-du-blippa-ditt-betalkort",
        "Distinguishes line 82 terminal validation from other ferry services.",
      ],
    ]),
  },
  {
    id: "london-crossness-guided",
    slug: "look-for-civic-beauty-inside-londons-crossness",
    title: "Look for civic beauty inside London's Crossness",
    field: "learn",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, Thamesmead",
    summary:
      "Book a public guided visit to Crossness Pumping Station and find elaborate ironwork around machinery built for an unglamorous public need. The guide opens a different story of London.",
    kernel:
      "Begin with the introductory explanation, then look at the building as both a machine and a designed public statement. Follow one part of the system through the model before trying to understand the whole engine house. Notice how columns, galleries and colour give a practical structure an unexpected sense of ceremony. Ask the guide what restoration has made visible and what still needs work. On an ordinary guided-tour day, the engines are not steaming. The visit is about learning to read the place, not waiting for a performance that was never included.",
    rootedness:
      "Crossness belongs to the history of London's sewer network and the engineering response to a major urban sanitation problem. Today the trust presents that history through restored fabric, machinery and volunteer knowledge. The ornate interior is compelling because of its function, not in spite of it. This is a historic pumping-station museum visit, not entry to working sewage-treatment areas or an invitation to explore industrial land independently.",
    shift:
      "Infrastructure can be an expression of civic ambition, not merely something a city hides.",
    humanReturn:
      "Leave able to connect an impressive room with the everyday public problem it was built to address.",
    responsibility:
      "Only visit on a confirmed public opening or booked tour. The trust distinguishes guided tours from Steaming Days, and Prince Consort does not run under steam on ordinary tour days. The RANG railway remains advertised as out of action for repairs, despite older copy mentioning rides. Guided-tour days do not include the free station shuttle offered on some other openings. Plan the journey carefully. The upper engine-house level has stair-only access, with uneven historic surfaces elsewhere. Confirm your route and assistance needs before booking.",
    evidence:
      "The trust's current tour, visitor and accessibility pages establish the public format and its transport and access limits. EA has not attended a tour, inspected machinery or confirmed a future operating date for the railway.",
    duration: "About two and a half hours for the guided visit, plus travel",
    participation: "A booked public heritage tour led by a guide",
    access:
      "Choose an available guided-tour date through the Crossness Engines Trust. Use its visitor entrance instructions for Bazalgette Way. A general London transport ticket does not include admission, a taxi or a shuttle, and a museum tour does not grant wider industrial-site access. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Crossness: guided tours",
        "https://crossness.org.uk/guided-tours/",
        "Current public tour duration, selected dates and explicit absence of a free shuttle on guided-tour days.",
      ],
      [
        "Crossness: visitor information",
        "https://crossness.org.uk/visit/",
        "Distinguishes Steaming Days and ordinary tours and warns that the RANG railway is under repair.",
      ],
      [
        "Crossness: accessibility",
        "https://crossness.org.uk/accessibility/",
        "Historic surfaces and stair-only upper-level access, with a route-planning contact.",
      ],
    ]),
  },
  {
    id: "porto-cpf-camera-collection",
    slug: "follow-a-camera-through-portos-former-prison",
    title: "Follow a camera through Porto's former prison",
    field: "learn",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    place: "Porto",
    summary:
      "At the Centro Português de Fotografia, compare the tools that made photographs inside a former prison and courthouse. The setting adds a second question to every act of looking.",
    kernel:
      "Choose two cameras that seem to demand different behaviour from their users. Compare the size, controls and way each object might be held, then read the labels to check your assumptions. Move from the equipment collection to a current exhibition if it is open, keeping the tools you have just seen in mind. The building should not disappear behind the displays. Notice its scale and openings too. A photograph is a view shaped by a device and a person, while the room around you has its own history of controlling movement.",
    rootedness:
      "The national photography centre occupies Porto's former Cadeia e Tribunal da Relação. Its António Pedro Vicente collection presents photographic equipment across generations, alongside changing exhibitions and the building's history. That combination offers more than a list of famous camera brands. It invites a visitor who mostly uses a phone to consider how making an image has involved different objects, processes and physical constraints. The guide does not equate the present museum with the experiences of people once confined here.",
    shift:
      "Before judging what a photograph shows, consider the tool and position that made it possible.",
    humanReturn:
      "Return to your own camera with one new question about what it makes easy to see and what it leaves out.",
    responsibility:
      "Check current exhibition opening and closures on the official site. Individual public admission is free, while groups and guided visits have separate advance arrangements. This guide does not include research-library access or a private tour. Consult the published accessible-route information if stairs or historic surfaces matter. Follow room-specific photography rules and do not assume displayed photographs can be reproduced. Avoid treating a former prison cell as a novelty backdrop. A collection label is evidence for the object described, not proof that you may handle it.",
    evidence:
      "The centre's visitor page and collection description establish free public exhibition access and the camera collection. EA has not visited the current displays, verified every object on view or arranged archival access.",
    duration: "Allow 60 to 90 minutes, longer for a temporary exhibition",
    participation:
      "A self-directed museum visit and close comparison of displayed objects",
    access:
      "Use the official visitor information for the Largo Amor de Perdição building. Check the day's opening and accessible route. Book separately if you need a guided group visit or library consultation. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Centro Português de Fotografia: visiting",
        "https://cpf.pt/visitar/",
        "Official free-entry conditions, exhibition hours and distinction between individual visits, groups and research access.",
      ],
      [
        "CPF: António Pedro Vicente collection",
        "https://cpf.pt/nucleo-museologico-antonio-pedro-vicente/",
        "Specific camera collection and former-prison context for the proposed visit.",
      ],
    ]),
  },
  {
    id: "palermo-stanze-maiolica",
    slug: "read-palermos-floors-on-the-walls-at-stanze-al-genio",
    title: "Read Palermo's floors on the walls at Stanze al Genio",
    field: "learn",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "palermo",
    place: "Palermo, Kalsa",
    summary:
      "Join an ordinary booked visit at Stanze al Genio, where historic painted floor tiles are displayed in a house museum. Small repeating units begin to explain whole rooms.",
    kernel:
      "Rather than trying to photograph every wall, choose a tile and look for the pattern it would create with its neighbours. Ask the guide how the units relate and what is known about their date or origin. Then step back and imagine the difference between seeing that design beneath your feet and seeing it framed at eye level. The shift is simple but revealing. Give the historic rooms their own attention as well, without mistaking a private collection's present arrangement for an untouched original interior.",
    rootedness:
      "Stanze al Genio occupies part of Palazzo Torre Pirajno in Palermo's Kalsa district. The museum and municipal tourism office describe a public house-museum collection centred on painted maiolica floor tiles from southern Italy. An ordinary bookable visit makes this a legitimate way into the collection, rather than an invitation to enter a private home unannounced. The patterns connect domestic surfaces with collecting and conservation, while leaving room for differences between periods and places.",
    shift:
      "Something once walked over can become a way of understanding how people composed a room.",
    humanReturn:
      "Leave more likely to notice the pattern beneath a table or at a doorway, not just the art on a wall.",
    responsibility:
      "Book the ordinary public visit and confirm its language, duration and current calendar. The museum is upstairs and explicitly states that there is no lift or stairlift at the main entrance. Do not describe it as step-free. Bags must be left at entry, objects must not be touched and children need close supervision. The museum allows only a small number of amateur photographs per room and requires authorisation for professional photography. A visit does not grant image-reuse rights, access to private areas or participation in restoration work.",
    evidence:
      "The museum publishes public booking, visitor rules and a clear access limitation. Palermo's municipal tourism page independently identifies the collection and address. EA has not attended, verified every tile attribution or inspected the stairs.",
    duration: "Allow about one hour, confirming the booked tour's exact length",
    participation:
      "An ordinary booked house-museum visit, not a private-home invitation",
    access:
      "Use the official Organizza la tua visita page and ticket calendar for Via Giuseppe Garibaldi 11. Choose a normal public session, not an exclusive out-of-hours event. Confirm English availability if needed before paying. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Stanze al Genio: organise a visit",
        "https://stanzealgenio.com/organizza-la-tua-visita/",
        "Official public booking and rules, including object handling and photography limits.",
      ],
      [
        "Stanze al Genio: physical accessibility",
        "https://stanzealgenio.com/accessibilita/",
        "Explicit first-floor stair access without a lift or stairlift.",
      ],
      [
        "Palermo municipality: Stanze al Genio",
        "https://turismo.comune.palermo.it/palermo-welcome-luogo-dettaglio.php?det=21&id=173&tp=68",
        "Municipal corroboration of the collection, address and guided public format. Its older hours are not adopted.",
      ],
    ]),
  },
  {
    id: "new-york-wave-hill-garden",
    slug: "give-new-york-a-longer-view-at-wave-hill",
    title: "Give New York a longer view at Wave Hill",
    field: "restore",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    place: "New York City, Riverdale",
    summary:
      "Visit the public garden at Wave Hill in the Bronx, then give the Hudson view and a small patch of planting more time than your camera needs.",
    kernel:
      "Make this a garden visit with room to sit, not a race to the pergola. Start with a short loop suited to the weather and your mobility. Notice a leaf edge or the way a planting changes against the wider river view. Then choose an available seat and stay long enough to see what moves across the scene. You can look at the garden without identifying everything in it. The satisfying part is switching between something very close and something much farther away, with no need to turn either into a task.",
    rootedness:
      "Wave Hill is a public garden and cultural centre in Riverdale, overlooking the Hudson from the Bronx. Its horticultural collections and changing gardens provide the particular setting for this pause. It is not an escape outside New York, but another part of the city that a tightly packed central itinerary can miss. The operator publishes ordinary admission, seasonal visitor information and accessibility guidance, making an independent visit possible without arranging a private estate tour.",
    shift:
      "New York can be understood through a long view and a deliberately small amount of movement.",
    humanReturn:
      "Leave with a remembered combination of planting, light and river, rather than the feeling that you have completed a garden.",
    responsibility:
      "Check the day's grounds hours, last entry and any premium-event admission before travelling. Garden paths, grades and seating vary, so consult the access guidance for your route. Eat only in the designated picnic or café areas. Do not pick plants, enter beds, approach wildlife or bring a blanket for the lawn. Ordinary admission does not guarantee a quiet pergola, a free guided programme or flowers matching the photograph. This is a self-directed garden pause, not a therapeutic treatment.",
    evidence:
      "Wave Hill's current visitor pages establish public admission, grounds access and conduct rules. Its accessibility information is more useful than a blanket claim that every garden path is easy. EA has not inspected current surfaces or experienced the visit on site.",
    duration: "Allow 90 minutes to two hours, plus travel to Riverdale",
    participation: "An independent public-garden visit with time to sit",
    access:
      "Use the official Visit page for the front gate at 4900 Independence Avenue, admission and transport. Check holiday changes and return transport separately. A garden ticket does not reserve a seat at the pergola or a place in a special event. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Wave Hill: visit",
        "https://www.wavehill.org/visit",
        "Public garden admission, grounds hours, last entry and the Riverdale entrance.",
      ],
      [
        "Wave Hill: visitor guidelines",
        "https://www.wavehill.org/visitor-guidelines",
        "Specific rules for food, lawns, plants, wildlife and shared garden space.",
      ],
      [
        "Wave Hill: accessibility",
        "https://www.wavehill.org/visit/accessibility",
        "Route and access information to consult for individual mobility requirements.",
      ],
    ]),
  },
  {
    id: "mexico-city-unam-botanical-pause",
    slug: "slow-down-among-mexicos-plants-at-unam",
    title: "Slow down among Mexico's plants at UNAM",
    field: "restore",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    place: "Mexico City, Ciudad Universitaria",
    summary:
      "At UNAM's botanical garden, choose a short route through living plant collections and let a few carefully observed forms replace the urge to see everything.",
    kernel:
      "Pick one small section and stay with it. Compare how two plants hold their leaves, store space between branches or meet the light. Read a label when it helps, then look back at the living plant rather than treating the name as the end of the encounter. You can bring a notebook and make a simple outline without collecting anything. Leave enough time to retrace your route comfortably. This works as a quiet, attentive pause even if you cannot identify a single species before you arrive.",
    rootedness:
      "The botanical garden belongs to UNAM's Institute of Biology in Ciudad Universitaria. Its published collection includes more than 1,600 species native to Mexico, connecting forests, deserts and tropical environments through research and public education. The garden is a living scientific collection, not a miniature copy of every Mexican habitat. Seeing plants together can broaden your idea of the country's landscapes while keeping the difference between cultivation and a wild ecosystem clear.",
    shift:
      "A city pause can make a country's plant diversity feel specific rather than decorative.",
    humanReturn:
      "Carry away a shape you can recognise again and one question about how a plant lives.",
    responsibility:
      "Check UNAM's calendar before travelling. The garden publishes weekday and Saturday hours and closes during university holidays. Keep to permitted paths, do not handle or collect plants and follow posted visitor rules. Shade, weather, path surfaces and physical access vary. Ask the garden about a suitable route if needed. Organised groups, guided visits, filming and photographic sessions have separate conditions. Free ordinary entry is not permission to run a commercial activity or enter research areas. No health benefit or silent setting is promised.",
    evidence:
      "The Institute of Biology provides current admission, contact and transport information as well as the collection's research context. EA has not verified every label, today's path condition or the availability of an English-language guide.",
    duration:
      "Allow one to two hours, with separate time for the campus journey",
    participation: "A self-directed visit to a public scientific garden",
    access:
      "Use the botanical garden's official hours and Cómo llegar page. Entry is currently listed as free. Confirm Pumabús operating days and your return route independently, since campus transport and garden schedules are not interchangeable. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "UNAM Institute of Biology: botanical garden",
        "https://ib.unam.mx/ib/jb/",
        "Primary collection, public opening, free admission and university-holiday closure information.",
      ],
      [
        "UNAM: reaching the botanical garden",
        "https://ib.unam.mx/ib/jb/como-llegar/",
        "Official campus access and transport directions, with a warning to check bus operating times.",
      ],
    ]),
  },
  {
    id: "ljubljana-tivoli-promenade-pause",
    slug: "leave-room-for-a-slow-walk-through-ljubljanas-tivoli",
    title: "Leave room for a slow walk through Ljubljana's Tivoli",
    field: "restore",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "ljubljana",
    place: "Ljubljana, Tivoli Park",
    summary:
      "Follow Jakopič Promenade into Tivoli, pause at the outdoor displays when they are in place and let a familiar city walk become the unhurried part of your day.",
    kernel:
      "Approach the promenade without setting a destination beyond the park itself. Walk a little, stop at a display that holds your attention and look at the same surroundings again after reading it. Continue towards the mansion only as far as you want. An available bench and a view along the tree-lined axis can be enough. You do not need to add the wooded hills to make the visit count. Leave space for people exercising, commuting or spending their own ordinary afternoon here.",
    rootedness:
      "Ljubljana Tourism identifies Jakopič Promenade as part of Jože Plečnik's twentieth-century planning and describes its role as an open-air gallery. The city's wider green-space account places Tivoli within a connected landscape of park and wooded hills. This guide stays with the lower urban park, where architecture, public images and daily recreation meet. It is a different proposition from a hill hike and a useful interval between more structured city activities.",
    shift:
      "A place can become memorable through the attention you give an ordinary public walk.",
    humanReturn:
      "Leave with a little of Ljubljana's everyday pace, not a claim that you found a private corner of it.",
    responsibility:
      "Check local notices, weather and daylight. Displays change and this guide does not promise a particular exhibition, flowering season or working fountain. Keep paths clear, leave plants and wildlife alone and do not feed animals for a photograph. Ask the tourist information centre about surfaces and a suitable step-free approach if needed. The stairs near the mansion are not required for the promenade pause. Nearby museums, cafés and events have separate opening and admission arrangements.",
    evidence:
      "The destination organisation documents the promenade, its design context and outdoor-gallery use. The municipality establishes the surrounding public green landscape. EA has not checked today's displays, maintenance works or every accessible approach.",
    duration: "Allow 45 to 75 minutes, shortening the route to suit conditions",
    participation:
      "An independent park walk and optional pause at public outdoor displays",
    access:
      "Use Ljubljana Tourism's Jakopič Promenade listing to locate the approach into Tivoli. No hosted session is included. Check the day's local conditions and arrange any indoor visit separately rather than assuming the mansion is part of this route. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Ljubljana Tourism: Jakopič Promenade",
        "https://www.visitljubljana.com/en/poi/jakopic-promenade",
        "Official location and context for the promenade and changing outdoor displays.",
      ],
      [
        "City of Ljubljana: green spaces",
        "https://www.ljubljana.si/sl/ljubljana/zelena",
        "Municipal context for Tivoli and the wider connected landscape. This guide does not prescribe a hill route.",
      ],
    ]),
  },
  {
    id: "paris-sainte-chapelle-concert",
    slug: "hear-paris-through-the-glass-of-sainte-chapelle",
    title: "Hear Paris through the glass of Sainte-Chapelle",
    field: "gather",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    place: "Paris, Île de la Cité",
    summary:
      "Choose a public concert in Sainte-Chapelle and give the music the attention normally reserved for its stained glass. The building becomes a place to listen together.",
    kernel:
      "Choose the programme before the seat. A familiar piece can be a useful first step, but an unfamiliar ensemble or instrument may give you a better reason to listen. Arrive with time for the security process, settle in and put the phone away before the performance begins. Notice the start and end of a phrase, the relationship between players and the way the room holds your attention. Looking upwards is part of the encounter, but the concert should not become a soundtrack to photographing the windows.",
    rootedness:
      "Sainte-Chapelle is an established Paris monument with public concerts organised by Euromusic Productions. The producer's calendar and festival material document music presented within the historic setting. That creates a real public route into a shared listening experience, distinct from ordinary monument sightseeing. It does not turn the event into a medieval ritual or establish that the modern programme recreates the building's original soundscape.",
    shift:
      "An internationally recognisable building can become specific through an hour of shared attention.",
    humanReturn:
      "Remember a passage of music together with the room, rather than only the colour of its glass.",
    responsibility:
      "Book the exact date, programme and admission category. Concert access and daytime monument admission are different products. The current ticket listing reports a November to mid-December 2026 interruption and gives inconsistent reopening wording. Confirm the exact dated performance before booking. Restoration scaffolding is also reported inside the chapel, unlike the historical photograph. Allow time for security and check arrival, bag, age and mobility requirements with the organiser. Do not promise daylight through the windows at an evening concert. Follow the event's recording and photography rules and respect the other listeners.",
    evidence:
      "The producer publishes the concert calendar and named series. A current specialist ticket listing corroborates concert access and the late-2026 interruption. EA has not attended, tested acoustics or confirmed seats for the reader's dates.",
    duration:
      "Typically around one hour of music, plus the stated arrival and security time",
    participation:
      "A ticketed public concert audience, not an exclusive monument visit",
    access:
      "Start with Euromusic's concert calendar and select Sainte-Chapelle as the venue. Confirm the final date and terms on the linked ticket page. Do not buy a general sightseeing ticket expecting it to include a concert or a concert ticket expecting a daytime visit. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Euromusic Productions: concert calendar",
        "https://www.euromusicproductions.fr/calendrierdesconcerts",
        "Primary organiser's route to dated performances and ticket links.",
      ],
      [
        "Euromusic Productions: music and venues",
        "https://www.euromusicproductions.fr/",
        "Establishes the producer and its Sainte-Chapelle concert series.",
      ],
      [
        "Theatre in Paris: Sainte-Chapelle concerts",
        "https://www.theatreinparis.com/en/show/sainte-chapelle-concert-series",
        "Current specialist listing distinguishes concert entry and records the November to mid-December 2026 interruption.",
      ],
    ]),
  },
  {
    id: "helsinki-temppeliaukio-concert",
    slug: "listen-inside-helsinkis-rock-cut-concert-room",
    title: "Listen inside Helsinki's rock-cut concert room",
    field: "gather",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    place: "Helsinki, Töölö",
    summary:
      "Choose a dated public concert at Temppeliaukio Church and hear a familiar or unfamiliar programme within the rock-cut room beneath its copper dome.",
    kernel:
      "Look through the venue's concert listings rather than arriving during sightseeing hours and hoping to hear music. Choose a programme whose length and sound suit your evening, then follow that event's ticket instructions. Once seated, notice how a small movement among performers changes the room's focus. Let the final note finish before reaching for a phone or standing to leave. You can enjoy the experience without knowing the repertoire, provided the performers and other listeners remain more important than collecting a dramatic interior photograph.",
    rootedness:
      "Temppeliaukio is both a functioning church and a public concert venue in Helsinki. Its own calendar separates music events from worship and ordinary visiting. A current organiser announcement for November 2026 provides additional evidence of public ticketed performances. The rock walls and copper-covered dome make the setting distinctive, but the programme and audience are what turn a visit into this particular shared experience.",
    shift:
      "A striking interior can be a reason to stop looking and start listening.",
    humanReturn:
      "Leave with a remembered sound and a more personal reference point for Helsinki than an exterior landmark.",
    responsibility:
      "Check the specific event for price, duration, language, age guidance and accessibility. The church's ordinary sightseeing admission does not establish concert admission, and some listed events may be cancelled or independently ticketed. Worship is not a substitute performance for visitors who miss a concert. Respect any service in progress and follow the organiser's photography and recording rules. EA does not promise a particular acoustic effect, a view of every performer or the lighting shown in an architectural photograph.",
    evidence:
      "The venue's current listings show public concerts alongside services and explicitly mark cancellations. Kilven Kuoro's dated announcement independently establishes a forthcoming ticketed concert and its booking route. EA has not attended or verified availability across the full calendar.",
    duration:
      "Use the selected event's published duration, allowing extra arrival time",
    participation: "An audience place at a named public music event",
    access:
      "Use the church's official event calendar and open the chosen concert's own listing. Follow its organiser or ticket link. Confirm the correct entrance and any access arrangements before travelling to Lutherinkatu 3. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Temppeliaukio Church: event calendar",
        "https://temppeliaukionkirkko.fi/en/index/tapahtumat.html",
        "Primary venue route to current music events, services and event-specific information.",
      ],
      [
        "Temppeliaukio Church: current programme",
        "https://temppeliaukionkirkko.fi/",
        "Venue listings distinguish upcoming concerts and cancellations from ordinary visiting.",
      ],
      [
        "Kilven Kuoro: Stabat Mater 2026",
        "https://kilvenkuoro.fi/fi/2026/08/27/7756/",
        "Dated organiser evidence of a public concert on 13 November 2026, with its own ticket route. Not a promise of a daily event.",
      ],
    ]),
  },
  {
    id: "seville-torres-macarena-flamenco",
    slug: "listen-to-flamenco-in-sevilles-torres-macarena-pena",
    title: "Listen to flamenco in Seville's Torres Macarena peña",
    field: "gather",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "seville",
    place: "Seville, Macarena",
    summary:
      "Use the current public programme at Peña Flamenca Torres Macarena to hear a specific artist in a local association's performance room, with the attention that close listening requires.",
    kernel:
      "Read the night's lineup before deciding to go. A programme centred on singing asks something different of you from a dance-led performance, and that distinction is part of the interest. Follow the published arrival process, take a place that staff make available and let the performance establish its rhythm. Listen for an exchange between voice, guitar and movement rather than expecting every evening to contain the same elements. If you do not know the conventions for joining in, attentive listening is a good place to begin.",
    rootedness:
      "Torres Macarena describes its origins in a group of artists and flamenco enthusiasts in 1974 and its later home on Calle Torrijiano. A peña is an association with its own members, history and programme, not simply another word for a visitor show. Its current public listings offer a legitimate way to attend without claiming membership or privileged access. The visitor joins an existing listening space rather than asking it to become a private performance.",
    shift:
      "A familiar art form becomes more particular when you choose a named performer and respect the room's own rhythm.",
    humanReturn:
      "Leave able to recall one exchange or phrase, with a reason to listen further rather than declare flamenco understood.",
    responsibility:
      "Check the exact date, lineup, admission and door time directly. The current programme states that there is no online ticket sale and that admission is paid at the door. Member-reserved chairs are not available to visitors simply because they are empty. Food and drink are not permitted in the performance room. Ask about physical access, age suitability and whether tickets remain before making a special journey. Follow the artists' recording rules and never assume that applause authorises filming or reuse of a performance.",
    evidence:
      "The association publishes dated October 2026 performances, door arrangements and audience rules. Its history identifies the local association and address. EA has not attended, assessed artistic quality or secured a place for any reader.",
    duration:
      "Keep the selected evening free and confirm its expected running time",
    participation:
      "Attendance at a public programmed performance, subject to door availability",
    access:
      "Consult the official Programación page for the event at Torrijiano 29 and use the association's contact details if anything is unclear. The currently published process is door admission, not an EA reservation or third-party package. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Torres Macarena: programme",
        "https://www.xn--peaflamencatorresmacarena-9nc.com/programacion/",
        "Dated performances and explicit door-admission, reserved-chair and room-conduct rules.",
      ],
      [
        "Torres Macarena: association history",
        "https://www.xn--peaflamencatorresmacarena-9nc.com/nuestra-historia/",
        "Primary account of the peña's origins and its relationship to the present premises.",
      ],
    ]),
  },
];
export const guideBatch55: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
