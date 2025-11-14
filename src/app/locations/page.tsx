import Link from "next/link";
import { locations } from "@/lib/location-data";

export default function LocationsIndex() {
  return (
    <main className="bg-white text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Clear Path Estates</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#0f0f0f]">Jacksonville-area service zones.</h1>
        <p className="mt-3 max-w-3xl text-lg text-[#4a4a4a]">
          Explore detailed service pages for every neighborhood we cover—from coastal Ponte Vedra to tree-lined San Marco.
          Each page includes tailored SEO content, contact forms, and local insights.
        </p>
      </section>

      <section className="bg-[#fef9f1]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-[28px] border border-[#f0e3d5] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">{location.cityTagline}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#0f0f0f]">{location.name}</h2>
              <p className="mt-2 text-sm text-[#4a4a4a]">{location.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#555]">
                {location.serviceHighlights.slice(0, 2).map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#ddd] bg-white px-3 py-1">
                    {highlight}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

