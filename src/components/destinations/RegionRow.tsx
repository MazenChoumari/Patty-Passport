import { DestinationPlate } from "@/components/destinations/DestinationPlate";
import { REGION_COLORS, REGION_SHORT_LABEL } from "@/data/mapPositions";
import type { Country } from "@/data/countries";

const REGION_BLURB: Record<string, string> = {
  "Levant Route": "Cedars, souks, sumac and toum — where the concept began.",
  "Aegean Route": "Islands, bazaars and salt air across Türkiye, Cyprus and Greece.",
  "Iberian & Western Route": "Tapas, piazzas and Riviera glam across five countries.",
  "Adriatic Route": "Alpine herbs meet coastal grills down the Balkan shoreline.",
  "North African Route": "Desert spice, citrus and mint tea along the southern coast.",
};

export function RegionRow({
  region,
  countries,
  onHover,
}: {
  region: string;
  countries: Country[];
  onHover?: (slug: string) => void;
}) {
  const color = REGION_COLORS[region as keyof typeof REGION_COLORS] ?? "var(--color-brand-sky)";

  return (
    <div>
      <div className="mb-4 flex items-baseline gap-3 px-4 sm:px-6">
        <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
        <h3 className="font-shout text-2xl tracking-wide text-navy sm:text-3xl">
          {(REGION_SHORT_LABEL[region as keyof typeof REGION_SHORT_LABEL] ?? region).toUpperCase()}{" "}
          <span className="text-navy-light">ROUTE</span>
        </h3>
      </div>
      <p className="mb-4 px-4 text-sm italic text-navy-light sm:px-6">
        {REGION_BLURB[region] ?? ""}
      </p>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {countries.map((c) => (
          <DestinationPlate key={c.slug} country={c} accentColor={color} onHover={onHover} />
        ))}
      </div>
    </div>
  );
}
