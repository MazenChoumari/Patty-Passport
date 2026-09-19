export type RouteZone =
  | "Levant Route"
  | "Aegean Route"
  | "Iberian & Western Route"
  | "Adriatic Route"
  | "North African Route";

export type MenuItem = {
  name: string;
  description: string;
  /** true when this item is a reasonable placeholder suggestion, not from the source brief */
  suggested?: boolean;
};

export type CountryFood = {
  vegBurger: MenuItem;
  chickenBurger: MenuItem;
  beefBurger: MenuItem;
  quickBiteHero: "veg" | "chicken" | "beef";
  loadedFries: [MenuItem, MenuItem];
  salad: MenuItem;
  coldDrink: MenuItem;
  alcoholicDrink: MenuItem;
  hotDrink: MenuItem;
  desserts: [MenuItem, MenuItem];
};

export type Playlist = {
  name: string;
  tracks: { title: string; artist: string }[];
};

export type Activities = {
  greetingPractice: { phrase: string; meaning: string };
  quiz: { question: string; options: string[]; answerIndex: number };
  kidsActivity: string;
};

export type CountryDetail = {
  greetingLocal: string;
  greetingRomanized?: string;
  greetingEnglish: string;
  cultureFacts: string[];
  food: CountryFood;
  playlist: Playlist;
  activities: Activities;
};

export type Country = {
  slug: string;
  destinationNumber: number;
  name: string;
  flagEmoji: string;
  route: RouteZone;
  tagline: string;
  detail?: CountryDetail;
};

export const countries: Country[] = [
  {
    slug: "lebanon",
    destinationNumber: 1,
    name: "Lebanon",
    flagEmoji: "🇱🇧",
    route: "Levant Route",
    tagline: "Cedars, souks & toum",
  },
  {
    slug: "syria",
    destinationNumber: 2,
    name: "Syria",
    flagEmoji: "🇸🇾",
    route: "Levant Route",
    tagline: "Old-city spice & sumac",
  },
  {
    slug: "palestine",
    destinationNumber: 3,
    name: "Palestine",
    flagEmoji: "🇵🇸",
    route: "Levant Route",
    tagline: "Olives, za'atar & sumac",
  },
  {
    slug: "turkey",
    destinationNumber: 4,
    name: "Türkiye",
    flagEmoji: "🇹🇷",
    route: "Aegean Route",
    tagline: "Bazaars, tea & sizzle",
  },
  {
    slug: "cyprus",
    destinationNumber: 5,
    name: "Cyprus",
    flagEmoji: "🇨🇾",
    route: "Aegean Route",
    tagline: "Island halloumi & sun",
  },
  {
    slug: "greece",
    destinationNumber: 6,
    name: "Greece",
    flagEmoji: "🇬🇷",
    route: "Aegean Route",
    tagline: "Islands, olives & ouzo",
  },
  {
    slug: "italy",
    destinationNumber: 7,
    name: "Italy",
    flagEmoji: "🇮🇹",
    route: "Iberian & Western Route",
    tagline: "Piazzas, basil & espresso",
  },
  {
    slug: "spain",
    destinationNumber: 8,
    name: "Spain",
    flagEmoji: "🇪🇸",
    route: "Iberian & Western Route",
    tagline: "Tapas, sun & sangria",
  },
  {
    slug: "france",
    destinationNumber: 9,
    name: "France",
    flagEmoji: "🇫🇷",
    route: "Iberian & Western Route",
    tagline: "Bistros, herbs & Riviera",
  },
  {
    slug: "monaco",
    destinationNumber: 10,
    name: "Monaco",
    flagEmoji: "🇲🇨",
    route: "Iberian & Western Route",
    tagline: "Riviera glam & citrus",
  },
  {
    slug: "malta",
    destinationNumber: 11,
    name: "Malta",
    flagEmoji: "🇲🇹",
    route: "Iberian & Western Route",
    tagline: "Harbours, capers & honey",
  },
  {
    slug: "slovenia",
    destinationNumber: 12,
    name: "Slovenia",
    flagEmoji: "🇸🇮",
    route: "Adriatic Route",
    tagline: "Alps, herbs & honey",
  },
  {
    slug: "croatia",
    destinationNumber: 13,
    name: "Croatia",
    flagEmoji: "🇭🇷",
    route: "Adriatic Route",
    tagline: "Adriatic coast & ajvar",
  },
  {
    slug: "bosnia",
    destinationNumber: 14,
    name: "Bosnia & Herzegovina",
    flagEmoji: "🇧🇦",
    route: "Adriatic Route",
    tagline: "Grills, cezve & rakija",
  },
  {
    slug: "montenegro",
    destinationNumber: 15,
    name: "Montenegro",
    flagEmoji: "🇲🇪",
    route: "Adriatic Route",
    tagline: "Bays, herbs & honey puffs",
  },
  {
    slug: "albania",
    destinationNumber: 16,
    name: "Albania",
    flagEmoji: "🇦🇱",
    route: "Adriatic Route",
    tagline: "Coastal cheese & raki",
  },
  {
    slug: "egypt",
    destinationNumber: 17,
    name: "Egypt",
    flagEmoji: "🇪🇬",
    route: "North African Route",
    tagline: "Nile spice & dukka",
  },
  {
    slug: "libya",
    destinationNumber: 18,
    name: "Libya",
    flagEmoji: "🇱🇾",
    route: "North African Route",
    tagline: "Desert dates & harissa",
  },
  {
    slug: "tunisia",
    destinationNumber: 19,
    name: "Tunisia",
    flagEmoji: "🇹🇳",
    route: "North African Route",
    tagline: "Harissa heat & mint tea",
  },
  {
    slug: "algeria",
    destinationNumber: 20,
    name: "Algeria",
    flagEmoji: "🇩🇿",
    route: "North African Route",
    tagline: "Couscous & orange blossom",
  },
  {
    slug: "morocco",
    destinationNumber: 21,
    name: "Morocco",
    flagEmoji: "🇲🇦",
    route: "North African Route",
    tagline: "Tagines, mint tea & spice",
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export const countriesWithDetail = () => countries.filter((c) => c.detail);
