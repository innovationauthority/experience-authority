"use client";
import { Children, useState, type ReactNode } from "react";

export function RevealList({
  children,
  className,
  label,
  initial = 6,
}: {
  children: ReactNode;
  className: string;
  label: string;
  initial?: number;
}) {
  const cards = Children.toArray(children);
  const [count, setCount] = useState(initial);
  return (
    <>
      <div className={className}>{cards.slice(0, count)}</div>
      {count < cards.length && (
        <button
          className="button button-outline"
          type="button"
          onClick={() => setCount(count + initial)}
        >
          {label} ({cards.length - count} remaining)
        </button>
      )}
    </>
  );
}
