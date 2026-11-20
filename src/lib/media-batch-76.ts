import type { GuideMedia } from "./media";

const checkedOn = "2026-11-20";

type SourcePhoto = Pick<
  GuideMedia,
  | "guideId"
  | "title"
  | "alt"
  | "photographer"
  | "sourceUrl"
  | "licenseName"
  | "licenseUrl"
  | "depiction"
>;

function photograph(photo: SourcePhoto): GuideMedia {
  return {
    ...photo,
    src: `/images/guides/${photo.guideId}.jpg`,
    rightsBasis: "documented_license",
    rightsCheckedOn: checkedOn,
    firstPublishedOn: checkedOn,
    visualReview: {
      outcome: "approved",
      checkedOn,
      rationale: photo.depiction,
    },
  };
}

export const mediaBatch76 = [
  photograph({
    guideId: "sainte-suzanne-follow-reunion-vanilla",
    title: "The Grand Hazier estate in Sainte-Suzanne",
    alt: "The pale Grand Hazier house sits behind a lawn and mature trees under a broken sky.",
    photographer: "Olaf2",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Domaine_du_Grand_Hazier_2024_08.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "The estate that houses La Vanilleraie. The photograph places the visit on the grounds of Grand Hazier. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "kotohira-knead-sanuki-udon",
    title: "Nakano Udon School in Kotohira",
    alt: "A wooden gate with Japanese signs opens into the historical Nakano Udon School frontage.",
    photographer: "lienyuan lee",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E9%87%8E%E7%83%8F%E9%BE%8D%E5%AD%B8%E6%A0%A1_Nakano_Udon_School_-_panoramio.jpg",
    licenseName: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    depiction:
      "Historical school frontage photographed in 2014. Use the current booking address for class reception. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "kanazawa-dt-suzuki-water-mirror",
    title: "The Water Mirror Garden at the D. T. Suzuki Museum",
    alt: "The low museum walls and a white pavilion reflect in a shallow pool under hanging branches.",
    photographer: "City of Kanazawa",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E9%88%B4%E6%9C%A8%E5%A4%A7%E6%8B%99%E9%A4%A8001.jpg",
    licenseName: "CC BY 2.1 jp",
    licenseUrl: "https://creativecommons.org/licenses/by/2.1/jp/deed.en",
    depiction:
      "Kanazawa City’s documentary photograph shows the exact pool and pavilion discussed in the guide. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "oslo-emanuel-vigeland-dark-museum",
    title: "A fresco inside the Tomba Emmanuelle",
    alt: "Figures emerge from the brown and gold tones of a partially lit painted wall.",
    photographer: "Harald Groven",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Emanuel_Vigeland_(1875-1948)_mausoleum_Tomba_Emmanuelle_1926_Museum_Slemdal_Oslo_Norway_Interior_fresco_paintings_(Harald_Groven_2024-12-24_Flickr)_-_54235323681.jpg",
    licenseName: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    depiction:
      "A lit photograph of part of Vigeland’s fresco. The chamber is substantially darker during a normal visit. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "saint-nazaire-airbus-atlantic-fuselage",
    title: "The Airbus industrial site at Saint-Nazaire Montoir",
    alt: "The former control tower stands beside industrial buildings on the Montoir airfield.",
    photographer: "Nuiteux731",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ancienne_tour_de_contr%C3%B4le_de_l%27a%C3%A9roport_de_Saint-Nazaire_(site_Airbus_Industrie).jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "The Airbus site at Montoir seen from outside. Interior photography and the route are governed by the tour rules. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "muharraq-pearling-path-houses",
    title: "The Siyadi complex on Muharraq’s Pearling Path",
    alt: "A timber-screened building and a pale arched facade rise side by side in Muharraq.",
    photographer: "Zairon",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Muharraq_Bayt_Siyadi_2.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "The Siyadi complex is a specific stop on the public Pearling Path. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "echizen-lift-washi-papyrus-house",
    title: "Forming a sheet of Echizen washi",
    alt: "A papermaker holds a rectangular screen above a vat of cloudy liquid.",
    photographer: "UFshio",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Echizen_washi_image.01.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "The Echizen paper-making technique shown here illustrates the forming stage. The source does not identify the exact visitor session. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "corning-shape-glass-at-the-museum",
    title: "Hot-glass demonstration at Corning",
    alt: "A glassworker sits at a Corning studio bench shaping glowing glass with a tool.",
    photographer: "Andre Carrotflower",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Corning_Museum_of_Glass_-_20220312_-_02_-_Hot_Glass_Show.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "Chris Rochelle demonstrating hot glass at the museum. Visitor sessions operate separately. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "auckland-sail-ted-ashby",
    title: "Boarding the Ted Ashby at Auckland’s Maritime Museum",
    alt: "The rigged Ted Ashby lies at its berth with the buildings of the Viaduct waterfront behind it.",
    photographer: "Winnieswikiworld",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Maritime_Museum_fleet_2026.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "The actual vessel and the museum’s waterfront boarding area. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "lahti-ski-jump-simulator",
    title: "The ski jumps beside the Lahti Ski Museum",
    alt: "Three steep ski-jump ramps stand against trees and a clear blue sky.",
    photographer: "Tiia Monto",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lahti_-_ski_jumps.jpg",
    licenseName: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    depiction:
      "The real outdoor jumps near the museum’s simulator. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "tiritiri-matangi-listen-on-replanted-island",
    title: "Takahē on Tiritiri Matangi Island",
    alt: "A dark blue takahē with a bright red bill lowers its head into grass.",
    photographer: "Blacksmith",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Takahe-Tiritiri_Matangi.JPG",
    licenseName: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    depiction:
      "A takahē photographed on the island. This is a documented sighting rather than a promise of what the guided group will see. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "lima-pantanos-de-villa-laguna-mayor",
    title: "The view from a Pantanos de Villa lookout",
    alt: "A stretch of open water lies between the reed beds of the Chorrillos wetland.",
    photographer: "Immalittlepea2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Laguna_de_los_Pantanos_de_Villa_desde_un_mirador.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "View from a lookout at Pantanos de Villa. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "beppu-takegawara-hot-sand-bath",
    title: "Takegawara Onsen in Beppu",
    alt: "The timber and tiled roof of Takegawara Onsen rise above the paved entrance.",
    photographer: "663highland",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Beppu_Takegawara-onsen01s5s4272.jpg",
    licenseName: "CC BY 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    depiction:
      "The public bathhouse from outside, where visitors enter for ordinary and sand baths. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "reykjavik-vesturbaejarlaug-neighbourhood-pool",
    title: "Vesturbæjarlaug at Hofsvallagata",
    alt: "The low municipal pool building and an Icelandic flag stand beyond the parking area.",
    photographer: "Jabbi",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ice_Vesturbaejarlaug_20-09-08.JPG",
    licenseName: "Public domain",
    licenseUrl:
      "https://commons.wikimedia.org/wiki/File:Ice_Vesturbaejarlaug_20-09-08.JPG",
    depiction:
      "Historical exterior of the exact neighbourhood pool. The photograph shows the arrival side. Exposure adjusted and resized for web.",
  }),
  photograph({
    guideId: "brussels-mim-listen-to-instruments",
    title: "Brass instruments at the Musical Instruments Museum in Brussels",
    alt: "A group of historic wind instruments stands behind glass in a museum display.",
    photographer: "Sdkb",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Brass_instruments_at_the_Musical_Instruments_Museum,_Brussels.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "Historic wind instruments photographed in the Brussels Musical Instruments Museum. Resized for web with responsive crops.",
  }),
  photograph({
    guideId: "sao-paulo-sunday-matinal-station-concert",
    title: "A view across Sala São Paulo",
    alt: "The light timber stage, tall arched windows and curving balconies frame the concert hall.",
    photographer: "Webysther Nunes",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Webysther_20150501201754_-_Interior_Sala_S%C3%A3o_Paulo.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    depiction:
      "Inside the main concert hall at Júlio Prestes Station. The Matinais listing identifies the venue for each event. Resized for web with responsive crops.",
  }),
];
