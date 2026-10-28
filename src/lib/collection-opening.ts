import type { PublicExperience } from "./catalog";
import type { EditorialPathway } from "./editorial-pathways";

const coverChoices: Record<string, readonly string[]> = {
  "timed-by-place": [
    "the-tide-brings-the-horses",
    "when-the-sky-moves-as-one",
    "walk-where-the-sea-was",
  ],
};

/** Keep the authored membership, but give a large collection a smaller, geographically varied way in. */
export function collectionOpening(
  pathway: EditorialPathway,
  items: PublicExperience[],
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const orderedSlugs = [
    ...new Set([...(coverChoices[pathway.slug] ?? []), ...pathway.guideSlugs]),
  ];
  const guides = orderedSlugs.flatMap((slug) => {
    const item = bySlug.get(slug);
    return item && item.image && pathway.guideSlugs.includes(slug)
      ? [item]
      : [];
  });
  const opening: PublicExperience[] = [];
  const countries = new Set<string>();
  for (const item of guides) {
    if (countries.has(item.countrySlug)) continue;
    countries.add(item.countrySlug);
    opening.push(item);
    if (opening.length === 6) break;
  }
  for (const item of guides) {
    if (opening.length === 6) break;
    if (!opening.includes(item)) opening.push(item);
  }
  return {
    opening,
    remaining: guides.filter((item) => !opening.includes(item)),
    guides,
  };
}
