import Link from "next/link";
import { ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import type { CardExperience } from "@/lib/catalog-projections";
import { GuideArt, Photo, ImageCredit, StatusBadge } from "./editorial-ui";
import { ExperienceActions } from "./passport-provider";

export function ExperienceCardView({
  item,
  index = 0,
  returnTo,
  compact = false,
}: {
  item: CardExperience;
  index?: number;
  returnTo?: string;
  compact?: boolean;
}) {
  const { media, planning } = item;
  const href =
    `/experiences/${item.slug}` +
    (returnTo ? `?from=${encodeURIComponent(returnTo)}` : "");

  return (
    <article
      className={`experience-card${compact ? " experience-card-compact" : ""}`}
    >
      <div className={`card-image ${!item.image ? "card-no-image" : ""}`}>
        <Link
          className="card-photo-link"
          href={href}
          aria-label={`Explore ${item.title}`}
        >
          {item.image ? (
            <Photo
              src={item.image}
              alt=""
              className={`photo-${item.id}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
          ) : item.status === "public_guide" ? (
            <GuideArt item={item} />
          ) : (
            <span className="protected-art">
              {item.status === "protected_visibility" ? (
                <LockKeyhole size={36} strokeWidth={1} />
              ) : (
                <span className="art-slash" />
              )}
              <span>
                {item.status === "protected_visibility"
                  ? "A boundary worth respecting."
                  : "A story taking shape."}
              </span>
            </span>
          )}
        </Link>
        {media && <ImageCredit media={media} />}
        {item.demo && <span className="image-demo">Illustrative · demo</span>}
        <ExperienceActions item={item} compact />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{item.category}</span>
          <span>
            {item.place}
            {item.countrySlug && `, ${item.country}`}
          </span>
        </div>
        <h3>
          <Link href={href}>
            {item.title}
            {compact ? (
              <ArrowRight size={21} aria-hidden="true" />
            ) : (
              <ArrowUpRight size={21} aria-hidden="true" />
            )}
          </Link>
        </h3>
        <p>{compact ? item.summary.split(/(?<=[.!?])\s/)[0] : item.summary}</p>
        {planning ? (
          <dl className="card-planning" aria-label="Plan your visit">
            {planning.time && (
              <div>
                <dt className={compact ? "sr-only" : undefined}>
                  Time to allow
                </dt>
                <dd>{planning.time}</dd>
              </div>
            )}
            {!compact && planning.mode && (
              <div>
                <dt>Your experience</dt>
                <dd>{planning.mode}</dd>
              </div>
            )}
          </dl>
        ) : (
          <div className="card-bottom">
            <StatusBadge status={item.status} demo={item.demo} />
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
