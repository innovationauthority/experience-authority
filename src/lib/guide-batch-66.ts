import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "vienna-steirereck-seasonal-menu",
    slug: "vienna-steirereck-seasonal-menu",
    title: "Follow the season through dinner in Vienna",
    place: "Vienna, Stadtpark",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    field: "taste",
    kernel:
      "Start with an ingredient you recognise and ask what changed between the raw product and the finished plate.",
    rootedness:
      "Steirereck puts a contemporary Austrian kitchen inside Vienna's Stadtpark.",
    access:
      "Reserve on the restaurant's own site and check the current menu and dietary options.",
    duration: "Allow time for a full sitting",
    participation: "Reserved restaurant meal",
    responsibility:
      "Confirm menu, allergies and cost with the restaurant before committing. A seasonal dish shown in a photograph may have left the menu.",
    summary:
      "Steirereck puts a contemporary Austrian kitchen inside Vienna's Stadtpark.",
    shift: "Notice which detail changes the way you taste the next sample.",
    humanReturn: "A new point of reference for the flavours of this place.",
    evidence:
      "The public sources describe reserved restaurant meal at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.steirereck.org/en/steirereck/tisch",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.steirereck.org/en/steirereck/tisch",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.steirereck.org/en/steirereck",
          note: "Programme or location context for planning this particular experience.",
        },
        {
          title: "Additional visitor information",
          url: "https://www.wien.info/en/dine-drink/viennese-cuisine/moderne-wiener-kueche-1095386",
          note: "Additional published details for checking the experience and location.",
        },
      ],
    },
  },
  {
    id: "cognac-hennessy-cellars",
    slug: "cognac-hennessy-cellars",
    title: "Taste Cognac after walking through its cellars",
    place: "Cognac, Charente",
    country: "France",
    countrySlug: "france",
    regionSlug: "cognac",
    field: "taste",
    kernel:
      "Compare the aromas at the tasting with the smells you noticed among the barrels.",
    rootedness:
      "The Charente and the ageing cellars put a familiar spirit back in its production landscape.",
    access:
      "Choose a currently listed cellar and tasting visit. The Flash Tour operates May to October.",
    duration: "Duration varies by selected tour",
    participation: "Guided cellar visit and tasting",
    responsibility:
      "Check the age rule and arrange onward transport if drinking. The boat and tasting format depend on the named visit.",
    summary:
      "The Charente and the ageing cellars put a familiar spirit back in its production landscape.",
    shift: "Notice which detail changes the way you taste the next sample.",
    humanReturn: "A new point of reference for the flavours of this place.",
    evidence:
      "The public sources describe guided cellar visit and tasting at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://us.hennessy.com/en-int/experiences",
      sources: [
        {
          title: "Official visitor information",
          url: "https://us.hennessy.com/en-int/experiences",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.destination-cognac.com/en/wine-tourism/cognac/visits-to-trading-houses-distilleries-and-vineyards/hennessy/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "san-francisco-dandelion-cacao",
    slug: "san-francisco-dandelion-cacao",
    title: "Taste cacao at each stage of a San Francisco chocolate tour",
    place: "San Francisco, Mission District",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "san-francisco",
    field: "taste",
    kernel:
      "Compare cacao fruit, roasted beans and finished chocolate as separate stages.",
    rootedness:
      "The 16th Street factory occupies a former print shop and works with single-origin beans.",
    access:
      "Book the factory tour at 2600 16th Street. Confirm dietary restrictions and current availability.",
    duration: "Check the dated tour listing",
    participation: "Guided factory walk and tasting",
    responsibility:
      "Ask about allergens and age rules before booking. The factory tour and Bloom's self-guided tasting are separate experiences.",
    summary:
      "The 16th Street factory occupies a former print shop and works with single-origin beans.",
    shift: "Notice which detail changes the way you taste the next sample.",
    humanReturn: "A new point of reference for the flavours of this place.",
    evidence:
      "The public sources describe guided factory walk and tasting at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.dandelionchocolate.com/pages/16th-street-factory",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.dandelionchocolate.com/pages/16th-street-factory",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.dandelionchocolate.com/pages/experiences",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "amsterdam-eye-what-is-film",
    slug: "amsterdam-eye-what-is-film",
    title: "Make a few frames move at Amsterdam’s Eye Filmmuseum",
    place: "Amsterdam, IJpromenade",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    field: "witness",
    kernel:
      "Start with an early camera or optical device in the What is Film? exhibition. Then make a flip book or a short animation and see how individual still frames create motion when you put them in sequence.",
    rootedness:
      "At Amsterdam’s Eye Filmmuseum, early cameras, clips and hands-on animation show how film makes still images move.",
    access:
      "Use a film or exhibition ticket for What is Film? Check the official hours. The permanent exhibition generally opens Tuesday to Sunday and on Mondays during school holidays.",
    duration: "Allow 1–2 hours",
    participation: "Interactive permanent exhibition",
    responsibility:
      "The permanent exhibition is on the lower level. Check accessible routing and availability of individual installations before planning around a specific device.",
    summary:
      "At Amsterdam’s Eye Filmmuseum, early cameras, clips and hands-on animation show how film makes still images move.",
    shift: "Watch what changes when you give a single work more time.",
    humanReturn: "An image or sensation you can recall through its details.",
    evidence:
      "The public sources describe interactive permanent exhibition at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.eyefilm.nl/en/permanent-exhibition",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.eyefilm.nl/en/permanent-exhibition",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.eyefilm.nl/en/plan-your-visit",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "paris-bourse-rotunda",
    slug: "paris-bourse-rotunda",
    title: "Circle the rotunda before entering the galleries in Paris",
    place: "Paris, Les Halles",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    field: "witness",
    kernel:
      "Look from the floor and again from an upper level to see how the concrete cylinder changes the old exchange.",
    rootedness:
      "Tadao Ando's intervention gives the former Bourse de Commerce a new relationship between old architecture and contemporary art.",
    access:
      "Use the museum ticket page. The museum closes Tuesdays and advises about bag limits. No EA booking.",
    duration: "About 90 minutes for museum and exhibitions",
    participation: "Self-directed museum visit",
    responsibility:
      "Check accessibility and bag rules. Use the current programme to see which installations occupy the rotunda.",
    summary:
      "Tadao Ando's intervention gives the former Bourse de Commerce a new relationship between old architecture and contemporary art.",
    shift: "Watch what changes when you give a single work more time.",
    humanReturn: "An image or sensation you can recall through its details.",
    evidence:
      "The public sources describe self-directed museum visit at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.pinaultcollection.com/en/boursedecommerce/practical-info",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.pinaultcollection.com/en/boursedecommerce/practical-info",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.pinaultcollection.com/en/boursedecommerce/faq",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "kyoto-biovortex-athletics-forest",
    slug: "kyoto-biovortex-athletics-forest",
    title: "Let your steps change an artwork in Kyoto",
    place: "Kyoto, Minami",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    field: "witness",
    kernel:
      "Choose an interactive work in Athletics Forest and notice how balance and pace change what you see.",
    rootedness:
      "The Kyoto venue gives teamLab a distinct collection of physical and responsive works.",
    access:
      "Book timed admission. Check footwear and movement rules for Athletics Forest. The teahouse is announced for 20 November.",
    duration: "Allow a flexible visit",
    participation: "Timed interactive art admission",
    responsibility:
      "Check venue guidance for footwear, dark rooms and optional movement-based works before entering.",
    summary:
      "The Kyoto venue gives teamLab a distinct collection of physical and responsive works.",
    shift: "Watch what changes when you give a single work more time.",
    humanReturn: "An image or sensation you can recall through its details.",
    evidence:
      "The public sources describe timed interactive art admission at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://art.team-lab.cn/en/e/kyoto/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://art.team-lab.cn/en/e/kyoto/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.japan-guide.com/e/e3952.html",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "venice-olivetti-scarpa",
    slug: "venice-olivetti-scarpa",
    title: "Look at typewriters through Carlo Scarpa's Venetian showroom",
    place: "Venice, Piazza San Marco",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "venice",
    field: "learn",
    kernel:
      "Follow the material transitions between mosaic floor, stone staircase and display surfaces.",
    rootedness:
      "The former Olivetti showroom joins twentieth-century office design with the craft of a Venetian interior.",
    access: "Buy admission from FAI and check opening times and stair access.",
    duration: "Allow 30–60 minutes",
    participation: "Ticketed showroom visit",
    responsibility:
      "Ask FAI about step-free viewing if needed. Historical machines are exhibits and should be handled only if explicitly invited.",
    summary:
      "The former Olivetti showroom joins twentieth-century office design with the craft of a Venetian interior.",
    shift: "Look for a design decision you can see in the space or process.",
    humanReturn:
      "A practical way to recognise the work behind a familiar object.",
    evidence:
      "The public sources describe ticketed showroom visit at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://fondoambiente.it/luoghi/negozio-olivetti",
      sources: [
        {
          title: "Official visitor information",
          url: "https://fondoambiente.it/luoghi/negozio-olivetti",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://fondoambiente.it/luoghi/negozio-olivetti/visita",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "stuttgart-porsche-factory-walk",
    slug: "stuttgart-porsche-factory-walk",
    title: "Follow a sports car through the factory in Stuttgart",
    place: "Stuttgart, Zuffenhausen",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "stuttgart",
    field: "learn",
    kernel:
      "Watch how work passes from one station to the next and ask where human judgement enters a repeatable process.",
    rootedness:
      "Zuffenhausen connects a famous car shape to the work of making it.",
    access:
      "Book the open factory tour. No departures 19 December 2026 to 18 January 2027. Museum entry is separate.",
    duration: "About 60 minutes",
    participation: "Guided open factory tour",
    responsibility:
      "The regular route includes stairs and roughly 3 km of walking. Children must be at least eight and accompanied. Production access varies.",
    summary:
      "Zuffenhausen connects a famous car shape to the work of making it.",
    shift: "Look for a design decision you can see in the space or process.",
    humanReturn:
      "A practical way to recognise the work behind a familiar object.",
    evidence:
      "The public sources describe guided open factory tour at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.porsche.com/international/aboutporsche/porschemuseum/tours/factorytours/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.porsche.com/international/aboutporsche/porschemuseum/tours/factorytours/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.porsche.com/international/aboutporsche/porschemuseum/openinghoursandprices/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "toulouse-cite-espace-scale",
    slug: "toulouse-cite-espace-scale",
    title: "Compare human and rocket scale in Toulouse",
    place: "Toulouse, Cité de l'espace",
    country: "France",
    countrySlug: "france",
    regionSlug: "toulouse",
    field: "learn",
    kernel:
      "Stand below the Ariane 5 replica, then compare it with the space available inside a station module.",
    rootedness:
      "Toulouse's space centre gives aerospace engineering a physical scale.",
    access:
      "Consult the attraction's calendar and check that the exhibits you want are accessible on your date.",
    duration: "Allow at least half a day",
    participation: "Science park admission",
    responsibility:
      "Separate replicas from original equipment and check which timed presentations are running. Follow any access restrictions for individual exhibits.",
    summary:
      "Toulouse's space centre gives aerospace engineering a physical scale.",
    shift: "Look for a design decision you can see in the space or process.",
    humanReturn:
      "A practical way to recognise the work behind a familiar object.",
    evidence:
      "The public sources describe science park admission at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.toulouse-tourisme.com/activite/cite-de-lespace/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.toulouse-tourisme.com/activite/cite-de-lespace/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://metropole.toulouse.fr/annuaire/cite-de-lespace",
          note: "Programme or location context for planning this particular experience.",
        },
        {
          title: "Additional visitor information",
          url: "https://www.cite-espace.com/",
          note: "Additional published details for checking the experience and location.",
        },
      ],
    },
  },
  {
    id: "tokyo-origami-kaikan-mini",
    slug: "tokyo-origami-kaikan-mini",
    title: "Fold one model at Tokyo's Origami Kaikan",
    place: "Tokyo, Yushima",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    field: "make",
    kernel:
      "Notice which crease controls the shape before moving on to the next fold.",
    rootedness:
      "The short class takes place in a centre devoted to paper, dyeing and folding.",
    access:
      "Ask the centre for the next English mini session. Classes are irregular and sign-up is on the day.",
    duration: "20–30 minutes",
    participation: "Small drop-in beginner class",
    responsibility:
      "The operator lists six places per session and cash payment. Confirm the language and date before making a special journey.",
    summary:
      "The short class takes place in a centre devoted to paper, dyeing and folding.",
    shift: "Pay attention to how a small gesture changes the result.",
    humanReturn: "A small technique you can try again at home.",
    evidence:
      "The public sources describe small drop-in beginner class at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://origamikaikan.co.jp/lp/index.php?lpid=87",
      sources: [
        {
          title: "Official visitor information",
          url: "https://origamikaikan.co.jp/lp/index.php?lpid=87",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://origamikaikan.co.jp/",
          note: "Programme or location context for planning this particular experience.",
        },
        {
          title: "Additional visitor information",
          url: "https://www.gotokyo.org/en/spot/619/index.html",
          note: "Additional published details for checking the experience and location.",
        },
      ],
    },
  },
  {
    id: "bangkok-clay-circle-wheel",
    slug: "bangkok-clay-circle-wheel",
    title: "Centre a first piece of clay on the wheel in Bangkok",
    place: "Bangkok, Clay Circle BKK",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    field: "make",
    kernel: "Feel how a small change in pressure can shift the whole form.",
    rootedness:
      "This Bangkok studio introduces the successive steps between clay and a fired object.",
    access:
      "Book the two-hour beginner session. Confirm collection and firing separately before planning around a finished piece.",
    duration: "2 hours",
    participation: "Beginner wheel throwing",
    responsibility:
      "The published beginner session is for ages ten and above. Ask about language, glaze and firing before paying.",
    summary:
      "This Bangkok studio introduces the successive steps between clay and a fired object.",
    shift: "Pay attention to how a small gesture changes the result.",
    humanReturn: "A small technique you can try again at home.",
    evidence:
      "The public sources describe beginner wheel throwing at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://claycirclebkk.com/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://claycirclebkk.com/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://claycirclebkk.com/wheel-throwing/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "hanoi-bat-trang-old-quarter-clay",
    slug: "hanoi-bat-trang-old-quarter-clay",
    title: "Shape a piece of Bát Tràng clay in Hanoi's Old Quarter",
    place: "Hanoi, Old Quarter",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hanoi",
    field: "make",
    kernel:
      "Ask the instructor where your hands should steady the form and where they should let it move.",
    rootedness:
      "The class brings a pottery practice associated with Bát Tràng into a city workshop.",
    access:
      "Reserve at 115 Hàng Gai. Confirm glazing, firing and collection time in advance. The village factory is a separate location.",
    duration: "Confirm class duration at booking",
    participation: "Guided pottery class",
    responsibility:
      "Allow several days for firing and glazing if keeping the piece. The provider quotes different timelines, so agree on a collection date or shipping cost.",
    summary:
      "The class brings a pottery practice associated with Bát Tràng into a city workshop.",
    shift: "Pay attention to how a small gesture changes the result.",
    humanReturn: "A small technique you can try again at home.",
    evidence:
      "The public sources describe guided pottery class at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://authenticbattrang.vn/class.html",
      sources: [
        {
          title: "Official visitor information",
          url: "https://authenticbattrang.vn/class.html",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://authenticbattrang.vn/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "vancouver-flyover-awaken-canada",
    slug: "vancouver-flyover-awaken-canada",
    title: "Feel a film turn into motion at Canada Place",
    place: "Vancouver, Canada Place",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    field: "play",
    kernel:
      "Notice when the moving seat changes your sense of scale in the aerial footage.",
    rootedness:
      "Awaken Canada is a constructed screen journey at Vancouver's waterfront.",
    access:
      "Book a dated Awaken Canada showing and arrive 15 minutes early. Minimum rider height is 102 cm.",
    duration: "25–30 minutes including preshow",
    participation: "Seated motion attraction",
    responsibility:
      "The ride uses motion, mist and scents. Read pregnancy and transfer guidance and ask about stationary viewing if needed.",
    summary:
      "Awaken Canada is a constructed screen journey at Vancouver's waterfront.",
    shift:
      "Use the first attempt to notice what the experience asks you to do.",
    humanReturn: "A specific moment of play to remember the city by.",
    evidence:
      "The public sources describe seated motion attraction at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.experienceflyover.com/vancouver/experience/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.experienceflyover.com/vancouver/experience/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.experienceflyover.com/vancouver/plan-your-visit/faqs/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "seoul-lotte-world-indoor-outdoor",
    slug: "seoul-lotte-world-indoor-outdoor",
    title: "Play across two levels of Seoul's Lotte World",
    place: "Seoul, Jamsil",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    field: "play",
    kernel:
      "Start with one indoor attraction and move outside to Magic Island only if the current conditions suit.",
    rootedness:
      "The park makes a dense city setting part of the experience by bringing rides indoors and out.",
    access:
      "Check operating notices and ride-specific access rules before buying an Adventure pass.",
    duration: "Allow half a day or more",
    participation: "Ticketed indoor and outdoor rides",
    responsibility:
      "Restrictions and availability vary by ride. Check height and weather rules. Separately charged activities may sit inside the same complex.",
    summary:
      "The park makes a dense city setting part of the experience by bringing rides indoors and out.",
    shift:
      "Use the first attempt to notice what the experience asks you to do.",
    humanReturn: "A specific moment of play to remember the city by.",
    evidence:
      "The public sources describe ticketed indoor and outdoor rides at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://adventure.lotteworld.com/price/price",
      sources: [
        {
          title: "Official visitor information",
          url: "https://adventure.lotteworld.com/price/price",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://adventure.lotteworld.com/",
          note: "Programme or location context for planning this particular experience.",
        },
        {
          title: "Additional visitor information",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=111276",
          note: "Additional published details for checking the experience and location.",
        },
      ],
    },
  },
  {
    id: "singapore-altitudex-first-flight",
    slug: "singapore-altitudex-first-flight",
    title: "Learn to hold your position in a Singapore wind tunnel",
    place: "Singapore, Sentosa",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    field: "play",
    kernel:
      "Use the instructor's signals to notice what small changes to arm position do in the airflow.",
    rootedness:
      "AltitudeX gives visitors a controlled introduction to body flight in an enclosed wind tunnel.",
    access:
      "Use the official first-time flyer route and read the latest eligibility and arrival instructions before booking.",
    duration: "Confirm total visit time with booking",
    participation: "Instructor-led indoor body flight",
    responsibility:
      "The operator's flight criteria govern eligibility. Read the health, age and weight rules and allow time for briefing and kit fitting.",
    summary:
      "AltitudeX gives visitors a controlled introduction to body flight in an enclosed wind tunnel.",
    shift:
      "Use the first attempt to notice what the experience asks you to do.",
    humanReturn: "A specific moment of play to remember the city by.",
    evidence:
      "The public sources describe instructor-led indoor body flight at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://altitudex.com/sg/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://altitudex.com/sg/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.sentosa.com.sg/en/things-to-do/attractions/altitudex/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "oslo-ekeberg-woodland",
    slug: "oslo-ekeberg-woodland",
    title: "Climb through woodland to see Oslo from Ekeberg",
    place: "Oslo, Ekeberg",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    field: "nature",
    kernel:
      "Leave time for the wooded approach and see how the fjord appears between the trees.",
    rootedness:
      "Ekebergparken brings woodland paths, a city outlook and sculpture into the same hillside.",
    access:
      "The park is free and open year-round. Check current tram access and seasonal openings for individual artworks.",
    duration: "Allow 1–2 hours",
    participation: "Self-directed woodland walk",
    responsibility:
      "Paths can be steep or slippery. Keep to public paths and check current approach works or closures.",
    summary:
      "Ekebergparken brings woodland paths, a city outlook and sculpture into the same hillside.",
    shift: "Notice how the terrain changes as you move along the route.",
    humanReturn:
      "A clearer sense of how this landscape fits into the city or region.",
    evidence:
      "The public sources describe self-directed woodland walk at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://ekebergparken.com/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://ekebergparken.com/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://ekebergparken.com/om-ekebergparken",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "singapore-bukit-timah-rail-corridor",
    slug: "singapore-bukit-timah-rail-corridor",
    title: "Follow the old railway into Bukit Timah's green corridor",
    place: "Singapore, Bukit Timah",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    field: "nature",
    kernel:
      "Look at the station and then follow the open trail to see how a transport line becomes a shared landscape.",
    rootedness:
      "The Rail Corridor occupies land once used by a railway connecting Singapore and the Malay Peninsula.",
    access:
      "Use NParks' current map and open access points. The southern Henderson to Spooner section is closed for works.",
    duration: "Allow 1–2 hours for a short section",
    participation: "Self-directed corridor walk",
    responsibility:
      "Bring water and use daylight. Keep left and share the path with cyclists. Follow the current closure map.",
    summary:
      "The Rail Corridor occupies land once used by a railway connecting Singapore and the Malay Peninsula.",
    shift: "Notice how the terrain changes as you move along the route.",
    humanReturn:
      "A clearer sense of how this landscape fits into the city or region.",
    evidence:
      "The public sources describe self-directed corridor walk at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://railcorridor.nparks.gov.sg/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://railcorridor.nparks.gov.sg/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.ura.gov.sg/land-planning/shaping-our-city/identity-corridors/rail-corridor/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "penang-habitat-langur-way",
    slug: "penang-habitat-langur-way",
    title: "Look across Penang's rainforest from Langur Way",
    place: "Penang Hill, Air Itam",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "penang",
    field: "nature",
    kernel:
      "Stop where the bridge allows and look across the canopy before looking down into the forest.",
    rootedness:
      "The Habitat gives a public route along the edge of the Penang Hill forest reserve.",
    access:
      "Book park admission separately from the funicular. Check weather and route closures before ascending.",
    duration: "Allow 2–3 hours plus ascent",
    participation: "Self-directed forest trail and canopy walk",
    responsibility:
      "Stay on the marked route and keep distance from wildlife. Elevated routes may close in bad weather.",
    summary:
      "The Habitat gives a public route along the edge of the Penang Hill forest reserve.",
    shift: "Notice how the terrain changes as you move along the route.",
    humanReturn:
      "A clearer sense of how this landscape fits into the city or region.",
    evidence:
      "The public sources describe self-directed forest trail and canopy walk at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.thehabitat.my/the-park/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.thehabitat.my/the-park/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://penanghill.gov.my/index.php/en/attractions/mother-nature",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "montreal-bota-bota-ferry",
    slug: "montreal-bota-bota-ferry",
    title: "Take a water circuit on a former Montréal ferry",
    place: "Montréal, Old Port",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    field: "restore",
    kernel:
      "Make time for the deck view between baths and notice how the working waterfront sounds from the moored boat.",
    rootedness:
      "Bota Bota has given an old ferry a new role in Montréal's Old Port.",
    access:
      "Book the water circuit and check access to the boat and gardens. Entry is 18 and over.",
    duration: "Confirm the chosen admission window",
    participation: "Reserved water circuit",
    responsibility:
      "Observe the current quiet and phone rules. Ask which areas are included and check access if stairs are difficult.",
    summary:
      "Bota Bota has given an old ferry a new role in Montréal's Old Port.",
    shift: "Let the space set a different pace for part of your day.",
    humanReturn: "A slower interval with a setting you can place on the map.",
    evidence:
      "The public sources describe reserved water circuit at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://botabota.ca/en/the-water-circuit/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://botabota.ca/en/the-water-circuit/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://botabota.ca/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "berlin-liquidrom-underwater-sound",
    slug: "berlin-liquidrom-underwater-sound",
    title: "Listen below the waterline in Berlin",
    place: "Berlin, Kreuzberg",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    field: "restore",
    kernel:
      "Compare how the sound reaches you above and below the surface of the dome pool.",
    rootedness:
      "Liquidrom combines Berlin's electronic sound culture with the architecture and pace of a bath.",
    access:
      "Reserve a time slot. Check the separate Sound Sessions calendar if a DJ evening matters to you.",
    duration: "Choose a current time slot",
    participation: "Timed pool visit",
    responsibility:
      "Check swimwear rules for each area and the event schedule. Pool music and DJ programming are separate details.",
    summary:
      "Liquidrom combines Berlin's electronic sound culture with the architecture and pace of a bath.",
    shift: "Let the space set a different pace for part of your day.",
    humanReturn: "A slower interval with a setting you can place on the map.",
    evidence:
      "The public sources describe timed pool visit at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.liquidrom-berlin.de/en/index.php",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.liquidrom-berlin.de/en/index.php",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.visitberlin.de/en/liquidrom",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "hanmer-springs-thermal-rock-pools",
    slug: "hanmer-springs-thermal-rock-pools",
    title: "Take a slow outdoor soak in Hanmer Springs",
    place: "Hanmer Springs, Canterbury",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "hanmer-springs",
    field: "restore",
    kernel:
      "Choose an open pool and give the alpine setting time to come into focus.",
    rootedness:
      "The pools make the thermal water part of a public day in the Canterbury hills.",
    access:
      "Check the current pool map and buy admission. The Cascade Pools are currently marked closed for refurbishment.",
    duration: "Allow 1–2 hours",
    participation: "Public thermal pool admission",
    responsibility:
      "Choose a temperature you are comfortable with and follow pool signage. Check refurbishments and individual pool access before travel.",
    summary:
      "The pools make the thermal water part of a public day in the Canterbury hills.",
    shift: "Let the space set a different pace for part of your day.",
    humanReturn: "A slower interval with a setting you can place on the map.",
    evidence:
      "The public sources describe public thermal pool admission at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://hanmersprings.co.nz/thermal-pools",
      sources: [
        {
          title: "Official visitor information",
          url: "https://hanmersprings.co.nz/thermal-pools",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://hanmersprings.co.nz/opening-hours",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "stockholm-fasching-live-set",
    slug: "stockholm-fasching-live-set",
    title: "Listen to a live set at Fasching in Stockholm",
    place: "Stockholm, Norrmalm",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    field: "gather",
    kernel:
      "Follow a phrase from one player to the next and notice what the room lets you hear.",
    rootedness:
      "Fasching is a longstanding concert room in central Stockholm with a programme that changes by night.",
    access:
      "Choose a dated concert and check whether the ticket is standing or seated.",
    duration: "Allow an evening",
    participation: "Ticketed live concert",
    responsibility:
      "Choose by artist and seating type. Check the venue's age and accessibility guidance for that event.",
    summary:
      "Fasching is a longstanding concert room in central Stockholm with a programme that changes by night.",
    shift:
      "Notice the exchanges that are only audible when you stay for the set.",
    humanReturn: "A memory of the room and what was played in it.",
    evidence:
      "The public sources describe ticketed live concert at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.fasching.se/samling/english/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.fasching.se/samling/english/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://www.fasching.se/en/how-to-buy-tickets/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "mexico-city-zinco-basement-jazz",
    slug: "mexico-city-zinco-basement-jazz",
    title: "Go below street level for a live set in Mexico City",
    place: "Mexico City, Centro Histórico",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    field: "gather",
    kernel:
      "Listen to how a small ensemble adjusts its sound to the room and the people in it.",
    rootedness:
      "Zinco brings a changing live programme to a basement in a former bank building.",
    access:
      "Choose a current show and request a reservation through the venue. Check the confirmation before travelling.",
    duration: "Allow an evening",
    participation: "Reserved live performance",
    responsibility:
      "Confirm show start and admission terms with the club. Ask about basement access if stairs are difficult.",
    summary:
      "Zinco brings a changing live programme to a basement in a former bank building.",
    shift:
      "Notice the exchanges that are only audible when you stay for the set.",
    humanReturn: "A memory of the room and what was played in it.",
    evidence:
      "The public sources describe reserved live performance at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://zincojazz.com/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://zincojazz.com/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://mexicocity.cdmx.gob.mx/venues/zinco-jazz-club/?lang=en",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
  {
    id: "tokyo-suntory-hall-concert",
    slug: "tokyo-suntory-hall-concert",
    title: "Hear a Tokyo orchestra from inside Suntory Hall",
    place: "Tokyo, Akasaka",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    field: "gather",
    kernel:
      "Follow how a single passage moves from one section of the orchestra to another.",
    rootedness:
      "A dedicated concert hall gives Tokyo's orchestral life a room designed around listening.",
    access:
      "Choose a dated Main Hall concert and use the ticket route linked for that performance.",
    duration: "Depends on the programme",
    participation: "Ticketed concert audience",
    responsibility:
      "Check the hall, age rules and late seating policy on the specific performance. English ticket access varies by promoter.",
    summary:
      "A dedicated concert hall gives Tokyo's orchestral life a room designed around listening.",
    shift:
      "Notice the exchanges that are only audible when you stay for the set.",
    humanReturn: "A memory of the room and what was played in it.",
    evidence:
      "The public sources describe ticketed concert audience at this location. EA has not attended. Check the current programme and access conditions before making plans.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-03",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.suntory.com/culture-sports/suntoryhall/",
      sources: [
        {
          title: "Official visitor information",
          url: "https://www.suntory.com/culture-sports/suntoryhall/",
          note: "Primary route to the visitor offer and its current access information.",
        },
        {
          title: "Programme and visitor context",
          url: "https://en.japanphil.or.jp/forvisitor/",
          note: "Programme or location context for planning this particular experience.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch66: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
