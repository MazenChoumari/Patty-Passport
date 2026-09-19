import { COMBO_GRID, COMBO_UPGRADES, MINIMUM_SPEND, formatPrice } from "@/data/pricing";

export function ComboSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Combos &amp; bundles
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-navy-light">
          Every combo runs roughly 22-24% below buying the same items separately.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-navy/10">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-sky-light text-navy">
              <tr>
                <th className="px-4 py-3 font-heading">Combo</th>
                <th className="px-4 py-3 font-heading">Contents</th>
                <th className="px-4 py-3 text-right font-heading">Price</th>
              </tr>
            </thead>
            <tbody>
              {COMBO_GRID.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}>
                  <td className="px-4 py-3 font-medium text-navy">{c.name}</td>
                  <td className="px-4 py-3 text-navy-light">{c.contents}</td>
                  <td className="px-4 py-3 text-right font-semibold text-passport-red">
                    {formatPrice(c.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 text-sm text-navy-light sm:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-sun-light p-4">
            <p className="font-heading font-semibold text-navy">Upgrades (any combo, any country)</p>
            <p className="mt-1">
              Swap included drink for an alcoholic country drink: +{formatPrice(COMBO_UPGRADES.alcoholicDrinkSwap)}
            </p>
            <p>Add a hot drink: +{formatPrice(COMBO_UPGRADES.addHotDrink)}</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-sky-light p-4">
            <p className="font-heading font-semibold text-navy">
              Minimum spend — Experience Zone seating
            </p>
            <p className="mt-1">Adults: {formatPrice(MINIMUM_SPEND.adult)}/person</p>
            <p>Kids: {formatPrice(MINIMUM_SPEND.child)}/child</p>
            <p className="mt-1 text-xs">Quick Bite counter/bar seating has no minimum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
