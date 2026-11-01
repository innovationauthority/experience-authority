import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ImageCredit,
  PathwayCard,
  SectionHeading,
  Photo,
} from "@/components/editorial";
import { interests, matchesInterest } from "@/lib/catalog";
import { HomeBrowse, type HomeBrowseGroup } from "@/components/home-browse";
import { toCardExperience } from "@/lib/catalog-projections";
import { featuredChapterSlugs } from "@/lib/chapter-starting-points";
import {
  curateHome,
  homeHeroRotationIndex,
  resolveHomeHeroEditions,
  selectHomeHero,
} from "@/lib/home-curation";
import { getJournalArticles } from "@/lib/journal";
import { guideMediaFor } from "@/lib/media";
import { editorialPathways } from "@/lib/editorial-pathways";
import { getExperiences } from "@/lib/data";
import { StructuredData } from "@/components/structured-data";
import { HomeHero } from "@/components/home-hero";
import { LocalDiscovery } from "@/components/local-discovery";
import { localAreas } from "@/lib/local-discovery";
import { PassportReturn } from "@/components/passport-return";
import { currentDiscovery, editionDate } from "@/lib/daily-discovery";
import {
  chapterHref,
  chapterDestinationCount,
  resolveCityChapters,
} from "@/lib/city-chapters";
import { publishedReleases, recentGuideReleases } from "@/lib/releases";
import { withinPublicationWeek } from "@/lib/discovery-choices";
import {
  pageMetadata,
  SITE_DESCRIPTION,
  websiteStructuredData,
} from "@/lib/seo";

export const metadata = {
  ...pageMetadata(
    "Experience Authority | Experience the world from within.",
    SITE_DESCRIPTION,
    "/",
  ),
  title: {
    absolute: "Experience Authority | Experience the world from within.",
  },
};

