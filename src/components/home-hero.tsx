import { HomeDiscovery } from "./home-discovery";
import { HomeHeroMosaic, type HomeHeroStory } from "./home-hero-mosaic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  browseInterests as interests,
  matchesInterest,
  type PublicExperience,
} from "@/lib/catalog";
import { guideMediaFor, imageCreditText } from "@/lib/media";
import { heroLeadPositions } from "@/lib/home-curation";

export function HomeHero({
  items,
  heroEditions,
  initialHeroIndex,
}: {
  items: PublicExperience[];
  heroEditions: PublicExperience[][];
  initialHeroIndex: number;
}) {
  const mosaicEditions = heroEditions.flatMap((edition) => {
    const stories = edition.flatMap((item) => {
      const media = guideMediaFor(item.id);
      if (!item.image || !media) return [];
      return [
        {
          slug: item.slug,
          title: item.title,
          place: item.place,
          field:
            interests.find((interest) => matchesInterest(item, interest))
              ?.name || item.field,
          image: item.image,
          imageAlt: item.imageAlt,
          sourceUrl: media.sourceUrl,
          credit: imageCreditText(media),
          leadPosition: heroLeadPositions[item.slug],
        } satisfies HomeHeroStory,
      ];
    });
    return stories.length === 3 ? [stories] : [];
  });
  return (
    <>
      <section className="prototype-hero" aria-labelledby="home-title">
        <div className="prototype-hero-copy">
          <p className="eyebrow">Places. People. Ways in.</p>
          <h1 id="home-title">
            <span className="home-title-line">Experience</span>{" "}
            <span className="home-title-line">the world</span>{" "}
            <em>from within.</em>
          </h1>
          <p className="prototype-hero-lead">
            Food, art and unexpected ways into a place. Chosen with care, ready
            to explore.
          </p>
          <HomeDiscovery
            items={items.map(
              ({
                slug,
                title,
                place,
                country,
                field,
                summary,
                countrySlug,
                regionSlug,
              }) => ({
                slug,
                title,
                place,
                country,
                field,
                summary,
                countrySlug,
                regionSlug,
              }),
            )}
          />
        </div>
        <HomeHeroMosaic
          editions={mosaicEditions}
          initialIndex={initialHeroIndex}
        />
      </section>
      <nav
        className="home-cover-links"
        aria-label="Continue from the Experience Authority cover"
      >
        {[
          ["Sources in every guide", "/method"],
          ["Plan a journey", "/plan"],
          ["Daily discovery", "/today"],
        ].map(([title, href]) => (
          <Link href={href} key={title}>
            <span>{title}</span>
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        ))}
      </nav>
    </>
  );
}
