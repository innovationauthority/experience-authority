"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { LocalArea } from "@/lib/local-discovery";
import { trackEaEvent } from "@/lib/analytics";

const timeChoices = [
  ["short", "A short visit"],
  ["half-day", "A morning or afternoon"],
  ["own-pace", "At your own pace"],
] as const;

export function LocalDiscovery({ areas }: { areas: LocalArea[] }) {
  const [areaKey, setAreaKey] = useState("");
  const [time, setTime] = useState("");
  const area = areas.find((item) => item.key === areaKey);
  const count = area ? (time ? area.times[time] || 0 : area.count) : 0;
  return (
    <div className="local-discovery" id="close-to-home">
      <div className="local-discovery-intro">
        <h3>You don’t have to go far.</h3>
        <p>A place you know. A few hours to see it differently.</p>
      </div>
      <form
        action="/explore#compass-results"
        method="get"
        aria-label="Explore a place in your own time"
        onSubmit={() =>
          trackEaEvent("local_discovery_open", { time: time || "any" })
        }
      >
        <input type="hidden" name="place" value={area?.country || ""} />
        <input type="hidden" name="region" value={area?.region || ""} />
        <div className="local-discovery-field">
          <label htmlFor="local-area">City or area</label>
          <select
            id="local-area"
            required
            value={areaKey}
            onChange={(event) => {
              const next = areas.find(
                (item) => item.key === event.target.value,
              );
              setAreaKey(event.target.value);
              if (time && !next?.times[time]) setTime("");
            }}
          >
            <option value="">Choose a place</option>
            {areas.map((item) => (
              <option key={item.key} value={item.key}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <fieldset className="local-time-choices" disabled={!area}>
          <legend>Time to explore</legend>
          <div>
            {[["", "Any length"], ...timeChoices].map(([value, label]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="time"
                  value={value}
                  checked={time === value}
                  disabled={!!value && !area?.times[value]}
                  onChange={() => setTime(value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={!area || count === 0}
          className="button button-dark"
        >
          {area
            ? `Explore ${count} ${count === 1 ? "experience" : "experiences"}`
            : "Explore"}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p
          className="local-discovery-note"
          aria-live="polite"
          aria-atomic="true"
        >
          {area
            ? `${count} ${count === 1 ? "guide matches" : "guides match"}. Check opening times and booking in each guide.`
            : "Choose a place to begin. No location tracking or account needed."}
        </p>
        <noscript>
          <p>
            <a href="/places">Browse all destinations</a> to find experiences
            without JavaScript.
          </p>
        </noscript>
      </form>
    </div>
  );
}
