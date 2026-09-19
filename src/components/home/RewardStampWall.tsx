import { REWARD_LADDER } from "@/data/pricing";

const TOTAL = 21;
const MILESTONES = new Set(REWARD_LADDER.map((r) => r.stamps));

export function RewardStampWall({ filled = 6 }: { filled?: number }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="grid grid-cols-7 gap-3 rounded-xl border-2 border-white/20 bg-black/10 p-6">
        {Array.from({ length: TOTAL }, (_, i) => {
          const n = i + 1;
          const isFilled = n <= filled;
          const isMilestone = MILESTONES.has(n as never);
          return (
            <div
              key={n}
              className={`relative flex aspect-square items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                isFilled
                  ? "animate-stamp-in border-white bg-white/15 text-white"
                  : "border-white/25 text-white/40"
              } ${isMilestone ? "ring-2 ring-sun ring-offset-2 ring-offset-passport-red" : ""}`}
              style={isFilled ? { animationDelay: `${i * 60}ms` } : undefined}
            >
              {isFilled ? "✓" : n}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {REWARD_LADDER.map((r) => (
          <span
            key={r.stamps}
            className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white"
          >
            {r.stamps} → {r.reward}
          </span>
        ))}
      </div>
    </div>
  );
}
