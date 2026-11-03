import type { DiscoveryProfile } from "./discovery-profiles";
export const edition66 = {
  "eat-drink": [
    "vienna-steirereck-seasonal-menu",
    "cognac-hennessy-cellars",
    "san-francisco-dandelion-cacao",
  ],
  "art-culture": [
    "amsterdam-eye-what-is-film",
    "paris-bourse-rotunda",
    "kyoto-biovortex-athletics-forest",
  ],
  "design-innovation": [
    "venice-olivetti-scarpa",
    "stuttgart-porsche-factory-walk",
    "toulouse-cite-espace-scale",
  ],
  "make-learn": [
    "tokyo-origami-kaikan-mini",
    "bangkok-clay-circle-wheel",
    "hanoi-bat-trang-old-quarter-clay",
  ],
  "move-water": [
    "vancouver-flyover-awaken-canada",
    "seoul-lotte-world-indoor-outdoor",
    "singapore-altitudex-first-flight",
  ],
  "nature-outdoors": [
    "oslo-ekeberg-woodland",
    "singapore-bukit-timah-rail-corridor",
    "penang-habitat-langur-way",
  ],
  "swim-reset": [
    "montreal-bota-bota-ferry",
    "berlin-liquidrom-underwater-sound",
    "hanmer-springs-thermal-rock-pools",
  ],
  "shared-rituals": [
    "stockholm-fasching-live-set",
    "mexico-city-zinco-basement-jazz",
    "tokyo-suntory-hall-concert",
  ],
} as const;
export const discoveryBatch66: Record<string, DiscoveryProfile> = {
  "vienna-steirereck-seasonal-menu": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Vienna, Stadtpark", "Austria"],
  },
  "cognac-hennessy-cellars": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Cognac, Charente", "France"],
  },
  "san-francisco-dandelion-cacao": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["San Francisco, Mission District", "United States"],
  },
  "amsterdam-eye-what-is-film": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Amsterdam, IJpromenade", "Netherlands"],
  },
  "paris-bourse-rotunda": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Paris, Les Halles", "France"],
  },
  "kyoto-biovortex-athletics-forest": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Kyoto, Minami", "Japan"],
  },
  "venice-olivetti-scarpa": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Venice, Piazza San Marco", "Italy"],
  },
  "stuttgart-porsche-factory-walk": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Stuttgart, Zuffenhausen", "Germany"],
  },
  "toulouse-cite-espace-scale": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Toulouse, Cité de l'espace", "France"],
  },
  "tokyo-origami-kaikan-mini": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Tokyo, Yushima", "Japan"],
  },
  "bangkok-clay-circle-wheel": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Bangkok, Clay Circle BKK", "Thailand"],
  },
  "hanoi-bat-trang-old-quarter-clay": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Hanoi, Old Quarter", "Vietnam"],
  },
  "vancouver-flyover-awaken-canada": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Vancouver, Canada Place", "Canada"],
  },
  "seoul-lotte-world-indoor-outdoor": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Seoul, Jamsil", "South Korea"],
  },
  "singapore-altitudex-first-flight": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Singapore, Sentosa", "Singapore"],
  },
  "oslo-ekeberg-woodland": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Oslo, Ekeberg", "Norway"],
  },
  "singapore-bukit-timah-rail-corridor": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Singapore, Bukit Timah", "Singapore"],
  },
  "penang-habitat-langur-way": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["Penang Hill, Air Itam", "Malaysia"],
  },
  "montreal-bota-bota-ferry": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Montréal, Old Port", "Canada"],
  },
  "berlin-liquidrom-underwater-sound": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Berlin, Kreuzberg", "Germany"],
  },
  "hanmer-springs-thermal-rock-pools": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Hanmer Springs, Canterbury", "New Zealand"],
  },
  "stockholm-fasching-live-set": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Stockholm, Norrmalm", "Sweden"],
  },
  "mexico-city-zinco-basement-jazz": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Mexico City, Centro Histórico", "Mexico"],
  },
  "tokyo-suntory-hall-concert": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Tokyo, Akasaka", "Japan"],
  },
};
