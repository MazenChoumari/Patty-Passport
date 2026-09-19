import Link from "next/link";

export function CountryCard({
  slug,
  flagEmoji,
  name,
  tagline,
  destinationNumber,
  className = "",
  onHover,
}: {
  slug: string;
  flagEmoji: string;
  name: string;
  tagline: string;
  destinationNumber: number;
  className?: string;
  onHover?: (slug: string) => void;
}) {
  return (
    <Link
      href={`/destinations/${slug}`}
      onMouseEnter={() => onHover?.(slug)}
      onFocus={() => onHover?.(slug)}
      className={`group relative flex w-56 shrink-0 flex-col gap-3 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky/20 ${className}`}
    >
      <span className="absolute right-4 top-4 rounded-full bg-cream-dark px-2.5 py-1 text-xs font-semibold text-navy-light">
        #{String(destinationNumber).padStart(2, "0")}
      </span>
      <span className="text-5xl" role="img" aria-label={`${name} flag`}>
        {flagEmoji}
      </span>
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-sky-dark">
          {name}
        </h3>
        <p className="mt-1 text-sm text-navy-light">{tagline}</p>
      </div>
    </Link>
  );
}
