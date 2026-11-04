import type { DiscoveryProfile } from "./discovery-profiles";
export const edition68 = {
  "eat-drink": [
    "lima-central-ecosystems-menu",
    "yoichi-nikka-coal-fired-stills",
    "stockholm-frantzen-house-menu",
  ],
  "art-culture": [
    "hong-kong-mplus-everyday-design",
    "tokyo-mori-mariko-mori-all-that-shines",
    "riehen-beyeler-look-again",
    "doha-national-museum-desert-rose",
  ],
  "design-innovation": [
    "milan-triennale-italian-design",
    "dessau-bauhaus-building-workshop-wing",
    "aarhus-dokk1-public-library-tour",
    "minneapolis-mill-city-flour-tower",
  ],
  "make-learn": [
    "chiang-mai-naenna-backstrap-weaving",
    "hampton-court-rsn-embroidery-day",
    "paris-lecole-gouache-jewelry-light",
    "aarhus-godsbanen-open-ceramics-workshop",
  ],
  "move-water": [
    "tokyo-spo-dori-batting-cages",
    "barcelona-port-olimpic-light-sailing",
    "stockholm-radhuset-underground-boule",
    "london-f1-arcade-first-simulator-race",
  ],
  "nature-outdoors": [
    "panama-city-metropolitan-park-cedro",
    "buenos-aires-costanera-sur-wetland",
    "medellin-botanical-garden-orquideorama",
  ],
  "swim-reset": [
    "karuizawa-tombo-no-yu-forest-bath",
    "fingal-peninsula-bath-house",
    "cacheuta-termas-mendoza-spa",
    "oslo-toyenbadet-public-pool",
  ],
  "shared-rituals": [
    "bogota-cumbia-house-live-stage",
    "ho-chi-minh-city-ao-show-bamboo",
    "oslo-bla-frank-znort-sunday",
  ],
} as const;
export const discoveryBatch68: Record<string, DiscoveryProfile> = {
  "lima-central-ecosystems-menu": {
    modes: ["at-table"],
    time: "calendar",
    keywords: ["Central", "Lima, Barranco", "Peru"],
  },
  "yoichi-nikka-coal-fired-stills": {
    modes: ["at-table"],
    time: "half-day",
    keywords: ["Nikka Yoichi Distillery", "Yoichi, Hokkaido", "Japan"],
  },
  "stockholm-frantzen-house-menu": {
    modes: ["at-table"],
    time: "calendar",
    keywords: ["Frantzén", "Stockholm, Norrmalm", "Sweden"],
  },
  "hong-kong-mplus-everyday-design": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["M+", "Hong Kong, West Kowloon", "Hong Kong"],
  },
  "tokyo-mori-mariko-mori-all-that-shines": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Mori Art Museum", "Tokyo, Roppongi", "Japan"],
  },
  "riehen-beyeler-look-again": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Fondation Beyeler", "Riehen, Basel", "Switzerland"],
  },
  "doha-national-museum-desert-rose": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["National Museum of Qatar", "Doha, Old Salata", "Qatar"],
  },
  "milan-triennale-italian-design": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: ["Triennale Milano", "Milan, Parco Sempione", "Italy"],
  },
  "dessau-bauhaus-building-workshop-wing": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: [
      "Bauhaus Dessau guided building tour",
      "Dessau-Roßlau, Saxony-Anhalt",
      "Germany",
    ],
  },
  "aarhus-dokk1-public-library-tour": {
    modes: ["watch-listen"],
    time: "short",
    keywords: ["Dokk1 public architecture tour", "Aarhus, Harbour", "Denmark"],
  },
  "chiang-mai-naenna-backstrap-weaving": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: ["Studio Naenna", "Chiang Mai, Studio Naenna", "Thailand"],
  },
  "hampton-court-rsn-embroidery-day": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: [
      "Royal School of Needlework",
      "East Molesey, Hampton Court Palace",
      "United Kingdom",
    ],
  },
  "paris-lecole-gouache-jewelry-light": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: [
      "L’ÉCOLE School of Jewelry Arts",
      "Paris, Grands Boulevards",
      "France",
    ],
  },
  "tokyo-spo-dori-batting-cages": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Spo-Dori batting", "Tokyo, Suidobashi", "Japan"],
  },
  "barcelona-port-olimpic-light-sailing": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: ["Centre Municipal de Vela", "Barcelona, Port Olímpic", "Spain"],
  },
  "stockholm-radhuset-underground-boule": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Boulebar Rålambshov", "Stockholm, Kungsholmen", "Sweden"],
  },
  "panama-city-metropolitan-park-cedro": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Parque Natural Metropolitano",
      "Panama City, Parque Natural Metropolitano",
      "Panama",
    ],
  },
  "buenos-aires-costanera-sur-wetland": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Reserva Ecológica Costanera Sur",
      "Buenos Aires, Costanera Sur",
      "Argentina",
    ],
  },
  "medellin-botanical-garden-orquideorama": {
    modes: ["outdoors"],
    time: "half-day",
    keywords: [
      "Jardín Botánico Medellín",
      "Medellín, Jardín Botánico",
      "Colombia",
    ],
  },
  "karuizawa-tombo-no-yu-forest-bath": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Hoshino Onsen Tombo-no-yu", "Karuizawa, Nagano", "Japan"],
  },
  "fingal-peninsula-bath-house": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: [
      "Peninsula Hot Springs Bath House",
      "Fingal, Mornington Peninsula",
      "Australia",
    ],
  },
  "bogota-cumbia-house-live-stage": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Cumbia House by Carlos Vives", "Bogotá, Usaquén", "Colombia"],
  },
  "ho-chi-minh-city-ao-show-bamboo": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["À Ố Show", "Ho Chi Minh City, District 1", "Vietnam"],
  },
  "oslo-bla-frank-znort-sunday": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Frank Znort Quartet at BLÅ", "Oslo, Akerselva", "Norway"],
  },
  "cacheuta-termas-mendoza-spa": {
    modes: ["slow-down"],
    time: "half-day",
    keywords: ["Termas Cacheuta", "Cacheuta, Mendoza", "Argentina"],
  },
  "minneapolis-mill-city-flour-tower": {
    modes: ["watch-listen"],
    time: "half-day",
    keywords: [
      "Mill City Museum",
      "Minneapolis, Mississippi riverfront",
      "United States",
    ],
  },
  "aarhus-godsbanen-open-ceramics-workshop": {
    modes: ["hands-on"],
    time: "calendar",
    keywords: ["Godsbanen", "Aarhus, Godsbanen", "Denmark"],
  },
  "oslo-toyenbadet-public-pool": {
    modes: ["slow-down"],
    time: "short",
    keywords: ["Tøyenbadet", "Oslo, Tøyen", "Norway"],
  },
  "london-f1-arcade-first-simulator-race": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["F1 Arcade London", "London, St Paul’s", "United Kingdom"],
  },
};
