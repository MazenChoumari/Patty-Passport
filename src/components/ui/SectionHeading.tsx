export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /** "dark" = navy text for light backgrounds (default), "light" = white/cream text for dark backgrounds */
  tone?: "dark" | "light";
}) {
  const eyebrowClass =
    tone === "light"
      ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
      : "text-sky-dark";
  const titleClass =
    tone === "light" ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]" : "text-navy";
  const subtitleClass = tone === "light" ? "text-cream/90" : "text-navy-light";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`mb-2 font-heading text-sm font-semibold uppercase tracking-wide ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl font-semibold sm:text-4xl ${titleClass}`}>{title}</h2>
      {subtitle && <p className={`mt-3 ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
}
