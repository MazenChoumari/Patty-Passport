import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { ComboSection } from "@/components/menu/ComboSection";
import { RewardsSection } from "@/components/menu/RewardsSection";

export const metadata: Metadata = {
  title: "Menu & Rewards — Patty Passport",
  description: "The full Route Map menu, combos, dietary tags, and the passport stamp reward ladder.",
};

const DIETARY_TAGS = [
  "Halal-friendly",
  "Kosher-sensitive",
  "No pork",
  "Alcohol-free",
  "Vegetarian",
  "Vegan-friendly",
  "Contains alcohol",
  "Contains nuts",
  "Contains dairy",
];

export default function MenuPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream py-16 sm:py-20">
        <CloudLayer />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <SectionHeading
            eyebrow="The Route Map"
            title="Menu & Rewards"
            subtitle="Every item priced from our global price grid — same prices everywhere, only the flavors change by destination."
          />
          <div className="mt-6 rounded-2xl border border-navy/10 bg-white/80 p-4 text-left">
            <p className="text-sm font-semibold text-navy">
              Patty Passport is open to everyone — halal-friendly, kosher-sensitive, vegetarian,
              vegan, alcohol-free or alcohol-friendly. We tag pork, alcohol and dietary info
              clearly rather than assuming one rule for all guests.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {DIETARY_TAGS.map((t) => (
                <Tag key={t} tone="sky">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <MenuBrowser />
        </div>
      </section>

      <ComboSection />
      <RewardsSection />
    </div>
  );
}
