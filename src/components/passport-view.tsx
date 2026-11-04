"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePassport } from "./passport-provider";
import { EmptyState, StatusBadge } from "./editorial-ui";
import { ExperienceCardView as ExperienceCard } from "./experience-card";
import { passportStages, type PassportStage } from "@/lib/passport";
import type { PassportExperience } from "@/lib/catalog-projections";
import { TripPlanner } from "./trip-planner";
const names: Record<PassportStage, string> = {
  saved: "Saved",
  "want-to": "Want to experience",
  experienced: "Experienced",
  "return-to": "Return to",
};
export function PassportView({ view }: { view: string }) {
  const { data, ready, message, setStage, toggleCompare } = usePassport();
  const needsCatalogue =
    ready &&
    (view === "plan" ||
      Object.keys(data.saved).length > 0 ||
      data.compare.length > 0);
  const [catalogue, setCatalogue] = useState<PassportExperience[]>();
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!needsCatalogue || catalogue) return;
    const controller = new AbortController();
    // Every reader fetches the same public data. Saved IDs stay in the browser.
    fetch("/api/passport-catalogue", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Passport catalogue unavailable");
        return response.json() as Promise<PassportExperience[]>;
      })
      .then((items) => {
        if (!controller.signal.aborted) setCatalogue(items);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, [needsCatalogue, catalogue, attempt]);
  const items = catalogue ?? [];
  const saved = items.filter(
    (item) =>
      data.saved[item.id] && (view === "all" || data.saved[item.id] === view),
  );
  const compared = data.compare.flatMap((id) => {
    const item = items.find((e) => e.id === id);
    return item ? [item] : [];
  });
  const unavailable = Object.keys(data.saved).filter(
    (id) =>
      !items.some((item) => item.id === id) &&
      (view === "all" || data.saved[id] === view),
  );
  const tabs = [
    ["all", "All saved"],
    ["plan", "My journey"],
    ...Object.entries(names).filter(([stage]) =>
      Object.values(data.saved).includes(stage as PassportStage),
    ),
    ...(data.compare.length || view === "compare"
      ? [["compare", `Compare (${data.compare.length}/3)`]]
      : []),
  ];
  return (
    <>
      <nav className="passport-tabs" aria-label="Passport sections">
        {tabs.map(([value, name]) => (
          <Link
            href={value === "plan" ? "/plan" : `/passport?view=${value}`}
            key={value}
            aria-current={view === value ? "page" : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
      {needsCatalogue && !catalogue && failed ? (
        <EmptyState title="Your guides could not be loaded.">
          <p>Your saved experiences are still in this browser.</p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => {
              setFailed(false);
              setAttempt(attempt + 1);
            }}
          >
            Try again
          </button>
        </EmptyState>
      ) : !ready || (needsCatalogue && !catalogue) ? (
        <p role="status">Opening your local Passport…</p>
      ) : view === "plan" ? (
        <TripPlanner items={items} />
      ) : view === "compare" ? (
        compared.length ? (
          <>
            <p className="section-note">
              Which experience fits your plans? Compare time, participation and
              access before deciding. This is not a quality ranking.
            </p>
            <div
              className="compare-scroll"
              tabIndex={0}
              role="region"
              aria-label="Experience comparison"
            >
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">At a glance</th>
                    {compared.map((e) => (
                      <th scope="col" key={e.id}>
                        <Link href={`/experiences/${e.slug}`}>{e.title} ↗</Link>
                        <button
                          className="remove-compare"
                          aria-label={`Remove ${e.title} from comparison`}
                          onClick={() => toggleCompare(e.id)}
                        >
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Place</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        {e.place}
                        {e.countrySlug && `, ${e.country}`}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Experience</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.category}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Time needed</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.duration}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">What you do</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.participation}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Guide status</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        <StatusBadge status={e.status} demo={e.demo} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">The shift</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.shift}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Access</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.access}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Evidence</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        {e.guideReview
                          ? `Public sources checked ${e.guideReview.checkedOn}. No on-site review.`
                          : e.evidence}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <EmptyState title="Put your curiosities side by side.">
            <p>
              Open a guide and choose Compare. You can keep up to three
              experiences here.
            </p>
            <Link href="/explore" className="button">
              Find an experience ↗
            </Link>
          </EmptyState>
        )
      ) : saved.length || unavailable.length ? (
        <div className="passport-grid">
          <h2 className="sr-only">Your saved experiences</h2>
          {saved.map((item, i) => (
            <div key={item.id}>
              <ExperienceCard item={item} index={i} />
              <div className="passport-entry-controls">
                <label>
                  Keep in
                  <select
                    aria-label={`Passport category for ${item.title}`}
                    value={data.saved[item.id]}
                    onChange={(e) =>
                      setStage(item.id, e.target.value as PassportStage)
                    }
                  >
                    {passportStages.map((stage) => (
                      <option value={stage} key={stage}>
                        {names[stage]}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className="compare-toggle"
                  aria-pressed={data.compare.includes(item.id)}
                  onClick={() => toggleCompare(item.id)}
                >
                  {data.compare.includes(item.id) ? "Comparing" : "Compare"}
                </button>
              </div>
            </div>
          ))}
          {unavailable.map((id) => (
            <article className="unavailable-save" key={id}>
              <p className="eyebrow">Kept in your Passport</p>
              <h3>Guide currently unavailable</h3>
              <p>
                This guide is not currently published. Your saved category stays
                here and will reconnect if the guide returns.
              </p>
              <p className="small-note">Saved reference: {id}</p>
              <div className="passport-entry-controls">
                <label>
                  Keep in
                  <select
                    aria-label={`Passport category for unavailable guide ${id}`}
                    value={data.saved[id]}
                    onChange={(event) =>
                      setStage(id, event.target.value as PassportStage)
                    }
                  >
                    {passportStages.map((stage) => (
                      <option value={stage} key={stage}>
                        {names[stage]}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className="text-link"
                  onClick={() => setStage(id)}
                  aria-label={`Remove unavailable guide ${id} from Passport`}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState title="A blank page. A world of possibilities.">
          <p>
            Use the bookmark on any experience to keep it here. Your Passport is
            stored only in this browser. Clearing its data will remove it.
          </p>
          <Link href="/explore" className="button">
            Find your first experience ↗
          </Link>
        </EmptyState>
      )}
      <p className="passport-message" role="status">
        {message ||
          "Saved in this browser. No account or cloud sync. Your private plan is not sent to EA."}
      </p>
    </>
  );
}
