import Link from "next/link";
import { TripPlanner } from "@/components/trip-planner";
import { getExperiences } from "@/lib/data";
import { resolveCityChapters } from "@/lib/city-chapters";
import { pageMetadata } from "@/lib/seo";
import { Photo, ImageCredit } from "@/components/editorial";
import { guideMediaFor } from "@/lib/media";
import { regionDisplayName } from "@/lib/catalog";
import { toPlanExperience } from "@/lib/catalog-projections";
import {
  chapterStartingPoints,
  featuredChapterSlugs,
} from "@/lib/chapter-starting-points";

export const metadata = pageMetadata(
  "Plan a journey",
  "Arrange saved experiences by day, keep practical notes and share your private journey draft.",
  "/plan",
);

export default async function PlanPage({
  searchParams,
}: {
  searchParams: Promise<{
    add?: string | string[];
    chapter?: string | string[];
  }>;
}) {
  const items = getExperiences();
  const { add, chapter: chapterSlug } = await searchParams;
  const suggestedItemId =
    typeof add === "string" && items.some((item) => item.id === add)
      ? add
      : undefined;
  const allChapters = resolveCityChapters(items);
  const selectedChapter =
    typeof chapterSlug === "string"
      ? allChapters.find((entry) => entry.slug === chapterSlug)
      : undefined;
  const chapters = featuredChapterSlugs.flatMap(
    (slug) => allChapters.find((entry) => entry.slug === slug) || [],
  );
  const proposal = selectedChapter && {
    slug: selectedChapter.slug,
    name: selectedChapter.name,
    pace: selectedChapter.pace,
    choices: selectedChapter.stops.map((stop) => {
      const starter = chapterStartingPoints(selectedChapter).find(
        (choice) => choice.slug === stop.slug,
      );
      return {
        id: stop.item.id,
        role: starter?.role || stop.moment,
        note: starter?.note || stop.why,
      };
    }),
  };
  const startingPlaces = [
    "ask-the-market-where-london-came-from",
    "a-bowl-of-attention",
    "taste-what-time-does-to-port",
  ].flatMap((slug) => {
    const item = items.find((guide) => guide.slug === slug);
    const media = item && guideMediaFor(item.id);
    return item && media ? [{ item, media }] : [];
  });
  return (
    <div className="wrap page-section plan-workspace">
      <div className="plan-workspace-heading">
        <div>
          <p className="eyebrow">Your EA journey</p>
          <h1>Make it a plan.</h1>
        </div>
        <Link className="text-link" href="/passport">
          Your saved experiences ↗
        </Link>
      </div>
      <TripPlanner
        items={items.map(toPlanExperience)}
        suggestedItemId={suggestedItemId}
        proposal={proposal || undefined}
        startingPlaces={
          <div className="journey-place-grid">
            {startingPlaces.map(({ item, media }) => {
              const name = regionDisplayName(
                item.countrySlug,
                item.regionSlug,
                item.place,
              );
              const chapter = allChapters.find((entry) =>
                entry.stops.some((stop) => stop.item.id === item.id),
              );
              const href = chapter
                ? `/plan?chapter=${chapter.slug}`
                : `/places/${item.countrySlug}/${item.regionSlug}`;
              return (
                <article className="journey-place-card" key={item.id}>
                  <div className="journey-place-photo">
                    <Link href={href} aria-label={`Explore ${name}`}>
                      <Photo
                        src={media.src}
                        alt={media.alt}
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    </Link>
                    <ImageCredit media={media} />
                  </div>
                  <div className="journey-place-copy">
                    <p className="eyebrow">{item.country}</p>
                    <h3>
                      <Link href={href}>{chapter?.name || name} ↗</Link>
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        }
      />
      <section className="plan-local-ideas">
        <h2>Still choosing a place?</h2>
        <p>
          Choose a local starting point, pick your experiences and give each a
          day.
        </p>
        <div className="plan-destination-links">
          {chapters.map((chapter) => (
            <Link href={`/plan?chapter=${chapter.slug}`} key={chapter.slug}>
              {chapter.name} ↗
            </Link>
          ))}
          <Link href="/places">All destinations ↗</Link>
        </div>
      </section>
    </div>
  );
}
