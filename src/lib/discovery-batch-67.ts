import type { DiscoveryProfile } from "./discovery-profiles";
export const edition67 = {
  "eat-drink": [
    "bordeaux-cite-du-vin-tasting",
    "healesville-four-pillars-distillery-tour",
    "pringy-gruyere-dairy",
  ],
  "art-culture": [
    "teshima-art-museum-water",
    "new-york-artechouse-twilight-zone",
    "buenos-aires-malba-art",
  ],
  "design-innovation": [
    "osaka-maishima-waste-plant-tour",
    "rio-museu-do-amanha-futures",
    "ghent-design-museum-new-wing",
  ],
  "make-learn": [
    "liverpool-bluecoat-carton-printmaking",
    "singapore-crafune-cardholder",
    "nairobi-kazuri-bead-bar",
  ],
  "move-water": [
    "edinburgh-curling-first-stone",
    "brooklyn-royal-palms-shuffleboard",
    "cape-town-rollercade-first-laps",
  ],
  "nature-outdoors": [
    "bogota-tropicario-glasshouses",
    "kepong-frim-forest-skywalk",
    "cape-town-boulders-penguin-boardwalk",
  ],
  "swim-reset": [
    "geneva-bains-des-paquis-sauna",
    "conaripe-termas-geometricas",
    "matsuyama-dogo-onsen-honkan",
  ],
  "shared-rituals": [
    "brasilia-clube-do-choro-live",
    "seoul-myeongdong-nanta",
    "montreal-casa-del-popolo-concert",
  ],
} as const;
export const discoveryBatch67: Record<string, DiscoveryProfile> = {
  "bordeaux-cite-du-vin-tasting": {
    modes: ["at-table"],
    time: "half-day",
    keywords: [
      "Cité du Vin sensory workshop",
      "Bordeaux, Bassins à Flot",
      "France",
    ],
  },
  "healesville-four-pillars-distillery-tour": {
    modes: ["at-table"],
    time: "half-day",
    keywords: [
      "Four Pillars Distillery",
      "Healesville, Yarra Valley",
      "Australia",
    ],
  },
  "pringy-gruyere-dairy": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["La Maison du Gruyère", "Pringy, Gruyères", "Switzerland"],
  },
  "teshima-art-museum-water": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Teshima Art Museum", "Teshima, Seto Inland Sea", "Japan"],
  },
  "new-york-artechouse-twilight-zone": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["ARTECHOUSE NYC", "New York, Chelsea", "United States"],
  },
  "buenos-aires-malba-art": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["MALBA", "Buenos Aires, Palermo", "Argentina"],
  },
  "osaka-maishima-waste-plant-tour": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Maishima Incineration Plant", "Osaka, Maishima", "Japan"],
  },
  "rio-museu-do-amanha-futures": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Museu do Amanhã", "Rio de Janeiro, Praça Mauá", "Brazil"],
  },
  "ghent-design-museum-new-wing": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Design Museum Gent", "Ghent, historic centre", "Belgium"],
  },
  "liverpool-bluecoat-carton-printmaking": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: [
      "Bluecoat Print Studio",
      "Liverpool, city centre",
      "United Kingdom",
    ],
  },
  "singapore-crafune-cardholder": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Crafune leathercraft", "Singapore, Kampong Glam", "Singapore"],
  },
  "nairobi-kazuri-bead-bar": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Kazuri Bead Bar", "Nairobi, Karen", "Kenya"],
  },
  "edinburgh-curling-first-stone": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Curl Edinburgh", "Edinburgh, Murrayfield", "United Kingdom"],
  },
  "brooklyn-royal-palms-shuffleboard": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "Royal Palms Shuffleboard",
      "New York, Gowanus",
      "United States",
    ],
  },
  "cape-town-rollercade-first-laps": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Rollercade", "Cape Town, Sunningdale", "South Africa"],
  },
  "bogota-tropicario-glasshouses": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Tropicario at Bogotá Botanical Garden",
      "Bogotá, Jardín Botánico",
      "Colombia",
    ],
  },
  "kepong-frim-forest-skywalk": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: ["FRIM Forest Skywalk", "Kepong, Selangor", "Malaysia"],
  },
  "cape-town-boulders-penguin-boardwalk": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Boulders penguin boardwalk",
      "Simon’s Town, Cape Peninsula",
      "South Africa",
    ],
  },
  "geneva-bains-des-paquis-sauna": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Bains des Pâquis", "Geneva, Les Pâquis", "Switzerland"],
  },
  "conaripe-termas-geometricas": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Termas Geométricas", "Coñaripe, Los Ríos", "Chile"],
  },
  "matsuyama-dogo-onsen-honkan": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Dōgo Onsen Honkan", "Matsuyama, Dōgo", "Japan"],
  },
  "brasilia-clube-do-choro-live": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Clube do Choro", "Brasília, Eixo Monumental", "Brazil"],
  },
  "seoul-myeongdong-nanta": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Myeongdong NANTA", "Seoul, Myeongdong", "South Korea"],
  },
  "montreal-casa-del-popolo-concert": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: [
      "Casa del Popolo",
      "Montréal, Boulevard Saint-Laurent",
      "Canada",
    ],
  },
};
