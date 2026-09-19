"use client";

import { useState } from "react";
import { PassportProgress } from "@/components/ui/PassportProgress";

export function RewardsSection() {
  const [stamps, setStamps] = useState(5);

  return (
    <section className="bg-sky-light py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
          The Patty Passport reward ladder
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-navy-light">
          Every destination you check into earns a stamp. Watch your passport fill up — kids have
          their own smaller version of this ladder.
        </p>
        <div className="mt-8">
          <PassportProgress stamps={stamps} onChange={setStamps} />
        </div>
      </div>
    </section>
  );
}
