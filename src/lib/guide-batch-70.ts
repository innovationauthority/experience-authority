import type { PublicExperience } from "./catalog";
import { guideImage } from "./media";

const id = "montevideo-las-llamadas-candombe-parade";
const calendar =
  "https://www.montevideo.gub.uy/noticias/el-carnaval-ya-tiene-fechas-0";

export const montevideoLasLlamadas: PublicExperience = {
  id,
  slug: id,
  title: "Hear the drums draw closer at Montevideo’s Las Llamadas",
  summary:
    "Take a place along Isla de Flores and hear one candombe drum line give way to the next. Montevideo has announced the 2027 parade for 5 and 6 February.",
  field: "gather",
  place: "Montevideo, Barrio Sur and Palermo",
  country: "Uruguay",
  countrySlug: "uruguay",
  regionSlug: "montevideo",
  status: "public_guide",
  demo: false,
  ...guideImage(id),
  kernel:
    "Pick a viewing point once the city publishes its spectator plan. As a comparsa approaches, listen for the higher chico pattern, the answering repique and the lower piano drum. Stay long enough to hear a second group come through the same stretch of street. The instruments are familiar by then, and the difference in how the groups play becomes easier to hear.",
  rootedness:
    "The parade crosses Barrio Sur and Palermo, neighbourhoods where Afro-Uruguayan families have passed down candombe across generations. UNESCO recognises the practice and its social spaces, including Cordón. Las Llamadas brings the comparsas onto a public carnival route. The neighbourhood tradition continues outside carnival.",
  shift:
    "Listen to what changes between two drum lines from the same place on the street.",
  humanReturn:
    "A rhythm you can begin to pick out even after the crowd has moved on.",
  responsibility:
    "Expect sustained drumming and a busy street. Bring hearing protection if you need it and leave room to step away. Stay behind barriers, keep crossings clear and respect residents’ doorways. Check the city’s access and transport notices before choosing a spot. The visitor role is watching and listening from the designated audience area.",
  evidence:
    "The Intendencia confirms the 2027 dates and Isla de Flores. Its standing parade guide describes the route through Barrio Sur and Palermo. As of 4 November, EA has not confirmed the 2027 start times, ticket release, seating or accessible viewing arrangements. The photograph documents the 2023 parade. EA has not attended or assessed the 2027 event on site.",
  duration:
    "Choose one of the two parade dates and leave the evening open. Check the published start time.",
  participation:
    "Street-side audience viewing and listening at a public parade.",
  access:
    "The city lists Friday 5 and Saturday 6 February 2027 on Isla de Flores. Check the official Carnival and Llamadas hub for the event notice, ticket sales, spectator access and street closures before making plans.",
  guideReview: {
    basis: "public_sources",
    scope: "public_programme",
    requiresSpecialPermission: false,
    checkedOn: "2026-11-04",
    reviewBy: "2027-01-31",
    accessUrl: calendar,
    sources: [
      {
        title: "Intendencia de Montevideo: 2027 Carnival dates",
        url: calendar,
        note: "Confirms the Desfile de Llamadas dates and Isla de Flores. The January inaugural parade is a separate event.",
      },
      {
        title: "Intendencia de Montevideo: Desfile de Llamadas",
        url: "https://montevideo.gub.uy/area-tematica/cultura-y-tiempo-libre/carnaval-y-llamadas/desfile-de-llamadas",
        note: "Standing parade description and the customary route between Zelmar Michelini and Minas.",
      },
      {
        title: "Intendencia de Montevideo: Carnival and Llamadas",
        url: "https://montevideo.gub.uy/area-tematica/cultura-y-tiempo-libre/carnaval-y-llamadas",
        note: "Official updates hub for parade arrangements, announcements and visitor notices.",
      },
      {
        title: "UNESCO: candombe and its socio-cultural space",
        url: "https://ich.unesco.org/en/RL/candombe-and-its-socio-cultural-space-a-community-practice-00182",
        note: "Describes candombe as an Afro-Uruguayan community practice in Barrio Sur, Palermo and Cordón.",
      },
    ],
  },
};
