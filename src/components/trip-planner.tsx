"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePassport } from "./passport-provider";
import { ShareButton } from "./share-button";
import { Photo, ImageCredit } from "./editorial-ui";
import type { PlanExperience } from "@/lib/catalog-projections";
import {
  emptyTrip,
  hasTripDraft,
  mergeTripStops,
  sanitizeTrip,
  tripText,
  tripStages,
  type TripStage,
  type Trip,
} from "@/lib/trip";
import { trackEaEvent } from "@/lib/analytics";

const storageKey = "ea:trip:v1";
export type JourneyProposal = {
  slug: string;
  name: string;
  pace: string;
  choices: { id: string; role: string; note: string }[];
};
export function TripPlanner({
  items,
  startingPlaces,
  suggestedItemId,
  proposal,
}: {
  items: PlanExperience[];
  startingPlaces?: ReactNode;
  suggestedItemId?: string;
  proposal?: JourneyProposal;
}) {
  const { data, ready: passportReady } = usePassport();
  const [trip, setTrip] = useState<Trip>(emptyTrip);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [includeNotes, setIncludeNotes] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [proposalMessage, setProposalMessage] = useState("");
  useEffect(() => {
    setChoices({});
    setProposalMessage("");
  }, [proposal?.slug]);
  useEffect(() => {
    try {
      setTrip(
        sanitizeTrip(JSON.parse(localStorage.getItem(storageKey) || "null")),
      );
    } catch {
      setMessage(
        "Storage is unavailable. Your plan can only last for this session. Download a copy before leaving.",
      );
    }
    setReady(true);
    function sync(event: StorageEvent) {
      if (event.key !== storageKey && event.key !== null) return;
      try {
        setTrip(sanitizeTrip(JSON.parse(event.newValue || "null")));
      } catch {
        /* malformed external storage is ignored */
      }
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  function update(next: Trip) {
    setTrip(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setMessage("Plan saved in this browser.");
    } catch {
      setMessage(
        "Could not save on this device. Download a copy before leaving.",
      );
    }
  }
  function download() {
    const href = URL.createObjectURL(
      new Blob([tripText(trip, items, true)], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = href;
    link.download = "my-ea-journey.txt";
    link.click();
    trackEaEvent("journey_export", { method: "text_download" });
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  }
  const available = items.filter(
    (item) =>
      data.saved[item.id] &&
      !trip.entries.some((entry) => entry.id === item.id),
  );
  const countries = new Set(
    trip.entries.flatMap(
      (entry) => items.find((item) => item.id === entry.id)?.countrySlug || [],
    ),
  );
  const suggested = items.find((item) => item.id === suggestedItemId);
  if (!ready || !passportReady)
    return <p role="status">Opening your journey…</p>;
  // Never hide or replace an existing draft, including a notes-only journey.
  const hasDraft = hasTripDraft(trip);
  if (!hasDraft && available.length === 0 && !suggested && !proposal)
    return (
      <section className="journey-start" aria-labelledby="journey-start-title">
        <div className="journey-start-intro">
          <h2 id="journey-start-title">Where would you like to begin?</h2>
          <p>
            Choose a place, pick the experiences that draw you in and give each
            a day.
          </p>
        </div>
        {startingPlaces}
        <div className="journey-start-actions">
          <Link className="button button-dark" href="/places">
            Choose a destination ↗
          </Link>
          <Link className="text-link" href="/explore">
            Start with an experience ↗
          </Link>
        </div>
        <ol className="journey-steps" aria-label="How to build your journey">
          <li>
            <span>01</span>
            <h3>Find your place</h3>
            <p>Explore the city or area you have in mind.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Choose your experiences</h3>
            <p>
              Use a local starting point or bring an idea directly from a guide.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Shape your days</h3>
            <p>Choose the days, add your notes and share a draft.</p>
          </li>
        </ol>
        <p className="small-note">
          Private in this browser, with no account needed. This is a planning
          space, not a booking service. Check availability and book directly
          with each host.
        </p>
        {message && <p role="status">{message}</p>}
      </section>
    );
  return (
    <section className="trip-planner" aria-labelledby="trip-title">
      <div className="trip-intro">
        <p className="eyebrow">From curiosity to a plan</p>
        <h2 id="trip-title">
          {hasDraft
            ? "Your days, your pace."
            : proposal
              ? `Your version of ${proposal.name}.`
              : "Start with something you saved."}
        </h2>
        <p>
          Choose the experiences you want to build around. Give each a day and
          leave room between them.
        </p>
        <p className="small-note">
          One private draft in this browser. No account or cloud sync. Nothing
          here is a booking or an automatically checked itinerary.
        </p>
      </div>
      {proposal && (
        <form
          className="trip-proposal"
          aria-labelledby="trip-proposal-title"
          onSubmit={(event) => {
            event.preventDefault();
            const eligible = proposal.choices.filter((choice) =>
              Object.hasOwn(choices, choice.id),
            );
            const next = mergeTripStops(
              trip,
              eligible.map((choice) => ({
                id: choice.id,
                day: Number(choices[choice.id]),
              })),
              items.map((item) => item.id),
            );
            const added = next.entries.length - trip.entries.length;
            if (added) {
              update(next);
              requestAnimationFrame(() => {
                const stops = document.getElementById("your-plan-stops");
                stops?.focus({ preventScroll: true });
                stops?.scrollIntoView({ block: "start" });
              });
            }
            setChoices({});
            setProposalMessage(
              added
                ? `${added} ${added === 1 ? "experience added" : "experiences added"} to your plan below. Your existing stops and notes stay as they were.`
                : "No new stops added. Choose an experience and its day, or check whether your plan has reached 100 stops.",
            );
          }}
        >
          <div className="trip-proposal-heading">
            <p className="eyebrow">A starting point / {proposal.name}</p>
            <h3 id="trip-proposal-title">Choose what belongs in your stay.</h3>
            <p>{proposal.pace}</p>
            <p className="small-note">
              Choose only what fits. Alternative outings can have separate days.
              Check each venue and arrange travel independently.
            </p>
          </div>
          <div className="trip-proposal-choices">
            {proposal.choices.map((choice) => {
              const item = items.find((entry) => entry.id === choice.id);
              if (!item) return null;
              const alreadyAdded = trip.entries.some(
                (entry) => entry.id === item.id,
              );
              const selected = Object.hasOwn(choices, item.id);
              return (
                <article className="trip-proposal-choice" key={item.id}>
                  {item.photo && (
                    <div className="trip-guide-photo">
                      <Link
                        href={`/experiences/${item.slug}`}
                        aria-label={`Read ${item.title}`}
                      >
                        <Photo
                          src={item.photo.src}
                          alt=""
                          sizes="(max-width: 700px) 100vw, 25vw"
                        />
                      </Link>
                      <ImageCredit media={item.photo} />
                    </div>
                  )}
                  <div className="trip-choice-body">
                    <p className="eyebrow">{choice.role}</p>
                    <h4>
                      <Link href={`/experiences/${item.slug}`}>
                        {item.title} ↗
                      </Link>
                    </h4>
                    <p>{choice.note}</p>
                    <p className="small-note">{item.duration}</p>
                    <label className="trip-choice-select">
                      <input
                        type="checkbox"
                        aria-label={`Choose ${item.title}`}
                        checked={selected || alreadyAdded}
                        disabled={alreadyAdded}
                        onChange={(event) =>
                          setChoices((previous) => {
                            const next = { ...previous };
                            if (event.target.checked) next[item.id] = "";
                            else delete next[item.id];
                            return next;
                          })
                        }
                      />
                      {alreadyAdded
                        ? "Already in your plan"
                        : `Choose this experience`}
                    </label>
                    {selected && !alreadyAdded && (
                      <label className="trip-choice-day">
                        Choose a day
                        <input
                          type="number"
                          min={1}
                          max={60}
                          required
                          value={choices[item.id]}
                          aria-label={`Proposed day for ${item.title}`}
                          onChange={(event) =>
                            setChoices({
                              ...choices,
                              [item.id]: event.target.value,
                            })
                          }
                        />
                      </label>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="trip-proposal-actions">
            <button
              type="submit"
              className="button button-dark"
              disabled={!Object.keys(choices).length}
            >
              Add selected experiences to my plan
            </button>
            <a className="text-link" href="#your-plan-stops">
              Go to my plan ↓
            </a>
          </div>
          {proposalMessage && <p role="status">{proposalMessage}</p>}
        </form>
      )}
      {suggested && (
        <div className="trip-suggestion">
          <p className="eyebrow">Bring this idea into your days</p>
          <h3>{suggested.title}</h3>
          <p>
            {suggested.place}, {suggested.country}
          </p>
          {trip.entries.some((entry) => entry.id === suggested.id) ? (
            <p role="status">
              Already in your plan. Choose its day and add your notes below.
            </p>
          ) : (
            <button
              type="button"
              className="button button-dark"
              onClick={() => {
                update({
                  ...trip,
                  entries: [
                    ...trip.entries,
                    { id: suggested.id, day: 1, note: "" },
                  ],
                });
                trackEaEvent("journey_add_guide", { guide_id: suggested.id });
              }}
            >
              Add to my journey
            </button>
          )}
        </div>
      )}
      {hasDraft && (
        <label className="trip-name">
          Journey name
          <input
            maxLength={80}
            value={trip.name}
            onChange={(event) => update({ ...trip, name: event.target.value })}
          />
        </label>
      )}
      {available.length > 0 ? (
        <label className="trip-add">
          Add a saved experience
          <select
            value=""
            onChange={(event) => {
              if (event.target.value) {
                trackEaEvent("journey_add_guide", {
                  guide_id: event.target.value,
                });
                update({
                  ...trip,
                  entries: [
                    ...trip.entries,
                    { id: event.target.value, day: 1, note: "" },
                  ],
                });
              }
            }}
          >
            <option value="">Choose from your Passport…</option>
            {available.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title} · {item.place}
              </option>
            ))}
          </select>
        </label>
      ) : (
        !proposal && (
          <p>
            {trip.entries.length
              ? "Keep building around the experiences below."
              : "Start by saving an experience to your Passport."}{" "}
            <Link className="reset-link" href="/places">
              Choose a destination ↗
            </Link>
          </p>
        )
      )}
      {countries.size > 1 && (
        <p className="trip-caution">
          Your ideas span more than one country or territory. Allow for travel
          days. This planner does not calculate connections or check whether the
          route is feasible.
        </p>
      )}
      <ol
        className="trip-entries"
        id="your-plan-stops"
        aria-label="Your planned experiences"
        tabIndex={-1}
      >
        {[...trip.entries]
          .sort((a, b) => a.day - b.day)
          .map((entry) => {
            const item = items.find((item) => item.id === entry.id);
            const title = item?.title || "Guide currently unavailable";
            return (
              <li key={entry.id} className="trip-entry">
                <label className="trip-day">
                  Day
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={entry.day}
                    aria-label={`Day for ${title}`}
                    onChange={(event) => {
                      const day = Number(event.target.value);
                      if (Number.isInteger(day) && day >= 1 && day <= 60)
                        update({
                          ...trip,
                          entries: trip.entries.map((e) =>
                            e.id === entry.id ? { ...e, day } : e,
                          ),
                        });
                    }}
                  />
                </label>
                <div className="trip-entry-body">
                  {item ? (
                    <>
                      {item.photo && (
                        <div className="trip-entry-photo trip-guide-photo">
                          <Link
                            href={`/experiences/${item.slug}`}
                            aria-label={`Read ${item.title}`}
                          >
                            <Photo
                              src={item.photo.src}
                              alt=""
                              sizes="(max-width: 700px) 100vw, 33vw"
                            />
                          </Link>
                          <ImageCredit media={item.photo} />
                        </div>
                      )}
                      <p className="eyebrow">
                        {item.place} / {item.country}
                      </p>
                      <h3>
                        <Link href={`/experiences/${item.slug}`}>
                          {item.title} ↗
                        </Link>
                      </h3>
                      <p>{item.duration}</p>
                      <p>{item.participation}</p>
                    </>
                  ) : (
                    <>
                      <h3>{title}</h3>
                      <p>
                        This guide is not currently published. Your day, status
                        and notes are safe here. Check current arrangements
                        directly before travelling.
                      </p>
                      <p className="small-note">Saved reference: {entry.id}</p>
                    </>
                  )}
                  <details className="trip-edit-details">
                    <summary>Edit status and notes</summary>
                    <div className="trip-planning-state">
                      <label>
                        My planning status
                        <select
                          aria-label={`Planning status for ${title}`}
                          value={entry.stage || "idea"}
                          onChange={(event) =>
                            update({
                              ...trip,
                              entries: trip.entries.map((e) =>
                                e.id === entry.id
                                  ? {
                                      ...e,
                                      stage: event.target.value as TripStage,
                                    }
                                  : e,
                              ),
                            })
                          }
                        >
                          {Object.entries(tripStages).map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    {item?.guideReview && (
                      <a
                        className="text-link"
                        href={item.guideReview.accessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check details & booking with the host ↗
                        <span className="sr-only"> (opens a new tab)</span>
                      </a>
                    )}
                    <label>
                      My note
                      <textarea
                        maxLength={600}
                        value={entry.note}
                        placeholder="Preferred time, a question to ask, something to remember…"
                        onChange={(event) =>
                          update({
                            ...trip,
                            entries: trip.entries.map((e) =>
                              e.id === entry.id
                                ? { ...e, note: event.target.value }
                                : e,
                            ),
                          })
                        }
                      />
                    </label>
                    <button
                      className="text-link"
                      type="button"
                      aria-label={`Remove ${title} from plan`}
                      onClick={() =>
                        update({
                          ...trip,
                          entries: trip.entries.filter(
                            (e) => e.id !== entry.id,
                          ),
                        })
                      }
                    >
                      Remove from plan
                    </button>
                  </details>
                </div>
              </li>
            );
          })}
      </ol>
      {hasDraft && (
        <>
          <label className="trip-logistics">
            Travel & stay notes
            <textarea
              maxLength={2000}
              value={trip.logistics}
              placeholder="Your transport, accommodation ideas and time between experiences. Avoid payment details, passport numbers or booking codes."
              onChange={(event) =>
                update({ ...trip, logistics: event.target.value })
              }
            />
          </label>
          <div className="trip-export">
            <button
              type="button"
              className="button button-dark"
              onClick={download}
            >
              Download my plan ↓
            </button>
            <button
              type="button"
              className="button button-paper"
              onClick={() => {
                trackEaEvent("journey_export", { method: "print" });
                window.print();
              }}
            >
              Print or save as PDF ↗
            </button>
            <ShareButton
              title="A journey through Experience Authority"
              text={tripText(trip, items, includeNotes)}
              label="Share this plan"
            />
            <label className="trip-share-notes">
              <input
                type="checkbox"
                checked={includeNotes}
                onChange={(event) => setIncludeNotes(event.target.checked)}
              />
              Include my journey name, planning status and private notes when
              sharing
            </label>
            <p className="small-note">
              Sharing sends a text copy, not a public editable page. Download
              includes your notes. Sharing excludes them unless you choose
              otherwise.
            </p>
            <details className="trip-share-preview">
              <summary>Preview the text to share</summary>
              <pre>{tripText(trip, items, includeNotes)}</pre>
            </details>
          </div>
          <div className="trip-reset">
            {confirmReset ? (
              <div>
                <p>
                  Clear this journey and its notes from this browser? Your saved
                  Passport guides will stay. Download a copy first if you want
                  to keep this draft.
                </p>
                <div className="trip-reset-actions">
                  <button
                    type="button"
                    className="button button-dark"
                    onClick={() => {
                      update({ ...emptyTrip, entries: [] });
                      setConfirmReset(false);
                    }}
                  >
                    Clear this journey
                  </button>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setConfirmReset(false)}
                  >
                    Keep my journey
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="text-link"
                onClick={() => setConfirmReset(true)}
              >
                Start a fresh journey
              </button>
            )}
          </div>
          <pre className="trip-print-copy">{tripText(trip, items, true)}</pre>
        </>
      )}
      <p className="small-note" role="status">
        {message ||
          "Your plan stays on this device. Download a copy to keep it elsewhere."}
      </p>
    </section>
  );
}
