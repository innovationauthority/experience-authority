"use client";
import { useState } from "react";
import Link from "next/link";
import { Photo, ImageCredit } from "./editorial-ui";
import type { ImageCreditData } from "@/lib/catalog-projections";
export type CityEditView = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  stops: {
    slug: string;
    title: string;
    role: string;
    note: string;
    photo: ImageCreditData & { src: string; alt: string };
  }[];
};
export function CityEditPicker({ edits }: { edits: CityEditView[] }) {
  const [selected, setSelected] = useState(edits[0]?.slug);
  const edit = edits.find((entry) => entry.slug === selected) || edits[0];
  if (!edit) return null;
  return (
    <section className="city-edits" aria-labelledby="city-edit-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your kind of {edit.name}</p>
          <h2 id="city-edit-heading">One city. More than one way in.</h2>
        </div>
      </div>
      <div
        className="city-edit-choices"
        aria-label="Choose a local editorial idea"
      >
        {edits.map((entry) => (
          <button
            type="button"
            key={entry.slug}
            aria-pressed={entry.slug === edit.slug}
            onClick={() => setSelected(entry.slug)}
          >
            {entry.title}
          </button>
        ))}
      </div>
      <div className="city-edit-intro">
        <p aria-live="polite">{edit.intro}</p>
        <Link className="button button-dark" href={`/plan?edit=${edit.slug}`}>
          Build this into my days ↗
        </Link>
      </div>
      <div className="chapter-preview-grid">
        {edit.stops.map((stop) => (
          <article key={stop.slug}>
            <div className="chapter-preview-photo">
              <Link
                href={`/experiences/${stop.slug}`}
                aria-label={`Read ${stop.title}`}
              >
                <Photo
                  src={stop.photo.src}
                  alt={stop.photo.alt}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </Link>
              <ImageCredit media={stop.photo} />
            </div>
            <div className="chapter-preview-copy">
              <p className="eyebrow">{stop.role}</p>
              <h3>
                <Link href={`/experiences/${stop.slug}`}>{stop.title} ↗</Link>
              </h3>
              <p>{stop.note}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="small-note">
        Choose and arrange these separately. Check each host’s dates and allow
        for travel between locations.
      </p>
      <a className="text-link" href="#local-guides">
        All experiences in {edit.name} ↓
      </a>
    </section>
  );
}
