"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePassport } from "./passport-provider";
import { hasTripDraft, sanitizeTrip } from "@/lib/trip";

export function PassportReturn() {
  const { data, ready } = usePassport();
  const count = Object.keys(data.saved).length;
  const [hasJourney, setHasJourney] = useState(false);
  useEffect(() => {
    function read() {
      try {
        setHasJourney(
          hasTripDraft(
            sanitizeTrip(
              JSON.parse(localStorage.getItem("ea:trip:v1") || "null"),
            ),
          ),
        );
      } catch {
        setHasJourney(false);
      }
    }
    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);
  return (
    <aside className="passport-return" aria-label="Your next step">
      <div>
        <p className="eyebrow">
          {hasJourney || (ready && count)
            ? "Pick up your thread"
            : "Your EA Passport"}
        </p>
        <h2>
          {hasJourney
            ? "Your journey is taking shape."
            : ready && count
              ? `${count} ${count === 1 ? "discovery" : "discoveries"}. Your next chapter.`
              : "Found something worth going for?"}
        </h2>
        <p>
          {hasJourney
            ? "Return to your days, keep the details together and send the draft to someone you'd like to go with."
            : ready && count
              ? "Your saved experiences are waiting in this browser. Compare them, arrange your days, or share a plan with someone."
              : "Save your favourites, arrange them by day and share your plan. Private in this browser, with no account needed."}
        </p>
      </div>
      <div className="passport-return-links">
        <Link className="button button-dark" href="/plan">
          {hasJourney
            ? "Continue my journey"
            : ready && count
              ? "Plan my saved experiences"
              : "Start a journey"}{" "}
          →
        </Link>
        {ready && count > 0 && (
          <Link className="text-link" href="/new">
            See what's new in your saved places →
          </Link>
        )}
      </div>
    </aside>
  );
}
