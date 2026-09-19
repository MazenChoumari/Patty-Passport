const PATH = "M 20,140 C 160,20 300,180 440,60 C 560,-30 680,150 780,50";

export function FlightRoute({ flags }: { flags: { emoji: string; label: string }[] }) {
  const n = flags.length;

  return (
    <svg viewBox="0 0 800 200" className="mx-auto w-full max-w-3xl" aria-hidden="true">
      <path
        d={PATH}
        fill="none"
        stroke="var(--color-brand-yellow)"
        strokeWidth="2.5"
        strokeDasharray="1 11"
        strokeLinecap="round"
        opacity={0.85}
      />
      <text fontSize="34">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={PATH} />
        ✈️
      </text>
      {flags.map((f, i) => {
        const t = n === 1 ? 0 : i / (n - 1);
        // Approximate evenly spaced points along the path's x-range for marker placement.
        const x = 20 + t * 760;
        const y = 60 + Math.sin(t * Math.PI * 2.1) * 70;
        return (
          <g key={f.label} transform={`translate(${x}, ${y})`}>
            <circle r="20" fill="white" stroke="var(--color-brand-sun)" strokeWidth="2" />
            <text textAnchor="middle" dominantBaseline="central" fontSize="22">
              {f.emoji}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
