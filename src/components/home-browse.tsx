"use client";

import { useState } from "react";
import Link from "next/link";
import type { CardExperience } from "@/lib/catalog-projections";
import { ExperienceCardView } from "./experience-card";

export type HomeBrowseGroup = {
  slug: string;
  name: string;
  href: string;
  items: CardExperience[];
};

export function HomeBrowse({ groups }: { groups: HomeBrowseGroup[] }) {
  const [active, setActive] = useState(groups[0]?.slug);
  const [limit, setLimit] = useState(3);
  const group = groups.find((entry) => entry.slug === active) || groups[0];
  if (!group) return null;
  return (
    <div className="home-browse">
      <div
        className="home-browse-choices"
        role="group"
        aria-label="Choose an experience interest"
      >
        {groups.map((entry) => (
          <button
            key={entry.slug}
            type="button"
            aria-pressed={entry.slug === group.slug}
            aria-controls="home-browse-results"
            onClick={() => {
              setActive(entry.slug);
              setLimit(3);
            }}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <div id="home-browse-results" aria-label={group.name}>
        <div className="experience-grid">
          {group.items.slice(0, limit).map((item, index) => (
            <ExperienceCardView key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="home-browse-more">
          <p className="small-note" role="status">
            {Math.min(limit, group.items.length)} experiences to begin with
          </p>
          {limit < group.items.length && (
            <button
              type="button"
              className="button button-paper"
              onClick={() => setLimit(limit + 3)}
            >
              Show three more
            </button>
          )}
          <Link className="text-link" href={group.href}>
            {group.slug === "new"
              ? "All new guides"
              : `Explore ${group.name.toLowerCase()}`}{" "}
            ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
