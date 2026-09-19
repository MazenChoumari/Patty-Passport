import { notFound } from "next/navigation";
import { countries, getCountryBySlug } from "@/data/countries";
import { CountryHero } from "@/components/country/CountryHero";
import { MapHighlight } from "@/components/country/MapHighlight";
import { CultureFacts } from "@/components/country/CultureFacts";
import { FoodSection } from "@/components/country/FoodSection";
import { MusicSection } from "@/components/country/MusicSection";
import { ActivitiesSection } from "@/components/country/ActivitiesSection";
import { BookingActions } from "@/components/country/BookingActions";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return {
    title: `${country.name} — Patty Passport`,
    description: `Destination #${country.destinationNumber}: ${country.tagline}. ${
      country.detail?.greetingEnglish ?? ""
    }`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const detail = country.detail;

  return (
    <div>
      <CountryHero country={country} />
      <MapHighlight country={country} />

      {detail ? (
        <>
          <CultureFacts facts={detail.cultureFacts} />
          <FoodSection countryName={country.name} food={detail.food} />
          <MusicSection playlist={detail.playlist} />
          <ActivitiesSection activities={detail.activities} />
        </>
      ) : (
        <section className="bg-white py-16 text-center">
          <p className="mx-auto max-w-md text-navy-light">
            We&apos;re still stamping the {country.name} destination page — check back soon for
            the full route, menu and activities. Meanwhile, explore the destinations already open
            for boarding.
          </p>
        </section>
      )}

      <BookingActions countryName={country.name} />
    </div>
  );
}

export const dynamicParams = false;
