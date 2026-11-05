import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PublicExperience } from "@/lib/catalog";
import { guideMediaFor, imageCreditText, type GuideMedia } from "@/lib/media";
import type { EditorialPathway } from "@/lib/editorial-pathways";
import { toCardExperience } from "@/lib/catalog-projections";
import { ExperienceCardView } from "./experience-card";
import { GuideArt, Photo, ImageCredit as Credit } from "./editorial-ui";
export { GuideArt, Photo, EmptyState, StatusBadge } from "./editorial-ui";

export function ImageCredit({
  media,
  className,
}: {
  media: GuideMedia;
  className?: string;
}) {
  return (
    <Credit
      media={{ sourceUrl: media.sourceUrl, credit: imageCreditText(media) }}
      className={className}
    />
  );
}
export function ExperienceCard({
  item,
  index = 0,
}: {
  item: PublicExperience;
  index?: number;
}) {
  return <ExperienceCardView item={toCardExperience(item)} index={index} />;
}
export function PathwayCard({
  pathway,
  item,
  index,
  showNumber = true,
}: {
  pathway: EditorialPathway;
  item: PublicExperience;
  index: number;
  showNumber?: boolean;
}) {
  const media = guideMediaFor(item.id);
  return (
    <article className="collection-card pathway-card">
      <div className="collection-image">
        <Link
          className="card-photo-link"
          href={`/collections/${pathway.slug}`}
          aria-label={`Open ${pathway.title}`}
        >
          {item.image ? (
            <Photo
              src={item.image}
              alt={item.imageAlt}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ) : (
            <GuideArt item={item} />
          )}
        </Link>
        {showNumber && (
          <span>Pathway {String(index + 1).padStart(2, "0")}</span>
        )}
        {media && <ImageCredit media={media} />}
      </div>
      <div className="collection-card-copy">
        <h3>
          <Link href={`/collections/${pathway.slug}`}>
            {pathway.title}
            <ArrowRight size={22} aria-hidden="true" />
          </Link>
        </h3>
        <p>{pathway.promise}</p>
        <small>{pathway.guideSlugs.length} connected guides</small>
      </div>
    </article>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  href,
  link = "Explore all",
}: {
  eyebrow: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link} <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </div>
  );
}
