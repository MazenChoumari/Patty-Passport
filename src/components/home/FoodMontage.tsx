import { countries } from "@/data/countries";

const ITEMS = countries
  .filter((c) => c.detail)
  .map((c) => {
    const food = c.detail!.food;
    const hero = food[`${food.quickBiteHero}Burger` as "vegBurger" | "chickenBurger" | "beefBurger"];
    return { flag: c.flagEmoji, name: c.name, dish: hero.name };
  });

export function FoodMontage() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-6">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border-2 border-navy bg-white px-5 py-3 shadow-[3px_3px_0_0_var(--color-brand-navy)]"
          >
            <span className="text-2xl">{item.flag}</span>
            <span className="font-shout text-sm tracking-wide text-navy">{item.dish}</span>
            <span className="text-xs uppercase text-navy-light">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
