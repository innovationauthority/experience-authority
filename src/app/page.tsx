import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ImageCredit,
  PathwayCard,
  SectionHeading,
  Photo,
} from "@/components/editorial";
import { browseInterests as interests, matchesInterest } from "@/lib/catalog";
import { HomeBrowse, type HomeBrowseGroup } from "@/components/home-browse";
import { toCardExperience } from "@/lib/catalog-projections";
import { featuredChapterSlugs } from "@/lib/chapter-starting-points";
import {
  curateHome,
  orderExperienceDirectory,
  homeHeroRotationIndex,
  resolveHomeHeroEditions,
  selectHomeHero,
} from "@/lib/home-curation";
import { guideMediaFor } from "@/lib/media";
import { publishedEditorialPathways as editorialPathways } from "@/lib/editorial-pathways";
import { getExperiences } from "@/lib/data";
import { StructuredData } from "@/components/structured-data";
import { HomeHero } from "@/components/home-hero";
import { PassportReturn } from "@/components/passport-return";
import { currentDiscovery, editionDate } from "@/lib/daily-discovery";
import {
  chapterHref,
  chapterDestinationCount,
  resolveCityChapters,
} from "@/lib/city-chapters";
import { publishedReleases } from "@/lib/releases";
import {
  selectHomeEdit,
  selectHomeDay,
  homeInterestCoverSlugs,
} from "@/lib/home-edit";
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
  const dayEdit = selectHomeDay(chapters, today);
  const dayChapter = dayEdit?.chapter;
  const dayPhotoItem = dayEdit?.photoItem;
  const dayPhoto = dayPhotoItem && guideMediaFor(dayPhotoItem.id);
  const latestRelease = publishedReleases(experiences, today)[0];
  const dayOffset =
    Math.floor(Date.parse(today) / 86400000) % featuredChapterSlugs.length;
  const dailyPlaces = [
    ...featuredChapterSlugs.slice(dayOffset),
    ...featuredChapterSlugs.slice(0, dayOffset),
  ];
  const featuredChapters = [...chapters].sort((a, b) => {
    const rank = (slug: string) => {
      const index = dailyPlaces.indexOf(slug);
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
  const coverSlugs = new Set(
    availableHeroEditions.flat().map((item) => item.slug),
  );
  for (const stop of dayChapter?.stops || []) {
    coverSlugs.add(stop.slug);
    if (stop.item.image) coverImages.add(stop.item.image);
  }
  const showDiscovery = discoveryMedia && !coverImages.has(discoveryMedia.src);
  if (showDiscovery) {
    coverImages.add(discoveryMedia.src);
    coverSlugs.add(discovery.item.slug);
  }
  let featuredChapterCount = 0;
  const featuredChapterCards = featuredChapters
    .flatMap((chapter) => {
      if (featuredChapterCount === 4) return [];
      const preferred: Record<string, string> = {
        london: "ask-the-market-where-london-came-from",
        kyoto: "build-a-pattern-in-colour",
        singapore: "look-closer-at-a-mountain-of-plants-in-singapore",
      };
      const localCover = experiences.find(
        (item) =>
          item.slug === preferred[chapter.slug] &&
          item.countrySlug === chapter.country &&
          chapter.regions.includes(item.regionSlug),
      );
      const orderedStops = [
        ...(localCover ? [{ slug: localCover.slug, item: localCover }] : []),
        ...chapter.stops,
      ];
      const stop = orderedStops.find(({ item }) =>
        Boolean(
          item.image &&
          !coverSlugs.has(item.slug) &&
          !coverImages.has(item.image) &&
          guideMediaFor(item.id),
        ),
      );
      const media = stop && guideMediaFor(stop.item.id);
      if (media) {
        coverImages.add(media.src);
        if (stop) coverSlugs.add(stop.slug);
        featuredChapterCount += 1;
      }
      return stop && media ? [{ chapter, media }] : [];
    })
    .slice(0, 4);
  const homeEdit = selectHomeEdit(experiences, today, coverSlugs, coverImages);
  const { homePathways } = curateHome(
    experiences.filter(
      (item) => !coverSlugs.has(item.slug) && !homeEdit.includes(item),
    ),
    editorialPathways,
    hero,
    today,
    [
      ...coverImages,
      ...homeEdit.flatMap((item) => (item.image ? [item.image] : [])),
    ],
  );
  const reserved = new Set([
    ...coverImages,
    ...homePathways.map(({ item }) => item.image),
  ]);
  const browsePool = [
    ...homeEdit,
    ...homeInterestCoverSlugs.flatMap((slug) => {
      const item = experiences.find((entry) => entry.slug === slug);
      return item ? [item] : [];
    }),
    ...orderExperienceDirectory(experiences, today),
  ].filter(
    (item, index, all) =>
      item.image &&
      !coverSlugs.has(item.slug) &&
      !reserved.has(item.image) &&
      all.findIndex((entry) => entry.image === item.image) === index,
  );
  const groups: HomeBrowseGroup[] = [
    {
      slug: "edit",
      name: "The EA edit",
      href: "/explore",
      items: homeEdit.slice(0, 6).map(toCardExperience),
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
  return (
    <div className="home-edition">
      <StructuredData data={websiteStructuredData()} />
      <HomeHero
        items={experiences}
        heroEditions={availableHeroEditions}
        initialHeroIndex={initialHeroIndex}
      />
      {groups.length > 0 && (
        <section
          className="section wrap home-experience-discovery"
          id="find-experiences"
        >
          <SectionHeading
            eyebrow="Find your way in"
            title="What would you like to do?"
            href="/explore"
            link="All experiences"
          />
          <HomeBrowse groups={groups} latestDate={latestRelease?.date} />
        </section>
      )}
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
            <p>
              {discovery.angle
                .split(/(?<=[.!?])\s+/)
                .slice(0, 2)
                .join(" ")}
            </p>
            <span className="home-daily-place">
              {discovery.item.place}, {discovery.item.country}
            </span>
            <Link className="text-link" href="/today">
              Read the discovery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
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
            Familiar cities. Less expected ways to spend your time there.
          </p>
          <div className="home-destination-grid">
            {featuredChapterCards.map(({ chapter, media }) => {
              const href = chapterHref(chapter).split("#")[0];
              return (
                <article className="home-destination-card" key={chapter.slug}>
                  <div className="home-destination-visual">
                    <Link
                      className="home-destination-photo"
                      href={href}
                      aria-label={`Explore ${chapter.name}`}
                    >
                      <Photo
                        src={media.src}
                        alt=""
                        sizes="(max-width: 700px) 46vw, (max-width: 1100px) 50vw, 25vw"
                      />
                    </Link>
                  </div>
                  <div className="home-destination-credit">
                    <ImageCredit media={media} />
                  </div>
                  <div className="home-destination-copy">
                    <span className="eyebrow">
                      {chapterDestinationCount(chapter, experiences)}{" "}
                      experiences
                    </span>
                    <h3>
                      <Link href={href}>{chapter.name}</Link>
                    </h3>

                    <Link className="home-destination-cta" href={href}>
                      Explore the place
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
      {dayEdit && dayChapter && (
        <section
          className="section wrap home-day-plan"
          aria-labelledby="home-day-title"
        >
          {dayPhoto && dayPhotoItem && (
            <div className="home-day-photo">
              <Link
                href={`/experiences/${dayPhotoItem.slug}`}
                aria-label={`Explore ${dayPhotoItem.title}`}
              >
                <Photo
                  src={dayPhoto.src}
                  alt={dayPhoto.alt}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </Link>
              <ImageCredit media={dayPhoto} />
            </div>
          )}
          <div className="home-day-intro">
            <p className="eyebrow">Make it a day / {dayChapter.name}</p>
            <h2 id="home-day-title">{dayEdit.title}</h2>
            <p>{dayChapter.intro}</p>
            <Link
              className="button button-dark"
              href={`/plan?chapter=${dayChapter.slug}`}
            >
              See the day & make it yours{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ol className="home-day-stops">
            {dayChapter.stops.map((stop, index) => (
              <li key={stop.slug}>
                <Link href={`/experiences/${stop.slug}`}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {dayEdit.labels[index]}{" "}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
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
                showNumber={false}
              />
            ))}
          </div>
        </section>
      )}
      <section className="section wrap home-keep">
        <PassportReturn />
        <p className="home-method-note">
          Independent public-source guides. Practical access notes and linked
          sources in every guide. <Link href="/method">Our method →</Link>
        </p>
      </section>
    </div>
  );
}
