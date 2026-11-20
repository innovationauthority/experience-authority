import type { DiscoveryProfile } from "./discovery-profiles";

export const edition76 = {
  "eat-drink": [
    "sainte-suzanne-follow-reunion-vanilla",
    "kotohira-knead-sanuki-udon",
  ],
  "art-culture": [
    "kanazawa-dt-suzuki-water-mirror",
    "oslo-emanuel-vigeland-dark-museum",
  ],
  "design-innovation": [
    "saint-nazaire-airbus-atlantic-fuselage",
    "muharraq-pearling-path-houses",
  ],
  "make-learn": [
    "echizen-lift-washi-papyrus-house",
    "corning-shape-glass-at-the-museum",
  ],
  "move-water": ["auckland-sail-ted-ashby", "lahti-ski-jump-simulator"],
  "nature-outdoors": [
    "tiritiri-matangi-listen-on-replanted-island",
    "lima-pantanos-de-villa-laguna-mayor",
  ],
  "swim-reset": [
    "beppu-takegawara-hot-sand-bath",
    "reykjavik-vesturbaejarlaug-neighbourhood-pool",
  ],
  "shared-rituals": [
    "brussels-mim-listen-to-instruments",
    "sao-paulo-sunday-matinal-station-concert",
  ],
} as const;

export const discoveryBatch76: Record<string, DiscoveryProfile> = {
  "sainte-suzanne-follow-reunion-vanilla": {
    modes: ["watch-listen", "at-table"],
    time: "short",
    keywords: ["La Vanilleraie", "Grand Hazier", "Bourbon vanilla", "Réunion"],
  },
  "kotohira-knead-sanuki-udon": {
    modes: ["hands-on", "at-table"],
    time: "short",
    keywords: ["Nakano Udon School", "Sanuki udon", "Kotohira", "Shikoku"],
  },
  "kanazawa-dt-suzuki-water-mirror": {
    modes: ["watch-listen", "slow-down"],
    time: "short",
    keywords: ["D. T. Suzuki Museum", "Water Mirror Garden", "Kanazawa"],
  },
  "oslo-emanuel-vigeland-dark-museum": {
    modes: ["watch-listen"],
    time: "short",
    keywords: ["Emanuel Vigeland", "Tomba Emmanuelle", "Slemdal"],
  },
  "saint-nazaire-airbus-atlantic-fuselage": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: [
      "Airbus Atlantic",
      "Montoir-de-Bretagne",
      "factory tour",
      "Loire estuary",
    ],
  },
  "muharraq-pearling-path-houses": {
    modes: ["watch-listen", "outdoors"],
    time: "half-day",
    keywords: ["Pearling Path", "Siyadi House", "Muharraq", "Bahrain"],
  },
  "echizen-lift-washi-papyrus-house": {
    modes: ["hands-on"],
    time: "short",
    keywords: [
      "Papyrus House",
      "Echizen Washi Village",
      "Japanese paper",
      "Fukui",
    ],
  },
  "corning-shape-glass-at-the-museum": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Corning Museum of Glass", "hot glass", "Finger Lakes"],
  },
  "auckland-sail-ted-ashby": {
    modes: ["outdoors"],
    time: "short",
    keywords: [
      "Ted Ashby",
      "New Zealand Maritime Museum",
      "Auckland",
      "sailing scow",
    ],
  },
  "lahti-ski-jump-simulator": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Lahti Ski Museum", "Salpausselkä", "ski jumping"],
  },
  "tiritiri-matangi-listen-on-replanted-island": {
    modes: ["outdoors", "watch-listen"],
    time: "full-day",
    keywords: ["Tiritiri Matangi", "Hauraki Gulf", "takahē", "birdsong"],
  },
  "lima-pantanos-de-villa-laguna-mayor": {
    modes: ["outdoors"],
    time: "short",
    keywords: [
      "Pantanos de Villa",
      "Laguna Mayor",
      "Chorrillos",
      "Lima wetlands",
    ],
  },
  "beppu-takegawara-hot-sand-bath": {
    modes: ["slow-down"],
    time: "short",
    keywords: ["Takegawara Onsen", "Beppu", "sand bath", "Kyushu"],
  },
  "reykjavik-vesturbaejarlaug-neighbourhood-pool": {
    modes: ["slow-down"],
    time: "short",
    keywords: ["Vesturbæjarlaug", "Vesturbær", "Hofsvallagata", "Reykjavik"],
  },
  "brussels-mim-listen-to-instruments": {
    modes: ["watch-listen"],
    time: "short",
    keywords: [
      "Musical Instruments Museum",
      "Old England",
      "Mont des Arts",
      "Brussels",
    ],
  },
  "sao-paulo-sunday-matinal-station-concert": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Matinais", "Sala São Paulo", "Júlio Prestes", "Osesp"],
  },
};