export default function Home() {
  const experiences = getExperiences();
  const discovery = currentDiscovery(experiences);
  const discoveryMedia = discovery && guideMediaFor(discovery.item.id);
  const chapters = resolveCityChapters(experiences);
  const today = new Date().toISOString().slice(0, 10);
  const weekCount = publishedReleases(experiences, today)
    .filter((release) => withinPublicationWeek(release.date, today))
    .reduce((sum, release) => sum + release.guides.length, 0);
  const featuredChapters = [...chapters].sort((a, b) => {
    const rank = (slug: string) => {
      const index = featuredChapterSlugs.indexOf(slug);
      return index < 0 ? featuredChapterSlugs.length : index;
    };
    return rank(a.slug) - rank(b.slug);
  });
  const initialHeroIndex = homeHeroRotationIndex();
  const editions = resolveHomeHeroEditions(experiences).filter(
    (edition) => !edition.some((item) => item.image === discoveryMedia?.src),
  );
  const availableHeroEditions = editions.length
    ? editions
    : [
        selectHomeHero(
          experiences.filter((item) => item.image !== discoveryMedia?.src),
        ),
      ];
  const hero =
    availableHeroEditions[initialHeroIndex % availableHeroEditions.length];
  const coverImages = new Set<string>(
    availableHeroEditions
      .flat()
      .flatMap((item) => (item.image ? [item.image] : [])),
  );
  const showDiscovery = discoveryMedia && !coverImages.has(discoveryMedia.src);
  if (showDiscovery) coverImages.add(discoveryMedia.src);
  let featuredChapterCount = 0;
  const featuredChapterCards = featuredChapters
    .flatMap((chapter) => {
      if (featuredChapterCount === 4) return [];
      const preferred =
        chapter.slug === "london"
          ? "ask-the-market-where-london-came-from"
          : undefined;
      const orderedStops = [...chapter.stops].sort(
        (a, b) => Number(b.slug === preferred) - Number(a.slug === preferred),
      );
      const stop = orderedStops.find(({ item }) =>
        Boolean(
          item.image && !coverImages.has(item.image) && guideMediaFor(item.id),
        ),
      );
      const media = stop && guideMediaFor(stop.item.id);
      if (media) {
        coverImages.add(media.src);
        featuredChapterCount += 1;
      }
      return stop && media ? [{ chapter, media }] : [];
    })
    .slice(0, 4);
  const { newGuides, homePathways, usedImages } = curateHome(
    experiences,
    editorialPathways,
    hero,
    today,
    [...coverImages],
  );
  const reserved = new Set([
    ...coverImages,
    ...homePathways.map(({ item }) => item.image),
  ]);
  const browsePool = [
    ...newGuides,
    ...recentGuideReleases(experiences, today),
    ...experiences,
  ].filter(
    (item, index, all) =>
      item.image &&
      !reserved.has(item.image) &&
      all.findIndex((entry) => entry.image === item.image) === index,
  );
  const groups: HomeBrowseGroup[] = [
    {
      slug: "new",
      name: "New in EA",
      href: "/new",
      items: newGuides.map(toCardExperience),
    },
    ...interests.map((interest) => ({
      slug: interest.slug,
      name: interest.name,
      href: `/explore?interest=${interest.slug}`,
      items: browsePool
        .filter((item) => matchesInterest(item, interest))
        .slice(0, 9)
        .map(toCardExperience),
    })),
  ].filter((group) => group.items.length > 0);
  for (const group of groups)
    for (const item of group.items) if (item.image) usedImages.add(item.image);
  const journal = getJournalArticles(experiences).flatMap((article) => {
    const guide = article.guides.find(
      (item) => item.image && !usedImages.has(item.image),
    );
    const media = guide && guideMediaFor(guide.id);
    return media ? [{ article, media }] : [];
  })[0];
  return (
    <div className="home-edition">
      <StructuredData data={websiteStructuredData()} />
      <HomeHero
        items={experiences}
        heroEditions={availableHeroEditions}
        initialHeroIndex={initialHeroIndex}
      />
      {discovery && showDiscovery && (
        <section
          className="wrap home-daily-feature"
          aria-labelledby="home-daily-title"
        >
          <div className="home-daily-photo">
            <Link href="/today" aria-label={`Read ${discovery.title}`}>
              <Photo
                src={discoveryMedia.src}
                alt={discoveryMedia.alt}
                sizes="(max-width: 700px) 100vw, 55vw"
              />
            </Link>
            <ImageCredit media={discoveryMedia} />
          </div>
          <div className="home-daily-copy">
            <p className="eyebrow">
              {discovery.date === today
                ? "Today's discovery"
                : "Latest discovery"}
              {" / "}
              <time dateTime={discovery.date}>
                {editionDate(discovery.date)}
              </time>
            </p>
            <h2 id="home-daily-title">
              <Link href="/today">{discovery.title}</Link>
            </h2>
            <p>{discovery.item.summary}</p>
            <span className="home-daily-place">
              {discovery.item.place}, {discovery.item.country}
            </span>
            <Link className="text-link" href="/today">
              Read the discovery <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}
      {groups.length > 0 && (
        <section className="section wrap home-experience-discovery">
          <SectionHeading
            eyebrow={
              weekCount
                ? `${weekCount} new guides in the past 7 days`
                : "Choose a curiosity"
            }
            title="Find your kind of experience."
            href="/explore"
            link="All experiences"
          />
          <HomeBrowse groups={groups} />
        </section>
      )}
      {featuredChapterCards.length > 0 && (
        <section className="section wrap home-destinations">
          <SectionHeading
            eyebrow="Start with a place"
            title="Make a place your own."
            href="/places"
            link="All destinations"
          />
          <p className="section-note">
            Somewhere you’re visiting. Somewhere you live. Start with a place,
            then discover what you could do differently.
          </p>
          <div className="home-destination-grid">
            {featuredChapterCards.map(({ chapter, media }) => {
              const href = chapterHref(chapter).split("#")[0];
              return (
                <article className="home-destination-card" key={chapter.slug}>
                  <Link
                    className="home-destination-photo"
                    href={href}
                    aria-label={`Explore ${chapter.name}`}
                  >
                    <Photo
                      src={media.src}
                      alt=""
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    />
                  </Link>
                  <div className="home-destination-copy">
                    <span className="eyebrow">
                      {chapterDestinationCount(chapter, experiences)}{" "}
                      experiences
                    </span>
                    <h3>
                      <Link href={href}>{chapter.name}</Link>
                    </h3>
                    <p className="home-destination-angle">{chapter.title}</p>
                    <Link className="home-destination-cta" href={href}>
                      Explore the place
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                  <ImageCredit media={media} />
                </article>
              );
            })}
          </div>
          <details className="home-local-disclosure">
            <summary>
              Already have a place in mind? Find something for the time you
              have.
            </summary>
            <LocalDiscovery areas={localAreas(experiences)} />
          </details>
        </section>
      )}
      {homePathways.length > 0 && (
        <section className="section wrap home-collections">
          <SectionHeading
            eyebrow="EA collections"
            title="Follow what interests you."
            href="/collections"
            link="All collections"
          />
          <div className="collection-grid">
            {homePathways.map(({ pathway, item }, index) => (
              <PathwayCard
                key={pathway.slug}
                pathway={{
                  ...pathway,
                  guideSlugs: pathway.guideSlugs.filter((slug) =>
                    experiences.some((guide) => guide.slug === slug),
                  ),
                }}
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
      {journal && (
        <section className="section wrap">
          <article className="home-journal-feature">
            <div className="place-card-image">
              <Link
                href={`/journal/${journal.article.slug}`}
                aria-label={`Read ${journal.article.title}`}
              >
                <Photo
                  src={journal.media.src}
                  alt={journal.media.alt}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </Link>
              <ImageCredit media={journal.media} />
            </div>
            <div>
              <p className="eyebrow">
                From the Journal / {journal.article.readingMinutes} min read
              </p>
              <h2>
                <Link href={`/journal/${journal.article.slug}`}>
                  {journal.article.title}
                </Link>
              </h2>
              <p>{journal.article.summary}</p>
              <Link
                className="text-link"
                href={`/journal/${journal.article.slug}`}
              >
                Read the story <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>
      )}
      <section className="section wrap home-keep">
        <PassportReturn />
        <p className="home-method-note">
          Independent public-source guides. Practical access notes and linked
          sources in every guide. <Link href="/method">Our method ↗</Link>
        </p>
      </section>
    </div>
  );
}
