"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { imageSource } from "@/lib/image-revisions";

export type HomeHeroStory = {
  slug: string;
  title: string;
  place: string;
  field: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  credit: string;
  leadPosition?: string;
};

function HeroStory({
  item,
  primary = false,
}: {
  item: HomeHeroStory;
  primary?: boolean;
}) {
  const href = `/experiences/${item.slug}`;
  return (
    <figure className={primary ? "prototype-hero-place" : undefined}>
      <div className="hero-story-visual">
        <Link
          className="prototype-hero-image-link"
          href={href}
          aria-label={`Explore ${item.title} in ${item.place}`}
        />
        <Image
          src={imageSource(item.image)}
          alt={item.imageAlt}
          fill
          priority={primary}
          sizes={
            primary
              ? "(max-width: 700px) 700px, 1100px"
              : "(max-width: 700px) 1px, (max-width: 1100px) 35vw, 27vw"
          }
          style={
            item.leadPosition
              ? { objectPosition: item.leadPosition }
              : undefined
          }
          className="editorial-photo"
        />
        <a
          className="image-source-badge"
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Image: {item.credit}</span>
          <ArrowUpRight size={11} aria-hidden="true" />
          <span className="sr-only"> (opens source in a new tab)</span>
        </a>
      </div>
      <figcaption>
        <span className="eyebrow">
          {primary ? `Place / ${item.place}` : `${item.field} / ${item.place}`}
        </span>
        <Link href={href}>{item.title}</Link>
      </figcaption>
    </figure>
  );
}

export function HomeHeroMosaic({
  editions,
  initialIndex,
}: {
  editions: HomeHeroStory[][];
  initialIndex: number;
}) {
  const [index, setIndex] = useState(
    editions.length ? initialIndex % editions.length : 0,
  );
  const [main, upper, lower] = editions[index] || [];

  function move(direction: -1 | 1) {
    if (editions.length < 2) return;
    setIndex(
      (current) => (current + direction + editions.length) % editions.length,
    );
  }

  return (
    <div className="prototype-hero-rotator">
      <div className="prototype-hero-mosaic" key={index}>
        {main && <HeroStory item={main} primary />}
        <div className="prototype-hero-sides">
          {upper && <HeroStory item={upper} />}
          {lower && <HeroStory item={lower} />}
        </div>
      </div>
      {editions.length > 1 && (
        <div className="prototype-hero-controls">
          <span aria-live="polite">
            Ways in {String(index + 1).padStart(2, "0")} /{" "}
            {String(editions.length).padStart(2, "0")}
          </span>
          <button onClick={() => move(-1)} aria-label="Previous ways in">
            <ArrowLeft size={15} aria-hidden="true" />
          </button>
          <button onClick={() => move(1)} aria-label="Next ways in">
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
