"use client";

import { useEffect, useRef } from "react";
import { CountryCard } from "@/components/ui/CountryCard";
import { countries } from "@/data/countries";

export function CountryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const step = () => {
      if (!paused.current) {
        track.scrollLeft += 0.6;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onTouchEnd={() => (paused.current = false)}
    >
      {[...countries, ...countries].map((country, i) => (
        <CountryCard
          key={`${country.slug}-${i}`}
          slug={country.slug}
          flagEmoji={country.flagEmoji}
          name={country.name}
          tagline={country.tagline}
          destinationNumber={country.destinationNumber}
        />
      ))}
    </div>
  );
}
