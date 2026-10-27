import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: NonNullable<PublicExperience["guideReview"]>["scope"],
  sources: [string, string, string][],
  reviewBy = "2027-01-24",
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-27",
  reviewBy,
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "athens-krinos-loukoumades",
    slug: "break-the-crust-of-an-athens-loukouma",
    title: "Break the crust of an Athens loukouma",
    field: "taste",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "athens",
    place: "Athens, Aiolou Street",
    summary:
      "At Krinos, a plate of loukoumades turns an Athens shopping street into a short lesson in heat, honey and texture.",
    kernel:
      "Order a portion of loukoumades and give the first bite time to cool. Notice the difference between the crisp surface and the softer centre before deciding what else the plate needs. A sweet that looks like a small, simple mouthful can change noticeably while you sit with it. Rather than collecting several desserts in quick succession, make this one the pause. Watch the rhythm of ordering and serving without standing in the staff's way, then return to Aiolou Street with something more specific to remember than a photograph of the counter.",
    rootedness:
      "Athens' official guide identifies Krinos as a historic sweet shop specialising in loukoumades at 87 Aiolou. A 2026 Athinorama feature places it within the city's long-running food life. That makes the address a useful, recognisable entry into an everyday Athens pleasure. It does not make fried dough exclusive to Greece, establish one universal recipe or prove that this is the city's best serving. The interest lies in a particular shop and the small sequence of buying, waiting and eating there.",
    shift:
      "Look beyond sweetness and start noticing how temperature changes a familiar kind of food.",
    humanReturn:
      "A short food stop becomes a sensory reference you can recognise in another bakery without needing a ranking to tell you what to enjoy.",
    responsibility:
      "Confirm the shop's current opening before making a special journey. Online directories disagree on hours, so none are promised here. Ask about wheat, dairy, egg, honey, nuts and shared preparation surfaces rather than assuming a traditional recipe meets your dietary needs. Let hot food cool, order within your appetite and keep the service area clear. Ask before including staff or other customers in photographs. Confirm entrance and seating access directly if needed.",
    evidence:
      "The official Athens destination guide confirms the shop, speciality and address. Athinorama supplies additional editorial context. EA has not tasted a current portion, inspected ingredients or assessed the business on site.",
    duration: "Allow 20 to 40 minutes, plus any queue",
    participation: "An ordinary sweet-shop purchase and self-directed tasting",
    access:
      "Visit Krinos at 87 Aiolou during its confirmed opening hours. Pay the shop directly. This is not a booked tasting, kitchen visit or EA partnership.",
    guideReview: review("public_hospitality", [
      [
        "This is Athens: Krinos",
        "https://www.thisisathens.org/cafes-bakeries/krinos",
        "Official destination listing with the specific shop, speciality and address.",
      ],
      [
        "Athinorama: Krinos in Athens",
        "https://www.athinorama.gr/restaurants/3071823/krinos-oi-pio-istorikoi-loukoumades-tis-athinas/",
        "Greek-language editorial account published in May 2026. Not an EA inspection.",
      ],
    ]),
  },
  {
    id: "copenhagen-schonnemann-smorrebrod",
    slug: "read-a-copenhagen-lunch-one-open-sandwich-at-a-time",
    title: "Read a Copenhagen lunch one open sandwich at a time",
    field: "taste",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    place: "Copenhagen, Hauser Plads",
    summary:
      "Sit down to smørrebrød at Schønnemann and discover how rye bread holds together a lunch that is eaten with a knife and fork.",
    kernel:
      "Read the current lunch menu before ordering and ask how many pieces make sense for your appetite. Choose toppings you actually want to understand, not a checklist of everything considered Danish. Start with a small forkful that includes bread and topping together. Then notice what the rye contributes to the next bite. The open sandwich gives you a visible arrangement to read, but its balance is only clear when you eat it. Leave room for conversation and a second choice if you want one. Beer or snaps is optional, not a test of participation.",
    rootedness:
      "Schønnemann is a long-established Copenhagen lunch restaurant on Hauser Plads. Visit Copenhagen documents its nineteenth-century origins and continuing smørrebrød service. The setting connects a recognisable Danish food form to a specific working dining room. The menu includes different preparations, so a visit can be about learning distinctions rather than finding a supposedly definitive national dish. This is a commercial restaurant with an established visitor following, not a private meal with a local family or an undiscovered address.",
    shift:
      "A sandwich stops being a quick object to carry and becomes a composed meal worth sitting down for.",
    humanReturn:
      "Take away a more precise sense of rye, topping and proportion, useful whenever another Danish menu offers far more choices than one lunch can hold.",
    responsibility:
      "Reserve through the restaurant and check the applicable sitting. The cellar entrance has four steps. Discuss mobility needs before booking. Ask about fish, shellfish, gluten, dairy, egg and cross-contact. Seasonal menus can differ. The Danish site lists a closure from 24 December 2026 through 5 January 2027, so do not plan a holiday visit without reconfirming. Do not infer dinner service from special Christmas events. Respect other diners when taking photographs.",
    evidence:
      "The restaurant publishes booking and access information, while Visit Copenhagen corroborates the lunch tradition and address. EA has not eaten here or assessed a particular dish, service or table.",
    duration: "Allow 60 to 90 minutes within your booked sitting",
    participation: "A reserved restaurant lunch with your own menu choices",
    access:
      "Book Schønnemann at Hauser Plads 16 through its official site. Select the actual lunch date and sitting. No EA reservation or tasting package is included.",
    guideReview: review("public_hospitality", [
      [
        "Schønnemann: welcome and booking",
        "https://www.restaurantschonnemann.dk/en/welcome/",
        "Primary lunch and entrance information.",
      ],
      [
        "Schønnemann: current Danish notices",
        "https://www.restaurantschonnemann.dk/",
        "Current seasonal opening and Christmas closure. Used ahead of inconsistent translated dates.",
      ],
      [
        "Visit Copenhagen: Schønnemann",
        "https://www.visitcopenhagen.com/copenhagen/planning/schonnemann-gdk412669",
        "Destination context for the lunch restaurant and smørrebrød.",
      ],
    ]),
  },
  {
    id: "porto-santiago-francesinha",
    slug: "find-the-sauce-inside-portos-francesinha",
    title: "Find the sauce inside Porto's francesinha",
    field: "taste",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    place: "Porto, Rua de Passos Manuel",
    summary:
      "Take a seat at Café Santiago for a francesinha and discover why this Porto sandwich needs a plate, cutlery and room in your day.",
    kernel:
      "Read the menu at the original Passos Manuel address and choose the serving you can comfortably finish. Cut through the cheese and bread to see how the layers meet the sauce. Taste a little sauce separately, then try a bite that brings the whole stack together. Notice how the bread absorbs liquid and how that changes the dish as you eat. This is a substantial meal, not a snack to add after lunch. Leave time afterwards for an unhurried walk rather than scheduling another tasting immediately behind it.",
    rootedness:
      "Café Santiago publishes the components of its francesinha, including bread, several meats, cheese, sauce and an egg-topped version. Porto has many versions and strongly held preferences. A 2026 El País food feature includes the café among established city addresses. This guide uses one specific counterpoint to Porto's wine-focused visitor image. It does not settle disputed origin stories, rank rival kitchens or suggest that ordering a rich sandwich is a requirement for understanding the city.",
    shift:
      "A food you recognise as a sandwich becomes a different kind of meal once sauce, cutlery and pace take over.",
    humanReturn:
      "Leave with a taste memory that belongs to a particular Porto lunch, and a clearer idea of what to ask when another menu offers its own version.",
    responsibility:
      "Use the opening information for Rua de Passos Manuel 226, not the separate Santiago F, Praça or Albufeira branches. The current site closes on Sundays. Ask about meat, gluten, dairy, egg, sauce ingredients and any dietary restriction before ordering. Do not assume a secret sauce is suitable for you. Confirm queues, seating access and payment arrangements directly. Photograph your own plate without turning neighbouring tables into a backdrop. Alcohol is optional and not part of this recommendation.",
    evidence:
      "The operator confirms the original address, dish components and opening pattern. Independent food reporting supplies city context, not an inspection of today's kitchen. EA has not tasted or ranked the restaurant.",
    duration: "Allow 45 to 75 minutes, plus any queue",
    participation: "An ordinary restaurant meal and self-directed tasting",
    access:
      "Visit Café Santiago at Rua de Passos Manuel 226, Porto, after checking the original branch's current hours. Order and pay directly. No EA booking or combined food tour is provided.",
    guideReview: review("public_hospitality", [
      [
        "Café Santiago: official menu and locations",
        "https://cafesantiago.pt/en/",
        "Primary dish descriptions and distinct branch addresses.",
      ],
      [
        "El País: the francesinha in Porto",
        "https://elpais.com/gastronomia/2026-08-10/francesinha-el-contundente-bocadillo-de-portugal-que-desafia-cualquier-dieta.html",
        "August 2026 independent context naming the Passos Manuel café. Origin claims are not adopted as settled facts.",
      ],
    ]),
  },
  {
    id: "porto-house-filigree-workshop",
    slug: "fit-a-silver-thread-into-portos-filigree",
    title: "Fit a silver thread into Porto's filigree",
    field: "make",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    place: "Porto, Rua do Almada",
    summary:
      "At House of Filigree, a two-hour introductory workshop turns delicate silver ornament into a set of decisions made with your own hands.",
    kernel:
      "Reserve the beginner workshop and let the goldsmith introduce the tools and the piece available for that session. Look at the frame before focusing on its smallest curls. Follow how a fine length of silver is placed, repeated and held within that structure. Ask which stages you will perform and which the maker completes, especially where heat or finishing is involved. The useful result is not a competition with the museum's elaborate pieces. It is understanding why a seemingly weightless ornament depends on order, support and repeated adjustments.",
    rootedness:
      "House of Filigree combines a Porto museum, working atelier and shop at Rua do Almada 10. Its museum places Portuguese filigree pieces and tools in view, while the separately booked introduction offers a small hands-on route into the technique. Looking at finished jewellery after making a first attempt changes what is visible. This is a contemporary commercial teaching format, not a claim that filigree belongs only to Portugal or that two hours transmit a goldsmith's professional training.",
    shift:
      "What first looks like decoration becomes a structure you can read, one fitted line at a time.",
    humanReturn:
      "Take home the session's small silver piece and a more patient eye for the work inside a larger object, whether or not you ever make another.",
    responsibility:
      "Workshops require an appointment. Confirm the date, instruction language, minimum age, hand dexterity requirements and step-free access before paying. The published group format accommodates up to six people. Ask what design, finishing and collection are included rather than assuming every museum object is a beginner option. Follow the maker's tool and heat instructions. Disclose material sensitivities and ask before photographing the bench or other participants. A place on the museum tour is not automatically a workshop place.",
    evidence:
      "The official workshop and museum pages corroborate the two-hour format, included materials and museum visit. EA has not attended, assessed instruction or verified a particular available date.",
    duration:
      "Two-hour workshop, with extra time for the included museum visit",
    participation: "A guided introduction with a small silver filigree piece",
    access:
      "Reserve the workshop through House of Filigree's published contact route for Rua do Almada 10. A request still needs the studio's confirmation. EA does not arrange the appointment.",
    guideReview: review("public_programme", [
      [
        "House of Filigree: workshop",
        "https://houseoffiligree.com/en/pages/filigree-workshop",
        "Primary programme, materials, duration and group size.",
      ],
      [
        "House of Filigree: museum",
        "https://houseoffiligree.com/en/pages/museum",
        "Address and the relationship between museum, atelier and introductory workshop.",
      ],
    ]),
  },
  {
    id: "seoul-yhlayuen-seal",
    slug: "carve-a-name-into-stone-in-insadong",
    title: "Carve a name into stone in Insadong",
    field: "make",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul, Insadong",
    summary:
      "Make a personal stone seal at Yhlayuen and discover how a carved surface becomes a name on paper only after it meets ink.",
    kernel:
      "Choose the name or short inscription with the instructor and ask how it needs to be arranged before cutting. Keep the design manageable. Follow the demonstration for holding the stone and controlling the engraving tool, then work slowly enough to notice what is removed and what remains. The first impression on paper is the revealing moment. Compare it with the drawing you began with and ask what could be adjusted. A small irregularity can explain more about the process than a perfectly polished souvenir bought without seeing how it was made.",
    rootedness:
      "Yhlayuen's Insadong centre presents seal engraving alongside the work and teaching of artist Kim Hyun-sook. Its public programme lets individuals make a personal seal in natural stone. The encounter is with one contemporary artist-led practice, not the full history of Korean seals or a claim that every name has one correct visual form. The result belongs to a visitor introduction. It should not be represented as an official legal seal or as evidence of fluency in Korean calligraphy.",
    shift:
      "A name moves from something you read to something you must build in reverse through material and pressure.",
    humanReturn:
      "Leave with a usable impression and a better understanding of the decisions hidden inside a very small mark.",
    responsibility:
      "Confirm the booking, current instruction language, minimum age and tool suitability before visiting. The primary site describes about 50 minutes to an hour, longer than some booking-platform summaries. Use the duration in your actual confirmation. The studio is on the second floor, so check access if stairs are a concern. Do not use another person's signature, official emblem or protected design. Follow carving safety instructions and ask before photographing the teacher, other visitors or displayed artwork.",
    evidence:
      "The artist's site publishes the Insadong programme, natural-stone materials and address. A public booking listing corroborates visitor participation but is not an independent assessment. EA has not taken the class or confirmed a particular session.",
    duration: "About 50 to 60 minutes, subject to booking confirmation",
    participation: "Instructor-led engraving of a personal stone seal",
    access:
      "Arrange Yhlayuen's personal-seal programme for 2F, unit 202, 34 Insadong-gil, Jongno-gu. Verify the exact centre and session before payment. EA provides no reservation.",
    guideReview: review("public_programme", [
      [
        "Yhlayuen: seal engraving experience",
        "https://korea-jeongak.com/",
        "Primary programme, artist context, materials and current studio address.",
      ],
      [
        "Trazy: Insadong personal-stamp experience",
        "https://www.trazy.com/ko/experience/detail/make-your-own-korean-stamp-in-insadong-seoul",
        "Public booking corroboration. Shorter platform duration is not preferred over the studio's current description.",
      ],
    ]),
  },
  {
    id: "kuala-lumpur-batik-boutique",
    slug: "let-wax-hold-a-line-in-kuala-lumpur",
    title: "Let wax hold a line in Kuala Lumpur",
    field: "make",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "kuala-lumpur",
    place: "Kuala Lumpur, The Row",
    summary:
      "Choose a small batik project at Batik Boutique and watch a wax boundary change what colour can do on cloth.",
    kernel:
      "Book a project that fits both your available time and the collection date. Begin with the instructor's explanation of the resist rather than racing to fill the fabric. Notice how a line of wax changes the edge where colour meets it. Ask which tools and stages belong to your chosen project, then follow the studio's sequence for painting, setting and finishing. Before leaving, compare an area you planned carefully with one that surprised you. That small difference is a useful introduction to the technique, even if the finished object is deliberately simple.",
    rootedness:
      "Batik Boutique runs visitor workshops at The Row in central Kuala Lumpur and explains batik through removable wax resist. The public programme is one contemporary route into a textile process used in varied forms across the region. It is not a claim that Malaysian batik has one appearance or that this studio represents every maker. The business also makes social-impact claims. Those are not treated here as an independently verified reason to book or as a substitute for the actual teaching offer.",
    shift:
      "Colour becomes something negotiated with a boundary, not simply brushed onto a surface.",
    humanReturn:
      "Keep a small object whose pattern you can explain, and recognise the role of wax when you encounter batik elsewhere in the city.",
    responsibility:
      "Confirm language, age suitability, access to the first-floor studio and the selected project's tools. Hot wax requires instruction and supervision. The provider states one to four hours depending on the object. Collection can be the same day or the next working day, while products needing sewing may take up to two weeks. Confirm this before booking near departure. Bookings are non-refundable under the published policy. Product mock-ups on the website include AI-generated images, which EA does not use as documentary photographs.",
    evidence:
      "The current workshop listing and FAQ establish a publicly bookable beginner programme and collection conditions. EA has not attended, checked the studio's impact claims or guaranteed an individual finished result.",
    duration: "One to four hours, plus any finishing or collection delay",
    participation:
      "A guided batik project chosen from the studio's current options",
    access:
      "Book the onsite batik workshop, not a shipped kit, for 62-1, First Floor, The Row, Jalan Doraisamy. Confirm the studio entrance separately from the ground-floor retail shop.",
    guideReview: review("public_programme", [
      [
        "Batik Boutique: onsite workshop",
        "https://batikboutique.com/products/workshop-batik-instore",
        "Primary project, duration, studio, collection and cancellation conditions.",
      ],
      [
        "Batik Boutique: workshop registration FAQ",
        "https://batikboutique.com/pages/general-faqs-batik-boutique-malaysia",
        "Beginner participation and public booking route.",
      ],
      [
        "Batik Boutique: workshop context",
        "https://batikboutique.com/pages/batik-workshop",
        "Programme overview and documentary workshop photographs, distinct from generated product mock-ups.",
      ],
    ]),
  },
  {
    id: "budapest-zugliget-chairlift",
    slug: "let-budapest-appear-between-the-trees",
    title: "Let Budapest appear between the trees",
    field: "move",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    place: "Budapest, Zugliget",
    summary:
      "Ride the Zugliget chairlift above the wooded Buda slopes and notice the city opening beyond a journey that is deliberately slow.",
    kernel:
      "Check the operating notice before travelling to the lower station. Follow the attendant's boarding instructions, settle into the open chair and put loose belongings away. The changing view is enough to do. Watch how the trees frame nearby slopes before the larger city becomes legible. At the upper station, get off as directed and decide whether to take a modest signed walk or return on the lift. You do not need to add an ambitious hill circuit to justify the trip. The ride itself lets Budapest's topography explain something the flat map cannot.",
    rootedness:
      "The Zugliget chairlift is part of Budapest's public-facing transport landscape, linking the neighbourhood below with the János Hill area. BKV and BKK publish its own fares, access and operating rules. It is not an ordinary city bus ride with interchangeable ticket conditions. The contrast between the city and its wooded heights makes this a useful complement to central Budapest rather than another view marketed as a secret panorama.",
    shift:
      "The city becomes a landscape with folds and wooded edges, not just a sequence of buildings beside a river.",
    humanReturn:
      "Return with a clearer sense of where Budapest sits, and a small moving view that differs from a fixed lookout photograph.",
    responsibility:
      "This is an open chairlift, not an enclosed gondola. Consider height sensitivity and boarding mobility before buying a ticket. Ask the operator about specific access needs. Children under ten need an accompanying adult under the published rules. Weather and scheduled maintenance can stop service. The 2026 calendar includes November 9 and 23 and December 7 and 21 closures. Hours shorten seasonally. Hold the safety bar as instructed, never leave the chair in motion and follow the requirement to disembark at each station.",
    evidence:
      "BKV and BKK provide primary operational and safety information. EA has not ridden the current service, assessed individual suitability or confirmed weather for a future date.",
    duration:
      "Allow 60 to 90 minutes for the lift visit, plus travel and any walk",
    participation:
      "A ticketed chairlift ride with optional self-directed walking",
    access:
      "Use the current BKV instructions for the lower station at Zugligeti út 97. Bus 291 serves the approach. Buy the chairlift's own applicable ticket and plan the return before the day's final operation.",
    guideReview: review("public_admission", [
      [
        "BKV: chairlift information",
        "https://www.bkv.hu/en/funicular_and_chairlift",
        "Primary access, seasonal operation and separate ticket information.",
      ],
      [
        "BKK: chairlift rules and maintenance",
        "https://bkk.hu/en/travel-information/special-and-heritage-transport-services/chairlift",
        "Boarding requirements, child supervision, weather and 2026 maintenance dates.",
      ],
    ]),
  },
  {
    id: "oslo-hovedoya-ferry-walk",
    slug: "take-an-oslo-city-ticket-to-an-island-walk",
    title: "Take an Oslo city ticket to an island walk",
    field: "move",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    place: "Oslo, Hovedøya",
    summary:
      "Board the public ferry at Aker Brygge, step onto Hovedøya and walk between woodland and monastery ruins within sight of Oslo.",
    kernel:
      "Plan the return ferry before boarding the outward one. On the crossing, notice how quickly the waterfront changes from city frontage to a low wooded island. Follow the public paths from the landing and choose a walk that suits the daylight and weather. The monastery ruins give the route a point to pause, but the experience also lies in the short passages between trees, open ground and water. Take a snack if you want a longer stop. You can spend an ordinary afternoon here without buying a guided cruise or making the island a full-day expedition.",
    rootedness:
      "Hovedøya sits within Oslo's inner-fjord public transport network. Ruter operates the island service, and VisitOSLO identifies the island's woodland, protected areas and twelfth-century monastery ruins. That combination makes the ferry a way into everyday geography as well as heritage. The guide concerns a public crossing and an independent walk on Hovedøya. It is not a packaged island-hopping tour, a wilderness expedition or permission to enter private cabins on neighbouring islands.",
    shift:
      "A public transport ticket stops being only a way across town and becomes a way to change the scale of your day.",
    humanReturn:
      "Keep a practical escape route from central Oslo and a more grounded sense of the fjord beyond its postcard edge.",
    responsibility:
      "Use the current B1 timetable and check the actual departure pier. The B1X shuttle is seasonal and should not be assumed in winter. Buy the correct ticket before boarding and allow for queues and weather disruption. Never rely on the final ferry as your only return option. Parts of Hovedøya are protected. Stay on established paths, leave plants and wildlife alone and do not camp or light a fire. Summer café opening is not a winter food plan. Confirm vessel and path accessibility directly.",
    evidence:
      "Ruter confirms the public boat network and current timetables. VisitOSLO provides island-specific access and conservation context. EA has not checked trail conditions, the next sailing or an individual's mobility needs on site.",
    duration: "Allow two to three hours including ferries and a modest walk",
    participation: "Public transport followed by independent island walking",
    access:
      "Plan a B1 journey from Aker Brygge to Hovedøya through Ruter. Check the current zone, ticket and return sailing. No charter, guide, meal or EA transport booking is included.",
    guideReview: review("public_admission", [
      [
        "Ruter: boat timetables",
        "https://ruter.no/planlegg-reise/rutetabeller-og-linjekart/baat",
        "Primary current sailing tables, including the winter B1 timetable.",
      ],
      [
        "Ruter: practical boat information",
        "https://ruter.no/en/practical-information/boat",
        "Public island service and ticket context.",
      ],
      [
        "VisitOSLO: Hovedøya",
        "https://www.visitoslo.com/attraction/hoved-ya-island",
        "Island paths, monastery ruins, protected nature and seasonal café boundaries.",
      ],
    ]),
  },
  {
    id: "dubrovnik-city-walls-walk",
    slug: "walk-dubrovnik-between-rooftops-and-sea",
    title: "Walk Dubrovnik between rooftops and sea",
    field: "move",
    country: "Croatia",
    countrySlug: "croatia",
    regionSlug: "dubrovnik",
    place: "Dubrovnik, Old Town walls",
    summary:
      "Walk the city walls as a changing view of Dubrovnik's roofs, streets and coastline, not just a high place to take the same photograph.",
    kernel:
      "Enter with enough time to walk comfortably before the day's closing arrangements. Follow the marked direction and pause only where others can pass. On one stretch, look inward at how roofs and narrow streets fit inside the boundary. On another, face the sea and notice why the city needed different kinds of edges. You do not have to name every tower to understand that shift. Let the route alternate between close detail and the larger outline. Descending into the streets afterwards gives the elevated view a useful second reading at ground level.",
    rootedness:
      "The Society of Friends of Dubrovnik Antiquities describes a roughly 1.94-kilometre defensive circuit developed over centuries and manages visitor access. The walk is therefore both a familiar landmark visit and a way to understand the compact city's form. It is not presented as an unknown place, a film-set experience or a route into residents' private homes. Looking down does not make everyday life below part of the admission ticket.",
    shift:
      "A famous skyline becomes a set of relationships between shelter, street, harbour and exposed coastline.",
    humanReturn:
      "Leave with a mental map you can use in the Old Town, rather than only a collection of elevated views.",
    responsibility:
      "Expect stairs, exposed stretches and uneven stone. This is not a step-free circuit. Choose suitable footwear, carry water and avoid heat or poor weather beyond your comfort. Follow staff instructions and keep children close. Do not climb, lean over or pose on edges. Keep the ticket until the end, as the operator does not permit re-entry. Confirm current hours and prices directly. The operator's FAQ retains an obsolete kuna reference, which is not used here. Commercial filming needs separate approval.",
    evidence:
      "The managing society confirms ordinary ticketed, self-guided access, conduct rules and the circuit's architectural context. EA has not inspected today's route or verified a specific closing time.",
    duration:
      "Allow about 90 minutes to two hours, depending on pace and conditions",
    participation: "A self-guided walk on the ticketed walls",
    access:
      "Use the managing society's official ticket route and current entrance notices. A guide is not required for ordinary admission. Check the day's route and closing instructions before beginning. No EA ticketing is provided.",
    guideReview: review("public_admission", [
      [
        "Dubrovnik City Walls: visitor FAQ and conduct",
        "https://citywallsdubrovnik.hr/faq/",
        "Primary access and safety rules. Obsolete currency information is explicitly excluded.",
      ],
      [
        "Society of Friends of Dubrovnik Antiquities: city walls",
        "https://citywallsdubrovnik.hr/",
        "The managing society's architectural history, circuit length and conduct rules.",
      ],
    ]),
  },
  {
    id: "bologna-archiginnasio-theatre",
    slug: "read-a-bologna-lecture-room-carved-in-wood",
    title: "Read a Bologna lecture room carved in wood",
    field: "learn",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "bologna",
    place: "Bologna, Archiginnasio",
    summary:
      "Step into the Archiginnasio's anatomical theatre and see how a room was designed to organise looking, teaching and authority.",
    kernel:
      "Book the theatre visit, then give the room a few quiet minutes before searching for its most photographed detail. Look at the relationship between the central table, the surrounding benches and the carved figures above. Imagine where attention would have been directed from different positions. Read the interpretation rather than treating every carved body as merely decoration. Outside the theatre, the palace's inscriptions and coats of arms offer another way to notice who belonged to its academic world. A short visit works best when you leave with one spatial question answered rather than every name memorised.",
    rootedness:
      "The Archiginnasio brought Bologna's university teaching into one sixteenth-century palace. The institution identifies the wooden anatomical theatre as a seventeenth-century teaching room. Today the building also houses a working library, and tourist admission is deliberately bounded. This guide concerns the architecture and history of learning, not a medical demonstration or access to human remains. The attraction is how an institution made knowledge visible, and how much that ambition can still be read in the arrangement of a room.",
    shift:
      "A beautiful interior becomes evidence of how people were expected to watch, learn and accept a teacher's authority.",
    humanReturn:
      "Take a more questioning eye into the next historic lecture hall or museum, noticing who could see what and from where.",
    responsibility:
      "Online reservation is mandatory for the anatomical theatre. The Stabat Mater room is included only when library activities allow. Library rooms themselves are not open for tourist visits. The current palace schedule closes on Sundays. Follow quiet-use and photography rules. Visitors with mobility needs should read the separate entrance instructions for Via de' Foscherari 2 and contact staff within the published access hours. Do not assume that a standard entrance ticket covers every room or a guided explanation in your language.",
    evidence:
      "The Archiginnasio's September 2026 visitor update establishes compulsory booking and room boundaries. Its visit page provides the official planning route. EA has not toured the rooms or tested the access arrangement.",
    duration: "Allow 45 to 75 minutes",
    participation:
      "A reserved public visit focused on a historic teaching space",
    access:
      "Book the anatomical theatre through the Archiginnasio's official visitor links for Piazza Galvani 1. Check which adjoining room is available on your date. No EA ticket or guided tour is included.",
    guideReview: review("public_admission", [
      [
        "Archiginnasio: palace and visiting rules",
        "https://www.archiginnasio.it/palazzo-dell-archiginnasio",
        "Primary September 2026 access update, mandatory booking, room limits and mobility entrance.",
      ],
      [
        "Archiginnasio: visit the palace",
        "https://www.archiginnasio.it/visita-l-archiginnasio",
        "Official room-by-room historical interpretation, not independent review.",
      ],
    ]),
  },
  {
    id: "osaka-housing-living-street",
    slug: "walk-through-a-day-in-recreated-old-osaka",
    title: "Walk through a day in recreated old Osaka",
    field: "learn",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "osaka",
    place: "Osaka, Tenjinbashi",
    summary:
      "At the Museum of Housing and Living, a full-size reconstructed street lets you examine ordinary urban life while indoor light moves from day towards night.",
    kernel:
      "Start by recognising what the room is: a carefully built museum reconstruction, not an untouched historic neighbourhood. Walk slowly enough to compare the widths of the street, doorways and interiors. Look for the practical details that would organise a household or a shop, then watch how the lighting changes your reading of the same space. The upper viewing level offers a second scale from which to understand the arrangement. Return to one detail at street level afterwards. You are looking at how a city worked, not trying to stage yourself as a resident from another century.",
    rootedness:
      "Osaka's destination organisation and metro guide describe the museum's full-scale recreation of an 1830s townscape, within the Housing Information Center at Tenjinbashi. The subject is domestic and urban life rather than only major monuments. Its location beside a living commercial district makes the return to today's streets part of the interest. Reconstruction is the method here. Furnishings, lighting and interpretation are museum choices, not direct evidence that every household in historical Osaka lived identically.",
    shift:
      "History becomes a question of room size, thresholds and daily movement rather than just dates and famous people.",
    humanReturn:
      "Leave with sharper attention to the small design decisions that make a neighbourhood usable, then notice their modern equivalents outside.",
    responsibility:
      "Check the museum's latest notice before travelling. Public destination and metro listings state Tuesday and New Year closures, but special changes remain possible. The museum's own site was rate-limited during this check, so no new temporary programme is promised. Confirm accessible routes, language support and group conditions directly. Touch only what staff permit. Kimono rental, volunteer tours and demonstrations are separate, variable offers, not part of this guide's guaranteed scope. Observe other visitors' privacy.",
    evidence:
      "Official Osaka tourism and Osaka Metro describe ordinary admission and the reconstructed street. These are public-source checks, not an EA visit. The museum website could not be fully rechecked, so event availability and temporary closures remain explicit uncertainties.",
    duration: "Allow 60 to 90 minutes",
    participation: "Self-directed museum observation",
    access:
      "Use the official Osaka visitor listing to plan the Museum of Housing and Living at 6-4-20 Tenjinbashi, near Tenjimbashisuji 6-chome station. Verify the museum's current notice before making a special journey.",
    guideReview: review(
      "public_admission",
      [
        [
          "OSAKA-INFO: Museum of Housing and Living",
          "https://osaka-info.jp/experience/en/osaka/spot/241",
          "Official destination description of the full-scale street, lighting and ordinary admission.",
        ],
        [
          "Osaka Metro: Museum of Housing and Living",
          "https://metronine.osaka/en/spot-details/?spot_id=15609370675335",
          "Transit access and closure pattern. The listing identifies its information date as October 2025.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "new-york-transit-museum-cars",
    slug: "step-inside-the-subways-new-york-used-to-ride",
    title: "Step inside the subways New York used to ride",
    field: "learn",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    place: "New York, Downtown Brooklyn",
    summary:
      "Descend into the New York Transit Museum and compare historic subway cars from the platform of a real former station.",
    kernel:
      "Begin at platform level with one car rather than trying to photograph the whole fleet. Look at its seats, handles, doors and signs, then compare a second vehicle. What changed for a passenger trying to find a place, read a destination or hold on during a journey? Use the exhibit labels to distinguish original material from restoration and interpretation. The surrounding station matters too. You are reading transport from inside a space built for it, before returning to a city where the same problems of movement and wayfinding continue every day.",
    rootedness:
      "The museum occupies the decommissioned Court Street station in Downtown Brooklyn. Its ongoing Moving the Millions display brings historic subway and elevated cars together on a station platform. The wider exhibitions interpret construction, fares, buses and information design. This guide is for the public Brooklyn museum, not the restricted Old City Hall station tour or a ride on a heritage train. That distinction keeps an appealing idea connected to an admission a visitor can actually purchase.",
    shift:
      "A commute becomes a designed experience whose familiar details were once choices people had to make.",
    humanReturn:
      "Notice a handle, seat or platform sign differently on your next subway trip, with a real comparison to something you have just examined.",
    responsibility:
      "Advance tickets are strongly encouraged. The current museum schedule is Wednesday through Sunday, with holiday exceptions. Children aged fifteen and under need an adult. Groups of eight or more should use the museum's group arrangements rather than assume ordinary self-guided access. The main entrance has two flights of stairs. Consult the separate accessible entrance at Schermerhorn and Court Streets before arrival. Follow car-entry and photography notices. The station is only partly climate-controlled, and no particular vehicle is guaranteed to remain on display.",
    evidence:
      "The museum's current visitor guidance and exhibit list establish public admission and the historic-car platform. EA has not inspected the current arrangement or tested the accessible entrance.",
    duration: "Allow 90 minutes to two hours",
    participation: "A ticketed, self-directed transport museum visit",
    access:
      "Book the Brooklyn New York Transit Museum at 99 Schermerhorn Street through its official visitor page. This is not an Old City Hall tour, Grand Central gallery ticket or heritage train excursion. No EA ticket booking is provided.",
    guideReview: review("public_admission", [
      [
        "New York Transit Museum: know before you visit",
        "https://www.nytransitmuseum.org/know-before-you-visit/",
        "Primary ticket, age, group, access and operating rules.",
      ],
      [
        "New York Transit Museum: current exhibits",
        "https://www.nytransitmuseum.org/exhibits/",
        "Moving the Millions and other public Brooklyn exhibits. Temporary displays are not promised indefinitely.",
      ],
    ]),
  },
  {
    id: "vienna-amalienbad-swim",
    slug: "swim-through-viennas-everyday-architecture",
    title: "Swim through Vienna's everyday architecture",
    field: "restore",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    place: "Vienna, Favoriten",
    summary:
      "Take an ordinary public swim at Amalienbad, where a striking historic hall remains a place to change, enter the water and do a few lengths.",
    kernel:
      "Choose a public swimming session from the city's timetable and bring what you need for an ordinary pool visit. Before entering the water, take in the hall without making other swimmers part of a photograph. Then let the architecture become the setting rather than the task. Follow the lane arrangement, swim at a pace you can sustain and take a break when you need one. The experience does not require a special treatment or a spa package. A familiar physical routine can be a direct way to inhabit a city building instead of merely looking at it.",
    rootedness:
      "Amalienbad is a municipal bath at Reumannplatz in Favoriten, not a hotel facility reserved for guests. Vienna's destination information places its historic design within the city's public bathing culture. Its continuing practical use is the point. Beautiful civic architecture need not be separated from everyday exercise. This guide covers the swimming hall, not sauna rituals, medical treatment or access to every pool and facility visible in photographs.",
    shift:
      "An architectural visit becomes something you experience at water level, through use rather than observation alone.",
    humanReturn:
      "Keep a simple way to reset during a Vienna stay and a memory of a public building that includes movement, sound and scale.",
    responsibility:
      "Use the swimming-hall timetable, which differs from sauna hours. The current winter schedule closes on Mondays and reserves some periods for schools and clubs. Early swimming requires a ticket bought in advance because the cashier is closed. The diving tower is for schools and clubs only. Swim within your ability, supervise children and follow pool rules. Confirm any mobility assistance in advance. The city lists a pool lift and other access facilities, but availability and suitability must be checked for your needs. Respect changing-room and swimmer privacy.",
    evidence:
      "Vienna's municipal page was updated on 23 October 2026 and publishes the winter timetable, ticket conditions and facilities. EA has not visited, assessed water conditions or promised a therapeutic benefit.",
    duration: "Allow 60 to 90 minutes including changing",
    participation: "An ordinary public swimming session",
    access:
      "Buy the applicable municipal swimming ticket for Amalienbad, Reumannplatz 23. Check your exact date and public swimming window. Sauna admission and other services have separate conditions.",
    guideReview: review("public_admission", [
      [
        "City of Vienna: Amalienbad",
        "https://www.wien.gv.at/freizeit/amalienbad",
        "Primary October 2026 update with public swimming windows, early-ticket rule and restricted diving tower.",
      ],
      [
        "Vienna tourism: indoor pools",
        "https://www.wien.info/en/livable-vienna/sports/indoor-pools-355458",
        "Architectural and civic bathing context, not a water-quality assessment.",
      ],
    ]),
  },
  {
    id: "kyoto-murinan-water-garden",
    slug: "follow-water-through-murin-ans-borrowed-landscape",
    title: "Follow water through Murin-an's borrowed landscape",
    field: "restore",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    place: "Kyoto, Okazaki",
    summary:
      "At Murin-an, follow a garden stream with your eyes and notice where a small Kyoto garden begins to borrow the hills beyond it.",
    kernel:
      "Reserve an entry time and arrive without rushing the final approach. Once inside, choose one point from which to look rather than immediately tracing every path. Follow the water visually through stones and planting, then lift your gaze towards the landscape beyond. Move to another permitted viewpoint and compare what disappears or becomes more prominent. The garden offers enough material for an attentive hour without a checklist of seasonal photographs. If a room is open to your ticket, let its frame provide another way to look, while respecting staff directions and other visitors' space.",
    rootedness:
      "Kyoto's official tourism account identifies Murin-an with gardener Ogawa Jihei, water from the Lake Biwa Canal and views towards Higashiyama. The garden connects designed ground to infrastructure and a larger landscape. It is not wilderness and need not be described as a spiritual retreat to justify a quiet visit. The visitor's role is to notice how the composition works while remaining on the spaces intended for public use.",
    shift:
      "A garden becomes a relationship between water, foreground and distant hills, not only an attractive collection of plants.",
    humanReturn:
      "Leave with a way of looking you can reuse in another garden, including the ability to notice what lies beyond its formal boundary.",
    responsibility:
      "Advance reservations are strongly advised within the site's timed-entry system. Read the cancellation and late-arrival terms before paying. Murin-an announces a repair closure on 9 December 2026 and its regular closure on 29 to 31 December. Check again before travel. Tea, specialist tours, the teahouse and the main house's second floor are not all included in ordinary entry. Stay off moss and lawns. Tripods, selfie sticks and organised photography or filming have additional restrictions. Confirm accessible paths and seating directly.",
    evidence:
      "Murin-an publishes admission scope, booking conditions and closures. Kyoto's destination organisation supplies design context. EA has not visited or guaranteed autumn colour, quiet, weather or access to a particular room.",
    duration: "Allow about an hour within your admission conditions",
    participation: "A reserved, self-directed garden visit",
    access:
      "Reserve ordinary Murin-an garden admission through the official site. Read the exact ticket inclusions and arrival window. Do not assume a tea ceremony or guided interpretation is bundled into admission.",
    guideReview: review("public_admission", [
      [
        "Murin-an: visitor information",
        "https://murin-an.jp/en/info/",
        "Primary reservations, room scope, holiday closures and photography conditions.",
      ],
      [
        "Murin-an: current notices",
        "https://murin-an.jp/en/",
        "December 9, 2026 repair closure notice.",
      ],
      [
        "Kyoto Travel: Murin-an",
        "https://kyoto.travel/en/destinations/murinan/",
        "Official design context for the garden, canal water and borrowed landscape.",
      ],
    ]),
  },
  {
    id: "singapore-chinese-garden-pause",
    slug: "slow-a-singapore-afternoon-beside-the-chinese-garden",
    title: "Slow a Singapore afternoon beside the Chinese Garden",
    field: "restore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Jurong Lake Gardens",
    summary:
      "Follow water, bridges and garden landmarks through the Chinese Garden at Jurong Lake, leaving room for a pause instead of another city checklist.",
    kernel:
      "Check the current closure notice, then choose a modest route through open parts of the Chinese Garden. Let one bridge or pavilion become a place to stop and look back at the water you have just crossed. Compare the planted foreground with the larger lake setting. You do not need to cover every garden in the park or climb every landmark to have a worthwhile visit. Bring water, choose cooler conditions and allow yourself to turn back. The experience is a change of pace within Singapore, not a race to collect all of its designed landscapes.",
    rootedness:
      "NParks reopened the rejuvenated Chinese and Japanese gardens in 2024 as part of Jurong Lake Gardens. The Chinese Garden retains recognisable landmarks while adding new landscape elements. This is a maintained public garden with a history of design and renewal, not an untouched ancient place or a summary of all Chinese garden traditions. Its western Singapore setting also provides a useful counterpoint to itineraries that remain entirely around the central waterfront.",
    shift:
      "A garden visit becomes a sequence of pauses and changing viewpoints rather than a list of structures to reach.",
    humanReturn:
      "Keep a generous public-space option for a slower day, especially when you want greenery without booking a guided activity.",
    responsibility:
      "Read NParks' live advisories before travelling. Waterwall Court is currently closed until further notice and is excluded from this route. Do not cross barriers for a photograph. Garden features and facilities can have shorter hours than the wider park. Prepare for heat and rain, stop outdoor activity during lightning alerts and follow local signs. Do not feed wildlife or disturb planting. Confirm accessible routes and toilets for your needs, as temporary closures can change the easiest approach. No calm weather or empty viewpoint is guaranteed.",
    evidence:
      "NParks' current visitor page establishes closure notices, while its reopening account explains the renewed garden and retained landmarks. EA has not inspected today's paths or assessed a specific route for mobility access.",
    duration: "Allow 60 to 90 minutes, with a shorter route in hot weather",
    participation:
      "Independent walking and resting in open public garden areas",
    access:
      "Use NParks' Jurong Lake Gardens visitor information to plan the Chinese Garden entrance and current open paths. Ordinary garden access does not require an EA booking. Any event or special facility has its own conditions.",
    guideReview: review("public_observation", [
      [
        "NParks: plan your visit",
        "https://juronglakegardens.nparks.gov.sg/plan-your-visit/",
        "Current closure advisories, including Waterwall Court.",
      ],
      [
        "NParks: Chinese and Japanese gardens reopening",
        "https://www.nparks.gov.sg/news/news-detail/nparks-completes-jurong-lake-gardens-with-opening-of-rejuvenated-chinese-and-japanese-gardens",
        "Official context for the 2024 renewal and retained Chinese Garden landmarks.",
      ],
    ]),
  },
  {
    id: "krakow-hejnal-listening",
    slug: "let-krakows-next-hour-begin-with-a-trumpet",
    title: "Let Kraków's next hour begin with a trumpet",
    field: "gather",
    country: "Poland",
    countrySlug: "poland",
    regionSlug: "krakow",
    place: "Kraków, Main Market Square",
    summary:
      "Pause in the Main Market Square before the hour and listen for the live hejnał from St Mary's taller tower.",
    kernel:
      "Arrive a few minutes before the hour and find somewhere to stand without blocking a doorway or the flow across the square. Put the phone away for the first call. Notice where the sound seems to come from and how the surrounding city continues underneath it. The trumpeter plays towards different directions, so you may hear the same short phrase differently as the sequence continues. Stay through the ending rather than treating the first notes as a cue to leave. A few minutes of listening can give a very familiar square an entirely different shape.",
    rootedness:
      "Kraków's municipal account describes a live hourly call from St Mary's taller tower, performed by firefighter trumpeters. The city also distinguishes the public square experience from being beside the player at noon, which is not ordinary visitor access. Stories about the melody's abrupt ending belong to the tradition's interpretation. The arrow-struck watchman is presented as legend, not a verified explanation of the music. You can appreciate the practice without turning the story into historical certainty.",
    shift:
      "A landmark stops being only something to look at and becomes something that marks time for the city around it.",
    humanReturn:
      "Leave with a sound attached to a particular place and a simple reason to pause when a busy itinerary would otherwise keep you moving.",
    responsibility:
      "This guide is for listening from the public square, not a tower visit, church service or private demonstration. No ticket is needed for the square itself. Weather, street noise and temporary operational changes can affect what you hear. Do not crowd access doors, interrupt worshippers or obstruct working staff. If you record, avoid identifiable bystanders and follow applicable local rules. People who cannot hear the call may find the city's live camera useful, but it is not described as an equivalent sensory experience.",
    evidence:
      "Kraków's municipal cultural listing and June 2026 report corroborate the ongoing hourly practice. The city's noon-camera page clarifies the access boundary. EA has not witnessed a current call or guaranteed a specific performance.",
    duration: "Allow 10 to 15 minutes around the hour",
    participation: "Listening from a public square",
    access:
      "Stand in a suitable public part of Rynek Główny near St Mary's Basilica shortly before the hour. This does not require joining a tour. Tower admission, where available, is a separate arrangement.",
    guideReview: review("public_observation", [
      [
        "City of Kraków: hejnał",
        "https://krakow.pl/instcbi/72182/inst/16423/1803/Hejnal.html",
        "Municipal description of the hourly live call and listening from the square.",
      ],
      [
        "City of Kraków: a trumpeter in the tower",
        "https://krakow.pl/aktualnosci/326325%2C29%2Ckomunikat%2Cz_trabka_na_wiezy__czyli_o_krakowskim_hejnale.html",
        "June 2026 report corroborating the continuing practice.",
      ],
      [
        "City of Kraków: noon broadcast",
        "https://krakow.pl/302508%2Cartykul%2Chejnal_z_wiezy_mariackiej_12_00.html",
        "Explicit distinction between observing from the square and standing beside the trumpeter.",
      ],
    ]),
  },
  {
    id: "hanoi-binh-minh-jazz",
    slug: "hear-hanoi-answer-in-jazz",
    title: "Hear Hanoi answer in jazz",
    field: "gather",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "hanoi",
    place: "Hanoi, Tràng Tiền",
    summary:
      "Spend a set at Bình Minh Jazz Club and encounter Hanoi through musicians working with improvisation, familiar standards and their own changing programme.",
    kernel:
      "Check the evening's arrangement and arrive before the music begins. Choose a place where you can listen without interrupting the players or moving through other people's view. Follow one exchange between instruments rather than waiting for a tune you already know. Notice when a phrase is repeated, altered or answered. The room may offer standards or music with Vietnamese references, but neither should be demanded as proof of a local experience. Your part is to listen to the people performing that evening, not ask them to supply a soundtrack to an imagined version of Hanoi.",
    rootedness:
      "Bình Minh's official account connects the club to saxophonist Quyền Văn Minh and the development of a public jazz scene in Hanoi. The current address is 1A Tràng Tiền, near the Opera House. The music is contemporary cultural life, not a heritage demonstration arranged only for visitors. A changing ensemble and repertoire are part of that distinction. This guide does not promise that either the founder or his son will appear on a particular night.",
    shift:
      "A city associated with familiar street scenes gains another voice through a room where musicians listen and respond to one another.",
    humanReturn:
      "Leave with an artist or musical phrase to follow, and a reason to seek out a city's working venues rather than only its advertised traditional shows.",
    responsibility:
      "The official site currently lists evening music from 21:00 to 23:15 and a live-music cover charge. An older testimonial on the same site says there is no charge, so use the current booking information instead. Confirm the total cost, seating, access and any age restrictions before attending. Alcohol is optional. Ask before photographing or recording, keep conversation low during music and arrange your own return transport. A reservation does not guarantee a named musician or repertoire.",
    evidence:
      "The official site was directly accessible during this check and supplies the current address, schedule and cover-charge notice. ArrivalGuides corroborates a nightly jazz venue, but its older address wording is not preferred over the operator's. EA has not attended or assessed a performance.",
    duration: "Allow one set or the evening's roughly two-hour programme",
    participation: "Attendance as a listening audience member",
    access:
      "Use Bình Minh Jazz Club's official reservation route for 1A Tràng Tiền. Confirm the date, cover and seating directly. No EA ticket, meal or guaranteed artist appearance is included.",
    guideReview: review(
      "public_programme",
      [
        [
          "Bình Minh Jazz Club: official programme and reservation",
          "https://minhjazzvietnam.com/",
          "Direct primary check of current evening hours, address and cover charge. Old quoted no-cover text is excluded.",
        ],
        [
          "ArrivalGuides: Bình Minh Jazz Club",
          "https://www.arrivalguides.com/en/Travelguide/HANOI/barsandnightlife/binh-minh-s-jazz-club-111363",
          "Additional public-venue corroboration. Operator information takes priority for current practical details.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "vienna-porgy-bess-listening",
    slug: "hear-viennas-musical-life-beyond-the-concert-hall",
    title: "Hear Vienna's musical life beyond the concert hall",
    field: "gather",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "vienna",
    place: "Vienna, Riemergasse",
    summary:
      "Choose a live performance at Porgy & Bess and give Vienna's present-tense musical life the attention usually reserved for its classical landmarks.",
    kernel:
      "Start with the programme, not just the venue name. Read about the ensemble and choose a live concert that makes you curious, then verify the room and ticket type. Once seated, follow how one musical idea moves between players. You do not need specialist vocabulary to hear a rhythm change or a solo draw a response. Let the unfamiliar remain unfamiliar for a while. A whole set gives music time to develop in a way a short clip cannot, and makes the audience part of a shared stretch of attention.",
    rootedness:
      "Porgy & Bess is a continuing part of Vienna's jazz and wider music scene, presenting Austrian and international performers at Riemergasse. Its programme reaches beyond a single genre, and the main stage differs from the smaller Strenge Kammer. The point is to attend a real dated event in a working venue. It is not a guarantee of traditional Austrian repertoire or a claim that a jazz ticket reveals a more genuine Vienna than an orchestral concert.",
    shift:
      "Vienna's musical identity becomes something people are making now, not only something preserved in famous halls.",
    humanReturn:
      "Take away a performer to follow and another way to build an evening around curiosity rather than a checklist of landmarks.",
    responsibility:
      "Buy the exact live event, not a stream or replay listing. A ticket normally reserves a seat unless marked standing, and seats are held only until the advertised start. Contact the venue ahead for wheelchair spaces, which are limited. Child concessions and conditions can differ for outside promoters. Check the selected event rather than assuming a universal rule. Photography and filming are prohibited without advance permission. The cloakroom requires cash. Confirm cancellation terms, doors and return transport before attending.",
    evidence:
      "The official upcoming calendar lists live performances beyond the review date, while the FAQ publishes practical boundaries. Vienna's destination organisation corroborates the venue's musical context. EA has not attended, assessed acoustics or guaranteed availability.",
    duration:
      "Allow an evening, with the actual running time checked per event",
    participation: "A ticketed live audience performance",
    access:
      "Book a dated live concert through Porgy & Bess's official calendar at Riemergasse 11. Verify the stage, seat or standing category and organiser. Food, transport and EA booking services are not included.",
    guideReview: review(
      "public_programme",
      [
        [
          "Porgy & Bess: upcoming events",
          "https://www.porgy.at/en/events/upcoming",
          "Current dated live programme, distinct from stream and replay listings.",
        ],
        [
          "Porgy & Bess: visitor FAQ",
          "https://www.porgy.at/en/page/faq/",
          "Seating, limited wheelchair spaces, age conditions, cloakroom and recording prohibition.",
        ],
        [
          "Vienna tourism: Porgy & Bess",
          "https://www.wien.info/en/dine-drink/bars-clubs/live-locations/porgy-bess-355534",
          "Destination context for the current Riemergasse venue.",
        ],
      ],
      "2026-12-26",
    ),
  },
];
export const guideBatch58: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
