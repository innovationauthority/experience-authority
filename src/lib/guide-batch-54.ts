import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: "public_hospitality" | "public_programme" | "public_observation",
  sources: [string, string, string][],
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-21",
  reviewBy: "2027-01-18",
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "salzburg-furst-mozartkugel",
    slug: "unwrap-salzburg-one-chocolate-layer-at-a-time",
    title: "Unwrap Salzburg one chocolate layer at a time",
    field: "taste",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "salzburg",
    place: "Salzburg",
    summary:
      "Buy a Fürst Mozartkugel at Alter Markt and look past the famous wrapper to the small construction of chocolate, nougat and marzipan inside.",
    kernel:
      "Start with one piece rather than a gift box. Unwrap it somewhere appropriate and take a small bite that lets you see the layers. Notice the contrast between the chocolate shell and the softer centre, then try to distinguish the nut flavours without turning the snack into an examination. If you want to compare it with another Salzburg confectioner's version, make a separate ordinary purchase. Difference is more interesting here than declaring a winner. A familiar souvenir becomes something you have actually paid attention to.",
    rootedness:
      "Fürst is a longstanding Salzburg confectionery associated with the Mozartkugel, and its current product description identifies pistachio marzipan, nougat and dark chocolate. Salzburg's tourism office places its Alter Markt café within the old city's commercial life. The chocolate's musical name and recognisable packaging make an easy entry point, but neither establishes what Mozart ate. Competing origin stories and naming claims should not be flattened into a declaration that only one maker is legitimate.",
    shift:
      "A souvenir can tell you more when you taste its construction before carrying its name home.",
    humanReturn:
      "Remember one precise contrast in texture, rather than just another famous product you bought.",
    responsibility:
      "Ask about nuts, milk, soy and other ingredients or cross-contact before buying. A dark chocolate coating is not proof of a dairy-free product. Confirm the Alter Markt branch's current hours and whether you want counter purchase or café service. This is not a factory visit, demonstration or guided tasting. Ask before photographing staff or the counter. Confirm physical access directly if needed. Do not use the guide as an endorsement of contested invention or exclusivity claims.",
    evidence:
      "The confectioner's current site describes the product and its Salzburg locations. The city tourism listing corroborates the Alter Markt café. EA has not tasted the chocolate, audited production or adjudicated competing historical claims.",
    duration: "Allow 15 to 30 minutes, longer for café service",
    participation:
      "An ordinary confectionery purchase and self-directed tasting",
    access:
      "Choose Café-Konditorei Fürst at Alter Markt from the official locations list. Check service and ingredients directly. No reservation, staff explanation or production access is included in this guide.",
    guideReview: review("public_hospitality", [
      [
        "Fürst: chocolate and Salzburg locations",
        "https://www.original-mozartkugel.com/en/",
        "Product composition and current business context, not independent validation of historical marketing claims.",
      ],
      [
        "Salzburg Tourism: Fürst at Alter Markt",
        "https://www.salzburg.info/de/cafe-konditorei-fuerst-alter-markt_az_5001",
        "Official city listing for the specific café.",
      ],
    ]),
  },
  {
    id: "naples-scaturchio-sfogliatelle",
    slug: "compare-the-two-shells-of-naples-sfogliatella",
    title: "Compare the two shells of Naples' sfogliatella",
    field: "taste",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    place: "Naples",
    summary:
      "At Scaturchio, compare a ridged sfogliatella riccia with its shortcrust relative, the frolla. The useful discovery is in the shell, not a ranking of pastry shops.",
    kernel:
      "Check whether both versions are available and order only as much as you want to eat, sharing if that suits you. Take a bite of each before adding a drink or another sweet. The riccia's layered casing breaks differently from the frolla's more compact shortcrust. Look at the filling and ask the counter staff a simple question about the two preparations if service allows. A few attentive minutes can make the pastry's Italian names feel like descriptions rather than words memorised from a food list.",
    rootedness:
      "Scaturchio's own descriptions connect the two pastries through a ricotta and semolina filling while distinguishing their casings. Its Piazza San Domenico Maggiore address offers a specific Neapolitan setting for that comparison. This is one business within a much wider city pastry culture. The guide does not claim that its recipe represents every bakery, that every batch is warm from the oven, or that one taste settles a debate about the city's best sfogliatella.",
    shift:
      "Two versions of a familiar pastry can teach you how much of a food's identity is carried by texture.",
    humanReturn:
      "Leave able to describe which shell you liked and why, without borrowing somebody else's verdict.",
    responsibility:
      "Use the official Scaturchio address and product pages, not a similarly named shop or an unverified booking intermediary. Ask about wheat, milk, egg, fats, citrus and cross-contact. Do not assume the recipe is vegetarian or suitable for a food allergy. Confirm the day's stock, opening, payment and seating before making a special journey. Keep the counter and pavement clear. Staff are serving customers, not providing a private culinary lesson. Confirm step-free access if that matters for your visit.",
    evidence:
      "The operator publishes separate descriptions of riccia and frolla and identifies its Piazza San Domenico Maggiore premises. EA has not tasted the pastries, inspected preparation or independently assessed the shop's quality claims.",
    duration: "Allow 20 to 40 minutes, plus any queue",
    participation:
      "A self-directed comparison through ordinary pastry purchases",
    access:
      "Check the original Scaturchio premises at Piazza San Domenico Maggiore 19 and request the available riccia and frolla. A counter purchase is the access route. A workshop, table reservation or explanation in English is not promised.",
    guideReview: review("public_hospitality", [
      [
        "Scaturchio: sfogliatella riccia",
        "https://scaturchio.it/prodotti/sfogliatella-riccia/",
        "Operator's description distinguishes the layered casing and filling.",
      ],
      [
        "Scaturchio: sfogliatella frolla",
        "https://scaturchio.it/prodotti/sfogliatella-frolla/",
        "Specific second preparation for comparison. Both recipe sources are operator-published.",
      ],
      [
        "Scaturchio: locations and contact",
        "https://scaturchio.it/",
        "Current Piazza San Domenico Maggiore address.",
      ],
    ]),
  },
  {
    id: "athens-stani-yoghurt",
    slug: "begin-an-athens-morning-with-yoghurt-at-stani",
    title: "Begin an Athens morning with yoghurt at Stani",
    field: "taste",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "athens",
    place: "Athens, Omonia",
    summary:
      "Order yoghurt at Stani near Omonia and discover a dairy-shop breakfast that gives Athens a different flavour from the usual restaurant itinerary.",
    kernel:
      "Find the small dairy shop on Marikas Kotopouli and look at the day's yoghurt choices before ordering. Ask which milk each uses and what toppings are available. Taste a spoonful plain before mixing in honey or anything else. The thickness, tang and richness are easier to notice before sweetness takes over. Keep the visit modest: one bowl and a little attention are enough. You do not need a multi-stop food tour or a table full of dishes to meet a different part of the city's morning.",
    rootedness:
      "Stani's official history dates the business to 1931 and describes cow's and sheep's milk yoghurt. This is Athens, the city's visitor platform, identifies it as a surviving traditional dairy shop near Omonia. That specific form of everyday food service is the point. The guide is not about a supermarket category called Greek yoghurt, and it does not mistake a similarly named American dairy brand for this Athens address.",
    shift:
      "A city can become more particular through the ordinary breakfast it makes room for.",
    humanReturn:
      "Remember the difference between the yoghurt on its own and the same spoonful after the topping.",
    responsibility:
      "Confirm current choices, hours and service directly, particularly before an early visit. Milk is central to this experience. Ask about nuts, honey and cross-contact, and do not assume an allergy-safe or dairy-free alternative exists. A small shop may have limited seating and a busy counter. Follow staff instructions and avoid photographing other customers without permission. Check the entrance and seating arrangements if you need step-free access. The nearby square is a working city environment, not a private dining courtyard.",
    evidence:
      "The shop's own site provides its dairy history, products and address, while This is Athens separately identifies the venue and local context. EA has not tasted the current yoghurt, inspected its manufacture or confirmed every menu item on the day of your visit.",
    duration: "Allow 20 to 40 minutes",
    participation: "An ordinary dairy-shop breakfast or snack",
    access:
      "Go to Stani at 10 Marikas Kotopouli near Omonia, after checking current opening. Order from the available products. This guide does not include a reserved table, tasting menu, dairy tour or EA booking.",
    guideReview: review("public_hospitality", [
      [
        "Stani Athens: official dairy-shop site",
        "https://www.stani1931.com/en_index.html",
        "Athens business, milk types and address. Legacy site is not proof of today's stock.",
      ],
      [
        "This is Athens: Stani",
        "https://www.thisisathens.org/cafes-bakeries/stani",
        "City visitor platform corroborates the specific dairy shop.",
      ],
    ]),
  },
  {
    id: "ljubljana-tiporenesansa-letterpress",
    slug: "print-ljubljanas-alphabet-one-impression-at-a-time",
    title: "Print Ljubljana's alphabet one impression at a time",
    field: "make",
    country: "Slovenia",
    countrySlug: "slovenia",
    regionSlug: "ljubljana",
    place: "Ljubljana",
    summary:
      "At tipoRenesansa, use an old printing press to make a Slovenian alphabet poster and feel the physical work behind a line of type.",
    kernel:
      "Book the public poster workshop and let the printer introduce the equipment before you touch it. Follow the sequence from arranging the type to inking and making an impression. Look at the letters as objects with edges and weight, not just marks on a screen. Compare the first impression with the one you keep, noticing how pressure and ink affect the result. The poster goes home in a tube, but the more interesting souvenir is the memory of a page arriving through a series of deliberate movements.",
    rootedness:
      "tipoRenesansa is a working letterpress studio on Breg, beside Ljubljana's riverfront. The city tourism programme specifies a Slovenian alphabet poster, making language part of the material encounter. This is not a claim that every local publication is still printed this way. It is an introduction to a craft maintained and taught in the contemporary city, with a practitioner who can explain the tools rather than leaving them as attractive background scenery.",
    shift:
      "Letters become small pieces of physical design before they become something to read.",
    humanReturn:
      "Bring home a poster whose unevenness, if any, has a process you can explain.",
    responsibility:
      "The published public format is 90 minutes, for two to eight participants, normally on Mondays and Wednesdays at 17:00. Confirm the date and minimum group before paying. Slovenian and English are listed, but arrange any language or access needs directly. Follow the printer's safety instructions around moving parts and ink. Wear suitable clothing even when protection is provided. Ask about children's participation and photography. Do not assume private studio access outside a confirmed session or that every machine will be used.",
    evidence:
      "Visit Ljubljana publishes the specific activity, meeting point, duration, group size and languages. Slovenia's national tourism platform also identifies the city's printmaking experience. EA has not attended the class or assessed an individual instructor's teaching.",
    duration: "Published workshop approximately 90 minutes",
    participation: "A supervised letterpress poster workshop",
    access:
      "Reserve Print your own poster in an old print shop through the official Visit Ljubljana offer. Meet at tipoRenesansa, Breg 22, only after receiving confirmation. The included poster and tube do not imply a wider design course or private commission.",
    guideReview: review("public_programme", [
      [
        "Visit Ljubljana: letterpress poster workshop",
        "https://www.visitljubljana.com/en/visitors/tours-and-trips/print-your-own-poster-in-an-old-print-shop",
        "Specific public format, schedule, languages, group size and meeting point.",
      ],
      [
        "Slovenia Tourism: Ljubljana's creative experiences",
        "https://www.slovenia.info/en/stories/ljubljana-europe-s-best-city-destination-for-creativity-in-2026",
        "National visitor context for the city's contemporary creative workshops.",
      ],
    ]),
  },
  {
    id: "siem-reap-khmer-pottery-wheel",
    slug: "centre-the-clay-before-carving-it-in-siem-reap",
    title: "Centre the clay before carving it in Siem Reap",
    field: "make",
    country: "Cambodia",
    countrySlug: "cambodia",
    regionSlug: "siem-reap",
    place: "Siem Reap",
    summary:
      "At Khmer Ceramics, try the pottery wheel before adding Khmer kbach ornament. Plan the visit early enough to collect a fired piece the following evening.",
    kernel:
      "Watch the potter's demonstration, then concentrate on keeping the clay centred as the wheel turns. The class lets you attempt several pieces, so an awkward first wall is part of the learning rather than a failed souvenir. After throwing, follow the teacher's introduction to carving kbach ornament. Ask what the chosen pattern means and how it is constructed instead of assigning symbolism yourself. Select the piece you want fired and confirm when it can be collected before leaving the studio.",
    rootedness:
      "Khmer Ceramics teaches in Siem Reap while operating a ceramics business. Its public course combines wheel work with Cambodian ornamental vocabulary. The connection to place lies in learning from a local practitioner and being introduced to that vocabulary, not in claiming that your first bowl replicates an Angkor-period object. An introductory workshop can add a tactile counterpoint to looking at the region's architectural carving without pretending the two skills are identical.",
    shift:
      "An ornament becomes easier to appreciate once you have had to place a line on an uneven surface yourself.",
    humanReturn:
      "Keep a piece that records both your concentration and the teacher's help, not a certificate of mastery.",
    responsibility:
      "The current product is a 1 hour 45 minute class with five wheel attempts and one fired piece. Collection is the next day after 18:00, so do not book immediately before departure without arranging an alternative. Shipping costs extra, and hotel transfers are explicitly not included. Confirm language, age suitability, physical access and cancellation conditions before paying. Follow instructions around wheels, tools and wet floors. Do not handle the kiln. The operator's food-safety claim is not an independent EA material test.",
    evidence:
      "The current official course page specifies the activity, River Road address, firing timetable and exclusions. Its booking-information hub provides the operator's enquiry route. EA has not attended, inspected the kiln or verified individual finished pieces.",
    duration: "Published class 1 hour 45 minutes, with later collection",
    participation: "A supervised pottery-wheel and decoration class",
    access:
      "Book the Siem Reap Pottery Wheel Class at #0207 River Road, Treang Village, Slorkram. Confirm the chosen date and collection plan. Do not substitute a Phnom Penh mobile class or a quad-bike combination under the same business name.",
    guideReview: review("public_programme", [
      [
        "Khmer Ceramics: Siem Reap pottery-wheel class",
        "https://www.khmerceramics.com/shop/pottery-wheel-class-siem-reap/",
        "Current 1h45 format, five attempts, next-evening collection and no included transfers.",
      ],
      [
        "Khmer Ceramics: booking-information hub",
        "https://www.khmerceramics.com/homepage/customers-care/help-center-pottery-classes-activities/booking-information-activities/",
        "Operator enquiry context. Detailed inclusion claims come from the current product page, not unanswered FAQ headings.",
      ],
    ]),
  },
  {
    id: "mae-rim-poopoopaper-craft",
    slug: "follow-a-fibre-into-paper-in-mae-rim",
    title: "Follow a fibre into paper in Mae Rim",
    field: "make",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "chiang-mai",
    place: "Mae Rim, Chiang Mai area",
    summary:
      "See how cleaned elephant-dung fibres become paper at POOPOOPAPER Park, then choose a separately paid craft activity using the finished material.",
    kernel:
      "Join the guided process tour before choosing what to make. Follow the stages from collected material through cleaning, fibre preparation and sheet production, asking which parts visitors may safely try. Then move to the available DIY craft activity and work with the prepared paper. Its surface may be more interesting after you have seen what the makers start with. Keep the focus on the material transformation rather than the novelty of its name. The park's public format is a craft visit, not an elephant encounter.",
    rootedness:
      "The Mae Rim park presents a contemporary paper business within the wider Chiang Mai craft landscape. Its interpretive route connects the company's fibre process with the history of papermaking. That does not make every production claim independently verified or turn the method into an ancient local ritual. The value for a visitor is the visible sequence: an unlikely raw material is cleaned, processed and given another use, then becomes something you can handle and design with.",
    shift:
      "Waste can become a more precise question when you follow the actual process rather than stop at an eco label.",
    humanReturn:
      "Take away a small paper object and a clearer account of what happened before its blank surface appeared.",
    responsibility:
      "The guided visit and DIY activities are separate purchases. Do not assume a craft item, painting session or take-home sheet is included in the basic ticket. English and Thai guided tours are listed, with a separate Chinese booking option. Confirm the date, language, craft choice, children's suitability and physical access directly. Follow hygiene and handling instructions, and never collect or handle untreated material yourself. This guide does not certify environmental performance, supply-chain conditions or animal welfare. No elephant ride, feeding or animal contact is included.",
    evidence:
      "The official park description distinguishes its guided production route from extra-cost craft activities, and the live booking page lists language options. EA has not attended, tested the paper or independently audited the operator's environmental claims.",
    duration:
      "Guided tour approximately 40 minutes, plus the chosen craft activity",
    participation: "A process tour followed by an optional paid paper craft",
    access:
      "Use Elephant POOPOOPAPER Park's official booking page for its Mae Rim premises. Confirm a guided slot and the separate DIY arrangement before travelling from Chiang Mai. Transport and a particular finished object are not promised.",
    guideReview: review("public_programme", [
      [
        "Elephant POOPOOPAPER Park: visits and language options",
        "https://www.poopoopaperpark.com/book-online",
        "Current guided-tour booking options. DIY is not bundled into the basic tour.",
      ],
      [
        "Elephant POOPOOPAPER Park: process and DIY activities",
        "https://www.poopoopaperpark.com/aboutthepark",
        "Explains the production sequence and explicitly marks DIY and Art Studio as additional cost.",
      ],
    ]),
  },
  {
    id: "nantes-grand-elephant-ride",
    slug: "ride-a-moving-piece-of-nantes-shipyard-imagination",
    title: "Ride a moving piece of Nantes' shipyard imagination",
    field: "move",
    country: "France",
    countrySlug: "france",
    regionSlug: "nantes",
    place: "Nantes, Île de Nantes",
    summary:
      "Board the Grand Éléphant at Les Machines de l'île and watch a wooden and steel creature carry passengers through Nantes' former shipyard landscape.",
    kernel:
      "Choose a confirmed elephant departure and arrive at the indicated boarding point. Once aboard, look at the visible mechanism as well as the city outside. A leg that seems almost animal from the ground becomes a sequence of joints and controlled movements at close range. Listen to the machinist where you can, then notice how slowly the landscape passes. The ride is short enough to leave time to watch another departure from the public area, where the scale of what carried you becomes clearer.",
    rootedness:
      "Les Machines de l'île occupies a former industrial setting on the Loire. The Grand Éléphant is contemporary mechanical performance, made from wood and metal rather than a living animal. Its interest lies in the city's reuse of making, engineering and spectacle, not in a claim that this is an old local transport tradition. The official description gives a roughly 30-minute ride on one of several routes, with an elevated view over the former shipyards.",
    shift:
      "A familiar animal shape becomes a way to see engineering as movement rather than a static exhibit.",
    humanReturn:
      "Remember the moment you understood how one part of the machine helped another part move.",
    responsibility:
      "Operation depends on weather and maintenance. Check the date, departure and boarding arrangements before travelling. The terrace is reached by stairs, so discuss mobility needs directly rather than assuming every level is accessible. Children under 13 need accompaniment under the published admission rule. Follow the machinist's instructions and keep clear of moving machinery. Other attractions, including the gallery and carousel, have separate ticket arrangements. Do not interpret a general site pass as a guaranteed elephant seat or a single route as the only itinerary.",
    evidence:
      "The operator's elephant and ticket pages establish the mechanical ride, approximate duration, weather dependency and admission format. EA has not ridden the machine, inspected its operation or assessed an individual departure's accessibility.",
    duration: "Ride approximately 30 minutes, plus boarding time",
    participation: "A ticketed ride on a mechanical sculpture",
    access:
      "Book the Grand Éléphant through Les Machines de l'île's official ticketing or ask its same-day ticket office about remaining places. Use the stated meeting point at Parc des Chantiers. No onward transport, gallery admission or EA package is implied.",
    guideReview: review("public_programme", [
      [
        "Les Machines de l'île: Grand Éléphant",
        "https://www.lesmachines-nantes.fr/en/discover/the-grand-elephant/",
        "Mechanical construction, ride duration, stair access and weather dependency.",
      ],
      [
        "Les Machines de l'île: prices and ticket offices",
        "https://www.lesmachines-nantes.fr/en/practical/prices-ticket-offices/",
        "Specific ride booking and accompanying-adult conditions.",
      ],
    ]),
  },
  {
    id: "rotterdam-watertaxi-crossing",
    slug: "make-the-river-part-of-your-rotterdam-route",
    title: "Make the river part of your Rotterdam route",
    field: "move",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "rotterdam",
    place: "Rotterdam",
    summary:
      "Use a booked Watertaxi crossing between two official stops to connect places you actually want to visit, and let Rotterdam's river become part of the day.",
    kernel:
      "Open the current stop map and choose a destination on the other bank or farther along the water that fits your plans. Book the point-to-point journey rather than assuming the next boat is a public hop-on service. At the landing, check the boat and listen to the skipper's boarding instructions. During the crossing, look back at the shore you have left and ahead to the one you are approaching. The useful change in perspective comes from travelling between two real places, not from collecting a high-speed thrill.",
    rootedness:
      "Rotterdam's water separates and connects neighbourhoods, architecture and former dock areas. The Watertaxi network is a practical local transport option within that setting. It is distinct from the region's scheduled Waterbus ferries and from a narrated harbour sightseeing cruise. A short booked ride can therefore add a water-level perspective without pretending to explain the whole port or turning every journey into a specialist excursion.",
    shift:
      "A river stops being the backdrop to a city when it becomes the route between your next two stops.",
    humanReturn:
      "Remember how the skyline changed as you moved away from one bank and towards another.",
    responsibility:
      "Confirm the exact stop numbers, booking time, fare and passenger count in the operator's system. Boarding involves two steps down according to the FAQ. Folding wheelchairs and prams may be carried under stated conditions, while non-folding mobility equipment requires direct discussion. Do not infer step-free access from the presence of a pier. Weather, fog or ice can restrict service. Sit and secure belongings as instructed. Check child and assistance requirements directly. This is not a promise of gentle water, a fixed speed or suitability for everyone.",
    evidence:
      "The current operator FAQ explains booking, boarding, payment and weather limits. Its live landing map identifies the official stops. Rotterdam's visitor information distinguishes water transport options. EA has not taken this route or inspected a particular vessel.",
    duration: "Journey time depends on the booked pair of stops",
    participation: "A prearranged point-to-point water-taxi journey",
    access:
      "Select two stops on Watertaxi Rotterdam's official map and obtain a confirmed booking through its site, app or phone service. Plan onward walking and any return separately. Do not wait at an arbitrary quay or confuse the booking with a Waterbus ticket.",
    guideReview: review("public_programme", [
      [
        "Watertaxi Rotterdam: frequently asked questions",
        "https://www.watertaxirotterdam.nl/veelgestelde-vragen",
        "Current booking, steps, mobility-equipment and weather conditions.",
      ],
      [
        "Watertaxi Rotterdam: landing locations",
        "https://www.watertaxirotterdam.nl/steigerlocaties",
        "Official stop map for choosing a real point-to-point journey.",
      ],
      [
        "Rotterdam: travelling in the city",
        "https://www.rotterdam.info/en/visit/good-to-know/travelling-in-rotterdam",
        "Visitor context distinguishing water transport services.",
      ],
    ]),
  },
  {
    id: "singapore-henderson-waves-walk",
    slug: "walk-the-ribs-of-singapores-henderson-waves",
    title: "Walk the ribs of Singapore's Henderson Waves",
    field: "move",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Southern Ridges",
    summary:
      "Cross Henderson Waves in daylight and pause inside its curved ribs. Plan the approach using NParks' current notices, not an old promise of an uninterrupted Southern Ridges walk.",
    kernel:
      "Choose a practical approach from the current park map and give the bridge its own short walk. As you cross, notice how the curved structure alternates between open outlook and more enclosed resting space. Stop in an alcove without blocking the path and look at the relationship between the timber deck, the road below and the surrounding trees. You can turn back rather than complete a long trail. A short, deliberate crossing is enough to understand why a pedestrian connection can become somewhere to spend time.",
    rootedness:
      "NParks identifies Henderson Waves as a 274-metre pedestrian bridge connecting Mount Faber and Telok Blangah Hill. It belongs to the Southern Ridges, a network that links parks through an urban landscape. The experience is not wilderness isolation. Road noise, skyline and planted or regenerating greenery remain part of it. Seeing those layers together makes the bridge more interesting than treating it only as a recognisable shape in a photograph.",
    shift:
      "A bridge can do more than get you across when its structure gives you places to stop.",
    humanReturn:
      "Remember a small change in shade, enclosure or view that you would have missed by rushing through.",
    responsibility:
      "At the 21 October check, a footpath below the Therapeutic Garden was closed for slope works until the expected March 2028 completion. Sections of Forest Walk were unlit overnight during works scheduled through 30 November 2026. These notices do not establish a bridge closure, but they matter to the approach. Check the latest map and choose daylight. NParks lists no wheelchair access for Telok Blangah Hill Park. Expect slopes or steps, tropical heat and rain. Do not continue into lightning or on closed paths, and never feed wildlife.",
    evidence:
      "NParks' bridge and park pages establish the structure, setting, access limits and current works notices. EA has not walked the approaches or verified conditions after the source check. A full Southern Ridges route is not certified here.",
    duration: "Allow 45 to 90 minutes including your chosen approach",
    participation: "A self-directed public-park walk",
    access:
      "Use the current NParks Telok Blangah Hill map to plan an open approach and return. No ticket or guided tour is required for the public bridge. Check weather, closure notices and whether the terrain suits your group before setting out.",
    guideReview: review("public_observation", [
      [
        "NParks: Henderson Waves",
        "https://www.nparks.gov.sg/visit/parks/telok-blangah-hill-park/special-features/henderson-waves",
        "Bridge length, connection and structural features.",
      ],
      [
        "NParks: Telok Blangah Hill Park",
        "https://www.nparks.gov.sg/visit/parks/telok-blangah-hill-park",
        "Current slope-work and lighting notices, park map and no-wheelchair-access statement.",
      ],
    ]),
  },
  {
    id: "athens-kotsanas-mechanisms",
    slug: "follow-an-ancient-idea-through-its-gears-in-athens",
    title: "Follow an ancient idea through its gears in Athens",
    field: "learn",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "athens",
    place: "Athens, Kolonaki",
    summary:
      "At the Kotsanas Museum, spend time with reconstructed Greek mechanisms and ask how a practical problem becomes a sequence of moving parts.",
    kernel:
      "Choose one mechanism rather than trying to remember every invention in the room. Read its explanation, identify the input and follow what happens next. If a demonstration is available, watch it once without filming and ask the member of staff which parts you may operate. A water clock or an astronomical mechanism offers a different sort of encounter with antiquity from looking at a finished statue. You are following a proposed working logic, not simply admiring an old-looking object.",
    rootedness:
      "The Athens museum presents Kostas Kotsanas's reconstructions of ancient Greek technologies, developed through research and model-making. These are modern interpretations and working models, not a room of intact ancient machines. That distinction improves the visit: it invites questions about evidence, missing information and how a description or surviving fragment can be translated into a functioning object. The museum sits within contemporary Athens, offering another way into the city's relationship with the ancient world.",
    shift:
      "An invention becomes more legible when you can trace what each part contributes instead of memorising its name.",
    humanReturn:
      "Leave with one mechanism you could explain simply, including what is reconstructed rather than original.",
    responsibility:
      "The official site currently lists daily opening, but confirm hours, ticketing and any demonstration language before travelling. Not every model is necessarily available to touch, and a general admission ticket does not guarantee a private guided session. Follow staff instructions and avoid forcing moving parts. Ask about access needs and age suitability directly. Treat claims about historical firsts as interpretations requiring evidence, not as facts established by the promotional description. This guide focuses on everyday technology and observation, not weapon demonstrations.",
    evidence:
      "The museum's Athens page and general visitor information establish its public premises and reconstruction-based collection. EA has not inspected the research behind each model, attended a demonstration or independently validated every historical attribution.",
    duration: "Allow 60 to 90 minutes, longer for a booked activity",
    participation:
      "A museum visit with permitted demonstrations or interaction",
    access:
      "Use the Athens location at Pindarou 6 and Akademias, not another Kotsanas museum in Greece. Check the current admission offer and ask in advance if an English explanation or a specific accessible arrangement is essential. Ordinary admission is distinct from a workshop or private tour.",
    guideReview: review("public_programme", [
      [
        "Kotsanas Museum: Athens",
        "https://kotsanas.com/athens/",
        "Specific Athens premises and public collection context.",
      ],
      [
        "Kotsanas Museum: visitor information and reconstructed technologies",
        "https://kotsanas.com/",
        "Current opening guidance and explanation of the model-based collection. Historical claims remain attributed to the museum.",
      ],
    ]),
  },
  {
    id: "zagreb-broken-relationships",
    slug: "let-an-ordinary-object-tell-its-story-in-zagreb",
    title: "Let an ordinary object tell its story in Zagreb",
    field: "learn",
    country: "Croatia",
    countrySlug: "croatia",
    regionSlug: "zagreb",
    place: "Zagreb, Upper Town",
    summary:
      "At the Museum of Broken Relationships, read the story beside an ordinary object and notice how a private memory changes what you think you are looking at.",
    kernel:
      "Give a small number of objects enough time rather than reading the whole museum at the same pace. Look first, then read the accompanying account, and look again. Notice what the story adds that the object could never show on its own. Some entries may be funny, others uncomfortable or sad. You can move past any that do not suit you. The experience asks for considerate attention, not a public confession or a hunt for the most dramatic story in the room.",
    rootedness:
      "The museum has a permanent home in Zagreb's Upper Town and a collection built around donated objects and their accompanying accounts of relationships. The objects come from beyond Croatia, so this is not a claim to reveal a single national way of loving or grieving. Its local significance is the existence of this particular public institution in the city, inviting personal narratives into a museum format usually associated with objects valued for age, rarity or craftsmanship.",
    shift:
      "An unremarkable thing can become difficult to forget once you know what somebody attached to it.",
    humanReturn:
      "Leave with a more patient way of looking at ordinary possessions, without turning another person's story into your own entertainment.",
    responsibility:
      "The museum includes emotionally difficult and sometimes adult material. Choose it according to your own comfort and the needs of accompanying children. Skip any account you do not wish to read. Do not copy personal letters or identifiable stories into social posts without considering the museum's rules and the people involved. Donating an object is not part of admission and is never expected. Confirm step-free arrangements directly. This is a museum visit, not counselling, a wellbeing treatment or a promise of emotional closure.",
    evidence:
      "The museum's current Zagreb visitor page establishes its public location, seasonal hours and admission route. Its wider visit page distinguishes the Zagreb venue from other presentations. EA has not visited the current display or independently verified individual donors' narratives.",
    duration: "Allow 60 to 90 minutes, at your own pace",
    participation: "An independently ticketed museum visit",
    access:
      "Check the Zagreb venue at Sv. Ćirila i Metoda 2. The published winter schedule is 09:00 to 21:00, with last entry 30 minutes before closing, subject to current exceptions. The museum lists closures on All Saints' Day, Christmas Eve, Christmas Day, New Year's Day and Easter. Verify today's arrangements before travelling. No donation or personal disclosure is required.",
    guideReview: review("public_programme", [
      [
        "Museum of Broken Relationships: Zagreb visitor details",
        "https://brokenships.com/visit/museum-details/zagreb",
        "Specific location, winter hours and public admission.",
      ],
      [
        "Museum of Broken Relationships: visit",
        "https://brokenships.com/visit",
        "Distinguishes permanent venues and exhibitions. Donor accounts are museum-presented narratives.",
      ],
    ]),
  },
  {
    id: "lyon-miniature-interiors",
    slug: "look-for-a-whole-room-in-a-lyon-miniature",
    title: "Look for a whole room in a Lyon miniature",
    field: "learn",
    country: "France",
    countrySlug: "france",
    regionSlug: "lyon",
    place: "Lyon, Vieux Lyon",
    summary:
      "At Musée Cinéma et Miniature, slow down in front of a tiny interior and see how light, wear and scale can make a model feel like a place somebody has just left.",
    kernel:
      "Head for the miniature collection and choose one scene that holds your attention. Look for a detail that seems incidental: the edge of a table, a stain, a doorway or the way light falls across a wall. Then step back enough to see how it supports the whole room. Resist the temptation to photograph every scene before looking at any of them. A miniature rewards a change in viewing distance, because a convincing atmosphere is built from many decisions that are easy to miss individually.",
    rootedness:
      "The museum occupies the Maison des Avocats in Vieux Lyon and combines film-related collections with miniature art. Its own material identifies Dan Ohlmann's scenes, including a Lyon bouchon, alongside work by other artists. The city of Lyon independently describes the miniature interiors and their attention to scale. The guide focuses on this particular way of looking, not on a claim that every scene depicts Lyon or that the miniature floor is a separate museum ticket.",
    shift:
      "Realism becomes a collection of deliberate choices rather than a trick you either believe or dismiss.",
    humanReturn:
      "Notice a real doorway or restaurant interior afterwards and recognise details you previously treated as background.",
    responsibility:
      "Check current collection access before booking. The wider museum includes film creatures and material that may frighten some children, so ask staff about a suitable route. Tuesday mornings are normally closed outside school holidays. The operator lists a lift except to the basement, but confirm the route you need. No flash or tripods are allowed under its visitor rules. Respect barriers and never touch a miniature. A ticket to the wider collection does not guarantee a specific model remains on display.",
    evidence:
      "The museum's current exhibition page and the City of Lyon listing both identify the miniature collection, address and opening pattern. EA has not inspected the current hanging, compared model dimensions or verified every artwork attribution on site.",
    duration:
      "Allow around 90 minutes for the wider museum, with time reserved for miniatures",
    participation:
      "A self-directed museum visit focused on miniature interiors",
    access:
      "Use the official museum booking route for 60 rue Saint-Jean. Confirm the date, available time and miniature-floor access. This is not a making workshop, behind-the-scenes studio visit or separate miniature-only admission offer.",
    guideReview: review("public_programme", [
      [
        "Musée Cinéma et Miniature: exhibitions and practical information",
        "https://expositions.museeminiatureetcinema.fr/en/",
        "Miniature collection, current booking, Tuesday closure and visitor restrictions.",
      ],
      [
        "City of Lyon: Musée Cinéma et Miniature",
        "https://www.lyon.fr/lieu/musees/musee-cinema-et-miniature",
        "Separate municipal confirmation of the collection and address.",
      ],
    ]),
  },
  {
    id: "boulogne-albert-kahn-gardens",
    slug: "change-landscapes-without-leaving-albert-kahns-garden",
    title: "Change landscapes without leaving Albert Kahn's garden",
    field: "restore",
    country: "France",
    countrySlug: "france",
    regionSlug: "boulogne-billancourt",
    place: "Boulogne-Billancourt, Paris area",
    summary:
      "Walk between the planted landscape scenes at Musée Albert-Kahn and notice how a small change in path, water or planting can alter the feeling of a place.",
    kernel:
      "Choose a modest circuit rather than trying to collect every named garden area. Pause where one planting scheme gives way to another and look back as well as forward. A bridge, a clipped edge or a change in tree cover may do more to change the mood than a large monument would. Take a seat where permitted and let one view settle before moving on. The garden is part of a museum visit, but it can also be the part of the day in which you stop asking how much remains to be seen.",
    rootedness:
      "Albert Kahn assembled land at Boulogne over several decades and developed a garden of contrasting landscape scenes. The departmental museum describes French, English and Japanese-inspired areas alongside wooded settings. These are designed interpretations within one French garden, not replacements for the places their names evoke. The useful encounter is with coexistence and transitions: different planting languages occupy neighbouring spaces without becoming a single uniform landscape.",
    shift:
      "You can become more attentive to a place by noticing where its atmosphere changes, not only where its landmarks stand.",
    humanReturn:
      "Remember one threshold between two garden scenes and how your pace changed as you crossed it.",
    responsibility:
      "The museum normally closes on Mondays and annually from 1 to 20 January, as well as 1 May and 25 December. Confirm the current calendar before travelling. In winter the site lists opening until 18:00, with the museum and garden closing to visitors at 17:30. Some paths or scenes may be unavailable. Do not pick plants, feed animals, picnic or treat the garden as a cycle route. Weekend stroller restrictions may require a carrier. Ask about accessible paths and current surface conditions rather than assuming the entire garden is step-free.",
    evidence:
      "The museum's practical page gives seasonal hours, annual closures and visitor rules. Its collection description explains the garden's development and distinct scenes. EA has not walked the current paths or verified flowering, foliage or weather conditions for a future visit.",
    duration:
      "Allow 60 to 90 minutes for the garden, longer for indoor collections",
    participation: "A self-paced visit to a ticketed museum garden",
    access:
      "Book through Musée Albert-Kahn for its Boulogne-Billancourt site, outside central Paris. Confirm admission and garden access for your date, especially weekends and free-entry days. Travel from Paris is a separate part of the plan, not an included transfer.",
    guideReview: review("public_programme", [
      [
        "Musée Albert-Kahn: useful information",
        "https://albert-kahn.hauts-de-seine.fr/en/visit/useful-information",
        "Seasonal closing times, annual January closure and garden rules.",
      ],
      [
        "Musée Albert-Kahn: garden collection",
        "https://albert-kahn.hauts-de-seine.fr/les-collections/presentation/jardin",
        "Development of the designed landscape scenes and their context.",
      ],
    ]),
  },
  {
    id: "dublin-iveagh-gardens-pause",
    slug: "leave-a-little-of-dublin-unplanned-in-iveagh-gardens",
    title: "Leave a little of Dublin unplanned in Iveagh Gardens",
    field: "restore",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    place: "Dublin",
    summary:
      "Use Iveagh Gardens for a short, unhurried pause among sunken lawns and garden features, without turning every green space into another attraction to complete.",
    kernel:
      "Check the gate's closing time as you enter, then choose a small part of the garden to spend time in. Follow a path to a lawn edge or a bench and notice how the space is contained by trees and the surrounding city. If the maze or a water feature is open, let it add a small detour rather than a checklist. A book, a quiet conversation or simply watching the light can be enough. You do not have to earn this stop by fitting in another museum first.",
    rootedness:
      "Heritage Ireland traces the gardens' design to Ninian Niven and the 1865 exhibition landscape. The surviving mix includes sunken lawns, formal features and more enclosed planting. Visit Dublin places the garden within the city centre, near the National Concert Hall. It is a public urban space with a layered design history, not a secret wilderness or a guarantee of solitude. Its value lies partly in how little special equipment or preparation an ordinary visit needs.",
    shift:
      "A pause can be a deliberate part of a journey rather than the empty space between more important plans.",
    humanReturn:
      "Leave with one quiet observation that belongs to that hour, even if you took no photograph.",
    responsibility:
      "Opening and closing vary seasonally, with much earlier winter gates. The current official calendar changes again in late October and November, so do not rely on a summer closing time. Christmas Day and St Patrick's Day closures are listed. Weather, events and state business can also affect access. Check the current entrance and accessible route, particularly around Hatch Street and Clonmel Street. Stay on permitted paths, supervise children near features and leave plants and wildlife alone. No therapeutic or stress-reduction outcome is promised.",
    evidence:
      "Heritage Ireland publishes the garden's history, facilities and detailed seasonal calendar. Visit Dublin separately identifies the public garden. EA has not inspected the current gates, water features or event setup, and does not guarantee a quiet or uncrowded visit.",
    duration: "Allow 30 to 60 minutes within the day's opening window",
    participation: "A self-directed public-garden pause",
    access:
      "Check Heritage Ireland's current Iveagh Gardens notices and choose an open gate. Ordinary garden admission is free, but special events may change access. There is no booked activity or reserved seating attached to this guide.",
    guideReview: review("public_observation", [
      [
        "Heritage Ireland: Iveagh Gardens",
        "https://heritageireland.ie/places-to-visit/the-iveagh-gardens/",
        "Managing authority's history, access details and date-specific seasonal gate times.",
      ],
      [
        "Visit Dublin: Iveagh Gardens",
        "https://www.visitdublin.com/iveagh-gardens",
        "Destination context for the public city-centre garden.",
      ],
    ]),
  },
  {
    id: "nacka-hellasgarden-sauna",
    slug: "give-a-stockholm-day-a-sauna-pause-at-hellasgarden",
    title: "Give a Stockholm day a sauna pause at Hellasgården",
    field: "restore",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "nacka",
    place: "Hellasgården, Nacka, Stockholm area",
    summary:
      "Book a public sauna session at Hellasgården and leave space for a slower lakeside visit. A maintenance closure is announced for 26 to 28 October 2026, so confirm reopening before planning those dates.",
    kernel:
      "Choose a session that suits you and arrive with enough time to change without rushing. Shower first, take a towel to sit on and let the posted rules guide the visit. Use the sauna in short periods that feel comfortable, stepping out whenever you need to. A pause outside can be enough of a contrast. You do not need to enter cold water or turn the visit into an endurance test. Afterwards, give yourself time to dress and leave within the booking rather than treating the whole slot as heat exposure.",
    rootedness:
      "Hellasgården is a recreation centre in Nacka, outside central Stockholm, with a sauna beside the wider Källtorpssjön landscape. Visit Stockholm identifies it as a place for ordinary outdoor recreation, not a luxury hotel spa. The experience combines a public shared facility with proximity to the city and nature. This guide focuses on the sauna session itself, not on winter swimming, a private ceremony or a claim that one venue defines Swedish bathing culture.",
    shift:
      "A memorable pause can be modest and shared, without needing a treatment menu or a physical challenge.",
    humanReturn:
      "Remember the change of pace between the city journey, the changing room and the lakeside air.",
    responsibility:
      "The operator announces heat-pump work from 26 October until the afternoon of 28 October 2026. Another line contains a conflicting month, so confirm actual reopening directly. Sessions are normally 90 minutes including changing, booked online. Check whether the slot is separated or mixed and what clothing rules apply. Shower and use a sitting towel. Do not bring alcohol, food or glass. Heat is not suitable for everyone, and no health benefit is promised. Cold-water swimming is optional and outside this guide's activity. Ask about age rules and physical access before booking.",
    evidence:
      "The operator's sauna page provides booking conditions, hygiene rules and the maintenance notice. Visit Stockholm separately establishes the recreation centre's Nacka location. EA has not used the sauna, verified completion of the works or assessed water safety.",
    duration: "Published booking 90 minutes including changing",
    participation: "A booked public sauna session, without a required swim",
    access:
      "Use Hellasgården's official sauna booking link and confirm the date, session type and current operation. Plan transport to Nacka separately. Do not substitute private sauna hire, an aufguss event or an ice-swimming activity for the regular session described here.",
    guideReview: review("public_hospitality", [
      [
        "Hellasgården: sauna booking and rules",
        "https://hellasgarden.se/en/aktiviteter/bastu/",
        "90-minute booking, shared-facility rules and explicit 26–28 October maintenance warning.",
      ],
      [
        "Visit Stockholm: Hellasgården",
        "https://www.visitstockholm.com/o/hellasgarden/",
        "Separate city visitor context and Nacka location, not confirmation of reopening.",
      ],
    ]),
  },
  {
    id: "london-wigmore-lunchtime",
    slug: "give-londons-lunch-hour-to-live-chamber-music",
    title: "Give London's lunch hour to live chamber music",
    field: "gather",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, Marylebone",
    summary:
      "Choose a dated lunchtime concert at Wigmore Hall and spend an hour listening closely, with the rest of London still waiting outside afterwards.",
    kernel:
      "Read a short programme description and choose something that makes you curious, not only a composer you already know. Arrive before the doors close and let the first few minutes establish the scale of the room. Follow a phrase from one instrument to another, or notice what a solo player does with silence. You do not need a technical vocabulary to listen carefully. Stay with the whole performance and let the final sound finish before joining the applause. The interval in your day is the experience, not just a convenient way to see a famous hall.",
    rootedness:
      "Wigmore Hall's current season includes regular lunchtime chamber music and recitals. Its 2026/27 announcement identifies the Monday BBC Radio 3 series, while other promoters also present daytime programmes. The official autumn brochure lists Richard Goode at 13:00 on 2 November, and YCAT separately confirms a guitar recital on 3 November. These are examples of a living calendar, not evidence that the same performer or programme repeats every week.",
    shift:
      "Live music can belong in the middle of an ordinary day rather than require an entire formal evening.",
    humanReturn:
      "Take one musical phrase or moment of shared silence back into the street with you.",
    responsibility:
      "Book a specific concert, not a generic hall visit. Check its exact start, duration, age guidance, availability and any interval. Daytime does not mean free admission or a relaxed-performance format. Ask the box office about wheelchair positions, hearing support and companion arrangements. Arrive early enough for admission and follow the event's rules on phones, recording and late seating. A printed season brochure is not live inventory, and artists or programmes can change. Do not assume every Monday or holiday has a concert.",
    evidence:
      "The official 2026/27 season material and autumn brochure establish current lunchtime programming. YCAT confirms a separate dated public recital. Direct retrieval of some Wigmore web pages was restricted. EA has not attended these performances or confirmed remaining seats.",
    duration:
      "Many lunchtime programmes are around an hour. Check your concert",
    participation: "Listening at a booked public concert",
    access:
      "Select a dated event through Wigmore Hall's official calendar and box office for 36 Wigmore Street. Use the programme to choose, then confirm availability directly. A concert ticket does not include a backstage tour, meal or meeting with the musicians. No EA booking or reservation is included.",
    guideReview: review("public_programme", [
      [
        "Wigmore Hall: 2026/27 autumn programme",
        "https://media.wigmore-hall.org.uk/documents/P1_2627_digital_v2.pdf",
        "Official dated programme, including 2 November 2026 at 13:00. Not live seat availability.",
      ],
      [
        "Wigmore Hall: 2026/27 season announcement",
        "https://media.wigmore-hall.org.uk/documents/Wigmore_Hall_-_2026.27_Season_Announcement_Press_Release.pdf",
        "Official confirmation of the Monday lunchtime series.",
      ],
      [
        "YCAT: Samrat Majumder at Wigmore Hall",
        "https://www.ycat.co.uk/event/wigmore-lunchtime-concert-series-samrat-majumder",
        "Promoter confirms a separate 3 November 2026 recital from 13:00 to 14:00.",
      ],
    ]),
  },
  {
    id: "vienna-staatsoper-standing",
    slug: "join-viennas-opera-audience-from-a-standing-place",
    title: "Join Vienna's opera audience from a standing place",
    field: "gather",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    place: "Vienna",
    summary:
      "Choose a standing-room ticket at the Vienna State Opera if the format suits you, and make the performance itself the reason to enter a familiar city landmark.",
    kernel:
      "Start with the opera or ballet on the calendar, not just the building. Read a brief synopsis if it helps and check how long the performance lasts before deciding on standing room. Once inside, find the exact area on your ticket and follow staff guidance. Let the orchestra, stage and audience become one event rather than trying to photograph the interior. If you are new to opera, following one voice or one recurring musical idea can be a more useful beginning than understanding every detail at once.",
    rootedness:
      "The Vienna State Opera offers standing places as a distinct public ticket category. The current ticket information lists 435 such places and day-of online sales beginning at 10:00. This provides one practical route into a working opera house, not merely a tour of its architecture. The format is part of the venue's audience life, but it is not the right choice for everyone and does not make seated visitors less committed listeners.",
    shift:
      "A landmark becomes more than a façade when you give time to the activity it was built to hold.",
    humanReturn:
      "Remember the sound and the shared attention of a particular performance, rather than only the red and gold of the room.",
    responsibility:
      "Standing means spending substantial time on your feet, and sightlines vary by location. Choose a seated ticket if that better meets your needs. Confirm the current release procedure, admission time, age guidance and duration for the exact performance. Published cardholder discounts are not general prices. Do not rely on old queue advice or an outdated number of standing places. Subtitle languages and visibility depend on the event and position. Follow cloakroom, phone, photography and late-entry rules. A sold-out performance is not made available by this guide.",
    evidence:
      "The opera house's current ticket page establishes standing-room availability and sales timing, while its calendar identifies actual performances. EA has not attended the chosen production, tested a particular view or confirmed that tickets remain available.",
    duration: "Check the full performance duration, including intervals",
    participation:
      "Attendance at a public opera or ballet performance from a standing place",
    access:
      "Use the Vienna State Opera's official calendar and standing-ticket instructions. Online standing sales currently begin at 10:00 on the performance day, subject to availability. Confirm the rule before relying on it. This is not a reserved seat, guided tour or EA booking.",
    guideReview: review("public_programme", [
      [
        "Vienna State Opera: ticket information",
        "https://www.wiener-staatsoper.at/en/ticket-info/",
        "Current standing-ticket category and day-of sales timing. Cardholder concessions are separate.",
      ],
      [
        "Vienna State Opera: calendar",
        "https://www.wiener-staatsoper.at/en/calendar/",
        "Dated performances and programme-specific details.",
      ],
    ]),
  },
  {
    id: "sydney-utzon-chamber-music",
    slug: "hear-sydneys-opera-house-at-a-more-intimate-scale",
    title: "Hear Sydney's Opera House at a more intimate scale",
    field: "gather",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    place: "Sydney, Bennelong Point",
    summary:
      "Choose a concert in the Utzon Music series and enter a smaller listening room inside one of the world's most familiar buildings.",
    kernel:
      "Look through the dated Utzon Music programme and choose the sound that interests you, whether or not you recognise the performers. Book that event and arrive with time for security and finding the room. Once seated, notice how a small group of musicians shares attention: a breath before an entrance, a glance, a sound allowed to fade. The harbour and the building may have brought you here, but they do not have to remain the main subject. Let the performance give the address a different scale.",
    rootedness:
      "The Utzon Room is one of the Opera House's smaller venues, and the current series brings chamber music and other acoustic traditions into that setting. The published programme includes an Australian Guitar Quartet event in November 2026 and Quartet X in February 2027. Those are distinct performances, not a permanent daily attraction. The local connection is to a working Sydney cultural institution and its changing programme, rather than a claim that every musical tradition presented originated in Australia.",
    shift:
      "An internationally familiar building can still contain a form of attention you did not expect from its exterior.",
    humanReturn:
      "Leave with a particular sound attached to the Opera House, not only its silhouette.",
    responsibility:
      "Choose a specific date and check duration, repertoire, age guidance and remaining tickets. Children aged 15 and under require an accompanying adult under the cited event conditions. Ask the box office for wheelchair, companion or other access arrangements. Security screening and bag restrictions apply, and late admission may be limited. Filming and photography inside a performance are not permitted unless expressly authorised. The room photograph is architectural context, not proof of your event's seating or view. No backstage access, artist meeting or meal is included.",
    evidence:
      "The Opera House publishes the venue description and dated Utzon Music programmes for both 2026 and 2027. EA has not attended these performances, assessed their acoustics or verified remaining seats. A series announcement is not a daily operating schedule.",
    duration:
      "Event-specific. The published Quartet X programme is approximately 70 minutes",
    participation:
      "Listening at a separately ticketed public chamber performance",
    access:
      "Book a specific dated concert through Sydney Opera House's official event page and confirm that the venue is the Utzon Room. Follow the ticket's entry instructions at Bennelong Point and allow time for screening. A general building tour does not provide concert admission.",
    guideReview: review("public_programme", [
      [
        "Sydney Opera House: Utzon Room",
        "https://www.sydneyoperahouse.com/visit/our-venues/utzon-room",
        "Specific smaller venue and location context.",
      ],
      [
        "Sydney Opera House: Australian Guitar Quartet, 1 November 2026",
        "https://www.sydneyoperahouse.com/utzon-music-2026/australian-guitar-quartet",
        "Current 2026 programme and visitor conditions.",
      ],
      [
        "Sydney Opera House: Quartet X, 7 February 2027",
        "https://www.sydneyoperahouse.com/utzon-music/quartet-x",
        "Published 2027 programme, duration and access route, not a recurring daily show.",
      ],
    ]),
  },
];
export const guideBatch54: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
