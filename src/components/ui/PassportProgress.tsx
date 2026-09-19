"use client";

import { countries } from "@/data/countries";
import { REWARD_LADDER } from "@/data/pricing";

const TOTAL_STAMPS = countries.length;

export function PassportProgress({
  stamps,
  onChange,
}: {
  stamps: number;
  onChange?: (value: number) => void;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap justify-center gap-1.5 rounded-3xl border border-navy/10 bg-white p-5">
        {Array.from({ length: TOTAL_STAMPS }, (_, i) => {
          const filled = i < stamps;
          const country = countries[i];
          return (
            <span
              key={i}
              title={filled ? `Stamped: ${country?.name ?? ""}` : "Not yet stamped"}
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-colors ${
                filled
                  ? "border-passport-red bg-passport-red-light text-passport-red-dark"
                  : "border-navy/15 bg-cream text-navy/20"
              }`}
            >
              {filled ? "✓" : i + 1}
            </span>
          );
        })}
      </div>

      {onChange && (
        <div className="mt-4 flex items-center gap-3">
          <label htmlFor="stamp-demo" className="text-sm font-medium text-navy-light">
            Demo: stamps collected
          </label>
          <input
            id="stamp-demo"
            type="range"
            min={0}
            max={TOTAL_STAMPS}
            value={stamps}
            onChange={(e) => onChange(Number(e.target.value))}
            className="flex-1 accent-passport-red"
          />
          <span className="w-8 text-sm font-semibold text-navy">{stamps}</span>
        </div>
      )}

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {REWARD_LADDER.map((r) => {
          const unlocked = stamps >= r.stamps;
          return (
            <li
              key={r.stamps}
              className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm ${
                unlocked
                  ? "border-sun bg-sun-light text-navy"
                  : "border-navy/10 bg-cream text-navy-light"
              }`}
            >
              <span>
                <strong>{r.stamps} destinations</strong> → {r.reward}
              </span>
              {unlocked && <span aria-hidden="true">🎉</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
