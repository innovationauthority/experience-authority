import type { DiscoveryProfile } from "./discovery-profiles";
export const edition69 = {
  "eat-drink": [
    "broc-maison-cailler-chocolate-tasting",
    "santos-coffee-exchange-cup",
    "dublin-guinness-storehouse-grain-to-glass",
  ],
  "art-culture": [
    "montreal-aura-notre-dame-light-and-organ",
    "singapore-artscience-future-world-drawing",
    "bilbao-guggenheim-matter-of-time",
  ],
  "design-innovation": [
    "singapore-red-dot-compare-design-objects",
    "goyang-motorstudio-car-safety-design",
    "wolfsburg-autostadt-car-tower",
  ],
  "make-learn": [
    "basel-paper-mill-pull-a-sheet",
    "amsterdam-rijksmuseum-weekend-drawing-lab",
    "mainz-gutenberg-druckladen-type-and-ink",
  ],
  "move-water": [
    "london-lee-valley-track-cycling-taster",
    "las-vegas-pinball-hall-machines",
    "portland-oaks-park-public-roller-skate",
  ],
  "nature-outdoors": [
    "seoul-magok-botanic-park-glasshouse",
    "vancouver-pacific-spirit-forest-trails",
    "bundeena-jibbon-headland-boardwalk",
  ],
  "swim-reset": [
    "locarno-lido-lake-thermal-pool",
    "helsinki-allas-harbour-pool",
    "uster-greifensee-barrel-sauna",
  ],
  "shared-rituals": [
    "cape-town-gold-djembe-before-dinner",
    "seattle-kexp-live-studio-viewing",
    "glasgow-oran-mor-lunchtime-play",
  ],
} as const;
export const discoveryBatch69: Record<string, DiscoveryProfile> = {
  "broc-maison-cailler-chocolate-tasting": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Maison Cailler", "Broc, La Gruyère", "Switzerland"],
  },
  "santos-coffee-exchange-cup": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Museu do Café", "Santos, Historic Centre", "Brazil"],
  },
  "dublin-guinness-storehouse-grain-to-glass": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Guinness Storehouse", "Dublin, St James’s Gate", "Ireland"],
  },
  "montreal-aura-notre-dame-light-and-organ": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["AURA", "Montréal, Old Montréal", "Canada"],
  },
  "singapore-artscience-future-world-drawing": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["ArtScience Museum", "Singapore, Marina Bay", "Singapore"],
  },
  "bilbao-guggenheim-matter-of-time": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Guggenheim Bilbao", "Bilbao, Abandoibarra", "Spain"],
  },
  "singapore-red-dot-compare-design-objects": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Red Dot Design Museum", "Singapore, Marina Bay", "Singapore"],
  },
  "goyang-motorstudio-car-safety-design": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Hyundai Motorstudio Goyang", "Goyang, KINTEX", "South Korea"],
  },
  "wolfsburg-autostadt-car-tower": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Autostadt Tour and Tower", "Wolfsburg, Autostadt", "Germany"],
  },
  "basel-paper-mill-pull-a-sheet": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Basler Papiermühle", "Basel, St Alban-Tal", "Switzerland"],
  },
  "amsterdam-rijksmuseum-weekend-drawing-lab": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Rijksmuseum Drawing Lab",
      "Amsterdam, Museumplein",
      "Netherlands",
    ],
  },
  "mainz-gutenberg-druckladen-type-and-ink": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: [
      "Gutenberg Museum printing shop",
      "Mainz, Gutenberg-Museum Druckladen",
      "Germany",
    ],
  },
  "london-lee-valley-track-cycling-taster": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: ["Lee Valley VeloPark", "London, Stratford", "United Kingdom"],
  },
  "las-vegas-pinball-hall-machines": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Pinball Hall of Fame",
      "Las Vegas, South Las Vegas Boulevard",
      "United States",
    ],
  },
  "portland-oaks-park-public-roller-skate": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Oaks Park Roller Rink", "Portland, Sellwood", "United States"],
  },
  "seoul-magok-botanic-park-glasshouse": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Seoul Botanic Park", "Seoul, Magok", "South Korea"],
  },
  "vancouver-pacific-spirit-forest-trails": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Pacific Spirit Regional Park",
      "Vancouver, Point Grey",
      "Canada",
    ],
  },
  "bundeena-jibbon-headland-boardwalk": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Jibbon Headland", "Bundeena, Royal National Park", "Australia"],
  },
  "locarno-lido-lake-thermal-pool": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Lido Locarno", "Locarno, Lake Maggiore", "Switzerland"],
  },
  "helsinki-allas-harbour-pool": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Allas Pool", "Helsinki, South Harbour", "Finland"],
  },
  "cape-town-gold-djembe-before-dinner": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["GOLD Restaurant", "Cape Town, Green Point", "South Africa"],
  },
  "seattle-kexp-live-studio-viewing": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["KEXP", "Seattle, Seattle Center", "United States"],
  },
  "glasgow-oran-mor-lunchtime-play": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: [
      "A Play, A Pie and A Pint",
      "Glasgow, West End",
      "United Kingdom",
    ],
  },
  "uster-greifensee-barrel-sauna": {
    modes: ["slow-down"],
    time: "calendar",
    keywords: ["Sauna am See Uster", "Uster, Greifensee", "Switzerland"],
  },
};
