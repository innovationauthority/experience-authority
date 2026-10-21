import type { DiscoveryProfile } from "./discovery-profiles";
export const edition20261021SeventhPass = {
  "eat-drink": [
    "taste-istanbuls-winter-in-a-glass-of-boza",
    "build-a-stockholm-lunch-from-the-food-hall-counter",
    "learn-singapores-breakfast-rhythm-with-kaya-and-kopi",
  ],
  "make-learn": [
    "paint-a-line-in-meissens-blue-before-the-firing",
    "find-a-rabbit-in-a-soft-piece-of-sugar-in-asakusa",
    "give-an-umbrella-another-life-in-ljubljana",
  ],
  "move-water": [
    "walk-into-wellingtons-regenerating-valley-at-zealandia",
    "watch-la-concha-open-out-from-monte-igueldo",
    "make-stockholms-islands-part-of-the-journey",
  ],
  "explore-reflect": [
    "look-for-civic-beauty-inside-londons-crossness",
    "follow-a-camera-through-portos-former-prison",
    "read-palermos-floors-on-the-walls-at-stanze-al-genio",
  ],
  "swim-reset": [
    "give-new-york-a-longer-view-at-wave-hill",
    "slow-down-among-mexicos-plants-at-unam",
    "leave-room-for-a-slow-walk-through-ljubljanas-tivoli",
  ],
  "shared-rituals": [
    "hear-paris-through-the-glass-of-sainte-chapelle",
    "listen-inside-helsinkis-rock-cut-concert-room",
    "listen-to-flamenco-in-sevilles-torres-macarena-pena",
  ],
} as const;
export const discoveryBatch55: Record<string, DiscoveryProfile> = {
  "taste-istanbuls-winter-in-a-glass-of-boza": {
    modes: ["at-table"],
    time: "short",
    keywords: ["Istanbul, Vefa", "Türkiye", "istanbul", "vefa", "boza"],
  },
  "build-a-stockholm-lunch-from-the-food-hall-counter": {
    modes: ["at-table"],
    time: "short",
    keywords: [
      "Stockholm, Östermalm",
      "Sweden",
      "stockholm",
      "ostermalm",
      "counter",
      "lunch",
    ],
  },
  "learn-singapores-breakfast-rhythm-with-kaya-and-kopi": {
    modes: ["at-table"],
    time: "short",
    keywords: ["Singapore", "Singapore", "singapore", "ya", "kun", "kaya"],
  },
  "paint-a-line-in-meissens-blue-before-the-firing": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Meissen", "Germany", "meissen", "underglaze", "painting"],
  },
  "find-a-rabbit-in-a-soft-piece-of-sugar-in-asakusa": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "Tokyo, Asakusa",
      "Japan",
      "tokyo",
      "ameshin",
      "candy",
      "shaping",
    ],
  },
  "give-an-umbrella-another-life-in-ljubljana": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Ljubljana", "Slovenia", "ljubljana", "umbrella", "mending"],
  },
  "walk-into-wellingtons-regenerating-valley-at-zealandia": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Wellington, Karori",
      "New Zealand",
      "wellington",
      "zealandia",
      "day",
      "walk",
    ],
  },
  "watch-la-concha-open-out-from-monte-igueldo": {
    modes: ["outdoors"],
    time: "short",
    keywords: [
      "San Sebastián",
      "Spain",
      "san",
      "sebastian",
      "igueldo",
      "funicular",
    ],
  },
  "make-stockholms-islands-part-of-the-journey": {
    modes: ["outdoors"],
    time: "short",
    keywords: [
      "Stockholm, Slussen to Djurgården",
      "Sweden",
      "stockholm",
      "djurgarden",
      "ferry",
    ],
  },
  "look-for-civic-beauty-inside-londons-crossness": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: [
      "London, Thamesmead",
      "United Kingdom",
      "london",
      "crossness",
      "guided",
    ],
  },
  "follow-a-camera-through-portos-former-prison": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["Porto", "Portugal", "porto", "cpf", "camera", "collection"],
  },
  "read-palermos-floors-on-the-walls-at-stanze-al-genio": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["Palermo, Kalsa", "Italy", "palermo", "stanze", "maiolica"],
  },
  "give-new-york-a-longer-view-at-wave-hill": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "New York City, Riverdale",
      "United States",
      "new",
      "york",
      "wave",
      "hill",
      "garden",
    ],
  },
  "slow-down-among-mexicos-plants-at-unam": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "Mexico City, Ciudad Universitaria",
      "Mexico",
      "mexico",
      "city",
      "unam",
      "botanical",
      "pause",
    ],
  },
  "leave-room-for-a-slow-walk-through-ljubljanas-tivoli": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "Ljubljana, Tivoli Park",
      "Slovenia",
      "ljubljana",
      "tivoli",
      "promenade",
      "pause",
    ],
  },
  "hear-paris-through-the-glass-of-sainte-chapelle": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: [
      "Paris, Île de la Cité",
      "France",
      "paris",
      "sainte",
      "chapelle",
      "concert",
    ],
  },
  "listen-inside-helsinkis-rock-cut-concert-room": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: [
      "Helsinki, Töölö",
      "Finland",
      "helsinki",
      "temppeliaukio",
      "concert",
    ],
  },
  "listen-to-flamenco-in-sevilles-torres-macarena-pena": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: [
      "Seville, Macarena",
      "Spain",
      "seville",
      "torres",
      "macarena",
      "flamenco",
    ],
  },
};
