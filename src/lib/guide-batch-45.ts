import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-10",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-14",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

/** Original guides. The edition assigns each to one primary visitor interest. */
export const guideBatch45: PublicExperience[] = [
  {
    id: "lisbon-nata",
    slug: "fold-the-pastry-before-the-first-bite",
    title: "Fold the pastry before the first bite",
    summary:
      "Give Lisbon's familiar custard tart ninety minutes of hands-on attention, from dough to the oven.",
    field: "taste",
    place: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    ...common,
    ...guideImage("lisbon-nata"),
    kernel:
      "Choose Cooking Lisbon's Pastéis de Nata Experience. Start with dough, follow the rolling and folding, then shape the shells and prepare the custard before baking. Notice how thin layers create room for a filling. Eating a tart afterwards becomes a way to read your decisions, not just a reward for finishing the class.",
    rootedness:
      "A pastel de nata is an immediately recognisable Lisbon entry. A small cooking-school session opens a less obvious question: how much of the pleasure comes from structure rather than sweetness? This is a contemporary visitor class, not admission to a historic bakery or proof that one recipe represents every Portuguese maker.",
    shift:
      "From recognising the browned top to noticing the layers underneath it.",
    humanReturn:
      "The next bakery counter gives you something to look for before you take the first bite.",
    responsibility:
      "Expect egg, milk and wheat ingredients. Ask about allergies, cross-contact, mobility and children's supervision before booking. The English class page and booking listing differ on minimum adult numbers and maximum group size, so confirm the conditions for your actual party. Choose the ninety-minute format, not a longer market-and-meal class. There is no promised professional qualification or particular bakery recipe.",
    evidence:
      "The school's current English page describes making dough and custard from scratch. Its public booking page shows upcoming October 2026 sessions and age-based tickets. EA has not attended the class or tasted its results. The photograph shows finished examples, not a guaranteed result for every participant.",
    duration: "90 minutes on the confirmed class",
    participation:
      "Hands-on pastry preparation and baking with instruction in English",
    access:
      "Book the named experience directly with Cooking Lisbon at Rua Bernardim Ribeiro 9. Confirm your date, party size and dietary needs before payment. No EA booking or provider partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Cooking Lisbon: Pastéis de Nata Experience",
        url: "https://www.cookinglisbon.com/pasteis-de-nata-experience",
        note: "Current English programme, dough preparation, duration, address and class conditions.",
      },
      {
        title: "Cooking Lisbon: public class booking",
        url: "https://fareharbor.com/embeds/book/cookinglisbon/items/296222/?full-items=yes&flow=704737",
        note: "Upcoming October 2026 sessions verified. Group-size conditions differ from the English class page.",
      },
    ]),
  },
  {
    id: "penang-keng-kwee-chendul",
    slug: "let-the-ice-change-a-penang-spoonful",
    title: "Let the ice change a Penang spoonful",
    summary:
      "Order chendul on Lebuh Keng Kwee and notice a dessert changing while you eat it.",
    field: "taste",
    place: "George Town, Penang",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "george-town",
    ...common,
    ...guideImage("penang-keng-kwee-chendul"),
    kernel:
      "Go to the Penang Road Famous TeoChew Chendul location on Lebuh Keng Kwee, rather than assuming every branch gives you the same street setting. Order the original chendul. Let the first spoonful and a later one tell you what melting ice does to coconut milk, syrup and soft green strands. You can learn something without turning a small dessert into a tasting competition.",
    rootedness:
      "Malaysia's National Department for Culture and Arts documents cendol as a regional dessert with coconut milk, palm sugar, ice and rice-flour strands. It also identifies the Tan family business on Penang Road. That gives this ordinary purchase context, not a verdict that one counter is the best or the only legitimate expression of the dish.",
    shift:
      "From buying a cold sweet to noticing that temperature keeps rewriting it.",
    humanReturn:
      "A bowl can make a street memorable through texture rather than a superlative.",
    responsibility:
      "This is a normal food purchase, not a hosted tasting or access behind the counter. Follow the queue and keep the pavement usable. Ask about ingredients, toppings and allergens. Do not assume dairy-free, gluten-free or other dietary suitability from the traditional recipe. Opening hours, supply, serving arrangements and prices can change. The historical photograph includes a 2009 tariff that is not today's price.",
    evidence:
      "The operator lists its Lebuh Keng Kwee address and original chendul. The government cultural entry supplies dish context, partly drawing on the operator's history, rather than independently validating its marketing. EA has not visited or tasted this counter. The licensed photograph records the exact named stall in 2009, not its present layout or menu.",
    duration: "Allow a short food stop, with extra time for a queue",
    participation: "Order and eat as an ordinary customer",
    access:
      "Use the operator's location list for 27 and 29 Lebuh Keng Kwee in George Town. It currently lists daily opening from 09:00 to 18:30. Check nearer your visit and pay the current counter price. No EA meal, reservation or partnership is implied.",
    guideReview: review("public_hospitality", [
      {
        title: "Penang Chendul: original location",
        url: "https://chendul.my/locate-us/",
        note: "Current operator address and hours. Other branches are separately listed.",
      },
      {
        title: "Penang Chendul: food",
        url: "https://chendul.my/our-food/",
        note: "The original chendul is listed. Marketing and customer testimonials are not used as quality evidence.",
      },
      {
        title: "JKKN: cendol cultural entry",
        url: "https://pemetaanbudaya.jkkn.gov.my/en/senibudaya/detail/867",
        note: "Government cultural context and regional ingredients. Its history references the operator's own account.",
      },
    ]),
  },
  {
    id: "jerez-tio-pepe",
    slug: "read-the-cellar-before-tasting-jerez",
    title: "Read the cellar before tasting Jerez",
    summary:
      "Follow a guided cellar route in Jerez, then bring better questions to a two-wine tasting.",
    field: "taste",
    place: "Jerez de la Frontera",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "jerez-de-la-frontera",
    ...common,
    ...guideImage("jerez-tio-pepe"),
    kernel:
      "Choose the basic Tío Pepe Experience with its two-wine tasting. Let the cellar visit give the glasses a setting before comparing them. Ask what the building, casks and ageing contribute, then separate the producer's explanation from what you can actually notice. A useful tasting need not end with an obligation to prefer the brand.",
    rootedness:
      "The Sherry regulatory council places González Byass's bodega in Jerez and records its nineteenth-century beginnings. A cellar makes wine's local infrastructure visible. This is one producer's public route, not a comprehensive account of every Jerez style, workforce or bodega.",
    shift:
      "From treating sherry as a label to recognising a wine shaped inside a place.",
    humanReturn:
      "You leave with a question about ageing that travels beyond the two glasses.",
    responsibility:
      "Wine tasting is for adults aged eighteen and over. Arrange a non-driving return if drinking and confirm alcohol-free arrangements directly. Languages depend on the chosen session. Ask about mobility on the actual route rather than relying on a general accessibility claim. The basic ticket is not a vineyard excursion, extended five-wine pairing or private cellar visit. The historical photo cannot establish which rooms will open on your date.",
    evidence:
      "Tío Pepe describes a ninety-minute guided cellar visit with two wines. The regulatory council supplies local bodega context. EA has not attended or tasted the programme. A current booking must still confirm the date, language, wine selection and route.",
    duration: "Around 90 minutes on the basic experience",
    participation:
      "Guided cellar interpretation and an optional adult wine tasting",
    access:
      "Reserve the basic Tío Pepe Experience through the operator at Manuel María González 12, Jerez. Verify the ticket inclusions before paying. No EA reservation, transfer or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Tío Pepe: basic experience",
        url: "https://www.tiopepe.com/en/experiences/tio-pepe-experience",
        note: "Current ninety-minute format, two-wine tasting and date-dependent language choices.",
      },
      {
        title: "Sherry regulatory council: Bodegas Tío Pepe",
        url: "https://www.sherry.wine/sherry-wine/bodegas/bodegas-tio-pepe",
        note: "Local bodega context and address. It is not an independent tasting review.",
      },
    ]),
  },
  {
    id: "takaoka-nousaku",
    slug: "give-sand-the-shape-of-a-tin-bowl",
    title: "Give sand the shape of a tin bowl",
    summary:
      "Try the mould-making stage of a ninety-minute tin-casting workshop at Nousaku in Takaoka.",
    field: "make",
    place: "Takaoka",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "takaoka",
    ...common,
    ...guideImage("takaoka-nousaku"),
    kernel:
      "Reserve the ninety-minute sand-casting workshop and confirm a small-bowl option for your session. Prepare the sand mould under staff instruction, then follow the casting and finishing stages allocated to visitors. Notice the apparently empty space that decides the final object. Heat and specialist equipment remain governed by the workshop's safety instructions.",
    rootedness:
      "Nousaku's own history traces a Takaoka metalworking business from Buddhist implements into contemporary objects. The visitor workshop makes one part of that material practice approachable. It is not evidence that a short class reproduces the whole craft or makes the participant an artisan.",
    shift:
      "From thinking about a bowl's surface to thinking about the space that formed it.",
    humanReturn:
      "A modest object can keep the memory of an unfamiliar making sequence.",
    responsibility:
      "Choose the ninety-minute course, not the separate thirty-minute chopstick-rest activity. Object availability must be confirmed. Children under thirteen need an accompanying guardian. Ask about younger ages, teaching language, mobility and tool assistance. Wear clothes suitable for sand and follow the staff's heat rules. A factory tour is separately reserved and has different closure days. Do not assume a workshop ticket includes it.",
    evidence:
      "Nousaku publishes the sand-casting formats, duration and guardian rule. Its visitor-factory page distinguishes workshop and tour reservations. EA has not attended or handled the casting equipment. The official photograph shows mould work, not permission for a visitor to perform every industrial stage.",
    duration: "90 minutes on the selected sand-casting format",
    participation:
      "Staff-led mould preparation and the workshop's permitted casting and finishing steps",
    access:
      "Reserve with Nousaku before travelling to 8-1 Office Park, Takaoka. Confirm the object, language and arrival time. Pay the current workshop charge separately from any other visit. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Nousaku: sand-casting workshops",
        url: "https://www.nousaku.co.jp/en/factory/workshop/",
        note: "Ninety-minute format, objects, time slots, guardian condition and safety instructions.",
      },
      {
        title: "Nousaku: visitor factory",
        url: "https://www.nousaku.co.jp/en/factory/",
        note: "Advance reservations and the distinction between factory tours and workshops.",
      },
      {
        title: "Nousaku: company history",
        url: "https://www.nousaku.co.jp/en/about/",
        note: "The producer's account of its Takaoka metalworking history, not independent craft certification.",
      },
    ]),
  },
  {
    id: "hoi-an-thanh-truc-lantern",
    slug: "wrap-a-lantern-before-hoi-an-lights-up",
    title: "Wrap a lantern before Hoi An lights up",
    summary:
      "Fit chosen fabric to a prepared bamboo frame in a public lantern class in Cam Thanh.",
    field: "make",
    place: "Hoi An, Cam Thanh",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hoi-an",
    ...common,
    ...guideImage("hoi-an-thanh-truc-lantern"),
    kernel:
      "Choose the standard lantern-making class at the Thanh Truc workshop, rather than its making-and-painting option. Work with a prepared foldable frame, select fabric and follow the instructor's wrapping and finishing steps. The curve gives each piece of fabric a different problem. You take the finished lantern home, without pretending you have made the bamboo structure from raw material.",
    rootedness:
      "Hoi An's lanterns are an easy image to recognise. In a Cam Thanh village workshop, one becomes a sequence of small practical choices. The change of setting matters: this class is outside the Ancient Town, not an invitation behind an arbitrary lantern shop's counter.",
    shift:
      "From seeing a lantern as a colour in a street to noticing the frame beneath its fabric.",
    humanReturn:
      "A folded object can hold the memory of a movement your hands had to learn.",
    responsibility:
      "The current operator describes a sixty to seventy-five-minute standard class in English. An older business listing gives different durations, so confirm the chosen format. Ask about children's supervision, glue, scissors and mobility. Frame construction and optional painting are not implied by the standard ticket. Pickup is advertised only for groups of at least three and must be separately confirmed. Do not add a coconut-boat ride to this booking.",
    evidence:
      "The operator's live site describes the materials, formats, duration and Cam Thanh address. The secondary listing supports workshop identity and location but is operator-submitted, not independent quality validation. EA has not attended the class. Programme and gallery access were verified online, not through a reservation or contact with the family.",
    duration:
      "60 to 75 minutes on the standard format, subject to confirmation",
    participation:
      "Cover and finish a prepared lantern frame with an instructor",
    access:
      "Arrange an ordinary class reservation through the operator's published contact. Confirm Road DX18, Thanh Nhut village, Cam Thanh, your date and the exact class before travel or payment. No EA contact, booking, transfer or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Thanh Truc: current lantern classes",
          url: "https://hoianlanternmakingclass.com/",
          note: "Live rendered programme and gallery checked. Standard class, English instruction, prepared frame and Cam Thanh address.",
        },
        {
          title: "Thanh Truc: secondary business listing",
          url: "https://www.tripadvisor.com/Attraction_Review-g298082-d27519543-Reviews-Xu_ng_L_ng_Den_Thanh_Truc-Hoi_An_Quang_Nam_Province.html",
          note: "Search-accessible operator-submitted listing supports identity and address. Full-page retrieval was unavailable. Older duration and pickup statements do not override the current operator.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "chiang-mai-silver-ring",
    slug: "turn-a-silver-line-into-your-own-ring",
    title: "Turn a silver line into your own ring",
    summary:
      "Give a day to sawing, shaping and finishing a simple silver ring at Nova Artlab in Chiang Mai.",
    field: "make",
    place: "Chiang Mai",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "chiang-mai",
    ...common,
    ...guideImage("chiang-mai-silver-ring"),
    kernel:
      "Book Nova Artlab's one-day beginner fabrication class and discuss a simple ring before arriving. Work from sheet or wire through the permitted sawing, filing, soldering and finishing steps. A smooth edge stops looking automatic after you have had to make one. Keep the design small enough to learn from, rather than treating the day as a race towards an elaborate jewel.",
    rootedness:
      "A working jewellery studio offers a concrete way into Chiang Mai through skilled attention. Nova's visitor class is contemporary fabrication, not a claim to teach the whole region's silversmithing traditions or a temple craft lineage.",
    shift:
      "From choosing a polished object to recognising the adjustments that made it comfortable to wear.",
    humanReturn:
      "The ring carries both a shape and the memory of correcting it.",
    responsibility:
      "This is fabrication, not casting. Stone setting requires a longer course and is not included in a one-day beginner ring. Silver is charged separately by weight. The studio prefers participants over twelve, so confirm a younger visitor's suitability. Tools and soldering require close supervision. English instruction is advertised. Ask about dexterity, mobility and allergies. Confirm availability before paying a deposit and read the non-refundable booking conditions. The lunch break does not establish an included meal.",
    evidence:
      "Nova's current class page specifies the beginner format, weekday hours, separate silver charge and limits on techniques. Time Out independently lists the public studio class and Tha Phae Road location. EA has not attended or assessed the teaching. The photograph shows real bench work, not a guaranteed design or finished result.",
    duration: "A weekday class from 10:30 to 16:30, with a lunch break",
    participation:
      "Beginner jewellery fabrication with supervised tools and heat",
    access:
      "Confirm the one-day ring class directly with Nova Artlab on Tha Phae Road before transferring a deposit. Check the exact studio meeting point and material charge. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Nova Artlab: jewellery classes",
        url: "https://www.nova-collection.com/artlab-jewelry-class-workshop/",
        note: "One-day fabrication, teaching language, hours, age preference, silver charge and booking conditions. Casting is explicitly excluded.",
      },
      {
        title: "Time Out: Nova Artlab",
        url: "https://www.timeout.com/chiang-mai/things-to-do/nova-artlab",
        note: "Independent studio context and public-class location, not a current reservation guarantee.",
      },
    ]),
  },
  {
    id: "berlin-tempelhofer-cycle",
    slug: "cycle-the-runway-that-became-a-berlin-park",
    title: "Cycle the runway that became a Berlin park",
    summary:
      "Bring a bicycle to Tempelhofer Feld and let a former airfield change your sense of city space.",
    field: "move",
    place: "Berlin",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    ...common,
    ...guideImage("berlin-tempelhofer-cycle"),
    kernel:
      "Enter Tempelhofer Feld through a public gate and choose a manageable out-and-back on its paved areas. The distance between edges becomes something your legs can read. Slow down around walkers and other users. A runway can feel immense without your needing to ride fast, complete every path or enter a former airport building.",
    rootedness:
      "Berlin has kept a substantial former airfield as shared public space. Cycling makes that civic decision physical: room once reserved for aircraft now holds many ordinary uses. It is a park visit, not an airport tour, a race or unrestricted access to protected grassland.",
    shift:
      "From thinking of a runway as a route away to finding a place to stay within the city.",
    humanReturn:
      "The remembered scale belongs to a movement you chose, not a viewing platform.",
    responsibility:
      "Follow signed routes, pedestrian priority and fenced nature-protection areas. Do not cycle into protected meadow or assume every surface suits your bicycle or ability. Wind, rain and heat matter on exposed ground. Bring suitable equipment and use your own judgement about safe riding. The October public hours are currently 07:00 to 19:00, with earlier winter closing. Rental is separate and its operator's hours must be checked. Public admission does not include instruction or bicycle support.",
    evidence:
      "The park's official visit and sports pages confirm free access, paved cycling areas, seasonal hours and slower users' priority. EA has not inspected the route or rental equipment. The licensed photograph shows an ordinary park setting, not a coached ride or a promise of the same conditions.",
    duration:
      "Choose a short circuit or an unhurried part of a morning before the gates close",
    participation:
      "Independent cycling within the public park's permitted areas",
    access:
      "Use the park's official entrance information. Bring your own bicycle or separately confirm a public rental. Check the current closing time before entering. No EA tour, rental, equipment or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Tempelhofer Feld: plan your visit",
          url: "https://www.tempelhoferfeld.de/en/service-infos/plan-your-visit/",
          note: "Public entrances, free admission, seasonal hours and protected areas.",
        },
        {
          title: "Tempelhofer Feld: sports",
          url: "https://www.tempelhoferfeld.de/en/discoveries-experiences/sports/",
          note: "Paved cycling space, slower users' priority and a separately operated rental.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "auckland-cup-sailing",
    slug: "take-a-working-role-on-aucklands-harbour",
    title: "Take a working role on Auckland's harbour",
    summary:
      "Join a two-hour sail on a former America's Cup yacht, with optional hands-on roles under the crew's direction.",
    field: "move",
    place: "Auckland",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "auckland",
    ...common,
    ...guideImage("auckland-cup-sailing"),
    kernel:
      "Choose Explore Group's America's Cup Sailing Experience, not its separate dinner or general harbour cruise. After the safety briefing, take an offered turn on the grinders or helm if the crew and conditions allow. You can also remain an observer. A familiar Auckland skyline becomes the background to a boat that needs coordinated work, rather than another view consumed from a seat.",
    rootedness:
      "Auckland's harbour and sailing identity are widely recognisable. A former race yacht introduces the mechanics behind that image. The advertised vessel is not a present-day foiling race boat, and the public outing is not participation in an America's Cup competition.",
    shift:
      "From watching a yacht cross the harbour to noticing what keeps it moving.",
    humanReturn:
      "A sail's change of angle can carry the memory of effort shared with other people.",
    responsibility:
      "The operator's minimum age is ten. Boarding requires an independent step and the deck may pitch or roll. Lifejackets must remain on. Follow crew instructions around moving ropes and equipment and wear flat suitable shoes. The operator advises against participation during pregnancy or with some medical conditions, so discuss suitability directly. Weather, tide and operations determine departure and hands-on opportunities. No prior sailing experience is required, but that does not make the deck suitable for everyone.",
    evidence:
      "Explore's current programme specifies a two-hour sail, optional participation and safety conditions. Tourism New Zealand independently lists the public activity, not a quality assessment or live seat inventory. EA has not sailed or inspected the vessel. The photograph documents crew-directed activity without guaranteeing a turn at the helm.",
    duration: "Two hours, plus the requested early check-in",
    participation:
      "Crew-led sailing with optional grinders or helm, or observation",
    access:
      "Book the named America's Cup experience through Explore Group in Auckland and confirm the meeting point and departure. Arrive at least fifteen minutes early as instructed. No EA sailing qualification, booking, transfer or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Explore Group: America's Cup sailing",
        url: "https://www.exploregroup.co.nz/auckland/americas-cup-sailing-experience/",
        note: "Current duration, optional roles, age ten minimum, lifejackets, boarding and medical cautions. Operator page retrieved directly.",
      },
      {
        title: "Tourism New Zealand: public sailing listing",
        url: "https://www.newzealand.com/us/plan/business/explore-group-america-s-cup-sailing-experience/",
        note: "National tourism listing corroborating the public visitor format. It does not confirm a particular sailing.",
      },
    ]),
  },
  {
    id: "new-york-governors-cycle",
    slug: "ride-new-yorks-island-without-the-traffic",
    title: "Ride New York's island without the traffic",
    summary:
      "Take a ferry to Governors Island and choose a bicycle-paced view of New York from its public paths.",
    field: "move",
    place: "New York City",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    ...common,
    ...guideImage("new-york-governors-cycle"),
    kernel:
      "Plan the ferry first, then bring or separately rent a bicycle for Governors Island's car-free paths. Make a modest waterside circuit and stop where the skyline changes its relationship with the shore. You do not need to cover the published seven miles of paths to feel the difference between an island ride and moving through Manhattan traffic.",
    rootedness:
      "Governors Island gives a familiar city a different spatial rhythm. The harbour remains visible, while ordinary movement has more room. This is publicly accessible island cycling, not a guided historical tour, an included bike hire or unrestricted access to every fort and building.",
    shift:
      "From seeing New York as streets to seeing the distance between its shores.",
    humanReturn:
      "The skyline can stay familiar while your position within it becomes less predictable.",
    responsibility:
      "Ferry admission and bicycle charges are separate. Check your return sailing before extending the ride. The Trust's Brooklyn ferries run on selected weekends and holidays through 1 November 2026, not daily year-round. Manhattan and NYC Ferry services have their own schedules and tickets. Rentals have separate age, payment and seasonal conditions. Follow island rules and leave space for walkers. The seasonal tram is not an October fallback. Do not assume Fort Jay's temporarily restricted entrance or the closed kayak dock is available.",
    evidence:
      "The Trust for Governors Island lists cycling paths and rental options. Its current visitor page supplies fall opening and ferry conditions, including access limitations. EA has not ridden the paths or tested rentals. The credited photograph shows island cycling, not a promise of the pictured route's exact conditions.",
    duration: "Allow a morning or afternoon including independent ferry travel",
    participation: "Self-directed cycling on permitted public paths",
    access:
      "Use the Trust's visitor page to plan a ferry and any separate bicycle rental. Current fall island hours are 07:00 to 18:00. Verify the actual service and leave time for the return. No EA ferry, bike, guide, transfer or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Governors Island: cycling and Citi Bike",
          url: "https://www.govisland.com/things-to-do/recreation/citi-bike",
          note: "Seven-mile public cycling network, bicycle docks and separately operated rental options.",
        },
        {
          title: "Governors Island: current visitor information",
          url: "https://www.govisland.com/plan-your-visit",
          note: "Fall hours, ferry season, accessibility and current Fort Jay and kayak-dock limitations.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "madrid-beti-jai",
    slug: "step-inside-madrids-surviving-pelota-court",
    title: "Step inside Madrid's surviving pelota court",
    summary:
      "Enter Beti Jai's public court and interpretation centre, where a sporting space reveals a less expected Madrid.",
    field: "witness",
    place: "Madrid",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "madrid",
    ...common,
    ...guideImage("madrid-beti-jai"),
    kernel:
      "Visit Beti Jai during its free public hours. Begin at court level, then use the interpretation centre and whichever viewing areas staff have opened. Read the curve of the galleries as an arrangement between players and spectators. The empty playing surface becomes more intelligible when you ask where a ball, a person and a watching crowd would each belong.",
    rootedness:
      "The municipal account identifies an 1894 frontón restored for public access. Its sporting architecture adds a different layer to Madrid than another palace interior. Restoration makes the building available to look at, not permission to start a pelota game or enter every gallery.",
    shift:
      "From an unexpected facade to a room whose shape was made for shared attention.",
    humanReturn:
      "Another city's sports building may become something you can read without knowing the game first.",
    responsibility:
      "Ball games, food, smoking and bicycles are prohibited inside. Respect closed areas and staff capacity limits. Guided groups can receive priority. There are no visitor toilets or drinking-water facilities, so plan before entering. Ask which viewing areas suit your mobility needs. The October to mid-June schedule is Tuesday to Sunday, 10:00 to 14:00. Summer's later closing does not apply to this October visit.",
    evidence:
      "The site's official visitor rules and Madrid's municipal opening notice confirm free public access, seasonal hours and interpretation facilities. EA has not visited or audited accessibility. The documentary court photograph establishes the building's form, not which upper levels are open on a future date.",
    duration: "Choose a short self-paced visit within public opening hours",
    participation:
      "Architectural observation and interpretation, not playing pelota",
    access:
      "Go to Marqués de Riscal 7 in Chamberí during confirmed public hours. Check closure notices and any separately booked guided activity before travel. No EA guided visit, game, ticket or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "Beti Jai: visitor rules and seasonal hours",
        url: "https://frontonbetijai.es/visita/",
        note: "Official free access, October to June closing time, prohibited activities and absence of toilets or water.",
      },
      {
        title: "Madrid municipality: public opening of Beti Jai",
        url: "https://patrimonioypaisaje.madrid.es/portales/monumenta/es/Actividades/Apertura-al-publico-del-fronton-Beti-Jai/?vgnextchannel=5f4c4d5e77b3e610VgnVCM2000001f4a900aRCRD&vgnextfmt=default&vgnextoid=264df65ccdd2e810VgnVCM1000001d4a900aRCRD",
        note: "Municipal context, public opening and interpretation-centre role.",
      },
    ]),
  },
  {
    id: "copenhagen-danish-modern",
    slug: "learn-to-read-a-chair-in-copenhagen",
    title: "Learn to read a chair in Copenhagen",
    summary:
      "Use Designmuseum Danmark's current Danish Modern exhibition to look beyond a familiar furniture silhouette.",
    field: "learn",
    place: "Copenhagen",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    ...common,
    ...guideImage("copenhagen-danish-modern"),
    kernel:
      "Choose the permanent Danish Modern exhibition, rather than an archived exhibition with a similar chair title. Start with two objects that seem to solve the same problem differently. Look for the relation between legs, seat, material and body, then read the labels. The chair tunnel expands that comparison into a remarkable number of decisions about an ordinary need.",
    rootedness:
      "The museum places twentieth-century Danish design in relation to industrial change and international influences. Its current chair tunnel contains 125 chairs. The useful question is not whether everything is unmistakably Danish, but how a design culture develops through exchange, constraints and choices.",
    shift:
      "From recognising a design icon to noticing what the object asks of a body and a material.",
    humanReturn:
      "The next ordinary chair can become more interesting without needing to become a purchase.",
    responsibility:
      "These are museum objects, not furniture for visitors to try or a making workshop. Follow handling and photography rules. Exhibition admission is paid even though the shop, café and garden can have free access. The museum is normally closed on Mondays. Confirm current hours, holiday changes and access arrangements directly. Temporary exhibitions have their own dates and are not the basis of this evergreen guide.",
    evidence:
      "The current permanent-exhibition page describes Danish Modern and its enlarged chair tunnel. The museum's visitor and accessibility pages establish paid gallery access and practical arrangements. EA has not visited or assessed the collection on site. The credited photograph records this exhibition, not every future display arrangement.",
    duration:
      "Keep an unhurried hour or more for looking. This is not a fixed-length tour",
    participation:
      "Self-directed comparison of museum objects and their interpretation",
    access:
      "Use Designmuseum Danmark's current admission information and choose Danish Modern at Bredgade 68. Arrange any guided tour separately. No EA admission, object handling, booking or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "Designmuseum Danmark: Danish Modern",
        url: "https://designmuseum.dk/en/exhibition/danish-modern/",
        note: "Current permanent exhibition and 125-chair tunnel. The old Danish Chair exhibition is not used.",
      },
      {
        title: "Designmuseum Danmark: hours and admission",
        url: "https://designmuseum.dk/en/besog-os/opening-hours-admission/",
        note: "Paid gallery admission, regular opening and free-access spaces. Dated older holiday examples are not projected onto 2026.",
      },
      {
        title: "Designmuseum Danmark: accessibility",
        url: "https://designmuseum.dk/en/accessibility/",
        note: "Published lifts, wheelchair arrangements and visitor support, not an EA accessibility audit.",
      },
    ]),
  },
  {
    id: "stockholm-vasa-tour",
    slug: "read-stockholm-around-a-rescued-ship",
    title: "Read Stockholm around a rescued ship",
    summary:
      "Join Vasa Museum's short included tour and let one seventeenth-century ship open a larger story.",
    field: "witness",
    place: "Stockholm",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    ...common,
    ...guideImage("stockholm-vasa-tour"),
    kernel:
      "Ask the information desk for the next public guided tour in your language. Spend its roughly twenty-five minutes looking around the preserved Vasa, then return independently to one detail that has changed meaning. Carving, rigging or scale can lead the eye towards the people and decisions behind an object that initially seems too large to take in.",
    rootedness:
      "Vasa sailed and sank in 1628, then spent more than three centuries under water before recovery. The museum gives Stockholm a ship that belongs to both maritime ambition and ongoing preservation. A public tour is interpretation around the vessel, not a visitor boarding or a conservation shift.",
    shift:
      "From seeing an immense survivor to recognising a ship made of decisions and continuing care.",
    humanReturn:
      "You can carry away one understood detail instead of trying to remember the whole vessel.",
    responsibility:
      "The included public format serves individuals and small parties of up to nine. Larger groups need the separately arranged format. Tour times and language can change, so check the desk rather than treating a schedule as a seat reservation. Children aged twelve or younger must remain with an adult. Payment is card-only. An advance museum ticket does not guarantee queue priority. Ask about mobility, sensory needs and photography rules before your visit. No access aboard the ship is implied.",
    evidence:
      "The public-tour page describes the included short format and language pattern. The admission page was updated on 8 October 2026 and confirms the child and payment rules. EA has not attended. The official photograph shows a guided museum group, not admission to the vessel itself.",
    duration:
      "Around 25 minutes for the public tour, plus your own museum time",
    participation: "Guided listening and looking around the preserved ship",
    access:
      "Buy ordinary Vasa Museum admission and check the public-tour board at the information desk. Confirm your language and the day's opening hours. No EA tour reservation, ship boarding or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Vasa Museum: public guided tours",
        url: "https://www.vasamuseet.se/en/visit/guided-tours",
        note: "Included twenty-five-minute format, languages and party-size boundary. Updated September 2026.",
      },
      {
        title: "Vasa Museum: hours and admission",
        url: "https://www.vasamuseet.se/en/visit/hours--admission",
        note: "Updated 8 October 2026. Card payment, accompanied children and no advance-ticket queue guarantee.",
      },
    ]),
  },
  {
    id: "dublin-glasnevin-gardens",
    slug: "give-dublin-a-glasshouse-paced-morning",
    title: "Give Dublin a glasshouse-paced morning",
    summary:
      "Walk Glasnevin's public botanical gardens and let a glasshouse change the scale of your attention.",
    field: "restore",
    place: "Dublin",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    ...common,
    ...guideImage("dublin-glasnevin-gardens"),
    kernel:
      "Enter the National Botanic Gardens in Glasnevin and give one garden loop and an open glasshouse enough time. Begin with the relation between a plant and the structure sheltering it. Then choose something smaller: a leaf edge, a stem or the way light crosses glass. This is a self-paced public visit, not an assignment to identify every specimen.",
    rootedness:
      "The OPW's visitor account connects Glasnevin's living collection with its restored historic glasshouses, including Richard Turner's ironwork. Plants and architecture are doing different work in the same frame. This is a cultivated collection with global origins, not a claim to encounter Ireland's wild habitats inside the Palm House.",
    shift:
      "From filling a Dublin morning with stops to staying with one living detail.",
    humanReturn:
      "The useful pause can be something you know how to repeat in another garden.",
    responsibility:
      "General garden entry is free, while guided tours are separate. Check seasonal opening and individual glasshouse availability before travelling. Winter brings earlier closing and a glasshouse can have different hours from the grounds. Some paths and entrances need mobility planning. Assistance dogs are the exception to the no-dogs rule. Do not climb, pick plants or fly a drone. A quieter pace is a choice, not a promise of silence or a health treatment.",
    evidence:
      "Heritage Ireland documents free public access, the glasshouses, visitor restrictions and seasonal hours. The OPW's conservation account gives the collection a scientific setting. EA has not visited or audited the paths. The official Palm House photograph is not proof that every glasshouse opens on your date.",
    duration:
      "Allow around 90 minutes, or keep the visit shorter at your own pace",
    participation: "Independent garden and glasshouse observation",
    access:
      "Use Heritage Ireland's current visitor information for the National Botanic Gardens, Glasnevin. Confirm the seasonal closing time and any glasshouse notice. No EA tour, plant handling, ticket or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Heritage Ireland: National Botanic Gardens",
          url: "https://heritageireland.ie/visit/places-to-visit/national-botanic-garden/",
          note: "OPW public access, glasshouses, seasonal hours and visitor restrictions.",
        },
        {
          title: "Heritage Ireland: conservation and research",
          url: "https://heritageireland.ie/learn/conservation-research/what-we-do/",
          note: "OPW collection and conservation context, not a guarantee about a particular glasshouse's opening.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "singapore-orchid-garden",
    slug: "follow-singapores-orchids-at-a-slower-pace",
    title: "Follow Singapore's orchids at a slower pace",
    summary:
      "Give the National Orchid Garden its own unhurried visit inside Singapore Botanic Gardens.",
    field: "restore",
    place: "Singapore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    ...common,
    ...guideImage("singapore-orchid-garden"),
    kernel:
      "Enter the separately ticketed National Orchid Garden and choose a small sequence through its planted paths and open display spaces. Compare the scale of a flower with the structures and planting around it. Let an unfamiliar orchid earn a second look before moving on. The collection becomes more legible when you stop trying to make every flower a photograph.",
    rootedness:
      "Singapore's orchid garden puts cultivation, hybrid breeding and designed growing conditions within a public botanical visit. The Tropical Montane Orchidetum includes environments for plants from different world regions. It is not wild Singapore condensed into a garden, nor a guarantee that every flower shown in a past image is blooming today.",
    shift:
      "From collecting colour to noticing the care and conditions behind it.",
    humanReturn:
      "One carefully seen plant can hold a morning more clearly than a complete gallery of images.",
    responsibility:
      "The Botanic Gardens' free general admission does not cover the paid National Orchid Garden. NParks currently lists 08:30 to 19:00 with last ticketing and entry at 18:00. Check notices, weather and particular display-space closures. Bring water and adapt the visit to heat, rain and mobility needs. Do not touch or remove plants. Blooming and layouts change. The licensed 2018 garden photograph is historical context, not today's flowering report.",
    evidence:
      "NParks' September 2026 attraction page confirms public admission, opening and the cultivated environments. Its October visitor notices provide a live closure reference. EA has not inspected the displays or paths. No therapeutic effect or particular bloom is implied.",
    duration:
      "Keep an hour or more if that suits you. This is not a timed programme",
    participation: "Self-paced looking in a cultivated orchid collection",
    access:
      "Use NParks' official National Orchid Garden information and visitor notices. Purchase the required admission through official arrangements, not a website merely using a similar name. No EA ticket, guide, booking or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "NParks: National Orchid Garden",
        url: "https://sbg.nparks.gov.sg/attractions/national-orchid-garden/",
        note: "Updated September 2026. Separate paid admission, hours, collection and growing environments.",
      },
      {
        title: "Singapore Botanic Gardens: visitor notices",
        url: "https://sbg.nparks.gov.sg/visit/notices/",
        note: "Updated October 2026. Notices must be matched to the actual space rather than assuming all grounds share a closure.",
      },
      {
        title: "Singapore Botanic Gardens: general visitor information",
        url: "https://sbg.nparks.gov.sg/visit/general-info/",
        note: "Distinguishes free general grounds from the paid orchid garden.",
      },
    ]),
  },
  {
    id: "mexico-city-vasconcelos-reading",
    slug: "pause-to-read-beneath-mexico-citys-suspended-shelves",
    title: "Pause to read beneath Mexico City's suspended shelves",
    summary:
      "Use Biblioteca Vasconcelos as a working public library, not only an architectural photograph.",
    field: "restore",
    place: "Mexico City",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    ...common,
    ...guideImage("mexico-city-vasconcelos-reading"),
    kernel:
      "Go to Biblioteca Vasconcelos in Buenavista and let the suspended shelving orient you before choosing a place to read. Consult a suitable open-stack book or ask a librarian about the collection you want. Give an ordinary page some time inside an extraordinary room. The most useful visitor role here is also the simplest: use the library while leaving other readers room to do the same.",
    rootedness:
      "The library's official history describes a public institution opened in 2006, with steel, glass and suspended shelving defining its interior. An architectural landmark becomes more interesting when its everyday function stays visible. You do not need to turn a reading room into a performance to remember it.",
    shift:
      "From photographing a room for books to finding a reason to remain in it.",
    humanReturn: "A city can leave you with a paragraph as well as a picture.",
    responsibility:
      "The in-room service allows consultation of open general and reference collections. Specialty rooms have their own arrangements. Home borrowing and computer access are different services and can require registration. Use no more than three books at once and leave consulted books on the return carts, not on shelves. Do not take library books into the gardens unless properly loaned under the official rules. Keep quiet and respect readers' privacy. English-language stock and all accessibility arrangements are not guaranteed by this guide.",
    evidence:
      "The library's in-room consultation page confirms free use, rules and current daily hours. Its official history supplies the architectural context. EA has not used or audited the reading rooms. The credited 2015 photograph records the interior, not today's access to every shelf, seat or collection.",
    duration: "Choose a short reading pause or a longer self-directed visit",
    participation:
      "Quiet in-room reading and consultation under public library rules",
    access:
      "Check Biblioteca Vasconcelos's current visitor and in-room service information. Published hours are daily, 08:30 to 19:30, subject to notices. Ask staff about the material or accommodation you need. No EA loan, tour, reserved seat or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "Biblioteca Vasconcelos: in-room consultation",
        url: "https://www.bibliotecavasconcelos.gob.mx/prestamo-en-sala.php",
        note: "Free open-stack consultation, daily hours, three-book limit, return carts and garden-borrowing boundary.",
      },
      {
        title: "Biblioteca Vasconcelos: history",
        url: "https://www.bibliotecavasconcelos.gob.mx/historia.php",
        note: "Official public-library and architectural history. No permission for intrusive reader photography is inferred.",
      },
    ]),
  },
  {
    id: "nashville-songwriter-session",
    slug: "hear-a-nashville-song-with-its-writer-in-the-room",
    title: "Hear a Nashville song with its writer in the room",
    summary:
      "Choose a dated Songwriter Session where songs, their making and audience questions share a room.",
    field: "gather",
    place: "Nashville",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "nashville",
    ...common,
    ...guideImage("nashville-songwriter-session"),
    kernel:
      "Find a Songwriter Session on the Country Music Hall of Fame and Museum's calendar, then follow that event's admission instructions. Listen for a choice in a lyric or melody that the writer explains differently from the way you first heard it. Use an offered audience question as a chance to understand the work, not to request a personal audition or private introduction.",
    rootedness:
      "Nashville's music identity can feel like a list of famous names. This museum programme changes the unit of attention to a song and the person who shaped it. A public session is a useful bridge between a collection and a living practice, without claiming that one writer represents the whole city.",
    shift: "From recognising a song to hearing a decision inside it.",
    humanReturn:
      "The next familiar chorus may carry a question you had never thought to ask.",
    responsibility:
      "Choose a published session, not a general concert or a ticket to another venue. Museum admission alone does not guarantee a programme seat. The specific event's programme-ticket instructions take priority. The general policy uses limited passes and first-come arrangements unless otherwise specified. Arrive before the start and confirm language, hearing support and access needs. Artists, length and question time vary. The museum announces closure on 18 October 2026 and a nearby road closure from 16 to 19 October, so check travel notices.",
    evidence:
      "The museum describes its recurring Songwriter Sessions and audience questions. Its dated 17 October 2026 event verifies an upcoming public format and separate programme-ticket requirement. The general pass policy explains limited seating. EA has not attended or met the songwriter. The official programme photograph is historical and does not promise the pictured artist on your date.",
    duration:
      "Follow the selected session's stated duration and leave time for admission and seating",
    participation:
      "Listening to songs and their making, with questions where the host invites them",
    access:
      "Use the museum calendar to select a current Songwriter Session at the Ford Theater, 222 Rep. John Lewis Way South. Read the actual event ticket instructions before buying museum admission. No EA seat, artist access, booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Country Music Hall of Fame: public programmes",
          url: "https://www.countrymusichalloffame.org/experiences/public-programming",
          note: "Recurring Songwriter Session role and audience questions. Current closure and traffic notices.",
        },
        {
          title: "Songwriter Session: 17 October 2026",
          url: "https://www.countrymusichalloffame.org/calendar/songwriter-session-jack-schneider-2",
          note: "Upcoming dated public session. Museum admission and a separate programme ticket are specified. Lineup is not an evergreen promise.",
        },
        {
          title: "Museum: full programme-pass policy",
          url: "https://countrymusichalloffame.org/plan-your-visit/museum-policies-faq/full-program-pass-policy",
          note: "Limited seating and default pass arrangements. Event-specific ticket instructions can supersede them.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "vienna-musikverein-standing",
    slug: "listen-to-vienna-from-the-standing-places",
    title: "Listen to Vienna from the standing places",
    summary:
      "Choose a Musikverein concert that actually offers standing tickets and give the music your full attention.",
    field: "gather",
    place: "Vienna",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    ...common,
    ...guideImage("vienna-musikverein-standing"),
    kernel:
      "Use the current Musikverein programme to choose a concert in the Grosser Saal whose ticket categories include standing places. Let the announced music, rather than an image of the hall, decide whether you want the evening. Once inside, leave the phone away and notice what a phrase becomes across a room full of people listening together.",
    rootedness:
      "Vienna's Golden Hall is easy to recognise without having heard a note inside it. Ordinary public ticketing can turn that image into a specific listening occasion. Standing access is one ticket category where offered, not a secret way into every concert or a promise of the New Year's Philharmonic programme.",
    shift:
      "From visiting a famous room to letting its shared attention carry an evening.",
    humanReturn:
      "You can remember a musical passage rather than only the hall's gilded surface.",
    responsibility:
      "Standing requires sustained physical comfort and is not suitable for everyone. Ask about accessible seated alternatives separately. Only buy a standing ticket where the chosen concert offers one. Advance-sale periods differ and some promoters operate their own sales. Do not assume inexpensive same-day availability. Late entry is restricted to permitted breaks. Coats and larger bags belong in the cloakroom, not at a standing place. Recording is prohibited without special permission. Read the binding-ticket and cancellation conditions before paying.",
    evidence:
      "Musikverein's current visitor information explains standing-ticket sales, entry, cloakroom and recording rules. Its current programme identifies actual public concerts and venues. EA has not attended or assessed sightlines or acoustics. The licensed photograph shows the Golden Hall from a past audience position, not the view supplied by a future standing ticket.",
    duration:
      "The chosen concert's announced length, with early arrival and any interval",
    participation:
      "Attentive listening at a purchased standing place where offered",
    access:
      "Select a current Grosser Saal concert through Musikverein and check for an actual standing-place category. Confirm access suitability before buying. No EA ticket, reserved sightline, New Year's access or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Musikverein: attending a concert",
          url: "https://www.musikverein.at/en/konzertbesuch",
          note: "Standing tickets, sale periods, cloakroom, late admission, recording and accessible-seat arrangements.",
        },
        {
          title: "Musikverein: current programme",
          url: "https://www.musikverein.at/en/spielplan/",
          note: "Live concert calendar and venue selection. Standing inventory must be checked for the actual concert.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "copenhagen-absalon-dinner",
    slug: "pass-the-dishes-at-a-copenhagen-long-table",
    title: "Pass the dishes at a Copenhagen long table",
    summary:
      "Book Absalon's shared dinner and let passing a dish become your first small part in the room.",
    field: "gather",
    place: "Copenhagen",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    ...common,
    ...guideImage("copenhagen-absalon-dinner"),
    kernel:
      "Reserve the ordinary communal dinner at Absalon and arrive before the meal begins. Sit at a shared long table, pass the dishes and leave room for the people beside you. Conversation may follow, but it is not an entitlement. The useful invitation is concrete: eat in a room where sharing the table is part of the meal rather than an optional extra.",
    rootedness:
      "Absalon occupies a former church in Vesterbro and operates as a public community space. VisitCopenhagen documents the setting and shared-dinner role. An accessible social format can introduce a different Copenhagen without promising a meeting with a particular local person or access to a private household.",
    shift:
      "From choosing a restaurant table to taking a modest role at a table already being shared.",
    humanReturn:
      "The memory can be a gesture between strangers rather than a plate you rated.",
    responsibility:
      "Dinner begins at 18:00 and the current food page asks guests to arrive by 17:45. Late tickets may be resold. Book together if you want your party seated together, and confirm any access or seating needs. Vegetarian options are described, but vegan, dairy-free, gluten-free or allergen-safe meals are not guaranteed. Even a free ticket for a child under three must be booked. Other events and drinks are separate. Use current checkout prices because older event pages contain different tariffs.",
    evidence:
      "The live food page lists the week of 12 to 18 October 2026, shared serving, booking and dietary limits. Its dinner information and official city tourism listing corroborate the public format and venue. EA has not eaten here or tested the social experience. The credited photograph shows a previous shared dinner, not a promise of the same menu or company.",
    duration:
      "Dinner begins at 18:00. Arrive by the operator's 17:45 check-in point",
    participation:
      "A shared meal at long tables with dishes passed between diners",
    access:
      "Reserve through Absalon's current food page for Sønder Boulevard 73. Online sales currently close at 16:00 on the day, with any remaining door tickets subject to availability. No EA dinner, seat plan, booking or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Absalon: current food and communal dinner",
          url: "https://absaloncph.dk/en/food/",
          note: "Current October menu, shared serving, arrival, diet and ticket conditions.",
        },
        {
          title: "Absalon: dinner format",
          url: "https://absaloncph.dk/en/event/faellesspisning-dinner-friday/",
          note: "Public shared-dinner format and table arrangements. Older prices do not override current food-page or checkout prices.",
        },
        {
          title: "VisitDenmark and VisitCopenhagen: Absalon",
          url: "https://www.visitdenmark.com/denmark/plan-your-trip/absalon-gdk1079905",
          note: "Official destination context, address and community-space role. It is not independent meal testing.",
        },
      ],
      "2026-11-15",
    ),
  },
];
