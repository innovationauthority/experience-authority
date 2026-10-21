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
    id: "porto-gazela-cachorrinho",
    slug: "find-portos-smaller-sandwich-at-the-counter",
    title: "Find Porto's smaller sandwich at the counter",
    field: "taste",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "porto",
    place: "Porto",
    summary:
      "Give the cachorrinho its own moment: a small, hot sandwich that makes a different Porto lunch from a francesinha.",
    kernel:
      "Go to Gazela with enough appetite for a snack, not a challenge. Ask for a cachorrinho, confirm the ingredients and heat level, and eat it while the bread is still crisp. Notice how cutting it into small pieces changes the pace of eating. Share an order if that suits you, then decide whether you want another. The counter, the brief exchange and the next warm piece are the experience. You do not need an elaborate tasting menu to find a particular local pleasure.",
    rootedness:
      "Gazela's cachorrinhos belong to Porto's Batalha food scene. The operator dates its business to 1962 and continues to present the small sandwich as its signature. That is a specific house tradition, not proof that one business represents every Porto resident or invented every version of the dish. Set it beside a market lunch or a larger café meal and the city's food becomes more varied than a single famous sandwich.",
    shift:
      "An ordinary snack can tell you something that a list of major dishes misses.",
    humanReturn:
      "Remember the contrast between the crust and filling, not just the name of the restaurant.",
    responsibility:
      "Branch information differs between the operator's current main site and its older hosted listing. Choose a branch from the main site and confirm that address before travelling. Do not rely on an old Entreparedes address. Opening hours, queues, seating and the menu can change. Ask about pork, dairy, wheat, spice and cross-contact. No allergy-safe preparation is established here. Confirm step-free access and service language if needed. Beer is optional, and drinking is not the point of the visit.",
    evidence:
      "The main website establishes current contacts and branch listings. Gazela's hosted restaurant page describes the cachorrinho and ordinary public service, but its address is not treated as current. EA has not eaten here, inspected preparation or independently ranked the food.",
    duration: "Allow 30 to 45 minutes, plus any queue",
    participation: "An ordinary counter or table food purchase",
    access:
      "Use the official branch directory, check today's service and buy directly at the venue. This is not a hosted tasting, an included drink package or an EA reservation. Keep the rest of the afternoon flexible around the queue.",
    guideReview: review("public_hospitality", [
      [
        "Gazela: current branches and contacts",
        "https://www.cervejariagazela.pt/",
        "Use this main directory for branch choice, not the older hosted address.",
      ],
      [
        "Gazela: cachorrinho and public service",
        "https://cervejariagazela.eatbu.com/?lang=pt",
        "Operator-hosted account of its signature snack. Address differs from the main directory.",
      ],
    ]),
  },
  {
    id: "alboraya-daniel-horchata",
    slug: "dip-a-farton-into-alborayas-horchata",
    title: "Dip a farton into Alboraya's horchata",
    field: "taste",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "alboraya",
    place: "Alboraya, near Valencia",
    summary:
      "Make a short journey beyond central Valencia for a cold glass of chufa horchata and the pastry made to meet it.",
    kernel:
      "Order horchata and a farton at Daniel's Alboraya branch. Take a first sip before dipping the pastry, then compare the drink on its own with the softened, sweet bite. Ask what forms of horchata are available that day rather than assuming every preparation is identical. Let this be a modest afternoon stop. The useful discovery is not that a drink can be refreshing, but that a place has developed a particular way of drinking it.",
    rootedness:
      "This is Valencian horchata made with chufa, not a promise of the rice-based drink familiar elsewhere. Daniel's history and the regional horchata-makers' association place the business in Alboraya's horchata tradition. Alboraya is a separate municipality beside Valencia, not a neighbourhood to relabel for a city count. Its agricultural context makes the stop more revealing than treating every pale, sweet drink as the same thing.",
    shift:
      "The ingredient becomes the reason to travel a little farther, rather than a detail below the menu name.",
    humanReturn:
      "Leave able to explain one difference between this horchata and a drink you already knew.",
    responsibility:
      "Use Avenida de la Horchata 41 in Alboraya for this guide. Daniel also has Valencia branches, which are not the same visit. Check current opening, seating and availability directly, especially outside the warmer season. Chufa horchata does not establish that every product or preparation is suitable for every diet. Ask about pastry ingredients, nuts, gluten, dairy and shared equipment. Confirm physical access and language needs. This is not a farm tour, production visit, nutritional recommendation or independently assessed food-safety claim.",
    evidence:
      "Daniel's contact page identifies the Alboraya branch. The horchata-makers' association provides separate local trade context for the business. EA has not tasted the current recipe, visited the premises or verified a particular day's menu or service.",
    duration: "Allow 30 to 60 minutes at the table, plus travel from Valencia",
    participation: "A self-directed drink and pastry stop",
    access:
      "Check the Alboraya branch details, arrange your own outward and return transport and order on arrival under the venue's current arrangements. A place at a table and a particular preparation are not guaranteed. No EA booking or provider partnership is implied.",
    guideReview: review("public_hospitality", [
      [
        "Daniel: branch contacts",
        "https://www.horchateria-daniel.es/contacto/",
        "Alboraya address and separate Valencia branches.",
      ],
      [
        "Artisan horchata-makers: Daniel",
        "https://artesanosdelahorchata.com/anfitriones/daniel-2/",
        "Regional trade association context, not an independent food review.",
      ],
    ]),
  },
  {
    id: "osaka-kuromon-lunch",
    slug: "build-an-osaka-lunch-one-kuromon-counter-at-a-time",
    title: "Build an Osaka lunch one Kuromon counter at a time",
    field: "taste",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "osaka",
    place: "Osaka",
    summary:
      "Choose a small lunch in Kuromon's covered market and let the counters, rather than a checklist, decide its shape.",
    kernel:
      "Walk the market once before committing your appetite. Choose one freshly prepared savoury item whose ingredients you understand, then leave room for fruit or a sweet from another shop. Ask where to eat what you buy and finish it without blocking the next customer. A second small purchase can make more sense than the biggest display. The point is to make a meal from actual choices, not to perform a race through everything someone else has recommended.",
    rootedness:
      "Kuromon is a covered market in Osaka's Nipponbashi area. Its association documents fish sellers, produce shops, prepared food and sweets along the arcade. It is also well established on the visitor circuit. That does not make an ordinary purchase meaningless, but it does make claims of an untouched secret unhelpful. Look at what a shop prepares and how you are invited to buy it, rather than judging a market by how few visitors you see.",
    shift:
      "A market becomes a conversation between appetite, ingredients and the people serving them.",
    humanReturn:
      "Keep the name of one food you would willingly order again without a photograph beside it.",
    responsibility:
      "Individual shops set their own hours, prices, seating and service rules. Check the official directory for a particular destination. Do not assume a late-evening visit will offer the same choice as lunchtime. Ask about shellfish, fish, wheat, soy and other allergens, and use normal judgement about handling and preparation. This guide does not recommend specialist potentially hazardous foods or establish that any stall is allergy-safe. Respect photography requests, take care with hot food and keep the covered passage clear.",
    evidence:
      "The market association supplies the store map and food categories. Osaka's official visitor site corroborates the location and public market context. EA has not eaten at these stalls, assessed their kitchens or checked today's stock. A market listing is not a quality ranking.",
    duration: "Allow 60 to 90 minutes around the shops' daytime service",
    participation: "Independent browsing and separately purchased food",
    access:
      "Use the official Kuromon map and travel to the Nipponbashi area independently. No private invitation is needed for ordinary shopping. Any organised food tour, translation assistance or transport must be arranged separately and is not included by EA.",
    guideReview: review("public_hospitality", [
      [
        "Kuromon Market: official store map",
        "https://kuromon.com/en/official-store-map/",
        "Association directory and the market's public food offer.",
      ],
      [
        "Osaka Convention and Tourism Bureau: Kuromon",
        "https://osaka-info.jp/en/spot/kuromon-market/",
        "Location and market context.",
      ],
    ]),
  },
  {
    id: "tallinn-kalev-marzipan",
    slug: "paint-a-small-marzipan-character-in-tallinn",
    title: "Paint a small marzipan character in Tallinn",
    field: "make",
    country: "Estonia",
    countrySlug: "estonia",
    regionSlug: "tallinn",
    place: "Tallinn",
    summary:
      "Trade the confectionery counter for a brush and turn a small marzipan figure into something unmistakably your own.",
    kernel:
      "Arrange a marzipan-painting session at Kalev's Rotermann workshop. Begin with the figure and the colours, then work on one small feature before decorating the whole surface. Notice how little space there is between a plain shape and a recognisable expression. Ask the instructor about the material while you work. You are making a small edible object under guidance, not watching a factory line or being expected to draw like a professional illustrator.",
    rootedness:
      "Kalev's confectionery story is closely associated with Tallinn, and the current workshop brings marzipan into a public teaching setting. The relevant venue is upstairs at the Rotermann chocolate shop on Roseni 7. It should not be confused with the separate Maiasmokk café. A short class offers a practical entry into the confectionery tradition without turning contested origin stories or promotional health claims into historical certainty.",
    shift:
      "A sweet in a display case becomes a surface somebody had to finish with a steady hand.",
    humanReturn:
      "Give the finished figure a name, then explain the one detail that was harder to paint than expected.",
    responsibility:
      "The operator describes a two-hour marzipan workshop with materials and a figure included. Registration is through the published organiser, not an assumed drop-in class during shop hours. Confirm whether individuals can join your chosen session, any minimum group size, instruction language, child supervision and the final price. Marzipan contains almonds, and other ingredients or cross-contact may matter. Ask about dietary suitability before booking. The workshop is upstairs, so confirm an accessible route rather than assuming one. Store or eat the finished object according to the instructor's advice.",
    evidence:
      "Kalev's workshop section gives the activity, duration, inclusions and registration contact. Visit Estonia identifies the Rotermann location and distinguishes the available class formats. EA has not attended a session, checked teaching quality or verified availability for a particular visitor.",
    duration: "About two hours for the booked marzipan session",
    participation: "Guided painting of an edible marzipan figure",
    access:
      "Contact the organiser listed in Kalev's Confectionery Workshop section and obtain a dated confirmation before travelling. Specify marzipan rather than the separate chocolate-making or chocolate-painting classes. This is an ordinary public workshop enquiry, not a request for private factory access or an EA-arranged lesson.",
    guideReview: review("public_programme", [
      [
        "Kalev: confectionery workshop",
        "https://kalev.eu/en/how-our-sweets-are-made/",
        "Marzipan painting, two-hour format and registration contact.",
      ],
      [
        "Visit Estonia: Kalev workshop",
        "https://visitestonia.com/en/kalev-confectionery-workshop-marzipan-and-chocolate",
        "Roseni 7, upstairs Rotermann workshop and available activities.",
      ],
    ]),
  },
  {
    id: "seville-barroazul-cuerda-seca",
    slug: "keep-sevilles-tile-colours-apart-by-hand",
    title: "Keep Seville's tile colours apart by hand",
    field: "make",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "seville",
    place: "Seville",
    summary:
      "Try cuerda seca in Triana and discover that a tile's pattern depends as much on its boundaries as its colours.",
    kernel:
      "Choose a dated cuerda seca session at BarroAzul, then follow the instructor from the prepared design into applying colour. Work one enclosed area at a time and watch what happens at the edge. The useful challenge is control rather than complexity. Leave the piece for firing and agree how you will receive it. When you return to the streets, a repeated tile pattern can look less like decoration and more like a sequence of decisions.",
    rootedness:
      "Triana's ceramic history gives this visitor exercise a clear local setting. BarroAzul's activity description connects cuerda seca with Seville's Mudéjar ceramic tradition. The class is a contemporary introduction led by a studio, not work on a historic tile or permission to remove one. Its ordinary tile-painting, mug and longer mural sessions are separate offers, so the technique you choose matters.",
    shift:
      "The line between colours becomes something you understand through the hand, not only the eye.",
    humanReturn:
      "Keep the finished piece with a memory of the section where patience changed the result.",
    responsibility:
      "The current site lists Calle Covadonga 9, Bajo 7. Older references to another studio address are not the arrival instructions. The described session lasts about two and a half hours. Firing normally means later collection, often the following evening, but delays are possible. Confirm collection or paid delivery before booking near departure. Calendar language and technique vary by date. Ask about children, hand-mobility needs, step-free access, materials and cancellation conditions. A confusing copied date in one calendar title is not evidence of a guaranteed session.",
    evidence:
      "The studio's activity description establishes the process and firing delay. Its live events page includes future cuerda seca sessions and identifies language and booking status. EA has not taken the class or checked a finished participant piece. A gift voucher alone is not a confirmed place on a dated class.",
    duration:
      "About two and a half hours, followed by firing and later collection",
    participation: "Supervised decoration of a ceramic tile",
    access:
      "Select a dated cuerda seca event, confirm its title, language and current address with the studio, and reserve directly. Do not substitute a general product purchase for a session booking. Staff control the kiln, and the visit does not include a separate museum tour unless explicitly booked.",
    guideReview: review("public_programme", [
      [
        "BarroAzul: dated workshops",
        "https://www.barroazul.es/en_GB/events",
        "Live sessions, language and availability. Verify inconsistent copied titles before booking.",
      ],
      [
        "BarroAzul: activity descriptions",
        "https://www.barroazul.es/en_GB/descripcion",
        "Cuerda seca, duration, firing delay and current Covadonga address.",
      ],
    ]),
  },
  {
    id: "kyoto-adachi-kumihimo",
    slug: "braid-a-small-kyoto-cord-one-crossing-at-a-time",
    title: "Braid a small Kyoto cord one crossing at a time",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kyoto",
    place: "Kyoto",
    summary:
      "Move weighted threads around a braiding stand at Adachi Kumihimo and watch a pattern appear below your hands.",
    kernel:
      "Reserve a beginner accessory session and choose from the prepared thread colours available on the day. Follow the movement of the bundles around the round stand without pulling them tight. Repeat the sequence slowly enough to notice when the rhythm becomes familiar. The cord grows below the working surface, which makes the result feel slightly surprising even while you are making it. Let staff finish the accessory as the chosen course requires.",
    rootedness:
      "Kumihimo is a Japanese braiding practice with uses that extend beyond a souvenir bracelet. Adachi's Kyoto venue combines related displays with short visitor workshops. Making a small strap or bracelet is an introduction to the relationship between sequence, tension and pattern. It is not a claim to have mastered a professional braid, nor should a photograph of other kumihimo structures be mistaken for the exact pattern supplied in this class.",
    shift:
      "A decorative cord becomes a record of repeated movements rather than an apparently effortless object.",
    humanReturn:
      "Keep the accessory as a reminder of the moment your hands stopped needing every instruction repeated.",
    responsibility:
      "The tourism council lists advance telephone or fax booking, normally at least three days ahead. Confirm the course, language support, child suitability, hand-mobility needs, seating and accessible entry. Short accessory courses are generally around an hour, while other options differ. Large groups or busy periods can require later finishing and delivery, so do not assume same-day collection. Closure days are irregular. Published street numbers differ between listings, so use the venue's confirmed arrival instructions rather than relying on a single map pin.",
    evidence:
      "Kyoto's tourism council and prefectural tourism federation document Adachi's public workshop and contact details. The operator's Japanese workshop page was also inspected, but its website did not provide a working secure connection during this check. EA has not attended, tested instruction in English or confirmed an individual reservation. No payment should be entered on an insecure page.",
    duration:
      "Around 50 to 60 minutes for a short accessory course, subject to confirmation",
    participation: "Guided braiding on a prepared stand, with staff finishing",
    access:
      "Use the secure tourism listing's published telephone contact to arrange the actual class. Confirm the date, address, collection and payment method directly before committing travel time. A public workshop reservation is distinct from private production access or a full craft qualification.",
    guideReview: review("public_programme", [
      [
        "Kyoto tourism council: kumihimo experience",
        "https://shugakuryoko.kyoto.travel/experience/53/",
        "Updated July 2026, courses, advance booking and contact details.",
      ],
      [
        "Kyoto Prefecture Tourism Federation: Adachi",
        "https://www.kyoto-kankou.or.jp/info_search/3487",
        "Venue identity, public visitor offer and contact.",
      ],
    ]),
  },
  {
    id: "bilbao-artxanda-funicular",
    slug: "watch-bilbao-change-shape-on-the-artxanda-climb",
    title: "Watch Bilbao change shape on the Artxanda climb",
    field: "move",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "bilbao",
    place: "Bilbao",
    summary:
      "Take the short municipal funicular ride to Artxanda and let Bilbao's river, slopes and neighbourhoods settle into a larger picture.",
    kernel:
      "Board the funicular for the ride rather than treating it as a gap before the viewpoint. Notice the slope, the changing angle and how quickly the city starts to fit together below. At the top, choose a comfortable public viewpoint and look for a part of Bilbao you have already walked. Give the return trip its own attention. A three-minute ascent can be a useful change of scale without becoming a mountain expedition.",
    rootedness:
      "Artxanda's funicular is municipal transport with a published operating schedule, not an improvised scenic shuttle. Its value here is the connection between the inhabited valley and the hillside above it. A recognisable panorama becomes more interesting when you can place your own earlier route inside it. The hill does not need a claim of secrecy or an elaborate activity package to earn a place in a Bilbao stay.",
    shift:
      "The city becomes a relationship between slopes and streets, rather than a sequence of separate landmarks.",
    humanReturn:
      "Find one neighbourhood from above and return to it with a clearer sense of where it sits.",
    responsibility:
      "The operator describes a journey of about three minutes and different seasonal operating hours. Winter service applies from October through May, with later starts on Sundays and holidays. Use the current timetable and notices rather than a fixed frequency from an old guide. Confirm ticket validity, wheelchair boarding and any assistance requirements directly. Weather can remove the view even when transport runs. Stay on public paths, keep clear of doors and do not eat or drink where prohibited by the operator.",
    evidence:
      "Bilbao's municipal funicular website supplies hours, fares and journey information. Its main site provides operating context and visitor updates. EA has not ridden the service, checked current queues or assessed every route around the upper station. A published timetable cannot guarantee a particular departure or visibility.",
    duration: "Allow 45 to 90 minutes including the short rides and time above",
    participation:
      "Public funicular travel and an optional gentle viewpoint walk",
    access:
      "Check the official timetable before travelling to the lower station. Buy the appropriate ticket through the operator's arrangements and keep enough time for the return. Admission to other attractions, meals and transport to the station are separate. This is not a guided hike or an EA-organised excursion.",
    guideReview: review("public_programme", [
      [
        "Artxanda Funicular: hours and fares",
        "https://funicularartxanda.bilbao.eus/horarios-y-tarifas/",
        "Municipal schedule, seasonal hours and service frequency.",
      ],
      [
        "Artxanda Funicular: official site",
        "https://funicularartxanda.bilbao.eus/",
        "Operator information and notices.",
      ],
    ]),
  },
  {
    id: "hamburg-hadag-62",
    slug: "cross-hamburgs-working-harbour-on-ferry-62",
    title: "Cross Hamburg's working harbour on ferry 62",
    field: "move",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "hamburg",
    place: "Hamburg",
    summary:
      "Use an ordinary harbour ferry to see Hamburg as a place of crossings, ship traffic and working waterfronts.",
    kernel:
      "Choose a manageable section of route 62 and read the departure display before boarding. Start with the changing shore rather than a list of buildings. Watch how a pier joins the street to the water and how another part of the harbour comes into view after each stop. You can travel towards Finkenwerder or plan a shorter return from an intermediate stop. The ferry has a transport purpose, which is part of what makes the journey worth noticing.",
    rootedness:
      "HADAG's route 62 links Landungsbrücken with Finkenwerder through several Elbe-side stops, including the Altona and Övelgönne area. It places the visitor inside Hamburg's public transport network rather than above it. This is not a narrated sightseeing cruise, and the vessels, advertisements, passengers and working port activity are not arranged as a performance for the camera.",
    shift:
      "The harbour becomes a route through the city rather than a distant backdrop to it.",
    humanReturn:
      "Choose one shore you would like to explore on foot after seeing it from the moving boat.",
    responsibility:
      "Check HADAG notices and the live hvv journey planner for your date and direction. A May harbour-festival diversion in the archive is not a permanent change to the October route. Weather, construction, crowding and operating changes can alter stops or boarding. Confirm the appropriate transport ticket and return connection. Upper-deck seating and a particular boat are not guaranteed. Ask about boarding assistance and gangway conditions, supervise children and keep access paths clear. Do not enter working docks or photograph passengers intrusively.",
    evidence:
      "HADAG's route page documents the stops, and its separate notices page distinguishes dated disruptions from the regular route. EA has not sailed the service or inspected a departure. The guide makes no claim about today's vessel, crowd level or exact travel time.",
    duration:
      "Allow one to two hours for a chosen out-and-back segment and waiting",
    participation:
      "Ordinary public ferry travel with an optional independent shore stop",
    access:
      "Plan route 62 through the official network before buying or validating the relevant ticket. Recheck the return before leaving the boat. Food, a shore visit and any later concert are separate decisions and bookings. No combined package, guaranteed connection or EA provider relationship is implied.",
    guideReview: review("public_programme", [
      [
        "HADAG: route 62",
        "https://hadag.de/de/linien/62/",
        "Route and pier sequence, linked to live journey planning.",
      ],
      [
        "HADAG: service notices",
        "https://www.hadag.de/de/aktuelles/",
        "Dated changes, weather and temporary diversions.",
      ],
    ]),
  },
  {
    id: "seoul-yeouinaru-cycling",
    slug: "borrow-a-bicycle-for-seouls-river-level-view",
    title: "Borrow a bicycle for Seoul's river-level view",
    field: "move",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    place: "Seoul",
    summary:
      "Start at Yeouinaru's park rental counter and choose a short, reversible ride beside the Han instead of a distance challenge.",
    kernel:
      "Ask the Yeouinaru rental staff for a bicycle and a route suited to your confidence. Check the fit, brakes, return time and helmet before leaving. Ride a short riverside section, stop only in a safe place off the cycle lane and turn back while the journey still feels easy. The river gives Seoul a width that is hard to grasp from a station exit. A modest ride is enough to notice the difference between the skyline and the everyday space below it.",
    rootedness:
      "Seoul's municipal Hangang guidance lists a park bicycle-rental counter below Yeouinaru Station's exit 2. This is a staffed park-rental system, not automatically the separate Ttareungi city bike-share service. The park is shared by people exercising, meeting and travelling through. Using it well means joining those ordinary movements rather than treating the whole waterfront as an empty leisure course.",
    shift:
      "A city known through districts becomes a continuous edge you can follow at your own pace.",
    humanReturn:
      "Remember one comfortable stretch you would return to, rather than the number of kilometres completed.",
    responsibility:
      "The municipal instructions use a phone number, payment and a barcode receipt. Compatibility with every foreign phone or card is not established, so ask staff before relying on the rental. Return to the original counter unless an explicitly agreed alternative applies. Winter hours are shorter and weather can suspend service. Ride within ability, wear a helmet, yield appropriately and follow the signed lanes and local speed rules. Do not ride after alcohol, while using a phone or with headphones. Confirm age, child-seat options and equipment suitability directly.",
    evidence:
      "The city's rental guide was updated in September 2026 and explains locations, seasons, return rules and road conduct. Seoul's English Hangang guide supplies the wider park context. EA has not tested a rental payment, inspected equipment or ridden today's route conditions.",
    duration:
      "Choose an initial one-hour rental or the counter's suitable short option",
    participation: "Self-directed cycling after a staffed public rental",
    access:
      "Visit the Yeouinaru park counter during confirmed hours and complete the operator's rental procedure. Keep the receipt and allow time for the return check. This is not a guided ride, a one-way bike-share guarantee or an assessment that cycling is suitable for every visitor.",
    guideReview: review("public_programme", [
      [
        "Seoul Hangang: bicycle rental",
        "https://hangang.seoul.go.kr/www/contents/758.do",
        "September 2026 rental guide, Yeouinaru location, winter hours and rules.",
      ],
      [
        "Seoul: Hangang parks",
        "https://english.seoul.go.kr/service/amusement/hangang/hangang-parks/",
        "Municipal park context and public facilities.",
      ],
    ]),
  },
  {
    id: "franeker-eisinga-planetarium",
    slug: "find-a-solar-system-in-a-franeker-living-room",
    title: "Find a solar system in a Franeker living room",
    field: "learn",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "franeker",
    place: "Franeker",
    summary:
      "Enter a house where the ceiling became a working model of the planets, then look for the mechanism that keeps its promise.",
    kernel:
      "Begin in the planetarium room and give your eyes time to separate the domestic room from the model above it. Follow one planet's place in the arrangement rather than trying to absorb every label. Then look at how the mechanism supports the display, using the museum's accessible presentation if stairs do not suit you. The memorable fact is not just that the model is old. It is that a person made the movement of a much larger world fit into a room where life continued.",
    rootedness:
      "Eise Eisinga built his mechanical planetarium into his home in Franeker. The museum connects the ceiling model with his wool-combing work, manuscripts and astronomical instruments. This is a specific encounter with observation and making, not a modern projection show under a dome. A small Frisian town becomes the setting for a question about what patient curiosity can build.",
    shift:
      "The distance between an ordinary room and an ambitious idea becomes unexpectedly small.",
    humanReturn:
      "Take away a question you would be willing to keep working on after the first evening of enthusiasm.",
    responsibility:
      "The museum requires pre-booked admission. Check the ticket date and current hours before travelling to Eise Eisingastraat 3. Mondays are seasonal, with the published regular Monday opening limited to April through October. Christmas Day and New Year's Day are listed closures. Much of the museum is wheelchair accessible, but the mechanism area requires steep stairs, with a ground-floor monitor alternative. Confirm any assistance or explanation-language needs. Do not touch the historic mechanism or assume that every part of the house has the same physical access.",
    evidence:
      "The museum's practical page establishes booking, seasonal opening and access limitations. Its separate planetarium page explains the room, mechanism and wider displays. EA has not visited, inspected the mechanism or verified a particular guided explanation. Current ticket availability must be checked directly.",
    duration: "Allow 60 to 90 minutes within the booked visit arrangements",
    participation: "A public museum visit around a working mechanical model",
    access:
      "Book through the official museum and arrange your journey to Franeker separately. Do not confuse the ceiling planetarium with another attraction bearing Eisinga's name. Nearby museums have their own admission arrangements. This guide does not create a combined ticket, private demonstration or EA partnership.",
    guideReview: review("public_programme", [
      [
        "Eisinga Planetarium: plan your visit",
        "https://www.eisinga-planetarium.nl/en/plan-your-visit/",
        "Pre-booking, seasonal Monday opening and accessible alternatives.",
      ],
      [
        "Eisinga Planetarium: the planetarium",
        "https://www.eisinga-planetarium.nl/en/the-planetarium/",
        "Ceiling model, mechanism and museum context.",
      ],
    ]),
  },
  {
    id: "london-dennis-severs-silent",
    slug: "read-a-london-house-without-speaking",
    title: "Read a London house without speaking",
    field: "learn",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London",
    summary:
      "Take the Silent Day Visit at Dennis Severs' House and let objects, sounds and unfinished-looking moments build an imagined household.",
    kernel:
      "Enter at the time on your ticket and let the silence change how you look. Pause at one arrangement of objects before trying to understand the whole room. Notice what appears recently used, what seems to belong to an earlier period and what you infer without being told. Carry that question into the next space. There is no need to document every surface. The visit asks for attention to an atmosphere, not a running commentary or a competition to identify antiques.",
    rootedness:
      "Dennis Severs' House in Spitalfields is a deliberately created artistic environment around an imagined Huguenot silk-weaving family. It should not be described as an unchanged historic family's home. The distinction makes the visit more interesting, not less: you can ask how a room persuades you that someone has just left it. It sits between historical reference, theatre and the visitor's own capacity to complete a scene.",
    shift:
      "A house can tell a story through what it withholds as much as what it explains.",
    humanReturn:
      "Compare one detail with your companion afterwards, when speaking again reveals how differently you read the same room.",
    responsibility:
      "Choose the Silent Day Visit specifically. Other evening, seasonal and guided formats have different conditions. The house has steep stairs, uneven floors and dim areas and is not wheelchair accessible. There are no visitor toilets. Large bags are unsuitable, and photography or filming inside is prohibited. Food displays include nuts, which may matter for allergies. Under-16s require the operator's specified adult supervision. Check the current ticket terms, arrive punctually and confirm any sensory or physical concerns before buying.",
    evidence:
      "The house's official site explains its artistic premise. Its booking page describes the Silent Day Visit and the practical restrictions. EA has not attended, assessed accessibility on site or confirmed a specific date's availability. Historical atmosphere is not evidence that the staged household actually existed as presented.",
    duration: "Use the booked visit's stated arrival and visit allowance",
    participation:
      "An unguided, silent encounter with an authored house environment",
    access:
      "Reserve the named visit through the official ticket link and read its conditions before payment. The exterior photograph is location context, not permission to photograph the interior. This is a public ticketed visit, not access to a private residence or an EA-hosted tour. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Dennis Severs' House: Silent Day Visit",
        "https://checkout.dennissevershouse.co.uk/events/dennissevershouse/537369",
        "Named visit, booking and physical and photography restrictions.",
      ],
      [
        "Dennis Severs' House: official introduction",
        "https://dennissevershouse.co.uk/",
        "The artistic house and different visit formats.",
      ],
    ]),
  },
  {
    id: "mexico-city-map-materials",
    slug: "follow-a-material-through-mexicos-popular-arts",
    title: "Follow a material through Mexico's popular arts",
    field: "learn",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    place: "Mexico City",
    summary:
      "Choose one material at the Museo de Arte Popular and discover how much geography, skill and imagination it can hold.",
    kernel:
      "Begin with a material you can recognise, such as clay, fibre, wood or paper. Find an object that makes you reconsider what it can do, then read the maker and place information before moving on. Compare it with another work rather than trying to photograph the whole collection. Look for the difference between an everyday use and a transformed form. The museum is most useful when an astonishing object leads you back to the people and decisions behind it.",
    rootedness:
      "Mexico City's Museo de Arte Popular brings regional making traditions into a central-city museum. A single national label cannot explain every technique, community or use represented. The point is to let specific labels interrupt a vague idea of Mexican craft. This is the museum at Revillagigedo 11, not the separate Museo Nacional de Culturas Populares in Coyoacán and not a workshop where visitors automatically make the objects on display.",
    shift:
      "An extraordinary form becomes a route towards a particular maker or region, not a decorative shorthand for a country.",
    humanReturn:
      "Keep one maker, technique or place name to investigate before choosing what to buy elsewhere.",
    responsibility:
      "The city lists regular Tuesday-to-Sunday opening, but verify current exhibitions, holiday changes, admission and last entry before travelling. A pictured work may be on loan, rotated or absent during your visit. Follow gallery rules for photography and do not touch objects unless a display explicitly invites it. Confirm step-free circulation, assistance and available interpretation languages. Family workshops and special events have separate calendars and registration. No encounter with the makers, purchase provenance or practical craft lesson is included in ordinary admission.",
    evidence:
      "Mexico City's cultural department identifies the museum, address and public visiting arrangements. Its 2026 anniversary notice corroborates continued programming and the institution's role. EA has not visited the current displays, independently attributed individual objects or confirmed today's admission desk arrangements.",
    duration: "Allow 60 to 120 minutes for a focused museum visit",
    participation: "Independent looking and reading in public galleries",
    access:
      "Check the city's current museum information and plan the Revillagigedo address in the historic centre. Buy or obtain the appropriate admission directly under current rules. Transport, a later studio visit and any purchase are separate. This is a public-source museum guide, not a locally validated EA selection or provider partnership.",
    guideReview: review("public_programme", [
      [
        "Mexico City Culture: Museo de Arte Popular",
        "https://www.cultura.cdmx.gob.mx/recintos/museos/map",
        "Municipal museum record, address and regular visiting hours.",
      ],
      [
        "Mexico City Culture: MAP's twentieth anniversary",
        "https://cultura.cdmx.gob.mx/index.php/comunicacion/nota/080-26",
        "2026 municipal confirmation of museum programming and access.",
      ],
    ]),
  },
  {
    id: "oslo-deichman-reading",
    slug: "borrow-an-hour-not-a-book-in-oslo",
    title: "Borrow an hour, not a book, in Oslo",
    field: "restore",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    place: "Oslo",
    summary:
      "Make Deichman Bjørvika a real reading pause, not just an architectural stop between the station and the waterfront.",
    kernel:
      "Enter the library during public opening and choose a floor whose atmosphere suits the pause you need. Find a book, newspaper or subject that catches your attention, or bring your own reading. Sit where reading is invited and give it more than the few minutes usually left between sights. You can look at the building on the way, but the meaningful change is using a civic room for its intended purpose. Leave without needing to turn every free hour into another purchase.",
    rootedness:
      "Deichman Bjørvika is Oslo's main public library, between the central station and the Opera. Its six floors include reading spaces, collections, events and practical facilities. Those different uses matter: a lively public library is not a uniformly silent sanctuary. Finding the right corner is part of understanding how the city makes space for people to spend time without being restaurant customers or ticket holders.",
    shift:
      "A major building becomes somewhere you can inhabit briefly rather than only admire from outside.",
    humanReturn:
      "Take away one page, idea or subject you want to return to, without assuming you can borrow the physical book.",
    responsibility:
      "Ordinary visiting and reading do not require borrowing a book. A library card has separate residence and identification requirements, so short-stay visitors should not assume eligibility. Follow designated quiet, eating and working areas. Do not sleep in the library or treat desks as luggage storage. Particular seats, rooms, equipment and events may need bookings or have other restrictions. Confirm opening and holiday exceptions on the Bjørvika page, and ask staff about lifts, suitable seating and language-specific material if needed.",
    evidence:
      "Deichman's English information explicitly welcomes reading, relaxing and spending time, while explaining library-card rules. The Bjørvika branch page identifies the address, opening information and floor functions. EA has not tested the facilities, reserved a seat or assessed noise levels on a particular day.",
    duration: "Allow 45 to 90 minutes for a genuine reading pause",
    participation: "Free public library use within its ordinary visitor rules",
    access:
      "Visit Anne-Cath. Vestlys plass 1 during the branch's public hours. Ask staff where to find an appropriate reading area rather than assuming every room is open. Food service, events, equipment and borrowing are separate from simply entering and reading. No EA reservation or special access is implied.",
    guideReview: review("public_observation", [
      [
        "Deichman Bjørvika: branch information",
        "https://deichman.no/bibliotekene/bj%C3%B8rvika",
        "Address, current hours and the six-floor library's uses.",
      ],
      [
        "Deichman: information in English",
        "https://deichman.no/in-english",
        "Welcome, conduct rules and separate borrowing eligibility.",
      ],
    ]),
  },
  {
    id: "istanbul-ataturk-arboretum",
    slug: "read-a-tree-label-in-istanbuls-living-collection",
    title: "Read a tree label in Istanbul's living collection",
    field: "restore",
    country: "Türkiye",
    countrySlug: "turkiye",
    regionSlug: "istanbul",
    place: "Bahçeköy, Istanbul",
    summary:
      "Leave the central sightseeing circuit for a slower walk among the trees and ponds of Atatürk Arboretum.",
    kernel:
      "Choose a modest permitted circuit and stop at a tree whose form catches your attention. Read its label, then look again at the bark, branching or leaf shape. Compare it with one nearby rather than trying to identify everything. Let a pond or a turn in the path provide a pause without needing to reach every corner. The visit works through noticing a small difference, not through covering the largest possible stretch of green.",
    rootedness:
      "Atatürk Arboretum in Bahçeköy is a managed living collection connected with forestry research and education. It is not simply another city park or an unrestricted picnic forest. That distinction gives the quieter walk its purpose: the trees are both living things and part of a collection people maintain and study. Istanbul's northern landscape offers a different scale of attention from the monuments around the historic centre.",
    shift:
      "A patch of green becomes a set of individual lives and forms rather than a background called nature.",
    humanReturn:
      "Remember one tree well enough to notice whether a related form appears in your own neighbourhood.",
    responsibility:
      "Confirm today's admission, closing time and visitor restrictions with the arboretum before making the longer journey north. The government educational listing states Monday closure, but its quoted prices should not be treated as current. Do not assume permission for picnics, pets, cycling, professional photography or off-path exploration. Stay on permitted routes, leave plants and wildlife undisturbed and wear footwear suited to wet or uneven ground. Ask about a suitable accessible circuit. Autumn colour, wildlife sightings and quiet conditions are not guaranteed.",
    evidence:
      "The Ministry of Education's outdoor-learning directory documents public visits, the Bahçeköy location and the forestry contact. The forestry authority separately establishes the institution's research context. The arboretum's own website could not be reliably retrieved during this check, so exact current prices and hours remain unconfirmed. EA has not walked the site or assessed its paths.",
    duration: "Allow 60 to 120 minutes on site, with separate travel time",
    participation: "Independent observation on permitted public visitor paths",
    access:
      "Use the government directory's official contact to verify access before departure. Arrange outward and return transport independently and allow daylight for the visit. A public admission does not grant research access, plant collection or a private guided walk. This is not an EA-organised excursion or an assurance that every path suits every visitor.",
    guideReview: review("public_observation", [
      [
        "Türkiye Ministry of Education: Atatürk Arboretum",
        "https://okuldisiogrenme.eba.gov.tr/mekan-detay/ataturk-arboretumu-2712",
        "Public visitor context and official contact. Confirm current hours and fees directly.",
      ],
      [
        "General Directorate of Forestry: Atatürk Arboretum",
        "https://www.ogm.gov.tr/tr/haberler/genel-mudurumuz-ataturk-arboretumunda-incelemelerde-bulundu",
        "Institutional context only, not a current timetable.",
      ],
    ]),
  },
  {
    id: "melbourne-city-baths-swim",
    slug: "give-melbournes-city-baths-a-few-unhurried-lengths",
    title: "Give Melbourne's City Baths a few unhurried lengths",
    field: "restore",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    place: "Melbourne",
    summary:
      "Step off Swanston Street for an ordinary indoor swim in a historic public bathing building that still has a daily job.",
    kernel:
      "Check the public swimming arrangements, change and choose a lane appropriate to your pace. Start with a few comfortable lengths rather than a target distance. Between them, notice the scale of the room and the way a working pool differs from an architectural photograph. Leave enough time to dry off and return to the street without rushing. The pleasure is that a recognisable heritage building can be used, not merely looked at from a pavement.",
    rootedness:
      "Melbourne City Baths has a long public bathing history, with the present building dating to 1904 in the city's visitor account. The contemporary facility serves swimmers and fitness users. This guide is about ordinary pool use inside that civic setting, not a spa retreat, historical bathing reenactment or a promise that the whole interior survives unchanged from its opening.",
    shift:
      "A heritage address becomes part of the body's day instead of another stop on an architecture list.",
    humanReturn:
      "Remember how the city felt after a simple swim, rather than treating recovery as something that needs a special itinerary.",
    responsibility:
      "Check the current pool timetable, casual-entry conditions, lane availability and any maintenance notice before travelling. Fitness-centre opening does not guarantee that every pool lane or amenity is available. Ask about changing facilities, step-free access, assistance and child supervision. Swim only within your ability, follow lifeguard instructions and share lanes according to the posted rules. Lessons, sauna or other facilities are not automatically included. Do not photograph swimmers or changing areas. This is not medical advice or a promise of therapeutic benefit.",
    evidence:
      "The City of Melbourne's visitor listing identifies the Swanston Street facility, its indoor pool and heritage context. The municipal swimming page is the operator's source for practical arrangements, though automated retrieval was restricted during this check. EA has not swum here, inspected water quality or verified today's lane schedule. Confirm the operator's current details before paying or travelling.",
    duration:
      "Allow 60 to 90 minutes including changing and a comfortable swim",
    participation: "Casual public indoor swimming under the facility's rules",
    access:
      "Use the City Baths operator information for 420 Swanston Street and confirm casual admission for your intended time. Arrange any lesson or assisted access separately. No membership entitlement, reserved lane, spa package or EA booking is implied by this guide.",
    guideReview: review("public_programme", [
      [
        "City of Melbourne: swimming at City Baths",
        "https://www.melbourne.vic.gov.au/swim-melbourne-city-baths",
        "Operator source for current casual swimming arrangements. Check directly before travel.",
      ],
      [
        "What's On Melbourne: Melbourne City Baths",
        "https://whatson.melbourne.vic.gov.au/things-to-do/melbourne-city-baths",
        "Municipal visitor record, pool, address and building history.",
      ],
      [
        "What's On Melbourne: the city's pools",
        "https://whatson.melbourne.vic.gov.au/article/melbournes-best-pools",
        "Additional municipal confirmation of casual swimming at City Baths.",
      ],
    ]),
  },
  {
    id: "london-wiltons-performance",
    slug: "let-a-live-show-fill-wiltons-music-hall",
    title: "Let a live show fill Wilton's Music Hall",
    field: "gather",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London",
    summary:
      "Go to Wilton's for a performance you actually want to hear and let the historic hall become a room full of people again.",
    kernel:
      "Read the programme before choosing the date. A song evening, small ensemble or theatrical performance will give the same room a different centre of gravity. Arrive with time to find your seat, look around once, then put the building second to the people performing in it. Notice the point when the audience begins to share attention. An old music hall is most convincing when it is doing its present job, not being treated as an empty set.",
    rootedness:
      "Wilton's in Graces Alley is a working East London performance venue with a varied public programme. Its surviving hall carries a long entertainment history, but the current show is not automatically Victorian music hall. Choosing by the actual artist and format respects that continuing life. The building's age is context for an evening, not a substitute for deciding whether the programme interests you.",
    shift:
      "The room's history becomes something you listen within, rather than something you finish reading before leaving.",
    humanReturn:
      "Recommend the performance or artist that stayed with you, not only the photogenic building.",
    responsibility:
      "Book the specific performance and check age guidance, language, duration, seating and any content notices. The ground floor and auditorium have wheelchair access, while the balcony and first floor involve stairs and changing levels. Arrange access seating with the box office. Large bags may prevent admission because there is no cloakroom. Under-16s need an accompanying adult under the venue's rules. Photography, recording and late admission depend on the performance conditions. A bar visit or history tour is not a concert ticket.",
    evidence:
      "Wilton's current programme lists bookable performances across several formats. Its separate accessibility page describes the auditorium, stairs and booking support. EA has not attended these productions, assessed acoustics from individual seats or confirmed remaining tickets. Venue history does not constitute an independent review of a show.",
    duration:
      "The selected performance's running time, plus arrival and interval time",
    participation: "Joining the audience at a public ticketed performance",
    access:
      "Choose a suitable dated event through Wilton's official programme and book directly. Confirm the Graces Alley entrance and any access arrangements in advance. Meals, drinks, transport and other London visits are separate. This is not an EA-hosted evening, a guaranteed historic repertoire or a provider partnership. No EA booking is provided.",
    guideReview: review("public_programme", [
      [
        "Wilton's Music Hall: current programme",
        "https://wiltons.org.uk/whats-on/",
        "Dated shows, format and booking status.",
      ],
      [
        "Wilton's Music Hall: accessibility",
        "https://wiltons.org.uk/visit-us/accessibility/",
        "Ground-floor access, balcony stairs, children and bag rules.",
      ],
    ]),
  },
  {
    id: "hamburg-elbphilharmonie-concert",
    slug: "hear-hamburg-from-a-seat-in-the-elbphilharmonie",
    title: "Hear Hamburg from a seat in the Elbphilharmonie",
    field: "gather",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "hamburg",
    place: "Hamburg",
    summary:
      "Move beyond the familiar waterfront silhouette and choose a concert that gives the building a reason to gather people.",
    kernel:
      "Search the programme for a performance in the Elbphilharmonie itself, then choose by the music and room rather than the building alone. Arrive early enough to find your seat without turning the approach into a sprint. Once the performance starts, follow a phrase as it passes between players or changes in intensity. A photograph can show the hall's shape. Sitting through a concert lets you notice what that shape is being asked to hold.",
    rootedness:
      "The Elbphilharmonie sits within Hamburg's working-waterfront landscape and is now part of the city's public musical life. Its programme includes different rooms and artists, while the wider organisation also presents concerts at the separate Laeiszhalle. Those distinctions matter. The intended experience is a real audience evening in the Elbphilharmonie, not simply obtaining access to its public viewing level.",
    shift:
      "An architectural landmark becomes a shared period of listening rather than an object collected from outside.",
    humanReturn:
      "Leave with a piece, performer or sound you want to hear again after the journey.",
    responsibility:
      "A Plaza ticket does not admit you to a concert. Verify the room, venue, date and seating on the actual performance ticket. Check age guidance, accessibility, bag rules, photography restrictions and late-entry conditions. Use the current arrival page: temporary transport and bridge works can change the approach. The October 2026 U3 interruption is dated, not a permanent route description. Do not promise a particular acoustic experience from every seat or assume a sold-out event has door tickets. Arrange assistance through the venue before booking.",
    evidence:
      "The official programme distinguishes performance venues and rooms. The visitor page explains arrival, opening before concerts and current transport notices. EA has not attended the selected concerts, assessed a seat or confirmed availability. Published artist descriptions are not independent EA reviews.",
    duration:
      "The chosen concert's running time, with at least the venue's recommended arrival margin",
    participation: "Listening as part of a public concert audience",
    access:
      "Book a dated Elbphilharmonie performance through the official programme and check the venue name carefully. Plan transport separately and leave a generous margin after any harbour ferry ride. There is no shared reservation, guaranteed connection or EA package linking the two experiences.",
    guideReview: review("public_programme", [
      [
        "Elbphilharmonie: what's on",
        "https://www.elbphilharmonie.de/en/whats-on/",
        "Dated concerts and distinctions between halls and venues.",
      ],
      [
        "Elbphilharmonie: plan your visit",
        "https://www.elbphilharmonie.de/en/plan-your-visit",
        "Arrival, concert access and dated transport notices.",
      ],
    ]),
  },
  {
    id: "oslo-frank-znort-sunday",
    slug: "give-an-oslo-sunday-to-the-frank-znort-quartet",
    title: "Give an Oslo Sunday to the Frank Znort Quartet",
    field: "gather",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    place: "Oslo",
    summary:
      "Join a longstanding Sunday music gathering at Blå and hear a much larger ensemble than its modest name suggests.",
    kernel:
      "Check the next Frank Znort listing and choose the part of the day that suits you. Arrive for the music, find a place that does not block movement and let the ensemble introduce itself through a song. Listen for how a familiar tune changes when more instruments and voices join it. You can stay for a set without committing to the late club programme. The pleasure is in entering a recurring roomful of attention, not in proving how late you can remain.",
    rootedness:
      "Blå's own programme describes Frank Znort's longstanding Sunday residency beside the Akerselva. The name 'Quartet' understates the scale of the ensemble. The recurring gathering gives a visitor a specific Oslo evening to join, but it does not make the audience a cultural exhibit or guarantee that every Sunday has identical musicians, timing or atmosphere.",
    shift:
      "Sunday stops feeling like the time left over after a weekend and becomes a date with its own rhythm.",
    humanReturn:
      "Keep one rearranged song in mind and compare it with the version you thought you knew.",
    responsibility:
      "Use the current dated listing and confirm the actual music start with Blå. The 25 October page has inconsistent summary and detailed end times, so neither is presented here as a guaranteed schedule. Outdoor and indoor arrangements change with season and weather. Ask about age restrictions, identification, admission charge, accessible entry, seating and hearing protection before setting out. Do not assume all ages are admitted or that free entry means unlimited capacity. Alcohol is optional. A late club session is a separate choice, not a required part of the experience.",
    evidence:
      "The venue's 25 October 2026 event page confirms a forthcoming Frank Znort Sunday and describes the residency. Blå's practical-information page explains that event times need to be read individually and supplies the address. EA has not attended, verified a future lineup or resolved the conflicting time fields with staff.",
    duration:
      "Choose one confirmed set, allowing extra time for arrival and queues",
    participation:
      "Joining a public live-music audience under the venue's admission rules",
    access:
      "Open the official dated event and confirm the next suitable Sunday at Brenneriveien 9c. Arrange the return journey independently, especially if staying late. The guide does not reserve a seat, include drinks, guarantee an outdoor performance or imply a relationship between EA and the band or venue.",
    guideReview: review("public_programme", [
      [
        "Blå: Frank Znort, 25 October 2026",
        "https://www.blaaoslo.no/events/frank-znort-quartet/0juVt7PWPx",
        "Forthcoming Sunday and residency context. Conflicting time fields require direct confirmation.",
      ],
      [
        "Blå: practical information",
        "https://www.blaaoslo.no/praktisk-info",
        "Venue address, seasonal arrangements and event-specific timing.",
      ],
    ]),
  },
];

export const guideBatch52: PublicExperience[] = drafts.map((guide) => ({
  ...guide,
  status: "public_guide",
  demo: false,
  ...guideImage(guide.id),
}));
