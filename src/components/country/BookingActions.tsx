import { Button } from "@/components/ui/Button";

export function BookingActions({ countryName }: { countryName: string }) {
  return (
    <section className="bg-navy py-16 text-cream">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
          Ready to visit {countryName}?
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href="/#booking">Taste {countryName} Now – Reserve Your Seat</Button>
          <Button
            variant="outline"
            disabled
            className="cursor-not-allowed bg-transparent! text-cream! border-cream/30! opacity-70"
            title="Quick Bite Ordering is coming soon"
          >
            Order a Quick Bite from {countryName}
          </Button>
        </div>
      </div>
    </section>
  );
}
