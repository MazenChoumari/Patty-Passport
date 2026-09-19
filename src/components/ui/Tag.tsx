const TONE_CLASSES = {
  neutral: "bg-cream-dark text-navy-light",
  sky: "bg-sky-light text-sky-dark",
  yellow: "bg-sun-light text-sun-dark",
  red: "bg-passport-red-light text-passport-red-dark",
} as const;

export function Tag({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONE_CLASSES;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
