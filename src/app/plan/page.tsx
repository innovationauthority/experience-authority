import Link from "next/link";
import { TripPlanner } from "@/components/trip-planner";
import { getExperiences } from "@/lib/data";
import { chapterHref, resolveCityChapters } from "@/lib/city-chapters";
import { pageMetadata } from "@/lib/seo";
import { Photo, ImageCredit } from "@/components/editorial";
import { guideMediaFor } from "@/lib/media";
import { regionDisplayName } from "@/lib/catalog";

export const metadata = pageMetadata(
  "Plan a journey",
  "Arrange saved experiences by day, keep practical notes and share your private journey draft.",
  "/plan",
);

export default function PlanPage() {
  const items = getExperiences();
  const chapters = resolveCityChapters(items).slice(0, 4);
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
        items={items}
        startingPlaces={
          <div className="journey-place-grid">
            {startingPlaces.map(({ item, media }) => {
              const name = regionDisplayName(
                item.countrySlug,
                item.regionSlug,
                item.place,
              );
              const href = `/places/${item.countrySlug}/${item.regionSlug}`;
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
                      <Link href={href}>{name} ↗</Link>
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
          Start with a local combination, save what interests you, then arrange
          your days here.
        </p>
        <div className="plan-destination-links">
          {chapters.map((chapter) => (
            <Link href={chapterHref(chapter).split("#")[0]} key={chapter.slug}>
              {chapter.name} ↗
            </Link>
          ))}
          <Link href="/places">All destinations ↗</Link>
        </div>
      </section>
    </div>
  );
}
