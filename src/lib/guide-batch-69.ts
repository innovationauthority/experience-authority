import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
const drafts = [
  {
    id: "broc-maison-cailler-chocolate-tasting",
    slug: "broc-maison-cailler-chocolate-tasting",
    title: "Taste chocolate after tracing its route through Broc",
    place: "Broc, La Gruyère",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "gruyeres",
    field: "taste",
    summary:
      "At Maison Cailler, cocoa beans and a tasting put texture and aroma next to the story of Swiss milk chocolate. Broc adds a working industrial town to a region often visited for its cheese.",
    rootedness:
      "A factory visit belongs in this part of La Gruyère because it puts the region’s dairy tradition next to a product that travels far beyond it.",
    kernel:
      "Before tasting, handle or smell the ingredients where the route invites it. Compare two pieces slowly enough to distinguish the first aroma from what remains after they melt.",
    access:
      "Choose a timed Maison Cailler visit and check the available audio languages. The visitor attraction presents the history and process. Separate chocolate workshops require their own booking.",
    duration: "Allow one to one and a half hours.",
    participation: "Self-guided audio visit with a tasting at the end.",
    responsibility:
      "Check the current allergen information and choose what to sample. Production-floor access is outside the scope of this guide.",
    shift: "Notice which aroma you can still name after the chocolate melts.",
    humanReturn:
      "A memory of what milk chocolate smells like before the sweetness takes over.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.cailler.ch/en/visit-maison-cailler",
      sources: [
        {
          title: "Maison Cailler tickets and directions",
          url: "https://www.cailler.ch/en/visit-maison-cailler",
          note: "Operator’s timed ticket information, location and visit format.",
        },
        {
          title: "Musées en Gruyère visitor guide",
          url: "https://musees-en-gruyere.ch/en/maison-cailler/",
          note: "Regional visitor information about the chocolate route and tasting.",
        },
      ],
    },
  },
  {
    id: "santos-coffee-exchange-cup",
    slug: "santos-coffee-exchange-cup",
    title: "Drink a cup after seeing where Santos traded coffee",
    place: "Santos, Historic Centre",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "santos",
    field: "taste",
    summary:
      "In Santos, the former coffee exchange has a trading room and a café. Give each a little time and the link between a port, a commodity and something you can taste becomes unusually direct.",
    rootedness:
      "The exchange gives Santos’s history as a coffee port a room you can stand in. The café lets you follow the same commodity from a place of trade to a cup served in the city.",
    kernel:
      "Look at how traders once faced one another in the exchange room, then choose a Brazilian coffee in the café. Ask which brewing methods are available and compare aroma before adding anything.",
    access:
      "Check Museu do Café hours and admission for the former exchange. The café has its own opening hours and menu. Buy coffee separately and check museum access on holidays.",
    duration: "About an hour for the exchange and a cup.",
    participation: "Independent museum visit and separately purchased coffee.",
    responsibility:
      "The café’s beans and brewing options can change. The exchange room photograph documents the museum, not the café counter.",
    shift:
      "Take the first sip while the layout of the exchange room is still fresh in mind.",
    humanReturn: "A cup of coffee with a port city attached to it.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.museudocafe.org.br/visite",
      sources: [
        {
          title: "Museu do Café visitor information",
          url: "https://www.museudocafe.org.br/visite",
          note: "Admission and visitor arrangements for the coffee exchange.",
        },
        {
          title: "Santos tourism coffee museum café",
          url: "https://www.turismosantos.com.br/pt-br/content/cafeteria-do-museu-do-caf%C3%A9",
          note: "City listing for the café, its coffee offer and hours.",
        },
      ],
    },
  },
  {
    id: "dublin-guinness-storehouse-grain-to-glass",
    slug: "dublin-guinness-storehouse-grain-to-glass",
    title: "Follow roasted barley to a glass in Dublin",
    place: "Dublin, St James’s Gate",
    country: "Ireland",
    countrySlug: "ireland",
    regionSlug: "dublin",
    field: "taste",
    summary:
      "At the Guinness Storehouse, the brewing story leads up from ingredients to a glass above the city. Spend time with roasted barley so there is something specific to look for in the aroma later.",
    rootedness:
      "St James’s Gate is the setting that joins the brewing displays to Dublin. Looking out across the city at the end keeps the story anchored in the neighbourhood where it started.",
    kernel:
      "Choose one step of brewing to follow through the building. At the final stop, see which part of the process you can connect to the drink or to what you learned earlier.",
    access:
      "Choose a timed Storehouse ticket. Check what your ticket includes, including the available alcohol-free alternative. The Guinness Academy and other upgrades are separately listed.",
    duration: "Allow about 90 minutes to two hours.",
    participation:
      "Self-guided visitor route with a drink if included in the chosen ticket.",
    responsibility:
      "Follow Irish age and service rules. This is the Storehouse visitor route at St James’s Gate.",
    shift:
      "See whether roasted grain is easier to pick out after following it through the building.",
    humanReturn:
      "One brewing detail that makes a familiar pint more interesting.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.guinness-storehouse.com/en/visit",
      sources: [
        {
          title: "Guinness Storehouse tickets",
          url: "https://www.guinness-storehouse.com/en/visit",
          note: "Visitor ticket types and separately booked activities.",
        },
        {
          title: "Visit Dublin Storehouse guide",
          url: "https://www.visitdublin.com/guinness-storehouse",
          note: "Visitor authority context for the brewing displays and upper bar.",
        },
      ],
    },
  },
  {
    id: "montreal-aura-notre-dame-light-and-organ",
    slug: "montreal-aura-notre-dame-light-and-organ",
    title: "Hear the organ while light redraws Montréal’s basilica",
    place: "Montréal, Old Montréal",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "montreal",
    field: "witness",
    summary:
      "Moment Factory’s AURA uses Notre-Dame’s vault, pews and Casavant organ as part of an evening work. The walking phase lets you see details before the seated performance changes what you pay attention to.",
    rootedness:
      "At Notre-Dame, the room determines where your eyes go and how the organ reaches you. The work depends on the basilica’s architecture as much as on the projections.",
    kernel:
      "Choose one detail in the aisles to remember when you sit down. Listen for when the organ becomes distinct from the rest of the soundtrack.",
    access:
      "Choose a dated AURA ticket. Allow time for the illuminated stations before the seated show. Daytime sightseeing needs its own admission or a combination ticket.",
    duration:
      "About 40 to 45 minutes for the two interior phases. The seated show is 25 minutes.",
    participation:
      "Self-paced introduction followed by a seated light and sound performance.",
    responsibility:
      "Check mobility and sensory guidance. Photography is limited to the initial phase. The photograph shows the basilica under regular lighting.",
    shift:
      "The organ can make the height of the room feel as present as its light.",
    humanReturn:
      "A reason to look up and listen the next time you enter a large room.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-19",
      accessUrl:
        "https://www.basiliquenotredame.ca/en/events/the-aura-experience",
      sources: [
        {
          title: "Notre-Dame Basilica AURA tickets",
          url: "https://www.basiliquenotredame.ca/en/events/the-aura-experience",
          note: "Evening format, arrival, separate admission and photography rules.",
        },
        {
          title: "AURA creative team",
          url: "https://momentfactory.com/products/aura",
          note: "Production context for the use of light, architecture and sound.",
        },
      ],
    },
  },
  {
    id: "singapore-artscience-future-world-drawing",
    slug: "singapore-artscience-future-world-drawing",
    title: "Send a drawing into a digital world in Singapore",
    place: "Singapore, Marina Bay",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    field: "witness",
    summary:
      "At teamLab’s Future World, draw a sea creature, scan it and watch it join a digital aquarium shared with other visitors.",
    rootedness:
      "ArtScience Museum and teamLab bring the shared aquarium into a permanent exhibition at Marina Bay, where each visitor can add a creature to the scene.",
    kernel:
      "Notice how someone else’s drawing changes the scene you are looking at. Give the work time to show the difference between a screen and an environment people can affect together.",
    access:
      "Check the Future World exhibition page and buy the correct timed ticket. Individual works can be unavailable. Follow the venue’s current rules for any physical installation.",
    duration: "Allow an hour or more for the exhibition.",
    participation:
      "Self-paced viewing and hands-on interaction where the work invites it.",
    responsibility:
      "Check sensory, age and clothing guidance before choosing a physical activity. The photograph shows the museum building at Marina Bay.",
    shift:
      "Watch what the room does with your drawing once it is beyond your control.",
    humanReturn:
      "A reminder that an artwork can change because a stranger joined it.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.marinabaysands.com/museum/exhibitions/future-world.html",
      sources: [
        {
          title: "ArtScience Museum Future World",
          url: "https://www.marinabaysands.com/museum/exhibitions/future-world.html",
          note: "Visitor access and current presentation of the permanent exhibition.",
        },
        {
          title: "teamLab Future World",
          url: "https://www.teamlab.art/e/artsciencemuseum/",
          note: "Creator’s account of the interactive environment and selected works.",
        },
      ],
    },
  },
  {
    id: "bilbao-guggenheim-matter-of-time",
    slug: "bilbao-guggenheim-matter-of-time",
    title: "Walk the curved steel rooms inside Bilbao’s Guggenheim",
    place: "Bilbao, Abandoibarra",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "bilbao",
    field: "witness",
    summary:
      "Richard Serra’s steel forms at Guggenheim Bilbao make walking part of looking. A turn can hide the far end of a passage, then bring it back into view without changing the material around you.",
    rootedness:
      "Serra’s installation has a room at Guggenheim Bilbao large enough to put the steel at the scale of a walk. The riverfront outside offers a second route in which a curve changes what you can see ahead.",
    kernel:
      "Walk one form at an unhurried pace and notice where your sense of distance changes. Compare that curve with the path you took along the river outside.",
    access:
      "Check current museum admission and whether The Matter of Time is open. The museum lists the work in its collection. The riverfront path can be visited separately.",
    duration:
      "Allow one to two hours for a selective museum visit and riverside approach.",
    participation:
      "Self-directed gallery visit with walking through the installation where open.",
    responsibility:
      "Follow gallery access and touch rules. If enclosed passages are uncomfortable, use the open gallery viewpoints.",
    shift:
      "Try the return path and notice whether the same bend still feels as long.",
    humanReturn:
      "A sharper sense of how a curve changes your sense of distance.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.guggenheim-bilbao.eus/en/plan-your-visit",
      sources: [
        {
          title: "Guggenheim Bilbao visitor information",
          url: "https://www.guggenheim-bilbao.eus/en/plan-your-visit",
          note: "Ticketing, hours and practical access.",
        },
        {
          title: "Richard Serra’s The Matter of Time",
          url: "https://pro.guggenheim-bilbao.eus/en/the-collection/works/the-matter-of-time",
          note: "Collection record and the role of walking through the installation.",
        },
      ],
    },
  },
  {
    id: "singapore-red-dot-compare-design-objects",
    slug: "singapore-red-dot-compare-design-objects",
    title: "Compare two answers to an everyday problem at Red Dot",
    place: "Singapore, Marina Bay",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    field: "learn",
    summary:
      "Singapore’s Red Dot Design Museum brings selected products and concepts into the same room. A pair of objects with the same purpose can make two ideas about use, weight or repair visible.",
    rootedness:
      "The museum puts the design objects in Marina Bay, where you can extend the same exercise outside. Pick a piece of street furniture or a sign and ask what decisions its designer made for you.",
    kernel:
      "Pick one ordinary problem you know from home and look for two proposed solutions. Think through what each makes easier and what it asks of the person using it.",
    access:
      "Use the museum’s visitor page for opening, admission and current display. The waterfront museum shop and café have their own role in the visit.",
    duration: "About an hour for a selective visit.",
    participation: "Self-guided design exhibition.",
    responsibility:
      "The display follows the award institution’s selection. Check whether a particular object is on view before travelling for it.",
    shift:
      "Give one of the objects a different user in your mind and see if your judgement changes.",
    humanReturn: "A better question to ask of an object you use every day.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://museum.red-dot.sg/pages/visit-the-museum",
      sources: [
        {
          title: "Red Dot Design Museum visitor information",
          url: "https://museum.red-dot.sg/pages/visit-the-museum",
          note: "Marina Bay address, opening and admission.",
        },
        {
          title: "World of Design visitor FAQ",
          url: "https://museum.red-dot.sg/pages/world-of-design-faq",
          note: "Exhibition admission and practical visitor information.",
        },
      ],
    },
  },
  {
    id: "goyang-motorstudio-car-safety-design",
    slug: "goyang-motorstudio-car-safety-design",
    title: "Watch a car take shape through design displays in Goyang",
    place: "Goyang, KINTEX",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "goyang",
    field: "learn",
    summary:
      "The experiential galleries at Hyundai Motorstudio Goyang turn vehicle assembly and safety testing into things a visitor can watch and compare. Focus on one change you can trace from an early component to the finished car.",
    rootedness:
      "The Goyang studio brings the stages of building and testing a car into a public gallery. Look at which design decisions the displays make visible and which belong to the manufacturer’s own account.",
    kernel:
      "Pick a safety feature and see how the display makes its purpose visible. Bring the same question back to the ordinary car you arrive in.",
    access:
      "Choose the experiential exhibition on Hyundai’s reservation system and check the age and language conditions. The official listing says the experiential exhibition closes on Mondays. The 4D ride and drive programme have separate rules.",
    duration: "Allow about an hour for the exhibition and time for check-in.",
    participation:
      "Visitor-centre interpretation with separately booked options.",
    responsibility:
      "The exhibition explains the manufacturer’s process at a visitor centre. Check the current 4D conditions if you want that ticket. The photograph shows a concept display at the venue.",
    shift:
      "Look for the point at which a manufacturing choice becomes something a passenger can feel.",
    humanReturn: "A specific safety detail you can identify on a familiar car.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://motorstudio.hyundai.com/goyang/cotn/at/utzInfo.do?lang=en&strgCd=01",
      sources: [
        {
          title: "Hyundai Motorstudio Goyang visitor information",
          url: "https://motorstudio.hyundai.com/goyang/cotn/at/utzInfo.do?lang=en&strgCd=01",
          note: "Experiential exhibition operating days, tickets and visit requirements.",
        },
        {
          title: "Korea Tourism Organization Motorstudio listing",
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=112797",
          note: "Documents the Goyang visitor centre and exhibition format.",
        },
      ],
    },
  },
  {
    id: "wolfsburg-autostadt-car-tower",
    slug: "wolfsburg-autostadt-car-tower",
    title: "Ride up through a tower full of cars in Wolfsburg",
    place: "Wolfsburg, Autostadt",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "wolfsburg",
    field: "learn",
    summary:
      "Autostadt’s Tour and Tower links an automotive campus to a tall automated store. The moment to watch is how the lift and the storage bays pass one another as you rise.",
    rootedness:
      "The tower sits on the Autostadt campus, so you can read the structure as part of an actual system for storing and handing over cars.",
    kernel:
      "Look across the circular storage rows and picture how a car changes hands from arrival to collection. The system makes the work of moving a car unusually visible.",
    access:
      "Choose Tour und Turm directly from Autostadt and confirm the tour language, current ticket inclusions and departure time. Tower access is subject to the operator’s safety rules.",
    duration:
      "Allow a substantial part of the morning or afternoon including site admission and the tour.",
    participation: "Guided visitor route with a tower ride when permitted.",
    responsibility:
      "Check the published minimum height of one metre and the operator’s restrictions for pregnancy, heart conditions and some mobility needs before booking.",
    shift:
      "Notice what happens to the space around each car as the lift moves past it.",
    humanReturn:
      "A way to picture what happens between a finished car and the person collecting it.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.autostadt.de/en/w/tour-und-turm",
      sources: [
        {
          title: "Autostadt Tour and Tower",
          url: "https://www.autostadt.de/en/w/tour-und-turm",
          note: "Current tour route and published tower restrictions.",
        },
        {
          title: "Autostadt guided tours",
          url: "https://medienportal.autostadt.de/en/web/guest/explore/guided-tours/guided-tours-for-adults",
          note: "Distinguishes the tower visit from other operator programmes.",
        },
      ],
    },
  },
  {
    id: "basel-paper-mill-pull-a-sheet",
    slug: "basel-paper-mill-pull-a-sheet",
    title: "Pull a sheet of paper in a Basel mill",
    place: "Basel, St Alban-Tal",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "basel",
    field: "make",
    summary:
      "At Basler Papiermühle, paper begins with pulp in a working mill setting. Lifting a sheet lets you feel how much of its eventual texture is decided before it dries.",
    rootedness:
      "In Basel’s St Alban quarter, the mill setting puts a wet sheet and the tools that made it in the same place. That closeness makes the process easier to understand than a display of finished paper alone.",
    kernel:
      "Watch the water drain from the mould and look for the moment when loose fibres become a sheet. Compare that new surface with paper you handle every day.",
    access:
      "Buy admission during museum hours and check which hands-on workstations are open. Demonstrations, scheduled workshops and group bookings are separately listed.",
    duration: "Allow 60 to 90 minutes.",
    participation:
      "Independent museum visit with hands-on papermaking when the station is staffed.",
    responsibility:
      "Check access across the historic building’s levels and follow the workshop’s instructions around vats and presses.",
    shift: "Look at the edge of the wet sheet before you look at its centre.",
    humanReturn:
      "A sheet whose uneven edge tells you something about how it was made.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.baslerpapiermuehle.ch/en/home-2/",
      sources: [
        {
          title: "Basler Papiermühle museum",
          url: "https://www.baslerpapiermuehle.ch/en/home-2/",
          note: "Historic mill, public opening and activities at integrated workstations.",
        },
        {
          title: "Basler Papiermühle programmes",
          url: "https://www.baslerpapiermuehle.ch/en/programs-events/",
          note: "Demonstrations, public activities and separately arranged visits.",
        },
      ],
    },
  },
  {
    id: "amsterdam-rijksmuseum-weekend-drawing-lab",
    slug: "amsterdam-rijksmuseum-weekend-drawing-lab",
    title: "Draw from sound or touch at the Rijksmuseum",
    place: "Amsterdam, Museumplein",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    field: "make",
    summary:
      "The Rijksmuseum’s weekend Drawing Lab gives families a prompt by spinning a wheel. A child might draw from a sound or from something they can feel, changing what they look for in the museum afterwards.",
    rootedness:
      "The Drawing Lab makes a useful first stop at the Rijksmuseum. A prompt from the lab gives a child a way into a room of objects that might otherwise feel unrelated.",
    kernel:
      "Try one prompt together and compare what each person noticed. Take that same kind of attention back into the galleries.",
    access:
      "The museum lists walk-in sessions on Saturdays and Sundays for ages four to twelve with adult supervision. The activity is free with museum admission. Check the current listing before choosing a date.",
    duration: "About 20 minutes for the activity, plus the museum visit.",
    participation: "Supervised family drop-in drawing activity.",
    responsibility:
      "Children must be accompanied. The photograph shows the museum atrium, where visitors enter the building.",
    shift:
      "Give someone else the prompt and compare the parts of the room you both chose to draw.",
    humanReturn: "A drawing prompt you can reuse at another museum or at home.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.rijksmuseum.nl/en/whats-on/families-children/drawing-lab",
      sources: [
        {
          title: "Rijksmuseum Drawing Lab",
          url: "https://www.rijksmuseum.nl/en/whats-on/families-children/drawing-lab",
          note: "Age, adult supervision, location and weekend walk-in schedule.",
        },
        {
          title: "Rijksmuseum visitor information",
          url: "https://www.rijksmuseum.nl/en/visit",
          note: "Museum tickets, visiting hours and access.",
        },
      ],
    },
  },
  {
    id: "mainz-gutenberg-druckladen-type-and-ink",
    slug: "mainz-gutenberg-druckladen-type-and-ink",
    title: "Set a few letters and print them in Mainz",
    place: "Mainz, Gutenberg-Museum Druckladen",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "mainz",
    field: "make",
    summary:
      "At the Gutenberg Museum’s Druckladen, type, ink and pressure turn a few letters into a print. Small decisions about spacing become visible when you lift the paper.",
    rootedness:
      "In Mainz, the Gutenberg Museum connects a public print workshop to its collection on the history of printing. A line of type gives the collection a physical scale you can work with.",
    kernel:
      "Set a short word and look at how the gaps hold the line together. Compare the result to the way you would lay out that word on a screen.",
    access:
      "Check the Druckladen’s own opening information and book a workshop where required. Use the address on the workshop page rather than assuming it is inside the current main exhibition.",
    duration:
      "Allow an hour for a short session. Booked workshop lengths vary.",
    participation: "Hands-on printing in the teaching workshop.",
    responsibility:
      "The city lists independent printing from age six. Follow staff instructions around type, ink and presses.",
    shift:
      "Notice which gaps look different when you see the impression in ink.",
    humanReturn:
      "A printed word that shows the effect of a gap no wider than a sliver of type.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-15",
      accessUrl:
        "https://www.mainz.de/microsite/gutenberg-museum/Bildung_Vermittlung/druckladen",
      sources: [
        {
          title: "Gutenberg Museum Druckladen",
          url: "https://www.mainz.de/microsite/gutenberg-museum/Bildung_Vermittlung/druckladen",
          note: "Practical printing, visitor age and the workshop’s own details.",
        },
        {
          title: "Gutenberg Museum visitor service",
          url: "https://www.mainz.de/en/microsite/gutenberg-museum/Museum/besucherservice",
          note: "Current context for the separate exhibition and the workshop.",
        },
      ],
    },
  },
  {
    id: "london-lee-valley-track-cycling-taster",
    slug: "london-lee-valley-track-cycling-taster",
    title: "Find a line on London’s banked cycling track",
    place: "London, Stratford",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    field: "move",
    summary:
      "The first coached track session at Lee Valley VeloPark makes a banked curve feel less abstract. The indoor boards teach you to hold a steady line and look where you are going.",
    rootedness:
      "At Queen Elizabeth Olympic Park, the public taster lets you experience the same banked indoor track you can recognise from London’s Olympic cycling. Its geometry becomes apparent when you ride it.",
    kernel:
      "Keep the first laps simple. Pay attention to how the track feels when your speed and sightline become steadier, and let the coach decide when you move higher.",
    access:
      "Book a track cycling taster in the correct age group. Check the equipment, bike fit, arrival time and footwear rules on the operator’s page. No EA booking.",
    duration: "Allow about an hour on site plus changing and check-in.",
    participation: "Beginner coached indoor track cycling.",
    responsibility:
      "You should already be comfortable riding a bicycle. Follow the coach’s spacing, speed and safety instructions.",
    shift:
      "See whether looking a little farther ahead helps the next turn feel smoother.",
    humanReturn: "A steadier way to look through a corner.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.better.org.uk/leisure-centre/lee-valley/velopark/cycling-experiences",
      sources: [
        {
          title: "Lee Valley VeloPark cycling experiences",
          url: "https://www.better.org.uk/leisure-centre/lee-valley/velopark/cycling-experiences",
          note: "Public taster format and booking.",
        },
        {
          title: "Queen Elizabeth Olympic Park venue guide",
          url: "https://www.queenelizabetholympicpark.co.uk/explore-park/venues/lee-valley-velopark",
          note: "Site and track context for a visit to Stratford.",
        },
      ],
    },
  },
  {
    id: "las-vegas-pinball-hall-machines",
    slug: "las-vegas-pinball-hall-machines",
    title: "Learn one pinball table on the Las Vegas Strip",
    place: "Las Vegas, South Las Vegas Boulevard",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "las-vegas",
    field: "play",
    summary:
      "At the Pinball Hall of Fame, playable machines show how much a game can change with a different flipper, ramp or target. One table is enough to begin reading that design.",
    rootedness:
      "The Las Vegas hall makes machines from different eras playable in the same visit. You can compare how they guide a player using the actual ramps and targets.",
    kernel:
      "Pick an older machine and spend more than one turn with it. Notice what the playfield asks you to do before trying a newer table.",
    access:
      "Check the museum’s hours at its current South Las Vegas Boulevard address. Entry is generally free, and individual machines take payment. Use the operator’s current payment instructions.",
    duration: "Allow 45 to 90 minutes.",
    participation: "Self-directed play on working machines where available.",
    responsibility:
      "Machine availability changes. Leave space around the cabinet and respect posted age or venue rules.",
    shift:
      "Try the same deliberate move on a second table and see how the machine rewards it.",
    humanReturn:
      "One design choice you can feel in the time it takes a ball to return.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://pinballmuseum.org/direct.php",
      sources: [
        {
          title: "Pinball Hall of Fame visitor directions",
          url: "https://pinballmuseum.org/direct.php",
          note: "Current address and operating hours.",
        },
        {
          title: "Pinball Hall of Fame playable machines",
          url: "https://www.pinballmuseum.org/games/games.php",
          note: "Operator’s machine inventory, subject to change.",
        },
      ],
    },
  },
  {
    id: "portland-oaks-park-public-roller-skate",
    slug: "portland-oaks-park-public-roller-skate",
    title: "Find your first steady lap at Portland’s Oaks Park",
    place: "Portland, Sellwood",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "portland",
    field: "play",
    summary:
      "The Oaks Park rink gives Portland an indoor place to skate through the wet months. The wood floor and shared direction are enough to make a first lap a real activity rather than just a photo stop.",
    rootedness:
      "Oaks Park places the rink alongside its other attractions. With its own public sessions, the floor can be the reason to go even when the outdoor rides are closed.",
    kernel:
      "Begin near the edge and find a steady rhythm before moving into faster traffic. Listen for how the rink changes when the music changes.",
    access:
      "Choose a current public session from Oaks Park’s calendar and check rental, age and adult-only listings. General skating and special sessions have different times.",
    duration: "Allow an hour or more including equipment and breaks.",
    participation: "Self-paced public roller skating.",
    responsibility:
      "Use suitable skates and follow the rink’s direction and speed rules. Choose a quieter session if you are new.",
    shift:
      "Give yourself one lap at the same pace before and after the music changes.",
    humanReturn:
      "The point when the lap starts to feel like a rhythm you can keep.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.oakspark.com/roller-skating-rink",
      sources: [
        {
          title: "Oaks Park roller rink",
          url: "https://www.oakspark.com/roller-skating-rink",
          note: "Public sessions, seasonal hours and rental information.",
        },
        {
          title: "Oaks Park visitor information",
          url: "https://www.oakspark.com/",
          note: "Park access and the distinction between rink and amusement park hours.",
        },
      ],
    },
  },
  {
    id: "seoul-magok-botanic-park-glasshouse",
    slug: "seoul-magok-botanic-park-glasshouse",
    title: "Compare two climates under glass in Seoul",
    place: "Seoul, Magok",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    field: "nature",
    summary:
      "Seoul Botanic Park’s greenhouse divides its space into tropical and Mediterranean plant worlds. A short route between them makes climate visible in the shape and spacing of leaves.",
    rootedness:
      "At Magok the greenhouse is one part of a park that continues through open ground to a lake. Walking between the controlled interior and outdoors makes temperature and humidity part of the comparison.",
    kernel:
      "Pick one leaf form to remember from each climate. Carry that comparison out to the lake or open forest, where the weather is Seoul’s own.",
    access:
      "Use the greenhouse and themed garden ticket. The national visitor listing gives shorter hours from November to February and Monday closure for those areas. Check last admission on the day.",
    duration:
      "Allow 60 to 90 minutes for the greenhouse and part of the outdoor park.",
    participation: "Self-paced greenhouse and outdoor garden visit.",
    responsibility:
      "Stay on paths, keep displays undisturbed and confirm routes if you need step-free access.",
    shift:
      "Compare the air around the plants before comparing what the plants look like.",
    humanReturn:
      "Two different leaf shapes to remember when you see plants elsewhere.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=175819",
      sources: [
        {
          title: "Korea Tourism Organization Seoul Botanic Park",
          url: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=175819",
          note: "Greenhouse admission, season and site location.",
        },
        {
          title: "Seoul Botanic Park official English guide",
          url: "https://botanicpark.seoul.go.kr/front/eng/img/English_Guide%202024.pdf",
          note: "Park layout and greenhouse zones.",
        },
      ],
    },
  },
  {
    id: "vancouver-pacific-spirit-forest-trails",
    slug: "vancouver-pacific-spirit-forest-trails",
    title: "Leave Vancouver’s streets for the forest at Pacific Spirit",
    place: "Vancouver, Point Grey",
    country: "Canada",
    countrySlug: "canada",
    regionSlug: "vancouver",
    field: "nature",
    summary:
      "Pacific Spirit Regional Park gives Vancouver a public forest walk near UBC. A short inland route from the trail network makes it possible to listen for the change in sound from road to understory.",
    rootedness:
      "This stretch of forest sits between Vancouver’s street grid and the university peninsula. A signed trail lets you step out of one soundscape and listen to the other without committing to a long hike.",
    kernel:
      "Choose a signed route you can turn back on and stop where the ground shifts from an open verge to dense tree cover. Look at what grows near fallen wood.",
    access:
      "Check Metro Vancouver’s current map and notices. Use signed inland trails from a public access point near the UBC side. Check dog, cycling and trail designations before setting out.",
    duration: "Allow 60 to 90 minutes for a short inland walk.",
    participation: "Independent walk on marked regional park trails.",
    responsibility:
      "Stay on open paths and use the current closure notices. Bring rain gear and give other trail users room.",
    shift: "Stop for a minute and see which forest sound you hear first.",
    humanReturn: "An ear for the sounds that return when traffic falls away.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://metrovancouver.org/services/regional-parks/park/pacific-spirit-regional-park",
      sources: [
        {
          title: "Metro Vancouver Pacific Spirit Regional Park",
          url: "https://metrovancouver.org/services/regional-parks/park/pacific-spirit-regional-park",
          note: "Park visitor information, management and official notices.",
        },
        {
          title: "Pacific Spirit Regional Park trail map",
          url: "https://metrovancouver.org/services/regional-parks/Documents/pacific-spirit-regional-park-map.pdf",
          note: "Signed trails and designated uses.",
        },
      ],
    },
  },
  {
    id: "bundeena-jibbon-headland-boardwalk",
    slug: "bundeena-jibbon-headland-boardwalk",
    title: "Walk from Jibbon Beach to the public headland boardwalk",
    place: "Bundeena, Royal National Park",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "bundeena",
    field: "nature",
    summary:
      "At Bundeena, the Jibbon walk moves from a beach into heath and a publicly interpreted Dharawal site. The change of ground makes the coast legible at walking pace.",
    rootedness:
      "The walk joins Bundeena’s beach with part of Royal National Park. The public interpretation along the headland lets the story of the Dharawal place guide your attention as you pass through.",
    kernel:
      "Take time between the beach and the headland. At the interpretation point, read what is shared publicly and give the engravings distance.",
    access:
      "Check Royal National Park alerts and use the signed public route from Bundeena. Turn back at the boardwalk if conditions or access are uncertain. Check the ferry timetable separately if arriving from Cronulla.",
    duration:
      "Allow one to two hours depending on the signed route and your pace.",
    participation:
      "Independent coastal walk with a public interpretation stop.",
    responsibility:
      "Stay on marked surfaces and never touch or trace the engravings. Keep away from slippery rock platforms and exposed edges.",
    shift: "Let the signs set the pace at the interpretation point.",
    humanReturn:
      "A memory of how much of the coast can be understood at walking pace.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl:
        "https://www.visitsutherlandshire.com.au/explore/nature-and-outdoors/walking-trails/jibbon-loop-track/",
      sources: [
        {
          title: "Sutherland Shire Jibbon walk",
          url: "https://www.visitsutherlandshire.com.au/explore/nature-and-outdoors/walking-trails/jibbon-loop-track/",
          note: "Public beach and headland route with cultural interpretation.",
        },
        {
          title: "Royal National Park current visitor information",
          url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/royal-national-park/visitor-info",
          note: "Official park rules and access to alerts.",
        },
      ],
    },
  },
  {
    id: "locarno-lido-lake-thermal-pool",
    slug: "locarno-lido-lake-thermal-pool",
    title: "Go from the lake view to warm water in Locarno",
    place: "Locarno, Lake Maggiore",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "ticino",
    field: "restore",
    summary:
      "Lido Locarno sets a thermal pool and a public swimming complex against Lake Maggiore. The windows and outdoor edges make a visit feel different from a pool that turns its back on the town.",
    rootedness:
      "The lido sits beside Lake Maggiore and gives Locarno a pool visit that can share an afternoon with the waterfront. The lake remains part of the outing even if you only swim indoors.",
    kernel:
      "Choose one open pool and one place to sit with the lake in view. The visit is short enough to leave room for the lakeside on either side.",
    access:
      "Check the current Lido calendar and choose admission that covers the thermal pool. Lake access, outdoor facilities, fitness and other products have separate schedules or conditions.",
    duration: "About 60 to 90 minutes.",
    participation: "Independent public bathing or swimming.",
    responsibility:
      "Check maintenance, step-free pool entry and rules for children. Use the operator’s open facilities rather than assuming the lake is supervised.",
    shift: "Leave a little time to look back at the pool from the shore.",
    humanReturn: "A swimming break that leaves room to linger by the lake.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.lidolocarno.ch/it/orari-prezzi",
      sources: [
        {
          title: "Lido Locarno hours and prices",
          url: "https://www.lidolocarno.ch/it/orari-prezzi",
          note: "Current admission and seasonal pool schedules.",
        },
        {
          title: "Lido Locarno pool guide",
          url: "https://www.lidolocarno.ch/it/centro-balneare",
          note: "Public pool areas and the thermal pool.",
        },
      ],
    },
  },
  {
    id: "helsinki-allas-harbour-pool",
    slug: "helsinki-allas-harbour-pool",
    title: "Swim beside Helsinki’s harbour traffic",
    place: "Helsinki, South Harbour",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    field: "restore",
    summary:
      "At Allas Pool, a heated outdoor basin sits near the passenger harbour. A slow length gives time to see the movement of ferries and people from water level.",
    rootedness:
      "The pools sit at the edge of Helsinki’s working passenger harbour. From the water, you can follow the movement between the terminals, ferries and the city shore.",
    kernel:
      "Start in the heated pool and look out between lengths. Choose whether to spend the rest of the visit in the sauna or simply watching the harbour.",
    access:
      "Check the current Allas Pool hours, capacity and ticket. The heated pool and unheated seawater pool have separate access conditions. The children’s pool is seasonal.",
    duration: "Allow about an hour or more including changing.",
    participation: "Independent public pool visit with optional sauna.",
    responsibility:
      "Use swimwear and follow the city-facing facility’s pool rules. Confirm ladder or stair access and swimming ability for your chosen basin.",
    shift: "Pick one ferry and follow its route between two lengths.",
    humanReturn: "A view of the harbour from the height of a swimmer.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://www.allaspool.fi/en/info/",
      sources: [
        {
          title: "Allas Pool visitor information",
          url: "https://www.allaspool.fi/en/info/",
          note: "Current hours, pool rules and access details.",
        },
        {
          title: "Helsinki service map Allas Pool",
          url: "https://palvelukartta.hel.fi/en/unit/54835",
          note: "Public directions and facility information for the harbour site.",
        },
      ],
    },
  },
  {
    id: "cape-town-gold-djembe-before-dinner",
    slug: "cape-town-gold-djembe-before-dinner",
    title: "Try a djembe rhythm before dinner in Cape Town",
    place: "Cape Town, Green Point",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    field: "gather",
    summary:
      "The pre-dinner djembe session at GOLD gives the table a way to make a rhythm together. It is part of a staged dining programme whose food and performance draw from different places across Africa.",
    rootedness:
      "In Cape Town, the restaurant gathers food and performance from several places into one evening. The instructor-led drumming is the part of the programme where the table has something to do together.",
    kernel:
      "Start by finding the shared pulse and listen for how the instructor brings the room back when it speeds up. Carry the memory of that rhythm into the rest of the evening.",
    access:
      "Book directly with GOLD and confirm whether the optional pre-dinner session is included. Check arrival time and dietary policy for the dinner format you choose.",
    duration:
      "Allow the evening. Confirm the drumming start time with your booking.",
    participation:
      "Guided beginner group drumming followed by a separately described dinner programme.",
    responsibility:
      "Treat the evening as the venue’s pan-African interpretation. Follow the instructor’s cues and avoid photographing other guests without agreement.",
    shift:
      "Listen for the moment when the individual beats settle into one pulse.",
    humanReturn: "The feel of a beat you kept with people you had just met.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://goldrestaurant.co.za/",
      sources: [
        {
          title: "GOLD Restaurant programme and bookings",
          url: "https://goldrestaurant.co.za/",
          note: "Operator publishes optional pre-dinner drumming and dinner formats.",
        },
        {
          title: "GOLD Restaurant venue brochure",
          url: "https://wetu.com/iBrochure/en/Information/8008_16856/gold_restaurant/Spaces",
          note: "Destination context for the staged meal and music experience.",
        },
      ],
    },
  },
  {
    id: "seattle-kexp-live-studio-viewing",
    slug: "seattle-kexp-live-studio-viewing",
    title: "Hear a live radio session from behind the glass in Seattle",
    place: "Seattle, Seattle Center",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "seattle",
    field: "gather",
    summary:
      "KEXP sometimes opens its viewing gallery for a live in-studio set. The glass lets you watch the small signals between musicians, engineers and the host as a radio performance comes together.",
    rootedness:
      "At Seattle Center, KEXP puts a public viewing gallery beside an operating radio studio. You can watch the small cues that a listener at home would only hear the results of.",
    kernel:
      "Arrive early enough to check in, then listen for how a live set changes when it is being made for people who are elsewhere.",
    access:
      "Check KEXP’s live calendar for sessions marked open to the public. Registration is in person on the day, from 90 minutes beforehand. Return to line up at least 15 minutes before the set. If no public set is available, check the separately listed Gathering Space hours.",
    duration: "Set times vary. Allow a check-in and waiting window.",
    participation:
      "Quiet audience viewing from the gallery at selected radio sessions.",
    responsibility:
      "Follow the no-phone, no-recording and late-entry rules. A check-in ticket holds a place in line, subject to the station’s conditions.",
    shift:
      "Watch for one cue between the engineer and the band, then listen for what follows.",
    humanReturn:
      "A better ear for the handovers that keep a live broadcast moving.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-04",
      accessUrl: "https://www.kexp.org/visit/in-studio/",
      sources: [
        {
          title: "KEXP public in-studio viewing",
          url: "https://www.kexp.org/visit/in-studio/",
          note: "Current same-day ticket and return windows, accessibility and audience rules.",
        },
        {
          title: "KEXP Gathering Space",
          url: "https://www.kexp.org/visit/gathering-space/",
          note: "Public opening information for a visit without a studio session.",
        },
        {
          title: "KEXP public in-studio calendar",
          url: "https://www.kexp.org/events/kexp-events/?category=in-studio&category=public",
          note: "Current and upcoming sessions listed for public viewing.",
        },
      ],
    },
  },
  {
    id: "glasgow-oran-mor-lunchtime-play",
    slug: "glasgow-oran-mor-lunchtime-play",
    title: "Watch a new play over lunch in Glasgow",
    place: "Glasgow, West End",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "glasgow",
    field: "gather",
    summary:
      "A Play, A Pie and A Pint compresses a theatre visit into a lunchtime format at Òran Mór. One new play and a shared meal rhythm make it possible to go to the theatre in the middle of an ordinary day.",
    rootedness:
      "Òran Mór gives Glasgow a theatre slot at a time usually reserved for lunch. The short format changes who can fit a performance into the middle of their day.",
    kernel:
      "Read the programme before choosing a play. Leave time to settle into the room and see how a weekday audience changes the way the performance feels.",
    access:
      "Book the Glasgow Òran Mór performance through the programme’s current schedule. Check the arrival instructions, refreshments, content guidance and access for that production.",
    duration: "About an hour for a typical play, plus arrival time.",
    participation:
      "Seated lunchtime theatre with the advertised refreshment option.",
    responsibility:
      "Age and content guidance vary by production. Choose a show that suits your group. No EA booking.",
    shift:
      "Notice how it feels to leave the theatre while the rest of the day is still ahead.",
    humanReturn:
      "A play to talk about before the afternoon has properly started.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-12",
      accessUrl: "https://playpiepint.com/",
      sources: [
        {
          title: "A Play, A Pie and A Pint programme",
          url: "https://playpiepint.com/",
          note: "Current productions and performance locations.",
        },
        {
          title: "A Play, A Pie and A Pint visitor information",
          url: "https://playpiepint.com/visiting/",
          note: "Arrival, refreshment and venue guidance.",
        },
      ],
    },
  },
  {
    id: "uster-greifensee-barrel-sauna",
    slug: "uster-greifensee-barrel-sauna",
    title: "Warm up in a wooden sauna barrel by the Greifensee",
    place: "Uster, Greifensee",
    country: "Switzerland",
    countrySlug: "switzerland",
    regionSlug: "zurich",
    field: "restore",
    summary:
      "A seasonal public sauna at Uster’s lakeside baths puts wooden barrels beside the Greifensee. The view, fresh air and a quiet spell in the yurt give the visit its pace.",
    rootedness:
      "The seasonal sauna uses Uster’s lakeside baths as a place to stop by the Greifensee in cooler months. The barrels and yurt make a compact visit that still revolves around the shore.",
    kernel:
      "Use one short round of heat and give yourself time to sit afterwards. Keep the lake dip optional and leave time for the view from dry ground.",
    access:
      "Check the operator’s current schedule at Strandbad Uster. The published 2026–27 season runs from 17 October to 31 March, with different weekday and weekend hours.",
    duration: "Allow two to three hours including rest and changing.",
    participation:
      "Mixed public sauna with a yurt for resting. Lake entry is optional.",
    responsibility:
      "Bring or rent a robe for the yurts and follow the posted sauna etiquette. Under-eighteens need a guardian. Check lake conditions and your own swimming ability.",
    shift: "Give the rest between rounds as much attention as the heat itself.",
    humanReturn: "A memory of the cool air and lake view between rounds.",
    evidence:
      "The linked sources describe the visitor format and access. EA has researched the experience from public information and has not assessed it on site.",
    guideReview: {
      basis: "public_sources",
      scope: "public_programme",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2027-01-15",
      accessUrl: "https://sauna-am-see.ch/",
      sources: [
        {
          title: "Sauna am See Uster",
          url: "https://sauna-am-see.ch/",
          note: "2026–27 season, opening times, barrel saunas, equipment and entry rules.",
        },
        {
          title: "Herzkern Uster local visitor guide",
          url: "https://www.herzkern-uster.ch/sport-fitness/sauna-am-see-uster/",
          note: "Local context for the Greifensee site and its visitor offer.",
        },
      ],
    },
  },
] satisfies Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">[];
export const guideBatch69: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
