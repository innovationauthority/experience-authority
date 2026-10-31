import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { statusLabels, type PublicExperience } from "@/lib/catalog";
import type { ImageCreditData } from "@/lib/catalog-projections";
import { imageSource } from "@/lib/image-revisions";
import { imageCreditText } from "@/lib/image-credit";

export function StatusBadge({
  status,
  demo = false,
}: {
  status: PublicExperience["status"];
  demo?: boolean;
}) {
  return (
    <span className={`status-badge status-${status}`}>
      {statusLabels[status]}
      {demo && <span className="status-demo"> · demo</span>}
    </span>
  );
}
/** Original typographic artwork, deliberately not documentary imagery. */
export function GuideArt({
  item,
}: {
  item: Pick<PublicExperience, "field" | "place" | "country">;
}) {
  return (
    <div className={`guide-art guide-art-${item.field}`} aria-hidden="true">
      <span className="guide-art-kicker">EA / FIELD NOTES</span>
      <span className="guide-art-place">
        {item.place}
        <span className="orange-period">.</span>
      </span>
      <span className="guide-art-mark" />
      <span className="guide-art-foot">
        <span>{item.field}</span>
        <span>{item.country}</span>
      </span>
    </div>
  );
}
export function Photo({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={imageSource(src)}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`editorial-photo ${className}`}
    />
  );
}

export function ImageCredit({
  media,
  className = "image-source-badge",
}: {
  media: ImageCreditData | { photographer: string; sourceUrl: string };
  className?: string;
}) {
  const credit = "credit" in media ? media.credit : imageCreditText(media);
  return (
    <a
      className={className}
      href={media.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Image: {credit}</span>
      <ArrowUpRight size={11} aria-hidden="true" />
      <span className="sr-only"> (opens source in a new tab)</span>
    </a>
  );
}

export function EmptyState({
  title = "Nothing here just yet.",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="empty-state">
      <MoveUpRight size={34} strokeWidth={1.2} />
      <h2>{title}</h2>
      {children}
    </div>
  );
}
