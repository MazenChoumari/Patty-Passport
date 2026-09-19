export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Menu & Rewards", href: "/menu" },
  { label: "Events & Birthdays", href: "/events" },
  { label: "Our Story & Team", href: "/story" },
  { label: "Investors", href: "/investors" },
  { label: "Login / My Passport", href: "/passport" },
];
