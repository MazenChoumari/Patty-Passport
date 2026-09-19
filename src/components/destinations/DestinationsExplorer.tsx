"use client";

import { useState } from "react";
import Link from "next/link";
import { MediterraneanMap } from "@/components/ui/MediterraneanMap";
import { RegionRow } from "@/components/destinations/RegionRow";
import { countries, getCountryBySlug } from "@/data/countries";
import { REGION_ORDER } from "@/data/mapPositions";

export function DestinationsExplorer() {
  const [activeSlug, setActiveSlug] = useState(countries[0].slug);
  const active = getCountryBySlug(activeSlug) ?? countries[0];
  const detail = active.detail;

  return (
    <div>
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <MediterraneanMap activeSlug={activeSlug} onHoverSlug={setActiveSlug} />

          <div
            key={activeSlug}
            className="animate-stamp-in relative mx-auto mt-10 max-w-md rounded-xl border-2 border-navy bg-white p-7 shadow-[6px_6px_0_0_var(--color-brand-yellow)]"
          >
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy text-[11px] font-bold text-navy">
              {String(active.destinationNumber).padStart(2, "0")}
            </span>
            <span className="text-5xl">{active.flagEmoji}</span>
            <h3 className="font-display mt-2 text-xl font-bold text-navy">{active.name}</h3>
            {detail ? (
              <>
                <p dir="auto" className="mt-2 font-shout text-lg tracking-wide text-navy">
                  {detail.greetingLocal}
                </p>
                <p className="text-sm italic text-navy-light">{detail.greetingRomanized}</p>
                <p className="mt-1 text-sm text-navy-light">&ldquo;{detail.greetingEnglish}&rdquo;</p>
              </>
            ) : (
              <p className="mt-2 text-sm text-navy-light">{active.tagline}</p>
            )}
            <Link
              href={`/destinations/${active.slug}`}
              className="mt-4 inline-block font-shout text-sm tracking-wide text-passport-red-dark underline underline-offset-4"
            >
              VISIT {active.name.toUpperCase()} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="space-y-14">
          {REGION_ORDER.map((region) => (
            <RegionRow
              key={region}
              region={region}
              countries={countries.filter((c) => c.route === region)}
              onHover={setActiveSlug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
