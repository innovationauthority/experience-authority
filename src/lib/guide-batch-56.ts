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
    id: "brussels-jourdan-frites",
    slug: "make-a-brussels-pause-out-of-a-portion-of-frites",
    title: "Make a Brussels pause out of a portion of frites",
    field: "taste",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "brussels",
    place: "Brussels, Place Jourdan",
    summary:
      "At Maison Antoine on Place Jourdan, choose a portion of frites and a sauce, then give an ordinary neighbourhood food stop your full attention.",
    kernel:
      "Read the counter before joining the ordering rhythm. Choose a manageable portion and ask about a sauce you do not recognise rather than ordering several just for a photograph. Begin with an unsauced fry and notice its surface and centre, then try the same bite with your choice. The comparison is small but useful. Find a place where eating is permitted and keep the square's paths clear. If you want to sit at a nearby café, ask that business whether outside food is welcome and what you need to order. A neighbourhood is not a food court with interchangeable seats.",
    rootedness:
      "Maison Antoine's own history traces the family business on Place Jourdan to 1948. That establishes a particular Brussels address and continuity of trade, not a verdict about the origin of fried potatoes or the city's best portion. Frites work here as something bought, carried and eaten between other things. The square matters as much as the product. Looking at how a simple purchase fits into public space can be a more revealing introduction than chasing an invented secret menu.",
    shift:
      "A familiar food becomes a way to notice how a neighbourhood shares its space.",
    humanReturn:
      "Leave with a sauce you can name, a texture you remember and a useful pause in your Brussels day.",
    responsibility:
      "Check current opening directly before travelling. Queues, weather and café policies affect the visit. Ask about frying fat, ingredients, allergens and cross-contact rather than assuming potatoes make the order vegetarian, vegan or gluten-free. Sauce may contain egg, dairy or mustard. Dispose of packaging properly and do not photograph staff or customers at close range without consent. Seating, toilets and a sheltered place to eat are not guaranteed by a takeaway purchase. Confirm step-free ordering arrangements if needed.",
    evidence:
      "The operator publishes its Place Jourdan location, opening and family history. EA has not tasted a current serving, inspected the fryer or assessed the neighbouring cafés. The photograph records food from this business, not today's portion or menu.",
    duration: "Allow 20 to 40 minutes, plus the queue",
    participation: "An ordinary takeaway purchase and self-directed tasting",
    access:
      "Use Maison Antoine's official information for the Place Jourdan kiosk. Order and pay directly. There is no hosted tasting, reserved café table or priority queue attached to this guide. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Maison Antoine: location and opening",
        "https://www.maisonantoine.be/index.php",
        "Primary listing for the public Place Jourdan kiosk.",
      ],
      [
        "Maison Antoine: family history",
        "https://maisonantoine.be/index.php/notre-histoire",
        "Operator account of the business from 1948. No comparative quality ranking is adopted.",
      ],
    ]),
  },
  {
    id: "istanbul-karakoy-baklava",
    slug: "compare-baklavas-layers-at-a-karakoy-counter",
    title: "Compare baklava's layers at a Karaköy counter",
    field: "taste",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    place: "Istanbul, Karaköy",
    summary:
      "At Karaköy Güllüoğlu, order a small selection and pay attention to the difference between pastry, nuts and syrup. A familiar sweet becomes more legible.",
    kernel:
      "Choose two forms rather than a large assortment. Ask which contains pistachio and which walnut, then compare the way each is folded or rolled before tasting. Take a small first bite without adding ice cream or another topping. Notice where the layers separate and how the filling changes the texture. Tea is an optional accompaniment, not a compulsory ritual. Follow the counter's current ordering and payment system, and let staff serve the queue before asking longer questions. The aim is to understand your own preference, not to rehearse a claim about the world's best baklava.",
    rootedness:
      "The family's published history connects its craft with Gaziantep and its business with Istanbul's Karaköy. The present shop is on Kemankeş Caddesi, not the old premises beneath the car park that still appear in photographs and travel listings. Baklava belongs to a wider geography of layered pastries and overlapping food histories. This guide offers one accessible counter at which to look closely, without assigning a single national origin or suggesting that one business represents every local preference.",
    shift:
      "Sweetness stops being the whole story when you can distinguish the structure underneath it.",
    humanReturn:
      "Take away a preference you discovered for yourself and a better question to ask at the next pastry counter.",
    responsibility:
      "Use the current shop address, Kemankeş Caddesi 67, and confirm hours before visiting. Do not confuse it with the production address or another business using the Güllüoğlu name. Ask about wheat, nuts, dairy, egg and cross-contact. Special product labels are not an EA guarantee of suitability for dietary or medical needs. Confirm step-free entry and seating directly. Photography should not obstruct service or include customers without consent. A takeaway box also needs storage and transport advice from the seller.",
    evidence:
      "The official relocation notice and current contact information establish the public shop. The operator's history supports the stated family connection. EA has not tasted the current products, inspected production or independently verified promotional superiority claims.",
    duration: "Allow 30 to 45 minutes, plus any queue",
    participation: "A self-directed tasting through an ordinary shop purchase",
    access:
      "Visit the public Karaköy shop using the current official address and buy directly. This is not a factory visit, class, prearranged tasting or reservation. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Karaköy Güllüoğlu: relocation and current address",
        "https://www.karakoygulluoglu.com/blog/icerik/karakoy-gulluoglu-nereye-gitti",
        "Distinguishes Kemankeş Caddesi 67 from the old car-park shop and supplies the source photograph.",
      ],
      [
        "Karaköy Güllüoğlu: history",
        "https://www.karakoygulluoglu.com/en/about-us",
        "Primary family history. Invention and ranking claims are not treated as independent evidence.",
      ],
    ]),
  },
  {
    id: "seoul-tongin-token-lunch",
    slug: "build-a-seoul-lunch-with-tongin-markets-tokens",
    title: "Build a Seoul lunch with Tongin Market's tokens",
    field: "taste",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul, Tongin Market",
    summary:
      "Exchange tokens for small dishes at participating Tongin Market stalls and assemble a dosirak lunchbox whose choices are yours.",
    kernel:
      "Find the lunchbox café or information point first and ask how the token scheme works that day. Get the current tray and token allocation before choosing food. Walk the market once, identifying participating stalls rather than assuming every trader accepts the tokens. Choose a few contrasting dishes and ask what unfamiliar items contain. Leave room in the tray so you can taste them separately. Return to the designated eating area and compare the meal you assembled with the choices of your companion, if you have one. The useful surprise is how a series of small decisions makes one coherent lunch.",
    rootedness:
      "Tongin is a working market in Seoul's Seochon area, not a purpose-built tasting attraction. The token lunchbox scheme gives visitors a structured way to buy from several traders while keeping each stall's food distinct. Visit Seoul describes the programme, and Korea.net documents people assembling and eating their boxes. Neither source establishes that every stall participates or that a particular dish will be available on your date. The local connection lies in an actual market transaction, not in a promised performance of everyday life.",
    shift:
      "Instead of receiving a fixed menu, you learn a market by making choices within it.",
    humanReturn:
      "Leave with a meal you composed and a few food names that make the next Korean market easier to approach.",
    responsibility:
      "Confirm the dosirak café's operating day before travelling. The current tourism listing contains conflicting weekday information, so market opening alone is not proof that tokens are available. Ask staff about participating stalls, payment and any unused tokens. Check ingredients and cross-contact directly, including seafood, soy, sesame and wheat. Keep queues and passageways clear. Ask before photographing traders. Confirm the café's stairs, seating and accessible alternatives if relevant. Do not treat historical photographs or prices as the current offering.",
    evidence:
      "Visit Seoul currently lists the dosirak scheme, with an unresolved inconsistency in its hours. Korea.net provides historical corroboration of the visitor format. EA has not visited the current stalls, tested token acceptance or verified a specific day's menu.",
    duration: "Allow 60 to 90 minutes once the token café is operating",
    participation:
      "A self-directed market lunch using the current participating-stall scheme",
    access:
      "Use Visit Seoul's Tongin Market listing to contact the market and verify the lunchbox café before setting out. Buy tokens and food directly under the current rules. This is not a guided tour or guaranteed daily service. No EA booking is provided.",
    guideReview: review("public_hospitality", [
      [
        "Visit Seoul: Tongin Market",
        "https://english.visitseoul.net/shopping/Tongin-Market_/282",
        "Current official destination listing. Contradictory weekday information is disclosed rather than resolved by assumption.",
      ],
      [
        "Korea.net: Tongin's lunchbox market",
        "https://www.korea.net/NewsFocus/Society/view?articleId=117922",
        "Historical government publication documenting tokens, trays and participating traders, not current prices or hours.",
      ],
    ]),
  },
  {
    id: "tartu-typa-handmade-paper",
    slug: "lift-a-sheet-of-paper-from-water-in-tartu",
    title: "Lift a sheet of paper from water in Tartu",
    field: "make",
    country: "Estonia",
    countrySlug: "estonia",
    regionSlug: "tartu",
    place: "Tartu, TYPA centre",
    summary:
      "At TYPA, turn recycled pulp into handmade sheets and discover how water, pressure and patience give a blank page its character.",
    kernel:
      "Book the dedicated handmade-paper workshop, then begin with the pulp rather than the finished stationery in the shop. Follow the instructor as you form a sheet and lift it from the water. Compare thickness and edges before deciding whether to add permitted decorative material. Try a different surface treatment on another sheet so the result gives you something to compare. The published workshop makes three A5 sheets. Ask what happens during drying and how the work can travel before planning to pack it that afternoon. A slight irregularity is evidence of a decision, not something you need to hide.",
    rootedness:
      "TYPA places papermaking alongside printing and book arts in Tartu. Its workshop connects a familiar material with the labour that usually disappears behind a printed page. Visit Estonia independently lists the same craft-paper offer and its advance-booking requirement. The technique is not presented as an Estonian invention. Its local value comes from practising it at a working centre that preserves and teaches material knowledge, within a city where books and education have a visible public presence.",
    shift:
      "A page becomes a made object before it becomes a surface for words.",
    humanReturn:
      "Take home a small comparison of textures and a better sense of why the paper under an image matters.",
    responsibility:
      "The operator lists 90 minutes, ages six and above and a small standard group of up to five, with larger groups by arrangement. Confirm the current minimum charge, teaching language, drying or collection time and physical access when booking. This is a wet, hands-on activity, so ask about suitable clothing and assistance with standing or gripping tools. Use only materials approved by the instructor. Do not bring plant material across borders without checking relevant restrictions. Ordinary museum admission is not the same as a reserved workshop.",
    evidence:
      "TYPA publishes the workshop's process, sheet allocation and participation limits. Visit Estonia corroborates the offer and location. EA has not attended, assessed teaching quality or confirmed an available session in the reader's preferred language.",
    duration:
      "Published workshop: 90 minutes, with drying or collection to confirm",
    participation: "A booked, instructor-led introduction to handmade paper",
    access:
      "Contact TYPA through its Handmade Paper page for the centre at Kastani 48f, behind the Samelin factory in Tartu. Confirm the dedicated workshop, not only a general museum tour. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "TYPA: Handmade Paper",
        "https://typa.ee/en/typa-centre/workshops/handmade-paper/",
        "Primary workshop description, three A5 sheets, duration, ages and small-group format.",
      ],
      [
        "Visit Estonia: craft paper at TYPA",
        "https://visitestonia.com/en/craft-paper-workshop-in-typa",
        "National destination listing confirming the public advance-booking offer and Tartu location.",
      ],
    ]),
  },
  {
    id: "ikeda-chicken-ramen-making",
    slug: "make-instant-noodles-from-flour-in-ikeda",
    title: "Make instant noodles from flour in Ikeda",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "ikeda",
    place: "Ikeda, Osaka Prefecture",
    summary:
      "At the Chicken Ramen Factory workshop, work from flour to noodles and watch the staff finish the step that makes an everyday packet possible.",
    kernel:
      "Reserve the Chicken Ramen Factory session, not the separate cup-decorating attraction. Working with your partner, follow the sequence of mixing, kneading, rolling and cutting under staff instruction. Notice how the dough changes before it starts to resemble anything from a packet. The staff handle the steaming and flash-frying stage. Your role is not to operate hot industrial equipment. Use the waiting moments to look back at the difference between the initial ingredients and the finished form. Packaging your result is the end of a short lesson in process, not the whole experience.",
    rootedness:
      "The museum places Ikeda within Momofuku Ando's development of instant noodles. It is a public museum with a teaching workshop, not access to a working commercial factory. That distinction makes the visit more interesting rather than less. A food associated with speed turns out to depend on a carefully organised sequence. The guide concerns the Osaka Ikeda location, which must not be confused with the museum in Yokohama. The brand's story is presented as its own account, not an independent history of every noodle tradition.",
    shift:
      "Convenience becomes something designed through several material changes, not simply something bought in a packet.",
    humanReturn:
      "Leave able to explain one stage of a food you may have eaten for years without thinking about its making.",
    responsibility:
      "Advance reservation is required. The published format works in pairs and does not accept an individual participant alone. Children must be elementary-school age or older, and younger pupils need the specified older partner. Confirm language support, allergies and mobility needs before booking. Ingredients include several major allergens, so do not assume an alternative recipe is possible. Arrive within the stated check-in window. Check the museum calendar, including Tuesday and holiday closures. A workshop ticket does not promise unlimited time in the other attractions.",
    evidence:
      "The museum's workshop and FAQ pages distinguish the two attractions, describe the 70-minute process and publish participation rules. EA has not attended, tested language support or verified availability for a particular date.",
    duration: "Published workshop: 70 minutes, plus advance check-in",
    participation:
      "Paired, staff-led noodle making, with hot finishing handled by staff",
    access:
      "Book Chicken Ramen Factory through CUPNOODLES MUSEUM OSAKA IKEDA. Check the exact location at 8-25 Masumi-cho, Ikeda, and current reservation rules. Museum admission alone does not reserve this session. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "CUPNOODLES MUSEUM OSAKA IKEDA: Chicken Ramen Factory",
        "https://www.cupnoodles-museum.jp/en/osaka_ikeda/attractions/cr-factory/",
        "Primary workshop process, paired participation, age requirements and reservation route.",
      ],
      [
        "CUPNOODLES MUSEUM OSAKA IKEDA: FAQ",
        "https://www.cupnoodles-museum.jp/en/osaka_ikeda/guide/faq/",
        "Distinguishes the museum workshop from a production-factory visit and from My CUPNOODLES Factory.",
      ],
      [
        "CUPNOODLES MUSEUM OSAKA IKEDA: opening",
        "https://www.cupnoodles-museum.jp/en/osaka_ikeda/guide/admission/",
        "Opening calendar and closure rules must be checked for the intended date.",
      ],
    ]),
  },
  {
    id: "jaipur-blue-pottery-making",
    slug: "draw-a-blue-pottery-pattern-in-jaipur",
    title: "Draw a blue-pottery pattern in Jaipur",
    field: "make",
    country: "India",
    countrySlug: "india",
    regionSlug: "jaipur",
    place: "Jaipur, Ram Gopal Blue Pottery",
    summary:
      "Work with Jaipur's quartz-based blue-pottery process at a public studio workshop, from handling the material to painting a small plate.",
    kernel:
      "Arrange the studio's hands-on session and ask the maker to show you the material before choosing a pattern. Follow the introduction to shaping, then practise a line or small motif before painting the plate supplied for your session. Notice how a curve changes when it has to follow a surface instead of a sketchbook page. Ask which colours will change during firing. The studio completes glazing and firing afterwards, so the object you paint is not necessarily something you can carry away that day. Agree on collection or shipping before the brush touches the surface.",
    rootedness:
      "Jaipur's blue pottery is associated with a quartz-based body rather than ordinary wheel-thrown clay. Indian handicraft documentation describes its distinct preparation and decoration. Ram Gopal Blue Pottery provides a current public route into an introductory version of that work. A short class does not make a visitor a trained ceramicist or establish that every blue object sold in Jaipur shares the same production method. The useful encounter is with decisions about material, line and heat that disappear inside a finished souvenir.",
    shift:
      "A decorative pattern becomes a sequence of choices made before the finished colour exists.",
    humanReturn:
      "Leave with one motif you understand through your hand, and an honest sense of how much remains for the studio to complete.",
    responsibility:
      "Confirm the current two-to-three-hour format, teaching language, age suitability and accessibility directly. The studio advertises English and Hindi and normally excludes Sundays. Do not handle dry powders or kiln equipment independently. Follow staff guidance and ask about materials if you have sensitivities. Agree in writing on firing time, breakage arrangements, collection, shipping cost and destination before payment. Do not assume the finished piece is food-safe unless the studio explicitly confirms its intended use. A professional-quality finish is not guaranteed by a beginner class.",
    evidence:
      "The studio publishes a hands-on workshop and explains that it completes the final stages afterwards. Government craft documentation corroborates the quartz-based technique. EA has not attended, inspected material safety or verified international shipping performance.",
    duration:
      "Operator's published format: two to three hours, with later finishing",
    participation:
      "A booked introduction to material preparation and plate painting",
    access:
      "Enquire through Ram Gopal Blue Pottery's Hands-on page and confirm the Jaipur studio address, session and final-piece arrangements before travelling. This is not an unrestricted factory visit or same-day finished-product promise. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Ram Gopal Blue Pottery: hands-on experience",
        "https://ramgopalbluepottery.in/hands-on/",
        "Current public workshop, languages, duration and later finishing arrangements.",
      ],
      [
        "Development Commissioner for Handicrafts: blue pottery",
        "https://handicrafts.nic.in/crafts/All_Crafts/Craft_Categories/Mud/Terracotta%26Pottery/Blue_pottery/Blue_potterywebpage.html",
        "Government craft documentation of the quartz-based body and production process, not endorsement of a particular workshop.",
      ],
    ]),
  },
  {
    id: "vancouver-seabus-crossing",
    slug: "cross-vancouver-by-seabus-and-watch-the-city-change",
    title: "Cross Vancouver by SeaBus and watch the city change",
    field: "move",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    place: "Vancouver and North Vancouver, Burrard Inlet",
    summary:
      "Take the public SeaBus between Waterfront and Lonsdale Quay and use a short commuter crossing to understand the city's relationship with its working harbour.",
    kernel:
      "Begin at Waterfront with enough time to follow the terminal signs without rushing. Board as an ordinary passenger and choose an available seat without treating a window position as something you have reserved. Watch the downtown shore recede, then shift your attention to the approaching North Shore. Notice the coexistence of vessels, terminals, buildings and mountains when visibility allows. At Lonsdale Quay, leave the boat and look back before deciding whether to explore on foot or return. The value is in changing shores. You do not need to turn a twelve-minute crossing into a cruise itinerary.",
    rootedness:
      "SeaBus is part of Metro Vancouver's public transport network. TransLink describes the route across Burrard Inlet and publishes its daily timetable. The boat joins places where people live and work, which gives the view a different meaning from a sightseeing circuit. This remains a working harbour on Indigenous territories, not an empty scenic backdrop. The guide does not offer cultural interpretation on behalf of local Nations or suggest that a short crossing explains the region's full history.",
    shift:
      "The water becomes a route through the city rather than a boundary at its edge.",
    humanReturn:
      "Leave with a clearer mental map of the two shores and a practical transport option for the rest of your stay.",
    responsibility:
      "Check live service alerts, the current fare and the last sailing for your intended direction. Frequency changes by time and day. Use the operator's payment guidance and validate your journey correctly. Keep boarding routes and priority spaces clear. This is an enclosed passenger ferry, not a promised open-deck photography trip. Visibility, vessel assignment and window seats are not guaranteed. Ask TransLink about boarding assistance or mobility requirements. Any onward walk, bus journey or return fare must be planned separately.",
    evidence:
      "TransLink confirms the Waterfront to Lonsdale Quay route, approximately twelve-minute crossing and published service pattern. Its official trip planner supports onward planning. EA has not sailed the current service, checked a particular departure or assessed conditions aboard every vessel.",
    duration: "About 12 minutes aboard, plus access, waiting and any return",
    participation: "An ordinary public-transit ferry journey",
    access:
      "Use TransLink's SeaBus schedule and live trip planner for Waterfront or Lonsdale Quay. Buy or validate the appropriate transit fare directly. No sightseeing narration, reserved seat or connected excursion is included. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "TransLink: SeaBus schedules",
        "https://www.translink.ca/schedules-and-maps/seabus.aspx",
        "Primary route, crossing time, first and last sailings and variable frequency.",
      ],
      [
        "TransLink: trip planner",
        "https://www.translink.ca/trip-planner",
        "Official planning route for live connections and the wider public transport journey.",
      ],
    ]),
  },
  {
    id: "san-francisco-golden-gate-cycle",
    slug: "feel-the-scale-of-the-golden-gate-bridge-by-bike",
    title: "Feel the scale of the Golden Gate Bridge by bike",
    field: "move",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "san-francisco",
    place: "San Francisco, Golden Gate Bridge",
    summary:
      "Ride the permitted bridge sidewalk at an unhurried pace and experience the distance between the towers through movement, wind and changing perspective.",
    kernel:
      "Plan the approach before hiring a bike, including where you will turn around and how you will return it. At the bridge, follow the current signs to the sidewalk open to bicycles. Settle into a controlled pace rather than treating the crossing as a challenge. The towers change scale as you approach them, and the bay appears between moving structural lines. Stop only where permitted and where you can keep the route clear. If conditions or crowds make the ride uncomfortable, turn back at a safe point. Completing a famous crossing is less important than judging the conditions well.",
    rootedness:
      "The Golden Gate Bridge is both a familiar image and active transport infrastructure. The bridge authority publishes separate access rules for pedestrians and bicycles, while the National Park Service describes cycling as a way to encounter the span. Riding turns the postcard into a sequence of distances and decisions. This guide concerns the bridge crossing itself. A ride into Sausalito and a ferry return can be separate plans, but they are not silently included or presented as one coordinated product.",
    shift:
      "An instantly recognisable silhouette becomes a place you have to navigate with care.",
    humanReturn:
      "Leave with a bodily sense of the bridge's scale and a memory shaped by movement rather than a single viewpoint.",
    responsibility:
      "This is not a beginner cycling lesson. Wind, fog, traffic noise, narrow sections and other users can make the route demanding. Check current sidewalk hours, closures and restrictions with the bridge authority. Follow posted speed limits and yield where required. Keep both hands available while moving, do not film while riding and use suitable protective equipment. The bridge does not rent bicycles. Confirm the rental operator's equipment, route advice and return rules independently. Do not assume a ferry will accept you and your bicycle without checking its current capacity and conditions.",
    evidence:
      "The bridge authority establishes bicycle access and operating rules. The National Park Service corroborates the crossing as a public activity. EA has not ridden it in current conditions or assessed any rental provider, and does not guarantee a specific sidewalk or weather window.",
    duration:
      "Allow one to two hours for a cautious bridge outing, excluding distant approaches",
    participation:
      "Self-directed cycling for someone already confident controlling a bicycle",
    access:
      "Check the bridge authority's Bikes and Pedestrians page immediately before your trip. Arrange any bicycle hire separately and follow the signed access on arrival. No rental, guide, transfer or ferry package is included. No EA booking is provided.",
    guideReview: review("public_observation", [
      [
        "Golden Gate Bridge: bicycles and pedestrians",
        "https://www.goldengate.org/bridge/visiting-the-bridge/bikes-pedestrians/",
        "Primary current access rules, sidewalk arrangements and cycling restrictions.",
      ],
      [
        "National Park Service: bike the Golden Gate Bridge",
        "https://www.nps.gov/thingstodo/bike-the-golden-gate-bridge.htm",
        "Public activity context. The proposed guide does not bundle a Sausalito extension or return ferry.",
      ],
    ]),
  },
  {
    id: "barcelona-montjuic-cable-car",
    slug: "read-barcelonas-shape-from-the-montjuic-cable-car",
    title: "Read Barcelona's shape from the Montjuïc cable car",
    field: "move",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    place: "Barcelona, Montjuïc",
    summary:
      "Rise above Montjuïc in a glass-sided cabin and watch Barcelona's streets, port and hills settle into a single, more understandable picture.",
    kernel:
      "Start at the Telefèric de Montjuïc station and look at the route before boarding. During the ascent, choose one feature you can recognise below and keep it in view as the angle changes. Let the city gradually become a shape rather than a list of sights. At the upper station, take time to orient yourself before choosing what to do next. On the return, check the current arrangement for the optional Mirador stop. The short ride works best when you give the changing view a subject, instead of trying to photograph every direction through the glass.",
    rootedness:
      "Montjuïc is part of Barcelona's inhabited and visited landscape, overlooking the city and port. The operator describes a 750-metre cable route between Parc de Montjuïc and Castell, with Mirador on the descent. This is not the older harbour-crossing cable car and not the Montjuïc funicular that can help you reach the area. Keeping those systems distinct is essential to making the experience useful. A cable-car ticket gives you this ride, not automatic entry to every attraction on the hill.",
    shift:
      "A city you have been navigating street by street becomes easier to understand as a whole.",
    humanReturn:
      "Leave with a better sense of Barcelona's orientation and a view that helps you connect the places already in your day.",
    responsibility:
      "Check live operating notices, seasonal hours, wind-related changes and the last return before travelling. The operator describes accessible facilities, but confirm specific assistance or mobility-device needs directly. Keep clear of doors and follow boarding instructions. Views depend on weather and cabin conditions. Castle admission is separate. Do not assume a single ticket covers the funicular, metro or harbour cable car. Verify whether your purchase is one-way or return and where that ticket type is sold. Children need appropriate adult supervision.",
    evidence:
      "The cable-car operator publishes the route, accessibility information and current visitor notices. Its ticket information distinguishes the ride from other Montjuïc access. EA has not travelled the route in current conditions or tested accessibility with a particular mobility device.",
    duration:
      "Allow 45 to 90 minutes for the ride and an unhurried orientation stop",
    participation:
      "A public cable-car ride with self-directed time on the hill",
    access:
      "Use the official Telefèric de Montjuïc website to check service and buy the correct ticket. Find Parc de Montjuïc station, not the port cable car. Arrange any onward museum, castle visit or transport independently. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Telefèric de Montjuïc: official service and tickets",
        "https://www.telefericdemontjuic.cat/en",
        "Primary ticket route, seasonal information and service notices.",
      ],
      [
        "Telefèric de Montjuïc: route and accessibility",
        "https://www.telefericdemontjuic.cat/en/teleferic-information",
        "Operator description of the 750-metre route and adapted facilities.",
      ],
    ]),
  },
  {
    id: "paris-carnavalet-shop-signs",
    slug: "decode-old-paris-through-its-shop-signs",
    title: "Decode old Paris through its shop signs",
    field: "learn",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    place: "Paris, Musée Carnavalet",
    summary:
      "In Carnavalet's sign galleries, look at the shapes that once helped people recognise a shop before they read its name.",
    kernel:
      "Enter the permanent collection and begin with a sign whose purpose is not immediately obvious. Guess what it might have announced before reading the label, then let the explanation correct you. Compare its silhouette with another object nearby. Ask yourself what would remain recognisable from across a crowded street or in poor light. You do not need to cover the whole museum in one visit. A small, deliberate sequence through the signs can change the way you look at shopfronts when you return to the Marais outside.",
    rootedness:
      "Carnavalet is Paris's city-history museum, and its sign galleries preserve objects connected with the commercial life of the streets. Paris Musées describes the galleries as a long-established part of the museum's presentation, now encountered within the renovated building. The signs are evidence of particular businesses and visual conventions, not a complete account of who could read or how every neighbourhood traded. Their usefulness is wonderfully direct. They show people solving the problem of being noticed and understood in a city.",
    shift:
      "A shop sign becomes a small piece of urban communication rather than decorative nostalgia.",
    humanReturn:
      "Leave with a new habit of noticing how a street tells you what happens behind its doors.",
    responsibility:
      "The permanent collection is currently free for individual visitors without reservation, while groups and paid activities have different rules. Check opening and gallery availability before travelling. The museum normally closes on Mondays and specified holidays. Temporary exhibitions are not included simply because permanent entry is free. Do not touch signs or use flash where prohibited. Keep room entrances clear and ask staff about step-free routes or any closed section. Large luggage is not accepted under the published visitor rules. A self-directed visit does not include a workshop or personal interpretation.",
    evidence:
      "Carnavalet's practical information establishes free permanent access and visitor conditions. Paris Musées documents the sign galleries. EA has not inspected the current display, tested every access route or confirmed that a particular object will remain on show.",
    duration:
      "Allow 45 to 75 minutes for a focused visit, longer for the wider museum",
    participation: "Self-directed observation of public museum collections",
    access:
      "Use Musée Carnavalet's current visitor information for 23 rue Madame de Sévigné. Ask for the sign galleries on arrival. Book separately if you want a paid guided activity or temporary exhibition. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Musée Carnavalet: practical information",
        "https://www.carnavalet.paris.fr/visiter/informations-pratiques?page=1",
        "Current free permanent-collection access, opening, entry cutoffs and luggage rules.",
      ],
      [
        "Paris Musées: Carnavalet's hidden histories",
        "https://parismusees.paris.fr/en/node/4645",
        "Official museum-network context for the galleries and the history of their presentation.",
      ],
    ]),
  },
  {
    id: "prague-klementinum-meridian",
    slug: "follow-books-and-sunlight-up-pragues-klementinum",
    title: "Follow books and sunlight up Prague's Klementinum",
    field: "learn",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "prague",
    place: "Prague, Klementinum",
    summary:
      "Join the guided route from a view into the Baroque library to the Meridian Hall and Astronomical Tower, where knowledge once depended on books and careful observation.",
    kernel:
      "Book the guided circuit and let its three parts build on one another. At the library, look from the permitted threshold and notice how shelves, globes and painted surfaces organise the room. You do not enter among the books. Continue to the Meridian Hall and ask the guide how sunlight was used to establish local noon. Then climb to the tower's viewpoint if the stairs suit you. The city outside and the instruments inside belong to the same visit. Try to leave with one measurement you understand, not only a photograph of a magnificent room.",
    rootedness:
      "The Czech National Library identifies this public route through the Klementinum, with Prague City Tourism operating visits to the tower, Meridian Hall and library viewpoint. The relationship between observing the sky and keeping records gives the architecture a practical subject. A library image can suggest access that visitors do not actually have, which is why the threshold restriction matters. This is a supervised historic-building visit, not access to the library's collections for research or a chance to handle its globes and instruments.",
    shift:
      "The beautiful room becomes part of a working history of how people recorded and measured their world.",
    humanReturn:
      "Leave with a more concrete understanding of local noon and a view of Prague connected to the knowledge inside the building.",
    responsibility:
      "The full route includes 172 stairs and no lift, according to the National Library's visitor information. Do not book it as a step-free activity. Confirm current tour language, age rules, weather restrictions and start time before paying. Children need the required adult accompaniment. Follow the guide's photography instructions and keep stairways moving. The library is viewed from its entrance, not entered among the shelves. Late arrival may mean missing the tour. Tower views and individual spaces can change because of weather or operational needs.",
    evidence:
      "The National Library and Prague City Tourism describe the public guided route and its restrictions. EA has not taken the current tour, tested language delivery or inspected access. The library photograph documents the room, not permission to walk inside it.",
    duration:
      "Allow about one hour including check-in, with the booked tour duration to confirm",
    participation:
      "A guided historic-building visit with a substantial stair climb",
    access:
      "Follow the National Library's official tour link to the current Klementinum operator and book the exact language and slot. This is not ordinary library entry or a research appointment. No EA booking is provided.",
    guideReview: review(
      "public_programme",
      [
        [
          "National Library: Astronomical Tower and Baroque Library",
          "https://www.nkp.cz/en/events/astronomical-tower-and-baroque-library",
          "Official public-tour route and operator link.",
        ],
        [
          "National Library: Czech visitor details",
          "https://www.nkp.cz/program-akci/astronomicka-vez-a-barokni-knihovna",
          "Primary detail on the 172 stairs, lack of lift and library access boundary.",
        ],
        [
          "Prague City Tourism: Klementinum",
          "https://praguecitytourism.com/care-for-cultural-heritage-and-operation-of-important-monuments/clementinum-astronomical-tower-and-baroque-library/",
          "Operator description of the library viewpoint, Meridian Hall and tower.",
        ],
      ],
      "2026-12-31",
    ),
  },
  {
    id: "santiago-mim-experiment",
    slug: "test-an-assumption-at-santiagos-interactive-museum",
    title: "Test an assumption at Santiago's interactive museum",
    field: "learn",
    country: "Chile",
    countrySlug: "chile",
    regionSlug: "santiago",
    place: "Santiago, La Granja",
    summary:
      "At Museo Interactivo Mirador, choose a hands-on exhibit, predict what will happen and let the result change your mind.",
    kernel:
      "Start with an available module whose instructions you can understand, rather than trying to visit every room. Before touching the controls, say what you expect to happen. Follow the instructions, observe the result and change one permitted variable on a second attempt. Ask a mediator for help if the explanation is unclear. If you are visiting with a child, let them make the prediction instead of turning the visit into a test of knowledge. The useful moment is not getting it right. It is being able to describe what surprised you and why you tried again.",
    rootedness:
      "MIM places interactive learning in Santiago's La Granja district, within a large public-facing museum campus. Its current museum page describes themed rooms and hundreds of modules, while the visit planner explains ordinary admission and quieter visiting sessions. This is a place to encounter how knowledge is tested, not a claim that one exhibit explains Chile or that a particular installation will always be working. Visiting beyond the historic centre also makes room for the city's contemporary educational life in a stay usually organised around monuments.",
    shift:
      "A museum becomes somewhere to revise an idea instead of somewhere to collect correct answers.",
    humanReturn:
      "Leave with one experiment you can explain in your own words and a little more comfort with being surprised.",
    responsibility:
      "Check current opening notices and dated ticket availability before travelling. The museum announced a weather closure for 20 October 2026, so do not rely on regular hours alone around severe weather. Confirm language support, age suitability and sensory or mobility needs. The planner advertises a calmer session on the last Sunday morning of the month, subject to current arrangements. Use only exhibits designated for interaction and follow staff instructions. Special activities can require separate capacity or booking. The historical interior photograph does not guarantee that the same installation is currently operating.",
    evidence:
      "The museum publishes its interactive format, current visit planner and ticket route. The dated weather notice is disclosed rather than treated as proof of normal operation. EA has not tested the exhibits, confirmed a specific date's reopening or assessed the quality of mediation.",
    duration: "Allow two to three hours for selected rooms, excluding travel",
    participation:
      "Self-directed hands-on museum exploration with staff guidance where available",
    access:
      "Check MIM's visit planner and official ticket portal for the intended date at Avenida Punta Arenas 6711, La Granja. Confirm operation after any weather alert before making the journey. No guaranteed live demonstration or private guide is included. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "MIM: plan your visit",
        "https://mim.cl/planifica-tu-visita",
        "Current visiting hours, services and calmer-session information. Check alerts as well as regular hours.",
      ],
      [
        "MIM: interactive museum",
        "https://mim.cl/museos/museo-interactivo-mirador",
        "Primary description of the interactive rooms and public educational format.",
      ],
      [
        "MIM: current notices",
        "https://mim.cl/",
        "Includes a dated 20 October weather closure. Reopening for a particular visit must be confirmed.",
      ],
      [
        "MIM: official ticket portal",
        "https://portal.mim.cl/comprar-entradas",
        "Direct route to dated ticket availability, not evidence of a reserved place.",
      ],
    ]),
  },
  {
    id: "rio-real-gabinete-pause",
    slug: "pause-beneath-rios-towering-library-shelves",
    title: "Pause beneath Rio's towering library shelves",
    field: "restore",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    place: "Rio de Janeiro, Real Gabinete Português de Leitura",
    summary:
      "Step into the Real Gabinete's public visiting space and let the height, light and ordered shelves interrupt the pace of central Rio.",
    kernel:
      "Enter quietly and take a moment before raising your phone. Look from the level of the tables to the upper shelves and ceiling, noticing how the room changes as your gaze moves. Choose one detail to return to, perhaps the rhythm of the shelving or the way daylight reaches the central space. This can be a short visit. You do not need to turn it into a search for a photogenic seat or a performance of reading. Ask staff where visitors may pause and respect the distinction between looking at a library and using its collections.",
    rootedness:
      "The Real Gabinete is a Portuguese cultural and literary institution in Rio, with a library, research activity and public events. Its own site separates ordinary visiting from registering as a reader. That distinction keeps the building from becoming merely an elaborate backdrop. The room holds books that belong to an institution with a continuing purpose. A visitor can appreciate its atmosphere while recognising that access to a collection involves different responsibilities from taking in the architecture.",
    shift:
      "A spectacular interior becomes a reason to pay quieter attention rather than to take more photographs.",
    humanReturn:
      "Leave with the memory of a room's proportions and a small break from the pressure to keep moving through the city.",
    responsibility:
      "The published visitor schedule is Monday to Friday, 10:00 to 17:00, with free admission. Confirm holiday or event changes before travelling. Do not assume the presence of reading tables gives visitors permission to sit, handle books or work there. Ask staff about photography and accessible entry. Keep voices low and circulation clear, especially when other visitors arrive. Take normal care with belongings on the journey through central Rio. A calm moment is an invitation, not a promise that the room will be empty or silent.",
    evidence:
      "The institution publishes free visiting hours and separately describes library and reader services. EA has not visited under current conditions, tested step-free access or confirmed permission to use a particular table or collection item.",
    duration: "Allow 20 to 40 minutes for a quiet architectural visit",
    participation:
      "A self-directed public visit, not a reading-room or research appointment",
    access:
      "Check the Real Gabinete's visiting page for Rua Luís de Camões 30, Centro. Follow staff directions on arrival. Library research and reader registration are separate from the visit described here. No EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "Real Gabinete: visiting information",
        "https://www.realgabinete.com.br/Visite-o-RGPL/Visiting-RGPL",
        "Primary free-admission and weekday visiting information.",
      ],
      [
        "Real Gabinete: library and cultural institution",
        "https://www.realgabinete.com.br/",
        "Current institutional context and separate route to reader registration.",
      ],
    ]),
  },
  {
    id: "seoul-seonyudo-garden-pause",
    slug: "find-a-garden-inside-seouls-old-waterworks",
    title: "Find a garden inside Seoul's old waterworks",
    field: "restore",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul, Seonyudo Park",
    summary:
      "Walk among planted remnants of a former water-treatment plant on a Han River island, where industrial structure gives a green pause an unexpected shape.",
    kernel:
      "Choose a daylight visit and enter on foot using an open public approach. Instead of trying to cover the island, follow a short route through the garden and look for the meeting of vegetation and retained concrete. Notice the old divisions in the ground and how plants soften or emphasise them. Find a permitted place to stop without blocking a path. Let one detail hold your attention for a few minutes before moving on. The park does not need to become another checklist between river viewpoints. Its particular interest is the way an earlier use remains visible inside a different one.",
    rootedness:
      "Seoul's municipal accounts describe Seonyudo as a former water-purification site transformed into a park. Gardens, columns and retained structures make that change legible without requiring an engineering tour. The place connects the river's practical role with the city's desire for public green space. It is not untouched nature, and that is part of its value. Looking at a reused structure gives the visit a subject beyond whether the flowers happen to be at their seasonal best.",
    shift:
      "Rest can happen in a place that remembers work rather than in a landscape made to hide it.",
    humanReturn:
      "Leave with a new example of how a city can keep traces of its infrastructure while giving people a gentler use for them.",
    responsibility:
      "Check current park access and weather notices before setting out, especially around heavy rain, heat or river-related closures. Stay on open paths and do not enter water features or climb retained structures. Seoul's visitor guidance prohibits bicycles, rollerblades and scooters within the park. Check the permitted approach separately if arriving by bike. Confirm accessible routes and toilets if needed. Bring drinking water in warm weather and do not feed wildlife. Flowers, foliage, shade and water displays vary by season and maintenance. The photograph does not promise identical conditions.",
    evidence:
      "Seoul Metropolitan Government documents the site's conversion and public visitor rules. EA has not walked the current paths, checked every accessible approach or verified the operation of individual water features on a particular date.",
    duration: "Allow 45 to 90 minutes for a short walk and pause",
    participation:
      "Self-directed, low-key walking and observation on public park paths",
    access:
      "Use Seoul's official Seonyudo information and current notices to plan the pedestrian approach. This is a public park visit, not a swimming, cycling or guided industrial tour. No EA booking is provided.",
    guideReview: review("public_observation", [
      [
        "Seoul Metropolitan Government: Seonyudo Park",
        "https://english.seoul.go.kr/may-seonyudo-park/",
        "Municipal account of the former waterworks and present garden spaces.",
      ],
      [
        "Seoul Metropolitan Government: visitor rules",
        "https://english.seoul.go.kr/seonyudo-park-at-night/",
        "Published public access context and restrictions on bicycles, rollerblades and scooters. Current notices take precedence.",
      ],
    ]),
  },
  {
    id: "marrakech-anima-garden-pause",
    slug: "let-a-garden-change-your-pace-outside-marrakech",
    title: "Let a garden change your pace outside Marrakech",
    field: "restore",
    country: "Morocco",
    countrySlug: "morocco",
    regionSlug: "marrakech",
    place: "Ourika Valley, outside Marrakech",
    summary:
      "At ANIMA, follow planted paths where art appears among foliage, and give a garden outside the city enough time to become more than a photo stop.",
    kernel:
      "Arrive with your return transport already understood so you can stop watching the clock. Take the first part of the garden slowly, noticing how one planted space leads into the next. When an artwork catches your attention, look at the plants and light around it as well as the object itself. Choose a permitted resting place and stay for a little while. You do not need to find every sculpture or recreate the garden's promotional photographs. The most useful part of the visit may be a change in pace that you can feel rather than an image you can collect.",
    rootedness:
      "ANIMA is André Heller's contemporary art and garden project in the Ourika Valley, roughly 28 kilometres from Marrakech. It is a deliberately composed visitor garden, not an untouched landscape, a traditional riad garden or a representative account of Moroccan culture. The regional tourism organisation identifies it as a public attraction outside the city. Its value in an EA stay is as a distinct, planned pause with a relationship to the surrounding landscape, rather than as something to squeeze between two medina streets.",
    shift:
      "A garden becomes a place to spend time, not a backdrop you have finished with after finding the famous view.",
    humanReturn:
      "Leave with a more attentive memory of foliage, scale and shade, and a little space inside the rest of your day.",
    responsibility:
      "Check current hours, holiday exceptions, weather and transport before paying. The garden's shuttle requires a separate advance reservation and is not automatically secured by an admission ticket. Confirm pickup and return arrangements directly. The operator notes limits to wheelchair access, so discuss the intended route and assistance beforehand. Stay on paths, do not touch artworks unless explicitly invited and do not pick plants. Bring sun protection and water as appropriate. Do not assume every path is shaded or that mountain views will be clear. The journey from Marrakech needs its own time allowance.",
    evidence:
      "ANIMA publishes admission, shuttle and access information, corroborated geographically by Visit Marrakech. EA has not visited, assessed the full accessible route or confirmed seats on a specific shuttle. This is not an endorsement of therapeutic or environmental claims.",
    duration:
      "Allow two to three hours in the garden, plus travel from Marrakech",
    participation:
      "Self-directed walking, looking and pausing in a ticketed garden",
    access:
      "Book through ANIMA's official visitor page and reserve any shuttle separately under its current rules. Confirm the Ourika Valley location rather than planning this as a walk within Marrakech. No transport bundle or EA booking is provided.",
    guideReview: review("public_admission", [
      [
        "ANIMA: visit",
        "https://www.anima-garden.com/visit/",
        "Primary admission, opening and accessibility information.",
      ],
      [
        "ANIMA: shuttle",
        "https://www.anima-garden.com/shuttle/",
        "Separate advance shuttle reservation and pickup details, subject to availability.",
      ],
      [
        "Visit Marrakech: ANIMA Garden",
        "https://visitmarrakech.com/en/listing/anima-garden/",
        "Regional destination context and the garden's location outside the city.",
      ],
    ]),
  },
  {
    id: "lisbon-cinemateca-screening",
    slug: "give-a-lisbon-evening-to-a-film-you-did-not-choose-by-algorithm",
    title: "Give a Lisbon evening to a film beyond your usual queue",
    field: "gather",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    place: "Lisbon, Cinemateca Portuguesa",
    summary:
      "Choose a public screening at Cinemateca Portuguesa and let a programmed season, a shared room and an unfamiliar film broaden what you watch.",
    kernel:
      "Open the current programme before choosing a night. Read the short introduction to a cycle and select a film for a reason beyond recognising its title. Check the language and subtitles before buying. Arrive with time to follow the room's seating arrangements, put your phone away and let the film set the pace. Afterwards, keep one scene or formal choice in mind as you leave. You do not need an expert opinion or a conversation with strangers to make this a shared experience. Watching together is already different from adding another item to a private queue.",
    rootedness:
      "Cinemateca Portuguesa combines film preservation with public exhibition. Its programme brings films into relation through curated cycles rather than treating each screening as an isolated entertainment product. That offers a way into Lisbon's cultural life which does not depend on a film being Portuguese or on a visitor understanding the entire history of cinema. The local encounter is with a functioning institution and its public audience. Archive access, research viewing and a normal screening are separate activities with different conditions.",
    shift:
      "The question changes from what you already want to watch to what a thoughtful programme might help you discover.",
    humanReturn:
      "Leave with a film, image or question that would probably not have appeared in your usual recommendations.",
    responsibility:
      "Confirm the exact date, room, running time, age classification, content and subtitles before purchasing. Do not assume English subtitles or a child-suitable programme. Ask directly about step-free access and any assistance needed for the chosen room. Follow the current seating and late-entry rules. The institution prohibits visitor photography inside, and recording a film is not permitted. A screening ticket does not provide access to the film archive or a guided tour. Programme changes and sold-out sessions remain possible. Choose material that suits your interests and comfort rather than treating unfamiliarity as an obligation.",
    evidence:
      "The Cinemateca publishes a current public programme and distinguishes screenings from archival services in its FAQ. EA has not attended the selected programme, checked a particular print or verified subtitle availability beyond the published session information.",
    duration:
      "Allow the film's listed running time, plus arrival and any introduction",
    participation: "Attendance at a scheduled public film screening",
    access:
      "Choose a dated screening through Cinemateca Portuguesa's official programme and follow its current ticket instructions for Rua Barata Salgueiro 39. Verify the venue, as not every activity uses the same site. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Cinemateca Portuguesa: programme",
        "https://www.cinemateca.pt/Programacao.aspx",
        "Dated public screenings and programme context. Language and content must be checked session by session.",
      ],
      [
        "Cinemateca Portuguesa: FAQ",
        "https://www.cinemateca.pt/faqs.aspx",
        "Separates public exhibition from archive services and explicitly prohibits visitor photography inside.",
      ],
      [
        "Cinemateca Portuguesa: headquarters",
        "https://www.cinemateca.pt/OutrasPaginas/Contactos/Sede.aspx",
        "Official address for the main Lisbon site.",
      ],
    ]),
  },
  {
    id: "dublin-national-concert-hall-evening",
    slug: "hear-an-orchestra-find-its-shape-in-dublin",
    title: "Hear an orchestra find its shape in Dublin",
    field: "gather",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    place: "Dublin, National Concert Hall",
    summary:
      "Choose a public orchestral concert at the National Concert Hall and follow one sound as it moves through the ensemble.",
    kernel:
      "Select a main-hall orchestral programme whose length and description appeal to you. Read a little about one work before arriving, but leave room to listen without a script. When the music begins, choose an instrument or musical idea you can recognise and follow how it reappears in another part of the ensemble. If you lose it, start again with a different sound. There is no test at the end. The shared attention of the room can make the experience memorable even when you do not know the pieces or the conventions well.",
    rootedness:
      "Dublin's National Concert Hall presents a continuing public programme, including orchestral performances alongside other kinds of music. Its current calendar provides a concrete route into the city's listening culture. The institution is not interchangeable with every concert sold as an Irish evening, and an orchestral programme need not contain Irish repertoire to belong to the city's cultural life. What makes the visit local is attending a real scheduled performance in a working venue, rather than expecting musicians to deliver a simplified national identity.",
    shift:
      "A large ensemble becomes easier to hear when you follow one line instead of trying to understand everything at once.",
    humanReturn:
      "Leave with a sound you can remember and a little more confidence choosing live music in an unfamiliar city.",
    responsibility:
      "Check the exact performer, programme, room, running time and age guidance before booking. The venue's different rooms have different access arrangements. Wheelchair and companion spaces in the main hall should be arranged with the box office, and the main, side and choir balconies do not have lift access. Ask about assisted listening and any sensory needs. Follow the venue's rules on photography, phones and late admission. A programme can change and a photograph of a previous concert does not identify the musicians you will hear. There is no implied backstage access or meeting with performers.",
    evidence:
      "The National Concert Hall publishes current concerts, ticket instructions and detailed accessibility information. EA has not attended the advertised performances, tested the assisted-listening system or evaluated the acoustics from a specific seat.",
    duration:
      "Use the selected concert's running time, usually an evening with an interval to confirm",
    participation: "Attendance at a booked public orchestral performance",
    access:
      "Choose an orchestral event at the National Concert Hall through its official calendar. Verify that the booking is for the intended Dublin room and date, and contact the box office for access seating. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "National Concert Hall: current programme",
        "https://www.nch.ie/",
        "Official current events, including the resident orchestral programme.",
      ],
      [
        "National Concert Hall: booking",
        "https://www.nch.ie/plan-your-visit/book-your-tickets/",
        "Direct ticket and box-office guidance.",
      ],
      [
        "National Concert Hall: accessibility",
        "https://www.nch.ie/plan-your-visit/accessibility/",
        "Room-specific lift limits, wheelchair seating and assisted-listening arrangements.",
      ],
    ]),
  },
  {
    id: "prague-czech-philharmonic-rudolfinum",
    slug: "listen-to-prague-with-the-czech-philharmonic",
    title: "Listen to Prague with the Czech Philharmonic",
    field: "gather",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "prague",
    place: "Prague, Rudolfinum",
    summary:
      "Book a Czech Philharmonic performance in the Rudolfinum's Dvořák Hall and give Prague's musical life the time of a whole concert.",
    kernel:
      "Start with the orchestra's own programme and choose a performance in Dvořák Hall. Check both the ensemble and venue, since a famous building can host several organisers. Before the concert, read the introduction to one work and choose something to listen for, perhaps a recurring theme or a change in orchestral colour. Once seated, let the programme unfold without trying to recognise everything. Notice how the room becomes attentive together. The architecture is part of the setting, but the reason to stay is the music being made in front of you.",
    rootedness:
      "The Czech Philharmonic maintains a public concert season at the Rudolfinum as well as performing elsewhere. Its programme and ticket pages make the distinction between a Prague home concert and a touring date clear. This guide is not a generic recommendation for any performance advertised beside a Prague landmark. It offers a specific relationship between an orchestra, its home hall and a public audience. The repertoire may be Czech or international, and neither choice needs to be reduced to a souvenir of the city.",
    shift:
      "A landmark becomes a place with a present-tense purpose rather than an interior you have merely seen.",
    humanReturn:
      "Leave with a musical memory tied to an actual evening, and a better sense of how to choose a concert rather than only a venue.",
    responsibility:
      "Confirm Prague, Rudolfinum and Dvořák Hall on the event listing before buying. The orchestra's calendar also includes other cities and venues. Check the current seat, running time, age guidance, access route and late-entry rules. Contact the box office for wheelchair seating or specific assistance. Do not assume a building tour, rehearsal or backstage visit is included. Keep devices silent and follow recording restrictions. Programme and personnel changes remain possible. The historical hall photograph does not promise the same stage arrangement or performers on your chosen date.",
    evidence:
      "The orchestra's current programme, individual-ticket page and practical guidance establish a public booking route for home concerts. EA has not attended the current season, assessed a particular seat or verified remaining ticket inventory for the reader's date.",
    duration:
      "Allow the listed concert duration, plus arrival and any interval",
    participation: "Attendance at a scheduled Czech Philharmonic concert",
    access:
      "Book directly through the Czech Philharmonic's official programme, selecting a Prague performance in Dvořák Hall. Read the event details rather than assuming every Rudolfinum ticket is for this orchestra. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Czech Philharmonic: current programme",
        "https://www.ceskafilharmonie.cz/en/whats-on/",
        "Current home and touring events. Venue and city must be checked explicitly.",
      ],
      [
        "Czech Philharmonic: individual tickets",
        "https://www.ceskafilharmonie.cz/en/individual-concert-tickets/",
        "Official public ticket route and purchase conditions.",
      ],
      [
        "Czech Philharmonic: practical information",
        "https://www.ceskafilharmonie.cz/en/practical-information/",
        "Visitor and access guidance for attending performances.",
      ],
    ]),
  },
];
export const guideBatch56: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
