"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CountryCard } from "@/components/ui/CountryCard";
import { RouteMapRow } from "@/components/ui/RouteMapRow";
import { countries, getCountryBySlug } from "@/data/countries";

export function DestinationsExplorer() {
  const [activeSlug, setActiveSlug] = useState(countries[0].slug);
  const active = getCountryBySlug(activeSlug) ?? countries[0];
  const detail = active.detail;

  return (
    <div>
      <section className="bg-linen py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <RouteMapRow activeSlug={activeSlug} onHoverSlug={setActiveSlug} />

          <div
            key={activeSlug}
            className="animate-stamp-in relative mx-auto mt-8 max-w-md rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_20px_40px_-20px_rgba(22,50,79,0.3)]"
          >
            <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-sun/50 text-[11px] font-semibold text-navy-light">
              {String(active.destinationNumber).padStart(2, "0")}
            </span>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sun/40 bg-cream shadow-inner">
              <span
                className="animate-wave inline-block text-3xl"
                role="img"
                aria-label={`${active.name} flag`}
                style={{ transformOrigin: "70% 70%" }}
              >
                {active.flagEmoji}
              </span>
            </span>
            <h3 className="font-display mt-3 text-xl font-semibold text-navy">{active.name}</h3>
            {detail ? (
              <>
                <p dir="auto" className="mt-2 font-heading text-lg font-semibold text-navy">
                  {detail.greetingLocal}
                </p>
                <p className="text-sm italic text-navy-light">{detail.greetingRomanized}</p>
                <p className="mt-1 text-sm text-navy-light">&ldquo;{detail.greetingEnglish}&rdquo;</p>
              </>
            ) : (
              <p className="mt-2 text-sm text-navy-light">{active.tagline}</p>
            )}
            <span className="mx-auto mt-3 block h-px w-10 bg-sun/70" />
            <Link
              href={`/destinations/${active.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-passport-red-dark underline underline-offset-4"
            >
              Visit {active.name} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-linen py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {countries.map((c) => (
              <CountryCard
                key={c.slug}
                slug={c.slug}
                flagEmoji={c.flagEmoji}
                name={c.name}
                tagline={c.tagline}
                destinationNumber={c.destinationNumber}
                onHover={setActiveSlug}
                className="w-full"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/menu" variant="outline">
              See the full Route Map &amp; Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
