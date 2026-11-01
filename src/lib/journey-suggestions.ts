import type { PlanExperience } from "./catalog-projections";
import type { Trip } from "./trip";
/** Local scope is explicit. A country match alone never becomes a nearby recommendation. */
export function journeySuggestions(
  trip: Trip,
  items: PlanExperience[],
  day: number,
) {
  const selected = trip.entries
    .filter((entry) => entry.day === day)
    .flatMap((entry) => items.find((item) => item.id === entry.id) || []);
  const anchor = selected.at(-1);
  if (!anchor?.regionSlug)
    return { anchor, suggestions: [] as PlanExperience[] };
  const used = new Set(trip.entries.map((entry) => entry.id));
  const categories = new Set(selected.map((item) => item.category));
  const pool = items.filter(
    (item) =>
      !used.has(item.id) &&
      item.photo &&
      item.countrySlug === anchor.countrySlug &&
      item.regionSlug === anchor.regionSlug,
  );
  pool.sort(
    (a, b) =>
      Number(categories.has(a.category)) - Number(categories.has(b.category)),
  );
  const suggestions: PlanExperience[] = [];
  const seen = new Set<string>();
  for (const item of pool) {
    if (seen.has(item.category || "")) continue;
    suggestions.push(item);
    seen.add(item.category || "");
    if (suggestions.length === 3) break;
  }
  return { anchor, suggestions };
}
export function journeyDayWarnings(
  trip: Trip,
  items: PlanExperience[],
  day: number,
) {
  const selected = trip.entries
    .filter((entry) => entry.day === day)
    .flatMap((entry) => items.find((item) => item.id === entry.id) || []);
  const warnings: string[] = [];
  const areas = new Set(
    selected
      .filter((item) => item.regionSlug)
      .map((item) => `${item.countrySlug}/${item.regionSlug}`),
  );
  const countries = new Set(selected.map((item) => item.countrySlug));
  if (countries.size > 1)
    warnings.push(
      "These ideas cross a country or territory boundary. Check the journey and consider a separate travel day.",
    );
  else if (areas.size > 1)
    warnings.push(
      "These stops are in different cities or areas. Check transfers before committing to the same day.",
    );
  if (selected.length > 3)
    warnings.push(
      "Four or more experiences leave less room for meals, queues and travel. Consider moving an anchor to another day.",
    );
  const substantial = selected.filter((item) =>
    ["A morning or afternoon", "Most of the day", "Stay the night"].includes(
      item.planning?.time || "",
    ),
  );
  if (substantial.length > 1)
    warnings.push(
      "More than one substantial visit shares this day. Check actual durations and opening times before booking.",
    );
  return warnings;
}
