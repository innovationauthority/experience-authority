import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: NonNullable<PublicExperience["guideReview"]>["scope"],
  sources: [string, string, string][],
  reviewBy = "2027-01-25",
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-28",
  reviewBy,
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "tokyo-tsukishima-monja",
    slug: "let-a-tokyo-dinner-take-shape-on-the-griddle",
    title: "Let a Tokyo dinner take shape on the griddle",
    field: "taste",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Tsukishima",
    summary:
      "In Tsukishima, monjayaki arrives as ingredients and becomes dinner in front of you. The interesting part is learning when the thin batter is ready to eat.",
    kernel:
      "Choose a monja restaurant from the neighbourhood association's directory and ask for help with the first order. Watch the solid ingredients meet the hot plate before the batter is brought into the middle. If the restaurant invites you to handle the tools, follow its instructions rather than treating the griddle as a playground. Use the small spatula as shown and give each bite time to cool. Notice the change between a soft centre and a more cooked edge. Order another portion only after you understand the size of the first. Sharing the cooking surface can make a familiar dinner conversation take a different rhythm.",
    rootedness:
      "Tsukishima's monja restaurants give a particular Tokyo food a whole street presence. GO TOKYO describes both the neighbourhood and the table-griddle method. The local association lists individual shops, their menus and booking routes. Monjayaki is not simply an Osaka-style okonomiyaki with a new name. Its loose batter and small-spatula eating change the experience. The directory includes longstanding businesses and contemporary variations, so there is no need to invent a single pure recipe or describe every restaurant as a hidden local secret.",
    shift:
      "Pay attention to a dish while it becomes ready, rather than judging only the plate placed in front of you.",
    humanReturn:
      "You gain a practical first encounter with a Tokyo food and a reason to look beyond a recognisable sushi or ramen itinerary.",
    responsibility:
      "The cooking plate and utensils become very hot. Keep children away from the surface and ask staff before attempting the cooking yourself. Check wheat, seafood, meat, dairy and shared-griddle contact against the actual order. English assistance, step-free access and seating vary by shop. Confirm current hours and the precise branch before travelling. Association listings may retain older notices and are not a live table-availability feed. Avoid photographing neighbouring diners without asking.",
    evidence:
      "The official Tokyo guide documents the food and district. The association supplies shop-specific public access routes. EA has not eaten here, checked individual kitchens or verified same-day availability. This is a district food guide, not a rating of every member restaurant.",
    duration: "Allow 60 to 90 minutes for a meal, plus any queue",
    participation: "An ordinary restaurant meal with table-griddle preparation",
    access:
      "Select and contact a shop through the Tsukishima Monja Association. Confirm ingredients, assistance and any reservation directly. No hosted lesson, EA reservation or partnership is implied.",
    guideReview: review(
      "public_hospitality",
      [
        [
          "Tsukishima Monja Association: restaurant directory",
          "https://monja.gr.jp/stores/",
          "Primary shop directory. Confirm the chosen branch directly.",
        ],
        [
          "GO TOKYO: Tsukishima Monja Street",
          "https://www.gotokyo.org/en/spot/85/index.html",
          "Official destination account of the district and cooking method.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "munich-weisswurst-breakfast",
    slug: "make-room-for-munichs-breakfast-before-noon",
    title: "Make room for Munich's breakfast before noon",
    field: "taste",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "munich",
    place: "Munich, Tal",
    summary:
      "At Weisses Bräuhaus im Tal, a Weißwurst breakfast gives Munich's beer-hall setting a morning purpose. Start with the sausage, pretzel and sweet mustard, not a drinking obligation.",
    kernel:
      "Arrive during the breakfast service and order a portion that suits your appetite. Ask how the house recommends eating the sausage, then try a bite with sweet mustard before adding the pretzel. Notice how the soft filling, the condiment and the bread work differently together. You do not need to imitate a performance of Bavarian expertise or finish a beer to participate. A non-alcoholic drink is an equally reasonable choice. Look around the working dining room between bites and let the meal have its own pace. This is breakfast in a public restaurant, not an organised tasting with a narrator.",
    rootedness:
      "The Tal address belongs to Munich's long-established Wirtshaus culture. The restaurant publishes a daily Weißwurst breakfast window and describes its own butchery. A current Munich dining profile corroborates the morning service and location. The point is not to prove that a whole city eats one breakfast every day. It is to encounter a recognisable local meal in a setting where its timing matters. The restaurant's account of its sourcing is its own statement, not an independent EA supply-chain audit.",
    shift:
      "A place associated with beer becomes somewhere to understand a city's morning appetite.",
    humanReturn:
      "The combination gives you a useful reference for Bavarian food without requiring an expensive tasting menu or a late night.",
    responsibility:
      "The current breakfast window is 09:00 to noon. Check it before a special journey rather than relying on the longer general restaurant hours. Confirm the day's ingredients and any allergens directly. This sausage meal is not vegetarian, and substitutions should not be assumed. Ask about mobility access and seating when booking. Alcohol is optional. Keep photographs discreet and do not interrupt service to stage a traditional eating ritual for the camera.",
    evidence:
      "The restaurant's current site identifies the breakfast service and Tal address. The local dining profile corroborates those practical points. EA has not visited, tasted the food or assessed the house's production claims.",
    duration: "Allow 45 to 60 minutes during the morning service",
    participation:
      "A restaurant breakfast ordered directly from the current menu",
    access:
      "Use Weisses Bräuhaus im Tal at Tal 7, Munich. Check the current reservation conditions, especially for groups. This is not a brewery tour or EA booking.",
    guideReview: review("public_hospitality", [
      [
        "Weisses Bräuhaus im Tal: breakfast and opening",
        "https://www.weisses-brauhaus-tal.de/",
        "Primary daily breakfast window, menu context and address.",
      ],
      [
        "IN München: Weisses Bräuhaus",
        "https://www.in-muenchen.de/gastro/wirtshaus-bayerische-kuche/weisses-braeuhaus",
        "Local corroboration published in October 2026. Operator confirmation takes precedence.",
      ],
    ]),
  },
  {
    id: "mexico-city-maizajo-tortilla",
    slug: "taste-the-tortilla-before-the-filling-in-mexico-city",
    title: "Taste the tortilla before the filling in Mexico City",
    field: "taste",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    place: "Mexico City, Condesa",
    summary:
      "At Maizajo's taquería, give the corn tortilla your first attention. A taco becomes more revealing when its base is something to taste, not just something to hold.",
    kernel:
      "Choose a taco from the day's menu and take the first bite before adding extra salsa. Notice the tortilla's aroma, thickness and texture beside the filling. If a plain tortilla is available to buy, use it as a simpler point of comparison rather than asking the kitchen to invent a tasting flight. Ask one clear question about the corn or preparation when service allows. Then eat the taco as a meal. The useful discovery is not a vocabulary test. It is noticing an ingredient that can disappear behind the more conspicuous meat, vegetables and sauces.",
    rootedness:
      "Maizajo brings a molino, taquería and restaurant together at its Condesa address. Its public material places nixtamalised corn at the centre of the business. These are related but distinct services, not one interchangeable reservation. The tortilla-focused approach makes a familiar Mexico City food a way to think about grain and processing. It does not establish that every corn variety on sale is available every day, or that one commercial kitchen represents the country's many maize traditions.",
    shift:
      "Move the tortilla from the edge of your attention to the centre of the meal.",
    humanReturn:
      "You leave with a more useful comparison for the next taco you eat, whether it comes from a restaurant, market or neighbourhood counter.",
    responsibility:
      "Use the current Condesa address, not older listings for Azcapotzalco. The official FAQ states that there are no other branches. The taquería is walk-in, while the restaurant has its own reservation route. Published taquería service is 13:00 to 23:00 Monday to Saturday and 11:00 to 19:00 Sunday, subject to updates. Ask about allergens, fillings and shared equipment. Vegan options are listed but this is not independent dietary certification. Confirm step-free access and seating needs. Do not enter production areas without staff direction.",
    evidence:
      "The current operator homepage and FAQ distinguish its three services and identify the present address. EA has not eaten here, inspected production or verified individual corn supplies. No public visitor workshop is established by these sources.",
    duration: "Allow 45 to 60 minutes, plus the walk-in wait",
    participation: "An ordinary taquería meal focused on the tortilla",
    access:
      "Go to Fernando Montes de Oca 113, Condesa, and confirm current taquería service. Order and pay directly. A restaurant reservation does not book a workshop or a mill tour.",
    guideReview: review(
      "public_hospitality",
      [
        [
          "Maizajo: molino, taquería and restaurant",
          "https://www.maizajo.com/",
          "Primary explanation of the three public services.",
        ],
        [
          "Maizajo: frequently asked questions",
          "https://www.maizajo.com/pages/faq",
          "Current address, branch clarification, service windows and reservation distinction.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "london-st-bride-letterpress",
    slug: "set-a-few-words-in-wood-type-in-london",
    title: "Set a few words in wood type in London",
    field: "make",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, St Bride Foundation",
    summary:
      "Make a letterpress poster at St Bride Foundation and discover that the space around a word has weight. The next verified public workshop is on 25 November 2026.",
    kernel:
      "Bring a short piece of your own writing, ideally no more than twelve words, and let the available wood type change how you arrange it. Under the tutor's supervision, set the letters, adjust their spacing and lock the composition before printing. Compare the first impression with the arrangement on the press. A small decision about a gap or line break can change the voice of the whole poster. Work with the actual type available rather than expecting a digital font menu. Keep a record of the layout, then arrange collection or postage while the ink dries.",
    rootedness:
      "St Bride Foundation sits just off Fleet Street, with a library and teaching programme connected to printing and graphic communication. Its public poster workshop uses historic presses and wood type in a supervised practical setting. That puts a visitor in contact with the physical decisions behind printed language. The session is an introduction, not a professional qualification or unrestricted access to the library's special collections. A day at the press can make London's signs and printed ephemera more interesting on the way home.",
    shift:
      "Treat typography as something assembled with the hands, not only selected from a screen.",
    humanReturn:
      "A poster carries the memory of your spacing, pressure and corrections, as well as the words you chose.",
    responsibility:
      "Book the dated public session, currently 25 November from 10:30 to 16:00. Availability must be confirmed through the linked ticket seller. The workshop is reached by fourteen steps and is not step-free. Ask about age suitability and assistance needs before paying. Wear clothes that can take ink and follow the safety induction around the presses. Prints cannot be taken away that day. Collection or additional-cost postage is required. Use your own words or material you have permission to reproduce.",
    evidence:
      "The foundation publishes the date, activities, access restriction and drying requirement. Its learning page establishes the wider teaching context. EA has not attended, checked remaining seats or evaluated the tuition.",
    duration: "25 November 2026, 10:30 to 16:00",
    participation: "A prebooked, tutor-led letterpress poster workshop",
    access:
      "Book through the official event page for 14 Bride Lane. Confirm the current terms and print collection arrangements. Private group workshops and the Adana course are separate offers. No EA booking is implied.",
    guideReview: review(
      "public_programme",
      [
        [
          "St Bride Foundation: 25 November poster workshop",
          "https://sbf.org.uk/whats-on/view/letterpress-poster-printing-workshop-25/",
          "Dated public event, process, fourteen steps and delayed print collection.",
        ],
        [
          "St Bride Foundation: learning",
          "https://sbf.org.uk/learning/",
          "Institutional print-learning context, not proof of a place on a particular date.",
        ],
      ],
      "2026-11-25",
    ),
  },
  {
    id: "kyoto-shibori-itajime",
    slug: "unfold-the-pattern-you-kept-out-of-the-dye-in-kyoto",
    title: "Unfold the pattern you kept out of the dye in Kyoto",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    place: "Kyoto, Kyoto Shibori Museum",
    summary:
      "Fold and clamp a silk scarf before dyeing it at Kyoto Shibori Museum. The reveal comes from the parts the colour could not reach.",
    kernel:
      "Choose the Itajime Shibori silk-scarf course and follow the instructor as the cloth is folded and held between boards. Before dyeing, try to imagine where a protected area will appear when the fabric opens. Watch how a small fold becomes a repeated shape. Use the colours and handling method supplied for your session, then unfold the scarf to compare the result with your prediction. Leave time afterwards to look at the museum's larger works. The contrast between a first scarf and a complex exhibition piece is part of the lesson, not a reason to dismiss your own attempt.",
    rootedness:
      "The Kyoto museum teaches several resist-dyeing methods and exhibits shibori textiles. Itajime uses boards to prevent dye reaching selected parts of the folded cloth. It is one technique within a much wider textile practice, not a synonym for every form of shibori. The public short course offers a concrete entry into that distinction. Museum exhibitions rotate, so a particular large work seen online should not become a promise about the day of your visit.",
    shift:
      "Think about a pattern as the result of withholding colour, not only adding it.",
    humanReturn:
      "Your scarf becomes a wearable record of a sequence you can understand, with new questions to ask when you encounter more elaborate textiles.",
    responsibility:
      "Reserve the specific course rather than assuming all museum tickets include making. The operator offers English instruction and same-day take-home work, but confirm your slot and requirements. Its access page lists Sunday and irregular closures. Course-specific prices differ from the general access-page range, so use the confirmed booking total. Ask about age suitability, dexterity needs, stairs and step-free access before payment. Follow instructions around dye baths and tools. This silk course uses an animal-derived fibre, and cotton alternatives are separate products.",
    evidence:
      "The museum's course, class overview and access pages establish the technique, English option and public booking route. EA has not attended, inspected the dye materials or assessed the building's accessibility in person.",
    duration:
      "The course is listed from 30 minutes, with extra time for the museum",
    participation: "A booked, instructor-led resist-dyeing session",
    access:
      "Reserve Itajime Shibori at 127 Shikiami-cho, Nakagyo-ku. Confirm the date and final price directly. No EA booking, private studio invitation or professional certification is implied.",
    guideReview: review("public_programme", [
      [
        "Kyoto Shibori Museum: Itajime silk-scarf course",
        "https://en.shibori.jp/itajimescarfclass",
        "Specific board-resist course and booking link.",
      ],
      [
        "Kyoto Shibori Museum: class conditions",
        "https://en.shibori.jp/shiboriclass",
        "English instruction, museum admission and same-day collection.",
      ],
      [
        "Kyoto Shibori Museum: access",
        "https://en.shibori.jp/access",
        "Address and Sunday or irregular closures. Confirm course price separately.",
      ],
    ]),
  },
  {
    id: "london-gather-glass-bauble",
    slug: "give-a-glass-bauble-its-first-breath-in-woolwich",
    title: "Give a glass bauble its first breath in Woolwich",
    field: "make",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, Woolwich",
    summary:
      "At Gather's working hot shop, make a small blown-glass bauble with the team handling the process around you. This is a first encounter with molten glass, not a solo turn at a furnace.",
    kernel:
      "Choose from the day's available colours and watch the glassmakers gather and prepare the material. Follow their timing as you contribute to the shaping and blowing. Notice how quickly a soft form can change while the team keeps it moving. The useful question is not whether your bauble matches the example exactly, but which decisions gave it that shape. Ask about the cooling process before leaving. Your piece must remain at the studio, so plan collection or delivery as part of the booking rather than expecting to carry warm glass through London.",
    rootedness:
      "Gather operates a production and teaching studio in Woolwich's BLOC workspace at the Submarine Cable Depot. The public experience opens a small part of a working craft process to beginners. It offers a contemporary maker's view of southeast London, distinct from visiting a shop to buy finished glass. This is not presented as a uniquely London invention or an unchanged historic local custom. Its connection to place is the actual studio, people and production happening there now.",
    shift:
      "See a fragile decoration as the result of coordinated handling, heat and a controlled breath.",
    humanReturn:
      "The object can recall a process you participated in, including the patience needed after the visible making is over.",
    responsibility:
      "Book an available dated bauble session and confirm its duration. The specific product lists ages six and over with adult supervision, while the general FAQ gives older limits for other courses. Confirm suitability for each child. Wear closed shoes and follow all instructions around hot equipment. The studio has front steps, with rear step-free access requiring advance arrangement. Discuss mobility, assistance and heat concerns before paying. Only booked participants should attend unless agreed otherwise. Collection is from 48 hours later, or delivery can be arranged at extra cost.",
    evidence:
      "The operator's product page and embedded studio FAQ describe the public activity, Woolwich address, age distinction and cooling delay. EA has not attended, assessed instruction or independently audited the hot shop's safety arrangements.",
    duration:
      "Book the listed one-hour window and confirm your individual making time",
    participation: "A supervised introductory glassblowing experience",
    access:
      "Use Gather's booking page for Unit 4, Submarine Cable Depot, BLOC, Warspite Road, London SE18 5NX. Confirm the selected date and time before payment. No EA booking or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        [
          "Gather: blow your own bauble",
          "https://gather.glass/products/blow-your-own-bauble-class",
          "Specific public product and detailed studio FAQ. Date availability remains subject to booking.",
        ],
        [
          "Gather: studio and current workshops",
          "https://gather.glass/",
          "Primary business identity and current workshop navigation, not independent quality evidence.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "bilbao-bizkaia-gondola",
    slug: "cross-the-river-under-bizkaias-suspended-bridge",
    title: "Cross the river under Bizkaia's suspended bridge",
    field: "move",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "bilbao",
    place: "Getxo and Portugalete, Bilbao estuary",
    summary:
      "Take the ordinary gondola across the Nervión beneath the Bizkaia Bridge. The structure becomes easier to understand when it carries you from one bank to the other.",
    kernel:
      "Start on either bank and watch a crossing before joining the pedestrian boarding area. Notice how the gondola travels below the high span rather than climbing over it. Once aboard, keep clear of the working circulation space and look back at the bank you have left. The short crossing is the experience, not a prelude that must be upgraded into a high walkway visit. On arrival, step away from the exit and look at the same structure from its other end. If you want a return ride, treat it as another journey with its own fare and operating conditions.",
    rootedness:
      "The transporter bridge connects Portugalete and Getxo across Bilbao's estuary. Getxo's municipal account identifies Alberto de Palacio and Ferdinand Arnodin's engineering contribution and the bridge's 2006 World Heritage inscription. The crossing remains useful transport, not simply an industrial monument viewed from the pavement. Its suspended gondola separates the movement of people and vehicles from the tall structure above. Understanding that arrangement can make the wider estuary's working landscape more legible.",
    shift:
      "Learn an engineering idea through a small everyday journey instead of reading it only from a plaque.",
    humanReturn:
      "A few minutes of movement give you a clear physical memory of how the two banks connect.",
    responsibility:
      "Buy the barquilla crossing, not a pasarela ticket unless you deliberately want the separate upper walkway. Check live notices, wind conditions and the return timetable. Winter overnight service is not necessarily continuous. A current lift restriction concerns the high walkway and should not be treated as proof that the gondola is closed. Ask the operator about boarding assistance and mobility access. Follow pedestrian lanes and crew directions around vehicles. Do not obstruct commuters for photographs or treat the working landing as a viewpoint.",
    evidence:
      "The operator distinguishes gondola and walkway services, fares and operating notices. Getxo's municipality corroborates the crossing and heritage context. EA has not ridden the service or independently verified same-day operation.",
    duration:
      "A crossing takes only a few minutes, with 30 to 45 minutes useful for both banks",
    participation: "A public pedestrian journey on the transporter gondola",
    access:
      "Use the Puente Bizkaia barquilla landing in Getxo or Portugalete and pay the operator directly. Bilbao is the regional reference, not the location of the landing in the city centre.",
    guideReview: review(
      "public_programme",
      [
        [
          "Puente Bizkaia: gondola and walkway service",
          "https://puente-colgante.com/tarifas-y-horarios/",
          "Primary service distinction and operational notices.",
        ],
        [
          "Getxo: visit the Bizkaia Bridge",
          "https://www.getxo.eus/es/turismo/que-hacer/puente-bizkaia",
          "Municipal account of the crossing, location and World Heritage date.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "medellin-arvi-cable",
    slug: "watch-medellin-give-way-to-forest-from-the-cable",
    title: "Watch Medellín give way to forest from the cable",
    field: "move",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "medellin",
    place: "Medellín, Santo Domingo to Arví",
    summary:
      "Ride the tourist cable from Santo Domingo towards Arví and watch the view change from hillside neighbourhoods to forest. Plan the return before making the outward journey.",
    kernel:
      "Use the metro network to reach the transfer for Line L, following the operator's current route information. As the cabin travels towards Arví, notice the point where the texture below changes. Look at the terrain and canopy rather than using residential windows as photographic subjects. At the upper station, find the park information point before deciding whether to add a marked walk or a paid guided route. Leave enough time to return without racing the final departure. The cable journey is already a complete way to experience the change in elevation and setting. A longer forest visit is an additional choice, not a compulsory endurance test.",
    rootedness:
      "Medellín's cable network includes both urban transport links and the separately priced tourist Line L to Arví. Treating them as identical misses an important practical and social distinction. The park's own visitor information directs transport questions to Metro de Medellín and describes separate guided and self-guided offers on arrival. This guide concerns the publicly available cable approach. It does not turn hillside communities into an attraction or imply unrestricted access to the surrounding private land.",
    shift:
      "Let the journey explain the relationship between a city, its slopes and the forest beyond it.",
    humanReturn:
      "You gain a different scale for Medellín and a manageable way to include its surroundings in a city stay.",
    responsibility:
      "The current operator schedule closes Line L on Tuesdays, not Mondays as older guides may say. Published hours are 09:00 to 18:00 on Monday and Wednesday to Saturday, and 08:30 to 18:00 on Sundays and holidays. Confirm station-specific last boarding and disruptions before travel. Line L has a separate fare. Weather can interrupt cable operation. Ask about boarding access and assistance. Carry suitable layers and water for any park visit, remain on authorised routes and do not collect plants or enter farms. A cabin ticket does not include a guided forest walk.",
    evidence:
      "Metro de Medellín publishes the current Line L timetable and fare distinction. Parque Arví explains the separate visitor activities and limits. EA has not ridden the route, walked the current trails or inspected operational conditions.",
    duration:
      "Allow at least two hours from central Medellín, longer for a park activity",
    participation:
      "Public transport followed by the separately ticketed Arví cable",
    access:
      "Plan the Metro connection to Santo Domingo and the transfer to Line L through the official operator. Confirm both outward and return services. No EA transfer, tour bundle or booking is implied.",
    guideReview: review(
      "public_programme",
      [
        [
          "Metro de Medellín: user information and Line L hours",
          "https://www.metrodemedellin.gov.co/usuarios",
          "Current Tuesday closure, station planning and separate Arví fares.",
        ],
        [
          "Parque Arví: frequently asked questions",
          "https://parquearvi.org/publicaciones/248/preguntas-frecuentes-parque-arvi/",
          "Park activities, protected resources and separation from cable operation.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "zurich-polybahn-ascent",
    slug: "let-a-hundred-second-ride-redraw-zurich",
    title: "Let a hundred-second ride redraw Zürich",
    field: "move",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "zurich",
    place: "Zürich, Central to Polyterrasse",
    summary:
      "Take the Polybahn from Central to the university terrace. In about a hundred seconds, an ordinary connection changes the level from which you read the city.",
    kernel:
      "Find the lower station at Central, check that the service is running and validate the appropriate ticket before boarding. Watch the short track rise through the city rather than waiting for a mountain panorama that this ride does not promise. At the top, move out of the station's working space and continue to the public terrace. Look for the route you have just taken and the relationship between the old town and the university district. You can linger without buying a second attraction. Decide on the return separately, using the railway again or an appropriate public walking route if the conditions and your mobility allow.",
    rootedness:
      "The Polybahn is a working Zürich connection to ETH and the university area. The city transport operator dates the start of service to 1889 and distinguishes that from the earlier concession. Its present machinery followed a major renewal in 1996. The nostalgic exterior therefore belongs to a functioning transport system, not an untouched nineteenth-century mechanism. The small scale is precisely what makes the ride revealing. It solves a real change in level within the city.",
    shift:
      "A short commute can be as useful for understanding a place as a long sightseeing excursion.",
    humanReturn:
      "You leave with a physical sense of the slope and a new place to pause above the streets you were just walking.",
    responsibility:
      "The operator explicitly states that the Polybahn is not barrier-free. Do not rely on a general public-transport accessibility assumption. Check the maintenance calendar, including planned daytime interruptions on 12 November and 17 December 2026. Ordinary service is listed daily, with later starts at weekends. A valid ZVV zone 110 ticket includes the ride, while the special single ticket is sold at the stations. Confirm your own ticket's validity. Keep doors and boarding areas clear and follow staff instructions. The terrace remains exposed to weather.",
    evidence:
      "The Polybahn site publishes current hours, ticket conditions and maintenance dates. Zürich's transport authority establishes the technical and historical context. EA has not ridden the service or inspected current access arrangements.",
    duration:
      "About 100 seconds on the railway, with 30 to 45 minutes for the terrace",
    participation:
      "A short public funicular journey and independent terrace pause",
    access:
      "Board at Central Polybahn for Polyterrasse ETH. Check current service and ticket validity directly. No university building tour, guaranteed view or EA transport booking is included.",
    guideReview: review(
      "public_programme",
      [
        [
          "UBS Polybahn: timetable and maintenance",
          "https://www.polybahn.ch/en/",
          "Current operating calendar and primary service information.",
        ],
        [
          "UBS Polybahn: fares and access",
          "https://www.polybahn.ch/",
          "Zone 110 inclusion and explicit non-barrier-free warning.",
        ],
        [
          "City of Zürich VBZ: Polybahn",
          "https://www.stadt-zuerich.ch/vbz/de/die-vbz/fahrzeuge/bahnen/ubs-polybahn.html",
          "Transport authority history and approximately 100-second ride.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "turin-mauto-car-design",
    slug: "read-a-century-of-car-design-in-turin",
    title: "Read a century of car design in Turin",
    field: "learn",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "turin",
    place: "Turin, MAUTO",
    summary:
      "At Turin's national automobile museum, look past the badge. The space for a passenger, the shape of a body and the position of a wheel can tell a different story from speed.",
    kernel:
      "Choose two cars from different periods and compare one ordinary detail. Where does a person sit, how do they enter, and what seems easy or awkward about the arrangement? Read the labels before assigning a purpose to an unfamiliar feature. Then step back and consider the whole form. You do not need to recognise every model or rank the most expensive object in the room. A manageable question can carry you through the collection more effectively than attempting to photograph every vehicle. Keep time at the end to revisit the car that changed your initial assumptions.",
    rootedness:
      "MAUTO places the automobile in Turin, a city closely associated with vehicle manufacture and design. Its public museum visit is distinct from the separately organised Open Garage access and specialist activities. The collection offers an opportunity to consider how transport objects change with technology, use and taste. It is not a driving experience, a factory tour or proof that every displayed model was made in Turin. Reading the individual labels keeps that local connection specific rather than turning the collection into a single national style.",
    shift:
      "Look at a car as a designed space for people, not only a machine with a performance figure.",
    humanReturn:
      "The next ordinary street can become a small design exhibition once you start noticing doors, proportions and passenger space.",
    responsibility:
      "Current opening is Monday 10:00 to 14:00 and Tuesday to Sunday 10:00 to 19:00, with last admission one hour before closing. Check holiday exceptions. The main museum and Open Garage have different accessibility and booking conditions. Ask about the route, audio languages and any assistance you need. Do not touch or enter a vehicle unless a clearly marked activity permits it. Personal photography rules do not authorise commercial production. Temporary displays and individual vehicles can change, so do not plan around one image alone.",
    evidence:
      "MAUTO's visitor FAQ establishes current admission and the separate garage offer. Turin's official destination listing corroborates the museum and opening pattern. EA has not visited, inspected the current display or assessed individual vehicle histories.",
    duration: "Allow about 90 minutes for the museum",
    participation: "A self-directed museum visit focused on design and use",
    access:
      "Use MAUTO's official admission route for Corso Unità d'Italia 40. Confirm current exhibitions and any optional guided visit. No EA ticketing, vehicle access or partnership is implied.",
    guideReview: review("public_observation", [
      [
        "MAUTO: visitor FAQ",
        "https://www.museoauto.com/en/faq/",
        "Opening, visit length, access and separate Open Garage arrangements.",
      ],
      [
        "Turismo Torino: Museo Nazionale dell'Automobile",
        "https://turismotorino.org/it/visita/cosa-fare-e-vedere/musei-e-cultura/museo-nazionale-dellautomobile-mauto",
        "Official destination corroboration and address.",
      ],
    ]),
  },
  {
    id: "antwerp-momu-silhouettes",
    slug: "look-at-the-shape-before-the-label-in-antwerp",
    title: "Look at the shape before the label in Antwerp",
    field: "learn",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "antwerp",
    place: "Antwerp, MoMu",
    summary:
      "In MoMu's collection presentation, compare a garment's outline, seams and proportions before reading the designer's name. Antwerp's fashion story becomes more interesting when looking comes first.",
    kernel:
      "Begin with one silhouette in the ground-floor collection presentation. Look at where its volume sits and which part of an expected garment has been altered. Then read the label and return to the same object. Compare it with another piece that solves a similar problem differently. Archive material and film can add context, but you do not have to know a designer's biography to start noticing construction. Keep the visit focused enough to remember a few decisions. Afterwards, the shop windows and clothing around Nationalestraat offer another opportunity to test what you have learned to see.",
    rootedness:
      "MoMu's rotating collection presentation connects Belgian and international fashion with historical clothing, textiles and accessories. It places the emergence of Antwerp's designers within a wider, changing field rather than reducing Belgian fashion to a fixed national look. The museum's collection is much larger than the selection displayed at any one time. This guide concerns the continuing collection presentation, not a promise that a particular temporary exhibition or photographed outfit will still be on view.",
    shift:
      "Move from recognising a label to noticing how a garment has been thought through.",
    humanReturn:
      "You gain a more personal way into Antwerp's fashion identity, useful even if you have no intention of buying designer clothes.",
    responsibility:
      "The museum normally opens Tuesday to Sunday, 10:00 to 18:00, with ticket sales ending at 17:00. Check holiday exceptions. Its visitor page describes wheelchair access and portable seats, but request specific assistance directly. Metro tunnel work is affecting routes until the end of March 2027, so use current journey planning rather than older directions to Groenplaats. Do not touch garments or infer that a display is a fitting or handling session. Ask about interpretation languages and photography conditions. Temporary exhibitions may have different dates.",
    evidence:
      "MoMu publishes the collection's scope, rotation policy and practical visitor information. EA has not inspected the current installation or evaluated the curatorial selection on site. The museum's own interpretation is identified as such.",
    duration: "Allow 60 to 90 minutes, longer if adding a temporary exhibition",
    participation: "An ordinary museum visit with self-directed close looking",
    access:
      "Use the official MoMu ticket route for Nationalestraat 28. Confirm the collection presentation is open on your date. No styling consultation, backstage access or EA booking is included.",
    guideReview: review("public_observation", [
      [
        "MoMu: visitor information",
        "https://www.momu.be/en/visitor-information",
        "Current admission, accessibility and metro disruption notice.",
      ],
      [
        "MoMu: Fashion from the Collection",
        "https://www.momu.be/en/exhibitions/collection-presentation",
        "Rotating ground-floor presentation and its curatorial scope.",
      ],
    ]),
  },
  {
    id: "madrid-cerralbo-interiors",
    slug: "read-the-room-before-the-painting-in-madrid",
    title: "Read the room before the painting in Madrid",
    field: "learn",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "madrid",
    place: "Madrid, Museo Cerralbo",
    summary:
      "At Museo Cerralbo, paintings, furniture and mirrors remain part of a house's argument about itself. Look at how the room arranges your attention before choosing an individual object.",
    kernel:
      "Enter as an ordinary museum visitor and take a moment at the threshold of a room. Notice the first thing your eye reaches, then ask what placed it there: light, height, repetition or a reflection. Follow the public route towards the ballroom, where the decoration can be read as a setting for social life rather than a collection of isolated treasures. Use the museum's interpretation to distinguish an object's history from the way it was displayed. You do not have to catalogue the whole house. Choose one room that you can describe afterwards without relying on a photograph.",
    rootedness:
      "The museum preserves the setting of the Marquis of Cerralbo's nineteenth-century Madrid residence and collection. Its rooms combine domestic arrangements with collecting and display. The ballroom's mirrors and decoration had a social purpose within that household. They are evidence of a particular privileged home, not a representation of how everyone in Madrid lived. That distinction makes the preserved interior more informative, allowing beauty and context to sit in the same visit.",
    shift:
      "A room becomes an arrangement of choices rather than a container for individually famous objects.",
    humanReturn:
      "You leave with a more attentive way to look at interiors, including modest ones that use similar devices of light and placement.",
    responsibility:
      "Ordinary tickets are sold on arrival, with limited capacity and possible queues. Last admission is one hour before closing. The museum closes Mondays and specified holidays, with a separate Thursday evening window. Guided and group visits require separate arrangements and should not be assumed available. Personal belongings must use the lockers under the access rules. Visitors needing mobility assistance should confirm the route and capacity limits in advance. Follow barriers, photography rules and staff directions. A public visit is not permission to sit on historic furniture or stage a private photoshoot.",
    evidence:
      "The Ministry of Culture publishes the current admission rules. Madrid's official tourism listing corroborates the house-museum setting and accessibility arrangements. EA has not visited or confirmed the availability of each room on a particular day.",
    duration: "Allow about 60 minutes, plus any entrance queue",
    participation: "An independent public visit to a preserved house museum",
    access:
      "Use Museo Cerralbo at Calle Ventura Rodríguez 17. Check the official opening calendar and arrive well before last admission. No EA guided tour, advance ticket or private-house invitation is implied.",
    guideReview: review("public_observation", [
      [
        "Museo Cerralbo: opening and admission",
        "https://www.cultura.gob.es/mcerralbo/en/visita/horariosytarifas.html",
        "Primary hours, last-entry rule and no advance ticket sales.",
      ],
      [
        "Museo Cerralbo: visitor conditions",
        "https://www.cultura.gob.es/mcerralbo/visita.html",
        "Capacity, lockers and separate group conditions.",
      ],
      [
        "Madrid tourism: Museo Cerralbo",
        "https://www.esmadrid.com/informacion-turistica/museo-cerralbo",
        "House-museum context and practical accessibility information.",
      ],
    ]),
  },
  {
    id: "bangkok-benjakitti-wetland",
    slug: "leave-bangkoks-hurry-at-the-edge-of-a-wetland",
    title: "Leave Bangkok's hurry at the edge of a wetland",
    field: "restore",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    place: "Bangkok, Benjakitti Forest Park",
    summary:
      "Take a short section of Benjakitti's wetland paths and let water, reeds and the skyline share your attention. There is no need to complete every route in the park.",
    kernel:
      "Choose a cooler part of the day and enter through a currently open public gate. Follow a marked path towards the wetland, then stop where you can look without blocking other visitors. Notice how the towers remain visible while the foreground changes to water and planting. If conditions suit, use a section of the raised walkway. Otherwise a ground-level pause is enough. Put the phone away for a few minutes and listen before deciding to move on. Set a modest turnaround point instead of treating the park's full route length as an obligation.",
    rootedness:
      "Benjakitti occupies part of Bangkok's former tobacco-factory landscape. The city's park information distinguishes its nature paths, running and cycling routes, skywalk and other facilities. The forest-park area offers a designed urban wetland rather than an untouched wilderness. Its setting makes the relationship between built city and planted ground unusually visible. This guide is an invitation to use a public park thoughtfully, not a claim that a short visit delivers a health treatment or verifies environmental performance.",
    shift:
      "Find a slower foreground without pretending that the surrounding city has disappeared.",
    humanReturn:
      "A manageable pause can give the rest of a Bangkok day more room, without needing a retreat booking or a long transfer.",
    responsibility:
      "BMA currently lists daily opening from 04:30 to 22:00. Check gate and area notices before travelling. Temporary restrictions for the 11 to 18 October 2026 meetings should not be mistaken for permanent closures, but new notices can supersede ordinary access. Heat, heavy rain and slippery surfaces can change the plan. Carry water, stay on paths and do not enter the wetland or feed wildlife. Use designated cycling routes and hours if cycling separately. Confirm accessible entrances and the particular route you need rather than assuming every raised section is step-free.",
    evidence:
      "Bangkok's official park page and Learning City directory establish the public location and opening pattern. EA has not walked the current routes, tested accessibility or independently measured the wetland's environmental effects.",
    duration: "Allow 45 to 90 minutes at your own pace",
    participation: "An independent public-park walk and quiet pause",
    access:
      "Use Benjakitti Park's current public gates in Khlong Toei. This guide does not include sports bookings, boat hire or a guaranteed connection to another park. No EA programme or partnership is implied.",
    guideReview: review(
      "public_observation",
      [
        [
          "Greener Bangkok: Benjakitti Park",
          "https://greener.bangkok.go.th/park/benjakitti-park/",
          "BMA park routes and current opening. Direct automated retrieval was blocked, with the indexed official page available.",
        ],
        [
          "Bangkok Learning City: Benjakitti",
          "https://learning.bangkok.go.th/location/loca_0264/",
          "Official location and daily 04:30 to 22:00 corroboration.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "naples-santa-chiara-cloister",
    slug: "find-a-quieter-naples-between-the-painted-tiles",
    title: "Find a quieter Naples between the painted tiles",
    field: "restore",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    place: "Naples, Santa Chiara",
    summary:
      "Step into Santa Chiara's public majolica cloister and follow colour at a slower pace. The painted leaves and fruit make a different kind of city garden.",
    kernel:
      "Enter the museum complex and give the cloister time before continuing to the other rooms. Look along a tiled path, then come closer to one painted detail without touching it. Notice where a depicted leaf or fruit meets the actual planting behind it. Let the repeated columns guide your eye instead of trying to collect every decorative scene. Pause only where seating is permitted and leave the historic tiled surfaces alone. The garden can be busy, so the invitation is to slow your own looking, not to expect a private or silent enclosure.",
    rootedness:
      "Santa Chiara's cloister combines an older perimeter with Domenico Antonio Vaccaro's eighteenth-century garden arrangement. The complex attributes the majolica work to Donato and Giuseppe Massa. Painted scenes and plant motifs connect the architecture with the garden around it. This is a public heritage visit within a religious complex, not access to a community's private life or a monastic retreat. The paid cloister visit is also distinct from entering the basilica, which has different hours.",
    shift:
      "Look for rest in a change of attention and scale, rather than assuming it requires leaving the city.",
    humanReturn:
      "The relationship between painted and living plants can become a vivid memory of Naples that is neither a crowded street scene nor a panoramic view.",
    responsibility:
      "Buy admission at the complex's ticket office. The official tariff page says third-party vouchers are not accepted. Its opening page and FAQ differ by thirty minutes, so plan against the earlier closing of 17:00 Monday to Saturday and 14:00 Sunday, then confirm locally. Arrive well before last entry. Check holiday and special closures. Ask about step-free access, seating and audio languages. Do not sit on protected tiled benches, touch decoration or enter planted areas. Respect worshippers and private areas without assuming that museum admission invites participation in religious life.",
    evidence:
      "The complex publishes its garden history, ticket conditions and visitor FAQ. EA has not visited or resolved the inconsistent closing times directly with staff. The earlier published limit is used as the planning boundary.",
    duration:
      "Allow 40 to 60 minutes for the complex, with unhurried cloister time",
    participation: "A self-directed paid heritage visit and garden pause",
    access:
      "Enter at Via Santa Chiara 49C. Purchase the museum-complex ticket directly and check the day's notices. No retreat, private access or EA reservation is included.",
    guideReview: review(
      "public_observation",
      [
        [
          "Santa Chiara: opening and tickets",
          "https://www.monasterodisantachiara.it/orari/",
          "On-site ticketing and earlier published closing times.",
        ],
        [
          "Santa Chiara: majolica cloister",
          "https://www.monasterodisantachiara.it/chiostro-maiolicato/",
          "Architectural and ceramic context.",
        ],
        [
          "Santa Chiara: visitor FAQ",
          "https://www.monasterodisantachiara.it/faq/",
          "Visit scope and duration. Closing times conflict with the opening page.",
        ],
      ],
      "2026-12-27",
    ),
  },
  {
    id: "lisbon-gulbenkian-garden",
    slug: "give-lisbon-an-hour-beside-the-gulbenkian-lake",
    title: "Give Lisbon an hour beside the Gulbenkian lake",
    field: "restore",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    place: "Lisbon, Gulbenkian Garden",
    summary:
      "Walk into the Gulbenkian Garden without adding a museum checklist. A path through trees and a pause near the lake can be the whole visit.",
    kernel:
      "Choose a public entrance and follow a path into the planted interior. Notice how the view opens and closes between trees before you settle near the lake. Look at the water and the birds without feeding them or trying to draw them closer for a photograph. If a seat is available, stay long enough for the scene to change around you. Then choose a different public path out. You do not need to cover the whole garden, identify every plant or buy an exhibition ticket to justify the hour. Let the visit remain a modest, useful interval in the city.",
    rootedness:
      "The garden surrounds the Calouste Gulbenkian Foundation's buildings in Lisbon. The foundation connects its origins and later renewal with landscape architect Gonçalo Ribeiro Telles and provides an interpretive point for visitors who want more context. The public garden has its own daily opening pattern, separate from the museums and cultural venues. It is a designed landscape woven around a working institution, not an anonymous green background or a private estate opened only to ticket holders.",
    shift:
      "Let a cultural institution offer an outdoor pause, without feeling obliged to turn every visit into an indoor programme.",
    humanReturn:
      "A free, repeatable place to slow down can become part of how you inhabit Lisbon, not just one more attraction crossed off a list.",
    responsibility:
      "The garden is listed as free and open from sunrise to sunset, not for the same hours as the museum or CAM. Confirm current gates and any temporary restrictions. Wet paths, changing levels and local works may affect the route. Ask the foundation about step-free options and seating if needed. Remain on public paths, protect planting and wildlife, and do not assume an outdoor concert or guided activity is happening during an ordinary visit. Museum admission and restaurant service are separate decisions. Respect other visitors seeking a quiet place.",
    evidence:
      "The foundation's garden page and current hours page establish the public visit, landscape context and separate opening regime. EA has not inspected today's paths, verified every accessible route or attended a garden programme.",
    duration: "Allow 45 to 90 minutes, or a shorter pause",
    participation: "An independent free garden visit",
    access:
      "Use the Gulbenkian Foundation's current visitor directions and garden entrances in Lisbon. Check daylight and notices before arriving. No museum ticket, reserved seat, therapeutic benefit or EA booking is implied.",
    guideReview: review("public_observation", [
      [
        "Gulbenkian: opening hours",
        "https://gulbenkian.pt/en/useful-information/opening-hours/",
        "Free garden access from sunrise to sunset, separate from exhibition hours.",
      ],
      [
        "Gulbenkian: the garden",
        "https://gulbenkian.pt/fundacao/jardim-gulbenkian/",
        "Primary landscape context and public ways of using the garden.",
      ],
    ]),
  },
  {
    id: "marrakech-clock-storytelling",
    slug: "let-a-marrakech-story-fill-the-room",
    title: "Let a Marrakech story fill the room",
    field: "gather",
    country: "Morocco",
    countrySlug: "morocco",
    regionSlug: "marrakech",
    place: "Marrakech, Café Clock in the Kasbah",
    summary:
      "Join Café Clock's public Thursday storytelling evening and listen as a voice, a gesture and an audience build the scene. Stories are presented in English and Darija.",
    kernel:
      "Confirm the Thursday programme and arrive before the storytelling starts. Choose a seat that leaves the performer and other listeners room, then put away the screen. Notice how a pause changes the audience's expectation, or how a gesture supplies something that has not been described. If a passage is in a language you do not follow, listen to its rhythm without pretending you have understood every word. Let the room's response help you follow the performance. Questions belong in an invited interval, not over the ending of a story. A drink or meal can accompany the evening, but the story deserves its own attention.",
    rootedness:
      "Café Clock presents hikayat in a contemporary commercial cultural space in Marrakech's Kasbah. Its account describes a programme of younger storytellers learning from the late Ahmed Ezzarghani and performing for a mixed audience. That is a specific public setting within a wider Moroccan oral tradition. It is not a substitute for every form of storytelling in the country, nor evidence that a visitor has entered a private household or an untouched historical scene.",
    shift:
      "Experience a story as something made between a teller and the people listening, not a recording consumed alone.",
    humanReturn:
      "You may remember the timing of a laugh or a held silence as clearly as the plot, with a new way to notice spoken storytelling elsewhere.",
    responsibility:
      "The current programme lists Thursdays at 19:00 with free event entry. Confirm that the session is running and ask about seating, food or drink charges separately. Do not assume that a website listing reserves a table. Ask about step-free access and age suitability for the actual programme. Do not record a story or photograph performers and audience without permission. The site retains historical wording about its late mentor, so no appearance by him is promised. Language alternation is not necessarily a line-by-line translation.",
    evidence:
      "Café Clock's live storytelling page establishes the recurring public programme, languages and time. Its contact page identifies the Marrakech venue. EA has not attended, assessed a performance or confirmed the next evening directly.",
    duration:
      "Allow an evening slot from 19:00, with the end time confirmed directly",
    participation: "An audience place at a public storytelling evening",
    access:
      "Confirm the programme with Café Clock Marrakech at 224 Derb Chtouka, Kasbah. Do not confuse it with the Fez or Chefchaouen branches. No private performance or EA table booking is included.",
    guideReview: review(
      "public_programme",
      [
        [
          "Café Clock: Moroccan storytelling",
          "https://www.cafeclock.com/moroccan-storytelling",
          "Current Thursday 19:00 public programme and English/Darija presentation.",
        ],
        [
          "Café Clock: contact and branches",
          "https://www.cafeclock.com/contact-us",
          "Primary Marrakech contact, distinct from other branches.",
        ],
      ],
      "2026-11-27",
    ),
  },
  {
    id: "toronto-rex-jazz-set",
    slug: "follow-a-jazz-conversation-at-the-rex-in-toronto",
    title: "Follow a jazz conversation at The Rex in Toronto",
    field: "gather",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "toronto",
    place: "Toronto, The Rex on Queen Street West",
    summary:
      "Choose a live set at The Rex and listen for how the musicians answer one another. You do not need to recognise a standard to find a way into the room.",
    kernel:
      "Read the current calendar and choose a band or time that genuinely fits your evening. Arrive before the set, settle your order and give the musicians a clear listening space. Pick one instrument to follow through the first piece, then shift attention when another player responds. Notice how a familiar phrase can change when the rhythm or accompaniment moves underneath it. Applaud with the room rather than worrying about knowing a perfect set of jazz rules. Keep conversation low enough that the people around you can make their own discoveries. The performance is the reason to be there, not background for a louder gathering.",
    rootedness:
      "The Rex's Queen Street West calendar places Toronto-based musicians, student ensembles and touring players in the same continuing venue programme. Its current listings distinguish afternoon and evening formats rather than treating every show as one interchangeable ticket. The local value is in encountering a working music scene on an actual date. That does not guarantee a famous guest, a particular style or an invitation to join the band. A scheduled jam has its own participation rules.",
    shift:
      "Hear improvisation as a conversation you can follow, rather than a specialist language you must master first.",
    humanReturn:
      "A musician or ensemble name can become a thread to follow after the trip, giving one evening a life beyond its venue.",
    responsibility:
      "Use the individual event listing. The general page describes ticketed 20:00 shows and pay-what-you-can earlier sets, but specific events can use different door arrangements. Tickets and cover do not include food or drink. Confirm seating, arrival conditions, age rules and step-free access directly. Buying a drink is not a substitute for the performance charge, while alcohol is never required for this guide. Do not record musicians without permission. Bring hearing protection if sound levels are a concern and choose a suitable seat where possible.",
    evidence:
      "The Rex publishes a current October and November 2026 performance calendar, general attendance rules and ticket FAQ. EA has not attended a set, tested acoustics or confirmed remaining seats for a particular show.",
    duration:
      "Plan around the chosen set, commonly an early-evening or 20:00 programme",
    participation: "An audience visit to a scheduled live jazz performance",
    access:
      "Choose the exact event through The Rex's official calendar at 194 Queen Street West. Follow that event's booking or door policy. No EA ticket, table reservation or performer access is implied.",
    guideReview: review(
      "public_programme",
      [
        [
          "The Rex: current events",
          "https://www.therex.ca/events/",
          "Dated performers and event-specific attendance conditions.",
        ],
        [
          "The Rex: how the bar works",
          "https://www.therex.ca/",
          "General show windows and separation of cover from food and drinks.",
        ],
        [
          "The Rex: ticket FAQ",
          "https://www.therex.ca/faqs",
          "Arrival, seating and ticket terms. Individual listings may differ.",
        ],
      ],
      "2026-11-27",
    ),
  },
  {
    id: "osaka-namikiza-english-rakugo",
    slug: "watch-one-person-become-a-whole-osaka-story",
    title: "Watch one person become a whole Osaka story",
    field: "gather",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "osaka",
    place: "Osaka, Dotonbori Namikiza",
    summary:
      "At Namikiza's English-language rakugo programme, a seated performer can create a whole cast with a fan, a cloth and a change of voice. The next verified dates are 10 November and 8 December 2026.",
    kernel:
      "Book the actual Namikiza date and arrive before the performance starts. Watch how the storyteller changes character without changing costume or leaving the cushion. A turn of the head can establish a new speaker, while a familiar small object becomes something else through handling. Let the English presentation give you an entry into the timing rather than worrying about recognising every convention. The programme also includes Tsugaru shamisen music, offering a different kind of performance within the same evening. If a participatory element is offered, follow the host's invitation rather than assuming the stage is open to everyone.",
    rootedness:
      "The Namikiza programme places English rakugo in Dotonbori, a district closely connected with Osaka's performance culture. Its current listings name Sayohime and a shamisen contribution, while the performer's own calendar confirms the November show. This is a contemporary public introduction for an international audience, not a claim that all rakugo is performed in English or that one short evening represents the whole Kamigata tradition. The craft lies in how a small set of resources can carry a lively imagined scene.",
    shift:
      "Discover how little stage machinery a story needs when the performer controls attention.",
    humanReturn:
      "The next conversation or comic performance may reveal more to you through its pauses, changes of voice and small gestures.",
    responsibility:
      "Choose 10 November or 8 December 2026 from the current programme, both listed at 19:30. Do not reuse the older first-Tuesday schedule. Confirm availability, doors, age suitability and step-free access with the organiser. The roughly ninety-minute cultural programme is separate from the earlier residents' rakugo class and private workshops. Do not assume that every attendee performs. Recording and photographs require the host's permission. No later 2027 date is established by this guide, and a promotional portrait does not document the current theatre setup.",
    evidence:
      "Osaka Entertainment City lists the public 2026 dates and venue. The organiser and Sayohime's current schedule corroborate the November programme. EA has not attended, assessed the show or checked ticket availability directly.",
    duration: "Approximately 90 minutes from the booked 19:30 start",
    participation:
      "A booked audience place at an English-language performance programme",
    access:
      "Use the current Namikiza programme's reservation route for 1-1-6 Dotonbori. Confirm the date and payment with the organiser. No EA booking, hotel package or guaranteed stage participation is included.",
    guideReview: review(
      "public_programme",
      [
        [
          "Osaka Entertainment City: Namikiza 2026 programme",
          "https://osakaec.com/en/events/2026englishrakugo",
          "Current second-Tuesday dates and direct reservation route.",
        ],
        [
          "Sayohime: performance schedule",
          "https://sayohime-rakugo.com/schedule/",
          "Performer confirmation of the 10 November 2026 Namikiza evening.",
        ],
        [
          "Namikiza Experience: English Rakugo Osaka",
          "https://mk-kai.wixstudio.com/english-rakugo-osaka",
          "Organiser description, doors and approximate duration. Separate residents' class is not the public evening.",
        ],
      ],
      "2026-12-08",
    ),
  },
];
export const guideBatch60: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
