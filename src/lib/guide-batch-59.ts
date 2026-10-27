import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";
type Draft = Omit<PublicExperience, "status" | "demo" | "image" | "imageAlt">;
const review = (
  scope: NonNullable<PublicExperience["guideReview"]>["scope"],
  sources: [string, string, string][],
  reviewBy = "2027-01-24",
): PublicExperience["guideReview"] => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-10-27",
  reviewBy,
  accessUrl: sources[0][1],
  sources: sources.map(([title, url, note]) => ({ title, url, note })),
});
const drafts: Draft[] = [
  {
    id: "turin-bicerin-layers",
    slug: "leave-the-spoon-beside-a-turin-bicerin",
    title: "Leave the spoon beside a Turin bicerin",
    field: "taste",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "turin",
    place: "Turin, Piazza della Consolata",
    summary:
      "At Caffè Al Bicerin, coffee, chocolate and cream meet in the glass without becoming the same thing. The first instruction is to leave them alone.",
    kernel:
      "Order the café's bicerin and look through the glass before taking a small sip. Leave the spoon on the saucer. The café recommends allowing the layers to meet in your mouth rather than stirring them together first. Notice the temperature and texture as well as the sweetness, then compare your first sip with the next. This is a useful little exercise in doing less. There is no need to turn it into a formal tasting or identify a list of flavours. Give the drink your attention, then look up at the square outside.",
    rootedness:
      "Caffè Al Bicerin has occupied its address opposite the Consolata sanctuary since the eighteenth century. Its name is attached to a drink that belongs to Turin's café culture, bringing coffee and chocolate into a small, layered serving. The café describes its own preparation, while Piemonte's traditional-product record establishes the drink's regional context. Neither source makes every version identical. The protected house recipe remains the café's, not a technique visitors are invited into the kitchen to learn.",
    shift:
      "Instead of reaching automatically for a spoon, discover what a drink can do when its ingredients remain separate.",
    humanReturn:
      "A small change in how you taste can make familiar ingredients feel new, and give you a more precise memory of Turin than another coffee stop.",
    responsibility:
      "Check dairy, caffeine and other ingredients before ordering. Do not assume a dairy-free substitute preserves this preparation or is available. The café normally closes on Wednesdays, with listed holiday exceptions. It also lists closure on 25 December, 1 January and 11 to 15 January 2027. Verify the date before a special journey. Ask about entrance access and seating if needed. Keep photographs discreet in the small working room and do not expect an explanation during busy service.",
    evidence:
      "The café publishes its preparation advice, address and current closure calendar. The Piemonte product record corroborates the regional drink. EA has not visited, tasted a serving or verified the café's recipe.",
    duration: "Allow 30 to 45 minutes, plus any wait for a table",
    participation: "An ordinary café order, tasted at your own pace",
    access:
      "Visit Caffè Al Bicerin at Piazza della Consolata 5. Confirm current service and pay the café directly. This is not an EA tasting, booking or partnership.",
    guideReview: review("public_hospitality", [
      [
        "Caffè Al Bicerin: hours and location",
        "https://bicerin.it/dove-siamo/",
        "Primary address and dated holiday closures.",
      ],
      [
        "Caffè Al Bicerin: the drink",
        "https://bicerin.it/en/the-bicerin/",
        "House preparation and advice against stirring. Not independent quality evidence.",
      ],
      [
        "Regione Piemonte: traditional Bicerin product record",
        "https://www.regione.piemonte.it/governo/bollettino/abbonati/2013/45/attach/dddb110000879_040.pdf",
        "Regional heritage context, not current café access information.",
      ],
    ]),
  },
  {
    id: "penang-hameediyah-nasi-kandar",
    slug: "choose-the-curries-for-a-penang-nasi-kandar",
    title: "Choose the curries for a Penang nasi kandar",
    field: "taste",
    country: "Malaysia",
    countrySlug: "malaysia",
    regionSlug: "penang",
    place: "George Town, Lebuh Campbell",
    summary:
      "At Hameediyah, build a lunch around rice and the curries you actually want to taste. The choices are the experience, not a compulsory mountain of food.",
    kernel:
      "Look at the available dishes before you start ordering. Choose a portion of rice, a main accompaniment and a vegetable if one suits you, then ask which gravy goes with them. Start with a little rather than assuming every curry should be mixed. Taste rice with one sauce and then with another. Notice where spice, richness and texture change. Confirm the cost of your choices before committing to expensive seafood or a large portion. Once seated, eat slowly enough to understand the plate you have assembled. Another person's preferred combination need not be yours.",
    rootedness:
      "George Town World Heritage Incorporated documents Hameediyah's origins in 1907 and its continuing Campbell Street address. Its account connects nasi kandar with rice and curry carried in baskets on a shoulder pole. Penang's official food guide also lists the restaurant as a nasi kandar address. The present visit is to a commercial dining room, not a reconstruction of street hawking. It offers a concrete way into the city's Indian Muslim food history without claiming that one restaurant represents every cook or community.",
    shift:
      "Read a plate as a set of decisions rather than treating a regional dish as one fixed recipe.",
    humanReturn:
      "Leave knowing which combination you enjoyed and what you would ask for next time, with a practical point of comparison for another Penang lunch.",
    responsibility:
      "Confirm current opening directly, as published guides disagree on the starting hour. Ask about ingredients, shellfish, nuts, dairy, gluten and shared utensils. Do not infer dietary suitability from a dish's appearance. Order within your appetite and keep the queue moving while staff serve others. Ask before photographing cooks or customers. Discuss step-free access and seating with the restaurant if needed. This guide does not independently certify hygiene, halal status or today's ingredients.",
    evidence:
      "The heritage-management body documents the business and food tradition. Penang's official street-food guide corroborates the address. EA has not visited or tasted the current menu. Historical profiles are not a guarantee of today's opening or dishes.",
    duration: "Allow 45 to 60 minutes for lunch, plus any queue",
    participation:
      "Choose and buy a rice-and-curry meal, with no hosted tasting included",
    access:
      "Use the Campbell Street restaurant at 164A Lebuh Campbell, George Town. Confirm service before travelling. Order and pay directly, with no EA reservation or partnership.",
    guideReview: review(
      "public_hospitality",
      [
        [
          "George Town World Heritage Incorporated: Hameediyah",
          "https://gtwhi.com.my/hameediyah-restaurant-sdn-bhd/",
          "Specific heritage-business record. Other business cards on the page must not be mistaken for this restaurant's details.",
        ],
        [
          "Penang Global Tourism: street-food guide",
          "https://mypenang.gov.my/uploads/downloads/SFA_Penang-Street-Food_V04Sep24-EN.pdf",
          "Official destination corroboration. Published hours are not a same-day confirmation.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "paris-chartier-bouillon-meal",
    slug: "read-a-paris-bouillon-through-an-ordinary-meal",
    title: "Read a Paris bouillon through an ordinary meal",
    field: "taste",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    place: "Paris, Grands Boulevards",
    summary:
      "Sit down at Bouillon Chartier for a straightforward French meal in a dining room built for many people, not a rarefied tasting menu.",
    kernel:
      "Join the queue at the Grands Boulevards address, then read the day's menu once you have a table. Choose a starter and a main that interest you instead of treating the low starting prices as a reason to over-order. An egg with mayonnaise or leeks with dressing, when offered, can be as revealing as a more elaborate plate. Notice the room's scale and the rhythm of service while keeping attention on the person serving your table. Save dessert for a decision after the main course. The point is a meal in a particular Paris institution, not photographing an empty room that is meant to be busy.",
    rootedness:
      "Chartier's Grands Boulevards restaurant opened in 1896. Its published history places it in the bouillon tradition of substantial, accessible meals and large dining rooms. The mirrors, high ceilings and service rhythm are part of that setting, but they do not make the food a museum exhibit. The current menu changes with supply. This is a well-known address with a mixed clientele, not an undiscovered local secret or a claim that all Parisians eat in the same way.",
    shift:
      "Look for the interest in an everyday meal's setting and organisation, not only in an expensive or unfamiliar ingredient.",
    humanReturn:
      "A clearer sense of the difference between a bouillon meal, a café stop and a long restaurant occasion can make the rest of your Paris eating easier to plan.",
    responsibility:
      "This branch does not take reservations. Leave room for a queue, especially around conventional meal times. Read the actual menu and prices rather than relying on an illustrative online dish or a promised budget. Ask about allergens and vegetarian options before ordering. Contact the branch about mobility and seating needs. Keep photographs to your own table or an unobstructed view, without turning staff and diners into subjects without permission. Alcohol is optional.",
    evidence:
      "The restaurant publishes branch-specific access, its history and an explicitly indicative menu. These operator sources establish the visit, not independent quality. EA has not eaten here or assessed service on site.",
    duration: "Allow 60 to 90 minutes for the meal, plus the queue",
    participation: "A walk-in restaurant meal chosen from the day's menu",
    access:
      "Go to 7 rue du Faubourg Montmartre, not the Montparnasse or Gare de l'Est branches. Check current service before travel. No EA booking, fixed menu or partnership is implied.",
    guideReview: review("public_hospitality", [
      [
        "Bouillon Chartier: Grands Boulevards",
        "https://www.bouillon-chartier.com/en/bouillon-chartier-grands-boulevards-en/",
        "Branch-specific visit, address and no-reservation policy.",
      ],
      [
        "Bouillon Chartier: indicative menu",
        "https://www.bouillon-chartier.com/en/menu/",
        "Dish examples only. The operator states that the menu changes daily.",
      ],
    ]),
  },
  {
    id: "kanazawa-tsuda-mizuhiki",
    slug: "turn-a-paper-cord-into-a-kanazawa-knot",
    title: "Turn a paper cord into a Kanazawa knot",
    field: "make",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "kanazawa",
    place: "Kanazawa, Nomachi",
    summary:
      "At Tsuda Mizuhiki Orikata, follow coloured cords through a small knot and discover a craft that can make the wrapping as considered as the gift.",
    kernel:
      "Book one of the introductory mizuhiki activities with a companion, then choose colours you can easily distinguish while learning. Watch where the first cord passes over and under before pulling anything tight. Keep the shape loose enough to correct it and ask the instructor to show the crossing again if you lose the sequence. A small flower, charm or gift envelope gives the technique a manageable scale. Choose the actual workshop product when booking rather than assuming every object in the shop is achievable in one visit. Take your finished piece home as a record of a first attempt, not a claim to mastery.",
    rootedness:
      "Tsuda's Kanazawa workshop places contemporary accessories beside a longer practice of decorative cords and ceremonial wrapping. The upstairs teaching space also displays earlier work and materials from the business. Its current programme includes several small projects, each with a different duration and level of detail. The craft is not exclusive to this shop or this city. What makes the visit useful is learning the handling of the cord in a documented working craft setting rather than buying a finished knot without understanding its construction.",
    shift:
      "A piece of packaging becomes an object whose shape depends on sequence, tension and care.",
    humanReturn:
      "You leave with a small handmade object and a new reason to notice the wrapping, ties and finishing details around a gift.",
    responsibility:
      "The current operator page accepts groups of two to nine, on weekdays only, excluding Japanese holidays. Everyone in a group must select the same activity. Workshops are upstairs, so confirm step-free access before booking. Ask about teaching language and age suitability rather than assuming the English booking notes guarantee English instruction. Younger children may need adult assistance. The older destination listing gives a different capacity and price, so use the operator's current confirmation. Do not turn up alone expecting a guaranteed place.",
    evidence:
      "The operator's bilingual conditions and Japanese project descriptions were checked directly. The city's indexed listing corroborates the workshop, but its site was temporarily unavailable during research. EA has not attended or assessed the teaching.",
    duration:
      "About 30 to 60 minutes for the small introductory projects, according to the chosen activity",
    participation:
      "A booked, instructor-led paper-cord craft session for at least two people",
    access:
      "Reserve through Tsuda Mizuhiki Orikata at 1-1-36 Nomachi. Read the confirmation for the selected product, fee and start time. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "Tsuda Mizuhiki: workshops and booking",
          "https://kagamizuhiki.com/apps/note/workshop/",
          "Current primary programme, two-to-nine-person requirement and weekday restrictions.",
        ],
        [
          "Visit Kanazawa: mizuhiki workshop",
          "https://visitkanazawa.jp/en/activities/detail_767.html",
          "Official indexed corroboration only. Direct site temporarily suspended for security maintenance. Older details do not override the operator.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "budapest-szamos-chocolate-decoration",
    slug: "finish-a-small-chocolate-at-szamos-in-budapest",
    title: "Finish a small chocolate at Szamos in Budapest",
    field: "make",
    country: "Hungary",
    countrySlug: "hungary",
    regionSlug: "budapest",
    place: "Budapest, Kossuth Lajos tér",
    summary:
      "Join a Szamos chocolate tour, watch the chocolatier's technique and decorate a chocolate of your own. This is a small finishing task, not a full confectioner's course.",
    kernel:
      "Choose a dated public chocolate tour and arrive ready to watch before you work. Follow the demonstration of moulding and tempering, then think about how you want to finish your own piece. Use the toppings or decorative materials provided for that session rather than copying the most elaborate object in a display case. Notice the difference between a liquid material being handled by a professional and the limited task given to a first-time participant. The chocolate you take away is a reminder of that distinction. Leave time to look at the museum's confectionery tools before rushing back to Parliament Square.",
    rootedness:
      "Szamos connects the visit to a Hungarian confectionery business with a history in marzipan and chocolate. The Kossuth tér museum presents production tools, reconstructed settings and decorative work. Its current Hungarian booking page offers public chocolate tours with a take-home decorated chocolate. This is a commercial introduction to a particular confectionery house, not a claim that cacao is grown in Hungary or that a short visit teaches the full process from bean to finished bar.",
    shift:
      "See how much controlled technique sits behind the apparently simple act of letting chocolate set.",
    humanReturn:
      "A small object you helped finish can make you more attentive to texture, moulding and decoration the next time you pass a confectioner's window.",
    responsibility:
      "Book the dated public tour, not a private team-building package or a separate chocolate-school course. The English museum page currently shows no upcoming courses while the Hungarian booking page lists public tours, so confirm the actual session and teaching language. Ask about nuts, dairy, soy, other allergens and shared equipment before paying. Check age suitability and the route to the second-floor museum. The English page describes a bar while the current Hungarian offer describes a chocolate medallion, so do not promise a particular shape without the booking confirmation.",
    evidence:
      "Szamos publishes dated public tours and a separate English explanation of the museum and demonstration. EA has not attended, tasted the chocolate or verified the delivery of a particular session.",
    duration:
      "Allow roughly 90 minutes and confirm the exact session length when booking",
    participation:
      "A museum tour, demonstration, tastings and a small chocolate-decorating task",
    access:
      "Use the live Szamos Élménytúrák booking page for the Chocolate Museum at Kossuth tér 10. Check remaining places and language directly. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "Szamos: public chocolate tours",
          "https://szamos.hu/elmenyturak",
          "Dated bookable public sessions and current take-home activity.",
        ],
        [
          "Szamos Chocolate Museum: English visitor information",
          "https://www.csokimuzeum.hu/english",
          "Demonstration and museum context. The English availability widget is inconsistent with the live Hungarian calendar.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "buenos-aires-fileteado-introduction",
    slug: "paint-a-buenos-aires-line-in-fileteado",
    title: "Paint a Buenos Aires line in fileteado",
    field: "make",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    place: "Buenos Aires, San Telmo",
    summary:
      "Spend two hours with a fileteador in San Telmo and make a first piece of the curling, shaded lettering and ornament you notice around Buenos Aires.",
    kernel:
      "Start with a simple line and follow the teacher's sequence before adding your own flourishes. Watch how a curve becomes fuller, how a shadow suggests depth and how the empty space helps the ornament read. Work on the small piece provided for the introductory class rather than trying to reproduce a whole shopfront. Ask which features distinguish fileteado from decorative lettering in general. When you return to the street, look for one of those features on a sign. The useful souvenir is both the piece you carry and the pattern you can now recognise.",
    rootedness:
      "Fileteado developed in Buenos Aires as a decorative practice associated with vehicles, signs and everyday visual culture. Argentina's cultural account cautions against an exact origin date, while UNESCO records the contribution of a newer generation of women practitioners to its changing aesthetic. The current San Telmo programme offers a two-hour introduction with a practitioner and materials included, distinct from the provider's four-month course. A visitor can begin a technique here without claiming the skills or professional standing of a working fileteador.",
    shift:
      "A colourful sign stops being background decoration and becomes a sequence of decisions made by a hand.",
    humanReturn:
      "You gain a way to notice the city between its landmarks, and a first practice piece that tells you more than a mass-produced souvenir would.",
    responsibility:
      "Confirm the exact address, available date, price and teaching language before paying. The operator lists San Telmo classes throughout the year but does not establish that every advertised time is available. Third-party listings disagree about mobility access and languages, so ask the organiser directly about the specific room. Confirm age suitability and material sensitivities. Do not assume a class includes a neighbourhood tour. Ask before photographing other participants and credit the teacher if sharing their demonstration.",
    evidence:
      "The provider publishes a two-hour introductory class with materials and a take-home piece. UNESCO and Argentina's cultural record supply context, not an endorsement of this provider. EA has not attended or independently assessed the instructor or studio access.",
    duration: "Two hours, plus arrival time",
    participation:
      "A booked introductory painting class, with no previous experience required by the operator",
    access:
      "Request a place in the Clase de inicio al fileteado porteño through the operator's official programme. Wait for confirmation of the San Telmo venue and language. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "Fileteado Porteño: introductory classes",
          "https://fileteadoporteno.com/clases-y-cursos-de-fileteado-porteno/",
          "Primary two-hour visitor programme, separate from the longer course.",
        ],
        [
          "UNESCO: filete porteño of Buenos Aires",
          "https://ich.unesco.org/es/RL/el-filete-porteno-de-buenos-aires-una-tecnica-pictorica-tradicional-01069",
          "Heritage, transmission and women practitioners. Recognition of the practice is not endorsement of this class.",
        ],
        [
          "Argentina Culture: fileteado history",
          "https://www.argentina.gob.ar/noticias/se-inauguro-en-tecnopolis-el-11o-encuentro-anual-de-fileteadores",
          "Historical context only. The older event in this article is not presented as a current visitor programme.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "hong-kong-dragons-back-hike",
    slug: "follow-hong-kongs-coast-from-dragons-back",
    title: "Follow Hong Kong's coast from Dragon's Back",
    field: "move",
    country: "Hong Kong",
    countrySlug: "hong-kong",
    regionSlug: "hong-kong-island",
    place: "Hong Kong Island, Shek O Country Park",
    summary:
      "Trade the street canyon for a real ridge. Dragon's Back puts the bays, villages and green folds of Hong Kong Island into one walk.",
    kernel:
      "Start at To Tei Wan and follow the signed route towards the ridge. Climb at a pace that leaves enough breath to look around. At the open viewpoints, stop somewhere that does not block the trail and trace the coastline below before reaching for your camera. Continue towards Big Wave Bay only if weather, daylight and your energy allow the full route. This is a walk with changes of height and surface, not a promenade with a view attached. Carry your own water and a downloaded route, and decide your return transport before setting off rather than relying on a beach taxi being available.",
    rootedness:
      "The route is part of Hong Kong Trail Section 8, connecting To Tei Wan and Tai Long Wan, also known as Big Wave Bay. Its coastal setting makes a useful correction to the idea that Hong Kong consists only of dense urban streets. Public trail infrastructure allows visitors to encounter the island's protected landscape without entering a private attraction. The villages and beaches below remain places where people live and work, not scenery set aside for hikers.",
    shift:
      "The city becomes an island with edges, slopes and weather, rather than a skyline viewed from another building.",
    humanReturn:
      "A recognisable Hong Kong journey can include physical effort and open space without becoming an extreme expedition.",
    responsibility:
      "Check official weather and trail notices on the day. Avoid the exposed ridge during storms, strong wind or dangerous heat. Wear suitable walking shoes, carry water and sun protection, and leave enough daylight. Steps and uneven surfaces make this unsuitable as a step-free route. Do not leave the marked path for a photograph. Reaching Big Wave Bay does not establish that swimming is safe or supervised. Take litter out and keep noise low near homes.",
    evidence:
      "The government trail page and tourism board describe the same route with slightly different distance and time estimates. EA has not walked it or verified present trail conditions.",
    duration:
      "About 8 to 8.5 kilometres. Allow roughly three to four hours, with additional time for transport and rests",
    participation:
      "An independent moderate coastal hike, not a guided excursion",
    access:
      "Check the official route from To Tei Wan to Tai Long Wan and current public transport. The tourism route uses bus 9 from Shau Kei Wan. No EA transport, guide or booking is provided.",
    guideReview: review(
      "public_observation",
      [
        [
          "Hong Kong Round Island Trail: Section 8",
          "https://www.roundislandtrail.gov.hk/en/exploring-the-trail/route-suggestions/hong-kong-trail-section-8-to-tei-wan-to-tai-long-wan",
          "Government route description and endpoints. Conditions remain weather-dependent.",
        ],
        [
          "Hong Kong Tourism Board: Dragon's Back",
          "https://www.discoverhongkong.com/eng/place-to-go/travel.guide-dragon-s-back.html",
          "Official indexed route, moderate grade and access. Direct automated access was restricted.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "paris-coulee-verte-walk",
    slug: "walk-paris-above-its-old-railway",
    title: "Walk Paris above its old railway",
    field: "move",
    country: "France",
    countrySlug: "france",
    regionSlug: "paris",
    place: "Paris, Coulée verte René-Dumont",
    summary:
      "Follow a former railway through planted corridors and across the twelfth arrondissement. The city changes scale when the pavement is a floor below you.",
    kernel:
      "Choose an entrance to the Coulée verte and walk a manageable section rather than treating the entire route as an obligation. On the elevated stretch, notice the arches beneath you, the windows at eye level and the moments when planting hides the road. Stop at a crossing or opening to work out how the old line fits into the present street plan. Then keep going until the garden changes character. You can make this a short walk before lunch or a longer eastward journey, but use the city map to identify a suitable exit instead of assuming every stair leads to the same level.",
    rootedness:
      "The Coulée verte René-Dumont reuses a former railway corridor across eastern Paris. Its roughly 4.5-kilometre sequence includes elevated and ground-level sections rather than one continuous rooftop garden. The Viaduc des Arts below the western portion makes the earlier structure visible from the street. The interest lies in how a piece of transport infrastructure has become an everyday route for people on foot, not in imagining that the city has disappeared around it.",
    shift:
      "A railway can continue to connect a neighbourhood after the trains have gone, at an entirely different speed.",
    humanReturn:
      "You gain a way to read the city's layers while moving through them, with no ticket or specialist architectural vocabulary required.",
    responsibility:
      "Check seasonal hours before starting. The city currently lists winter closing at 17:45. Its access notice identifies the Hector-Malot lift as working, while lifts at 34 rue de Lyon and Leroy Merlin are out of service. Recheck before relying on any lift. Follow signs for the specific section, including cycle restrictions. Keep the route clear for other walkers and avoid photographing into nearby homes. Parks can close during dangerous weather.",
    evidence:
      "Paris City's location record supplies the route, seasonal access and lift notices. Its parks information explains weather-related closures. EA has not walked the route or tested the lifts.",
    duration:
      "Allow 60 to 90 minutes for a selected stretch, longer for the full approximately 4.5-kilometre route",
    participation:
      "A free independent urban walk, with the route length chosen by you",
    access:
      "Use the municipal map to choose an entrance and exit. The elevated western stretch begins near Bastille, but access conditions vary along the corridor. No EA booking or guided tour.",
    guideReview: review(
      "public_observation",
      [
        [
          "Paris City: Coulée verte René-Dumont",
          "https://www.paris.fr/lieux/coulee-verte-rene-dumont-1772",
          "Primary map, seasonal hours and current lift notices.",
        ],
        [
          "Paris City: parks and gardens",
          "https://www.paris.fr/pages/espaces-verts-139",
          "Municipal access and weather-closure context, not a guarantee that every entrance is open.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "valencia-albufera-day-boat",
    slug: "cross-valencias-lagoon-at-the-speed-of-a-boat",
    title: "Cross Valencia's lagoon at the speed of a boat",
    field: "move",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "valencia",
    place: "El Palmar, Albufera Natural Park",
    summary:
      "From El Palmar, take a short boat trip across the Albufera and watch reeds, open water and the low horizon replace the city skyline.",
    kernel:
      "Book the regular daytime trip and arrive at the stated embarkation point in El Palmar. Once aboard, sit where the boat operator directs and let your eye adjust to a landscape without tall landmarks. Notice how a channel opens into wider water and how reeds change the sense of distance. Listen to the explanation if it is offered in a language you understand, but do not expect a private naturalist tour from a shared boat ticket. Keep your phone down for part of the crossing. The useful discovery is how much there is to notice when the view is mostly water, vegetation and sky.",
    rootedness:
      "The Albufera is a protected lagoon landscape south of Valencia, connected to rice cultivation, fishing and settlements including El Palmar. A public boat trip offers a controlled way onto the water without hiring a craft or navigating sensitive channels yourself. El Tío Pastilla advertises electrically powered boats and several different visit formats. That operational claim is the provider's, not an independent environmental certification. This guide concerns its short regular trip, not a sunset package, meal or fishing demonstration.",
    shift:
      "Valencia's relationship with rice and water becomes a landscape you can move through, rather than a fact beside a plate of paella.",
    humanReturn:
      "A compact outing gives the city a wider setting and can sit beside a separate meal or village walk without pretending they form one booked package.",
    responsibility:
      "Confirm departure time, language, boarding assistance, child arrangements and weather policy directly. The regular daytime trip is not the longer sunset option. Ask about life jackets and mobility needs before payment. Do not feed wildlife, trail hands in the water or expect a particular bird sighting. The operator currently describes payment on arrival, so check accepted payment methods. Arrange the return journey to Valencia independently.",
    evidence:
      "The boat operator publishes the regular trip and meeting point. Visit Valencia establishes the protected landscape context. EA has not taken the trip, inspected the vessel or independently verified its propulsion.",
    duration:
      "Approximately 40 to 45 minutes on the regular boat trip, plus travel and arrival time",
    participation:
      "A booked shared boat ride with the operator, not independent navigation",
    access:
      "Reserve the regular Albufera trip with El Tío Pastilla and confirm the embarkation instructions at Calle Pintor Martí Girbés 13, El Palmar. No EA booking or provider partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "El Tío Pastilla: regular Albufera boat trip",
          "https://eltiopastilla.com/en/albufera-boat-trip/",
          "Primary duration and visitor programme. Distinct from the sunset and meal options.",
        ],
        [
          "Visit Valencia: Albufera Natural Park",
          "https://www.visitvalencia.com/en/what-to-see-valencia/albufera-natural-park",
          "Official destination context for the protected lagoon and surrounding landscape.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "florence-galileo-telescopes",
    slug: "look-closely-at-the-telescopes-that-changed-the-view",
    title: "Look closely at the telescopes that changed the view",
    field: "learn",
    country: "Italy",
    countrySlug: "italy",
    regionSlug: "florence",
    place: "Florence, Museo Galileo",
    summary:
      "At Museo Galileo, two surviving telescopes bring a large change in human understanding down to the scale of wood, glass and a carefully made tube.",
    kernel:
      "Find the museum's Galileo display and begin with the instruments rather than a list of famous discoveries. Look at the length of the tubes, the small lenses and the materials holding everything together. Read which objects are originals and which are models or reconstructions. Then consider the distance between the modest physical object in front of you and the observations it made possible. You are looking at preserved instruments through a display case, not being invited to observe the sky through them. Leave time for a neighbouring room so that Galileo's equipment sits among other attempts to measure, demonstrate and explain.",
    rootedness:
      "Florence's Museo Galileo preserves historical scientific instruments associated with the Medici and Lorraine collections, including the two surviving telescopes attributed to Galileo. Its displays connect instruments with the people and systems of patronage that supported their use. The building is close to the Uffizi, but the visit rewards a different kind of looking. Materials, scales and mechanisms matter as much as a recognisable name. A small object can hold a substantial history without needing an immersive spectacle around it.",
    shift:
      "A scientific breakthrough becomes something made by hand, dependent on glass, alignment and the willingness to look again.",
    humanReturn:
      "You leave with a more tangible picture of discovery and another way to connect Florence's artistic reputation with its history of observation.",
    responsibility:
      "Do not touch display objects or assume the originals are available for handling. Check the current room plan and temporary notices before making a special visit for one object. Tuesday normally has an earlier closing time, with dated exceptions listed by the museum. Christmas Day and New Year's Day are closed. This museum does not participate in the standard free-first-Sunday scheme. Ask about access needs and available interpretation before booking. An ordinary museum ticket is not an astronomy session.",
    evidence:
      "The museum's instrument record identifies the telescopes, while its visit and FAQ pages establish admission conditions. EA has not visited or confirmed the current position of every object.",
    duration: "Allow 60 to 90 minutes, including time beyond the Galileo room",
    participation:
      "An independent museum visit focused on close observation of historical instruments",
    access:
      "Use Museo Galileo's official admission page for Piazza dei Giudici 1. Select the correct date and check Tuesday hours. No EA ticketing or guided tour is included.",
    guideReview: review("public_admission", [
      [
        "Museo Galileo: opening times and admission",
        "https://www.museogalileo.it/it/organizza-la-visita/orari-e-prezzi.html",
        "Primary current admission, short Tuesdays and holiday exceptions.",
      ],
      [
        "Museo Galileo: Galileo's instruments",
        "https://www.museogalileo.it/en/galileo/instruments-en.html",
        "Collection evidence for the surviving instruments, not permission to handle them.",
      ],
      [
        "Museo Galileo: visitor questions",
        "https://www.museogalileo.it/en/visit/faq.html",
        "Visit conditions and distinction from the free-first-Sunday programme.",
      ],
    ]),
  },
  {
    id: "amsterdam-het-schip-housing",
    slug: "step-inside-amsterdams-idea-of-a-better-home",
    title: "Step inside Amsterdam's idea of a better home",
    field: "learn",
    country: "Netherlands",
    countrySlug: "netherlands",
    regionSlug: "amsterdam",
    place: "Amsterdam, Spaarndammerbuurt",
    summary:
      "At Het Schip, follow expressive brickwork into a model home and post office. The question is not just how housing looks, but what everyday life was meant to feel like.",
    kernel:
      "Walk around the exterior before joining the museum's interior tour. Look for changes in brickwork, roofline and the treatment of small details, then carry those observations into the post office and museum dwelling. Ask what each space was designed to do for an ordinary resident. The guided route also includes a reconstruction of poor housing, which provides a comparison rather than a decorative backdrop. Leave time for the museum exhibition afterwards. The combination is more useful than photographing the building as an isolated architectural object and moving on without considering the people it was built to house.",
    rootedness:
      "Michel de Klerk designed this Amsterdam School housing complex for the Eigen Haard housing association, and it was built in 1919. The museum occupies the former school within the complex. Its account connects expressive design with the development of housing associations and improved living conditions. Het Schip is still part of a residential neighbourhood, not an entirely empty monument. The museum apartment is an interpreted space, not an invitation into the current residents' homes.",
    shift:
      "Architectural ambition becomes something that can belong to a post office or a working household, not only a palace or concert hall.",
    humanReturn:
      "You gain a more specific way to discuss a good home: its light, public services, details and place within a neighbourhood.",
    responsibility:
      "The museum is normally open Tuesday to Sunday, but it lists closure on Tuesday 3 November 2026 for filming. The regular 15:00 tour is in English. A small tour supplement is added to admission. Groups of eight or more should contact the museum instead of assuming they can join a public departure. The museum describes itself as wheelchair accessible, but confirm the complete guided route for your needs. Respect occupied homes and do not look into private windows.",
    evidence:
      "The museum publishes the guided interiors, language, access and dated closure. DutchCulture corroborates the collection's architectural context. EA has not attended the tour or tested its accessibility.",
    duration:
      "Allow about 90 minutes to two hours for the tour and exhibitions, confirming the tour length when booking",
    participation:
      "A museum visit with a separately selected guided interior tour",
    access:
      "Book Museum Het Schip at Oostzaanstraat 45 and check the tour language and supplement. This is not Museum De Dageraad, its other location. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "Museum Het Schip: visit and interior tours",
          "https://www.hetschip.nl/bezoekers/locaties-openingstijden/het-schip",
          "Primary tour contents, English departure, group size and 3 November closure.",
        ],
        [
          "DutchCulture: Museum Het Schip",
          "https://internationalheritage.dutchculture.nl/en/location/museum-het-schip",
          "Cultural-institution context, not a substitute for live museum access information.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "lisbon-coach-museum-wheels",
    slug: "read-lisbons-ceremonial-coaches-from-the-wheels-up",
    title: "Read Lisbon's ceremonial coaches from the wheels up",
    field: "learn",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    place: "Lisbon, Belém",
    summary:
      "In the National Coach Museum, start below the gilding. Wheels, suspension and narrow cabins reveal what a spectacular arrival required from the people and animals around it.",
    kernel:
      "Choose a small number of coaches instead of trying to absorb the whole collection in order. Begin at wheel height and look for how the body is carried above the axles. Move around the barrier to compare the passengers' enclosed space with the positions of the driver and attendants. Only then look at the painted panels and sculpted decoration. Read a label for the occasion or owner attached to one vehicle. This sequence helps separate the practical problem of moving people from the public display of status, and makes the collection more than a row of elaborate objects.",
    rootedness:
      "Lisbon's Museu Nacional dos Coches holds ceremonial vehicles spanning several centuries, with the main collection now presented in a modern building in Belém. The national museums authority describes the collection's historical and artistic significance. Coaches can reveal craft, engineering and unequal social roles at the same time. Looking closely does not require admiration for the political systems that commissioned them. The older Royal Riding School is a separate historic setting whose access should not be assumed from a ticket to the main museum.",
    shift:
      "An object designed to make an important person look effortless becomes evidence of all the work that made the arrival possible.",
    humanReturn:
      "You gain an engaging way to look at transport history, with concrete details that can interest both mechanically curious visitors and people drawn to design.",
    responsibility:
      "Use the new building at Avenida da Índia 136 and verify which spaces your ticket includes. The museum is normally closed on Mondays. Official sources differ on the full Christmas closure list, so confirm 24 December directly and do not plan around an assumed holiday opening. Stay behind barriers and do not touch objects. Flash, tripods and commercial filming are restricted. Ramps, lifts and loan wheelchairs are listed, but ask about any specific assistance you need.",
    evidence:
      "The museum's current visit page supplies admission and access rules. Museus e Monumentos de Portugal corroborates the institution and collection. EA has not visited or checked every display in person.",
    duration:
      "Allow 60 to 90 minutes for a focused visit to the main collection",
    participation:
      "An independent museum visit, not a carriage ride or handling session",
    access:
      "Check the museum's official ticket page for the main Belém building. Do not assume admission to the Royal Riding School during restoration works. No EA booking or partnership.",
    guideReview: review(
      "public_admission",
      [
        [
          "Museu Nacional dos Coches: plan a visit",
          "https://www.mncoches.gov.pt/visita",
          "Primary address, admission, accessibility and collection-room rules.",
        ],
        [
          "Museus e Monumentos de Portugal: National Coach Museum",
          "https://www.museusemonumentos.pt/en/museus-e-monumentos/museu-nacional-dos-coches",
          "National authority corroboration. Confirm holiday closures where the two official pages differ.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "hamburg-loki-schmidt-garden",
    slug: "give-a-hamburg-afternoon-to-a-garden-path",
    title: "Give a Hamburg afternoon to a garden path",
    field: "restore",
    country: "Germany",
    countrySlug: "germany",
    regionSlug: "hamburg",
    place: "Hamburg, Loki-Schmidt-Garten",
    summary:
      "At the university's outdoor botanical garden in Klein Flottbek, follow a path without turning every plant into a task. Let one small part of the garden be enough.",
    kernel:
      "Pick up the garden layout at the entrance and choose a short loop that suits the weather and your energy. Walk until a planting, pond edge or change of shade gives you a reason to stop. Read one label if you are curious, then look at the plant itself before continuing. You do not need to collect every geographical section or identify every species. A second look at the same place on the way back can be more rewarding than rushing to another corner. Leave time to sit where seating is available, keeping paths and planted areas clear.",
    rootedness:
      "Loki-Schmidt-Garten is the University of Hamburg's outdoor botanical garden, close to Klein Flottbek station. Its living collections combine scientific organisation with a public landscape that can be visited without an admission charge. The city distinguishes this outdoor site from the tropical glasshouses at Dammtor, which are currently closed for major renovation. Choosing the correct location matters. The experience here is a seasonal walk through living collections, not a promise of warm indoor greenery in every month.",
    shift:
      "A botanical collection can be somewhere to spend unmeasured time, not only somewhere to acquire plant names.",
    humanReturn:
      "You leave with a quieter interval in the city and perhaps one plant, texture or seasonal change you will recognise again elsewhere.",
    responsibility:
      "The garden opens from 09:00, with closing times that shorten to 16:00 in November and December. Last entry is thirty minutes before closing. It closes on 24 and 31 December and during dangerous wind or icy conditions. Check notices before travelling. Do not pick plants, enter beds or feed wildlife. Dogs are not admitted apart from the stated guide-dog exception. Ask the garden about assistance-animal or mobility requirements rather than assuming every path has the same surface.",
    evidence:
      "The garden association publishes current access and closure information, while Hamburg City's park record corroborates the outdoor garden and free entry. EA has not visited or checked present planting and path conditions.",
    duration:
      "Allow 60 to 90 minutes, shortening the route if weather or daylight requires",
    participation:
      "A free, self-directed outdoor garden visit at an unhurried pace",
    access:
      "Use the Ohnhorststraße entrance opposite Klein Flottbek S-Bahn station. This guide is not for the closed Dammtor tropical glasshouses. No EA wellness treatment or guided programme is implied.",
    guideReview: review(
      "public_observation",
      [
        [
          "Loki-Schmidt-Garten: visitor information",
          "https://www.bghamburg.de/der-garten/besucherinformationen",
          "Primary seasonal hours, weather closures and correct entrance.",
        ],
        [
          "Hamburg City: Loki-Schmidt-Garten",
          "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/loki-schmidt-garten-238236",
          "Municipal context for the university's outdoor botanical garden.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "lisbon-torel-garden-pause",
    slug: "let-lisbon-continue-below-a-torel-bench",
    title: "Let Lisbon continue below a Torel bench",
    field: "restore",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    place: "Lisbon, Jardim do Torel",
    summary:
      "Above Avenida da Liberdade, a garden gives you a place to stop looking for the next thing. Sit, find the shape of the valley and let the city carry on below.",
    kernel:
      "Reach Jardim do Torel with enough time left in the opening day to stay rather than simply check the view. Find an available bench or permitted sitting place and trace the lower streets between the roofs. Notice how the opposite hillside changes your understanding of the climb you have just made. Put the map away for a few minutes. If you are travelling with someone, let the conversation wander rather than choosing the next attraction immediately. This is an ordinary public garden, so the best visit may be a modest pause shared with local users, not a private panorama.",
    rootedness:
      "The garden occupies part of a former estate and became municipal space in the twentieth century. Lisbon's tourism authority describes its outlook towards Avenida da Liberdade and São Roque hill. The surrounding houses and the drop towards the avenue make the city's topography unusually easy to read. Its value does not depend on calling it undiscovered. People already use it, and a visitor's role is to fit into that shared space rather than claim a secret viewpoint for a photograph.",
    shift:
      "A viewpoint becomes a place to spend part of a day, not just a place from which to take something away.",
    humanReturn:
      "A simple pause can make Lisbon's steep streets feel connected and give a busy itinerary a more humane rhythm.",
    responsibility:
      "Expect uphill approaches and changes of level. Check an appropriate route if steps or gradients are difficult, and do not rely on the Lavra funicular without confirming current service separately. The city's indexed listing gives daily opening from 08:00 to 20:00, but posted notices take precedence. This guide does not promise a summer pool, event, café service or an empty bench. Keep noise low, take litter away and leave paths clear. Avoid pointing cameras at people resting nearby.",
    evidence:
      "Lisbon City's indexed garden record and Visit Lisboa's current viewpoint page establish the public place and outlook. Direct automated access to the municipal page was restricted. EA has not visited or verified current on-site notices.",
    duration: "Allow 30 to 60 minutes in the garden, plus the uphill approach",
    participation: "A free independent pause in a shared public garden",
    access:
      "Use the public Jardim do Torel entrance around Rua Júlio de Andrade, not a neighbouring hotel's private grounds. Confirm gates and your walking route. No EA reservation or private access.",
    guideReview: review(
      "public_observation",
      [
        [
          "Lisbon City: Jardim do Torel",
          "https://www.lisboa.pt/pontos-de-interesse/detalhe/jardim-do-torel",
          "Official indexed municipal record. Direct automated request was restricted.",
        ],
        [
          "Visit Lisboa: Miradouro do Torel",
          "https://www.visitlisboa.com/en/places/miradouro-do-torel",
          "Official destination record for the public garden and its outlook.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "helsinki-winter-garden-pause",
    slug: "spend-a-helsinki-hour-under-glass-and-leaves",
    title: "Spend a Helsinki hour under glass and leaves",
    field: "restore",
    country: "Finland",
    countrySlug: "finland",
    regionSlug: "helsinki",
    place: "Helsinki, Winter Garden",
    summary:
      "At the free city Winter Garden, pass from cactus shapes to broad leaves and a place to sit. A small greenhouse can change the scale of a northern city day.",
    kernel:
      "Enter without a checklist and let the three rooms set the pace. In the cactus room, look at the different ways a plant can hold its shape. Move into the palm room and notice how leaves overlap above you. If a seat is free in the western wing, stay long enough for the visit to feel like time spent somewhere rather than a circuit completed. Read a label when it interests you, but do not make botanical expertise the price of enjoying the space. Bring a small snack only if you intend to use the areas where eating is permitted and can leave them clean.",
    rootedness:
      "Helsinki's municipal Winter Garden has admitted the public free of charge since 1893. Its collection includes plants familiar from Finnish homes as well as larger specimens that need the height and protection of a glasshouse. That connection with domestic plant growing gives the visit an everyday character. This is a city garden, not a spa or a private conservatory experience. Seasonal displays change, and the outdoor rose garden has a different calendar from the building.",
    shift:
      "An indoor garden becomes a public room where looking slowly is enough, without buying a treatment or a table.",
    humanReturn:
      "You gain a low-pressure pause that can work in a city visit without needing specialist equipment, a group or an expensive booking.",
    responsibility:
      "Current hours are 10:00 to 16:00 on open days, with Fridays closed. Christmas Eve and Christmas Day are also closed. In winter use the Hammarskjöldintie entrance because the rose garden closes after October. Strollers are not allowed inside and have outdoor storage arrangements. Do not touch plants, some of which can irritate or be poisonous. Personal photographs without a tripod are permitted, while organised shoots require advance agreement. There is no café. Check the official accessibility record for your needs.",
    evidence:
      "Helsinki City's current garden page describes the rooms, free entry and visitor rules. Its linked service record provides location and accessibility information. EA has not visited or checked current flowering conditions.",
    duration:
      "Allow 45 to 60 minutes, with no need to stay for a fixed session",
    participation:
      "A free self-directed visit to a shared municipal glasshouse",
    access:
      "Enter the Winter Garden at Hammarskjöldintie 1 A during published hours. A separately arranged guided visit is optional and not included here. No EA wellness benefit or booking is promised.",
    guideReview: review(
      "public_observation",
      [
        [
          "City of Helsinki: the Winter Garden",
          "https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/parks/the-winter-garden",
          "Primary current hours, rooms, stroller restrictions and photography conditions.",
        ],
        [
          "Helsinki Winter Garden: accessibility record",
          "https://tpr.hel.fi/kapaesteettomyys/app/en/summary/tpr:2780/",
          "Location-specific city accessibility record linked by the Winter Garden's official page.",
        ],
      ],
      "2026-12-26",
    ),
  },
  {
    id: "barcelona-liceu-opera-evening",
    slug: "join-barcelonas-opera-audience-at-the-liceu",
    title: "Join Barcelona's opera audience at the Liceu",
    field: "gather",
    country: "Spain",
    countrySlug: "spain",
    regionSlug: "barcelona",
    place: "Barcelona, Gran Teatre del Liceu",
    summary:
      "Choose a real performance, read a little of the story and take your seat. The Liceu is most interesting when the building becomes a room full of people listening.",
    kernel:
      "Begin with a production that interests you, not simply the cheapest available date in an unfamiliar calendar. Read the synopsis, check the running time and choose a seat whose view matches what you expect. Arrive early enough to find your place without rushing. During the performance, alternate between the singers, the orchestra and the stage picture instead of trying to read every word while watching everything at once. Surtitles can help, but understanding the entire libretto is not a test you must pass. At the interval, notice how the room changes from concentrated listening to ordinary conversation.",
    rootedness:
      "The Gran Teatre del Liceu is a working opera house on La Rambla, with a public programme rather than only a historic interior to tour. The 2026/27 season includes established repertoire and other productions with different lengths and demands. Its accessibility programme provides surtitles and selected additional support. An opera evening is distinct from a daytime building visit, a concert without staging or an age-restricted special event. Choosing deliberately matters more than claiming to have attended any performance in a famous room.",
    shift:
      "A landmark becomes a shared period of attention, made by performers and the people who have come to listen.",
    humanReturn:
      "You can enter an unfamiliar art form with practical preparation rather than pretending expertise or treating the evening as a status purchase.",
    responsibility:
      "Check language, surtitles, running time, seat visibility and access before paying. The theatre currently notes problems with some individual subtitle screens and provides an enlarged overhead display. Do not assume every seat has a working screen or full stage view. Some dates have age restrictions, including the under-35 La bohème performance on 3 January. Choose an unrestricted public date if that does not apply to you. Confirm arrival and late-entry rules. Keep phones silent and follow the theatre's photography instructions.",
    evidence:
      "The Liceu's season, production and accessibility pages establish the public programme and practical boundaries. EA has not attended, assessed a production or checked individual seats.",
    duration:
      "Reserve an evening. Running time and intervals depend on the chosen production",
    participation:
      "A ticketed audience member at a scheduled opera, not a backstage or building tour",
    access:
      "Choose a public opera date through the Liceu's official season calendar and inspect the seat plan. Pay the theatre's authorised ticket channel directly. No EA booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "Gran Teatre del Liceu: new season",
          "https://liceubarcelona.cat/en/newseason",
          "Primary current programme. Select an actual production and date.",
        ],
        [
          "Liceu: La bohème",
          "https://www.liceubarcelona.cat/en/boheme",
          "Example scheduled production and age-restricted special date, not a promise of availability.",
        ],
        [
          "Liceu: accessibility and surtitles",
          "https://www.liceubarcelona.cat/es/liceu-apropa/accesibilidad",
          "Current subtitle-screen limitations and access arrangements.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "lyon-guignol-puppet-audience",
    slug: "hear-lyon-answer-back-to-guignol",
    title: "Hear Lyon answer back to Guignol",
    field: "gather",
    country: "France",
    countrySlug: "france",
    regionSlug: "lyon",
    place: "Lyon, La Maison de Guignol",
    summary:
      "Choose a daytime puppet performance in Vieux Lyon and listen to the exchange between stage and audience. Guignol is a speaking character, not just a souvenir face.",
    kernel:
      "Select a Guignol show whose age recommendation suits your group and read its short description before booking. Once seated, watch how the puppets move and how their voices establish a character before you know much of the plot. Listen for the points where the audience responds. Join in when the performance invites it, rather than treating participation as a requirement to shout throughout. If your French is limited, expect to miss dialogue and jokes. You can still notice timing, gesture and the audience's reactions, but this is not a wordless show designed to remove the language barrier.",
    rootedness:
      "Guignol belongs to Lyon's puppet-theatre tradition, and La Maison de Guignol presents changing programmes in the old city. The venue also stages evening café-theatre, which is a different programme and should not be confused with its family puppet performances. The live 2026/27 calendar gives the clearest route into the current offering, from autumn stories to winter and spring productions. The experience is a contemporary theatre visit, not a claim that every script reproduces an unchanged historical performance.",
    shift:
      "A familiar figure in a shop window becomes a voice with timing, a story and an audience willing to answer.",
    humanReturn:
      "You encounter a local form through a real performance and gain a small reason to pay attention to how humour and storytelling work in another language.",
    responsibility:
      "Do not assume every puppet show is suitable for toddlers. Read the age recommendation and duration for the chosen production. The two rooms have different access: Salle Guignol admits wheelchair users, while Salle Gnafron is not wheelchair accessible. Notify the box office when booking if assistance is needed. Performances are in French unless the specific listing states otherwise. Arrive before the start and follow photography rules. The current calendar, not an old promotional page, determines the show and room.",
    evidence:
      "The venue's live official booking calendar lists the 2026/27 performances and room-specific access. Its main site supplies the theatre context. EA has not attended or assessed a particular show.",
    duration:
      "Use the running time on the selected performance. Allow additional time to arrive and be seated",
    participation:
      "A ticketed audience member at a daytime Guignol puppet show",
    access:
      "Book a Guignol listing at La Maison de Guignol, 2 montée du Gourguillon, Place de la Trinité. Check the room and age guidance, not just the venue name. No EA ticketing or partnership.",
    guideReview: review(
      "public_programme",
      [
        [
          "La Maison de Guignol: official live programme",
          "https://lamaisondeguignol.mapado.com/",
          "Primary dated 2026/27 shows and separate access conditions for the two rooms.",
        ],
        [
          "La Maison de Guignol: theatre",
          "https://www.lamaisondeguignol.fr/",
          "Venue context and contact information. The live calendar takes precedence for programme details.",
        ],
      ],
      "2026-11-26",
    ),
  },
  {
    id: "cape-town-kirstenbosch-sunset-concert",
    slug: "share-a-concert-lawn-beneath-table-mountain",
    title: "Share a concert lawn beneath Table Mountain",
    field: "gather",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    place: "Cape Town, Kirstenbosch",
    summary:
      "Choose a scheduled Summer Sunset Concert at Kirstenbosch and bring a picnic blanket. The garden becomes a listening space, with the mountain remaining part of the evening.",
    kernel:
      "Pick an artist or programme you want to hear and book that concert, rather than arriving with an ordinary garden ticket and expecting admission. Pack a manageable picnic and arrive in time to find a permitted spot without taking more lawn than you need. Once the music starts, let the live sound be the reason you are there. There is room to notice the mountain and the changing light without spending the entire set filming them. Keep a clear route around your blanket and consider the people behind you before standing or raising a phone. Plan the journey home before the last song.",
    rootedness:
      "Kirstenbosch National Botanical Garden hosts a recurring summer concert series on its lawns. SANBI's current programme announces the 2026/27 season from 22 November 2026 to 28 March 2027, with different artists and start times across selected dates. The concert is a distinct public event, not the garden's guided walk or general admission experience. Its local significance comes from people returning to share music in a familiar landscape, rather than from a promise of one musical style or a perfectly clear evening.",
    shift:
      "A botanical garden becomes somewhere to listen together, not just somewhere to identify plants or take a scenic walk.",
    humanReturn:
      "The visit connects a recognisable Cape Town setting with a real cultural programme and an evening you have chosen for its music.",
    responsibility:
      "This is an upcoming summer season, not a daily or currently running concert. Check the exact date, authorised ticket route, age conditions and start time with SANBI. Do not substitute ordinary garden admission for an event ticket. Published listings note that no alcohol is sold on site and the venue is non-smoking. Confirm picnic, chair, weather and cancellation rules for your chosen concert. Ask about accessible viewing and paths before booking. Take all litter away and arrange a safe return journey independently.",
    evidence:
      "SANBI publishes the dated season and concert descriptions. Its wider event calendar distinguishes the Sunday series from separately promoted shows. EA has not attended or confirmed ticket stock, weather or any artist's future appearance.",
    duration:
      "Allow a late afternoon and early evening. The listed music generally ends around 19:00, with start time dependent on the concert",
    participation:
      "A ticketed audience member at a selected outdoor summer concert",
    access:
      "Start from SANBI's current Summer Sunset Concerts listing and follow the official instructions for the selected date. Confirm ticket availability before making travel plans. No EA booking, picnic service or transport is included.",
    guideReview: review(
      "public_programme",
      [
        [
          "SANBI: Kirstenbosch Summer Sunset Concerts 2026/27",
          "https://www.sanbi.org/event/kirstenbosch-summer-sunset-concerts-2026/",
          "Primary upcoming season dates and concert-specific conditions.",
        ],
        [
          "SANBI: current event calendar",
          "https://www.sanbi.org/events/all-events/",
          "Distinguishes the summer series from other separately promoted concerts. Confirm the chosen event's ticket route.",
        ],
      ],
      "2026-11-26",
    ),
  },
];
export const guideBatch59: readonly PublicExperience[] = drafts.map(
  (draft) => ({
    ...draft,
    status: "public_guide",
    demo: false,
    ...guideImage(draft.id),
  }),
);
