import type { DiscoveryProfile } from "./discovery-profiles";
export const edition20261021FourthPass = {
  "eat-drink": [
    "find-portos-smaller-sandwich-at-the-counter",
    "dip-a-farton-into-alborayas-horchata",
    "build-an-osaka-lunch-one-kuromon-counter-at-a-time",
  ],
  "make-learn": [
    "paint-a-small-marzipan-character-in-tallinn",
    "keep-sevilles-tile-colours-apart-by-hand",
    "braid-a-small-kyoto-cord-one-crossing-at-a-time",
  ],
  "move-water": [
    "watch-bilbao-change-shape-on-the-artxanda-climb",
    "cross-hamburgs-working-harbour-on-ferry-62",
    "borrow-a-bicycle-for-seouls-river-level-view",
  ],
  "explore-reflect": [
    "find-a-solar-system-in-a-franeker-living-room",
    "read-a-london-house-without-speaking",
    "follow-a-material-through-mexicos-popular-arts",
  ],
  "swim-reset": [
    "borrow-an-hour-not-a-book-in-oslo",
    "read-a-tree-label-in-istanbuls-living-collection",
    "give-melbournes-city-baths-a-few-unhurried-lengths",
  ],
  "shared-rituals": [
    "let-a-live-show-fill-wiltons-music-hall",
    "hear-hamburg-from-a-seat-in-the-elbphilharmonie",
    "give-an-oslo-sunday-to-the-frank-znort-quartet",
  ],
} as const;
export const discoveryBatch52: Record<string, DiscoveryProfile> = {
  "find-portos-smaller-sandwich-at-the-counter": {
    modes: ["at-table"],
    time: "short",
    keywords: ["Porto", "Portugal", "porto", "gazela", "cachorrinho"],
  },
  "dip-a-farton-into-alborayas-horchata": {
    modes: ["at-table"],
    time: "short",
    keywords: [
      "Alboraya, near Valencia",
      "Spain",
      "alboraya",
      "daniel",
      "horchata",
      "Alboraia",
      "Valencia",
      "chufa",
      "farton",
    ],
  },
  "build-an-osaka-lunch-one-kuromon-counter-at-a-time": {
    modes: ["at-table"],
    time: "short",
    keywords: ["Osaka", "Japan", "osaka", "kuromon", "lunch"],
  },
  "paint-a-small-marzipan-character-in-tallinn": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Tallinn", "Estonia", "tallinn", "kalev", "marzipan"],
  },
  "keep-sevilles-tile-colours-apart-by-hand": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Seville", "Spain", "seville", "barroazul", "cuerda", "seca"],
  },
  "braid-a-small-kyoto-cord-one-crossing-at-a-time": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "Kyoto",
      "Japan",
      "kyoto",
      "adachi",
      "kumihimo",
      "marudai",
      "braiding",
      "組紐",
    ],
  },
  "watch-bilbao-change-shape-on-the-artxanda-climb": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Bilbao",
      "Spain",
      "bilbao",
      "artxanda",
      "funicular",
      "funicular",
      "Bilbao",
    ],
  },
  "cross-hamburgs-working-harbour-on-ferry-62": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Hamburg", "Germany", "hamburg", "hadag", "62"],
  },
  "borrow-a-bicycle-for-seouls-river-level-view": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Seoul", "South Korea", "seoul", "yeouinaru", "cycling"],
  },
  "find-a-solar-system-in-a-franeker-living-room": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["Franeker", "Netherlands", "franeker", "eisinga", "planetarium"],
  },
  "read-a-london-house-without-speaking": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: [
      "London",
      "United Kingdom",
      "london",
      "dennis",
      "severs",
      "silent",
    ],
  },
  "follow-a-material-through-mexicos-popular-arts": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["Mexico City", "Mexico", "mexico", "city", "map", "materials"],
  },
  "borrow-an-hour-not-a-book-in-oslo": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "Oslo",
      "Norway",
      "oslo",
      "deichman",
      "reading",
      "Bjørvika",
      "Bjorvika",
      "library",
      "reading",
    ],
  },
  "read-a-tree-label-in-istanbuls-living-collection": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "Bahçeköy, Istanbul",
      "Türkiye",
      "istanbul",
      "ataturk",
      "arboretum",
    ],
  },
  "give-melbournes-city-baths-a-few-unhurried-lengths": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: ["Melbourne", "Australia", "melbourne", "city", "baths", "swim"],
  },
  "let-a-live-show-fill-wiltons-music-hall": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["London", "United Kingdom", "london", "wiltons", "performance"],
  },
  "hear-hamburg-from-a-seat-in-the-elbphilharmonie": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Hamburg", "Germany", "hamburg", "elbphilharmonie", "concert"],
  },
  "give-an-oslo-sunday-to-the-frank-znort-quartet": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Oslo", "Norway", "oslo", "frank", "znort", "sunday"],
  },
};
