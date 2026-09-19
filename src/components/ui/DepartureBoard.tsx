const STATUSES = ["ON TIME", "BOARDING", "READY", "SERVED", "STAMPED"];

export function DepartureBoard({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-lg border-4 border-[#2a2f38] bg-ink p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between rounded-t-sm bg-[#1a1e26] px-4 py-2.5">
        <span className="font-shout text-sm tracking-[0.2em] text-sun sm:text-base">
          PATTY PASSPORT — DEPARTURES
        </span>
        <span className="font-mono text-xs text-sun/70">GATE: ALL ROUTES</span>
      </div>
      <div className="divide-y divide-white/10 border-t border-white/10">
        <div className="grid grid-cols-[2.5rem_1fr_6.5rem] gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/40 sm:grid-cols-[3rem_1fr_8rem] sm:text-xs">
          <span>No.</span>
          <span>Route</span>
          <span className="text-right">Status</span>
        </div>
        {steps.map((step, i) => (
          <div
            key={step}
            className="grid grid-cols-[2.5rem_1fr_6.5rem] items-center gap-2 px-4 py-3.5 font-mono sm:grid-cols-[3rem_1fr_8rem]"
          >
            <span className="text-sun">{String(i + 1).padStart(2, "0")}</span>
            <span className="truncate text-sm text-white sm:text-base">{step}</span>
            <span
              className="animate-flicker text-right text-xs font-bold uppercase tracking-wide text-sun sm:text-sm"
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              {STATUSES[i % STATUSES.length]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
