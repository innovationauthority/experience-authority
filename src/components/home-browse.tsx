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

export function HomeBrowse({
  groups,
  latestDate,
}: {
  groups: HomeBrowseGroup[];
  latestDate?: string;
}) {
  const [active, setActive] = useState(groups[0]?.slug);
  const [limit, setLimit] = useState(3);
  const group = groups.find((entry) => entry.slug === active) || groups[0];
  if (!group) return null;
  return (
    <div className="home-browse">
      <div className="home-interest-select">
        <label htmlFor="home-interest">Choose an interest</label>
        <select
          id="home-interest"
          aria-controls="home-browse-results"
          value={group.slug}
          onChange={(event) => {
            setActive(event.target.value);
            setLimit(3);
          }}
        >
          {groups.map((entry) => (
            <option key={entry.slug} value={entry.slug}>
              {entry.name}
            </option>
          ))}
        </select>
      </div>
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
      <span className="sr-only" role="status">
        {group.name}, showing {Math.min(limit, group.items.length)} experiences.
      </span>
      <div id="home-browse-results" aria-label={group.name}>
        <div className="experience-grid" key={group.slug}>
          {group.items.slice(0, limit).map((item, index) => (
            <ExperienceCardView
              key={item.id}
              item={item}
              index={index}
              compact
            />
          ))}
        </div>
        <div className="home-browse-more">
          <p className="small-note">
            {group.name}: {Math.min(limit, group.items.length)} experiences
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
          <Link
            className="text-link"
            href={group.slug === "edit" ? "/new" : group.href}
          >
            {group.slug === "new"
              ? "All new guides"
              : group.slug === "edit"
                ? "See what’s new"
                : `Explore ${group.name.toLowerCase()}`}{" "}
            →
          </Link>
        </div>
        {latestDate && (
          <p className="home-release-date">
            Latest guides added{" "}
            <time dateTime={latestDate}>
              {new Date(`${latestDate}T12:00:00Z`).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </p>
        )}
      </div>
    </div>
  );
}
