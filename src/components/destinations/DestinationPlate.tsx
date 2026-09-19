"use client";

import Link from "next/link";
import type { Country } from "@/data/countries";

function heroDish(country: Country) {
  const food = country.detail?.food;
  if (!food) return null;
  return food[`${food.quickBiteHero}Burger` as "vegBurger" | "chickenBurger" | "beefBurger"];
}

export function DestinationPlate({
  country,
  accentColor,
  onHover,
}: {
  country: Country;
  accentColor: string;
  onHover?: (slug: string) => void;
}) {
  const fact = country.detail?.cultureFacts?.[0];
  const dish = heroDish(country);

  return (
    <Link
      href={`/destinations/${country.slug}`}
      onMouseEnter={() => onHover?.(country.slug)}
      onFocus={() => onHover?.(country.slug)}
      className="group relative flex w-72 shrink-0 flex-col overflow-hidden rounded-xl border-2 border-navy bg-white shadow-[4px_4px_0_0_var(--color-brand-navy)] transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ backgroundColor: accentColor }}
      >
        <span className="font-shout text-xs tracking-wide text-navy">
          DEST. {String(country.destinationNumber).padStart(2, "0")}
        </span>
        <span className="text-2xl leading-none" role="img" aria-label={`${country.name} flag`}>
          {country.flagEmoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-xl font-bold text-navy group-hover:text-passport-red-dark">
          {country.name}
        </h3>
        {dish && (
          <p className="font-shout text-sm tracking-wide text-passport-red-dark">{dish.name}</p>
        )}
        {fact && <p className="text-sm leading-snug text-navy-light">{fact}</p>}
        <span className="mt-auto pt-2 text-xs font-semibold uppercase tracking-widest text-sky-dark group-hover:underline">
          Check in →
        </span>
      </div>
    </Link>
  );
}
