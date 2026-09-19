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
  const tilt = destinationNumber % 3 === 0 ? "-1.5deg" : destinationNumber % 3 === 1 ? "1deg" : "-0.5deg";

  return (
    <Link
      href={`/destinations/${slug}`}
      onMouseEnter={() => onHover?.(slug)}
      onFocus={() => onHover?.(slug)}
      style={{ ["--tilt" as string]: tilt }}
      className={`group relative flex w-56 shrink-0 flex-col gap-3 rounded-2xl border-2 border-dashed border-navy/15 bg-[repeating-linear-gradient(135deg,rgba(79,182,232,0.05)_0px,rgba(79,182,232,0.05)_2px,transparent_2px,transparent_14px)] bg-cream p-5 pt-8 shadow-[0_6px_16px_-4px_rgba(22,50,79,0.18)] transition-all duration-300 [transform:rotate(var(--tilt))] hover:z-10 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_16px_32px_-8px_rgba(216,68,60,0.35)] ${className}`}
    >
      <span
        className="absolute -top-3 right-4 flex h-12 w-12 rotate-[-10deg] items-center justify-center rounded-full border-2 border-dashed border-passport-red bg-white text-[10px] font-bold uppercase leading-none text-passport-red shadow-sm"
        aria-hidden="true"
      >
        <span className="flex flex-col items-center">
          <span className="text-[8px]">PP</span>
          <span className="text-sm">#{String(destinationNumber).padStart(2, "0")}</span>
        </span>
      </span>
      <span
        className="text-5xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
        role="img"
        aria-label={`${name} flag`}
      >
        {flagEmoji}
      </span>
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-passport-red">
          {name}
        </h3>
        <p className="mt-1 text-sm italic text-navy-light">{tagline}</p>
      </div>
    </Link>
  );
}
