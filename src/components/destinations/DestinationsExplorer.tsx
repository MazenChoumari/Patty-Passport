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
      <section className="bg-cream py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <RouteMapRow activeSlug={activeSlug} onHoverSlug={setActiveSlug} />

          <div
            key={activeSlug}
            className="animate-stamp-in relative mx-auto mt-8 max-w-md rotate-[-1deg] rounded-3xl border-2 border-dashed border-navy/15 bg-[linear-gradient(180deg,#fffdf8,white)] p-7 shadow-[0_16px_32px_-12px_rgba(22,50,79,0.25)]"
          >
            <span
              className="absolute -top-4 -right-3 flex h-14 w-14 rotate-[10deg] items-center justify-center rounded-full border-2 border-dashed border-passport-red bg-white text-[9px] font-bold uppercase text-passport-red shadow-sm"
              aria-hidden="true"
            >
              #{String(active.destinationNumber).padStart(2, "0")}
            </span>
            <span
              className="animate-wave inline-block text-5xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
              role="img"
              aria-label={`${active.name} flag`}
              style={{ transformOrigin: "70% 70%" }}
            >
              {active.flagEmoji}
            </span>
            <h3 className="mt-2 font-heading text-xl font-semibold text-navy">{active.name}</h3>
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
            <Link
              href={`/destinations/${active.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-passport-red underline underline-offset-4"
            >
              Visit {active.name} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sky-light py-14">
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
