import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0 group"
      aria-label="Patty Passport — home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform group-hover:-rotate-6"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="40" height="42" rx="6" fill="var(--color-brand-navy)" />
        <rect
          x="4"
          y="3"
          width="40"
          height="42"
          rx="6"
          stroke="var(--color-brand-yellow)"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="18" r="7" stroke="var(--color-brand-yellow)" strokeWidth="1.6" fill="none" />
        <path
          d="M24 11.5c-4 4-4 10 0 13M24 11.5c4 4 4 10 0 13M17.5 18h13"
          stroke="var(--color-brand-yellow)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M11 32c4-2.5 7-2.5 13 0s9 2.5 13 0"
          stroke="var(--color-brand-sky)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 30.5l4.2-1.6c.6-.2 1.2.4 1 1l-1.6 4.2-1-.3.6-2.6-2.4 2.2-.8-.7 2.2-2.4-2.6.6-.3-1z"
          fill="var(--color-brand-red)"
        />
      </svg>
      {!compact && (
        <span className="font-heading text-xl leading-none font-semibold text-navy">
          Patty Passport
        </span>
      )}
    </Link>
  );
}
