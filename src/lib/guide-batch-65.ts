import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

const drafts = [
  {
    id: "melbourne-attica-native-ingredients",
    slug: "melbourne-attica-native-ingredients",
    title: "Taste an unfamiliar Australia at Attica",
    summary:
      "A changing dinner in Ripponlea makes Australian ingredients the starting point for conversation.",
    field: "taste",
    place: "Melbourne, Ripponlea",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    kernel:
      "Ask which ingredient you are least likely to have encountered before. Taste it before reaching for a familiar comparison, then listen to how the kitchen uses it. The sequence is a chance to build a new vocabulary of flavour, one small plate at a time.",
    rootedness:
      "Attica places Australian ingredients inside a contemporary Melbourne dining room. Its tasting menu offers one kitchen’s interpretation of the country, with attention to ingredients that rarely lead an everyday restaurant menu.",
    shift:
      "Follow the ingredient through the dish. Which flavour belongs to it, and which comes from the preparation?",
    humanReturn:
      "A handful of flavours to recognise again when you shop, cook or eat elsewhere in Australia.",
    responsibility:
      "Mention allergies and dietary needs when reserving, then reconfirm them at least 72 hours ahead. The restaurant serves its full menu to children and does not provide highchairs or prams in the room. Wine is optional.",
    evidence:
      "Attica’s current menu and reservation pages establish the dinner format and access conditions. Dishes change. EA has not eaten this menu or assessed its service.",
    duration: "About 3 hours",
    participation: "Reserved tasting-menu dinner",
    access:
      "Book dinner through Attica’s official reservations page. Dinner runs Tuesday to Saturday, with dates released 90 days ahead at 9am Melbourne time. A deposit applies. Confirm the current menu, total cost and dietary accommodation before paying.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.attica.com.au/reservations",
      sources: [
        {
          title: "Attica reservations",
          url: "https://www.attica.com.au/reservations",
          note: "Dinner schedule, release window, deposit, dietary notice and approximate duration.",
        },
        {
          title: "Attica",
          url: "https://www.attica.com.au/",
          note: "Primary source for the restaurant, Australian ingredients and changing menu imagery.",
        },
      ],
    },
  },
  {
    id: "lima-maido-nikkei-menu",
    slug: "lima-maido-nikkei-menu",
    title: "Taste Lima’s Japanese-Peruvian conversation at Maido",
    summary:
      "Follow a Nikkei tasting menu through acidity, texture and the ingredients of Peru.",
    field: "taste",
    place: "Lima, Miraflores",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    kernel:
      "Let one course set up the next. Notice how a sharp sauce changes a rich mouthful, or how a precise cut changes your sense of texture. Ask the team about an ingredient rather than trying to decide whether the dish is more Japanese or more Peruvian.",
    rootedness:
      "Mitsuharu Tsumura’s Lima restaurant works within Nikkei cuisine, shaped by Japanese and Peruvian food traditions. The tasting format makes that encounter visible through technique and sequence.",
    shift:
      "Look for the relationship between ingredients and methods, beyond the idea of two cuisines simply mixed together.",
    humanReturn:
      "A more useful way to talk about Nikkei food, with a few textures and combinations you can recognise elsewhere in Lima.",
    responsibility:
      "Confirm allergies, substitutions, the final price and cancellation terms directly before booking. Pairings are separate choices, including a non-alcoholic option. Do not assume a dish photographed online will appear in your menu.",
    evidence:
      "Maido’s current site lists a 12-course experience and its release process. PROMPERÚ corroborates the restaurant and Nikkei context, but its older hours differ, so use Maido for scheduling. EA has not dined here.",
    duration: "Allow an unhurried meal, confirm the sitting length",
    participation: "Reserved Nikkei tasting menu",
    access:
      "Use the booking link on maido.pe. Reservations open on the first day of the month, two months ahead. The current restaurant schedule is Monday to Saturday. The private Maido Hub is a separate offer and is not this guide.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://maido.pe/?lang=en",
      sources: [
        {
          title: "Maido official menu and reservations",
          url: "https://maido.pe/?lang=en",
          note: "Current 12-course format, pairing choices, official booking domain and release schedule.",
        },
        {
          title: "PROMPERÚ gastronomic guide",
          url: "https://www.peru.travel/peru-gourmet-guide/maido",
          note: "Independent tourism confirmation of chef, address and Nikkei identity. Older hours and prices are not used.",
        },
      ],
    },
  },
  {
    id: "laguardia-ysios-vineyard-tasting",
    slug: "laguardia-ysios-vineyard-tasting",
    title: "Walk a Rioja vineyard before tasting its wine",
    summary:
      "At Ysios, the Carravacas vineyard and barrel room give a tasting two different points of reference.",
    field: "taste",
    place: "Laguardia, Rioja Alavesa",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "laguardia",
    kernel:
      "Begin outside, with the vineyard and the Sierra de Cantabria in view. Take one question about the vines into the barrel room, then carry it into the guided tasting. Compare the two wines before reading a long list of tasting descriptors.",
    rootedness:
      "Ysios stands in Rioja Alavesa, where wine production and striking contemporary architecture share the landscape. The vineyard visit keeps the setting connected to what reaches the glass.",
    shift:
      "Ask what the visit reveals about this vineyard that the building alone cannot tell you.",
    humanReturn:
      "A grounded comparison of two wines and a clearer sense of where Rioja Alavesa sits within Rioja.",
    responsibility:
      "The tasting is for adults of legal drinking age. Arrange a driver or another onward route if you will drink. Wear shoes suitable for vineyard ground and ask about step-free access or bad-weather changes before booking.",
    evidence:
      "The live booking catalogue lists Viñedo Carravacas y Cata, including vineyard, barrel room, two wines and an aperitif. Basque Country Tourism confirms the winery’s location and visitor offer. EA has not attended.",
    duration: "Approximately 90 minutes",
    participation: "Guided vineyard walk and wine tasting",
    access:
      "Reserve Viñedo Carravacas y Cata through the official experience catalogue. The checked listing is in Spanish. Confirm an English departure if needed. Private tours, the wine bar and multi-winery packages have different inclusions.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://visits.bodegasysios.com/enoexperiencia/?vinedo-carravacas-cata",
      sources: [
        {
          title: "Carravacas vineyard and tasting",
          url: "https://visits.bodegasysios.com/enoexperiencia/?vinedo-carravacas-cata",
          note: "Direct official booking entry for the chosen public vineyard walk and tasting.",
        },
        {
          title: "Ysios current experience catalogue",
          url: "https://visits.bodegasysios.com/enoexperiencia/",
          note: "Live rendered listing confirms the Carravacas route, two wines, aperitif and 90-minute duration.",
        },
        {
          title: "Basque Country Tourism",
          url: "https://tourism.euskadi.eus/en/restaurants/rioja-alavesa-winery-ysios/webtur00-content/en/",
          note: "Public winery listing situates Ysios in Laguardia and documents its wine and architectural context.",
        },
      ],
    },
  },
  {
    id: "humlebaek-louisiana-sculpture-coast",
    slug: "humlebaek-louisiana-sculpture-coast",
    title: "Walk between sculpture and sea at Louisiana",
    summary:
      "Give the coastal sculpture park its own part of a museum day in Humlebæk.",
    field: "witness",
    place: "Humlebæk, Louisiana Museum",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "humlebaek",
    kernel:
      "Choose a sculpture you can walk around. Move until its outline meets the sea, then look again from the path back toward the museum. The work stays still while the background changes. Leave room to sit without immediately choosing another object.",
    rootedness:
      "Louisiana’s park connects a collection of outdoor sculpture with the Øresund coast and the museum’s architecture. Art is encountered in changing light, at the scale of a walking body.",
    shift:
      "Notice how distance and viewpoint alter a sculpture before you read its interpretation.",
    humanReturn:
      "A simple looking practice you can repeat in a public square, a garden or another museum.",
    responsibility:
      "Keep to visitor paths and follow the rules for each artwork. Weather and slippery ground can change the outdoor visit. Ask the museum about accessible routes if you need to avoid slopes or steps.",
    evidence:
      "The museum documents its sculpture park and visitor hours. The park is part of museum admission. EA has not inspected access conditions or the current position of every work.",
    duration: "Allow 1–2 hours for the park, longer with galleries",
    participation: "Self-directed sculpture walk",
    access:
      "Buy museum admission and check the current opening calendar. Louisiana is in Humlebæk, outside Copenhagen. It normally closes on Mondays and offers late opening Tuesday to Friday. Plan your return journey separately.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://louisiana.dk/en/museum/park/",
      sources: [
        {
          title: "Louisiana sculpture park",
          url: "https://louisiana.dk/en/museum/park/",
          note: "Primary account of the outdoor sculpture collection, landscape and relationship to the coast.",
        },
        {
          title: "Louisiana opening hours",
          url: "https://louisiana.dk/en/plan-your-visit/opening-hours/",
          note: "Current museum visiting schedule and holiday exceptions.",
        },
      ],
    },
  },
  {
    id: "santa-fe-meow-wolf-house",
    slug: "santa-fe-meow-wolf-house",
    title: "Follow an impossible house into another world in Santa Fe",
    summary:
      "Explore Meow Wolf’s House of Eternal Return through doors, clues and rooms that resist a straight route.",
    field: "witness",
    place: "Santa Fe, House of Eternal Return",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "santa-fe",
    kernel:
      "Start with the apparently ordinary house and pay attention to the things that do not quite belong. Follow a passage that interests you, then compare discoveries with someone who took another turn. You can pursue the story or simply spend time inside the environments.",
    rootedness:
      "Meow Wolf’s Santa Fe installation grew from a local artist collective. The house combines constructed spaces, visual art and a narrative you uncover by moving through it.",
    shift:
      "Treat curiosity as your route. A room can be worth exploring even when you have not solved its part of the story.",
    humanReturn:
      "A shared collection of discoveries, including something your companion missed and something they can show you.",
    responsibility:
      "Expect low light, sound, visual effects and some enclosed routes. Check the accessibility and sensory guidance before buying. Follow staff instructions about what may be touched and keep exits and narrow passages clear.",
    evidence:
      "Meow Wolf documents the permanent Santa Fe installation and timed admission. Individual rooms, effects and access arrangements may change. EA has not visited or independently tested sensory suitability.",
    duration: "Allow 2–3 hours at your own pace",
    participation: "Timed-entry immersive art exploration",
    access:
      "Reserve specifically for Santa Fe’s House of Eternal Return. Check the date, entry time and current access notes. Other Meow Wolf locations are separate experiences. Event tickets and special programming may have additional conditions.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://meowwolf.com/visit/santa-fe",
      sources: [
        {
          title: "Meow Wolf Santa Fe",
          url: "https://meowwolf.com/visit/santa-fe",
          note: "Primary location, admission and visitor information for House of Eternal Return.",
        },
        {
          title: "Inside House of Eternal Return",
          url: "https://meowwolf.com/visit/santa-fe/sneak-peek",
          note: "Primary visual and narrative context for the Santa Fe installation.",
        },
      ],
    },
  },
  {
    id: "sharjah-rain-room-slow-walk",
    slug: "sharjah-rain-room-slow-walk",
    title: "Walk slowly through rain that responds to you in Sharjah",
    summary:
      "Random International’s Rain Room turns a short walk into a negotiation with water and sensors.",
    field: "witness",
    place: "Sharjah, Rain Room",
    country: "United Arab Emirates",
    countrySlug: "united-arab-emirates",
    regionSlug: "sharjah",
    kernel:
      "Pause at the edge and listen before entering. Walk slowly into the falling water, then stop and notice the space that opens around your body. The work becomes interesting at the moment you change your pace and see how the system responds.",
    rootedness:
      "Sharjah’s permanent Rain Room gives an artwork usually encountered as a touring installation a fixed home. Its material is actual water, coordinated with a system that tracks movement.",
    shift:
      "Pay attention to the gap between what your body does and how quickly the environment answers.",
    humanReturn:
      "A memorable physical encounter with an interactive system, including its limits.",
    responsibility:
      "You may get wet. Move slowly and follow staff guidance. Dark, shiny or reflective clothing can interfere with detection. Avoid pointed heels. The space is dark and wet, so check suitability and access needs directly before visiting.",
    evidence:
      "The official Rain Room site provides timed access and clothing rules. EA has not tested the sensors or visited the installation. A dry experience is not guaranteed.",
    duration: "About 10–15 minutes inside, arrive 15 minutes early",
    participation: "Timed small-group art installation",
    access:
      "Book a timed ticket through the official Rain Room site. Entry is in small groups, currently up to seven people. Check the current timetable, child conditions and any photography restrictions. Professional shoots require a separate arrangement.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://rainroom.sharjahart.org/getTicket.htm",
      sources: [
        {
          title: "Rain Room tickets",
          url: "https://rainroom.sharjahart.org/getTicket.htm",
          note: "Official timed-ticket route for the permanent Sharjah installation.",
        },
        {
          title: "Rain Room visit conditions",
          url: "https://rainroom.sharjahart.org/terms.htm",
          note: "Movement, clothing, footwear and photography conditions for entering the work.",
        },
      ],
    },
  },
  {
    id: "papenburg-meyer-shipbuilding-view",
    slug: "papenburg-meyer-shipbuilding-view",
    title: "Look into the building of a ship in Papenburg",
    summary:
      "A visitor-centre route puts the scale of cruise-ship construction on the other side of the glass.",
    field: "learn",
    place: "Papenburg, MEYER WERFT visitor centre",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "papenburg",
    kernel:
      "At the viewing window, look for one detail small enough to recognise: a doorway, a worker’s route or a piece of equipment. Use it to understand the scale of the structure around it. The exhibition helps connect that view to how a ship comes together.",
    rootedness:
      "Papenburg’s shipbuilding industry is unusually visible to ordinary visitors through the MEYER WERFT centre. The route connects a working industrial site with models and explanations of construction.",
    shift:
      "Look at the ship as an assembly of systems and spaces, before imagining it as a destination.",
    humanReturn:
      "A practical sense of industrial scale that a photograph of a finished vessel rarely conveys.",
    responsibility:
      "Remain on the visitor route. The visit does not provide access to the working factory floor. What is visible depends on construction progress. Confirm the language and accessibility of your chosen ticket, especially if it includes a bus.",
    evidence:
      "The visitor centre publishes public tickets, guided and self-guided formats and arrival instructions. EA has not inspected the current build or attended a tour.",
    duration: "Allow about 2 hours, confirm your ticket format",
    participation: "Shipbuilding exhibition and viewing-gallery visit",
    access:
      "Reserve through the visitor centre. Choose the self-arrival guided visit for the route described here. Premium bus departures leave elsewhere and have different access conditions. Check the address, arrival time and tour language on your confirmation.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://besucherzentrum-meyerwerft.de/",
      sources: [
        {
          title: "MEYER WERFT visitor centre",
          url: "https://besucherzentrum-meyerwerft.de/",
          note: "Official visitor formats and ticket route for viewing ship construction.",
        },
        {
          title: "Visitor-centre FAQ",
          url: "https://besucherzentrum-meyerwerft.de/faq/",
          note: "Differences between self-arrival, guided and Premium bus formats, with access conditions.",
        },
      ],
    },
  },
  {
    id: "dearborn-ford-rouge-assembly",
    slug: "dearborn-ford-rouge-assembly",
    title: "Follow a pickup along the assembly line in Dearborn",
    summary:
      "An elevated walkway at the Ford Rouge complex makes the choreography of manufacturing visible.",
    field: "learn",
    place: "Dearborn, Ford Rouge Factory Tour",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "dearborn",
    kernel:
      "Choose one section of the assembly line and watch how materials, tools and people meet there. When production is running, look for repeated movements and the space between them. If it is paused, use the layout to work out the sequence rather than expecting a performance.",
    rootedness:
      "The Rouge complex anchors this visit in the Detroit region’s manufacturing history. The Henry Ford presents the working truck plant alongside exhibits about production and the site.",
    shift:
      "Notice how much of a vehicle is made possible by arrangements around it, not just the parts attached to it.",
    humanReturn:
      "A more concrete understanding of the coordination behind an everyday manufactured object.",
    responsibility:
      "The tour is closed for scheduled maintenance from 9–29 November 2026. Production is never guaranteed, and weekends, breaks and maintenance affect activity. Stay on the public route and follow the current factory photography rules.",
    evidence:
      "The Henry Ford confirms the accessible elevated final-assembly walkway and explicitly warns that production may stop. The current maintenance closure is published on its site. EA has not visited the plant.",
    duration: "Allow 2–3 hours including transfer, confirm the day’s schedule",
    participation: "Self-paced factory observation and exhibits",
    access:
      "Check the maintenance notice before booking. Use the official Ford Rouge Factory Tour ticket and its transfer instructions from The Henry Ford. It is a separate venue from museum admission. The tour normally closes on Sundays. Tickets do not guarantee an operating line.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.thehenryford.org/visit/venues/ford-rouge-factory-tour",
      sources: [
        {
          title: "Ford Rouge Factory Tour",
          url: "https://www.thehenryford.org/visit/venues/ford-rouge-factory-tour",
          note: "Current maintenance closure, production limitations, public visitor route and ticket access.",
        },
        {
          title: "Ford Rouge visitor map",
          url: "https://www.thehenryford.org/visit/plan-your-visit/maps/ford-rouge-factory-tour-map",
          note: "Official spatial context for the multi-part visit and final-assembly viewing route.",
        },
      ],
    },
  },
  {
    id: "linz-ars-deep-space",
    slug: "linz-ars-deep-space",
    title: "Let a digital universe change your sense of scale in Linz",
    summary:
      "At Deep Space 8K, wall and floor projections turn a short presentation into a room-sized encounter.",
    field: "learn",
    place: "Linz, Ars Electronica Center",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "linz",
    kernel:
      "Check which presentation is about to begin, then put the phone away for one complete session. Watch how an image crossing from wall to floor changes your sense of distance. Ask which part is recorded, simulated or interactive instead of treating every image as the same kind of evidence.",
    rootedness:
      "Ars Electronica brings art, science and technology together in Linz. Deep Space turns that relationship into something a visitor can physically enter, through large projections and different programmed presentations.",
    shift:
      "Pay attention to how the display shapes what you understand, as well as what it shows.",
    humanReturn:
      "A clearer distinction between a compelling visualisation and the idea it is helping explain.",
    responsibility:
      "Large moving projections, darkness and sound may be uncomfortable for some visitors. Ask about sensory and mobility requirements before entry. Some presentations invite interaction, while others are primarily watched.",
    evidence:
      "Ars Electronica lists daily presentations included with museum admission and warns of short-notice programme changes. EA has not attended or tested individual presentations.",
    duration: "Usually 25 minutes per daily session, longer for the museum",
    participation: "Museum visit with a scheduled immersive presentation",
    access:
      "Buy an Ars Electronica Center ticket and check the Deep Space timetable at the information desk. Choose a session with the language you need. Special events may require separate admission. The centre lists a closure for 7–17 January 2027.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://ars.electronica.art/center/en/deepspace/",
      sources: [
        {
          title: "Deep Space 8K programme",
          url: "https://ars.electronica.art/center/en/deepspace/",
          note: "Current daily presentations, language listings and inclusion with the museum ticket.",
        },
        {
          title: "Ars Electronica tickets and hours",
          url: "https://ars.electronica.art/center/en/tickets/",
          note: "Museum entry arrangements, opening schedule and announced closure dates.",
        },
      ],
    },
  },
  {
    id: "tilcajete-paint-wooden-nahual",
    slug: "tilcajete-paint-wooden-nahual",
    title: "Paint a wooden figure after seeing how it is made in Oaxaca",
    summary:
      "At Taller Jacobo y María Ángeles, a workshop visit gives a small act of painting a much larger context.",
    field: "make",
    place: "San Martín Tilcajete, Oaxaca",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "san-martin-tilcajete",
    kernel:
      "Watch the stages of carving, surface preparation and decoration before picking up a brush. Ask the team how they approach a pattern and what it means within their own work. In the visitor painting activity, concentrate on a few careful marks rather than trying to reproduce a finished studio piece.",
    rootedness:
      "The workshop in San Martín Tilcajete makes carved and decorated figures and explains its techniques to visitors. Its account of materials and imagery belongs to the makers, who are the right people to ask about their meaning.",
    shift:
      "Compare the time taken by a single painted detail with the surface of a completed figure.",
    humanReturn:
      "Your own decorated piece and a more informed appreciation of the work behind the objects you see for sale.",
    responsibility:
      "Ask before photographing people or handling unfinished work. A short visitor activity is not training in the full carving tradition. Do not assign yourself a spiritual identity or present a copied motif as your own invention.",
    evidence:
      "The workshop explicitly advertises painting and decorating a nahual alongside a free guided visit. The free tour’s duration is published, but the painting fee, length and availability require direct confirmation. EA has not participated.",
    duration: "45–60 minutes for the tour, plus the booked painting activity",
    participation: "Workshop visit with an optional reserved painting session",
    access:
      "Contact the workshop through its official visitor page to arrange the painting activity and confirm price, age suitability and language. The tour is offered in Spanish and English, normally daily, with the last departure at 17:15. A tour alone does not include painting.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.jacoboymariaangeles.com/visita-guiada",
      sources: [
        {
          title: "Jacobo y María Ángeles visitor programme",
          url: "https://www.jacoboymariaangeles.com/visita-guiada",
          note: "Primary description of the free guided route and the separately advertised painting activity.",
        },
        {
          title: "Taller Jacobo y María Ángeles",
          url: "https://www.jacoboymariaangeles.com/",
          note: "Primary studio context and projects, with the makers’ own account of their work.",
        },
      ],
    },
  },
  {
    id: "echizen-forge-santoku-knife",
    slug: "echizen-forge-santoku-knife",
    title: "Forge a kitchen knife in Echizen",
    summary:
      "A full-day santoku course follows hot steel through the steps that make it a usable blade.",
    field: "make",
    place: "Echizen, Takefu Knife Village",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "echizen",
    kernel:
      "Begin with the steel and follow the instructor’s sequence through forging, hardening, sharpening and fitting the handle. Notice how each stage limits what the next can do. Keep your attention on the movement being taught, especially when heat and force are involved.",
    rootedness:
      "Takefu Knife Village brings visitors into Echizen’s blade-making context. The course connects a familiar kitchen tool with work that is normally invisible once the finished knife reaches a shop.",
    shift:
      "Look at an edge as the result of several decisions, rather than one final act of sharpening.",
    humanReturn:
      "A knife you helped make and a better basis for asking how to care for it.",
    responsibility:
      "The santoku course is for adults aged 18 and over. Follow the workshop’s clothing and safety instructions and discuss any physical limitations before booking. Check your airline and destination rules for transporting a finished knife in checked luggage.",
    evidence:
      "The official lesson page lists a six-hour santoku course with an interpreter-inclusive option. Fukui Tourism confirms the workshop setting. EA has not taken the course or assessed instruction quality.",
    duration: "Approximately 6 hours, starting at 9:30",
    participation: "Supervised knife-forging course",
    access:
      "Book the specific santoku course from the official lesson page and confirm interpreter arrangements, final cost and availability. Do not confuse it with sharpening lessons or general workshop viewing. The operator currently marks its group-course offer as suspended.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://en.takefu-knifevillage.jp/lesson",
      sources: [
        {
          title: "Takefu Knife Village lessons",
          url: "https://en.takefu-knifevillage.jp/lesson",
          note: "Santoku course stages, adult age threshold, six-hour duration, booking link and interpreter information.",
        },
        {
          title: "Fukui Tourism: Takefu Knife Village",
          url: "https://www.fuku-e.com/en/attractions/detail_2031.html",
          note: "Regional tourism confirmation of the working blade-making site and visitor context.",
        },
      ],
    },
  },
  {
    id: "ilhavo-vista-alegre-porcelain-painting",
    slug: "ilhavo-vista-alegre-porcelain-painting",
    title: "Put your own brushwork on porcelain at Vista Alegre",
    summary:
      "A bookable museum workshop makes decoration something to try within Portugal’s porcelain-making landscape.",
    field: "make",
    place: "Ílhavo, Vista Alegre",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "ilhavo",
    kernel:
      "Choose a simple motif and see how it behaves on a curved surface. Leave some porcelain undecorated so you can notice the marks you make. Look at a museum piece afterwards and compare the control of line, spacing and colour with the decisions you just faced.",
    rootedness:
      "The activity takes place at the Vista Alegre museum’s education centre in Ílhavo. The surrounding industrial site connects an approachable visitor workshop with a longer history of porcelain production.",
    shift:
      "Pay attention to the difference between designing on paper and placing a mark on an object.",
    humanReturn:
      "A decorated piece and a sharper eye for the small decisions in painted tableware.",
    responsibility:
      "Choose materials with the instructor and ask whether your finished piece is suitable for food use. Acrylic decoration can leave with you, while ceramic paints need firing. A short workshop does not reproduce the factory’s full production process.",
    evidence:
      "The group’s official experience page describes painting workshops and advance registration. The regional tourism body confirms the museum context. EA has not attended or checked a particular session.",
    duration: "Confirm the session length when registering",
    participation: "Reserved porcelain-painting workshop",
    access:
      "Register with the museum through the contact details on the official workshop page. Weekday sessions use the education centre, called Creche. Weekends depend on prior arrangement. Ceramic-painted work is collected within 15 working days or shipped for an additional fee. Confirm the current timetable and instruction language.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://montebelohotels.com/parador-casa-insua/en/experiences/vista-alegre-workshops",
      sources: [
        {
          title: "Vista Alegre painting workshops",
          url: "https://montebelohotels.com/parador-casa-insua/en/experiences/vista-alegre-workshops",
          note: "Official group page explains registration, materials, firing and collection or shipping.",
        },
        {
          title: "Center of Portugal: Vista Alegre Museum",
          url: "https://www.centerofportugal.com/entity/vista-alegre-museum",
          note: "Regional context for the museum and porcelain-making site in Ílhavo.",
        },
      ],
    },
  },
  {
    id: "poitiers-futuroscope-motion-images",
    slug: "poitiers-futuroscope-motion-images",
    title: "Let moving images move you at Futuroscope",
    summary:
      "Build a playful day around screens, motion and the strange architecture of a park near Poitiers.",
    field: "play",
    place: "Poitiers area, Futuroscope",
    country: "France",
    countrySlug: "france",
    regionSlug: "poitiers",
    kernel:
      "Choose a few experiences with different ways of creating movement, rather than treating the park as a list to finish. Notice when your body responds to an image and when a moving seat does the work. Between attractions, the unusual buildings make the walk part of the visit.",
    rootedness:
      "Futuroscope developed near Poitiers around image-based entertainment. Its combination of projection, simulation and rides offers a distinct route into the French theme-park landscape.",
    shift:
      "Compare how two attractions persuade you that you are somewhere else.",
    humanReturn:
      "A shared day of play and a new curiosity about the engineering behind a convincing illusion.",
    responsibility:
      "Height, age and health restrictions vary by attraction. Check each before joining a queue, especially for motion sensitivity. Follow restraint instructions. A park ticket does not guarantee that every attraction will be operating.",
    evidence:
      "The official attraction catalogue and FAQ establish public admission and the mix of experiences. EA has not ridden or assessed individual attractions. Programming changes with the season.",
    duration: "Plan a full day",
    participation: "Self-directed theme-park visit",
    access:
      "Choose a dated Futuroscope ticket and check the opening calendar. The park is outside central Poitiers. Aquascope and certain optional activities are separate products. Check the visitor app or day’s programme for closures, language support and show times.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.futuroscope.com/en/xperiences/futuroscope",
      sources: [
        {
          title: "Futuroscope experiences",
          url: "https://www.futuroscope.com/en/xperiences/futuroscope",
          note: "Official catalogue establishes the park’s image, motion and ride-based visitor offer.",
        },
        {
          title: "Futuroscope practical FAQ",
          url: "https://www.futuroscope.com/en/practical-information/faq",
          note: "Ticket scope, access conditions and practical preparation for the park.",
        },
      ],
    },
  },
  {
    id: "queenstown-luge-gravity-track",
    slug: "queenstown-luge-gravity-track",
    title: "Steer your own descent above Queenstown",
    summary:
      "A gravity-powered luge cart gives a mountain outing a hands-on, playful middle.",
    field: "play",
    place: "Queenstown, Skyline",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "queenstown",
    kernel:
      "Use the briefing to get comfortable with the brake before thinking about speed. Let the first run teach you the corners, then notice how a small change of line changes the next descent. Pause for the lake and mountains between rides, when you can look away from the track.",
    rootedness:
      "Queenstown’s Skyline luge sits above the town, reached by gondola. The experience joins a familiar scenic viewpoint with an activity in which you control the cart.",
    shift:
      "Find the pace at which you can read the track, rather than trying to keep up with another rider.",
    humanReturn:
      "The satisfaction of learning a simple control and using it more confidently on a second run.",
    responsibility:
      "Helmet and safety briefing are essential. Keep both feet inside and do not film with a handheld device. Solo riders must meet the published age and height rules. Discuss access needs directly. Weather and current site works can change the route.",
    evidence:
      "Skyline’s current page specifies timed entry for the first ride and detailed riding conditions. EA has not ridden the course. Its live operating status can change during the day.",
    duration: "Allow 2–3 hours including gondola, queues and several rides",
    participation:
      "Supervised introduction followed by self-controlled luge rides",
    access:
      "Book the Queenstown gondola and luge package with a first-ride session. Arrive at the lower gondola terminal at least 45 minutes beforehand. The first ride belongs within the booked 30-minute slot, while remaining rides can be taken later that operating day. Recheck weather holds before travelling.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://queenstown.skyline.co.nz/things-to-do/queenstown-luge/",
      sources: [
        {
          title: "Queenstown luge and booking conditions",
          url: "https://queenstown.skyline.co.nz/things-to-do/queenstown-luge/",
          note: "Current first-ride session rules, advance arrival, same-day use and operation caveats.",
        },
        {
          title: "Luge safety",
          url: "https://queenstown.skyline.co.nz/things-to-do/queenstown-luge/safety/",
          note: "Riding controls, briefing, age and height requirements and safe conduct.",
        },
      ],
    },
  },
  {
    id: "seoul-hikr-kpop-playground",
    slug: "seoul-hikr-kpop-playground",
    title: "Try a K-pop set without booking a studio in Seoul",
    summary:
      "HiKR Ground lets visitors play with backdrops, movement and a camera in a public tourism space.",
    field: "play",
    place: "Seoul, HiKR Ground",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    kernel:
      "Pick a set and try a short sequence with a friend behind the camera. Change the angle or timing and see how much the result shifts. You do not need choreography ready. The useful discovery is how framing and a few seconds of movement can build a scene.",
    rootedness:
      "The Korea Tourism Organization’s HiKR Ground uses contemporary Korean pop culture as a visitor entry point. Its second-floor K-pop spaces bring the language of a music video into a public, participatory setting.",
    shift:
      "Watch how a backdrop becomes a place once someone moves through it.",
    humanReturn:
      "A short clip you made together and a more attentive eye for what goes into a polished music-video image.",
    responsibility:
      "Take turns and avoid filming other visitors without agreement. This is a shared public attraction, so sets can be busy. Check current equipment instructions and any temporary restrictions. It is not access to a professional artist’s recording session.",
    evidence:
      "Korea Tourism Organization visitor pages document the K-pop floor, public access and hours. EA has not tested the equipment or visited the sets.",
    duration: "Allow 45–90 minutes",
    participation: "Self-directed play with K-pop-themed sets",
    access:
      "Visit HiKR Ground in central Seoul, not HiKR Station at Incheon Airport. Admission is free. The second floor normally opens Tuesday to Sunday, with the upper exhibition floors closed on Mondays. Confirm current hours and set availability before going.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=31124",
      sources: [
        {
          title: "Visit Korea: HiKR Ground",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=31124",
          note: "Primary tourism listing identifies the Seoul building, K-pop floor and public visiting conditions.",
        },
        {
          title: "Visit Korea: inside HiKR Ground",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=248208",
          note: "Additional official context and photographs of the immersive visitor spaces.",
        },
      ],
    },
  },
  {
    id: "vezac-marqueyssac-boxwood-walk",
    slug: "vezac-marqueyssac-boxwood-walk",
    title: "Walk through a garden shaped like a green landscape",
    summary:
      "Marqueyssac pairs hand-clipped boxwood with paths above the Dordogne valley.",
    field: "nature",
    place: "Vézac, Dordogne",
    country: "France",
    countrySlug: "france",
    regionSlug: "vezac",
    kernel:
      "Start near the château, where clipped forms gather tightly together, then take a longer path toward the valley views. Look back occasionally. The shapes that seem separate from one angle become a continuous surface from another, while the wider landscape stays comparatively open.",
    rootedness:
      "The gardens occupy a limestone spur above the Dordogne. Their intensely worked planting sits alongside wooded paths and viewpoints, making human shaping and the surrounding terrain visible in the same walk.",
    shift:
      "Notice the difference between the garden’s small curves and the much larger lines of the valley.",
    humanReturn:
      "A fresh way of seeing a designed landscape, with time outside rather than a quick photograph at the entrance.",
    responsibility:
      "Keep to open paths and protect the clipped planting. Wear shoes suitable for slopes and uneven ground. Check weather and accessible routes directly. This guide describes the garden walk, not the separate via ferrata or seasonal evening events.",
    evidence:
      "The gardens’ official visitor information documents the walks and year-round admission. EA has not walked the paths or checked their condition after weather events.",
    duration: "Allow 1.5–2.5 hours",
    participation: "Self-directed garden and viewpoint walk",
    access:
      "Check seasonal hours and buy garden admission through Marqueyssac’s official site. The site is in Vézac, outside Sarlat. Plan transport separately and leave enough daylight for the paths. Candlelit evenings and guided activities have their own calendars.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.marqueyssac.com/?lang=en",
      sources: [
        {
          title: "Marqueyssac visitor information",
          url: "https://www.marqueyssac.com/?lang=en",
          note: "Primary description of the gardens, walking routes, visitor options and seasonal opening information.",
        },
        {
          title: "Marqueyssac 2026 visitor leaflet",
          url: "https://www.marqueyssac.com/wp-content/uploads/2026/02/Depliant-MARQUEYSSAC-2026-2.pdf",
          note: "Current-year official visitor leaflet, used to distinguish normal admission from seasonal activities.",
        },
      ],
    },
  },
  {
    id: "nairobi-karura-forest-trails",
    slug: "nairobi-karura-forest-trails",
    title: "Give Nairobi a morning under the forest canopy",
    summary:
      "Choose a marked Karura Forest route and let the city’s pace fall behind you.",
    field: "nature",
    place: "Nairobi, Karura Forest",
    country: "Kenya",
    countrySlug: "kenya",
    regionSlug: "nairobi",
    kernel:
      "Read the route board before setting off and choose a distance you actually want to walk. Listen for changes between the broad paths and quieter stretches. If the waterfall is your aim, confirm the route at the gate rather than assuming every colour-marked loop leads there.",
    rootedness:
      "Karura offers public forest access within Nairobi. Its managed paths make a substantial stretch of greenery available without turning a city visit into a separate safari trip.",
    shift:
      "Notice the ordinary life of the forest before looking for a spectacular sighting.",
    humanReturn:
      "A practical outdoor pause that can sit alongside a day of food, art or neighbourhood exploration in Nairobi.",
    responsibility:
      "Stay on authorised routes, take litter out and do not approach or feed wildlife. No loud music or fires. Ground can be slippery after rain. Ask staff about current trail conditions and leave well before gates close.",
    evidence:
      "Friends of Karura publishes routes, gates and payment information. Its current essential-information page gives an earlier entry cutoff than older activity text, so the conservative current cutoff is used. EA has not inspected the trails.",
    duration: "Allow 1.5–3 hours, according to route",
    participation: "Self-directed marked forest walk",
    access:
      "Check the official gate map before travelling. Current entry is from 6am to 5:30pm, with final departure by 7pm. The forest currently requires M-Pesa payment through eCitizen, so arrange the payment method before arrival. Confirm any changes directly rather than relying on cash at the gate.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://friendsofkarura.org/essential-information/",
      sources: [
        {
          title: "Karura essential visitor information",
          url: "https://friendsofkarura.org/essential-information/",
          note: "Current gate, payment and entry-time information used ahead of older activity-page timings.",
        },
        {
          title: "Karura forest activities",
          url: "https://friendsofkarura.org/forest-activities/",
          note: "Official context for walking routes and permitted forest activities.",
        },
      ],
    },
  },
  {
    id: "otways-fly-treetop-walk",
    slug: "otways-fly-treetop-walk",
    title: "Walk into the canopy of the Otways",
    summary:
      "An elevated rainforest walkway changes the level from which you read the forest.",
    field: "nature",
    place: "Otways, Otway Fly",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "otways",
    kernel:
      "Look up from the ground trail before climbing to the walkway. At canopy height, find the trunks you were looking at from below and notice what becomes visible between them. Take your time on a still section and let the forest become more than a view from a platform.",
    rootedness:
      "Otway Fly sits in Victoria’s Otway Ranges, inland from the Great Ocean Road. Its elevated route offers a different perspective on the region’s wet forest, beyond a roadside lookout.",
    shift:
      "Compare the forest floor, the middle of a trunk and the canopy as three different places to look.",
    humanReturn:
      "A stronger sense of the forest’s vertical structure, with an easy question to carry into your next woodland walk.",
    responsibility:
      "Check operating and weather notices before driving. Follow restrictions during wind or storms and stay on the marked structure. The spiral tower involves stairs. Ask about the accessible route if stairs or longer walks are a concern.",
    evidence:
      "Otway Fly’s current site documents the treetop walk and planning information. EA has not walked the structure or assessed access on site. Wildlife sightings are not promised.",
    duration: "Allow about 1–2 hours for the walk and stops",
    participation: "Self-directed rainforest and elevated-canopy walk",
    access:
      "Book the Treetop Walk product and check final entry time. Otway Fly is near Weeaproinah, so allow for the inland drive. Zipline tours are separate and are not included in this guide. Confirm which parts of the walk are open on your day.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://otwayfly.com.au/",
      sources: [
        {
          title: "Otway Fly Treetop Adventures",
          url: "https://otwayfly.com.au/",
          note: "Current official site distinguishes the Treetop Walk from zipline activities.",
        },
        {
          title: "Otway Fly planning information",
          url: "https://otwayfly.com.au/plan-your-day/",
          note: "Official preparation, opening and practical visitor information.",
        },
      ],
    },
  },
  {
    id: "bangkok-yunomori-sukhumvit-baths",
    slug: "bangkok-yunomori-sukhumvit-baths",
    title: "Give Bangkok an unhurried bathhouse afternoon",
    summary:
      "At Yunomori’s Sukhumvit branch, Japanese-style bathing creates a pause between the city’s meals and movement.",
    field: "restore",
    place: "Bangkok, Sukhumvit 26",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    kernel:
      "Learn the bathing routine before entering, then choose a comfortable bath rather than trying every temperature. Leave time between soaks to sit and cool down. The garden bath and quieter edges of the room offer reasons to stay still without making the visit a programme to complete.",
    rootedness:
      "Yunomori’s original Bangkok branch brings a Japanese-style bathhouse format into Sukhumvit. Its own account connects some bath water with Kanchanaburi, while the visit itself remains an urban, purpose-built bathing experience.",
    shift:
      "Notice how the room asks you to slow down before deciding how long to stay.",
    humanReturn:
      "A spacious interval in the day, with enough time afterwards to re-enter the city gradually.",
    responsibility:
      "Read the current gender-separated bathing, clothing and hygiene rules before buying. Leave cameras out of bathing areas. Choose temperatures within your comfort and do not treat the visit as medical care. Confirm age, tattoo and access conditions directly if relevant.",
    evidence:
      "The official Sukhumvit pages list the branch’s baths and services. EA has not visited or verified water composition. Provider claims about detoxification or health benefits are not adopted.",
    duration: "Allow 2–3 hours at your own pace",
    participation: "Public bathhouse visit",
    access:
      "Choose Sukhumvit 26 when checking tickets or contacting Yunomori, as its Bangkok branches differ. Confirm current entry terms and what is included. Massage treatments and other services are separate choices, not necessary parts of the bathing visit.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.yunomorionsen.com/sukhumvit/onsen/",
      sources: [
        {
          title: "Yunomori Sukhumvit baths",
          url: "https://www.yunomorionsen.com/sukhumvit/onsen/",
          note: "Branch-specific list of baths and facilities. Promotional health claims are not used as evidence.",
        },
        {
          title: "Yunomori branch contacts",
          url: "https://www.yunomorionsen.com/contact-us/",
          note: "Official branch identification and contact route for current entry, access and bathing rules.",
        },
      ],
    },
  },
  {
    id: "quebec-strom-riverside-baths",
    slug: "quebec-strom-riverside-baths",
    title: "Watch the river between warm-water pauses in Québec",
    summary:
      "Strøm Old Quebec offers a thermal-bathing visit beside the St Lawrence, separate from a hotel stay.",
    field: "restore",
    place: "Québec City, Strøm Old Quebec",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "quebec-city",
    kernel:
      "Choose one warm pool, then leave time to rest before deciding what comes next. Look out toward the river and notice how the season changes the scene beyond the water. You can give the visit its own rhythm without following every hot-and-cold stage advertised.",
    rootedness:
      "The Old Quebec site places a contemporary Nordic-spa format beside the St Lawrence. It offers a waterside pause within a city stay, rather than a journey to a remote resort.",
    shift:
      "Let the rest between baths become part of the visit, not an interval to fill.",
    humanReturn:
      "A calmer stretch of the day and a different view of Québec’s waterfront.",
    responsibility:
      "Follow the site’s quiet-zone and device rules. Cold immersion is optional. Confirm health-related suitability with an appropriate professional if needed, rather than relying on spa marketing. Check the minimum age and mobility access for your date before purchasing.",
    evidence:
      "Strøm documents thermal-entry products for its Old Quebec site and general visitor rules. EA has not used the facilities or assessed therapeutic outcomes. Photography shows the site, not a guaranteed season or crowd level.",
    duration: "Allow 2–4 hours",
    participation: "Reserved thermal-bathing visit",
    access:
      "Book Old Quebec specifically and check the date and arrival window. Entry conditions, age rules and inclusions depend on the product. Treatments, food and accommodation packages are separate. Confirm access needs directly, as not every part of the site is step-free. Standard thermal entry is for ages 16 and over. Online purchases of services or gift cards have a 24-hour activation delay.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.stromspa.com/en/products/entry-to-the-thermal-experience-old-quebec-1",
      sources: [
        {
          title: "Strøm Old Quebec thermal entry",
          url: "https://www.stromspa.com/en/products/entry-to-the-thermal-experience-old-quebec-1",
          note: "Location-specific thermal-entry product and current purchase conditions.",
        },
        {
          title: "Strøm planning and visitor rules",
          url: "https://www.stromspa.com/en/pages/plan-your-visit",
          note: "Preparation, behaviour and bathing information, without adopting medical or therapeutic claims.",
        },
        {
          title: "Strøm terms of service",
          url: "https://www.stromspa.com/en/policies/terms-of-service",
          note: "Standard age threshold, gift-card conditions and online purchase activation delay.",
        },
      ],
    },
  },
  {
    id: "budapest-rudas-dome-rooftop",
    slug: "budapest-rudas-dome-rooftop",
    title: "Move from an old bathing dome to a Danube view",
    summary:
      "A carefully chosen Rudas ticket connects the Turkish bath with the modern panorama pool.",
    field: "restore",
    place: "Budapest, Rudas Thermal Bath",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    kernel:
      "Begin beneath the dome and look at how light reaches the water. After a rest, move to the modern wellness area and compare the enclosed room with the open city view. The appeal lies in the change of setting as much as in the bathing itself.",
    rootedness:
      "Rudas brings an Ottoman-era bathing space and newer facilities together on the Buda side of the Danube. A single visit can reveal different layers of Budapest’s bath culture.",
    shift:
      "Notice how the shape and light of a room alter the experience of sitting in warm water.",
    humanReturn:
      "A more specific memory of Budapest’s baths than a checklist of pools visited.",
    responsibility:
      "Entry is for ages 14 and above. Turkish-bath access changes between men-only, women-only and mixed sessions. Check the current timetable, wear swimwear where required and use a swimming cap in the swimming pool. Do not infer medical benefits.",
    evidence:
      "Rudas publishes separate pool information, ticket areas and a day-by-day access schedule. EA has not visited or confirmed current crowding or accessibility. Photography does not establish the ticket’s inclusions.",
    duration: "Allow 2–3 hours",
    participation: "Thermal and wellness bathing",
    access:
      "Choose a ticket that explicitly includes both the Turkish bath and wellness area. A weekend mixed session is the simplest starting point for a mixed group, subject to the current timetable. Check closures and pool access before buying. The separate Sky Terrace offer and night events have different conditions.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.rudasfurdo.hu/en/pools-and-saunas",
      sources: [
        {
          title: "Rudas pools and saunas",
          url: "https://www.rudasfurdo.hu/en/pools-and-saunas",
          note: "Primary descriptions of the Turkish bath, wellness and panorama pool, with age and swimming-cap rules.",
        },
        {
          title: "Rudas current opening schedule",
          url: "https://www.rudasfurdo.hu/en/opening-hours",
          note: "Current gender-specific and co-ed time windows, closure notices and final entry conditions.",
        },
      ],
    },
  },
  {
    id: "london-cafe-oto-open-ears",
    slug: "london-cafe-oto-open-ears",
    title: "Give unfamiliar music an evening at Cafe OTO",
    summary:
      "Choose a Dalston performance for the sound you have not yet learned to recognise.",
    field: "gather",
    place: "London, Dalston",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    kernel:
      "Read the event note, listen to a short sample if one is available, then leave some room for surprise. During the set, follow one player or one sound rather than trying to understand everything at once. A small change can become the event you remember.",
    rootedness:
      "Cafe OTO is a listening space in Dalston with a changing programme of experimental, improvised and other adventurous music. The room makes a close encounter with a particular performance possible, without promising the same atmosphere every night.",
    shift:
      "Listen for a decision being made in the moment, including the way another musician answers it.",
    humanReturn:
      "One new artist to follow and a reason to approach an unfamiliar programme with curiosity.",
    responsibility:
      "Keep conversation and phone use out of the performance. Some events are loud or standing, so check the listing and consider hearing protection. Confirm access seating in advance. Under-18 attendance requires an adult under the venue’s published policy.",
    evidence:
      "Cafe OTO’s programme and FAQ establish ticketed public performances and visitor arrangements. EA has not attended the listed artists or assessed a particular show. The photograph is an identified past performance, not an upcoming booking.",
    duration: "One evening, check doors and set times",
    participation: "Ticketed live-music performance",
    access:
      "Choose a dated event on the official site and read its format before buying. Seating is limited and generally first come. The venue lists step-free access and an accessible toilet. Contact it at least 48 hours ahead for access seating arrangements. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.cafeoto.co.uk/",
      sources: [
        {
          title: "Cafe OTO programme",
          url: "https://www.cafeoto.co.uk/",
          note: "Current dated public performances and official ticket links.",
        },
        {
          title: "Cafe OTO visitor information",
          url: "https://www.cafeoto.co.uk/info/",
          note: "Seating, entry confirmation, access arrangements and under-18 policy.",
        },
      ],
    },
  },
  {
    id: "sao-paulo-sesc-pompeia-evening",
    slug: "sao-paulo-sesc-pompeia-evening",
    title: "Build a São Paulo evening around a Sesc Pompeia show",
    summary:
      "A public cultural centre gives a performance room to sit within a larger part of city life.",
    field: "gather",
    place: "São Paulo, Sesc Pompeia",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "sao-paulo",
    kernel:
      "Choose the performance first, then arrive with time to walk through the public spaces. Notice who uses the place before the show begins. After taking your seat, let that ordinary activity outside give the music or performance a different setting.",
    rootedness:
      "Sesc Pompeia occupies a former industrial site reworked by Lina Bo Bardi. Its public cultural programme sits alongside everyday uses, so an evening here can connect architecture, social space and a specific live event.",
    shift:
      "Look at the whole place around the performance, not only the stage.",
    humanReturn:
      "A particular artist to remember and a sense of a cultural institution used as part of everyday São Paulo.",
    responsibility:
      "Check the event’s age classification, seating and access arrangements. Public entry to the centre does not grant access to every facility. The sports buildings have separate participation rules. Stadium events nearby can affect travel time.",
    evidence:
      "Sesc’s visitor page, updated in April 2026, confirms public access and box-office sales for shows. The programme determines what is available on a given date. EA has not attended or assessed a performance.",
    duration: "Allow an evening, according to the chosen show",
    participation: "Ticketed music or performance with a public-space visit",
    access:
      "Choose a show at Pompeia in the official Sesc programme. Every attendee needs the relevant ticket. General-public tickets are available, with discounts requiring proof of eligibility. If online registration is unsuitable for an overseas visitor, use the physical box office and confirm availability before travelling.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.sescsp.org.br/servicos-sesc-pompeia/",
      sources: [
        {
          title: "Sesc Pompeia visitor services",
          url: "https://www.sescsp.org.br/servicos-sesc-pompeia/",
          note: "Current public-access rules, physical ticket sales, age and discount conditions, plus travel advice.",
        },
        {
          title: "Sesc Pompeia programme",
          url: "https://www.sescsp.org.br/unidades/pompeia/ansehen/",
          note: "Official location-specific programme for selecting a dated event rather than assuming a daily show.",
        },
      ],
    },
  },
  {
    id: "seoul-seongsu-vinyl-listening",
    slug: "seoul-seongsu-vinyl-listening",
    title: "Choose a record and give it your attention in Seongsu",
    summary:
      "At Vinyl Seongsu, an individual turntable turns a café visit into time with an album.",
    field: "gather",
    place: "Seoul, Seongsu",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    kernel:
      "Pick a record you recognise, then one you do not. Ask for help with the turntable if needed and listen beyond the first track. If you come with a friend, exchange recommendations afterwards rather than keeping the visit inside a running conversation.",
    rootedness:
      "Vinyl Seongsu places record listening within Seoul’s contemporary café culture. The format gives each visitor a direct choice of music and a place to stay with it.",
    shift:
      "Notice what happens when you stop skipping and let an album choose the next song.",
    humanReturn:
      "A new record to seek out, or a familiar one heard with more attention.",
    responsibility:
      "Handle records and equipment as staff instruct and keep the volume comfortable. Respect other visitors’ listening and ask before including them in photographs. An individual listening station is not a live-music event or a professional listening test.",
    evidence:
      "The operator identifies its Seongsu location, while NOL’s place guide describes the record-listening format. EA has not checked the current record stock or tested the equipment.",
    duration: "Allow 1–2 hours, subject to the current entry policy",
    participation: "Self-selected vinyl listening in a café setting",
    access:
      "Check the Seongsu branch through Vinyl’s official location list. Entry fees, time limits, waiting and drink inclusions can change, so confirm them at the venue. Other branches have different settings. Do not assume a particular album will be available.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://vinylclub.co.kr/locations/",
      sources: [
        {
          title: "Vinyl official locations",
          url: "https://vinylclub.co.kr/locations/",
          note: "Primary confirmation of the Seongsu branch, distinct from Suwon, Jeju and other locations.",
        },
        {
          title: "NOL: Vinyl Seongsu",
          url: "https://world.nol.com/en/content/pois/32b9d55d-7c79-49a3-8eba-f5065299593b",
          note: "Independent place listing describing the individual-turntable listening format and location.",
        },
        {
          title: "Vinyl listening format",
          url: "https://vinylclub.co.kr/",
          note: "Operator describes choosing records and using individual turntables and headphones.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];

export const guideBatch65: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
