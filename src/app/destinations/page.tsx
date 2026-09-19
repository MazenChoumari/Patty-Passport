import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations — Patty Passport",
  description: "Where should we head next? All 21 destinations on the Patty Passport route map.",
};

export default function DestinationsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream py-16 sm:py-20">
        <CloudLayer />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <SectionHeading
            eyebrow="21 destinations on the route map"
            title="Where should we head next?"
            subtitle="Hover a flag or a card to preview the destination, or pick one to check in right away."
          />
        </div>
      </section>

      <DestinationsExplorer />
    </div>
  );
}
