import { regionsForCountry, type PublicExperience } from "./catalog";
import { discoveryProfiles } from "./discovery-profiles";

export const localTimeChoices = [
  { value: "short", label: "A short visit" },
  { value: "half-day", label: "A morning or afternoon" },
  { value: "own-pace", label: "At your own pace" },
] as const;

export type LocalArea = {
  key: string;
  label: string;
  country: string;
  region: string;
  count: number;
  times: Record<string, number>;
};

/** Receives only publication-eligible guides. No location tracking or live availability claim. */
export function localAreas(items: PublicExperience[]): LocalArea[] {
  const countries = [...new Set(items.map((item) => item.countrySlug))];
  return countries
    .flatMap((country) => {
      const countryName = items.find(
        (item) => item.countrySlug === country,
      )!.country;
      return regionsForCountry(country, items).map((region) => {
        const guides = items.filter(
          (item) =>
            item.countrySlug === country && item.regionSlug === region.slug,
        );
        return {
          key: `${country}/${region.slug}`,
          label: `${region.name}, ${countryName}`,
          country,
          region: region.slug,
          count: guides.length,
          times: Object.fromEntries(
            localTimeChoices.map(({ value }) => [
              value,
              guides.filter(
                (item) => discoveryProfiles[item.slug]?.time === value,
              ).length,
            ]),
          ),
        };
      });
    })
    .sort((a, b) => a.label.localeCompare(b.label, "en"));
}
