import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const checkedOn = "2026-11-20";

type GuideDraft = Omit<
  PublicExperience,
  "id" | "status" | "demo" | "image" | "imageAlt" | "guideReview"
> & {
  guideReview: Pick<GuideReview, "scope" | "sources"> &
    Partial<Pick<GuideReview, "reviewBy">>;
};

function guide({ guideReview, ...draft }: GuideDraft): PublicExperience {
  return {
    ...draft,
    id: draft.slug,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.slug),
    guideReview: {
      basis: "public_sources",
      requiresSpecialPermission: false,
      checkedOn,
      reviewBy: "2027-01-08",
      accessUrl: guideReview.sources[0].url,
      ...guideReview,
    },
  };
}

export const guideBatch76 = [
  guide({
    slug: "sainte-suzanne-follow-reunion-vanilla",
    field: "taste",
    place: "Sainte-Suzanne, Réunion",
    country: "France",
    countrySlug: "france",
    regionSlug: "reunion",
    title: "Follow Réunion vanilla into the curing room",
    summary:
      "A green pod and a fragrant kitchen ingredient might as well be two different things. At Grand Hazier, follow what happens between them.",
    kernel:
      "Start with the vines and trace the next stages through the visitor displays. At the curing end of the visit, look at the colour and texture of a finished pod. Ask which stages are happening on the estate at the time of your visit.",
    rootedness:
      "Réunion’s vanilla story includes the hand-pollination method developed by Edmond Albius in the nineteenth century. The estate puts that work next to the long process of preparing the harvested pods.",
    shift: "Follow the making of a kitchen staple back to an island estate.",
    humanReturn:
      "A pod carries the work of a growing season and the time it takes to cure.",
    responsibility:
      "Check the tour language if French is a barrier. Flowering, pollination and working-room access vary by season.",
    evidence:
      "La Vanilleraie visit booking documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow about an hour.",
    participation: "Public estate visit. Check for a guided departure.",
    access:
      "Use the visitor booking link for Domaine du Grand Hazier in Sainte-Suzanne. The operator closes on Sundays and public holidays.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "La Vanilleraie visit booking",
          url: "https://lavanilleraie.com/produit/visite/",
          note: "The estate’s public visit and booking options.",
        },
        {
          title: "Réunion Tourism",
          url: "https://www.reunion.fr/offres/vanilleraie-la-sainte-suzanne-fr-558598/",
          note: "Estate location and the vanilla production stages included in the visit.",
        },
      ],
    },
  }),
  guide({
    slug: "kotohira-knead-sanuki-udon",
    field: "taste",
    place: "Kotohira, Kagawa",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kagawa",
    title: "Knead Sanuki udon with your feet in Kotohira",
    summary:
      "Before lunch comes a small dance. At a Kotohira noodle school, body weight does part of the work of kneading.",
    kernel:
      "Mix the dough, press it underfoot as the instructor shows you, then roll and cut it. When you taste the noodles, pay attention to how their firm bite relates to the work the dough just took.",
    rootedness:
      "Sanuki is the historical name associated with Kagawa and its udon. Kotohira makes a natural place to try the technique before an afternoon on the shrine approach.",
    shift:
      "Use the dough’s texture to judge a technique you have tried yourself.",
    humanReturn:
      "The texture of the noodles becomes something you helped make.",
    responsibility:
      "The public listing requires at least two participants. Confirm the session language and dietary requirements when booking. Udon dough contains wheat.",
    evidence:
      "Kotohira Tourism, udon workshop documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow about an hour for the lesson. Leave time for eating.",
    participation: "Hands-on noodle-making class with a tasting.",
    access:
      "Book the Kotohira class before travelling. The tourism office puts it about ten minutes on foot from JR Kotohira Station. Follow the address on the booking confirmation.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "Kotohira Tourism, udon workshop",
          url: "https://kotohira-kankou.jp/en/experience/detail/148/",
          note: "Class format and the route to the Kotohira school.",
        },
        {
          title: "Setouchi Tourism, Nakano Udon School",
          url: "https://www.setouchi.travel/en/see-and-do/spot/nakano-udon-school/",
          note: "Foot-kneading, rolling, cutting and tasting.",
        },
      ],
    },
  }),
  guide({
    slug: "kanazawa-dt-suzuki-water-mirror",
    field: "witness",
    place: "Kanazawa, Hondamachi",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kanazawa",
    title: "Watch light cross Kanazawa’s Water Mirror Garden",
    summary:
      "The D. T. Suzuki Museum gives a shallow pool as much attention as its rooms. Follow the path from its displays to the water.",
    kernel:
      "Read a little about Suzuki inside. At the Water Mirror Garden, choose a fixed point across the pool and see what becomes visible as the surface changes. The next space gives you a second angle on the same small scene.",
    rootedness:
      "Suzuki was born in Kanazawa and interpreted Buddhist thought for international audiences. The museum brings his life and ideas into a building designed around reading, walking and pausing.",
    shift: "See how the architecture controls where your eyes go.",
    humanReturn:
      "A shift in position can change what is visible in a familiar scene.",
    responsibility:
      "Keep voices low near people using the contemplative space. Check photography rules before shooting indoors.",
    evidence:
      "D. T. Suzuki Museum, facilities documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow 45 to 60 minutes.",
    participation: "Self-guided admission and garden viewing.",
    access:
      "Enter at 3-4-20 Hondamachi. Check the museum's opening notice for Monday and holiday exceptions or exhibition closures.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "D. T. Suzuki Museum, facilities",
          url: "https://www.kanazawa-museum.jp/daisetz/english/facilities.html",
          note: "The exhibition spaces, contemplative room and Water Mirror Garden.",
        },
        {
          title: "Visit Kanazawa",
          url: "https://visitkanazawa.jp/en/spot/detail_10156.html",
          note: "Municipal visitor information and local background.",
        },
      ],
    },
  }),
  guide({
    slug: "oslo-emanuel-vigeland-dark-museum",
    field: "witness",
    place: "Oslo, Slemdal",
    country: "Norway",
    countrySlug: "norway",
    regionSlug: "oslo",
    title: "Let the fresco emerge in Emanuel Vigeland’s dark museum",
    summary:
      "Enter a brick chamber built for painting and give your eyes time to catch up. The painted walls gradually become legible in the low light.",
    kernel:
      "Inside the chamber, stop where the floor and other visitors allow. Give the room a few minutes. Pick out one group of figures, then follow how the painting climbs from the wall towards the vault.",
    rootedness:
      "Emanuel Vigeland intended the building as a museum and later chose to use it as his mausoleum. The darkness is part of the experience of the large fresco and its setting.",
    shift:
      "Spend the first minutes of a museum visit adjusting to the work’s pace.",
    humanReturn:
      "A huge painting that rewards the patience usually given to a small one.",
    responsibility:
      "The room is very dark and contains depictions of nudity, birth and death. Turn bright screens off and ask the museum in advance about mobility access.",
    evidence:
      "Emanuel Vigeland Museum, visitor information documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow 30 to 45 minutes.",
    participation: "Timed public museum visit.",
    access:
      "Regular public opening is Sunday. Book through the museum's ticket link and check your slot before travelling to Slemdal.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "Emanuel Vigeland Museum, visitor information",
          url: "https://www.emanuelvigeland.museum.no/information.htm",
          note: "Advance tickets and public Sunday opening.",
        },
        {
          title: "Visit Oslo",
          url: "https://www.visitoslo.com/attraction/emanuel-vigeland-museum",
          note: "Setting, visitor experience and the fresco.",
        },
      ],
    },
  }),
  guide({
    slug: "saint-nazaire-airbus-atlantic-fuselage",
    field: "work",
    place: "Saint-Nazaire, Loire estuary",
    country: "France",
    countrySlug: "france",
    regionSlug: "saint-nazaire",
    title: "See how aircraft fuselage sections come together in Saint-Nazaire",
    summary:
      "Follow a public industrial tour through the Atlantic production site to understand what has to happen before an airframe leaves the ground.",
    kernel:
      "From the route chosen by the guide, pick one section of fuselage and follow its scale from panel to assembly. Pay attention to how equipment holds and moves pieces that will later leave the site.",
    rootedness:
      "The Loire estuary is shaped by industrial sites that work at the scale of ships and aircraft. Airbus Atlantic’s public tour opens a small view onto the specialised assembly work behind that landscape.",
    shift:
      "Follow one step in a production chain usually encountered as a finished aeroplane.",
    humanReturn:
      "A fuselage becomes a sequence of tasks people and machines have to coordinate.",
    responsibility:
      "The visit is in French and requires closed-toe shoes. The operator excludes children under seven and visitors with limited mobility. The route depends on factory operations.",
    evidence:
      "Saint-Nazaire Tourism, Airbus Atlantic documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Two hours on the published guided tour.",
    participation: "Public factory tour by advance reservation.",
    access:
      "Book via Saint-Nazaire’s tourism office at least 72 hours ahead. Bring a valid original ID card or passport for each participant. Meet near the ticket office at the submarine base and check the listed dates before making travel plans.",
    guideReview: {
      scope: "public_programme",
      reviewBy: "2026-12-18",
      sources: [
        {
          title: "Saint-Nazaire Tourism, Airbus Atlantic",
          url: "https://www.saint-nazaire-tourisme.uk/attractions-and-tours/industrial-tours/airbus/",
          note: "Factory tour, language, booking deadline and ID requirements.",
        },
        {
          title: "Saint-Nazaire Tourism, French booking page",
          url: "https://www.saint-nazaire-tourisme.com/les-visites/les-visites-industrielles/airbus/",
          note: "Booking calendar and original-language visitor rules.",
        },
      ],
    },
  }),
  guide({
    slug: "muharraq-pearling-path-houses",
    field: "work",
    place: "Muharraq, old town",
    country: "Bahrain",
    countrySlug: "bahrain",
    regionSlug: "muharraq",
    title: "Follow a pearl from the shore to Muharraq’s merchant houses",
    summary:
      "The lanes of old Muharraq connect the shore, domestic life and the fortunes that pearl trading built. Read the route one doorway at a time.",
    kernel:
      "Start at a visitor centre and ask which houses are open. Find a dwelling associated with divers and compare its scale with the Siyadi merchant complex. Read the stops in that order to follow the change from labour to trade.",
    rootedness:
      "Pearling organised more than the voyage offshore. Muharraq’s surviving houses and trading spaces show how that economy took shape on land.",
    shift: "Read the size of a house against the work that paid for it.",
    humanReturn: "The walk gives a human scale to the pearl in a shop window.",
    responsibility:
      "Use public entrances and give residents clear passage in the narrow lanes. Bring water and adjust the walk around heat.",
    evidence:
      "Pearling Path, visitor information documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration:
      "Allow around two hours for a selected stretch, longer for the full route.",
    participation: "Self-guided heritage walk with optional house interiors.",
    access:
      "Begin at a visitor centre and confirm the day’s opening hours for individual buildings. Pair the walk with EA’s separate guide to pearl snorkelling if both bookings and weather work.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "Pearling Path, visitor information",
          url: "https://pearlingpath.bh/en/visitor-information/",
          note: "The route, visitor centres and building opening hours.",
        },
        {
          title: "UNESCO, Pearling, Testimony of an Island Economy",
          url: "https://whc.unesco.org/en/list/1364/",
          note: "The component sites and how pearling shaped Muharraq.",
        },
      ],
    },
  }),
  guide({
    slug: "echizen-lift-washi-papyrus-house",
    field: "make",
    place: "Echizen, Fukui",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "echizen",
    title: "Lift your own sheet of washi in Echizen",
    summary:
      "At Papyrus House, lift a mould through a vat of suspended fibres and watch a paper surface take shape as the water drains.",
    kernel:
      "Move the mould as the instructor demonstrates. Watch the fibres at the edge and how they collect as the water runs through. Come back to the finished sheet after drying and hold it against the light.",
    rootedness:
      "Echizen Washi Village groups paper history, demonstrations and a short hands-on introduction within the same district. The finished sheet makes the difference between a liquid pulp and a material you can use easy to see.",
    shift: "Notice how the screen separates pulp from water.",
    humanReturn: "A sheet of paper with visible evidence of how it was formed.",
    responsibility:
      "Reserve in advance and confirm the session language. The material and process in the visitor session may differ from specialist papers produced nearby.",
    evidence:
      "Echizen Washi Village, Papyrus House documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration:
      "About 20 minutes for papermaking, plus drying and any museum visit.",
    participation: "Hands-on public paper workshop.",
    access:
      "Go to Papyrus House in Echizen Washi Village. The village lists Tuesday and the New Year period as closures. Check which buildings your booking covers.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "Echizen Washi Village, Papyrus House",
          url: "https://www.echizenwashi.jp/english/information/papyrus.html",
          note: "The public papermaking sequence, duration and reservation information.",
        },
        {
          title: "Fukui Tourism, Echizen Washi Village",
          url: "https://www.fuku-e.com/en/attractions/detail_2032.html",
          note: "The village and workshop location.",
        },
      ],
    },
  }),
  guide({
    slug: "corning-shape-glass-at-the-museum",
    field: "make",
    place: "Corning, New York",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "corning",
    title: "Make a piece of hot glass in Corning",
    summary:
      "See the decisions that happen between the furnace and the finished object. Then make something with a glassworker at your elbow.",
    kernel:
      "Choose one session and learn what you can shape yourself. Watch how the worker reads the temperature from the glass and decides when to reheat it. Keep track of the one decision that changes the shape of the piece.",
    rootedness:
      "Glass became part of Corning’s industrial and scientific identity. The museum puts contemporary glassmaking next to the objects and inventions the material made possible.",
    shift: "Watch how a timing decision changes the shape of glass.",
    humanReturn:
      "A small object you can connect with a specific decision in the studio.",
    responsibility:
      "Check minimum age, what the instructor handles and the finished piece’s collection or shipping arrangements. Follow all workshop safety instructions.",
    evidence:
      "Corning Museum of Glass, Make Your Own Glass documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration:
      "Check the session length at booking and allow extra time to watch a demonstration.",
    participation: "Ticketed making session with instructor supervision.",
    access:
      "Reserve a Make Your Own Glass session in addition to planning any museum visit. Check the selected activity and whether its ticket covers museum admission.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "Corning Museum of Glass, Make Your Own Glass",
          url: "https://glassmaking.cmog.org/make-your-own-glass",
          note: "Available procedures and the minimum age and handling rules for each.",
        },
        {
          title: "Corning Museum of Glass, plan your visit",
          url: "https://visit.cmog.org/plan-your-visit",
          note: "Hours, admission and campus practicalities.",
        },
      ],
    },
  }),
  guide({
    slug: "auckland-sail-ted-ashby",
    field: "move",
    place: "Auckland, Hobson Wharf",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "auckland",
    title: "Take a scow out into Auckland Harbour",
    summary:
      "On a wide timber deck at the Maritime Museum, see the harbour from a vessel built to explain New Zealand’s working sail.",
    kernel:
      "Before departure, find the broad, flat deck and look at the rig. Underway, watch how the crew uses the lines to set or adjust sail. You can offer a hand when the crew invites passengers to help.",
    rootedness:
      "Ted Ashby is a replica sailing scow. Vessels of this kind carried cargo in the shallow waters and around the inlets of northern New Zealand.",
    shift: "See how work on deck shapes the vessel.",
    humanReturn:
      "Once you see how space is used on deck, the shape of a workboat makes sense.",
    responsibility:
      "Bring a layer and follow the crew’s instructions. Advise the museum about mobility requirements when booking and check weather changes.",
    evidence:
      "New Zealand Maritime Museum, Ted Ashby documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "One hour on the water, plus check-in.",
    participation: "Public sailing with a crew.",
    access:
      "Reserve the Ted Ashby public sailing at the New Zealand Maritime Museum on Hobson Wharf. Use your confirmation for arrival time and sailing conditions.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "New Zealand Maritime Museum, Ted Ashby",
          url: "https://www.maritimemuseum.co.nz/sailings/ted-ashby",
          note: "Public sailing, duration and access arrangements.",
        },
        {
          title: "Auckland Tourism, Ted Ashby Sailings",
          url: "https://www.aucklandnz.com/events/all-events/ted-ashby-sailings",
          note: "The sailing scow and the visitor experience.",
        },
      ],
    },
  }),
  guide({
    slug: "lahti-ski-jump-simulator",
    field: "play",
    place: "Lahti, Sports Centre",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "lahti",
    title: "Try the take-off in Lahti’s ski-jump simulator",
    summary:
      "Start inside the Ski Museum, where a simulated jump gives you a feel for the timing that looks effortless from below the real hill.",
    kernel:
      "Try the ski-jump station and pay attention to the sequence of the movement. Afterwards, go outside to look up the actual ski jumps. The hill changes scale once you have tried to time the take-off.",
    rootedness:
      "The Salpausselkä jumps and the museum share Lahti’s Sports Centre. Their proximity connects a museum game to the real terrain of the city’s winter sport.",
    shift:
      "Look at the real jump after you have tried a model of the movement.",
    humanReturn:
      "A way to watch the next ski-jump broadcast with a more specific eye.",
    responsibility:
      "Confirm that the simulator is operating and ask about its physical demands. An accessible museum entrance does not imply that every station is suitable for everyone.",
    evidence:
      "Ski Museum, visitor activities documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration:
      "Allow about an hour for museum and simulator, with time to look at the jumps.",
    participation: "Public museum admission and interactive station.",
    access:
      "Check the Ski Museum’s opening calendar before travelling to Urheilukeskus. Major events can affect access to the surrounding sports precinct.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "Ski Museum, visitor activities",
          url: "https://www.hiihtomuseo.fi/en/do-and-discover/ready-and-steady-activities-in-the-museum/",
          note: "The ski-jump simulator and other permanent activities.",
        },
        {
          title: "Ski Museum, opening hours and fees",
          url: "https://www.hiihtomuseo.fi/en/visit-us/opening-hours-and-admission-fees/",
          note: "Opening, ticket types and special dates.",
        },
      ],
    },
  }),
  guide({
    slug: "tiritiri-matangi-listen-on-replanted-island",
    field: "nature",
    place: "Tiritiri Matangi, Hauraki Gulf",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "auckland",
    title: "Listen for native birds on a replanted Auckland island",
    summary:
      "Take the ferry to Tiritiri Matangi and let a guide put names to the sounds coming from its restored bush.",
    kernel:
      "Walk at the pace of the guided group. Learn one call before you try to spot its source. On the way to the lighthouse area, notice where shade and vegetation change before the sound changes.",
    rootedness:
      "Volunteers replanted the island and its restoration has made room for native wildlife. Ferry access makes it possible to see that work from a public track.",
    shift: "Match a sound to one part of a restored habitat.",
    humanReturn:
      "A bird call becomes part of the landscape instead of background sound.",
    responsibility:
      "Clean footwear and check and seal bags under the island’s biosecurity rules. Stay on tracks and give birds space. Sightings and ferry operation vary.",
    evidence:
      "Supporters of Tiritiri Matangi, guided walks documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration:
      "A day trip including the ferry, with guided walk duration set by the route.",
    participation: "Public ferry and optional bookable guided walk.",
    access:
      "Check the ferry return leg first, then confirm how to add the walk. Bring water and lunch and follow the island’s biosecurity instructions before boarding.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "Supporters of Tiritiri Matangi, guided walks",
          url: "https://tiritirimatangi.org.nz/guided-tours/",
          note: "Ferry planning and the two guided routes.",
        },
        {
          title: "Department of Conservation, Tiritiri Matangi",
          url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/tiritiri-matangi-island/",
          note: "Island access, track conduct and biosecurity.",
        },
      ],
    },
  }),
  guide({
    slug: "lima-pantanos-de-villa-laguna-mayor",
    field: "nature",
    place: "Lima, Chorrillos",
    country: "Peru",
    countrySlug: "peru",
    regionSlug: "lima",
    title: "Watch Lima’s wetland from the Laguna Mayor trail",
    summary:
      "In Chorrillos, follow the reserve’s public circuit through tall reeds, then pause where the water comes into view.",
    kernel:
      "On the traditional circuit, pay attention to which birds stay along the reed edge and which use open water. At the lookout, give the view long enough for movements on the lagoon to become distinct.",
    rootedness:
      "Pantanos de Villa preserves wetland habitat near Lima’s Pacific coast. The reed beds and lagoons change the sound and shape of the city within a short distance.",
    shift: "Read a city wetland from the edge of the reeds.",
    humanReturn:
      "An hour in Lima that draws your attention to the species and water systems sharing the city.",
    responsibility:
      "Use the marked paths and follow the reserve’s guidance on noise. Bring sun protection or a layer for the coastal fog. Wildlife sightings are variable.",
    evidence:
      "Pantanos de Villa, traditional circuit documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow about an hour, plus travel from central Lima.",
    participation:
      "Public reserve circuit. Confirm the current access time and any guide requirements.",
    access:
      "Use the traditional circuit listing for the entrance in Chorrillos, reservations, and admission. Confirm the final start time before leaving central Lima.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "Pantanos de Villa, traditional circuit",
          url: "https://pantanosdevilla.pe/tradicional/",
          note: "The official visitor circuit and reservation contacts.",
        },
        {
          title: "Visit Lima, Pantanos de Villa",
          url: "https://visitalima.pe/atractivos/pantanos-de-villa/",
          note: "Municipal visitor information for the wetland in Chorrillos.",
        },
      ],
    },
  }),
  guide({
    slug: "beppu-takegawara-hot-sand-bath",
    field: "restore",
    place: "Beppu, Motomachi",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "beppu",
    title: "Try a hot sand bath at Takegawara Onsen",
    summary:
      "Inside Takegawara’s old bathhouse, change into a yukata before attendants cover you with warmed sand for a short timed session.",
    kernel:
      "Ask for the sand bath at the counter. Follow staff directions through the change and into the sand room. Staff place warmed sand over you while you lie down, then tell you when the session is over.",
    rootedness:
      "Takegawara links two Beppu bathing traditions in a single public building. The bathhouse’s timber frontage is as much a part of its neighbourhood as the hot water and heated sand inside.",
    shift: "Experience the heat of the springs through a different material.",
    humanReturn:
      "A different way to understand the heat that runs through Beppu’s bathing culture.",
    responsibility:
      "Check the bathhouse’s rules before attending. Tell staff if you feel uncomfortable and leave the sand if they advise it. Respect privacy in changing and bathing spaces.",
    evidence:
      "City of Beppu, Takegawara Onsen documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow around an hour including changing and any wait.",
    participation: "Staff-led sand bath at a public onsen.",
    access:
      "Check sand-bath hours separately from ordinary bathing. Ask at reception at 16-23 Motomachi about the next slot and same-day availability.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "City of Beppu, Takegawara Onsen",
          url: "https://www.city.beppu.oita.jp/seikatu/gaikokujinmuke/ei/detail7.html",
          note: "Ordinary and sand baths, how the sand bath works and visitor information.",
        },
        {
          title: "Japan National Tourism Organization, Takegawara Onsen",
          url: "https://www.japan.travel/en/spot/389/",
          note: "Location, bathhouse history and access.",
        },
      ],
    },
  }),
  guide({
    slug: "reykjavik-vesturbaejarlaug-neighbourhood-pool",
    field: "restore",
    place: "Reykjavík, Vesturbær",
    country: "Iceland",
    countrySlug: "iceland",
    regionSlug: "reykjavik",
    title: "Spend a morning in Reykjavík’s Vesturbær pool",
    summary:
      "At the neighbourhood pool on Hofsvallagata, leave time after your laps to sit outside in one of the warm pools.",
    kernel:
      "Start with a short swim if you like. Move to a hot pot according to posted temperatures and notice how long people linger between conversations and laps. Leave yourself time to dress without rushing.",
    rootedness:
      "Municipal pools are everyday public facilities in Reykjavík. Vesturbæjarlaug brings a swim lane and a shared outdoor place to sit into the same neighbourhood routine.",
    shift: "Give the morning the pace of a neighbourhood pool.",
    humanReturn:
      "One familiar way to start the day on the west side of the city.",
    responsibility:
      "Follow the pre-swim shower and swimsuit rules. Keep cameras away from changing and bathing areas.",
    evidence:
      "City of Reykjavík, Vesturbæjarlaug documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow 45 to 75 minutes.",
    participation: "Public municipal pool admission.",
    access:
      "Enter at Hofsvallagata 54. Check the city’s conditions, admission and any maintenance alerts before walking over.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "City of Reykjavík, Vesturbæjarlaug",
          url: "https://www.reykjavik.is/en/vesturbaejarlaug-pool",
          note: "Pool location, facilities, admission and hours.",
        },
        {
          title: "Visit Reykjavík, Vesturbæjarlaug",
          url: "https://visitreykjavik.is/service/vesturbaejarlaug-pool",
          note: "Neighbourhood context and pool facilities.",
        },
      ],
    },
  }),
  guide({
    slug: "brussels-mim-listen-to-instruments",
    field: "gather",
    place: "Brussels, Mont des Arts",
    country: "Belgium",
    countrySlug: "belgium",
    regionSlug: "brussels",
    title: "Hear the instruments behind the glass in Brussels",
    summary:
      "Use the museum’s audio stops to match unusual shapes to the sounds their makers built them to produce.",
    kernel:
      "Pick two instruments from the collection whose shapes differ. Listen to each at the corresponding stop, then try to spot the part that starts the sound. The comparison can turn a display case into a short listening session.",
    rootedness:
      "The Musical Instruments Museum occupies the former Old England department store on Mont des Arts. Its collections connect instruments shown as objects with the musical practices that gave them a use.",
    shift:
      "Connect the shape of an instrument to the sound in your headphones.",
    humanReturn:
      "A way to recognise one unfamiliar instrument by ear as well as by outline.",
    responsibility:
      "Check how audio equipment is provided and which stops are available. Keep passage clear for people who are using listening points.",
    evidence:
      "Musical Instruments Museum, multimedia guide documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Allow 60 to 90 minutes.",
    participation: "Self-guided museum admission with audio content.",
    access:
      "Enter on rue Montagne de la Cour. Check opening and audio-guide details with the museum before visiting.",
    guideReview: {
      scope: "public_admission",
      sources: [
        {
          title: "Musical Instruments Museum, multimedia guide",
          url: "https://www.mim.be/en/visit-multimediaguide",
          note: "Audio equipment and listening along the visit.",
        },
        {
          title: "Musical Instruments Museum, practical information",
          url: "https://www.mim.be/index.php/en/practical-information-0",
          note: "Admission, opening and access.",
        },
      ],
    },
  }),
  guide({
    slug: "sao-paulo-sunday-matinal-station-concert",
    field: "gather",
    place: "São Paulo, Luz",
    country: "Brazil",
    countrySlug: "brazil",
    regionSlug: "sao-paulo",
    title: "Hear a morning concert inside São Paulo’s former railway station",
    summary:
      "The Matinais series gives you a reason to step into the hall built within Júlio Prestes Station on a weekend morning.",
    kernel:
      "Choose an ensemble or piece from the upcoming programme and listen for where the sound seems to come from within the hall. Take a moment before the concert to look at the ceiling and the scale of the former station space.",
    rootedness:
      "Sala São Paulo was built within the Júlio Prestes railway complex. A morning performance puts the city’s concert life inside architecture built for a different kind of movement.",
    shift: "Listen to how a large room reshapes a performance.",
    humanReturn: "A railway building that stays with you through sound.",
    responsibility:
      "Review the event’s age and ticket rules. Arrive before the doors close at the final call.",
    evidence:
      "Sala São Paulo, Matinais calendar documents the public experience and access. EA reviewed the published information on 20 November 2026. Daily conditions and individual access have yet to be checked on site.",
    duration: "Use the listed concert length and add time for entry.",
    participation: "Ticketed public morning concert on selected dates.",
    access:
      "Filter the official calendar for Matinais. Check when tickets are released and whether the event is in the main hall or another space in the complex.",
    guideReview: {
      scope: "public_programme",
      sources: [
        {
          title: "Sala São Paulo, Matinais calendar",
          url: "https://salasaopaulo.art.br/salasp/pt/programacao-ingressos?Temporadas=Matinais",
          note: "Dates and booking details for morning concerts.",
        },
        {
          title: "Sala São Paulo, ticket information",
          url: "https://salasaopaulo.com.br/salasp/pt/informacoes-ingressos",
          note: "Ticket release, box office and arrival rules.",
        },
      ],
    },
  }),
];
