import type { PublicExperience } from "./catalog";

type ChapterStop = { slug: string; moment: string; why: string };
export type CityChapter = {
  slug: string;
  name: string;
  country: string;
  regions: string[];
  title: string;
  intro: string;
  pace: string;
  planning: string;
  stops: ChapterStop[];
};

/** Authored local combinations. These are ideas to adapt, not timed or bookable packages. */
export const cityChapters: readonly CityChapter[] = [
  {
    slug: "lima",
    name: "Lima",
    country: "peru",
    regions: ["lima"],
    title: "Make the meal. Leave room for the trees.",
    intro:
      "A cooking class in Miraflores and a pause in San Isidro give Lima two different rhythms. Learn what holds a Peruvian meal together, then let the olive grove offer a smaller, unstructured encounter with the city. Choose separate parts of your stay if that leaves more room to enjoy both.",
    pace: "A confirmed three-hour cooking class and a separate daylight park visit, with generous travel time between districts.",
    planning:
      "Book SkyKitchen's Peruvian Classics format directly and confirm the address, language, minimum group, dietary needs and rooftop access. A market tour is a separate extra. El Olivar is an ordinary public park, not a guided continuation of the class. Follow municipal notices and paths, leave trees and wildlife undisturbed and check any access needs. Arrange transport between Miraflores and San Isidro independently. No shared ticket, harvest, timed walking route, transfer or EA booking is included.",
    stops: [
      {
        slug: "cook-lima-beyond-the-ceviche",
        moment: "Begin with a meal you help make",
        why: "The booked class gives familiar dishes a practical sequence. Let its full duration and dietary arrangements determine that part of the day.",
      },
      {
        slug: "find-a-slower-lima-between-the-olive-trees",
        moment: "On a separate daylight pause, make less of a plan",
        why: "A short public path through the grove offers an urban contrast to the teaching kitchen. It works without adding another ticket or promising a secluded retreat.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    country: "germany",
    regions: ["hamburg"],
    title: "Cross the harbour. Give the evening to the music.",
    intro:
      "A working ferry and a concert offer two ways to join Hamburg rather than only look at it. Read the waterfront from route 62, then return to the Elbphilharmonie for a performance chosen by the music, not just the building.",
    pace: "A flexible daytime crossing and a separately booked concert, with a generous break between them.",
    planning:
      "Check the live ferry timetable, ticket rules and return pier before boarding. A ferry journey does not reserve a seat or guarantee a connection to the concert. Confirm that the performance ticket is for the Elbphilharmonie, not the separate Laeiszhalle. A Plaza ticket is not concert admission. Review current transport and bridge works, accessibility, event age guidance and arrival instructions. Allow time to eat, change plans and reach the hall independently. This is an editorial pairing, not a package, continuous walking route, shared reservation or EA booking.",
    stops: [
      {
        slug: "cross-hamburgs-working-harbour-on-ferry-62",
        moment: "During the day, follow a public crossing",
        why: "A regular transport route reveals the relationship between piers, shore neighbourhoods and the working port. Choose a segment that leaves room for the return.",
      },
      {
        slug: "hear-hamburg-from-a-seat-in-the-elbphilharmonie",
        moment: "At a confirmed concert, let the room gather",
        why: "Choose an artist or programme you want to hear and give the performance your full attention. The evening works independently of whether the ferry weather cooperates.",
      },
    ],
  },
  {
    slug: "oslo",
    name: "Oslo",
    country: "norway",
    regions: ["oslo"],
    title: "A quiet page. A Sunday with another rhythm.",
    intro:
      "Use Deichman Bjørvika as a library, then let a suitable Sunday lead to live music at Blå. The contrast gives Oslo room for both private attention and a shared evening without turning either place into a staged local encounter.",
    pace: "A reading pause on a public-opening day and a separately checked Sunday music visit, together or on different days.",
    planning:
      "Reading in the library is distinct from borrowing, which has residence and identification requirements. Check holiday opening and choose an appropriate reading area. Blå's event timing, age rules, identification, admission and accessible entry need direct confirmation. A quieter acoustic set and the late club programme are not interchangeable. Do not assume an outdoor performance, free entry or a reserved seat. These venues are in different parts of Oslo. Arrange transport, meals and the return independently. This is not a timed route, combined ticket, guaranteed programme or EA-hosted evening.",
    stops: [
      {
        slug: "borrow-an-hour-not-a-book-in-oslo",
        moment: "Begin with time that does not need filling",
        why: "A civic reading room offers a useful pause without a purchase. Let the library's actual floor rules and available seats shape the visit.",
      },
      {
        slug: "give-an-oslo-sunday-to-the-frank-znort-quartet",
        moment: "On a confirmed Sunday, join the next set",
        why: "A recurring musical gathering gives the evening a specific local focus. Choose a set and a return plan that suit your energy and the venue's admission conditions.",
      },
    ],
  },
  {
    slug: "brussels",
    name: "Brussels",
    country: "belgium",
    regions: ["brussels"],
    title: "Taste the difference. Make the next decision yourself.",
    intro:
      "Two waffle recipes and a chocolate-making session give familiar Belgian flavours a more active role. Compare first, then use your own judgement at a workshop table. Cantillon adds a separate adult option for following a drink back to the equipment and processes behind it.",
    pace: "A flexible waffle stop, a confirmed chocolate session and an optional separate brewery visit.",
    planning:
      "Choose Dandoy's actual waffle-serving branch and check ingredients and seating. Laurent Gerbaud's Saturday workshop needs a dated place confirmed directly. A gift voucher is not a reservation, and the task uses prepared chocolate rather than making it from cocoa beans. Cantillon is a different venue with its own opening days, age rules and visit arrangements. Alcohol tasting is for adults of legal drinking age and is optional, not essential to this combination. Check allergy and access needs separately. No shared ticket, walking route, transport or EA booking is supplied.",
    stops: [
      {
        slug: "compare-brussels-and-liege-one-waffle-at-a-time",
        moment: "Give a familiar treat a second texture",
        why: "Comparing two preparations shifts the attention from elaborate toppings to what the waffle itself is doing. Order only what suits the group and current availability.",
      },
      {
        slug: "make-a-brussels-chocolate-with-your-own-balance-of-flavours",
        moment: "At a booked session, make a flavour choice",
        why: "Prepared chocolate and dried or candied fruit give a beginner a real decision. Leave room for the full workshop rather than treating it as a quick shop visit.",
      },
      {
        slug: "follow-lambic-from-the-brewery-to-the-glass",
        moment: "For interested adults, follow another process separately",
        why: "Cantillon connects equipment and fermentation with a tasting. Ordinary admission does not promise active brewing, and alcohol need not be part of everyone's Brussels visit.",
      },
    ],
  },
  {
    slug: "stockholm",
    name: "Stockholm",
    country: "sweden",
    regions: ["stockholm"],
    title: "Read a room. Look around a rescued ship.",
    intro:
      "Hallwyl House and the Vasa Museum give Stockholm two very different preserved worlds. One begins with an accumulation of household objects, the other with a ship too large to understand at a glance. Move from a choice someone made for a room to the decisions behind a vessel, giving each museum its own time.",
    pace: "Two separately planned museum visits across the stay, with enough time to return to a detail.",
    planning:
      "Hallwyl's ordinary self-guided route covers reception rooms, not every part of the house, and there is no lift. It is not wheelchair or walker accessible. Vasa has separate admission, tour languages and visitor arrangements. Check opening days, current exhibitions, accessible routes and any holiday restrictions for each museum before travel. The houses are in different parts of Stockholm, so arrange transport and each admission separately. This is not a continuous walking route, shared reservation, combined ticket or EA package.",
    stops: [
      {
        slug: "read-stockholm-through-a-collectors-house",
        moment: "Start small, with an object someone chose to keep",
        why: "A room can reveal choices about collecting, comfort and preservation without being mistaken for the life of an entire city.",
      },
      {
        slug: "read-stockholm-around-a-rescued-ship",
        moment: "On another visit, let one object change the scale",
        why: "An included public tour can introduce the Vasa before you return to a detail independently. The visit is around the ship, not on board.",
      },
    ],
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    country: "united-states",
    regions: ["san-francisco"],
    title: "Listen to the street. Then give the garden time.",
    intro:
      "A working cable car brings San Francisco's gradients, junctions and shared streets into focus. The Japanese Tea Garden in Golden Gate Park offers a contrasting pace through planting, paths and carefully framed views. The contrast works across a stay without pretending the two places sit beside one another.",
    pace: "One public-transport ride and a separately planned garden pause, with time for the journey between districts.",
    planning:
      "The cable car is not the F-line streetcar and does not run to Golden Gate Park. Arrange that transfer separately and check SFMTA's actual route, queues and access limitations. Cable cars are not wheelchair accessible. Garden admission, seasonal closing time and any tea-house purchase are separate. Choose suitable garden paths instead of assuming the steep moon bridge is necessary or accessible. Check current closures and weather. This is not a supplied walking route, combined ticket, transport package or guarantee of a quiet garden.",
    stops: [
      {
        slug: "ride-san-francisco-at-the-grip-operators-pace",
        moment: "Let the city move at the operator's pace",
        why: "The bell, grip mechanism and gradients turn a famous image into a working journey shared with other passengers.",
      },
      {
        slug: "let-a-san-francisco-garden-change-your-pace",
        moment: "Elsewhere in the city, make a smaller circuit",
        why: "A garden visit can be about a single view and an unhurried return, without requiring a tea ceremony or every bridge and path.",
      },
    ],
  },
  {
    slug: "prague",
    name: "Prague",
    country: "czechia",
    regions: ["prague"],
    title: "Give the object movement. Read the movement's history.",
    intro:
      "A short glassblowing encounter, a small-marionette workshop and Tyrš House's account of the Sokol movement offer three different kinds of Prague attention. Choose one making task, then give the history visit its own time. Two workshops do not need to compete for the same afternoon.",
    pace: "One confirmed making session and a separately planned heritage visit across a stay.",
    planning:
      "PRAGL's hot-shop session and Marionety Truhlář's three-to-four-hour puppet workshop are separate businesses. The glass object needs cooling and later collection. The marionette uses prepared wooden parts, not a raw-block carving course. Confirm ages, tools, language, actual venue and access for each. Tyrš House has a separate public visitor route and current programme check. Admission does not promise a Sokol class or participation in a members' session. These stops are not a continuous walking route, combined workshop, shared ticket or EA package. Do not force all three into one day.",
    stops: [
      {
        slug: "give-molten-glass-your-first-breath",
        moment: "At a booked hot-shop session, work with a changing material",
        why: "The glassmaker controls the heat while a visitor makes a brief supervised contribution. Plan later collection rather than assuming a hot object can leave immediately.",
      },
      {
        slug: "give-a-prague-marionette-its-first-movement",
        moment: "On another appointment, build a character that can move",
        why: "Prepared components make a three-to-four-hour introduction possible. The result is a first assembly, not a compressed carving apprenticeship.",
      },
      {
        slug: "read-prague-through-a-movement",
        moment: "Give a historical movement its own context",
        why: "Tyrš House offers a public way into Sokol's history. Seeing the place is not permission to join a private training session or claim a present-day performance.",
      },
    ],
  },
  {
    slug: "montreal",
    name: "Montréal",
    country: "canada",
    regions: ["montreal"],
    title: "Let the market choose a meal. Let the canal set a pace.",
    intro:
      "Jean-Talon Market and a manageable Lachine Canal ride offer contrasting parts of Montréal. Shopping brings the day down to ingredients and conversations. Cycling makes the city's distance, water and former industrial edges physical. They are separate outings to adapt, not an invented market-to-canal route.",
    pace: "A flexible market meal and, on another suitable part of the stay, a weather-appropriate canal ride.",
    planning:
      "Jean-Talon is in Little Italy, not beside the proposed Lachine Canal cycling segment. Plan travel between areas separately. Buy only the food you can safely carry and store, and do not assume every ingredient is from Québec or that samples are included. The canal needs a suitable bicycle, lawful cycling surfaces, current Parks Canada notices and an exit or turnaround suited to the rider. October market-wall work, colder conditions and winter surface changes affect the two outings differently. No picnic delivery, bicycle hire, transfer, continuous itinerary or combined booking is supplied.",
    stops: [
      {
        slug: "build-a-montreal-lunch-at-jean-talon-market",
        moment: "Make the first choice at a working food counter",
        why: "A small meal becomes a way to compare origins, seasons and preparation. The market remains an ordinary shopping place, not a guaranteed tasting tour.",
      },
      {
        slug: "read-montreal-between-the-canal-locks",
        moment: "On a suitable separate outing, follow the canal's pace",
        why: "A manageable ride gives water and former infrastructure a place in the visit. Check bicycle access and conditions, rather than assuming navigation season means a clear winter path.",
      },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    country: "germany",
    regions: ["berlin"],
    title: "Change the scale. Change the sense.",
    intro:
      "A former runway, a sunken neighbourhood garden and a fragrance studio offer three different ways to pay attention in Berlin. Use movement for scale, a park for a pause and guided smelling for a smaller creative decision. None needs to explain the whole city.",
    pace: "Choose one substantial outing and leave the other encounters for separately planned parts of a stay.",
    planning:
      "Tempelhofer Feld needs suitable riding conditions, a bicycle and a check of seasonal gate times. Körnerpark's sunken layout requires its own entrance and mobility check. Frau Tonis is on Zimmerstraße, not inside either park. Its workshop voucher and separately confirmed appointment are different steps, and retail hours do not guarantee a session. Check language, scent sensitivities and tool or access assistance before paying. These places do not form a supplied cycling route or walking itinerary. No combined ticket, transfer or EA package is implied.",
    stops: [
      {
        slug: "cycle-the-runway-that-became-a-berlin-park",
        moment: "Give the city room to open",
        why: "A manageable ride makes the scale of shared public space physical. Stay on permitted surfaces and plan around the actual gate closing.",
      },
      {
        slug: "step-below-neukoellns-streets-into-koernerpark",
        moment: "On another outing, lower the pace",
        why: "The garden's change in level makes a small neighbourhood pause distinctive. Café service, fountains and gallery events are separate, variable extras.",
      },
      {
        slug: "compose-a-berlin-scent-by-smelling-before-naming",
        moment: "Let a confirmed appointment change the sense",
        why: "A guided comparison of prepared house fragrances offers a different creative role. It is not professional training or a guaranteed vacancy after buying a voucher.",
      },
    ],
  },
  {
    slug: "hanoi",
    name: "Hanoi",
    country: "vietnam",
    regions: ["hanoi"],
    title: "Find the cup. Move the brush. Watch the water become a stage.",
    intro:
      "Egg coffee, Vietnamese calligraphy and a public water-puppet performance connect taste, making and looking in Hanoi. Let one familiar Old Quarter stop introduce a less expected material or movement. These are complementary choices, not a guided tour of everything local.",
    pace: "Keep a café pause flexible, give the workshop a confirmed session and choose the theatre's actual performance time separately.",
    planning:
      "Giảng's Nguyễn Hữu Huân branch differs from its other café addresses. Ask about egg, dairy and access rather than assuming every coffee is suitable. Confirm Zó's actual workshop venue, language, materials and session before travelling. Reserve each dated activity separately. A Thăng Long theatre ticket is for a dated public performance, not backstage access or an opportunity to handle puppets. Leave enough time to reach each address and respect rules about photography and occupied tables. No shared reservation, food tour, transfer or EA package is implied.",
    stops: [
      {
        slug: "find-hanois-coffee-beneath-the-egg-cream",
        moment: "Give the Old Quarter one deliberate pause",
        why: "The contrast between topping and coffee makes an ordinary order newly legible. Choose the actual branch and check its service conditions.",
      },
      {
        slug: "let-a-brush-meet-do-paper",
        moment: "At a separately booked table, make a mark",
        why: "A guided introduction gives the paper beneath the brush a role in the experience. It is not a claim to mastery or access to a paper-making village.",
      },
      {
        slug: "watch-a-stage-made-of-water",
        moment: "Let a real performance choose another part of the day",
        why: "Water changes how a figure can appear and move. Watch as an audience member without assuming a private demonstration or backstage visit.",
      },
    ],
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    country: "united-kingdom",
    regions: ["edinburgh"],
    title: "Read the street. Assemble the object. Follow the caller.",
    intro:
      "A historical close, a Harris Tweed bag workshop and a public ceilidh offer three distinct roles in Edinburgh. Start with a recognisable street, then let a prepared component or an explained dance make the city less passive. Choose what suits your curiosity and physical comfort.",
    pace: "One booked daytime experience and, on a suitable separate evening, a public dance.",
    planning:
      "Mary King's Close is an enclosed historical guided route with many stairs, no lift and a minimum age of five. This chapter does not recommend a paranormal product. Islander's session is for participants twelve and above and uses prepared components. Confirm the selected Edinburgh workshop address rather than borrowing one from an older listing. The ceilidh has a separate dated ticket, venue and participation arrangement. You may watch rather than dance. Confirm languages, mobility needs, current dates and late transport independently. The short-lived October storytelling festival is not assumed to run throughout the year. No combined ticket or transfer is implied.",
    stops: [
      {
        slug: "walk-the-edinburgh-street-below-the-street",
        moment: "Choose a historical route below the present street",
        why: "The guide interprets a particular enclosed site. Read the steps and sensory conditions before deciding whether the visit fits.",
      },
      {
        slug: "give-harris-tweed-a-bag-shaped-afternoon",
        moment: "On another session, choose the parts yourself",
        why: "A cloth panel and prepared bag components put some of the object's decisions in your hands. The weaving has already happened in the Outer Hebrides.",
      },
      {
        slug: "let-the-caller-start-the-dance",
        moment: "If a confirmed public evening fits, learn the pattern",
        why: "A caller can make the room's next movement less mysterious. Participation is optional and the actual programme needs a separate booking check.",
      },
    ],
  },
  {
    slug: "madrid",
    name: "Madrid",
    country: "spain",
    regions: ["madrid"],
    title: "Read the platform. Look across the court. Listen to the exchange.",
    intro:
      "A former metro station, a restored pelota court and a live flamenco room reveal three different kinds of Madrid attention. Two make past public spaces easier to read. The third asks you to follow people making something happen now. They need not share one day.",
    pace: "Choose one heritage visit and leave the performance for a separately booked evening.",
    planning:
      "Chamberí's free guided museum visit needs advance reservation and has its own monthly place release. Beti Jai's public access and any guided activity require a separate current check. Visiting the restored court does not promise a match. Cardamomo is a dated commercial performance with its own seating, age and admission terms, not an extension of either heritage ticket. Confirm actual addresses, languages and accessibility for each. Do not enter metro tracks, cross museum barriers or treat a working performance as permission to record. No combined reservation, transfer or EA package is implied.",
    stops: [
      {
        slug: "step-off-madrids-timetable-at-chamberi",
        moment: "Stop at a station trains no longer serve",
        why: "A guide connects tiles, advertising and the former commuter route. The museum visit is not independent tunnel exploration.",
      },
      {
        slug: "step-inside-madrids-surviving-pelota-court",
        moment: "Give a restored sports space its own visit",
        why: "The court makes another former urban gathering space visible. A sporting performance is not guaranteed by admission.",
      },
      {
        slug: "listen-for-the-conversation-inside-flamenco",
        moment: "On a booked evening, follow the exchange",
        why: "Voice, guitar, clapping and movement form a live relationship. Let the musicians' programme matter more than collecting a generic flamenco image.",
      },
    ],
  },
  {
    slug: "florence",
    name: "Florence",
    country: "italy",
    regions: ["florence"],
    title: "Make a surface. Make a cover. Leave time for a page.",
    intro:
      "Paper marbling, an adult book-cover workshop and a quiet library pause put a different kind of attention beside Florence's famous sights. Choose one making session rather than collecting both, then leave a smaller interval simply for reading something of your own.",
    pace: "One separately arranged making session and a flexible library visit on an open day.",
    planning:
      "Il Papiro's marbling session and Scuola del Cuoio's three-hour adult leather-cover workshop are different businesses and bookings. Confirm the actual teaching venue, language, materials, tools and any collection time. The leather workshop is eighteen and above and does not imply a non-animal alternative. Biblioteca delle Oblate has free public entry, but registration conditions apply to some collection services. Bring your own reading and check the limited evening opening of selected spaces. Do not assume a reserved café table, cathedral view or a continuous walking route between all three. No combined workshop, ticket or transfer is implied.",
    stops: [
      {
        slug: "draw-a-sheet-on-floating-colour",
        moment: "Let a moving surface take a pattern",
        why: "A paper-marbling introduction gives a familiar decorated sheet a process. Confirm the actual public class rather than assuming an unbooked shop demonstration.",
      },
      {
        slug: "make-the-cover-before-filling-the-pages",
        moment: "On a different session, consider the object around the paper",
        why: "The instructed adult workshop connects cutting, assembly and finishing. It is separate from professional training and uses leather.",
      },
      {
        slug: "bring-a-book-to-florences-oblate-courtyard",
        moment: "Leave one interval without a making task",
        why: "A public library lets your own reading become part of the visit. Quiet use and an available seat matter more than a particular photograph.",
      },
    ],
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    country: "united-states",
    regions: ["new-orleans"],
    title: "Begin at the cooktop. Leave an evening for listening.",
    intro:
      "A hands-on meal, an attentive Preservation Hall set and a Bywater courtyard offer three different roles in New Orleans. Cooking puts a familiar cuisine back into a sequence of tasks. Live music asks you to stop doing and listen. Choose the room and format that fit rather than trying to collect every evening.",
    pace: "Give the cooking class its own three-hour session and choose music on a separately planned evening.",
    planning:
      "The School of Cooking's hands-on class is for adults eighteen and over and is not its demonstration or city-pass product. Declare allergies before booking and confirm the dated menu. Preservation Hall and Bacchanal have different admission, age, seating and music arrangements. Bywater is a separate journey from the French Quarter, not an included stop on the class. Check each programme and the return journey. Alcohol is optional, musicians are working and audience admission is not permission to film a set. No combined ticket, reserved table, transfer or EA package is implied.",
    stops: [
      {
        slug: "cook-a-new-orleans-meal-from-the-first-chop",
        moment: "Give a familiar meal its preparation back",
        why: "An instructed adult class connects ingredients, technique and eating. Confirm the actual hands-on menu rather than assuming every gallery dish is included.",
      },
      {
        slug: "hear-the-band-without-a-screen-between-you",
        moment: "On a separately booked evening, listen closely",
        why: "A focused Preservation Hall set makes the audience's attention part of the encounter. Read the current ticket and recording rules.",
      },
      {
        slug: "let-a-bywater-backyard-set-the-evening",
        moment: "Choose a different neighbourhood another night",
        why: "Bacchanal offers a contrasting courtyard music setting. Admission, tables, weather and the programme need their own check rather than becoming an automatic after-class stop.",
      },
    ],
  },
  {
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "argentina",
    regions: ["buenos-aires"],
    title: "Ride the city. Follow the shade. Let the evening change tempo.",
    intro:
      "A guided bicycle circuit, a public botanical garden, beginner tango and conducted percussion offer different roles in Buenos Aires. Choose a movement to learn and another moment simply to notice. These encounters need not share a day to make the city feel more connected.",
    pace: "Give the ride its own outing, the garden an unhurried visit and each music or dance programme a separately chosen evening.",
    planning:
      "The South Circuit covers several neighbourhoods and needs its own ability, traffic and weather check. The botanical garden is in Palermo and closes on Mondays, so do not schedule it before a Monday Lunes Bomba performance. Konex is in Abasto and admits adults eighteen and over. La Viruta Tango AR has a separate class and admission schedule, with no dance partner owed to a visitor. Confirm dates, teaching languages, access and late transport independently. A tango lesson, concert ticket and bicycle booking are not a combined package.",
    stops: [
      {
        slug: "ride-between-buenos-aires-city-stories",
        moment: "Connect more than one neighbourhood",
        why: "A guided ride helps the spaces between familiar names become part of the visit. Follow the actual operator's route and ability requirements.",
      },
      {
        slug: "follow-shade-through-buenos-aires",
        moment: "On a day other than Monday, lower the pace",
        why: "A labelled plant offers a small observation that can follow you back into the streets. Ordinary entry does not guarantee greenhouse access.",
      },
      {
        slug: "learn-the-step-before-joining-the-floor",
        moment: "Choose a beginner's evening",
        why: "Tango begins with attention to another person and a shared floor. Watching remains a complete choice.",
      },
      {
        slug: "follow-the-hands-conducting-buenos-aires",
        moment: "If a confirmed Monday fits, follow the signal",
        why: "The percussion ensemble makes part of its composing process visible. This is an adults-only concert, not a lesson or an inherited ritual.",
      },
    ],
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "brazil",
    regions: ["rio-de-janeiro"],
    title: "Look beneath the palms. Listen inside a samba room.",
    intro:
      "A botanical garden and a live Lapa programme offer two useful scales of attention. Begin with the familiar palms, then leave the next encounter to people making music in a room. Neither needs to stand for the whole of Rio.",
    pace: "An independently planned garden visit and a separately booked music evening, with time to travel and recover.",
    planning:
      "Jardim Botânico and Lapa are different neighbourhoods, not consecutive stops in a supplied walking route. Ordinary arboretum admission on Wednesdays begins later than on other days. Read weather notices and distinguish member access from public entry. Carioca da Gema has date-specific admission, table conditions and performance times. Confirm age, access and transport before booking. The separately documented Sambadrome rehearsals concern January 2027, not an extra show happening on an October visit. No shared ticket, transfer, meal or EA package is implied.",
    stops: [
      {
        slug: "walk-beneath-rios-imperial-palms",
        moment: "Let the famous avenue introduce a smaller detail",
        why: "A public garden becomes more memorable when a leaf or labelled plant shares the attention given to the palm-lined view.",
      },
      {
        slug: "let-a-lapa-samba-room-set-the-evening",
        moment: "Give another part of the day to a current programme",
        why: "A booked samba evening offers live musicians and optional audience dancing, not a Carnaval parade, school visit or guaranteed table.",
      },
    ],
  },
  {
    slug: "valencia",
    name: "Valencia",
    country: "spain",
    regions: ["valencia"],
    title: "Meet the water. Cook the rice. Follow the old river.",
    intro:
      "A public water tribunal, a market-led paella lesson and a bicycle ride through a former riverbed offer three different ways into Valencia. They connect a question about water with food and the shape of the city, without pretending that one encounter explains the others completely.",
    pace: "One booked cooking morning, a separately chosen garden ride and the tribunal only when its public session actually takes place.",
    planning:
      "The morning class meets in Russafa and takes around three and a half hours. The market closes on Sundays. The Water Tribunal's usual Thursday midday session can vary with holidays and business, and must not be treated as a staged show. The Turia ride needs its own bicycle, route and weather check. These are not one continuous guided itinerary. Confirm dates, dietary requirements and physical access independently. No combined ticket, included bicycle, transfer or EA package is implied.",
    stops: [
      {
        slug: "follow-valencias-rice-from-market-to-pan",
        moment: "Give one morning to the pan",
        why: "A neighbourhood market and instructed rice preparation make a familiar dish more legible. Book the morning format if shopping matters to you.",
      },
      {
        slug: "watch-valencia-settle-water-in-public",
        moment: "If the public session fits, become an attentive witness",
        why: "The tribunal is a working institution, not a performance commissioned for visitors. Observe without interrupting or expecting a particular case.",
      },
      {
        slug: "cycle-valencias-former-river",
        moment: "On another outing, change the scale",
        why: "A manageable bicycle section makes the former riverbed a practical connection. Equipment and route planning remain your own responsibility.",
      },
    ],
  },
  {
    slug: "naples",
    name: "Naples",
    country: "italy",
    regions: ["naples"],
    title: "Go below the street. Look along the railway. Hear the refrain.",
    intro:
      "A booked underground route, a coastal railway museum and a live song programme let Naples change scale without losing its recognisable character. Follow infrastructure in two different settings, then choose an evening in which the human voice becomes the main event.",
    pace: "Choose one substantial visit per day and reserve the song programme separately.",
    planning:
      "The Galleria Borbonica has a specific guided route with its own physical conditions. Pietrarsa is on the coast by Pietrarsa-San Giorgio a Cremano station, not next door to the old-centre concert room. It normally closes on Mondays and additionally on 28 and 29 October 2026. Napulitanata requires advance registration and reservation. Check every date, language, mobility need and train stop independently. Museum admission is not a heritage-train ticket. No combined reservation, transfer, included meal or EA package is implied.",
    stops: [
      {
        slug: "read-naples-below-the-street",
        moment: "Book one route below street level",
        why: "Read the public route's actual surfaces and access conditions before choosing it. Other underground products are not interchangeable.",
      },
      {
        slug: "find-napless-railway-story-beside-the-sea",
        moment: "Keep a different day for the coast",
        why: "The original workshops give locomotives an industrial setting. Plan the journey separately and do not assume a heritage train is operating.",
      },
      {
        slug: "hear-the-song-behind-a-familiar-naples-refrain",
        moment: "Let a confirmed programme choose the evening",
        why: "A familiar melody becomes a live relationship between performers and listeners. A concert seat does not include another museum or dinner.",
      },
    ],
  },
  {
    slug: "copenhagen",
    name: "Copenhagen",
    country: "denmark",
    regions: ["copenhagen"],
    title: "Read the object. Share the table.",
    intro:
      "Copenhagen's design identity opens through a chair, then changes scale at a shared dinner. One encounter asks you to look closely at an object. The other gives you a small practical role among people. The connection is how ordinary life is arranged, not a claim that museum design explains everyone at the table.",
    pace: "An unhurried museum visit and a separately booked dinner, on days that actually fit.",
    planning:
      "Designmuseum Danmark is at Bredgade 68 and normally closes on Mondays. Absalon is in Vesterbro at Sønder Boulevard 73, not next door. Allow independent travel rather than treating the two as a continuous walking route. Dinner begins at 18:00 and requires arrival by the stated check-in. Confirm diet, access and seating needs before paying. No combined ticket, transfer, reserved conversation or EA package is implied.",
    stops: [
      {
        slug: "learn-to-read-a-chair-in-copenhagen",
        moment: "Let an ordinary object become less obvious",
        why: "Compare material, support and proportion before reading the label. A public exhibition is looking, not furniture testing or making.",
      },
      {
        slug: "pass-the-dishes-at-a-copenhagen-long-table",
        moment: "On a separately booked evening, change your role",
        why: "A shared plate makes participation practical. The meal invites courteous exchange without promising friendship or access to anyone's private life.",
      },
    ],
  },
  {
    slug: "dublin",
    name: "Dublin",
    country: "ireland",
    regions: ["dublin"],
    title: "Try the movement. Slow the morning. Leave room for the tune.",
    intro:
      "A Gaelic-games introduction, a botanical pause, a Claddagh ring workshop and a traditional music session give Dublin different scales of attention. Try a movement, stay with a living detail, shape a small object and listen without taking over. They are separate encounters, not a claim that a visitor becomes part of a club or a musicians' circle in a day.",
    pace: "Choose one prebooked activity for a morning or afternoon, and leave the garden and listening evening their own time.",
    planning:
      "The games session meets at Na Fianna on Mobhi Road, the gardens are in Glasnevin and the Cobblestone is in Smithfield. Silver Works' Claddagh class needs a separate city-centre booking, with age and stair restrictions and a confirmed venue. Plan coaching ability, transport and workshop dates independently. Garden hours change seasonally. The pub does not reserve front-bar seats or serve food, and under-18s must leave by 9pm. Keep musicians' spaces clear. No combined ticket, guaranteed seat, match admission, transfer or EA package is implied.",
    stops: [
      {
        slug: "give-dublin-a-glasshouse-paced-morning",
        moment: "Keep another morning unhurried",
        why: "One open glasshouse and a manageable garden loop offer a cultivated botanical contrast. This is not a recovery treatment or an included extension of the sports session.",
      },
      {
        slug: "make-the-irish-ring-you-can-read",
        moment: "Give a symbol a practical making problem",
        why: "A separately booked Claddagh class adds silver, fit and finish to an Irish form. It has age and stair restrictions, and some processes are demonstrated rather than performed by visitors.",
      },
      {
        slug: "try-the-games-before-you-watch-the-match",
        moment: "Begin by trying one movement",
        why: "A coach gives unfamiliar Gaelic games something you can recognise through your hands and feet. Participation follows the confirmed session, not a competitive fixture.",
      },
      {
        slug: "leave-room-for-dublins-next-tune",
        moment: "On a suitable evening, change your role",
        why: "The useful contribution is quiet listening and space for the players. A music session is not another coached activity or a reserved concert seat.",
      },
    ],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "canada",
    regions: ["vancouver"],
    title: "Join the city by bicycle. Slow down under the dome.",
    intro:
      "A guided ride connects Vancouver's park, shoreline and streets. On a separate lighter session, Bloedel's planted enclosure asks for attention at leaf scale. The contrast is between covering ground and staying with a small environment, not between two versions of wild nature.",
    pace: "Keep most of one day for the five-hour cycle tour and choose a separate short conservatory visit.",
    planning:
      "Cycle City's Grand Tour covers roughly twenty kilometres and requires comfortable urban cycling, appropriate weather preparation and its own reservation. Bloedel is in Queen Elizabeth Park and is not assumed to be on the booked cycling route. Its admission and transport are separate. The dome is warm, humid and home to captive birds, so it is not guaranteed quiet. Check both access arrangements and seasonal hours. No shared ticket, bicycle transfer, included lunch or EA package is implied.",
    stops: [
      {
        slug: "join-vancouvers-edges-by-bicycle",
        moment: "Give movement most of a day",
        why: "A guided bicycle route connects distinct city edges. Follow the actual route rather than adding unplanned destinations to a group ride.",
      },
      {
        slug: "step-under-vancouvers-planted-dome",
        moment: "Keep another visit smaller",
        why: "A short cultivated indoor circuit changes the scale of attention. It is a botanical pause, not a wildlife interaction or continuation of the cycle tour.",
      },
    ],
  },
  {
    slug: "amsterdam-waterland",
    name: "Amsterdam and Waterland",
    country: "netherlands",
    regions: ["amsterdam", "watergang"],
    title: "Look closer, then see what a house can hold.",
    intro:
      "Let Amsterdam change scale. Micropia reveals life too small for an unaided glance, while a canal house opens into an attic church. On a separately confirmed suitable day, Watergang replaces museum rooms with reed-lined channels. The contrast is useful without treating all three as a day's checklist.",
    pace: "Choose one museum at a time and give a separately booked Waterland paddle its own suitable day.",
    planning:
      "Micropia and Our Lord in the Attic have separate admission and locations. The attic museum has narrow stairs, no step-free historic route and an early closure from 11:30 on 21 October 2026. Check the actual date before booking. The Fresh Air canoe tour meets in Watergang, not at Amsterdam Noord, so allow independent transport and check the return journey. Paddling requires fitness and flexibility, and seasonal availability or weather may prevent it. Choose an indoor museum when paddling conditions do not suit the visit. No combined ticket, transfer or package is implied.",
    stops: [
      {
        slug: "look-for-the-life-too-small-to-see",
        moment: "Begin with a change of scale",
        why: "A microscope makes familiar surroundings feel less empty without requiring a long scientific tour.",
      },
      {
        slug: "paddle-below-waterlands-low-bridges",
        moment: "On another session, follow the reeds",
        why: "A guided route outside the city replaces the scale of a landmark with the clearance beneath a small bridge.",
      },
      {
        slug: "find-a-church-inside-an-amsterdam-house",
        moment: "On another visit, look behind a familiar frontage",
        why: "The historic house makes the change of scale physical before the attic church opens above it. Its stairs and date-specific hours need a separate check.",
      },
    ],
  },
  {
    slug: "seoul",
    name: "Seoul",
    country: "south-korea",
    regions: ["seoul"],
    title: "Read the waterway. Follow the pan. Leave an evening for listening.",
    intro:
      "A stream museum, a mung-bean pancake and a Saturday music programme give Seoul three different points of entry. Begin with how the city changed, notice how a market food is made, then let a live performance ask for another kind of attention. Each can stand alone when the calendar or your appetite says otherwise.",
    pace: "A self-paced museum and food stop, with a separately reserved Saturday performance if its programme fits.",
    planning:
      "Cheonggyecheon Museum is east of the downtown stream entrance and closes on Mondays. Gwangjang food counters have individual hours and dietary limitations, including pork in many bindaetteok recipes. The National Gugak Center is in another part of Seoul, so plan transport rather than treating these stops as a continuous walk. Its Saturday programme, age rules and seats require a separate check. Outdoor stream paths can close in rain. No shared booking, meal package or transfer is implied.",
    stops: [
      {
        slug: "read-the-stream-beneath-seouls-streets",
        moment: "Begin before the present-day view",
        why: "Historical images give the waterway a sequence of decisions rather than the appearance of untouched nature.",
      },
      {
        slug: "follow-the-mung-bean-to-the-hot-pan",
        moment: "Find one clear sequence in the market",
        why: "Grinding, batter and a crisp edge make a famous food alley legible through something you can order.",
      },
      {
        slug: "hear-seoul-change-tempo-on-a-saturday",
        moment: "Keep a separate date for music",
        why: "A changing gugak programme makes space for sustained listening beyond the noise of a city day.",
      },
    ],
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "japan",
    regions: ["tokyo"],
    title: "Taste the foundation. Cut the surface. Slow the evening.",
    intro:
      "Let a small cup of dashi introduce a flavour that usually works out of sight. On a booked workshop day, make a glass surface catch light. Keep a public bathhouse as a separate, quieter possibility. Three ordinary materials open three different kinds of attention.",
    pace: "A short Nihonbashi stop, a reserved ninety-minute workshop and an independently chosen bathhouse visit.",
    planning:
      "Ninben's broth contains fish. Sokichi is in Kaminarimon and requires its own reservation, with cash and glass-upgrade details to check. Hagino-yu is in Negishi and has split opening blocks, a regular closing day and bathing rules to understand beforehand. These are different neighbourhoods, not a continuous walking route. Plan transport and rest separately. No shared ticket, transfer or package is implied.",
    stops: [
      {
        slug: "meet-tokyo-in-a-cup-of-dashi",
        moment: "Begin with a flavour beneath the meal",
        why: "A plain cup makes the foundation visible before dinner supplies all its other distractions.",
      },
      {
        slug: "cut-a-line-that-catches-the-light",
        moment: "Give your hands one precise problem",
        why: "The kiriko introduction turns a purchased object into a sequence of cuts you can recognise.",
      },
      {
        slug: "give-tokyo-an-hour-at-the-bathhouse",
        moment: "Leave a quieter hour unfilled",
        why: "A public sento offers a different pace without adding another performance or lesson.",
      },
    ],
  },
  {
    slug: "taipei",
    name: "Taipei",
    country: "taiwan",
    regions: ["taipei"],
    title: "Read the type. Fold the dumpling. Rethink the tea.",
    intro:
      "Words can become rows of metal, a wrapper can hold soup and tea can arrive from a tap. Ri Xing, a separately booked CookInn class and Wangtea Lab offer three methods behind familiar things. Choose the parts that interest you without making them a single rushed outing.",
    pace: "Keep the three-hour class its own outing. The foundry's limited public days decide whether a separate short visit fits your stay.",
    planning:
      "Ri Xing currently opens to visitors on Wednesdays, Fridays and Saturdays, with calendar exceptions. Do not remove type or expect a hands-on class. CookInn's three-hour dumpling class requires a confirmed date, branch, language and minimum group. Discuss food allergies and dietary variants before booking. Wangtea Lab has a broader opening pattern, but drinks and seats depend on the day. Check alcohol, milk and caffeine individually, and allow separate transport between actual addresses. No shared booking, walking tour, transfer, included tasting or package is implied.",
    stops: [
      {
        slug: "fold-taipeis-soup-inside-a-dumpling",
        moment: "Give a different morning to the fold",
        why: "A booked cooking class turns a recognisable dish into wrapper, filling and seal. Its meal and confirmed branch have their own conditions.",
      },
      {
        slug: "read-a-wall-of-words-before-they-print",
        moment: "Meet language as an inventory",
        why: "The physical type makes storage, labour and a printed line part of the same question.",
      },
      {
        slug: "taste-tea-from-the-tap-and-the-pour",
        moment: "Compare methods over a drink",
        why: "A hot pour-over and a non-alcoholic draft tea offer a contemporary contrast to another familiar everyday material.",
      },
    ],
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "thailand",
    regions: ["bangkok"],
    title: "Follow the ingredient. Ride the smaller street. Watch the gesture.",
    intro:
      "Give Bangkok three different scales. A curry paste begins with small ingredients, a bicycle links streets beyond the main roads and a theatre gesture carries a story. Choose the parts that interest you without squeezing all three into one crowded day.",
    pace: "A cooking morning, a separate suitable cycling session and a short weekday performance.",
    planning:
      "Sompong's morning class and Co Classical each occupy a substantial part of a day and require separate bookings. Confirm dietary needs for the kitchen and cycling ability, heat and traffic exposure for the ride. Sala Chalermkrung has weekday show times and a ticket entitlement to verify with the Grand Palace. Allow transport and recovery between neighbourhoods. There is no combined admission, meal outside the cooking programme, transfer or EA package.",
    stops: [
      {
        slug: "build-the-curry-before-the-wok",
        moment: "Begin before the finished dish",
        why: "A market introduction and curry-paste preparation give familiar menu words a material sequence.",
      },
      {
        slug: "follow-bangkok-at-the-width-of-a-bicycle",
        moment: "On another session, change your scale",
        why: "A guided ride asks you to notice street width, working rhythms and the river rather than rush between icons.",
      },
      {
        slug: "watch-a-story-travel-through-a-gesture",
        moment: "Sit still for the smallest movement",
        why: "A public stage programme makes gesture and music another way to pay attention to the city.",
      },
    ],
  },
  {
    slug: "lisbon",
    name: "Lisbon and Carcavelos",
    country: "portugal",
    regions: ["lisbon", "carcavelos"],
    title: "Make the layers. Follow the water. Listen to the room.",
    intro:
      "A familiar pastry opens through its layers. An aqueduct opens through a public crossing. A separately booked coastal lesson changes how you read Atlantic water, while fado asks for a room's shared attention. Choose the roles that suit your trip rather than forcing every encounter into a day.",
    pace: "An unhurried city crossing, a separately planned coastal lesson and a reserved evening. Keep transport and recovery between sessions.",
    planning:
      "The pastry class is at Rua Bernardim Ribeiro 9 and requires its own date, group-size and allergy check. The aqueduct entrance is in Campolide, not Alfama. Check the Water Museum's current last entry, weather and elevated-walk suitability. Carcavelos is on the coast outside central Lisbon and requires separate transport and a confirmed lesson. The standard group surf format starts at age twelve and depends on sea conditions. Mesa de Frades is a separate dinner booking with a set menu, deposit and performance rhythm. Confirm dietary needs and return transport. These are independent admissions, not a continuous walking route, combined ticket, transfer or package.",
    stops: [
      {
        slug: "fold-the-pastry-before-the-first-bite",
        moment: "Begin with the familiar food's unfamiliar steps",
        why: "Dough and custard make a recognised Lisbon pastry into hands-on attention. The class is not a historic bakery visit or an included meal for the rest of the route.",
      },
      {
        slug: "cross-lisbon-on-the-route-of-its-water",
        moment: "Begin with a different line across the city",
        why: "The public crossing turns monumental arches into a readable piece of water infrastructure. Keep the walk within the museum's admitted route.",
      },
      {
        slug: "meet-lisbons-coast-on-a-surfboard",
        moment: "Give another suitable day to the coast",
        why: "A supervised first lesson changes the water from a view to something you must read. Do not confuse the lesson with independent surfing or included transport.",
      },
      {
        slug: "let-the-fado-room-fall-quiet",
        moment: "Give the evening to listening",
        why: "A tiled former chapel changes from dining room to attentive audience between sets. Choose the current dinner programme, not a promised singer.",
      },
    ],
  },
  {
    slug: "budapest",
    name: "Budapest",
    country: "hungary",
    regions: ["budapest"],
    title: "Take the slower hour. Find the shared step.",
    intro:
      "Use a familiar Budapest bath as the unhurried beginning, then choose a public dance-house evening where watching and joining have different places. Shared space connects the two, but each has its own rules and timetable.",
    pace: "A daytime bath and a separately selected evening, on the same trip rather than a forced single-day route.",
    planning:
      "Széchenyi and Fonó are in different parts of Budapest and require separate admissions and travel planning. Read the bath's current maintenance closures and under-fourteen restriction. At Fonó, choose a published táncház that actually includes beginner teaching or an invitation to join. A general concert ticket is not the same thing. Confirm language, accessibility, finish time and transport. No shared ticket, transfer or package is implied.",
    stops: [
      {
        slug: "let-budapest-slow-to-the-pool",
        moment: "Leave time without an assignment",
        why: "An ordinary daytime bath can be more rewarding when you stop trying to complete every pool. Current closures decide the usable route.",
      },
      {
        slug: "step-into-the-dance",
        moment: "On a programmed evening, observe the first steps",
        why: "Live music and a public dance-house format offer another shared rhythm. Join only where the teacher or room makes the invitation clear.",
      },
    ],
  },
  {
    slug: "new-york-city",
    name: "New York City",
    country: "united-states",
    regions: ["new-york-city"],
    title: "Shape the ring. Follow the bottle. Open the other side.",
    intro:
      "Begin with a New York icon you can make rather than rank. Follow a reusable seltzer siphon into a working interior, choose a lighter Governors Island ride or slow down beside a Brooklyn garden pond. Ellis Island offers a separate hospital-history encounter. These are choices across a stay, not an interchangeable harbour or borough package.",
    pace: "One booked experience per day gives each borough and island crossing enough room.",
    planning:
      "BagelUp's public classes use live weekend dates and the exact venue must be confirmed during booking. The Brooklyn Seltzer Museum is in Cypress Hills and is usually open for public tours on selected Fridays. Brooklyn Botanic Garden is a separate destination with a special-event ticket on 24 October 2026, shorter November hours and entrance notices. Governors Island needs its own ferry, return check and bicycle arrangement. It is not on the Ellis Island ferry route. Ellis Island requires a separately purchased ferry, security time, early arrival and strict footwear, age and mobility checks. Do not attempt them as a continuous route. No combined ticket, transfer, meal beyond the class or package is implied.",
    stops: [
      {
        slug: "make-the-bagel-before-new-york-serves-it",
        moment: "Begin with the New York everyone can taste",
        why: "Roll, boil and bake before you eat. The familiar ring becomes a sequence of texture, timing and heat rather than another contest for the best counter.",
      },
      {
        slug: "let-brooklyn-slow-around-a-garden-pond",
        moment: "On a different day, give the city a planted pause",
        why: "A permitted pond-side loop adds a quieter Brooklyn visit. BBG's special ticket on 24 October and seasonal hours must be checked independently of the other bookings.",
      },
      {
        slug: "follow-the-fizz-through-a-working-factory",
        moment: "On a Friday that fits, follow the return",
        why: "See what a refillable glass siphon asks of machinery, maintenance, washing and delivery. The small museum and active works make one everyday drink into a whole urban system.",
      },
      {
        slug: "ride-new-yorks-island-without-the-traffic",
        moment: "Choose a lighter island outing on another day",
        why: "A manageable Governors Island ride puts the familiar skyline at a different pace. Bicycle rental and the return ferry remain separately planned.",
      },
      {
        slug: "open-the-other-side-of-ellis-island",
        moment: "Give the island its more difficult second chapter",
        why: "Enter selected hospital buildings with an authorised guide. Care, inspection, exclusion and hope complicate the landmark without turning its unrestored rooms into spectacle.",
      },
    ],
  },
  {
    slug: "rome",
    name: "Rome",
    country: "italy",
    regions: ["rome"],
    title: "Make the shape. Follow the road. Enter the machine room.",
    intro:
      "Begin with the Rome almost everyone can picture, then change what makes it memorable. Give pasta enough time to become technique, choose a manageable Appian Way ride or look at sculpture inside a former power station. A botanical garden near Trastevere adds a lighter interval without another lesson.",
    pace: "Choose one substantial booked or outdoor outing per day and leave a garden pause flexible.",
    planning:
      "The pasta class is a three-hour paid booking at one of two named locations. Via Appia is outside the central monument circuit and needs a separate weather, surface, traffic, equipment and return check. Centrale Montemartini is on Via Ostiense and works best as its own unhurried visit. The botanical garden has a separate Trastevere entrance, sloping paths and seasonal last entry. Do not force all four into one day. They are separate public offers with no combined ticket, transport, meal beyond the class, bicycle support or package included.",
    stops: [
      {
        slug: "make-pasta-until-the-sauce-makes-sense",
        moment: "Begin with the thing everyone recognises",
        why: "Roll, cut and fill before you eat. The familiar plate becomes a relationship between dough, shape, filling and sauce rather than another name on a list.",
      },
      {
        slug: "give-trastevere-a-garden-paced-afternoon",
        moment: "Keep a lighter garden interval on another day",
        why: "A short botanical-garden loop changes the pace without needing another class. Choose a suitable route on its sloping site and check the day's last entry.",
      },
      {
        slug: "ride-the-road-rome-built-to-leave-it",
        moment: "On a suitable day, let the city stretch out",
        why: "Use one bounded section of Via Appia to understand Rome through movement and infrastructure. Distance must follow conditions and your ability, not ambition.",
      },
      {
        slug: "put-the-gods-back-among-the-machines",
        moment: "Give the last contrast room to work",
        why: "Meet ancient objects beside turbines and diesel engines. Rome stops being a single historical layer and becomes a city that repeatedly uncovers, powers and reframes itself.",
      },
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "united-kingdom",
    regions: ["london"],
    title: "Taste the city. Meet the work. Open the door behind it.",
    intro:
      "Use a market everyone recognises as the way in, then let London reveal two working interiors. One tour follows ingredients and traders. Another makes the labour behind performance visible. A third opens the layers hidden beside an ordinary Underground journey.",
    pace: "Give the market its own morning. Put the two fixed tours on separate days.",
    planning:
      "Choose only the anchors that fit your stay. Borough Market takes around three hours, while LCBA's dated December foundation needs three whole days. The theatre and Hidden London tours are separate bookings with physical conditions. Soane's house has limited capacity. Chelsea Physic Garden closes on Saturdays. A riverbus ticket needs the correct stops and zones. These locations do not form a continuous walking route. Confirm dates, language, diet, access and transport independently. No combined ticket, meal beyond stated tastings, reserved studio place or EA package is implied.",
    stops: [
      {
        slug: "see-london-between-the-riverbus-stops",
        moment: "Use a real journey as a change of perspective",
        why: "Tower to Greenwich makes the river a useful connection. Buy the correct zones and check the actual departure rather than assuming a sightseeing cruise.",
      },
      {
        slug: "slow-down-among-chelseas-useful-plants",
        moment: "Keep another morning deliberately smaller",
        why: "A paid garden visit changes attention from city scale to a labelled plant. Check the Saturday closure and seasonal hours.",
      },
      {
        slug: "bind-five-ways-of-holding-a-page",
        moment: "For a making-led stay, reserve three whole days",
        why: "The dated December foundation is a substantial alternative anchor, not an extra activity squeezed between tours. Check remaining places before arranging a trip around it.",
      },
      {
        slug: "ask-the-market-where-london-came-from",
        moment: "Begin with a familiar appetite",
        why: "Let the guide and traders turn a well-known food stop into questions about ingredients, production and the knowledge held behind the counter.",
      },
      {
        slug: "meet-the-work-before-the-curtain-rises",
        moment: "On another day, go behind the finished performance",
        why: "Follow the working theatre's available route and notice rehearsal, costume and production as interconnected practices. The route varies because the building is in use.",
      },
      {
        slug: "open-a-door-the-underground-left-behind",
        moment: "Choose the closed door that fits your route",
        why: "See how a system Londoners use every day still contains earlier stations and decisions. Select one current tour and read its physical demands carefully.",
      },
      {
        slug: "watch-a-small-house-change-shape",
        moment: "Keep one unhurried house visit",
        why: "Soane's rooms change scale around a dense collection. It is a gentler architectural counterpoint to the working interiors, not another backstage tour.",
      },
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "france",
    regions: ["paris"],
    title: "Fold the morning. Follow a thread. Meet the city below.",
    intro:
      "Start with a Paris reference almost everyone knows, then change the scale twice. Give pastry enough time to become technique. Watch a contemporary image take form on a historic loom. Finally, descend into the infrastructure that makes the city above possible.",
    pace: "One substantial booked anchor per day, with the sewer museum kept flexible.",
    planning:
      "The pastry workshop takes about five and a half hours and is not a casual breakfast stop. The Gobelins workshop visit is a separate reservation with a fixed start, French delivery and significant mobility constraints. The Sewer Museum can close because of flooding or operations. Arts Forains requires a date-specific guided ticket, not self-guided admission. Choose either a ticketed Bal Blomet concert or a programmed Rosa Bonheur evening, checking age, queues and access separately. These addresses are in different parts of Paris. Do not attempt all of them in one day. No transport, combined ticket, meal, translation or package is included.",
    stops: [
      {
        slug: "open-a-book-inside-pariss-salle-ovale",
        moment: "Give the remarkable room an ordinary purpose",
        why: "Free public reading offers a different rhythm from a class or guided museum visit. A seat is not guaranteed, and Monday closure still applies.",
      },
      {
        slug: "make-the-morning-before-it-reaches-the-cafe",
        moment: "Give the familiar thing real time",
        why: "Move from recognising a croissant to working through the folds, temperature and patience behind it. Keep the rest of the day light because the published class lasts five and a half hours.",
      },
      {
        slug: "watch-a-picture-grow-one-thread-at-a-time",
        moment: "On another day, look from the reverse",
        why: "Watch makers translate contemporary images on historic high-warp looms. This is observation inside a working environment, not a hands-on class or a promise of English delivery.",
      },
      {
        slug: "see-what-keeps-paris-moving-underground",
        moment: "Use the flexible hour below street level",
        why: "Follow the city from landmark to system. The public museum route reveals the water, equipment and people behind a Paris most visitors never think to look for.",
      },
      {
        slug: "hear-a-new-trio-in-an-old-paris-room",
        moment: "Let a current programme choose the evening",
        why: "A small live-music room gives a shared end to a day of watching how Paris makes and maintains things. Choose the musician and date before planning around it.",
      },
      {
        slug: "let-pariss-old-fairground-objects-move",
        moment: "On another date, meet a collection in motion",
        why: "A guided public visit in Bercy gives old objects an active social role. The offered mechanisms and participation vary, so it is an alternative anchor, not an automatic ride ticket.",
      },
      {
        slug: "let-a-paris-guinguette-open-the-evening",
        moment: "Or leave an evening for a park-side gathering",
        why: "Rosa Bonheur's Buttes-Chaumont programme offers a different social format from a concert hall. Check the dance event rather than expecting a dance floor throughout ordinary opening hours.",
      },
    ],
  },
  {
    slug: "krakow",
    name: "Kraków",
    country: "poland",
    regions: ["krakow"],
    title: "Taste a shape. Make with light. Watch the city become small.",
    intro:
      "Three familiar Kraków materials open in different directions. Twist the bread seen on street carts. Build a small object from glass and copper. In December, watch makers carry an intricate version of the city into its own main square.",
    pace: "Pair the bread and glass workshops on separate halves of a day. Let the szopka calendar decide whether the third encounter belongs to this trip.",
    planning:
      "The obwarzanek session lasts about one hour, while the stained-glass format takes two or three hours and uses tools that require close instruction. They are separate bookings at different addresses. Confirm language, age and access before fixing the day. The szopka arrival happens only on 3 December 2026, with a later museum exhibition from 6 December. It is public spectatorship, not a making workshop. No route, transport, combined ticket or package is included.",
    stops: [
      {
        slug: "twist-the-city-before-you-taste-it",
        moment: "Begin with the everyday shape",
        why: "Learn the twisting movement behind Kraków's most visible bread. Plan the tasting separately because the museum's own visitor information conflicts on whether the workshop piece should be eaten.",
      },
      {
        slug: "take-the-window-back-to-the-workbench",
        moment: "Give the afternoon to light and joins",
        why: "Move from dough to a more exacting material. A small visitor project reveals why every line in stained glass has structural work to do.",
      },
      {
        slug: "watch-a-city-arrive-in-miniature",
        moment: "When the December calendar allows",
        why: "Watch makers bring Kraków's architecture back to the Main Market Square in another scale. Keep the distinction between public witness and unavailable hands-on access clear.",
      },
    ],
  },
  {
    slug: "arcachon-bay",
    name: "Arcachon Bay",
    country: "france",
    regions: ["arcachon-bay"],
    title: "Meet the working bay. Read the moving dune.",
    intro:
      "An oyster trip takes you into a landscape's working hours. Dune du Pilat gives you space to notice the much longer movement of sand. Put the two in conversation without forcing them into a single tightly scheduled day.",
    pace: "Let the oyster departure anchor one day. Keep the dune flexible or give it another.",
    planning:
      "The oyster programme leaves from several different ports around the bay. Confirm yours before planning transport to the dune in La Teste-de-Buch. Facing the same water does not mean a quick crossing or a walk between stops. Outings take three to six hours and can be cancelled. The dune needs its own weather, heat and access check. No transfer, combined ticket or reserve entry is included.",
    stops: [
      {
        slug: "meet-the-bay-on-its-working-hours",
        moment: "Follow the working tide",
        why: "Begin with someone whose day depends on the water. Observe the farming and ask a useful question, without assuming unrestricted access or a guaranteed hands-on task.",
      },
      {
        slug: "read-the-landscape-one-grain-at-a-time",
        moment: "Leave room for another scale",
        why: "Trade the farm's working rhythm for a landscape shaped over much longer periods. Choose a suitable authorised walk or the interpretation spaces below, rather than treating the summit as compulsory.",
      },
    ],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "spain",
    regions: ["barcelona"],
    title: "See how separate parts hold together.",
    intro:
      "A human tower and a mosaic ask very different things of their parts. Witness castells from the public audience, then try arranging a small ceramic surface yourself. Barcelona becomes both something people build together and something you can learn to look at more closely.",
    pace: "A workshop on a booked day. Castells only when the public calendar allows.",
    planning:
      "The castells guide follows the publicly announced La Mercè programme, not a daily attraction or an invitation to join a tower. Confirm the event's date, square and crowd arrangements first. Mosaiccos is a separate studio booking and may require later collection. The espadrille workshop is another independent reservation, with its Barcelona address and sizes confirmed directly. Sant Pau is a separately ticketed self-guided visit. None includes Park Güell admission. Choose one workshop rather than filling every interval.",
    stops: [
      {
        slug: "the-weight-of-the-tower",
        moment: "When the square has a programme",
        why: "Watch the coordination behind an instantly recognisable Catalan tradition. Your role is an attentive spectator, outside the working formation.",
      },
      {
        slug: "make-something-from-the-broken-pieces",
        moment: "Change from watching to making",
        why: "Try a smaller exercise in how parts meet. Leave time for grouting and collection, then look differently at the mosaic details around the city.",
      },
      {
        slug: "stitch-the-pair-you-take-home",
        moment: "Or make something you can wear",
        why: "A pair of espadrilles offers a different scale of joining and finishing. Choose it as an alternative hands-on anchor, not an obligatory extra after the mosaic class.",
      },
      {
        slug: "read-care-in-sant-paus-courtyards",
        moment: "See a larger kind of construction",
        why: "Pavilions, gardens and passages show how a building can organise care. Keep this as its own visit, not a quick add-on to a workshop.",
      },
    ],
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "austria",
    regions: ["vienna"],
    title: "Watch the work. Leave room for the music and table.",
    intro:
      "A riding hall, a programmed music evening and a Heuriger offer different forms of shared attention. Watch training rather than expect a gala. Choose a real concert rather than only a famous room. Give a meal its own time at the city's wine-growing edge. The three are options for a stay, not a single performance package.",
    pace: "One dated morning session and a separately planned meal.",
    planning:
      "Book the specific Morning Exercise session at the Hofburg, not a performance ticket. Mayer am Pfarrplatz is in Heiligenstadt, away from the central riding hall, so allow transport time and confirm table availability. Musikverein concerts require their own ticket. Standing places are offered only for some dates and require sustained physical comfort. Choose an accessible seated alternative where needed. This is not a walking itinerary or a combined ticket. Read each guide's access and responsibility boundaries before choosing it.",
    stops: [
      {
        slug: "watch-the-work-before-the-performance",
        moment: "Begin with patient observation",
        why: "Notice repetition in a room usually associated with spectacle. The day's training is variable and does not promise famous jumps or visitor contact with horses.",
      },
      {
        slug: "listen-to-vienna-from-the-standing-places",
        moment: "Let an actual concert choose one evening",
        why: "The Golden Hall becomes a specific listening occasion. Standing availability and physical suitability need their own check, not a promise of any orchestra or gala.",
      },
      {
        slug: "the-vineyard-at-the-table",
        moment: "Let the city open towards its wine country",
        why: "Make room for a meal rather than a rushed tasting checklist. The named Heuriger is a public hospitality venue, not permission to enter working vineyards.",
      },
    ],
  },
  {
    slug: "porto-and-gaia",
    name: "Porto and Gaia",
    country: "portugal",
    regions: ["porto", "vila-nova-de-gaia"],
    title: "A city through appetite, sound and making.",
    intro:
      "Port belongs here, but it need not explain the whole visit. Put a working market, a church heard from a seat and the making of a tile around the familiar glass. Cross the Douro deliberately, not just for another photograph.",
    pace: "Choose two for a day, or keep the full sequence for a longer stay.",
    planning:
      "Bolhão is closed on Sundays and public holidays. Clérigos advertises a noon concert, so confirm that fixed point first. A Casa da Música tour has its own language and times, away from the central historic area. Tile firing normally means next-day collection. Gaia is across the river and needs its own travel allowance. Do not schedule every stop back to back. No combined ticket or transfer is implied.",
    stops: [
      {
        slug: "let-the-market-write-your-menu",
        moment: "Begin with the everyday",
        why: "Let a food purchase and a serving suggestion bring the city down to the scale of a meal. This is independent shopping, not an included tasting tour.",
      },
      {
        slug: "hear-the-church-before-you-climb",
        moment: "Make room around noon",
        why: "Change from the market's movement to sustained listening. The same city has a different texture when you give half an hour to sound.",
      },
      {
        slug: "paint-the-pattern-you-noticed",
        moment: "Give your hands an afternoon",
        why: "Turn the patterns on the façades into a process you have tried. Plan collection before committing your final day to the workshop.",
      },
      {
        slug: "taste-what-time-does-to-port",
        moment: "Across the river",
        why: "Carry your new attention to process into the cellars. Ask what ageing changes rather than treating the tasting as a list of glasses to finish.",
      },
      {
        slug: "follow-the-building-around-the-music",
        moment: "Let another building explain its sound",
        why: "A separate Casa da Música tour makes circulation and performance space part of how you hear the city. Confirm the tour language and current rooms.",
      },
    ],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "japan",
    regions: ["kyoto"],
    title: "Give each sense a way into Kyoto.",
    intro:
      "Tea is a recognisable beginning. A scent gallery, a textile pattern and a ride through smaller streets make the city less dependent on a list of sights. Choose the contrast that interests you, not the maximum number of appointments.",
    pace: "One booked anchor and one lighter stop per day.",
    planning:
      "Camellia Flower is in Higashiyama and is not the same venue as Garden Teahouse. Kunjyukan, the textile and kintsugi studios and the cycle meeting point are separate locations. Confirm travel, languages, opening days and collection. Shikata's urushi trial has age and handling requirements, and the work needs further curing at home. Shōsei-en offers ordinary daytime garden admission near the station, not access to its buildings or guaranteed evening events. Choose one substantial workshop per day and respect the garden's seasonal last-entry time. None is an automatic add-on to another booking.",
    stops: [
      {
        slug: "a-bowl-of-attention",
        moment: "Begin with a gesture",
        why: "Watch a bowl being prepared, then whisk your own. Take that attention to sequence into the rest of the visit.",
      },
      {
        slug: "find-a-place-through-its-scent",
        moment: "A quieter interval",
        why: "Trade a visual checklist for a comparison you make with your nose. The free gallery is a different kind of encounter from a booked ceremony.",
      },
      {
        slug: "build-a-pattern-in-colour",
        moment: "Another session, another material",
        why: "Move from observing to making. A small textile exercise lets you discover how a repeated pattern is assembled.",
      },
      {
        slug: "ride-from-alley-to-river",
        moment: "Let movement connect the city",
        why: "Give the streets their own guided session. This is a cycling experience, not a claim that the other three stops lie on its route.",
      },
      {
        slug: "repair-a-bowl-without-hiding-the-join",
        moment: "On another day, work with what already exists",
        why: "A repair introduction offers a contrast to making a new pattern. The aftercare and curing period carry the experience beyond the studio and need to fit your journey home.",
      },
      {
        slug: "give-kyoto-one-unhurried-pond-loop",
        moment: "Leave a lighter interval without a lesson",
        why: "The garden offers a self-paced outdoor counterpoint to a booked workshop. Ordinary admission concerns paths and pond views, not entry to closed buildings.",
      },
    ],
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "turkiye",
    regions: ["istanbul"],
    title: "Water as passage, pattern and pause.",
    intro:
      "A ferry is the familiar crossing. Ebru makes water a working surface. A hammam changes the pace again. Three different roles for something the city is already making you notice.",
    pace: "Choose one booked experience and let the crossing breathe.",
    planning:
      "Use the current municipal ferry timetable and exact pier names. The hammam and marbling studio have separate reservations and conditions. Allow time to cool down after bathing and protect drying paper. This is a thematic sequence, not a verified walking route.",
    stops: [
      {
        slug: "let-the-ferry-redraw-istanbul",
        moment: "Start in public life",
        why: "Take the ordinary ferry on its own terms. Watch how a city is connected, rather than using the crossing only as a backdrop.",
      },
      {
        slug: "lift-a-pattern-from-the-water",
        moment: "Change the scale",
        why: "A vast stretch of water becomes a shallow tray. Try the transfer from floating colour to a sheet you can hold.",
      },
      {
        slug: "marble-steam-istanbul",
        moment: "Leave room to slow down",
        why: "End the rush, not necessarily the day. Read the bathing etiquette and choose a programme that suits your comfort.",
      },
    ],
  },
  {
    slug: "mexico-city",
    name: "Mexico City and Xochimilco",
    country: "mexico",
    regions: ["mexico-city", "xochimilco"],
    title: "A city that grows, moves and answers back.",
    intro:
      "See a living agricultural landscape, an avenue temporarily shared differently and a crowd that helps make a spectacle. The connection is participation, but your role changes at each stop.",
    pace: "Several days, with Xochimilco given its own outing.",
    planning:
      "The avenue programme is tied to its published Sunday calendar. Lucha libre depends on the announced arena and event. Biblioteca Vasconcelos offers a separate reading pause in Buenavista, not a reserved architectural tour. Use in-room rules rather than assuming home-borrowing rights. Xochimilco is a separate journey within the wider city, not a quick interval between central stops. Check the farm visit's meeting point and return arrangements before combining bookings.",
    stops: [
      {
        slug: "mexico-city-grown-on-water",
        moment: "Give the landscape a day",
        why: "Begin with the food system beneath a familiar destination name. This is an agricultural encounter, not an interchangeable party-boat excursion.",
      },
      {
        slug: "ride-the-avenue-when-the-cars-step-aside",
        moment: "On the right Sunday",
        why: "Notice what changes when a major street makes room for people moving at another pace. Verify the current route and conditions.",
      },
      {
        slug: "pause-to-read-beneath-mexico-citys-suspended-shelves",
        moment: "Keep another part of the stay quiet",
        why: "Reading makes a spectacular public interior useful without turning its readers into a photoshoot. Basic consultation and home borrowing are different services.",
      },
      {
        slug: "hear-the-arena-answer-back",
        moment: "An evening with a programme",
        why: "After seeing how a city shares space, listen to how it shares a reaction. Choose a specific Arena México event, not a generic ticket.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "singapore",
    regions: ["singapore"],
    title: "A shared table, a wax line and two kinds of green.",
    intro:
      "Begin with the Singapore people recognise, then follow food into making and give its plants a different scale of attention. An orchid garden and a tidal habitat are not interchangeable versions of nature. The small island is not a reason to compress every experience into one day.",
    pace: "Food and making for one day. Choose a separate nature outing.",
    planning:
      "Confirm hawker stall hours and the batik session first. The National Orchid Garden has separate paid admission within the Botanic Gardens and is a cultivated collection. Coney Island and Sungei Buloh Wetland Reserve are different outings with their own transport, weather and access considerations. Neither is a casual extension of the other or of the orchid garden. Check NParks' current entrance and closure notices, carry water and let heat or rain change the plan. No combined admission, guided wetland tour or transfer is implied.",
    stops: [
      {
        slug: "a-morning-at-the-hawker-table",
        moment: "Start where people eat",
        why: "Make ordering, sharing space and clearing your tray part of the experience, not merely the logistics around a dish.",
      },
      {
        slug: "draw-with-wax-in-kampong-gelam",
        moment: "Make something slowly",
        why: "Give an afternoon to the relationship between a wax line and colour. It is a different kind of concentration from the food court.",
      },
      {
        slug: "walk-the-island-between-forest-and-shore",
        moment: "Choose an open-air day",
        why: "Let a walk on Coney Island change the scale of the visit. Check weather, paths and park rules before leaving.",
      },
      {
        slug: "find-the-citys-wilder-edge",
        moment: "Or follow the tidal habitat",
        why: "Sungei Buloh offers an independent wetland walk, with mangroves, hides and changing water levels. Choose it for patient observation rather than adding it automatically to Coney Island. No guided tour or wildlife sighting is included.",
      },
      {
        slug: "follow-singapores-orchids-at-a-slower-pace",
        moment: "Keep another visit at plant scale",
        why: "A cultivated orchid collection rewards a slower circuit without pretending to be wild Singapore. Its paid admission and display notices remain separate from the wider gardens.",
      },
    ],
  },
  {
    slug: "sydney",
    name: "Sydney",
    country: "australia",
    regions: ["sydney"],
    title: "Taste knowledge. Meet the harbour at another scale.",
    intro:
      "Sydney's water can be an image before it becomes a place. A First Nations-led garden walk begins with living plant knowledge beside the harbour. Maccallum Pool offers a public saltwater swim at another scale, if conditions and your ability suit it. The visitor's role changes between guided learning and an independently assessed swim.",
    pace: "One booked garden tour and a separately planned harbour stop, with no need to swim if conditions or ability do not fit.",
    planning:
      "Reserve the tour-only Bush Tucker format and follow the First Nations guide's rules about tasting and photographs. Maccallum Pool is at Cremorne Point, has no lifeguard and closes for cleaning at posted times. Check Council notices, weather, harbour conditions and your swimming ability before entering. The garden and pool need separate transport and timing. Neither access route is a combined ticket, transfer or EA reservation.",
    stops: [
      {
        slug: "taste-native-plants-with-a-first-nations-guide",
        moment: "Let a guide introduce the plants",
        why: "Food knowledge gains context when a First Nations guide chooses what to share in a living garden, instead of a menu claiming to tell the whole story.",
      },
      {
        slug: "swim-a-sydney-harbour-length",
        moment: "At another point on the harbour",
        why: "The public pool lets the waterline be experienced at body scale, with conditions and safety checked on the day.",
      },
    ],
  },
  {
    slug: "venice",
    name: "Venice",
    country: "italy",
    regions: ["venice"],
    title: "Understand Venice through your hands.",
    intro:
      "An oar and a glass rod ask different things of balance, movement and attention. Put a rowing lesson alongside a contemporary atelier encounter and the city's familiar surfaces begin to carry the work behind them.",
    pace: "Two separate sessions, with time between them.",
    planning:
      "The rowing lesson and Castello atelier are separate locations and bookings. Check the meeting points, rowing conditions and glass cooling or collection before choosing dates. Do not assume the glass workshop takes place on Murano or that you can carry a hot piece away immediately.",
    stops: [
      {
        slug: "venice-through-an-oar",
        moment: "Learn the movement",
        why: "Try the learned balance behind a familiar Venetian image. Let the instructor and conditions determine the session.",
      },
      {
        slug: "draw-a-small-shape-in-flame",
        moment: "Return to the workbench",
        why: "Trade the water's resistance for heat and a smaller material. Contemporary making belongs in the city's story alongside the well-known traditions.",
      },
    ],
  },
];

export function resolveCityChapters(items: PublicExperience[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return cityChapters.flatMap((chapter) => {
    const stops = chapter.stops.flatMap((stop) => {
      const item = bySlug.get(stop.slug);
      return item &&
        item.countrySlug === chapter.country &&
        chapter.regions.includes(item.regionSlug)
        ? [{ ...stop, item }]
        : [];
    });
    // Partial sequences can leave misleading instructions. Hide until all stops are available.
    return stops.length === chapter.stops.length ? [{ ...chapter, stops }] : [];
  });
}

export function chapterHref(
  chapter: Pick<CityChapter, "country" | "regions" | "slug">,
) {
  return `/places/${chapter.country}${chapter.regions.length === 1 ? `/${chapter.regions[0]}` : ""}#${chapter.slug}`;
}
