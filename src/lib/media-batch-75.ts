import type { GuideMedia } from "./media";

const checkedOn = "2026-11-04";

type Photograph = Pick<
  GuideMedia,
  "guideId" | "title" | "alt" | "photographer" | "sourceUrl" | "depiction"
> & { rationale: string };

function photograph(
  { rationale, ...photo }: Photograph,
  shareAlike = true,
): GuideMedia {
  const licenseName = shareAlike ? "CC BY-SA 4.0" : "CC BY 2.0";
  return {
    ...photo,
    src: `/images/guides/${photo.guideId}.jpg`,
    licenseName,
    licenseUrl: shareAlike
      ? "https://creativecommons.org/licenses/by-sa/4.0/"
      : "https://creativecommons.org/licenses/by/2.0/",
    rightsBasis: "documented_license",
    rightsCheckedOn: checkedOn,
    firstPublishedOn: checkedOn,
    visualReview: { outcome: "approved", checkedOn, rationale },
    depiction: `${photo.depiction} Resized for web and responsively cropped under ${licenseName}.`,
  };
}

export const antwerpMatsuyamaMedia = [
  photograph(
    {
      guideId: "antwerp-red-star-line-follow-a-passenger",
      title: "Red Star Line Museum at the Antwerp docks",
      alt: "A red brick building marked Red Star Line sits in front of the museum’s contemporary observation tower under a clear sky.",
      photographer: "Fred Romero",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Antwerpen_-_Red_Star_Line_Museum.jpg",
      rationale:
        "The signed former shipping building and the later tower remain legible together in a narrow crop.",
      depiction:
        "The historic shipping buildings and the museum’s contemporary tower, photographed in September 2015.",
    },
    false,
  ),
  photograph({
    guideId: "antwerp-de-koninck-bolleke-brewery",
    title: "Antwerp’s Bolleke in its round glass",
    alt: "A rounded glass of amber Bolleke and a De Koninck bottle stand in a patch of sunlight.",
    photographer: "Robbylancel",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bolleke_in_de_stad.jpg",
    rationale:
      "The composition keeps the rounded glass and amber colour distinct, with the actual Antwerp beer in view.",
    depiction:
      "Bolleke and its namesake glass, photographed in July 2019. The photograph illustrates the beer and glass rather than the brewery route or a current sample.",
  }),
  photograph({
    guideId: "matsuyama-castle-follow-the-gates",
    title: "Looking from Matsuyama Castle over the upper grounds",
    alt: "Dark tiled roofs rise from the wooded upper grounds of Matsuyama Castle, with the city and hills beyond.",
    photographer: "Zairon",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Matsuyama_Matsuyama-jo_Keep_View_to_the_Castle_Grounds_01.jpg",
    rationale:
      "The view from the keep relates the roofs and paths of the upper enclosure to the modern city below.",
    depiction:
      "View from the keep over the grounds in October 2023. Access to this viewpoint uses the separately ticketed tower.",
  }),
  photograph({
    guideId: "matsuyama-botchan-train-to-dogo",
    title: "Botchan train at Dōgo Onsen Station",
    alt: "The small dark green Botchan train stands beside the timber-fronted Dōgo Onsen Station in Matsuyama.",
    photographer: "MaedaAkihiko",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Iyotetsu-TypeD1.jpg",
    rationale:
      "The railway photograph shows the real locomotive and carriage at the intended arrival station, with both readable at card size.",
    depiction:
      "Iyotetsu’s D1 Botchan set photographed at Dōgo Onsen Station in January 2020.",
  }),
];
