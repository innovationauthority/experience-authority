import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: NonNullable<PublicExperience["guideReview"]>["scope"],
  sources: [string, string, string][],
  reviewBy = "2027-01-18",
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-21",
  reviewBy,
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "berlin-konnopke-currywurst",
    slug: "eat-currywurst-beneath-berlins-elevated-railway",
    title: "Eat currywurst beneath Berlin's elevated railway",
    field: "taste",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    place: "Berlin, Prenzlauer Berg",
    summary:
      "At Konnopke's Imbiss, a portion of currywurst places you under the U-Bahn and inside one of Berlin's everyday food rhythms.",
    kernel:
      "Start by reading the menu, then order a portion you can finish. Notice how the sausage, sauce and curry powder behave together before adding anything else. If you want a plant-based version, ask what is available and how it is prepared. Step out of the ordering line to eat. Above you, trains move through the neighbourhood while the kiosk keeps its own pace below. That overlap is part of the visit. Give the setting a few minutes instead of treating the food as a prop to hold in front of a landmark.",
    rootedness:
      "The family's account traces Konnopke's to 1930 and its introduction of currywurst to 1960. Visit Berlin also identifies the kiosk beneath the elevated railway at Schönhauser Allee. These sources establish a particular Berlin business and setting. They do not settle the invention of currywurst or make this portion the city's definitive version. A quick meal can still reveal how a city uses the spaces beneath its infrastructure.",
    shift:
      "An ordinary takeaway becomes a small lesson in how Berlin fits food and movement together.",
    humanReturn:
      "Leave with a taste you can describe and a recognisable corner of the city that now means more than its station name.",
    responsibility:
      "Check the official opening day before travelling. The published schedule closes on Mondays and Sundays. Ask about meat, plant-based ingredients, sauces and shared cooking surfaces. A vegan menu option is not a guarantee against allergen cross-contact. Keep cycle lanes, pavements and the service queue clear. Ask before photographing workers or customers. Confirm accessible ordering and seating if needed. The historical food photograph is not a promise of today's portion or packaging.",
    evidence:
      "The operator and Berlin's destination organisation confirm the public kiosk and its location. EA has not tasted a current serving, assessed hygiene or independently ranked the business.",
    duration: "Allow 20 to 40 minutes, plus any queue",
    participation: "An ordinary kiosk purchase and self-directed tasting",
    access:
      "Visit the current Konnopke's kiosk at Schönhauser Allee 44B and pay directly. No hosted tasting, reserved table or EA booking is included.",
    guideReview: review("public_hospitality", [
      [
        "Konnopke's: menu, location and opening",
        "https://www.konnopke-imbiss.de/en",
        "Primary information for the current kiosk and family history.",
      ],
      [
        "Visit Berlin: Konnopke's",
        "https://www.visitberlin.de/en/konnopke",
        "Destination authority corroboration of the railway setting and public food stop.",
      ],
    ]),
  },
  {
    id: "london-manze-pie-mash",
    slug: "learn-what-liquor-means-at-a-london-pie-shop",
    title: "Learn what liquor means at a London pie shop",
    field: "taste",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, Bermondsey",
    summary:
      "Order pie, mash and parsley liquor at M. Manze on Tower Bridge Road. The unfamiliar word on the menu leads into a very familiar kind of lunch.",
    kernel:
      "Ask for the current pie-and-mash options and find out what the green liquor contains before ordering. Here, liquor means the parsley sauce served with the meal. Taste the pie, potato and sauce separately, then together. Notice how pastry and filling change once they meet the sauce. Follow the shop's ordering system and keep longer questions for a quiet moment. If you use a table condiment, start with a little. The point is to discover the meal's balance for yourself, not to perform a supposedly correct Londoner routine.",
    rootedness:
      "Michele Manze bought the Tower Bridge Road shop in 1902 after his family had moved from southern Italy to Britain. The business's own history makes that migration part of the story of a food now associated with London. This guide concerns the Bermondsey address, not another business carrying the Manze surname. It is a working lunch shop, not a staged historical dining room or a claim that every London neighbourhood eats the same way.",
    shift:
      "A local staple becomes more interesting when its history includes arrivals as well as continuity.",
    humanReturn:
      "Take away a new meaning for one word and a practical lunch stop near the river's south side.",
    responsibility:
      "Check Tower Bridge Road's own hours, which differ from the other branches and delivery service. Ask directly about wheat, soy, meat, sauce ingredients and cross-contact. The operator lists a vegan pie, but availability and preparation should be confirmed at the shop. This guide does not recommend eel dishes. Confirm step-free access and available seating. Photograph your own meal without including other diners or interrupting service.",
    evidence:
      "M. Manze publishes the address, pie and liquor descriptions and the family's account of the shop. EA has not eaten there, inspected ingredients or verified the current serving against the historical photograph.",
    duration: "Allow 30 to 60 minutes",
    participation:
      "A self-directed lunch through an ordinary restaurant purchase",
    access:
      "Use the official opening information for 87 Tower Bridge Road, London SE1 4TW. Eat-in and takeaway arrangements are the shop's own. This is not a tasting tour. No EA booking or reservation is provided.",
    guideReview: review("public_hospitality", [
      [
        "M. Manze: food and shop history",
        "https://www.manze.co.uk/",
        "Primary descriptions of pie, mash, parsley liquor and the Tower Bridge Road branch.",
      ],
      [
        "M. Manze: branch opening times",
        "https://www.manze.co.uk/opening-times",
        "Check the specific branch rather than online delivery availability.",
      ],
    ]),
  },
  {
    id: "noto-sicilia-almond-granita",
    slug: "taste-almond-as-granita-in-noto",
    title: "Taste almond as granita in Noto",
    field: "taste",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "noto",
    place: "Noto, Sicily",
    summary:
      "At Caffè Sicilia, order almond granita and give its changing texture a little time. A cold spoonful offers another way into a Sicilian morning.",
    kernel:
      "Check which flavours are available, then choose almond granita on its own or alongside a separate small tasting of another flavour. Begin before adding cream or taking a bite of brioche. Notice the texture at the edge of the serving and again after it has softened slightly. If you order brioche, compare its warmth and crumb with the cold granita. You do not need a large tasting menu to make this rewarding. Let a modest order become a pause in your walk along Corso Vittorio Emanuele.",
    rootedness:
      "The café's current menu places almond among its granita flavours and offers different serving sizes. In Noto, that makes an ingredient an accessible point of attention alongside the city's more immediately visible architecture. The business dates itself to 1892. Its reputation is not proof that every visitor will prefer its version, and this guide does not award it a best-in-Sicily label. The useful invitation is to taste carefully at one identifiable public café.",
    shift:
      "A familiar nut becomes something you notice through temperature and texture rather than crunch.",
    humanReturn:
      "Leave knowing whether you prefer the first frozen spoonful or the softer one that follows.",
    responsibility:
      "Almond is a tree nut. Ask about other allergens, dairy, egg in brioche and shared preparation. Check the current menu and table-service charge before ordering. Flavours and portions can change with the season. The website's opening information is inconsistent about late closing, so confirm hours if planning an evening visit. Ask about accessible entry and seating. Do not assume a photograph establishes the ingredients of your serving.",
    evidence:
      "The café's own current menu explicitly lists almond granita and separate tasting formats. EA has not tasted the present recipe or independently verified ingredient provenance, awards or comparative quality.",
    duration: "Allow 30 to 45 minutes",
    participation: "An ordinary café purchase and self-directed tasting",
    access:
      "Visit Caffè Sicilia at Corso Vittorio Emanuele 125 in Noto. Order from the current café menu and pay directly. No workshop, kitchen access or EA reservation is included.",
    guideReview: review("public_hospitality", [
      [
        "Caffè Sicilia: location and café",
        "https://www.caffesicilia.it/",
        "Primary café information and source of the documentary product photograph.",
      ],
      [
        "Caffè Sicilia: current published menu",
        "https://www.caffesicilia.it/wp-content/uploads/2026/10/31-menu-A5.pdf",
        "Lists almond granita, serving formats, brioche and table-service charge. Availability must be checked on the day.",
      ],
    ]),
  },
  {
    id: "seoul-hwiho-mother-of-pearl",
    slug: "arrange-mother-of-pearl-into-a-small-seoul-object",
    title: "Arrange mother-of-pearl into a small Seoul object",
    field: "make",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul, Hapjeong",
    summary:
      "In HWIHO's one-day class, decorate a small object with mother-of-pearl pieces and discover how much a surface can change as you turn it toward the light.",
    kernel:
      "Choose from the objects available for your booked class, such as a ring box or keyring. Before fixing anything, turn a piece of mother-of-pearl in the light and notice the colours that appear at different angles. Lay out a small arrangement and leave some of the surface empty. Ask the teacher how to place and secure the fragments, then work slowly enough to adjust the spacing. Follow the studio's finishing instructions and find out when the object can be handled or packed. A simple arrangement is enough to reveal the material's character.",
    rootedness:
      "HWIHO is a Seoul studio teaching najeon and lacquer-related craft. Its published programme distinguishes a short decorative class from regular teaching in traditional techniques. That difference matters. Decorating a prepared object with mother-of-pearl is a real introduction, but it is not the same as building and finishing a traditional lacquerware piece from the beginning. The encounter offers a way to notice a material and ask better questions about more elaborate work later.",
    shift:
      "The decoration changes even when your design stays still, because the light becomes part of the surface.",
    humanReturn:
      "Keep an object you arranged yourself and a more attentive eye for Korean mother-of-pearl work.",
    responsibility:
      "Reserve the one-day class in advance and confirm the object, fee, duration, language, minimum age and finishing or collection time. The bilingual website does not itself guarantee English instruction on your date. The studio lists a fourth-floor address, so confirm lift access and seating needs before paying. Follow guidance for adhesives and sharp fragments. Do not equate the short class with full traditional lacquer training or assume every photographed object is a beginner outcome.",
    evidence:
      "The official class page confirms public one-day mother-of-pearl decoration and gives the studio's contact route. EA has not attended, assessed teaching or verified live availability.",
    duration: "Confirm the session length and any finishing time when booking",
    participation: "A booked, guided mother-of-pearl decoration class",
    access:
      "Contact HWIHO through its official reservation page for Unit 401, 364-27 Hapjeong-dong, Mapo-gu. Obtain a confirmed class before travelling. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      [
        "HWIHO: one-day and regular classes",
        "https://hwiho.imweb.me/Class",
        "Distinguishes small-object decoration from regular traditional craft teaching.",
      ],
      [
        "HWIHO: reservations and contact",
        "https://hwiho.imweb.me/Reservation",
        "Primary route to confirm a class, language and fourth-floor access.",
      ],
    ]),
  },
  {
    id: "hoi-an-taboo-bamboo",
    slug: "make-a-small-bamboo-object-in-hoi-an",
    title: "Make a small bamboo object in Hội An",
    field: "make",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hoi-an",
    place: "Hội An, Cẩm Thanh",
    summary:
      "At Taboo Bamboo Workshop, work with a local maker to turn bamboo into a small usable object. The hollow stem becomes something you understand through your hands.",
    kernel:
      "Agree a realistic object with the workshop before starting. Look at the bamboo's nodes, hollow centre and direction of growth, then ask how those features affect the design. Follow the instructor's order of work and leave cutting or powered operations to the person authorised to do them. Take time over the parts you can safely shape, smooth or assemble. Before leaving, ask how the object should be dried, finished and cared for. The most useful souvenir may be recognising why a material accepts one idea and resists another.",
    rootedness:
      "Taboo's own site identifies its bamboo craft practice in Cẩm Thanh. Hội An Creative City describes visitors learning through making with the workshop. The local connection is a living material practice, not a claim that every bamboo object is automatically sustainable or that a short class reproduces a family's expertise. The wider workshop makes more complex products, but a visitor should choose an achievable project rather than expect to build a bicycle or a large piece of furniture.",
    shift:
      "Bamboo stops being a decorative shorthand for place and becomes a material with limits, joints and possibilities.",
    humanReturn:
      "Leave with a small object, practical care advice and a better understanding of the maker's decisions.",
    responsibility:
      "Book directly and confirm the meeting point in Cẩm Thanh, project, duration, language, age limits, supervision and total price. Different projects need different time and tools. Ask about accessibility, dust, ventilation and any adhesives if these affect you. Wear suitable closed footwear and follow eye-protection instructions. Do not cut living bamboo or collect materials yourself. Check your destination's rules for taking plant-based objects home.",
    evidence:
      "The workshop's official site establishes the craft business and contact details. The city's creative-network article corroborates visitor participation. EA has not taken a class, assessed tool safety or independently audited material sourcing.",
    duration:
      "Confirm the chosen project and allow a generous half-day in your itinerary",
    participation: "A prebooked, supervised bamboo-making session",
    access:
      "Arrange the visitor workshop through Taboo Bamboo Workshop's published contact details. Confirm the exact location and session before travelling. This guide does not include transport, a private home visit or an EA reservation.",
    guideReview: review("public_programme", [
      [
        "Taboo Bamboo Workshop: official site",
        "https://tabooworkshop.com/",
        "Primary craft business, Cẩm Thanh location and booking contact.",
      ],
      [
        "Hội An Creative City: Taboo Bamboo Workshop",
        "https://hoiancreativecity.com/en/taboo-bamboo-workshop-hoi-an",
        "Municipal creative-city account of hands-on visitor participation and documentary workshop photographs.",
      ],
    ]),
  },
  {
    id: "ravenna-koko-mosaic",
    slug: "set-a-small-mosaic-in-ravenna",
    title: "Set a small mosaic in Ravenna",
    field: "make",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "ravenna",
    place: "Ravenna",
    summary:
      "Spend two hours placing tesserae into mortar at Koko Mosaico. A small design makes Ravenna's mosaic language tangible, one decision at a time.",
    kernel:
      "Choose a design from the studio's beginner selection, then compare the materials and colours available. Watch how the mortar is prepared and the drawing transferred before setting the first pieces. Pay attention to the direction of a row as much as its colour. Leave enough room to see how one edge meets the next. Ask for help before cutting or handling unfamiliar tools, and use the instructor's guidance to keep the project manageable. At the end, find out how to carry and care for the fresh mosaic even if it is ready to take away.",
    rootedness:
      "Ravenna's relationship with mosaic is not confined to historic monuments. Koko Mosaico maintains a contemporary working studio and offers short public courses. Its two-hour format uses cement mortar and a small design, with marble, smalti or ceramic pieces according to the chosen project. The lesson is an introduction to material and composition, not conservation training or access to a protected ancient surface. Trying the process can change how you look at the city's larger works afterward.",
    shift:
      "A mosaic becomes a sequence of placements rather than a picture made from anonymous little squares.",
    humanReturn:
      "Take home a small work and one specific detail to look for when you next stand before a mosaic.",
    responsibility:
      "Book the two-hour course explicitly. The studio also offers half-day, family and intensive formats with different sizes and requirements. Confirm language, minimum age, step-free access and any handling restrictions before paying. The tourism listing mentions cutting tools, but do not assume unsupervised cutting is included for every participant. Follow instructions around sharp edges and mortar. Do not describe a beginner piece as an ancient technique mastered in an afternoon.",
    evidence:
      "The current studio page confirms a two-hour course and an approximately 10 by 10 centimetre project. Ravenna's destination programme independently lists the workshop and booking requirement. EA has not attended or assessed instruction.",
    duration: "Two hours, plus arrival and packing time",
    participation: "A booked, guided small-mosaic workshop",
    access:
      "Reserve directly with Koko Mosaico at Via di Roma 136. Its calendar says short courses are available year-round by appointment. Confirm your slot rather than assuming the tourism listing guarantees a daily departure. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Koko Mosaico: two-hour course",
        "https://kokomosaico.com/en/courses/two-hour-mosaic-workshop-ravenna",
        "Primary description of materials, method, duration and approximate project size.",
      ],
      [
        "Koko Mosaico: current course calendar",
        "https://kokomosaico.com/en/courses/calendar",
        "Short courses are by appointment, distinct from dated intensive courses.",
      ],
      [
        "Ravenna Città del Mosaico: public short class",
        "https://www.ravennacittadelmosaico.it/en/activity/tour-short-class-of-mosaic-in-ravenna/",
        "Destination listing corroborates visitor access, address and Italian or English teaching. Confirm the booked language.",
      ],
    ]),
  },
  {
    id: "new-york-roosevelt-island-tram",
    slug: "cross-the-east-river-above-the-traffic",
    title: "Cross the East River above the traffic",
    field: "move",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    place: "New York, Roosevelt Island",
    summary:
      "Use the Roosevelt Island Tram as a real crossing. Manhattan rises around the cabin, then the river opens beneath it and the island gives the journey somewhere to go.",
    kernel:
      "Board at the Manhattan terminal and leave room for people using the tram to get home. As the cabin rises, notice the street grid below and the bridge beside you. Follow one building or river landmark through the changing angle instead of trying to photograph everything. Disembark on Roosevelt Island and allow time for a public waterfront walk before deciding how to return. Even a short pause at river level helps make sense of the view you just crossed. The experience is a journey between neighbourhoods, not a cabin hired for sightseeing.",
    rootedness:
      "Roosevelt Island Operating Corporation describes the tram as year-round public transport connecting the island with Manhattan. It began as an interim connection in 1976 and became a lasting part of the island's transport network. Its visual drama comes from a practical need to cross the East River. Keeping that commuter purpose in mind makes the ride more considerate and more interesting than treating everyone else aboard as background scenery.",
    shift:
      "A skyline becomes something you move through on the way to an inhabited island.",
    humanReturn:
      "Leave with a clearer sense of the river, the bridge and the neighbourhood between Manhattan and Queens.",
    responsibility:
      "Check service notices before setting out and avoid commuter peaks where possible. Use the current MTA fare and OMNY guidance, not old visitor advice about payment. A return trip requires a separate boarding and applicable fare. The operator lists accessible cabins and mobility-device access, but confirm terminal lift availability if essential. Do not obstruct doors or crowd a window. Weather and maintenance can affect operation, and no particular light or view is guaranteed.",
    evidence:
      "RIOC confirms the route, public fare system and access information. EA has not ridden the current service or checked same-day lift operation. The photograph records the transport system rather than a reserved experience.",
    duration:
      "Allow 30 to 60 minutes for the crossing and an initial island pause",
    participation: "An ordinary public-transport journey",
    access:
      "Use the Manhattan terminal at East 60th Street and Second Avenue or Roosevelt Island's Tramway Plaza. Pay through the current published fare system. No tour or priority boarding is included. No EA ticket or booking is provided.",
    guideReview: review("public_admission", [
      [
        "RIOC: tram information",
        "https://www.rioc.ny.gov/community/transportation/tram",
        "Current official route, payment, schedule and accessibility information.",
      ],
      [
        "NYC 311: Roosevelt Island Tram",
        "https://portal.311.nyc.gov/article/?kanumber=KA-01618",
        "City information for the public transport connection.",
      ],
    ]),
  },
  {
    id: "singapore-treetop-canopy-walk",
    slug: "walk-at-canopy-height-in-singapore",
    title: "Walk at canopy height in Singapore",
    field: "move",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Central Catchment Nature Reserve",
    summary:
      "Reach the TreeTop Walk on a proper forest outing, then cross a suspended bridge that brings the canopy close enough to notice as a living layer.",
    kernel:
      "Begin with the official route map and a realistic turnaround time. The bridge is only one part of the outing, so use the approach to notice changes in shade, leaf shape and sound. At the TreeTop Walk, follow the one-way direction and keep moving where the path narrows. Look across the canopy as well as down through it. A tree viewed from its upper branches has a different scale from one seen at ground level. Continue along the permitted return route without treating the bridge as a place to linger across the full width.",
    rootedness:
      "NParks places this public route within Singapore's Central Catchment Nature Reserve. The 250-metre suspension bridge is reached through a much longer walking circuit. That relationship matters more than a dramatic photograph of the crossing alone. This is an urban country's protected forest infrastructure, not a theme-park walkway or a shortcut through untouched wilderness. The visit depends on managed access and the space given to other walkers and wildlife.",
    shift:
      "The forest becomes layered, with the canopy revealed as habitat rather than a green ceiling.",
    humanReturn:
      "Carry away a stronger sense of Singapore's forest and a walk you planned according to its actual demands.",
    responsibility:
      "NParks describes the outing as roughly seven kilometres and three to four hours, with moderate-to-difficult terrain. It is not suitable for everyone, including visitors with some mobility or height-related limitations. Read the operator's suitability guidance before committing. Bring water, appropriate footwear and weather protection. The bridge closes on Mondays except public holidays and has a last-entry time. Check current alerts, lightning and trail closures. Do not feed or approach macaques, leave litter, bring pets or enter closed paths.",
    evidence:
      "NParks publishes the route length, estimated duration, bridge hours and suitability cautions. EA has not walked the current trail or verified same-day conditions. Wildlife encounters and clear weather are not promised.",
    duration:
      "Allow three to four hours for the approximately seven-kilometre outing",
    participation:
      "A self-guided public forest walk with a one-way canopy crossing",
    access:
      "Plan through NParks' Central Catchment hiking information and current notices. Reach the designated trailhead and allow enough time for the full return. No guide, transport or EA reservation is included.",
    guideReview: review("public_observation", [
      [
        "NParks: Central Catchment hiking routes",
        "https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve/activities/hiking-nature-walk",
        "Primary route, duration, hours, suitability and safety guidance.",
      ],
      [
        "NParks: Central Catchment Nature Reserve",
        "https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve",
        "Official reserve information and current visitor notices.",
      ],
    ]),
  },
  {
    id: "rio-sugarloaf-two-stage-ascent",
    slug: "read-rio-between-two-cable-car-stations",
    title: "Read Rio between two cable-car stations",
    field: "move",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    place: "Rio de Janeiro, Urca",
    summary:
      "Take the two-stage ascent to Sugarloaf and compare the city from Morro da Urca before continuing higher. A familiar view becomes a lesson in Rio's shape.",
    kernel:
      "Give the first stop time. At Morro da Urca, find the coastline and trace how streets fit between hills and water. Choose one feature to follow, then look for it again after the second cable-car ride to Pão de Açúcar. The change in height alters its relation to everything around it. Use the signed viewing areas and leave space for other visitors. On the way down, notice which details have become easier to place. You do not need to add a premium experience to make the ordinary route revealing.",
    rootedness:
      "The public Bondinho route connects Praia Vermelha, Morro da Urca and Pão de Açúcar in two stages. It is one of Rio's recognisable experiences, and recognisability does not make it less worthwhile. The useful distinction is how you approach it. Pausing at both levels makes the geography legible rather than reducing the whole visit to one summit photograph. This is a ticketed attraction with managed platforms, shops and other visitors, not a solitary mountain ascent.",
    shift:
      "The celebrated panorama becomes a map you can read instead of a view you only recognise.",
    humanReturn:
      "Leave better able to place Rio's hills, beaches and bay in relation to one another.",
    responsibility:
      "Buy through the operator's current ticket route and check the correct visitor category and required identification. Ordinary tickets and fast-access products have different conditions. Rain does not automatically stop operation, but strong wind or lightning can suspend the cars. Visibility and sunset colour are never guaranteed. Confirm accessible routes and assistance needs directly. Stay behind barriers, keep belongings secure and do not feed wildlife. Allow time for queues and the descent.",
    evidence:
      "The operator confirms the four boardings of the complete same-day return route and publishes weather and ticket conditions. EA has not inspected current operation or assessed a particular day's visibility.",
    duration: "Allow two to three hours, with extra time for queues",
    participation:
      "A public cable-car return journey with self-directed viewing stops",
    access:
      "Book the ordinary complete route through Parque Bondinho Pão de Açúcar. Check the selected time and current operating notices. Backstage visits, helicopter flights and guided extras are separate and not included here. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Parque Bondinho: official tickets and visitor information",
        "https://www.bondinho.com.br/pt",
        "Primary public access route for the Sugarloaf cable cars.",
      ],
      [
        "Parque Bondinho: frequently asked questions",
        "https://bondinho.com.br/perguntas-frequentes",
        "Current ticket categories, weather interruptions and visitor conditions.",
      ],
    ]),
  },
  {
    id: "edinburgh-camera-obscura-live-city",
    slug: "watch-edinburgh-appear-on-a-table",
    title: "Watch Edinburgh appear on a table",
    field: "learn",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    place: "Edinburgh, Castlehill",
    summary:
      "Climb to Camera Obscura's rooftop chamber in daylight and watch the city arrive on a table through light and reflections, without becoming a screen recording.",
    kernel:
      "Ask on arrival when the live optical show is running and plan your climb around its allocated slot. In the dark chamber, let your eyes adjust as the guide brings the image onto the table. Look for a small movement that tells you the city is happening now. Follow how a familiar street changes when you see it flattened into light. Afterward, compare the projected view with the rooftop panorama. The two ways of looking can make a street you already walked feel newly understandable.",
    rootedness:
      "Camera Obscura's historic chamber sits above Castlehill. The operator explains that daylight and reflections project a live city image inside. After dark or in poor conditions, it substitutes recorded projection footage. Both are offered visitor experiences, but they are not the same thing. This guide prioritises the live optical encounter and tells you how to check for it. The building also contains a large commercial collection of illusions, which may make the visit lively rather than quiet.",
    shift:
      "The city becomes an optical event, and you begin to notice the difference between seeing a place and seeing its image.",
    humanReturn:
      "Take away a simple physical explanation for an effect that initially feels improbable.",
    responsibility:
      "There are 98 steps to the upper level and no lift. This route is not wheelchair accessible. Check the detailed accessibility guide for stairs, dark rooms, flashing-light exhibits and quieter spaces. Book a daylight admission and ask about the live show, since daylight alone does not guarantee suitable weather. The allocated show time is given on arrival. Keep passageways clear and follow photography instructions inside the chamber.",
    evidence:
      "The operator describes the live optical process, recorded fallback and show allocation. Its accessibility information establishes the stair-only route. EA has not attended the current show or tested conditions on a particular date.",
    duration:
      "Allow around two hours for the building, including the allocated show",
    participation:
      "A ticketed, staff-guided optical demonstration within a public attraction",
    access:
      "Book Camera Obscura & World of Illusions at 549 Castlehill. Confirm that your visit can include a live daylight show rather than assuming all opening hours offer one. No EA ticket or private demonstration is included.",
    guideReview: review("public_admission", [
      [
        "Camera Obscura: the show",
        "https://www.camera-obscura.co.uk/attractions/the-camera-obscura",
        "Primary explanation of the daylight image and recorded poor-weather or after-dark alternative.",
      ],
      [
        "Camera Obscura: accessibility",
        "https://www.camera-obscura.co.uk/accessibility/",
        "Stair count, absence of lift and practical visitor guidance.",
      ],
    ]),
  },
  {
    id: "florence-opificio-stone-pictures",
    slug: "find-the-stone-inside-a-florentine-picture",
    title: "Find the stone inside a Florentine picture",
    field: "learn",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "florence",
    place: "Florence, Museo dell'Opificio delle Pietre Dure",
    summary:
      "Look closely at the Opificio's stone inlay and work out where the image comes from: a cut edge, a natural vein, or the meeting of two carefully chosen pieces.",
    kernel:
      "Choose one work rather than trying to catalogue every room. Start from far enough away to see its image, then move closer within the viewing rules and look for joins. Ask yourself which effects belong to the stone itself and which were created by cutting and placing it. Compare what you notice with the museum's materials and tools. Return to the finished work once more. A surface that first appeared painted may now read as a series of decisions about colour, grain and fit.",
    rootedness:
      "The Opificio's museum preserves the material history of Florence's stone-inlay practice alongside the institution's wider conservation identity. The collection makes the relationship between raw stone, tools and finished objects visible. That is different from visiting an active restoration laboratory. The public museum is the access offered here. A focused visit gives another perspective on a city often introduced through painting and sculpture, without turning every decorative object into an unexplained luxury.",
    shift:
      "Colour becomes something selected from a material, not only something applied to it.",
    humanReturn:
      "Leave with one stone detail you can recognise and a more precise way to look at an elaborate surface.",
    responsibility:
      "Plan this as a morning or early-afternoon visit. The published museum hours are Monday to Saturday, with closing at 14:00 and ticket sales ending at 13:30. Check holiday closures and current notices. Do not confuse the museum at Via degli Alfani 78 with other Opificio facilities. Confirm access arrangements, photography and any temporary room restrictions. Never touch the displays. This is not a workshop, restoration consultation or behind-the-scenes visit.",
    evidence:
      "The institution publishes museum admission, address and collection information. EA has not inspected the present display or verified that a photographed object will be on view on your date.",
    duration: "Allow 60 to 90 minutes",
    participation: "A self-directed public museum visit",
    access:
      "Use the museum's official ticket page and its authorised booking link. Visit the public museum at Via degli Alfani 78 in Florence. No laboratory access or EA reservation is included.",
    guideReview: review("public_admission", [
      [
        "Opificio delle Pietre Dure: museum tickets",
        "https://opificiodellepietredure.cultura.gov.it/museo/biglietti/",
        "Primary hours, public admission and authorised ticket route.",
      ],
      [
        "Opificio delle Pietre Dure: museum and institution",
        "https://opificiodellepietredure.cultura.gov.it/",
        "Institutional collection context. Museum admission is distinct from conservation-laboratory access.",
      ],
    ]),
  },
  {
    id: "valencia-llotja-stone-columns",
    slug: "read-valencias-trading-history-in-a-stone-forest",
    title: "Read Valencia's trading history in a stone forest",
    field: "learn",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "valencia",
    place: "Valencia, La Llotja de la Seda",
    summary:
      "Enter the Silk Exchange's contracting hall and follow a twisting column into the vault. A room built for business reveals how Valencia wanted trade to be seen.",
    kernel:
      "Choose one column and let your eye follow its spiral upward. Then step back far enough to see how the repeated supports organise the room. Read the interpretation before deciding what the forest-like effect means. This was a civic place of exchange, not a church, however ceremonial it feels. If the courtyard is open, take a short pause there and return to the hall with the contrast in mind. One architectural detail, properly noticed, can tell you more than a quick photograph of the entire interior.",
    rootedness:
      "La Llotja is a Gothic trading complex beside Valencia's market. Its columned hall, central tower and adjoining Consulate of the Sea express the city's commercial ambitions. The municipality describes the building as a symbolic setting for trade and notes the banking operations once carried out here. This is a different visit from the Silk Museum, which introduces textile craft and the guild. Connecting the two can distinguish making cloth from organising commerce, but each has its own admission and opening conditions.",
    shift:
      "A beautiful room becomes a public statement about how a city valued its commercial life.",
    humanReturn:
      "Leave with a detail you could sketch and a clearer distinction between the craft of silk and the business around it.",
    responsibility:
      "Check the municipal hours, holiday exceptions and last admission before travelling. Tower visits are separately guided and need advance arrangements. Published tower schedules conflict, so do not assume a climb is included or available on your date. Confirm accessible entrances and which rooms suit your mobility. Do not touch carved surfaces or block circulation. Groups may make the hall busy, and quiet is not guaranteed. No historical trading demonstration or textile workshop is promised.",
    evidence:
      "The municipality confirms public admission and identifies the hall's civic and commercial purpose. Visit Valencia corroborates the building and its principal spaces. EA has not inspected current access or attended a tower visit.",
    duration: "Allow 45 to 75 minutes",
    participation: "A self-directed visit to a public civic monument",
    access:
      "Use the municipal La Lonja y Consulado del Mar listing and its official ticket link for the building beside the Central Market. A separate museum or tower visit is not part of this guide's admission. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Valencia municipality: La Lonja and Consulate of the Sea",
        "https://www.valencia.es/es/-/infociudad-la-lonja-y-consulado-del-mar",
        "Primary public hours, ticket route, architectural context and separate tower arrangements.",
      ],
      [
        "Visit Valencia: the Silk Exchange",
        "https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/lonja-silk-exchange",
        "Destination authority context for the columned hall and trading complex.",
      ],
    ]),
  },
  {
    id: "chicago-garfield-glasshouse-pause",
    slug: "give-chicago-an-hour-under-glass",
    title: "Give Chicago an hour under glass",
    field: "restore",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "chicago",
    place: "Chicago, Garfield Park Conservatory",
    summary:
      "Step into Garfield Park Conservatory and let a living plant collection change the scale of your city day, from the glass roof down to a single leaf.",
    kernel:
      "Begin with the visitor map and choose a small number of rooms rather than rushing to see everything. In the Palm House, look upward first, then follow one plant down to the scale of its leaves and trunk. Find a permitted place to pause without blocking circulation. Notice how the light changes across glass, foliage and water. If the Fern Room is suitable for your mobility, make it a separate slow stop. You do not have to identify every plant to pay close attention to one.",
    rootedness:
      "Garfield Park Conservatory is a public living collection on Chicago's West Side, operated within the city's park system. Its indoor landscapes offer a different encounter with the city from its skyline or river. The organisation asks visitors to treat the site as a museum of living things, not an unrestricted park. A quiet pause is an editorial suggestion, not a guarantee that a working, family-friendly conservatory will be silent.",
    shift:
      "The city acquires another scale when a leaf, a trunk and a room of filtered light become enough to look at.",
    humanReturn:
      "Return outside with one plant form in mind and a slower interval in the day.",
    responsibility:
      "Ticketed entry is required and advance reservation is strongly recommended. Chicago residents can qualify for free admission with address verification, while most non-residents pay. Do not rely on old blanket claims of free entry. The conservatory closes Mondays and Tuesdays. Most areas are wheelchair accessible, but the operator explicitly excludes the Fern Room. Walkways can be wet. Do not touch or collect plants, feed wildlife or enter water. Commercial photography may require a separate permit.",
    evidence:
      "The conservatory's current visitor page confirms ticketing, resident eligibility, hours and the Fern Room access limitation. EA has not inspected current conditions or independently assessed the collection's therapeutic effects.",
    duration: "Allow 60 to 90 minutes",
    participation: "A self-directed, ticketed conservatory visit",
    access:
      "Reserve through Garfield Park Conservatory for 300 North Central Park Avenue, Chicago. The EMG Children's Garden has a separate timed reservation requirement. No guided session, private access or EA booking is included.",
    guideReview: review("public_admission", [
      [
        "Garfield Park Conservatory: plan your visit",
        "https://garfieldconservatory.org/visit/",
        "Primary current admission, hours, access and visitor rules.",
      ],
      [
        "Garfield Park Conservatory: indoor gardens",
        "https://garfieldconservatory.org/gardens/indoor-gardens/",
        "Primary context for the living indoor collection. Room access must be checked for the visit.",
      ],
    ]),
  },
  {
    id: "edinburgh-dr-neils-garden",
    slug: "pause-by-the-loch-in-dr-neils-garden",
    title: "Pause by the loch in Dr Neil's Garden",
    field: "restore",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    place: "Edinburgh, Duddingston",
    summary:
      "Find the public entrance to Dr Neil's Garden and give the planting and Duddingston Loch a little unhurried attention, close to Edinburgh but outside its usual sightseeing rhythm.",
    kernel:
      "Follow the garden's published entrance route rather than looking for a shortcut along the water. Once inside, choose a manageable path and let the slope determine your pace. Find a bench where you can sit without needing to do anything else. Notice how planting frames the loch and how a change of height alters the view. Leave time to return along a route that suits your footing. A small garden rewards a small plan: one path, one pause and one detail you might otherwise have passed.",
    rootedness:
      "Doctors Andrew and Nancy Neil began the garden in 1963, and a charitable trust now cares for it. Its setting beside Duddingston Loch connects a cultivated place with the wider landscape near Arthur's Seat. This is a maintained public garden with its own rules, not an invitation to wander onto private ground or treat the shore as a swimming access point. Its history of care is part of what makes a brief visit meaningful.",
    shift:
      "An Edinburgh day can include attention without another climb, performance or list of sights to complete.",
    humanReturn:
      "Leave with a quieter image of the city and a place you can return to in another season.",
    responsibility:
      "The garden opens from 10:00 until dusk, with free entry and donations welcomed. Check current notices and allow for seasonal daylight. Paths include steps, steep slopes, narrow sections and open water. The improved-access route does not remove every step. Children need supervision and only assistance dogs are permitted. Picnics and commercial group visits have restrictions. The current site says the café is closed until spring, so do not plan the visit around refreshments.",
    evidence:
      "The garden trust publishes ordinary public access, history and detailed route limitations. EA has not visited or verified current path conditions. The photograph shows a particular season, not a promise of today's planting.",
    duration: "Allow 45 to 75 minutes",
    participation: "An ordinary public garden visit at your own pace",
    access:
      "Use the trust's route through Duddingston Kirk's car park or the signed Manse path at Old Church Lane. Organised or commercial groups need separate arrangements. This guide concerns an ordinary individual visit, with no EA booking.",
    guideReview: review("public_observation", [
      [
        "Dr Neil's Garden: visiting",
        "https://www.drneilsgarden.co.uk/visit-the-garden",
        "Trust information for public opening, free entry and the garden's setting.",
      ],
      [
        "Dr Neil's Garden: planning your visit",
        "https://www.drneilsgarden.co.uk/planning-your-visit",
        "Primary entrance directions, slopes, steps, visitor rules and current café closure.",
      ],
    ]),
  },
  {
    id: "kyoto-shunkoin-kissako",
    slug: "sit-with-tea-and-a-question-at-shunkoin",
    title: "Sit with tea and a question at Shunkoin",
    field: "restore",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    place: "Kyoto, Myōshinji",
    summary:
      "Book Shunkoin's small-group Kissako session for tea, guided seated meditation and conversation in English. Come with curiosity rather than an expectation of instant transformation.",
    kernel:
      "Arrive ready to follow the temple's instructions and begin with the tea. Notice the utensil in your hands, the temperature and the movement involved in drinking. During seated practice, use the guidance offered rather than trying to imitate a photograph of meditation. Bring a genuine question to the conversation, or allow one to emerge from what you notice. The published session also includes a guided visit to the garden and prayer hall. Treat those spaces as part of an active temple, not as a private photography set.",
    rootedness:
      "Shunkoin is a temple within Kyoto's Myōshinji complex. Its current Kissako programme is an approximately two-hour, English-language encounter led by Rev. Takafumi Zenryu Kawakami, combining practice with dialogue. Ordinary sightseeing access to the temple is not the same as a confirmed place on this programme. The experience offers one practitioner's teaching in a living Buddhist setting, not an account of every Zen tradition or a secular wellness treatment disguised as one.",
    shift:
      "A temple visit becomes a chance to practise attention and ask a question, rather than only observe a room.",
    humanReturn:
      "Leave with something to reflect on and a clearer understanding of what you actually tried.",
    responsibility:
      "Advance reservation is required. Wear socks and modest clothing suitable for seated practice. Confirm seating adaptations, minimum age and mobility needs before booking. The published cancellation policy charges the full fee within seven days. Do not expect a therapeutic outcome. The current schedule covers October to December 2026, with no experiences from 31 December through 4 January and further winter availability limits. Later dates need fresh confirmation.",
    evidence:
      "The temple's October 2026 announcement specifies Kissako's content, English instruction, approximately 120-minute duration, maximum twelve participants and dated booking links. EA has not attended or independently evaluated the teaching or health claims.",
    duration: "Approximately two hours",
    participation:
      "A prebooked small-group temple session with tea, meditation and dialogue",
    access:
      "Choose a confirmed Kissako date through the temple's current announcement and linked booking service. Do not substitute a private retreat or arrive expecting a drop-in class. No EA reservation or temple partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        [
          "Shunkoin: October to December 2026 programme",
          "https://shunkoin.com/archives/842",
          "Primary current Kissako schedule, booking links, content, language and winter restrictions.",
        ],
        [
          "Shunkoin: official temple information",
          "https://shunkoin.com/en",
          "Confirms the temple and distinguishes its different public programmes.",
        ],
      ],
      "2026-12-30",
    ),
  },
  {
    id: "tokyo-national-noh-performance",
    slug: "follow-a-noh-performance-one-gesture-at-a-time",
    title: "Follow a noh performance one gesture at a time",
    field: "gather",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Sendagaya",
    summary:
      "Choose a public performance at the National Noh Theatre and let a deliberately paced gesture, voice or drum sound become your way into the stage.",
    kernel:
      "Read the synopsis for your chosen programme before taking your seat. If subtitles are offered, use them to find your bearings, then look back at the performers. Choose one element to follow for a while: the pace of a walk, the angle of a fan or the exchange between voice and percussion. You do not have to decode everything in your first performance. If the programme pairs noh and kyogen, notice the change of tone between them. Let the shared attention in the auditorium be part of the experience.",
    rootedness:
      "The National Noh Theatre in Sendagaya presents noh and kyogen through a public programme. Japan Arts Council's current listings include performances with English and Japanese subtitles on individual seat-back screens. That support makes a particular programme more approachable, but it does not mean every event has the same language provision. This is a living performance tradition presented by professional artists, not a participatory class or a guaranteed introduction designed for every age.",
    shift:
      "Understanding can begin with attention to one element, even before the whole dramatic language becomes familiar.",
    humanReturn:
      "Leave with a gesture or sound you can recall and a better basis for choosing another performance.",
    responsibility:
      "Check the exact performance, synopsis, length, subtitle languages and suitability before buying. Some stories contain unsettling or violent themes, so do not select solely by the venue name. The November 6 listing confirms bilingual subtitles, not an audio guide. Wheelchair spaces require the theatre's booking arrangements. Follow rules on late entry, photography and recording. No backstage access or interaction with performers is included.",
    evidence:
      "Japan Arts Council publishes current 2026 performances, public tickets and programme-specific language support. EA has not attended or assessed a particular production. The venue photograph does not establish the cast or staging you will see.",
    duration:
      "Follow the selected programme's running time, including intervals",
    participation: "Attendance at a ticketed public noh or kyogen performance",
    access:
      "Use Japan Arts Council's National Noh Theatre listings and official ticket route. Confirm the Sendagaya venue, not the separate National Theatre or New National Theatre. No EA reservation is provided.",
    guideReview: review(
      "public_programme",
      [
        [
          "Japan Arts Council: National Noh Theatre",
          "https://www.ntj.jac.go.jp/en/theatre/noh/",
          "Current programme and official booking route for the Sendagaya venue.",
        ],
        [
          "Japan Arts Council: November 6 regular performance",
          "https://www.ntj.jac.go.jp/schedule/nou/2026/85030/?lan=e",
          "Dated evidence of public performance, bilingual seat-back subtitles and wheelchair-space arrangements. Not a promise that every programme offers these features.",
        ],
        [
          "Japan Arts Council: visitor FAQs",
          "https://www.ntj.jac.go.jp/en/your_visit/faqs/",
          "Official general attendance and recording guidance.",
        ],
      ],
      "2026-11-20",
    ),
  },
  {
    id: "melbourne-fitzroy-barefoot-bowls",
    slug: "learn-the-curve-on-a-fitzroy-bowling-green",
    title: "Learn the curve on a Fitzroy bowling green",
    field: "gather",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    place: "Melbourne, North Fitzroy",
    summary:
      "Book a social rink at Fitzroy Victoria Bowling & Sports Club, learn the basic delivery and discover how a bowl's curve changes a simple game with friends.",
    kernel:
      "Begin with the included demonstration and ask how to identify the bowl's bias. Take turns sending a bowl toward the jack, watching where it starts to turn rather than only where it stops. Change one thing on the next attempt and compare the result. Keep the first ends simple enough that everyone can participate. Between turns, step into the designated waiting area and leave the rink clear. The pleasure comes from learning a small shared skill, with enough uncertainty to make every delivery worth watching.",
    rootedness:
      "The club sits beside Edinburgh Gardens in North Fitzroy and offers public social bowling on a designated green. Its membership and competitive bowling continue alongside that visitor offer. Hiring a rink gives access to the social format, not automatic participation in a members' match or a promise of being paired with local players. The current greens are synthetic, so the experience should not be described as bare feet on traditional natural turf.",
    shift:
      "A slow-looking game becomes a lively conversation about line, weight and the curve you did not quite expect.",
    humanReturn:
      "Leave with a game you can play again and a shared memory built through doing rather than watching.",
    responsibility:
      "Reserve the appropriate rink space and confirm the total charge for your group and season. An enquiry is not a booking until the club's confirmation and payment requirements are met. Bare feet, socks or flat-soled shoes are permitted under its rules. No eating, drinking or smoking on the green. Children need supervision. Ask about accessibility requirements when booking. Weather refunds or rescheduling follow the club's actual-day policy, not a forecast assumption. Drinking alcohol is not required.",
    evidence:
      "The official public-bowls page confirms two-hour hire, equipment and a demonstration. The FAQ distinguishes public and members' greens, synthetic surfaces, access and booking conditions. EA has not played there or checked live rink availability.",
    duration: "Two hours of rink hire, plus arrival",
    participation:
      "A booked social game with your own companions and an introductory demonstration",
    access:
      "Use Fitzroy Victoria Bowling & Sports Club's official barefoot-bowls enquiry route for North Fitzroy. Confirm small-group availability if you are not organising a larger event. This is not a hosted meet-up or an EA reservation.",
    guideReview: review("public_programme", [
      [
        "Fitzroy Victoria: barefoot bowls",
        "https://www.barefootbowling.com.au/barefoot-bowls",
        "Primary two-hour public hire, equipment, demonstration and footwear conditions.",
      ],
      [
        "Fitzroy Victoria: FAQs",
        "https://www.barefootbowling.com.au/faq",
        "Booking confirmation, weather, accessibility, family supervision and synthetic-green information.",
      ],
    ]),
  },
  {
    id: "chicago-green-mill-jazz",
    slug: "give-a-green-mill-jazz-set-your-attention",
    title: "Give a Green Mill jazz set your attention",
    field: "gather",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "chicago",
    place: "Chicago, Uptown",
    summary:
      "Choose a jazz set from the Green Mill's current calendar and arrive ready to listen. A working Uptown music room gives Chicago an evening rhythm beyond its skyline.",
    kernel:
      "Look up the actual ensemble before deciding when to go. Arrive with time to understand the door arrangements and find a place without interrupting a set. Once the music begins, choose one instrument to follow, then notice how another player answers it. Let a tune develop before reaching for your phone. Between sets, there is room to talk about what changed or surprised you. The experience is the performance happening that night, not a promised encounter with a famous guest or a reconstruction of a historic scene.",
    rootedness:
      "The Green Mill is an operating jazz club on North Broadway in Uptown. Its current calendar presents different ensembles and set times across the week. The public offer is therefore specific and changeable: a real room with a programme, not an abstract claim about Chicago jazz. The neighbourhood address matters, but its familiar historical associations do not need to become the main attraction. This guide puts the musicians and the listener's attention first.",
    shift:
      "A night out becomes more memorable when you follow the exchange inside the music instead of collecting the venue name.",
    humanReturn:
      "Leave with an ensemble to look up, a tune to remember or a new instrument you want to hear again.",
    responsibility:
      "Entry is strictly 21 and over with appropriate identification. The venue says it takes cash only, does not sell advance tickets and does not accept reservations. Seating is first-come, first-served and not guaranteed by arriving at a suggested time. Check the calendar for cover charges, set times and the nature of the event. Food is not served. Confirm mobility access and any hearing or sensory needs directly. Respect performers' and staff instructions about talking, photography and recording.",
    evidence:
      "The live official calendar and FAQ establish current public performances and admission conditions. EA has not attended, reviewed an ensemble or verified a particular night's seating. The documentary venue image is not a promise of the line-up or table shown.",
    duration:
      "Plan around one advertised set, with time for the door and any wait",
    participation:
      "Attendance at a public jazz performance under the venue's door policy",
    access:
      "Check the official calendar for 4802 North Broadway, Chicago, then pay the applicable cover at the venue. Do not buy a purported guaranteed reservation on EA's behalf. No EA ticket, table or partnership exists.",
    guideReview: review("public_programme", [
      [
        "Green Mill: current calendar",
        "https://greenmilljazz.com/calendar/",
        "Primary live programme and event-specific times and charges.",
      ],
      [
        "Green Mill: FAQs",
        "https://greenmilljazz.com/faqs/",
        "Confirms 21-plus entry, identification, cash-only payment, no reservations and no advance ticket sales.",
      ],
    ]),
  },
];
export const guideBatch57: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
