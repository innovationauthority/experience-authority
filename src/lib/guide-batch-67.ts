import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "bordeaux-cite-du-vin-tasting",
    slug: "bordeaux-cite-du-vin-tasting",
    title: "Taste the same wine with three different questions in Bordeaux",
    place: "Bordeaux, Bassins à Flot",
    country: "France",
    countrySlug: "france",
    regionSlug: "bordeaux",
    field: "taste",
    summary:
      "The Cité du Vin makes the vocabulary of tasting a practical exercise. Its introductory workshop asks visitors to use sight, smell and taste on a small flight of wines.",
    rootedness:
      "The Cité du Vin makes the vocabulary of tasting a practical exercise. Its introductory workshop asks visitors to use sight, smell and taste on a small flight of wines.",
    kernel:
      "Look at each wine before trying it, then describe its aroma in ordinary words. Taste it last and see which first impressions carry through.",
    access:
      "Choose an introductory tasting workshop and book a dated session. Check the language and what the ticket includes. Via Sensoria and permanent exhibition admission are separate offers.",
    duration: "About one hour",
    participation: "Guided introductory wine tasting",
    responsibility:
      "Check age and alcohol policies. Arrange transport if drinking and confirm whether the selected session has a non-alcoholic option.",
    shift: "Taste it last and see which first impressions carry through.",
    humanReturn: "A flavour you can connect to how it was made.",
    evidence:
      "The sources describe guided introductory wine tasting in Bordeaux. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.laciteduvin.com/en/workshops",
      sources: [
        {
          title: "Cité du Vin tasting workshops",
          url: "https://www.laciteduvin.com/en/workshops",
          note: "Public workshop formats and practical booking information.",
        },
        {
          title: "Cité du Vin tasting programme",
          url: "https://www.laciteduvin.com/fr/ateliers-degustation",
          note: "Distinguishes introductory tasting from immersive formats.",
        },
      ],
    },
  },
  {
    id: "healesville-four-pillars-distillery-tour",
    slug: "healesville-four-pillars-distillery-tour",
    title: "Follow gin through the still room in Healesville",
    place: "Healesville, Yarra Valley",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "yarra-valley",
    field: "taste",
    summary:
      "Four Pillars’ weekday tour makes a working Yarra Valley distillery legible through its botanicals, stills, barrels and bottling line.",
    rootedness:
      "Four Pillars’ weekday tour makes a working Yarra Valley distillery legible through its botanicals, stills, barrels and bottling line.",
    kernel:
      "Look through the still room before tasting. Compare the ingredients you saw with the aromas you can actually identify in the glass.",
    access:
      "Book the Distillery Tour on the operator’s programme page. It runs Monday to Thursday with a drinks paddle after the tour. Children aged 3–17 have a separate ticket and need an adult.",
    duration: "30 minutes for the tour, plus time after",
    participation: "Guided distillery tour",
    responsibility:
      "Check what is running on the day. Arrange a designated driver or other transport if tasting alcohol.",
    shift:
      "Compare the ingredients you saw with the aromas you can actually identify in the glass.",
    humanReturn: "A flavour you can connect to how it was made.",
    evidence:
      "The sources describe guided distillery tour in Healesville. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://fourpillarsgin.com/pages/distillery-events",
      sources: [
        {
          title: "Four Pillars Distillery visitor information",
          url: "https://fourpillarsgin.com/pages/distillery-events",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Four Pillars distillery",
          url: "https://fourpillarsgin.com/pages/distillery",
          note: "Distillery and visitor context.",
        },
      ],
    },
  },
  {
    id: "pringy-gruyere-dairy",
    slug: "pringy-gruyere-dairy",
    title: "Watch a Gruyère wheel begin in Pringy",
    place: "Pringy, Gruyères",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "gruyeres",
    field: "taste",
    summary:
      "The viewing gallery at La Maison du Gruyère puts the making of Gruyère AOP within sight of the village station.",
    rootedness:
      "The viewing gallery at La Maison du Gruyère puts the making of Gruyère AOP within sight of the village station.",
    kernel:
      "Arrive while the dairy is working and watch the cheesemaker handle the curds. The tasting gives you a second way to read the finished cheese, through how it changes with age.",
    access:
      "Go in the morning. The dairy lists two to four production runs between 9 am and 12:30 pm. Check its production and exhibition hours separately.",
    duration: "About 30–45 minutes",
    participation: "Self-guided visit, viewing gallery and cheese samples",
    responsibility:
      "Visitors observe from the gallery. Check the timetable and dairy allergens before travelling.",
    shift:
      "The tasting gives you a second way to read the finished cheese, through how it changes with age.",
    humanReturn: "A flavour you can connect to how it was made.",
    evidence:
      "The sources describe self-guided visit, viewing gallery and cheese samples in Pringy. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.lamaisondugruyere.ch/useful-information/opening-hours/",
      sources: [
        {
          title: "Production and opening times",
          url: "https://www.lamaisondugruyere.ch/useful-information/opening-hours/",
          note: "Live morning production windows and exhibition hours.",
        },
        {
          title: "Switzerland Tourism visitor listing",
          url: "https://www.myswitzerland.com/fr-ch/decouvrir/la-maison-du-gruyere-aop/",
          note: "Context for the viewing gallery, tasting and visit length.",
        },
      ],
    },
  },
  {
    id: "teshima-art-museum-water",
    slug: "teshima-art-museum-water",
    title: "Watch water move inside a concrete shell on Teshima",
    place: "Teshima, Seto Inland Sea",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "teshima",
    field: "witness",
    summary:
      "Rei Naito’s work and Ryue Nishizawa’s concrete shell share the same space at Teshima Art Museum. Openings bring weather, sound and daylight inside.",
    rootedness:
      "Rei Naito’s work and Ryue Nishizawa’s concrete shell share the same space at Teshima Art Museum. Openings bring weather, sound and daylight inside.",
    kernel:
      "Let your eyes settle on one patch of floor. Follow a drop as it gathers or changes course and listen for the sounds that travel through the openings.",
    access:
      "Buy a dated, timed ticket in advance and plan the ferry and local transport around it. Check the museum’s seasonal closure days.",
    duration: "Allow about an hour on site, plus island travel",
    participation: "Timed museum visit",
    responsibility:
      "Observe the quiet and follow staff instructions. Photography and sketching are restricted inside. Do not touch the work.",
    shift:
      "Follow a drop as it gathers or changes course and listen for the sounds that travel through the openings.",
    humanReturn: "A detail you noticed by slowing down.",
    evidence:
      "The sources describe timed museum visit in Teshima. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://benesse-artsite.jp/en/art/teshima-artmuseum.html",
      sources: [
        {
          title: "Teshima Art Museum visitor information",
          url: "https://benesse-artsite.jp/en/art/teshima-artmuseum.html",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Teshima Art Museum programme context",
          url: "https://benesse-artsite.jp/en/general-information.html",
          note: "Additional published programme or visitor context.",
        },
      ],
    },
  },
  {
    id: "new-york-artechouse-twilight-zone",
    slug: "new-york-artechouse-twilight-zone",
    title: "Go below Chelsea Market into an ocean of light",
    place: "New York, Chelsea",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    field: "witness",
    summary:
      "ARTECHOUSE NYC uses a former Chelsea Market boiler room to stage digital work at room scale. Twilight Zone takes the ocean’s dim middle depths as its subject.",
    rootedness:
      "ARTECHOUSE NYC uses a former Chelsea Market boiler room to stage digital work at room scale. Twilight Zone takes the ocean’s dim middle depths as its subject.",
    kernel:
      "Find a place where the floor and walls meet in the projection. Watch how the sense of depth changes when you move from one part of the room to another.",
    access:
      "Choose the New York Twilight Zone listing and confirm the run dates before buying. Other ARTECHOUSE cities and special programmes have separate tickets. No EA ticket sales.",
    duration: "Allow 60–75 minutes",
    participation: "Ticketed digital installation",
    responsibility:
      "Check sensory guidance for intense light and sound. This is an artistic interpretation of an ocean zone.",
    shift:
      "Watch how the sense of depth changes when you move from one part of the room to another.",
    humanReturn: "A detail you noticed by slowing down.",
    evidence:
      "The sources describe ticketed digital installation in New York. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-03",
      accessUrl: "https://www.artechouse.com/program/twilight-zone-nyc/",
      sources: [
        {
          title: "Twilight Zone programme",
          url: "https://www.artechouse.com/program/twilight-zone-nyc/",
          note: "Identifies the exhibition, collaborators and admission route.",
        },
        {
          title: "Current New York programme",
          url: "https://www.artechouse.com/nyc-explore/",
          note: "Lists the current NYC experience and visitor timing.",
        },
      ],
    },
  },
  {
    id: "buenos-aires-malba-art",
    slug: "buenos-aires-malba-art",
    title: "Read Latin American modernism through a few works at Malba",
    place: "Buenos Aires, Palermo",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    field: "witness",
    summary:
      "Malba brings works made across Latin America into conversation in Buenos Aires. Its displays let you compare how artists responded to different places and decades.",
    rootedness:
      "Malba brings works made across Latin America into conversation in Buenos Aires. Its displays let you compare how artists responded to different places and decades.",
    kernel:
      "Choose three works in the collection display. Look for how each uses a body, a street or an object to make a claim about everyday life.",
    access:
      "Check what is on view at the main Buenos Aires venue before choosing a date. The museum recommends booking online. Malba Cine and the Puertos site have separate programmes.",
    duration: "Allow 60–90 minutes",
    participation: "Self-guided museum visit",
    responsibility:
      "Individual works move in and out of display. Confirm access and gallery photography rules at the museum.",
    shift:
      "Look for how each uses a body, a street or an object to make a claim about everyday life.",
    humanReturn: "A detail you noticed by slowing down.",
    evidence:
      "The sources describe self-guided museum visit in Buenos Aires. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://malba.org.ar/visitar/",
      sources: [
        {
          title: "MALBA visitor information",
          url: "https://malba.org.ar/visitar/",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Malba collection",
          url: "https://malba.org.ar/coleccion/",
          note: "Collection context, separate from the current display.",
        },
      ],
    },
  },
  {
    id: "osaka-maishima-waste-plant-tour",
    slug: "osaka-maishima-waste-plant-tour",
    title: "Look behind Osaka’s most unexpected industrial facade",
    place: "Osaka, Maishima",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "osaka",
    field: "learn",
    summary:
      "Colour, uneven windows and a tower make the Hundertwasser-designed Maishima plant easy to mistake for something other than a waste facility.",
    rootedness:
      "Colour, uneven windows and a tower make the Hundertwasser-designed Maishima plant easy to mistake for something other than a waste facility.",
    kernel:
      "Use the tour to follow what happens to a load of waste once it arrives. Then look back at the building and consider how its exterior changes your expectations of the work inside.",
    access:
      "Request a public tour through the Osaka environmental facilities association. Check the confirmation, transport and language arrangements before setting out.",
    duration: "Allow up to two hours plus transit",
    participation: "Reserved industrial site tour",
    responsibility:
      "Follow the guided route. Do not assume equipment is operating or that unrestricted photography is permitted.",
    shift:
      "Then look back at the building and consider how its exterior changes your expectations of the work inside.",
    humanReturn: "A design decision you can point to after the visit.",
    evidence:
      "The sources describe reserved industrial site tour in Osaka. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://yoyaku.osaka-env-paa.jp/tour/?lang=en",
      sources: [
        {
          title: "Maishima Incineration Plant visitor information",
          url: "https://yoyaku.osaka-env-paa.jp/tour/?lang=en",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Maishima Incineration Plant programme context",
          url: "https://www.kansai.meti.go.jp/english/tvlist/kohyo/e890.html",
          note: "Additional published programme or visitor context.",
        },
        {
          title: "Maishima Incineration Plant programme context",
          url: "https://osaka-info.jp/en/spot/maishima-plant/",
          note: "Additional published programme or visitor context.",
        },
      ],
    },
  },
  {
    id: "rio-museu-do-amanha-futures",
    slug: "rio-museu-do-amanha-futures",
    title: "Compare possible futures at Rio’s Museu do Amanhã",
    place: "Rio de Janeiro, Praça Mauá",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    field: "learn",
    summary:
      "On the harbour at Praça Mauá, the Museu do Amanhã connects a public waterfront with an exhibition about the choices that shape the future.",
    rootedness:
      "On the harbour at Praça Mauá, the Museu do Amanhã connects a public waterfront with an exhibition about the choices that shape the future.",
    kernel:
      "Start at Cosmos and work towards the room about possible futures. Pick one scenario and look for the assumptions that make it plausible.",
    access:
      "Choose a dated museum ticket. The permanent route is called Do Cosmos a Nós. Confirm current opening hours and room access on the museum’s site.",
    duration: "Allow 90 minutes to two hours",
    participation: "Self-guided science museum visit",
    responsibility:
      "Treat the exhibition’s scenarios as possibilities. Check photo rules for Cosmos and other rooms.",
    shift:
      "Pick one scenario and look for the assumptions that make it plausible.",
    humanReturn: "A design decision you can point to after the visit.",
    evidence:
      "The sources describe self-guided science museum visit in Rio de Janeiro. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://museudoamanha.org.br/visite",
      sources: [
        {
          title: "Visitor information",
          url: "https://museudoamanha.org.br/visite",
          note: "Opening, ticketing and visitor rules.",
        },
        {
          title: "Do Cosmos a Nós",
          url: "https://www.museudoamanha.org.br/exposicoes/775/do-cosmos-a-nos",
          note: "Documents the permanent route and its five themes.",
        },
      ],
    },
  },
  {
    id: "ghent-design-museum-new-wing",
    slug: "ghent-design-museum-new-wing",
    title: "Compare old objects and new materials in Ghent",
    place: "Ghent, historic centre",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "ghent",
    field: "learn",
    summary:
      "Design Museum Gent links its historic rooms with a new wing in the centre of Ghent, making the museum building part of the design visit.",
    rootedness:
      "Design Museum Gent links its historic rooms with a new wing in the centre of Ghent, making the museum building part of the design visit.",
    kernel:
      "Start in the courtyard and look at how the addition meets the older building. Inside the collection, choose an everyday object and consider what its maker changed to make it easier to use.",
    access:
      "The courtyard and new wing have free access during opening hours. Reserve a timed ticket for the collection and temporary exhibitions. Check Wednesday and holiday hours.",
    duration: "Allow 60–90 minutes",
    participation: "Self-guided architecture and design visit",
    responsibility:
      "Check which galleries are open and which entrance to use. Exhibitions and individual objects change.",
    shift:
      "Inside the collection, choose an everyday object and consider what its maker changed to make it easier to use.",
    humanReturn: "A design decision you can point to after the visit.",
    evidence:
      "The sources describe self-guided architecture and design visit in Ghent. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://designmuseumgent.be/en/visit",
      sources: [
        {
          title: "Design Museum Gent visitor information",
          url: "https://designmuseumgent.be/en/visit",
          note: "Documents the free spaces and timed collection admission.",
        },
        {
          title: "The new wing",
          url: "https://designmuseumgent.be/en/de-nieuwe-vleugel",
          note: "Details the reopening, design team and material approach.",
        },
      ],
    },
  },
  {
    id: "liverpool-bluecoat-carton-printmaking",
    slug: "liverpool-bluecoat-carton-printmaking",
    title: "Print from a used carton at Liverpool’s Bluecoat",
    place: "Liverpool, city centre",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "liverpool",
    field: "make",
    summary:
      "Bluecoat’s print studio puts a press and a tutor at the centre of a short course in intaglio. A used drinks carton becomes the printing plate.",
    rootedness:
      "Bluecoat’s print studio puts a press and a tutor at the centre of a short course in intaglio. A used drinks carton becomes the printing plate.",
    kernel:
      "Make a mark in the plate and work ink into it. Compare the first impression with a second after changing what you wipe away.",
    access:
      "Select the public Intaglio Printing with Tetrapak workshop. Bluecoat lists two sessions on 21 November 2026. Check remaining places before travelling and use the print studio calendar for later dates.",
    duration: "Two and a half hours",
    participation: "Tutor-led printmaking workshop",
    responsibility:
      "The advertised booking includes materials. Confirm access and age requirements with the studio. The photograph shows the courtyard of the building that houses the print studio.",
    shift:
      "Compare the first impression with a second after changing what you wipe away.",
    humanReturn: "A technique you can recognise again in the finished object.",
    evidence:
      "The sources describe tutor-led printmaking workshop in Liverpool. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-11-21",
      accessUrl:
        "https://www.thebluecoat.org.uk/whatson/intaglio-with-tetrapak",
      sources: [
        {
          title: "Intaglio Printing with Tetrapak",
          url: "https://www.thebluecoat.org.uk/whatson/intaglio-with-tetrapak",
          note: "Lists the dated course and describes the printmaking exercise.",
        },
        {
          title: "Bluecoat Print Studio programme",
          url: "https://www.thebluecoat.org.uk/print-workshops",
          note: "The studio’s calendar for this course and subsequent workshops.",
        },
      ],
    },
  },
  {
    id: "singapore-crafune-cardholder",
    slug: "singapore-crafune-cardholder",
    title: "Saddle-stitch a leather cardholder on Haji Lane",
    place: "Singapore, Kampong Glam",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    field: "make",
    summary:
      "Crafune’s Haji Lane cardholder workshop gives you a small object to make by hand in a neighbourhood where shops and studios share narrow streets.",
    rootedness:
      "Crafune’s Haji Lane cardholder workshop gives you a small object to make by hand in a neighbourhood where shops and studios share narrow streets.",
    kernel:
      "Use two needles to build a line of saddle stitches. Look at how the spacing and tension determine the finish along the edge.",
    access:
      "Choose the Haji Lane Cardholder Workshop specifically and reserve a session. Confirm the available patterns, time and material choices in the booking.",
    duration: "Check the duration on the product booking",
    participation: "Guided hands-on leathercraft",
    responsibility:
      "Confirm age rules, tool use and access to the upstairs studio before booking.",
    shift:
      "Look at how the spacing and tension determine the finish along the edge.",
    humanReturn: "A technique you can recognise again in the finished object.",
    evidence:
      "The sources describe guided hands-on leathercraft in Singapore. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://crafune.com/en-au/products/cardholder-workshop",
      sources: [
        {
          title: "Haji Lane Cardholder Workshop",
          url: "https://crafune.com/en-au/products/cardholder-workshop",
          note: "Identifies the branch, workshop and saddle-stitching technique.",
        },
        {
          title: "Pelago workshop listing",
          url: "https://www.pelago.com/en/activity/pn351-diy-leathermaking-workshop-crafune-singapore/",
          note: "Published descriptions of workshop variants and participant roles.",
        },
      ],
    },
  },
  {
    id: "nairobi-kazuri-bead-bar",
    slug: "nairobi-kazuri-bead-bar",
    title:
      "Assemble jewellery after seeing how Nairobi’s Kazuri beads are made",
    place: "Nairobi, Karen",
    country: "Kenya",
    countrySlug: "kenya",
    regionSlug: "nairobi",
    field: "make",
    summary:
      "Kazuri’s Bead Bar pairs a look at its workshop with time to build a piece from finished ceramic beads.",
    rootedness:
      "Kazuri’s Bead Bar pairs a look at its workshop with time to build a piece from finished ceramic beads.",
    kernel:
      "Notice how a bead’s surface changes as a maker paints it. When you assemble your own piece, use colour, weight and spacing to decide what sits beside what.",
    access:
      "Book the Bead Bar through Kazuri and confirm the Karen workshop location. The operator advertises a two-hour experience including a workshop tour.",
    duration: "About two hours",
    participation: "Workshop tour and guided jewellery assembly",
    responsibility:
      "Visitors assemble jewellery from finished beads. Staff handle the production, painting and firing stages.",
    shift:
      "When you assemble your own piece, use colour, weight and spacing to decide what sits beside what.",
    humanReturn: "A technique you can recognise again in the finished object.",
    evidence:
      "The sources describe workshop tour and guided jewellery assembly in Nairobi. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://kazuri.co.ke/pages/beading-workshops",
      sources: [
        {
          title: "Kazuri Bead Bar visitor information",
          url: "https://kazuri.co.ke/pages/beading-workshops",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Kazuri Bead Bar programme context",
          url: "https://kazuri.co.ke/pages/our-factory",
          note: "Additional published programme or visitor context.",
        },
      ],
    },
  },
  {
    id: "edinburgh-curling-first-stone",
    slug: "edinburgh-curling-first-stone",
    title: "Send your first curling stone across Edinburgh ice",
    place: "Edinburgh, Murrayfield",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "edinburgh",
    field: "play",
    summary:
      "Curl Edinburgh runs public Try Curling sessions at its Murrayfield rink, with coaches who teach delivery and sweeping before a game.",
    rootedness:
      "Curl Edinburgh runs public Try Curling sessions at its Murrayfield rink, with coaches who teach delivery and sweeping before a game.",
    kernel:
      "See how far your first stone travels before worrying about the target. On the next delivery, ask a teammate to sweep and watch what changes.",
    access:
      "Pick a public Try Curling date and book ahead. Bring warm, loose layers and follow the rink’s clean-shoe rules. Specialist equipment is supplied.",
    duration: "About 1 hour 55 minutes on ice",
    participation: "Coached beginner curling session",
    responsibility:
      "Places are limited. Check the current minimum age and adaptive options with the rink. Follow the coach’s instructions on ice.",
    shift:
      "On the next delivery, ask a teammate to sweep and watch what changes.",
    humanReturn: "A first move you can explain to someone else.",
    evidence:
      "The sources describe coached beginner curling session in Edinburgh. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-10",
      accessUrl: "https://www.edinburghcurling.co.uk/try-curling/",
      sources: [
        {
          title: "Scottish Curling rink listing",
          url: "https://trycurling.com/rinks/curl-edinburgh/",
          note: "National Try Curling programme entry for Murrayfield and its public sessions.",
        },
        {
          title: "Curl Edinburgh visitor information",
          url: "https://www.edinburghcurling.co.uk/try-curling/",
          note: "Published access and activity information for this visitor experience.",
        },
      ],
    },
  },
  {
    id: "brooklyn-royal-palms-shuffleboard",
    slug: "brooklyn-royal-palms-shuffleboard",
    title: "Learn the angles of shuffleboard in Brooklyn",
    place: "New York, Gowanus",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    field: "play",
    summary:
      "Royal Palms turns floor shuffleboard into an evening out on Union Street. The court is a reason to get people around the same game.",
    rootedness:
      "Royal Palms turns floor shuffleboard into an evening out on Union Street. The court is a reason to get people around the same game.",
    kernel:
      "Try to leave your first disc in a scoring triangle. Then see how a later shot can protect it or knock another disc away.",
    access:
      "Small parties usually sign up for a walk-in court at the venue. Check current opening and age rules. Group reservations follow a different process. No EA booking or commission.",
    duration: "Allow time for the walk-in queue and a game",
    participation: "Walk-in social shuffleboard",
    responsibility:
      "The club generally restricts admission to people aged 21 and over, with designated family sessions. Check the day’s policy.",
    shift:
      "Then see how a later shot can protect it or knock another disc away.",
    humanReturn: "A first move you can explain to someone else.",
    evidence:
      "The sources describe walk-in social shuffleboard in New York. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.royalpalmsbrooklyn.com/faqs",
      sources: [
        {
          title: "Royal Palms Shuffleboard visitor information",
          url: "https://www.royalpalmsbrooklyn.com/faqs",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Royal Palms Brooklyn",
          url: "https://www.royalpalmsbrooklyn.com/",
          note: "Venue information and calendar.",
        },
      ],
    },
  },
  {
    id: "cape-town-rollercade-first-laps",
    slug: "cape-town-rollercade-first-laps",
    title: "Find your rhythm on wheels in Cape Town",
    place: "Cape Town, Sunningdale",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    field: "play",
    summary:
      "Rollercade turns a space at Table Bay Mall in Sunningdale into an indoor rink. Music and a shared direction give the floor its own pace.",
    rootedness:
      "Rollercade turns a space at Table Bay Mall in Sunningdale into an indoor rink. Music and a shared direction give the floor its own pace.",
    kernel:
      "Start with a few slow laps and practise stopping before you speed up. Once your feet settle, try keeping your pace through a whole turn.",
    access:
      "Book the two-hour session at Table Bay Mall, Entrance 1. The ticket includes skates and safety gear. Include everyone attending, including non-skaters.",
    duration: "Two-hour session",
    participation: "Public indoor roller-skating session",
    responsibility:
      "The venue lists age restrictions for some evening slots. Confirm protective equipment and follow the rink’s direction and staff instructions.",
    shift: "Once your feet settle, try keeping your pace through a whole turn.",
    humanReturn: "A first move you can explain to someone else.",
    evidence:
      "The sources describe public indoor roller-skating session in Cape Town. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://rollercade.activitar.com/services/11193",
      sources: [
        {
          title: "Rollercade venue information",
          url: "https://rollercade.co.za/",
          note: "Confirms the Table Bay Mall address, session length and included safety gear.",
        },
        {
          title: "Rollercade visitor information",
          url: "https://rollercade.activitar.com/services/11193",
          note: "Published access and activity information for this visitor experience.",
        },
      ],
    },
  },
  {
    id: "bogota-tropicario-glasshouses",
    slug: "bogota-tropicario-glasshouses",
    title: "Walk between Colombian ecosystems under glass in Bogotá",
    place: "Bogotá, Jardín Botánico",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "bogota",
    field: "nature",
    summary:
      "The Tropicario at Bogotá’s botanical garden uses connected glasshouses to interpret a range of Colombian ecosystems within the capital.",
    rootedness:
      "The Tropicario at Bogotá’s botanical garden uses connected glasshouses to interpret a range of Colombian ecosystems within the capital.",
    kernel:
      "Take the rooms in sequence. Notice how leaf shape, height and density change from one environment to the next.",
    access:
      "Check the garden’s current tariff and last admission. The 2026 visitor page includes the Tropicario in standard admission. Verify separate conditions for any guided activity.",
    duration: "Allow 60–90 minutes for the glasshouses",
    participation: "Self-guided botanical visit",
    responsibility:
      "The collections interpret living environments. Stay on the route and do not handle plants or expect every species to be visible.",
    shift:
      "Notice how leaf shape, height and density change from one environment to the next.",
    humanReturn: "One observation that places the landscape in memory.",
    evidence:
      "The sources describe self-guided botanical visit in Bogotá. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://jbb.gov.co/servicios/tropicario-circuito-de-invernaderos/",
      sources: [
        {
          title: "Tropicario at Bogotá Botanical Garden visitor information",
          url: "https://jbb.gov.co/servicios/tropicario-circuito-de-invernaderos/",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Tropicario at Bogotá Botanical Garden programme context",
          url: "https://jbb.gov.co/category/tropicario/",
          note: "Additional published programme or visitor context.",
        },
      ],
    },
  },
  {
    id: "kepong-frim-forest-skywalk",
    slug: "kepong-frim-forest-skywalk",
    title: "Read the forest from above in Kepong",
    place: "Kepong, Selangor",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "kuala-lumpur",
    field: "nature",
    summary:
      "FRIM’s Forest Skywalk at Kepong Botanic Gardens lifts a short public walk through towers and bridges above the canopy.",
    rootedness:
      "FRIM’s Forest Skywalk at Kepong Botanic Gardens lifts a short public walk through towers and bridges above the canopy.",
    kernel:
      "Start by looking at how the crowns overlap. From a higher bridge, pick one tree and see how much of its shape you can follow below you.",
    access:
      "Use the official Skywalk ticket page. The standard route is for ages seven and up, with a higher age minimum of 13 for the 50-metre tower. Groups of ten or more need advance arrangements.",
    duration: "About 30–40 minutes on the skywalk",
    participation: "Ticketed elevated forest walkway",
    responsibility:
      "The route has heights and steps. Check weather closures and access needs before travelling. Leave the highest tower optional.",
    shift:
      "From a higher bridge, pick one tree and see how much of its shape you can follow below you.",
    humanReturn: "One observation that places the landscape in memory.",
    evidence:
      "The sources describe ticketed elevated forest walkway in Kepong. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.frim.gov.my/attractions/nature-activities/forest-skywalk/",
      sources: [
        {
          title: "Forest Skywalk operating information",
          url: "https://www.frim.gov.my/attractions/nature-activities/forest-skywalk/",
          note: "Current route, opening hours, age limits and group requirements.",
        },
        {
          title: "Skywalk booking site",
          url: "https://skywalk.frim.gov.my/",
          note: "FRIM’s public ticketing route.",
        },
      ],
    },
  },
  {
    id: "cape-town-boulders-penguin-boardwalk",
    slug: "cape-town-boulders-penguin-boardwalk",
    title: "Watch African penguins from the Foxy Beach boardwalk",
    place: "Simon’s Town, Cape Peninsula",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    field: "nature",
    summary:
      "At Boulders, the public Foxy Beach boardwalk offers a way to observe African penguins without entering the space they use on the shore.",
    rootedness:
      "At Boulders, the public Foxy Beach boardwalk offers a way to observe African penguins without entering the space they use on the shore.",
    kernel:
      "Pause at a viewing point and watch the gaps between the rocks. Give the birds time to move on their own terms.",
    access:
      "Use the SANParks visitor information to check the Foxy Beach viewing entrance, tariffs and current hours. Swimming access is separate from penguin viewing.",
    duration: "Allow 45–60 minutes plus travel",
    participation: "Self-guided wildlife observation",
    responsibility:
      "Keep your distance. Stay on the boardwalk and never touch, feed or block wildlife. Sightings and colony size vary.",
    shift: "Give the birds time to move on their own terms.",
    humanReturn: "One observation that places the landscape in memory.",
    evidence:
      "The sources describe self-guided wildlife observation in Simon’s Town. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony",
      sources: [
        {
          title: "Boulders penguin boardwalk visitor information",
          url: "https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Boulders penguin boardwalk programme context",
          url: "https://www.sanparks.org/wp-content/uploads/2024/02/boulders-brochure.pdf",
          note: "Additional published programme or visitor context.",
        },
      ],
    },
  },
  {
    id: "geneva-bains-des-paquis-sauna",
    slug: "geneva-bains-des-paquis-sauna",
    title: "Take a lakeside sauna pause at the Bains des Pâquis",
    place: "Geneva, Les Pâquis",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "geneva",
    field: "restore",
    summary:
      "The Pâquis pier gives Geneva a public place to alternate warm rooms with time by the lake during the cooler months.",
    rootedness:
      "The Pâquis pier gives Geneva a public place to alternate warm rooms with time by the lake during the cooler months.",
    kernel:
      "Choose one warm room and one place to rest. The rhythm of the visit can be as simple as moving between those two places.",
    access:
      "Check the current sauna season and last entry. Tuesdays are reserved for women during the published 2026–27 season. Check the current towel and clothing rules.",
    duration: "Allow an unhurried 60–90 minutes",
    participation: "Public sauna and hammam admission",
    responsibility:
      "Respect the venue’s privacy and textiles rules. Cool down at a comfortable pace without treating lake immersion as part of the visit.",
    shift:
      "The rhythm of the visit can be as simple as moving between those two places.",
    humanReturn: "A pause you can place on the map.",
    evidence:
      "The sources describe public sauna and hammam admission in Geneva. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://aubp.ch/detente-bien-etre/sauna-hammam-et-bain-turc/",
      sources: [
        {
          title: "Geneva Tourism visitor context",
          url: "https://www.geneve.com/en/attractions/detail/paquis-bath-bains-des-paquis",
          note: "City tourism context for the public lake baths and the winter hammam offer.",
        },
        {
          title: "Bains des Pâquis visitor information",
          url: "https://aubp.ch/detente-bien-etre/sauna-hammam-et-bain-turc/",
          note: "Published access and activity information for this visitor experience.",
        },
      ],
    },
  },
  {
    id: "conaripe-termas-geometricas",
    slug: "conaripe-termas-geometricas",
    title: "Follow a red walkway to warm pools in Coñaripe",
    place: "Coñaripe, Los Ríos",
    country: "Chile",
    countrySlug: "chile",
    regionSlug: "los-rios",
    field: "restore",
    summary:
      "A red timber route connects hot pools along a forested ravine at Termas Geométricas. You can read the layout as a sequence of short walks and pauses.",
    rootedness:
      "A red timber route connects hot pools along a forested ravine at Termas Geométricas. You can read the layout as a sequence of short walks and pauses.",
    kernel:
      "Walk slowly between two pools and pay attention to what changes in the air and underfoot. Choose the water temperature that suits you.",
    access:
      "Buy a dated admission from the venue. Check the slot, road conditions and transport from Coñaripe separately before committing.",
    duration: "Allow several hours including travel from Coñaripe",
    participation: "Ticketed thermal pools",
    responsibility:
      "Walkways may be wet or slippery. Check steps and pool temperatures and follow local instructions.",
    shift: "Choose the water temperature that suits you.",
    humanReturn: "A pause you can place on the map.",
    evidence:
      "The sources describe ticketed thermal pools in Coñaripe. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.termasgeometricas.cl/compra.html",
      sources: [
        {
          title: "Termas Geométricas visitor information",
          url: "https://www.termasgeometricas.cl/compra.html",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Termas Geométricas",
          url: "https://www.termasgeometricas.cl/",
          note: "Facility photographs and local access information.",
        },
      ],
    },
  },
  {
    id: "matsuyama-dogo-onsen-honkan",
    slug: "matsuyama-dogo-onsen-honkan",
    title: "Take a bath inside Matsuyama’s restored Dōgo Onsen",
    place: "Matsuyama, Dōgo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "matsuyama",
    field: "restore",
    summary:
      "At Dōgo Onsen Honkan, bathers enter a historic wooden public bathhouse that has reopened following conservation work.",
    rootedness:
      "At Dōgo Onsen Honkan, bathers enter a historic wooden public bathhouse that has reopened following conservation work.",
    kernel:
      "Choose a bathing course and take a moment to notice how the entrances and stairs organise the visit before changing and washing.",
    access:
      "At 5-6 Dōgo Yunomachi, ask about same-day entry to Kami-no-yu downstairs. The regular published hours are 06:00 to 23:00 with ticket sales ending at 22:30. Some upstairs rooms have separate reservation rules. Check the course table, current queue and any cleaning closure before going.",
    duration: "Basic course up to 60 minutes, plus possible wait",
    participation: "Public hot-spring bath",
    responsibility:
      "Wash before entering the bath and respect privacy. Check tattoo, accessibility and age policies for the exact course.",
    shift:
      "Choose a bathing course and take a moment to notice how the entrances and stairs organise the visit before changing and washing.",
    humanReturn: "A pause you can place on the map.",
    evidence:
      "The sources describe public hot-spring bath in Matsuyama. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://dogo.jp/en/honkan.php",
      sources: [
        {
          title: "Dōgo Onsen Honkan visitor information",
          url: "https://dogo.jp/en/honkan.php",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Dōgo Onsen visitor procedure",
          url: "https://dogo.jp/en/howto.php",
          note: "Explains ticketing and day-of access arrangements.",
        },
        {
          title: "Dōgo Onsen: access from the tram",
          url: "https://dogo.jp/en/access.php",
          note: "Honkan address and access via the Dōgo Onsen tram terminus.",
        },
      ],
    },
  },
  {
    id: "brasilia-clube-do-choro-live",
    slug: "brasilia-clube-do-choro-live",
    title: "Listen to live music in Brasília’s Clube do Choro",
    place: "Brasília, Eixo Monumental",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "brasilia",
    field: "gather",
    summary:
      "At Clube do Choro, Brasília’s musicians and listeners gather in a venue that also has a teaching tradition. Choro is one strand of a wider concert calendar.",
    rootedness:
      "At Clube do Choro, Brasília’s musicians and listeners gather in a venue that also has a teaching tradition. Choro is one strand of a wider concert calendar.",
    kernel:
      "If a choro set is listed, follow one musician for a phrase and listen for who answers. Other nights offer a different way to hear the room.",
    access:
      "Use the official programme to select a dated public concert. Verify the show, ticketing and seating before making plans. The club also lists samba, jazz and other music.",
    duration: "One scheduled concert",
    participation: "Ticketed live-music audience",
    responsibility:
      "The lineup and seating depend on the event. Keep recording and conversation within the venue’s rules.",
    shift: "Other nights offer a different way to hear the room.",
    humanReturn: "A phrase or rhythm you heard in the room.",
    evidence:
      "The sources describe ticketed live-music audience in Brasília. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-04",
      accessUrl: "https://clubedochoro.com.br/conteudo/programacao-eventos/",
      sources: [
        {
          title: "Clube do Choro concert programme",
          url: "https://clubedochoro.com.br/conteudo/programacao-eventos/",
          note: "Current club calendar with shows in several genres.",
        },
        {
          title: "Complexo Cultural do Choro",
          url: "https://complexodochoro.com.br/",
          note: "Documents the Choro Livre series, school and venue.",
        },
        {
          title: "Iphan choro dossier",
          url: "https://bcr.iphan.gov.br/wp-content/uploads/tainacan-items/65968/105869/01_Dossie_Tecnico.pdf",
          note: "Institutional context for choro in Brasília and the club’s history.",
        },
      ],
    },
  },
  {
    id: "seoul-myeongdong-nanta",
    slug: "seoul-myeongdong-nanta",
    title: "Hear a kitchen turn into percussion in Myeongdong",
    place: "Seoul, Myeongdong",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    field: "gather",
    summary:
      "NANTA uses the timing of a restaurant kitchen as the basis for a mostly nonverbal stage comedy in central Seoul.",
    rootedness:
      "NANTA uses the timing of a restaurant kitchen as the basis for a mostly nonverbal stage comedy in central Seoul.",
    kernel:
      "Listen first for the rhythm made by a single kitchen object. Then follow how the performers add another part without stopping the action.",
    access:
      "Choose the Myeongdong theatre and a dated performance on NANTA’s booking calendar. Check age rules and the ticket-collection deadline.",
    duration: "About 90 minutes",
    participation: "Ticketed theatre audience",
    responsibility:
      "Expect amplified sound and stage effects. Cast and audience participation vary. Photography during the show is restricted.",
    shift:
      "Then follow how the performers add another part without stopping the action.",
    humanReturn: "A phrase or rhythm you heard in the room.",
    evidence:
      "The sources describe ticketed theatre audience in Seoul. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.nanta.co.kr/en/show/reserve.php?id=1",
      sources: [
        {
          title: "Myeongdong NANTA visitor information",
          url: "https://www.nanta.co.kr/en/show/reserve.php?id=1",
          note: "Published access and activity information for this visitor experience.",
        },
        {
          title: "Myeongdong theatre and show",
          url: "https://www.nanta.co.kr/en/show/detail.php?id=1",
          note: "Show and venue details.",
        },
      ],
    },
  },
  {
    id: "montreal-casa-del-popolo-concert",
    slug: "montreal-casa-del-popolo-concert",
    title: "Give a Montréal evening to a band you haven’t heard",
    place: "Montréal, Boulevard Saint-Laurent",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    field: "gather",
    summary:
      "Casa del Popolo’s room on Saint-Laurent hosts touring and local musicians close to the audience. The programme is the reason to choose a date.",
    rootedness:
      "Casa del Popolo’s room on Saint-Laurent hosts touring and local musicians close to the audience. The programme is the reason to choose a date.",
    kernel:
      "Listen to a sample before choosing a show. In the room, notice what the musicians can do with a small space that would be lost on a larger stage.",
    access:
      "Filter the official calendar to Casa del Popolo and book the named show. Check the address, door time, age rules and access information for that event.",
    duration: "One scheduled set or evening",
    participation: "Ticketed small-room live music",
    responsibility:
      "Casa, La Sala Rossa and La Sotterenea are separate rooms. Confirm the venue named on the ticket.",
    shift:
      "In the room, notice what the musicians can do with a small space that would be lost on a larger stage.",
    humanReturn: "A phrase or rhythm you heard in the room.",
    evidence:
      "The sources describe ticketed small-room live music in Montréal. This guide is based on published information. EA has not attended or assessed the programme in person.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-04",
      accessUrl: "https://casadelpopolo.com/en/events/casa-del-popolo",
      sources: [
        {
          title: "Casa del Popolo listings",
          url: "https://casadelpopolo.com/en/events/casa-del-popolo",
          note: "Venue-specific events, addresses and booking links.",
        },
        {
          title: "Suoni Per Il Popolo calendar",
          url: "https://suoniperilpopolo.org/program/calendar",
          note: "The festival calendar shows how the room is used in the wider Montréal music circuit.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch67: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
