// Global Price Grid — Section 6.1 of the master brief.
// Same grid for every country; only the flavors change per destination.
export const PRICE_GRID = {
  vegBurger: 10.5,
  chickenBurger: 11.5,
  beefBurger: 13.0,
  regularFries: 3.5,
  loadedFries: 5.5,
  salad: 6.5,
  dessert: 5.5,
  softDrink: 3.0,
  coldCountryDrink: 3.5,
  localBeer: 4.0,
  alcoholicCountryDrink: 6.5,
  hotDrink: 2.5,
} as const;

export type PriceItemType = keyof typeof PRICE_GRID;

export const PRICE_ITEM_LABELS: Record<PriceItemType, string> = {
  vegBurger: "Veg burger",
  chickenBurger: "Chicken burger",
  beefBurger: "Beef burger",
  regularFries: "Regular fries",
  loadedFries: "Loaded fries",
  salad: "Salad",
  dessert: "Dessert",
  softDrink: "Soft drink",
  coldCountryDrink: "Cold country drink",
  localBeer: "Local beer",
  alcoholicCountryDrink: "Alcoholic country drink",
  hotDrink: "Hot drink",
};

export function formatPrice(amount: number): string {
  return `€${amount.toFixed(2).replace(/\.00$/, "")}`;
}

export function priceOf(type: PriceItemType): number {
  return PRICE_GRID[type];
}

// Global Combo Grid — Section 6.2.
export type Combo = {
  name: string;
  contents: string;
  price: number;
};

export const COMBO_GRID: Combo[] = [
  { name: "Veg Quick Bite", contents: "Veg burger + regular fries + soft/cold drink", price: 13.0 },
  {
    name: "Chicken Quick Bite",
    contents: "Chicken burger + regular fries + soft/cold drink",
    price: 14.0,
  },
  { name: "Beef Quick Bite", contents: "Beef burger + regular fries + soft/cold drink", price: 15.0 },
  { name: "Loaded Fries Combo", contents: "Loaded fries + soft/cold drink", price: 7.0 },
  {
    name: "Regular Fries Combo",
    contents: "Regular fries + soft/cold drink (lighter option)",
    price: 6.0,
  },
  { name: "Salad Combo", contents: "Country salad + soft/cold drink", price: 8.0 },
  {
    name: "Veg Full Buffet",
    contents: "Veg burger + loaded fries + salad + soft/cold drink + dessert",
    price: 24.0,
  },
  {
    name: "Chicken Full Buffet",
    contents: "Chicken burger + loaded fries + salad + soft/cold drink + dessert",
    price: 25.0,
  },
  {
    name: "Beef Full Buffet",
    contents: "Beef burger + loaded fries + salad + soft/cold drink + dessert",
    price: 26.0,
  },
];

export const COMBO_UPGRADES = {
  alcoholicDrinkSwap: 2.5,
  addHotDrink: 2.0,
} as const;

export const MINIMUM_SPEND = {
  adult: 10,
  child: 8,
} as const;

// Events & Birthdays pricing — Section 5.5.
export const EVENTS_PRICING = {
  littleExplorer: { pricePerChild: 18, minChildren: 8 },
  worldExplorer: { pricePerChild: 22, minChildren: 10 },
  countryNightKidsBundle: 15,
  countryNightHallFeeMin: 80,
  countryNightHallFeeMax: 120,
  countryNightMinSpend: 400,
  ramadanAdult: 22,
  ramadanKids: 14,
  lentFridayComboMin: 13,
  lentFridayComboMax: 14,
} as const;

// Passport stamp reward ladder — Section 5.4.
export const REWARD_LADDER = [
  { stamps: 3, reward: "Free drink" },
  { stamps: 5, reward: "Free side" },
  { stamps: 8, reward: "Secret destination burger" },
  { stamps: 21, reward: "Full free World Traveller Buffet" },
] as const;
