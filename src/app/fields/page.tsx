import Link from "next/link";
import { PageIntro, Photo, ImageCredit } from "@/components/editorial";
import { browseInterests as interests, matchesInterest } from "@/lib/catalog";
import { getExperiences } from "@/lib/data";
import { guideMediaFor } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Ways to experience a place",
  "Explore local experiences through eight interests, with practical guides and sources.",
  "/fields",
);
export default function Fields() {
  const items = getExperiences();
  const covers: Record<string, string> = {
    "eat-drink": "a-morning-at-the-hawker-table",
    "make-learn": "lift-a-pattern-from-the-water",
    "move-water": "venice-through-an-oar",
    "art-culture": "follow-a-museum-guide-beyond-cape-towns-silo-atrium",
    "design-innovation": "read-a-century-of-car-design-in-turin",
    "nature-outdoors": "follow-balis-water-before-the-rice",
    "swim-reset": "marble-steam-istanbul",
    "shared-rituals": "stay-for-the-session",
  };
  return (
    <div className="wrap page-section fields-page">
      <PageIntro eyebrow="Eight ways in" title="Follow your curiosity.">
        <p>
          Start with what you feel like doing. Find the place through the
          experience.
        </p>
      </PageIntro>
      <div className="place-card-grid">
        {interests.map((interest) => {
          const guides = items.filter((item) =>
            matchesInterest(item, interest),
          );
          if (!guides.length) return null;
          const preferred = guides.find(
            (item) => item.slug === covers[interest.slug],
          );
          const media =
            (preferred && guideMediaFor(preferred.id)) ||
            guides.map((item) => guideMediaFor(item.id)).find(Boolean);
          return (
            <article className="place-card" key={interest.slug}>
              {media && (
                <div className="place-card-image">
                  <Link
                    href={`/explore?interest=${interest.slug}`}
                    aria-label={`Explore ${interest.name}`}
                  >
                    <Photo
                      src={media.src}
                      alt={media.alt}
                      sizes="(max-width: 600px) 100vw, 33vw"
                    />
                  </Link>
                  <ImageCredit media={media} />
                </div>
              )}
              <h2>
                <Link href={`/explore?interest=${interest.slug}`}>
                  {interest.name} ↗
                </Link>
              </h2>
              <p>{interest.description}</p>
              <p>{guides.length} experiences to discover</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
