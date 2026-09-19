import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-2.5"
      aria-label="Patty Passport — home"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22.5" fill="var(--color-brand-navy)" />
        <circle cx="24" cy="24" r="22.5" stroke="var(--color-brand-yellow)" strokeWidth="1.5" />
        <path
          d="M3 27c5-3 9 4 21 4s16-7 21-4"
          stroke="var(--color-brand-sky)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 31.5c5.5-3 9.5 4 22 4s16.5-7 22-4"
          stroke="var(--color-brand-sky)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <g transform="rotate(-9 24 20)">
          <rect x="7" y="14" width="34" height="13" rx="2" fill="var(--color-brand-red)" />
          <text
            x="24"
            y="23.5"
            textAnchor="middle"
            fontFamily="var(--font-bebas), sans-serif"
            fontSize="12"
            letterSpacing="1"
            fill="white"
          >
            PP
          </text>
        </g>
        <circle cx="37" cy="12" r="5.5" fill="var(--color-brand-yellow)" stroke="var(--color-brand-navy)" strokeWidth="1.2" />
        <path
          d="M35 12l1.4 1.4L39.2 10.4"
          stroke="var(--color-brand-navy)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {!compact && (
        <span className="font-shout text-2xl leading-none tracking-wide text-navy">
          PATTY PASSPORT
        </span>
      )}
    </Link>
  );
}
