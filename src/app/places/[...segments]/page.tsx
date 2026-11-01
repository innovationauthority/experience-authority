import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EmptyState,
  ExperienceCard,
  PageIntro,
  Photo,
  ImageCredit,
  SectionHeading,
} from "@/components/editorial";
import { demoMode, getExperiences, getTerritories } from "@/lib/data";
import {
  pageMetadata,
  isDiscoverable,
  collectionStructuredData,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { destinationCoverage } from "@/lib/destinations";
import { DestinationBrowser } from "@/components/destination-browser";
import { cityChapters, resolveCityChapters } from "@/lib/city-chapters";
import { CityChapterSection } from "@/components/city-chapter";
import { ChapterPreview } from "@/components/chapter-preview";
import { chapterStartingPoints } from "@/lib/chapter-starting-points";
import { guideMediaFor } from "@/lib/media";
import { orderExperienceDirectory } from "@/lib/home-curation";
type Props = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ interest?: string | string[] }>;
};
export async function generateMetadata({ params }: Props) {
  const segments = (await params).segments;
  const [country, region] = segments;
  const place = getTerritories().find((t) => t.slug === country);
  const selectedRegion = place?.regions.find((entry) => entry.slug === region);
  const area = cityChapters.find(
    (chapter) =>
      chapter.country === country &&
      chapter.slug === region &&
      chapter.regions.length > 1,
  );
  if (!place || segments.length > 2 || (region && !selectedRegion && !area))
    notFound();
  const name = selectedRegion?.name || area?.name;
  return pageMetadata(
    name
      ? `${name}${name === place.name ? " local guide" : `, ${place.name}`}`
      : `${place.name} experiences`,
    name
      ? `Explore locally rooted experiences in ${name}, with categories, original guides, sources and practical details to shape your visit.`
      : place.intro,
    `/places/${segments.join("/")}`,
    !getExperiences().some(
      (item) =>
        item.countrySlug === country &&
        (!region ||
          (area
            ? area.regions.includes(item.regionSlug)
            : item.regionSlug === region)) &&
        isDiscoverable(item),
    ),
  );
}
export default async function Place({ params, searchParams }: Props) {
  const segments = (await params).segments;
  const [country, region] = segments;
  const { interest: requestedInterest } = await searchParams;
  const place = getTerritories().find((t) => t.slug === country);
  const selectedRegion = place?.regions.find((entry) => entry.slug === region);
  const area = cityChapters.find(
    (chapter) =>
      chapter.country === country &&
      chapter.slug === region &&
      chapter.regions.length > 1,
  );
  if (!place || segments.length > 2 || (region && !selectedRegion && !area))
    notFound();
  const placeName = selectedRegion?.name || area?.name || place.name;
  const orderedExperiences = orderExperienceDirectory(getExperiences());
  const {
    local: items,
    categories,
    elsewhere,
  } = destinationCoverage(orderedExperiences, country, area?.regions || region);
  const chapters = resolveCityChapters(orderedExperiences).filter(
    (chapter) =>
      chapter.country === country &&
      (!region ||
        chapter.regions.includes(region) ||
        chapter.slug === area?.slug),
  );
  const openingChapter = region ? chapters[0] : undefined;
  const starterImages = new Set(
    openingChapter
      ? chapterStartingPoints(openingChapter).map((choice) => choice.item.image)
      : [],
  );
  const openingItem =
    openingChapter?.stops.find(
      (stop) => stop.item.image && !starterImages.has(stop.item.image),
    )?.item ||
    openingChapter?.stops[0]?.item ||
    items[0];
  const openingMedia = region && openingItem && guideMediaFor(openingItem.id);
  return (
    <div className="wrap page-section destination-page">
      <StructuredData
        data={collectionStructuredData(
          `${placeName} experiences`,
          `/places/${segments.join("/")}`,
          items,
        )}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/places">Places</Link>
        <span>/</span>
        <Link href={`/places/${place.slug}`}>{place.name}</Link>
        {region && (
          <>
            <span>/</span>
            <span>{placeName}</span>
          </>
        )}
      </nav>
      <div className={openingMedia ? "destination-opening" : undefined}>
        <PageIntro
          eyebrow={
            demoMode ? "A research direction" : "A specific way into a place"
          }
          title={`${placeName}.`}
        >
          <p>
            {openingChapter
              ? openingChapter.intro
              : region
                ? `Explore ${placeName} through ${items.length === 1 ? "a locally rooted experience" : "locally rooted experiences"}, with practical details and sources to help you plan.`
                : place.intro}
          </p>
        </PageIntro>
        {openingMedia && (
          <figure className="destination-opening-photo">
            <Link
              href={`/experiences/${openingItem.slug}`}
              aria-label={`Read ${openingItem.title}`}
            >
              <Photo
                src={openingMedia.src}
                alt={openingMedia.alt}
                priority
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </Link>
            <figcaption>
              <Link href={`/experiences/${openingItem.slug}`}>
                {openingItem.title} ↗
              </Link>
            </figcaption>
            <ImageCredit media={openingMedia} />
          </figure>
        )}
      </div>
      {place.image && (
        <>
          <div className="territory-banner">
            <Photo
              src={place.image}
              alt="Illustrative stock photograph for a research direction, not evidence of a local experience."
              priority
            />
          </div>
          <p className="section-note">
            Illustrative photography. See{" "}
            <Link href="/credits" className="reset-link">
              sources and actual photo locations
            </Link>
            .
          </p>
        </>
      )}
      {!region && (
        <nav className="region-links" aria-label="Regions">
          {place.regions.map((entry) => (
            <Link key={entry.slug} href={`/places/${place.slug}/${entry.slug}`}>
              {entry.name} ↗
            </Link>
          ))}
        </nav>
      )}
      {openingChapter && <ChapterPreview chapter={openingChapter} />}
      {!openingChapter && chapters.length > 0 && (
        <nav className="chapter-jumps" aria-label="Local planning ideas">
          {chapters.map((chapter) => (
            <Link
              className="text-link"
              key={chapter.slug}
              href={`#${chapter.slug}`}
            >
              How to combine {chapter.name} experiences ↓
            </Link>
          ))}
        </nav>
      )}
      <div className="destination-browse-heading">
        <SectionHeading
          eyebrow="Closer to place"
          title={demoMode ? "Stories taking shape." : "Find your kind of day."}
        />
      </div>
      {items.length ? (
        <DestinationBrowser
          key={`${segments.join("/")}:${typeof requestedInterest === "string" ? requestedInterest : ""}`}
          items={items.map(({ slug, field }) => ({ slug, field }))}
          categories={categories}
          country={country}
          region={area ? undefined : region}
          basePath={`/places/${segments.join("/")}`}
          initialInterest={
            typeof requestedInterest === "string" &&
            categories.some((category) => category.slug === requestedInterest)
              ? requestedInterest
              : ""
          }
        >
          {items.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </DestinationBrowser>
      ) : (
        <EmptyState>
          <p>No reviewed guides are published here yet.</p>
        </EmptyState>
      )}
      {items.length > 0 && categories.length < 3 && (
        <p className="destination-coverage-note">
          Our coverage here is still growing. These are the experiences we can
          currently support with a published guide, not a complete account of
          everything the destination offers.
        </p>
      )}
      {chapters.map((chapter) => (
        <CityChapterSection key={chapter.slug} chapter={chapter} />
      ))}
      {elsewhere.length > 0 && (
        <section className="destination-elsewhere">
          <SectionHeading
            eyebrow="If your journey goes further"
            title={`Elsewhere in ${place.name}.`}
            href={`/places/${country}`}
            link={`All ${place.name} experiences`}
          />
          <p className="section-note">
            Different places, not nearby recommendations. Check the distances
            and transport before combining them in one journey.
          </p>
          <div className="experience-grid">
            {elsewhere.slice(0, 3).map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      {items.length > 0 && chapters.length === 0 && (
        <section className="place-essay" aria-labelledby="place-plan-title">
          <div>
            <p className="eyebrow">Build around one good reason</p>
            <h2 id="place-plan-title">Give {placeName} room.</h2>
            <p>
              Choose the experience that makes you want to be here, then let the
              rest of the day support it. A little space before and after can
              turn an activity into the part of a journey you remember.
            </p>
            <Link className="text-link" href="/passport?view=plan">
              Make a private plan ↗
            </Link>
          </div>
          <ol>
            <li>
              <strong>Find your anchor</strong>
              <p>
                Read what you actually do, how you take part and the time the
                guide asks for. Save the one that fits your curiosity.
              </p>
            </li>
            <li>
              <strong>Let the place set the timing</strong>
              <p>
                Use the official information in the guide to confirm the current
                date, arrival point and reservation. Leave travel time outside
                the experience itself.
              </p>
            </li>
            <li>
              <strong>Keep an unplanned hour</strong>
              <p>
                Add your own meal, stay and transport notes in Passport. Share
                the draft with your companion while there is still room to
                change it.
              </p>
            </li>
          </ol>
        </section>
      )}
    </div>
  );
}
