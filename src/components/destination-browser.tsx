"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { interestForSlug, matchesInterest, type Field } from "@/lib/catalog";
import {
  discoveryProfiles,
  timeFits,
  participationModes,
} from "@/lib/experience-finder";

import type { CardExperience } from "@/lib/catalog-projections";
import { ExperienceCardView } from "./experience-card";
export function DestinationBrowser({
  items,
  categories,
  basePath,
}: {
  items: CardExperience[];
  categories: { slug: string; name: string; count: number }[];
  basePath: string;
}) {
  const params = useSearchParams();
  const rawInterest = params.get("interest") ?? "";
  const selected = categories.some((category) => category.slug === rawInterest)
    ? rawInterest
    : "";
  const rawTime = params.get("time");
  const time = timeFits.find((fit) => fit.value === rawTime)?.value ?? "";
  const rawMode = params.get("mode");
  const mode =
    participationModes.find((entry) => entry.value === rawMode)?.value ?? "";
  const [limit, setLimit] = useState(9);
  function filterHref(interest: string, time: string, mode: string) {
    const query = new URLSearchParams();
    if (interest) query.set("interest", interest);
    if (time) query.set("time", time);
    if (mode) query.set("mode", mode);
    return basePath + (query.size ? `?${query}` : "") + "#local-guides";
  }
  function changeFilters(interest: string, time: string, mode: string) {
    setLimit(9);
    const href = filterHref(interest, time, mode);
    if (href !== location.pathname + location.search + location.hash)
      window.history.pushState(null, "", href);
  }
  const interest = interestForSlug(selected);
  const visible = items.filter((item) => {
    const profile = discoveryProfiles[item.slug];
    return (
      (!interest || matchesInterest(item, interest)) &&
      (!time || profile?.time === time) &&
      (!mode || profile?.modes.some((value) => value === mode))
    );
  });
  const availableTimes = timeFits.filter((fit) =>
    items.some((item) => discoveryProfiles[item.slug]?.time === fit.value),
  );
  const availableModes = participationModes.filter((fit) =>
    items.some((item) =>
      discoveryProfiles[item.slug]?.modes.some((value) => value === fit.value),
    ),
  );
  return (
    <div className="destination-browser" id="local-guides">
      <nav
        className="destination-categories"
        aria-label="Experiences here by interest"
      >
        {[
          { slug: "", name: "All experiences", count: items.length },
          ...categories,
        ].map((category) => (
          <a
            key={category.slug}
            href={filterHref(category.slug, time, mode)}
            aria-current={selected === category.slug ? "true" : undefined}
            onClick={(event) => {
              if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return;
              event.preventDefault();
              changeFilters(category.slug, time, mode);
            }}
          >
            {category.name} <span>{category.count}</span>
          </a>
        ))}
      </nav>
      {items.length > 1 && (
        <details
          className="destination-refine"
          open={time || mode ? true : undefined}
        >
          <summary>
            Refine by time or participation
            {time || mode ? " · filters active" : ""}
          </summary>
          <div className="local-planning-filters">
            <label>
              Time for an experience
              <select
                value={time}
                onChange={(event) =>
                  changeFilters(selected, event.target.value, mode)
                }
              >
                <option value="">Any amount of time</option>
                {availableTimes.map((fit) => (
                  <option value={fit.value} key={fit.value}>
                    {fit.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              How you take part
              <select
                value={mode}
                onChange={(event) =>
                  changeFilters(selected, time, event.target.value)
                }
              >
                <option value="">Open to anything</option>
                {availableModes.map((fit) => (
                  <option value={fit.value} key={fit.value}>
                    {fit.label}
                  </option>
                ))}
              </select>
            </label>
            <p>
              Time describes the experience, not travel between stops. Check
              dates and access in each guide.
            </p>
          </div>
        </details>
      )}
      <p className="destination-result" aria-live="polite" aria-atomic="true">
        {visible.length} {visible.length === 1 ? "experience" : "experiences"}
        {interest ? ` for ${interest.name.toLowerCase()}` : " to explore here"}.
        Save the ones you want to build a day around.
      </p>
      {visible.length ? (
        <>
          <div className="experience-grid">
            {visible.slice(0, limit).map((item, index) => (
              <ExperienceCardView
                key={item.id}
                item={item}
                index={index}
                returnTo={filterHref(selected, time, mode)}
              />
            ))}
          </div>
          {limit < visible.length && (
            <div className="progressive-grid-more">
              <p>
                Showing {limit} of {visible.length}
              </p>
              <button
                className="button button-outline"
                type="button"
                onClick={() => setLimit(limit + 9)}
              >
                Show more experiences
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="finder-empty">
          <h3>No published guide here fits all three choices yet.</h3>
          <p>
            Keep this destination and try a different rhythm or way to take
            part.
          </p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => changeFilters("", "", "")}
          >
            Show all experiences here
          </button>
        </div>
      )}
    </div>
  );
}
