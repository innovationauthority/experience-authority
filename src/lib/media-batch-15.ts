import type { GuideMedia } from "./media";

const official = {
  licenseName: "Official source image. Reuse rights not independently cleared",
  rightsBasis: "official_source",
  rightsCheckedOn: "2026-09-13",
} as const;
const clerigos: GuideMedia = {
  guideId: "porto-clerigos-organ",
  src: "/images/guides/porto-clerigos-interior.jpg",
  alt: "Gilded altar and stone vaults seen from the nave of Clérigos church in Porto.",
  title: "Igreja dos Clérigos, Altar area, Porto",
  photographer: "Peter K Burian",
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:Igreja_dos_Cl%C3%A9rigos,_Altar_area,_Porto.jpg",
  licenseName: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  rightsBasis: "documented_license",
  rightsCheckedOn: "2026-11-05",
  firstPublishedOn: "2026-09-13",
  visualReview: {
    outcome: "approved",
    checkedOn: "2026-11-05",
    rationale:
      "A wide, sharp photograph of the actual nave and altar shows the scale of the room where visitors listen.",
  },
  depiction:
    "The nave and altar of Igreja dos Clérigos, photographed on 15 September 2019. The image shows the venue in use, with no performance depicted. Resized for web and responsively cropped under CC BY 4.0.",
};

const records = [
  {
    guideId: "porto-bolhao-market",
    src: "/images/guides/porto-bolhao-market.jpg",
    alt: "An elevated view across the covered stalls and open courtyard of Porto's Bolhão market, framed by pale stone arcades.",
    title: "Bolhão market courtyard",
    photographer: "Mercado do Bolhão. Individual photographer not named",
    sourceUrl: "https://mercadobolhao.pt/en/",
    rationale:
      "The symmetrical courtyard view places the working stalls in their specific architecture. Professional resolution and a coherent frame make it legible at both card and full-page scale.",
    depiction:
      "Official Mercado do Bolhão courtyard image in a source file uploaded in June 2026. It does not guarantee a stall layout, opening status or attendance at your visit. Resized for web delivery.",
  },
  {
    guideId: "kyoto-kunjyukan-incense",
    src: "/images/guides/kyoto-kunjyukan-incense.jpg",
    alt: "White hanging scent boxes and slender testers in Kunjyukan's bright Koh-labo gallery, with a forest mural behind them.",
    title: "Koh-labo fragrance gallery",
    photographer: "Shoyeido / Kunjyukan. Individual photographer not named",
    sourceUrl: "https://kunjyukan.jp/english/facilities/koh-labo.html",
    rationale:
      "The clean architectural frame shows the actual scent-box installation clearly. Its restrained white space and forest wall provide a distinctive photograph without implying a ceremony or workshop.",
    depiction:
      "Kunjyukan's official image of the Koh-labo permanent gallery. It depicts the sensory installation, not an EA visit, current occupancy or a private incense ceremony. Resized for web delivery.",
  },
  {
    guideId: "venice-huang-lampworking",
    src: "/images/guides/venice-huang-lampworking.jpg",
    alt: "Hands turn glass rods beside a bright blue flame while a green glass shape is worked at Huang Xiaozhe's bench.",
    title: "Glass lampworking at Huang Xiaozhe's atelier",
    photographer: "Huang Xiaozhe. Individual photographer not named",
    sourceUrl: "https://huangxiaozhe.com/workshop",
    rationale:
      "A sharp close view joins hand, flame and translucent material in one visually specific action. It shows the actual practice instead of generic glass souvenirs or an unrelated factory.",
    depiction:
      "An artist-published glassworking photograph from the public workshop page. The depicted shape is not a guaranteed beginner result. Resized for web delivery.",
  },
];
export const mediaBatch15: readonly GuideMedia[] = [
  clerigos,
  ...records.map<GuideMedia>(({ rationale, ...record }) => ({
    ...official,
    ...record,
    licenseUrl: record.sourceUrl,
    visualReview: { outcome: "approved", checkedOn: "2026-09-13", rationale },
    depiction: `${record.depiction} Reuse rights have not been independently cleared.`,
  })),
];
