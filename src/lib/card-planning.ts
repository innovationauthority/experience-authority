import type { PublicExperience } from "./catalog";
import {
  discoveryProfiles,
  timeFits,
  participationModes,
} from "./discovery-profiles";

/** Planning lenses, never inferred booking promises or live session lengths. */
export function cardPlanning(item: PublicExperience) {
  if (item.demo || item.status !== "public_guide") return null;
  const profile = discoveryProfiles[item.slug];
  const time = timeFits.find((choice) => choice.value === profile?.time)?.label;
  const mode = participationModes.find(
    (choice) => choice.value === profile?.modes[0],
  )?.label;
  if (!time && !mode) return null;
  return { time, mode };
}
