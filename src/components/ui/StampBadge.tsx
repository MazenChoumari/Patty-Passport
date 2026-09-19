export function StampBadge({
  children,
  className = "",
  tilt = -8,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <span
      className={`inline-flex animate-stamp-in items-center justify-center rounded-full border-[3px] border-double border-current px-4 py-2 text-center font-heading text-xs font-bold uppercase leading-tight tracking-wider ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  );
}
