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
  tallinn: { country: "Estonia", countrySlug: "estonia" },
  seattle: { country: "United States", countrySlug: "united-states" },
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
      reviewBy: "2027-01-20",
    },
  };
}

const seaplaneHours =
  "https://meremuuseum.ee/lennusadam/en/visitor-information/opening-times/";
const kalmaPublic = "https://www.kalmasaun.ee/eng-uldsaunad/";
const locksVisit =
  "https://www.nws.usace.army.mil/Missions/Civil-Works/Locks-and-Dams/Chittenden-Locks/Fish-Ladder/";
const locksOperations =
  "https://www.nws.usace.army.mil/Missions/Civil-Works/Locks-and-Dams/Chittenden-Locks/Operations/";
const terminalVisit = "https://www.portseattle.org/page/visit-terminal-0";
const chinooksCounter =
  "https://www.portseattle.org/organizations/little-chinooks";

export const tallinnSeattleGuides = [
  cityGuide("tallinn", {
    slug: "tallinn-lennusadam-lembit-submarine",
    title: "Read life aboard Lembit in Tallinn’s seaplane hangar",
    summary:
      "Start with the submarine’s long hull under the concrete domes at Lennusadam. Then look for the small amount of space the crew actually had to work and live in.",
    field: "learn",
    place: "Tallinn, Kalamaja",
    kernel:
      "Look at Lembit from the museum bridge before you go closer. Pick out the length of the hull and the position of the conning tower. If staff have the submarine open and the confined entry suits you, go inside and look for how passages, equipment and places to rest share the same space. From outside, use the displays and look back at how little of the hull would show above water.",
    rootedness:
      "Built in England for Estonia in 1937, Lembit is now held by the Estonian Maritime Museum inside Tallinn’s former seaplane hangar. The shell of the building gives you the scale of aircraft and vessels in one room. The submarine brings that scale down to the size of a passage a person could move through.",
    shift:
      "Compare the length of the hull with the space a person could use inside it.",
    humanReturn:
      "A clearer picture of why designing a vessel is also a way of deciding how people will live.",
    responsibility:
      "The submarine interior is confined and the museum says it is inaccessible to wheelchairs and prams. Ask staff about access on the day and use the main exhibition as an alternative. Follow signs around any restricted equipment.",
    evidence:
      "The museum identifies Lembit in the permanent collection, publishes admission and describes the accessible main route and restrictions around the submarine. EA has not checked boarding conditions or queues on site.",
    duration: "The museum recommends at least two hours for Seaplane Harbour.",
    participation:
      "Independent visit to a maritime collection, with optional entry into the submarine when open.",
    access:
      "Go to Lennusadam at Vesilennuki 6. The museum lists Tuesday to Sunday, 10:00 to 18:00 from October to April, and daily 10:00 to 19:00 from May to September, with holiday changes. Ticket sales end 30 minutes before close. The exhibition is in Estonian and English. Check current admission and interior access before visiting.",
    guideReview: {
      scope: "public_admission",
      accessUrl: seaplaneHours,
      sources: [
        {
          title: "Estonian Maritime Museum: opening hours",
          url: seaplaneHours,
          note: "Seasonal and holiday hours, languages and recommended visit length.",
        },
        {
          title: "Estonian Maritime Museum: introduction",
          url: "https://meremuuseum.ee/lennusadam/en/introduction-to-the-museum/",
          note: "Lembit’s origin and the collection in the seaplane hangar.",
        },
        {
          title: "Estonian Maritime Museum: accessibility",
          url: "https://meremuuseum.ee/lennusadam/en/visitor-information/accessibility/",
          note: "Visitor entrance, exhibition bridge, lifts and limits at the submarine.",
        },
      ],
    },
  }),
  cityGuide("tallinn", {
    slug: "tallinn-kalma-neighbourhood-sauna",
    title: "Take a neighbourhood sauna at Tallinn’s Kalma",
    summary:
      "End the day in a public bathhouse that has served Kalamaja since 1928. Leave time to cool down between short rounds of leil, the heat and steam of the sauna.",
    field: "restore",
    place: "Tallinn, Kalamaja",
    kernel:
      "Choose the public section that suits you and ask at the desk about the house routine. Bring a towel, shower and take a short first round. Leave when you want to cool down and give yourself a few minutes before deciding whether to go back in. A quiet visit lets you follow the ordinary rhythm of the bathhouse.",
    rootedness:
      "Kalma takes its name from Kalamaja. The bathhouse opened in 1928 and still serves the neighbourhood from Vana-Kalamaja street. It has separate public sections with different equipment. The men’s section advertises a wood-fired room, while the women’s section uses electric heaters.",
    shift: "Give the cooling interval the same attention as the heat.",
    humanReturn:
      "A way to end the day that leaves room to sit still for a while.",
    responsibility:
      "Check dress, towel and bathing rules at reception. Keep phones and cameras away in bathing and changing areas. Drink water and choose short rounds at your own comfort. Ask about any step-free or other access needs. The public rooms are separate. An hourly private room is a different option and requires its own booking.",
    evidence:
      "Kalma lists the current public sections, heaters, hours and admission. Visit Tallinn documents the bathhouse’s history and location. EA has not checked the live temperature, changing-room layouts or language support on site.",
    duration:
      "Allow about an hour to 90 minutes at your own pace. Check current admission conditions.",
    participation:
      "Use a public neighbourhood sauna and cool off between rounds.",
    access:
      "Enter at Vana-Kalamaja 9a. Kalma generally lists weekdays 11:00 to 22:00 and weekends 10:00 to 23:00, with last entry one hour before closing. Its women’s section opens at 15:00 on the last Friday of the month. Check the relevant section, price and holiday hours before setting off.",
    guideReview: {
      scope: "public_admission",
      accessUrl: kalmaPublic,
      sources: [
        {
          title: "Kalma Saun: public rooms",
          url: kalmaPublic,
          note: "Separate sections, equipment, opening, last entry and prices.",
        },
        {
          title: "Kalma Saun: hourly rooms",
          url: "https://www.kalmasaun.ee/tunnisaunad/",
          note: "Separately bookable hourly alternatives and contact.",
        },
        {
          title: "Visit Tallinn: Kalma sauna",
          url: "https://www.visittallinn.ee/eng/visitor/see-do/things-to-do/wellness/178885/2-kalma-sauna-in-tallinn",
          note: "History, location and public bathhouse context.",
        },
      ],
    },
  }),
  cityGuide("seattle", {
    slug: "seattle-ballard-locks-watch-a-lockage",
    title: "Watch a boat change levels at Seattle’s Ballard Locks",
    summary:
      "Stand by the working ship canal and follow one boat through the gates between Salmon Bay and the tidal waters of Puget Sound.",
    field: "witness",
    place: "Seattle, Ballard",
    kernel:
      "Choose a public viewing point where you can see a chamber wall and a gate. When a boat enters, note the height of its hull against the wall. Watch the waterline change after the gates close, then see which side opens. If traffic is quiet, compare the two chambers and use the site’s interpretation to work out where fresh and tidal water meet.",
    rootedness:
      "Seattle’s ship canal links the freshwater lakes and Salmon Bay with Puget Sound. The Ballard Locks, dedicated in 1917, still let workboats and recreational vessels pass between those different water levels. There is also a fish ladder beside the locks, so vessel passage is only part of what this site manages.",
    shift:
      "Use the hull as a marker for water you might otherwise miss moving.",
    humanReturn:
      "One clear mechanism that makes the shape of Seattle’s waterfront easier to understand.",
    responsibility:
      "Follow the posted pedestrian route and stay behind rails and away from operating equipment. Check access and closures before crossing the site. Allow for weather, wet surfaces and possible detours. Fish passage and vessel timing vary.",
    evidence:
      "The U.S. Army Corps of Engineers publishes grounds hours and projected chamber closures. As checked on 4 November, the large chamber was scheduled for maintenance from 2 to 20 November 2026 and the small chamber from 7 December 2026 to 18 January 2027. Check current notices. EA has not observed today’s traffic or path conditions.",
    duration:
      "Allow 45 to 75 minutes on shore. Vessel movement has no visitor timetable.",
    participation: "Watch an operating ship lock from the public grounds.",
    access:
      "Use the Ballard entrance at 3015 NW 54th Street. The grounds generally open 07:00 to 21:00. For the chamber in use and any pedestrian changes, check the Army Corps operations page before leaving.",
    guideReview: {
      scope: "public_observation",
      accessUrl: locksVisit,
      sources: [
        {
          title: "U.S. Army Corps of Engineers: visitor information",
          url: locksVisit,
          note: "Grounds hours, entrance, two lock chambers and fish passage.",
        },
        {
          title: "U.S. Army Corps of Engineers: lock operations",
          url: locksOperations,
          note: "Current and projected maintenance windows by chamber.",
        },
        {
          title: "HistoryLink: Lake Washington Ship Canal",
          url: "https://www.historylink.org/file/1444",
          note: "Washington history reference for the canal and the connection between the lakes and Puget Sound.",
        },
      ],
    },
  }),
  cityGuide("seattle", {
    slug: "seattle-fishermens-terminal-fish-counter",
    title: "Order fish beside Seattle’s working fishing fleet",
    summary:
      "Take a short look at the moored boats at Fishermen’s Terminal, then order from the fish counter where the city’s commercial waterfront is still in view.",
    field: "taste",
    place: "Seattle, Fishermen’s Terminal",
    kernel:
      "Start along the public shore and look for what the boats carry above deck. Then use the menu at Little Chinook’s to choose a fish rather than just a batter. Ask what species is being served that day and where it was caught. Eat at a permitted public spot or choose the neighbouring sit-down restaurant when the weather turns.",
    rootedness:
      "Fishermen’s Terminal opened in 1914 and still serves the North Pacific fleet. The Port of Seattle identifies Little Chinook’s among the businesses open to visitors. The two activities share the same shoreline. The boats you see are working vessels with their own schedules and supply chains.",
    shift:
      "Put a named fish on the menu beside a harbour that still supports a fishing fleet.",
    humanReturn:
      "A better question than what is fresh. Which fish is it, and where did it come from?",
    responsibility:
      "Stay in marked public areas and leave working access and loading paths clear. Ask about fish, shellfish and fryer cross-contact if you have allergies. Check menu and seating needs separately. Take your litter with you.",
    evidence:
      "The Port documents public access and the fleet’s role. The Port and Visit Seattle list the takeaway fish counter separately from the restaurant. EA has not verified the origin of a specific serving or eaten there. The fleet photograph was taken from the water.",
    duration:
      "Allow about an hour for the public waterfront and lunch, longer if there is a queue.",
    participation:
      "Buy lunch at a fish counter and look at the working harbour from public areas.",
    access:
      "Go to 1900 W Nickerson Street. Little Chinook’s is the takeaway counter beside Chinook’s at Salmon Bay. Check the counter’s current menu and hours separately from the sit-down restaurant. The latter is a separate option if you need indoor seating.",
    guideReview: {
      scope: "public_hospitality",
      accessUrl: chinooksCounter,
      sources: [
        {
          title: "Port of Seattle: Little Chinook’s",
          url: chinooksCounter,
          note: "The fish counter’s site listing and direct phone number.",
        },
        {
          title: "Visit Seattle: Chinook’s at Salmon Bay",
          url: "https://visitseattle.org/members/chinooks-at-salmon-bay/",
          note: "Local visitor information distinguishes the fish-and-chips counter from the neighbouring restaurant.",
        },
        {
          title: "Port of Seattle: visit Fishermen’s Terminal",
          url: terminalVisit,
          note: "Public access to the working waterfront and the listed food counter.",
        },
        {
          title: "Port of Seattle: home of the North Pacific fishing fleet",
          url: "https://www.portseattle.org/page/home-north-pacific-fishing-fleet",
          note: "The terminal’s 1914 opening and continuing commercial moorage.",
        },
      ],
    },
  }),
];
