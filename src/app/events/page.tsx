import type { Metadata } from "next";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { EventEnquiryForm } from "@/components/events/EventEnquiryForm";
import { COMBO_GRID, EVENTS_PRICING, formatPrice } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Events & Birthdays — Patty Passport",
  description: "Kids birthday packages, group events, and seasonal menus at Patty Passport.",
};

const fullBuffets = COMBO_GRID.filter((c) => c.name.includes("Full Buffet"));

export default function EventsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream py-16 sm:py-20">
        <CloudLayer />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <SectionHeading
            eyebrow="Celebrate on the route"
            title="Events & Birthdays"
            subtitle="Kids birthdays, Country Nights for groups, and seasonal menus — all built around the check-in, boarding-ticket and passport-stamp journey."
          />
        </div>
      </section>

      {/* Kids birthday packages */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Kids birthday packages
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-navy/10 bg-sky-light p-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
                Weekdays
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
                Little Explorer Birthday
              </h3>
              <p className="mt-1 font-heading text-2xl font-bold text-passport-red">
                {formatPrice(EVENTS_PRICING.littleExplorer.pricePerChild)}
                <span className="text-sm font-medium text-navy-light"> / child</span>
              </p>
              <p className="text-xs text-navy-light">
                Minimum {EVENTS_PRICING.littleExplorer.minChildren} children
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-navy-light">
                <li>• 1 kids-size burger (any country, veg/chicken/beef)</li>
                <li>• Small fries + drink (soft or country cold drink)</li>
                <li>• Mini dessert</li>
                <li>• 2 hours kids&apos; play area access</li>
                <li>• Party hall with themed playlist</li>
                <li>• Birthday passport activity (3 countries stamped)</li>
                <li>• Goodie bag (stickers, small toy, country postcard)</li>
                <li>• Basic table covers/balloons (parents may add their own decor)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-sun-light p-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sun-dark">
                Weekends
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
                World Explorer Birthday
              </h3>
              <p className="mt-1 font-heading text-2xl font-bold text-passport-red">
                {formatPrice(EVENTS_PRICING.worldExplorer.pricePerChild)}
                <span className="text-sm font-medium text-navy-light"> / child</span>
              </p>
              <p className="text-xs text-navy-light">
                Minimum {EVENTS_PRICING.worldExplorer.minChildren} children
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-navy-light">
                <li>• Same food base, upgraded to a Full Country kids combo for the birthday child</li>
                <li>• Patty-Passport-provided decor (flags/banners/themed tables)</li>
                <li>• A host running games (passport quiz, &ldquo;find the country,&rdquo; dance)</li>
                <li>• Optional on-screen video with the birthday child&apos;s name and favorite countries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adult / mixed group events */}
      <section className="bg-sky-light py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Country Night — group events
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-navy-light">
            Per adult, our Full Buffet — burger + loaded fries + shared salad + soft/cold
            drink/local beer + dessert.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {fullBuffets.map((c) => (
              <div key={c.name} className="rounded-2xl border border-navy/10 bg-white p-5 text-center">
                <p className="font-heading font-semibold text-navy">{c.name.replace(" Full Buffet", "")}</p>
                <p className="mt-1 font-heading text-2xl font-bold text-passport-red">
                  {formatPrice(c.price)}
                </p>
                <p className="mt-1 text-xs text-navy-light">per adult</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 text-sm text-navy-light sm:grid-cols-3">
            <div className="rounded-2xl border border-navy/10 bg-white p-4">
              <p className="font-heading font-semibold text-navy">Kids bundle</p>
              <p className="mt-1">
                {formatPrice(EVENTS_PRICING.countryNightKidsBundle)}/child at the same event
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-4">
              <p className="font-heading font-semibold text-navy">Private hall fee</p>
              <p className="mt-1">
                {formatPrice(EVENTS_PRICING.countryNightHallFeeMin)}–
                {formatPrice(EVENTS_PRICING.countryNightHallFeeMax)} flat, for fully private use
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-4">
              <p className="font-heading font-semibold text-navy">Or group minimum</p>
              <p className="mt-1">
                {formatPrice(EVENTS_PRICING.countryNightMinSpend)}+ total, if not private
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal events */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Seasonal events
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-navy/10 bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Ramadan — &ldquo;Iftar Passport&rdquo;
              </h3>
              <p className="mt-2 text-sm text-navy-light">
                Dates + water to break fast, soup, 1 halal-friendly burger (no pork/no alcohol in
                recipe, any country), 1 loaded fries or side, 1 salad, 1 dessert, 1 cold
                non-alcoholic country drink.
              </p>
              <p className="mt-3 font-heading font-semibold text-passport-red">
                Adult {formatPrice(EVENTS_PRICING.ramadanAdult)} · Kids{" "}
                {formatPrice(EVENTS_PRICING.ramadanKids)}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag tone="sky">Halal-friendly</Tag>
                <Tag tone="sky">Alcohol-free</Tag>
                <Tag tone="sky">No pork</Tag>
              </div>
              <p className="mt-3 text-xs text-navy-light">
                No alcohol in the set menu by default; guests not observing Ramadan can order
                freely outside it.
              </p>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Lent — &ldquo;Sea Journey Menu&rdquo;
              </h3>
              <p className="mt-2 text-sm text-navy-light">
                Friday seafood combo — fish/seafood burger + regular fries + drink — with an
                optional dessert upgrade.
              </p>
              <p className="mt-3 font-heading font-semibold text-passport-red">
                {formatPrice(EVENTS_PRICING.lentFridayComboMin)}–
                {formatPrice(EVENTS_PRICING.lentFridayComboMax)}
              </p>
              <p className="mt-3 text-xs text-navy-light">
                Double passport stamps on these Friday sets during Lent.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-dashed border-navy/15 bg-sky-light/40 p-4 text-center text-sm text-navy-light">
            Other occasions — Christmas, Easter, Eid and more — bring limited-time &ldquo;Country
            of the Month&rdquo; menus and small stamp/price incentives, always respecting halal,
            kosher and vegetarian needs for that occasion.
          </div>
        </div>
      </section>

      {/* Inclusivity note */}
      <section className="bg-navy py-12 text-cream">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="font-heading text-lg font-semibold">
            Patty Passport is open to everyone
          </p>
          <p className="mt-2 text-cream/80">
            Halal-friendly, kosher-sensitive, vegetarian, vegan, alcohol-free or
            alcohol-friendly — our menu clearly tags pork, alcohol and dietary info rather than
            assuming one rule for all guests.
          </p>
        </div>
      </section>

      {/* Access info */}
      <section className="bg-sky-light py-10">
        <div className="mx-auto max-w-2xl px-4 text-center text-sm text-navy-light">
          <p>
            We offer 40-50 surface parking spaces around the building, with clear signage for
            each route.
          </p>
          <p className="mt-1">
            Bus connections: lines L1, L3 and L7 stop at &ldquo;Parque Tecnológico – Patty
            Passport,&rdquo; a short walk from our entrance.{" "}
            <span className="text-xs italic">
              (Illustrative placeholder — confirm real line numbers before launch.)
            </span>
          </p>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionHeading
            eyebrow="Plan your event"
            title="Send us an enquiry"
            subtitle="Front-end demo only for now — no request is actually sent yet."
          />
          <div className="mt-8">
            <EventEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
