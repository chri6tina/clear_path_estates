import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locationMap, locations } from "@/lib/location-data";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const data = locationMap[params.slug];

  if (!data) {
    return {};
  }

  const title = `${data.name} Estate Sales & Cleanouts | Clear Path Estates`;
  const description = `${data.name} estate sales, donation coordination, and home buyouts handled by Clear Path Estates. Trusted crews for ${data.cityTagline}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.clearpathestates.com/locations/${data.slug}`,
      siteName: "Clear Path Estates",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const FORM_ENDPOINT = "https://formspree.io/f/mrbrendl";

export default function LocationPage({ params }: { params: Params }) {
  const data = locationMap[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main id="location-top" className="bg-white text-[#1f1f1f]">
      <section className="mx-auto grid min-h-[60vh] max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="text-xs uppercase tracking-[0.4em] text-[#777] hover:text-black">
            Clear Path Estates
          </Link>
          <h1 className="text-4xl font-semibold leading-tight text-[#0f0f0f] sm:text-5xl">
            {data.name} estate sales, donation coordination, and home buyouts.
          </h1>
          <p className="text-lg text-[#4a4a4a]">{data.description}</p>
          <ul className="space-y-3 text-sm text-[#4a4a4a]">
            <li>• {data.cityTagline}</li>
            <li>• Same-week cleanouts + buyouts for urgent closings</li>
            <li>• Formspree-backed inquiry form for instant intake</li>
          </ul>
          <div className="grid gap-4 border-t border-[#e0e0e0] pt-4 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-[#0f0f0f]">{stat.value}</p>
                <p className="text-sm text-[#555]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <form action={FORM_ENDPOINT} method="POST" className="rounded-[28px] border border-[#e0d6cc] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Interest form</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#0f0f0f]">Plan your {data.name} project.</h2>
          <p className="mt-2 text-sm text-[#4a4a4a]">Share the basics and our local lead will reach out within one business day.</p>
          <div className="mt-5 space-y-4 text-sm">
            <label className="block font-semibold text-[#0f0f0f]">
              Full name
              <input
                name="fullName"
                type="text"
                placeholder="Jane Smith"
                className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 focus:border-black focus:outline-none"
                required
              />
            </label>
            <label className="block font-semibold text-[#0f0f0f]">
              Email
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 focus:border-black focus:outline-none"
                required
              />
            </label>
            <label className="block font-semibold text-[#0f0f0f]">
              Service needed
              <select
                name="service"
                className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 focus:border-black focus:outline-none"
              >
                <option>Estate Sale</option>
                <option>Cleanout</option>
                <option>Donations & Buyouts</option>
              </select>
            </label>
            <label className="block font-semibold text-[#0f0f0f]">
              Notes
              <textarea
                name="notes"
                rows={4}
                placeholder={`Share timelines, addresses, or special requests for ${data.name}.`}
                className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 focus:border-black focus:outline-none"
              />
            </label>
            <input type="hidden" name="location" value={data.name} />
            <button type="submit" className="w-full rounded-full bg-[#f9b233] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow hover:bg-[#eda524]">
              Submit
            </button>
            <p className="text-xs text-[#777]">
              Prefer to call?{" "}
              <a href="tel:+19044563851" className="font-semibold text-black">
                (904) 456-3851
              </a>
            </p>
          </div>
        </form>
      </section>

      <section className="bg-[#fef9f1]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Services in {data.name}</p>
            <h2 className="text-3xl font-semibold text-[#0f0f0f]">What we handle on every project.</h2>
            <ul className="space-y-3 text-sm text-[#4a4a4a]">
              {data.serviceHighlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#f9b233]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/40 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Local insight</p>
            <ul className="mt-4 space-y-3 text-sm text-[#4a4a4a]">
              {data.localInsights.map((insight) => (
                <li key={insight}>• {insight}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Streets we cover</p>
          <h2 className="text-3xl font-semibold text-[#0f0f0f]">Trusted on every block of {data.name}.</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {data.nearbyStreets.map((street) => (
            <span key={street} className="rounded-full border border-[#ddd] bg-white px-5 py-2 text-sm font-medium text-[#3b3b3b] shadow-[0_6px_15px_rgba(0,0,0,0.06)]">
              {street}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">FAQ</p>
            <h2 className="text-3xl font-semibold text-[#0f0f0f]">{data.name} questions answered.</h2>
          </div>
          <div className="mt-6 space-y-4">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="rounded-[20px] border border-[#ddd] bg-white px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <summary className="cursor-pointer text-base font-semibold text-[#0f0f0f]">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-[#4a4a4a]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f0f]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#f9b233]">Next step</p>
            <h2 className="text-3xl font-semibold">Book your {data.name} walkthrough.</h2>
            <p className="mt-2 text-sm text-[#d6d6d6]">
              Call <a href="tel:+19044563851" className="font-semibold text-white">
                (904) 456-3851
              </a>{" "}
              or email{" "}
              <a href="mailto:hello@clearpathestates.com" className="font-semibold text-white">
                hello@clearpathestates.com
              </a>
              .
            </p>
          </div>
          <Link href="#location-top" className="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-[#0f0f0f]">
            Back to top
          </Link>
        </div>
      </section>
    </main>
  );
}

