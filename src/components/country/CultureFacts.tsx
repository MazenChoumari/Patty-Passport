export function CultureFacts({ facts }: { facts: string[] }) {
  return (
    <section className="bg-sky-light py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Did you know?
        </h2>
        <ul className="mt-8 space-y-3">
          {facts.map((fact) => (
            <li
              key={fact}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 text-navy-light shadow-sm"
            >
              <span aria-hidden="true" className="text-lg">
                🌍
              </span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
