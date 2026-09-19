export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-navy-light">{subtitle}</p>}
    </div>
  );
}
