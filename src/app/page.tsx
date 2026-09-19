import { Button } from "@/components/ui/Button";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream py-24">
      <CloudLayer />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <SectionHeading
          eyebrow="Mediterranean journeys. Global flavors."
          title="Patty Passport"
          subtitle="Stamp your way through flavor. The full Home experience is boarding soon — design system check-in complete."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#booking">Get Your Boarding Pass</Button>
          <Button href="/destinations" variant="outline">
            Explore Destinations
          </Button>
        </div>
      </div>
    </div>
  );
}
