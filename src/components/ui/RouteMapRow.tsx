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
    <div
      className="relative mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-[2rem] border-2 border-dashed border-sky-dark/25 p-7 shadow-inner"
      style={{
        backgroundColor: "var(--color-brand-sky-light)",
        backgroundImage:
          "radial-gradient(rgba(29,111,165,0.14) 1.2px, transparent 1.2px)",
        backgroundSize: "16px 16px",
      }}
    >
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
                ? "flex h-14 w-14 scale-110 items-center justify-center rounded-full border-2 border-dashed border-passport-red bg-white text-3xl shadow-lg shadow-passport-red/30 transition-transform"
                : "flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-xl opacity-60 grayscale-[20%] transition-transform hover:scale-105 hover:opacity-100"
            }
          >
            {c.flagEmoji}
          </button>
        );
      })}
    </div>
  );
}
