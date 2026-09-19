import { RouteMapRow } from "@/components/ui/RouteMapRow";
import type { Country } from "@/data/countries";

export function MapHighlight({ country }: { country: Country }) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Route map
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold text-navy">
          Here&apos;s where you are on the Mediterranean route.
        </h2>
        <div className="mt-8">
          <RouteMapRow activeSlug={country.slug} />
        </div>
      </div>
    </section>
  );
}
