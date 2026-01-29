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
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:px-8">
      <section className="rounded-[32px] bg-[#f7f4ef] px-8 py-10 shadow-[0_30px_70px_rgba(0,0,0,0.05)] sm:px-10 sm:py-12">
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#877c6e]">Service areas</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f0f0f] sm:text-4xl">
          Jacksonville & Coastal Florida neighborhoods we support.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#4a433c] sm:text-lg">
          Choose your neighborhood to see tailored estate sale strategies, HOA logistics, donation coordination, and house buyout options. Every page includes a
          Formspree-powered hero form for quick consultations.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="group rounded-[24px] border border-[#eee] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
          >
            <span className="inline-flex rounded-full border border-[#e6e0d7] bg-[#fbf8f3] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#6f6356]">
              {location.cityLine}
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-[#0f0f0f]">{location.name} Estate Services</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a] sm:text-base">
              {location.heroDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-[#877c6e]">
              {location.heroStats.slice(0, 2).map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-full border border-[#efe7db] bg-[#fffaf2] px-3 py-1"
                >
                  {stat.value} • {stat.label}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4a7a8c] transition group-hover:text-[#3d6675]">
              View {location.name} page <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}

