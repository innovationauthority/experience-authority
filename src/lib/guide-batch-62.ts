import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "singapore-labyrinth",
    slug: "taste-singapore-in-another-form",
    title: "Taste Singapore in another form",
    field: "taste",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Restaurant Labyrinth",
    summary:
      "At Labyrinth, familiar Singaporean flavours become an invitation to look again. Follow a tasting menu through memory, ingredients and unexpected forms.",
    kernel:
      "Let the first taste arrive before you decide what the dish resembles. Then ask which Singaporean reference the kitchen is working with and what it has changed. Is the familiarity in the seasoning, the texture or the way the ingredients meet? You do not need to identify every reference correctly. Make this a conversation with the team, rather than a test of culinary knowledge. If your trip also includes a hawker meal, keep both experiences in mind without asking one to stand in for the other.",
    rootedness:
      "Chef LG Han describes the restaurant through Singaporean food memories and a changing selection of produce. That gives the meal a particular local lens, rather than making it a survey of everything Singapore eats. The kitchen now explicitly uses seasonal ingredients from around the world. Do not mistake a Singaporean culinary reference for a claim that every ingredient was grown nearby. The useful connection is between a recognisable food culture and a contemporary personal interpretation.",
    shift:
      "Notice how a flavour can remain recognisable when its presentation changes.",
    humanReturn:
      "A new reference for reading Singaporean food, alongside the everyday meals that give those references meaning.",
    responsibility:
      "This seafood-focused menu has substantial dietary limits. The restaurant says it cannot accommodate vegetarian, vegan, coeliac or zero-spice diets and several common allergies. Read its full list and obtain confirmation before reserving. Ask about children, access and service language if relevant. The photograph documents a restaurant dish, not a promise that it appears on the current menu. Alcohol pairing is optional.",
    evidence:
      "The restaurant publishes its current approach, menu duration and dietary exclusions. EA has not eaten here or verified every ingredient. The selection concerns a documented dining format, not an EA restaurant rating.",
    duration:
      "Approximately 2.5 hours for lunch or 3 hours for the chef’s tasting menu",
    participation:
      "Seated tasting menu with explanations from the restaurant team",
    access:
      "Reserve directly through Labyrinth. Select lunch or the chef’s tasting menu, disclose dietary needs and confirm the total and cancellation terms. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.restaurantlabyrinth.com/menu-1",
      sources: [
        {
          title: "Labyrinth: current menus",
          url: "https://www.restaurantlabyrinth.com/menu-1",
          note: "Menu formats, duration, dietary restrictions and direct reservation link.",
        },
        {
          title: "Labyrinth: the cuisine",
          url: "https://www.restaurantlabyrinth.com/our-restaurant",
          note: "Chef’s stated Singaporean references and present use of seasonal global produce.",
        },
        {
          title: "Labyrinth: location",
          url: "https://www.restaurantlabyrinth.com/contact",
          note: "Current restaurant contact and location.",
        },
      ],
    },
  },
  {
    id: "barcelona-disfrutar",
    slug: "let-a-tasting-menu-change-your-expectations-in-barcelona",
    title: "Let a tasting menu change your expectations in Barcelona",
    field: "taste",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    place: "Barcelona, Disfrutar",
    summary:
      "At Disfrutar, the pleasure is in discovering that an ingredient can behave differently from the way you expected. Choose a tasting menu and give the sequence your attention.",
    kernel:
      "When a course arrives, listen to the serving instructions before reaching for a utensil. Notice what you expected from its appearance and what you actually taste. A change of texture can be as interesting as an unfamiliar ingredient. Ask about one technique or flavour that stays with you, rather than trying to collect the names of every course. Leave room in the day for the meal itself. A tasting menu loses something when you are watching the clock for another reservation.",
    rootedness:
      "Disfrutar sits in Barcelona’s Eixample near the Ninot Market. Its chefs’ background includes elBulli, but the experience here is their own continuing work with Mediterranean references and contemporary technique. The restaurant distinguishes Classic, built around established creations, from Festival, based on newer seasonal work. Michelin independently describes the two formats. This is a specific restaurant experience, not a claim that experimental fine dining is the only way to understand Catalan food.",
    shift: "Let flavour correct what your eyes thought they knew.",
    humanReturn:
      "A more curious vocabulary for texture, sequence and the choices behind a meal.",
    responsibility:
      "Confirm dietary adaptations, budget, cancellation conditions, children’s admission and service language before booking. Ask the team about access needs. Allow a long meal and confirm its expected length with the restaurant. Wine pairing is a separate choice. The Living Table is a different reservation in a separate space and is not included in an ordinary tasting-menu booking.",
    evidence:
      "The official site confirms the two menus and separate Living Table product. Michelin corroborates the location and culinary format. EA has not dined here, assessed service or guaranteed a reservation. Dishes and prices can change.",
    duration:
      "Allow a long lunch or evening, with the exact duration confirmed when booking",
    participation: "Seated tasting menu",
    access:
      "Use Disfrutar’s direct booking channel for Villarroel 163. Popular dates may require a waiting list. Choose Classic or Festival with the team and check what is included. No EA reservation or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_hospitality",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.disfrutarbarcelona.com/",
      sources: [
        {
          title: "Disfrutar: menus and reservations",
          url: "https://www.disfrutarbarcelona.com/",
          note: "Current Classic and Festival menus and distinction from the Living Table.",
        },
        {
          title: "Michelin: Disfrutar",
          url: "https://guide.michelin.com/es/es/catalunya/barcelona/restaurante/disfrutar",
          note: "Independent location and culinary-format corroboration.",
        },
      ],
    },
  },
  {
    id: "amsterdam-nxt-pioneers",
    slug: "follow-video-art-into-the-room-in-amsterdam",
    title: "Follow video art into the room in Amsterdam",
    field: "witness",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    place: "Amsterdam Noord, Nxt Museum",
    summary:
      "At Nxt Museum, early video experiments meet contemporary light and sound. Pioneers of Media Art gives the glowing room a history, not just a photogenic surface.",
    kernel:
      "Start by staying with one work long enough to notice its timing. What repeats, what changes and where does your attention move? Then look at a work from another generation and compare the artist’s use of the medium. A screen, a projected image and an environment of sound ask different things of you. Put the phone away for one full encounter. The point is not to decide whether the older technology is less impressive, but to see what an artist was able to discover through it.",
    rootedness:
      "The exhibition connects Nxt’s Amsterdam setting with MonteVideo, the early Dutch video-art gallery, through a collaboration with LI-MA. Works from its archive sit alongside current practitioners. That creates a useful bridge between the city’s cultural history and the digital environments visitors often associate with immersive art today. The programme runs from 12 June 2026 to 10 January 2027. This guide covers that exhibition specifically, not every future Nxt programme.",
    shift: "Look for an artistic question behind the technology.",
    humanReturn:
      "A way to distinguish an absorbing media artwork from a room that simply looks good in a photograph.",
    responsibility:
      "Expect dark spaces and audiovisual work. Ask the museum about flashing light, sound levels and your access needs before booking. Follow staff guidance around installations and photography. The published weekly schedule currently closes on Mondays and Tuesdays, with exceptions to be checked. Do not assume an evening performance or guided group visit is included.",
    evidence:
      "Nxt publishes the exhibition dates, participating artists and LI-MA collaboration. Its visitor page supplies location and ticket access. EA has not attended or assessed sensory suitability. This guide is scheduled for review before the exhibition ends.",
    duration: "Allow 90 minutes to two hours, an EA planning suggestion",
    participation: "Self-directed temporary media-art exhibition",
    access:
      "Book Pioneers of Media Art through Nxt Museum for Asterweg 22 in Amsterdam Noord. Check the date and opening hours before travelling. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-08",
      accessUrl: "https://nxtmuseum.com/exhibition/pioneers-of-media-art",
      sources: [
        {
          title: "Nxt: Pioneers of Media Art",
          url: "https://nxtmuseum.com/exhibition/pioneers-of-media-art",
          note: "Exhibition scope, artists, collaboration and closing date.",
        },
        {
          title: "Nxt: plan your visit",
          url: "https://nxtmuseum.com/planyourvisit",
          note: "Address, tickets and visitor preparation.",
        },
      ],
    },
  },
  {
    id: "brumadinho-inhotim-colour",
    slug: "walk-inside-colour-at-inhotim",
    title: "Walk inside colour at Inhotim",
    field: "witness",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "brumadinho",
    place: "Brumadinho, Inhotim",
    summary:
      "At Inhotim, Hélio Oiticica’s coloured walls turn looking into movement. Begin with Magic Square, then let the gardens lead you towards another artwork.",
    kernel:
      "Walk around the coloured walls before settling on a viewpoint. Notice how an opening frames a person, a patch of sky or another colour. Move a few steps and compare the arrangement again. This is a work you understand partly through your own position. Afterward, choose one nearby gallery from the current map rather than trying to cross the entire site at speed. Let the walk between artworks be part of the visit, with time to sit and look back at what changed.",
    rootedness:
      "Oiticica’s Invenção da Cor, Penetrável Magic Square #5, De Luxe was realised after his death from his instructions. Inhotim describes the work as colour expanded to the scale of an environment. Its outdoor setting in Brumadinho places that idea among gardens and contemporary-art galleries. This is a constructed cultural landscape, not an untouched forest. The wider collection offers many possible routes, but a manageable sequence gives individual works more room to register.",
    shift:
      "Experience colour as something you pass through, not only something you face.",
    humanReturn:
      "A physical understanding of an artwork and a more deliberate way to move between galleries.",
    responsibility:
      "Check the live maintenance list before setting a route. Several galleries and works can close independently, and Sonic Pavilion was listed under maintenance at the source check. Wear footwear suitable for outdoor paths, prepare for rain and sun, and ask staff which routes and internal transport suit your mobility needs. Do not climb or touch work unless explicitly permitted. Guided visits and transport need their own availability checks.",
    evidence:
      "Inhotim documents the artwork, visiting arrangements and maintenance notices. EA has not inspected the site or verified every route. The image shows Magic Square rather than a currently closed pavilion. The suggested sequence is editorial advice, not a guided package.",
    duration:
      "Allow a full day including other galleries and gardens, an EA planning suggestion",
    participation: "Self-directed outdoor artwork and museum visit",
    access:
      "Arrange admission through Inhotim and plan transport to Brumadinho separately. Consult the current map and closures on arrival. Check language options if booking a mediated visit. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.inhotim.org.br/visite/",
      sources: [
        {
          title: "Inhotim: visiting",
          url: "https://www.inhotim.org.br/visite/",
          note: "Admission route, transport and visitor services.",
        },
        {
          title: "Inhotim: Magic Square",
          url: "https://www.inhotim.org.br/item-do-acervo/invencao-da-cor-penetravel-magic-square-5-de-luxe/",
          note: "Artwork identity, construction and relationship between colour and movement.",
        },
        {
          title: "Inhotim: today",
          url: "https://www.inhotim.org.br/hoje/",
          note: "Current opening and maintenance notices.",
        },
      ],
    },
  },
  {
    id: "wellington-weta-effects",
    slug: "find-the-handmade-work-behind-the-screen-in-wellington",
    title: "Find the handmade work behind the screen in Wellington",
    field: "work",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "wellington",
    place: "Wellington, Wētā Workshop Experiences",
    summary:
      "A costume, creature or prop starts as a material problem. At Wētā’s Wellington visitor experience, follow the making behind the image you remember from a film.",
    kernel:
      "Choose one object and ask what it had to do on screen. Did it need to move, survive a close-up or allow a performer to work inside it? Look at its surface after hearing that answer. What seemed like decoration may have a practical purpose. During any permitted handling activity, pay attention to weight and flexibility as well as appearance. You are visiting a designed public tour, so let the guide distinguish a demonstration piece from an object used in production.",
    rootedness:
      "Wētā’s work gives Wellington a contemporary creative-industry story beyond its scenery. The public experience in Miramar introduces physical effects, props and costumes, with the city’s tourism organisation corroborating its visitor offer. It is a way into design decisions and skilled making. It is not unrestricted access to confidential production areas, and a recognisable film reference is a starting point rather than the entire reason to come.",
    shift: "See a screen illusion as a series of material decisions.",
    humanReturn:
      "An appreciation of how makers solve problems that a finished film hides.",
    responsibility:
      "Some displays include creatures and unsettling imagery. Check sensory suitability and accessibility with the venue, especially for younger visitors. Follow the guide’s handling and photography rules. Artists at work and particular production objects are not guaranteed. Do not assume access to the workshop floor or permission to photograph through production windows.",
    evidence:
      "Wētā publishes the Wellington tour, its duration and public route. WellingtonNZ corroborates the experience. EA has not taken the tour. No film-production access, artist meeting or EA partnership is implied.",
    duration: "90 minutes",
    participation: "Guided introduction to practical film effects",
    access:
      "Book the Wellington tour, not the separate Auckland experience. Follow the confirmation for arrival at Wētā Cave, 1 Weka Street, Miramar. Confirm guiding language and any transfer separately.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.wetaworkshop.com/tours/wellington/experiences/tour",
      sources: [
        {
          title: "Wētā: Wellington tour",
          url: "https://www.wetaworkshop.com/tours/wellington/experiences/tour",
          note: "Current guided visitor product, duration and booking.",
        },
        {
          title: "WellingtonNZ: Wētā Workshop Experiences",
          url: "https://www.wellingtonnz.com/visit/see-and-do/weta-workshop-experiences-and-weta-cave",
          note: "Destination corroboration and creative-industry context.",
        },
      ],
    },
  },
  {
    id: "meyrin-cern-science-gateway",
    slug: "try-the-ideas-behind-a-particle-accelerator-at-cern",
    title: "Try the ideas behind a particle accelerator at CERN",
    field: "learn",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "geneva",
    place: "Meyrin, CERN Science Gateway near Geneva",
    summary:
      "You do not need a physics degree to ask a good question at CERN. Science Gateway turns particles, instruments and the early Universe into things you can explore.",
    kernel:
      "Pick an interactive station and make a prediction before changing a control. What do you think will happen, and what actually happens? Repeat with one different choice. If the explanation loses you, ask a guide in a red jacket to help connect the model with the real research. A useful visit can begin with one clear idea. Save the wider tour of the Universe for afterward, rather than rushing past an experiment you almost understand.",
    rootedness:
      "CERN’s public Science Gateway is in Meyrin, beside Geneva. Its exhibitions connect the machinery of particle physics with questions about matter and the Universe. The value is access to an explanation, not proximity alone to a famous laboratory. Interactive models and real scientific objects help make research legible. You are visiting an educational campus, not entering an operating accelerator or receiving access to the underground Large Hadron Collider.",
    shift:
      "Turn an intimidating scientific name into a question you can investigate.",
    humanReturn:
      "A concrete explanation to carry home, and more confidence in asking how an instrument produces evidence.",
    responsibility:
      "Registration is required even though admission is free. Under-sixteens need an adult. Exhibition content is recommended from age eight and is offered in French, English, German, Italian and Spanish. Confirm individual access needs with CERN. Guided tours and laboratory workshops need separate on-site reservations and have very limited capacity. Do not make your visit depend on securing one.",
    evidence:
      "CERN’s current visitor page distinguishes guaranteed registered exhibition entry from capacity-limited additional activities. The exhibition page documents the interactive content. EA has not visited or assessed every installation. No underground access is promised.",
    duration: "90 to 180 minutes for the exhibitions",
    participation:
      "Self-directed interactive science exhibitions with guides available for questions",
    access:
      "Register through CERN Science Gateway, ideally online up to one month ahead. Exhibitions normally open Tuesday to Sunday. Check the current calendar and arrival instructions. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://visit.cern/families-individual-visitors",
      sources: [
        {
          title: "CERN: families and individuals",
          url: "https://visit.cern/families-individual-visitors",
          note: "Registration, ages, languages, duration and separate on-site activity bookings.",
        },
        {
          title: "CERN: exhibitions",
          url: "https://visit.cern/exhibitions",
          note: "Interactive content and the role of exhibition guides.",
        },
      ],
    },
  },
  {
    id: "adelaide-jamfactory-glass",
    slug: "shape-hot-glass-with-an-artist-in-adelaide",
    title: "Shape hot glass with an artist in Adelaide",
    field: "make",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "adelaide",
    place: "Adelaide, JamFactory Glass Studio",
    summary:
      "A gather of hot glass keeps changing while you work. A one-to-one JamFactory session lets a beginner experience the timing behind a blown-glass object.",
    kernel:
      "Watch the artist’s rhythm before trying a movement yourself. The glass cannot be paused like a drawing. Ask what the material is doing as you turn, shape or blow under instruction. Let the teacher set the pace and take over whenever needed. A simple object can teach more than an ambitious shape attempted too quickly. Before leaving, look at the piece as a record of changes in heat, movement and attention rather than judging it only by symmetry.",
    rootedness:
      "JamFactory’s Adelaide studios place a public beginner session within an organisation devoted to contemporary craft and design. The workshop is an introduction to hot-glass skills, not a factory tour or professional qualification. It gives an Adelaide visit a practical connection to making. Leave time to look at finished work afterward, when a curve or rim may mean something different because you have tried to influence one yourself.",
    shift: "Notice that making a shape is also managing time.",
    humanReturn:
      "First-hand experience of a demanding material, with an object to collect after finishing.",
    responsibility:
      "The individual class is for adults aged eighteen and over. Follow the studio’s clothing and safety instructions, including suitable closed footwear, and discuss mobility or heat-sensitivity needs beforehand. Tools and materials are supplied. Pieces require annealing and finishing and are normally ready one to two weeks later. Arrange collection or paid postage, particularly if leaving Adelaide soon. Do not expect a finished piece to leave with you that day.",
    evidence:
      "The current programme and bookable two-hour product describe one-to-one beginner teaching and delayed collection. EA has not attended or evaluated the instructor. Exact objects and outcomes depend on the session and material.",
    duration: "Two hours, with a separate four-hour option",
    participation: "Guided one-to-one hot-glass workshop",
    access:
      "Reserve Individual Glass Blowing with JamFactory at 19 Morphett Street, Adelaide. Confirm the date, language, clothing and delivery arrangements before paying. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.jamfactory.com.au/short-courses",
      sources: [
        {
          title: "JamFactory: short courses",
          url: "https://www.jamfactory.com.au/short-courses",
          note: "Individual glassblowing format, age, materials and collection arrangements.",
        },
        {
          title: "JamFactory: two-hour glassblowing workshop",
          url: "https://shop.jamfactory.com.au/collections/short-courses/products/individual-glass-blowing-workshop-2-hours",
          note: "Current individual product and booking route.",
        },
      ],
    },
  },
  {
    id: "geneva-initium-watchmaking",
    slug: "take-a-watch-movement-apart-in-geneva",
    title: "Take a watch movement apart in Geneva",
    field: "make",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "geneva",
    place: "Geneva, Initium workshop",
    summary:
      "At an Initium bench in Geneva, a mechanical watch becomes a system you can handle. Spend three hours dismantling and reassembling a movement with a watchmaker.",
    kernel:
      "Begin by asking the instructor to show how energy passes through the mechanism. As a part comes out, notice what it was connected to and why its position mattered. Keep the work organised exactly as instructed. The satisfying moment is not simply seeing a tiny component, but understanding enough of its job to put it back. Take your time with one operation instead of treating the lesson as a race towards a completed object.",
    rootedness:
      "Geneva’s watchmaking identity is often encountered through shop windows. A public introductory course offers a different relationship with the same world, centred on handling rather than ownership. Initium distinguishes the three-hour Alpha introduction from longer courses in which a participant assembles a watch to take home. This guide concerns the introduction. It makes a technical practice approachable without claiming that a morning produces a trained watchmaker.",
    shift:
      "Move from recognising a watch brand to understanding part of a mechanism.",
    humanReturn:
      "A small but tangible insight into precision, sequence and why skilled assembly takes care.",
    responsibility:
      "Confirm age suitability, bench accessibility and any visual or dexterity needs directly before paying. No previous knowledge is required, but the work involves small parts and close attention. Choose the Geneva location and agree the teaching language. French and English have the broadest availability according to the operator. The three-hour course does not include a finished take-home watch.",
    evidence:
      "Initium publishes the dismantling and reassembly format, duration and booking procedure. Its FAQ distinguishes locations, course lengths and language availability. EA has not attended or assessed teaching quality. A purchased course or gift voucher is not itself a confirmed appointment.",
    duration: "Three hours",
    participation: "Guided beginner watchmaking lesson",
    access:
      "Request or purchase the three-hour introductory course for Geneva, then obtain a confirmed date and language from Initium. The operator suggests allowing several weeks for scheduling. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://initium.swiss/en/produit/3-hour-introductory-workshop-on-watchmaking/",
      sources: [
        {
          title: "Initium: three-hour introductory course",
          url: "https://initium.swiss/en/produit/3-hour-introductory-workshop-on-watchmaking/",
          note: "Mechanical movement exercise and distinction from take-home-watch courses.",
        },
        {
          title: "Initium: customer FAQ",
          url: "https://initium.swiss/en/customer-faq/",
          note: "Location, scheduling, languages and duration.",
        },
        {
          title: "Initium: contact",
          url: "https://initium.swiss/en/contact/",
          note: "Geneva workshop contact and confirmation route.",
        },
      ],
    },
  },
  {
    id: "billund-lego-test-driver",
    slug: "build-test-and-rebuild-in-billund",
    title: "Build, test and rebuild in Billund",
    field: "play",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "billund",
    place: "Billund, LEGO House",
    summary:
      "Build a small car, send it down a track and change the part that let it down. LEGO House makes room for the kind of play adults often forget to allow themselves.",
    kernel:
      "Begin with a deliberately simple vehicle in the Blue Zone’s Test Driver. Watch one run, change one detail and try again. If you are with someone, swap designs and explain what you thought would work. Then choose another zone without making a checklist of every station. A stop-motion story or a freely built form asks for a different kind of attention. The useful souvenir is the pleasure of testing an idea without needing it to be impressive.",
    rootedness:
      "LEGO House is in Billund, the Danish town associated with the brick’s origins. Its Experience Zones turn that industrial and design identity into public play. The four zones are organised around different kinds of learning, with activities for adults as well as children. This is distinct from LEGOLAND’s theme-park admission and from the separately ticketed LEGO Masters Academy. Here, the central activity is what you build and change yourself.",
    shift: "Treat a failed first attempt as the beginning of the fun.",
    humanReturn:
      "A shared memory of making something work, plus a little more permission to experiment.",
    responsibility:
      "Book Experience Zones admission for the correct date and entry time. The operator recommends arriving fifteen minutes early for check-in and lockers. Bricks used in the zones stay in the building. Ask about sensory or mobility needs and suitable activities for your group. Young children need appropriate supervision. Meals, special courses and theme-park entry are separate arrangements.",
    evidence:
      "The current Blue Zone page documents Test Driver and its rebuild-and-test format. The FAQ confirms entry arrangements and the typical visit length. EA has not tested the activities or assessed crowd levels. The photograph shows the venue’s building activity, not a private class included in admission.",
    duration: "Typically three to four hours for the Experience Zones",
    participation: "Self-directed creative play and building activities",
    access:
      "Buy an Experience Zones ticket directly from LEGO House at Ole Kirks Plads 1, Billund. Check the calendar and any separate restaurant or Academy booking. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://legohouse.com/en-gb/explore/experiences/blue-zone",
      sources: [
        {
          title: "LEGO House: Blue Zone",
          url: "https://legohouse.com/en-gb/explore/experiences/blue-zone",
          note: "Current Test Driver activity and rules for the bricks.",
        },
        {
          title: "LEGO House: FAQ",
          url: "https://legohouse.com/en-gb/plan-your-visit/faq",
          note: "Admission, check-in, access information and visit duration.",
        },
        {
          title: "LEGO House: Experience Zones",
          url: "https://legohouse.com/en-gb/explore/experiences/the-experience-zones",
          note: "Four-zone format and different types of creative play.",
        },
      ],
    },
  },
  {
    id: "kaatsheuvel-efteling-fairytale",
    slug: "follow-a-story-around-the-next-bend-at-efteling",
    title: "Follow a story around the next bend at Efteling",
    field: "play",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "kaatsheuvel",
    place: "Kaatsheuvel, Efteling Fairytale Forest",
    summary:
      "In Efteling’s Fairytale Forest, a path becomes a sequence of small theatrical reveals. Follow the story through sound, scenery and moving figures rather than chasing the next big ride.",
    kernel:
      "Approach a scene slowly enough to hear it before looking for every detail. Notice where the path puts you, what is hidden and when a figure begins to move. Stay for the full scene rather than taking a photograph and leaving halfway through. If you recognise the tale, compare the version you remember with the one being staged. If you do not, let the visual clues carry it. This is an invitation to play along, whether or not you have brought children.",
    rootedness:
      "The Sprookjesbos is a particular part of Efteling in Kaatsheuvel, where familiar European tales become built settings. Its appeal lies in the physical storytelling, not a claim that every tale originated locally. It gives a Dutch theme-park day a slower centre: a walk through designed scenes, followed by whichever other attractions suit your group. A single park ticket opens the wider visit, but queues and individual closures shape what is possible.",
    shift: "Notice the craft that makes an ordinary path feel like a story.",
    humanReturn:
      "A playful way to read scenery, sound and timing, without needing a high-speed ride.",
    responsibility:
      "Some stories contain darker fairytale imagery and sudden effects, so choose scenes with your group’s sensitivities in mind. Check the park’s accessibility information and daily maintenance list. Droomvlucht has an announced closure from 9 November to 4 December 2026 and is not essential to this route. Outdoor paths need weather-appropriate clothing. Do not climb scenery or enter planted areas.",
    evidence:
      "Efteling documents the Fairytale Forest, its scenes and its changing maintenance calendar. EA has not visited or evaluated individual attractions. The guide is about the walk-through story environments, not a promise that every ride is operating.",
    duration:
      "Allow at least an hour for the forest within a longer park visit, an EA planning suggestion",
    participation: "Self-directed walk through staged fairytale scenes",
    access:
      "Buy a valid Efteling park ticket and follow current date-reservation rules. Check opening hours and closures before travel to Kaatsheuvel. No EA package, priority access or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.efteling.com/en/park/attractions/fairytale-forest",
      sources: [
        {
          title: "Efteling: Fairytale Forest",
          url: "https://www.efteling.com/en/park/attractions/fairytale-forest",
          note: "Public attraction, setting and individual fairytale scenes.",
        },
        {
          title: "Efteling: maintenance calendar",
          url: "https://www.efteling.com/en/park/information/in-maintenance",
          note: "Current and upcoming closures.",
        },
        {
          title: "Efteling: ticket information",
          url: "https://www.efteling.com/en/park/information/ticket-overview",
          note: "Park admission and booking conditions.",
        },
      ],
    },
  },
  {
    id: "cornwall-eden-rainforest",
    slug: "find-the-plants-behind-everyday-things-in-cornwall",
    title: "Find the plants behind everyday things in Cornwall",
    field: "nature",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "cornwall",
    place: "Cornwall, Eden Project at Bodelva",
    summary:
      "Cacao, rubber and bananas become living plants rather than supermarket categories inside Eden’s Rainforest Biome. Follow one familiar thing back to the conditions it needs.",
    kernel:
      "Choose an everyday material or food and look for its plant. How large is it, where does the useful part grow and what would harvesting it involve? Read the interpretation before moving to the next bed. Then take a higher walkway if conditions and access allow, comparing the canopy with what you saw from below. A single connection between an ordinary purchase and a living plant can be more memorable than trying to name every species.",
    rootedness:
      "The Eden Project creates a tropical plant environment in Cornwall rather than offering a wild rainforest encounter. That distinction is part of its value: a visitor can compare unfamiliar growing conditions with the landscape outside. The Rainforest Biome links plants with everyday materials and food, while the wider site adds outdoor gardens and another climatic setting. This guide concerns ordinary admission, not the separately booked private rainforest experience.",
    shift: "See a familiar product as part of a living system.",
    humanReturn:
      "A more concrete question to ask about where everyday ingredients and materials come from.",
    responsibility:
      "The Biome is warm and humid, with the operator listing temperatures of 18 to 35°C. Take breaks and consider heat tolerance. The elevated Lookout can close because of temperature, and the Wobbly Bridge is optional. Ask staff about accessible routes rather than assuming every elevated section has the same access. Keep to paths, do not pick or taste plants and leave wildlife undisturbed. Check winter opening dates before travel.",
    evidence:
      "Eden documents the plant displays, expected visit length, temperature and conditional Lookout access. Its visitor information supplies admission and opening arrangements. EA has not inspected the site or assessed conservation outcomes. This is a planted educational environment.",
    duration:
      "Around 90 minutes for the Rainforest Biome, with extra time for the wider site",
    participation: "Self-directed planted biome and garden visit",
    access:
      "Book Eden Project admission for Bodelva in Cornwall and check the day’s opening and access notices. Guided or premium experiences need separate confirmation. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.edenproject.com/whats-here/rainforest-biome",
      sources: [
        {
          title: "Eden: Rainforest Biome",
          url: "https://www.edenproject.com/whats-here/rainforest-biome",
          note: "Plant interpretation, duration, heat and elevated-route limitations.",
        },
        {
          title: "Eden: visiting",
          url: "https://www.edenproject.com/visit",
          note: "Admission, opening calendar and visitor preparation.",
        },
      ],
    },
  },
  {
    id: "singapore-cloud-forest",
    slug: "look-closer-at-a-mountain-of-plants-in-singapore",
    title: "Look closer at a mountain of plants in Singapore",
    field: "nature",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    place: "Singapore, Gardens by the Bay Cloud Forest",
    summary:
      "Cloud Forest’s waterfall draws the eye. The more interesting discovery may be a tiny fern or a pitcher plant on the planted mountain beside it.",
    kernel:
      "Enjoy the first wide view, then choose something small to look for. Compare the shapes of leaves on a vertical surface, the way moss holds a shaded patch and the form of a pitcher plant. On the aerial walkways, look back at the same planting from another height. The scale changes, but the individual plants remain worth noticing. Give the labels as much attention as the spectacle. This is a chance to ask what a cool, moist habitat makes possible.",
    rootedness:
      "Gardens by the Bay puts a constructed cloud-forest environment into Singapore’s dense urban landscape. The cooled conservatory is a designed botanical attraction, not a remnant of native forest or a substitute for visiting a natural habitat. Its current presentation also includes Jurassic World: The Experience. That entertainment layer matters when planning: do not expect a silent greenhouse, and do not confuse animatronic creatures with the living collection.",
    shift:
      "Move from admiring a green wall to noticing the different lives within it.",
    humanReturn:
      "A more attentive way to look at plants and the conditions that sustain them.",
    responsibility:
      "The current Jurassic World presentation includes loud sound and flashing-light effects. Check sensory suitability and current ticket combinations before booking. The next advertised maintenance closure is 17 November 2026. Elevated walkways may not suit everyone, so check the accessible route and lift arrangements directly. Bring a light layer for the cooled interior, stay on paths and do not touch or collect plants.",
    evidence:
      "The operator confirms the living collection, aerial walkways, entertainment overlay and maintenance date. Its official visitor guidance supplies access preparation. EA has not visited or audited ecological claims. The photograph shows the planted conservatory, not a promise of a quiet or unchanged display.",
    duration: "The operator recommends about one hour for Cloud Forest",
    participation: "Self-directed cooled conservatory visit",
    access:
      "Choose a current Gardens by the Bay ticket that includes Cloud Forest and check whether the offer also includes other attractions. Verify closure dates and the current presentation before paying. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.gardensbythebay.com.sg/en/things-to-do/attractions/cloud-forest.html",
      sources: [
        {
          title: "Gardens by the Bay: Cloud Forest",
          url: "https://www.gardensbythebay.com.sg/en/things-to-do/attractions/cloud-forest.html",
          note: "Current content, ticket combinations, sensory notice and maintenance closure.",
        },
        {
          title: "Gardens by the Bay: visitor information",
          url: "https://www.gardensbythebay.com.sg/en/plan-your-visit.html",
          note: "Visitor preparation and access information.",
        },
      ],
    },
  },
  {
    id: "vals-7132-therme",
    slug: "read-stone-light-and-water-in-vals",
    title: "Read stone, light and water in Vals",
    field: "restore",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "vals",
    place: "Vals, 7132 Therme",
    summary:
      "Peter Zumthor’s baths in Vals are architecture experienced at the pace of water. Leave the camera outside and notice how stone, light and sound shape the room.",
    kernel:
      "Begin by settling into the place rather than trying to visit every pool. Watch how daylight meets the stone and listen to the difference between a quiet passage and an occupied bathing space. Choose a comfortable temperature and leave time to rest between baths. You do not need an architectural vocabulary to notice an atmosphere. The building becomes easier to read when you stop trying to document it.",
    rootedness:
      "The baths use Vals quartzite and spring water in a design by Peter Zumthor. Their connection to the Alpine village is material as well as geographic. Public day admission makes the architectural encounter available without booking a hotel stay, subject to limited capacity. This is a functioning bathing place shared with other guests. Treat it as such rather than as an empty architectural set.",
    shift:
      "Understand a building through your body and attention, not only its photograph.",
    humanReturn:
      "A slower memory of space, with the phone absent from the experience.",
    responsibility:
      "Camera-equipped devices are not permitted in the baths. Children must be at least six and accompanied by adults. Towels are included and private towels and bathrobes are not allowed under the published rules. Re-entry is not possible. Ask about your mobility and bathing needs in advance and follow posted temperature guidance. No medical benefit is claimed here. The operator lists an early closure on 11 December, so check your specific day.",
    evidence:
      "7132 publishes the external-visitor rules, advance booking and architectural context. EA has not bathed here or inspected access. The source photograph is an official architectural image, not evidence that pools will be empty during a visit.",
    duration: "Allow a few unhurried hours, an EA planning suggestion",
    participation: "Self-directed thermal bathing",
    access:
      "Reserve an external-visitor ticket online through 7132 Therme before travelling to Vals. Confirm opening hours and inclusions. A hotel room or separate spa treatment is not part of ordinary day admission. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://7132.com/en/therme/7132-thermal-baths-day-trip/",
      sources: [
        {
          title: "7132: day visitors",
          url: "https://7132.com/en/therme/7132-thermal-baths-day-trip/",
          note: "Capacity, tickets, age, privacy and towel rules.",
        },
        {
          title: "7132: Peter Zumthor’s baths",
          url: "https://7132.com/en/therme/7132-thermal-baths-peter-zumthor/",
          note: "Architectural authorship, local stone and spring-water context.",
        },
      ],
    },
  },
  {
    id: "bad-blumau-thermal",
    slug: "bathe-among-hundertwassers-curves-in-styria",
    title: "Bathe among Hundertwasser’s curves in Styria",
    field: "restore",
    country: "Austria",
    countrySlug: "austria",
    regionSlug: "bad-blumau",
    place: "Bad Blumau, Rogner thermal baths",
    summary:
      "A thermal-bath day in Bad Blumau comes with coloured columns, irregular windows and planted roofs. Hundertwasser’s architecture makes resting feel spatially curious.",
    kernel:
      "Choose a comfortable pool and look at how the building meets it. Follow a curved edge with your eyes, compare the windows and notice where planted ground becomes a roof. Then allow yourself to stop looking for a while. The architecture does not require a formal tour to become part of the experience. Alternate bathing with an ordinary quiet rest, rather than turning the range of facilities into another list to complete.",
    rootedness:
      "Rogner Bad Blumau places Friedensreich Hundertwasser’s architecture in the rolling landscape of Styria. The operator describes a central indoor spa with bathing and other spaces extending into the surroundings. The public thermal-bath offer is distinct from staying in the hotel or booking a treatment. The appeal here is a practical day of water and rest in an unusually expressive building, not a promise of a medical outcome.",
    shift:
      "Let an everyday act of resting reveal another way a building can feel.",
    humanReturn:
      "A combination of visual curiosity and unhurried time that does not depend on a treatment schedule.",
    responsibility:
      "Reserve ahead and confirm which pools and areas are included. The operator’s request form becomes valid only after email confirmation, with specific arrival deadlines. Ask about age admission, accessible routes, swimwear and sauna rules before paying. Respect other bathers’ privacy and follow temperature guidance. Health and treatment claims on the provider’s wider site are not EA findings or part of this guide.",
    evidence:
      "The operator confirms public day and evening reservations and the Hundertwasser design. The local tourism office corroborates the thermal-bath offer. EA has not visited, tested facilities or evaluated medical and sustainability claims.",
    duration: "A half-day or evening, depending on the ticket selected",
    participation: "Self-directed thermal bathing with architectural interest",
    access:
      "Reserve thermal-spa admission directly with Rogner Bad Blumau and wait for confirmation. Check the ticket’s arrival deadline and current facility access. A hotel stay and treatments are separate. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_admission",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.blumau.com/en/our-services/thermal-spa-reservation.html",
      sources: [
        {
          title: "Rogner Bad Blumau: thermal reservation",
          url: "https://www.blumau.com/en/our-services/thermal-spa-reservation.html",
          note: "Day and evening access, confirmation and arrival deadlines.",
        },
        {
          title: "Rogner Bad Blumau: architecture",
          url: "https://www.blumau.com/en/arrive-and-discover/architecture.html",
          note: "Hundertwasser’s design and the spatial organisation.",
        },
        {
          title: "Bad Blumau tourism: spa access",
          url: "https://www.bad-blumau.com/en/betriebe-angebote/thermen/thermenpreise25/",
          note: "Local destination corroboration and opening information.",
        },
      ],
    },
  },
  {
    id: "kingston-tuff-gong-studio",
    slug: "follow-a-record-from-room-to-groove-in-kingston",
    title: "Follow a record from room to groove in Kingston",
    field: "learn",
    country: "Jamaica",
    countrySlug: "jamaica",
    regionSlug: "kingston",
    place: "Kingston, Tuff Gong International",
    summary:
      "At Tuff Gong, a familiar recording gains a physical route through rehearsal, studio work and record production. Visit the rooms and ask how music becomes something people can carry away.",
    kernel:
      "Listen for the transition between stages. What happens before a performance reaches the recording room, what can an engineer change and how does a recording become a physical disc? Ask the guide to connect one piece of equipment with its job. A microphone or pressing machine becomes more interesting when you can place it in the sequence. Later, listen again to a record you know and consider the work that sits between the performance and your speakers.",
    rootedness:
      "Tuff Gong’s place in Kingston’s music history comes through Bob Marley’s company and the recording infrastructure around it. The current facility is on Marcus Garvey Drive, distinct from the Bob Marley Museum at Hope Road. The public Making of the Music tour is a visitor introduction to that working context. It is not admission to a recording session, a musician meeting or permission to use studio equipment independently.",
    shift: "Hear a record as the result of a process as well as a performance.",
    humanReturn:
      "A more tangible connection to Kingston’s recorded music and the people and equipment behind it.",
    responsibility:
      "The official page gives conflicting durations of 45 and 60 minutes, so allow about an hour and confirm the booked slot. It describes some steps despite an accessibility statement, so discuss your exact needs directly. Confirm tour language and photography rules. The advertised weekly schedule excludes Sundays and some holidays. A machine operating or an artist recording is not guaranteed.",
    evidence:
      "The public tour page documents the visitor route and booking. Tuff Gong’s own history distinguishes the current facility from the museum address. EA has not attended or verified daily production. The duration discrepancy is retained openly rather than resolved by guesswork.",
    duration:
      "Approximately 45 to 60 minutes, to be confirmed with the operator",
    participation: "Guided music-production and studio-history visit",
    access:
      "Book Making of the Music through the official Bob Marley Museum tour page and confirm the meeting point at Tuff Gong, 220 Marcus Garvey Drive. Do not travel to Hope Road by default. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.bobmarleymuseum.com/tuff-gong-studio-tour/",
      sources: [
        {
          title: "Bob Marley Museum: Tuff Gong tour",
          url: "https://www.bobmarleymuseum.com/tuff-gong-studio-tour/",
          note: "Public tour, booking, itinerary and conflicting duration statements.",
        },
        {
          title: "Tuff Gong: history and location",
          url: "https://tuffgong.com/",
          note: "Current Marcus Garvey Drive facility and distinction from the museum.",
        },
      ],
    },
  },
  {
    id: "nashville-rca-studio-b",
    slug: "hear-nashville-through-a-recording-room",
    title: "Hear Nashville through a recording room",
    field: "learn",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "nashville",
    place: "Nashville, Historic RCA Studio B",
    summary:
      "Inside RCA Studio B, the room becomes part of the music story. Join the guided visit and connect familiar recordings with the space where musicians worked.",
    kernel:
      "Look at the distances between instruments, microphones and the control area. Ask the guide how the room was used, then listen to any recordings played on the tour with that arrangement in mind. A song you know may acquire a new sense of scale. Instead of collecting famous names, choose one detail about the recording process to remember. It gives you something to listen for later, when the tour has ended.",
    rootedness:
      "Historic RCA Studio B is part of Nashville’s recorded-music landscape, associated with artists including Elvis Presley, Chet Atkins and Roy Orbison. The Country Music Hall of Fame and Museum operates the public tour. A studio-history visit complements the city’s live venues without duplicating a concert: here the encounter is with the making and preservation of recorded sound. It is not a current recording appointment or a promise of live performance.",
    shift: "Give a familiar recording a room, a scale and a working context.",
    humanReturn:
      "A different way to listen to Nashville’s music before spending an evening in a live venue.",
    responsibility:
      "Tours depart from the Country Music Hall of Fame and Museum, not from a self-arranged arrival at the studio. Transport is included and the operator asks visitors to arrive fifteen minutes early. Check accessibility for both the vehicle and studio, age suitability, language and photography rules directly. Keep clear of instruments and controls unless invited. Admission does not include playing the studio piano.",
    evidence:
      "The museum confirms the guided tour, departure point and combined-admission requirement. Its studio page supplies historical context. EA has not taken the tour or assessed the interpretation. The archival room photograph is by Doug Force, published under a Creative Commons licence. It does not establish today’s room arrangement.",
    duration:
      "Confirm the tour’s total duration when booking, allowing additional time for the museum",
    participation: "Guided historic recording-studio visit",
    access:
      "Reserve Studio B with Country Music Hall of Fame and Museum admission, which is required for this tour. The published schedule normally runs daily between 10:00 and 15:00. Follow the confirmation for departure. No EA booking or partnership.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-01",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.countrymusichalloffame.org/experiences/studio-b/tour-studio-b",
      sources: [
        {
          title: "Country Music Hall of Fame: tour Studio B",
          url: "https://www.countrymusichalloffame.org/experiences/studio-b/tour-studio-b",
          note: "Departure, included transport, advance booking and required museum admission.",
        },
        {
          title: "Country Music Hall of Fame: Historic RCA Studio B",
          url: "https://www.countrymusichalloffame.org/experiences/studio-b",
          note: "Studio context and official public visitor offer.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch62: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
