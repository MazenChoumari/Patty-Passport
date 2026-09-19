"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-navy-light transition-colors hover:bg-sky-light hover:text-sky-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-navy/15 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-navy/10 bg-cream px-4 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-navy-light hover:bg-sky-light hover:text-sky-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
