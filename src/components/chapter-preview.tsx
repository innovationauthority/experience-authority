import Link from "next/link";
import type { resolveCityChapters } from "@/lib/city-chapters";
import { chapterStartingPoints } from "@/lib/chapter-starting-points";
import { guideMediaFor } from "@/lib/media";
import { ImageCredit, Photo } from "./editorial";

export function ChapterPreview({
  chapter,
}: {
  chapter: ReturnType<typeof resolveCityChapters>[number];
}) {
  return (
    <section
      className="chapter-preview"
      aria-labelledby={`start-${chapter.slug}`}
    >
      <div className="chapter-preview-heading">
        <div>
          <p className="eyebrow">Start with these / {chapter.name}</p>
          <h2 id={`start-${chapter.slug}`}>A few good reasons to be here.</h2>
          <p>{chapter.pace}</p>
        </div>
        <Link
          className="button button-dark"
          href={`/plan?chapter=${chapter.slug}`}
        >
          Build your version ↗
        </Link>
      </div>
      <div className="chapter-preview-grid">
        {chapterStartingPoints(chapter).map(({ item, role, note }) => {
          const media = guideMediaFor(item.id);
          return (
            <article key={item.id}>
              {media && (
                <div className="chapter-preview-photo">
                  <Link
                    href={`/experiences/${item.slug}`}
                    aria-label={`Read ${item.title}`}
                  >
                    <Photo
                      src={media.src}
                      alt=""
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </Link>
                  <ImageCredit media={media} />
                </div>
              )}
              <div className="chapter-preview-copy">
                <p className="eyebrow">{role}</p>
                <h3>
                  <Link href={`/experiences/${item.slug}`}>{item.title} ↗</Link>
                </h3>
                <p>{note}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="chapter-preview-links">
        <Link className="text-link" href="#local-guides">
          All experiences here ↓
        </Link>
        <a className="text-link" href={`#${chapter.slug}`}>
          Read the full planning idea ↓
        </a>
      </div>
    </section>
  );
}
