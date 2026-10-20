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
export const guideBatch48: PublicExperience[] = [
  {
    id: "san-sebastian-mimo-pintxos",
    slug: "build-a-pintxo-before-ordering-the-next",
    title: "Build a pintxo before ordering the next",
    summary:
      "Begin at a San Sebastián bar and market, then make pintxos at a teaching kitchen before sitting down to lunch.",
    field: "taste",
    place: "San Sebastián, Mimo, Calle Okendo",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "san-sebastian",
    kernel:
      "Choose Mimo's Pintxos, Tapas & more class. The advertised sequence moves from a bar stop to the market and then into the kitchen. Notice how much a small serving asks of texture, temperature and proportion. Help prepare the day's dishes, then eat what the group has made. The useful souvenir is a technique you could repeat without recreating a restaurant.",
    rootedness:
      "Pintxos are part of San Sebastián's social and culinary vocabulary. This class connects their familiar counter-top form with preparation and ingredients. It is a contemporary commercial introduction, not admission to a private gastronomic society or proof that one menu represents all Basque cooking.",
    shift:
      "The next bar counter becomes a set of choices you can recognise rather than only photograph.",
    humanReturn:
      "Take one small combination home and let the ingredients available there change it.",
    responsibility:
      "Allow five hours, with substantial standing and walking. The school advertises English and Spanish and a maximum of ten participants per chef. Group classes exclude under-twelves. The FAQ requires an adult with children aged twelve to fifteen. Discuss allergies before paying. A vegetarian meal may be adapted even though preparation uses the group's ingredients. Vegan visitors should seek a suitable format directly. The menu is seasonal, not a promise of every pictured pintxo. Confirm access, market operation and the actual date. Companion lunch arrangements have conflicting arrival-time summaries, so confirm them separately.",
    evidence:
      "The current course and FAQ describe the market, hands-on cooking, meal and participant conditions. EA has not attended, tasted the food or verified the school's rankings or environmental claims. A calendar is a booking route, not a reserved place.",
    duration: "5 hours including market, cooking and lunch",
    participation: "Guided market visit and hands-on group cooking",
    access:
      "Select Pintxos, Tapas & more at Mimo's official site. Confirm your date, language and Calle Okendo meeting point. Other shorter classes and private formats are different products.",
    ...common,
    ...guideImage("san-sebastian-mimo-pintxos"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Mimo: Pintxos, Tapas & more",
          url: "https://mimo.eus/cooking-classes/pintxos",
          note: "Current five-hour class, market sequence, seasonal menu, group size and booking calendar.",
        },
        {
          title: "Mimo: FAQ",
          url: "https://mimo.eus/faq",
          note: "Dietary preparation versus adapted meals, child supervision, standing and separate companion arrangements.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "istanbul-yummy-two-continents",
    slug: "let-breakfast-take-you-across-istanbul",
    title: "Let breakfast take you across Istanbul",
    summary:
      "Follow a food-led route from the Spice Market across the Bosphorus to Kadıköy, making the crossing part of the meal.",
    field: "taste",
    place: "Istanbul, Eminönü and Kadıköy",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    kernel:
      "Book Yummy Istanbul's Taste of Two Continents tour. Begin with the European-side breakfast and market sequence, cross by public ferry with the group and continue through Asian-side food stops. Compare an ingredient seen on a counter with the way it arrives on a plate. Ask about preparation rather than treating the advertised number of tastings as a target to complete.",
    rootedness:
      "The route connects two working food neighbourhoods through an ordinary transport link. Its value is in the relationship between shops, eating and the water crossing, not in claiming that local life exists only on one side of Istanbul. This is a guided commercial food tour, not an invitation into private homes.",
    shift:
      "The Bosphorus becomes a connection between meals rather than a boundary between sightseeing lists.",
    humanReturn:
      "Keep a note of one stop you would like to revisit independently, with the vendor's actual name.",
    responsibility:
      "The advertised duration is about five and a half hours, with at most ten guests and English guiding. Confirm the meeting point and current ferry conditions. Tastings and public transport are included in the operator's format, not arranged by EA. Stops and dishes can change. The FAQ says severe nut allergies are unsuitable because of preparation-space traces. Gluten-free and vegan alternatives are incomplete, not guaranteed allergy-safe meals. Discuss dietary and mobility needs before payment. Do not photograph diners without asking or obstruct vendors. Declining a tasting is entirely reasonable.",
    evidence:
      "The current tour page and detailed FAQ establish the public route and dietary limits. EA has not joined, tasted the food or independently verified review counts, rankings or food-safety marketing. The documentary market image does not identify a guaranteed stall.",
    duration: "About 5.5 hours, including the ferry and food stops",
    participation: "Guided walking and tasting with a public ferry crossing",
    access:
      "Reserve Taste of Two Continents through Yummy Istanbul, formerly Istanbul on Food. The separate evening Kadıköy tour is not the same programme. Confirm the precise departure and finish before planning anything afterwards.",
    ...common,
    ...guideImage("istanbul-yummy-two-continents"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Yummy Istanbul: Taste of Two Continents",
          url: "https://yummyistanbul.com/taste-of-two-continents-tour/",
          note: "Current daytime route, advertised group format, inclusions and reservation link.",
        },
        {
          title: "Yummy Istanbul: FAQ",
          url: "https://yummyistanbul.com/faq/",
          note: "Detailed dietary limits, severe nut-allergy warning, transport, language and variable stops.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "new-orleans-hands-on-cooking",
    slug: "cook-a-new-orleans-meal-from-the-first-chop",
    title: "Cook a New Orleans meal from the first chop",
    summary:
      "Choose a hands-on French Quarter class and work through a Louisiana meal before sharing it at the table.",
    field: "taste",
    place: "New Orleans, French Quarter",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-orleans",
    kernel:
      "Reserve the Hands-on Class at New Orleans School of Cooking. Read the menu for your actual date, then cut, season and cook under the instructor's guidance. Pay attention to how ingredients enter the pan and how that order changes the finished dish. Afterwards, sit down with the meal. A familiar name such as étouffée becomes more useful when you can connect it with a process.",
    rootedness:
      "The school teaches Cajun and Creole-inspired food in the French Quarter. These are related but not interchangeable culinary histories, shaped by many communities and circumstances. A short class offers an introduction to selected dishes, not a complete account of Louisiana or access to a family kitchen.",
    shift:
      "Dinner becomes something you have made decisions about, not only something brought to you.",
    humanReturn:
      "Use the recipe card to revisit one sequence, and keep the class's version distinct from the whole tradition.",
    responsibility:
      "The hands-on class is three hours and for adults eighteen and over. Arrive fifteen minutes early at the store check-in. Individuals may share a cooktop with another booking. Menus vary, so do not assume gumbo or every gallery dish is included. Notify the school of allergies at least 48 hours ahead and confirm accommodation for this format, not just the demonstration class. Comfortable closed footwear and attention around heat and knives matter. Alcohol need not define the meal. Confirm mobility access and read the class-photography policy. City-pass admission does not cover this hands-on product.",
    evidence:
      "The current class page and FAQ distinguish hands-on, demonstration and shorter lab formats. City tourism corroborates the school and French Quarter location. EA has not cooked here, tasted the meal or assessed dietary safety.",
    duration: "3 hours, with check-in 15 minutes earlier",
    participation: "Supervised cooking at shared cooktops, followed by eating",
    access:
      "Book Hands-on Classes through the school's official calendar at 524 St. Louis Street. Choose the actual date's menu. No demonstration ticket, private event or EA booking is included.",
    ...common,
    ...guideImage("new-orleans-hands-on-cooking"),
    guideReview: review("public_programme", [
      {
        title: "New Orleans School of Cooking: Hands-on Classes",
        url: "https://neworleansschoolofcooking.com/classes/hands-on-classes/",
        note: "Current three-hour adult class, shared cooktops, changing menus and official booking.",
      },
      {
        title: "New Orleans School of Cooking: FAQ",
        url: "https://neworleansschoolofcooking.com/faq/",
        note: "Arrival, dietary notice, clothing and the distinction from city-pass demonstration entry.",
      },
      {
        title: "New Orleans & Company: the school",
        url: "https://www.neworleans.com/listing/the-new-orleans-school-of-cooking/3309/",
        note: "City tourism corroborates the institution and location, not an independent review of a particular class.",
      },
    ]),
  },
  {
    id: "venice-camacana-mask-decoration",
    slug: "give-a-venetian-mask-a-face-of-your-own",
    title: "Give a Venetian mask a face of your own",
    summary:
      "Choose a prepared papier-mâché mask at Ca' Macana and spend an hour learning how decoration changes its character.",
    field: "make",
    place: "Venice, Dorsoduro",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "venice",
    kernel:
      "Select the ABC decoration course rather than a mask-construction lesson. Begin with one of the studio's prepared blanks and choose a decorative approach with the instructor. Notice how the same face can appear different through a colour, edge or finish. Make a few deliberate decisions instead of adding every available ornament. The mask is wrapped to travel after the session.",
    rootedness:
      "Ca' Macana is a contemporary Venetian mask-making workshop in Dorsoduro. Its beginner class introduces decoration within that working context. Painting a prepared blank does not mean you have formed a mask from pulp, learned every Carnival tradition or acquired a professional maker's technique.",
    shift:
      "The masks in shop windows become objects whose surfaces someone had to decide upon.",
    humanReturn:
      "Remember one choice you changed while working, not only the finished object.",
    responsibility:
      "The ABC course lasts one hour, accepts one to twelve participants and lists a minimum age of four. Its current page requires cash payment on site, not card payment. Reserve places for active painters, while observers have different conditions. Language summaries vary from conversational options to limited English, so confirm the instruction you need. Ask about materials, sensitivities, supervision and step-free access. This is decoration of one prepared mask, not the separate Combo or Papier-mâché Express course. A free reservation is not a free class. Confirm the actual workshop address.",
    evidence:
      "The specific ABC page and course comparison establish the task, duration, age and payment conditions. EA has not taken the class, inspected materials or assessed claims that every technique is universally suitable.",
    duration: "1 hour for the ABC decoration class",
    participation: "Decorating one prepared papier-mâché mask with instruction",
    access:
      "Use Ca' Macana's ABC course calendar and confirm the selected session and venue. No Carnival event, costume, private historical access or EA reservation is implied.",
    ...common,
    ...guideImage("venice-camacana-mask-decoration"),
    guideReview: review("public_programme", [
      {
        title: "Ca' Macana: ABC decoration course",
        url: "https://www.camacana.com/en-UK/venice-with-kids-abc-course.php",
        note: "Specific one-hour prepared-mask class, age, active participants, observers, cash payment and language caveat.",
      },
      {
        title: "Ca' Macana: course comparison",
        url: "https://www.camacana.com/en-UK/find-your-course.php",
        note: "Separates decoration, private family course and construction formats.",
      },
    ]),
  },
  {
    id: "tokyo-shunkaen-bonsai-class",
    slug: "shape-a-young-bonsai-in-tokyo",
    title: "Shape a young bonsai in Tokyo",
    summary:
      "Arrange a beginner lesson at Shunkaen and learn to look at a small living tree before deciding how to work on it.",
    field: "make",
    place: "Tokyo, Shunkaen, Edogawa",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    kernel:
      "Book the museum's Bonsai Experience Class, not an ordinary admission ticket or an apprenticeship. After the introductory explanation, follow the instructor's task with the supplied plant and tools. Ask what a proposed change is intended to achieve before making it. A short lesson can reveal how a living composition is considered, without compressing years of cultivation into an afternoon.",
    rootedness:
      "Shunkaen combines a bonsai collection, working practice and visitor teaching in Tokyo's Edogawa ward. Bonsai has a long history and an international present. A young practice plant and a mature display tree have different roles. The collection is not a set of objects visitors are entitled to handle.",
    shift:
      "A miniature tree becomes a continuing responsibility rather than a finished decorative product.",
    humanReturn:
      "Keep the questions about care even if you leave the plant in Japan.",
    responsibility:
      "The direct class page requires booking at least four days ahead and names Tuesday, Thursday and Saturday sessions. Confirm the actual language, duration, age, tools and assistance needs before paying. Operator and city-tourism price summaries disagree, so use a confirmed current quote. Museum opening hours do not establish a lesson slot. Do not expect Kunio Kobayashi personally to teach. Ownership, shipping and import permission for a living plant are separate questions. Never assume a class includes taking a tree across a border. Tea-ceremony bundles sold elsewhere are different products.",
    evidence:
      "The direct class page describes a brief introduction followed by making. GO TOKYO's January 2026 workshop listing corroborates supplied tools and instruction. EA has not attended or verified the selected teacher, plant or remaining places.",
    duration: "Confirm the chosen introductory lesson's duration",
    participation: "Instructor-led work on a supplied beginner bonsai",
    access:
      "Follow Shunkaen's official Bonsai Experience route and confirm the Niihori, Edogawa address. Ordinary entry, long-term training and third-party premium plans are not interchangeable.",
    ...common,
    ...guideImage("tokyo-shunkaen-bonsai-class"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Shunkaen: Bonsai Experience Class",
          url: "https://kunio-kobayashi.com/en/kyoushitsu.html",
          note: "Direct class, advance notice and named sessions, distinct from the apprenticeship section.",
        },
        {
          title: "GO TOKYO: Bonsai Workshop",
          url: "https://www.gotokyo.org/en/workshop/sd032/index.html",
          note: "Official city listing updated January 2026, supplied materials and guidance. Its price differs from the direct page.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "oaxaca-tenido-mano-indigo",
    slug: "watch-oaxacas-blue-appear-in-the-air",
    title: "Watch Oaxaca's blue appear in the air",
    summary:
      "Join a two-hour indigo session in Oaxaca City and follow a piece of cotton from dye vat to changing blue.",
    field: "make",
    place: "Oaxaca City, Teñido a Mano studio",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "oaxaca-city",
    kernel:
      "Request the two-hour hands-on experience at Teñido a Mano's Oaxaca City studio. Use the included napkin or confirm a suitable cotton T-shirt to bring. Follow the host's preparation and dipping instructions, then notice the change as the fabric meets air. Let one piece teach you about colour before treating the studio's more complex textiles as easy souvenirs to reproduce.",
    rootedness:
      "Elsa Sánchez Díaz and Eric Chávez Santiago connect contemporary dye teaching with Oaxaca's textile work. Their short city experience differs from the longer workshops and the weaving demonstration in Teotitlán del Valle. Indigo dyeing and shibori are not presented as exclusive to Oaxaca or as the entirety of a community's knowledge.",
    shift:
      "Blue becomes a process you can observe rather than a colour selected from a rack.",
    humanReturn:
      "Keep the dyed piece alongside a note about what the host asked you to notice.",
    responsibility:
      "The two-hour experience runs by prior arrangement, not drop-in admission, with a minimum of two participants and a listed age of six and over. Confirm language, supervision, price, exact city address and access before committing. Register through the actual short-experience route, not the one-, two- or three-day course. Do not assume a five-hour course's deposit conditions automatically apply. Follow instructions around the vat and materials, protect clothes and discuss skin or fragrance sensitivities. Natural dye does not mean every ingredient is harmless or suitable to handle without instruction.",
    evidence:
      "The current workshop page distinguishes the two-hour city activity from multi-day dye teaching and a one-hour Teotitlán visit. The studio biography identifies the teachers' background. EA has not attended, tested dye products or independently audited environmental claims.",
    duration: "2 hours, advertised from 10:00 to 12:00",
    participation: "Guided indigo dyeing of a small cotton item",
    access:
      "Use Book Experience on Teñido a Mano's workshop page and obtain confirmation for the Oaxaca City session. A request is not a booking. No village transfer, weaving lesson or EA reservation is included.",
    ...common,
    ...guideImage("oaxaca-tenido-mano-indigo"),
    guideReview: review("public_programme", [
      {
        title: "Teñido a Mano: workshops and short experiences",
        url: "https://tenidoamano.com/workshops/",
        note: "Specific two-hour city activity, minimum participants and age, distinct from longer courses and Teotitlán visits.",
      },
      {
        title: "Teñido a Mano: the studio and teachers",
        url: "https://tenidoamano.com/about-2/",
        note: "Named teaching and textile backgrounds. Provider biography, not independent quality validation.",
      },
    ]),
  },
  {
    id: "budapest-childrens-railway",
    slug: "ride-into-budas-hills-on-a-smaller-railway",
    title: "Ride into Buda's hills on a smaller railway",
    summary:
      "Take the Children's Railway through Budapest's wooded hills and notice a public transport journey organised on an unusual scale.",
    field: "move",
    place: "Budapest, Buda Hills",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    kernel:
      "Board an ordinary passenger service on the Children's Railway and watch the hills replace the city blocks. A full journey between Széchenyihegy and Hűvösvölgy takes roughly forty to fifty minutes. The distinctive detail is at the stations and inside the carriage, where supervised young railway participants carry out some of the public-facing tasks. Travel as a passenger rather than trying to turn their work into a performance for your camera.",
    rootedness:
      "The narrow-gauge line is part of Budapest's recreational landscape and a continuing railway education programme. Its name does not mean children drive the train. Drivers and other safety-critical staff are adults, and the young participants work within adult supervision. The journey makes a familiar transport system newly noticeable without requiring an adventurous hike.",
    shift:
      "A ticket inspection and a station departure become things worth paying attention to again.",
    humanReturn:
      "Let one ordinary railway task explain why a small line can remain interesting after the novelty of its name.",
    responsibility:
      "Use the timetable for your actual date. School-term Mondays can have no service, and steam trains run only on selected dates. Current Szépjuhászné station works can alter the timetable and ticket arrangements. Carry Hungarian cash and confirm the accepted payment method rather than assuming every station accepts cards. Ask about carriage steps and mobility access. Do not enter staff areas or photograph individual children without permission. Elizabeth Lookout is currently closed for renovation, so do not build the outing around reaching it.",
    evidence:
      "The railway's current English visitor page, Hungarian timetable and station-works notice establish the passenger journey and changing conditions. The training page identifies the adult safety staff. EA has not ridden the service or assessed supervision. The photograph records an earlier train, not the locomotive assigned to today's departure.",
    duration: "About 40 to 50 minutes one way, plus getting to the station",
    participation:
      "Ordinary passenger travel, with optional permitted walks at your own pace",
    access:
      "Choose a dated public departure on the railway's official timetable. Arrange the separate journey to and from its hill stations. A ticket is not a staff-area visit, a steam guarantee or a guided children's activity.",
    ...common,
    ...guideImage("budapest-childrens-railway"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Children's Railway: English visitor information",
          url: "https://gyermekvasut.hu/en/home/",
          note: "Route, passenger journey, station access and service guidance.",
        },
        {
          title: "Children's Railway: current timetable",
          url: "https://gyermekvasut.hu/menetrend/",
          note: "Date-specific services take precedence over a generic weekly pattern.",
        },
        {
          title: "Children's Railway: Szépjuhászné works",
          url: "https://gyermekvasut.hu/2026/09/szepjuhaszne-allomas-felujitasa-miatt-modosul-a-menetrend/",
          note: "Current station works and altered operating arrangements.",
        },
        {
          title: "Children's Railway: training and adult supervision",
          url: "https://gyermekvasut.hu/tanfolyam/",
          note: "Distinguishes young participants from adult drivers and safety staff.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "san-francisco-cable-car",
    slug: "ride-san-francisco-at-the-grip-operators-pace",
    title: "Ride San Francisco at the grip operator's pace",
    summary:
      "Take a working cable car through San Francisco and follow the sounds and decisions that a postcard cannot show.",
    field: "move",
    place: "San Francisco, cable car lines",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "san-francisco",
    kernel:
      "Choose one of the California, Powell-Hyde or Powell-Mason lines and ride it as public transport. Listen for the bell before a junction and watch the grip operator manage the car's progress from the passenger area. The street changes gradient while the car remains connected to a moving cable below it. A familiar city image becomes a physical journey with stops, queues and other people trying to get somewhere.",
    rootedness:
      "San Francisco's surviving cable car system is neither a streetcar on the F line nor an amusement ride detached from its streets. SFMTA's history explains the grip-and-cable mechanism. Its present service still has a timetable, operating constraints and fares that matter more to a visitor than a claim to have found a secret route.",
    shift:
      "The vehicle you expected to photograph becomes a way of feeling how the city is built.",
    humanReturn:
      "Remember a change in slope, sound or street width rather than making an exposed riding position the measure of the experience.",
    responsibility:
      "Check current SFMTA service alerts and choose a valid fare before boarding. A single-ride ticket is one way and does not include a transfer or return journey. Prepayment is required at specified busy terminals, so do not rely on buying from the conductor everywhere. Cable cars are not wheelchair accessible. Bicycles, including folding bicycles, are not carried. Follow the crew's boarding and handhold instructions, wait until the car stops and never lean into traffic or touch operating equipment. Seats and short queues are not guaranteed.",
    evidence:
      "SFMTA's live visitor and fare pages establish the three lines, ticket boundaries and access restrictions. Its history supplies the mechanical context. EA has not checked a particular departure or evaluated crowding. The licensed photograph documents an earlier cable car, not today's vehicle or service conditions.",
    duration: "One line journey, with additional time for queues",
    participation:
      "Public passenger travel, not operating the car or a private sightseeing tour",
    access:
      "Use SFMTA's official line information, fare options and current alerts. Choose the actual boarding point and direction. The cable car museum, F-line streetcars and any guided tour require separate planning.",
    ...common,
    ...guideImage("san-francisco-cable-car"),
    guideReview: review("public_programme", [
      {
        title: "SFMTA: cable cars",
        url: "https://www.sfmta.com/getting-around/muni/cable-cars",
        note: "Current lines, passenger instructions, accessibility and service-alert links.",
      },
      {
        title: "SFMTA: cable car single ride",
        url: "https://www.sfmta.com/fares/cable-car-single-ride",
        note: "One-way fare, prepayment rules and the absence of a transfer entitlement.",
      },
      {
        title: "SFMTA: cable car history",
        url: "https://www.sfmta.com/getting-around/muni/cable-cars/cable-car-history",
        note: "Institutional explanation of the cable and grip mechanism.",
      },
    ]),
  },
  {
    id: "montreal-lachine-cycle",
    slug: "read-montreal-between-the-canal-locks",
    title: "Read Montréal between the canal locks",
    summary:
      "Cycle a manageable stretch of the Lachine Canal and let locks, bridges and old industrial buildings give the city another rhythm.",
    field: "move",
    place: "Montréal, Lachine Canal",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    kernel:
      "Choose a short out-and-back on the designated canal cycling path rather than treating its full 13.5 kilometres as an obligation. A start near Atwater gives you a recognisable place to orient yourself. Pause where a lock or bridge makes the water's level and the city's working history visible. The useful discovery is how much changes while you stay beside one continuous line of water.",
    rootedness:
      "Parks Canada manages the Lachine Canal as a national historic site as well as a public recreation corridor. Its cycling path opened in 1977. Old industrial buildings and navigation structures remain part of the setting, but a bicycle ride does not include entry to them or a boat passage through a lock.",
    shift:
      "Industrial history becomes a landscape you move through, not a paragraph encountered before the ride.",
    humanReturn:
      "Keep one crossing or waterside detail in mind and leave yourself enough energy to explore the neighbourhood beyond it.",
    responsibility:
      "The path is maintained from 15 April to 15 November, not as a guaranteed winter cycling route. Choose dry, suitable conditions and turn back before cold, darkness or fatigue makes the return uncomfortable. Current Des Seigneurs bridge works run from October 2026 into May 2027, with signed pedestrian and cycling detours that can require dismounting. CN-Wellington works can narrow the path. Obey signs, slow around other users and wear suitable safety equipment. Arrange a bicycle separately. Do not assume waterside toilets or lock services operate outside their posted season.",
    evidence:
      "Parks Canada's route page specifies the 13.5-kilometre path and maintenance season. Its works notice, updated 13 October, identifies the current bridge diversions. EA has not ridden or inspected the surface. The photograph is historical setting, not proof that the pictured stretch is unobstructed today.",
    duration: "Choose a short out-and-back to suit conditions and ability",
    participation: "Self-directed cycling on the designated shared corridor",
    access:
      "Read Parks Canada's current works and safety notices, then choose a manageable section and a return point. Bike rental, equipment and any guided activity are separate. This guide is not a clearance to cycle after the maintained season.",
    ...common,
    ...guideImage("montreal-lachine-cycle"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Parks Canada: Lachine Canal trails",
          url: "https://www.parcs.canada.ca/lhn-nhs/qc/canallachine/activ/sentiers-trails",
          note: "Path length, cycling use and 15 April to 15 November maintenance.",
        },
        {
          title: "Parks Canada: current canal works",
          url: "https://parcs.canada.ca/lhn-nhs/qc/canallachine/visit/infrastructure/travaux-works",
          note: "October 2026 Des Seigneurs bridge closure, signed alternatives and CN-Wellington restrictions.",
        },
        {
          title: "Parks Canada: visitor safety",
          url: "https://parcs.canada.ca/lhn-nhs/qc/canallachine/securite-safety",
          note: "Official preparation and safe use of the canal corridor.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "amsterdam-attic-church",
    slug: "find-a-church-inside-an-amsterdam-house",
    title: "Find a church inside an Amsterdam house",
    summary:
      "Walk through a seventeenth-century canal house and discover the remarkably different room hidden under its roof.",
    field: "learn",
    place: "Amsterdam, Oudezijds Voorburgwal",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    kernel:
      "Enter Our Lord in the Attic Museum through its visitor building and follow the route into the historic canal house. Domestic rooms and narrow stairs establish a scale your body recognises. Then the attic opens into a Catholic church, with galleries and an altar fitted inside the house. Give the transition time rather than making the whole visit a quick hunt for one surprising photograph.",
    rootedness:
      "This is a museum of a house, a church and the circumstances that brought them together in seventeenth-century Amsterdam. The museum's account helps distinguish a concealed place of worship from a modern theatrical reconstruction. It is a particular building with a history, not a claim that every Amsterdam attic contains a secret.",
    shift:
      "The familiar canal-house frontage becomes less easy to read from the street alone.",
    humanReturn:
      "Look again at the depth and height behind an ordinary façade when you return outside.",
    responsibility:
      "Book a museum visit, not a religious service. The museum closes from 11:30 on Wednesday 21 October 2026, so do not plan a normal afternoon visit that day. Check later dates against the current hours page. The historic route has many narrow stairs and is not step-free. A lift in the entrance building does not solve access to the attic. The advertised CoVisit alternative is temporarily unavailable for maintenance. Large bags and backpacks are restricted. Do not touch collection objects or use flash, and respect any worship or visitor notices.",
    evidence:
      "The museum's current visit, monument, hours and accessibility pages establish the building, route and dated closure. EA has not visited or assessed the stairs. The licensed interior photograph records an earlier arrangement and light, not permission to photograph freely or a guarantee of empty galleries.",
    duration:
      "Allow about an hour as a planning estimate, with time for stairs",
    participation:
      "Independent museum viewing with the museum's interpretation",
    access:
      "Reserve through the official museum page and check the selected date's hours. Ask the museum about any access needs before buying. This is not a private canal-house invitation, a rooftop visit or a ticket to a service.",
    ...common,
    ...guideImage("amsterdam-attic-church"),
    guideReview: review("public_admission", [
      {
        title: "Our Lord in the Attic: museum visit",
        url: "https://opsolder.nl/en/museum-visit/",
        note: "Public museum admission and visitor route.",
      },
      {
        title: "Our Lord in the Attic: the monument",
        url: "https://opsolder.nl/en/the-monument/",
        note: "Historic house and attic-church context.",
      },
      {
        title: "Our Lord in the Attic: current opening hours",
        url: "https://opsolder.nl/en/opening-hours/",
        note: "Includes the early closure on 21 October 2026.",
      },
      {
        title: "Our Lord in the Attic: accessibility",
        url: "https://opsolder.nl/en/accessibility/",
        note: "Narrow stairs, entrance-building lift and temporarily unavailable CoVisit.",
      },
    ]),
  },
  {
    id: "cape-town-zeitz-guided",
    slug: "follow-a-museum-guide-beyond-cape-towns-silo-atrium",
    title: "Follow a museum guide beyond Cape Town's silo atrium",
    summary:
      "Begin with Zeitz MOCAA's extraordinary converted grain silo, then give the contemporary art the time that the building attracts.",
    field: "learn",
    place: "Cape Town, V&A Waterfront",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    kernel:
      "Choose a weekday visit that can include Zeitz MOCAA's public guided introduction. Look up through the cut concrete forms of the atrium, then follow the guide into the museum's current exhibition context. Ask about one work's materials or point of view rather than trying to see an entire continent through a single gallery. The architecture can draw you in without becoming the only thing you remember.",
    rootedness:
      "Zeitz MOCAA is a museum of contemporary art from Africa and its diaspora in a former Waterfront grain silo. The institution's exhibitions change. A public tour offers a starting conversation about what is on view, not a complete survey of African art or proof that the guide speaks for every artist.",
    shift:
      "An architectural landmark becomes an entrance to other people's ways of looking.",
    humanReturn:
      "Leave with one artist or question to follow, not only a picture of the atrium.",
    responsibility:
      "The current visit page lists a one-hour public tour at 12:30, Monday to Friday, included with admission and booked on arrival subject to capacity. Do not rely on older FAQ times or promise an architecture-only tour. Confirm the day's programme, language, access arrangements and gallery availability before travel. Museum opening does not guarantee a place on the tour. Wednesday free-entry provisions have residency or citizenship and identification conditions, not a blanket exemption for every visitor. Follow current photography rules and do not touch artworks.",
    evidence:
      "The current museum visit page supplies the weekday tour time and admission conditions. Its exhibition site establishes the contemporary-art remit. EA has not joined a tour, assessed the collection on site or confirmed a place. The licensed photograph depicts the silo atrium, not a promised exhibition or tour route.",
    duration: "One-hour public tour, with extra time for the museum",
    participation:
      "Museum viewing and a public guided introduction, subject to capacity",
    access:
      "Check the official visit page, buy the appropriate museum admission and ask about the public tour on arrival. Private tours, architecture-specific programmes and accommodation in the silo complex are separate.",
    ...common,
    ...guideImage("cape-town-zeitz-guided"),
    guideReview: review("public_programme", [
      {
        title: "Zeitz MOCAA: plan your visit",
        url: "https://zeitzmocaa.museum/plan-your-visit/",
        note: "Current Monday to Friday 12:30 public tour, arrival booking and admission conditions.",
      },
      {
        title: "Zeitz MOCAA: museum and exhibitions",
        url: "https://zeitzmocaa.museum/",
        note: "Institutional remit and changing exhibition context. Older schedules are not used as current availability.",
      },
    ]),
  },
  {
    id: "mexico-city-anahuacalli",
    slug: "read-mexico-citys-volcanic-stone-at-anahuacalli",
    title: "Read Mexico City's volcanic stone at Anahuacalli",
    summary:
      "Visit Anahuacalli and follow the conversation between volcanic stone, a twentieth-century building and Diego Rivera's collection.",
    field: "learn",
    place: "Mexico City, San Pablo Tepetlapa",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    kernel:
      "Walk toward Anahuacalli from its forecourt and notice how the dark volcanic stone changes the museum's silhouette. Inside, look at the relationship between a displayed object, its lighting and the room around it. Let the museum's labels supply names and context. The building asks for more than a façade photograph, but it need not become an attempt to summarise every culture represented in the collection.",
    rootedness:
      "Anahuacalli was created to house Diego Rivera's collection of pre-Hispanic objects. Its architecture belongs to a modern museum project in Mexico City's volcanic landscape. It is not an ancient temple preserved intact, and the collector's arrangement is one framing of the objects rather than an exhaustive account of Mexico's Indigenous histories.",
    shift: "Stone becomes an active part of how a collection is encountered.",
    humanReturn:
      "Ask how a museum building changes what you notice about an object before deciding what the object means.",
    responsibility:
      "The museum currently opens Tuesday to Sunday, 11:00 to 17:30, with Mondays closed. Use the current museum page rather than older registry hours or prices. San Pablo Tepetlapa is a separate journey from central Coyoacán and Casa Azul. Confirm step-free routes and any restricted rooms directly. Indoor photography has a separate permit requirement. External tour guides are not admitted as guides, so an independently booked city tour is not automatically authorised inside. Do not touch objects or treat the surrounding landscape as unrestricted climbing space.",
    evidence:
      "Anahuacalli's current visitor and history pages establish admission, photography and collection context. Mexico's official cultural registry provides institutional corroboration but contains older practical details. EA has not visited, checked the collection in person or arranged an authorised tour. The licensed exterior is not proof of current exhibits.",
    duration: "Allow 1 to 2 hours as an independent visit estimate",
    participation:
      "Independent museum viewing, not handling objects or joining an archaeological excavation",
    access:
      "Use the museum's official visitor page and the actual Museo 150 address in San Pablo Tepetlapa. Book an authorised museum tour separately if wanted. A Casa Azul ticket or third-party guide does not automatically include this visit.",
    ...common,
    ...guideImage("mexico-city-anahuacalli"),
    guideReview: review("public_admission", [
      {
        title: "Anahuacalli: plan your visit",
        url: "https://museoanahuacalli.org.mx/acerca/planea-tu-visita/",
        note: "Current hours, admission, photo permit and guide restrictions.",
      },
      {
        title: "Anahuacalli: history",
        url: "https://museoanahuacalli.org.mx/acerca/historia/",
        note: "Rivera's collection and the modern museum project.",
      },
      {
        title: "Mexico's Cultural Information System: Anahuacalli",
        url: "https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=442",
        note: "Official institutional corroboration only. Older hours and prices are not used as current instructions.",
      },
    ]),
  },
  {
    id: "helsinki-oodi-reading",
    slug: "read-a-little-of-helsinki-from-oodis-top-floor",
    title: "Read a little of Helsinki from Oodi's top floor",
    summary:
      "Step into Helsinki's central library, browse its open shelves and give a public reading room part of your day.",
    field: "restore",
    place: "Helsinki, Töölönlahti",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    kernel:
      "Go up to Oodi's third-floor Book Heaven and choose something to read on site. It might be a few pages in a language you know or a picture-led book that makes a different city detail visible. Look between the shelves and out toward the surrounding civic buildings. You do not need to turn the pause into a building tour, a café purchase or a productive hour.",
    rootedness:
      "Oodi is a working public library and civic space, not a hotel lounge with an architectural admission ticket. Its tourist guidance welcomes visitors to all three floors and distinguishes free browsing from borrowing and bookable equipment. The same room serves people for whom Helsinki is home.",
    shift:
      "A city visit gains an ordinary place in which you do not have to keep buying or moving.",
    humanReturn:
      "Take away a title, an image or simply the idea that public reading can belong in a day away.",
    responsibility:
      "Check current library hours and leave room for events or busy periods. No library card is needed to browse and read on site, but borrowing, studios and Urban Workshop equipment have separate registration or booking conditions. A free building visit does not include every service. Keep passageways and other readers' privacy clear. Do not stage photography around children or treat occupied seats as a backdrop. An available quiet seat, an open balcony and a particular view are not guaranteed. Food and café purchases follow their own rules.",
    evidence:
      "Oodi's official tourist and contact pages establish public access, floor uses and service boundaries. EA has not inspected crowding or the current book selection. The photograph documents the library's architecture, not a reserved reading place or an EA visit.",
    duration: "A short reading pause or longer browse, within opening hours",
    participation:
      "Independent public-library browsing and reading, without borrowing",
    access:
      "Enter Helsinki Central Library Oodi at Töölönlahdenkatu 4 during current public hours. No paid tour or library card is required for this on-site reading visit. Reserve equipment or arrange borrowing separately if eligible.",
    ...common,
    ...guideImage("helsinki-oodi-reading"),
    guideReview: review("public_observation", [
      {
        title: "Oodi: services for tourists",
        url: "https://oodihelsinki.fi/en/oodis-services-for-tourists/",
        note: "Free public access, third-floor reading and the distinction between browsing and bookable services.",
      },
      {
        title: "Oodi: contact and visiting information",
        url: "https://oodihelsinki.fi/en/contact-information/",
        note: "Current address, hours and contact routes for access questions.",
      },
    ]),
  },
  {
    id: "rome-botanical-pause",
    slug: "give-trastevere-a-garden-paced-afternoon",
    title: "Give Trastevere a garden-paced afternoon",
    summary:
      "Enter Sapienza's botanical garden near Trastevere and let planting, paths and shade set a slower Roman hour.",
    field: "restore",
    place: "Rome, Trastevere",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "rome",
    kernel:
      "Use the main entrance to Rome's botanical garden and choose a modest loop rather than trying to cover every collection. Pause where the planting changes, read a label and let the route's slope decide how far you continue. The garden sits close enough to familiar Roman streets to feel like a change of pace, not an escape to another destination.",
    rootedness:
      "The Orto Botanico is a university botanical garden on the lower Janiculum slopes, with living collections and a public visiting role. Its plants are more than scenery, but you do not need expert identification to look carefully. This is a contemporary managed garden, not a private villa invitation or unrestricted access to university research spaces.",
    shift:
      "A Roman afternoon can have detail without another sequence of major monuments.",
    humanReturn:
      "Choose one leaf, trunk or planting relationship to recognise when you step back into the city.",
    responsibility:
      "Use Largo Cristina di Svezia 23A for the main visitor entrance. Check the day's hours and weather notices, since seasonal last entry matters. Bring a payment card and verify current ticket conditions. The Janiculum-side entrance has different online-ticket rules. Sloping paths can make a complete circuit unsuitable for some visitors, so ask about a manageable route. Greenhouses, the butterfly attraction, events and organised tours can have separate access conditions. Stay on permitted paths, do not pick plants and never infer that an old dated event is happening today.",
    evidence:
      "Sapienza's current garden homepage and FAQ establish the entrances, public visit and practical limits. Earlier event notices and conflicting older payment wording are not treated as today's promises. EA has not walked the paths or confirmed which enclosed collections are open. The photograph depicts the garden rather than guaranteed current flowers or weather.",
    duration: "Allow about an hour for a short independent loop",
    participation:
      "Independent garden walking and pausing, not a scheduled guided tour",
    access:
      "Check the official garden page and buy the appropriate ordinary visit ticket. Confirm the main entrance, last entry and route access. A standard visit does not automatically include a special exhibition, guided group or butterfly-house admission. No EA booking is implied.",
    ...common,
    ...guideImage("rome-botanical-pause"),
    guideReview: review("public_admission", [
      {
        title: "Sapienza: Orto Botanico di Roma",
        url: "https://ortobotanico.web.uniroma1.it/index.php/it",
        note: "Current visitor entrance, hours, payment guidance and dated notices.",
      },
      {
        title: "Sapienza botanical garden: FAQ",
        url: "https://ortobotanico.web.uniroma1.it/index.php/it/faq-0",
        note: "Tickets, entrances, organised tours and practical visitor conditions.",
      },
    ]),
  },
  {
    id: "brooklyn-japanese-garden",
    slug: "let-brooklyn-slow-around-a-garden-pond",
    title: "Let Brooklyn slow around a garden pond",
    summary:
      "Follow the permitted paths of Brooklyn Botanic Garden's Japanese Hill-and-Pond Garden and watch a small landscape change as you move.",
    field: "restore",
    place: "New York City, Brooklyn",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    kernel:
      "Enter Brooklyn Botanic Garden and give the Japanese Hill-and-Pond Garden a slow circuit. Watch how a bridge, shore or planted edge changes its relationship to the pond from one permitted viewpoint to the next. Leave space for other people to pause. The experience is less about securing a single empty frame than noticing how a designed landscape unfolds at walking pace.",
    rootedness:
      "This is a deliberately composed Japanese-inspired garden inside a New York botanic institution. It can offer a useful introduction to landscape design without pretending to be a Japanese village, a private ceremony or a seasonless cherry-blossom scene. The surrounding city remains part of why the pause matters.",
    shift: "A small change of viewpoint becomes enough reason to stop again.",
    humanReturn:
      "Try carrying that slower attention into an ordinary neighbourhood park rather than expecting every garden to resemble this one.",
    responsibility:
      "Reserve the correct dated garden admission. On 24 October 2026, the Fall Harvest Festival requires its special ticket and ordinary admission is not valid. The garden closes Mondays and has shorter November hours, so confirm last entry. The Native Flora Garden is currently closed for construction. The FAQ also lists the 150 Eastern Parkway entrance as closed, so use the current visitor map. Children under fourteen require adult supervision. Stay on paths, do not feed wildlife or pick plants, and follow the Japanese Garden's restrictions on tripods and easels. Portrait or commercial photography requires prior arrangement.",
    evidence:
      "BBG's garden page, current hours and visitor FAQ establish the landscape, seasonal access and special-ticket exception. EA has not visited or checked the present planting. The photograph depicts the actual garden in a different season, not current blossom, an empty path or a promised ceremony.",
    duration: "Allow a slow short loop within a longer garden visit",
    participation:
      "Independent walking and observation on permitted garden paths",
    access:
      "Use BBG's current dated-ticket page and entrance map. Choose an ordinary admission date unless you intend to attend the separately ticketed 24 October event. A ticket does not authorise a photo shoot, shrine access or entry to closed collections. No EA admission booking is implied.",
    ...common,
    ...guideImage("brooklyn-japanese-garden"),
    guideReview: review("public_admission", [
      {
        title: "BBG: Japanese Hill-and-Pond Garden",
        url: "https://www.bbg.org/collections/gardens/japanese_garden",
        note: "Institutional description of the actual landscape and its design.",
      },
      {
        title: "BBG: current hours and admission",
        url: "https://www.bbg.org/visit/hours",
        note: "Seasonal opening and the 24 October special-event ticket condition.",
      },
      {
        title: "BBG: visitor FAQ",
        url: "https://www.bbg.org/visit/faq",
        note: "Entrance closure, supervision, garden conduct and photography restrictions.",
      },
    ]),
  },
  {
    id: "edinburgh-storytelling-festival",
    slug: "let-edinburgh-tell-you-a-story-out-loud",
    title: "Let Edinburgh tell you a story out loud",
    summary:
      "Choose a live story at Edinburgh's October storytelling festival and let a voice, rather than a landmark, hold your attention.",
    field: "gather",
    place: "Edinburgh, Scottish Storytelling Centre",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    kernel:
      "Choose a suitable story performance at the Scottish Storytelling Centre during the 2026 Scottish International Storytelling Festival. Sit down without needing to know the ending or the teller in advance. Notice how a pause, repeated phrase or change of voice asks the room to imagine something together. The participation can be simply listening well, not volunteering for the stage.",
    rootedness:
      "The Centre gives oral storytelling a public home on Edinburgh's High Street. The festival runs from 21 to 31 October 2026 under the theme Bird and Beast. Its programme brings different tellers and traditions together. A ticket to one performance is not access to every event or evidence that one tale represents all of Scotland.",
    shift:
      "An old story can feel less like something preserved when a living person has to tell it to a room.",
    humanReturn:
      "Remember the detail your own imagination supplied, and find out who told the story rather than treating its voice as anonymous.",
    responsibility:
      "Select the actual performance by date, language, age guidance and content. The Centre currently advertises Mossycoat for 23 October at 17:00 with BSL interpretation, but this does not mean every festival event is signed or suitable for children. Confirm the chosen ticket's duration and remaining availability. The building offers lift access and hearing-loop provision, with individual needs best checked before booking. Arrive before the start and follow photography and recording instructions. The adjoining John Knox House is a separate visit.",
    evidence:
      "The festival's 2026 announcement and official ticket programme establish the dates and public performances. The Centre supplies venue and accessibility information. EA has not attended, reviewed the tellers or secured tickets. The photograph is an earlier Centre setting, not this year's performance or a promised participant.",
    duration: "One booked performance, with duration set by the event listing",
    participation:
      "Public audience listening, not a storytelling lesson or guaranteed audience participation",
    access:
      "Choose a current Centre performance through the festival's official ticket link. Read the event-specific language, content and access notes before buying. The 2026 festival ends on 31 October, and this guide does not imply a later run.",
    ...common,
    ...guideImage("edinburgh-storytelling-festival"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "SISF: 2026 tickets and festival announcement",
          url: "https://www.sisf.org.uk/news-post/newsid/27174-scottish-international-storytelling-festival-2026-tickets-on-sale/",
          note: "21 to 31 October 2026 dates and Bird and Beast theme.",
        },
        {
          title: "Scottish Storytelling Centre: current programme",
          url: "https://www.scottishstorytellingcentre.com/",
          note: "Current event links including Mossycoat on 23 October.",
        },
        {
          title: "SISF: official ticket programme",
          url: "https://sisf.online.red61.co.uk/",
          note: "Event-specific booking, age, language and time information. No ticket reserved.",
        },
        {
          title: "Scottish Storytelling Centre: accessibility",
          url: "https://www.scottishstorytellingcentre.com/about-us/accessibility/",
          note: "Lift, hearing support and advance contact for individual arrangements.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "mexico-city-ballet-folklorico",
    slug: "watch-mexicos-regional-dances-share-one-stage",
    title: "Watch Mexico's regional dances share one stage",
    summary:
      "See Ballet Folklórico de México at Bellas Artes and notice how regional dance becomes a carefully made theatre performance.",
    field: "gather",
    place: "Mexico City, Palacio de Bellas Artes",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    kernel:
      "Choose an October performance by Ballet Folklórico de México de Amalia Hernández in the main hall of Palacio de Bellas Artes. Watch a change of footwork or group formation as closely as the costumes. The stage makes differences in rhythm and movement visible at a scale a street photograph cannot offer. Listen to how the audience responds without assuming you should know every reference.",
    rootedness:
      "Amalia Hernández founded the company in 1952. Its work adapts regional dances, music and dress through theatrical choreography. That creative interpretation is the point of this visit, not a claim that a stage show is an unchanged community ritual or an exhaustive representation of Mexico.",
    shift:
      "A colourful image of dance gains structure, labour and a particular artistic history.",
    humanReturn:
      "Follow the name of one dance, region or musical form afterwards rather than leaving the whole performance labelled simply as Mexican.",
    responsibility:
      "Book the correct Bellas Artes performance, date and seat. Current institutional and ticket listings confirm performances on 21, 25 and 28 October, with different start times. A separate Chapultepec Day of the Dead product is not this venue or ticket. Check the current start, entry time, age policy, access seating and photography rules before buying. Programmes can change, and a specific dance or cast is not guaranteed. Audience admission does not include backstage access or joining the dancers.",
    evidence:
      "INBAL's current October programme and the dated official ticket listing agree on forthcoming Bellas Artes performances. The company's own older May listing is not used as October availability. EA has not attended, evaluated the choreography or reserved seats. The licensed performance photograph is historical, not the current cast or programme.",
    duration:
      "One seated performance, with the current running time confirmed when booking",
    participation:
      "Public audience viewing and listening, not a dance lesson or community ritual",
    access:
      "Use the current INBAL programme and its official ticket route for Palacio de Bellas Artes, Sala Principal. Verify the venue and date on the ticket. This October guide expires after the checked programme, rather than promising an unverified November schedule.",
    ...common,
    ...guideImage("mexico-city-ballet-folklorico"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "INBAL: Ballet Folklórico October programme",
          url: "https://inba.gob.mx/actividad/18495/ballet-folklorico-de-mexico-de-amalia-hernandez",
          note: "Current Bellas Artes dates including 21, 25 and 28 October, with programme-change notice.",
        },
        {
          title: "Ticketmaster México: dated October performances",
          url: "https://www.ticketmaster.com.mx/ballet-folklorico-de-mexico-de-amalia-boletos/artist/803500?endDate=2026-10-31&startDate=2026-10-01",
          note: "Independent ticketing corroboration of the institution's dates and separate venues. No purchase or seat hold.",
        },
        {
          title: "Ballet Folklórico de México: official company",
          url: "https://balletfolkloricodemexico.com.mx/",
          note: "Company context only. Its older presentation page is not evidence of a current performance.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "melbourne-jazzlab-set",
    slug: "let-a-brunswick-jazz-room-change-the-evening",
    title: "Let a Brunswick jazz room change the evening",
    summary:
      "Book a set at Melbourne's JazzLab and give a small live-music room, rather than another bar stop, the centre of an evening.",
    field: "gather",
    place: "Melbourne, Brunswick",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    kernel:
      "Choose an actual concert at The JazzLab in Brunswick and arrive in time to settle before the music begins. Watch how a phrase moves between players, or how a drummer changes the space around a solo. You do not need a specialist vocabulary to listen closely. The useful commitment is to the booked set, not a promise that every evening has the same style or atmosphere.",
    rootedness:
      "The JazzLab is the Brunswick home of the Bennetts Lane jazz-club lineage at 27 Leslie Street. Its public programme and Melbourne Jazz Co-operative listings connect the room to a continuing local music scene. That history does not put the present venue back at the former central-city Bennetts Lane address.",
    shift:
      "A city evening becomes something you followed rather than somewhere you briefly checked in.",
    humanReturn:
      "Keep a musician's name and follow their work after the room has emptied.",
    responsibility:
      "Choose the dated programme, not a generic promise of nightly jazz. October festival appearances and later MJC concerts have different artists and ticket conditions. Confirm the actual door time, start, seating, age policy and late-entry rules. The main entrance has a step. An alternative ramp entrance needs advance notice, and tiered seating is not mobility accessible. Ask about a suitable place before booking. Respect the performance, keep conversation and phone use low, and do not assume a public concert is an invitation to join the band.",
    evidence:
      "The venue's current calendar and MJC listings establish public concerts extending into November. The official accessibility page identifies the step, ramp arrangements and tiered seating limits. EA has not attended, reviewed the sound or checked a particular show's remaining seats. The photograph depicts an earlier venue setting, not the band booked for a future date.",
    duration: "One booked concert or set, according to the selected programme",
    participation: "Audience listening at a ticketed live-music venue",
    access:
      "Book the actual show through The JazzLab's official calendar and verify 27 Leslie Street, Brunswick. Contact the venue before booking if step-free entry is needed. No combined dinner, guaranteed seat type or transport is included.",
    ...common,
    ...guideImage("melbourne-jazzlab-set"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "The JazzLab: current concert calendar",
          url: "https://thejazzlab.com.au/",
          note: "Current artists, dated shows and ticket links at the Brunswick venue.",
        },
        {
          title: "The JazzLab: accessibility",
          url: "https://thejazzlab.com.au/accessibility/",
          note: "Entrance step, advance ramp arrangement and tiered-seat restrictions.",
        },
        {
          title: "Melbourne Jazz Co-operative: The JazzLab",
          url: "https://mjc.org.au/venue/the-jazzlab/",
          note: "Independent local programme corroboration, including November dates. Confirm actual times with the venue.",
        },
      ],
      "2026-11-20",
    ),
  },
];
