import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "tokyo-narisawa-satoyama",
    slug: "follow-the-landscape-through-a-menu-in-tokyo",
    title: "Follow the landscape through a menu in Tokyo",
    field: "taste",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Narisawa in Minami Aoyama",
    summary:
      "Narisawa turns the relationship between landscape and food into a seasonal meal. Follow a Japanese ingredient beyond its appearance on the plate.",
    kernel:
      "Ask where one ingredient comes from and why the kitchen chose to serve it this way. Then attend to what you can actually taste: a woodland aroma, a marine note or the contrast between a crisp surface and a soft centre. The team’s explanation can open a door, but it need not dictate your response. Make room for surprise without trying to turn every course into a photograph. This is a meal to give time to, rather than another stop between appointments.",
    rootedness:
      "Chef Yoshihiro Narisawa frames his cuisine through satoyama, the relationship between people and the landscapes that sustain them. His restaurant offers an individual contemporary interpretation of that idea in Tokyo. It is not a visit to a rural community or a comprehensive account of Japanese food. The connection worth following is the journey from a named ingredient and place to a kitchen decision. Environmental language on the restaurant’s site expresses its philosophy, not an independent EA certification.",
    shift: "Look for a landscape in the choices behind a dish.",
    humanReturn:
      "A more specific question to ask about food: where does this ingredient begin, and what has the cook chosen to preserve?",
    responsibility:
      "The English reservation policy currently specifies guests aged 18 and over and parties of at least two. The Japanese wording differs on age, so confirm any borderline case directly. Disclose allergies and dietary needs before reserving. Check the full menu cost and cancellation charges. Alcohol is optional. Photographed dishes illustrate the restaurant’s work and are not a current menu promise.",
    evidence:
      "Official pages document the culinary philosophy, seasonal menu and reservation process. EA has not dined here or independently assessed sourcing claims. Availability and dietary adaptations require the restaurant’s confirmation.",
    duration:
      "Allow the full lunch or dinner service and confirm the expected duration",
    participation: "Seasonal chef’s menu",
    access:
      "Book for yourself through the OMAKASE link on Narisawa’s official reservation page. Check the calendar for Minami Aoyama, arrival time and cancellation conditions. No EA reservation or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.narisawa-yoshihiro-en.com/reservation",
      sources: [
        {
          title: "Narisawa: reservations",
          url: "https://www.narisawa-yoshihiro-en.com/reservation",
          note: "Booking channel, party size, age policy, hours and cancellation terms.",
        },
        {
          title: "Narisawa: philosophy",
          url: "https://www.narisawa-yoshihiro.com/philosophy",
          note: "Chef’s explanation of satoyama as a culinary reference.",
        },
        {
          title: "Narisawa: menu",
          url: "https://www.narisawa-yoshihiro.com/menu",
          note: "Seasonal menu and advance dietary arrangements.",
        },
      ],
    },
  },
  {
    id: "girona-celler-can-roca",
    slug: "taste-the-roca-brothers-girona",
    title: "Taste the Roca brothers’ Girona",
    field: "taste",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "girona",
    place: "Girona, El Celler de Can Roca",
    summary:
      "A long meal at El Celler de Can Roca connects a family’s Girona roots with contemporary cooking. Follow the sequence, not just the reputation.",
    kernel:
      "Give the meal an unhurried place in the day. When a course catches your attention, ask which memory, ingredient or technical idea led to it. Notice how the kitchen moves between savoury and sweet, and how the dining-room team helps the sequence make sense. You do not need a wine pairing to participate in that conversation. Afterwards, keep one flavour in mind as you explore Girona. A precise memory will last longer than trying to record every plate.",
    rootedness:
      "The Roca brothers’ work grew out of a family restaurant in Girona and developed into distinct contributions from cooking, wine and pastry. El Celler is one expression of that shared background. The family now operates several separate venues, so the name alone is not enough when reserving. This guide concerns the restaurant in Girona itself, not Esperit Roca, a hotel stay or a visit to the distillery. Its contemporary meal complements rather than replaces the city’s everyday food culture.",
    shift:
      "Let a restaurant’s local roots become questions, not a reason to suspend curiosity.",
    humanReturn:
      "A sense of how memory, technique and hospitality can work together over a whole meal.",
    responsibility:
      "The restaurant gives roughly three and a half hours for the Festival menu. Confirm dietary adaptations and possible cross-contact in advance. Check access needs, children’s admission and service language directly. The reservation window extends far ahead, and joining the waiting list does not secure a table. Read the guarantee and cancellation conditions before committing to travel.",
    evidence:
      "The restaurant’s FAQ, reservation instructions and account of its origins support this guide. EA has not eaten here or rated the service. Specific dishes, pairings and availability can change.",
    duration: "Approximately 3.5 hours for the Festival menu",
    participation: "Seated tasting menu",
    access:
      "Use cellercanroca.com and select El Celler de Can Roca in Girona. Reserve for your actual party and keep the confirmation. Other Roca venues have separate reservations. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://cellercanroca.com/en/reservation-information/",
      sources: [
        {
          title: "El Celler: reservations",
          url: "https://cellercanroca.com/en/reservation-information/",
          note: "Direct booking, release window and waiting-list process.",
        },
        {
          title: "El Celler: FAQ",
          url: "https://cellercanroca.com/en/faqs/",
          note: "Meal duration, dietary requests, party size and closure dates.",
        },
        {
          title: "El Celler: origins",
          url: "https://cellercanroca.com/en/the-roca-brothers/origenes/",
          note: "Family restaurant and Girona context.",
        },
      ],
    },
  },
  {
    id: "miami-superblue-light",
    slug: "let-light-change-the-room-in-miami",
    title: "Let light change the room in Miami",
    field: "witness",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "miami",
    place: "Miami, Superblue",
    summary:
      "At Superblue, light, reflection and movement become material for artists. Give one installation enough time to change how you read the room.",
    kernel:
      "Begin with a work that asks you to stand still. Watch a full sequence before deciding where to move. In another room, compare what happens when you change your position or participate in the way staff explain. Which part comes from the artwork, which from the space and which from the people around you? Put your phone away for one encounter. Reading the artist’s name afterwards can turn a spectacular impression into something you can follow beyond the visit.",
    rootedness:
      "Superblue brings a changing group of large-scale artworks into Miami’s Allapattah neighbourhood. Its current programme includes Studio Lemercier’s Lightfall alongside artists working with reflection, biometric response and digital environments. These are authored works with different intentions, not interchangeable backdrops. The location offers a contemporary cultural entry into the city, but it should not be presented as a survey of Miami artists or as a tradition specific to the neighbourhood.",
    shift: "Distinguish an artist’s idea from the spectacle it creates.",
    humanReturn:
      "A more attentive way to enter immersive art, and an artist whose work you may want to seek out again.",
    responsibility:
      "Expect dark rooms, changing light and sound. Consult the visitor guide about sensory and mobility needs before buying. Follow installation-specific instructions and supervise children. Massless Clouds is a separate paid addition. Check whether any other optional experience is included in your chosen ticket. The documented programme can change between visits.",
    evidence:
      "The venue lists the artists currently on view, ticket distinctions and visitor guidance. EA has not attended or tested sensory suitability. The photograph documents Lightfall and does not represent every room.",
    duration:
      "Allow approximately 90 minutes, with extra time for optional experiences",
    participation: "Self-directed contemporary-art visit",
    access:
      "Choose a dated Superblue Miami ticket through the official site for 1101 NW 23 Street. Check arrival instructions, inclusions and any tour availability. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.superblue.com/miami",
      sources: [
        {
          title: "Superblue: Miami",
          url: "https://www.superblue.com/miami",
          note: "Current artists, Lightfall and admission distinctions.",
        },
        {
          title: "Superblue: visitor guide",
          url: "https://www.superblue.com/miami/visitor-guide",
          note: "Access, preparation and optional guiding.",
        },
        {
          title: "Superblue: FAQ",
          url: "https://www.superblue.com/faq",
          note: "Visit length and ticket conditions.",
        },
      ],
    },
  },
  {
    id: "bordeaux-bassins-matisse",
    slug: "watch-matisse-unfold-across-water-in-bordeaux",
    title: "Watch Matisse unfold across water in Bordeaux",
    field: "witness",
    country: "France",
    countrySlug: "france",
    regionSlug: "bordeaux",
    place: "Bordeaux, Bassins des Lumières",
    summary:
      "Colour crosses concrete walls and doubles in dark water at Bassins des Lumières. The Matisse programme gives Bordeaux’s former submarine base another scale of looking.",
    kernel:
      "Find a safe place beside a basin and watch the projected colour meet its reflection. Then move to another viewpoint and notice what the architecture interrupts. A cut-out shape can become enormous without losing its simplicity. Stay for a complete sequence before deciding what to photograph. Afterwards, look up one of the original works that caught your eye. The projection is an interpretation with music and editing, not a substitute for the scale and surface of a painting.",
    rootedness:
      "The experience takes place inside Bordeaux’s repurposed submarine base, where the water and concrete remain integral to the space. The current Matisse programme follows changes in colour, travel references and cut-out forms. The local connection is the transformation of an industrial and wartime structure into a public cultural venue. Matisse himself is not being claimed as a Bordeaux artist. Other programmes use the same building on different days, which makes the exact ticket important.",
    shift: "See how a building and a reflection change an image.",
    humanReturn:
      "A memorable encounter with colour and a specific artwork to explore further.",
    responsibility:
      "Book a Matisse date, not simply any available Bassins ticket. The current timetable alternates programmes. Allow for dark circulation areas, moving projections and amplified sound. Ask about sensory needs in advance and keep children beside you near the basins. The site reports step-free access. Bring a layer in winter. French narration has English subtitles according to the programme page.",
    evidence:
      "The official programme identifies Matisse, its accompanying creations and current dates. EA has not visited. This is a projected adaptation of artworks, not an exhibition of original paintings. Review is scheduled soon because the programme is temporary.",
    duration: "Approximately 1 to 1.5 hours",
    participation: "Ticketed audiovisual exhibition",
    access:
      "Reserve Matisse, La symphonie des couleurs through the official programme calendar. Verify the date, entry time and last admission for Impasse Brown de Colstoun. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2026-12-01",
      accessUrl:
        "https://www.bassins-lumieres.com/fr/programmation/matisse-la-symphonie-des-couleurs",
      sources: [
        {
          title: "Bassins: Matisse",
          url: "https://www.bassins-lumieres.com/fr/programmation/matisse-la-symphonie-des-couleurs",
          note: "Current programme, alternating schedule, duration, language and access.",
        },
        {
          title: "Bassins: history",
          url: "https://www.bassins-lumieres.com/fr/decouvrir/notre-histoire",
          note: "Building history and cultural reuse.",
        },
      ],
    },
  },
  {
    id: "weil-vitra-architecture",
    slug: "compare-buildings-on-foot-at-the-vitra-campus",
    title: "Compare buildings on foot at the Vitra Campus",
    field: "learn",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "weil-am-rhein",
    place: "Weil am Rhein, Vitra Campus",
    summary:
      "A guided walk at Vitra places very different architectural ideas within one campus. Compare how a building meets your body, rather than collecting famous names.",
    kernel:
      "Choose a detail to follow between buildings: a threshold, a window or the route from outside to inside. Ask why it takes that form and what the building was meant to do. The contrast between a fire station and a conference pavilion becomes more interesting when you think about their different users. Let the guide explain where you may enter and where you are looking from a public route. After the tour, revisit one freely accessible space and see what you notice without commentary.",
    rootedness:
      "Vitra’s furniture-production campus in Weil am Rhein brings working industry, exhibitions and architecture together. The museum’s public tour includes discussion of buildings by Zaha Hadid, Tadao Ando and Herzog & de Meuron, among others. It is in Germany, close to Basel, rather than a Swiss attraction. The useful experience is comparison within a real campus, not an architectural ranking. Factory production access is a different offer and should not be inferred from an architecture ticket.",
    shift:
      "Judge a building through movement and use as well as its silhouette.",
    humanReturn:
      "A practical vocabulary for noticing architecture in the next city you visit.",
    responsibility:
      "The public architecture tour lasts two hours and includes outdoor movement. Choose the language when booking and dress for the weather. Confirm the route’s mobility suitability, children’s participation and any temporary closures. Only authorised museum guides may lead campus tours. Museum exhibitions, production visits and private tours can have separate tickets.",
    evidence:
      "The Vitra Design Museum publishes the public two-hour tours in German and English, with selected French dates. EA has not taken the route. The actual itinerary and interior access remain subject to the museum.",
    duration: "2 hours",
    participation: "Guided architecture walk",
    access:
      "Book an Architecture Tour through the Vitra Design Museum and use the meeting point on your confirmation, currently VitraHaus. Plan the cross-border journey separately if arriving from Basel. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.design-museum.de/en/education/guided-tours.html",
      sources: [
        {
          title: "Vitra Design Museum: guided tours",
          url: "https://www.design-museum.de/en/education/guided-tours.html",
          note: "Public architecture tour, language, duration, meeting point and scope.",
        },
        {
          title: "Vitra: architecture tour reservations",
          url: "https://design-museum.reservix.de/tickets/kalender/reihe/architecture-tours-2h-de-en-fr/514781",
          note: "Public ticket calendar linked by the museum, with language-specific departures.",
        },
      ],
    },
  },
  {
    id: "munich-bmw-plant",
    slug: "follow-a-car-through-the-factory-in-munich",
    title: "Follow a car through the factory in Munich",
    field: "learn",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "munich",
    place: "Munich, BMW Group Plant",
    summary:
      "Go beyond the finished car on BMW’s public Munich plant tour. Watch how people, machinery and timing turn a design into a manufactured object.",
    kernel:
      "Follow one production step closely instead of trying to memorise the whole factory. What arrives at the station, what changes and what must be right before it moves on? Ask the guide where a person’s judgement matters and where a machine repeats a precise task. Keep that distinction in mind when you next see a finished car. The interesting part is not a promise of futuristic machinery at every turn, but the coordination needed to make an everyday object at scale.",
    rootedness:
      "Munich’s BMW plant offers a public route into a major part of the city’s industrial identity. It remains a working production site, so the experience differs from the nearby museum and BMW Welt displays. The company explains its own processes through its guides. That provides access to production knowledge but is not independent evidence for every corporate claim about quality or sustainability. Come with questions about how things are made, rather than treating the tour as a product recommendation.",
    shift: "Notice the system of decisions hidden inside a familiar object.",
    humanReturn:
      "A clearer understanding of what industrial production asks of people and machines.",
    responsibility:
      "The approximately three-kilometre route requires suitable footwear. The published minimum age is six with an adult and fourteen unaccompanied. Guests must understand the tour language for safety. Filming and photography are prohibited inside the plant. Accessibility can change for operational reasons and wheelchair capacity is limited, so confirm before booking. No tours run on weekends, Bavarian public holidays or production closure days.",
    evidence:
      "BMW Welt publishes the Munich plant tour separately from its museum and building tours, including duration and restrictions. EA has not attended. Production stages and vehicle models seen are not guaranteed.",
    duration: "Approximately 2 hours",
    participation: "Guided working-factory visit",
    access:
      "Reserve the BMW Group Plant Munich open tour in English or German through BMW Welt. Follow the confirmation for ticket collection and the plant-tour meeting area. Museum admission alone does not provide this tour. No EA partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.bmw-welt.com/en/ausstellungen/fuehrungen.html",
      sources: [
        {
          title: "BMW Welt: guided tours",
          url: "https://www.bmw-welt.com/en/ausstellungen/fuehrungen.html",
          note: "Munich plant product, booking route, duration, language and six safety essentials.",
        },
        {
          title: "BMW Group: plant-tour FAQ",
          url: "https://www.visit-bmwgroup.com/en/faq/",
          note: "Munich bookings are directed to BMW Welt, with site-specific conditions.",
        },
      ],
    },
  },
  {
    id: "singapore-tuft-club",
    slug: "turn-a-drawing-into-a-rug-in-singapore",
    title: "Turn a drawing into a rug in Singapore",
    field: "make",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Tuft Club",
    summary:
      "A bold shape, a few colours and a tufting gun are enough to begin. At Tuft Club, turn a simple drawing into a small rug with hands-on guidance.",
    kernel:
      "Bring an uncomplicated idea or choose one with the team. Watch how the yarn enters the backing, then practise the rhythm before attempting a tight curve. Compare your first line with your next one. The machine makes the process quick enough to feel a change in confidence during the session, but it still rewards patience. Leave intricate lettering for another project. At this scale, a clear shape and a well-chosen colour combination give you more room to learn.",
    rootedness:
      "Tuft Club represents a contemporary side of Singapore’s creative life: a shared studio where visitors can try a material process without owning the equipment. The local value is participation in a present-day making space, not a claim that rug tufting is an ancestral Singaporean craft. Its small-format workshop fits into an urban stay and offers a useful counterpoint to looking at finished design in shops or galleries.",
    shift:
      "Feel the difference between choosing a design and making a line hold its shape.",
    humanReturn:
      "A small object with a process you understand, rather than a souvenir whose making remains invisible.",
    responsibility:
      "This guide covers the 30 by 30 centimetre, two-hour workshop. Larger formats are separate products. The stated age is sixteen and above, or twelve with adult supervision. Follow the instructor’s handling rules. The rug needs finishing after the session, with delivery stated within four weeks. International delivery arrangements and costs need direct confirmation before booking. Do not expect to carry the finished rug out that day.",
    evidence:
      "The current product page documents the format, materials, age rule and finishing delay. EA has not taken the workshop or verified delivery outside Singapore. Designs and session availability vary.",
    duration: "Approximately 2 hours, followed by off-site finishing",
    participation: "Guided beginner rug tufting",
    access:
      "Book the 30 by 30 centimetre workshop directly with Tuft Club. Confirm the studio address, session language, mobility needs and delivery destination. Contact the studio first if two people want to share a rug. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://tuftclub.com/products/rug-tufting-workshop-25x25cm",
      sources: [
        {
          title: "Tuft Club: small rug workshop",
          url: "https://tuftclub.com/products/rug-tufting-workshop-25x25cm",
          note: "Current dimensions, duration, instruction, age and finishing timeline.",
        },
        {
          title: "Tuft Club: FAQ",
          url: "https://tuftclub.com/pages/faq",
          note: "Studio arrangements and preparation for the workshop.",
        },
      ],
    },
  },
  {
    id: "copenhagen-creative-space-paint",
    slug: "paint-a-piece-for-everyday-use-in-copenhagen",
    title: "Paint a piece for everyday use in Copenhagen",
    field: "make",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "copenhagen",
    place: "Copenhagen, Creative Space Indre By",
    summary:
      "Choose a ceramic cup or bowl and give its surface your own pattern. A painting session at Creative Space makes room for an unhurried, practical kind of creativity.",
    kernel:
      "Start with the object’s shape. A stripe behaves differently around a handle than across the base of a bowl. Test a colour, ask how it will change after firing and keep the first design manageable. You can borrow an idea from something you noticed in Copenhagen without needing to make a miniature landmark. Spend more time on a few deliberate marks than on covering every surface. The object should still feel good to use when the holiday is over.",
    rootedness:
      "The Indre By studio is a contemporary creative café at Vendersgade 5. It offers a social, accessible way into decorating an everyday object in a city closely associated with design. This is painting a prepared ceramic form, not throwing a pot or an apprenticeship in Danish ceramics. The distinction matters because it lets beginners start with colour and composition while the studio handles glazing and firing afterwards.",
    shift: "Look at an ordinary cup as a set of choices you can make yourself.",
    humanReturn:
      "A usable reminder of time spent making, and more attention to the objects already in your kitchen.",
    responsibility:
      "Allow around two hours at the table. The location page states collection after about seven days, but confirm the actual date before choosing a piece. This will not suit every short stay without delivery. Shipping is destination-dependent and may take substantially longer. Ask about fees, children’s needs, access and assistance in English. Clay sculpting is a different activity with a different firing timeline.",
    evidence:
      "The studio’s location page and FAQ describe painting, firing and collection. EA has not attended or tested the finished ceramics. The studio photograph illustrates the painting format and does not independently verify the Indre By room.",
    duration:
      "Approximately 2 hours, with later collection or arranged delivery",
    participation: "Self-directed ceramic painting with studio assistance",
    access:
      "Reserve a table at Creative Space Indre By, Vendersgade 5. Confirm the chosen ceramic’s price, what is included and how you will receive it after firing. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://creative-space.dk/en/pages/indre-by",
      sources: [
        {
          title: "Creative Space: Indre By",
          url: "https://creative-space.dk/en/pages/indre-by",
          note: "Specific studio address, painting format and collection timing.",
        },
        {
          title: "Creative Space: FAQ",
          url: "https://creative-space.dk/en/pages/faq",
          note: "Practical preparation, firing and delivery.",
        },
        {
          title: "Creative Space: English information",
          url: "https://creative-space.dk/en/pages/english",
          note: "Visitor explanation and shipping arrangements.",
        },
      ],
    },
  },
  {
    id: "uji-nintendo-big-controller",
    slug: "play-a-familiar-game-with-a-giant-controller-in-uji",
    title: "Play a familiar game with a giant controller in Uji",
    field: "play",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "uji",
    place: "Uji, Nintendo Museum",
    summary:
      "A controller becomes a two-person problem at the Nintendo Museum. Coordinate movement and buttons, then look again at the everyday design of play.",
    kernel:
      "Agree who will handle which part of the giant controller, then try a game together. A movement that once fitted under a thumb now needs conversation. Let a missed jump become part of the fun. Afterwards, compare the oversized version with the hardware displayed elsewhere in the museum. What did its designers make easy to reach, and what did they ask the player to learn? You can enjoy the experiment even if you do not recognise every console.",
    rootedness:
      "The museum in Uji connects Nintendo’s product history with new interactive experiences. Its location belongs to the Kyoto region but is not central Kyoto, so give the journey its own space in your plan. The visit is about changing forms of entertainment as much as nostalgia. Upstairs displays and the interactive floor offer different ways of exploring that history. Hanafuda-making workshops are separately booked activities, not an automatic part of admission.",
    shift:
      "Feel how the scale of a familiar object changes the way people cooperate.",
    humanReturn:
      "A shared game memory and a sharper eye for the design of an interface.",
    responsibility:
      "Admission is organised through Nintendo’s ticket system, including advance drawings and any remaining-ticket sales. Do not travel expecting a door ticket. Each visitor receives ten digital coins for interactive exhibits, which is not enough to try everything. Check current coin requirements, age-related guidance and accessibility for each activity. Follow photography restrictions, especially in display areas. Bring the identification required by your booking.",
    evidence:
      "Nintendo’s exhibition and visitor pages document Big Controller, the coin system and admission process. EA has not visited. A museum ticket does not guarantee immediate access to every interactive activity or an additional workshop.",
    duration: "Allow a half-day including travel, an EA planning suggestion",
    participation: "Interactive museum visit",
    access:
      "Use the official Nintendo Museum ticket process and check availability before making Uji plans. Reserve through your own Nintendo Account and follow the confirmation’s arrival instructions. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://museum.nintendo.com/en/guide/index.html",
      sources: [
        {
          title: "Nintendo Museum: tickets and visit",
          url: "https://museum.nintendo.com/en/guide/index.html",
          note: "Admission system and visitor preparation.",
        },
        {
          title: "Nintendo Museum: exhibits",
          url: "https://museum.nintendo.com/en/exhibition/index.html",
          note: "Big Controller, coins and separately charged workshops.",
        },
        {
          title: "Nintendo Museum: arrival process",
          url: "https://museum.nintendo.com/en/guide/visit-flow/index.html",
          note: "Reservation-to-entry requirements.",
        },
      ],
    },
  },
  {
    id: "hamburg-miniatur-airport",
    slug: "watch-a-miniature-airport-come-to-life-in-hamburg",
    title: "Watch a miniature airport come to life in Hamburg",
    field: "play",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "hamburg",
    place: "Hamburg, Miniatur Wunderland",
    summary:
      "Aircraft taxi, lights change and tiny stories unfold at Miniatur Wunderland. Hamburg’s model world rewards the person who stops looking for the next big thing.",
    kernel:
      "Choose a small part of the airport and stay with it through a sequence. Watch how an aircraft moves and what happens around it. Then look away from the obvious action towards a worker, vehicle or tiny scene at the edge. Elsewhere, use only the clearly marked visitor controls and see what they set in motion. Try comparing discoveries with a companion before pointing everything out. Half the pleasure comes from noticing a detail yourself.",
    rootedness:
      "Miniatur Wunderland occupies former warehouse space in Hamburg’s Speicherstadt. The model airport and landscapes are constructed worlds, not photographs of places or transport demonstrations at an operating airport. They make precision, humour and collective making visible at a scale you can inspect. The Hamburg sections also offer a playful conversation with the real city outside, though the model is not a substitute for navigating the neighbourhood on foot.",
    shift: "Give a small detail enough attention to become an event.",
    humanReturn:
      "A renewed appetite for looking closely, and a shared collection of things other visitors might have missed.",
    responsibility:
      "Book timed admission ahead when possible. Walk-in entry can involve substantial waits. The venue suggests about three hours for the layout, with more time for a separate guided tour. Check accessibility arrangements for crowded periods and children’s sightlines. Do not reach into the models. A behind-the-scenes tour is optional and requires its own availability check. The room lighting changes as part of the display.",
    evidence:
      "The official site documents the layouts, opening calendar and visitor arrangements. EA has not visited or tested every interactive feature. The photograph shows the model airport, not a real aircraft movement.",
    duration: "Approximately 3 hours, longer with an optional guided tour",
    participation: "Self-directed model-world visit",
    access:
      "Reserve Miniatur Wunderland admission through the official website and check the date’s opening hours. Keep the ticket’s entry time clear of other Hamburg plans. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.miniatur-wunderland.com/visiting/extras/faq",
      sources: [
        {
          title: "Miniatur Wunderland: visitor FAQ",
          url: "https://www.miniatur-wunderland.com/visiting/extras/faq",
          note: "Suggested visit length, tickets and access questions.",
        },
        {
          title: "Miniatur Wunderland: opening hours",
          url: "https://www.miniatur-wunderland.com/visiting/plan-your-visit/opening-hours",
          note: "Date-specific opening calendar.",
        },
        {
          title: "Miniatur Wunderland: official site",
          url: "https://www.miniatur-wunderland.com/",
          note: "Current layouts and photographic documentation.",
        },
      ],
    },
  },
  {
    id: "london-kew-treetops",
    slug: "meet-the-trees-at-canopy-height-in-kew",
    title: "Meet the trees at canopy height in Kew",
    field: "nature",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    place: "London, Kew Gardens Treetop Walkway",
    summary:
      "At Kew, a raised walkway brings the canopy close enough to study. Trade a distant view of a tree for the branching, living structure above your usual line of sight.",
    kernel:
      "Pause beside one tree and follow a branch outwards from its larger limbs. Notice where the light reaches, where leaves overlap and where a bird could disappear from view. Compare that with the same tree from ground level afterwards. The change of height makes an ordinary subject unfamiliar again. Let the season determine what interests you, whether that is a full canopy, autumn colour or the branching pattern left after leaves fall.",
    rootedness:
      "The Treetop Walkway forms part of Kew’s managed botanical landscape in southwest London. It passes through a canopy of trees including sweet chestnut, beech, horse chestnut and oaks. This is not a wilderness excursion. It is a designed opportunity to observe trees from a different position within a garden devoted to plants. The path’s structure and the living branches together make the experience accessible to visitors who would never climb a tree.",
    shift: "Look at the canopy as a habitat rather than a green ceiling.",
    humanReturn:
      "A way of observing trees that works just as well in a neighbourhood park.",
    responsibility:
      "The walkway is eighteen metres high, with 118 steps. Check current lift availability and access arrangements directly if stairs are unsuitable. It can close for weather or maintenance and is designed to flex slightly in wind. Leave buggies at ground level and supervise children. Its opening hours are shorter than the gardens’ hours, especially in winter. Wildlife sightings and seasonal colour are not guaranteed.",
    evidence:
      "Kew documents the height, access guidance, tree species and closure conditions. EA has not inspected the walkway. The archival photograph shows the walkway and does not establish present foliage or weather.",
    duration:
      "Allow 30 to 45 minutes at the walkway within a longer garden visit, an EA suggestion",
    participation: "Self-directed elevated garden walk",
    access:
      "Arrange Kew Gardens admission and check the Treetop Walkway’s opening and visitor notices on the day. Plan the route within the gardens before leaving it until the final hour. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.kew.org/kew-gardens/whats-in-the-gardens/treetop-walkway",
      sources: [
        {
          title: "Kew: Treetop Walkway",
          url: "https://www.kew.org/kew-gardens/whats-in-the-gardens/treetop-walkway",
          note: "Height, stairs, tree species and access precautions.",
        },
        {
          title: "Kew: opening times",
          url: "https://www.kew.org/kew-gardens/visit-kew-gardens/opening-and-closing-times",
          note: "Separate attraction hours and seasonal changes.",
        },
      ],
    },
  },
  {
    id: "paarl-babylonstoren-garden",
    slug: "follow-a-gardener-through-an-edible-landscape-near-paarl",
    title: "Follow a gardener through an edible landscape near Paarl",
    field: "nature",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "paarl",
    place: "Near Paarl, Babylonstoren",
    summary:
      "Walk through Babylonstoren’s productive garden with someone who tends it. Seasonal food becomes a living arrangement of beds, paths and practical decisions.",
    kernel:
      "Ask the gardener to explain one planting choice. Why is this crop here, what is ready now and what happens next? Look for the work behind the attractive geometry: supports, irrigation, pruning and the space a plant needs as it grows. Smell or taste only when invited. The most useful discovery may be a plant you recognise from the kitchen but have never seen growing. Let the guide’s seasonal route lead the visit rather than chasing a fixed photograph.",
    rootedness:
      "Babylonstoren lies in the Cape Winelands near Paarl. Its extensive fruit and vegetable garden is a cultivated contemporary landscape on a historic farm. The distinction matters: a carefully designed productive garden is not untouched nature or an unchanged remnant of the past. Walking with a gardener makes the present-day knowledge visible. It also offers a different entry into the Winelands from wine tasting, without implying that the two activities share a booking.",
    shift:
      "Connect the ingredient on a plate with the plant and work that produced it.",
    humanReturn:
      "A more observant relationship with seasonal food, even in a small urban kitchen.",
    responsibility:
      "The daily garden walk is listed at 10:00, meeting at the Farm Shop. Confirm availability and booking before travelling. Farm entry is separate from restaurant reservations and other activities. Paths include uneven materials, so check the route if you have mobility needs. Wear suitable shoes, prepare for sun or rain and do not pick produce without invitation. Specific crops and tasting opportunities depend on the season.",
    evidence:
      "The farm publishes the garden walk and visitor conditions, corroborated by Visit Stellenbosch. EA has not taken the tour. This is a cultivated garden visit, not a foraging excursion or a guarantee of a meal.",
    duration:
      "Allow a morning including the walk and independent garden time, an EA suggestion",
    participation: "Guided productive-garden walk",
    access:
      "Book the public garden walk through Babylonstoren and confirm entry arrangements. Organise transport to the farm separately from Cape Town, Paarl or Stellenbosch. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://babylonstoren.com/visit-our-garden",
      sources: [
        {
          title: "Babylonstoren: garden visit",
          url: "https://babylonstoren.com/visit-our-garden",
          note: "Daily guided walk, meeting point and garden scope.",
        },
        {
          title: "Babylonstoren: visitor information",
          url: "https://babylonstoren.com/visitor-information",
          note: "Entry arrangements and practical conditions.",
        },
        {
          title: "Visit Stellenbosch: garden tours",
          url: "https://www.visitstellenbosch.org/listing/babylonstoren-garden-tours/",
          note: "Destination corroboration of the public guided walk.",
        },
      ],
    },
  },
  {
    id: "berlin-vabali-sauna",
    slug: "leave-the-city-noise-outside-a-berlin-sauna",
    title: "Leave the city noise outside a Berlin sauna",
    field: "restore",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "berlin",
    place: "Berlin, vabali spa",
    summary:
      "A few hours at vabali offers a different rhythm within Berlin. Move between warmth, water and quiet rest without filling the pause with a phone.",
    kernel:
      "Begin by reading the house rules and finding a comfortable place to settle. Choose one gentle sequence rather than trying every sauna. Rest for as long as you want, drink water and leave heat whenever it stops feeling comfortable. Notice what a phone-free interval does to your sense of time. The aim is not endurance or completing a circuit. Leave enough space afterwards to return to the city without rushing straight into another appointment.",
    rootedness:
      "Vabali combines a Balinese-inspired setting with the textile-free sauna conventions familiar in Germany. It is a contemporary Berlin leisure space, not evidence of a traditional Balinese ritual or a medical treatment. That distinction makes it easier to arrive with appropriate expectations. The architectural setting supports the pause, while the shared rules about quiet, dress and privacy shape how people use it together.",
    shift:
      "Let rest be the main activity, rather than a gap between activities.",
    humanReturn:
      "A practical model for a few uninterrupted hours without needing a remote retreat.",
    responsibility:
      "This is a mixed textile-free spa. Swimwear is not worn in saunas or pools, and robes are required elsewhere. Phones and camera-enabled electronic devices stay in lockers. The minimum age is twelve, with under-eighteens accompanied by a legal guardian. Confirm access needs and consult the spa’s heat-use rules. If heat or bathing may be unsuitable for you, obtain appropriate advice before booking. No health benefit is promised.",
    evidence:
      "The official Berlin page and FAQ document the format, age limits, booking and privacy rules. EA has not visited or assessed individual suitability. Treatments and food have separate charges.",
    duration: "Choose a 2, 4 or 6-hour admission, or the current day option",
    participation: "Self-directed sauna and bathing visit",
    access:
      "Reserve the Berlin location through vabali, especially for weekends. Check what towels, robes and other items are included or rentable and read overstay charges. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.vabali.de/en/berlin/",
      sources: [
        {
          title: "vabali: Berlin",
          url: "https://www.vabali.de/en/berlin/",
          note: "Location, bathing facilities and admission route.",
        },
        {
          title: "vabali: FAQ",
          url: "https://www.vabali.de/en/faq/",
          note: "Textile-free rules, age, phones, reservations and timed admission.",
        },
      ],
    },
  },
  {
    id: "milan-qc-tram-sauna",
    slug: "take-a-sauna-break-inside-a-milan-tram",
    title: "Take a sauna break inside a Milan tram",
    field: "restore",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "milan",
    place: "Milan, QC Spa Milano at Porta Romana",
    summary:
      "A stationary Milan tram has a second life as a sauna at QC Spa Milano. Make it one stop in an afternoon of water and rest near Porta Romana.",
    kernel:
      "Look at the tram as a familiar city object put to another use. Then let the novelty recede and choose a comfortable place to pause. Alternate only the experiences that suit you, leaving time to rest between them. You do not need to visit every room or remain in the heat for a prescribed challenge. After the visit, the trams outside may look a little different: part transport, part shared visual language of the city.",
    rootedness:
      "QC’s Milan spa occupies an Art Nouveau complex beside the old Spanish walls at Porta Romana. The tram sauna gives an urban reference to a contemporary leisure experience. Other pools and relaxation spaces belong to the same designed circuit, but this is not a historic Roman bathing ritual or a journey aboard a working tram. The value is a playful local detail within a genuinely slower part of a city day.",
    shift: "Find a new use for a city detail you thought you already knew.",
    humanReturn: "A memorable pause that still feels connected to Milan.",
    responsibility:
      "The operator restricts entry to guests aged fourteen and over and excludes pregnant guests under its access rules. Read the full health and bathing conditions before booking. Bring the required swimwear and confirm included linen. Heat and water experiences are optional, not a medical recommendation. Massages and dining can be separate purchases. Any included aperitivo requires its own timing and availability check.",
    evidence:
      "QC’s official wellness page documents the Porta Romana tram sauna. Its admission page and rules describe current entry options and exclusions. EA has not visited or assessed the suitability of individual facilities. Temporary closures are possible.",
    duration: "Choose the current 5-hour, day or evening admission option",
    participation: "Self-directed spa circuit",
    access:
      "Book QC Spa Milano, checking the exact time window and inclusions. Confirm that the tram sauna is operating if it is central to your visit. No EA booking, treatment advice or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.qcterme.com/destinations/milano/qc-spa-milano/admissions-prices-milano",
      sources: [
        {
          title: "QC Milano: admissions",
          url: "https://www.qcterme.com/destinations/milano/qc-spa-milano/admissions-prices-milano",
          note: "Entry products, age restrictions and included items.",
        },
        {
          title: "QC Milano: wellness path",
          url: "https://www.qcterme.com/destinations/milano/qc-spa-milano/wellness-path-milano",
          note: "Tram sauna and other current facilities.",
        },
        {
          title: "QC: FAQ",
          url: "https://www.qcterme.com/faq",
          note: "Booking, preparation and access-rule links.",
        },
      ],
    },
  },
  {
    id: "tokyo-blue-note-live",
    slug: "make-an-evening-of-live-jazz-in-aoyama",
    title: "Make an evening of live jazz in Aoyama",
    field: "gather",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    place: "Tokyo, Blue Note Tokyo in Minami Aoyama",
    summary:
      "Choose an artist, a set and a seat at Blue Note Tokyo. Let a live performance become the centre of an Aoyama evening rather than its background music.",
    kernel:
      "Listen to a little of the artist’s work before booking, then leave room for the performance to differ. Once seated, follow an exchange between musicians rather than trying to recognise every piece. Notice how an audience’s attention changes the room. If you order food or a drink, do it within the venue’s service rhythm so the set retains your focus. A good evening does not depend on claiming you discovered an unknown artist.",
    rootedness:
      "Blue Note Tokyo brings a changing programme of Japanese and international performers to Minami Aoyama. Its place in the city is as a live-music venue with a particular listening and dining format. The name does not mean every night is traditional jazz, so the programme matters more than the label. It is also distinct from Blue Note Place in Ebisu, which has a different address and offer.",
    shift:
      "Treat listening as a shared activity that deserves your full attention.",
    humanReturn:
      "An artist or performance to follow after the trip, not just a photograph of a stage.",
    responsibility:
      "Choose the correct first or second show and read the seating plan before paying. The music charge and food or drink bill are separate. Age restrictions vary by seating and performance: younger guests are generally limited to qualifying first-show seats with an adult, and preschool children are not admitted. Confirm any under-eighteen booking directly. Follow the venue’s recording rules and ask about mobility needs before selecting a seat.",
    evidence:
      "The official reservation and FAQ pages document the live-show booking process, charges and age conditions. EA has not attended or reviewed a performer. The room photograph does not promise a particular lineup or table.",
    duration:
      "One booked set, with arrival and meal time confirmed for that performance",
    participation: "Seated live-music performance",
    access:
      "Use Blue Note Tokyo’s official programme to choose an artist, date, show and seat. Reserve through the venue’s own system for Minami Aoyama. No EA tickets or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.bluenote.co.jp/jp/reservation/",
      sources: [
        {
          title: "Blue Note Tokyo: reservations",
          url: "https://www.bluenote.co.jp/jp/reservation/",
          note: "Music charge, account and reservation process.",
        },
        {
          title: "Blue Note Tokyo: FAQ",
          url: "https://www.bluenote.co.jp/jp/faq/",
          note: "Shows, seating, young guests and practical conditions.",
        },
        {
          title: "Blue Note Tokyo: programme",
          url: "https://www.bluenote.co.jp/jp/",
          note: "Current artists and dates at the correct Tokyo venue.",
        },
      ],
    },
  },
  {
    id: "reykjavik-harpa-symphony",
    slug: "hear-reykjavik-from-inside-harpas-concert-hall",
    title: "Hear Reykjavík from inside Harpa’s concert hall",
    field: "gather",
    country: "Iceland",
    countrySlug: "iceland",
    regionSlug: "reykjavik",
    place: "Reykjavík, Harpa and the Iceland Symphony Orchestra",
    summary:
      "Go beyond Harpa’s glass facade and choose an Iceland Symphony Orchestra concert. The building makes a different kind of sense when you sit down to listen.",
    kernel:
      "Pick a programme that gives you a reason to be curious, whether a composer you know or a soloist you have never heard. Read a short introduction before the performance, then put it away. Follow one line of sound as it moves between sections of the orchestra. You do not need to identify every instrument to notice a change in texture or energy. Leave time to arrive without hurry and to walk out into the harbour air afterwards.",
    rootedness:
      "Harpa is a working cultural venue on Reykjavík’s waterfront, not only an architectural landmark. The Iceland Symphony Orchestra’s current calendar includes concerts in Eldborg as well as smaller ensembles in other halls. The connection to the city is participation in its public cultural life. Repertoire may be Icelandic or international, and a particular concert should not be described as traditional Icelandic music unless its programme supports that claim.",
    shift: "Understand a landmark through what people gather there to do.",
    humanReturn:
      "A musical memory of Reykjavík that belongs to a real evening rather than a passing view.",
    responsibility:
      "Check the exact hall, start time, duration, interval and age guidance for your chosen programme. A foyer visit does not include a concert. Arrange wheelchair spaces, hearing assistance or other access needs with the box office in advance. Follow the performance’s photography and late-arrival rules. Concert schedules change and tickets can sell out. The press photograph is archival and does not guarantee the pictured musicians will perform.",
    evidence:
      "The orchestra’s current calendar confirms public performances at Harpa. Harpa documents advance accessibility arrangements. EA has not attended or assessed the acoustics from a particular seat. This guide concerns attending a programmed concert, not backstage access.",
    duration:
      "One scheduled concert, with duration confirmed on its event page",
    participation: "Ticketed orchestral performance",
    access:
      "Choose a dated Iceland Symphony Orchestra concert from its official calendar and follow its ticket link. Confirm the hall at Harpa, Austurbakki 2. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://en.sinfonia.is/concerts-tickets/",
      sources: [
        {
          title: "Iceland Symphony: concerts",
          url: "https://en.sinfonia.is/concerts-tickets/",
          note: "Current performances, halls and direct ticket links.",
        },
        {
          title: "Harpa: accessibility",
          url: "https://www.harpa.is/en/accessibility",
          note: "Advance wheelchair seating, hearing assistance and access arrangements.",
        },
        {
          title: "Iceland Symphony: press photographs",
          url: "https://en.sinfonia.is/press/",
          note: "Documentary orchestra photographs with named photographer.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch63: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
