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
    id: "madrid-san-gines-churros",
    slug: "give-madrids-churros-time-in-the-chocolate",
    title: "Give Madrid's churros time in the chocolate",
    field: "taste",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "madrid",
    place: "Madrid",
    summary:
      "Make a familiar Madrid pairing into a small experiment in texture at San Ginés, rather than another photograph beside a famous sign.",
    kernel:
      "Find the original Pasadizo de San Ginés address and join the ordinary ordering process. Try a piece of churro before dipping the next piece into the chocolate. Notice what stays crisp and what softens. You can share a portion and still give the pairing your full attention. A breakfast or afternoon pause is enough. There is no need to turn a sweet snack into a challenge, or to wait until the end of a late night to understand its appeal.",
    rootedness:
      "Madrid's tourism office describes chocolate with churros as an established city habit, with several longstanding places to try it. San Ginés is a particular example, dating its business to 1894. Its fame does not make every other churrería less legitimate. The interesting local relationship is between a fried strip of dough and a thick drink designed to accompany it, not a claim that one counter owns the city's taste.",
    shift:
      "Something familiar becomes more revealing when you pay attention to how its two parts are eaten together.",
    humanReturn:
      "Remember the moment the crisp edge met the chocolate, and the pace of the table around you.",
    responsibility:
      "Use the Madrid main branch, not an overseas franchise or delivery listing. The operator currently advertises round-the-clock opening, but older text on the same site describes narrower late-night hours. Confirm service directly before a very early or late visit. Ordinary individual reservations are not offered. Expect queues, pay as directed and do not block the passage. Ask about wheat, dairy and cross-contact. Neither a vegan nor an allergy-safe preparation is established here. Confirm step-free access if required.",
    evidence:
      "The current operator page provides the main address, menu context and ordering instructions. Madrid's tourism office independently explains the pairing. EA has not tasted the current batch, inspected the kitchen or awarded a food ranking.",
    duration: "Allow 30 to 45 minutes, plus the queue",
    participation: "An ordinary chocolate and churros purchase",
    access:
      "Check the main branch at Pasadizo de San Ginés 5. The published procedure is to buy a ticket at the till and hand it to a waiter once seated. Follow current staff instructions if arrangements differ. This is not a booked tasting or an EA partnership.",
    guideReview: review("public_hospitality", [
      [
        "San Ginés: main branch and ordering",
        "https://chocolateriasangines.com/",
        "Current address and service instructions. Conflicting older hours are not treated as a guarantee.",
      ],
      [
        "Madrid Tourism: chocolate and churros",
        "https://blog.esmadrid.com/blog/en/2021/02/04/the-most-traditional-couple-in-madrid/",
        "City context for the pairing, not proof of today's menu.",
      ],
    ]),
  },
  {
    id: "montreal-schwartz-smoked-meat",
    slug: "taste-montreals-smoked-meat-at-the-deli-table",
    title: "Taste Montréal's smoked meat at the deli table",
    field: "taste",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    place: "Montréal",
    summary:
      "Order a smoked-meat sandwich on Saint-Laurent and use one modest deli meal to notice a distinct Montréal food tradition.",
    kernel:
      "Go to Schwartz's for the sandwich rather than the celebrity photographs. Ask the server about the available meat choices and order an amount you actually want to eat. Take a first bite before adding anything else. Notice the relationship between the meat, bread and mustard, then let the meal stay simple. A shared table, a quick service exchange or a takeaway eaten somewhere appropriate can each be an ordinary way into the experience. None requires a special tasting package.",
    rootedness:
      "Montréal's smoked meat belongs to the city's Jewish food history and to more than one business. Schwartz's dates its opening to 1928. Tourisme Montréal discusses competing origin stories and cautions against assigning the whole tradition to a single inventor. That uncertainty is useful: it makes room for a city's food to be shaped by migration, many kitchens and changing habits rather than a tidy marketing legend.",
    shift:
      "A sandwich becomes a way to recognise a city's particular food vocabulary, not just a large portion of meat.",
    humanReturn:
      "Leave with a flavour and a question about how a familiar dish found a different life in another city.",
    responsibility:
      "Choose the restaurant at 3895 Boulevard Saint-Laurent, not a retail pack bearing the same name. Check today's hours, queue and dining arrangements directly. The guide does not establish kosher certification, allergy-safe handling or any particular dietary suitability. Ask about beef, bread, mustard, seasonings and shared equipment. Confirm the seating and physical access you need before travelling. Do not photograph diners without permission or treat staff as performers. Alcohol is not part of the experience.",
    evidence:
      "The restaurant's current site establishes its address and smoked-meat offer. Tourisme Montréal supplies separate historical and culinary context. EA has not inspected the preparation, tasted the food or compared every deli in the city.",
    duration:
      "Allow 30 to 60 minutes, with additional time if there is a queue",
    participation: "A self-directed deli meal",
    access:
      "Use the restaurant's official contact and menu, then follow its current walk-in or takeaway arrangements. Confirm any special requirements with the venue. No reserved table, private explanation, factory access or EA booking is included.",
    guideReview: review("public_hospitality", [
      [
        "Schwartz's: restaurant and menu",
        "https://schwartzsdeli.com/index.php",
        "Current public restaurant address and smoked-meat offer.",
      ],
      [
        "Tourisme Montréal: smoked-meat context",
        "https://www.mtl.org/en/experience/guide-to-montreal-smoked-meat",
        "Explains the dish and competing origin accounts rather than endorsing an invention claim.",
      ],
    ]),
  },
  {
    id: "bangkok-thipsamai-padthai",
    slug: "open-the-egg-around-bangkoks-pad-thai",
    title: "Open the egg around Bangkok's pad thai",
    field: "taste",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    place: "Bangkok",
    summary:
      "Try Thipsamai's egg-wrapped pad thai at its Maha Chai Road branch and look more closely at a dish you probably already know.",
    kernel:
      "Choose the original Pra-Too-Pee branch and read the menu before ordering. If the egg-wrapped preparation suits your diet, open the thin layer and notice how it holds the noodles together. Taste before adding the available condiments, then adjust a little at a time. Ask which ingredients distinguish your chosen version. Keep the experience to one clear meal rather than a contest over which pad thai is the world's best. The familiar name is the entry point, not the end of the discovery.",
    rootedness:
      "Thipsamai is one Bangkok house's interpretation of a widely recognised Thai dish. Its own menu distinguishes basic, vegetarian and shrimp-oil preparations, while Time Out describes the business's development near the Pra Too Pee intersection. That gives a visitor something more precise than a national stereotype: a particular menu, a particular corner and a way of presenting noodles that can be compared with other meals during the stay.",
    shift:
      "Recognition can be the beginning of curiosity when you ask what makes this version different.",
    humanReturn:
      "Remember a specific texture or ingredient rather than returning home with only the name of a famous dish.",
    responsibility:
      "The official footer says both 'open daily' and closed on Tuesdays. Treat Tuesday as a closure warning and confirm the current branch hours before travelling. Do not transfer another branch's menu or opening to Maha Chai Road. Shrimp oil, shellfish, egg, peanuts and other ingredients or cross-contact may matter even when not obvious on the plate. Ask directly. A vegetarian menu label does not prove allergy-safe preparation. Confirm physical access, payment and service language as needed. Queue without obstructing neighbours.",
    evidence:
      "The official menu confirms multiple preparations and the Maha Chai address. Time Out provides separate historical context. Neither source establishes a current independent quality ranking. EA has not eaten here or verified a particular day's kitchen practice.",
    duration: "Allow 45 to 60 minutes, plus any queue",
    participation: "An ordinary restaurant meal",
    access:
      "Use the official menu and contact for 313–315 Maha Chai Road. Confirm the egg-wrapped version is available and appropriate for you, then follow current ordering arrangements. This is not a cooking lesson, tasting package, transfer or EA reservation.",
    guideReview: review("public_hospitality", [
      [
        "Thipsamai: menu and branch contact",
        "https://thipsamai.com/menu-padthai/?language=th",
        "Distinct preparations and explicit Tuesday closure warning in the footer.",
      ],
      [
        "Time Out Bangkok: Thipsamai",
        "https://www.timeout.com/bangkok/restaurants/thipsamai",
        "Independent historical restaurant context, not current availability.",
      ],
    ]),
  },
  {
    id: "tokyo-ozu-washi-sheet",
    slug: "lift-a-sheet-of-paper-from-water-in-tokyo",
    title: "Lift a sheet of paper from water in Tokyo",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Nihonbashi",
    summary:
      "At Ozu Washi, make a small sheet of Japanese paper and notice the material before it becomes a page, wrapping or print.",
    kernel:
      "Reserve the regular hand-papermaking session and let the instructor show you how the frame meets the fibre-filled water. Watch the liquid drain as a sheet begins to hold together. Follow the taught movement rather than trying to make the finished surface perfect on the first attempt. The workshop dries the paper for you to take away. Before leaving, look at the shop's finished papers with that wet, fragile beginning in mind. A familiar material now has a sequence behind it.",
    rootedness:
      "Ozu combines a paper shop, cultural displays and public teaching in Nihonbashi. Its regular workshop introduces washi made with plant fibres, including a plain kozo option. This is a contemporary introductory class within a specialist Tokyo paper business, not a claim that all Japanese paper is handmade or that one lesson confers mastery. The value is in connecting an ordinary sheet with the choices and handling that make its surface possible.",
    shift:
      "Paper stops looking like an empty background and becomes something deliberately made.",
    humanReturn:
      "Keep the sheet as a record of a movement you learned, then notice papers you would once have passed over.",
    responsibility:
      "Request a booking at least three days ahead and wait for staff confirmation. The regular studio lists Monday closure, with holiday adjustments, while Sunday and New Year closures affect the wider venue. Instruction is mainly Japanese with limited English support, so confirm language needs. Children aged eight or younger require an adult guardian. Unbooked companions may not enter the studio. Confirm physical access, cancellation terms and the exact course. Photography rules differ between the workshop, shop and displayed works. Special watermarked or decorative courses are not automatically included.",
    evidence:
      "Ozu's English workshop and reservation pages specify the public course, booking lead time, language limits and guardian rule. Direct retrieval was intermittent, so those facts were checked against indexed official pages. EA has not attended or assessed teaching quality.",
    duration: "Regular session approximately 45 minutes",
    participation: "A supervised hand-papermaking class",
    access:
      "Book the regular workshop through Ozu's official form for its Nihonbashi premises. An automated receipt is not the final confirmation. Walk-in availability is not assured. Ask about same-day collection and any additional design option before paying.",
    guideReview: review("public_programme", [
      [
        "Ozu Washi: public workshop",
        "https://www.ozuwashi.net/en/workshop.html",
        "Official indexed course details, including duration, closures and language limits.",
      ],
      [
        "Ozu Washi: reservation conditions",
        "https://www.ozuwashi.net/en/reservation/papermaking2/index.php",
        "Advance confirmation, companion and guardian conditions. Direct fetch intermittent.",
      ],
      [
        "GO TOKYO: Ozu papermaking experience",
        "https://www.gotokyo.org/en/workshop/sd037/index.html",
        "Tokyo's official tourism listing, updated January 2026, corroborates the 45-minute course and four-person capacity. Its photographs are not reused.",
      ],
    ]),
  },
  {
    id: "ubud-widya-batik-cap",
    slug: "repeat-a-copper-stamp-across-batik-in-ubud",
    title: "Repeat a copper stamp across batik in Ubud",
    field: "make",
    country: "Indonesia",
    countrySlug: "indonesia",
    regionSlug: "ubud",
    place: "Ubud, Bali",
    summary:
      "Use a copper stamp and hot wax at Widya's Ubud studio, then watch colour reveal the spaces your pattern has protected.",
    kernel:
      "Choose the three-hour Batik Cap session rather than the separate hand-drawing or colouring class. Look closely at the copper stamp before using it. Under the instructor's direction, apply wax to the cloth and repeat the motif, paying attention to the joins between impressions. Dye follows the pattern you have set. Ask to understand the wax-removal stage and what part you can safely do yourself. The finished piece matters, but the most revealing moment may be a small irregularity that shows where your hand changed pressure.",
    rootedness:
      "Batik cap uses a stamp to create a wax-resist pattern. Widya teaches this technique in a working Ubud studio alongside other batik formats. The Indonesian practice has histories beyond Bali, so this guide does not relabel every motif as an ancient Balinese tradition. It offers a specific encounter with a material process being taught locally, with space to ask the maker about the designs rather than inventing meanings for them.",
    shift:
      "A repeated pattern can begin to look more human once you have tried to align it yourself.",
    humanReturn:
      "Take home a piece whose small variations you can explain, rather than an object with an invented story attached.",
    responsibility:
      "Hot wax, dye and heated stages require supervision. Confirm age suitability, protective measures, teaching language, seated or standing work and mobility needs directly. Do not assume every finishing step is performed by beginners. Ask which motifs are appropriate to use and follow the studio's instructions on handling materials. The advertised three-hour format uses 50 by 50 centimetre fabric. A larger piece is a separate five-hour option. Transport and lunch are not included. Confirm drying, collection and cancellation arrangements before booking.",
    evidence:
      "The studio's dedicated Batik Cap page distinguishes the technique, two durations and inclusions. Its main site confirms the Ubud address and separate courses. These are operator statements, not independent observation of a class. EA has not visited or validated the instruction.",
    duration: "Three-hour introductory Batik Cap session",
    participation: "Supervised copper-stamp wax-resist making",
    access:
      "Contact Widya through the official website for the Batik Cap session at Jalan Sri Wedari 82A, Tegallantang, Ubud. Obtain a confirmed date, price and collection plan. A general enquiry is not a reservation, and no EA transfer or partnership is implied.",
    guideReview: review("public_programme", [
      [
        "Widya: Batik Cap session",
        "https://widyabatikclass.com/batik-cap-session/",
        "Copper stamps, wax, dye, duration and excluded transport.",
      ],
      [
        "Widya: studio and course directory",
        "https://widyabatikclass.com/",
        "Ubud address and distinction from hand-drawn and colouring formats.",
      ],
    ]),
  },
  {
    id: "seoul-bukchon-small-loom",
    slug: "weave-a-small-line-through-bukchons-craft-day",
    title: "Weave a small line through Bukchon's craft day",
    field: "make",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul, Bukchon",
    summary:
      "Choose the Saturday small-loom session at Bukchon's public craft centre and let a woven line replace another hurried hanok photograph.",
    kernel:
      "Check the current Saturday programme and reserve the weaving-loom experience, not simply general entry to the centre. Begin by looking at how the fixed threads make room for the thread that travels between them. Follow the instructor's sequence and notice how tension changes the edge. Stop occasionally to examine what your hands have added. The point is not to reproduce an heirloom textile in ninety minutes. It is to understand one small construction well enough that a piece of cloth no longer looks effortless.",
    rootedness:
      "Bukchon Traditional Crafts Experience Center hosts a changing roster of Korean craft teachers in a residential hanok neighbourhood. Its published 2026–27 Saturday schedule names Jigmulnori Weaving Workshop and a small-loom experience. This is distinct from Donglim's knotting class elsewhere in the neighbourhood. Weaving and decorative knotting are not interchangeable activities, even when both begin with thread.",
    shift:
      "A neighbourhood becomes more than a backdrop when you spend part of the visit learning a material process there.",
    humanReturn:
      "Leave with a new eye for the edge, tension and repeated crossings of an everyday textile.",
    responsibility:
      "The current programme lists the loom activity at ninety minutes and programmes can change. Confirm the exact Saturday session, fee, teaching language, age suitability, hand dexterity requirements and physical access directly. The centre accepts school-age children and above, but that is not proof every class suits every child. General entry is free while making sessions are paid. The city tourism summary shows older lower prices, so use the current municipal programme. Respect Bukchon's residential visitor rules, keep voices low and photograph people only with permission.",
    evidence:
      "Seoul's municipal reservation service publishes the 2026–27 schedule and a named ninety-minute Saturday loom session. Visit Seoul separately confirms the centre's public teaching role and address. EA has not attended, verified a particular teacher's availability or assessed the finished work.",
    duration: "Published loom session about 90 minutes",
    participation: "A booked introductory weaving session",
    access:
      "Use the municipal booking page or telephone the centre at 24-5 Bukchon-ro 12-gil. Ask specifically for Jigmulnori's Saturday weaving-loom session. Online slots and walk-in availability are separate. Confirm the date and payment before arranging the rest of your day.",
    guideReview: review("public_programme", [
      [
        "Seoul: current craft programme and reservations",
        "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?reSvc=Y&rsv_svc_id=S240122144020674558",
        "2026–27 programme image names Saturday Jigmulnori weaving, 90 minutes. Fees supersede older tourism summary.",
      ],
      [
        "Visit Seoul: Bukchon Traditional Crafts Center",
        "https://english.visitseoul.net/attractions/bukchon-traditional-crafts-center/ENP018902",
        "Public centre and address. Older fee range is not used.",
      ],
    ]),
  },
  {
    id: "sydney-manly-ferry",
    slug: "let-the-manly-ferry-open-sydney-harbour",
    title: "Let the Manly ferry open Sydney Harbour",
    field: "move",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    place: "Sydney",
    summary:
      "Use the ordinary F1 crossing to understand Sydney as a harbour city, with Manly as a real destination rather than a point on a cruise map.",
    kernel:
      "Check the F1 departure at Circular Quay and board with time to find a safe place to sit or stand. Watch the familiar city landmarks become part of a larger shoreline. Notice the movement of working boats and the stretches of water between neighbourhoods. At Manly, step off and decide whether to pause near the harbour or continue on foot towards the ocean. The crossing has already given the day a shape. You do not need commentary or an expensive excursion to make it worth your attention.",
    rootedness:
      "F1 is a scheduled Sydney Ferries connection between Circular Quay and Manly, distinct from separately operated fast-ferry products. Its value is both practical and experiential: the harbour is not scenery placed beside the city but part of how people move through it. That makes the trip a useful partner to a separately booked Manly surf lesson or an unhurried walk, without pretending those activities share one ticket.",
    shift:
      "The space between destinations becomes part of the destination itself.",
    humanReturn:
      "Return able to place Manly across the water, rather than remembering it only as another beach name.",
    responsibility:
      "Use the live trip planner for the vessel, wharf, accessibility and return sailing. Sailing times vary, so do not assume every F1 crossing lasts exactly the same number of minutes. Weather, swell, capacity and operational changes can affect service. Follow crew directions, stay inside barriers and keep circulation clear. Confirm boarding assistance and the fare rules for your payment method. The F1 and Manly Fast Ferry are different services. A ferry ticket does not include surfing, a beach transfer or a guaranteed outdoor seat.",
    evidence:
      "Transport for NSW identifies F1, its two endpoints and accepted payment. Its ferry directory distinguishes the public route from other harbour services. EA has not sailed today's departure, assessed sea conditions or verified every vessel's facilities.",
    duration:
      "Check the current crossing time and allow at least 90 minutes for an unhurried return outing",
    participation: "An ordinary public ferry journey",
    access:
      "Plan F1 Circular Quay to Manly on Transport for NSW, check alerts and use the published payment method. Leave room in your schedule for queuing and the return. Confirm any separate Manly activity independently.",
    guideReview: review("public_observation", [
      [
        "Transport for NSW: F1 Manly",
        "https://transportnsw.info/routes/details/sydney-ferries-network/f1/090f1",
        "Current route, endpoints, payment and planner.",
      ],
      [
        "Transport for NSW: ferry services",
        "https://transportnsw.info/routes/ferry",
        "Separates Sydney Ferries from private and fast-ferry services.",
      ],
    ]),
  },
  {
    id: "rio-santa-teresa-bonde",
    slug: "climb-into-santa-teresa-on-rios-yellow-bonde",
    title: "Climb into Santa Teresa on Rio's yellow bonde",
    field: "move",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "rio-de-janeiro",
    place: "Rio de Janeiro",
    summary:
      "Plan a public bonde ride towards Santa Teresa and let the climb explain Rio's hillside streets. Service is suspended on 21 October 2026, so confirm a later operating date.",
    kernel:
      "Begin at the official Carioca terminal and ask which branch is operating that day. Choose a simple outward and return journey that fits the published service. From a proper passenger position, notice the transition from the centre towards narrower hillside streets. The tram's pace leaves time to see how buildings meet the slope. If you get off, agree your return plan before wandering. This is a transport experience with a neighbourhood at the other end, not a reason to hang from a vehicle or chase it into traffic.",
    rootedness:
      "Santa Teresa's yellow electric trams connect a hillside district with Rio's centre. The state operator has been restoring and extending branches, so old route maps are not a reliable promise of the current endpoint. The familiar yellow vehicle becomes more interesting when understood as infrastructure used and maintained in a living city, not simply an antique object arranged for visitors.",
    shift:
      "A climb can explain the relationship between a neighbourhood and the city below it.",
    humanReturn:
      "Remember one street-level detail the slower ride allowed you to notice, not only the view from the arches.",
    responsibility:
      "Trilhos do Rio reports the operator's full-day suspension on 21 October 2026 for electrical maintenance. Do not travel expecting a tram on that date, and confirm resumed service before planning a later visit. Check the branch, last return, ticket validity and boarding conditions directly. The operator's site was intermittently unavailable and older government notices have superseded hours. No fixed fare, frequency or Silvestre service is guaranteed. Steps may not suit every mobility need, so ask explicitly. Stay seated or where the crew permits, keep limbs inside and never ride on exterior steps. Plan transport to and from the terminal and keep valuables discreet.",
    evidence:
      "The operator's indexed visitor page establishes the public service. Independent railway publication Trilhos do Rio relays CENTRAL's specific 21 October 2026 suspension. Historical state reporting is restoration context, not today's timetable. EA has not ridden the route or verified reopening. Confirm resumed operations with CENTRAL before travelling.",
    duration: "Allow one to two hours after confirming the operating route",
    participation: "A public tram ride with an optional self-directed stop",
    access:
      "Use the official Bondes de Santa Teresa contact or terminal information to confirm the current public journey. Buy the appropriate ticket through the operator. Do not infer that every restored track is serving visitors that day, or that the ticket includes a guided neighbourhood tour.",
    guideReview: review("public_observation", [
      [
        "Bondes de Santa Teresa: operator",
        "https://www.rj.gov.br/bondesdesantateresa/",
        "Indexed public-service information. Direct retrieval intermittent, so timetable and fare are not fixed in this guide.",
      ],
      [
        "Trilhos do Rio: 21 October service suspension",
        "https://trilhosdorio.org/bonde-de-santa-teresa-tera-circulacao-suspensa-em-21-de-outubro-por-motivo-de-obras-da-light/",
        "16 October report relaying CENTRAL's full-day electrical-maintenance closure on 21 October. Reopening is not independently confirmed.",
      ],
    ]),
  },
  {
    id: "hong-kong-ding-ding",
    slug: "read-hong-kong-island-from-a-ding-ding",
    title: "Read Hong Kong Island from a ding ding",
    field: "move",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "hong-kong-island",
    place: "Hong Kong Island",
    summary:
      "Take an ordinary double-decker tram between two neighbourhoods and notice the city at the slower pace of its street-level railway.",
    kernel:
      "Choose a short section of the tram network using the operator's map. Check the destination sign before boarding and move clear of the entrance. If a suitable upstairs seat is available, take it without blocking the stairs. Watch how shopfronts, crossings and upper-storey windows succeed one another. Pick a stop because you want to explore the surrounding streets, not because you need to complete the longest possible ride. The tram is a useful way to make the scale between neighbourhoods visible.",
    rootedness:
      "Hong Kong Tramways operates regular routes along the northern side of Hong Kong Island. The everyday ding ding is different from the separate TramOramic sightseeing product and from the Peak Tram. Its appeal lies in sharing ordinary transport and noticing a dense city from just above the pavement. A later Star Ferry crossing can offer a contrasting harbour perspective, with its own fare and boarding point.",
    shift:
      "Moving more slowly can reveal connections that a fast underground journey hides.",
    humanReturn:
      "Choose one street you saw from the tram and return to it on foot with a reason to look more closely.",
    responsibility:
      "Use the current route map, destination signs and service notices. Pay as instructed at the front exit, with an accepted electronic method or exact cash. No change is given. Vehicles have steps and a narrow stairway, so check suitability for your mobility needs rather than assuming low-floor access. Do not stand on the stairs, lean out of windows, eat or drink aboard, or obstruct doors. Large luggage is restricted. Traffic affects journey time and an upstairs seat is never guaranteed.",
    evidence:
      "The operator publishes regular routes, payment methods and passenger rules. These establish ordinary access, not a reserved sightseeing experience. EA has not checked a particular vehicle, stop condition or today's frequency. Current notices take precedence over a saved route plan.",
    duration: "Choose a 30 to 60 minute segment, allowing for traffic",
    participation: "A self-directed ride on regular public trams",
    access:
      "Plan a section on Hong Kong Tramways' official map and board the correctly signed service. Confirm direction before boarding and pay on exit under current rules. A separate sightseeing tour or private charter is not included.",
    guideReview: review("public_observation", [
      [
        "Hong Kong Tramways: plan your ride",
        "https://www.hktramways.com/en/plan-your-ride/",
        "Regular route planning and service updates.",
      ],
      [
        "Hong Kong Tramways: schedules and fares",
        "https://www.hktramways.com/en/schedules-fares/",
        "Destination patterns and payment on exit.",
      ],
      [
        "Hong Kong Tramways: passenger rules",
        "https://www.hktramways.com/en/notice-to-passengers/",
        "Stairway, window, food and luggage restrictions.",
      ],
    ]),
  },
  {
    id: "johannesburg-origins-rock-art",
    slug: "learn-to-look-at-rock-art-in-johannesburg",
    title: "Learn to look at rock art in Johannesburg",
    field: "learn",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "johannesburg",
    place: "Johannesburg",
    summary:
      "Use the Origins Centre's permanent displays to move beyond recognising a painted animal and towards asking how rock art is understood and protected.",
    kernel:
      "Begin with the museum's orientation and give a single rock-art panel more time than you normally would. Describe what you can actually see before reading the interpretation. Then compare your first impression with the evidence and cultural context supplied by the museum. Look at the tools, painting technologies and conservation material as part of the same question. An image on stone is not a puzzle for a visitor to solve alone. The encounter is with the care needed to look responsibly.",
    rootedness:
      "Origins Centre is a public museum at the University of the Witwatersrand in Johannesburg. Its permanent programme connects human origins, technologies, Southern African rock-art traditions and contemporary interpretation. The collection is a mediated museum encounter, not access to a private ceremony or a living person's beliefs. Distinguishing those things helps a visitor appreciate material heritage without treating every symbol as a universal code.",
    shift:
      "Looking becomes more interesting when you separate your first guess from an explanation supported by evidence.",
    humanReturn:
      "Carry a better question into the next museum or heritage site: who supplied this interpretation, and what remains uncertain?",
    responsibility:
      "Bring identification for campus security and follow the museum's directions for the appropriate entrance. A public museum ticket does not provide unrestricted campus access. Guided tours require advance booking. Sundays are listed as closed. Confirm accessibility, language, current galleries and photography rules directly. Some permanent displays address colonial violence and difficult histories, so ask about suitability for children or sensitive visitors. Do not present a museum visit as permission to copy culturally significant designs, enter protected sites or handle artefacts.",
    evidence:
      "Wits publishes visitor hours, campus entry instructions and a permanent-exhibition description. Temporary shows have separate dates and are not the basis of this guide. EA has not visited the galleries, tested the multimedia or independently evaluated every interpretation.",
    duration: "The museum suggests 90 minutes to two hours",
    participation:
      "A self-directed museum visit, with an optional separately booked guide",
    access:
      "Use Origins Centre's official visitor page and linked ticket seller. Bring ID and confirm the entrance and any parking code before arrival. Ask in advance if you want a guided visit. No special research, archive or archaeological-site access is included.",
    guideReview: review("public_programme", [
      [
        "Wits: plan an Origins Centre visit",
        "https://www.wits.ac.za/origins/plan-your-visit/",
        "Public admission, ID, entrances, hours and advance guided tours.",
      ],
      [
        "Wits: permanent exhibitions",
        "https://www.wits.ac.za/origins/exhibitions/",
        "Permanent rock-art, technology and conservation sections distinguished from dated temporary shows.",
      ],
    ]),
  },
  {
    id: "nairobi-museum-human-origins",
    slug: "put-human-time-beside-nairobis-museum-tools",
    title: "Put human time beside Nairobi's museum tools",
    field: "learn",
    country: "Kenya",
    countrySlug: "kenya",
    regionSlug: "nairobi",
    place: "Nairobi",
    summary:
      "Spend part of a Nairobi day with the National Museum's human-origins displays and let a small stone tool stretch your sense of time.",
    kernel:
      "Choose the Cradle of Human Kind gallery as a starting point rather than trying to cover the whole museum quickly. Find a tool or display whose label gives a place and a date. Look at its shape before reading how researchers interpret it. Ask yourself what evidence distinguishes a deliberately worked object from an ordinary stone. Then follow the museum's explanation. The useful surprise is not a claim that the past was simple, but how much careful observation is required to say anything reliable about it.",
    rootedness:
      "Nairobi National Museum brings Kenyan history, culture, nature and art together at Museum Hill. Its human-origins and Stone Age material connects the city visit with research in a much wider region. The institution's own history also matters: it grew from colonial-era collections and was renamed after independence. A gallery is a chosen account of evidence, not a substitute for every community's history or a field expedition.",
    shift:
      "A small object can make the human timescale feel larger than the monuments normally used to measure a trip.",
    humanReturn:
      "Leave with one object and one piece of evidence you can explain without pretending to have mastered human evolution.",
    responsibility:
      "Use the current National Museums of Kenya admission rates, which were revised in 2026, rather than an old guidebook price. Confirm gallery access, languages, guided-tour arrangements and physical accessibility directly. Labels may distinguish originals, replicas and reconstructions, so read them carefully and do not call every display an original fossil. Follow photography and no-touch rules. This guide concerns ordinary daytime museum admission, not the separately arranged night tours or the adjacent snake park. No animal encounter is included.",
    evidence:
      "The museum's official page identifies the permanent human-origins gallery, Stone Age tools and public opening. The institution's main site provides its current admission-rate notice. EA has not inspected the display, verified every object on view or assessed the availability of a guide on a particular day.",
    duration: "Allow 90 minutes to two hours, longer if adding other galleries",
    participation:
      "A self-directed museum encounter with archaeological evidence",
    access:
      "Start with the official Nairobi National Museum page and current NMK ticket information. Confirm the correct admission category and payment channel before travel. Arrange any guided interpretation separately and leave enough time for the gallery that interests you most.",
    guideReview: review("public_programme", [
      [
        "NMK: Nairobi National Museum",
        "https://museums.or.ke/nairobi-national-museum/",
        "Permanent galleries, ordinary daytime hours and separate group night visits.",
      ],
      [
        "National Museums of Kenya: current notices",
        "https://museums.or.ke/",
        "Includes the 2026 admission-rate revision. Older price lists are not used.",
      ],
    ]),
  },
  {
    id: "santiago-chile-before-chile",
    slug: "meet-chile-before-the-map-in-santiago",
    title: "Meet Chile before the map in Santiago",
    field: "learn",
    country: "Chile",
    countrySlug: "chile",
    regionSlug: "santiago",
    place: "Santiago",
    summary:
      "Use the Chile antes de Chile gallery to notice the peoples, materials and regions that do not fit neatly inside a modern country outline.",
    kernel:
      "Start with the gallery's map and choose one region to follow through its objects. Look for the material, the maker's technique and the use described on the label. Compare two objects without assuming that different communities shared one style or belief. Give yourself time to read the museum's explanation before assigning a meaning to a face, pattern or vessel. The title 'Chile before Chile' is an invitation to question the map you arrived with, not to imagine Indigenous cultures as a finished chapter.",
    rootedness:
      "The Museo Chileno de Arte Precolombino presents the long histories of peoples inhabiting the territory now called Chile alongside broader American collections. Its dedicated gallery explicitly connects ancestral inhabitants with present-day Indigenous peoples. That continuing relationship is important. A visitor is encountering museum interpretation and collected objects, not a direct introduction to every living community represented.",
    shift:
      "A country can become a layered geography of peoples and practices rather than a single cultural label.",
    humanReturn:
      "Leave able to name one distinction you would otherwise have flattened into 'pre-Columbian art'.",
    responsibility:
      "The museum currently lists the Textile Room and South Andean Room as temporarily closed. Do not plan this visit around access to either, even if an older ticket description lists them. Confirm that Chile antes de Chile is open on your date. Mondays are closed and last entry precedes closing. Read photography and conservation rules, do not touch objects and ask about step-free access or interpretation languages. Admission is not permission to reproduce culturally significant designs commercially. Guided or educational visits have separate arrangements.",
    evidence:
      "The museum's current visitor-hours page supplies the closure notice. Its dedicated Chile antes de Chile site explains the gallery's scope and continuing Indigenous context. The current museum homepage also lists activity in the gallery. EA has not inspected today's installation or independently assessed object provenance.",
    duration: "Allow 60 to 90 minutes for this focused museum visit",
    participation: "A self-directed gallery visit",
    access:
      "Buy through the ticket link on the museum's official site and verify current gallery availability before travelling. Choose ordinary museum admission unless you have separately arranged a mediated visit. This is not a community ceremony, archaeological excursion or EA booking.",
    guideReview: review("public_programme", [
      [
        "Museo Precolombino: hours and closures",
        "https://museo.precolombino.cl/planifica-tu-visita-2/horario/",
        "Current Textile and South Andean room closures take precedence over older descriptions.",
      ],
      [
        "Chile antes de Chile: gallery interpretation",
        "https://www.chileantesdechile.cl/",
        "Museum-owned introduction, regional map and living Indigenous context.",
      ],
      [
        "Museo Precolombino: current programme",
        "https://museo.precolombino.cl/",
        "Current activity in the Chile antes de Chile gallery.",
      ],
    ]),
  },
  {
    id: "vancouver-nitobe-garden",
    slug: "take-one-slow-circuit-of-vancouvers-nitobe-garden",
    title: "Take one slow circuit of Vancouver's Nitobe Garden",
    field: "restore",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    place: "Vancouver, UBC",
    summary:
      "Give the pond, bridges and changing viewpoints of Nitobe Memorial Garden a small, unhurried part of a Vancouver day.",
    kernel:
      "Enter during public opening and make one slow circuit instead of hunting for every picturesque angle. Choose a point where the pond is partly hidden, then notice how the view changes as the path turns. Pause without occupying a narrow crossing. Look at the relationship between a stone, a branch and the water rather than counting attractions. You may find that the same small garden offers several different spaces simply because you have moved a few steps.",
    rootedness:
      "Nitobe Memorial Garden sits on UBC's Point Grey campus and connects Japanese garden design with Vancouver's Japanese Canadian history. It is a cultivated place in British Columbia, not a claim that visitors have stepped outside Canada. Its paths and plantings offer a different kind of urban pause from Stanley Park's longer routes or Bloedel's indoor collection. The garden's small scale is part of its usefulness, not a shortcoming to compensate for with a rushed itinerary.",
    shift:
      "A change in viewpoint can make a small place feel spacious without adding another activity.",
    humanReturn:
      "Remember one composition that only appeared when you stopped trying to see the whole garden at once.",
    responsibility:
      "Nitobe is separate from the main UBC Botanical Garden, so check the correct entrance and ticket. Winter opening is shorter and weather can affect access. Do not assume a ticket sold for the April–October season is valid for another period. Confirm paths, steps and mobility assistance directly for Nitobe rather than applying the separate TreeWalk's rules. Stay on permitted paths, leave plants and fish undisturbed and follow photography restrictions. There is no promised tea ceremony, private tea-house entry or therapeutic benefit in ordinary admission.",
    evidence:
      "UBC publishes the garden's seasonal opening, location and visitor guidance. Its FAQ distinguishes Nitobe from other campus attractions. EA has not inspected current path conditions, measured accessibility or confirmed a particular season's colour or blossom.",
    duration: "Allow 45 to 75 minutes, plus travel to UBC",
    participation: "A self-directed garden pause",
    access:
      "Use UBC's Nitobe page for current opening and the correct admission product. Check weather notices before travelling and allow time to reach the campus entrance. Any guided tour or tea programme must be arranged separately under its own availability.",
    guideReview: review("public_observation", [
      [
        "UBC: Nitobe Memorial Garden",
        "https://botanicalgarden.ubc.ca/nitobe-memorial-garden/",
        "Current autumn and shorter winter hours, cultural context and ticket link.",
      ],
      [
        "UBC: visitor questions",
        "https://botanicalgarden.ubc.ca/visit/faqs/",
        "Separate Nitobe location and visitor arrangements. TreeWalk rules are not transferred to this garden.",
      ],
    ]),
  },
  {
    id: "lima-olivar-pause",
    slug: "find-a-slower-lima-between-the-olive-trees",
    title: "Find a slower Lima between the olive trees",
    field: "restore",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    place: "Lima, San Isidro",
    summary:
      "Walk a short public path through El Olivar and give Lima's old olive trees the time usually reserved for another café or viewpoint.",
    kernel:
      "Choose a daylight visit and begin with a short path through the grove. Look at the shape of two neighbouring trunks and how differently they have grown. Sit where public seating is available and listen before moving on. The pond and nearby streets can remain part of the setting rather than targets to collect. This is a deliberately small pause. You can leave after half an hour with more attention for the city, without having completed a formal route or booked a wellness activity.",
    rootedness:
      "El Olivar is a public green space in San Isidro, shaped by a long history of olive cultivation and the neighbourhood that grew around it. Municipal and national tourism sources treat it as both a local landscape and historical place. Its trees are not a promise of wilderness inside Lima. Their value is precisely that a cultivated grove continues to interrupt the built city and make room for ordinary walking and sitting.",
    shift:
      "A city can offer relief through a familiar public space rather than a separate escape from it.",
    humanReturn:
      "Notice which small details become visible when a walk has no shopping list attached.",
    responsibility:
      "Follow current municipal signs, conservation rules and any temporary closures. Do not pick olives, damage bark, feed wildlife, enter planted areas or treat residents' houses as visitor attractions. The pond is not for swimming. Choose paths and seating that fit your mobility needs and confirm access locally if required. Daylight, ordinary urban awareness and a planned onward journey are sensible. No particular bird sighting, quiet atmosphere, guided interpretation or health benefit is guaranteed. Commercial photography can require separate municipal permission.",
    evidence:
      "San Isidro's municipal visitor page identifies the grove as a public attraction and explains its historical role. PROMPERÚ provides separate official visitor context. EA has not surveyed current paths, verified individual tree ages or assessed a particular day's conditions. The guide deliberately avoids turning estimated ages into a promise about every tree.",
    duration: "Allow 30 to 60 minutes at your own pace",
    participation: "An ordinary public-park walk and pause",
    access:
      "Use the municipal El Olivar information to plan a daylight visit in San Isidro and check local notices on arrival. No workshop, harvest access, house visit or organised wildlife activity is included. Combine with other Lima plans using separately arranged transport.",
    guideReview: review("public_observation", [
      [
        "San Isidro: Bosque El Olivar",
        "https://www.gob.pe/43159-lugares-para-visitar-en-san-isidro-bosque-el-olivar",
        "Municipal visitor context for the public grove.",
      ],
      [
        "PROMPERÚ: El Olivar",
        "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/san-isidro/bosque-el-olivar",
        "Official tourism account of the grove, paths and historical setting.",
      ],
    ]),
  },
  {
    id: "taipei-beitou-library",
    slug: "read-a-few-pages-inside-beitous-wooden-library",
    title: "Read a few pages inside Beitou's wooden library",
    field: "restore",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    place: "Taipei, Beitou",
    summary:
      "Use Beitou's public library as a library: find a permitted reading place and let a few pages slow down the district's sightseeing rhythm.",
    kernel:
      "Enter during public opening, look for the reading area's rules and choose a seat without disturbing people already working. Bring your own book or browse an appropriate shelf. Give the next few pages enough time to become the main event. On the way out, notice how the timber structure and windows relate to the park around it. You have experienced the building more fully by using it quietly than by walking through every room with a camera.",
    rootedness:
      "Beitou is widely associated with hot springs, but its public library offers another way to spend time in the district. Taipei's tourism authority highlights the building's environmental design. That architectural interest does not make the readers into part of an attraction. The place works because it is civic infrastructure first, with the ordinary purpose of reading and learning continuing while visitors come and go.",
    shift:
      "An admired building can become a useful part of your day without needing a purchase or a guided tour.",
    humanReturn:
      "Take away a page you remember, not only a photograph of the roof.",
    responsibility:
      "Check the library's current branch hours and closure notices, including holidays and maintenance days. A tourism listing is not proof of today's opening. Follow rules on bags, food, phones and photography, and ask before photographing indoors. Never include identifiable readers without their permission. Ordinary entry does not establish borrowing eligibility or access to reserved rooms. Confirm step-free routes, available seating and language needs directly. This is not a hot-spring visit, bookable silent retreat or promise that the whole building will be quiet.",
    evidence:
      "Taipei Travel identifies the branch at 251 Guangming Road and describes its green-building role. Taipei Public Library's own branch directory supplies the institutional contact route. The tourism page was available through indexed official information but blocked direct retrieval. EA has not checked today's seating, book selection or facilities.",
    duration:
      "Allow 30 to 60 minutes for reading, plus time in the surrounding district",
    participation: "A self-directed public-library reading pause",
    access:
      "Confirm Beitou Branch opening through Taipei Public Library before travelling. Arrive for ordinary public use and follow the branch's instructions. Reserve any event or special room separately. A library card, borrowed book or private tour is not included.",
    guideReview: review("public_observation", [
      [
        "Taipei Travel: Beitou Library",
        "https://www.travel.taipei/en/attraction/details/538",
        "Official indexed branch description and address. Direct fetch returned 403.",
      ],
      [
        "Taipei Public Library: branch directory",
        "https://english.tpml.gov.taipei/News_Content.aspx?n=4D5B5A5C2E0042F1&s=5BF9910B9136BF37&sms=AC06B30FE2E0C59F",
        "Institutional branch contact directory for current opening and visitor questions.",
      ],
    ]),
  },
  {
    id: "bandung-udjo-angklung",
    slug: "become-one-note-in-bandungs-angklung-audience",
    title: "Become one note in Bandung's angklung audience",
    field: "gather",
    country: "Indonesia",
    countrySlug: "indonesia",
    regionSlug: "bandung",
    place: "Bandung, West Java",
    summary:
      "At Saung Angklung Udjo's public afternoon programme, listen to the bamboo instruments and follow the invitation to help the audience make a melody.",
    kernel:
      "Choose the regular public afternoon show and arrive in time to settle before it begins. Watch how the performers coordinate their instruments, then listen for the host's instructions during audience participation. If an angklung is offered, learn the permitted movement and wait for your cue. Your contribution may be only one note, but it belongs in a sound that no single visitor can make alone. You can also remain a respectful listener. Joining in is an invitation, not an obligation to perform enthusiasm.",
    rootedness:
      "Angklung uses tuned bamboo tubes held in a frame. UNESCO describes how players collaborate because an instrument contributes a particular note or chord. Saung Angklung Udjo is a Bandung teaching and performance setting for this practice and other Sundanese arts. UNESCO recognition applies to Indonesian angklung as living heritage, not a certification of every commercial programme or a claim that this show is a private community ritual.",
    shift:
      "Participation becomes cooperation when your small part only makes sense alongside other people's parts.",
    humanReturn:
      "Remember the cue that turned many separate attempts into one shared phrase.",
    responsibility:
      "The operator lists a daily 15:30–17:00 regular show, with additional weekend sessions. Weekday morning and early-afternoon sessions are for pre-booked groups, not a guaranteed option for a couple or family. Confirm the current schedule, ticket category, language support, physical access and sound levels. Follow staff instructions, handle instruments gently and ask before close-up photography, especially of children. Do not approach performers backstage or assume personal access. No claim about employment conditions or safeguarding beyond the published public programme is made here.",
    evidence:
      "The current official FAQ distinguishes walk-in public shows from minimum-size group bookings. UNESCO provides independent cultural context for the instrument and collaborative playing. EA has not attended, audited the organisation or verified a particular day's cast and participatory sequence.",
    duration: "Regular afternoon programme approximately 90 minutes",
    participation: "A public performance with host-led audience participation",
    access:
      "Check Saung Angklung Udjo's official schedule for Jalan Padasuka 118, Bandung. Ordinary afternoon tickets are advertised for sale on site without a reservation, subject to current capacity. Confirm before a special journey. Transport, private lessons and backstage access are not included.",
    guideReview: review("public_programme", [
      [
        "Saung Angklung Udjo: public programme and FAQ",
        "https://www.angklung-udjo.co.id/",
        "Current regular show, weekend alternatives and group-only weekday sessions.",
      ],
      [
        "UNESCO: Indonesian angklung",
        "https://ich.unesco.org/en/RL/angklung-00393",
        "Independent explanation of the instrument and collaborative musical practice.",
      ],
    ]),
  },
  {
    id: "nashville-station-inn-jam",
    slug: "listen-around-nashvilles-bluegrass-picking-circle",
    title: "Listen around Nashville's bluegrass picking circle",
    field: "gather",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "nashville",
    place: "Nashville",
    summary:
      "Choose a listed Sunday Bluegrass Jam at the Station Inn and hear musicians work around a circle rather than treating Nashville as one long stage-front queue.",
    kernel:
      "Check the dated Bluegrass Jam listing, arrive when doors open and find a place outside the musicians' circle. Listen for the way a tune passes between instruments. Notice when someone takes a lead and how the others support it. If you play an appropriate bluegrass instrument, ask the host how to join instead of assuming the centre is yours. Listening is a complete way to participate. Let conversation wait while a phrase is being worked out and leave enough room for people to move safely.",
    rootedness:
      "The Station Inn is a working Nashville venue in the Gulch, with a programme centred on bluegrass, roots and related music. Its free picking-circle jam is a different format from a ticketed concert or songwriter round. The distinction matters: the experience comes from shared musical practice and the changing group in the room, not a promised appearance by a famous musician.",
    shift:
      "A music city becomes more legible when you hear how players listen to one another, not only how they perform for an audience.",
    humanReturn:
      "Leave with one musical handover you noticed and a stronger reason to listen closely to the next live set.",
    responsibility:
      "Use a current Bluegrass Jam date, not the separate Sunday Gospel or a paid evening show. The calendar lists upcoming jams on 25 October and 1 November 2026, but recurring schedules can change. Seats and entry depend on capacity. The FAQ welcomes minors with an adult chaperone and describes a ramp and single-floor venue, but confirm your specific access needs. Only appropriate bluegrass instruments are invited into the jam. Ask before recording or photographing players. Alcohol is optional, and no particular performer or skill lesson is promised.",
    evidence:
      "The Station Inn's current calendar confirms forthcoming jams. Its FAQ explains the circle, free entry, instrument restrictions and listening role. EA has not attended, reserved a place or independently assessed the venue's access provisions. The historical photograph is not evidence of a future lineup.",
    duration: "Allow one to two hours, subject to the dated programme",
    participation:
      "Listening at a public jam, with playing only under the host's rules",
    access:
      "Check the official event calendar and Bluegrass Jam description for 402 12th Avenue South. The venue generally does not offer advance reservations unless an event explicitly says otherwise. Arrive with a flexible seating plan and confirm before bringing an instrument.",
    guideReview: review("public_programme", [
      [
        "Station Inn: current events",
        "https://stationinn.com/events/",
        "Upcoming 25 October and 1 November 2026 Bluegrass Jams, distinct from paid shows.",
      ],
      [
        "Station Inn: visitor FAQ",
        "https://stationinn.com/information/",
        "Free picking-circle format, instruments, minors and stated physical access.",
      ],
    ]),
  },
  {
    id: "buenos-aires-colon-performance",
    slug: "hear-buenos-aires-from-a-seat-in-the-colon",
    title: "Hear Buenos Aires from a seat in the Colón",
    field: "gather",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    place: "Buenos Aires",
    summary:
      "Choose an actual performance at Teatro Colón and let the celebrated room become a shared evening of listening rather than only an architectural visit.",
    kernel:
      "Start with the programme, not the most photogenic seat. Choose a concert, opera or ballet that interests you and read what your ticket's location means. Arrive with time to find the entrance and settle. Look around before the performance, then put the room behind the music or movement. Notice how an audience becomes attentive together. You can be new to the form without pretending to understand every reference. Reading a short synopsis or programme note beforehand is often enough to open the evening.",
    rootedness:
      "Teatro Colón is part of Buenos Aires's continuing performing-arts life, with resident ensembles and a public season as well as visiting artists. A ticket to a performance is different from the building tour, Colón Fábrica or an event in another room. That distinction protects the experience from becoming a vague promise that any purchase opens the famous auditorium or includes the same artistic programme.",
    shift:
      "An architectural landmark becomes a place where people are doing something together now.",
    humanReturn:
      "Remember a passage, movement or moment of collective silence alongside the building's image.",
    responsibility:
      "Confirm the exact event, room, date, duration, age guidance and language or surtitles before buying. Not every location is seated or has an unobstructed view. Ask about steps, accessible seating and late-entry rules. Use the official ticket path and beware of unofficial resale claims. Programme changes and sold-out dates are possible. Photography of an empty room does not establish permission to record a performance. Holiday box-office closures and performance calendars differ. No backstage meeting, dress-code assurance, tour or particular artist is included unless your chosen ticket explicitly provides it.",
    evidence:
      "The theatre's current site lists forthcoming performances and direct purchase links. Its box-office page supplies contact and access procedures. Some box-office hours differ across official pages, so they are not fixed here. EA has not attended the chosen show, assessed the sound from every seat or reserved tickets.",
    duration:
      "Set aside the published performance length plus arrival and any interval",
    participation: "Attendance at a dated public performance",
    access:
      "Choose a suitable main-auditorium event on Teatro Colón's official programme and follow its own ticket link. Verify the room and location before paying. Confirm special access directly with the theatre. Each visitor arranges their own admission and transport.",
    guideReview: review("public_programme", [
      [
        "Teatro Colón: current programme",
        "https://teatrocolon.org.ar/",
        "Forthcoming performances and official purchase links, separate from tours.",
      ],
      [
        "Teatro Colón: box office",
        "https://teatrocolon.org.ar/boleteria/",
        "Ticket enquiries and specific disability-access procedures. Hours require confirmation.",
      ],
    ]),
  },
];
export const guideBatch53: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
