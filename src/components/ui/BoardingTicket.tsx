export function BoardingTicket({
  destination,
  flagEmoji,
  route,
  passenger,
  seat,
  meal,
  gate,
  boardingNumber,
}: {
  destination: string;
  flagEmoji: string;
  route: string;
  passenger: string;
  seat: string;
  meal: string;
  gate: string;
  boardingNumber: string;
}) {
  const rows: [string, string][] = [
    ["Destination", `${destination} ${flagEmoji}`],
    ["Route", route],
    ["Passenger", passenger],
    ["Seat", seat],
    ["Meal", meal],
    ["Gate", gate],
  ];

  return (
    <div className="relative mx-auto flex max-w-xl overflow-hidden rounded-2xl border-2 border-dashed border-navy/20 bg-white shadow-xl">
      <div className="flex-1 p-6 sm:p-8">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-sky-dark">
          Patty Passport Routes
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase tracking-wide text-navy-light/70">{label}</dt>
              <dd className="font-heading font-semibold text-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex w-28 flex-col items-center justify-center gap-2 border-l-2 border-dashed border-navy/20 bg-sky-light p-4 text-center sm:w-32">
        <span className="text-3xl" aria-hidden="true">
          {flagEmoji}
        </span>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-sky-dark">
          Boarding No.
        </p>
        <p className="font-heading text-sm font-bold text-navy">{boardingNumber}</p>
      </div>
      {/* ticket notch */}
      <div className="absolute left-[calc(100%-8rem)] top-1/2 -mt-2 h-4 w-4 -translate-x-1/2 rounded-full bg-cream sm:left-[calc(100%-8.5rem)]" />
    </div>
  );
}
