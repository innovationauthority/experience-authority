import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

type CityGuide = Omit<
  PublicExperience,
  | "id"
  | "country"
  | "countrySlug"
  | "regionSlug"
  | "status"
  | "demo"
  | "image"
  | "imageAlt"
  | "guideReview"
> & {
  guideReview: Pick<GuideReview, "scope" | "accessUrl" | "sources">;
};

const cities = {
  antwerp: { country: "Belgium", countrySlug: "belgium" },
  matsuyama: { country: "Japan", countrySlug: "japan" },
};

function cityGuide(
  regionSlug: keyof typeof cities,
  { guideReview, ...guide }: CityGuide,
): PublicExperience {
  return {
    ...guide,
    id: guide.slug,
    ...cities[regionSlug],
    regionSlug,
    status: "public_guide",
    demo: false,
    ...guideImage(guide.slug),
    guideReview: {
      ...guideReview,
      basis: "public_sources",
      requiresSpecialPermission: false,
      checkedOn: "2026-11-04",
      reviewBy: "2026-12-23",
    },
  };
}

const redStarVisit = "https://redstarline.be/en/plan-your-visit";
const breweryTour = "https://www.dekoninck.be/en/interactive-tour";
const castleVisit = "https://www.matsuyamajo.jp/en/guide.html";
const botchanTimetable = "https://www.iyotetsu.co.jp/botchan/";

