import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-10",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-17",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

export const guideBatch46: PublicExperience[] = [
  {
    id: "marrakech-amal",
    slug: "cook-a-tagine-before-lifting-the-lid",
    title: "Cook a tagine before lifting the lid",
    summary:
      "Prepare a Moroccan dish at Amal's Targa centre, then sit down to the meal you helped make.",
    field: "taste",
    place: "Marrakech, Targa",
    country: "Morocco",
    countrySlug: "morocco",
    regionSlug: "marrakech",
    ...common,
    ...guideImage("marrakech-amal"),
    kernel:
      "Book a cooking class at the Targa centre and choose the tagine format if you want to follow the charcoal-cooking stage. Begin with spices and preparation, work with the teaching team, then watch how the vessel holds ingredients together. A tea ceremony and the shared meal give the cooking an ending beyond a photograph of the lid.",
    rootedness:
      "Amal runs a public teaching kitchen alongside a vocational training programme in Marrakech. Its Targa centre is distinct from the Gueliz restaurant and Sign Café. The class offers an instructed encounter with one dish, not access to a private household or evidence that a single recipe represents all Moroccan cooking.",
    shift:
      "From recognising a tagine on a menu to understanding some of the decisions underneath its lid.",
    humanReturn:
      "You have a cooking sequence to remember when the dish appears again.",
    responsibility:
      "Confirm the dish, teaching language, allergies, children's participation and mobility before booking. Couscous, pastilla and baking have different formats and charges. The page's weekday heading conflicts with its Monday-to-Saturday class description, so confirm your actual date. The advertised 09:30 to 13:00 slot is longer than its stated three-hour teaching description. Do not ask trainees for personal stories or photograph them without agreement. Social-impact figures are the organisation's claims, not an EA impact audit.",
    evidence:
      "Amal publishes hands-on preparation, charcoal cooking for tagines, tea and a meal at Targa. Its about page explains the training organisation. EA has not attended, tasted the class or independently evaluated its social outcomes.",
    duration: "Reserve the morning, currently advertised as 09:30 to 13:00",
    participation:
      "Supervised cooking, a tea ceremony and eating the prepared meal",
    access:
      "Use Amal's Targa class reservation form and receive confirmation before travelling. Brunch availability does not establish class availability. No EA booking, transfer or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Amal: Targa cooking classes",
        url: "https://amalnonprofit.org/targa.html",
        note: "Cooking formats, reservation form and conflicting weekday descriptions checked. Confirm the actual session.",
      },
      {
        title: "Amal: about the organisation",
        url: "https://amalnonprofit.org/about.html",
        note: "The organisation's account of its training purpose, not independent impact validation.",
      },
    ]),
  },
  {
    id: "lima-skykitchen",
    slug: "cook-lima-beyond-the-ceviche",
    title: "Cook Lima beyond the ceviche",
    summary:
      "Make a four-dish Peruvian Classics meal in Miraflores and give a familiar cuisine a practical vocabulary.",
    field: "taste",
    place: "Lima, Miraflores",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    ...common,
    ...guideImage("lima-skykitchen"),
    kernel:
      "Choose SkyKitchen's Peruvian Classics class. Prepare causa, ceviche, lomo saltado and picarones with instruction, then eat the meal you have helped cook. Compare the different jobs given to potato, fish, a hot pan and a sweet finish. A menu that first reads as four names becomes four different ways to organise a plate.",
    rootedness:
      "A sheltered rooftop teaching space in Miraflores offers a contemporary introduction to Peruvian food. The operator separates this menu from its Andean, seafood and other classes. That distinction is useful: one Lima lesson is a beginning, not a survey of every region or household tradition in Peru.",
    shift:
      "From ordering the dish you recognise to noticing the techniques linking a whole meal.",
    humanReturn:
      "The recipes give you a way to revisit the experience at home, with ingredients you can actually obtain.",
    responsibility:
      "Confirm the chosen menu and language. English, Spanish and German are advertised, but not necessarily in every session. Discuss fish, shellfish, wheat, eggs and other dietary restrictions before payment. Do not assume a raw-fish alternative or a fully separate allergy-safe workspace. The market visit and extended fruit tasting are paid add-ons, not part of this base class. Minimum participant numbers vary by day and meal slot. Ask about rooftop access and age suitability rather than assuming a lift or a children's format.",
    evidence:
      "The current school pages describe the four dishes, approximately three-hour format, teaching languages and separate extras. The contact page gives session and group-size conditions. EA has not cooked or eaten here. The photograph records the school's preparation space, not the four completed dishes or a guaranteed visitor result.",
    duration: "Around 3 hours for the base cooking class",
    participation: "Instructed preparation followed by a shared meal",
    access:
      "Request the Peruvian Classics class directly from SkyKitchen and confirm the Miraflores meeting address, date and party size. Read cancellation terms before paying. No market tour, transport or EA reservation is included.",
    guideReview: review("public_programme", [
      {
        title: "SkyKitchen: classes and menus",
        url: "https://skykitchen.pe/",
        note: "Peruvian Classics menu, duration, languages and separate add-ons.",
      },
      {
        title: "SkyKitchen: class descriptions",
        url: "https://skykitchen.pe/classes/",
        note: "Programme distinctions, not an independent restaurant review.",
      },
      {
        title: "SkyKitchen: reservation conditions",
        url: "https://skykitchen.pe/contact/",
        note: "Session times, minimum numbers and advance confirmation.",
      },
    ]),
  },
  {
    id: "valencia-my-first-paella",
    slug: "follow-valencias-rice-from-market-to-pan",
    title: "Follow Valencia's rice from market to pan",
    summary:
      "Start at Russafa market, then help prepare a Valencian paella and eat it with the group.",
    field: "taste",
    place: "Valencia, Russafa",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "valencia",
    ...common,
    ...guideImage("valencia-my-first-paella"),
    kernel:
      "Choose My First Paella's morning Valencian workshop with the Russafa market visit. Meet at San Valero church, shop with the group, then walk to the teaching kitchen. Follow the cook's sequence as ingredients become a shared rice dish. Pay attention to timing and the layer in the pan rather than looking only for a finished yellow circle.",
    rootedness:
      "Russafa's working food market gives the lesson a neighbourhood setting before it becomes a recipe. The classic option uses chicken, rabbit and vegetables. Seafood and vegetable versions are separately bookable. These are contemporary visitor classes, not a claim that every Valencian household agrees on one formula.",
    shift:
      "From treating paella as a restaurant category to understanding a sequence of decisions around rice.",
    humanReturn:
      "The next pan you order gives you questions about ingredients, heat and time.",
    responsibility:
      "The market closes on Sundays. Confirm whether a chosen date really includes shopping before booking. The evening class meets at the kitchen and is not the same market-led programme. Ask about teaching language, allergies, cross-contact, children's supervision and access. The menu can include shellfish, dairy, meat and alcohol. Non-alcoholic drinks are listed, and drinking is not required. Cooking is shared and instructed, not a promise of a separate pan for each guest.",
    evidence:
      "The operator describes the meeting points, market sequence and recipe options. Its booking page lists the morning format as three and a half hours. Spain's official tourism listing corroborates the programme but explicitly identifies the information as provider-supplied. EA has not attended or tasted the meal.",
    duration: "Around 3.5 hours for the morning market-and-cooking format",
    participation: "Group market visit, instructed cooking and a meal",
    access:
      "Book the named morning Valencian workshop through the operator's official booking link. Check the actual date and meeting instructions. No EA booking, private kitchen access or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "My First Paella: public workshop",
        url: "https://myfirstpaella.es/paella-workshop/",
        note: "Morning and evening meeting points, ingredients and recipe options.",
      },
      {
        title: "My First Paella: public booking",
        url: "https://fareharbor.com/embeds/book/myfirstpaella/?full-items=yes",
        note: "Distinct morning 3.5-hour and evening 3-hour products verified in the public booking interface.",
      },
      {
        title: "Spain tourism: Russafa paella experience",
        url: "https://www.spain.info/en/activities/valencian-paella-visit-ruzafa-market/",
        note: "Official tourism listing with provider-supplied programme information and Sunday market closure.",
      },
    ]),
  },
  {
    id: "bagru-qala",
    slug: "print-a-bagru-repeat-by-hand",
    title: "Print a Bagru repeat by hand",
    summary:
      "Join a three-hour introduction in Bagru, then print one piece using the basic workshop's pigment technique.",
    field: "make",
    place: "Bagru, near Jaipur",
    country: "India",
    countrySlug: "india",
    regionSlug: "bagru",
    ...common,
    ...guideImage("bagru-qala"),
    kernel:
      "Request Qāla's Basic Bagru workshop, rather than its observation-only introductory tour. Begin with the accompanied walk through the printing setting, then print one item under guidance. Place a block, lift it and decide where the next impression belongs. A repeating pattern becomes a problem of alignment, pressure and small differences your eye can follow.",
    rootedness:
      "Qāla advertises work with a village printer and an English-speaking guide in Bagru. Its separate Jaipur Old City workshop is a different location and product. This basic session teaches pigment printing. Do not mistake it for the longer Dabu or other dyeing courses, or for an apprenticeship in the whole textile process.",
    shift:
      "From seeing a textile pattern as decoration to noticing the repeated decisions that hold it together.",
    humanReturn:
      "One printed piece can make the next patterned cloth less anonymous.",
    responsibility:
      "Arrange the date, exact meeting location, language, item, fee and transport directly before travelling. Do not assume a Jaipur pickup, lunch or exclusive workshop. Ask about children's participation, walking surfaces and seated work. Wear clothes suitable for pigment. The accompanied walk is not permission to enter other workshops or photograph workers and private orders. The operator's craft-preservation claims have not been independently evaluated by EA.",
    evidence:
      "Qāla's current programme distinguishes a one-hour tour from the three-hour Basic workshop with one printed item. Its founder's page explains the textile-and-hospitality business. EA has not attended, assessed instruction or verified any individual booking date. Access is an ordinary advance class request, not a right to walk into a production space.",
    duration: "3 hours on the confirmed Basic Bagru workshop",
    participation:
      "Accompanied observation followed by instructed pigment block printing",
    access:
      "Use Qāla's published contact channel to request the named public workshop. Receive confirmation of place and conditions before making transport plans. No EA booking or private artisan introduction is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Qāla: Bagru workshop formats",
          url: "https://www.qala-jaipur.com/",
          note: "Current Basic workshop, duration, printing technique, one-item scope and published contact details.",
        },
        {
          title: "Qāla: about the founder",
          url: "https://www.qala-jaipur.com/about",
          note: "The operator's own background and textile services, not independent heritage certification.",
        },
      ],
      "2026-11-17",
    ),
  },
  {
    id: "london-lcba-foundation",
    slug: "bind-five-ways-of-holding-a-page",
    title: "Bind five ways of holding a page",
    summary:
      "Give three days in east London to learning how five different book structures work by making them.",
    field: "make",
    place: "London, Hackney Wick",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    ...common,
    ...guideImage("london-lcba-foundation"),
    kernel:
      "Book the London Centre for Book Arts' Three-day Foundation course for 2 to 4 December 2026, if places remain. Make pamphlet, concertina, Japanese stab, single-section case and flat-back case structures with instruction. Notice that a book's movement begins before its text. Each method gives a page a different relationship with the next one.",
    rootedness:
      "LCBA is an artist-run studio in an area associated with east London's print industry. Its public teaching sits alongside facilities used by artists and designers. A bookbinding course opens this material side of the city without pretending to be access to a commercial publisher or a qualification in conservation.",
    shift:
      "From looking through a book to noticing how it opens, folds and holds together.",
    humanReturn:
      "You leave with structures you can recognise in books long after the class ends.",
    responsibility:
      "This is a three-day commitment from 10:00 to 17:00, not a short drop-in. The course welcomes beginners and supplies tools and materials. Ask about age suitability and any assistance needed with cutting or handwork. LCBA describes a barrier-free studio but uneven, narrow pavements on routes from stations. Read the cancellation policy before booking. Other November courses are sold out or require intermediate skills and are not interchangeable alternatives.",
    evidence:
      "The dated course page publishes the five structures, instructor, equipment and access details. The public collection showed two remaining places when checked, which is not a held seat. EA has not attended or assessed the teaching. The photograph shows the course's example binding, not an outcome guaranteed to every participant.",
    duration: "Three consecutive days, 2 to 4 December 2026, 10:00 to 17:00",
    participation: "Beginner bookbinding with specialist tools and instruction",
    access:
      "Book the specific dated course directly with LCBA at Britannia Works, 56 Dace Road. Check remaining places and the final course conditions. No EA booking, held seat, studio membership or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "LCBA: December three-day foundation",
          url: "https://londonbookarts.org/collections/workshops/products/introduction-to-bookbinding-three-day-foundation-02-04-december-2026",
          note: "Dated beginner course, structures, teaching hours, accessibility and cancellation terms.",
        },
        {
          title: "LCBA: workshop availability",
          url: "https://londonbookarts.org/collections/workshops",
          note: "Public collection showed two places on this course, unlike several sold-out November options.",
        },
        {
          title: "LCBA: about the studio",
          url: "https://londonbookarts.org/pages/about",
          note: "Artist-run studio and east London print-industry context.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "kuala-lumpur-pewter",
    slug: "hammer-a-pewter-dish-in-kuala-lumpur",
    title: "Hammer a pewter dish in Kuala Lumpur",
    summary:
      "Use a hammer and wooden mould to shape a small dish at Royal Selangor's public visitor centre.",
    field: "make",
    place: "Kuala Lumpur, Setapak Jaya",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "kuala-lumpur",
    ...common,
    ...guideImage("kuala-lumpur-pewter"),
    kernel:
      "Choose the School of Hard Knocks, the thirty-minute workshop, rather than the separate Foundry casting experience. Follow the instructor as a flat piece of pewter becomes a dish through repeated hammering against a wooden mould. Slow down enough to notice how a small strike changes the surface. The object records a sequence your hands can understand.",
    rootedness:
      "Royal Selangor's visitor centre connects the company's pewter production with its account of Kuala Lumpur's tin-working history. A short paid workshop gives one tangible entry into that material story. It is a branded commercial introduction, not evidence that a visitor has learned every production stage or that one company represents all Malaysian metalwork.",
    shift:
      "From admiring a finished metal surface to noticing the work in each shallow mark.",
    humanReturn:
      "The dish makes a small, usable record of learning rather than just another purchase.",
    responsibility:
      "Children under twelve must be supervised by an adult. Ask about hand strength, tool assistance, teaching language and the minimum age appropriate for your child. Admission and guided tours are advertised as free, but the workshop is separately charged. The sixty-minute Foundry has different techniques and age rules. Do not assume a factory demonstration gives permission to handle industrial tools. Confirm transport independently rather than relying on a guaranteed hotel shuttle.",
    evidence:
      "The current visitor centre publishes the workshop's duration, tools and guardian rule. Royal Selangor's main site confirms the visitor centre and explains its Kuala Lumpur tin-working context. Confirm the payable workshop total directly. EA has not attended, handled the tools or assessed the finished object.",
    duration: "30 minutes for the named workshop, plus arrival time",
    participation: "Instructed hammering of a small pewter dish",
    access:
      "Reserve School of Hard Knocks through the visitor centre's official booking channel at 4 Jalan Usahawan 6, Setapak Jaya. Confirm the slot and charge. No EA booking, free workshop or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Royal Selangor: visitor centre workshops",
        url: "https://visitorcentre.royalselangor.com/",
        note: "Thirty-minute School of Hard Knocks, child supervision and distinction from the Foundry.",
      },
      {
        title: "Royal Selangor: visitor centre and craft context",
        url: "https://www.royalselangor.com/my/visitor-centre",
        note: "Company confirmation of its public visitor centre and Kuala Lumpur tin-working context, not independent craft assessment.",
      },
    ]),
  },
  {
    id: "valencia-turia-cycle",
    slug: "cycle-valencias-former-river",
    title: "Cycle Valencia's former river",
    summary:
      "Follow a manageable section of the Turia Garden by bicycle and see how an old riverbed connects a city.",
    field: "move",
    place: "Valencia",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "valencia",
    ...common,
    ...guideImage("valencia-turia-cycle"),
    kernel:
      "Start near the Serranos bridges and choose a comfortable section towards the Palau de la Música. Ride the marked cycle route, stopping clear of it to look up at the bridges and city edges. Add distance towards the City of Arts and Sciences only if the time, route and your confidence suit. The point is to follow a new city level, not complete every kilometre.",
    rootedness:
      "Valencia's former Turia riverbed became a long public garden after the river was diverted. Bridges still reveal the old division while planted paths make a new connection beneath them. A bicycle turns this piece of urban infrastructure into something you can read at a continuous, human scale.",
    shift:
      "From moving between landmarks to understanding the space that joins them.",
    humanReturn:
      "A bridge can become a useful landmark for orientation, not only a photograph taken from above.",
    responsibility:
      "This is an independent public-space ride, not a guided tour or a bicycle rental. Arrange an appropriate bike, helmet and lock separately. Follow signs, respect pedestrians and dismount where instructed. Urban approaches and crossings are not all traffic-free. Heat, rain, maintenance and local diversions can change the practical route. Choose a shorter segment or walk instead if cycling is unsuitable. Do not assume every access ramp suits every adapted bicycle.",
    evidence:
      "Visit València describes cycling through the former riverbed and its main landmarks. Its Green River itinerary supplies additional route and accessibility context. EA has not ridden or inspected today's surface. Distances and timing below are planning allowances, not an audited accessible route or a promised rental package.",
    duration: "Allow 1 to 2 hours for a chosen section and pauses",
    participation: "Self-directed cycling on permitted public paths",
    access:
      "Use the official Turia map and current signs to choose entry and exit points. Public garden access does not include equipment, instruction or attraction tickets. No EA route supervision or booking is implied.",
    guideReview: review("public_observation", [
      {
        title: "Visit València: Turia Garden",
        url: "https://www.visitvalencia.com/en/what-to-do-valencia/nature-in-valencia/parks-and-gardens-valencia/turia-gardens",
        note: "Former riverbed, cycling, landmarks and public access.",
      },
      {
        title: "Visit València: Green River route",
        url: "https://www.visitvalencia.com/en/green-routes",
        note: "The tourist board's public walking and cycling itinerary and access information, not an EA surface inspection.",
      },
    ]),
  },
  {
    id: "london-thames-riverbus",
    slug: "see-london-between-the-riverbus-stops",
    title: "See London between the riverbus stops",
    summary:
      "Take an ordinary riverbus from Tower to Greenwich and let London's working waterline connect the sights.",
    field: "move",
    place: "London, Tower to Greenwich",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    ...common,
    ...guideImage("london-thames-riverbus"),
    kernel:
      "Check a current Uber Boat by Thames Clippers departure from Tower to Greenwich and buy a ticket valid for the journey. Once aboard, notice how towers, wharves and river bends change their relationship as the boat moves. A transport service gives you a connected view of London without requiring a separate sightseeing narrative for every building.",
    rootedness:
      "The riverbus is part of a network serving London piers, not a boat reserved for visitors. Tower to Greenwich is one published example journey. Moving among other passengers gives the familiar river a practical purpose as well as a view. It does not make the journey a locally hosted encounter.",
    shift:
      "From seeing the Thames as the space beside the city to using it as a way through the city.",
    humanReturn:
      "The journey joins places on a mental map that a list of Underground stops cannot provide.",
    responsibility:
      "Check the day's route and timetable because not every boat serves every pier. Tickets must cover the relevant zones. A single journey is not an unlimited hop-on pass. This is a passenger service, not a guided cruise, sailing lesson or guaranteed outdoor seat. Ask about boarding assistance at the actual piers. Some piers are not step-free, and temporary maintenance can affect others. An ordinary Underground fare does not establish riverbus inclusion. Allow for queues, weather and onward travel.",
    evidence:
      "The operator's current route page lists Tower to Greenwich at about twenty-three minutes and describes zone-based tickets. Its ticket information distinguishes products. EA has not travelled this service or checked a particular departure in person. The photograph shows a vessel at Greenwich in 2023, not a future sailing assignment.",
    duration:
      "Published example crossing around 23 minutes, plus waiting and boarding",
    participation: "Travel as an ordinary riverbus passenger",
    access:
      "Check the official route and buy the appropriate ticket through Thames Clippers' channels. Confirm Tower and Greenwich stops for your departure. No EA booking, reserved seat, transfer, commentary or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Thames Clippers: current routes",
        url: "https://www.thamesclippers.com/plan-your-journey/route-map",
        note: "Tower to Greenwich example, service variations, zones and pier accessibility exceptions.",
      },
      {
        title: "Thames Clippers: ticket information",
        url: "https://www.thamesclippers.com/plan-your-journey/ticket-information",
        note: "Ticket products and conditions. A single journey is not a day pass.",
      },
    ]),
  },
  {
    id: "melbourne-lake-punt",
    slug: "drift-through-melbourne-at-pole-length",
    title: "Drift through Melbourne at pole length",
    summary:
      "Sit low on the Ornamental Lake while a guide poles a punt through Melbourne's botanical setting.",
    field: "move",
    place: "Melbourne, Royal Botanic Gardens",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    ...common,
    ...guideImage("melbourne-lake-punt"),
    kernel:
      "Choose Punting on the Lake's thirty-minute guided format. Board at the landing opposite the Terrace Café and let the guide move the boat with a pole. Notice how the bank, planting and reflections change when your eyes are closer to the water. Your role is to sit, look and listen, not to learn to punt.",
    rootedness:
      "The public visitor programme uses the Ornamental Lake inside Melbourne's Royal Botanic Gardens. It offers a cultivated urban waterscape, not an excursion into wild habitat. A botanical garden you might otherwise cross on foot becomes a different set of edges when viewed from a slow boat.",
    shift: "From walking past a lake to spending time at its level.",
    humanReturn:
      "You may notice the planted bank more carefully when you return to the path.",
    responsibility:
      "Operation depends on weather and bookings. The operator normally closes in June, July and August and on Christmas Day. Heavy rain or extreme heat can cancel a trip. Confirm boarding assistance, age suitability and the party's needs directly. Remain seated and follow the guide's instructions. Do not touch or feed wildlife. The separately sold one-hour charter is not this thirty-minute format, and no picnic, wedding arrangement or Aboriginal Heritage Walk is included.",
    evidence:
      "The operator publishes the guided passenger format, seasonal operation and weather conditions. The City of Melbourne independently lists the visitor activity and location. EA has not boarded or evaluated the guiding. The photograph shows the real lake programme, not a promise of autumn colour or particular wildlife.",
    duration: "30 minutes for the standard guided experience",
    participation: "Seated passenger observation with a guide doing the poling",
    access:
      "Book through Punting on the Lake and check the landing instructions before entering the gardens. Confirm date, boat capacity and weather arrangements. No EA charter, transfer or booking is implied.",
    guideReview: review("public_programme", [
      {
        title: "Punting on the Lake: programme and conditions",
        url: "https://puntingonthelake.com.au/",
        note: "Thirty-minute passenger format, landing, seasonal closure and weather policy.",
      },
      {
        title: "City of Melbourne: Punting on the Lake",
        url: "https://whatson.melbourne.vic.gov.au/things-to-do/punting-on-the-lake",
        note: "Official city listing corroborating the actual garden activity and location.",
      },
    ]),
  },
  {
    id: "istanbul-koc-museum",
    slug: "follow-istanbul-through-the-machines",
    title: "Follow Istanbul through the machines",
    summary:
      "Look closely at transport and industrial objects in the Rahmi M. Koç Museum on the Golden Horn.",
    field: "learn",
    place: "Istanbul, Hasköy",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    ...common,
    ...guideImage("istanbul-koc-museum"),
    kernel:
      "Choose a manageable part of the museum's public collection rather than trying to inspect every object. Begin with a vehicle or machine and follow the visible joints, controls and working spaces. Ask what a person would need to know to operate it. The human scale inside an industrial object is often more revealing than the name on its label.",
    rootedness:
      "Hasköy gives Istanbul another setting beyond its familiar monumental skyline. The Rahmi M. Koç Museum brings transport and industrial history into a public collection beside the Golden Horn. This is a museum interpretation assembled by an institution, not a working factory visit or a complete account of the city's labour history.",
    shift:
      "From recognising an old vehicle to imagining the skilled attention required to use it.",
    humanReturn:
      "A lever, doorway or instrument panel gives you a concrete detail to remember instead of a list of exhibits.",
    responsibility:
      "Ordinary museum admission does not automatically include a submarine visit, boat trip, demonstration or permission to enter every vehicle. Confirm any separately ticketed activity and its physical or age restrictions. The museum closes on Mondays. Ask staff about the accessible route and current collection closures. Do not climb into exhibits unless explicitly permitted. The historical photograph shows a display, not a vehicle you will ride or a guarantee of its current position.",
    evidence:
      "The museum publishes its Istanbul location, visitor hours and public collection. Its visitor information distinguishes admission from activities. EA has not visited or inspected the displays. This guide proposes a way of looking, not an independently validated assessment of interpretation or accessibility.",
    duration: "Allow 1.5 to 2 hours for a chosen part of the collection",
    participation: "Self-directed museum looking and reading",
    access:
      "Check the Istanbul branch's current hours and admission at Rahmi M. Koç Caddesi 3, Hasköy. Other branches and add-on activities have different arrangements. No EA ticket, cruise or partnership is implied.",
    guideReview: review("public_admission", [
      {
        title: "Rahmi M. Koç Museum: Istanbul",
        url: "https://rmk-museum.org.tr/istanbul/en",
        note: "Current Istanbul branch, location, collection and separate activity links.",
      },
      {
        title: "Rahmi M. Koç Museum: visiting information",
        url: "https://rmk-museum.org.tr/istanbul/en/visit-us/hours-and-prices",
        note: "Current hours, Monday closure, admission and additional conditions.",
      },
    ]),
  },
  {
    id: "naples-pietrarsa",
    slug: "find-napless-railway-story-beside-the-sea",
    title: "Find Naples's railway story beside the sea",
    summary:
      "Follow locomotives through the former Pietrarsa workshops and put a railway story back beside the Bay of Naples.",
    field: "learn",
    place: "Pietrarsa, Naples coast",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    ...common,
    ...guideImage("naples-pietrarsa"),
    kernel:
      "Visit the National Railway Museum of Pietrarsa as a museum, not as a promised heritage-train outing. Compare a locomotive's large wheels with the smaller mechanisms and the room needed around them. Then look at the workshop building itself. The place that housed production helps explain an object differently from a vehicle isolated on a pedestal.",
    rootedness:
      "Pietrarsa sits beside the railway connecting Naples and Portici, whose first line opened in 1839. The museum occupies former Bourbon workshops and brings historic rolling stock into that industrial setting. Sea views add orientation, but the useful surprise is that Naples also has a story of engineering and organised work.",
    shift:
      "From seeing a train as a nostalgic object to reading the workshop and network around it.",
    humanReturn:
      "An ordinary rail journey afterwards gives the collection a present-tense connection.",
    responsibility:
      "The museum normally opens Tuesday to Sunday, but it currently lists closures on 28 and 29 October 2026. Check notices immediately before travelling. Admission is paid. A guided visit, augmented-reality attraction and the Pietrarsa Express have separate conditions or charges. Museum admission alone does not include a train ride. Ask about step-free access and temporary closures. Do not board or touch rolling stock unless invited by staff.",
    evidence:
      "Fondazione FS publishes museum access, the collection's workshop setting and transport information. Its current pricing page gives the October exceptions and distinguishes extra activities. EA has not visited or tested the rail connection. The photograph records the actual collection historically, not today's full display or an included guided route.",
    duration: "Allow around 2 hours, plus separately planned travel",
    participation:
      "Independent museum observation, with a separately chosen guide if available",
    access:
      "Use the museum's current directions for Pietrarsa-San Giorgio a Cremano station and buy the appropriate museum ticket. Verify that your train stops there. No heritage service, transfer or EA reservation is implied.",
    guideReview: review("public_admission", [
      {
        title: "Fondazione FS: visit Pietrarsa",
        url: "https://www.fondazionefs.it/en/explore-museum/visit-pietrarsa.html",
        note: "Workshop collection, railway context and transport options.",
      },
      {
        title: "Fondazione FS: current prices and exceptions",
        url: "https://www.fondazionefs.it/en/explore-museum/prices.html",
        note: "Paid admission, separate extras, Monday closure and 28 to 29 October 2026 closures.",
      },
    ]),
  },
  {
    id: "athens-snfcc-tour",
    slug: "read-athens-through-a-building-and-its-park",
    title: "Read Athens through a building and its park",
    summary:
      "Join the current guided architecture tour of the Stavros Niarchos Foundation Cultural Center in Kallithea.",
    field: "learn",
    place: "Athens, Kallithea",
    country: "Greece",
    countrySlug: "greece",
    regionSlug: "athens",
    ...common,
    ...guideImage("athens-snfcc-tour"),
    kernel:
      "Book an English-language SNFCC guided tour if that is the language you need. Follow the guide between the complex's indoor and outdoor spaces, looking at how a library, opera facilities and a park share one site. Rather than treating each facade as a separate picture, notice the thresholds that make different kinds of public use possible.",
    rootedness:
      "The Renzo Piano Building Workshop complex houses the National Library of Greece and Greek National Opera in Kallithea. It gives an Athens visit a contemporary civic question alongside ancient monuments: how can a major cultural building also work as everyday public space? The tour presents the institution's answer, not independent certification of its environmental or social performance.",
    shift:
      "From admiring a roofline to asking how people reach and use the spaces beneath it.",
    humanReturn:
      "You leave with a way to look at the relationship between a public building and its ground.",
    responsibility:
      "This is currently a paid seventy-five-minute tour with advance ticket purchase, not the older free format described elsewhere. Expect around one kilometre of continuous walking and possible steps. Confirm the accessible version before booking. The opera hall, foyer and other spaces may be unavailable because of events. A ticket does not promise a performance, backstage access or entry to every library area. Choose the correct language and arrive fifteen minutes early.",
    evidence:
      "The authorised ticketing page publishes the 2026 format and future October sessions, including English tours on 21, 24, 27 and 30 October when checked. EA has not attended or inspected the route. Space availability and the guide's route remain subject to institutional operations.",
    duration: "75 minutes, plus early arrival",
    participation: "Guided architectural observation and walking",
    access:
      "Purchase the selected dated tour through the official ticketing page and meet in the SNFCC lobby. Check concessions, language and route needs before payment. No EA booking or guaranteed hall access is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "SNFCC: authorised 2026 guided-tour booking",
          url: "https://www.ticketservices.gr/event/snfcc-guided-tours/?lang=en",
          note: "Current paid format, October dates, languages, route, advance booking and space restrictions.",
        },
        {
          title: "SNFCC: official cultural centre",
          url: "https://www.snfcc.org/",
          note: "Institutional identity, facilities and current visitor information, not independent sustainability validation.",
        },
      ],
      "2026-10-30",
    ),
  },
  {
    id: "london-chelsea-physic",
    slug: "slow-down-among-chelseas-useful-plants",
    title: "Slow down among Chelsea's useful plants",
    summary:
      "Take a smaller London morning among labelled plants in a garden created as an outdoor classroom.",
    field: "restore",
    place: "London, Chelsea",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    ...common,
    ...guideImage("london-chelsea-physic"),
    kernel:
      "Choose one open area of Chelsea Physic Garden rather than rushing between every bed. Read a label, look closely at the plant it names and compare its form with the next one. A garden organised around plants people have used turns a quiet walk into a series of specific questions. Leave space for sitting instead of making completion the point.",
    rootedness:
      "The garden began in 1673 as a teaching place for London's apothecaries. Its current collection includes medicinal, edible and other useful plants. The historic teaching purpose gives a small cultivated site depth without turning it into a medical recommendation or pretending the past use of a plant proves modern treatment effectiveness.",
    shift:
      "From seeing a garden as a green backdrop to staying with one named living detail.",
    humanReturn:
      "A modest loop can give a busy London itinerary a different scale of attention.",
    responsibility:
      "The public garden currently closes on Saturdays. Member access times are not general admission. Check seasonal opening and special closures before visiting. Do not pick, taste or use plants as remedies. Keep to permitted paths and supervise children around poisonous plants and water. Ask about mobility needs and any closed glasshouse sections. This is neither a clinical treatment nor a guarantee of silence, particular flowers or an included guided tour.",
    evidence:
      "The garden publishes current visitor hours and paid entry arrangements. Its history explains the apothecaries and collection. EA has not visited or evaluated the garden's restorative effect. The photograph is a historical garden view, not an October planting or weather report.",
    duration: "Allow 60 to 90 minutes at your own pace",
    participation: "Independent garden observation, reading and sitting",
    access:
      "Check opening and buy ordinary admission through Chelsea Physic Garden's official visitor page. Confirm the appropriate entrance and access needs. No EA booking, ticket, member privilege or health benefit is promised.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "Chelsea Physic Garden: opening and tickets",
          url: "https://www.chelseaphysicgarden.co.uk/visit/opening-times-and-tickets/",
          note: "Public hours, Saturday closure and distinction from members' early entry.",
        },
        {
          title: "Chelsea Physic Garden: history",
          url: "https://www.chelseaphysicgarden.co.uk/about/history/",
          note: "Apothecary teaching context and plant collections, not evidence of treatment efficacy.",
        },
      ],
      "2026-11-17",
    ),
  },
  {
    id: "rio-botanic-arboretum",
    slug: "walk-beneath-rios-imperial-palms",
    title: "Walk beneath Rio's imperial palms",
    summary:
      "Choose an unhurried arboretum walk at Rio's botanical garden and look beyond the familiar palm avenue.",
    field: "restore",
    place: "Rio de Janeiro, Jardim Botânico",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    ...common,
    ...guideImage("rio-botanic-arboretum"),
    kernel:
      "Start with the imperial palms, then give a manageable side path the same attention. Compare the scale of trunks, leaf shapes and the space beneath a canopy. Use labels where available instead of guessing a plant's identity. The familiar avenue provides orientation, but the experience becomes more personal when you stop looking only for its central photograph.",
    rootedness:
      "The Jardim Botânico do Rio de Janeiro combines a public arboretum with a research institution. A paid visitor walk opens the cultivated collection, not unrestricted access to scientific facilities. It is a different Rio rhythm from a parade rehearsal or a beach day, without pretending that a planted garden is untouched forest.",
    shift:
      "From collecting one recognisable view to noticing a living collection at several scales.",
    humanReturn:
      "One leaf or branching pattern can stay with you as clearly as the long avenue.",
    responsibility:
      "Ordinary public hours differ from the earlier entry available to association members. Wednesday starts later. Storms or strong winds can close areas or require evacuation. Follow staff, stay out of beds and do not touch, taste or collect plants. Keep distance from wildlife and supervise children around water and uneven surfaces. Ask about the accessible route or separately booked electric vehicle. No wildlife sighting, full museum access or health outcome is guaranteed.",
    evidence:
      "The Brazilian government's visitor service and the institute's hours page confirm paid public arboretum access and Wednesday's later opening. EA has not walked the site or inspected today's conditions. The hours page contains a stale July exception with an inconsistent year, so it is not treated as an October closure notice.",
    duration: "Allow 1 to 2 hours for a chosen loop and pauses",
    participation: "Self-directed garden walking, looking and resting",
    access:
      "Use the official visitor service for current tickets and the Rua Jardim Botânico 1008 entrance. Online and counter payment methods differ. Confirm current instructions before travelling. No EA tour or research-facility access is implied.",
    guideReview: review("public_admission", [
      {
        title: "Brazil government: visit Rio's botanical garden",
        url: "https://www.gov.br/pt-br/servicos/visitar-o-jardim-botanico-do-rio-de-janeiro",
        note: "Public arboretum admission, address, ticket channels and Wednesday hours.",
      },
      {
        title: "JBRJ: hours and visitor safety",
        url: "https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos",
        note: "Ordinary versus member access, weather procedures and plant and wildlife precautions. Stale July exception is not used as a current closure.",
      },
    ]),
  },
  {
    id: "paris-salle-ovale",
    slug: "open-a-book-inside-pariss-salle-ovale",
    title: "Open a book inside Paris's Salle Ovale",
    summary:
      "Use a spectacular Paris library room for its simplest public purpose: choosing something to read.",
    field: "restore",
    place: "Paris, Richelieu",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    ...common,
    ...guideImage("paris-salle-ovale"),
    kernel:
      "Enter the BnF Richelieu site's Salle Ovale and look beyond the view from the doorway. Choose an open-access book or graphic novel that interests you, then sit if a place is available. You do not need to perform scholarly expertise to use this public room. Spending time with a page changes the building from a spectacle into somewhere you have actually been.",
    rootedness:
      "The Oval Room belongs to the historic Richelieu site of France's national library. It now offers free public reading, including a substantial comics and graphic-novel collection. The room provides an ordinary use within an extraordinary architectural setting. That public offer is separate from the site's research library and paid museum.",
    shift:
      "From photographing a library to giving one of its books your attention.",
    humanReturn:
      "A page you chose can become the memory that makes the grand room yours for a moment.",
    responsibility:
      "The room is closed on Mondays. It exceptionally closes at 17:00 on Tuesday 20 October 2026, rather than the usual later Tuesday hour. Check the current notice before travelling. Seating is shared and not guaranteed, and visitors make absolute quiet uncertain. Follow reading-room rules and ask staff about books and mobility. Museum and exhibition reservations are separate. Free room access does not authorise use of restricted research collections or unrestricted photography of other readers.",
    evidence:
      "BnF's current practical page confirms free public access, opening hours, reading places and the 20 October exception. Its English Oval Room page explains the collection's public role. EA has not visited or measured occupancy. The licensed photograph documents the restored room in 2022, not today's seating availability.",
    duration: "Allow 45 to 90 minutes, or the reading time you actually want",
    participation: "Independent reading and architectural observation",
    access:
      "For the public Oval Room use 5 rue Vivienne. BnF identifies 58 rue de Richelieu for its dedicated accessible approach and other services. Confirm the appropriate entrance directly. No paid museum ticket or research pass is needed for ordinary public reading. No EA booking or held reading place is implied.",
    guideReview: review("public_admission", [
      {
        title: "BnF: Salle Ovale practical information",
        url: "https://salleovale.bnf.fr/fr/salle-ovale-informations-pratiques",
        note: "Free access, entrances, Monday closure, reading places and early closure on 20 October 2026.",
      },
      {
        title: "BnF: the Oval Room",
        url: "https://www.bnf.fr/en/oval-room",
        note: "Public collection and distinction from research and museum offers.",
      },
    ]),
  },
  {
    id: "naples-napulitanata",
    slug: "hear-the-song-behind-a-familiar-naples-refrain",
    title: "Hear the song behind a familiar Naples refrain",
    summary:
      "Listen to live Neapolitan song in a small public concert room near the National Archaeological Museum.",
    field: "gather",
    place: "Naples, Piazza Museo Nazionale",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    ...common,
    ...guideImage("naples-napulitanata"),
    kernel:
      "Reserve a Napulitanata concert and arrive ready to listen, not to order background music with dinner. Follow the relationship between the singer, instruments and room. When a melody you recognise returns, notice what the live phrasing changes. If the performers invite a shared refrain, joining is optional. Listening closely is already a complete role.",
    rootedness:
      "The programme draws on classical Neapolitan song, including familiar pieces such as 'O sole mio, in a purpose-run concert setting. It offers an interpreted encounter with a repertoire, not an unmediated sample of every Neapolitan's daily life. Recognising the commercial public format makes the cultural experience clearer, not less worthwhile.",
    shift:
      "From knowing a tune as an international cliché to hearing people shape it in a room.",
    humanReturn:
      "A familiar refrain may sound less anonymous after you have heard the voice behind it.",
    responsibility:
      "Advance registration and reservation are required. Confirm the current date, admission conditions, language of introductions, age suitability and step-free access. The venue publishes membership-style participation details in its public booking form. Completing those conditions is not an EA endorsement or an invitation to another event. Do not record or photograph performers unless permitted. A meal, Murolo house-museum visit and a particular lineup are not included in this concert guide.",
    evidence:
      "The official programme describes roughly one hour of voice and instruments without microphones. The booking page lists future October 2026 dates, with several earlier dates marked sold out. EA has not attended or assessed acoustics. The programme photograph shows an earlier performance, not the exact ensemble on your date.",
    duration: "Around 1 hour, plus arrival and registration",
    participation: "Audience listening, with any singing only by invitation",
    access:
      "Reserve through Napulitanata's official page for Piazza Museo Nazionale 10 to 11. Wait for confirmation and follow the published payment instructions. No EA ticket, partnership or guaranteed performer is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Napulitanata: the concert format",
          url: "https://www.napulitanata.com/it/spettacolo/",
          note: "Voice and instruments, repertoire and approximate one-hour format.",
        },
        {
          title: "Napulitanata: current reservations",
          url: "https://www.napulitanata.com/it/prenotazioni/",
          note: "Future October 2026 dates, sold-out notices and compulsory public registration and booking.",
        },
      ],
      "2026-10-31",
    ),
  },
  {
    id: "budapest-liszt-concert",
    slug: "choose-a-concert-inside-budapests-music-academy",
    title: "Choose a concert inside Budapest's music academy",
    summary:
      "Pick a public performance at the Liszt Academy and give Budapest an evening organised around listening.",
    field: "gather",
    place: "Budapest, Liszt Ferenc Square",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    ...common,
    ...guideImage("budapest-liszt-concert"),
    kernel:
      "Use the Liszt Academy's official calendar to choose a concert in its main building's Grand Hall or Solti Hall. Read the programme before selecting a seat. During the performance, follow one instrument or a phrase as it moves through the ensemble. You do not need to know every work to make a specific, attentive connection with it.",
    rootedness:
      "The academy is both a music institution and a public concert setting. Its calendar brings student, chamber, orchestral and other programmes into different rooms. This is a way into a living musical institution, not just a tour of an ornate building or a promise to hear Liszt on every evening.",
    shift:
      "From choosing a famous hall to choosing what you actually want to hear inside it.",
    humanReturn:
      "A phrase you listened for gives the room a memory beyond its decoration.",
    responsibility:
      "Check the venue carefully. Some academy events take place at the Old Academy or elsewhere, not Liszt Ferenc Square 8. Free events and events requiring free tickets are different categories, and sold-out listings are not available seats. Confirm duration, interval, age rules, language of introductions and accessible seating. Contact the box office before buying if stairs or seating arrangements matter. Do not assume a building tour or access to practice rooms is included. Follow the performance's recording rules.",
    evidence:
      "The official October 2026 calendar publishes forthcoming public performances and identifies their halls. Its ticket page explains online purchases, box-office arrangements and accessible seating requests. EA has not attended or assessed sound quality. The photograph documents the main building, not the exact seating, artists or programme you will book.",
    duration: "Use the selected concert's stated duration and interval",
    participation:
      "Audience listening at a separately chosen public performance",
    access:
      "Follow the official calendar's ticket link for the exact event and hall. Academy-organised and externally promoted concerts can have different conditions. No EA seat, backstage admission or partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Liszt Academy: current public concert calendar",
          url: "https://concert.lisztacademy.hu/programs/",
          note: "October 2026 performances, distinct venues and ticket or sold-out states.",
        },
        {
          title: "Liszt Academy: ticket information",
          url: "https://concert.lisztacademy.hu/ticket-information",
          note: "Online purchases, box office, organiser differences and accessible-seat arrangements.",
        },
      ],
      "2026-11-10",
    ),
  },
  {
    id: "cape-town-athletic-jazz",
    slug: "make-room-for-a-cape-town-jazz-set",
    title: "Make room for a Cape Town jazz set",
    summary:
      "Choose an advertised jazz evening at the Athletic Club & Social and give the musicians your attention.",
    field: "gather",
    place: "Cape Town, city centre",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    ...common,
    ...guideImage("cape-town-athletic-jazz"),
    kernel:
      "Start with the venue's current jazz event listing, not simply a restaurant booking. Choose the artist and date that interest you, confirm the admission arrangement, then make listening the reason for going. Notice how a theme moves between players before treating the room as a background for conversation. The city becomes audible through a particular performance rather than a generic nightlife recommendation.",
    rootedness:
      "Cape Town Tourism identifies the Athletic Club & Social among the city's live jazz venues and places it within a wider musical history. The venue is a commercial bar and restaurant on Buitengracht Street. A ticketed set is a specific public encounter, not a claim that one room or visiting ensemble represents the whole Cape jazz tradition.",
    shift:
      "From finding somewhere with music to choosing a performance worth listening to.",
    humanReturn:
      "Remembering an artist gives you something to follow after the evening ends.",
    responsibility:
      "Confirm the current artist, start time, age restriction, cover charge and seating through the official music or ticket channel. The venue's pages contain conflicting general opening times, so these do not establish a jazz start time. A table reservation is not necessarily concert admission. Ask about stairs and seating before booking. Food and drinks have separate conditions. Arrange a sensible return journey and do not assume alcohol consumption is required. Ask before recording performers or other guests.",
    evidence:
      "The venue publishes a dedicated music contact and official event-ticket links. Cape Town Tourism describes its jazz programme. A current local listing advertises an October 21 performance, but the ticketing provider did not expose a readable calendar during EA's check. No specific future lineup, available seat or nightly performance is asserted as operator-confirmed. EA has not attended or assessed the music.",
    duration:
      "Follow the chosen event's set times, not the bar's general hours",
    participation: "Audience listening at a confirmed public jazz event",
    access:
      "Use the Athletic Club & Social's official event or jazz channel for 35 Buitengracht Street. Confirm an actual public performance before making plans. No EA booking, included dinner or artist partnership is implied.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Athletic Club & Social: official venue and music contact",
          url: "https://theathletic.co.za/",
          note: "Current venue, address, jazz contact and official ticket links. General opening-time blocks conflict.",
        },
        {
          title: "Cape Town Tourism: live jazz venues",
          url: "https://www.capetown.travel/where-to-see-live-jazz-in-cape-town/",
          note: "2026 city-tourism account of local jazz context and the venue's programme, with weekly confirmation required.",
        },
        {
          title: "GetOutIn: current Athletic Club event listing",
          url: "https://www.getoutin.co.za/events/freed-friends-in-capetown",
          note: "Local listing for 21 October 2026 corroborates current public music activity. Artist, admission and conflicting age shorthand still require direct operator confirmation.",
        },
      ],
      "2026-11-01",
    ),
  },
];
