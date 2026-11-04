"use client";

import { useState } from "react";
import Link from "next/link";
import {
  browseInterests as interests,
  interestForSlug,
  matchesInterest,
} from "@/lib/catalog";
import {
  areaKey,
  savedAreas,
  withinPublicationWeek,
  type DiscoveryChoice,
} from "@/lib/discovery-choices";
import { usePassport } from "./passport-provider";
import type { CardExperience } from "@/lib/catalog-projections";
import { ExperienceCardView } from "./experience-card";
import { ProgressiveGrid } from "./progressive-grid";

type ReleaseItem = CardExperience & { date: string };
const releaseDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function NewGuideBrowser({
  items,
  allPlaces,
  today,
}: {
  items: ReleaseItem[];
  allPlaces: Pick<DiscoveryChoice, "id" | "countrySlug" | "regionSlug">[];
  today: string;
}) {
  const { data, ready } = usePassport();
  const [editionCount, setEditionCount] = useState(1);
  const [period, setPeriod] = useState("");
  const [interest, setInterest] = useState("");
  const [country, setCountry] = useState("");
  const [personal, setPersonal] = useState(false);
  const saved = Object.keys(data.saved);
  const areas = savedAreas(allPlaces, saved);
  const weekCount = items.filter((item) =>
    withinPublicationWeek(item.date, today),
  ).length;
  const inSavedPlaces = items.filter(
    (item) =>
      withinPublicationWeek(item.date, today) &&
      areas.has(areaKey(item) || "") &&
      !saved.includes(item.id),
  );
  const selectedInterest = interestForSlug(interest);
  const visible = items.filter(
    (item) =>
      (!period || withinPublicationWeek(item.date, today)) &&
      (!selectedInterest || matchesInterest(item, selectedInterest)) &&
      (!country || item.countrySlug === country) &&
      (!personal ||
        (areas.has(areaKey(item) || "") && !saved.includes(item.id))),
  );
  const dates = [...new Set(visible.map((item) => item.date))];
  const countries = [
    ...new Map(items.map((item) => [item.countrySlug, item.country])).entries(),
  ].sort((a, b) => a[1].localeCompare(b[1]));
  function reset() {
    setPeriod("");
    setInterest("");
    setCountry("");
    setPersonal(false);
  }

  return (
    <div className="new-guide-browser">
      <div className="new-guide-tools">
        <div className="new-guide-summary">
          <p>
            <strong>{weekCount}</strong>{" "}
            {weekCount === 1 ? "new guide" : "new guides"} in the past 7 days
          </p>
          <Link className="text-link" href="/today">
            One discovery for today ↗
          </Link>
        </div>
        <details className="new-filter-disclosure">
          <summary>
            Refine by date, interest or place
            {period || interest || country ? " · filters active" : ""}
          </summary>
          <div className="local-planning-filters new-guide-filters">
            <label>
              Published
              <select
                value={period}
                onChange={(event) => {
                  setPeriod(event.target.value);
                  setEditionCount(1);
                }}
              >
                <option value="">All publication dates</option>
                <option value="week">Past 7 days</option>
              </select>
            </label>
            <label>
              What interests you
              <select
                value={interest}
                onChange={(event) => {
                  setInterest(event.target.value);
                  setEditionCount(1);
                }}
              >
                <option value="">All interests</option>
                {interests
                  .filter((entry) =>
                    items.some((item) => matchesInterest(item, entry)),
                  )
                  .map((entry) => (
                    <option value={entry.slug} key={entry.slug}>
                      {entry.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              Country or territory
              <select
                value={country}
                onChange={(event) => {
                  setCountry(event.target.value);
                  setEditionCount(1);
                }}
              >
                <option value="">Anywhere</option>
                {countries.map(([slug, name]) => (
                  <option value={slug} key={slug}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </details>
        {ready && areas.size > 0 && (
          <div className="new-personal">
            <>
              <button
                type="button"
                className="button button-outline"
                aria-pressed={personal}
                onClick={() => {
                  setPersonal(!personal);
                  setCountry("");
                  setInterest("");
                  setPeriod(!personal ? "week" : "");
                }}
              >
                {personal
                  ? "Show all places again"
                  : `New in my saved places (${inSavedPlaces.length})`}
              </button>
              <p>
                Same cities and areas, not whole countries. Already saved guides
                are excluded. Private in this browser.
              </p>
            </>
          </div>
        )}
      </div>
      <p className="destination-result" role="status">
        {visible.length}{" "}
        {visible.length === 1 ? "guide matches" : "guides match"} your choices.
      </p>
      {!visible.length && (
        <div className="finder-empty">
          <h2>
            {personal
              ? "Nothing new for these saved places yet."
              : "No new guide fits this combination yet."}
          </h2>
          <p>
            Your saved experiences are unchanged. Explore another place or widen
            the publication dates.
          </p>
          <button type="button" className="button button-dark" onClick={reset}>
            See all published guides
          </button>
        </div>
      )}
      {dates.slice(0, editionCount).map((date) => {
        const group = visible.filter((item) => item.date === date);
        const label = releaseDate.format(new Date(date));
        return (
          <section className="release-section" key={date}>
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {group.length} {group.length === 1 ? "guide" : "guides"}
                  {interest || country || personal
                    ? " in this view"
                    : " published"}
                </p>
                <h2>
                  <time dateTime={date}>{label}</time>
                </h2>
              </div>
            </div>
            <ProgressiveGrid
              key={`${date}:${period}:${interest}:${country}:${personal}`}
              heading={`Guides published ${label}`}
              surface={`new-guides-${date}`}
            >
              {group.map((item) => (
                <ExperienceCardView key={item.id} item={item} />
              ))}
            </ProgressiveGrid>
          </section>
        );
      })}
      {editionCount < dates.length && (
        <button
          className="button button-outline"
          type="button"
          onClick={() => setEditionCount(editionCount + 1)}
        >
          Show earlier edition ({dates.length - editionCount} remaining)
        </button>
      )}
    </div>
  );
}
