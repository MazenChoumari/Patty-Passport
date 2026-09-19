import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/pattypassport" },
  { label: "TikTok", href: "https://tiktok.com/@pattypassport" },
  { label: "X", href: "https://x.com/pattypassport" },
  { label: "Facebook", href: "https://facebook.com/pattypassport" },
];

const SECONDARY_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Allergens", href: "/allergens" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy pb-24 pt-12 text-cream lg:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="[&_span]:text-cream [&_svg_rect:first-child]:fill-cream">
            <Logo />
          </div>
          <p className="text-sm text-cream/70">
            Mediterranean journeys. Global flavors.
            <br />
            Stamp your way through flavor.
          </p>
          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 underline-offset-4 hover:text-sun hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-cream/50">@pattypassport</p>
        </div>

        <div className="space-y-2 text-sm text-cream/80">
          <p className="font-heading font-semibold text-cream">Check-In Desk</p>
          <p>Parque Tecnológico de Leganés,</p>
          <p>Calle Innovación 12, 28918 Leganés, Madrid, Spain</p>
          <p>Phone: +34 91 123 45 67</p>
          <p>WhatsApp: +34 600 123 456</p>
          <p>Email: hello@pattypassport.com</p>
          <p>Investors: invest@pattypassport.com</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-heading font-semibold text-cream">More</p>
          <ul className="space-y-1.5 text-cream/80">
            {SECONDARY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sun hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 px-4 pt-6 text-xs text-cream/50 sm:px-6">
        © 2026 Patty Passport World S.L. All rights reserved.
      </div>
    </footer>
  );
}
