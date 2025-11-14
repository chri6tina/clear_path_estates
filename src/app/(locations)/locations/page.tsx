import Link from "next/link";
import type { Metadata } from "next";
import { locations } from "@/lib/location-data";

export const metadata: Metadata = {
  title: "Jacksonville Estate Service Areas | Clear Path Estates",
  description:
    "Explore Clear Path Estates’ service areas across San Marco, Riverside, Ponte Vedra, Amelia Island, and more. Each location page details local estate sale logistics, donation coordination, and buyout options.",
};

export default function LocationsIndexPage() {
  return (
    <div className="bg-white text-[#1f1f1f]">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-12 lg:px-8">
        <section className="rounded-[32px] bg-[#f7f4ef] px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.05)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#877c6e]">Service areas</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0f0f0f]">Jacksonville & Coastal Florida neighborhoods we support.</h1>
          <p className="mt-4 text-lg text-[#4a433c]">
            Choose your neighborhood to see tailored estate sale strategies, HOA logistics, donation coordination, and house buyout options. Every page includes a
            Formspree-powered hero form for quick consultations.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-[28px] border border-[#eee] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">{location.cityLine}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0f0f0f]">{location.name} Estate Services</h2>
              <p className="mt-2 text-sm text-[#4a4a4a]">{location.heroDescription}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#877c6e]">
                {location.heroStats.slice(0, 2).map((stat) => (
                  <span key={stat.label}>{stat.value} • {stat.label}</span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4a7a8c]">
                View {location.name} page <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

