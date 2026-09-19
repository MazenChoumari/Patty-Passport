import { Tag } from "@/components/ui/Tag";
import { formatPrice, priceOf } from "@/data/pricing";
import type { CountryFood, MenuItem } from "@/data/countries";

function FoodCard({ item, badge }: { item: MenuItem; badge?: string }) {
  return (
    <div className="relative flex flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      {badge && (
        <span className="absolute -top-2.5 left-4 rounded-full bg-passport-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading font-semibold text-navy">{item.name}</h3>
        <span className="shrink-0 font-heading font-semibold text-passport-red">
          {formatPrice(priceOf(item.priceType))}
        </span>
      </div>
      <p className="text-sm text-navy-light">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Tag key={tag} tone="sky">
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}

export function FoodSection({
  countryName,
  food,
}: {
  countryName: string;
  food: CountryFood;
}) {
  const burgers: { item: MenuItem; key: "veg" | "chicken" | "beef" }[] = [
    { item: food.vegBurger, key: "veg" },
    { item: food.chickenBurger, key: "chicken" },
    { item: food.beefBurger, key: "beef" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Food from {countryName} at Patty Passport
        </h2>

        <h3 className="mt-10 font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Destination burgers
        </h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {burgers.map(({ item, key }) => (
            <FoodCard
              key={item.name}
              item={item}
              badge={food.quickBiteHero === key ? "Quick Bite hero" : undefined}
            />
          ))}
        </div>

        <h3 className="mt-10 font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Loaded fries &amp; salad
        </h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <FoodCard item={food.loadedFries[0]} />
          <FoodCard item={food.loadedFries[1]} />
          <FoodCard item={food.salad} />
        </div>

        <h3 className="mt-10 font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Drinks
        </h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <FoodCard item={food.coldDrink} />
          <FoodCard item={food.alcoholicDrink} />
          <FoodCard item={food.hotDrink} />
        </div>

        <h3 className="mt-10 font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Desserts
        </h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <FoodCard item={food.desserts[0]} />
          <FoodCard item={food.desserts[1]} />
        </div>
      </div>
    </section>
  );
}
