import { countries, type Country } from "@/data/countries";

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
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3 rounded-3xl border border-navy/10 bg-sky-light/50 p-6">
          {countries.map((c) => {
            const isActive = c.slug === country.slug;
            return (
              <span
                key={c.slug}
                title={c.name}
                className={
                  isActive
                    ? "flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-lg shadow-sun/50 ring-4 ring-sun scale-110 transition-transform"
                    : "flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-xl opacity-50 grayscale-[30%] transition-transform"
                }
              >
                {c.flagEmoji}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