export const antwerpMatsuyamaGuides = [
  cityGuide("antwerp", {
    slug: "antwerp-red-star-line-follow-a-passenger",
    title: "Follow one passenger through Antwerp’s Red Star Line Museum",
    summary:
      "Start with one person’s account of leaving Europe. At the old departure buildings, follow what that traveller had to do before getting anywhere near the ship.",
    field: "learn",
    place: "Antwerp, Eilandje",
    kernel:
      "Pick one passenger’s story and keep it in mind as the exhibition moves from decisions made at home to the checks in Antwerp. Look for where luggage and people took different routes through the buildings. When you leave, take a moment at the quayside to put the rooms you have just seen back beside the Scheldt.",
    rootedness:
      "Antwerp was a point of departure for people crossing the Atlantic on the Red Star Line. The museum occupies the company’s former buildings on the waterfront, where passengers and luggage went through checks and preparation before departure. The personal accounts put those procedures in the context of individual journeys.",
    shift:
      "Read the port from the point of view of someone trying to leave it.",
    humanReturn:
      "One person’s route through a building makes the scale of transatlantic migration easier to grasp.",
    responsibility:
      "Allow room at the listening and reading points. Use the museum’s accessibility information for step-free routes and confirm any specific requirements. The accounts include difficult experiences of migration and screening.",
    evidence:
      "The municipal museum documents the former departure buildings, its passenger stories and timed tickets. EA has not visited the installation or checked the day’s crowding.",
    duration: "Allow 90 minutes, with extra time for the quay.",
    participation:
      "Timed museum admission with a self-guided exhibition visit.",
    access:
      "Enter at Montevideostraat 3. Regular hours are Tuesday to Sunday, 10:00 to 17:00, with holiday exceptions. Reserve an entry block online or ask about same-day tickets at the counter. Ask at reception for English, French or German exhibition texts if needed.",
    guideReview: {
      scope: "public_admission",
      accessUrl: redStarVisit,
      sources: [
        {
          title: "Red Star Line Museum: plan your visit",
          url: redStarVisit,
          note: "Visitor access and accessibility information.",
        },
        {
          title: "Red Star Line Museum: opening and directions",
          url: "https://redstarline.be/en/page/how-and-when-get-here",
          note: "Weekly opening, holiday exceptions and access to the Eilandje waterfront.",
        },
        {
          title: "Red Star Line Museum: timed tickets",
          url: "https://redstarline.be/en/page/buying-online-tickets-time-blocks-faq",
          note: "Timed entry, online and counter purchases.",
        },
        {
          title: "Red Star Line Museum: the historic buildings",
          url: "https://redstarline.be/en/page/historical-and-contemporary",
          note: "What happened in the buildings and how they were adapted for the museum.",
        },
        {
          title: "Red Star Line Museum: visiting the exhibition",
          url: "https://redstarline.be/en/page/museum",
          note: "Exhibition texts and visitor formats.",
        },
      ],
    },
  }),
  cityGuide("antwerp", {
    slug: "antwerp-de-koninck-bolleke-brewery",
    title: "Find out why Antwerp orders a Bolleke",
    summary:
      "At De Koninck’s city brewery, follow the brewing stages and find out how the round glass lent its name to the amber beer people order around Antwerp.",
    field: "taste",
    place: "Antwerp, De Koninck city brewery",
    kernel:
      "Give the brewing hall a few minutes on the self-guided route. Pick one stage you can match to the equipment and follow it through the display. Then look at the shape of a Bolleke glass. If the beer is in the day’s tasting, try it in a small pour. Otherwise ask which of the samples you were served and how it differs from Bolleke.",
    rootedness:
      "Bolleke is the Antwerp name used for De Koninck’s amber beer and the rounded glass it is served in. The city brewery makes that connection visible through its visitor route, while the same order can be heard in cafés around town.",
    shift:
      "Connect a word heard at a café counter with a glass shape and a beer brewed in the city.",
    humanReturn:
      "A local order you can recognise when you see the glass again.",
    responsibility:
      "Sampling is optional. Ask about a non-alcoholic option, allergens and age rules before booking if they matter to your visit. Follow the signed visitor route and keep to the public side of the brewing hall.",
    evidence:
      "The brewery publishes a self-guided route, two tasters and current admission. Visit Antwerp confirms the format and its local context. EA has not tasted the samples or checked whether a particular batch is being brewed during visitor hours.",
    duration: "About one hour on the visitor route.",
    participation:
      "Self-guided brewery visit, with optional tastings included in admission.",
    access:
      "Go to Mechelsesteenweg 291. The brewery lists Tuesday to Sunday, 11:00 to 17:30. Use the ticket calendar to confirm an entry time and leave a full hour before closing. Ticket payments are by card. Confirm current tasting and access options with the operator.",
    guideReview: {
      scope: "public_admission",
      accessUrl: breweryTour,
      sources: [
        {
          title: "De Koninck: interactive brewery tour",
          url: breweryTour,
          note: "Ticket calendar, hours, wheelchair access and tasting format.",
        },
        {
          title: "De Koninck: Bolleke",
          url: "https://www.dekoninck.be/en/beers/bolleke",
          note: "The Antwerp amber beer and its namesake rounded glass.",
        },
        {
          title: "Visit Antwerp: city brewery",
          url: "https://visit.antwerpen.be/info/stadsbrouwerij-de-koninck",
          note: "Municipal visitor information in Dutch, including local context, visit duration and location.",
        },
      ],
    },
  }),
  cityGuide("matsuyama", {
    slug: "matsuyama-castle-follow-the-gates",
    title: "Read Matsuyama Castle through its gates",
    summary:
      "Rise from the city to Katsuyama and follow the approach to the keep. Each turn changes what you can see and who can see you.",
    field: "witness",
    place: "Matsuyama, Katsuyama",
    kernel:
      "Take the ropeway or, if the weather and boarding suit you, the open chairlift. From the upper station, follow the public route towards Honmaru. At each gate, look for the wall or corner that hides the next part of the approach. Compare that short line of sight with the view over the city once you reach the upper grounds.",
    rootedness:
      "The castle stands on Katsuyama above central Matsuyama. Its hilltop keep and series of walls and gates tell different parts of the same story. Looking at the approach makes it easier to see how terrain was part of the fortification.",
    shift:
      "Notice what the path keeps out of sight before you look out over the whole city.",
    humanReturn:
      "A way to read the hill as part of the castle, starting before you reach the tower.",
    responsibility:
      "The upper route has gradients and uneven paving. The keep has steep stairs. Ask the operator about access from the ropeway if mobility is a concern. Chairlift riders must be elementary-school age or older, and the chairlift stops in rain.",
    evidence:
      "The castle operator publishes the visitor route, separate tower and lift admission, and seasonal hours. EA has not checked the stairs, visibility or live lift operation on site.",
    duration: "Allow about two hours including the ascent and descent.",
    participation:
      "Independent visit to the upper grounds, with optional tower admission.",
    access:
      "From the Ōkaidō tram stop, use the Shinonome-guchi ropeway station. The ropeway usually starts at 08:30 and the keep at 09:00. The upper square is free. The ropeway or chairlift and the keep are separately ticketed. Check seasonal closing times and maintenance notices before setting out.",
    guideReview: {
      scope: "public_admission",
      accessUrl: castleVisit,
      sources: [
        {
          title: "Matsuyama Castle: opening and fees",
          url: castleVisit,
          note: "Separate admissions, seasonal last entry, chairlift restrictions and operating hours.",
        },
        {
          title: "Matsuyama Castle: visitor map and brochure",
          url: "https://www.matsuyamajo.jp/assets/files/pamphlet-en.pdf",
          note: "Approach from the ropeway and the gates around the keep.",
        },
        {
          title: "Matsuyama Castle: current notices",
          url: "https://www.matsuyamajo.jp/info/post-58.html",
          note: "The operator’s ropeway and chairlift status in Japanese.",
        },
      ],
    },
  }),
  cityGuide("matsuyama", {
    slug: "matsuyama-botchan-train-to-dogo",
    title: "Ride the little Botchan train to Dōgo",
    summary:
      "Take the Botchan from Ōkaidō to Dōgo Onsen on a day it runs. The small carriages and wooden seats turn a short hop through the city into a look at how Matsuyama remembers its first railway.",
    field: "move",
    place: "Matsuyama, Ōkaidō to Dōgo",
    kernel:
      "Find the Dōgo-bound platform at Ōkaidō and check for the Botchan service. On board, notice how low the carriage and windows feel among ordinary city traffic. At Dōgo, step away from the platform and compare the short train with the regular trams. Continue on foot towards the bathhouse.",
    rootedness:
      "Iyotetsu’s diesel-powered replica recalls an early steam railway that served Matsuyama. The train takes its name from Natsume Sōseki’s novel Botchan, set in the city. It still makes sense as a short journey between two neighbourhoods on the present-day tram network.",
    shift: "Spend a few stops at the scale of Matsuyama’s early railway.",
    humanReturn:
      "An arrival in Dōgo with a tangible link to the city’s railway and literature.",
    responsibility:
      "The replica has limited capacity and a small carriage. Ask Iyotetsu about boarding with luggage, wheelchairs or strollers. Wait clear of the tracks and switch to a regular Dōgo-bound tram if the train is full or cancelled.",
    evidence:
      "Iyotetsu publishes the current route, timetable and boarding arrangements. Matsuyama’s tourism office describes the replica and the city railway it recalls. Use the operator for current service. EA has not ridden it or checked boarding on site.",
    duration: "About 12 minutes from Ōkaidō to Dōgo, plus time to wait.",
    participation:
      "Ride a limited-capacity heritage service on the city tram network.",
    access:
      "Check Iyotetsu’s timetable for Saturday, Sunday and Japanese public holiday service, with year-end exclusions and possible cancellations. The checked Ōkaidō departures towards Dōgo include 14:12 and 15:52. Tickets can be bought from the crew when boarding at Ōkaidō. Reservations are unavailable and advance purchase does not hold a place.",
    guideReview: {
      scope: "public_admission",
      accessUrl: botchanTimetable,
      sources: [
        {
          title: "Iyotetsu: Botchan service and boarding",
          url: botchanTimetable,
          note: "Current Japanese-language timetable, direction, capacity and ticket rules.",
        },
        {
          title: "Iyotetsu: English passenger information",
          url: "https://www.iyotetsu.co.jp/global/en/",
          note: "English information on the heritage train and regular city tram services.",
        },
        {
          title: "Matsuyama tourism office: Botchan train",
          url: "https://matsuyama-sightseeing.com/spot/17-2/",
          note: "The city’s account of the replica and the original railway.",
        },
        {
          title: "Matsuyama tourism office: local lunch dishes",
          url: "https://matsuyama-sightseeing.com/topics/adult_trip/",
          note: "The city’s description of Matsuyama-style nabeyaki udon in the central shopping district.",
        },
      ],
    },
  }),
];
