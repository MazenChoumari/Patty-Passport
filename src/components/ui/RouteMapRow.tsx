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
    <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-3xl border border-navy/10 bg-sky-light/50 p-6">
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
                ? "flex h-14 w-14 scale-110 items-center justify-center rounded-full bg-white text-3xl shadow-lg shadow-sun/50 ring-4 ring-sun transition-transform"
                : "flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-xl opacity-50 grayscale-[30%] transition-transform hover:opacity-90"
            }
          >
            {c.flagEmoji}
          </button>
        );
      })}
    </div>
  );
}
