import type { DiscoveryProfile } from "./discovery-profiles";
export const edition20261027 = {
  "eat-drink": [
    "break-the-crust-of-an-athens-loukouma",
    "read-a-copenhagen-lunch-one-open-sandwich-at-a-time",
    "find-the-sauce-inside-portos-francesinha",
  ],
  "make-learn": [
    "fit-a-silver-thread-into-portos-filigree",
    "carve-a-name-into-stone-in-insadong",
    "let-wax-hold-a-line-in-kuala-lumpur",
  ],
  "move-water": [
    "let-budapest-appear-between-the-trees",
    "take-an-oslo-city-ticket-to-an-island-walk",
    "walk-dubrovnik-between-rooftops-and-sea",
  ],
  "explore-reflect": [
    "read-a-bologna-lecture-room-carved-in-wood",
    "walk-through-a-day-in-recreated-old-osaka",
    "step-inside-the-subways-new-york-used-to-ride",
  ],
  "swim-reset": [
    "swim-through-viennas-everyday-architecture",
    "follow-water-through-murin-ans-borrowed-landscape",
    "slow-a-singapore-afternoon-beside-the-chinese-garden",
  ],
  "shared-rituals": [
    "let-krakows-next-hour-begin-with-a-trumpet",
    "hear-hanoi-answer-in-jazz",
    "hear-viennas-musical-life-beyond-the-concert-hall",
  ],
} as const;
export const discoveryBatch58: Record<string, DiscoveryProfile> = {
  "break-the-crust-of-an-athens-loukouma": {
    modes: ["at-table"],
    time: "short",
    keywords: ["Athens, Aiolou Street", "Greece", "athens krinos loukoumades"],
  },
  "read-a-copenhagen-lunch-one-open-sandwich-at-a-time": {
    modes: ["at-table"],
    time: "own-pace",
    keywords: [
      "Copenhagen, Hauser Plads",
      "Denmark",
      "copenhagen schonnemann smorrebrod",
    ],
  },
  "find-the-sauce-inside-portos-francesinha": {
    modes: ["at-table"],
    time: "own-pace",
    keywords: [
      "Porto, Rua de Passos Manuel",
      "Portugal",
      "porto santiago francesinha",
    ],
  },
  "fit-a-silver-thread-into-portos-filigree": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "Porto, Rua do Almada",
      "Portugal",
      "porto house filigree workshop",
    ],
  },
  "carve-a-name-into-stone-in-insadong": {
    modes: ["hands-on"],
    time: "short",
    keywords: ["Seoul, Insadong", "South Korea", "seoul yhlayuen seal"],
  },
  "let-wax-hold-a-line-in-kuala-lumpur": {
    modes: ["hands-on"],
    time: "half-day",
    keywords: [
      "Kuala Lumpur, The Row",
      "Malaysia",
      "kuala lumpur batik boutique",
    ],
  },
  "let-budapest-appear-between-the-trees": {
    modes: ["outdoors"],
    time: "own-pace",
    keywords: ["Budapest, Zugliget", "Hungary", "budapest zugliget chairlift"],
  },
  "take-an-oslo-city-ticket-to-an-island-walk": {
    modes: ["outdoors"],
    time: "own-pace",
    keywords: ["Oslo, Hovedøya", "Norway", "oslo hovedoya ferry walk"],
  },
  "walk-dubrovnik-between-rooftops-and-sea": {
    modes: ["outdoors"],
    time: "own-pace",
    keywords: [
      "Dubrovnik, Old Town walls",
      "Croatia",
      "dubrovnik city walls walk",
    ],
  },
  "read-a-bologna-lecture-room-carved-in-wood": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: [
      "Bologna, Archiginnasio",
      "Italy",
      "bologna archiginnasio theatre",
    ],
  },
  "walk-through-a-day-in-recreated-old-osaka": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: ["Osaka, Tenjinbashi", "Japan", "osaka housing living street"],
  },
  "step-inside-the-subways-new-york-used-to-ride": {
    modes: ["watch-listen"],
    time: "own-pace",
    keywords: [
      "New York, Downtown Brooklyn",
      "United States",
      "new york transit museum cars",
    ],
  },
  "swim-through-viennas-everyday-architecture": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: ["Vienna, Favoriten", "Austria", "vienna amalienbad swim"],
  },
  "follow-water-through-murin-ans-borrowed-landscape": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: ["Kyoto, Okazaki", "Japan", "kyoto murinan water garden"],
  },
  "slow-a-singapore-afternoon-beside-the-chinese-garden": {
    modes: ["slow-down"],
    time: "own-pace",
    keywords: [
      "Singapore, Jurong Lake Gardens",
      "Singapore",
      "singapore chinese garden pause",
    ],
  },
  "let-krakows-next-hour-begin-with-a-trumpet": {
    modes: ["watch-listen"],
    time: "short",
    keywords: [
      "Kraków, Main Market Square",
      "Poland",
      "krakow hejnal listening",
    ],
  },
  "hear-hanoi-answer-in-jazz": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Hanoi, Tràng Tiền", "Vietnam", "hanoi binh minh jazz"],
  },
  "hear-viennas-musical-life-beyond-the-concert-hall": {
    modes: ["watch-listen"],
    time: "calendar",
    keywords: ["Vienna, Riemergasse", "Austria", "vienna porgy bess listening"],
  },
};
