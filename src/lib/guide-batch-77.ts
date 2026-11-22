import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

type EditionGuide = Omit<
  PublicExperience,
  "id" | "status" | "demo" | "image" | "imageAlt" | "guideReview"
> & {
  guideReview: Pick<
    GuideReview,
    "scope" | "accessUrl" | "reviewBy" | "sources"
  >;
};
const records: EditionGuide[] = [
  {
    slug: "hondarribia-fishing-port-and-grilled-fish",
    title: "Start at Hondarribia’s fishing port and stay for grilled fish",
    summary:
      "A working fishing town and a whole fish on the grill make sense together. Begin at Hondarribia’s harbour, then ask what is on the grill that day.",
    field: "taste",
    place: "Hondarribia",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "hondarribia",
    kernel:
      "From publicly accessible paths, look at how the boats and harbour are arranged for work. At the table, ask how the fish is served and what the quoted weight includes. A shared whole fish gives you a chance to compare the char at the edge with the flesh close to the bone.",
    rootedness:
      "Hondarribia’s fishing port is tied to the San Pedro fishers’ guild. Restaurants in and around town carry that relationship into a table tradition of grilled whole fish.",
    shift:
      "Put the fish back in the landscape before deciding how to order it.",
    humanReturn:
      "A restaurant order makes more sense when it begins with the work you can see at the harbour.",
    responsibility:
      "Stay out of working or restricted quays. The photograph shows a boat in the fishing district. The fish served will depend on the restaurant and the day.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Basque Country visitor guide introduces the fishing port. Arroka Berri publishes a grill menu and reservations at Higer Bidea 6. Check the house’s lunch and dinner service and the fish available that day.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow time for the walk and a sit-down meal.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://arrokaberri.com/carta/arroka-berri/",
      sources: [
        {
          title: "Arroka Berri menu, hours and reservations",
          url: "https://arrokaberri.com/carta/arroka-berri/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Basque Country visitor guide to Hondarribia fishing port",
          url: "https://turismo.euskadi.eus/en/fishing-ports/port-of-hondarribia/webtur00-content/en/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Hondarribia tourism listing for the farmhouse grill",
          url: "https://hondarribiaturismo.com/restaurante-arroka-berri/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "taste-a-vila-franca-queijada-at-the-bakery-that-makes-it",
    title: "Taste a Vila Franca queijada at the bakery that makes it",
    summary:
      "A dusting of sugar conceals a thin shell and a soft yellow centre. Vila Franca do Campo gives this São Miguel cake its name and an address where you can try it.",
    field: "taste",
    place: "Vila Franca do Campo",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "vila-franca-do-campo",
    kernel:
      "Ask for a Queijada da Vila at the counter and try to lift the shell without breaking the centre. Taste the shell and filling together before ordering another.",
    rootedness:
      "The confection is identified with Vila Franca do Campo in Portugal’s traditional products register. In São Miguel, it makes sense as a town speciality rather than as a generic island dessert.",
    shift:
      "Break the shell before trying to describe its flavour.",
    humanReturn:
      "The feel of the pastry gives you a way to recognise this São Miguel speciality again.",
    responsibility:
      "The bakery listing establishes a shop visit. Treat production rooms and demonstrations as separate activities.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The visitor directory lists the Morgado bakery in Vila Franca do Campo. A retail counter visit needs no tour booking. Check the shop’s hours and stock around holidays.",
    participation: "Public tasting, meal or food visit.",
    duration: "15–30 minutes at the bakery.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://experiences.casusab.pt/pt/local.php?localid=93&tip=4",
      sources: [
        {
          title: "Queijadas da Vila bakery visitor listing",
          url: "https://experiences.casusab.pt/pt/local.php?localid=93&tip=4",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Portuguese traditional foods directory",
          url: "https://tradicional.dgadr.gov.pt/pt/cat/doces-e-produtos-de-pastelaria/701-queijadas-de-vila-franca-do-campo",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "laguiole-jeune-montagne-cheesemaking-and-tasting",
    title: "Taste Laguiole cheese after watching how the curd is pressed",
    summary:
      "In Laguiole, a free dairy visit ends with a tasting. Keep the image of the pressed curd in mind when you try a piece of aged cheese.",
    field: "taste",
    place: "Laguiole",
    country: "France",
    countrySlug: "france",
    regionSlug: "laguiole",
    kernel:
      "Start at the cooperative’s viewing windows. If cheesemakers are working, look for how they handle the curd before pressing. At the tasting, look at the paste and rind, then ask what changes with time in the maturing room.",
    rootedness:
      "Laguiole’s protected cheese is made and matured within the Aubrac area. The cooperative visit puts a local cheesemaking process beside the flavour that comes out of it.",
    shift:
      "Look for the work that happens before the cheese gets its name and mark.",
    humanReturn:
      "The tasting makes time in the maturing room easier to imagine.",
    responsibility:
      "Check current visiting hours. Production depends on the day and public viewing is through the visitor route.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Jeune Montagne lists a free year-round visit with a cheese tasting. It recommends mornings for seeing the cheesemakers. Film screenings run on a schedule and full guiding is advertised during school holidays.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow about an hour for the dairy visit and tasting.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.jeune-montagne-aubrac.fr/visite/visite-fromagerie/",
      sources: [
        {
          title: "Jeune Montagne dairy visitor route and tasting",
          url: "https://www.jeune-montagne-aubrac.fr/visite/visite-fromagerie/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "INAO protected Laguiole cheese information",
          url: "https://www.inao.gouv.fr/produit/laguiole-16326",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "order-kebab-and-pistachio-baklava-at-a-gaziantep-family-table",
    title: "Order kebab and pistachio baklava at a Gaziantep family table",
    summary:
      "In a city where both the skewer and the pastry counter have long histories, a meal can make room for the two together.",
    field: "taste",
    place: "Gaziantep",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "gaziantep",
    kernel:
      "Ask what is coming off the grill and which pistachio baklava is on the counter. Try a small portion of each. Notice how finely the pastry layers break compared with the texture of the ground pistachio.",
    rootedness:
      "Kebabs and pistachio pastries use two different skills that are both visible in Gaziantep’s food businesses. A lunch built around them puts the work of the grill next to that of the pastry bench.",
    shift:
      "Give the kitchen and pastry counter equal time.",
    humanReturn:
      "You can connect the smokiness of a meal with the precision of a pastry made in the same town.",
    responsibility:
      "The image shows the named producer’s carrot-slice baklava served in Ankara. The guide’s kebab and pastry stop is at the business’s Gaziantep address.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Gaziantep shop at the Uzun Çarşı address listed by İmam Çağdaş. Check restaurant hours and call ahead for a larger table. The pastry counter and eat-in service are different ways into the same business.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow time for a sit-down meal.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.imamcagdas.com/magazalarimiz",
      sources: [
        {
          title: "İmam Çağdaş restaurant and pastry address",
          url: "https://www.imamcagdas.com/magazalarimiz",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "İmam Çağdaş family business history",
          url: "https://www.imamcagdas.com/hakkimizda",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "bangkok-jay-fai-crab-omelette-wok",
    title: "Watch a crab omelette take shape over Jay Fai’s wok",
    summary:
      "At a shophouse on Maha Chai Road, Jay Fai sets a rich crab filling inside a crisp egg shell. If you can see the wok, the changes in the batter are part of the visit.",
    field: "taste",
    place: "Bangkok",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    kernel:
      "Choose the crab omelette and, if the kitchen is visible from your seat, look at what happens to the outside as it cooks. At the table, try the crisp edge before a bite through the softer centre.",
    rootedness:
      "In Bangkok’s Phra Nakhon neighbourhood, the shophouse counter and its wok are part of the city’s eating culture. Jay Fai’s crab omelette has made that familiar setting a destination in its own right.",
    shift:
      "Watch the outside of the omelette change before opening it with your fork.",
    humanReturn:
      "A crisp edge and a soft centre make the cook’s control of the wok easier to appreciate.",
    responsibility:
      "A counter view, a particular table and immediate seating depend on how the restaurant is operating.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Michelin lists Jay Fai at 327 Maha Chai Road in Bangkok’s Phra Nakhon district. Check the current opening days and queue arrangements before setting out and allow time for a wait.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow time for the meal and any queue.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://guide.michelin.com/us/en/bangkok-region/bangkok/restaurant/jay-fai",
      sources: [
        {
          title: "Michelin listing and current visitor information for Jay Fai",
          url: "https://guide.michelin.com/us/en/bangkok-region/bangkok/restaurant/jay-fai",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Time Out Bangkok reporting on the shophouse and visit format",
          url: "https://www.timeout.com/bangkok/restaurants/10-dos-and-donts-when-at-jay-fai-as-recommended-by-locals",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "find-buenos-airess-bodegon-in-a-palermo-milanesa",
    title: "Find Buenos Aires’s bodegón in a Palermo milanesa",
    summary:
      "At El Preferido, an old neighbourhood food address is still a place to learn the particular pleasure of a thin, crisp milanesa.",
    field: "taste",
    place: "Buenos Aires",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    kernel:
      "Check whether the kitchen is serving its milanesa when you book. Order it for the table and look at the relation between the crust, the thickness of the meat and the side alongside it.",
    rootedness:
      "The city records El Preferido as a historic Palermo bar. Its role as a neighbourhood eating address still helps explain why the milanesa makes sense here.",
    shift:
      "Pick one dish that tells you something about how lunch is served here.",
    humanReturn:
      "A familiar Buenos Aires lunch looks different once you pay attention to the room and daily plate.",
    responsibility:
      "Recipes and dishes vary. The current restaurant is a contemporary interpretation of the bodegón.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the city tourism listing for the historic Palermo address and the restaurant’s current menu for the actual service and reservation.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow time for a sit-down meal.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://turismo.buenosaires.gob.ar/es/atractivo/el-preferido-de-palermo",
      sources: [
        {
          title:
            "El Preferido de Palermo | Sitio oficial de turismo de la Ciudad de Buenos Aires",
          url: "https://turismo.buenosaires.gob.ar/es/atractivo/el-preferido-de-palermo",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Source for El Preferido de Palermo",
          url: "https://guide.michelin.com/es/es/ciudad-autonoma-de-buenos-aires/buenos-aires_777009/restaurante/el-preferido-de-palermo",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title:
            "El Preferido de Palermo | Sitio oficial de turismo de la Ciudad de Buenos Aires",
          url: "https://turismo.buenosaires.gob.ar/es/gastronomico/el-preferido-de-palermo",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "taste-wine-and-cheese-together-on-a-paarl-farm",
    title: "Taste wine and cheese together on a Paarl farm",
    summary:
      "At Fairview, one flight lets you compare what happens when a Cape wine stays in the same mouthful as a sharp or creamy cheese.",
    field: "taste",
    place: "Paarl",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "paarl",
    kernel:
      "Choose the tasting that explicitly pairs wine and cheese. Try each on its own before taking them together. Ask which of the cheeses are made by Fairview and whether they are from cow’s or goat’s milk.",
    rootedness:
      "The farm’s tasting combines two traditions of the Cape Winelands, both involving small changes of process that are easiest to understand when put side by side.",
    shift:
      "Keep the order of your samples in mind as you compare them.",
    humanReturn:
      "Comparing two pairings makes the taste of each wine easier to place.",
    responsibility:
      "Confirm age rules for alcohol, allergens and availability of non-alcoholic options.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Paarl Wine Route lists the farm as a public tasting stop. Confirm the operator’s entry and booking rules for the particular flight you choose.",
    participation: "Public tasting, meal or food visit.",
    duration: "Check the chosen tasting duration.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.paarlwineroute.co.za/wineries/fairview",
      sources: [
        {
          title: "Fairview | Paarl Wine Route",
          url: "https://www.paarlwineroute.co.za/wineries/fairview",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Fairview tasting room and available formats",
          url: "https://www.fairview.co.za/tasting-room/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "try-a-jamaican-patty-in-the-courtyard-at-devon-house",
    title: "Try a Jamaican patty in the courtyard at Devon House",
    summary:
      "A hot pastry offers a small, immediate way into Kingston’s everyday food, even on the grounds of one of its grand houses.",
    field: "taste",
    place: "Kingston",
    country: "Jamaica",
    countrySlug: "jamaica",
    regionSlug: "kingston-jamaica",
    kernel:
      "Ask which patties have just come out and pick one filling. Take the first bite at a seat by the bakery and compare the colour and flake of the shell with the temperature and seasoning inside.",
    rootedness:
      "The bakery sits on the grounds of Devon House, a historic Kingston estate. The patty counter connects that formal address to an everyday Jamaican food.",
    shift:
      "Start with a single patty, while the crust is still warm.",
    humanReturn:
      "You leave with a reason to remember a Kingston bakery counter in its own right.",
    responsibility:
      "Fillings change through the day. Check spice and allergens at the counter.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Devon House estate lists its bakery at 26 Hope Road. The bakery counter and any mansion tour use separate opening arrangements.",
    participation: "Public tasting, meal or food visit.",
    duration: "15–30 minutes for the bakery and courtyard.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.devonhouseja.com/restaurantsandshops/devon-house-bakery-",
      sources: [
        {
          title: "Devon House Bakery  | Devon House Jamaica",
          url: "https://www.devonhouseja.com/restaurantsandshops/devon-house-bakery-",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Devon House Heritage Site visitor information",
          url: "https://www.devonhouseja.com/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "turn-an-oaxacan-market-basket-into-lunch",
    title: "Turn an Oaxacan market basket into lunch",
    summary:
      "Begin with ingredients that are still identifiable on the market stalls. The class then gives you time to see what each becomes in a dish.",
    field: "taste",
    place: "Oaxaca",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "oaxaca-city",
    kernel:
      "On the market tour, pick an ingredient you do not know. Ask the instructor what to notice about it. Back in the kitchen, follow its preparation from cutting or grinding to the shared meal.",
    rootedness:
      "The class links seasonal Oaxaca ingredients and market stalls with a kitchen that publicly teaches how to prepare them.",
    shift:
      "Choose a market ingredient worth following back to the cooking table.",
    humanReturn:
      "The market gives you clues you can use later in your own kitchen.",
    responsibility:
      "The menu follows the market and season. Confirm transport, language and dietary arrangements when booking.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Select the Seasons of My Heart booking that includes the market tour. The cooking-only format and the market meeting point are separate details to confirm.",
    participation: "Public tasting, meal or food visit.",
    duration: "Use the duration for the class with the market tour.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.seasonsofmyheart.com/oaxaca-cooking-class",
      sources: [
        {
          title: "Oaxaca Cooking Class & Market tour | Seasons of My Heart",
          url: "https://www.seasonsofmyheart.com/oaxaca-cooking-class",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Cooking school range and Oaxaca class details",
          url: "https://www.seasonsofmyheart.com/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "taste-what-different-casks-do-to-tasmanian-whisky-in-hobart",
    title: "Taste what different casks do to Tasmanian whisky in Hobart",
    summary:
      "At a cellar door, a small flight is enough to start relating a whisky’s aroma to the wood that held it.",
    field: "taste",
    place: "Hobart",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "hobart",
    kernel:
      "Ask which pours give you a genuine cask comparison. Take the first sip without trying to identify a dozen aromas. Then return to both with the particular cask difference in mind.",
    rootedness:
      "The waterfront tasting room occupies a building that was used as a distillery and bond store. Its present function gives Hobart’s whisky history a location a visitor can enter.",
    shift:
      "Taste in parallel and see where the same description stops fitting.",
    humanReturn:
      "A side-by-side taste shows which details a whisky label leaves out.",
    responsibility:
      "Confirm age rules. A flight illustrates differences in a batch and cannot isolate every reason the pours vary.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Book a public whisky tasting at 14 Davey Street, Hobart. LARK lists a hosted three-whisky format at this cellar door. Ask which pours make a useful cask comparison.",
    participation: "Public tasting, meal or food visit.",
    duration: "Use the duration on the hosted tasting ticket.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://larkdistillery.com/products/welcome-to-lark-tasting",
      sources: [
        {
          title: "Welcome to LARK Whisky Tasting – LARK Distillery",
          url: "https://larkdistillery.com/products/welcome-to-lark-tasting",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Discover Tasmania LARK cellar door visitor listing",
          url: "https://www.discovertasmania.com.au/things-to-do/food-and-drink/thelarkdistillery/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "taste-the-difference-a-barrel-battery-makes-in-spilamberto",
    title: "Taste the difference a barrel battery makes in Spilamberto",
    summary:
      "Traditional balsamic is easiest to understand by seeing the succession of barrels before tasting a little on its own.",
    field: "taste",
    place: "Spilamberto",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "spilamberto",
    kernel:
      "On the guided visit, look along the battery of barrels as they get smaller. Ask what changes as vinegar moves from one vessel to the next, then pay attention to the finish of the sample offered in the museum tasting.",
    rootedness:
      "The museum in Spilamberto explains the local acetaia, where maturation links a series of small barrels. The barrel sequence is central to the identity of traditional Modena balsamic.",
    shift:
      "Look along the range of barrel sizes before taking a spoonful.",
    humanReturn: "The sequence of barrels becomes a taste you can recognise.",
    responsibility:
      "The museum defines which vinegar is sampled. The bottle in the photo illustrates the protected product and does not establish the tasting selection.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Museo del Balsamico Tradizionale’s visitor information to find the public guided visit and tasting in Spilamberto. Check museum opening times and confirm any booking before arrival.",
    participation: "Public tasting, meal or food visit.",
    duration: "Allow about an hour for the guided visit and tasting.",
    guideReview: {
      scope: "public_hospitality",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.museodelbalsamicotradizionale.org/visite/",
      sources: [
        {
          title: "Spilamberto museum visits and tasting information",
          url: "https://www.museodelbalsamicotradizionale.org/visite/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Museum collection and its Acetaia sociale",
          url: "https://www.museodelbalsamicotradizionale.org/museo/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Visit Modena public guided visit",
          url: "https://www.visitmodena.it/it/esperienze/visita-guidata-del-museo-dellaceto-balsamico-tradizionale-di-modena-a-spilamberto",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "walk-between-monumental-sculptures-in-the-middle-of-des-moines",
    title: "Walk between monumental sculptures in the middle of Des Moines",
    summary:
      "At Pappajohn Sculpture Park, several blocks of ordinary downtown walking become a way to see how sculpture changes with distance.",
    field: "witness",
    place: "Des Moines",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "des-moines",
    kernel:
      "Use the park’s map to pick two works with very different silhouettes. Walk around each from the lawn or pavement, then look back across the street to see what disappears against the buildings.",
    rootedness:
      "The park is part of downtown Des Moines’s Western Gateway, where public lawns and buildings give each sculpture a changing backdrop.",
    shift:
      "Return to one work from a different path through the park.",
    humanReturn:
      "Walking between works changes how you see the same park and its street edges.",
    responsibility:
      "Observe each work from permitted areas. The park asks visitors to avoid touching or climbing the sculptures.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The art centre publishes park hours from sunrise to midnight. Use its map for routes, current works and any tour offerings.",
    participation: "Public exhibition or venue visit.",
    duration: "Allow 30–60 minutes for two works and the nearby blocks.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://desmoinesartcenter.org/visit/pappajohn-sculpture-park/",
      sources: [
        {
          title: "Pappajohn Sculpture Park | Des Moines Art Center",
          url: "https://desmoinesartcenter.org/visit/pappajohn-sculpture-park/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Des Moines Art Center sculpture park visitor guide",
          url: "https://desmoinesartcenter.org/wp-content/uploads/2025/04/Pappajohn-Sculpture-Park-Visitor-Guide.pdf",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-a-material-through-quitos-pre-columbian-collection",
    title: "Follow a material through Quito’s pre-Columbian collection",
    summary:
      "A small object can stay with you longer than a whole gallery. At Casa del Alabado, choose one material and see what different makers did with it.",
    field: "witness",
    place: "Quito",
    country: "Ecuador",
    countrySlug: "ecuador",
    regionSlug: "quito",
    kernel:
      "Pick stone, clay or another material covered in the gallery. Compare how two objects meet the light, then use the labels to place each in time and context.",
    rootedness:
      "Casa del Alabado is in Quito’s historic centre and presents objects from societies that lived in the territory of present-day Ecuador.",
    shift:
      "Give a single object the time you would usually spend on a whole case.",
    humanReturn: "One object can make a very long history easier to approach.",
    responsibility:
      "A thematic tour needs confirmation. Make individual claims about an object only where the museum identifies it.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The city museum network lists public hours and reservation exceptions. Confirm the museum’s thematic tour schedule and language if you want a guide.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://alabado.org/guided-visits/",
      sources: [
        {
          title: "Source for Casa del Alabado",
          url: "https://alabado.org/guided-visits/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title:
            "Museo de Arte Precolombino Casa del Albado – Sistema de Museos y Espacios Culturales Quito (SMQ)",
          url: "https://museosquito.gob.ec/espacios/museo-de-arte-precolombino-casa-del-albado/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "see-what-hobart-artists-put-inside-a-sandstone-temple",
    title: "See what Hobart artists put inside a sandstone temple",
    summary:
      "The Art Society of Tasmania uses a small historic building for changing exhibitions. An hour here is a chance to meet work that is being made and shown locally.",
    field: "witness",
    place: "Hobart",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "hobart",
    kernel:
      "Start with the building’s proportions, then choose one work in the current exhibition. Look for the material or location the artist has chosen and see how it reads in the compact room.",
    rootedness:
      "The Art Society of Tasmania uses the historic sandstone building as a gallery. The changing exhibitions connect the building with artists who are working now.",
    shift:
      "Use the walk up to the building as part of the gallery visit.",
    humanReturn: "The surroundings give a small gallery visit its own pace.",
    responsibility:
      "Exhibitions rotate. A visit depends on the gallery’s current schedule.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Check the Art Society of Tasmania exhibition schedule, opening and entry before travelling to Lenah Valley.",
    participation: "Public exhibition or venue visit.",
    duration: "Allow 30–60 minutes.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://artstas.com.au/content.aspx?club_id=167994&module_id=400037&page_id=22",
      sources: [
        {
          title: "About Us - The Art Society of Tasmania Incorporated",
          url: "https://artstas.com.au/content.aspx?club_id=167994&module_id=400037&page_id=22",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "City of Hobart Ancanthe Park and gallery information",
          url: "https://www.hobartcity.com.au/Things-To-Do/Parks-and-reserves/Find-a-park-or-reserve/Ancanthe-Park",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "step-into-one-of-seouls-former-oil-tanks",
    title: "Step into one of Seoul’s former oil tanks",
    summary:
      "A vast container that once stored fuel now gives visitors a way to see the scale of the machinery that served the city outside the centre.",
    field: "witness",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    kernel:
      "Start with the public forecourt and identify the tank open that day. Inside, follow the curve of the vessel and look for the transition between original infrastructure and the space added for visitors.",
    rootedness:
      "The Mapo site was built as an oil reserve. The converted tanks bring that infrastructure into public view at the scale it was built.",
    shift:
      "Start by noticing what was left of the original site.",
    humanReturn:
      "You can read the transformation in the curve, material and scale of the tanks themselves.",
    responsibility:
      "Rooms may close for installations or events. Use the numbered route rather than assuming every tank is open.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The municipal park is in Mapo. Check the exhibition schedule before planning to enter a particular tank. The outdoor park and indoor opening are separate.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://english.seoul.go.kr/oil-tank-culture-park-2/",
      sources: [
        {
          title: "Oil Tank Culture Park - Seoul Metropolitan Government",
          url: "https://english.seoul.go.kr/oil-tank-culture-park-2/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Korea Tourism Organization Oil Tank Culture Park",
          url: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=62572",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-the-stairwell-through-victor-hortas-brussels-house",
    title: "Follow the stairwell through Victor Horta’s Brussels house",
    summary:
      "In Horta’s former home and studio, a stair, a door handle and a shaft of daylight can belong to the same design.",
    field: "witness",
    place: "Brussels",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "brussels",
    kernel:
      "From the foot of the stairs, look for one line that continues between the metalwork and the rooms. On the way out, think back to where you first noticed the light. Check which parts of the studio are on the path.",
    rootedness:
      "This was Victor Horta’s home and studio. Seeing both functions at one address makes the connection between the architect’s daily surroundings and his design work concrete.",
    shift:
      "Look for where the staircase brings light into the rooms below.",
    humanReturn:
      "The house shows how daylight can direct a route through a narrow city building.",
    responsibility:
      "This historic interior has stairs. Confirm accessibility and opening during exhibition changes.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Book the Horta Museum’s timed admission for its Saint-Gilles address. Consult its current rules for interior photography and access to the stairs.",
    participation: "Public exhibition or venue visit.",
    duration: "Use the duration of the timed museum visit.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.visit.brussels/en/visitors/venue-details.Museo-Horta.241873",
      sources: [
        {
          title: "Horta Museum | Visit Brussels",
          url: "https://www.visit.brussels/en/visitors/venue-details.Museo-Horta.241873",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Horta Museum admission and access conditions",
          url: "https://hortamuseum.com/fr/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "read-one-gallery-through-afro-brazilian-artists-in-ibirapuera",
    title: "Read one gallery through Afro-Brazilian artists in Ibirapuera",
    summary:
      "Inside the park’s pavilion, a collection assembled by Emanoel Araujo offers multiple ways to think about African and Afro-Brazilian cultural history.",
    field: "witness",
    place: "São Paulo",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "sao-paulo",
    kernel:
      "Choose one work on display and make the artist’s name the starting point. Follow the label from material to context, then look for a second work that takes a different position in the same room.",
    rootedness:
      "The museum in Ibirapuera Park grew from Emanoel Araujo’s collection. It provides a local institutional setting for distinct Afro-Brazilian artists and histories.",
    shift:
      "Read one object alongside a contemporary work before moving on.",
    humanReturn:
      "A closer look gives the objects and artists more room than a single historical label.",
    responsibility:
      "Displays change. Individual works need their own image and rights checks.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The museum publishes hours, ticket rules and exhibition information on its official site. Begin in Ibirapuera Park and check the day’s opening and which galleries are on view.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://museuafrobrasil.org.br/planeje-sua-visita/",
      sources: [
        {
          title: "Planeje sua visita - Museu Afro Brasil",
          url: "https://museuafrobrasil.org.br/planeje-sua-visita/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Brazil government museum register and visitor listing",
          url: "https://visite.museus.gov.br/instituicoes/museu-afro-brasil-emanoel-araujo/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "compare-the-structure-of-two-indian-textiles-in-ahmedabad",
    title: "Compare the structure of two Indian textiles in Ahmedabad",
    summary:
      "At the Calico Museum, a guided route gives you time to look at cloth as something technically made as well as something beautiful.",
    field: "witness",
    place: "Ahmedabad",
    country: "India",
    countrySlug: "india",
    regionSlug: "ahmedabad",
    kernel:
      "In the textile galleries, compare a weave with a surface-decorated textile. When the guide points to a repeat, look at whether its lines seem to follow the threads or sit across their surface.",
    rootedness:
      "Ahmedabad’s textile trade and industry shaped the city. The museum collection gives the material itself the sustained attention that a factory story alone cannot.",
    shift:
      "Follow a repeat before you read the description on the label.",
    humanReturn:
      "You gain a practical way to look for how a textile’s pattern was made.",
    responsibility:
      "Follow the museum’s photography rules and stay with the guided route. The photo shows a related Gujarati textile in the Met’s collection, not an object on display in Ahmedabad.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Calico Museum’s public tour booking for its Shahibaug site at The Retreat. Confirm the arrival window, age rules and the galleries covered by your reservation.",
    participation: "Public exhibition or venue visit.",
    duration: "Use the duration on the confirmed guided reservation.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://calicomuseum.org/tour/tour-guidelines",
      sources: [
        {
          title: "Calico Museum public tour guidelines",
          url: "https://calicomuseum.org/tour/tour-guidelines",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Calico Museum’s Chauk textile galleries",
          url: "https://calicomuseum.org/tours/chauk",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Gujarat tourism visitor information",
          url: "https://gujarattourism.com/central-zone/ahmedabad/calico-museum-of-textiles.html",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Met Open Access Gujarati patola reference object",
          url: "https://www.metmuseum.org/art/collection/search/308007",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "read-a-single-work-in-sydneys-white-rabbit-gallery",
    title: "Spend time with one work at Sydney’s White Rabbit Gallery",
    summary:
      "A former knitting factory in Chippendale gives contemporary Chinese art several floors to unfold. One work is enough to get a sense of how the gallery asks you to look.",
    field: "witness",
    place: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    kernel:
      "At Gen Xi, look long enough to name one thing the artist has done with the material, scale or sound. Read the label after looking and see whether it changes the detail you chose.",
    rootedness:
      "The gallery uses a former industrial building in Chippendale and shows work from its collection of contemporary Chinese art. The exhibition changes the route through the rooms.",
    shift:
      "Let material or scale hold your attention before reading the artist’s description.",
    humanReturn:
      "A slow look makes a gallery visit easier to remember than a quick circuit of every floor.",
    responsibility:
      "The guide is based on the gallery’s announced exhibition. The photo shows the building before the installation, and the specific works on view can change.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "White Rabbit Gallery lists free admission and schedules Gen Xi for 11 December 2026 through 6 June 2027 at 30 Balfour Street. The gallery and teahouse are closed for installation until the opening. Check current hours and access information before visiting.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://whiterabbitcollection.org/visit/",
      sources: [
        {
          title: "White Rabbit official visitor information and reopening",
          url: "https://whiterabbitcollection.org/visit/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Gen Xi exhibition dates",
          url: "https://whiterabbitcollection.org/exhibition/gen-xi/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "read-a-pre-columbian-textile-by-following-one-thread-in-lima",
    title: "Read a pre-Columbian textile by following one thread in Lima",
    summary:
      "In Miraflores, a textile museum brings cloth close enough to see the decisions that can disappear in a distant display case.",
    field: "witness",
    place: "Lima",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    kernel:
      "Begin in the textile technology room and pick out one step, such as spinning or dyeing. Then follow a repeat on a piece in the galleries and see how that step helps explain the line you can see.",
    rootedness:
      "The museum specialises in textiles from ancient Peru. Its Miraflores rooms offer a way to spend time with cloth alongside, and at a different scale from, the larger archaeological collections in Lima.",
    shift:
      "Look for a line of colour and work back to the steps that made it possible.",
    humanReturn:
      "One thread connects the finished textile back to a sequence of decisions by its maker.",
    responsibility:
      "Gallery displays can change for conservation. The photograph documents the Amano galleries in 2024. Check the current display before making a trip for a particular piece.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Museo Amano’s official visitor page for public hours and admission in Miraflores. The museum asks groups of 11 or more to make arrangements separately.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.museoamano.org/visitanos/",
      sources: [
        {
          title: "Museo Amano visitor details",
          url: "https://www.museoamano.org/visitanos/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Museo Amano textile technology room and collections",
          url: "https://www.museoamano.org/exposiciones/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Peruvian Ministry of Culture museum directory",
          url: "https://museos.cultura.pe/sites/default/files/publicaciones/pdf/Gu%C3%ADa%20de%20Museos%202023%20%28preliminar%29_0.pdf",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "visit-the-lisbon-rooms-where-fernando-pessoa-wrote-as-several-people",
    title:
      "Visit the Lisbon rooms where Fernando Pessoa wrote as several people",
    summary:
      "In Campo de Ourique, the writer’s former address gives you a place to see how his different writing identities inhabited one city.",
    field: "witness",
    place: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    kernel:
      "Start with the permanent display and follow one heteronym through an object, manuscript or recording where offered. When you reach the library, give a text more time than the label next to it.",
    rootedness:
      "Pessoa’s former home is in Campo de Ourique. The public house and library offer two different ways to follow his work in the city where he wrote it.",
    shift:
      "Listen for what changes when the speaker’s name changes.",
    humanReturn:
      "One voice gives you a way into the writing before you try to take in all of Pessoa’s personae.",
    responsibility:
      "Distinguish the writer’s former living space from later displays and the museum’s working library.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The house museum publishes general opening and guided visit options. Confirm your language and whether you want a tour or a self-guided visit.",
    participation: "Public exhibition or venue visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.casafernandopessoa.pt/en/visit",
      sources: [
        {
          title: "Visit · Casa Fernando Pessoa",
          url: "https://www.casafernandopessoa.pt/en/visit",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Lisbon visitor authority Casa Fernando Pessoa listing",
          url: "https://www.visitlisboa.com/en/places/casa-fernando-pessoa",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "watch-kinetic-sculpture-find-its-pace-in-new-plymouth",
    title: "Watch kinetic sculpture find its pace in New Plymouth",
    summary:
      "At the Len Lye Centre, the work is the movement as much as the metal. A scheduled performance gives you time to watch and listen as both fill the room.",
    field: "witness",
    place: "New Plymouth",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "new-plymouth",
    kernel:
      "At the opening programme, wait for Trilogy: A Flip and Two Twisters. Follow the suspended steel with your eyes and listen for how the sound changes as its movement builds.",
    rootedness:
      "New Plymouth is home to the gallery and centre dedicated to Len Lye. Its programme gives the movement of his work space and time.",
    shift:
      "Hold your place until the machine goes through a second cycle.",
    humanReturn:
      "Watching long enough for the movement to repeat lets you hear the sculpture as well as see it.",
    responsibility:
      "The 9 pm performance belongs to the opening programme. Sound levels and access depend on the chosen session.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The gallery lists a free public opening on 5 December 2026 from 6 pm and a special performance of Trilogy at 9 pm. Len Lye: Energies runs through 26 April 2027. For another date, check which sculptures the gallery will activate.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-05",
      accessUrl: "https://govettbrewster.com/events/event/E32079D3636",
      sources: [
        {
          title: "Frequency Shift opening programme",
          url: "https://govettbrewster.com/events/event/E32079D3636",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Len Lye: Energies exhibition",
          url: "https://govettbrewster.com/exhibitions/2026/len-lye-energies",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Gallery visitor information",
          url: "https://govettbrewster.com/visit/plan-your-visit",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-daily-life-through-a-1930s-rotterdam-house",
    title: "Follow daily life through a 1930s Rotterdam house",
    summary:
      "Sonneveld House made a modern argument about how to live. A light fitting, a built-in speaker and a balcony let you follow that argument room by room.",
    field: "work",
    place: "Rotterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "rotterdam",
    kernel:
      "Use the audio route to compare a room designed for shared life with one designed for private routines. Look for what furniture, lighting and surfaces take care of on behalf of the people who lived there.",
    rootedness:
      "Sonneveld House preserves a model of early twentieth-century domestic design in Rotterdam. The furnishings and layout explain what the architectural style meant in use.",
    shift:
      "Look for what a new material makes possible in an ordinary room.",
    humanReturn:
      "A room’s proportions reveal how modern design changed ordinary domestic routines.",
    responsibility:
      "Restored historic rooms contain fragile interiors. Confirm photography and bag rules.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Start from the Nieuwe Instituut visitor information for house admission, audio and the current route. Check stair access before booking.",
    participation: "Public design or technology visit.",
    duration: "Allow roughly an hour for the house.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://nieuweinstituut.nl/en/projects/huis-sonneveld/museumwoning-huis-sonneveld",
      sources: [
        {
          title: "Sonneveld House Museum",
          url: "https://nieuweinstituut.nl/en/projects/huis-sonneveld/museumwoning-huis-sonneveld",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "The Multi-Sensory House | Museum/nl\\",
          url: "https://www.museum.nl/en/huis-sonneveld/audio-tour/the-multi-sensory-house",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "trace-the-glass-wall-around-brnos-onyx-living-room",
    title: "Trace the glass wall around Brno’s onyx living room",
    summary:
      "In Villa Tugendhat, a room that looks open is held together by carefully chosen screens, surfaces and views.",
    field: "work",
    place: "Brno",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "brno",
    kernel:
      "Book the visit that includes the main living level. Stand where the guide permits and look through the glass towards the garden, then turn back to see how the onyx wall separates one use from another.",
    rootedness:
      "In Brno’s Černá Pole district, Villa Tugendhat combines an open living floor with the direction of the garden and slope. That relationship is easiest to read by taking the interior route.",
    shift:
      "Step back from the glass and see what the room borrows from the garden.",
    humanReturn:
      "You can see how the glass, garden and room each set the limits of the other two.",
    responsibility:
      "Seeing the original movable window is different from seeing it demonstrated. Daily operation depends on the tour.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Villa Tugendhat timed-ticket page and select the tour type and language. Interior tickets are limited and step access depends on the route.",
    participation: "Public design or technology visit.",
    duration: "Use the selected tour’s published duration.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.vilatugendhat.cz/en/tour-and-tickets/",
      sources: [
        {
          title: "Tours and tickets - Vila Tugendhat",
          url: "https://www.vilatugendhat.cz/en/tour-and-tickets/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Villa Tugendhat | VisitCzechia",
          url: "https://www.visitczechia.com/en-us/things-to-do/places/landmarks/unesco/c-brno-unesco-tugendhat-villa",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "read-mechanical-time-at-la-chaux-de-fonds-carillon",
    title:
      "Read mechanical time inside and outside La Chaux-de-Fonds’ watch museum",
    summary:
      "The museum puts the movement of time on two scales. Look at a mechanism indoors, then step out to see how the carillon turns the quarter hour into a public event.",
    field: "work",
    place: "La Chaux-de-Fonds",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "la-chaux-de-fonds",
    kernel:
      "Compare the museum’s tower-clock mechanism with the carillon outside. Look for moving metal strips and listen for the bells. The museum describes a fifteen-minute cycle for the moving strips.",
    rootedness:
      "La Chaux-de-Fonds is one of Switzerland’s watchmaking centres. The museum connects the precision of small mechanisms with a carillon scaled to a public park.",
    shift:
      "Use the outdoor sound to compare two ways of telling the same time.",
    humanReturn:
      "The same quarter hour becomes legible through both a small mechanism and a public instrument.",
    responsibility:
      "A mechanical installation may be idle for maintenance. The photograph shows the museum entrance, where the indoor and outdoor parts of this visit connect.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The museum lists regular opening Tuesday to Sunday. The carillon stands outside in the museum park. Check the museum’s schedule and any service notices before timing a visit around a movement cycle.",
    participation: "Public design or technology visit.",
    duration:
      "Allow at least one quarter hour outdoors, plus time for the museum.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.mih.ch/fr/carillon/",
      sources: [
        {
          title: "International Museum of Horology carillon description",
          url: "https://www.mih.ch/fr/carillon/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "International Museum of Horology visitor information",
          url: "https://www.mih.ch/fr/bon-a-savoir/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-jute-fibre-through-a-dundee-mill",
    title: "Follow jute fibre through a Dundee mill",
    summary:
      "At Verdant Works, the distance between a coarse fibre and a finished cloth is the distance between machines on the old mill floor.",
    field: "work",
    place: "Dundee",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "dundee",
    kernel:
      "Start with the raw fibre and follow preparation through to a loom. Ask which machine visitors can see in motion and how the sequence once divided the work between people.",
    rootedness:
      "Jute belonged to Dundee’s working economy. The old mill gives a visitor room to follow its transformation instead of encountering a piece of fabric by itself.",
    shift:
      "Follow the jute from raw fibre through the first visible stage of work.",
    humanReturn:
      "The mill connects a material on a shelf with the work and routines that produced it.",
    responsibility:
      "Treat working demonstrations as conditional. Photographs of the courtyard or exterior need a clear caption.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Dundee’s visitor listing to reach the local museum booking and accessibility information. Check demonstration times against admission hours.",
    participation: "Public design or technology visit.",
    duration: "Allow around 90 minutes for the public museum route.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://visitdundee.com/things-to-do/verdant-works",
      sources: [
        {
          title: "Verdant Works | VisitDundee",
          url: "https://visitdundee.com/things-to-do/verdant-works",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Dundee Heritage Trust visitor information",
          url: "https://www.dundeeheritagetrust.co.uk/attraction/verdant-works/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "compare-the-outline-of-steam-and-maglev-in-nagoya",
    title: "Compare the outline of steam and maglev in Nagoya",
    summary:
      "Two trains built for different eras make the space around a vehicle almost as interesting as the vehicle itself.",
    field: "work",
    place: "Nagoya",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "nagoya",
    kernel:
      "At the SCMAGLEV and Railway Park, compare a steam locomotive with a maglev vehicle in the display. Look at how the front and underbody make room for the constraints of that technology.",
    rootedness:
      "The Nagoya museum presents different generations of railway engineering in one hall. Their shapes make differences in power, speed and rail technology visible.",
    shift:
      "Read the differences between train noses before looking at any speed figure.",
    humanReturn:
      "Looking up close makes a train’s shape easier to connect with the work it must do at speed.",
    responsibility:
      "The main collection is a public museum visit. Simulator participation is a separate option.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "JR Central publishes the museum’s opening, route and simulator terms. Confirm any separate ticket or allocation for a simulator before promising yourself a turn.",
    participation: "Public design or technology visit.",
    duration: "Allow around two hours for the rolling stock.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://museum.jr-central.co.jp/en/",
      sources: [
        {
          title: "SCMAGLEV and Railway Park | Central Japan Railway Company",
          url: "https://museum.jr-central.co.jp/en/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "SCMAGLEV and Railway Park | Visit Nagoya-Nagoya City Guide",
          url: "https://www.nagoya-info.jp/en/spot/detail/16/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "trace-the-old-path-of-iron-at-carrie-blast-furnaces",
    title: "Trace the old path of iron at Carrie Blast Furnaces",
    summary:
      "At the edge of the Monongahela, surviving furnaces make steelmaking’s scale legible from below.",
    field: "work",
    place: "Pittsburgh",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "pittsburgh",
    kernel:
      "On a Rivers of Steel tour, look for where raw materials arrived and where molten iron left the process. Use the guide’s route to connect the size of the structures with a specific job on the site.",
    rootedness:
      "The furnaces were part of the industrial landscape of the Monongahela near Pittsburgh. Their surviving outline ties a manufacturing sequence to the river and its working communities.",
    shift:
      "Look at what the space asked of one person working a shift.",
    humanReturn: "The route gives industrial scale a human reference point.",
    responsibility:
      "Cross uneven ground only where the tour permits. Furnace operation belongs to the site’s history.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Book the industrial heritage tour and check the listed season, tour entrance and terrain. Some areas are closed for stabilisation work.",
    participation: "Public design or technology visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://riversofsteel.com/experiences/tours/",
      sources: [
        {
          title: "Tours — Rivers of Steel",
          url: "https://riversofsteel.com/experiences/tours/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Source for Carrie Blast Furnaces",
          url: "https://pittsburghlaborhistorytrail.org/carrie-furnaces/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "look-at-working-objects-in-joze-plecniks-ljubljana-house",
    title: "Look at working objects in Jože Plečnik’s Ljubljana house",
    summary:
      "A chair or a worktable can explain something about an architect that a photograph of a finished building cannot.",
    field: "work",
    place: "Ljubljana",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "ljubljana",
    kernel:
      "On the guided route, look for a familiar domestic object arranged for an unfamiliar purpose. Compare it with the way Plečnik handled light, storage or space in the room around it.",
    rootedness:
      "Plečnik’s house in Trnovo puts his work in the same rooms as everyday life. The municipal collection preserves objects that show how he used those spaces.",
    shift:
      "Begin with a small room or everyday object rather than the best-known building.",
    humanReturn:
      "The house shows how a designer tested ideas against ordinary things at home.",
    responsibility:
      "Tours are small and the house route is controlled. Check which workspaces you can enter.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Ljubljana municipal museum publishes fixed tour starts and language options. Use the public ticket route for the original rooms in Trnovo.",
    participation: "Public design or technology visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://mgml.si/en/plecnik-house/visit-us/",
      sources: [
        {
          title: "Visit us • MGML",
          url: "https://mgml.si/en/plecnik-house/visit-us/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Plečnik House | Visit Ljubljana",
          url: "https://www.visitljubljana.com/en/poi/plecnik-house?lang=en",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "see-what-a-stationary-steam-engine-did-in-chemnitz",
    title: "See what a stationary steam engine did in Chemnitz",
    summary:
      "In a former foundry’s machine house, an 1896 engine makes the scale of factory power visible. Stand where you can take in the flywheel and the room built around it.",
    field: "work",
    place: "Chemnitz",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "chemnitz",
    kernel:
      "Follow the piston to the flywheel from the visitor side of the railing. On a scheduled demonstration, listen for the change in rhythm as the wheel picks up. The same layout is easier to trace when the machine is still.",
    rootedness:
      "The preserved machine house belongs to Chemnitz’s industrial history. Its layout connects a compact account of steam power to the built space required to use it.",
    shift:
      "Trace the mechanical line before the wheel starts to turn.",
    humanReturn:
      "The flywheel puts the scale and rhythm of steam power into a room you can stand inside.",
    responsibility:
      "Stay behind the visitor railing. The engine can be viewed at rest. A running display needs a listed demonstration on your date.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The museum calendar lists public 20-minute runs at 11 am, 1 pm and 3 pm on selected dates. Open the dated listing for current times and cancellations before travelling.",
    participation: "Public design or technology visit.",
    duration: "About 20 minutes for the scheduled demonstration.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.industriemuseum-chemnitz.de/veranstaltungen",
      sources: [
        {
          title: "Dated steam engine demonstrations",
          url: "https://www.industriemuseum-chemnitz.de/veranstaltungen",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Machine house and original engine",
          url: "https://www.industriemuseum-chemnitz.de/ausstellungen/maschinenhaus",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Museum press photographs and credit terms",
          url: "https://www.industriemuseum-chemnitz.de/pressefotos",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "trace-pratos-cloth-from-fibre-to-a-finished-sample",
    title: "Trace Prato’s cloth from fibre to a finished sample",
    summary:
      "Inside the former Campolmi complex, the textile museum gives a city’s industry a scale that fits in a cabinet or a hand.",
    field: "work",
    place: "Prato",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "prato",
    kernel:
      "Use a sample or interpretive display to follow wool from fibre to yarn to cloth. Then find a labelled garment or swatch and look for the technique in the finished surface.",
    rootedness:
      "The former Campolmi works joins Prato’s industrial building history to a museum collection of cloth. You can see familiar textile structures in a place once organised to produce them.",
    shift:
      "Find a seam or texture that tells you what a fabric was made to do.",
    humanReturn:
      "A single material connects the museum collection with the city’s working history.",
    responsibility:
      "The collection is public. Handling applies only to samples the museum makes available.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The municipality lists the museum in the Campolmi complex. Check the current exhibition and handling policy rather than assuming all displays are tactile.",
    participation: "Public design or technology visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.pratoturismo.it/it/cosa/luoghi-da-vedere/musei/museo-del-tessuto/",
      sources: [
        {
          title: "Prato Turismo - Museo del Tessuto",
          url: "https://www.pratoturismo.it/it/cosa/luoghi-da-vedere/musei/museo-del-tessuto/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Italian Ministry of Culture Textile Museum listing",
          url: "https://cultura.gov.it/luogo/museo-del-tessuto",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "look-up-at-a-scientific-dataset-in-norrkoping",
    title: "Look up at a scientific dataset in Norrköping",
    summary:
      "The Wisdome programme makes scale and motion visible across a dome rather than through a flat diagram.",
    field: "work",
    place: "Norrköping",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "norrkoping",
    kernel:
      "Choose a show tied to a subject you want to understand. When a view changes scale, use a fixed reference in the image to see what becomes legible from the new position.",
    rootedness:
      "The science centre stands in Norrköping’s former industrial landscape. Its dome offers a contemporary reason to visit a district with a long history of working technology.",
    shift:
      "Let the size of the dome change what you look for in the image.",
    humanReturn:
      "A shared view from inside the dome changes what you can grasp about scale and perspective.",
    responsibility:
      "Check motion effects if they matter for you. The photograph can identify the centre without implying access to a particular screening.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Visualiseringscenter C’s programme to select a timed dome show, language and age suitability. The visitor centre has separate hours.",
    participation: "Public design or technology visit.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://visualiseringscenter.se/en/wisdome/",
      sources: [
        {
          title: "WISDOME | Visualiseringscenter C",
          url: "https://visualiseringscenter.se/en/wisdome/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Visualiseringscenter C - Visit Norrköping",
          url: "https://visit.norrkoping.se/se-och-gora/museum-och-gallerier/museum-och-gallerier/visualiseringscenter-c",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "go-behind-the-scenes-in-gatesheads-former-flour-mill",
    title: "Go behind the scenes in Gateshead’s former flour mill",
    summary:
      "From a tall building on the Tyne, a small guided tour explains spaces that a visit to the exhibition floors does not normally reveal.",
    field: "work",
    place: "Gateshead",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "gateshead",
    kernel:
      "Begin with the river-facing outline and look back at the old building once inside. Use one space on the guided route to compare the needs of a flour mill with those of a contemporary gallery.",
    rootedness:
      "Baltic occupies a former flour mill beside the Tyne. A visitor can read the building at once as a river works and as a contemporary space for art.",
    shift:
      "Ask how work gets into and out of a gallery in a converted building.",
    humanReturn:
      "One view of the building behind the public galleries makes the next artwork easier to place in its working context.",
    responsibility:
      "Tour rooms and exhibitions can change. Reproduction rights for contemporary artworks are separate from building photography.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Baltic lists a public behind-the-scenes tour and a direct booking button. Confirm the date and accessible route for the roughly 40-minute visit.",
    participation: "Public design or technology visit.",
    duration: "About 40 minutes on the guided tour.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://baltic.art/whats-on/d1-behind-the-scenes-tour/",
      sources: [
        {
          title: "Behind the Scenes Tour | Baltic Centre for Contemporary Art",
          url: "https://baltic.art/whats-on/d1-behind-the-scenes-tour/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Gateshead public listings for the behind-the-scenes tour",
          url: "https://www.ourgateshead.org/things-to-do/behind-scenes-tour",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "cut-a-simple-carved-motif-in-kamakura",
    title: "Cut a simple carved motif in Kamakura",
    summary:
      "Kamakurabori lacquerware begins in the wood. A short carving class lets you feel how a motif is made before the surface is finished.",
    field: "make",
    place: "Kamakura",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kamakura",
    kernel:
      "Choose a simple outline and make the first cuts with the instructor. Notice where the curve changes the direction of the cutting tool and leaves a groove that catches the light.",
    rootedness:
      "Kamakurabori belongs to Kamakura’s local craft history. The public class is a route into the carving stage that precedes finishing.",
    shift:
      "Put the tool down long enough to feel how the grain runs.",
    humanReturn:
      "A small cut helps you see the relationship between grain, hand and pattern.",
    responsibility:
      "The visitor class teaches carving. Confirm tools, minimum age and whether any lacquer stage is included.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Kamakura City’s list of two public formats. The craft hall takes advance reservations for its one to two hour session. The museum course follows a separate timetable.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "Around one to two hours depending on format.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.city.kamakura.kanagawa.jp/shoukou/kamakuraboritaiken.html",
      sources: [
        {
          title: "鎌倉市／鎌倉彫の体験",
          url: "https://www.city.kamakura.kanagawa.jp/shoukou/kamakuraboritaiken.html",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title:
            "Kamakurabori-Kougeikan | Sightseeing | Kanagawa Sea Project | Feel SHONAN",
          url: "https://www.pref.kanagawa.jp/osirase/0602/feelshonan/en/sightseeing/944/index.html",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-a-cartoon-into-an-aubusson-tapestry",
    title: "See how Aubusson weavers turned Miyazaki frames into tapestries",
    summary:
      "At the Cité internationale de la tapisserie, a frame from an animated film becomes a picture worked thread by thread. Its scale changes where your eyes land.",
    field: "make",
    place: "Aubusson",
    country: "France",
    countrySlug: "france",
    regionSlug: "aubusson",
    kernel:
      "Start far enough back to read one of the large tapestries as a single scene. Move closer to see how a colour boundary is built in wool. The museum’s project notes explain what the weavers had to translate from the film frame.",
    rootedness:
      "Aubusson has an established weaving tradition and continues to commission tapestries. The Cité brings designs and the work of translating them into cloth into the same public institution.",
    shift:
      "Look closely at where two colours meet along the wool.",
    humanReturn:
      "Film and wool each make something visible that the other medium must solve in a different way.",
    responsibility:
      "This is a public exhibition visit. Live weaving follows a separate programme. The photo shows the museum exterior.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Cité lists the Hayao Miyazaki exhibition through 31 December 2026 and separately notes a temporary-gallery closure scheduled through 4 December. Check that the work you want to see is on view before travelling.",
    participation:
      "Observe a public demonstration, collection or working process.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-31",
      accessUrl:
        "https://www.cite-tapisserie.fr/fr/programmation/exposition/l-imaginaire-de-hayao-miyazaki-en-tapisserie-d-aubusson",
      sources: [
        {
          title: "Miyazaki exhibition dates",
          url: "https://www.cite-tapisserie.fr/fr/programmation/exposition/l-imaginaire-de-hayao-miyazaki-en-tapisserie-d-aubusson",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Temporary-gallery closure notice",
          url: "https://www.cite-tapisserie.fr/fr/programmation/a-la-cite/exposition-en-cours-de-montage-1",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Official tapestry project and techniques",
          url: "https://www.cite-tapisserie.fr/le-musee/les-aventures-tissees/l-imaginaire-de-hayao-miyazaki",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Cité visitor information",
          url: "https://www.cite-tapisserie.fr/en/vous-etes/visiteur",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "stoke-gladstone-try-the-potters-wheel",
    title: "Try a potter’s wheel in a former Stoke-on-Trent potbank",
    summary:
      "At Gladstone’s former Victorian factory, follow the clay through a working gesture. If the wheel is on the day’s list, try what changing the pressure of your hands does to the shape.",
    field: "make",
    place: "Stoke-on-Trent",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "stoke-on-trent",
    kernel:
      "Watch a demonstrator centre the clay and see how little movement is needed to start opening the form. If there is a public try-out, take a turn and start with the same motion.",
    rootedness:
      "Gladstone preserves the workshops and bottle kilns of Stoke-on-Trent’s ceramics industry. The wheel makes it possible to see both the manual skill and the repetition behind factory output.",
    shift:
      "See how a steady hand becomes as important as a turning wheel.",
    humanReturn:
      "Even a short turn at the wheel helps you recognise the skill that goes into a plain everyday pot.",
    responsibility:
      "Hands-on options depend on the day. Follow the demonstrator’s instructions and confirm any arrangements for keeping or collecting work.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Visit Stoke lists occasional pottery demonstrations and small-fee activities at Gladstone. The council announces winter reopening in January 2027. Check the dated opening times and confirm which session is running before visiting for a turn at the wheel.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "Check the length and availability of the day’s demonstrations.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.stoke.gov.uk/news/article/2196/gladstone_pottery_museum_set_to_welcome_visitors_back_in_january",
      sources: [
        {
          title: "Stoke-on-Trent council opening announcement",
          url: "https://www.stoke.gov.uk/news/article/2196/gladstone_pottery_museum_set_to_welcome_visitors_back_in_january",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Visit Stoke pottery demonstrations and visitor activities",
          url: "https://www.visitstoke.co.uk/see-and-do/gladstone-pottery-museum-p736501",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-ajloun-olive-oil-to-the-soap-house-in-orjan",
    title: "Follow the Ajloun forest trail to Orjan’s olive-oil soap house",
    summary:
      "From Ajloun Forest Reserve the trail climbs through oak woodland before dropping into Orjan. At the Soap House, olive oil takes a form you can hold.",
    field: "make",
    place: "Orjan, Ajloun",
    country: "Jordan",
    countrySlug: "jordan",
    regionSlug: "orjan",
    kernel:
      "Begin at the reserve visitor centre and look for the changes in vegetation as the route leaves the higher ground. At the Soap House, ask what the team is making that day and look at how the bars are cut or presented when the workshop is open.",
    rootedness:
      "Olive growing and village production both appear on the route from the Ajloun Forest Reserve to Orjan. The Soap House is one place where the material links the two.",
    shift:
      "Let the walk put the workshop in the landscape it depends on.",
    humanReturn:
      "The walk connects olive oil, forest and village work in one visit.",
    responsibility:
      "This is a forest walk with a workshop visit when available. Expect changes in elevation. Confirm whether making can be seen that day and follow the guide’s instructions.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Jordan Tourism Board lists the Soap House Trail from the visitor centre to Orjan. Ask the reserve about current guide arrangements, trail length, weather and Soap House opening before setting out.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://international.visitjordan.com/wheretogo/ajloun/",
      sources: [
        {
          title: "Jordan Tourism Board Soap House Trail description",
          url: "https://international.visitjordan.com/wheretogo/ajloun/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "RSCN Ajloun Forest Biosphere Reserve visitor information",
          url: "https://rscn.org.jo/reserve/2?lang=en",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "RSCN nature academy projects including the Soap House",
          url: "https://www.rscn.org.jo/ranc?lang=en",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "draw-a-line-in-wax-at-yogyakartas-batik-museum",
    title: "Draw a line in wax at Yogyakarta’s Batik Museum",
    summary:
      "At the museum’s workshop, an apparently simple wax line decides what will happen when cloth meets dye.",
    field: "make",
    place: "Yogyakarta",
    country: "Indonesia",
    countrySlug: "indonesia",
    regionSlug: "yogyakarta",
    kernel:
      "Work with the instructor to make a small pattern. Watch where the wax holds its edge and what happens to the area around it when colour is added.",
    rootedness:
      "The Yogyakarta museum places a workshop in the same institution as its examples of batik. The class makes it easier to read the deliberate gaps and boundaries in the cloth.",
    shift:
      "Compare the first and second repeat when the wax reaches the cloth.",
    humanReturn:
      "You leave able to spot a small difference between a line drawn by hand and one stamped in repeat.",
    responsibility:
      "Hot wax and dyes are part of the craft. Follow the workshop’s age, clothing and safety guidance.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the museum’s training page and confirm the visit length, language, cloth size and whether dyeing and wax removal are part of the booked session.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://museumbatikyk.com/pelatihan-batik/",
      sources: [
        {
          title: "Pelatihan Batik - Museum Batik Yogyakarta",
          url: "https://museumbatikyk.com/pelatihan-batik/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Batik Museum of Yogyakarta - Yogyakarta Tourism Portal",
          url: "https://visitingjogja.jogjaprov.go.id/en/17619/batik-museum-of-yogyakarta/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "learn-the-start-of-a-cape-breton-fiddle-phrase-in-judique",
    title: "Try a Cape Breton fiddle phrase in Judique",
    summary:
      "A few notes on a fiddle change what you hear in the tunes played for Cape Breton dancing. Start with the instrument in the room where those tunes are explained.",
    field: "make",
    place: "Judique, Cape Breton",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "judique",
    kernel:
      "In the Tom Rankin exhibit, listen to a Cape Breton tune, then use the fiddle provided to try a few notes. Listen again for the rhythm that would give a dancer the next step.",
    rootedness:
      "Judique’s centre collects and presents Cape Breton music. Its public interpretation links a playable tune to the practice of music and dance in the region.",
    shift:
      "Try the bow before listening again to the rhythm of the tune.",
    humanReturn:
      "A few notes on the fiddle give you a more concrete way to listen to a dance tune.",
    responsibility:
      "The fiddle is part of a self-guided exhibit. Instruction and live music have their own programmes.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Celtic Music Interpretive Centre describes a self-guided visit of about 30 minutes. It lists Sunday hours of 2 pm to 5 pm year-round, with longer Sunday hours and additional weekdays in peak season. Check the current hours.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "About 30 minutes for the self-guided exhibit.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.celticmusiccentre.ca/visit/",
      sources: [
        {
          title: "Celtic Music Interpretive Centre exhibit and visiting hours",
          url: "https://www.celticmusiccentre.ca/visit/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Destination Cape Breton interactive exhibit listing",
          url: "https://www.cbisland.com/en/listing/interactive-exhibit-room-celtic-music-interpretive-centre",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "try-blowing-glass-at-limmareds-working-glasshouse",
    title: "Try blowing glass at Limmared’s working glasshouse",
    summary:
      "At Glasets Hus, a live workshop offers a view of the moment when heat, timing and the shape of a tool begin to matter.",
    field: "make",
    place: "Limmared",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "limmared",
    kernel:
      "Look for how the glassblower keeps the material moving and how the shape changes after the next pass near the furnace. Ask whether the public format that day includes a demonstration or a separate making session.",
    rootedness:
      "Limmared’s working glasshouse and museum share the same visitor site. The workshop keeps the local craft visible through a present-day practice.",
    shift:
      "Follow how quickly the material goes from yielding to holding its shape.",
    humanReturn:
      "A small shift in breath or timing makes the craft easier to recognise when you watch it again.",
    responsibility:
      "Follow the instructor around hot tools. Check collection and cooling arrangements with the glasshouse before counting on a same-day piece.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Glasets Hus booking listing for a public hands-on session. The glasshouse publishes general opening separately. Confirm the session language and age conditions in the selected listing.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://glasetshuslimmared.se/glasblasning/",
      sources: [
        {
          title: "Glasets Hus glassblowing visitor programmes",
          url: "https://glasetshuslimmared.se/glasblasning/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Glasets Hus live public session booking",
          url: "https://www.bokadirekt.se/places/glasets-hus-58907",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Workshop address and opening hours",
          url: "https://glasetshuslimmared.se/hitta-hit-oppettider/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-a-design-from-yarn-to-machine-at-tilburgs-textiellab",
    title: "Follow a design from yarn to machine at Tilburg’s TextielLab",
    summary:
      "Inside a former textile factory, the TextielLab lets you see the gap between a design and the material it becomes.",
    field: "make",
    place: "Tilburg",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "tilburg",
    kernel:
      "Look across the working floor from the visitor route. Start with the yarn feeding a machine and look for where its colour or texture reappears in the fabric. See which decisions still need a person at the loom.",
    rootedness:
      "The textile museum in Tilburg houses a working lab at a site with its own manufacturing history. The public visitor route makes part of a process visible that is normally outside the showroom.",
    shift:
      "Compare what the machine repeats with the work a person still needs to do.",
    humanReturn:
      "Seeing the yarn advance gives a finished cloth a history you can follow.",
    responsibility:
      "Individual visitors observe the working lab from public areas. Jobs on the machines change with the production schedule.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Visit the TextielLab with museum admission. Published lab hours are Tuesday to Friday 10 am to 5 pm and weekends noon to 5 pm, with holiday exceptions. The one-hour guided visit advertised separately is an on-request group format.",
    participation:
      "Observe a public demonstration, collection or working process.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.museum.nl/en/textielmuseum",
      sources: [
        {
          title: "Dutch museum association visitor guide",
          url: "https://www.museum.nl/en/textielmuseum",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "TextielLab for museum visitors",
          url: "https://textielmuseum.nl/en/textilelab-visitors",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "TextielMuseum and TextielLab opening hours",
          url: "https://textielmuseum.nl/openingstijden",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "TextielLab group tour",
          url: "https://textielmuseum.nl/activiteiten/rondleiding-textiellab",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "put-a-painted-motif-on-a-ceramic-piece-in-deruta",
    title: "Put a painted motif on a ceramic piece in Deruta",
    summary:
      "Deruta’s museum teaches families a step that happens before the brush touches a tile. A powdered outline transfers the pattern to the surface.",
    field: "make",
    place: "Deruta",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "deruta",
    kernel:
      "In Mastri Maiolicari, try spolvero, the method of transferring a prepared outline with powder. Paint the tile along the marks and see which details the guide lines leave for your hand to finish.",
    rootedness:
      "Deruta’s museum collects ceramics made in a town associated with maiolica. Its family and school programmes connect a museum pattern with a method of decoration.",
    shift:
      "Look for the dusted marks that will disappear when the tile is finished.",
    humanReturn:
      "A powdered outline explains how a pattern stays consistent through repeated brushwork.",
    responsibility:
      "The published format is for families. Confirm the session language and how to collect the fired tile. The museum lists shipping on request within Italy only.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Reserve the family workshop with the museum. The published format lasts about 90 minutes and includes an introduction to the collection and firing. Museum entry is separate.",
    participation:
      "Public craft visit. Check the specific participation format.",
    duration: "About 90 minutes for the family workshop.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.museoceramicadideruta.it/it/ceramica-laboratori-deruta_5.html",
      sources: [
        {
          title: "Family ceramics workshops and conditions",
          url: "https://www.museoceramicadideruta.it/it/ceramica-laboratori-deruta_5.html",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Mastri Maiolicari family workshop",
          url: "https://www.museoceramicadideruta.it/it/eventi-museo-ceramica_7/mastri-maiolicari_93.html",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Deruta municipality museum listing",
          url: "https://comune.deruta.pg.it/luoghi/2032435/museo-regionale-ceramica",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "watch-one-wooden-ring-become-a-line-of-toy-animals-in-seiffen",
    title: "Watch one wooden ring become a line of toy animals in Seiffen",
    summary:
      "In the Ore Mountains, a shape can be hidden in the cross-section of a wooden ring until a toy maker cuts it open.",
    field: "make",
    place: "Seiffen",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "seiffen",
    kernel:
      "In a scheduled Reifendrehen demonstration, find the profile as the ring comes off the lathe. Look at an individual cut section to see which parts of the animal were already inside the ring.",
    rootedness:
      "The open-air museum preserves workshops from the Ore Mountains. Ring turning is a particularly compact way of seeing how the region’s wooden toys were shaped.",
    shift:
      "Read the animal’s profile before it separates from the ring.",
    humanReturn:
      "After seeing the ring cut open, you can look at a wooden figure and work back to the shape that made it.",
    responsibility:
      "Watch from the visitor area and follow the demonstrator’s instructions. The archive photograph shows the museum’s figure workshop. The demonstration schedule can change.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Seiffen’s calendar to find Reifendrehen at the Erzgebirgisches Freilichtmuseum. The November 2026 visitor programme lists public demonstrations. Check the morning or afternoon listing for the day you plan to go.",
    participation:
      "Observe a public demonstration, collection or working process.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://seiffen.de/wp-content/uploads/2026/10/seiffen.de-veranstaltungen-im-spielzeugdorf-fuer-november-november-2026-veranstaltungen-spielzeugdorf-seiffen-4.pdf",
      sources: [
        {
          title: "Seiffen municipal programme for November 2026",
          url: "https://seiffen.de/wp-content/uploads/2026/10/seiffen.de-veranstaltungen-im-spielzeugdorf-fuer-november-november-2026-veranstaltungen-spielzeugdorf-seiffen-4.pdf",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Public events calendar, Seiffen",
          url: "https://seiffen.de/calendar/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "lausanne-olympic-park-steps-from-the-lake",
    title: "Climb through Olympic history in Lausanne’s lakeside park",
    summary:
      "On the slope above Lake Geneva, the steps that lead to the Olympic Museum carry the names and dates of past Games. Reading them changes how you make the climb.",
    field: "play",
    place: "Lausanne",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "lausanne",
    kernel:
      "Begin at the park’s lower paths. Follow the engraved dates up the stairway and notice which host cities you recognise. Pause where a sculpture makes an athletic gesture easier to read.",
    rootedness:
      "The Olympic Museum sits on the slope above Lausanne’s lakefront. Names and years engraved on the public stairs turn a climb toward the museum into a short physical timeline of the Games.",
    shift:
      "Let the stairs move you through different Games one riser at a time.",
    humanReturn:
      "The sequence of host cities becomes something you can read at the pace of your own steps.",
    responsibility:
      "This guide uses the outdoor route. Take the slope and stairs at your own pace. Temporary events can change access.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Lausanne Tourisme lists access through the Olympic Park in Ouchy. Use its visitor information for paths and opening and check the separate museum ticket if you want to continue indoors.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Allow 30 to 60 minutes for the outdoor route.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.lausanne-tourisme.ch/en/explore/olympic-park/",
      sources: [
        {
          title: "Lausanne tourism Olympic Park route, sculptures and hours",
          url: "https://www.lausanne-tourisme.ch/en/explore/olympic-park/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Olympic Museum and park visitor context",
          url: "https://www.lausanne-tourisme.ch/en/the-lausanner/articles/visit-olympic-museum/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "doha-sports-museum-activation-zone",
    title: "Try a movement challenge at Doha’s sports museum",
    summary:
      "The 3-2-1 museum gives visitors an active way to think about the movements and terrain that shape sport in Qatar.",
    field: "play",
    place: "Doha",
    country: "Qatar",
    countrySlug: "qatar",
    regionSlug: "doha",
    kernel:
      "In Gallery 7, find a challenge that suits how you want to move. Try it at a comfortable pace. Then see if a change in balance, reach or timing feels different on the second round.",
    rootedness:
      "The museum’s Activation Zone ties its interactive stations to environments and movement. It gives a public visitor a distinct entry into sport in Qatar beyond a list of results.",
    shift:
      "Try one small adjustment and give yourself a second turn.",
    humanReturn:
      "One change you can feel gives the museum’s account of sport a practical reference point.",
    responsibility:
      "Follow the signs and staff advice. Challenges, equipment and participation requirements can differ. The museum press photograph shows the entrance to the zone.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The 3-2-1 museum lists the Activation Zone as an interactive public gallery. Book museum entry through its visitor page. Check arrangements on match days at Khalifa International Stadium and ask staff which activities are available.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Allow time for the gallery and any queue for a station.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://321qosm.org.qa/en/visit/",
      sources: [
        {
          title: "Museum admission, current hours and ticket booking",
          url: "https://321qosm.org.qa/en/visit/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Museum description of Gallery 7, Activation Zone",
          url: "https://321qosm.org.qa/en/visit/galleries/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "3-2-1 museum current visitor conditions",
          url: "https://321qosm.org.qa/en/visit/visitor-guidelines/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "catch-a-first-inland-wave-outside-bristol",
    title: "Catch a first inland wave outside Bristol",
    summary:
      "A predictable wave gives a beginner a reference point. When the next one arrives, you can change one thing about where you stand or look.",
    field: "play",
    place: "Easter Compton, Bristol area",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "easter-compton",
    kernel:
      "Use the instructor’s safe water area to learn the sequence from paddling to standing. Fix one small part of the move and try it again on the next wave.",
    rootedness:
      "Easter Compton’s inland facility controls the arrival of waves. That repeatability gives a beginner experience a form different from a lesson at a coast.",
    shift:
      "Pay attention to how the wave moves before thinking about standing up.",
    humanReturn:
      "A supported beginner session makes the shape of a wave something you can learn to read.",
    responsibility:
      "The lesson involves repeated movement in water. Follow the operator’s fitness and swimming guidance.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Book the appropriate beginner lesson at Easter Compton and check arrival time, wetsuits, swim requirements and the operator’s rules for adults and children.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Check lesson time and arrival window separately.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.thewave.com/surf/surf-lessons-and-coaching/beginner-surf-lessons/",
      sources: [
        {
          title: "Beginner Surf Lessons - The Wave Bristol",
          url: "https://www.thewave.com/surf/surf-lessons-and-coaching/beginner-surf-lessons/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "The Wave Bristol: First visit essentials & check-in guide",
          url: "https://www.thewave.com/your-first-visit-to-the-wave/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "arrive-in-lyons-former-docklands-by-river-shuttle",
    title: "Arrive in Lyon’s former docklands by river shuttle",
    summary:
      "The Navigône makes the city’s old and new waterfronts part of an ordinary journey along the Saône.",
    field: "play",
    place: "Lyon",
    country: "France",
    countrySlug: "france",
    regionSlug: "lyon",
    kernel:
      "Pick a departure that actually calls at Confluence. Watch where the quays change from older frontages to buildings at the reused docks, then walk from the landing to see the change from street level.",
    rootedness:
      "Lyon’s Saône connects older neighbourhoods and the redeveloped Confluence docks. The municipal shuttle makes the two settings part of the same ordinary crossing.",
    shift:
      "Follow the city’s working river from one public stop to the next.",
    humanReturn:
      "A short shuttle gives you a reason to notice which parts of Lyon still turn toward the river.",
    responsibility:
      "The local shuttle and private dining or sightseeing cruises use different timetables and tickets.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the public shuttle timetable. Confluence service is limited and changes by day and season. Check the stop before setting out.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Use the timetable for the chosen boarding location.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://en.visiterlyon.com/stay/access-come-and-move-in-lyon/transport-and-transfers/river-shuttle-navigone",
      sources: [
        {
          title: "River shuttle Navigône - Lyon Tourist Office",
          url: "https://en.visiterlyon.com/stay/access-come-and-move-in-lyon/transport-and-transfers/river-shuttle-navigone",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "TCL operator map and Navigône shuttles",
          url: "https://www.tcl.fr/en/journey-planner/navigone",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "sydney-harbour-bridge-south-east-pylon",
    title: "Climb the stairs inside Sydney Harbour Bridge’s south-east pylon",
    summary:
      "At BridgeMuseum the stairs take you through the bridge’s engineering before the lookout puts the arch and harbour on the same sightline.",
    field: "play",
    place: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    kernel:
      "Pause at a museum level to see how the bridge’s parts fit together. At the lookout, follow the line of the steel from the pylon toward the centre of the span.",
    rootedness:
      "Sydney’s harbour bridge is recognisable from across the water. The publicly accessible former pylon lookout puts the view and the labour of crossing inside the structure of the bridge itself.",
    shift:
      "Look across the span from the place that was built to frame it.",
    humanReturn:
      "A look from the pylon makes the structure of the famous span easier to understand at street level.",
    responsibility:
      "The route has multiple stair flights. Read the museum’s accessibility information. The photograph predates the revamped museum.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The BridgeMuseum Day Session includes the public exhibit route and lookout inside the south-east pylon. Use its ticket page and check the current opening window.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Allow around an hour for the steps, exhibits and lookout.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.bridgemuseum.com.au/experiences/day-session",
      sources: [
        {
          title: "BridgeMuseum Day Session ticket and visitor description",
          url: "https://www.bridgemuseum.com.au/experiences/day-session",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Sydney bridge museum step and access information",
          url: "https://www.bridgemuseum.com.au/plan-your-visit/accessibility",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "paddle-bilbaos-river-through-the-former-industrial-city",
    title: "Paddle Bilbao’s river through the former industrial city",
    summary:
      "At water height the bridges and the old working edges of the Nervión fall into a different order.",
    field: "play",
    place: "Bilbao",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "bilbao",
    kernel:
      "Take a guided kayak trip from the working side of the waterfront. From the water, look at the clearance under the bridges and the steps and edges where the city now meets the estuary.",
    rootedness:
      "Bilbao grew along an estuary used for working transport and industry. A public river route makes the spacing of those older and newer waterfronts easier to see.",
    shift:
      "Read the height of a quay from just above the water.",
    humanReturn:
      "The estuary’s bridges and quays make a different sequence from the height of a kayak.",
    responsibility:
      "The published guided trip starts at age seven and is described as inaccessible by wheelchair. Ask the provider about water conditions, boarding and any swimming requirements before booking.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The city lists providers at Muelle Ramón de la Sota. The published guided kayak trip from No. 1 takes two hours and includes a guide and a life jacket. The booking listing specifies Spanish and says some departures may be bilingual. Check the language when choosing a date.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Two hours for the listed guided session.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://bilbaogazte.bilbao.eus/es/servicio/actividades-en-la-ria/",
      sources: [
        {
          title: "Bilbao municipal watersports directory",
          url: "https://bilbaogazte.bilbao.eus/es/servicio/actividades-en-la-ria/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Bilbobentura activity and contact listing",
          url: "https://aktiba.eus/empresa/bilbobentura/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Guided kayak ticket information",
          url: "https://ayuda.civitatis.com/es/bilbao/tour-nocturno-kayak-bilbao/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "watch-a-rotterdam-bus-become-a-boat-on-the-maas",
    title: "Watch a Rotterdam bus become a boat on the Maas",
    summary:
      "The point of the trip is a small change in perspective. Roads, buildings and quays give way to a view from the river itself.",
    field: "play",
    place: "Rotterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "rotterdam",
    kernel:
      "On the amphibious tour, watch how the route approaches the water and where the city slips below the windows. Look for one landmark that becomes more legible after entry into the river.",
    rootedness:
      "Rotterdam’s streets and river both belong to its life as a port. The vehicle’s entry into the Maas makes the change of viewpoint literal.",
    shift:
      "Keep one landmark in view as the vehicle crosses from road to water.",
    humanReturn:
      "The moment the vehicle changes surfaces gives you two ways to read Rotterdam’s waterfront.",
    responsibility:
      "This is a seated ride. Confirm mobility, ages and any weather changes directly with the operator.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Book the public Splashtours departure and check its meeting point and boarding rules. The departure and river route can change.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.splashtours.nl/en/arrangement/splashtours/",
      sources: [
        {
          title: "Splashtours - The most splashing way to see Rotterdam!",
          url: "https://www.splashtours.nl/en/arrangement/splashtours/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Visit the Port of Rotterdam | Tours & Cruises",
          url: "https://www.rotterdam.info/en/visit/guide/rotterdam-port-visit",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "antwerp-sint-annatunnel-wooden-escalators",
    title: "Cross under the Scheldt on Antwerp’s wooden escalator route",
    summary:
      "Antwerp’s pedestrian tunnel makes crossing the Scheldt a change in rhythm. Descend from the old town, walk below the river and reappear on the other bank.",
    field: "play",
    place: "Antwerp",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "antwerp",
    kernel:
      "From Sint-Jansvliet, go down to the pedestrian tunnel. Notice the tone of the wooden escalators if they are running. Walk through to Linkeroever and look back across the water to see where you started.",
    rootedness:
      "The Sint-Annatunnel links Antwerp’s older riverfront to Linkeroever. The descent makes the Scheldt’s role in separating and linking the two sides tangible.",
    shift:
      "Use the descent to set a different pace for the river crossing.",
    humanReturn:
      "A crossing from bank to bank makes the relationship between the old city and Linkeroever easier to see.",
    responsibility:
      "Share the tunnel with other users. Check whether the step-free route works on your date. Escalator operation can change.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Antwerp and De Lijn identify the Sint-Annatunnel as a public pedestrian and cycle connection. Check current reports for closures, lift access and escalator works.",
    participation: "A self-guided pedestrian crossing beneath the river.",
    duration:
      "Allow 30 to 45 minutes for the crossings and a short stop on Linkeroever.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.slimnaarantwerpen.be/en/bike/pedestrian-and-bicycle-tunnel-under-the-river-scheldt",
      sources: [
        {
          title: "Antwerp’s pedestrian and cycle tunnel information",
          url: "https://www.slimnaarantwerpen.be/en/bike/pedestrian-and-bicycle-tunnel-under-the-river-scheldt",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "De Lijn tunnel status and city crossing information",
          url: "https://www.delijn.be/en/content/tunnelrenovatie-metro-antwerpen/voetgangerstunnel/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Flemish roads authority renovation notices",
          url: "https://wegenenverkeer.be/werken/sint-annatunnel/onderhoud-renovatiewerken",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "take-fukuokas-exterior-tube-slide-beside-the-baseball-dome",
    title: "Take Fukuoka’s exterior tube slide beside the baseball dome",
    summary:
      "On the side of the E・ZO tower, movement gives you a different angle on a skyline associated with the ballpark.",
    field: "play",
    place: "Fukuoka",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "fukuoka",
    kernel:
      "Look along the outside of the E・ZO building from the plaza. At the rooftop start, the slide gives a short view towards Momochihama before the route curves into the darker section.",
    rootedness:
      "The slide stands at a Fukuoka entertainment complex beside the baseball dome. Its route is linked to the building rather than to a generic ride in a park.",
    shift:
      "Look from the plaza first so the brief ride has a shape you can remember.",
    humanReturn:
      "The ride gives you a brief and unusual view of how the roof, ballpark and coast line up.",
    responsibility:
      "Read the full ride conditions before buying, including health and clothing restrictions. The operator can suspend rides and staff determine eligibility at entry.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Japanese Sube-ZO page to check the day’s operating status, then use the official ticket page. The operator lists ages 10 to 64, height of at least 130 cm and weight of at least 35 kg including clothing.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://e-zofukuoka.com/zekkei-brothers/subezo/index.html",
      sources: [
        {
          title: "Sube-ZO operating notices and rider conditions",
          url: "https://e-zofukuoka.com/zekkei-brothers/subezo/index.html",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "BOSS E・ZO official ticket instructions",
          url: "https://e-zofukuoka.com/ticket/how/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Fukuoka city visitor directory entry",
          url: "https://gofukuoka.jp/en/spots/detail/194696",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "change-light-and-sound-in-medellins-sala-abierta",
    title: "Change light and sound in Medellín’s Sala Abierta",
    summary:
      "The open gallery at Parque Explora invites visitors to experiment with light, water and sound. Pick one station and change something you can actually observe.",
    field: "play",
    place: "Medellín",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "medellin",
    kernel:
      "Use one public station that demonstrates waves, light or sound. Change one variable and notice which part of the result responds. Then try the next station to see where the same idea appears in another form.",
    rootedness:
      "Parque Explora stands in Medellín’s northern public science and education precinct. Sala Abierta gives visitors a place to work with their hands inside that public setting.",
    shift:
      "Start with what the exhibit lets you try yourself.",
    humanReturn:
      "A public activity offers a physical route into an idea you might otherwise read as an exhibit label.",
    responsibility:
      "Use the operator’s current Sala Abierta gallery name. Stations can be temporarily unavailable. The photo documents the complex from outside.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Parque Explora’s published visitor hours and the Sala Abierta exhibition page. Check the current opening and any conditions on individual stations.",
    participation: "Public activity with venue-specific conditions.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.parqueexplora.org/visitanos",
      sources: [
        {
          title:
            "Planea tu visita al Parque Explora | Horarios, tarifas y descuentos",
          url: "https://www.parqueexplora.org/visitanos",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Parque Explora, Sala Abierta",
          url: "https://www.parqueexplora.org/visitanos/sala-abierta",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "compare-orchids-from-ecuadors-mountain-forests-under-glass",
    title: "Compare orchids from Ecuador’s mountain forests under glass",
    summary:
      "In Quito’s botanical garden, small differences in two orchid flowers give you a practical way to read the range of conditions plants grow in.",
    field: "nature",
    place: "Quito",
    country: "Ecuador",
    countrySlug: "ecuador",
    regionSlug: "quito",
    kernel:
      "Visit an open orchid house and choose two plants with readable labels. Look at how the flowers differ in arrangement, then read where each normally grows rather than guessing from its appearance.",
    rootedness:
      "Quito’s botanical garden puts plants from different Ecuadorian environments close enough to compare. The orchid collection is a focused way into that range.",
    shift:
      "Compare how leaves and shade change as you pass between habitats.",
    humanReturn:
      "Taking one habitat at a time makes Quito’s relationship to varied climates easier to see.",
    responsibility:
      "Individual plants flower seasonally. Treat the photographed species as an example, not a promised sighting.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Jardín Botánico’s official ecosystem and visitor pages for the orchid-house layout and admission. Check the current exhibition and greenhouse opening.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl: "https://jardinbotanicoquito.com/es/ecosistemas-y-jardines/",
      sources: [
        {
          title: "Ecosistemas y Jardines - Jardin Botánico de Quito",
          url: "https://jardinbotanicoquito.com/es/ecosistemas-y-jardines/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Visit us - Jardin Botánico de Quito",
          url: "https://jardinbotanicoquito.com/en/visit-us/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "watch-a-wetland-do-part-of-the-work-of-an-urban-water-system",
    title: "Watch a wetland do part of the work of an urban water system",
    summary:
      "Intaka Island gives a stretch of Cape Town water a job in the landscape. On foot, follow the boundary where channels, reeds and open patches work together.",
    field: "nature",
    place: "Cape Town",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    kernel:
      "Take the paths around the wetland and identify one place where water enters or leaves a reed bed. Watch from a hide to see which birds use that part of the habitat.",
    rootedness:
      "Intaka Island is a wetland within an urban development in Cape Town. Its paths and hides expose the relation between channels, water management and habitat.",
    shift:
      "Stay at one lookout long enough to watch the water change.",
    humanReturn:
      "A hide gives you a way to watch small changes in a wetland while the city carries on around it.",
    responsibility:
      "Stay on paths and keep distance from wildlife. Water levels, boat operation and sightings vary.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Intaka lists public island entry separately from boat trips. Check the entry gate and current opening. A boat trip requires its own reservation.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl: "https://intaka.co.za/visit-us/",
      sources: [
        {
          title: "Visit Us - Intaka Island",
          url: "https://intaka.co.za/visit-us/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title:
            "Century City Intaka Island access and wetland visitor information",
          url: "https://centurycity.co.za/intaka-island/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "walk-into-kaohsiungs-restored-chouchai-wetland",
    title: "Walk into Kaohsiung’s restored Chouchai wetland",
    summary:
      "Inside the city, the protected wetland offers an opportunity to see where restoration takes the shape of pools, vegetation and places left undisturbed.",
    field: "nature",
    place: "Kaohsiung",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "kaohsiung",
    kernel:
      "Start in the public visitor area. Register to enter the environmental education area, then watch the waterline from the marked route. Notice where cover reaches close to the surface.",
    rootedness:
      "Chouchai is a managed wetland inside Kaohsiung. Some sections have limited entry, which makes the public boundaries part of understanding how the habitat is maintained.",
    shift:
      "Begin at the public edge and let the access limits tell you something about the site.",
    humanReturn:
      "The public boundaries explain something about how the wetland is cared for.",
    responsibility:
      "The core conservation zone is closed to visitors. Stay on the visitor route and check storm closures. The city asks visitors to leave pets and food outside.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The city lists the visitor services and environmental education areas as open Tuesday through Sunday from 8 am to 5 pm. Register for entry to the education area. Use the city’s reservation process for a group visit.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://pwbweb.kcg.gov.tw/chouchaiwetlandpark/Home/BookingFAQ",
      sources: [
        {
          title: "Kaohsiung city wetland access FAQ",
          url: "https://pwbweb.kcg.gov.tw/chouchaiwetlandpark/Home/BookingFAQ",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Kaohsiung tourism wetland listing",
          url: "https://khh.travel/en/attractions/detail/369/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "listen-for-wetland-birds-at-colombos-diyasaru-park",
    title: "Listen for wetland birds at Colombo’s Diyasaru Park",
    summary:
      "On Colombo’s urban edge, a restored wetland brings the sounds of the city and of waterbirds close enough to distinguish from each other.",
    field: "nature",
    place: "Thalawathugoda, Colombo area",
    country: "Sri Lanka",
    countrySlug: "sri-lanka",
    regionSlug: "thalawathugoda",
    kernel:
      "Walk to an open view of one of the ponds. Stop long enough to notice which calls keep repeating and whether they come from open water or cover. Use the published park map for the next stop.",
    rootedness:
      "The restored wetland near Sri Jayawardenepura Kotte sits among roads and civic buildings. Walking between the ponds makes that overlap with the city audible.",
    shift:
      "Use the silence at the hide to separate different sounds.",
    humanReturn:
      "The marked boardwalk gives you a chance to notice where water, plants and birds meet in a working city.",
    responsibility:
      "Visit on the marked route and leave room for quiet observation at the hide. Confirm conditions after heavy rain. Boat outings and guided activities have separate schedules.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Wetland Link International identifies a public visitor centre with boardwalks, a bird hide and a viewing tower. Begin at the entrance on Japan Sri Lanka Friendship Road and use the visit information on the centre listing to confirm any current admission hours or guided activities.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://wli.wwt.org.uk/?member=diyasaru-park-thalawathugoda-sri-lanka",
      sources: [
        {
          title: "Wetland Link International Diyasaru visitor centre entry",
          url: "https://wli.wwt.org.uk/?member=diyasaru-park-thalawathugoda-sri-lanka",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Diyasaru’s 2026 wetland centre profile at WLI",
          url: "https://wli.wwt.org.uk/2026/01/diyasaru-park/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "look-for-endemic-pitcher-plants-on-mahes-granite-ridge",
    title: "Look for endemic pitcher plants on Mahé’s granite ridge",
    summary:
      "The route up Copolia passes from shaded forest to an exposed ridge. The change makes the plants on the upper rock easier to see in context.",
    field: "nature",
    place: "Mahé",
    country: "Seychelles",
    countrySlug: "seychelles",
    regionSlug: "mahe",
    kernel:
      "Follow the marked climb and look for the native pitcher plant around the upper habitat. Give its location, soil and exposure the same attention as the shape of the pitcher.",
    rootedness:
      "Copolia is an upland granite route on Mahé. The shape of the ridge and its vegetation are part of what makes this a specific Seychelles walk.",
    shift:
      "Look close enough at the plants to see the shape that gives them their name.",
    humanReturn:
      "Finding a pitcher plant on the route gives the mountain’s ecology a specific form.",
    responsibility:
      "Stay on the marked route, especially in wet conditions. Leave plants undisturbed and do not promise sightings.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Seychelles Parks and Gardens Authority trail guide and ticket information. Check weather and uphill walking requirements before setting off.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.spga.gov.sc/sites/default/files/2023-05/copolia_nature_trail_guide.pdf",
      sources: [
        {
          title: "Source for Copolia Trail",
          url: "https://www.spga.gov.sc/sites/default/files/2023-05/copolia_nature_trail_guide.pdf",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Morne Seychellois | Seychelles Parks and Gardens Authority",
          url: "https://www.spga.gov.sc/parks/morne-seychellois",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-helsinkis-reed-bed-boardwalk-to-a-birdwatching-tower",
    title: "Follow Helsinki’s reed-bed boardwalk to a birdwatching tower",
    summary:
      "A raised path at Lammassaari keeps your line of sight level with the reeds before the tower opens the bay again.",
    field: "nature",
    place: "Helsinki",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    kernel:
      "Walk the signed boardwalk and pause where it widens. Find one bird by sound or motion before taking the steps to the tower, or stay at the accessible viewing point.",
    rootedness:
      "Lammassaari’s public boardwalk is close to Helsinki’s urban neighbourhoods. It passes through reeds that shield one part of the bay from the next.",
    shift:
      "Leave time to stop where the boardwalk begins to cross open water.",
    humanReturn:
      "The boardwalk changes your view of how close water and city can be without leaving Helsinki.",
    responsibility:
      "Watch from the public path. Respect closures and other restrictions around nesting birds.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the City of Helsinki’s route and access notices for Pornaistenniemi and Lammassaari. Check which viewpoints and paths are open and step-free.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/outdoor-recreation-areas/pornaistenniemi-and-lammassaari",
      sources: [
        {
          title: "Pornaistenniemi and Lammassaari | City of Helsinki",
          url: "https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/outdoor-recreation-areas/pornaistenniemi-and-lammassaari",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Vanhan­kaupungin­lahti - Uudenmaan virkistysalueyhdistys",
          url: "https://uuvi.fi/en/area/vanhankaupunginlahti/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "move-from-st-louis-into-a-tropical-forest-under-one-dome",
    title: "Move from St Louis into a tropical forest under one dome",
    summary:
      "The Climatron’s geometry provides space for a forest under glass. The bridge makes it possible to look into the canopy as well as up at it.",
    field: "nature",
    place: "St Louis",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "st-louis",
    kernel:
      "Follow the public conservatory trail to the bridge and notice where plants change with the available light. Look back through the full span of the dome to see how the roof makes that route possible.",
    rootedness:
      "The St Louis dome was designed to hold a conservatory without interior columns. Its shape gives the planting and visitor path their unusual space.",
    shift:
      "Try looking down into the canopy from the bridge.",
    humanReturn:
      "From the bridge, the shape of the dome and the layers of planting become easier to see together.",
    responsibility:
      "The garden’s daily ticket hours apply to its entrance. The Climatron route and bridge may have separate temporary closures.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Missouri Botanical Garden admission for the public visitor route at 4344 Shaw Boulevard. Check the hours for your date and any conservatory closures before setting out.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.missouribotanicalgarden.org/plan-your-visit/hours-admission",
      sources: [
        {
          title: "Missouri Botanical Garden hours and admission",
          url: "https://www.missouribotanicalgarden.org/plan-your-visit/hours-admission",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Official Climatron conservatory description",
          url: "https://www.missouribotanicalgarden.org/gardens-gardening/our-garden/gardens-conservatories/conservatories/climatron",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "read-the-change-from-coastal-fynbos-to-mountain-shade-above-bettys-bay",
    title:
      "Read the change from coastal fynbos to mountain shade above Betty’s Bay",
    summary:
      "The Harold Porter garden brings a coastal landscape and mountain vegetation into the same walk.",
    field: "nature",
    place: "Betty’s Bay",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "bettys-bay",
    kernel:
      "Choose an approved lower or gorge route and look for changes in leaf size, cover and moisture as the path rises or narrows. Use labels and maps for species identification.",
    rootedness:
      "The garden in Betty’s Bay lies between coastal terrain and the Kogelberg mountains. Its public routes give a way to compare more than one kind of Cape vegetation.",
    shift:
      "Pay attention to what changes between the garden and the mountain shade.",
    humanReturn:
      "A short walk can put mountain shade, stream edge and garden planting in the same afternoon.",
    responsibility:
      "Floods and repairs can close upper paths. Stay on the open signed route and avoid collecting plants.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "SANBI publishes hours and guided options. Check current trail notices before naming a gorge route. The garden entrance is in Betty’s Bay rather than Cape Town.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.sanbi.org/gardens/harold-porter/visitor-information/information/",
      sources: [
        {
          title: "Information - SANBI",
          url: "https://www.sanbi.org/gardens/harold-porter/visitor-information/information/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Harold Porter - SANBI",
          url: "https://www.sanbi.org/gardens/harold-porter/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "watch-raptors-pass-a-working-migration-count-at-cape-may",
    title: "Watch raptors pass a working migration count at Cape May",
    summary:
      "At the Cape May Hawkwatch, a platform turns a familiar idea of migration into something that can be seen bird by bird.",
    field: "nature",
    place: "Cape May",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "cape-may",
    kernel:
      "Start at the observation platform and watch the sky beyond the tree line. Look for the difference between a bird circling for lift and one continuing south. Let the observers finish a count before asking about an identification.",
    rootedness:
      "Cape May concentrates part of the seasonal migration along the Atlantic coast. The hawkwatch platform and public count make that pattern observable as it happens.",
    shift:
      "Watch where the next bird takes a different route out of the same sky.",
    humanReturn:
      "A working count makes the direction and timing of autumn migration easier to see.",
    responsibility:
      "The seasonal count has a fixed published window. Wind, visibility and migration affect what you may see on a given day.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "New Jersey Audubon lists the Cape May Hawkwatch season from 1 September to 30 November and the site from sunrise to sunset. Check current staffing and access if timing the visit around the count.",
    participation: "Public walk or observation.",
    duration: "Start with 30–60 minutes at the platform.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2026-11-30",
      accessUrl: "https://njaudubon.org/watch/cape-may-hawkwatch/",
      sources: [
        {
          title: "New Jersey Audubon Cape May Hawkwatch",
          url: "https://njaudubon.org/watch/cape-may-hawkwatch/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Cape May Point State Park visitor information",
          url: "https://dep.nj.gov/parksandforests/state-park/cape-may-point-state-park/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "look-for-wetland-birds-beside-buenos-airess-lago-lugano",
    title: "Look for wetland birds beside Buenos Aires’s Lago Lugano",
    summary:
      "An urban reserve near Villa Soldati has become a way to encounter forms of city life found at the edge of the water rather than in the street grid.",
    field: "nature",
    place: "Buenos Aires",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    kernel:
      "Use the reserve’s signposted bird lookouts to compare the reeds with the open water. Wait for movement at the point where the two meet, then see if a bird crosses from one habitat to the other.",
    rootedness:
      "Lago Lugano is a restored reserve near Villa Soldati. It gives the city a second way to read urban habitat away from the much better-known Costanera Sur.",
    shift:
      "Give open water and reeds a few minutes each before moving on.",
    humanReturn:
      "Comparing open water and the reeds gives you a good reason to wait in one place.",
    responsibility:
      "The reserve can close in bad weather. Use marked visitor routes and keep your distance from birds and other wildlife.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The dedicated city page lists free walk-in entry at Avenida Escalada 4950 and at Avenida 27 de Febrero by Puente Olímpico. The city’s two pages show different hours. To stay within both published schedules, visit Tuesday to Friday between 10 am and 5 pm or on weekends between 9 am and 6 pm, and check the latest notice first.",
    participation: "Public walk or observation.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_observation",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/reservasecologicas/reserva-ecologica-lago-lugano/la-reserva",
      sources: [
        {
          title: "Lago Lugano reserve access and visitor lookouts",
          url: "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/reservasecologicas/reserva-ecologica-lago-lugano/la-reserva",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Buenos Aires notices and opening hours for green spaces",
          url: "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/dias-y-horarios-de-visitas-los-espacios-verdes-de-la-subsecretaria-de",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "move-between-thermal-pools-beneath-bad-wildbads-historic-halls",
    title: "Move between thermal pools beneath Bad Wildbad’s historic halls",
    summary:
      "In a Black Forest spa town, the Palais Thermal makes the room as much a part of bathing as the water.",
    field: "restore",
    place: "Bad Wildbad",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "bad-wildbad",
    kernel:
      "Begin in an open historic hall and give yourself time to look up. When you move to a second pool, notice how the light, sound and distance from other bathers changes.",
    rootedness:
      "The historic bathing halls sit in Bad Wildbad’s spa-town centre. The rooms preserve part of the local architecture of bathing as an everyday activity.",
    shift:
      "Let the route between rooms set the speed of your visit.",
    humanReturn:
      "The sequence of spaces shows how a bath can make time feel different.",
    responsibility:
      "Check clothing rules and the exact rooms in use. Avoid photographs of bathers and health claims.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Consult the municipal visitor page and the bath operator. The venue lists a minimum age of 12 and identifies textile bathing arrangements by day and area.",
    participation: "Public pool, bath or park admission.",
    duration: "Choose the duration on the bath ticket.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.bad-wildbad.de/en/palais-thermal/",
      sources: [
        {
          title: "Stadt Bad Wildbad: Bad Wildbad: Palais Thermal",
          url: "https://www.bad-wildbad.de/en/palais-thermal/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Historic bathing area at the Palais Thermal | Mokni’s",
          url: "https://www.moknis.com/en/historical-area-palais-thermal/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-the-water-of-the-tamina-gorge-into-bad-ragaz",
    title: "Follow the water of the Tamina gorge into Bad Ragaz",
    summary:
      "Thermal water arrives in Bad Ragaz from a place the bath visitor can understand even while staying in the town.",
    field: "restore",
    place: "Bad Ragaz",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "bad-ragaz",
    kernel:
      "Start with the spa’s account of where the water comes from. On the public thermal ticket, compare one indoor bath and one outdoor view. Plan any gorge walk as a separate visit.",
    rootedness:
      "Water from the Tamina gorge is part of Bad Ragaz’s bathing history. The current facility gives visitors public access to that geographical connection.",
    shift:
      "Pause between the warm water and the open air.",
    humanReturn:
      "Paying attention to warm water and open air gives a quiet visit a shape of its own.",
    responsibility:
      "This guide describes the experience of bathing. It gives no individual health advice.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use Tamina Therme’s opening and tariffs page for the public thermal-bath ticket. Last admission is an hour before closure. Confirm children’s admission and treat sauna access as separate.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.taminatherme.ch/en/oeffnungszeiten-tarife",
      sources: [
        {
          title: "Opening hours & tariffs I Tamina Therme",
          url: "https://www.taminatherme.ch/en/oeffnungszeiten-tarife",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Swiss tourism official Tamina Therme entry",
          url: "https://www.myswitzerland.com/en-ch/experiences/tamina-therme-bad-ragaz-thermal-baths/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "spend-a-slow-morning-in-budapests-dandar-baths",
    title: "Spend a slow morning in Budapest’s Dandár Baths",
    summary:
      "Dandár is a neighbourhood bath in Ferencváros, with smaller pools and a different pace from Budapest’s sprawling thermal complexes.",
    field: "restore",
    place: "Budapest",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    kernel:
      "Begin in one of the indoor thermal pools. If your ticket includes the outdoor area, give yourself enough time to notice how it feels to move from the warmth of the pool into the courtyard air.",
    rootedness:
      "Dandár is in Ferencváros, away from several of Budapest’s best-known spa buildings. Its scale is part of the experience of using it as a neighbourhood facility.",
    shift:
      "Give the change of air more attention than the number of pools.",
    humanReturn:
      "The neighbourhood scale shows a side of Budapest’s baths between everyday routine and a special outing.",
    responsibility:
      "Follow the bath’s clothing, age and privacy rules. The photograph is from 1975 and its pool layout may differ from the current one.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the Dandár Street entrance in Ferencváros. Check separate indoor and outdoor hours and buy the admission that covers the areas you plan to use.",
    participation: "Public pool, bath or park admission.",
    duration: "Allow 60–90 minutes for a short bath visit.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.dandarfurdo.hu/en/opening-hours",
      sources: [
        {
          title: "Dandár current opening hours",
          url: "https://www.dandarfurdo.hu/en/opening-hours",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Dandár pool and sauna facilities",
          url: "https://www.dandarfurdo.hu/en/pools",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Dandár notices",
          url: "https://www.dandarfurdo.hu/en",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "make-an-evening-walk-between-kinosakis-public-baths",
    title: "Make an evening walk between Kinosaki’s public baths",
    summary:
      "Bathing can give the evening a route through the lanes and along the canal. Each public house makes a separate stop.",
    field: "restore",
    place: "Kinosaki, Toyooka",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kinosaki",
    kernel:
      "Choose two public bathhouses whose hours overlap. Walk slowly between them and give yourself time to cool down. Let the evening finish when you have had enough rather than trying to collect every visit.",
    rootedness:
      "Kinosaki’s bathhouses are scattered through the town. The public route between them is as connected to the place as the rooms themselves.",
    shift:
      "Let the town link the bathing stops at walking pace.",
    humanReturn:
      "A short walk between baths makes the whole town part of the route.",
    responsibility:
      "Baths close on different days. Confirm tattoo and washing etiquette, and respect the privacy rules in bathing areas.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Kinosaki visitor office publishes the opening days and hours for the individual bathhouses. Check the pass and admission rules for the two you select.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://visitkinosaki.com/plan/visitor-info/faq/",
      sources: [
        {
          title: "FAQ - Visit Kinosaki",
          url: "https://visitkinosaki.com/plan/visitor-info/faq/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Source for Kinosaki Onsen",
          url: "https://kinosaki-spa.gr.jp/core/wp-content/uploads/2025/06/kinosaki_pamph_en_2025.pdf",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "try-a-herbal-foot-bath-in-seouls-medicine-market-district",
    title: "Try a herbal foot bath in Seoul’s medicine-market district",
    summary:
      "A seated foot bath gives you time to notice the plants discussed in the neighbourhood’s market and museum.",
    field: "restore",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    kernel:
      "When a public foot-bath session is running, ask what is in the water that day. Take time afterwards to identify one of those plants in the museum or at a public market stall.",
    rootedness:
      "The centre sits beside Seoul’s Yangnyeongsi herbal market. The public programme links one simple use of herbs with a district organised around their trade.",
    shift:
      "Choose one practice you want to understand before deciding whether to try it.",
    humanReturn:
      "The centre gives you enough context to ask better questions about the practice you encounter.",
    responsibility:
      "Keep the description experiential. The use of herbs is not a claim about treating a condition.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the centre’s working K-Medi visitor pages. It lists on-site, first-come registration on weekends. Check the day’s session and age rules in advance.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=187821",
      sources: [
        {
          title: "Seoul K-Medi Center (서울한방진흥센터)-  VISITKOREA",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=187821",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Seoul K-Medi Center",
          url: "https://kmedi.ddm.go.kr/en/experience/experience1.php",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Seoul K-Medi Center",
          url: "https://kmedi.ddm.go.kr/en/experience/experience4.php",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "swim-beside-the-atlantic-at-sea-point-pavilion",
    title: "Swim beside the Atlantic at Sea Point Pavilion",
    summary:
      "The municipal baths put a lap pool next to the rougher rhythm of the ocean, with a promenade on either side of the visit.",
    field: "restore",
    place: "Cape Town",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    kernel:
      "Choose the municipal basin that suits your swim. When you finish, take a few minutes on the promenade to compare the controlled water of the pool with the open bay.",
    rootedness:
      "The Sea Point Pavilion pools face the ocean along Cape Town’s Atlantic promenade. The immediate contrast between the pool and surf is part of their setting.",
    shift:
      "Turn your attention to the water beyond the pool edge.",
    humanReturn:
      "The view makes it easy to see where the public pool ends and the Atlantic begins.",
    responsibility:
      "This guide covers the supervised pool facility. Ocean swimming is a separate decision with its own conditions.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The City of Cape Town publishes pool opening, fees and facilities. Confirm the operating basin and opening notice before going to the Sea Point Pavilion.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.capetown.gov.za/explore-and-enjoy/see-all-city-facilities/our-recreational-facilities/swimming-pools/sea-point-swimming-pool/",
      sources: [
        {
          title: "Sea Point Swimming Pool | City of Cape Town",
          url: "https://www.capetown.gov.za/explore-and-enjoy/see-all-city-facilities/our-recreational-facilities/swimming-pools/sea-point-swimming-pool/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Cape Town municipal pool directory",
          url: "https://www.capetown.gov.za/explore-and-enjoy/see-all-city-facilities/our-recreational-facilities/swimming-pools/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "swim-in-heated-salt-water-above-dunedins-st-clair-beach",
    title: "Swim in heated salt water above Dunedin’s St Clair beach",
    summary:
      "At Dunedin’s seaward edge, a heated outdoor pool makes it possible to swim with the surf in view.",
    field: "restore",
    place: "Dunedin",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "dunedin",
    kernel:
      "Take the steps down to the pool above the rocks. Swim a few lengths and stop at the side where you can see the ocean. The pool’s six lanes give you room for a straightforward swim while the waves carry on beside it.",
    rootedness:
      "St Clair’s heated saltwater pool stands on the rock beside a surf beach. Dunedin’s seasonal opening gives that coastal facility its own rhythm.",
    shift:
      "Swim a few quiet lengths before stopping to look toward the Pacific.",
    humanReturn:
      "Swimming with the open ocean beside you shows why this small public pool has lasted.",
    responsibility:
      "The pool is heated and uses salt and chlorinated water. Observe lifeguard instructions and check weather and closure notices. An ocean swim is a separate activity.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Dunedin City Council lists the 2026–27 season from 1 October to 31 March. Published pool hours are 6 am to 7 pm weekdays and 7 am to 7 pm weekends. The café has separate hours. Access to the pool is by stairs.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://www.dunedin.govt.nz/community-facilities/swimming-pools/st-clair-pool",
      sources: [
        {
          title: "Dunedin City Council pool season, hours and access",
          url: "https://www.dunedin.govt.nz/community-facilities/swimming-pools/st-clair-pool",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Dunedin visitor authority pool listing",
          url: "https://www.dunedinnz.com/visit/see-and-do/tours/activities/st-clair-hot-salt-water-pool-_1",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "walk-between-the-mineral-water-pavilions-in-sao-lourenco",
    title: "Walk between the mineral-water pavilions in São Lourenço",
    summary:
      "The Parque das Águas gives a spa town a walking route organised by its springs.",
    field: "restore",
    place: "São Lourenço",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "sao-lourenco",
    kernel:
      "Start from the park map and choose a pair of springs along an open path. Compare the pavilions and the way visitors approach each source. If public drinking is allowed at both, compare the water without attaching a treatment claim to it.",
    rootedness:
      "São Lourenço grew around springs and bathing. The park keeps the source buildings in a publicly walkable sequence.",
    shift:
      "Select a spring and let its taste guide you to the next one.",
    humanReturn:
      "Trying the springs makes a feature of the town’s landscape part of an ordinary day.",
    responsibility:
      "This is a public park walk. Confirm any water access and refrain from presenting health benefits.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Check park admission and any restricted sources under the current operator arrangements. A bathing treatment needs a separate booking where offered.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl:
        "https://circuitodasaguasmg.com.br/parque-das-aguas-sao-lourenco/",
      sources: [
        {
          title:
            "Experiencia Parque das Águas – São Lourenço – Circuito das Aguas",
          url: "https://circuitodasaguasmg.com.br/parque-das-aguas-sao-lourenco/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Minas Gerais heritage register for Parque das Águas",
          url: "https://www.mg.gov.br/iepha/bem/bem-tombado/sao-lourenco-parque-das-aguas-de-sao-lourenco",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "book-a-short-sulphur-bath-under-tbilisis-brick-domes",
    title: "Book a short sulphur bath under Tbilisi’s brick domes",
    summary:
      "In Abanotubani, a private room makes one part of the city’s bathing tradition easy to experience at your own pace.",
    field: "restore",
    place: "Tbilisi",
    country: "Georgia",
    countrySlug: "georgia",
    regionSlug: "tbilisi",
    kernel:
      "Pick a room for your group and check what the booking includes. Leave time to look at the tile-fronted bathhouse from outside and see how it sits among the brick domes and lanes.",
    rootedness:
      "Abanotubani’s bath buildings make thermal water visible in the built fabric of old Tbilisi. The private-room format gives visitors a public way to take part in that setting.",
    shift:
      "Leave a few minutes to see how the bathhouse sits in the old neighbourhood.",
    humanReturn:
      "The bath rooms and the streets around them make thermal water part of the city you can walk through.",
    responsibility:
      "Check the operator’s rules for your group before reserving. Confirm whether a scrub is offered separately. The photograph shows the bathhouse exterior.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Choose a room and check your date on Chreli Abano’s own site. Capacity and facilities vary by room. Use the live listing for the length of the booking, the room and any services you want to add.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://chreliabano.ge/en",
      sources: [
        {
          title: "Chreli Abano room selection",
          url: "https://chreliabano.ge/en",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Tbilisi sulphur baths, Georgia Travel",
          url: "https://georgia.travel/tbilisi-sulfur-baths",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "take-time-between-aachens-warm-mineral-pools",
    title: "Take time between Aachen’s warm mineral pools",
    summary:
      "At Carolus Thermen, a change of temperature or room can be the only thing you put on the afternoon’s timetable.",
    field: "restore",
    place: "Aachen",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "aachen",
    kernel:
      "Use the public thermal area and pick one pool to stay in long enough to notice its temperature and sound. Move to another only when you feel like it.",
    rootedness:
      "Aachen’s current thermal facility gives visitors direct access to a city whose public bathing has long been associated with its springs.",
    shift:
      "Keep time for the pause between pools.",
    humanReturn:
      "The pools give you a way to feel how temperature and time shape a thermal visit.",
    responsibility:
      "Confirm clothing rules and room availability. Describe bathing and rest without therapeutic claims.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Use the operator’s hours, thermal ticket and access rules. The venue lists access from six years old, with a separate sauna area.",
    participation: "Public pool, bath or park admission.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_admission",
      reviewBy: "2027-01-08",
      accessUrl: "https://carolus-thermen.de/en/opening-hours/",
      sources: [
        {
          title: "Opening hours",
          url: "https://carolus-thermen.de/en/opening-hours/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Aachen tourism Carolus Thermen listing",
          url: "https://www.aachen-tourismus.de/en/aachen-entdecken/details/poi/carolus-thermen/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "listen-to-how-taiwanese-pop-crossed-a-generation-in-taipei",
    title: "Hear a century of Taiwanese pop in Taipei",
    summary:
      "An old shellac record, a reconstructed record shop and a festival stage tell different parts of the same story. Taipei Music Center brings them together in the Cultural Cube.",
    field: "gather",
    place: "Taipei",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    kernel:
      "Begin on level six at the recreation of a 1930s Dadaocheng café and look for the shellac records. On level five, compare that original object with the recreated 1990s record shop. Pick a track or a listening habit that carries across the two rooms.",
    rootedness:
      "The Cultural Cube presents recorded popular music in Taipei alongside the technology and networks that helped it circulate.",
    shift:
      "Start with one early recording format, then follow its role into another decade.",
    humanReturn:
      "Different formats make a century of listening habits easier to hear.",
    responsibility:
      "The described route is based on the published reopening programme. Check audio-guide languages, opening hours and ticket conditions for your date. The photograph shows the campus in 2023.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Music, Island, Stories 2.0 is scheduled to open on 5 December 2026 on floors four to six of the Cultural Cube in Nangang. The centre’s announcement links to advance tickets and says counter sales begin when the building reopens.",
    participation: "Public listening or concert. Confirm the format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.tmc.taipei/tw/news/announcement/82516C149038",
      sources: [
        {
          title:
            "Taipei Music Center reopening programme and advance ticket information",
          url: "https://www.tmc.taipei/tw/news/announcement/82516C149038",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Music, Island, Stories permanent exhibition",
          url: "https://www.tmc.taipei/en/blog/show/TMC-Permanent-Exhibition",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Cultural Cube visitor information",
          url: "https://www.tmc.taipei/en/venue-introduction/579a7933Ae43",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "follow-a-memphis-soul-session-through-the-reconstruction-of-studio-a",
    title:
      "Follow a Memphis soul session through the reconstruction of Studio A",
    summary:
      "The Stax Museum gives you an idea of the working distance between players, microphones and the people listening on the other side of the glass.",
    field: "gather",
    place: "Memphis",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "memphis",
    kernel:
      "Begin with a recording or instrument in the museum collection. Use the reconstructed studio to imagine where the people making it stood. Give the room’s modest size as much attention as the famous names.",
    rootedness:
      "The Stax museum occupies the McLemore Avenue site associated with the Memphis label. The reconstructed studio relates a recorded sound to a working room.",
    shift:
      "Read the distance between the players and the mixing room.",
    humanReturn: "The room gives a celebrated recording a human scale.",
    responsibility:
      "Studio A is a reconstruction on the site of the former Stax studio. Live concerts use a separate museum programme. Flash photography is restricted.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The museum at 926 East McLemore Avenue lists general admission Tuesday through Sunday from 10 am to 5 pm, with the last entry at 4 pm. Review its holiday closures before planning.",
    participation: "Public listening or concert. Confirm the format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://staxmuseum.org/about-stax-museum/",
      sources: [
        {
          title: "Stax Museum hours, location and admission",
          url: "https://staxmuseum.org/about-stax-museum/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Stax Museum collection and reconstructed Studio A",
          url: "https://staxmuseum.org/museum/collection/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Memphis visitor authority museum listing",
          url: "https://www.memphistravel.com/attractions-activities/stax-museum-american-soul-music",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "montevideo-sala-zitarrosa-coltrane-quintet",
    title: "Hear a Montevideo quintet find its own way into Coltrane",
    summary:
      "At Sala Zitarrosa, drummer Juan Ibarra leads a quintet through the different sounds of Coltrane’s catalogue. Two saxophones give your ear a place to start.",
    field: "gather",
    place: "Montevideo",
    country: "Uruguay",
    countrySlug: "uruguay",
    regionSlug: "montevideo",
    kernel:
      "Listen for when Gabriel Manzanares’s alto and Gonzalo Levin’s tenor give a phrase different weight. Then follow the double bass and drums to hear what holds the quintet together when the saxophones move apart.",
    rootedness:
      "Sala Zitarrosa reuses a cinema space in central Montevideo. Its municipal programme gives the room an active role in presenting local music.",
    shift:
      "Follow the two saxophones through the same tune.",
    humanReturn:
      "Two saxophones give you a way to hear a local ensemble’s decisions inside familiar material.",
    responsibility:
      "This is a dated concert. The licensed image shows Sofía León during a different performance at the same venue.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The Sala Zitarrosa programme lists Coltrane 100 años at 8 pm on 2 December 2026. Use the venue’s ticket link or its box office on Avenida 18 de Julio.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-02",
      accessUrl:
        "https://salazitarrosa.montevideo.gub.uy/espectaculo/coltrane-100-anos-19-fest-jazz-mvd/",
      sources: [
        {
          title: "Sala Zitarrosa programme and ticket link",
          url: "https://salazitarrosa.montevideo.gub.uy/espectaculo/coltrane-100-anos-19-fest-jazz-mvd/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Montevideo festival ticket and event information",
          url: "https://tocan.uy/evento/coltrane-100-anos-2026-12-02/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "havana-eyeife-at-fabrica-de-arte-cubano",
    title: "Hear Havana’s electronic scene in a former oil factory",
    summary:
      "Eyeife brings electronic music into the exhibition and performance rooms of Fábrica de Arte Cubano. The changes in room size are part of how the night moves.",
    field: "gather",
    place: "Havana",
    country: "Cuba",
    countrySlug: "cuba",
    regionSlug: "havana",
    kernel:
      "Choose the published evening of the festival. If the galleries are open, give one room time before going to the music. Listen for how the room changes the impact of a rhythm you might normally hear through headphones.",
    rootedness:
      "Fábrica de Arte Cubano uses a former industrial building as several spaces for art and music. The different rooms shape the visitor’s own route through an evening.",
    shift:
      "Try hearing a different room before going straight to the main set.",
    humanReturn:
      "Changing rooms gives you a way to understand how a city’s music and art share the same night.",
    responsibility:
      "This is a dated festival, with workshops and performances scheduled separately. The photograph shows an earlier performance at Fábrica de Arte Cubano.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Fábrica de Arte Cubano lists Eyeife X for 11 December 2026 at 8 pm. Festival coverage also mentions activity on 12 December. Confirm the exact performance and entry for the night you choose on the venue’s posted programme.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-12",
      accessUrl: "https://fabricadeartecubano.com/etn/eyeife-x/",
      sources: [
        {
          title: "Fábrica de Arte Cubano Eyeife X event listing",
          url: "https://fabricadeartecubano.com/etn/eyeife-x/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Fábrica de Arte Cubano visitor programme",
          url: "https://fabricadeartecubano.com/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Festival organisers and artists reported by OnCuba",
          url: "https://oncubanews.com/cultura/musica/eyeife-anuncia-los-ganadores-de-su-concurso-y-celebrara-su-decima-edicion-en-fabrica-de-arte-cubano/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "hear-a-colombian-ensemble-in-a-concert-hall-on-bogotas-northern-edge",
    title: "Hear Bogotá’s philharmonic and youth choirs at Teatro Mayor",
    summary:
      "Bogotá’s philharmonic ends its year at Teatro Mayor with the city’s youth and children’s choirs. Orchestral versions bring a new scale to familiar seasonal songs.",
    field: "gather",
    place: "Bogotá",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "bogota",
    kernel:
      "Use the theatre’s programme to pick a Christmas song you recognise. Listen for where the orchestra carries the tune and where the voices change its texture.",
    rootedness:
      "Teatro Mayor is part of the Julio Mario Santo Domingo public library and cultural complex on Bogotá’s northern edge. A concert gives a time and purpose to the visit.",
    shift:
      "Choose a familiar tune and listen for who carries it through each change.",
    humanReturn:
      "One familiar melody gives you a way to listen to the relationship between orchestra and choir.",
    responsibility:
      "The performance is dated. Check the specific time and seating conditions, particularly for the 20 December morning concert.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Tuboleta lists Navidad Filarmónica on 16, 18, 19 and 20 December 2026 at Teatro Mayor. Check the event date, seating conditions and current availability before you go. The gala on 17 December has its own listing.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-20",
      accessUrl: "https://www.tuboleta.com/es/eventos/navidad-filarmonica",
      sources: [
        {
          title: "Tuboleta public ticket dates at Teatro Mayor",
          url: "https://www.tuboleta.com/es/eventos/navidad-filarmonica",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Teatro Mayor programme with the orchestra and choirs",
          url: "https://cms.teatropedia.teatromayor.org/es/evento/musica/navidad-filarmonica-orquesta-filarmonica-de-bogota-15115?function=3619",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
        {
          title: "Bogotá tourism introduction to Teatro Mayor",
          url: "https://visitbogota.co/es/que-hacer-en-bogota/cultura/teatro-mayor-julio-mario-santo-domingo",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "accra-omar-sterling-victory-through-harmony",
    title: "Hear Omar Sterling revisit Victory Through Harmony in Accra",
    summary:
      "A decade after the release of Victory Through Harmony, Omar Sterling returns to its tracks on an Accra stage. It is a chance to hear how a recording familiar to listeners has changed in live performance.",
    field: "gather",
    place: "Accra",
    country: "Ghana",
    countrySlug: "ghana",
    regionSlug: "accra",
    kernel:
      "Before the show, listen to one piece from the 2016 release. In the room, notice what happens to its pauses and phrasing when Sterling can hear the audience.",
    rootedness:
      "Alliance Française Accra has a dated public events programme. Following one named Ghanaian musician gives a visitor a more local reason to attend than a generic night out.",
    shift:
      "Hear what the room adds to a track you have only heard recorded.",
    humanReturn:
      "A familiar recording becomes a way to notice the work a performer does in front of a room.",
    responsibility:
      "This is a dated show. The archive photo depicts Trigmatic at the same venue in 2019.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Alliance Française Accra and TicketHub list the concert for 4 December 2026. The venue and ticket page give different start times, so check door and show times on your ticket.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-04",
      accessUrl:
        "https://afaccra.org/events/victory-through-harmony-the-concert",
      sources: [
        {
          title: "Alliance Française Accra dated concert programme",
          url: "https://afaccra.org/events/victory-through-harmony-the-concert",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "TicketHub public ticket page",
          url: "https://tickethubgh.com/events/omar-sterling-live",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "listen-for-the-exchange-of-melody-and-rhythm-at-mumbais-ncpa",
    title: "Hear Rajasthan and Kerala trade rhythms on a Mumbai stage",
    summary:
      "Roysten Abel’s Beat Route pairs percussion traditions from opposite ends of India. Composer and drummer Ranjit Barot puts kartal and chenda in the same conversation.",
    field: "gather",
    place: "Mumbai",
    country: "India",
    countrySlug: "india",
    regionSlug: "mumbai",
    kernel:
      "Listen for the dry click of the Rajasthani kartal and the sustained force of the Kerala chenda. The programme names the players and their instruments. Use it to pick out one voice before listening for what answers it.",
    rootedness:
      "The NCPA at Nariman Point is a regular host for public Indian music programmes. The December Beat Route programme brings percussion traditions from Rajasthan and Kerala to the same stage.",
    shift:
      "Give the instruments time to answer one another.",
    humanReturn:
      "You leave with a way to distinguish two instruments by the texture of their rhythm.",
    responsibility:
      "The organiser lists a minimum age of six. This is a dated performance. The photograph shows the theatre exterior.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The NCPA lists Beat Route for 6 December 2026 at 6:30 pm in the Jamshed Bhabha Theatre at Nariman Point. The organiser says the box office is open. Check availability through its event page.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-06",
      accessUrl:
        "https://www.ncpamumbai.com/event/citi-ncpa-aadi-anant-beat-route/",
      sources: [
        {
          title: "NCPA Beat Route programme and box office",
          url: "https://www.ncpamumbai.com/event/citi-ncpa-aadi-anant-beat-route/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "NCPA event calendar",
          url: "https://www.ncpamumbai.com/event-calendar/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "clermont-ferrand-bal-barre-bourree",
    title: "Dance to the Auvergne bourrée recast as club music",
    summary:
      "At Clermont-Ferrand’s Petite Coopé, Super Parquet brings regional dance rhythms into contact with electronics and Lithuanian vocal polyphony.",
    field: "gather",
    place: "Clermont-Ferrand",
    country: "France",
    countrySlug: "france",
    regionSlug: "clermont-ferrand",
    kernel:
      "At Le Bal Barré, listen for the bourrée rhythm before trying a few steps when the floor has room. Hear what changes when the pipes, strings and voices meet synths.",
    rootedness:
      "La Coopérative de Mai was built at the former site of a Michelin employees’ cooperative. Its smaller room can give a view of musicians working in and around Clermont.",
    shift:
      "Follow the steps of the dance before trying them yourself.",
    humanReturn:
      "A change in setting makes a regional dance rhythm easier to hear afresh.",
    responsibility:
      "This is a dated, amplified performance. The photograph shows the venue exterior from an earlier date.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "La Coopérative de Mai lists Le Bal Barré for 29 November 2026 at 8 pm in the Petite Coopé. Use the event ticket link and check its age and accessibility information.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-11-29",
      accessUrl: "https://www.lacoope.org/concerts/le-bal-barre/",
      sources: [
        {
          title: "Petite Coopé programme and public tickets for Le Bal Barré",
          url: "https://www.lacoope.org/concerts/le-bal-barre/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Venue practical and accessibility information",
          url: "https://www.lacoope.org/infos-pratiques/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "hear-one-instrument-at-a-time-at-leipzigs-bach-museum",
    title: "Hear one instrument at a time at Leipzig’s Bach Museum",
    summary:
      "A listening station makes the arrangement in a piece of music easier to follow after you have walked past the manuscript cases.",
    field: "gather",
    place: "Leipzig",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "leipzig",
    kernel:
      "Choose a station that lets you explore a particular recording or instrument. Close your eyes for one repeat and see whether you can find that same sound when the ensemble returns.",
    rootedness:
      "The Bach Museum stands in Leipzig’s Bosehaus, close to the Thomaskirche. It puts manuscripts and listening in the same neighbourhood people already associate with Bach.",
    shift:
      "Start with something that lets you hear a familiar piece in a different way.",
    humanReturn:
      "The instrument or score gives a familiar piece of music a physical reference point.",
    responsibility:
      "Do not claim visitors can isolate individual tracks until the station instructions confirm it.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "The museum publishes hours and visitor information at Thomaskirchhof. Check the language and the listening equipment available on the day.",
    participation: "Public listening or concert. Confirm the format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.bachinleipzig.de/en/bach-museum/",
      sources: [
        {
          title: "Bach Museum - Bach in Leipzig",
          url: "https://www.bachinleipzig.de/en/bach-museum/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Leipzig visitor authority Bach Museum listing",
          url: "https://www.leipzig.travel/en/poi/bach-museum",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "auckland-holy-trinity-nine-lessons-and-carols",
    title:
      "Hear Auckland’s cathedral choir put carols and readings in the same space",
    summary:
      "At Holy Trinity in Parnell, readings break up the singing. The pause between them gives the room time to answer.",
    field: "gather",
    place: "Auckland",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "auckland",
    kernel:
      "Choose a seat where you can hear the words of a reading and the full reach of the choir. Follow the alternation from one voice to many, and take part in congregational singing when invited.",
    rootedness:
      "Holy Trinity Cathedral in Parnell has a regular programme of public choral services. The cathedral’s large nave lets the sound travel farther than it does in a small listening room.",
    shift:
      "Listen through the pause between a reading and the next voices.",
    humanReturn:
      "The alternation of individual voices and choir gives you a way to hear the scale of the nave.",
    responsibility:
      "This is a public cathedral service. Follow the hosts’ cues and check photography etiquette. The service listing describes choral music and readings.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Holy Trinity Cathedral lists its Festival of Nine Lessons and Carols for 20 December 2026 from 7:30 to 9 pm at 446 Parnell Road. Use the cathedral’s event page to check entry and seating.",
    participation:
      "Attend on the public programme date and use the event’s entry terms.",
    duration: "The cathedral lists 90 minutes.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-20",
      accessUrl:
        "https://www.holy-trinity.org.nz/event-details/a-festival-of-nine-lessons-and-carols-2",
      sources: [
        {
          title: "Holy Trinity Cathedral Festival of Nine Lessons and Carols",
          url: "https://www.holy-trinity.org.nz/event-details/a-festival-of-nine-lessons-and-carols-2",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "Cathedral choir and public service information",
          url: "https://www.holy-trinity.org.nz/music",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
  {
    slug: "try-giving-tempo-to-a-recorded-viennese-orchestra",
    title: "Try giving tempo to a recorded Viennese orchestra",
    summary:
      "At Haus der Musik, an interactive conductor station gives you a small experience of shaping the timing you usually hear from a seat.",
    field: "gather",
    place: "Vienna",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    kernel:
      "Take the baton at the Virtual Conductor station and pick a piece from the menu. Try a steady beat before changing pace. Pay attention to how the recorded orchestra’s response makes your timing audible.",
    rootedness:
      "Vienna’s Haus der Musik has a floor devoted to interactive listening and conducting. The Virtual Conductor makes a recorded local orchestra part of that public activity.",
    shift:
      "Hear how much a change of timing can ask of the players.",
    humanReturn:
      "The orchestra’s response makes it easier to notice what a conductor communicates through timing.",
    responsibility:
      "This is an interactive installation using a recorded performance. The photograph shows an instrument display in the same museum.",
    evidence:
      "The cited visitor sources support the public activity and conditions described here. EA’s review is based on public sources. Check the host’s latest notices for your date.",
    access:
      "Haus der Musik lists Virtual Conductor as part of its public museum visit in central Vienna. Use the museum’s admission page and check exhibit or queue notices for your date.",
    participation: "Public listening or concert. Confirm the format.",
    duration: "Check the visit or programme duration before planning.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2027-01-08",
      accessUrl: "https://www.hdm.at/en/museum/",
      sources: [
        {
          title: "Haus der Musik exhibition floors and Virtual Conductor",
          url: "https://www.hdm.at/en/museum/",
          note: "Published visitor information for the access described in this guide.",
        },
        {
          title: "House of Music public visit FAQ",
          url: "https://www.hdm.at/en/faq/",
          note: "Provides background, itinerary or practical details for the visit described here.",
        },
      ],
    },
  },
];

export const guideBatch77: PublicExperience[] = records.map(
  ({ guideReview, ...guide }) => ({
    ...guide,
    id: guide.slug,
    status: "public_guide",
    demo: false,
    ...guideImage(guide.slug),
    guideReview: {
      ...guideReview,
      basis: "public_sources",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-20",
    },
  }),
);
