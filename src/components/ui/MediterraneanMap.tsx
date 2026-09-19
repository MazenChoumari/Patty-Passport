"use client";

import { countries } from "@/data/countries";
import { MAP_POSITIONS, REGION_ORDER, REGION_COLORS } from "@/data/mapPositions";

const SEA_PATH =
  "M175,255 C215,175 300,130 385,158 C430,172 445,215 465,255 C495,195 555,180 600,222 C625,250 635,272 655,258 C695,205 745,195 778,232 C808,262 815,295 795,325 C815,350 805,382 775,395 C745,408 715,425 685,412 C645,432 595,422 555,410 C500,432 445,420 415,398 C375,420 335,408 315,388 C275,408 225,398 205,368 C180,345 160,315 172,282 Z";

const ROUTE_ORDER: string[] = REGION_ORDER.flatMap((region) =>
  countries.filter((c) => c.route === region).map((c) => c.slug)
);

const ROUTE_PATH_D = (() => {
  const pts = ROUTE_ORDER.map((slug) => MAP_POSITIONS[slug]).filter(Boolean);
  if (pts.length === 0) return "";
  const [first, ...rest] = pts;
  return `M${first.x},${first.y} ` + rest.map((p) => `L${p.x},${p.y}`).join(" ") + " Z";
})();

export function MediterraneanMap({
  activeSlug,
  onHoverSlug,
}: {
  activeSlug?: string;
  onHoverSlug?: (slug: string) => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-4xl" style={{ aspectRatio: "1000 / 560" }}>
      <svg
        viewBox="0 0 1000 560"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="chartGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="seaGradient" cx="45%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#12617a" />
            <stop offset="100%" stopColor="#073042" />
          </radialGradient>
        </defs>

        <rect width="1000" height="560" fill="url(#chartGrid)" />

        {/* Chart corner ticks */}
        {[
          [24, 24, 24, 48, 48, 24],
          [976, 24, 976, 48, 952, 24],
          [24, 536, 24, 512, 48, 536],
          [976, 536, 976, 512, 952, 536],
        ].map((pts, i) => (
          <polyline
            key={i}
            points={`${pts[0]},${pts[1]} ${pts[0]},${pts[1]} ${pts[2]},${pts[3]}`}
            fill="none"
            stroke="var(--color-brand-yellow)"
            strokeWidth="2"
            opacity="0.5"
          />
        ))}

        <path d={SEA_PATH} fill="url(#seaGradient)" stroke="var(--color-brand-yellow)" strokeWidth="1.5" opacity="0.95" />
        <path
          d={SEA_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          strokeDasharray="1 8"
        />

        {/* Route loop connecting regions in order */}
        <path
          d={ROUTE_PATH_D}
          fill="none"
          stroke="var(--color-brand-yellow)"
          strokeWidth="2"
          strokeDasharray="1 10"
          strokeLinecap="round"
          opacity="0.9"
        />
        <text fontSize="30">
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" path={ROUTE_PATH_D} />
          ✈️
        </text>

        {/* Compass rose */}
        <g transform="translate(908, 480)" opacity="0.8">
          <circle r="34" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="1.5" />
          <path d="M0,-28 L6,0 L0,28 L-6,0 Z" fill="var(--color-brand-red)" />
          <path d="M-28,0 L0,-6 L28,0 L0,6 Z" fill="var(--color-brand-yellow)" opacity="0.7" />
          <text y="-40" textAnchor="middle" fontSize="14" fill="var(--color-brand-yellow)" fontFamily="var(--font-bebas)">
            N
          </text>
        </g>

        <text
          x="40"
          y="60"
          fontSize="20"
          letterSpacing="3"
          fill="var(--color-brand-yellow)"
          fontFamily="var(--font-bebas)"
        >
          MEDITERRANEAN BASIN — ROUTE CHART
        </text>
      </svg>

      {countries.map((c) => {
        const pos = MAP_POSITIONS[c.slug];
        if (!pos) return null;
        const isActive = c.slug === activeSlug;
        const color = REGION_COLORS[c.route];
        return (
          <button
            key={c.slug}
            type="button"
            title={c.name}
            onMouseEnter={() => onHoverSlug?.(c.slug)}
            onFocus={() => onHoverSlug?.(c.slug)}
            style={{ left: `${(pos.x / 1000) * 100}%`, top: `${(pos.y / 560) * 100}%` }}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-200 ${
              isActive
                ? "z-10 h-12 w-12 scale-110 text-2xl shadow-[0_0_0_4px_rgba(255,255,255,0.25)]"
                : "h-8 w-8 text-base opacity-90 hover:scale-110"
            }`}
            data-color={color}
          >
            <span
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: color }}
              aria-hidden="true"
            />
            <span className="relative">{c.flagEmoji}</span>
          </button>
        );
      })}
    </div>
  );
}
