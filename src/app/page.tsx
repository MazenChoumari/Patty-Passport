import { Button } from "@/components/ui/Button";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoardingTicket } from "@/components/ui/BoardingTicket";
import { CountryCarousel } from "@/components/ui/CountryCarousel";
import { FlightRoute } from "@/components/ui/FlightRoute";
import { StampBadge } from "@/components/ui/StampBadge";
import { SunGlow } from "@/components/ui/SunGlow";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ReservationForm } from "@/components/home/ReservationForm";
import { OpenTootyButton } from "@/components/ui/OpenTootyButton";
import { countries } from "@/data/countries";

const CONCEPT_LINES = [
  "Every burger is a journey.",
  "Your passport to unforgettable flavor.",
  "Collect the world, one burger at a time.",
];

const JOURNEY_STEPS = [
  "Check in at the Patty Passport desk.",
  "Choose your destination: Lebanon, Greece, Italy, Spain… or more.",
  "Receive your boarding ticket.",
  "Discover your country through burger, fries, salad, drink, dessert, music, facts and activities.",
  "Stamp your passport. Plan your next route.",
];

const PROMISE_BULLETS = [
  "We connect you with cultures and heritage, one destination at a time.",
  "We mix education and fun: language, facts, stories, playlists and activities.",
  "No matter who you are, you are welcome: halal, kosher-sensitive, vegetarian, alcohol-free, or cocktail lovers — there is a lane for you.",
];

const MAP_FLAGS = countries
  .filter((c) => ["lebanon", "greece", "italy", "spain", "turkey", "morocco"].includes(c.slug))
  .map((c) => ({ emoji: c.flagEmoji, label: c.name }));

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-grain bg-sunset-sky relative overflow-hidden pt-16 pb-40 sm:pt-24 sm:pb-48">
        <SunGlow className="left-1/2 top-[-9rem] -translate-x-1/2 opacity-70" />
        <CloudLayer tone="dark" />
        <div className="relative z-[2] mx-auto max-w-3xl px-4 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            Mediterranean journeys. Global flavors.
          </p>
          <h1 className="font-display mt-5 text-6xl font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-8xl">
            Patty Passport
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold text-sun drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-2xl">
            Stamp your way through flavor.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/90">
            You don&apos;t come to Patty Passport just to eat a burger — you check in for a
            destination.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="#booking">Get Your Boarding Pass</Button>
            <Button href="/destinations" variant="outline">
              Explore Destinations
            </Button>
          </div>
          <StampBadge className="mt-12 text-sun" tilt={-6}>
            21 destinations · now boarding
          </StampBadge>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] leading-[0]">
          <WaveDivider color="#fbf6ec" />
        </div>
      </section>

      {/* Scene 1 — Concept snapshot */}
      <section className="bg-linen py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="bg-sea-chart mx-auto max-w-2xl rounded-[2rem] p-6 shadow-[0_24px_48px_-24px_rgba(6,20,25,0.5)] sm:p-8">
            <FlightRoute flags={MAP_FLAGS} />
          </div>
          <div className="mt-10 space-y-3">
            {CONCEPT_LINES.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? "font-display text-3xl font-bold text-navy sm:text-4xl"
                    : "font-heading text-lg text-navy-light sm:text-xl"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Scene 2 — Journey structure */}
      <section className="bg-sea-chart relative py-20 text-cream">
        <div className="relative mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="How it works" title="Check in to the world" tone="light" />
          <ol className="mt-10 space-y-4">
            {JOURNEY_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.1]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sun/60 font-heading text-sm font-bold text-sun">
                  {i + 1}
                </span>
                <span className="pt-1 text-cream/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scene 3 — Boarding ticket example */}
      <section className="bg-linen relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <SectionHeading
            eyebrow="Your ticket, printed"
            title="Boarding Ticket — Lebanon"
            subtitle="Every order arrives as a boarding pass. Here's what checking in to Lebanon looks like."
          />
          <div className="mt-12">
            <BoardingTicket
              destination="Lebanon"
              flagEmoji="🇱🇧"
              route="MED-12"
              passenger="Mazen"
              seat="Table 4"
              meal="Beirut Street Shish Tawouk Combo"
              gate="Levant Route"
              boardingNumber="PP-LBN-2026"
            />
          </div>
          <Button href="/destinations/lebanon" className="mt-10">
            Visit Lebanon&apos;s Destination Page
          </Button>
        </div>
      </section>

      {/* Scene 4 — Auto-scroll country cards */}
      <section className="bg-linen py-20">
        <SectionHeading
          eyebrow="21 destinations and counting"
          title="Pick your next route"
          subtitle="Flip through every country on the Patty Passport route map."
        />
        <div className="mt-12">
          <CountryCarousel />
        </div>
      </section>

      {/* Scene 5 — Experience promise */}
      <section className="bg-gradient-to-b from-sun-light/50 via-cream to-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            One sea. Many cultures. Endless flavor.
          </h2>
          <ul className="mx-auto mt-10 grid max-w-2xl gap-4 text-left">
            {PROMISE_BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white/70 p-4"
              >
                <span className="mt-0.5 text-sun-dark" aria-hidden="true">
                  ★
                </span>
                <span className="text-navy-light">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scene 6 — Call to action + booking */}
      <section
        id="booking"
        className="bg-night-sky stars relative overflow-hidden py-20 text-cream"
      >
        <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to check in?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="#booking-form">Reserve Your Flight</Button>
            <Button href="/menu" variant="secondary">
              See Routes &amp; Menu
            </Button>
            <OpenTootyButton className="bg-transparent! text-cream! border-cream/30! hover:border-sun!">
              Meet Patty Tooty (your travel buddy)
            </OpenTootyButton>
          </div>
        </div>
        <div id="booking-form" className="relative z-[1] mt-14 px-4">
          <ReservationForm />
        </div>
      </section>
    </div>
  );
}
