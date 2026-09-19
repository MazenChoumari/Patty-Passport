import { CloudLayer } from "@/components/ui/CloudLayer";
import type { Country } from "@/data/countries";

export function CountryHero({ country }: { country: Country }) {
  const detail = country.detail;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream py-16 sm:py-20">
      <CloudLayer />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <span
          className="inline-block text-6xl animate-wave"
          role="img"
          aria-label={`${country.name} flag`}
          style={{ transformOrigin: "70% 70%" }}
        >
          {country.flagEmoji}
        </span>
        <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky-dark">
          Destination #{String(country.destinationNumber).padStart(2, "0")} · {country.route}
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-navy sm:text-5xl">
          {country.name}
        </h1>

        {detail ? (
          <div className="mx-auto mt-6 max-w-xl rounded-3xl border border-navy/10 bg-white/80 p-6 shadow-sm">
            <p dir="auto" className="font-heading text-2xl font-semibold text-navy">
              {detail.greetingLocal}
            </p>
            {detail.greetingRomanized && (
              <p className="mt-1 text-sm italic text-navy-light">{detail.greetingRomanized}</p>
            )}
            <p className="mt-2 text-navy-light">&ldquo;{detail.greetingEnglish}&rdquo;</p>
          </div>
        ) : (
          <p className="mx-auto mt-6 max-w-md text-navy-light">
            This destination is still boarding — the full route page lands soon. {country.tagline}.
          </p>
        )}
      </div>
    </section>
  );
}
