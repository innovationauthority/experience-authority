import {
  browseInterests as interests,
  matchesInterest,
  type PublicExperience,
} from "./catalog";

/** Geographic scope is exact. A shared country is never treated as "nearby". */
export function destinationCoverage(
  items: PublicExperience[],
  country: string,
  region?: string | readonly string[],
) {
  const inRegion = (slug: string) =>
    !region ||
    (typeof region === "string" ? slug === region : region.includes(slug));
  const local = items.filter(
    (item) => item.countrySlug === country && inRegion(item.regionSlug),
  );
  const categories = interests.flatMap((interest) => {
    const count = local.filter((item) =>
      matchesInterest(item, interest),
    ).length;
    return count ? [{ slug: interest.slug, name: interest.name, count }] : [];
  });
  const elsewhere = region
    ? items.filter(
        (item) => item.countrySlug === country && !inRegion(item.regionSlug),
      )
    : [];
  return { local, categories, elsewhere };
}
