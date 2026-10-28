import { PageIntro, PathwayCard } from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import { editorialPathways } from "@/lib/editorial-pathways";
import { pageMetadata } from "@/lib/seo";
import { collectionOpening } from "@/lib/collection-opening";
export const metadata = pageMetadata(
  "Collections",
  "Follow a thread between experiences. Editorial connections, not rankings or paid placements.",
  "/collections",
);
export default function Collections() {
  const items = getExperiences();
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Connections, not checklists" title="Follow a thread.">
        <p>
          Curated pathways that connect places through a question, a way of
          moving or the kind of day you want. Editorial sequences, never
          rankings or paid placements.
        </p>
      </PageIntro>
      <div className="collection-grid">
        <h2 className="sr-only">Explore the collections</h2>
        {editorialPathways.map((pathway, index) => {
          const { guides } = collectionOpening(pathway, items);
          const item = guides[0];
          return item ? (
            <PathwayCard
              key={pathway.slug}
              pathway={{
                ...pathway,
                guideSlugs: guides.map((guide) => guide.slug),
              }}
              item={item}
              index={index}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
