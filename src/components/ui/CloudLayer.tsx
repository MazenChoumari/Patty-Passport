export function CloudLayer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute -top-8 left-[-10%] w-[140%] animate-drift">
        <CloudRow />
        <CloudRow />
      </div>
    </div>
  );
}

function CloudRow() {
  return (
    <svg
      viewBox="0 0 1600 200"
      className="inline-block w-1/2 opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[80, 420, 760, 1100, 1400].map((x, i) => (
        <g key={x} opacity={0.6 + (i % 3) * 0.15}>
          <ellipse cx={x} cy={100} rx="90" ry="34" fill="white" />
          <ellipse cx={x + 60} cy={85} rx="60" ry="26" fill="white" />
          <ellipse cx={x - 60} cy={90} rx="55" ry="24" fill="white" />
        </g>
      ))}
    </svg>
  );
}
