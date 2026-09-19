export type RouteZone =
  | "Levant Route"
  | "Aegean Route"
  | "Iberian & Western Route"
  | "Adriatic Route"
  | "North African Route";

import type { PriceItemType } from "@/data/pricing";

export type MenuItem = {
  name: string;
  description: string;
  priceType: PriceItemType;
  tags?: string[];
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
    detail: {
      greetingLocal: "يا ميت أهلا وسهلا بلبنان، نورتونا!",
      greetingRomanized: "Ya meet ahla w sahla bi Lebnen, nawartouna!",
      greetingEnglish: "A hundred welcomes to Lebanon, you have brightened our day!",
      cultureFacts: [
        "Lebanon is home to some of the oldest cedar forests on Earth — the cedar sits proudly on the national flag.",
        "Beirut's souks have been trading spices, textiles and gossip for over 5,000 years.",
        "Lebanese hospitality runs deep: guests are traditionally served food the moment they sit down, invited or not.",
        "Toum, the garlicky whipped sauce on your Shawarma Souk Burger, is whipped by hand into a cloud-like emulsion — no eggs required.",
        "Lebanon has more registered UNESCO World Heritage Sites per capita than almost any other country in the region.",
      ],
      food: {
        vegBurger: {
          name: "Halloumi Village Burger",
          description:
            "Grilled halloumi, tomato, basil, cucumber-mint, lemony labneh, olive oil, on a sesame or za'atar brioche.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Halal-friendly", "No pork"],
        },
        chickenBurger: {
          name: "Shish Tawouk Street Burger",
          description:
            "Yoghurt-garlic-lemon marinated chicken, lettuce, tomato, pickles, coriander, toum, soft potato bun.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Shawarma Souk Burger",
          description:
            "Beef patty topped with shawarma slices, peppers, onions, sumac, pomegranate molasses, toum, sesame bun.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Batata Harra Fries",
            description: "Garlic, coriander, chilli, lemon, tahini-lemon drizzle.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Za'atar & Cheese Fries",
            description: "Za'atar, halloumi/akkawi cheese, tomato, yoghurt-mint sauce.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
        salad: {
          name: "Tabbouleh Mountain Salad",
          description: "Parsley, mint, tomato, fine bulgur, lemon, olive oil, allspice.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Lemon Mint Corniche Cooler",
          description: "Fresh lemon and mint over ice, inspired by Beirut's seaside walk.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Arak Sea Breeze",
          description: "Lebanon's aniseed spirit, lengthened with soda and citrus.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Levant Strong Coffee",
          description: "Finely ground and simmered Lebanese-style, cardamom option available.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Knefe bel Kaak",
            description:
              "Warm cheese and semolina in toasted kaak bread, orange blossom syrup, pistachios.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Baklava Ice-Cream Sundae",
            description: "Layered baklava crumble over ice cream, honey-nut syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Beirut Nights",
        tracks: [
          { title: "Nassam Alayna El Hawa", artist: "Fairuz" },
          { title: "Bala Wala Shi", artist: "Mashrou' Leila" },
          { title: "Balak", artist: "Yasmine Hamdan" },
          { title: "Aatini El Nay", artist: "Fairuz" },
        ],
      },
      activities: {
        greetingPractice: {
          phrase: "Marhaba!",
          meaning: "Hello! — the everyday Lebanese greeting.",
        },
        quiz: {
          question: "What is the national tree of Lebanon, found on its flag?",
          options: ["Olive tree", "Cedar tree", "Palm tree", "Fig tree"],
          answerIndex: 1,
        },
        kidsActivity:
          "Color the Lebanese flag: red, white, red stripes with a green cedar tree in the middle.",
      },
    },
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
