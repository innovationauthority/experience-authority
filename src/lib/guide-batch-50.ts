import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-21",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-21",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});
const common = { status: "public_guide", demo: false } as const;

export const guideBatch50: PublicExperience[] = [
  {
    id: "montreal-jean-talon-market",
    slug: "build-a-montreal-lunch-at-jean-talon-market",
    title: "Build a Montréal lunch at Jean-Talon Market",
    summary:
      "Choose a few things to eat in Little Italy and let the labels, seasons and stallholders complicate your first idea of Québec.",
    field: "taste",
    place: "Montréal, Jean-Talon Market",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    kernel:
      "Arrive with room for a modest lunch rather than a checklist of stalls. Compare what two merchants are selling, read where an ingredient came from and buy the thing that makes you curious. Ask a short question when the counter is not busy. A piece of bread, something prepared and a seasonal ingredient can become your own small meal. Tasting happens only where a merchant offers it, not because visitors have arrived with cameras.",
    rootedness:
      "Jean-Talon opened in 1933 in Montréal's Little Italy. Its role is still practical: people come to shop. Québec produce shares the market with imported ingredients and specialist businesses. The useful discovery is that a city's food identity includes those exchanges, not that every attractive apple or cheese must have been made nearby.",
    shift:
      "A market becomes a place to make choices, not simply collect food photographs.",
    humanReturn:
      "Take one new ingredient name into the next shop, kitchen or conversation.",
    responsibility:
      "The operator currently lists Monday to Saturday 08:00 to 18:00 and Sunday 08:00 to 17:00. Individual merchants can differ. A current notice announces winter-wall installation on 19 to 23 October 2026, so expect work and changes in circulation during that period. The market remains a year-round place, with a different winter arrangement. Check origins, ingredients and allergies at each stall. Do not assume samples, seating, a fixed menu, English service or an entirely local supply chain. Keep shopping aisles clear and ask before photographing people.",
    evidence:
      "The market operator confirms the year-round site, history, merchant mix, hours and October installation notice. Its separate hours page explains merchant variations. EA has not shopped here, tasted products or assessed a particular stall's sourcing or preparation.",
    duration: "Allow 60 to 90 minutes within merchant hours",
    participation: "Independent browsing, buying and eating",
    access:
      "Use the operator's Jean-Talon page for 7070 Henri-Julien Avenue, the market map and current notices. No tour booking is necessary for ordinary shopping. Purchases and any separately advertised workshop have their own conditions.",
    ...common,
    ...guideImage("montreal-jean-talon-market"),
    guideReview: review("public_hospitality", [
      {
        title: "Marchés publics de Montréal: Jean-Talon Market",
        url: "https://www.marchespublics-mtl.com/en/markets/jean-talon-market",
        note: "Market identity, merchant mix, hours and 19–23 October 2026 winter-wall installation notice.",
      },
      {
        title: "Marchés publics de Montréal: opening hours",
        url: "https://www.marchespublics-mtl.com/en/news/montreals-public-markets-opening-hours",
        note: "Operator-wide hours and the need to check individual merchants.",
      },
    ]),
  },
  {
    id: "naples-avpn-pizza-day",
    slug: "stretch-the-dough-before-tasting-naples",
    title: "Stretch the dough before tasting Naples",
    summary:
      "Mix, stretch and dress pizza at AVPN's Naples school, then sit down to understand what your hands just attempted.",
    field: "taste",
    place: "Naples, AVPN school, Via Capodimonte 19a",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "naples",
    kernel:
      "Choose the amateur 'Neapolitan Pizza Maker for one day' session rather than professional training. Work the dough by hand, then follow the instructor through stretching and topping. Pay attention to the difference between pressing a centre and flattening an edge. The oven belongs to the supervised part of the lesson, not an invitation to improvise beside a flame. Tasting your result and the instructors' pizzas gives the preparation a useful comparison.",
    rootedness:
      "A familiar Naples reference becomes more interesting when you have to make a few of its decisions. The Associazione Verace Pizza Napoletana is a trade association and school with its own teaching standards. Its public visitor class is one introduction to the city's pizza practice, not a judgement that other pizzerias are illegitimate or a professional qualification awarded in an afternoon.",
    shift:
      "The next pizza arrives with a visible edge, a dough texture and a set of choices behind it.",
    humanReturn:
      "Remember one movement your hands had to learn before remembering the topping.",
    responsibility:
      "The published format lasts three hours, by reservation at 10:00 or 15:00, with Italian and English instruction. The descriptive age bands start at five, while the booking form labels children four to fourteen. Confirm a younger child's eligibility before paying. Closed shoes are advised near the wood-fired oven. Discuss wheat, dairy, other allergies, language and physical access in advance. A gift coupon does not hold a dated place. Some website notices appear inherited from earlier operating rules, so use the final confirmation for current entry conditions. Do not expect a city walking tour or professional certification to be included.",
    evidence:
      "AVPN's specific amateur-class page and training directory establish the Naples school, three-hour structure, booking route and languages. EA has not taken the class, tasted the pizza or assessed instruction and food handling. Heritage recognition of a practice does not certify this visitor's result.",
    duration: "Three hours at the confirmed morning or afternoon session",
    participation: "Supervised dough preparation, pizza making and tasting",
    access:
      "Reserve the dated amateur class through AVPN's official page for Via Capodimonte 19a. Check cancellation terms and the confirmation, not a similarly named school elsewhere. A professional course and the optional city tour are separate products.",
    ...common,
    ...guideImage("naples-avpn-pizza-day"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "AVPN: Neapolitan Pizza Maker for one day",
          url: "https://www.pizzanapoletana.org/en/pizzaiolo_napoletano_per_un_giorno",
          note: "Specific amateur class, three-hour sequence, Italian/English, reservation and age-label discrepancy.",
        },
        {
          title: "AVPN: training courses and Naples school",
          url: "https://www.pizzanapoletana.org/en/corsi",
          note: "Distinguishes amateur and professional courses and confirms Via Capodimonte 19a.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "lisbon-conserveira-counter",
    slug: "choose-lisbon-by-the-fish-inside-the-tin",
    title: "Choose Lisbon by the fish inside the tin",
    summary:
      "Visit Conserveira de Lisboa's counter and choose by species and preparation before choosing by the wrapper.",
    field: "taste",
    place: "Lisbon, Conserveira de Lisboa, Rua dos Bacalhoeiros 34/34A",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    kernel:
      "Start with two questions: which fish, and in what preparation? Look beyond the illustrated paper to the label and ask the staff about a difference you cannot read. Choose a tin to eat later with bread or as part of another meal, following its storage instructions. The small exchange at the counter is the point of the stop. You are buying food, not admission to a museum of packaging.",
    rootedness:
      "Lisbon's municipal Shops with History programme documents a business that began in 1930 and took the Conserveira de Lisboa name in 1942. A specialised food shop connects the city's commercial life to preserved fish without pretending that every can was packed in Lisbon, that all products have the same origin or that one shop represents the entire Portuguese canning industry.",
    shift:
      "A colourful souvenir becomes a specific ingredient with a name and a use.",
    humanReturn:
      "Open the tin with someone else and explain the choice you made, not just where you bought it.",
    responsibility:
      "The municipal listing gives the Bacalhoeiros address and daily 09:00 to 19:00 hours. Treat that as a published listing, not a live guarantee, and recheck before a special journey. The shop's own linked website did not load during this source check. This is an ordinary retail visit, not a guaranteed on-site tasting, cannery tour or concert. Fish, shellfish, sauces and other ingredients require product-specific allergy checks. Ask about physical access and available language support. Packaging or a heritage-shop designation is not proof of sustainable fishing, local catch or nutritional benefit.",
    evidence:
      "Lisbon's municipal heritage programme supplies the shop identity, history, address and listed hours. A current independent city guide corroborates the Bacalhoeiros location. EA has not visited, tasted the products, verified stock or assessed individual fishing and packing practices. The operator website could not be checked directly.",
    duration: "Allow 20 to 30 minutes, plus any wait",
    participation:
      "Retail conversation and choosing preserved fish for a later meal",
    access:
      "Use the municipal listing to identify the Rua dos Bacalhoeiros shop and confirm current service. No advance permission is needed for ordinary shopping. A purchase does not include a tasting session, table or EA reservation.",
    ...common,
    ...guideImage("lisbon-conserveira-counter"),
    guideReview: review(
      "public_hospitality",
      [
        {
          title: "Lisbon Shops with History: Conserveira de Lisboa",
          url: "https://www.lojascomhistoria.pt/lojas/conserveira-de-lisboa",
          note: "Municipal record for this specific shop, its history, address and published hours. Operator website unavailable at check.",
        },
        {
          title: "ConVida: Conserveira de Lisboa",
          url: "https://convida.pt/lisboa/conserveira-de-lisboa/",
          note: "Independent current city-guide corroboration of the Bacalhoeiros shop, not verification of stock or food quality.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "ponikla-rautis-bead-ornament",
    slug: "turn-loose-glass-beads-into-a-ponikla-ornament",
    title: "Turn loose glass beads into a Poniklá ornament",
    summary:
      "Watch how hollow beads are made at Rautis, then assemble a small ornament from prepared pieces in its public creative workshop.",
    field: "make",
    place: "Poniklá, Rautis visitor workshop, Poniklá 153",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "ponikla",
    kernel:
      "Begin with a booked production tour if you want to understand the bead before threading it. Then choose a manageable shape in the creative workshop and follow the instructor through joining the prepared beads. Let the pattern grow one small decision at a time. The satisfying object is light enough to seem effortless until you have had to hold its parts together yourself. Your role is assembly, not blowing glass or handling silvering chemicals.",
    rootedness:
      "Poniklá sits in the foothills of the Krkonoše Mountains. The local practice combines hollow blown beads with wire and a wide vocabulary of ornament shapes. Rautis's production tour and public worktable make different stages visible. The craft's heritage status concerns shared knowledge, not a promise that a short visitor session transfers a glassmaker's skill.",
    shift:
      "A fragile decoration starts to read as a chain of skilled operations rather than a factory-like trinket.",
    humanReturn:
      "Give the ornament a place where someone will ask how its small parts were joined.",
    responsibility:
      "Production tours last about forty minutes and are conducted in Czech, with explanatory texts in English, German and Polish. Book ahead, especially before Christmas. The creative workshop is separately described as open daily 09:00 to 17:00, normally without reservations, with materials charged according to use. Tour charges are separate. Published closures include 24 and 25 December, 1 January and Easter Monday. Plan transport to Poniklá itself, not Prague. Glass pieces and wire need careful handling and supervision for children. Confirm age suitability, hand mobility and building access with the operator. Do not enter production areas independently.",
    evidence:
      "Rautis's current visitor page distinguishes the production tour from ornament assembly and publishes hours, language support and charges. The regional Crystal Valley programme independently corroborates the visitor workshop. EA has not attended, made an ornament or inspected working conditions.",
    duration: "Allow 1 to 2 hours, including a forty-minute tour if booked",
    participation:
      "Optional guided observation followed by supervised bead assembly",
    access:
      "Use Rautis's official tour calendar for the production visit and check creative-workshop conditions at Poniklá 153. The company address at number 151 and the café at number 147 are not the visitor workshop. No glassblowing lesson or transfer from Prague is included.",
    ...common,
    ...guideImage("ponikla-rautis-bead-ornament"),
    guideReview: review("public_programme", [
      {
        title: "Rautis: production tours and creative workshop",
        url: "https://www.rautis.cz/tours/?lang=en",
        note: "Forty-minute Czech tours, translated texts, public bead-assembly workshop, separate charges, closures and visitor address.",
      },
      {
        title: "Crystal Valley: Rautis in Poniklá",
        url: "https://crystalvalley.cz/en/videt/rautis",
        note: "Regional corroboration of the bead-making context and public creative workshop.",
      },
    ]),
  },
  {
    id: "prague-truhlar-marionette",
    slug: "give-a-prague-marionette-its-first-movement",
    title: "Give a Prague marionette its first movement",
    summary:
      "Build a character from prepared wooden parts at Marionety Truhlář, then discover what changes when it hangs from strings.",
    field: "make",
    place: "Prague, Marionety Truhlář, Vinohrady",
    country: "Czechia",
    countrySlug: "czechia",
    regionSlug: "prague",
    kernel:
      "Reserve the small-marionette workshop rather than a multiday carving course. Choose a model or discuss a character of your own, then work with the prepared turned-wood components under the tutor's guidance. Notice how the same pieces suggest a different personality when their proportions and clothing change. Once it is assembled, let the puppet's first movements reveal where your decisions have led. This is a first encounter with construction, not carving a figure from a raw block.",
    rootedness:
      "Czech puppetry belongs to a living theatre culture as well as to the objects visitors see in shop windows. Prague City Tourism documents the Truhlář studio as a working maker and public workshop. A small character makes the relation between object and movement tangible without pretending to reproduce a full puppeteer's training.",
    shift:
      "A puppet stops being a static souvenir when you have to consider how it will move.",
    humanReturn: "Give the character a short action, not only a shelf.",
    responsibility:
      "The operator describes three to four hours and asks for reservations at least two working days ahead. The studio is appointment-only. Published capacity statements differ, so confirm the actual group size rather than relying on a maximum. The general recommendation is age six and above, with parental involvement for younger children subject to agreement. Ask about language, tools, assistance, materials and step-free access before paying. The city listing places the studio at Boleslavská 11. Use the venue on your confirmation. A take-home DIY kit and three- or seven-day carving courses are different products.",
    evidence:
      "The operator's publicly indexed workshop description confirms prepared wooden components, duration and advance reservation. Prague City Tourism corroborates the workshop, address and appointment-only access. Direct automated access to the operator was blocked during this check. EA has not attended, assessed instruction or confirmed a particular appointment.",
    duration: "About 3 to 4 hours at the confirmed appointment",
    participation: "Supervised construction from prepared wooden components",
    access:
      "Arrange the small-marionette workshop through Marionety Truhlář's official workshop page and obtain confirmation before travelling. An ordinary advertised workshop booking is required, not a private studio invitation or an EA arrangement.",
    ...common,
    ...guideImage("prague-truhlar-marionette"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "Marionety Truhlář: small-marionette workshop",
          url: "https://www.marionety.com/workshop/",
          note: "Publicly indexed specific workshop, prepared components, three-to-four-hour duration and booking lead time. Direct automated request blocked.",
        },
        {
          title: "Prague City Tourism: Truhlář Marionettes",
          url: "https://prague.eu/en/objevujte/truhlar-marionettes/",
          note: "City-tourism corroboration, Boleslavská 11 and appointment-only access.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "kyoto-yamamoto-roketsu",
    slug: "draw-kyoto-in-wax-before-the-indigo-arrives",
    title: "Draw Kyoto in wax before the indigo arrives",
    summary:
      "Trace a design with hot wax at Yamamoto's Kyoto studio and follow what the dye leaves white.",
    field: "make",
    place: "Kyoto, Roketsu Dyeing Studio Yamamoto, Nishikyogoku",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    kernel:
      "Choose the cloth or item covered by your reservation, then work from an available stencil or your own simple design. Trace the lines with the wax brush as instructed. During the guided dyeing and finishing sequence, watch what happens to the waxed and unwaxed areas. Fine cracks can become part of the result rather than a mistake to hide. Ask which stages you will handle yourself and which are led by staff. The finished piece carries a process you can explain.",
    rootedness:
      "Roketsu is wax-resist dyeing. Yamamoto gives one studio's visitor introduction to that process in Kyoto, a city with several distinct textile practices. It is not the same task as the city's stencil-based yuzen sessions, nor a claim that wax-resist belongs only to Japan. The limited palette is useful: a white line has to earn its place.",
    shift:
      "The empty part of a pattern becomes something deliberately protected, not merely left over.",
    humanReturn:
      "Use the cloth and notice the small differences a factory-perfect pattern would erase.",
    responsibility:
      "The operator gives ninety to 120 minutes and says the finished item can leave with you. Materials and prices vary by selected course. Its weekly graphic suggests daily hours, but the contact footer and reservation page state Wednesday closure. Treat Wednesday as closed unless a confirmed booking explicitly says otherwise. Usual hours are 10:00 to 18:00, with entry by 16:00. Hot wax, dye and boiling-water stages require staff instructions. Confirm child participation, language, hand mobility, ventilation sensitivities and physical access before booking. Wear suitable clothing and do not assume every traditional production stage can be mastered in two hours.",
    evidence:
      "The studio's current experience and reservation pages establish the wax-resist sequence, duration and booking process. Kyoto's official tourism listing corroborates the studio. EA has not attended, tested materials or inspected safety and access. Conflicting weekly-hours elements are disclosed rather than silently resolved in favour of daily opening.",
    duration: "About 90 to 120 minutes for the booked format",
    participation:
      "Supervised wax drawing with a guided dyeing and finishing sequence",
    access:
      "Reserve the selected experience through Yamamoto's official system for 73 Umazuka-cho, Nishikyogoku. Wait for confirmation and check the day. Online shop purchases and a reserved studio session are not the same thing.",
    ...common,
    ...guideImage("kyoto-yamamoto-roketsu"),
    guideReview: review("public_programme", [
      {
        title: "Roketsu Dyeing Studio Yamamoto: experience course",
        url: "https://www.roketsu.com/en/home-en/",
        note: "Wax-resist process, selectable items, ninety-to-120-minute format and inconsistent daily-hours graphic versus Wednesday-closed footer.",
      },
      {
        title: "Yamamoto: reservations",
        url: "https://www.roketsu.com/en/reservation1/",
        note: "Confirmation process, availability guidance and Wednesday closure.",
      },
      {
        title: "Kyoto Tourism Navi: Yamamoto dyeing studio",
        url: "https://ja.kyoto.travel/tourism/single01.php?category_id=3&tourism_id=1890",
        note: "Municipal-tourism corroboration of the actual Kyoto studio, not an assessment of teaching.",
      },
    ]),
  },
  {
    id: "paris-canauxrama-saint-martin",
    slug: "let-paris-rise-around-a-canal-boat",
    title: "Let Paris rise around a canal boat",
    summary:
      "Travel through the Canal Saint-Martin's locks and covered Bastille section, where the city changes height around you.",
    field: "move",
    place: "Paris, Canal Saint-Martin between Arsenal and La Villette",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    kernel:
      "Book the full Vieux Paris canal cruise and check which end your departure uses. In a lock, look at the waterline against the wall before looking back at the street. A city you normally cross at walking speed begins to move vertically. The covered section beneath Bastille changes the light again. Continue into the neighbourhood where you disembark rather than assuming the boat will return you to the start.",
    rootedness:
      "The Canal Saint-Martin joins the Arsenal basin to La Villette through a piece of working urban infrastructure. Canauxrama's passenger cruise makes that engineering visible without turning it into a private expedition. The pleasure is partly mechanical: gates, changing levels and bridges explain a Paris that a single riverfront viewpoint cannot.",
    shift:
      "A familiar capital becomes a system of levels and connections, not only a skyline.",
    humanReturn:
      "Leave with a reason to look more closely at the next lock or bridge you cross.",
    responsibility:
      "The operator lists about two and a half hours and a one-way itinerary, in either direction according to the selected date. Arsenal access is opposite 50 boulevard de la Bastille. La Villette departures use the point opposite 13 quai de la Loire. The ticket confirmation decides your actual boarding place. Check the available departure, commentary language, weather changes and boat access before paying. A bar and toilet are listed, not an included meal. Layers help on an exposed deck. Remain in permitted passenger areas and follow crew instructions. The express cruise, Seine cruise and heritage-event editions are different products.",
    evidence:
      "Canauxrama's current Vieux Paris product page establishes duration, two boarding points, calendar booking and the lock-and-tunnel route. Its canal-history page supplies operator context. EA has not taken the cruise, confirmed a particular departure or assessed boarding accessibility and commentary.",
    duration: "About 2 hours 30 minutes, plus boarding and onward travel",
    participation: "Seated passenger travel with live commentary",
    access:
      "Choose a dated Vieux Paris Canal Saint-Martin departure through Canauxrama's official calendar. Check direction and boarding details on the ticket. No return transport, meal or EA reservation is included. No EA booking is included.",
    ...common,
    ...guideImage("paris-canauxrama-saint-martin"),
    guideReview: review("public_programme", [
      {
        title: "Canauxrama: Vieux Paris Canal Saint-Martin cruise",
        url: "https://www.canauxrama.com/fr/croisieres/croisiere-canal-saint-martin-vieux-paris.html",
        note: "Specific two-and-a-half-hour one-way route, dated booking and direction-dependent boarding points.",
      },
      {
        title: "Canauxrama: Canal Saint-Martin",
        url: "https://www.canauxrama.com/fr/canal-saint-martin.htm",
        note: "Operator context for the canal, locks and covered Bastille section, not a municipal engineering audit.",
      },
    ]),
  },
  {
    id: "melbourne-city-circle-tram",
    slug: "read-melbourne-from-a-city-circle-tram",
    title: "Read Melbourne from a City Circle tram",
    summary:
      "Use the free heritage Route 35 to connect street names, corners and landmarks at the pace of an ordinary tram ride.",
    field: "move",
    place: "Melbourne, Route 35 City Circle",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    kernel:
      "Find a signed Route 35 stop and check the live service before waiting. Board when it is safe and follow the clockwise journey for as much of the circuit as suits your day. Let one unfamiliar street name become a place you can recognise from the window. When a stop interests you, get off and continue on foot. You do not have to complete a loop to make the ride useful.",
    rootedness:
      "Melbourne's tram network is daily infrastructure, not just a heritage display. The City Circle is a distinct free visitor service using historic W-Class trams and recorded commentary. Its route ties the central grid to Docklands. This is not the City Loop railway, a private guided tour or a promise that all of Melbourne's trams are free.",
    shift:
      "The city map acquires corners, gradients and distances instead of staying a diagram on your phone.",
    humanReturn:
      "Keep one stop you would return to without needing another sightseeing list.",
    responsibility:
      "Official Victoria visitor information describes clockwise operation. Use Transport Victoria's current Route 35 timetable and alerts for actual departures rather than old bidirectional maps. Heritage vehicles have steps and are not equivalent to an accessible low-floor tram. Check the vehicle and stop requirements for your mobility needs and use accessible network alternatives when needed. Capacity and service disruptions can mean a wait. Commentary is not a live interpreter. Normal fares can apply on other services or outside the Free Tram Zone. Do not lean out, block doors or stand in a roadway for a photograph.",
    evidence:
      "Transport Victoria maintains the live Route 35 timetable. Victoria's official visitor information confirms the free clockwise heritage service and commentary. Direct automated requests were blocked, while the publicly indexed official pages remained available for source checking. EA has not ridden the service or confirmed a particular vehicle's departure and access.",
    duration:
      "Allow about an hour for a circuit, with extra time for waits or stops",
    participation:
      "Independent public-transport ride and optional street-level stops",
    access:
      "Use Transport Victoria's Route 35 listing and service alerts, then the correct signed stop. Ordinary travel is free on this service. Do not treat that as a citywide fare exemption or a guarantee of seat availability.",
    ...common,
    ...guideImage("melbourne-city-circle-tram"),
    guideReview: review(
      "public_admission",
      [
        {
          title: "Transport Victoria: 35 City Circle timetable",
          url: "https://transport.vic.gov.au/route/timetable/15834",
          note: "Current official Route 35 identity, timetable and service checking. Direct automated request blocked.",
        },
        {
          title: "Visit Melbourne: getting around",
          url: "https://www.visitmelbourne.com/Regions/Melbourne/practical-information/Getting-around.aspx",
          note: "Official Victoria tourism description of the free clockwise W-Class service and commentary. Publicly indexed source checked.",
        },
        {
          title: "Visit Victoria: public transport",
          url: "https://www.visitvictoria.com/practical-information/getting-here-and-around/public-transport",
          note: "Official visitor guidance explicitly states that the City Circle tram is not wheelchair accessible.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "wellington-kelburn-cable-car",
    slug: "rise-above-wellington-in-a-working-cable-car",
    title: "Rise above Wellington in a working cable car",
    summary:
      "Climb from Lambton Quay to Kelburn in a few minutes, then let the harbour view explain the hill you just travelled.",
    field: "move",
    place: "Wellington, Lambton Quay to Kelburn",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "wellington",
    kernel:
      "Find Cable Car Lane off Lambton Quay rather than looking for a street-running tram. Take the funicular to Kelburn and notice the incline, the passing car and the city becoming legible below. At the top, give the view a few minutes without treating it as a photo queue. You can return by cable car or separately plan a walk through the Botanic Garden. The two choices are not the same physical undertaking.",
    rootedness:
      "The line began in 1902 as a connection between Kelburn and the city. Its present role includes local transport and visitors, with a short railway that makes Wellington's topography tangible. A working route can be an experience without being turned into an expedition or bundled with every attraction near its upper station.",
    shift: "A steep city begins to make sense through one practical ascent.",
    humanReturn:
      "Remember how the harbour opened, not only the view once you arrived.",
    responsibility:
      "The operator describes a three-to-five-minute ride, normally every ten minutes, with weekday and weekend opening hours differing. It closes on 25 December and can vary festive schedules. Check the current timetable before making a return plan. The Lambton Quay and Kelburn terminals are described as wheelchair and mobility-scooter accessible. Intermediate stations, ramps, equipment dimensions and particular cars have their own details. The operator notes flashing light displays in two tunnels and bell sounds, which matter for sensory sensitivity. The garden walk is optional, sloping and separate from the ride. Museum, Space Place, Zealandia admission and any shuttle need their own checks. Stay behind barriers and follow boarding instructions.",
    evidence:
      "The operator's current timetable and accessibility pages distinguish the short ride, terminal access and intermediate-station conditions. Its home page supplies the 1902 connection and practical location. EA has not travelled the line, checked a specific departure or assessed a visitor's suitability for the garden walk.",
    duration:
      "Three to five minutes each way, plus 20 to 30 minutes at Kelburn",
    participation: "Independent funicular journey and optional viewpoint pause",
    access:
      "Use the official Wellington Cable Car ticket and timetable pages. The city terminal is at the end of Cable Car Lane, 280 Lambton Quay. Choose single or return travel intentionally. Nearby attractions and walks are not automatically included.",
    ...common,
    ...guideImage("wellington-kelburn-cable-car"),
    guideReview: review("public_admission", [
      {
        title: "Wellington Cable Car: timetable and fares",
        url: "https://www.wellingtoncablecar.co.nz/timetable-fares",
        note: "Current operating hours, ticket types and departure pattern.",
      },
      {
        title: "Wellington Cable Car: accessibility",
        url: "https://www.wellingtoncablecar.co.nz/accessibility",
        note: "Terminal and intermediate-station distinctions, mobility equipment and boarding information.",
      },
      {
        title: "Wellington Cable Car: official visitor information",
        url: "https://www.wellingtoncablecar.co.nz/",
        note: "Three-to-five-minute journey, 1902 history, city address and separate nearby attractions.",
      },
    ]),
  },
  {
    id: "london-leighton-house",
    slug: "find-a-victorian-painters-world-behind-a-london-door",
    title: "Find a Victorian painter's world behind a London door",
    summary:
      "Enter Leighton House and move from a London street into a home built around an artist's work and collected objects.",
    field: "learn",
    place: "London, Leighton House, 12 Holland Park Road",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    kernel:
      "Begin with the historic house rather than stopping at the free entrance spaces. In the Arab Hall, look closely at how tile, water, timber and light have been brought together. Then continue towards the artist's studio and ask what a working room needs that a spectacular room does not. Read the museum's accounts of the collection instead of treating every surface as a single, timeless 'Oriental' style. The house rewards a change of pace between its rooms.",
    rootedness:
      "Frederic Leighton's nineteenth-century home and studio stand in a London neighbourhood once associated with artists' houses. The interiors are an individual collector's construction, not a transplanted Middle Eastern home or a neutral summary of the cultures represented. That distinction makes the encounter more revealing: a room can tell you about the person assembling it as well as the objects within it.",
    shift:
      "A beautiful interior becomes a set of choices and relationships you can question.",
    humanReturn:
      "Look again at the room you live in and ask which things are there to work, display or remember.",
    responsibility:
      "Current opening is Monday and Wednesday to Sunday, 10:00 to 17:30, with last entry at 16:30. Tuesday is closed. A current notice also closes Leighton House on 14 and 15 November 2026, reopening on 16 November. Historic interiors need admission even though parts of the new wing and garden are free. The operator reports step-free access to all floors, unlike neighbouring Sambourne House. Check individual access requirements and temporary displays. The garden closes at 17:00. Do not assume a concert, guided tour or admission to both houses is included.",
    evidence:
      "The borough museum's current visitor page confirms hours, access and the November closure. Its Leighton House page establishes the former home and studio and links the museum's interpretation of the Arab Hall. EA has not visited, assessed the collection's provenance or confirmed a particular room's availability.",
    duration: "Allow 60 to 90 minutes for the historic house",
    participation: "Self-guided museum visit with close looking",
    access:
      "Use RBKC Museums' official Leighton House ticket route and current visitor notices. Choose admission to the historic house intentionally. Free public areas, Sambourne House and separately ticketed events have different boundaries. No EA booking is included.",
    ...common,
    ...guideImage("london-leighton-house"),
    guideReview: review("public_admission", [
      {
        title: "RBKC Museums: plan your visit",
        url: "https://www.rbkc.gov.uk/museums/plan-your-visit",
        note: "Leighton House hours, last entry, paid/free boundaries, step-free access and 14–15 November 2026 closure.",
      },
      {
        title: "RBKC Museums: Leighton House",
        url: "https://www.rbkc.gov.uk/museums/leighton-house",
        note: "The artist's former home and studio, with links to the house history and Arab Hall interpretation.",
      },
      {
        title: "RBKC Museums: free-to-visit areas",
        url: "https://www.rbkc.gov.uk/museums/free-visit-areas-leighton-house",
        note: "Distinguishes the free new-wing and garden areas from admission to the historic interiors.",
      },
    ]),
  },
  {
    id: "rome-museo-delle-mura",
    slug: "look-out-from-inside-romes-city-wall",
    title: "Look out from inside Rome's city wall",
    summary:
      "Enter the Museo delle Mura at Porta San Sebastiano and discover a city boundary from the space within it.",
    field: "learn",
    place: "Rome, Museo delle Mura, Porta San Sebastiano",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "rome",
    kernel:
      "Start inside the gate with the museum's explanations of how Rome's defences changed. Where the public route is open, move through the wall's covered spaces and compare the view through an opening with the solid masonry around it. Notice what can be seen, hidden or controlled from this position. Keep the visit to the museum's authorised route. You are entering one section of a city system, not setting out to walk the whole circuit on top of the walls.",
    rootedness:
      "Porta San Sebastiano belongs to the Aurelian Walls and the route of the Appian Way. The museum itself is a later interpretation, not an unchanged ancient guard post. Its rooms have been adapted and reused over time. A little attention to those layers makes the gate more interesting than treating every visible surface as Roman and original.",
    shift:
      "A boundary on a map becomes a built space with thickness, openings and changing uses.",
    humanReturn:
      "The next city gate you pass can become a question about movement rather than a background for a portrait.",
    responsibility:
      "Check the museum's current notices and opening information before travelling. The admission page labels entry free but also carries generic group-ticket language, so confirm any organised-group arrangement rather than assuming the individual rule applies to it. Capacity is limited and a wait is possible. The museum explicitly states that it is not accessible to visitors with mobility disabilities. Upper floors and the toilet are reached by stairs, with no lift. Uneven surfaces, narrow passages and changing route access require care. Confirm which wall sections are open on your day. This is not a continuous wall-top walk, a catacomb visit or the Appian Way cycle route. Do not climb masonry or cross a closed barrier.",
    evidence:
      "The civic museum's ticket, history and accessibility pages establish the public museum, limited capacity and physical constraints. EA has not walked the current route or verified a particular opening. Published group-admission wording is inconsistent and is not presented as a guaranteed free group booking.",
    duration: "Allow about an hour, subject to the route open that day",
    participation: "Self-guided museum and authorised wall-section visit",
    access:
      "Use the official Museo delle Mura information for Via di Porta San Sebastiano 18 and check its notices. Individual admission and organised groups differ. No independent access to closed towers, archaeological areas or the complete wall circuit is implied. No EA booking is included.",
    ...common,
    ...guideImage("rome-museo-delle-mura"),
    guideReview: review(
      "public_admission",
      [
        {
          title: "Museo delle Mura: admission",
          url: "https://www.museodellemuraroma.it/en/informazioni_pratiche/biglietti",
          note: "Free-entry heading, capacity limits, notices and inconsistent generic group-ticket wording.",
        },
        {
          title: "Museo delle Mura: history",
          url: "https://museodellemuraroma.it/en/il_museo/storia",
          note: "Gate, later adaptations and establishment of the museum, not a promise of an unchanged ancient interior.",
        },
        {
          title: "Museo delle Mura: accessibility",
          url: "https://museodellemuraroma.it/en/node/1000031",
          note: "Stairs, lack of lift and separate arrangements for supported sensory visits.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "berlin-museum-der-dinge",
    slug: "meet-berlin-in-a-cabinet-of-ordinary-things",
    title: "Meet Berlin in a cabinet of ordinary things",
    summary:
      "Look through the Museum der Dinge's open storage and give a familiar household object more attention than its designer expected.",
    field: "learn",
    place: "Berlin, Museum der Dinge, Leipziger Straße 54",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    kernel:
      "Choose one recognisable kind of object in the permanent exhibition and compare its neighbours. What changed in shape, material, label or implied user? Read the grouping before deciding which one is 'good design'. The cabinets turn everyday products into a conversation about what people buy, keep and discard. You need not know a designer's name to recognise how an object asks to be held or used.",
    rootedness:
      "The Werkbundarchiv's collection connects German design debates with everyday material culture. Its updated Open Storage is at the museum's new Berlin-Mitte address, not the former Kreuzberg premises. The collection's own categories deserve attention as well as its objects: a museum can show how taste is constructed without asking you to adopt a single approved taste.",
    shift:
      "A city's design culture becomes something you can read through ordinary possessions, not only monumental buildings.",
    humanReturn:
      "Give one overlooked thing at home a closer look before replacing it.",
    responsibility:
      "Current museum hours are Thursday to Monday, 12:00 to 19:00, closed Tuesday and Wednesday. Normal admission is charged. Use Leipziger Straße 54, not old Oranienstraße directions. Exhibition rooms are on one level, but the entrance has a two-centimetre threshold and no automatic door opener. Objects and labels occupy different heights, so wheelchair access does not mean every display is equally easy to see. Main exhibition texts are available in German, English and simple German. Archive and library appointments are separate. Keep objects behind glass and do not treat open storage as permission to handle them.",
    evidence:
      "The museum's current permanent-exhibition, visitor and accessibility pages establish the new address, display concept and detailed access conditions. EA has not visited, handled the collection or verified the provenance of individual objects. The museum's own design interpretation is not an independent consumer rating.",
    duration: "Allow 60 to 90 minutes within museum hours",
    participation:
      "Independent close looking and comparison in the permanent exhibition",
    access:
      "Use the museum's official opening-hours and ticket page for Leipziger Straße 54. Ordinary exhibition admission is distinct from an archive appointment, guided booking or a visit to the former location.",
    ...common,
    ...guideImage("berlin-museum-der-dinge"),
    guideReview: review("public_admission", [
      {
        title: "Museum der Dinge: opening hours and tickets",
        url: "https://museumderdinge.org/visit/opening-hours-tickets/",
        note: "Current Berlin-Mitte address, Thursday-to-Monday hours and paid public admission.",
      },
      {
        title: "Museum der Dinge: The Open Storage",
        url: "https://museumderdinge.org/programme/exhibitions/permanent-exhibition/",
        note: "Updated permanent exhibition at the new venue and everyday-object comparison.",
      },
      {
        title: "Museum der Dinge: accessibility",
        url: "https://museumderdinge.org/visit/accessibility/",
        note: "Entrance threshold, ground-floor route, display heights and languages.",
      },
    ]),
  },
  {
    id: "new-york-met-cloisters-pause",
    slug: "find-a-manhattan-pause-between-medieval-columns",
    title: "Find a Manhattan pause between medieval columns",
    summary:
      "Head to The Met Cloisters in Upper Manhattan and let a courtyard change the pace of a museum visit.",
    field: "restore",
    place: "New York City, The Met Cloisters, Fort Tryon Park",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-york-city",
    kernel:
      "Make time for the journey north rather than squeezing the Cloisters between Midtown appointments. Once admitted, spend a few minutes beside a cloister before moving towards the next artwork. Look at the columns individually, then at the space they make together. Where a garden route is open, notice the difference between the covered edge and the light beyond it. A slower visit is something you can choose, not a treatment the building promises to deliver.",
    rootedness:
      "The Met Cloisters brings medieval European architectural elements and works of art into a modern New York museum setting. The Cuxa cloister's columns did not grow out of a Manhattan monastery. Reading the labels and the museum's account of their origin keeps the place from becoming an attractive historical illusion.",
    shift:
      "Manhattan offers an interval shaped by a courtyard rather than a queue of city icons.",
    humanReturn:
      "Keep the habit of sitting with one space before looking for the next highlight.",
    responsibility:
      "The museum closes on Wednesdays, Thanksgiving Day, 25 December and 1 January. Check current seasonal closing times before planning the long journey. General admission is not free for all visitors. Pay-what-you-wish eligibility is restricted to New York State residents and qualifying New York, New Jersey and Connecticut students with the required evidence. Advance tickets are not generally required for individuals, while groups have registration rules. The normal approach has cobblestones and many stairs, with a separate step-free shuttle arrangement. Read the access guide in advance. Gardens, planting, weather and gallery openings vary by season. Quiet cannot be guaranteed.",
    evidence:
      "The Met's visitor page establishes admission, Wednesday closure, directions and limited step-free access. Its collection record identifies the Cuxa architectural elements. EA has not visited, checked the day's garden access or assessed the museum's collecting history. A courtyard photograph does not promise the same planting or weather.",
    duration: "Allow about 2 hours on site, plus Upper Manhattan travel",
    participation: "Museum visit with an unhurried cloister and garden pause",
    access:
      "Use The Met's own Cloisters visitor and accessibility information for 99 Margaret Corbin Drive. Choose this location rather than Fifth Avenue when planning the journey. Same-day museum admission does not include transfers, and garden access follows the museum's current conditions. No EA booking is included.",
    ...common,
    ...guideImage("new-york-met-cloisters-pause"),
    guideReview: review("public_admission", [
      {
        title: "The Met: plan a visit to The Cloisters",
        url: "https://www.metmuseum.org/plan-your-visit/met-cloisters",
        note: "Official admission, closures, directions and step-free shuttle information. Automated request rate-limited, official indexed page checked.",
      },
      {
        title: "The Met: Cuxa Cloister collection record",
        url: "https://www.metmuseum.org/art/collection/search/470314",
        note: "Origins of the medieval architectural elements and distinction from the modern New York reconstruction.",
      },
      {
        title: "The Met: accessibility at The Cloisters",
        url: "https://www.metmuseum.org/visit-guides/accessibility-at-the-met-cloisters",
        note: "Site-specific step-free shuttle, stairs, restricted access and available assistance.",
      },
    ]),
  },
  {
    id: "lisbon-estufa-fria-pause",
    slug: "walk-into-lisbons-unheated-garden",
    title: "Walk into Lisbon's unheated garden",
    summary:
      "Step from Parque Eduardo VII into Estufa Fria and follow filtered light through a different kind of city garden.",
    field: "restore",
    place: "Lisbon, Estufa Fria, Parque Eduardo VII",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    kernel:
      "Enter with enough time to walk slowly rather than hurry between plant labels. In the cold house, look upwards at the shelter as well as into the foliage. Notice how the overhead structure changes the light and how a path disappears around the next planted edge. Let the building and the collection set the scale of the visit. You are in a managed botanical space within Lisbon, not a tropical forest reached without leaving the city.",
    rootedness:
      "Estufa Fria is part of Parque Eduardo VII and contains three named sections: Fria, Quente and Doce. The cold-house name refers to its unheated arrangement, not a promise of a fixed cool temperature. The municipal site and interpretive material describe a collection shaped by plants, architecture and the history of this public space.",
    shift:
      "A city pause can have texture, shade and living detail without becoming another shopping stop.",
    humanReturn:
      "Take the habit of looking at filtered light into the next ordinary walk.",
    responsibility:
      "The municipality lists Tuesday to Sunday opening, with Monday closure. The published seasonal pattern changes from summer 10:00 to 19:00 to winter 09:00 to 17:00 at the last Sunday in October, with last entry thirty minutes before closing. Recheck the current notice rather than using summer hours for a winter visit. Published holiday closures include 1 January, 1 May and 25 December. Check admission and concessions separately. Damp paths, steps and differing sections can affect access. Stay on the visitor route, do not touch or collect plants and ask about your mobility needs before travel. No guided botanical session or medical benefit is implied.",
    evidence:
      "Lisbon's municipal listing confirms the public garden and its three sections. The official presentation leaflet supplies the seasonal timetable and visitor context. Direct automated pages were blocked, so their publicly indexed official content was checked instead. EA has not visited, inspected path conditions or verified a particular day's full access.",
    duration: "Allow 45 to 75 minutes before last admission",
    participation: "Independent botanical-garden walk at a slower pace",
    access:
      "Check the municipal Estufa Fria information for Parque Eduardo VII and the current ticket and opening notices. This is public garden admission, not a spa, private greenhouse appointment or guaranteed access to every area.",
    ...common,
    ...guideImage("lisbon-estufa-fria-pause"),
    guideReview: review(
      "public_admission",
      [
        {
          title: "Lisbon municipality: Estufa Fria",
          url: "https://www.lisboa.pt/pontos-de-interesse/detalhe/estufa-fria-de-lisboa",
          note: "Municipal identity, location, three named sections and Tuesday-to-Sunday access. Publicly indexed content checked after automated request blocked.",
        },
        {
          title: "Estufa Fria: official presentation leaflet",
          url: "https://estufafria.lisboa.pt/fileadmin/estufa_fria/explorar/FolhetoApresentacao_EstufaFriaLisboa.pdf",
          note: "Seasonal opening pattern, last admission and published holiday closures. Recheck current notices for exceptions.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "copenhagen-glyptotek-winter-garden",
    slug: "give-copenhagen-an-hour-beneath-the-winter-garden-dome",
    title: "Give Copenhagen an hour beneath the winter-garden dome",
    summary:
      "Include the Glyptotek's palm-filled Winter Garden in a museum visit and make a deliberate pause part of looking at art.",
    field: "restore",
    place: "Copenhagen, Ny Carlsberg Glyptotek, Dantes Plads 7",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    kernel:
      "Enter on the admission appropriate to your day and leave a gap between galleries. Find an available place in the Winter Garden, look up towards the dome and let your eyes move from stone to leaves. Return to one artwork rather than immediately attempting the entire collection. The pause gives the museum a rhythm: concentration, an interval, then another look. A café purchase is optional, not the definition of the experience.",
    rootedness:
      "The Winter Garden belongs to the Glyptotek's 1906 expansion. Plants and architecture make it more than a corridor between collections. It is still part of an operating museum, not a public conservatory detached from admission or a private lounge reserved for your visit.",
    shift: "A museum day can contain space between the things you came to see.",
    humanReturn:
      "Keep an interval in your next gallery visit instead of measuring it only by how much you covered.",
    responsibility:
      "Current regular hours are Tuesday to Sunday 10:00 to 17:00, with Thursday until 21:00 and Monday closed. Check dated exceptions. From 2026, the free-admission day is the last Wednesday of the month, not the older Tuesday rule. The museum warns of crowding on free days, so this is not a promise of silence. Holiday closures also apply. The listed historic building has accessibility limitations despite lifts serving several areas. Check the route you need in advance. Museum admission, café purchases, concerts, tours and yoga events are separate questions. Do not assume a seat, café table or unrestricted photography setup.",
    evidence:
      "The museum's architecture page establishes the Winter Garden within the building's development. Its current opening-hours and accessibility pages establish the 2026 free-day change and practical limits. EA has not visited, assessed comfort or confirmed a particular day's seating and room access.",
    duration: "Allow 60 to 90 minutes for a pause and selected galleries",
    participation: "Museum admission with an independent Winter Garden pause",
    access:
      "Use the Glyptotek's official ticket route and dated opening information for Dantes Plads 7. The Winter Garden forms part of the museum visit. A separately advertised event or café booking is not included.",
    ...common,
    ...guideImage("copenhagen-glyptotek-winter-garden"),
    guideReview: review("public_admission", [
      {
        title: "Glyptotek: opening hours",
        url: "https://glyptoteket.com/visit/opening-hours",
        note: "Regular hours, exceptions and 2026 last-Wednesday free admission, including crowding warning.",
      },
      {
        title: "Glyptotek: architecture",
        url: "https://glyptoteket.com/explore/architecture",
        note: "The Winter Garden and the museum's 1906 expansion.",
      },
      {
        title: "Glyptotek: accessibility",
        url: "https://glyptoteket.com/visit/accessibility",
        note: "Listed-building constraints, lifts and guidance for individual access needs.",
      },
    ]),
  },
  {
    id: "ghent-sunday-carillon",
    slug: "hear-ghent-played-from-above-the-square",
    title: "Hear Ghent played from above the square",
    summary:
      "Be near the Belfry on Sunday morning and listen for a live player in a sound that usually seems to belong to the city itself.",
    field: "gather",
    place: "Ghent, public space around the Belfry",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "ghent",
    kernel:
      "Arrive a little before the published Sunday playing hour and find a safe public place near the Belfry. Keep pedestrian and tram routes clear. Listen for the movement of a phrase across the bells rather than waiting only for a familiar melody. Let one piece finish before leaving. The player is high above you, while the audience can be no more formal than people pausing in a square.",
    rootedness:
      "The Belfry's carillon is part of Ghent's civic soundscape. The city's heritage service describes both the bells and the mechanisms involved. A live carillonneur's performance is not the same thing as the automatically played chimes heard at other times. That small distinction changes a street sound into an encounter with someone performing now.",
    shift:
      "A city landmark becomes an instrument, not only something to climb or photograph.",
    humanReturn:
      "Listen more carefully to the next sound you normally file away as background.",
    responsibility:
      "Visit Gent currently publishes live Sunday playing from 11:00 to 12:00. Recheck before making a special journey, since civic events, maintenance and conditions can affect a session. Saturday-night guest concerts are a separate July-and-August programme, not an autumn promise. This guide proposes listening from ordinary public space. It does not include paid tower admission, a keyboard visit, a meeting with the player or a reserved listening area. Outdoor sound, weather, crowds and visibility vary. A partial lift inside the tower does not make the tower fully accessible. Do not confuse a recorded or automatic chime with the live session.",
    evidence:
      "The city's official visitor page supplies the recurring Sunday hour and separate summer schedule. Its heritage service explains the carillon. EA has not heard the session, checked a particular Sunday or measured the sound at a suggested spot. A photograph of the tower or mechanism is context, not proof of live playing on your day.",
    duration:
      "Listen for part or all of the published 11:00 to 12:00 Sunday hour",
    participation:
      "Public-space listening during a scheduled civic performance",
    access:
      "Use Visit Gent's Belfry information and current notices, then choose a lawful public place around the tower. Listening outside does not require a tower ticket. The museum route and any special concert arrangements are separate.",
    ...common,
    ...guideImage("ghent-sunday-carillon"),
    guideReview: review(
      "public_observation",
      [
        {
          title: "Visit Gent: Ghent Belfry",
          url: "https://visit.gent.be/en/see-do/ghent-belfry",
          note: "Current Sunday 11:00–12:00 live carillonneur listing, summer-only Saturday distinction and tower-access limitations.",
        },
        {
          title: "Ghent Historic Houses: the carillon",
          url: "https://historischehuizen.stad.gent/de/belfried/geschich-te-und-geschich-ten/das-carillon",
          note: "Municipal heritage context for the bells and mechanism, not confirmation of an individual future session.",
        },
      ],
      "2026-11-21",
    ),
  },
  {
    id: "dublin-ifi-archive-lunchtime",
    slug: "let-an-archive-film-interrupt-a-dublin-lunchtime",
    title: "Let an archive film interrupt a Dublin lunchtime",
    summary:
      "Take a public cinema seat at the Irish Film Institute and give a short archival programme part of your Temple Bar afternoon.",
    field: "gather",
    place: "Dublin, Irish Film Institute, 6 Eustace Street",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    kernel:
      "Look up the current Archive at Lunchtime programme before deciding when to eat. Collect the appropriate ticket and arrive before the screening starts. Watch for a detail the original camera may have considered ordinary: a journey, a room, a gesture or a way of presenting a place. Afterwards, return to the street with that earlier image still in mind. You have joined a shared screening, not booked access to a private archive store.",
    rootedness:
      "The IFI Irish Film Archive preserves moving-image records rather than offering a single uncomplicated portrait of Ireland. Archive at Lunchtime brings selected material into a public cinema. Read the programmer's note and the film's date where available. An old film is a situated account made by someone, not a transparent window onto how everybody lived.",
    shift:
      "A short break in the day can make the present-day street look less self-evident.",
    humanReturn:
      "Keep one background detail you would have missed in a faster film.",
    responsibility:
      "The IFI describes free box-office tickets, while online booking can incur a fee. Check the actual title, running time, date, language, subtitles, content and seat availability. On this check, October's Programme 2 is listed for 21 October at 12:50 and 26 October at 11:45, with a twenty-six-minute running time. That difference is why 'lunchtime' must not be read as a fixed daily 13:00 session. Future months require a new programme check. Review wheelchair seating and accessible-cinema details when booking. Ordinary feature films, festivals, research appointments and the online Archive Player are separate offers.",
    evidence:
      "The IFI's standing series page explains the free public-screening format and ticket distinction. Its live October film page gives actual dated sessions. The accessibility page supplies booking context. EA has not attended, watched the selected film or assessed suitability for a particular viewer. Publication is reviewed before the next programme cycle.",
    duration:
      "Current Programme 2: 26 minutes, plus arrival and ticket collection",
    participation: "Seated public viewing of a curated archival film programme",
    access:
      "Choose Archive at Lunchtime in the IFI's current film listings, then obtain the ticket for that session. Box-office and online costs differ. No archive research access, meal or daily fixed-time screening is included.",
    ...common,
    ...guideImage("dublin-ifi-archive-lunchtime"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "IFI: Archive at Lunchtime",
          url: "https://ifi.ie/irish-film-directory/archive-at-lunchtime",
          note: "Standing series, thematic programmes, free box-office tickets and possible online booking charge.",
        },
        {
          title: "IFI: October 2026 Archive at Lunchtime Programme 2",
          url: "https://ifi.ie/films/archive-at-lunchtime-october-2026-programme-2",
          note: "Actual 21 and 26 October sessions at different times, with a twenty-six-minute duration. Not a guarantee of next month's programme.",
        },
        {
          title: "IFI: accessible cinema",
          url: "https://ifi.ie/about-ifi/accessible-cinema",
          note: "Official access and booking information, distinct from a guarantee that every session has every access format.",
        },
      ],
      "2026-10-27",
    ),
  },
  {
    id: "amsterdam-bimhuis-concert",
    slug: "give-amsterdam-a-seat-beside-the-jazz-stage",
    title: "Give Amsterdam a seat beside the jazz stage",
    summary:
      "Choose a live BIMHUIS concert by what you want to hear and let the room become an evening's destination.",
    field: "gather",
    place: "Amsterdam, BIMHUIS, Piet Heinkade 3",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    kernel:
      "Listen to an artist sample from the official programme before choosing a ticket. Arrive early enough to find your place without interrupting the opening. During the performance, follow a conversation between two instruments and notice when another musician changes it. Give the room a complete set of attention rather than using live music as a soundtrack to conversation. The worthwhile choice is a programme that interests you, not simply the most famous name available.",
    rootedness:
      "BIMHUIS has been part of Amsterdam's jazz and improvised-music life since 1974. Its current waterfront venue gives that continuing programme a particular setting. The institution's history does not make every concert the same, and an international lineup need not be mislabelled as a traditional local ritual to belong to the city's cultural life.",
    shift:
      "An evening out becomes active listening rather than another venue collected.",
    humanReturn:
      "Take one musician or musical question into the next thing you choose to hear.",
    responsibility:
      "Buy the actual concert, not a generic evening voucher or a ticket for another event at the neighbouring Muziekgebouw. The current calendar includes Joel Ross on 28 October, the Bill Stewart Trio on 30 October and Chico Pinheiro on 31 October 2026. Availability can change. Check start time, seating or standing format, age suitability, access and cancellation terms on the selected event. The free Tuesday café jam is a separate format. The venue is cashless. Café access and dinner arrangements have their own conditions, and no meal is included here. Arrange mobility seating or companion needs with the venue before arrival. Keep phones and conversation from becoming part of the performance.",
    evidence:
      "The live BIMHUIS calendar establishes current dated concerts. Its FAQ and access pages distinguish ticketing, café use, cashless payments and access arrangements. EA has not attended, heard these sets or assessed a particular ticket's view and acoustics. The guide does not guarantee any future lineup.",
    duration:
      "Allow an evening according to the selected concert's running order",
    participation:
      "Ticketed live listening, with the event's seating or standing format",
    access:
      "Choose a dated concert in the official BIMHUIS calendar for Piet Heinkade 3 and read that event's ticket conditions. Concert admission, the café jam, dinner and other Muziekgebouw events are separate. No EA booking or bundled evening is implied.",
    ...common,
    ...guideImage("amsterdam-bimhuis-concert"),
    guideReview: review(
      "public_programme",
      [
        {
          title: "BIMHUIS: live calendar",
          url: "https://www.bimhuis.nl/en/calendar",
          note: "Current October and November 2026 concerts, individual ticket routes and the separate café jam.",
        },
        {
          title: "BIMHUIS: frequently asked questions",
          url: "https://www.bimhuis.nl/en/plan-your-visit/faq/",
          note: "Cashless payments, event ticketing and café access, with event-specific checks still needed.",
        },
        {
          title: "BIMHUIS: accessibility",
          url: "https://www.bimhuis.nl/en/plan-your-visit/accessibility/",
          note: "Official route, seating and assistance arrangements rather than assumed universal access.",
        },
      ],
      "2026-11-04",
    ),
  },
];
