"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { countries } from "@/data/countries";

export function ReservationForm() {
  const [confirmed, setConfirmed] = useState<null | { name: string; date: string; guests: string; country: string }>(
    null
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setConfirmed({
      name: String(data.get("name") || "Traveller"),
      date: String(data.get("date") || ""),
      guests: String(data.get("guests") || "2"),
      country: String(data.get("country") || "Lebanon"),
    });
  };

  if (confirmed) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-sky/30 bg-sky-light p-8 text-center">
        <p className="text-4xl">🛫</p>
        <h3 className="mt-3 font-heading text-xl font-semibold text-navy">
          You&apos;re boarded, {confirmed.name}!
        </h3>
        <p className="mt-2 text-sm text-navy-light">
          Table reserved for {confirmed.guests} on {confirmed.date || "your chosen date"} — first
          stop: {confirmed.country}. This is a demo confirmation; no booking has actually been
          made yet.
        </p>
        <Button className="mt-5" variant="outline" onClick={() => setConfirmed(null)}>
          Book another flight
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid max-w-xl gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
    >
      <label className="flex flex-col gap-1 text-sm font-medium text-navy sm:col-span-2">
        Passenger name
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Date
        <input
          type="date"
          name="date"
          required
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Guests
        <input
          type="number"
          name="guests"
          min={1}
          defaultValue={2}
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy sm:col-span-2">
        First destination
        <select
          name="country"
          defaultValue="Lebanon"
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        >
          {countries.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.flagEmoji} {c.name}
            </option>
          ))}
        </select>
      </label>
      <Button type="submit" className="sm:col-span-2">
        Confirm Reservation
      </Button>
    </form>
  );
}
