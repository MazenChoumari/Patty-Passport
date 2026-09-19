export function WaveDivider({
  color,
  flip = false,
  className = "",
}: {
  /** CSS color for the wave fill — should match the section that follows/precedes it */
  color: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,90 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
        fill={color}
      />
    </svg>
  );
}
