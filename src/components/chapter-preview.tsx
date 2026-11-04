import Link from "next/link";
import type { resolveCityChapters } from "@/lib/city-chapters";
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
          <h2 id={`start-${chapter.slug}`}>A day in {chapter.name}.</h2>
          <p>{chapter.pace}</p>
        </div>
        <Link
          className="button button-dark"
          href={`/plan?chapter=${chapter.slug}`}
        >
          Build your version ↗
        </Link>
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
