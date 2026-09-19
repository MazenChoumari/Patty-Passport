export function SunGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-64 w-64 rounded-full blur-2xl sm:h-96 sm:w-96 ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,225,150,0.9) 0%, rgba(255,180,110,0.55) 45%, transparent 75%)",
      }}
    />
  );
}
