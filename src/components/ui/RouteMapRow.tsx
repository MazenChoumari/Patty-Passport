"use client";

import { countries } from "@/data/countries";

export function RouteMapRow({
  activeSlug,
  onHoverSlug,
}: {
  activeSlug: string;
  onHoverSlug?: (slug: string) => void;
}) {
  return (
    <div className="bg-sea-chart relative mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-[1.75rem] border border-sun/20 p-7 shadow-[0_20px_40px_-20px_rgba(6,20,25,0.6)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {countries.map((c) => {
        const isActive = c.slug === activeSlug;
        return (
          <button
            key={c.slug}
            type="button"
            title={c.name}
            onMouseEnter={() => onHoverSlug?.(c.slug)}
            onFocus={() => onHoverSlug?.(c.slug)}
            className={
              isActive
                ? "relative flex h-14 w-14 scale-110 items-center justify-center rounded-full border-2 border-sun bg-white text-3xl shadow-[0_0_0_4px_rgba(245,185,66,0.25)] transition-transform"
                : "relative flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-xl opacity-70 grayscale-[15%] transition-transform hover:scale-105 hover:opacity-100"
            }
          >
            {c.flagEmoji}
          </button>
        );
      })}
    </div>
  );
}
