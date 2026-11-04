import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "lima-central-ecosystems-menu",
    slug: "lima-central-ecosystems-menu",
    title: "Taste Peru by ecosystem at a table in Lima",
    place: "Lima, Barranco",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    field: "taste",
    summary:
      "At Central in Barranco, the kitchen gives each part of the tasting menu an ecosystem rather than a single star ingredient. The sequence makes altitude and geography part of dinner.",
    rootedness:
      "At Central in Barranco, the kitchen gives each part of the tasting menu an ecosystem rather than a single star ingredient. The sequence makes altitude and geography part of dinner.",
    kernel:
      "Follow one ingredient across the meal and ask how its preparation changes with its setting. You leave with a question to take to a market or another table in Lima.",
    access:
      "Reserve through Central and select the tasting menu itself. The separate immersion formats have their own itinerary and availability. Check the live calendar, price and dietary policy before committing.",
    duration: "Several hours, depending on the menu.",
    participation:
      "Seated tasting menu with explanations from the restaurant team.",
    responsibility:
      "Flag dietary needs before paying and check what the kitchen can accommodate. The archive photograph shows the restaurant’s former Miraflores kitchen. The current restaurant is in Barranco.",
    shift:
      "You leave with a question to take to a market or another table in Lima.",
    humanReturn: "A flavour you can connect to a place or a process.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://centralrestaurante.com.pe/reservations",
      sources: [
        {
          title: "Central reservations and tasting menus",
          url: "https://centralrestaurante.com.pe/reservations",
          note: "Published dining formats, menu scope and official booking route.",
        },
        {
          title: "Central’s research initiative",
          url: "https://materiniciativa.com/",
          note: "Context for the ingredients and landscape research connected to the restaurant.",
        },
      ],
    },
  },
  {
    id: "yoichi-nikka-coal-fired-stills",
    slug: "yoichi-nikka-coal-fired-stills",
    title: "Follow the heat to the whisky stills in Yoichi",
    place: "Yoichi, Hokkaido",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "hokkaido",
    field: "taste",
    summary:
      "Nikka’s Yoichi site follows whisky from malt to still and warehouse. The coal-fired still house gives a concrete starting point for understanding why the distillery describes its process differently from many newer sites.",
    rootedness:
      "Nikka’s Yoichi site follows whisky from malt to still and warehouse. The coal-fired still house gives a concrete starting point for understanding why the distillery describes its process differently from many newer sites.",
    kernel:
      "Look at where the fire meets the copper before reaching the tasting hall. A dram has a production history as well as a flavour.",
    access:
      "Use Nikka’s tour reservation page. The guided tour is in Japanese, and the national tourism office lists an English audio guide. The museum, restaurant and shop have separate access arrangements. Equipment may be idle during maintenance.",
    duration: "About one hour for the guided route.",
    participation:
      "Guided factory-site visit with tasting subject to the operator’s rules.",
    responsibility:
      "Anyone driving, under the local drinking age or avoiding alcohol should follow the facility’s non-alcoholic options and tasting rules.",
    shift: "A dram has a production history as well as a flavour.",
    humanReturn: "A flavour you can connect to a place or a process.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://reserva.be/nikkayoichi/",
      sources: [
        {
          title: "Yoichi tour reservation",
          url: "https://reserva.be/nikkayoichi/",
          note: "Reservation and operating conditions for the guided visit.",
        },
        {
          title: "Nikka’s distillery facilities",
          url: "https://www.nikka.com/en/distilleries/yoichi/visit/guide/",
          note: "Describes the still house, access boundaries and tasting hall.",
        },
        {
          title: "Japan National Tourism Organization distillery guide",
          url: "https://www.japan.travel/en/spot/1928/",
          note: "Provides regional context and explains the English audio guide.",
        },
      ],
    },
  },
  {
    id: "stockholm-frantzen-house-menu",
    slug: "stockholm-frantzen-house-menu",
    title: "Follow a tasting menu through a Stockholm townhouse",
    place: "Stockholm, Norrmalm",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    field: "taste",
    summary:
      "At Frantzén, the sequence through a Stockholm townhouse is part of the meal. Start by noticing how a change of room changes what you can see and hear from the kitchen.",
    rootedness:
      "At Frantzén, the sequence through a Stockholm townhouse is part of the meal. Start by noticing how a change of room changes what you can see and hear from the kitchen.",
    kernel:
      "Pay attention when the focus moves from a conversation to a plate. The progression makes the choreography of a small restaurant easier to read.",
    access:
      "Use the restaurant’s live reservation calendar for price, available sittings and dietary policy. The menu changes and the restaurant may release tables in batches.",
    duration: "Allow the evening.",
    participation:
      "Seated tasting menu with movement between parts of the house.",
    responsibility:
      "Confirm allergens, cancellation conditions and physical access before booking. The archive photograph records an earlier service at the townhouse.",
    shift:
      "The progression makes the choreography of a small restaurant easier to read.",
    humanReturn: "A flavour you can connect to a place or a process.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.visitstockholm.se/o/frantzen/",
      sources: [
        {
          title: "Visit Stockholm restaurant listing",
          url: "https://www.visitstockholm.se/o/frantzen/",
          note: "City visitor authority listing with the current address and link to the restaurant’s reservations.",
        },
        {
          title: "Michelin Guide Stockholm",
          url: "https://guide.michelin.com/en/stockholm-region/stockholm/restaurant/frantzen",
          note: "Context on the townhouse and sequence of the meal.",
        },
      ],
    },
  },
  {
    id: "hong-kong-mplus-everyday-design",
    slug: "hong-kong-mplus-everyday-design",
    title: "Look at everyday design twice at M+",
    place: "Hong Kong, West Kowloon",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "kowloon",
    field: "witness",
    summary:
      "At M+, the Design Ah! exhibition uses familiar objects, shapes and sounds to ask how attention works. Start with something you already recognise and see what changes when the museum isolates one part of it.",
    rootedness:
      "At M+, the Design Ah! exhibition uses familiar objects, shapes and sounds to ask how attention works. Start with something you already recognise and see what changes when the museum isolates one part of it.",
    kernel:
      "Pick one installation that turns an ordinary action into a puzzle. Carry its question out into the streets of Hong Kong.",
    access:
      "Check the exhibition page for its current run and choose the ticket that includes this gallery. Admission to other exhibitions and the cinema follows separate rules.",
    duration: "Allow 60 to 90 minutes for the exhibition.",
    participation:
      "Self-paced gallery visit with participatory installations where indicated.",
    responsibility:
      "Follow the gallery’s prompts about what may be touched. Confirm current ticket coverage before choosing a time.",
    shift: "Carry its question out into the streets of Hong Kong.",
    humanReturn: "One detail you may notice sooner in the next gallery.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-09",
      accessUrl:
        "https://www.mplus.org.hk/en/exhibitions/design-ah-experience-the-wonder-of-everyday-design/",
      sources: [
        {
          title: "Design Ah! at M+",
          url: "https://www.mplus.org.hk/en/exhibitions/design-ah-experience-the-wonder-of-everyday-design/",
          note: "Exhibition dates, admission and interactive works.",
        },
        {
          title: "M+ visitor information",
          url: "https://www.mplus.org.hk/en/plan-your-visit/",
          note: "Opening, access and ticket information.",
        },
      ],
    },
  },
  {
    id: "tokyo-mori-mariko-mori-all-that-shines",
    slug: "tokyo-mori-mariko-mori-all-that-shines",
    title: "Let Mariko Mori change the pace of a Tokyo gallery",
    place: "Tokyo, Roppongi",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    field: "witness",
    summary:
      "Mariko Mori’s exhibition at Mori Art Museum brings early work and later installations into the same visit. Give yourself time with one work where the light makes distance difficult to judge.",
    rootedness:
      "Mariko Mori’s exhibition at Mori Art Museum brings early work and later installations into the same visit. Give yourself time with one work where the light makes distance difficult to judge.",
    kernel:
      "Walk a little farther back and see whether the work reads differently. The gallery rewards the time it takes for an image to change as you move.",
    access:
      "Book through Mori Art Museum. All That Shines is listed from 31 October 2026 to 28 March 2027. Check Tuesday closing and special dates. Tokyo City View has its own ticket or combination option.",
    duration: "Allow 60 to 90 minutes.",
    participation: "Self-guided exhibition viewing.",
    responsibility:
      "Check room-specific photography rules and exhibition access information. The photograph shows the museum entrance.",
    shift:
      "The gallery rewards the time it takes for an image to change as you move.",
    humanReturn: "One detail you may notice sooner in the next gallery.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.mori.art.museum/en/exhibitions/marikomori/index.html",
      sources: [
        {
          title: "Mariko Mori: All That Shines",
          url: "https://www.mori.art.museum/en/exhibitions/marikomori/index.html",
          note: "Exhibition content and scheduled dates.",
        },
        {
          title: "Mori Art Museum visitor information",
          url: "https://art-view.roppongihills.com/en/info/",
          note: "Entry, access and venue information.",
        },
      ],
    },
  },
  {
    id: "riehen-beyeler-look-again",
    slug: "riehen-beyeler-look-again",
    title: "Read a painting against the garden light in Riehen",
    place: "Riehen, Basel",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "basel",
    field: "witness",
    summary:
      "At Fondation Beyeler, Renzo Piano’s low gallery building puts windows and garden edges close to rooms for painting. Pick one room where the view changes how long you want to stay.",
    rootedness:
      "At Fondation Beyeler, Renzo Piano’s low gallery building puts windows and garden edges close to rooms for painting. Pick one room where the view changes how long you want to stay.",
    kernel:
      "Return to the first artwork after looking out to the grounds. Observe whether the light outside has changed the way you read its colour.",
    access:
      "Check the current exhibition listing and book admission if useful. The Beyeler collection rotates and a specific painting, garden installation or expansion area may be unavailable.",
    duration: "About one to two hours.",
    participation:
      "Independent museum visit with optional separately listed tours.",
    responsibility:
      "Use the institution’s current access information and room rules. Let quieter galleries stay quiet.",
    shift:
      "Observe whether the light outside has changed the way you read its colour.",
    humanReturn: "One detail you may notice sooner in the next gallery.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.fondationbeyeler.ch/en/visit",
      sources: [
        {
          title: "Fondation Beyeler visit",
          url: "https://www.fondationbeyeler.ch/en/visit",
          note: "Museum location, admission and practical details.",
        },
        {
          title: "Current exhibitions and collection",
          url: "https://www.fondationbeyeler.ch/en/exhibitions",
          note: "Shows rotating collection and temporary exhibitions.",
        },
      ],
    },
  },
  {
    id: "doha-national-museum-desert-rose",
    slug: "doha-national-museum-desert-rose",
    title: "Follow a desert rose into Doha’s national museum",
    place: "Doha, Old Salata",
    country: "Qatar",
    countrySlug: "qatar",
    regionSlug: "doha",
    field: "witness",
    summary:
      "The National Museum of Qatar wraps disc-shaped galleries around an older palace. Start by noticing how the changing slopes and sightlines alter the story the museum tells about land, coast and settlement.",
    rootedness:
      "The National Museum of Qatar wraps disc-shaped galleries around an older palace. Start by noticing how the changing slopes and sightlines alter the story the museum tells about land, coast and settlement.",
    kernel:
      "After walking the route, look back towards the older palace and consider what the new building preserves in view.",
    access:
      "Check the National Museum’s list of open galleries and admission before visiting. Some galleries can be closed for works.",
    duration: "About two hours for a selective visit.",
    participation: "Independent museum and architectural visit.",
    responsibility:
      "Read the galleries as the museum’s institutional account. Follow posted accessibility and photography guidance.",
    shift:
      "After walking the route, look back towards the older palace and consider what the new building preserves in view.",
    humanReturn: "One detail you may notice sooner in the next gallery.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://nmoq.org.qa/en/visit/",
      sources: [
        {
          title: "National Museum of Qatar visitor information",
          url: "https://nmoq.org.qa/en/visit/",
          note: "Current admission, address and opening details.",
        },
        {
          title: "National Museum galleries",
          url: "https://nmoq.org.qa/en/visit/galleries/",
          note: "Permanent rooms, themes and notices about unavailable galleries.",
        },
      ],
    },
  },
  {
    id: "milan-triennale-italian-design",
    slug: "milan-triennale-italian-design",
    title: "Read Italian design through a chair in Milan",
    place: "Milan, Parco Sempione",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "milan",
    field: "learn",
    summary:
      "Triennale’s Museo del Design Italiano sets familiar objects beside the conditions that made them possible. A chair can lead from a household habit to the choices of a factory.",
    rootedness:
      "Triennale’s Museo del Design Italiano sets familiar objects beside the conditions that made them possible. A chair can lead from a household habit to the choices of a factory.",
    kernel:
      "Choose one object from two different decades. Ask which part belongs to its material and which to a new idea of everyday life.",
    access:
      "Use the Museo del Design Italiano listing for current admission and route. Temporary exhibitions, guided visits and events may need separate tickets.",
    duration: "About an hour for the permanent route.",
    participation: "Self-paced museum visit.",
    responsibility:
      "The collection rotates. Check current accessible route options and observe the display rules.",
    shift:
      "Ask which part belongs to its material and which to a new idea of everyday life.",
    humanReturn: "A design decision you can recognise somewhere else.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://triennale.org/eventi/museo-design",
      sources: [
        {
          title: "Museo del Design Italiano",
          url: "https://triennale.org/eventi/museo-design",
          note: "Documents the museum collection route and current listing.",
        },
        {
          title: "Triennale visitor information",
          url: "https://triennale.org/visita/organizza-la-tua-visita",
          note: "Venue, admission and practical options.",
        },
      ],
    },
  },
  {
    id: "dessau-bauhaus-building-workshop-wing",
    slug: "dessau-bauhaus-building-workshop-wing",
    title: "Read the Bauhaus through its glass workshop wing",
    place: "Dessau-Roßlau, Saxony-Anhalt",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "dessau",
    field: "learn",
    summary:
      "At the Bauhaus Building in Dessau, the glass workshop wing makes the relationship between a classroom and a place of production visible from the street. Walk around before choosing a room to examine inside.",
    rootedness:
      "At the Bauhaus Building in Dessau, the glass workshop wing makes the relationship between a classroom and a place of production visible from the street. Walk around before choosing a room to examine inside.",
    kernel:
      "Compare the view through the workshop glass with the street-facing walls elsewhere on the building. A single complex holds several answers to who needs light and why.",
    access:
      "Check the Foundation’s building admission and optional tour schedule. From November to February public tours are listed in German. The current seasonal timetable places English public tours in March to October.",
    duration: "Allow an hour to 90 minutes.",
    participation: "Architecture visit with an optional booked guided tour.",
    responsibility:
      "Admission and tour are separate items. Check the Foundation’s access information for the rooms you intend to enter.",
    shift: "A single complex holds several answers to who needs light and why.",
    humanReturn: "A design decision you can recognise somewhere else.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://bauhaus-dessau.de/en/visit/guided-tours/",
      sources: [
        {
          title: "Bauhaus Dessau guided tours",
          url: "https://bauhaus-dessau.de/en/visit/guided-tours/",
          note: "Tour times, languages and seasonal differences.",
        },
        {
          title: "Dessau world heritage visitor information",
          url: "https://www.visitdessau.com/en/world-heritage/bauhaus/",
          note: "Individual entry and the location of the separate Bauhaus sites.",
        },
      ],
    },
  },
  {
    id: "aarhus-dokk1-public-library-tour",
    slug: "aarhus-dokk1-public-library-tour",
    title: "See what a harbour library does beyond books",
    place: "Aarhus, Harbour",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "aarhus",
    field: "learn",
    summary:
      "Dokk1 puts a public library, citizen services and places to spend an afternoon under one roof at Aarhus harbour. The building makes a useful comparison between borrowing a book and having somewhere to be.",
    rootedness:
      "Dokk1 puts a public library, citizen services and places to spend an afternoon under one roof at Aarhus harbour. The building makes a useful comparison between borrowing a book and having somewhere to be.",
    kernel:
      "Follow the shift between the reading areas and the public meeting spaces. The important thing to look for is what a resident can do without making an appointment.",
    access:
      "Explore the public library during opening hours. The library also lists guided tours for individuals and small groups in Danish or English. Reserve only when a date and language are shown.",
    duration: "About an hour for the tour or a short independent visit.",
    participation:
      "Public building visit, optionally with a booked orientation tour.",
    responsibility:
      "Respect readers and service users. Check the cancellation notice for tours and separate hours for citizen services.",
    shift:
      "The important thing to look for is what a resident can do without making an appointment.",
    humanReturn: "A design decision you can recognise somewhere else.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.aakb.dk/hovedbiblioteket/rundvisning-pa-dokk1",
      sources: [
        {
          title: "Aarhus Libraries public tours",
          url: "https://www.aakb.dk/hovedbiblioteket/rundvisning-pa-dokk1",
          note: "Individual tours, language, length and meeting point.",
        },
        {
          title: "Dokk1 visitor information",
          url: "https://www.dokk1.dk/english",
          note: "Opening and building functions for an independent visit.",
        },
      ],
    },
  },
  {
    id: "chiang-mai-naenna-backstrap-weaving",
    slug: "chiang-mai-naenna-backstrap-weaving",
    title: "Learn how a backstrap loom moves with the body",
    place: "Chiang Mai, Studio Naenna",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "chiang-mai",
    field: "make",
    summary:
      "Studio Naenna offers one-to-one instruction in Karen backstrap weaving with naturally dyed cotton. A portable loom makes the body part of the frame, so every change in posture alters the tension.",
    rootedness:
      "Studio Naenna offers one-to-one instruction in Karen backstrap weaving with naturally dyed cotton. A portable loom makes the body part of the frame, so every change in posture alters the tension.",
    kernel:
      "Begin with the relationship between your posture and the threads. Let the teacher show what the loom is doing before you worry about what the finished cloth looks like.",
    access:
      "The studio lists a five-day one-to-one weaving workshop by advance arrangement. Ask the studio for dates, teaching language and terms before making travel plans. The indigo harvest programme has a separate seasonal schedule.",
    duration: "Five days for the published weaving format.",
    participation:
      "One-to-one weaving with a teacher, subject to agreed dates.",
    responsibility:
      "Treat Karen weaving as a living practice. Ask before photographing the teacher or sharing any patterns and techniques.",
    shift:
      "Let the teacher show what the loom is doing before you worry about what the finished cloth looks like.",
    humanReturn: "One technique you can try again with your own materials.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-15",
      accessUrl: "https://studio-naenna.com/activities/",
      sources: [
        {
          title: "Studio Naenna activities",
          url: "https://studio-naenna.com/activities/",
          note: "Publishes the five-day one-to-one workshop and advance booking requirement.",
        },
        {
          title: "Studio Naenna weaving and dyeing processes",
          url: "https://studio-naenna.com/our-process/",
          note: "Documents the looms and natural-dye practice.",
        },
      ],
    },
  },
  {
    id: "hampton-court-rsn-embroidery-day",
    slug: "hampton-court-rsn-embroidery-day",
    title: "Build a small pattern with a needle at Hampton Court",
    place: "East Molesey, Hampton Court Palace",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    field: "make",
    summary:
      "The Royal School of Needlework runs in-person short classes at Hampton Court Palace. Choose a beginner design and spend the session seeing what different stitches do to light and texture.",
    rootedness:
      "The Royal School of Needlework runs in-person short classes at Hampton Court Palace. Choose a beginner design and spend the session seeing what different stitches do to light and texture.",
    kernel:
      "Use the first row to compare stitch direction. A thread can give the same patch of cloth a different appearance without changing colour.",
    access:
      "Check the school’s in-person Hampton Court listings, which include an introductory goldwork class in its November programme. Check the product for kit, times and meeting point. Palace admission is separate unless expressly included. No EA booking.",
    duration: "Allow a day for a day class. Confirm the exact session length.",
    participation: "Tutor-led embroidery with a small practice piece.",
    responsibility:
      "Ask before photographing anyone else’s work. The school restricts photography of its collection and may give venue-specific arrival instructions.",
    shift:
      "A thread can give the same patch of cloth a different appearance without changing colour.",
    humanReturn: "One technique you can try again with your own materials.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-12",
      accessUrl: "https://rsn.org.uk/blogs/news/whats-on-this-autumn",
      sources: [
        {
          title: "Royal School of Needlework in-person courses",
          url: "https://rsn.org.uk/blogs/news/whats-on-this-autumn",
          note: "Published November and December Hampton Court short courses and their dates.",
        },
        {
          title: "Royal School of Needlework course FAQ",
          url: "https://rsn.org.uk/pages/faqs",
          note: "Venue details, class policies and photography rules.",
        },
      ],
    },
  },
  {
    id: "paris-lecole-gouache-jewelry-light",
    slug: "paris-lecole-gouache-jewelry-light",
    title: "Paint the light that makes a jewel look three-dimensional",
    place: "Paris, Grands Boulevards",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    field: "make",
    summary:
      "A gouache class at L’École des Arts Joailliers looks at how jewellery designers turn light into decisions on paper. A pale edge and a small patch of reflected colour can suggest the shape of a stone.",
    rootedness:
      "A gouache class at L’École des Arts Joailliers looks at how jewellery designers turn light into decisions on paper. A pale edge and a small patch of reflected colour can suggest the shape of a stone.",
    kernel:
      "Lay out a shadow and a highlight separately, then see which part makes the form lift off the page. This is an exercise in seeing before it becomes an exercise in painting.",
    access:
      "Choose an in-person Paris session of Gouaché in High Jewelry 1: The Light. Confirm the venue, teaching language and live calendar before making plans. No EA booking.",
    duration: "Three hours for the published introductory class.",
    participation:
      "Practical painting tuition. The outcome is a study on paper.",
    responsibility:
      "Check age requirements and class language. The historical building photograph shows the Paris venue, not a classroom.",
    shift:
      "This is an exercise in seeing before it becomes an exercise in painting.",
    humanReturn: "One technique you can try again with your own materials.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-15",
      accessUrl:
        "https://www.lecolevancleefarpels.com/fr/en/savoir-faire/gouache-high-jewelry-1-light-3h",
      sources: [
        {
          title: "Gouache course at L’École",
          url: "https://www.lecolevancleefarpels.com/fr/en/savoir-faire/gouache-high-jewelry-1-light-3h",
          note: "Defines the three-hour course and learning objectives.",
        },
        {
          title: "A participant’s account of the Paris class",
          url: "https://all-i-c.com/ecole-de-van-cleef-arpels-paris/",
          note: "First-person context on the practical approach and venue.",
        },
      ],
    },
  },
  {
    id: "tokyo-spo-dori-batting-cages",
    slug: "tokyo-spo-dori-batting-cages",
    title: "Find your timing in a Tokyo batting cage",
    place: "Tokyo, Suidobashi",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    field: "play",
    summary:
      "Spo-Dori at Tokyo Dome City offers batting and pitching in separate indoor lanes. It is a short, ordinary way to take a swing in a city where the game has a large public life.",
    rootedness:
      "Spo-Dori at Tokyo Dome City offers batting and pitching in separate indoor lanes. It is a short, ordinary way to take a swing in a city where the game has a large public life.",
    kernel:
      "Start slowly. Listen for the machine’s rhythm and notice whether you are moving too early or reacting too late.",
    access:
      "Use Tokyo Dome City’s current hours and fees for batting and pitching. Ask at the counter which machine setting and equipment suit a beginner.",
    duration: "About 30 to 45 minutes, depending on queues.",
    participation: "Self-directed indoor batting or pitching.",
    responsibility:
      "Use the facility’s equipment and keep clear of moving machines. Check youth rules and follow staff instructions.",
    shift:
      "Listen for the machine’s rhythm and notice whether you are moving too early or reacting too late.",
    humanReturn: "A small adjustment you can repeat on your next turn.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.tokyo-dome.co.jp/en/spo-dori/?lang=en",
      sources: [
        {
          title: "Spo-Dori at Tokyo Dome City",
          url: "https://www.tokyo-dome.co.jp/en/spo-dori/?lang=en",
          note: "Indoor facility overview, location and activities.",
        },
        {
          title: "Spo-Dori hours and fees",
          url: "https://www.tokyo-dome.co.jp/en/spo-dori/information/?lang=en",
          note: "Operating hours and practical fee information.",
        },
      ],
    },
  },
  {
    id: "barcelona-port-olimpic-light-sailing",
    slug: "barcelona-port-olimpic-light-sailing",
    title: "Read Barcelona’s skyline from a small sailboat",
    place: "Barcelona, Port Olímpic",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    field: "move",
    summary:
      "A municipal sailing centre takes small boats along Barcelona’s coast. Looking back from the water puts beaches, towers and the harbour entrance on a single line.",
    rootedness:
      "A municipal sailing centre takes small boats along Barcelona’s coast. Looking back from the water puts beaches, towers and the harbour entrance on a single line.",
    kernel:
      "Watch what the instructor does as the boat changes direction. The city has a new scale when each turn depends on the wind.",
    access:
      "Follow the municipal listing to reserve the two-hour outing with Centre Municipal de Vela. An instructor accompanies the boat and guides it. Confirm departure, conditions and any swimming requirement with the centre.",
    duration: "Two hours, subject to weather.",
    participation:
      "Instructor-accompanied coastal sailing. Handling the boat is at the instructor’s discretion.",
    responsibility:
      "Follow the lifejacket and weather rules. Plan for cancellation or a changed route if sea conditions require it.",
    shift: "The city has a new scale when each turn depends on the wind.",
    humanReturn: "A part of the waterfront you can recognise from a new angle.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://agenda500.barcelona.cat/en/detall/activitats-nautiques-al-port-olimpic-passeig-en-veler_99400354408.html",
      sources: [
        {
          title: "Barcelona municipal sailing listing",
          url: "https://agenda500.barcelona.cat/en/detall/activitats-nautiques-al-port-olimpic-passeig-en-veler_99400354408.html",
          note: "Documents the two-hour instructor-accompanied outing and booking contact.",
        },
        {
          title: "Centre Municipal de Vela",
          url: "https://www.velabarcelona.com/",
          note: "Operator information and contact for current departures.",
        },
      ],
    },
  },
  {
    id: "stockholm-radhuset-underground-boule",
    slug: "stockholm-radhuset-underground-boule",
    title: "Play pétanque beneath a Stockholm metro station",
    place: "Stockholm, Kungsholmen",
    country: "Sweden",
    countrySlug: "sweden",
    regionSlug: "stockholm",
    field: "play",
    summary:
      "Under Rådhuset, a gravel court and a small target ball turn an old station setting into somewhere to spend an evening. The sport is French, and this is Stockholm’s indoor adaptation.",
    rootedness:
      "Under Rådhuset, a gravel court and a small target ball turn an old station setting into somewhere to spend an evening. The sport is French, and this is Stockholm’s indoor adaptation.",
    kernel:
      "Try a low roll before attempting a high throw. The gravel changes what happens after the ball lands, which is half of what there is to learn.",
    access:
      "Book a court at the Rådhuset branch of Boulebar. Its own page gives hours, court reservations and packages. Food and instruction depend on the option you select.",
    duration: "Allow about an hour for a social game. Check the booked slot.",
    participation:
      "Self-directed social pétanque, with instruction in selected packages.",
    responsibility:
      "Check minimum party size and mobility needs when booking. Keep the lane clear before anyone throws.",
    shift:
      "The gravel changes what happens after the ball lands, which is half of what there is to learn.",
    humanReturn: "A small adjustment you can repeat on your next turn.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.boulebar.se/sthlm-radhuset",
      sources: [
        {
          title: "Boulebar Rådhuset",
          url: "https://www.boulebar.se/sthlm-radhuset",
          note: "Branch-specific address, hours, court booking and packages.",
        },
        {
          title: "Boulebar booking",
          url: "https://ob.boulebar.se/online-booking",
          note: "Operator’s booking route for the available options.",
        },
      ],
    },
  },
  {
    id: "panama-city-metropolitan-park-cedro",
    slug: "panama-city-metropolitan-park-cedro",
    title: "Walk from Panama City forest to a skyline lookout",
    place: "Panama City, Parque Natural Metropolitano",
    country: "Panama",
    countrySlug: "panama",
    regionSlug: "panama-city",
    field: "nature",
    summary:
      "The Mono Tití trail climbs to Cerro Cedro inside Panama City’s Metropolitan Natural Park. From the lookout, forest canopy and city buildings sit surprisingly close together.",
    rootedness:
      "The Mono Tití trail climbs to Cerro Cedro inside Panama City’s Metropolitan Natural Park. From the lookout, forest canopy and city buildings sit surprisingly close together.",
    kernel:
      "Walk the shaded stretch slowly and save the wide view for the top. Let the contrast between the city noise and the forest make the point.",
    access:
      "Enter at the park visitor centre and check its current last-entry time, trail notices and tariffs. The park describes Mono Tití as a moderate 1.1-kilometre trail.",
    duration:
      "About one hour on the trail, plus time at the entrance and lookout.",
    participation: "Self-guided signed trail with a moderate climb.",
    responsibility:
      "Bring water, use the signed route and leave animals room. Heavy rain or alerts can change access.",
    shift:
      "Let the contrast between the city noise and the forest make the point.",
    humanReturn: "A way to notice the city’s edge at walking pace.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://parquemetropolitano.org/mono-titi/",
      sources: [
        {
          title: "Mono Tití trail",
          url: "https://parquemetropolitano.org/mono-titi/",
          note: "Trail length, difficulty, timing and lookout information.",
        },
        {
          title: "Metropolitan Natural Park visitor information",
          url: "https://parquemetropolitano.org/atractivos/",
          note: "Public trail access and park context.",
        },
      ],
    },
  },
  {
    id: "buenos-aires-costanera-sur-wetland",
    slug: "buenos-aires-costanera-sur-wetland",
    title: "Follow the reed beds to the edge of Buenos Aires",
    place: "Buenos Aires, Costanera Sur",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    field: "nature",
    summary:
      "The Costanera Sur reserve puts reed beds and wetland paths within walking distance of Puerto Madero. Look across the water and back towards the buildings to see how near the two environments are.",
    rootedness:
      "The Costanera Sur reserve puts reed beds and wetland paths within walking distance of Puerto Madero. Look across the water and back towards the buildings to see how near the two environments are.",
    kernel:
      "Choose a short signed route from one gate and stop at a lagoon or water-facing opening. Scan the reed edges for movement before looking farther out.",
    access:
      "Check the city’s current opening and weather notices. The published summer timetable runs November to March, Tuesday through Sunday and holidays, 08:00 to 19:00. Gates may close early in bad weather.",
    duration: "Allow one to two hours for a short out-and-back.",
    participation: "Self-guided wetland walk on public trails.",
    responsibility:
      "Stay out of restricted areas, give wildlife space and bring water. An individual species sighting is never assured.",
    shift: "Scan the reed edges for movement before looking farther out.",
    humanReturn: "A way to notice the city’s edge at walking pace.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/reservasecologicas/reserva-ecologica-costanera-sur",
      sources: [
        {
          title: "Costanera Sur reserve access",
          url: "https://buenosaires.gob.ar/gcaba_historico/vicejefatura/ambiente/reservasecologicas/reserva-ecologica-costanera-sur",
          note: "Seasonal hours, public gates and wetland context.",
        },
        {
          title: "Buenos Aires city visitor guide",
          url: "https://turismo.buenosaires.gob.ar/en/article/costanera-sur-ecological-reserve",
          note: "Documents the reserve’s setting and public walks.",
        },
      ],
    },
  },
  {
    id: "medellin-botanical-garden-orquideorama",
    slug: "medellin-botanical-garden-orquideorama",
    title: "Follow the shade beneath Medellín’s Orquideorama",
    place: "Medellín, Jardín Botánico",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "medellin",
    field: "nature",
    summary:
      "The Orquideorama’s timber modules make a second canopy inside Medellín’s botanical garden. On a warm day, it is a way to notice how the built roof and the planted garden each make shade.",
    rootedness:
      "The Orquideorama’s timber modules make a second canopy inside Medellín’s botanical garden. On a warm day, it is a way to notice how the built roof and the planted garden each make shade.",
    kernel:
      "Find a place where the roof gives way to a tree and look for the shift in light. Continue onto a public path to compare the change in temperature at your own pace.",
    access:
      "Use the garden’s current visitor page for public entry and any registration rules. Event set-up can restrict the Orquideorama and seasonal displays vary.",
    duration: "About an hour for a quiet garden circuit.",
    participation: "Independent walk through public garden areas.",
    responsibility:
      "Stay on the paths and keep to open areas. An orchid display or specific event is a separate visit.",
    shift:
      "Continue onto a public path to compare the change in temperature at your own pace.",
    humanReturn: "A way to notice the city’s edge at walking pace.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.botanicomedellin.org/vivenos/llegar-es-facil/horarios-de-visita/",
      sources: [
        {
          title: "Medellín Botanical Garden hours",
          url: "https://www.botanicomedellin.org/vivenos/llegar-es-facil/horarios-de-visita/",
          note: "Public access information and visiting times.",
        },
        {
          title: "Visit the botanical garden",
          url: "https://www.botanicomedellin.org/vivenos/",
          note: "Public experiences and changes to the visit.",
        },
      ],
    },
  },
  {
    id: "karuizawa-tombo-no-yu-forest-bath",
    slug: "karuizawa-tombo-no-yu-forest-bath",
    title: "Take a forest-edge bath in Karuizawa",
    place: "Karuizawa, Nagano",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "karuizawa",
    field: "restore",
    summary:
      "At Tombo no Yu, wood, stone and water link an indoor bath to a forest-facing outdoor one. The change in air is part of the visit.",
    rootedness:
      "At Tombo no Yu, wood, stone and water link an indoor bath to a forest-facing outdoor one. The change in air is part of the visit.",
    kernel:
      "Wash before entering and begin indoors. If you move to the outdoor bath, notice what changes when you can hear the trees and feel the air above the water.",
    access:
      "Public day admission is available without staying in the Hoshino area. Check the current hours, last admission and tattoo-cover policy on the Japanese or English facility page.",
    duration: "About 60 to 90 minutes.",
    participation: "Self-directed communal bathing in separate bathing areas.",
    responsibility:
      "Leave phones out of changing and bathing areas. Follow the published washing, towel and tattoo-cover rules.",
    shift:
      "If you move to the outdoor bath, notice what changes when you can hear the trees and feel the air above the water.",
    humanReturn: "A way to spend time in a place without filling every minute.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.hoshino-area.jp/en/tombo-no-yu/",
      sources: [
        {
          title: "Tombo no Yu visitor information",
          url: "https://www.hoshino-area.jp/en/tombo-no-yu/",
          note: "Day use, hours, privacy and bathing rules.",
        },
        {
          title: "Tombo no Yu Japanese facility guide",
          url: "https://www.hoshino-area.jp/tombo-no-yu/",
          note: "Japanese operating information and tattoo-cover conditions.",
        },
      ],
    },
  },
  {
    id: "fingal-peninsula-bath-house",
    slug: "fingal-peninsula-bath-house",
    title: "Follow the hillside pools above Fingal",
    place: "Fingal, Mornington Peninsula",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "mornington-peninsula",
    field: "restore",
    summary:
      "The Bath House at Peninsula Hot Springs puts different pools along a slope in Fingal. The setting shifts from sheltered water to an open view as you walk between them.",
    rootedness:
      "The Bath House at Peninsula Hot Springs puts different pools along a slope in Fingal. The setting shifts from sheltered water to an open view as you walk between them.",
    kernel:
      "Pick two pools and one place to sit. At the upper levels, see what the wind changes about a warm soak.",
    access:
      "Book the Bath House product for your date. Check its session terms, ages and rules for particular pools. Treatments and other areas have separate products.",
    duration: "Allow two to three hours, depending on the ticket.",
    participation:
      "Public bathing at your own pace, with steps between some pools.",
    responsibility:
      "Check whether your chosen pools suit your mobility needs and use the operator’s temperature, hydration and child-supervision advice.",
    shift: "At the upper levels, see what the wind changes about a warm soak.",
    humanReturn: "A way to spend time in a place without filling every minute.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.peninsulahotsprings.com/bathe/bath-house",
      sources: [
        {
          title: "Peninsula Hot Springs Bath House",
          url: "https://www.peninsulahotsprings.com/bathe/bath-house",
          note: "Public booking and the Bath House bathing areas.",
        },
        {
          title: "Peninsula Hot Springs terms",
          url: "https://www.peninsulahotsprings.com/terms-and-conditions",
          note: "Entry, guests and booking conditions.",
        },
      ],
    },
  },
  {
    id: "bogota-cumbia-house-live-stage",
    slug: "bogota-cumbia-house-live-stage",
    title: "Hear Colombian rhythms around a Bogotá table",
    place: "Bogotá, Usaquén",
    country: "Colombia",
    countrySlug: "colombia",
    regionSlug: "bogota",
    field: "gather",
    summary:
      "Cumbia House puts a stage alongside restaurant tables. The useful way into the room is to pick a programme by the sound you want to hear and check what kind of evening it actually is.",
    rootedness:
      "Cumbia House puts a stage alongside restaurant tables. The useful way into the room is to pick a programme by the sound you want to hear and check what kind of evening it actually is.",
    kernel:
      "Listen for when the rhythm shifts from the stage to the room. Different bills invite very different ways of paying attention.",
    access:
      "Use the public concerts calendar. Choose a named event or a listed live-music sitting and check cover, seating, age policy and whether food is included. Private hire is separate.",
    duration:
      "Set length and timing vary. Allow an evening for a dinner programme.",
    participation: "Seated audience or social dancing if the event invites it.",
    responsibility:
      "Follow the rules for the event you select. The photograph shows one of the venue’s rooms. Your event may take place in a different room.",
    shift: "Different bills invite very different ways of paying attention.",
    humanReturn: "A sound or a movement that recalls the room.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-13",
      accessUrl: "https://cumbiahouse.com/conciertos/",
      sources: [
        {
          title: "Cumbia House public concert calendar",
          url: "https://cumbiahouse.com/conciertos/",
          note: "Lists public performances and programme details.",
        },
        {
          title: "Cumbia House events",
          url: "https://cumbiahouse.com/eventos/",
          note: "Named event pages and access to booking links.",
        },
      ],
    },
  },
  {
    id: "ho-chi-minh-city-ao-show-bamboo",
    slug: "ho-chi-minh-city-ao-show-bamboo",
    title: "Watch bamboo become a stage in Saigon",
    place: "Ho Chi Minh City, District 1",
    country: "Vietnam",
    countrySlug: "vietnam",
    regionSlug: "ho-chi-minh-city",
    field: "gather",
    summary:
      "À Ố Show uses bamboo baskets and poles to move between village and city scenes. At the Saigon Opera House, the same objects are tools, scenery and instruments for movement.",
    rootedness:
      "À Ố Show uses bamboo baskets and poles to move between village and city scenes. At the Saigon Opera House, the same objects are tools, scenery and instruments for movement.",
    kernel:
      "Follow one basket through the performance. Notice how little needs to change for the object to become a boat, a frame or a place to stand.",
    access:
      "Select À Ố Show at the Saigon Opera House on Lune’s live calendar. Venue and programme vary by date. Check the age policy and how early you must arrive.",
    duration: "About an hour for the performance.",
    participation: "Seated audience for a contemporary circus production.",
    responsibility:
      "Follow the venue’s recording and arrival rules. The performance is a staged work with its own point of view.",
    shift:
      "Notice how little needs to change for the object to become a boat, a frame or a place to stand.",
    humanReturn: "A sound or a movement that recalls the room.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-11-30",
      accessUrl: "https://v2.luneproduction.com/ao-show",
      sources: [
        {
          title: "À Ố Show programme and calendar",
          url: "https://v2.luneproduction.com/ao-show",
          note: "Staged work, schedule and venue.",
        },
        {
          title: "Lune Production visitor terms",
          url: "https://v2.luneproduction.com/customer-service/terms-conditions",
          note: "Ticket use, entry and event conditions.",
        },
      ],
    },
  },
  {
    id: "oslo-bla-frank-znort-sunday",
    slug: "oslo-bla-frank-znort-sunday",
    title: "Catch Oslo’s Sunday shift from acoustic to electric",
    place: "Oslo, Akerselva",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    field: "gather",
    summary:
      "Frank Znort Quartet’s recurring Sunday at BLÅ gives Oslo a gathering that changes character as the day goes on. The difference between an early set and a later electric room is the way into it.",
    rootedness:
      "Frank Znort Quartet’s recurring Sunday at BLÅ gives Oslo a gathering that changes character as the day goes on. The difference between an early set and a later electric room is the way into it.",
    kernel:
      "Choose one set or leave time to return for another. Listen for what changes when the musicians and the audience move to a different part of the venue.",
    access:
      "Check BLÅ’s dated programme for the upcoming Sunday, timing, age and admission. The early set location can change with weather and venue decisions.",
    duration: "Allow an hour for one set or longer for both phases.",
    participation:
      "Live-music audience with room to move where the venue permits.",
    responsibility:
      "Respect the floor and the musicians’ space. Check late opening and age restrictions separately.",
    shift:
      "Listen for what changes when the musicians and the audience move to a different part of the venue.",
    humanReturn: "A sound or a movement that recalls the room.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-20",
      accessUrl: "https://www.blaaoslo.no/?p=535",
      sources: [
        {
          title: "BLÅ public programme",
          url: "https://www.blaaoslo.no/?p=535",
          note: "Upcoming Frank Znort Quartet Sundays at the venue.",
        },
        {
          title: "BLÅ programme notes for Frank Znort Quartet",
          url: "https://www.blaaoslo.no/events/frank-znort-quartet/IW8aMLZe26",
          note: "A dated example of the recurring Sunday programme and its two phases.",
        },
      ],
    },
  },
  {
    id: "cacheuta-termas-mendoza-spa",
    slug: "cacheuta-termas-mendoza-spa",
    title: "Spend a day in the stone pools at Cacheuta",
    place: "Cacheuta, Mendoza",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "mendoza",
    field: "restore",
    summary:
      "At the Hotel & Spa Termas Cacheuta, warm pools sit among stone and the landscape of the Mendoza River valley. The public day product gives you time to move slowly between water and dry ground.",
    rootedness:
      "At the Hotel & Spa Termas Cacheuta, warm pools sit among stone and the landscape of the Mendoza River valley. The public day product gives you time to move slowly between water and dry ground.",
    kernel:
      "Begin with a pool you can enter comfortably, then pick a place to sit and notice the terrain around the baths.",
    access:
      "Select a current TermaSpa day option. It is a different ticket from Parque Termal and an overnight stay. Confirm the age rule, inclusions and transfer arrangements for the exact option.",
    duration: "Allow a half or full day depending on the booking.",
    participation:
      "Self-paced thermal bathing within an advance-booked spa product.",
    responsibility:
      "Check temperatures, step access and rules for younger visitors. Choose only activities your ticket includes.",
    shift:
      "Begin with a pool you can enter comfortably, then pick a place to sit and notice the terrain around the baths.",
    humanReturn: "A way to spend time in a place without filling every minute.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://termascacheuta.com/todos-nuestros-servicios/",
      sources: [
        {
          title: "Termas Cacheuta day products",
          url: "https://termascacheuta.com/todos-nuestros-servicios/",
          note: "Distinguishes the TermaSpa day products from Parque Termal and hotel packages.",
        },
        {
          title: "Termas Cacheuta operator overview",
          url: "https://termascacheuta.com/",
          note: "Published spa and visitor information.",
        },
      ],
    },
  },
  {
    id: "minneapolis-mill-city-flour-tower",
    slug: "minneapolis-mill-city-flour-tower",
    title: "Ride through the floors of a Minneapolis flour mill",
    place: "Minneapolis, Mississippi riverfront",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "minneapolis",
    field: "learn",
    summary:
      "The Flour Tower at Mill City Museum turns an elevator into a way to read an industrial building. Each stop gives you one piece of how the former Washburn A Mill organised its work.",
    rootedness:
      "The Flour Tower at Mill City Museum turns an elevator into a way to read an industrial building. Each stop gives you one piece of how the former Washburn A Mill organised its work.",
    kernel:
      "On the way back outside, look at the river and ask which part of the work depended on what the water could do. The mill makes more sense when you place it back on the riverbank.",
    access:
      "Buy museum admission on arrival. Check the Flour Tower schedule at the desk and ask about seating or access if needed. The museum does not sell general admission in advance.",
    duration: "Allow 90 minutes for the tower and part of the museum.",
    participation: "Seated elevator show within an independent museum visit.",
    responsibility:
      "Use the current visit page to check the attraction’s status and accessibility. The press photograph shows the mill buildings on the river.",
    shift: "The mill makes more sense when you place it back on the riverbank.",
    humanReturn: "A design decision you can recognise somewhere else.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.mnhs.org/millcity",
      sources: [
        {
          title: "Mill City Museum",
          url: "https://www.mnhs.org/millcity",
          note: "Identifies the Flour Tower and other museum elements.",
        },
        {
          title: "Mill City Museum hours and admission",
          url: "https://www.mnhs.org/millcity/visit/hours",
          note: "Operating times and on-site ticketing.",
        },
      ],
    },
  },
  {
    id: "aarhus-godsbanen-open-ceramics-workshop",
    slug: "aarhus-godsbanen-open-ceramics-workshop",
    title: "Work clay in an old Aarhus freight yard",
    place: "Aarhus, Godsbanen",
    country: "Denmark",
    countrySlug: "denmark",
    regionSlug: "aarhus",
    field: "make",
    summary:
      "Godsbanen’s ceramics workshop puts clay, tools and a staff member in a shared room at a former freight site. You bring the project, and the workshop gives you a way to start it even if you have never worked clay.",
    rootedness:
      "Godsbanen’s ceramics workshop puts clay, tools and a staff member in a shared room at a former freight site. You bring the project, and the workshop gives you a way to start it even if you have never worked clay.",
    kernel:
      "Choose a small form you can finish at a bench. Ask how clay thickness affects the later firing before committing to a bigger shape.",
    access:
      "Reserve a ceramics bench on Godsbanen’s booking system. Materials and firing are separate from admission. Agree on glazing, collection and firing lead times before starting if you are only in town briefly.",
    duration:
      "Up to three hours in the published booking system, plus any later firing and collection.",
    participation:
      "Independent making with staff available to help. A taught class is a separate offer.",
    responsibility:
      "Check the workshop’s age and material rules. Leave enough time for firing and collection, which can extend beyond the visit.",
    shift:
      "Ask how clay thickness affects the later firing before committing to a bigger shape.",
    humanReturn: "One technique you can try again with your own materials.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://godsbanen.dk/vaerksteder/keramik/",
      sources: [
        {
          title: "Godsbanen ceramics workshop",
          url: "https://godsbanen.dk/vaerksteder/keramik/",
          note: "Open workshop format, equipment, booking and material costs.",
        },
        {
          title: "VisitAarhus guide to Godsbanen",
          url: "https://www.visitaarhus.com/aarhus-region/plan-your-trip/the-cultural-production-center-godsbanen-gdk836811",
          note: "Explains the former railway site and public workshop context.",
        },
      ],
    },
  },
  {
    id: "oslo-toyenbadet-public-pool",
    slug: "oslo-toyenbadet-public-pool",
    title: "Take a swim in Oslo’s neighbourhood bathhouse",
    place: "Oslo, Tøyen",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    field: "restore",
    summary:
      "Tøyenbadet puts a long lane pool and smaller public pools under one roof. On an ordinary Oslo day it offers a different way to spend time in the neighbourhood, with space for both a swim and a slower pause.",
    rootedness:
      "Tøyenbadet puts a long lane pool and smaller public pools under one roof. On an ordinary Oslo day it offers a different way to spend time in the neighbourhood, with space for both a swim and a slower pause.",
    kernel:
      "Choose the pool that fits how you want to spend the hour. Look through the hall’s windows before stepping back into the neighbourhood.",
    access:
      "Buy admission through the municipal bath’s current options. Check live capacity, lane reservations and the operating hours for the area you want. The outdoor grounds and year-round family pool follow different schedules.",
    duration: "About an hour.",
    participation: "Independent public swim or family pool visit.",
    responsibility:
      "The 50-metre pool is for competent swimmers. Check the city’s child supervision, changing and washing rules.",
    shift:
      "Look through the hall’s windows before stepping back into the neighbourhood.",
    humanReturn: "A way to spend time in a place without filling every minute.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.oslo.kommune.no/natur-kultur-og-fritid/svommehaller-i-oslo/toyenbadet/",
      sources: [
        {
          title: "City of Oslo Tøyenbadet",
          url: "https://www.oslo.kommune.no/natur-kultur-og-fritid/svommehaller-i-oslo/toyenbadet/",
          note: "Pool types, capacity, rules and current access.",
        },
        {
          title: "City of Oslo opening report",
          url: "https://aktuelt.oslo.kommune.no/det-nye-toyenbadet-er-apent",
          note: "Documents the public building and its role in the neighbourhood.",
        },
      ],
    },
  },
  {
    id: "london-f1-arcade-first-simulator-race",
    slug: "london-f1-arcade-first-simulator-race",
    title: "Learn one corner in a London racing simulator",
    place: "London, St Paul’s",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    field: "play",
    summary:
      "At F1 Arcade, a motion simulator lets you repeat the same corner in a short race. The first useful change is often braking earlier, before the wheel begins to turn.",
    rootedness:
      "At F1 Arcade, a motion simulator lets you repeat the same corner in a short race. The first useful change is often braking earlier, before the wheel begins to turn.",
    kernel:
      "Choose the easiest available assistance setting and pick one corner to learn. Give yourself a repeat lap before judging the speed.",
    access:
      "Select the St Paul’s venue and a public racing session. Check minimum age, evening entry rules and whether the chosen session is shared or team-based. No EA booking.",
    duration:
      "Allow about an hour including check-in and waiting between races.",
    participation:
      "Hands-on motion simulator racing. Session length depends on the format.",
    responsibility:
      "Follow the published restrictions on motion simulators and ask staff about access before booking.",
    shift: "Give yourself a repeat lap before judging the speed.",
    humanReturn: "A small adjustment you can repeat on your next turn.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://f1arcade.com/uk/london",
      sources: [
        {
          title: "F1 Arcade London racing",
          url: "https://f1arcade.com/uk/london",
          note: "Public London racing formats and location.",
        },
        {
          title: "F1 Arcade London FAQ",
          url: "https://f1arcade.com/uk/london/faqs",
          note: "Age, movement, session and booking rules.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch68: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
