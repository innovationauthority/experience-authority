import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

const drafts = [
  {
    id: "shimamoto-yamazaki-monozukuri",
    slug: "shimamoto-yamazaki-monozukuri",
    title: "Follow a whisky from the still to the glass at Yamazaki",
    summary: "Follow a whisky production tour with a tasting in Shimamoto.",
    field: "taste",
    place: "Shimamoto, Osaka Prefecture",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "shimamoto",
    kernel:
      "Start with the production tour and save your questions for the tasting. Notice which aromas seem familiar before you read the tasting notes, then see how the guide connects them with decisions made at the distillery.",
    rootedness:
      "The still house connects the finished whisky with the shape and scale of its production equipment.",
    shift:
      "Listen for the difference between a familiar aroma and the words used to describe it.",
    humanReturn:
      "A concrete link between the equipment you saw and the aromas you noticed in the glass.",
    responsibility:
      "The standard tour is for visitors aged 20 and over. Use public transport if you intend to taste, and confirm the available language and access arrangements when reserving.",
    evidence:
      "Suntory documents the standard tour, tasting and separate reservation routes. EA has not visited or verified a particular departure.",
    duration: "Approximately 80 minutes",
    participation: "Guided distillery tour and tasting",
    access:
      "Official Suntory reservation flow. Lottery and released vacancies are distinct. Museum admission alone does not include production.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.suntory.com/factory/yamazaki/news/detail/how_to_make_a_reservation.html",
      sources: [
        {
          title: "Current primary booking notice",
          url: "https://www.suntory.com/factory/yamazaki/news/detail/how_to_make_a_reservation.html",
          note: "Current primary booking notice.",
        },
        {
          title: "Primary visitor rules",
          url: "https://www.suntory.com/factory/qa/",
          note: "Primary visitor rules.",
        },
        {
          title: "2023 renovation context, not current pricing",
          url: "https://www.suntory.com/news/article/14475E.html",
          note: "2023 renovation context, not current pricing.",
        },
      ],
    },
  },
  {
    id: "toulouse-airbus-a350",
    slug: "toulouse-airbus-a350",
    title: "Watch an aircraft take shape in Toulouse",
    summary: "See where the A350 comes together on a guided visit in Blagnac.",
    field: "learn",
    place: "Toulouse, Airbus in Blagnac",
    country: "France",
    countrySlug: "france",
    regionSlug: "toulouse",
    kernel:
      "From the viewing point, choose one part of an A350 to follow with your eyes. Look at the scale of the equipment around it and how much space a single assembly step takes up.",
    rootedness:
      "Toulouse’s aerospace industry becomes tangible at the assembly viewing point, where the aircraft and the equipment that holds it share the frame.",
    shift:
      "Look for the tools and fixtures that make an aircraft of this scale possible.",
    humanReturn:
      "A sense of how much space and coordination an aircraft assembly step can take.",
    responsibility:
      "Stay with the guide and follow the site’s photography rules. Bring the original ID specified in your booking. Production activity varies.",
    evidence:
      "Manatour describes the A350 route and its assembly viewing point. EA has not attended or verified what will be visible on a given day.",
    duration: "Approximately 90 minutes",
    participation: "Guided factory observation",
    access:
      "Reserve at least two full working days ahead. Arrive 30 minutes early at Musée aeroscopia in Blagnac. Bring original valid ID. Non-EU visitors need a passport. The operator lists the route as inaccessible to people with reduced mobility and prohibits cameras on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.manatour.fr/airbus/",
      sources: [
        {
          title: "Toulouse Tourisme",
          url: "https://www.toulouse-tourisme.com/en/activite/lets-visit-airbus/",
          note: "Local tourism listing for the Airbus factory visit.",
        },
        {
          title: "Primary route and booking conditions",
          url: "https://www.manatour.fr/airbus/",
          note: "Primary route and booking conditions.",
        },
      ],
    },
  },
  {
    id: "wilderness-touw-canoe",
    slug: "wilderness-touw-canoe",
    title: "Read the forest from the Touw River",
    summary: "Paddle upstream on the Touw River from Ebb-and-Flow.",
    field: "nature",
    place: "Wilderness, Garden Route",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "garden-route",
    kernel:
      "Set out from Ebb-and-Flow only after checking the river conditions. Let a quiet stretch of paddling reveal what is easy to miss from land, from the shape of the banks to the reflections under the trees.",
    rootedness:
      "The river offers a view of the Garden Route’s wooded banks from water level.",
    shift: "Notice how the forest looks when your route runs along the water.",
    humanReturn:
      "A quieter view of the Garden Route and a reason to pay attention to the river’s pace.",
    responsibility:
      "Ask reception about the water, weather, buoyancy aids and return deadline before setting out. Stay within the permitted route and follow the park’s instructions.",
    evidence:
      "SANParks lists canoe hire and upstream paddling on the Touw River. EA has not paddled this route or checked conditions in person.",
    duration: "Confirm the hire period at reception",
    participation: "Independent canoe outing with hired equipment",
    access:
      "SANParks publishes canoe hire from Ebb-and-Flow reception. Confirm same-day water and weather conditions with the park.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.sanparks.org/parks/garden-route/what-to-do/activities/water-sports",
      sources: [
        {
          title: "Primary canoe-hire and river route",
          url: "https://www.sanparks.org/parks/garden-route/what-to-do/activities/water-sports",
          note: "Primary canoe-hire and river route.",
        },
        {
          title: "Primary access point",
          url: "https://www.sanparks.org/parks/garden-route/camps/wilderness-ebb-and-flow",
          note: "Primary access point.",
        },
        {
          title: "Current park section brochure",
          url: "https://www.sanparks.org/wp-content/uploads/2026/01/Garden-Route-National-Park-Wilderness-Section.pdf",
          note: "Current park section brochure.",
        },
      ],
    },
  },
  {
    id: "otake-simose-movable-galleries",
    slug: "otake-simose-movable-galleries",
    title: "See how a museum can rearrange itself",
    summary:
      "See the coloured galleries arranged on the water at SIMOSE in Otake.",
    field: "learn",
    place: "Otake, SIMOSE Art Museum",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "otake",
    kernel:
      "Look at the coloured gallery modules from across the water before entering. Notice the gaps between them and think about how a different arrangement would change the walk through an exhibition.",
    rootedness:
      "The Otake museum uses a water basin to make its gallery layout adaptable. Look at the arrangement against the coast before moving inside.",
    shift:
      "See an exhibition room as something that can change position as well as contents.",
    humanReturn: "A new way to read the spaces between galleries.",
    responsibility:
      "Check exhibition changeovers and opening days before travelling. The modules may be rearranged between exhibitions.",
    evidence:
      "SIMOSE documents the movable galleries and public admission. EA has not visited or observed the modules being moved.",
    duration: "Allow time for the exhibition and the outdoor view",
    participation: "Independent museum visit",
    access:
      "Public museum admission, with current tickets available at reception according to the official visit page.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://simose-museum.jp/en/info/",
      sources: [
        {
          title: "Primary mechanism description",
          url: "https://simose-museum.jp/en/facility/exhibition-rooms/",
          note: "Primary mechanism description.",
        },
        {
          title: "Primary access",
          url: "https://simose-museum.jp/en/info/",
          note: "Use this official page to check admission and opening arrangements.",
        },
        {
          title: "Primary photographs",
          url: "https://simose-museum.jp/en/",
          note: "Official photography provides context for the site and layout.",
        },
      ],
    },
  },
  {
    id: "salford-rhs-bridgewater",
    slug: "salford-rhs-bridgewater",
    title: "Read a new garden inside old walls",
    summary:
      "Explore a restored walled garden and a streamside landscape in Salford.",
    field: "nature",
    place: "Salford, RHS Garden Bridgewater",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "salford",
    kernel:
      "Begin within the old garden walls, then follow the streamside planting to the water. Pause where the path opens onto the pond and look back at the change in scale.",
    rootedness:
      "The walled garden gives the planting a strong frame. The streamside route opens onto water, stone and softer edges.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Check seasonal hours, path conditions and admission before travelling.",
    evidence:
      "RHS documents public admission and the garden areas described here. EA has not walked the route.",
    duration: "Allow a few unhurried hours",
    participation: "Independent visit",
    access:
      "Public garden admission through RHS Bridgewater. Seasonal hours and ticket conditions apply.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.rhs.org.uk/gardens/bridgewater/",
      sources: [
        {
          title: "Primary visitor offer",
          url: "https://www.rhs.org.uk/gardens/bridgewater/",
          note: "Primary visitor offer.",
        },
        {
          title: "Primary areas and photographs",
          url: "https://www.rhs.org.uk/gardens/bridgewater/garden-highlights",
          note: "Primary areas and photographs.",
        },
      ],
    },
  },
  {
    id: "copenhagen-tivoli-garden-play",
    slug: "copenhagen-tivoli-garden-play",
    title: "Find a different pace inside Tivoli",
    summary:
      "Walk Tivoli’s gardens and watch Copenhagen’s amusement park change as the lights come on.",
    field: "play",
    place: "Copenhagen, Tivoli Gardens",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    kernel:
      "Walk through the gardens first. At dusk, find a spot where you can watch the lights and the movement of the swing carousel.",
    rootedness:
      "Tivoli brings gardens, rides and entertainment together in central Copenhagen. Walking the grounds is an experience in its own right.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Check the opening season and ride restrictions. Buy a ride ticket separately if needed.",
    evidence:
      "Tivoli publishes admission, season dates and ride information. EA has not attended or checked which rides will run during a particular visit.",
    duration: "Allow a few unhurried hours",
    participation: "Independent visit",
    access:
      "Choose dated admission using Tivoli’s official calendar. Ride products are separate.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.tivoli.dk/en/plan-your-visit",
      sources: [
        {
          title: "Primary calendar and tickets",
          url: "https://www.tivoli.dk/en/plan-your-visit",
          note: "Primary calendar and tickets.",
        },
        {
          title: "Primary rules",
          url: "https://www.tivoli.dk/en/practical-information/faq",
          note: "Operator rules for admission and participation.",
        },
      ],
    },
  },
  {
    id: "bucharest-therme-palm",
    slug: "bucharest-therme-palm",
    title: "Give Bucharest a poolside pause beneath palms",
    summary: "Leave time between dips beneath the palms at Therme București.",
    field: "restore",
    place: "Bucharest, Therme in Balotești",
    country: "Romania",
    countrySlug: "romania",
    regionSlug: "bucharest",
    kernel:
      "Leave time to sit by the pool between dips. Look up at the palms and the roof and notice how much of the atmosphere comes from the space around the water.",
    rootedness:
      "The glass roof and planting are part of the experience. Pause by the water and look at how the light reaches the pool.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Check The Palm ticket, age rules and current opening hours before travelling. Bring the swimwear and footwear specified by the venue.",
    evidence:
      "Therme documents The Palm and its admission rules. EA has not visited or assessed the facilities.",
    duration: "Choose a ticket duration and allow time for changing",
    participation: "Independent thermal pool visit",
    access:
      "Choose The Palm admission for the desired date and duration through Therme’s official tickets.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.therme.ro/intrebari-frecvente",
      sources: [
        {
          title: "Primary rules and zone boundaries",
          url: "https://www.therme.ro/intrebari-frecvente",
          note: "Primary rules and zone boundaries.",
        },
        {
          title: "Primary tickets, current operations and photographs",
          url: "https://www.therme.ro/",
          note: "Primary tickets, current operations and photographs.",
        },
      ],
    },
  },
  {
    id: "kopavogur-sky-lagoon",
    slug: "kopavogur-sky-lagoon",
    title: "Watch the Atlantic from a warm-water pause",
    summary:
      "Take time in the warm outdoor lagoon and watch the horizon at Kópavogur.",
    field: "restore",
    place: "Kópavogur, Sky Lagoon",
    country: "Iceland",
    countrySlug: "iceland",
    regionSlug: "kopavogur",
    kernel:
      "Give yourself time in the warm water to watch the horizon. If you choose the Skjól sequence, follow the venue’s guidance and take the parts that suit you at your own pace.",
    rootedness:
      "Water, rock and the horizon shape this coastal bathing experience. Give yourself time in the main lagoon before deciding whether to try the guided sequence.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Check admission, age and changing facilities when booking. Follow staff instructions and skip the cold plunge if it does not suit you.",
    evidence:
      "Sky Lagoon documents admission and the Skjól sequence. EA has not visited or assessed the bathing facilities.",
    duration: "Choose a ticket duration and allow time for changing",
    participation: "Independent thermal pool visit",
    access:
      "Reserve the chosen Sky Lagoon pass directly. Shared and private changing options have different products.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.skylagoon.com/",
      sources: [
        {
          title: "Sky Lagoon Skjól",
          url: "https://www.skylagoon.com/experience/skjol-ritual/",
          note: "Operator description of the bathing sequence.",
        },
        {
          title: "Primary booking, visitor conditions and photography",
          url: "https://www.skylagoon.com/",
          note: "Primary booking, visitor conditions and photography.",
        },
      ],
    },
  },
  {
    id: "naoshima-chichu-daylight",
    slug: "naoshima-chichu-daylight",
    title: "Let daylight change what you see underground",
    summary:
      "Give your eyes time to adjust as you move through Tadao Ando’s largely underground museum.",
    field: "witness",
    place: "Naoshima, Chichu Art Museum",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "naoshima",
    kernel:
      "Let your eyes adjust as you move from the concrete passages into the galleries. Give one work several minutes and notice what the room’s light does to its edges and surfaces.",
    rootedness:
      "The courtyard offers a way to notice daylight before entering galleries where light can change the perception of a work.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Reserve timed admission and allow for the journey across the island. Follow room-specific photography and access rules.",
    evidence:
      "Benesse Art Site Naoshima documents the building, permanent collection and timed admission. EA has not visited or verified the light at a particular hour.",
    duration: "Allow time for timed admission and an unhurried visit",
    participation: "Independent museum visit",
    access: "Use the Benesse Art Site Naoshima official timed admission route.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://benesse-artsite.jp/en/art/chichu.html",
      sources: [
        {
          title: "Primary museum scope and admission",
          url: "https://benesse-artsite.jp/en/art/chichu.html",
          note: "Primary museum scope and admission.",
        },
        {
          title: "Primary general visitor information",
          url: "https://benesse-artsite.jp/en/general-information.html",
          note: "Primary general visitor information.",
        },
      ],
    },
  },
  {
    id: "wales-bounce-below",
    slug: "wales-bounce-below",
    title: "Bounce through a former slate cavern",
    summary:
      "Explore suspended nets inside a former slate cavern in North Wales.",
    field: "play",
    place: "Blaenau Ffestiniog, Bounce Below",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "blaenau-ffestiniog",
    kernel:
      "Take the first stretch of net slowly. Once you are used to the movement, pause where the route allows and look at how the cavern holds the play area.",
    rootedness:
      "The nets make the cavern’s scale visible from different heights. Begin at a pace that lets you get used to the movement beneath your feet.",
    shift: "Notice how the layout changes the pace of the visit.",
    humanReturn:
      "A route worth remembering for the details you notice between stops.",
    responsibility:
      "Follow the operator’s supervision, footwear, height and weight rules. Check physical suitability before booking and bring a warm layer.",
    evidence:
      "Zip World documents the underground activity and its restrictions. EA has not visited or assessed the physical demands on site.",
    duration: "Up to one hour, plus time for check-in",
    participation: "Prebooked underground net play",
    access:
      "Prebook Bounce Below itself through Zip World, not a zip-line or other underground product.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.zipworld.co.uk/adventures/bounce-below",
      sources: [
        {
          title: "Zip World booking terms",
          url: "https://www.zipworld.co.uk/terms-and-conditions",
          note: "Operator booking and admission terms.",
        },
        {
          title: "Primary specific activity, restrictions and photograph",
          url: "https://www.zipworld.co.uk/adventures/bounce-below",
          note: "Primary specific activity, restrictions and photograph.",
        },
      ],
    },
  },
  {
    id: "kobarid-hisa-franko",
    slug: "kobarid-hisa-franko",
    title: "Taste the Soča Valley through a changing menu",
    place: "Staro Selo near Kobarid",
    country: "Slovenia",
    field: "taste",
    countrySlug: "slovenia",
    regionSlug: "kobarid",
    summary: "Taste a seasonal menu shaped by the Soča Valley.",
    kernel:
      "At a table in Staro Selo, give the tasting menu the time you would give a walk through the Soča Valley. Pick one ingredient you recognise and ask what the kitchen has done to change the way you taste it.",
    rootedness:
      "The restaurant in Staro Selo serves one changing menu at lunch and dinner. Ask how the dish in front of you connects with the valley.",
    responsibility:
      "Reserve ahead and discuss dietary restrictions with the restaurant before paying.",
    duration: "About three hours",
    participation: "Reserved tasting menu",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn: "Taste a seasonal menu shaped by the Soča Valley.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Advance restaurant reservation through the official site. Accommodation is a separate booking.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.hisafranko.com/en/faq",
      sources: [
        {
          title: "Primary access and restrictions",
          url: "https://www.hisafranko.com/en/faq",
          note: "Primary access and restrictions.",
        },
        {
          title: "Primary culinary and photographic context",
          url: "https://www.hisafranko.com/",
          note: "Primary culinary and photographic context.",
        },
      ],
    },
  },
  {
    id: "quito-toak-chocolate-art",
    slug: "quito-toak-chocolate-art",
    title: "Taste Ecuadorian chocolate inside an artist’s former home",
    place: "Quito, Fundación Guayasamín",
    country: "Ecuador",
    field: "taste",
    countrySlug: "ecuador",
    regionSlug: "quito",
    summary:
      "Pair a visit to an artist’s former home with an Ecuadorian chocolate tasting.",
    kernel:
      "Look at how the museum sets out an artist’s work before you sit down to taste chocolate. Compare two pieces slowly and notice how the flavour changes after the chocolate melts.",
    rootedness:
      "The tasting follows the museum visit. Give each chocolate time to melt and notice where its texture and flavour change.",
    responsibility:
      "Confirm your group size and the museum meeting point before booking.",
    duration: "About two hours",
    participation: "Guided visit and tasting",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Pair a visit to an artist’s former home with an Ecuadorian chocolate tasting.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Prebook the public Chocolate & Art experience through the provider’s linked calendar. Private group format means a publicly offered product, not special private permission.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://toakchocolate.com/pages/chocolate-tour",
      sources: [
        {
          title: "Fundación Guayasamín house museum",
          url: "https://www.guayasamin.org/casa-museo/index.html",
          note: "Museum context for the former home and studio.",
        },
        {
          title: "Primary format, booking and photographs",
          url: "https://toakchocolate.com/pages/chocolate-tour",
          note: "Primary format, booking and photographs.",
        },
      ],
    },
  },
  {
    id: "colome-james-turrell-light",
    slug: "colome-james-turrell-light",
    title: "Give light time in the Calchaquí Valley",
    place: "Colomé, Molinos, Salta",
    country: "Argentina",
    field: "witness",
    countrySlug: "argentina",
    regionSlug: "molinos",
    summary:
      "Spend time with light installations at the James Turrell Museum in Colomé.",
    kernel:
      "Allow a little time between the light rooms. Coming from the bright Calchaquí landscape, notice when you can no longer tell whether you are looking at a surface or into a space.",
    rootedness:
      "The light rooms sit within the Calchaquí Valley. Allow your eyes to adjust and leave time between installations.",
    responsibility:
      "Confirm the museum visit before travelling and allow time for the remote approach.",
    duration: "Confirm session length directly",
    participation: "Reserved museum visit",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Spend time with light installations at the James Turrell Museum in Colomé.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Advance confirmation directly with the public reservations contact on Bodega Colomé’s official site. The current official homepage explicitly welcomes day visitors and museum tours.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://bodegacolome.com/en/homepage/",
      sources: [
        {
          title: "Current primary day-visitor and museum invitation",
          url: "https://bodegacolome.com/en/homepage/",
          note: "Current primary day-visitor and museum invitation.",
        },
        {
          title: "Primary museum and reservation contact",
          url: "https://bodegacolome.com/en/hospitality/",
          note: "Primary museum and reservation contact.",
        },
        {
          title:
            "National tourism corroboration of reservation-only museum access",
          url: "https://www.argentina.travel/enoturismo/bodega-colome",
          note: "National tourism corroboration of reservation-only museum access.",
        },
      ],
    },
  },
  {
    id: "jeju-arte-immersive-nature",
    slug: "jeju-arte-immersive-nature",
    title: "Walk into a digital landscape on Jeju",
    place: "Aewol, Jeju",
    country: "South Korea",
    field: "witness",
    countrySlug: "south-korea",
    regionSlug: "jeju",
    summary:
      "Walk through projected landscapes in the Jeju branch of ARTE Museum.",
    kernel:
      "Pause at the edge of an installation before stepping in. Watch how the projections travel across walls and floor, then see what changes as you move closer.",
    rootedness:
      "The former industrial space holds room-scale projections. Watch how the image moves across surfaces as you change position.",
    responsibility:
      "Check current admission and any notices about sound, light and access.",
    duration: "Allow time to explore the rooms",
    participation: "Independent exhibition visit",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Walk through projected landscapes in the Jeju branch of ARTE Museum.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Use the official JEJU branch at artemuseum.com, checking regular admission versus the optional tea product.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://artemuseum.com/JEJU",
      sources: [
        {
          title: "Primary exact branch and access",
          url: "https://artemuseum.com/JEJU",
          note: "Primary exact branch and access.",
        },
        {
          title: "National tourism context and documentary photographs",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=113116",
          note: "National tourism context and documentary photographs.",
        },
      ],
    },
  },
  {
    id: "panama-biomuseo-panamarama",
    slug: "panama-biomuseo-panamarama",
    title: "Let Panama’s landscapes fill the room",
    place: "Panama City",
    country: "Panama",
    field: "learn",
    countrySlug: "panama",
    regionSlug: "panama-city",
    summary:
      "See how Panamarama surrounds visitors with images of Panama’s landscapes.",
    kernel:
      "Stand where you can see more than one screen. Follow an image into your peripheral vision, then pick a quiet detail you missed while taking in the room as a whole.",
    rootedness:
      "At Biomuseo, ten screens change how you take in a scene. Follow an image across the room and then look for the small details.",
    responsibility:
      "Check whether the permanent installation is operating before your visit.",
    duration: "Allow time for the museum galleries",
    participation: "Independent museum visit",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "See how Panamarama surrounds visitors with images of Panama’s landscapes.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Public museum ticket from Biomuseo. Check operating day before travel.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://biomuseo.org/permanentes/",
      sources: [
        {
          title: "Primary gallery content",
          url: "https://biomuseo.org/permanentes/",
          note: "Primary gallery content.",
        },
        {
          title: "Primary access",
          url: "https://biomuseo.org/",
          note: "Use this official page to check admission and opening arrangements.",
        },
        {
          title: "Creator documentation and installation photography",
          url: "https://www.rlmg.com/work/biomuseo",
          note: "Creator documentation and installation photography.",
        },
      ],
    },
  },
  {
    id: "fabriano-paper-sheet",
    slug: "fabriano-paper-sheet",
    title: "Lift a sheet of paper from the vat in Fabriano",
    place: "Fabriano, Marche",
    country: "Italy",
    field: "make",
    countrySlug: "italy",
    regionSlug: "fabriano",
    summary: "Make a sheet of paper at Fabriano’s paper and watermark museum.",
    kernel:
      "Watch the papermaker lift the mould from the vat. When it is your turn, notice how the water drains and how an even movement leaves a sheet behind.",
    rootedness:
      "The workshop gives you a chance to see how a mould and draining water turn wet pulp into a sheet.",
    responsibility:
      "Reserve the hands-on workshop separately from the museum visit and confirm the language.",
    duration: "Confirm workshop duration when booking",
    participation: "Hands-on paper workshop",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Make a sheet of paper at Fabriano’s paper and watermark museum.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Reserve the handmade-paper workshop through the museum. The hands-on add-on is distinct from an ordinary demonstration or museum ticket.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://museodellacarta.com/en/index.html",
      sources: [
        {
          title: "Primary hands-on offer",
          url: "https://museodellacarta.com/en/index.html",
          note: "Primary hands-on offer.",
        },
        {
          title: "Primary separate workshop fee and languages",
          url: "https://www.museodellacarta.com/en/entrance_prices",
          note: "Primary separate workshop fee and languages.",
        },
        {
          title: "Primary booking route",
          url: "https://www.museodellacarta.com/en/prenotazioni/index/",
          note: "Primary booking route.",
        },
        {
          title: "Institutional history only, stale practical fields excluded",
          url: "https://cultura.gov.it/luogo/museo-della-carta-e-della-filigrana-di-fabriano",
          note: "Institutional history only, stale practical fields excluded.",
        },
      ],
    },
  },
  {
    id: "bali-john-hardy-customisation",
    slug: "bali-john-hardy-customisation",
    title: "Follow a jewellery idea from sketch to wax in Bali",
    place: "Bali, Kapal Bamboo Workshop",
    country: "Indonesia",
    field: "make",
    countrySlug: "indonesia",
    regionSlug: "bali",
    summary:
      "Take a jewellery idea from a drawing to a wax form at the Kapal workshop.",
    kernel:
      "Bring a simple idea for a piece of jewellery. See what changes when you move from a drawn line to a shape in wax and start to consider how it will be worn.",
    rootedness:
      "The customisation programme gives you time with an artisan to see what changes when an idea takes shape in a material.",
    responsibility:
      "Confirm the programme, total cost and shipping arrangements with the workshop.",
    duration: "About four hours",
    participation: "Booked artisan workshop",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Take a jewellery idea from a drawing to a wax form at the Kapal workshop.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Publicly offered prebooked masterclass. Official page requests reservation two days ahead.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://johnhardy.com/en-sg/pages/visit-us-in-bali",
      sources: [
        {
          title: "Primary distinct products, locations and reservations",
          url: "https://johnhardy.com/en-sg/pages/visit-us-in-bali",
          note: "Primary distinct products, locations and reservations.",
        },
        {
          title:
            "Independent discovery/context, not authority for exact current inclusions",
          url: "https://silverkris.singaporeair.com/guide/indonesia/dps/do-bali/john-hardy-workshop-tour-and-jewellery-masterclasses/",
          note: "Independent discovery/context, not authority for exact current inclusions.",
        },
      ],
    },
  },
  {
    id: "tokyo-kakimori-ink",
    slug: "tokyo-kakimori-ink",
    title: "Mix a colour you can write with in Tokyo",
    place: "Tokyo, Kakimori in Kuramae",
    country: "Japan",
    field: "make",
    countrySlug: "japan",
    regionSlug: "tokyo",
    summary: "Mix a colour for writing at Kakimori’s Inkstand.",
    kernel:
      "Bring a colour you want to remember. Mix a few drops, put a sample on paper and give it a moment before adjusting the ratio. Staff prepare the bottle from your final recipe.",
    rootedness:
      "The workshop in Kuramae lets you test blends on paper before staff prepare the final bottle.",
    responsibility:
      "Book a participant place. Ask about access arrangements if needed and wear something you can risk staining.",
    duration: "Allow about two hours including preparation",
    participation: "Reserved ink-mixing session",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn: "Mix a colour for writing at Kakimori’s Inkstand.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Reserve through the Jicoo link on Kakimori’s official Inkstand page.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://kakimori.com/en/pages/inkstand-by-kakimori",
      sources: [
        {
          title: "Primary format and process",
          url: "https://kakimori.com/en/pages/inkstand-by-kakimori",
          note: "Primary format and process.",
        },
        {
          title: "Current primary booking read in browser",
          url: "https://www.jicoo.com/t/LzFMdIozws2v/e/reserve_inkstand",
          note: "Current primary booking read in browser.",
        },
      ],
    },
  },
  {
    id: "melbourne-urbnsurf-beginner",
    slug: "melbourne-urbnsurf-beginner",
    title: "Catch a first wave without leaving Melbourne",
    place: "Melbourne, URBNSURF in Tullamarine",
    country: "Australia",
    field: "play",
    countrySlug: "australia",
    regionSlug: "melbourne",
    summary: "Practise catching a first wave at a surf lagoon in Melbourne.",
    kernel:
      "Practise getting onto the board during the land session. In the water, focus on one movement per attempt and give yourself time to find the timing.",
    rootedness:
      "The lesson starts on land and moves into beginner waves in the constructed lagoon. Focus on timing as you get onto the board.",
    responsibility:
      "Select the Melbourne beginner session and confirm age, swimming and equipment requirements.",
    duration: "About 90 minutes",
    participation: "Guided beginner surf lesson",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Practise catching a first wave at a surf lagoon in Melbourne.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Book the Melbourne 13+ Beginner Lesson through the operator’s specific booking link.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://urbnsurf.com/learn/beginner-lesson/",
      sources: [
        {
          title: "Primary lesson format and melbourne booking",
          url: "https://urbnsurf.com/learn/beginner-lesson/",
          note: "Primary lesson format and melbourne booking.",
        },
        {
          title: "Primary location",
          url: "https://urbnsurf.com/visit/melbourne/",
          note: "Official venue page identifying the location and visitor facilities.",
        },
      ],
    },
  },
  {
    id: "kigali-nyandungu-wetland",
    slug: "kigali-nyandungu-wetland",
    title: "Follow a wetland through Kigali",
    place: "Kigali",
    country: "Rwanda",
    field: "nature",
    countrySlug: "rwanda",
    regionSlug: "kigali",
    summary: "Follow the paths and ponds of Kigali’s Nyandungu wetland park.",
    kernel:
      "Follow the path towards the ponds and stop where the water opens up. Listen for the change from the street and watch for movement at the water’s edge.",
    rootedness:
      "The restored park offers a public route through urban wetland habitat. Give yourself time to stop at the water.",
    responsibility: "Check opening conditions and stay on designated paths.",
    duration: "At your own pace",
    participation: "Independent wetland walk",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Follow the paths and ponds of Kigali’s Nyandungu wetland park.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Public eco-park visit using the park’s official visitor information.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://nyandunguecopark.rw/",
      sources: [
        {
          title: "Primary public access",
          url: "https://nyandunguecopark.rw/",
          note: "Primary public access.",
        },
        {
          title: "Primary park context and photography",
          url: "https://nyandunguecopark.rw/aboutus",
          note: "Primary park context and photography.",
        },
        {
          title: "Tourism authority context",
          url: "https://www.rcb.rw/attractions/nyandungu-urban-wetland-eco-park",
          note: "Tourism authority context.",
        },
      ],
    },
  },
  {
    id: "melbourne-sense-of-self",
    slug: "melbourne-sense-of-self",
    title: "Make room for two quiet hours in Collingwood",
    place: "Melbourne, Sense of Self in Collingwood",
    country: "Australia",
    field: "restore",
    countrySlug: "australia",
    regionSlug: "melbourne",
    summary: "Take an unhurried bathhouse session in Collingwood.",
    kernel:
      "Choose a session that suits the pace you want. Spend a little time in one part of the bathhouse before deciding whether to move on, and leave time at the end for changing.",
    rootedness:
      "The Collingwood bathhouse offers a shared place to pause, with a booked session and time to change.",
    responsibility:
      "Check the Collingwood calendar, age and swimwear rules. Ask about accessible facilities before booking.",
    duration: "Two hours including changing",
    participation: "Booked bathhouse session",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn: "Take an unhurried bathhouse session in Collingwood.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Prebook a two-hour bathhouse session at the Collingwood address, not Sydney.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.sos-senseofself.com/locations/collingwood/",
      sources: [
        {
          title: "Current exact branch, session and photographs",
          url: "https://www.sos-senseofself.com/locations/collingwood/",
          note: "Current exact branch, session and photographs.",
        },
        {
          title: "Current participation and access rules, read in browser",
          url: "https://sos-senseofself.com/faqs",
          note: "Current participation and access rules, read in browser.",
        },
      ],
    },
  },
  {
    id: "london-ronnie-scotts-main-club",
    slug: "london-ronnie-scotts-main-club",
    title: "Choose a set and give Soho the evening",
    place: "London, Ronnie Scott’s in Soho",
    country: "United Kingdom",
    field: "gather",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    summary:
      "Choose a Main Club performance and spend the evening listening in Soho.",
    kernel:
      "Choose a Main Club set with time to settle in. Pick one instrument to listen for in the first tune and notice how the rest of the group makes room for it.",
    rootedness:
      "The Main Club and Upstairs run separate programmes. Choose a set that gives you time to arrive and settle before the music starts.",
    responsibility:
      "Read the age and admission rules for your chosen performance and follow the club’s recording policy.",
    duration: "Check the performance listing",
    participation: "Ticketed live jazz",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Choose a Main Club performance and spend the evening listening in Soho.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Choose a current Main Club performance on the official calendar, then reserve that specific set. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.ronniescotts.co.uk/visit/plan-your-visit",
      sources: [
        {
          title: "Primary access and room rules",
          url: "https://www.ronniescotts.co.uk/visit/plan-your-visit",
          note: "Primary access and room rules.",
        },
        {
          title: "Current programme",
          url: "https://www.ronniescotts.co.uk/",
          note: "Check the current programme for dates and performance details.",
        },
      ],
    },
  },
  {
    id: "mexico-city-sona-listening",
    slug: "mexico-city-sona-listening",
    title: "Give an album your whole attention in Mexico City",
    place: "Mexico City",
    country: "Mexico",
    field: "gather",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    summary: "Give an album your attention in a room designed for listening.",
    kernel:
      "Choose an album you want to hear in full. Put the phone away, give the opening tracks time to establish the room and listen for a sound you may have missed on headphones.",
    rootedness:
      "Sona’s listening sessions put a complete record at the centre. Choose a programme you want to hear without conversation or a phone in hand.",
    responsibility:
      "Check the listing for the precise format and length of the session.",
    duration: "Varies by programme",
    participation: "Booked group listening session",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn:
      "Give an album your attention in a room designed for listening.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Book a named public listening session through sona.mx. Choose ordinary music listening from the current calendar.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://sona.mx/en",
      sources: [
        {
          title: "Primary current programme",
          url: "https://sona.mx/en",
          note: "Primary current programme.",
        },
        {
          title: "Primary listening format",
          url: "https://sona.mx/en/about",
          note: "Primary listening format.",
        },
        {
          title: "Independent architecture context and photo leads",
          url: "https://www.azuremagazine.com/article/sona-listening-room-mexico-city/",
          note: "Independent architecture context and photo leads.",
        },
      ],
    },
  },
  {
    id: "istanbul-nardis-jazz",
    slug: "istanbul-nardis-jazz",
    title: "Listen to Istanbul through a small jazz room",
    place: "Istanbul, Nardis in Galata",
    country: "Türkiye",
    field: "gather",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    summary: "Hear a live jazz set from a shared table in Galata.",
    kernel:
      "Choose a set from the current Galata programme. From a shared table, listen for how the musicians move from the tune into improvisation and see what changes in the second set.",
    rootedness:
      "The room hosts local and visiting musicians. Give yourself time to listen to how a group moves from the tune into improvisation.",
    responsibility:
      "Confirm the current booking method, show date and arrival time directly with the club.",
    duration: "Confirm times for the chosen show",
    participation: "Reserved live jazz",
    shift: "Pay attention to the detail you would otherwise pass by.",
    humanReturn: "Hear a live jazz set from a shared table in Galata.",
    evidence:
      "The linked public sources describe the format and access. EA has not visited or verified the experience on site.",
    access:
      "Use the current direct phone/email reservation route. The provider says online ticket sales ended on 24 September.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.nardisjazz.com/en/before-coming/",
      sources: [
        {
          title: "Current primary reservation rules",
          url: "https://www.nardisjazz.com/en/before-coming/",
          note: "Current primary reservation rules.",
        },
        {
          title: "Current programme",
          url: "https://www.nardisjazz.com/en/",
          note: "Check the current programme for dates and performance details.",
        },
        {
          title: "Specialist local cultural context",
          url: "https://www.cornucopia.net/guide/listings/restaurants/nardis-jazz-club/",
          note: "Specialist local cultural context.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];

export const guideBatch64: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
