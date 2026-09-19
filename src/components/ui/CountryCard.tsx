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
      className={`group relative flex w-56 shrink-0 flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-linen px-5 py-6 text-center shadow-[0_10px_24px_-14px_rgba(22,50,79,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-sun/60 hover:shadow-[0_20px_36px_-16px_rgba(22,50,79,0.45)] ${className}`}
    >
      <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-navy/15 text-[10px] font-semibold text-navy-light/70">
        {destinationNumber}
      </span>
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-sun/40 bg-white shadow-inner">
        <span className="text-3xl" role="img" aria-label={`${name} flag`}>
          {flagEmoji}
        </span>
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold text-navy group-hover:text-passport-red-dark">
          {name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-navy-light/80">{tagline}</p>
      </div>
      <span className="h-px w-8 bg-sun/70 transition-all duration-300 group-hover:w-14" />
    </Link>
  );
}
