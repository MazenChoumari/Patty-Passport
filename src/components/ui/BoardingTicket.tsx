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
    ["Passenger", passenger],
    ["Seat", seat],
    ["Route", route],
    ["Gate", gate],
  ];

  return (
    <div className="relative mx-auto flex max-w-xl overflow-visible rounded-xl border-2 border-navy bg-white shadow-[6px_6px_0_0_var(--color-brand-navy)]">
      <div className="flex-1 bg-[linear-gradient(180deg,#fffdf8,white)] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="font-shout text-xs tracking-[0.3em] text-passport-red-dark">
            PATTY PASSPORT ROUTES
          </p>
          <span aria-hidden="true" className="text-lg">
            ✈️
          </span>
        </div>
        <p className="font-display mt-3 text-2xl font-bold text-navy sm:text-3xl">{destination}</p>
        <p className="text-sm text-navy-light">{meal}</p>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t-2 border-dashed border-navy/20 pt-4 text-sm">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-navy-light/70">
                {label}
              </dt>
              <dd className="font-shout text-base text-navy">{value}</dd>
            </div>
          ))}
        </dl>

        <div aria-hidden="true" className="mt-5 flex h-6 items-end gap-[3px] opacity-70">
          {Array.from({ length: 38 }, (_, i) => (
            <span
              key={i}
              className="bg-navy"
              style={{ width: 2, height: i % 5 === 0 ? "100%" : i % 3 === 0 ? "70%" : "45%" }}
            />
          ))}
        </div>
      </div>

      {/* perforation dots between stub and body */}
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[calc(100%-8rem)] flex w-0 flex-col justify-between py-2 sm:left-[calc(100%-8.5rem)]"
      >
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className="-ml-1.5 h-3 w-3 rounded-full bg-cream" />
        ))}
      </div>

      <div className="relative flex w-28 flex-col items-center justify-center gap-2 border-l-2 border-navy bg-sky p-4 text-center text-white sm:w-32">
        <span className="text-4xl drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]" aria-hidden="true">
          {flagEmoji}
        </span>
        <p className="text-[9px] font-semibold uppercase tracking-wide text-white/70">
          Boarding No.
        </p>
        <p className="font-shout text-base tracking-wide">{boardingNumber}</p>
        <span
          aria-hidden="true"
          className="animate-stamp-in pointer-events-none absolute -right-3 -top-3 flex h-14 w-14 rotate-[-18deg] items-center justify-center rounded-full border-2 border-passport-red bg-white text-[8px] font-bold uppercase tracking-wide text-passport-red"
        >
          Confirmed
        </span>
      </div>
    </div>
  );
}
