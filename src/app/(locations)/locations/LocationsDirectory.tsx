"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { locations } from "@/lib/location-data";

export default function LocationsDirectory() {
  const [query, setQuery] = useState("");
  const [countyFilter, setCountyFilter] = useState("All counties");

  const counties = useMemo(() => {
    const unique = new Set(locations.map((location) => location.county));
    return ["All counties", ...Array.from(unique).sort()];
  }, []);

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return locations.filter((location) => {
      const matchesCounty =
        countyFilter === "All counties" || location.county === countyFilter;
      if (!matchesCounty) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const haystack = [
        location.name,
        location.cityLine,
        location.county,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query, countyFilter]);

  const groupedLocations = useMemo(() => {
    const groups = new Map<string, typeof locations>();
    filteredLocations.forEach((location) => {
      const key = location.county || "Duval County, FL";
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)?.push(location);
    });
    return Array.from(groups.entries()).sort(([a], [b]) =>
      a.localeCompare(b)
    );
  }, [filteredLocations]);

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
        <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#0f0f0f]">
            Search neighborhoods
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by neighborhood or county"
              className="w-full rounded-xl border border-[#d6cdc2] bg-white px-4 py-3 text-sm font-normal text-[#1b1b1b] focus:border-black focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#0f0f0f]">
            Filter by county
            <select
              value={countyFilter}
              onChange={(event) => setCountyFilter(event.target.value)}
              className="w-full rounded-xl border border-[#d6cdc2] bg-white px-4 py-3 text-sm font-normal text-[#1b1b1b] focus:border-black focus:outline-none"
            >
              {counties.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-4 text-sm text-[#6c6156]">
          Showing {filteredLocations.length} of {locations.length} locations.
        </p>
      </section>

      {groupedLocations.map(([county, countyLocations]) => (
        <section key={county} className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">{county}</h2>
            <span className="text-sm uppercase tracking-[0.3em] text-[#877c6e]">
              {countyLocations.length} locations
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {countyLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group rounded-[24px] border border-[#eee] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
              >
                <span className="inline-flex rounded-full border border-[#e6e0d7] bg-[#fbf8f3] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#6f6356]">
                  {location.cityLine}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[#0f0f0f]">
                  {location.name} Estate Services
                </h3>
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
          </div>
        </section>
      ))}
    </main>
  );
}
