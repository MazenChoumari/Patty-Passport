"use client";

import { useState } from "react";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { countries } from "@/data/countries";

const CATEGORIES = ["Burgers", "Loaded Fries & Sides", "Salads", "Drinks", "Desserts"] as const;
type Category = (typeof CATEGORIES)[number];

const withDetail = countries.filter((c) => c.detail);

export function MenuBrowser() {
  const [category, setCategory] = useState<Category>("Burgers");

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Menu categories"
      >
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-heading font-semibold transition-colors ${
              category === c
                ? "bg-passport-red text-white shadow-md"
                : "bg-white text-navy-light hover:bg-sky-light"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category === "Burgers" &&
          withDetail.flatMap((c) => {
            const f = c.detail!.food;
            return [
              { item: f.vegBurger, hero: f.quickBiteHero === "veg" },
              { item: f.chickenBurger, hero: f.quickBiteHero === "chicken" },
              { item: f.beefBurger, hero: f.quickBiteHero === "beef" },
            ].map(({ item, hero }) => (
              <MenuItemCard
                key={`${c.slug}-${item.name}`}
                item={item}
                countryName={c.name}
                countryFlag={c.flagEmoji}
                badge={hero ? "Quick Bite hero" : undefined}
              />
            ));
          })}

        {category === "Loaded Fries & Sides" &&
          withDetail.flatMap((c) =>
            c.detail!.food.loadedFries.map((item, i) => (
              <MenuItemCard
                key={`${c.slug}-fries-${i}`}
                item={item}
                countryName={c.name}
                countryFlag={c.flagEmoji}
              />
            ))
          )}

        {category === "Salads" &&
          withDetail.map((c) => (
            <MenuItemCard
              key={`${c.slug}-salad`}
              item={c.detail!.food.salad}
              countryName={c.name}
              countryFlag={c.flagEmoji}
            />
          ))}

        {category === "Drinks" &&
          withDetail.flatMap((c) => [
            <MenuItemCard
              key={`${c.slug}-cold`}
              item={c.detail!.food.coldDrink}
              countryName={c.name}
              countryFlag={c.flagEmoji}
            />,
            <MenuItemCard
              key={`${c.slug}-alc`}
              item={c.detail!.food.alcoholicDrink}
              countryName={c.name}
              countryFlag={c.flagEmoji}
            />,
            <MenuItemCard
              key={`${c.slug}-hot`}
              item={c.detail!.food.hotDrink}
              countryName={c.name}
              countryFlag={c.flagEmoji}
            />,
          ])}

        {category === "Desserts" &&
          withDetail.flatMap((c) =>
            c.detail!.food.desserts.map((item, i) => (
              <MenuItemCard
                key={`${c.slug}-dessert-${i}`}
                item={item}
                countryName={c.name}
                countryFlag={c.flagEmoji}
              />
            ))
          )}
      </div>

      {category === "Drinks" && (
        <div className="mt-6 grid gap-4 rounded-2xl border border-dashed border-navy/15 bg-sky-light/40 p-4 text-sm text-navy-light sm:grid-cols-2">
          <p>
            <strong className="text-navy">Soft drink</strong> — available anywhere on the route,
            €3.00.
          </p>
          <p>
            <strong className="text-navy">Local beer</strong> — available anywhere on the route,
            €4.00.
          </p>
        </div>
      )}

      {category === "Loaded Fries & Sides" && (
        <div className="mt-6 rounded-2xl border border-dashed border-navy/15 bg-sky-light/40 p-4 text-sm text-navy-light">
          <strong className="text-navy">Regular fries</strong> — a lighter side available with any
          combo, anywhere on the route, €3.50.
        </div>
      )}
    </div>
  );
}
