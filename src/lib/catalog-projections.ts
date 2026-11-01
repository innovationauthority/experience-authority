import type { PublicExperience } from "./catalog";
import { interests } from "./catalog";
import { guideMediaFor, imageCreditText } from "./media";
import { cardPlanning } from "./card-planning";

export type ImageCreditData = { sourceUrl: string; credit: string };
export type CardExperience = Pick<
  PublicExperience,
  | "id"
  | "slug"
  | "title"
  | "summary"
  | "field"
  | "place"
  | "country"
  | "countrySlug"
  | "regionSlug"
  | "status"
  | "image"
  | "demo"
> & {
  category: string;
  media?: ImageCreditData;
  planning: ReturnType<typeof cardPlanning>;
};
export type PlanExperience = Pick<
  PublicExperience,
  | "id"
  | "slug"
  | "title"
  | "place"
  | "country"
  | "countrySlug"
  | "duration"
  | "participation"
> & {
  guideReview?: { accessUrl: string; checkedOn: string };
  photo?: ImageCreditData & { src: string };
};
export type PassportExperience = CardExperience &
  PlanExperience &
  Pick<PublicExperience, "shift" | "access" | "evidence">;

/** Explicit projections keep long-form guides and the rights ledger off private
 * workspaces. Pass only already-public items from getExperiences(). No saved IDs
 * or personal notes are requested from or sent to a server. */
export function toCardExperience(item: PublicExperience): CardExperience {
  const {
    id,
    slug,
    title,
    summary,
    field,
    place,
    country,
    countrySlug,
    regionSlug,
    status,
    image,
    demo,
  } = item;
  const media = status === "public_guide" ? guideMediaFor(id) : undefined;
  return {
    id,
    slug,
    title,
    summary,
    field,
    place,
    country,
    countrySlug,
    regionSlug,
    status,
    image,
    demo,
    category:
      interests.find((interest) => interest.fields.includes(field))?.name ||
      field,
    planning: cardPlanning(item),
    ...(media
      ? {
          media: { sourceUrl: media.sourceUrl, credit: imageCreditText(media) },
        }
      : {}),
  };
}
export function toPlanExperience(item: PublicExperience): PlanExperience {
  const media =
    item.status === "public_guide" ? guideMediaFor(item.id) : undefined;
  const {
    id,
    slug,
    title,
    place,
    country,
    countrySlug,
    duration,
    participation,
    guideReview,
  } = item;
  return {
    id,
    slug,
    title,
    place,
    country,
    countrySlug,
    duration,
    participation,
    ...(media
      ? {
          photo: {
            src: media.src,
            sourceUrl: media.sourceUrl,
            credit: imageCreditText(media),
          },
        }
      : {}),
    ...(guideReview
      ? {
          guideReview: {
            accessUrl: guideReview.accessUrl,
            checkedOn: guideReview.checkedOn,
          },
        }
      : {}),
  };
}
export function toPassportExperience(
  item: PublicExperience,
): PassportExperience {
  return {
    ...toCardExperience(item),
    ...toPlanExperience(item),
    shift: item.shift,
    access: item.access,
    evidence: item.evidence,
  };
}
