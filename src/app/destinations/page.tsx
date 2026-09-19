import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations — Patty Passport",
  description: "Where should we head next? All 21 destinations on the Patty Passport route map.",
};

export default function DestinationsPage() {
  return (
    <div className="overflow-hidden">
      <section className="bg-grain bg-terminal-sky relative overflow-hidden pt-16 pb-32 sm:pt-20 sm:pb-40">
        <CloudLayer tone="dark" />
        <div className="relative z-[2] mx-auto max-w-2xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-white sm:text-base">
            21 DESTINATIONS ON THE ROUTE MAP
          </p>
          <h1 className="font-shout mt-4 text-6xl text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-7xl">
            WHERE TO NEXT?
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/90">
            Hover a flag on the chart or a card below to preview the destination, or pick one to
            check in right away.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] leading-[0]">
          <WaveDivider color="#0c0e12" />
        </div>
      </section>

      <DestinationsExplorer />
    </div>
  );
}
