import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-30",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-07",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

/** Original public-source guides, with one primary allocation each in the 7 October edition. */
export const guideBatch44: PublicExperience[] = [
  {
    id: "beaune-fallot",
    slug: "follow-the-mustard-seed-through-beaune",
    title: "Follow the mustard seed through Beaune",
    summary:
      "Look through a working mustard factory before giving a familiar Burgundy condiment a more considered taste.",
    field: "taste",
    place: "Beaune",
    country: "France",
    countrySlug: "france",
    regionSlug: "beaune",
    ...common,
    ...guideImage("beaune-fallot"),
    kernel:
      "Choose Fallot's Sensations Fortes production tour, rather than its separate historical discovery route. Follow the seed through storage, grinding and packing, with factory views and staged explanations helping connect the steps. Finish with the tasting offered at the end. Try noticing texture before deciding which flavour you would take to dinner.",
    rootedness:
      "Beaune is often approached through wine. Mustard gives the town another material story. The local tourism office documents Fallot's stone-grinding method and distinguishes its Burgundy-origin mustard from the wider range. A factory visit does not establish that every jar uses locally grown seed.",
    shift:
      "From treating mustard as a sharp finishing touch to recognising decisions made before it reaches the spoon.",
    humanReturn:
      "A jar label can become a question about seed, liquid and method rather than just strength.",
    responsibility:
      "This is a guided production visit and tasting, not a mustard-making class. Mustard is an allergen. Ask about other ingredients, mobility and sensory effects before booking. Production activity varies. The tourism office's regular English tour is listed only for June to September 2026, so do not assume an October visit is in English. Confirm the actual tour language and current price.",
    evidence:
      "Fallot describes the production route and end-of-visit tasting. Beaune's tourism office lists a roughly one-hour format and 2026 language schedules. EA has not visited the factory or tasted its products. The official photograph shows factory equipment, not a promise that the pictured stage will be running during your visit.",
    duration: "Around one hour, plus any time you choose for the shop",
    participation: "Guided observation followed by an offered tasting",
    access:
      "Reserve Sensations Fortes through Fallot at 31 rue du Faubourg Bretonnière, Beaune. Confirm date, language and accessibility before payment. No EA booking or provider partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Fallot: Sensations Fortes production tour",
          url: "https://www.fallot.com/en/parcours-de-visites/parcours-sensations-fortes/",
          note: "Official production route, individual access and languages. Some displayed tariffs are dated 2025.",
        },
        {
          title: "Fallot: visitor routes",
          url: "https://www.fallot.com/en/parcours-de-visites/",
          note: "Distinguishes the two formats and describes tasting after the visit.",
        },
        {
          title: "Beaune Tourism: Sensations Fortes",
          url: "https://www.beaune-tourisme.fr/fr/profiter/patrimoine-et-culture-savoirfaire/la-moutarderie-fallot-sensations-fortes-beaune-fr-3860799/",
          note: "2026 duration, address and the limited June to September English tour schedule.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "york-chocolate",
    slug: "taste-york-before-decorating-the-chocolate",
    title: "Taste York before decorating the chocolate",
    summary:
      "Follow a city's confectionery story, compare offered samples and decorate a chocolate lolly on a guided visit.",
    field: "taste",
    place: "York",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "york",
    ...common,
    ...guideImage("york-chocolate"),
    kernel:
      "Book the Classic Guided Tour at York's Chocolate Story. Let the guide connect familiar confectionery names to the city, then pay attention to the samples and chocolatier demonstration. The lolly-decorating stage gives your hands a small part in the visit. This is a short introduction to chocolate, not a factory shift or a bean-to-bar course.",
    rootedness:
      "York's confectionery families belong to the city's industrial history as well as its shop windows. An interpretive visitor attraction can make that relationship legible. It is not the same as entering the modern factories where familiar brands are manufactured.",
    shift:
      "From recognising a wrapper to asking what a sweet tells you about a city that made it.",
    humanReturn:
      "An ordinary chocolate bar may carry a little more geography on the way home.",
    responsibility:
      "The ground floor is being refurbished from 21 September to 21 October 2026. Selected tours continue, but prebooking and checking temporary access arrangements are important. Confirm the route, lift availability, teaching language, allergens and dietary alternatives directly. Samples vary. The Classic tour is distinct from longer chocolate workshops or additional truffle-making tickets.",
    evidence:
      "The official 2026 listing describes a 60 to 75-minute guided format, tasting, demonstration and lolly decoration. Visit York confirms the attraction's public visitor role. EA has not attended or tasted the programme. Current refurbishment means that the published photograph cannot establish the exact room arrangement on your date.",
    duration: "60 to 75 minutes on a confirmed Classic tour",
    participation:
      "Guided interpretation, offered samples and chocolate-lolly decoration",
    access:
      "Choose an available Classic Guided Tour date directly with York's Chocolate Story in King's Square. Read its refurbishment notice before paying. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "York's Chocolate Story: Classic Guided Tour",
          url: "https://www.yorkschocolatestory.com/whats-on/classic-guided-tour/",
          note: "2026 programme, duration, included activity and September to October refurbishment notice.",
        },
        {
          title: "Visit York: York's Chocolate Story",
          url: "https://visityork.org/business-directory/yorks-chocolate-story",
          note: "Official city tourism listing and visitor context, not an independent tasting review.",
        },
      ],
      "2026-10-20",
    ),
  },
  {
    id: "jamaica-appleton",
    slug: "follow-jamaican-rum-from-cane-to-tasting",
    title: "Follow Jamaican rum from cane to tasting",
    summary:
      "Visit Appleton Estate in Nassau Valley and compare aged rums after seeing the process behind the glass.",
    field: "taste",
    place: "Siloah, St Elizabeth",
    country: "Jamaica",
    countrySlug: "jamaica",
    regionSlug: "st-elizabeth",
    ...common,
    ...guideImage("jamaica-appleton"),
    kernel:
      "Choose the estate visit itself, rather than a multi-attraction excursion. Follow the interpretation from sugar cane and molasses towards distillation and maturation, then compare the rums offered in the tasting. Try separating what you have been shown from what you can actually notice in the glass. A branded tour can be useful without becoming an independent verdict on the brand.",
    rootedness:
      "The estate places rum-making in Jamaica's Nassau Valley. Jamaica Information Service documented its reopening in April 2026 after hurricane-related closure. The visit is a producer's account of its process, not a complete history of Jamaican sugar, labour or rum.",
    shift:
      "From reading an age on a bottle to connecting a tasting with the work before it.",
    humanReturn:
      "You leave with better questions about a rum's making, rather than an obligation to prefer this producer.",
    responsibility:
      "Tasting is for adults aged 18 and over. Bring accepted photo ID and arrange a non-driving return if drinking. Chukka warns that some areas are not wheelchair accessible and prohibits photography in the distillery. Meals, extra drinks and transfers are separate from its entrance-only ticket. Confirm language, current route, weather disruption and your date directly. There is no promised meeting with Joy Spence.",
    evidence:
      "The estate advertises public visits Tuesday to Saturday. Its linked Chukka entrance-only product describes the tour and three-rum tasting. The government reopening report adds operational context, not quality validation. EA has not visited or tasted the programme. The live booking page must still confirm a particular departure.",
    duration:
      "Allow around two hours at the visitor centre. Confirm the tour length when booking",
    participation:
      "Guided process interpretation and an optional adult tasting, not visitor distilling",
    access:
      "Use the official estate page and its linked Chukka entrance-only option, or confirm walk-in arrangements with the estate. Siloah requires independent transport planning. No EA booking, transfer or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Appleton Estate: visit the estate",
          url: "https://www.appletonestate.com/visit-our-estate/",
          note: "Official route, public opening pattern and linked booking operator.",
        },
        {
          title: "Chukka: Appleton Estate entrance only",
          url: "https://chukka.com/jamaica/the-joy-spence-appleton-estate-rum-experience/308115",
          note: "Production booking page, tasting, ID, mobility and photography restrictions. No transfers included.",
        },
        {
          title: "Jamaica Information Service: south-coast reopening",
          url: "https://jis.gov.jm/south-coast-tourism-post-hurricane-revival-highlights-jamaicas-overall-industry-resilience/",
          note: "April 2026 government report confirming reopening after the hurricane. It is not a live booking-availability check.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "florence-leather",
    slug: "make-the-cover-before-filling-the-pages",
    title: "Make the cover before filling the pages",
    summary:
      "Spend three hours cutting, assembling and finishing a leather book cover at Florence's Scuola del Cuoio.",
    field: "make",
    place: "Florence",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "florence",
    ...common,
    ...guideImage("florence-leather"),
    kernel:
      "Reserve the three-hour book-cover workshop at Scuola del Cuoio. Under the instructor's guidance, work through the cuts, assembly and finishing that turn material into a cover for a blank journal. Watch how a small decision at an edge affects the whole object. The notebook you carry away has another story before you write a word in it.",
    rootedness:
      "Florence's leather reputation is easy to encounter as retail. The school near Santa Croce offers a different point of entry: a working process with an instructor. This short visitor workshop is separate from the school's longer professional training and its other product-making formats.",
    shift:
      "From comparing finished accessories to noticing the judgement inside a cut and an edge.",
    humanReturn:
      "Your next notebook can begin with a memory of making, not merely choosing.",
    responsibility:
      "The published workshop is for adults aged 18 and over. Book before travelling and confirm language, materials, tool use, hand mobility and building access. Leather is an animal-derived material, so ask about sourcing if that matters to your decision. This guide does not promote exotic skins or claim an alternative material is available. Longer belt or sewing courses are not included.",
    evidence:
      "The school's official workshop page advertises the three-hour book cover and blank journal, with reservations arranged directly. Its history page supplies institutional context. EA has not attended or assessed the teaching. The close-up photograph shows a finished cover, not every possible colour or technique offered to visitors.",
    duration: "Three hours at the agreed workshop time",
    participation: "Supervised cutting, assembly and finishing of a book cover",
    access:
      "Arrange the three-hour workshop using the contact details on the school's official page. Confirm the workshop entrance at Via San Giuseppe 5R and payment terms. Ordinary booking is required, not private access. No EA partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Scuola del Cuoio: workshops",
        url: "https://scuoladelcuoio.it/en/content/8-workshops",
        note: "Exact three-hour format, finished object, minimum age and direct reservations.",
      },
      {
        title: "Scuola del Cuoio: history",
        url: "https://scuoladelcuoio.it/en/content/4-our-history",
        note: "School and Santa Croce context, not independent assessment of the visitor class.",
      },
    ]),
  },
  {
    id: "puebla-talavera",
    slug: "paint-a-talavera-piece-in-puebla",
    title: "Paint a Talavera piece in Puebla",
    summary:
      "See Uriarte's working process, then put your own brush to a prepared ceramic piece that needs time after the class.",
    field: "make",
    place: "Puebla",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "puebla",
    ...common,
    ...guideImage("puebla-talavera"),
    kernel:
      "Book Uriarte's painting workshop in Puebla. Begin with the guided factory visit, then decorate the flat piece assigned for your session with an instructor's help. Pay attention to how the brush meets the surface, rather than copying every pattern you saw in the showroom. You are joining one stage of making, not producing Talavera from raw clay in an afternoon.",
    rootedness:
      "Puebla and Tlaxcala share a ceramic tradition whose making process is inscribed by UNESCO alongside related Spanish traditions. That recognition concerns living knowledge across communities, not certification of this visitor class. Uriarte gives one factory's public introduction to part of the process.",
    shift:
      "From reading a tiled facade as decoration to seeing the individual decisions within a painted line.",
    humanReturn:
      "The next blue-and-white surface may make you stop long enough to notice the hand behind it.",
    responsibility:
      "Reserve at least two days ahead. The operator says the finished piece is ready after five working days, so arrange collection or separately priced delivery before paying. Piece size and shape depend on availability. English and Spanish options are advertised. Uneven or wet floors, stairs and missing lifts make access a specific conversation. Follow instructions around pigments and wash your hands. Public holidays and weekend availability need checking.",
    evidence:
      "Uriarte publishes a roughly three-hour painting workshop and links a public booking product with language and date choices. UNESCO documents the wider craft, not the workshop's quality. EA has not attended or validated the factory locally. The programme photograph shows painting, not an assurance that you make the pictured vessel.",
    duration: "Around three hours, with the finished piece available later",
    participation:
      "Factory interpretation and supervised decoration of a prepared flat piece",
    access:
      "Use Uriarte's official workshop listing to select a language and request the date. Confirm the Puebla meeting address, mobility, collection and shipping arrangements. No shared ticket with other Puebla visits or EA booking is implied.",
    guideReview: review("public_programme", [
      {
        title: "Uriarte: painting workshop booking",
        url: "https://www.uriarte-online.com.mx/tour/producto/taller-de-pintura/",
        note: "Direct public workshop product, language selection and booking.",
      },
      {
        title: "Uriarte: visit information",
        url: "https://uriarte-talavera.squarespace.com/visita-uriarte",
        note: "Duration, advance notice, piece availability, five-working-day completion and physical access limitations.",
      },
      {
        title: "UNESCO: Talavera making process",
        url: "https://ich.unesco.org/en/video/48024",
        note: "Official 2019 inscription context linking to the full element record. Not an endorsement of this class.",
      },
    ]),
  },
  {
    id: "nara-gripped-ink",
    slug: "leave-your-handprint-in-naras-ink",
    title: "Leave your handprint in Nara's ink",
    summary:
      "Grip a warm, soft piece of raw sumi at Kinkoen and take home a shape that must dry before it can become ink.",
    field: "make",
    place: "Nara",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "nara",
    ...common,
    ...guideImage("nara-gripped-ink"),
    kernel:
      "Reserve Kinkoen's Gripped Sumi Experience. After the explanation and shaping demonstration, squeeze the prepared raw ink in your palm. The material keeps the pressure of your fingers. Take the piece home in its box and follow the drying instructions. It is a compact encounter with a writing material that is usually already hard by the time anyone picks it up.",
    rootedness:
      "Nara's sumi tradition connects soot, binding material and skilled preparation with writing and calligraphy. The workshop makes that connection tangible without asking visitors to master the full manufacturing process. Your small hand-shaped piece is an introduction, not a reproduction of an artisan's finished ink stick.",
    shift:
      "From imagining ink only as a liquid to feeling the material before it becomes a line.",
    humanReturn:
      "A brush stroke can call back a particular pressure in your hand.",
    responsibility:
      "Do not open the take-home box for three months. Keep it cool and out of direct sunlight as instructed. Reserve several days ahead, since the form allows up to three business days for a reply. The Japanese and English pages differ on duration and payment methods, so confirm both, the teaching language, age suitability and mobility. Ask about ingredients and fragrance sensitivities. A manufacturing-site tour and calligraphy are separate paid options.",
    evidence:
      "Both language versions advertise the public grip experience and reservation process. Their duration estimates differ, so this guide allows about an hour instead of choosing a false precision. EA has not attended or independently tested the finished ink. The official photograph shows preparation by an artisan, not a visitor completing the entire production process.",
    duration: "Allow about an hour. Confirm the actual session length",
    participation: "Explanation, demonstration and gripping prepared raw ink",
    access:
      "Request the basic Gripped Sumi Experience through Kinkoen's official form at 547 Sanjo-cho, Nara. Wait for confirmation before treating the time as reserved. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Kinkoen: Gripped Sumi Experience in English",
          url: "https://kinkoen.jp/en/experience/",
          note: "Basic visitor activity, drying, booking and separately priced options.",
        },
        {
          title: "Kinkoen: Japanese visitor information",
          url: "https://kinkoen.jp/experience/",
          note: "Current Japanese programme. Duration and payment statements differ from the English page and require direct confirmation.",
        },
      ],
      "2026-11-20",
    ),
  },
  {
    id: "carcavelos-surf",
    slug: "meet-lisbons-coast-on-a-surfboard",
    title: "Meet Lisbon's coast on a surfboard",
    summary:
      "Take a beginner group lesson at Carcavelos, with the board, wetsuit and an instructor's direction replacing guesswork.",
    field: "move",
    place: "Carcavelos, Lisbon coast",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "carcavelos",
    ...common,
    ...guideImage("carcavelos-surf"),
    kernel:
      "Reserve a suitable group lesson with Carcavelos Surf School and explain that you are a beginner. Learn the movements on the instructor's terms, then try them in the conditions selected for the group. Standing up is not the only useful outcome. Reading when to wait, where to move and how to fall gives the coast a different kind of attention.",
    rootedness:
      "Carcavelos gives Lisbon a beach with an everyday surf presence. The encounter is with this stretch of Atlantic water, not an imported wave-machine experience. Conditions, other users and the instructor's decisions determine what the lesson actually feels like.",
    shift:
      "From watching a coastline to learning that a wave gives you a moving set of instructions.",
    humanReturn:
      "You can leave with respect for a small first attempt, even without a photograph of a perfect ride.",
    responsibility:
      "The standard group lesson is advertised for ages 12 and over and includes a board and wetsuit. Younger-child and private formats are different products. Explain swimming ability, fitness, injuries and access needs before paying. Weather and sea conditions can change or cancel a session. Follow the instructor and do not practise alone afterwards merely because you have taken one lesson. Transfers are not assumed.",
    evidence:
      "The school's current site advertises a 90-minute group format and public booking. Its institutional page gives the school context. EA has not joined a lesson or audited instruction, safety or accessibility. The official lesson photograph shows participants on the actual beach, not a guaranteed group, instructor or sea conditions.",
    duration: "90 minutes for the confirmed group lesson, plus changing time",
    participation:
      "Supervised beginner surf practice, adjusted to ability and conditions",
    access:
      "Use the school's official group-lesson booking link and confirm the meeting point in Carcavelos, arrival time and cancellation terms. Travel from Lisbon is separate. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Carcavelos Surf School: group lesson",
          url: "https://carcavelossurfschool.com/surf-classes/surf-lessons-carcavelos/",
          note: "Exact public group product, 90-minute duration, 12-plus age, equipment and cancellation terms.",
        },
        {
          title: "Carcavelos Surf School: school context",
          url: "https://carcavelossurfschool.com/about-us/",
          note: "Operator's institutional and instructor context, not independent safety assessment.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "chicago-kayak",
    slug: "read-chicagos-buildings-from-a-kayak",
    title: "Read Chicago's buildings from a kayak",
    summary:
      "Follow a guided architectural paddle along the river, where the city rises above a much smaller moving viewpoint.",
    field: "move",
    place: "Chicago",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "chicago",
    ...common,
    ...guideImage("chicago-kayak"),
    kernel:
      "Choose Kayak Chicago's Architectural Tour rather than an unguided rental. Begin with the paddling and river-safety introduction, then follow the guide into the city. Bridges, river edges and towers sit differently when you are carrying your viewpoint with each stroke. Listen to the interpretation without letting looking up distract you from the water around you.",
    rootedness:
      "Chicago's river is infrastructure as well as an architectural corridor. A guided kayak visit changes the scale of familiar buildings while keeping their setting visible. It does not give a paddler priority over other river users or access to every waterway.",
    shift:
      "From collecting a skyline to noticing the spaces between a bridge, a riverbank and a moving body.",
    humanReturn:
      "The same buildings may look less fixed when you meet them again on foot.",
    responsibility:
      "The operator welcomes beginners, but river traffic, endurance and weather still matter. Confirm swimming ability, age rules, equipment, mobility and meeting instructions with the operator. Stay with the guide and wear the supplied safety equipment as instructed. October availability is seasonal and the site's current updates describe a narrower weekend operating pattern than the tour page's general daily wording. Use the live calendar, not a daily assumption.",
    evidence:
      "Kayak Chicago describes a three-hour architectural tour with an initial lesson. Choose Chicago identifies the public operator and location. EA has not paddled the route or assessed safety or guide interpretation. The official image shows the river setting, not a promise of clear weather or the exact group and route.",
    duration: "Around three hours, including the initial instruction",
    participation: "Guided river paddling with architectural interpretation",
    access:
      "Choose a currently available Architectural Tour date directly with Kayak Chicago. Confirm the launch at its river location rather than another beach base. No EA booking, transfer or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Kayak Chicago: Architectural Tour",
          url: "https://kayakchicago.com/tour-item/architectural-tour/",
          note: "Public guided format, three-hour duration and beginner instruction.",
        },
        {
          title: "Kayak Chicago: current operations",
          url: "https://kayakchicago.com/",
          note: "Current seasonal updates differ from the generic daily tour wording. Check the live booking calendar.",
        },
        {
          title: "Choose Chicago: Kayak Chicago",
          url: "https://www.choosechicago.com/listing/kayak-chicago-inc/",
          note: "Official city tourism listing and operator location, not independent safety validation.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "amsterdam-jaap-eden",
    slug: "follow-amsterdams-winter-ice-loop",
    title: "Follow Amsterdam's winter ice loop",
    summary:
      "Join a public skating session on Jaap Eden's outdoor 400-metre rink when its new season begins on 10 October.",
    field: "move",
    place: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    ...common,
    ...guideImage("amsterdam-jaap-eden"),
    kernel:
      "Pick a public outdoor-rink slot from Jaap Eden's actual timetable. Lace up, watch the direction of movement and give your first laps room. The experience is a repeated loop, not a race against faster skaters. Staying near the appropriate slower lane can let a cold Amsterdam hour become a small rhythm of your own.",
    rootedness:
      "A maintained city rink makes Dutch skating available without waiting for canals to freeze. Jaap Eden's public sessions are distinct from club training, lessons and the ice hall. The setting is useful precisely because access has a timetable instead of depending on a picturesque winter myth.",
    shift:
      "From wishing for a frozen canal to joining a real winter routine on managed ice.",
    humanReturn:
      "You may remember the effort of a lap more clearly than another view from a bridge.",
    responsibility:
      "The 2026 to 2027 outdoor season is scheduled for 10 October to 21 March. It is not open on this guide's 7 October check date. Gloves are mandatory and a helmet is recommended. Follow the posted direction and staff instructions, since rotation can change. Rental is extra. If you cannot move, stop and fall safely, ask about a lesson rather than treating public admission as instruction. Confirm child supervision, mobility and session closures.",
    evidence:
      "The rink publishes the upcoming season, public-session rules and rental information. Availability must be checked in its web shop because training and hire interrupt public hours. EA has not skated the rink or audited its access. The official image depicts skating at Jaap Eden, not a lesson included with your ticket.",
    duration:
      "Choose your public slot. Allow 60 to 90 minutes as a planning suggestion",
    participation:
      "Independent public skating, not a guided lesson or club session",
    access:
      "Select outdoor public admission in Jaap Eden's current web shop and check the session date. Confirm rental arrangements separately. No canal skating, EA booking or partnership is implied.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Jaap Eden: season and public opening times",
          url: "https://www.jaapeden.nl/praktische-informatie/openingstijden/",
          note: "2026 to 2027 outdoor season, public-session interruptions and web-shop timetable.",
        },
        {
          title: "Jaap Eden: rink rules",
          url: "https://www.jaapeden.nl/praktische-informatie/huisregels/",
          note: "Mandatory gloves, recommended helmet, lane etiquette and direction changes.",
        },
        {
          title: "Jaap Eden: frequently asked questions",
          url: "https://www.jaapeden.nl/praktische-informatie/veelgesteldevragen/",
          note: "Rental provider and practical distinctions between public skating and lessons.",
        },
      ],
      "2026-10-18",
    ),
  },
  {
    id: "edinburgh-mary-kings-close",
    slug: "walk-the-edinburgh-street-below-the-street",
    title: "Walk the Edinburgh street below the street",
    summary:
      "Take the historical guided route through Mary King's Close, where an enclosed street changes the scale of the Royal Mile.",
    field: "witness",
    place: "Edinburgh",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    ...common,
    ...guideImage("edinburgh-mary-kings-close"),
    kernel:
      "Reserve the Signature Guided Tour at The Real Mary King's Close. Follow the costumed guide down into the preserved close and rooms while the account connects everyday lives with the city above. Notice the width of the street and the relation between one household and the next. This guide concerns the historical visit, not a separate ghost or paranormal programme.",
    rootedness:
      "Edinburgh's closes make urban life legible at a smaller scale than its skyline. This commercial historical attraction interprets a particular enclosed site. A character-led account is interpretation, not a meeting with the people of the seventeenth century or proof of every reconstructed detail.",
    shift:
      "From looking along the Royal Mile to imagining a city through the dimensions of its former rooms.",
    humanReturn:
      "The narrow opening beside another busy street may hold your attention for longer.",
    responsibility:
      "The site lists 58 steps down and 38 up, uneven surfaces and enclosed, dim spaces, with no lift or wheelchair route. Admission starts at age five and under-16s need an adult aged 18 or over. Check sensory and claustrophobia concerns in advance. Live guiding is in English, with advertised audio translations that require preparation and headphones. Confirm photography and sensory effects directly. Arrive at the instructed check-in time.",
    evidence:
      "The official 2026 Signature listing describes a one-hour guided historical visit. Its access page gives specific physical and age limitations. EA has not visited or independently checked the historical interpretation. The official close photograph depicts the setting, not an assurance that every photographed room is on every tour.",
    duration: "About one hour, with check-in beforehand",
    participation:
      "Guided historical interpretation, with no independent underground wandering",
    access:
      "Reserve the Signature Guided Tour directly with The Real Mary King's Close on the Royal Mile. Check ticket terms and accessibility before paying. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "The Real Mary King's Close: Signature Guided Tour",
        url: "https://www.realmarykingsclose.com/whats-on/signature-guided-tour/",
        note: "2026 historical programme, one-hour format and public reservation.",
      },
      {
        title: "The Real Mary King's Close: accessibility",
        url: "https://www.realmarykingsclose.com/plan-your-visit/accessibility/",
        note: "Steps, enclosed spaces, mobility, age and sensory limitations.",
      },
      {
        title: "The Real Mary King's Close: plan your visit",
        url: "https://www.realmarykingsclose.com/plan-your-visit/",
        note: "Check-in and language preparation. Translations are not a promise of a live guide in each language.",
      },
    ]),
  },
  {
    id: "paris-arts-forains",
    slug: "let-pariss-old-fairground-objects-move",
    title: "Let Paris's old fairground objects move",
    summary:
      "Enter the Musée des Arts Forains on a guided visit where fairground collections are encountered through motion as well as looking.",
    field: "witness",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    ...common,
    ...guideImage("paris-arts-forains"),
    kernel:
      "Book an individual public guided visit at the Pavillons de Bercy. Follow the host through the fairground collections and join only the activities offered during your visit. The interesting change is from an object behind a label to an object that can still organise people's movement, sound and attention. You do not need to ride everything for the visit to work.",
    rootedness:
      "Bercy's former wine-store buildings now house a collection concerned with older fairground entertainments. The visit stages those objects as a shared encounter. It is not a current neighbourhood festival or a promise that every mechanism runs on demand.",
    shift:
      "From treating old entertainment as a display to noticing the social choreography an object can still create.",
    humanReturn:
      "A carousel or fairground game may begin to look like a way of arranging people, not only a machine.",
    responsibility:
      "There is no ordinary self-guided admission. Individual sessions are calendar-led, commonly on Wednesdays, weekends and school holidays, with tickets released around three weeks ahead. The venue recommends ages five and over. Ask about cobbles, mobility and the suitability of each offered activity. Participation and room access vary. Late-year festivals are separate programmes, not substitutes automatically covered by the same ticket.",
    evidence:
      "The museum describes a 90-minute guided public visit and optional interactive encounters. Its linked ticket calendar supplies dates and remaining places. EA has not attended or tested the mechanisms. The venue photograph shows a guided group in the collection, not a guarantee of the same host, rooms or rides.",
    duration: "Around 90 minutes on a booked public visit",
    participation:
      "Guided collection visit, with only the activities offered and suitable on the day",
    access:
      "Choose an individual guided visit through the museum's official page and linked ticket calendar. Confirm the language, Bercy meeting point and access needs. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Musée des Arts Forains: individual guided visits",
          url: "https://arts-forains.com/visite-grand-public/une-visite-insolite-a-paris",
          note: "90-minute format, age advice, participation, calendar pattern and booking window.",
        },
        {
          title: "Musée des Arts Forains: official public tickets",
          url: "https://arts-forains.tickeasy.com/fr-FR/accueil",
          note: "Venue-linked date-specific ticket calendar. Not a promise that every mechanism is available.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "kasukabe-flood-chamber",
    slug: "stand-inside-the-room-that-holds-back-a-flood",
    title: "Stand inside the room that holds back a flood",
    summary:
      "Take the basic public visit to Kasukabe's immense flood-control chamber and read its columns as working infrastructure.",
    field: "work",
    place: "Kasukabe, Saitama",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kasukabe",
    ...common,
    ...guideImage("kasukabe-flood-chamber"),
    kernel:
      "Choose the basic Underground Temple course at the Metropolitan Area Outer Underground Discharge Channel. Follow the explanation and staff-led access into the pressure-adjusting chamber when operations permit. Let the height of the columns give scale to a practical question: where does excess water go before it reaches homes? This is the standard public educational visit, not a deep-shaft or catwalk adventure.",
    rootedness:
      "Kasukabe's G-Cans facility is part of the region's flood-management system. Its public tour turns a normally unseen civic function into something you can understand spatially. The chamber's temple-like nickname is a visual comparison, not a sacred identity or permission to treat a working installation as a playground.",
    shift:
      "From seeing flood protection as a line on a map to feeling the scale of a room built for water.",
    humanReturn:
      "Ordinary storm drains may invite a larger question about the city they serve.",
    responsibility:
      "You must manage roughly 100 stairs independently. There is no lift, preschool children cannot join and younger participants require the specified adult supervision. Guiding is in Japanese, so arrange understanding rather than assuming an interpreter is supplied. Floors can be wet and dim. Wear secure footwear and follow staff. Flood operations can restrict or cancel the route, even after rain has stopped. Do not substitute a more demanding course if the basic visit is unavailable.",
    evidence:
      "The operator publishes a 55-minute basic course, public reservation rules and operational caveats. Individual bookings open one month ahead and close the previous evening, subject to capacity. EA has not toured the installation or audited its safety. The licensed chamber photograph is contextual, not evidence that its floor will be open on your date.",
    duration: "55 minutes for the confirmed basic course, plus check-in",
    participation:
      "Staff-led educational visit, not independent access, climbing or an adventure course",
    access:
      "Reserve the basic Underground Temple course through the official visitor site. Plan transport to Kasukabe independently and recheck operational notices before departure. No EA booking, transfer or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "G-Cans: public course formats",
          url: "https://gaikaku.jp/course/",
          note: "Basic 55-minute Underground Temple route, distinct from catwalk and extended courses.",
        },
        {
          title: "G-Cans: individual booking and participation rules",
          url: "https://gaikaku.jp/information_list/1347/",
          note: "Booking window, stairs, age, Japanese guiding and operating restrictions.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "zurich-hurlimann",
    slug: "float-above-zurichs-former-brewery",
    title: "Float above Zürich's former brewery",
    summary:
      "Take a warm-water pause at Hürlimannbad, where a former industrial site leads to a rooftop view across the city.",
    field: "restore",
    place: "Zürich",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "zurich",
    ...common,
    ...guideImage("zurich-hurlimann"),
    kernel:
      "Choose standard thermal-bath admission at Hürlimannbad rather than assuming a spa package. Move through the included bathing areas at an unhurried pace and use the rooftop pool if it is open and suitable for you. The city remains visible while the reason for stopping changes. You are spending time in water, not following another landmark route.",
    rootedness:
      "The Hürlimann name connects the site with Zürich's former brewery. Its current public bath is a reuse of industrial space, not a surviving historical bathing ritual. That change of purpose is part of what makes the pause specific to this city.",
    shift:
      "From looking for the next city view to spending a while inside one.",
    humanReturn:
      "A break can become a deliberate part of the day rather than the gap between attractions.",
    responsibility:
      "Swimwear is required for ordinary thermal bathing. Follow showering, quiet-use and pool rules. Children aged 15 and under are admitted only with an adult during the venue's specified daytime window, not late evenings. Ask about step-free access, temperature suitability and current closures before paying. This guide makes no health claims. Massages and the separate Roman-Irish format are not assumed to be included.",
    evidence:
      "The official venue publishes thermal-bath admission and practical rules, including child hours and last bathing time. EA has not bathed here or audited accessibility. The official rooftop photograph establishes the setting, not today's weather, crowd level, pool temperature or an uninterrupted view.",
    duration:
      "Allow a couple of hours as a suggestion. Follow the purchased ticket's terms",
    participation:
      "Independent public thermal bathing, with no treatment or instruction promised",
    access:
      "Use Hürlimannbad's official thermal-bath page to choose admission. Confirm rooftop availability, age arrangements and what your ticket covers. No EA booking, medical advice or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "Hürlimannbad Zürich: thermal bath",
        url: "https://www.aquaspa.ch/en/huerlimannbad-zuerich/offer/thermal-bath/",
        note: "Standard thermal-bath offer and rooftop setting, separate from treatment packages.",
      },
      {
        title: "Hürlimannbad Zürich: good to know",
        url: "https://www.aquaspa.ch/en/huerlimannbad-zuerich/plan-your-visit/good-to-know/",
        note: "Swimwear, behaviour, child-access window and practical restrictions.",
      },
    ]),
  },
  {
    id: "kyoto-shoseien",
    slug: "give-kyoto-one-unhurried-pond-loop",
    title: "Give Kyoto one unhurried pond loop",
    summary:
      "Step into Shōsei-en near Kyoto Station and let a pond, a bridge and changing viewpoints set a quieter pace.",
    field: "restore",
    place: "Kyoto",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    ...common,
    ...guideImage("kyoto-shoseien"),
    kernel:
      "Visit Shōsei-en during ordinary daytime garden admission. Walk without trying to collect every named feature. Stop once at the water, then move far enough for the same bridge or planting to arrange itself differently. It is a useful pause before or after a booked Kyoto activity, with no instructor and no promise of a spiritual result.",
    rootedness:
      "This is Higashi Honganji's detached garden, a temple-related landscape with historical rebuilding rather than an untouched fragment of old Kyoto. Paths, pond and framed views make a designed place available through the visitor's movement. Ordinary admission concerns the garden, not free entry to its buildings.",
    shift:
      "From treating a garden as a single photograph to noticing how the view changes with a few steps.",
    humanReturn:
      "You may find a quieter way to look even when the next place is busy.",
    responsibility:
      "Keep to permitted paths and respect the garden as temple property. Buildings are normally closed to ordinary visitors. Food, smoking, tripods, selfie sticks and drones are restricted. Drinking for hydration is a different matter from picnicking. Commercial photography needs advance permission. Opening and last-entry times shorten in winter. Ask about path access if you use a wheelchair or mobility aid. A special evening event is not included or guaranteed.",
    evidence:
      "Higashi Honganji publishes ordinary garden admission, seasonal hours and use restrictions. Japan's tourism interpretation database provides historical context. EA has not walked or locally validated the garden. The licensed photograph is a previous view of the actual pond bridge, not a guarantee of foliage, light or access on your date.",
    duration:
      "Allow 45 to 75 minutes as an editorial suggestion, within opening hours",
    participation: "Self-paced daytime garden walking and looking",
    access:
      "Check Shōsei-en's official admission page and last-entry time before arriving. Pay the requested admission contribution at the garden. No private building access, guided ritual or EA booking is implied.",
    guideReview: review("public_admission", [
      {
        title: "Higashi Honganji: Shōsei-en admission",
        url: "https://www.higashihonganji.or.jp/about/guide/shoseien/guide/",
        note: "Official Japanese hours, ordinary garden scope and visitor restrictions.",
      },
      {
        title: "Japan Tourism Agency: Shōsei-en interpretation",
        url: "https://www.mlit.go.jp/tagengo-db/en/R3-00090.html",
        note: "Historical garden context, separate from today's operational information.",
      },
    ]),
  },
  {
    id: "vancouver-bloedel",
    slug: "step-under-vancouvers-planted-dome",
    title: "Step under Vancouver's planted dome",
    summary:
      "Give Bloedel Conservatory a slow indoor circuit, paying attention to leaves and light rather than adding another city lookout.",
    field: "restore",
    place: "Vancouver",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    ...common,
    ...guideImage("vancouver-bloedel"),
    kernel:
      "Enter Bloedel Conservatory in Queen Elizabeth Park and follow the planted interior at your own pace. Pick a leaf shape or a changing patch of light to notice again as the path turns. Let the enclosure make a small pause possible when the city's weather is less inviting. This is a botanical visit, not a rainforest expedition or a quietness guarantee.",
    rootedness:
      "Vancouver's 1969 conservatory sits within a public city park. Its dome contains cultivated tropical and subtropical plants alongside captive birds. They do not represent a wild British Columbia ecosystem. The local story is the city's decision to maintain a planted indoor landscape.",
    shift:
      "From looking over a city to giving one small cultivated environment your attention.",
    humanReturn:
      "The different geometry of a few leaves can outlast the memory of a panorama.",
    responsibility:
      "Birds live in the enclosure, so expect calls and movement rather than silence. Do not feed, pursue or handle them. The interior is warm and humid. The city lists wheelchair, scooter and walker access and offers sensory kits, but confirm your specific needs before travelling. Only permitted service animals may enter. Children need the venue's specified supervision. Last entry precedes closing and winter hours differ. No wellbeing or medical benefit is promised.",
    evidence:
      "The City of Vancouver publishes current admission, opening, access and sensory information for its conservatory. Its park page locates the dome within Queen Elizabeth Park. EA has not visited or audited accessibility or animal care. The CC0 photograph shows the actual cultivated interior, not current plant displays or wildlife in the wild.",
    duration: "Allow 30 to 60 minutes as a self-paced planning suggestion",
    participation:
      "Indoor botanical observation, with no guided class or animal interaction",
    access:
      "Use the city's Bloedel Conservatory page for current admission and its linked ticket provider, or check desk admission. Plan any park walk separately. No EA booking or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "City of Vancouver: Bloedel Conservatory",
        url: "https://vancouver.ca/parks-recreation-culture/bloedel-conservatory.aspx",
        note: "Official admission, plants and captive birds, seasonal hours, access and sensory provisions.",
      },
      {
        title: "City of Vancouver: Queen Elizabeth Park",
        url: "https://vancouver.ca/parks-recreation-culture/queen-elizabeth-park.aspx",
        note: "Public park context and location. Does not establish that all park paths match conservatory access.",
      },
    ]),
  },
  {
    id: "dublin-cobblestone",
    slug: "leave-room-for-dublins-next-tune",
    title: "Leave room for Dublin's next tune",
    summary:
      "Listen to the front-bar traditional session at the Cobblestone without treating a musicians' gathering as a stage you have booked.",
    field: "gather",
    place: "Dublin",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    ...common,
    ...guideImage("dublin-cobblestone"),
    kernel:
      "Check the Cobblestone's front-bar session schedule, find an appropriate place and listen. Notice how one player starts a tune and how the others find the next turn. Leave space for the conversation and pauses too. Your useful role can simply be to hear the music without talking across it or turning the group into content for your phone.",
    rootedness:
      "A traditional session is a social way of making music, not necessarily a concert with a fixed beginning and end. The Smithfield pub's own guidance places musicians and listening at the centre. The front-bar session is separate from ticketed backroom events or dance classes.",
    shift:
      "From asking for a performance to recognising a room in which music is being shared.",
    humanReturn:
      "A tune may stay with you partly because you gave its players room.",
    responsibility:
      "Keep musicians' spaces free and give up a seat when it is needed by a player. Do not use flash photography or video. Ask the session lead before joining with an instrument. No seats or specific players are guaranteed. The pub does not take ordinary reservations or serve food. Under-18s must leave by 9pm according to its current guidance. Check other entry rules, noise tolerance and mobility directly. Buying alcohol is not necessary to define the musical value of the visit.",
    evidence:
      "The venue publishes front-bar sessions seven days a week and explicit listening etiquette. Visit Dublin identifies the pub and its music setting. EA has not attended or assessed the players. The official photograph depicts musicians in the bar, not a promised line-up on your date.",
    duration:
      "Stay for the part of a session that suits you. Start times vary by day",
    participation:
      "Respectful listening in a public pub, not an included lesson or automatic invitation to play",
    access:
      "Check the Cobblestone's session page and current entry conditions before visiting Smithfield. Front-bar access is not a backroom-event ticket. No EA reservation or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "The Cobblestone: traditional music sessions",
          url: "https://www.cobblestonepub.ie/irish-traditional-music-sessions",
          note: "Public front-bar schedule, musicians' space, listening and photography rules.",
        },
        {
          title: "The Cobblestone: visitor information",
          url: "https://www.cobblestonepub.ie/",
          note: "No ordinary reservations, no food and under-18 departure rule.",
        },
        {
          title: "Visit Dublin: The Cobblestone",
          url: "https://www.visitdublin.com/cobblestone",
          note: "Official tourism context, not validation of a future session's line-up.",
        },
      ],
      "2026-11-15",
    ),
  },
  {
    id: "new-orleans-bacchanal",
    slug: "let-a-bywater-backyard-set-the-evening",
    title: "Let a Bywater backyard set the evening",
    summary:
      "Find a place at Bacchanal for a live-music evening where the courtyard, the table and the listening share the frame.",
    field: "gather",
    place: "New Orleans",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-orleans",
    ...common,
    ...guideImage("new-orleans-bacchanal"),
    kernel:
      "Check Bacchanal's current music programme before heading to Bywater. Find an available table or standing space and order only what you want. Let the band's set give the evening some shape without trying to make the room conform to your plans. A shared table, if others welcome it, can be part of the experience rather than an inconvenience to remove.",
    rootedness:
      "This is a particular neighbourhood wine-shop and live-music setting, not a claim to represent all New Orleans music. Its backyard arrangement makes food, conversation and listening overlap. The venue's public invitation is hospitality, not access to someone else's private gathering.",
    shift:
      "From booking an evening as a sequence of attractions to letting one room hold it together.",
    humanReturn:
      "You may remember the way a set changed the table's attention as much as a particular song.",
    responsibility:
      "Entry is strictly 21 and over, including no babies or children with adults. Everyone needs accepted valid ID. Tables are first come, first served and cannot be reserved. Do not assume a seat, a specific band or clear weather. Confirm the current calendar and access needs. The FAQ describes an indoor option in rain, not a guarantee of the same courtyard experience. Food and drinks are purchased separately. Non-alcoholic drinks are advertised.",
    evidence:
      "The venue publishes a music programme and explains age rules, ID, shared seating and weather arrangements in its FAQ. EA has not attended, eaten or independently reviewed a set. The official courtyard photograph shows a past evening, not today's musicians, table availability or crowd level.",
    duration:
      "Choose part of a current set or a longer evening. There is no fixed guided duration",
    participation:
      "Public live-music hospitality, with food and drinks ordered separately",
    access:
      "Check Bacchanal's official music page and FAQ, then visit the Bywater venue during current public hours. Do not treat a saved EA guide as a table reservation. No EA booking or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Bacchanal: music programme",
          url: "https://www.bacchanalwine.com/music",
          note: "Venue's changing music calendar. Confirm the current set before travelling.",
        },
        {
          title: "Bacchanal: visitor FAQ",
          url: "https://www.bacchanalwine.com/faq",
          note: "Strict 21-plus entry, accepted ID, first-come seating, weather alternatives and non-alcoholic options.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "paris-rosa-bonheur",
    slug: "let-a-paris-guinguette-open-the-evening",
    title: "Let a Paris guinguette open the evening",
    summary:
      "Check the dance programme at Rosa Bonheur in Buttes-Chaumont and give a park-side gathering room to become an evening.",
    field: "gather",
    place: "Paris",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    ...common,
    ...guideImage("paris-rosa-bonheur"),
    kernel:
      "Choose Rosa Bonheur's Buttes-Chaumont location, then check what is actually programmed on your date. Come for the social setting and stay for a dance event only if it is happening and feels right for you. There is no need to perform expertise. Listen, make room and let shared movement be an invitation rather than an obligation.",
    rootedness:
      "A guinguette connects informal hospitality with music and gathering. This contemporary Paris venue adapts that idea within Buttes-Chaumont. It is an inclusive public social space, not a reconstruction of every historical guinguette or the same experience as the brand's riverfront locations.",
    shift:
      "From using a park only as daytime scenery to seeing how a public evening can gather around it.",
    humanReturn:
      "A familiar city can feel less finished when you leave room for a social rhythm you did not plan.",
    responsibility:
      "The venue does not take ordinary reservations. Capacity, queues, weather and entry rules can affect access. A dance floor is not guaranteed throughout opening hours. Confirm the event, age conditions, language needs and physical access directly. Respect consent, personal space and other visitors' privacy. Food and drinks are separate purchases. Do not assume a special event has the same admission terms as an ordinary visit.",
    evidence:
      "The official Buttes-Chaumont page publishes its location, Wednesday-to-Sunday pattern and current dance programming. Its Comme à la Maison listing provides an identifiable social event, including an upcoming October date at the check. EA has not attended or reviewed the atmosphere. The credited photograph shows the actual venue's gathering space, not a promised crowd or programme.",
    duration:
      "A self-chosen part of an evening, according to the actual event and opening times",
    participation:
      "Public social hospitality and optional dancing when programmed",
    access:
      "Check the Buttes-Chaumont page and the date-specific programme for 2 allée de la Cascade. Arrive with flexibility rather than a guaranteed table or dance admission. No EA booking or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Rosa Bonheur: Buttes-Chaumont",
          url: "https://rosabonheur.fr/lieu/rosa-bonheur-buttes-chaumont/",
          note: "Specific venue, current opening pattern, no-reservation policy and programme links.",
        },
        {
          title: "Rosa Bonheur: Comme à la Maison",
          url: "https://rosabonheur.fr/events/event/comme-a-la-maison/",
          note: "Identifiable public dance gathering. Dates and special-entry conditions can change.",
        },
      ],
      "2026-11-10",
    ),
  },
];
