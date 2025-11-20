import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { locationMap, locations } from "@/lib/location-data";
import ProcessRoadmap from "@/components/ProcessRoadmap";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationMap[slug];
  if (!location) {
    return {};
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationMap[slug];

  if (!location) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-12 lg:px-8">
        <section className="grid gap-10 rounded-[32px] bg-[#f6f3ef] px-8 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#867a6d]">{location.cityLine}</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f0f0f]">{location.heroHeadline}</h1>
            <p className="text-lg text-[#4a433c]">{location.heroDescription}</p>
            <div className="grid gap-4 border-t border-[#dfd6ce] pt-4 text-center text-sm md:grid-cols-3">
              {location.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-[#0f0f0f]">{stat.value}</p>
                  <p className="text-[#706659]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <form
            className="space-y-4 rounded-[24px] border border-[#e0d6cc] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            action="https://formspree.io/f/mrbrendl"
            method="POST"
            id="location-form"
          >
            <input type="hidden" name="location" value={location.name} />
            <p className="text-xs uppercase tracking-[0.4em] text-[#867a6d]">Book a consultation</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">Ready for {location.name} support?</h2>
            <label className="block text-sm font-semibold text-[#0f0f0f]">
              Full name
              <input
                name="fullName"
                placeholder="Jane Smith"
                className="mt-2 w-full rounded-xl border border-[#d6cdc2] px-4 py-3 text-sm focus:border-black focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-[#0f0f0f]">
              Email
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                className="mt-2 w-full rounded-xl border border-[#d6cdc2] px-4 py-3 text-sm focus:border-black focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-[#0f0f0f]">
              Service needed
              <select
                name="service"
                className="mt-2 w-full rounded-xl border border-[#d6cdc2] px-4 py-3 text-sm focus:border-black focus:outline-none"
              >
                <option>Estate Sale</option>
                <option>Cleanout</option>
                <option>Donations & Buyouts</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-[#0f0f0f]">
              Notes
              <textarea
                name="notes"
                rows={4}
                placeholder="Share timelines, access details, or donation goals."
                className="mt-2 w-full rounded-xl border border-[#d6cdc2] px-4 py-3 text-sm focus:border-black focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[#f9b233] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow hover:bg-[#eda524]"
            >
              Send Request
            </button>
          </form>
        </section>

        <section className="rounded-[32px] bg-white px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#777]">What we handle</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">Estate services in {location.name}.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {location.serviceHighlights.map((service) => (
              <article key={service.title} className="rounded-2xl border border-[#eee] p-6">
                <h3 className="text-lg font-semibold text-[#0f0f0f]">{service.title}</h3>
                <p className="mt-2 text-sm text-[#4a4a4a]">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-[#f8f5f1] px-8 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Local knowledge</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">How we make {location.name} projects smooth.</h2>
          <ul className="mt-6 space-y-3 text-sm text-[#4a4a4a]">
            {location.localHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[#f9b233]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[32px] bg-white px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Recent wins</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">Projects completed in {location.name}.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {location.recentProjects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-[#eee] p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-[#777]">{project.title}</p>
                <p className="mt-2 text-xl font-semibold text-[#0f0f0f]">{project.stat}</p>
                <p className="mt-2 text-sm text-[#4a4a4a]">{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {location.aboutSection && (
          <section className="rounded-[32px] bg-gradient-to-br from-[#fef9f1] to-[#f5f5f5] px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">About {location.name}</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">Why families choose {location.name} for estate services.</h2>
            <p className="mt-4 text-base leading-relaxed text-[#4a4a4a]">{location.aboutSection}</p>
            {location.neighborhoodInfo && location.neighborhoodInfo.length > 0 && (
              <>
                <h3 className="mt-6 text-xl font-semibold text-[#0f0f0f]">What makes {location.name} special:</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#4a4a4a]">
                  {location.neighborhoodInfo.map((info, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-[#f9b233]" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        )}

        {location.additionalServices && location.additionalServices.length > 0 && (
          <section className="rounded-[32px] bg-white px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Additional services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">Specialized {location.name} estate solutions.</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {location.additionalServices.map((service, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[#4a4a4a]">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#f9b233]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {location.faqs && location.faqs.length > 0 && (
          <section className="rounded-[32px] bg-[#f8f5f1] px-8 py-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[#777]">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#0f0f0f]">Common questions about {location.name} estate services.</h2>
            <div className="mt-6 space-y-4">
              {location.faqs.map((faq, idx) => (
                <details key={idx} className="rounded-[20px] border border-[#ddd] bg-white px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <summary className="cursor-pointer text-base font-semibold text-[#0f0f0f]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-[32px]">
          <ProcessRoadmap />
        </section>

        <section className="rounded-[32px] bg-[#0f0f0f] px-8 py-10 text-white">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#f9b233]">Next steps</p>
            <h2 className="text-3xl font-semibold">Book your {location.name} walk-through.</h2>
            <p className="text-sm text-[#dedede]">
              Call <a href="tel:+19044563851" className="font-semibold text-white">(904) 456-3851</a> or send our intake form. We reply within one business day with timelines and
              pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+19044563851"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#0f0f0f]"
              >
                Call Now
              </a>
              <a
                href="#location-form"
                className="rounded-full bg-[#f9b233] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow hover:bg-[#eda524]"
              >
                Use The Form
              </a>
            </div>
          </div>
        </section>

        <div className="text-sm text-[#777]">
          <Link href="/" className="underline">
            ← Back to homepage
          </Link>
        </div>
      </main>
  );
}

