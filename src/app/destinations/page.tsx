import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SunGlow } from "@/components/ui/SunGlow";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations — Patty Passport",
  description: "Where should we head next? All 21 destinations on the Patty Passport route map.",
};

export default function DestinationsPage() {
  return (
    <div className="overflow-hidden">
      <section className="bg-grain bg-sunset-sky relative overflow-hidden pt-16 pb-32 sm:pt-20 sm:pb-40">
        <SunGlow className="left-1/2 top-[-9rem] -translate-x-1/2 opacity-70" />
        <CloudLayer tone="dark" />
        <div className="relative z-[2] mx-auto max-w-2xl px-4 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            21 destinations on the route map
          </p>
          <h1 className="font-display mt-5 text-5xl font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-6xl">
            Where should we head next?
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-cream/90">
            Hover a flag or a card to preview the destination, or pick one to check in right away.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] leading-[0]">
          <WaveDivider color="#fbf6ec" />
        </div>
      </section>

      <DestinationsExplorer />
    </div>
  );
}
