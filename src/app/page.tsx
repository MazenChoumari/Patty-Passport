import { Button } from "@/components/ui/Button";
import { CloudLayer } from "@/components/ui/CloudLayer";
import { BoardingTicket } from "@/components/ui/BoardingTicket";
import { MediterraneanMap } from "@/components/ui/MediterraneanMap";
import { DepartureBoard } from "@/components/ui/DepartureBoard";
import { StampBadge } from "@/components/ui/StampBadge";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { RewardStampWall } from "@/components/home/RewardStampWall";
import { FoodMontage } from "@/components/home/FoodMontage";
import { RegionRow } from "@/components/destinations/RegionRow";
import { ReservationForm } from "@/components/home/ReservationForm";
import { OpenTootyButton } from "@/components/ui/OpenTootyButton";
import { countries } from "@/data/countries";
import { REGION_ORDER } from "@/data/mapPositions";

const JOURNEY_STEPS = [
  "PP-DESK — Check in at the Patty Passport counter",
  "PP-MAP — Choose your destination on the route map",
  "PP-TKT — Receive your printed boarding ticket",
  "PP-EAT — Taste the destination: burger, sides, drink, dessert",
  "PP-STP — Stamp your passport, plan the next route",
];

const PROMISE_BULLETS = [
  "We connect you with cultures and heritage, one destination at a time.",
  "We mix education and fun: language, facts, stories, playlists and activities.",
  "No matter who you are, you are welcome: halal, kosher-sensitive, vegetarian, alcohol-free, or cocktail lovers — there is a lane for you.",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Scene 1 — Terminal intro */}
      <section className="bg-grain bg-terminal-sky relative overflow-hidden pt-16 pb-40 sm:pt-24 sm:pb-48">
        <CloudLayer tone="dark" />
        <div className="relative z-[2] mx-auto max-w-3xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.35em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-base">
            MEDITERRANEAN JOURNEYS · GLOBAL FLAVORS
          </p>
          <h1 className="font-shout mt-5 text-7xl leading-[0.95] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)] sm:text-9xl">
            PATTY
            <br />
            PASSPORT
          </h1>
          <p className="font-display mt-6 text-2xl italic font-bold text-sun drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl">
            &ldquo;Stamp your way through flavor.&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            You don&apos;t come here just to eat a burger — you check in for a destination.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4 text-white">
            <Button href="#booking">Get Your Boarding Pass</Button>
            <Button href="/destinations" variant="outline" className="border-white! text-white!">
              Explore Destinations
            </Button>
          </div>
          <StampBadge className="mt-12 text-white" tilt={-6}>
            21 destinations · now boarding
          </StampBadge>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] leading-[0]">
          <WaveDivider color="#fbf3e4" />
        </div>
      </section>

      {/* Scene 2 — Route map */}
      <section className="bg-ink relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-sun">THE ROUTE MAP</p>
          <h2 className="font-shout mt-2 text-4xl text-white sm:text-5xl">
            One Sea. Twenty-One Destinations.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            Every country on the Patty Passport route, charted around the Mediterranean.
          </p>
          <div className="mt-10">
            <MediterraneanMap />
          </div>
        </div>
      </section>

      {/* Scene 3 — Boarding pass */}
      <section className="bg-cream relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-passport-red-dark">
            YOUR TICKET, PRINTED
          </p>
          <h2 className="font-shout mt-2 text-4xl text-navy sm:text-5xl">
            Boarding Ticket — Lebanon
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-light">
            Every order arrives as a real boarding pass. Here&apos;s destination #01.
          </p>
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
            Visit Lebanon&apos;s Page
          </Button>
        </div>
      </section>

      {/* Departure board — how it works */}
      <section className="bg-sky relative overflow-hidden py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-navy">HOW IT WORKS</p>
          <h2 className="font-shout mt-2 text-4xl text-white sm:text-5xl">Now Departing</h2>
        </div>
        <div className="mx-auto mt-10 max-w-xl px-4">
          <DepartureBoard steps={JOURNEY_STEPS} />
        </div>
      </section>

      {/* Scene 4 — Destination regions */}
      <section className="bg-cream py-20">
        <div className="mx-auto mb-12 max-w-2xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-passport-red-dark">
            PICK YOUR ROUTE
          </p>
          <h2 className="font-shout mt-2 text-4xl text-navy sm:text-5xl">
            Every Region, One Passport
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-light">
            21 countries grouped into five routes — hover the map above or browse below.
          </p>
        </div>
        <div className="space-y-14">
          {REGION_ORDER.map((region) => (
            <RegionRow
              key={region}
              region={region}
              countries={countries.filter((c) => c.route === region)}
            />
          ))}
        </div>
      </section>

      {/* Scene 5 — Stamps / rewards world */}
      <section className="bg-passport-panel relative overflow-hidden py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-sun">COLLECT THE WORLD</p>
          <h2 className="font-shout mt-2 text-4xl sm:text-5xl">Your Passport Fills Up</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            Every destination earns a stamp. Kids have their own smaller ladder too.
          </p>
        </div>
        <div className="mt-10">
          <RewardStampWall filled={6} />
        </div>
      </section>

      {/* Scene 6 — Food + culture montage */}
      <section className="bg-sun-light py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-passport-red-dark">
            ONE SEA. MANY CULTURES.
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold italic text-navy sm:text-4xl">
            Endless Flavor.
          </h2>
        </div>
        <div className="mt-10">
          <FoodMontage />
        </div>
        <ul className="mx-auto mt-10 grid max-w-2xl gap-3 px-4 text-left">
          {PROMISE_BULLETS.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-lg border-2 border-navy bg-white p-4 shadow-[3px_3px_0_0_var(--color-brand-navy)]"
            >
              <span className="mt-0.5 text-passport-red" aria-hidden="true">
                ★
              </span>
              <span className="text-navy-light">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Scene 7 — Final booking */}
      <section
        id="booking"
        className="bg-night-sky stars relative overflow-hidden py-20 text-cream"
      >
        <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center">
          <p className="font-shout text-sm tracking-[0.3em] text-sun">FINAL CALL</p>
          <h2 className="font-shout mt-2 text-4xl sm:text-5xl">Ready To Check In?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="#booking-form">Reserve Your Flight</Button>
            <Button href="/menu" variant="secondary">
              See Routes &amp; Menu
            </Button>
            <OpenTootyButton className="border-cream! text-cream!">
              Meet Patty Tooty
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
