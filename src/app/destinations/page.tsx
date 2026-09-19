import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
          <SectionHeading
            eyebrow="21 destinations on the route map"
            title="Where should we head next?"
            subtitle="Hover a flag or a card to preview the destination, or pick one to check in right away."
            tone="light"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] leading-[0]">
          <WaveDivider color="var(--color-brand-cream)" />
        </div>
      </section>

      <DestinationsExplorer />
    </div>
  );
}
