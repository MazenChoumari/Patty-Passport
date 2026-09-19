"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

const EVENT_TYPES = [
  "Little Explorer Birthday (Weekday)",
  "World Explorer Birthday (Weekend)",
  "Country Night group event",
  "Ramadan Iftar Passport",
  "Lent Sea Journey Menu",
  "Other occasion",
];

export function EventEnquiryForm() {
  const [sent, setSent] = useState<null | { name: string; type: string; guests: string }>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSent({
      name: String(data.get("name") || "Traveller"),
      type: String(data.get("type") || EVENT_TYPES[0]),
      guests: String(data.get("guests") || "1"),
    });
  };

  if (sent) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-sun/40 bg-sun-light p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 font-heading text-xl font-semibold text-navy">
          Thanks, {sent.name}!
        </h3>
        <p className="mt-2 text-sm text-navy-light">
          Your enquiry for a {sent.type.toLowerCase()} for {sent.guests} guests has been noted.
          This is a demo confirmation; our Events &amp; Birthdays Coordinator hasn&apos;t actually
          been notified yet.
        </p>
        <Button className="mt-5" variant="outline" onClick={() => setSent(null)}>
          Send another enquiry
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
        Your name
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy sm:col-span-2">
        Event type
        <select
          name="type"
          defaultValue={EVENT_TYPES[0]}
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        >
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Preferred date
        <input
          type="date"
          name="date"
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Guests
        <input
          type="number"
          name="guests"
          min={1}
          defaultValue={10}
          className="rounded-xl border border-navy/15 px-3 py-2.5 text-sm focus:border-sky-dark focus:outline-none"
        />
      </label>
      <Button type="submit" className="sm:col-span-2">
        Send Enquiry
      </Button>
    </form>
  );
}
