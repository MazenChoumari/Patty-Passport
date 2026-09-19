import { Button } from "@/components/ui/Button";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoardingTicket } from "@/components/ui/BoardingTicket";
import { CountryCarousel } from "@/components/ui/CountryCarousel";
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

const MAP_FLAGS = countries.filter((c) =>
  ["lebanon", "greece", "italy", "spain", "turkey", "morocco"].includes(c.slug)
);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-cream to-cream pt-16 pb-24 sm:pt-24">
        <CloudLayer />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky-dark">
            Mediterranean journeys. Global flavors.
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold text-navy sm:text-6xl">
            Patty Passport
          </h1>
          <p className="mt-4 font-heading text-xl font-semibold text-passport-red sm:text-2xl">
            Stamp your way through flavor.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-navy-light">
            You don&apos;t come to Patty Passport just to eat a burger — you check in for a
            destination.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="#booking">Get Your Boarding Pass</Button>
            <Button href="/destinations" variant="outline">
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Scene 1 — Concept snapshot */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-5xl">🗺️</p>
          <div className="relative mx-auto mt-6 flex max-w-2xl items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-sky/40" />
            {MAP_FLAGS.map((c) => (
              <span key={c.slug} className="relative text-3xl" role="img" aria-label={c.name}>
                {c.flagEmoji}
              </span>
            ))}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[140%] text-2xl">
              ✈️
            </span>
          </div>
          <div className="mt-10 space-y-3">
            {CONCEPT_LINES.map((line) => (
              <p key={line} className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Scene 2 — Journey structure */}
      <section className="bg-sky-light py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="How it works" title="Check in to the world" />
          <ol className="mt-10 space-y-4">
            {JOURNEY_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-passport-red font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-navy">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scene 3 — Boarding ticket example */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading
            eyebrow="Your ticket, printed"
            title="Boarding Ticket — Lebanon"
            subtitle="Every order arrives as a boarding pass. Here's what checking in to Lebanon looks like."
          />
          <div className="mt-10">
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
          <Button href="/destinations/lebanon" className="mt-8">
            Visit Lebanon&apos;s Destination Page
          </Button>
        </div>
      </section>

      {/* Scene 4 — Auto-scroll country cards */}
      <section className="bg-sky-light py-20">
        <SectionHeading
          eyebrow="21 destinations and counting"
          title="Pick your next route"
          subtitle="Flip through every country on the Patty Passport route map."
        />
        <div className="mt-10">
          <CountryCarousel />
        </div>
      </section>

      {/* Scene 5 — Experience promise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            One sea. Many cultures. Endless flavor.
          </h2>
          <ul className="mx-auto mt-10 grid max-w-2xl gap-4 text-left">
            {PROMISE_BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-cream p-4"
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
      <section id="booking" className="relative overflow-hidden bg-navy py-20 text-cream">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Ready to check in?</h2>
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
        <div id="booking-form" className="relative mt-14 px-4">
          <ReservationForm />
        </div>
      </section>
    </div>
  );
}
