import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { value: "500+", label: "Families Served" },
  { value: "900+", label: "Projects Completed" },
  { value: "60+", label: "Estate Experts" },
];

const services = [
  {
    title: "Estate Sales",
    description: "Curated cataloging, buyer outreach, and on-site management built for Jacksonville homes.",
    icon: "🗂️",
    points: ["Valuation & pricing", "VIP buyer lists", "Secure checkout"],
  },
  {
    title: "Home Cleanouts",
    description: "Licensed crews for hauling, donation coordination, and broom-swept turnovers.",
    icon: "🧹",
    points: ["Donation coordination", "Hauling & disposal", "Ready-to-list finishes"],
  },
  {
    title: "Donations & Buyouts",
    description: "We place unsold items with local charities or purchase lots outright for fast timelines.",
    icon: "🏠",
    points: ["Charity partnerships", "House + contents buyouts", "Net sheets within 48 hrs"],
  },
];

const processSteps = [
  { step: "01", title: "Walkthrough", detail: "We tour the property, align on timelines, and build an item inventory." },
  { step: "02", title: "Prep & Marketing", detail: "Photography, pricing, and targeted promotion to local + national buyers." },
  { step: "03", title: "Sale Weekend", detail: "Professional team manages access, checkout, and security." },
  { step: "04", title: "Cleanout & Report", detail: "Hauling, donations, and final settlement documents within 72 hours." },
];

const testimonials = [
  {
    quote: "They treated our family estate with care, ran a packed sale, and left the house spotless for listing.",
    name: "Linda M. – Riverside",
  },
  {
    quote: "Our brokerage trusts them for donation pickups and guaranteed buyouts when homes must close fast.",
    name: "James R. – Realtor Partner",
  },
];

const coverageAreas = ["San Marco", "Riverside", "Avondale", "Mandarin", "Ponte Vedra", "St. Johns", "Atlantic Beach", "Amelia Island"];

const faqs = [
  {
    q: "How fast can you start?",
    a: "Walkthroughs happen within 48 hours and most sales launch 7–10 days after cataloging.",
  },
  {
    q: "Do you handle donations and hauling?",
    a: "Yes. We coordinate haulers, donation partners, recycling, and deliver receipts for your records.",
  },
  {
    q: "Can you work with out-of-state families?",
    a: "Absolutely—digital approvals, photo updates, and a dedicated project manager keep everyone aligned.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Clear Path Estates",
    url: "https://www.clearpathestates.com",
    telephone: "+1-904-456-3851",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Ocean St.",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      postalCode: "32202",
      addressCountry: "US",
    },
    areaServed: coverageAreas.join(", "),
    description:
      "Clear Path Estates provides estate sales, cleanouts, donation coordination, and home buyouts across Jacksonville and Northeast Florida.",
  };

  return (
    <>
      <div className="bg-white text-[#1f1f1f]">
        <header className="border-b border-[#eee] bg-white/95">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight text-[#1b1b1b]">Clear Path Estates</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-[#333] md:flex">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-black">
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contact"
              className="rounded-full border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white"
            >
              Appointment
            </Link>
          </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
          <section className="grid gap-10 rounded-[32px] bg-[#f5f5f5] px-10 py-12 md:grid-cols-[1.1fr_0.9fr]" id="hero">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Estate Sales & Cleanouts</p>
              <h1 className="text-5xl font-semibold leading-tight text-[#0f0f0f]">We provide efficient estate services for Jacksonville families.</h1>
              <p className="text-lg text-[#4a4a4a]">
                Comprehensive estate sales, cleanouts, donation coordination, and house buyouts for residential, multi-family, and commercial properties across Northeast Florida.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link href="#services" className="rounded-full bg-[#f9b233] px-6 py-3 text-black shadow hover:bg-[#eda524]">
                  More About Us
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-black hover:border-black hover:text-[#f9b233]"
                >
                  Contact Us
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="grid gap-6 border-t border-[#ddd] pt-6 text-center text-sm md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-semibold text-[#0f0f0f]">{stat.value}</p>
                    <p className="text-[#555]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-[#e0d6cc] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Interest form</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#0f0f0f]">Get your estate plan started.</h3>
              <p className="mt-2 text-sm text-[#4a4a4a]">
                Share the basics and our Jacksonville coordinator will be in touch within one business day.
              </p>
              <form
                className="mt-6 space-y-4 text-sm"
                action="https://formspree.io/f/mrbrendl"
                method="POST"
              >
                <label className="block font-semibold text-[#0f0f0f]">
                  Full name
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    name="fullName"
                    className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 text-sm focus:border-black focus:outline-none"
                  />
                </label>
                <label className="block font-semibold text-[#0f0f0f]">
                  Email
                  <input
                    type="email"
                    placeholder="you@email.com"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 text-sm focus:border-black focus:outline-none"
                  />
                </label>
                <label className="block font-semibold text-[#0f0f0f]">
                  Service needed
                  <select
                    className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 text-sm focus:border-black focus:outline-none"
                    name="service"
                  >
                    <option>Estate Sale</option>
                    <option>Cleanout</option>
                    <option>Donations & Buyouts</option>
                  </select>
                </label>
                <label className="block font-semibold text-[#0f0f0f]">
                  Target timeline
                  <select
                    className="mt-2 w-full rounded-xl border border-[#ddd] px-4 py-3 text-sm focus:border-black focus:outline-none"
                    name="timeline"
                  >
                    <option>Next 2 weeks</option>
                    <option>Next 30 days</option>
                    <option>60+ days out</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#f9b233] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow hover:bg-[#eda524]"
                >
                  Submit Interest
                </button>
                <p className="text-xs text-[#777]">
                  Prefer to call?{" "}
                  <a href="tel:+19044563851" className="font-semibold text-black">
                    (904) 456-3851
                  </a>
                </p>
              </form>
            </div>
          </section>

          <section id="services" className="rounded-[32px] bg-gradient-to-br from-[#fef9f1] to-[#f5f5f5] px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Our Services</p>
                <h2 className="text-3xl font-semibold text-[#0f0f0f]">From appraisal to cleanout—handled.</h2>
                <p className="mt-2 text-sm text-[#4a4a4a]">Three specialized teams keep every estate project moving with one point of contact.</p>
              </div>
              <Link href="#process" className="text-sm font-semibold text-[#4a7a8c] underline-offset-4 hover:underline">
                See how the process works
              </Link>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#f0e3d5] bg-white p-6 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f9b233]/20 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#0f0f0f]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[#4a4a4a]">{service.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#4a4a4a]">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#f9b233]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border border-[#f9b233]/40 opacity-60 transition group-hover:scale-110" />
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="rounded-[40px] bg-[#0f0f0f] px-10 py-12 text-white shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.5em] text-[#f9b233]">Our process</p>
              <h2 className="text-3xl font-semibold">A guided playbook for every estate.</h2>
              <p className="text-sm text-[#d6d6d6]">Dedicated project managers keep you informed at every milestone.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.title} className="rounded-[24px] border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f9b233]">Step {step.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#d1d1d1]">{step.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="coverage" className="rounded-[32px] bg-white px-8 py-10 shadow-[0_40px_80px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Where we work</p>
              <h2 className="text-3xl font-semibold text-[#0f0f0f]">Neighborhood focus across Northeast Florida.</h2>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-wrap gap-3 text-sm text-[#4a4a4a]">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex min-w-[140px] items-center justify-center rounded-full border border-[#ddd] bg-white px-5 py-3 text-sm font-medium text-[#3b3b3b] shadow-[0_6px_15px_rgba(0,0,0,0.06)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="rounded-[24px] border border-dashed border-[#e0d6cc] bg-gradient-to-br from-[#fef9f1] to-white p-6 text-sm text-[#4a4a4a]">
                <p className="text-xs uppercase tracking-[0.4em] text-[#777]">On-site coordination</p>
                <p className="mt-3 text-lg font-semibold text-[#0f0f0f]">Permits, HOA approvals, and parking plans handled for you.</p>
                <p className="mt-3 text-sm">Live route plans, signage kits, and neighbor notices are ready for the day of your sale.</p>
              </div>
            </div>
          </section>

          <section id="testimonials" className="rounded-[32px] bg-white px-8 py-12 shadow-[0_40px_80px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Testimonials</p>
              <h2 className="text-3xl font-semibold text-[#0f0f0f]">Trusted by families & partners.</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-[24px] border border-[#eee] bg-gradient-to-br from-white to-[#f9f9f9] p-6 text-[#4a4a4a] shadow-[0_20px_45px_rgba(0,0,0,0.05)]">
                  <p className="text-lg leading-relaxed">“{testimonial.quote}”</p>
                  <cite className="mt-6 block text-sm font-semibold text-[#0f0f0f] not-italic">{testimonial.name}</cite>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="rounded-[36px] bg-[#f4f4f4] px-8 py-12">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">FAQ</p>
              <h2 className="text-3xl font-semibold text-[#0f0f0f]">Answers before we arrive.</h2>
            </div>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[20px] border border-[#ddd] bg-white px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <summary className="cursor-pointer text-base font-semibold text-[#0f0f0f]">{item.q}</summary>
                  <p className="mt-3 text-sm text-[#4a4a4a]">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="contact" className="rounded-[40px] bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] px-10 py-12 text-white shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[#f9b233]">Contact</p>
                <h2 className="text-3xl font-semibold text-white">Schedule your consultation.</h2>
                <p className="text-sm text-[#d6d6d6]">Reach out for a free walkthrough and custom plan for your estate or cleanout project.</p>
                <div className="space-y-2 text-sm text-[#d6d6d6]">
                  <p>
                    Phone: <a href="tel:+19044563851" className="font-semibold text-white">(904) 456-3851</a>
                  </p>
                  <p>
                    Email: <a href="mailto:hello@clearpathestates.com" className="font-semibold text-white">hello@clearpathestates.com</a>
                  </p>
                  <p>Office: Downtown Jacksonville</p>
                </div>
              </div>
              <form
                className="grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
                action="https://formspree.io/f/mrbrendl"
                method="POST"
              >
                <label className="text-sm font-semibold">
                  Name
                  <input
                    className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#bdbdbd] focus:border-white focus:outline-none"
                    placeholder="Jane Smith"
                    name="fullName"
                  />
                </label>
                <label className="text-sm font-semibold">
                  Email
                  <input
                    className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#bdbdbd] focus:border-white focus:outline-none"
                    placeholder="you@email.com"
                    name="email"
                  />
                </label>
                <label className="text-sm font-semibold">
                  Service needed
                  <select
                    className="mt-2 w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-sm text-[#1f1f1f] focus:border-white focus:outline-none"
                    name="service"
                  >
                    <option>Estate Sale</option>
                    <option>Cleanout</option>
                    <option>Donations & Buyouts</option>
                  </select>
                </label>
                <label className="text-sm font-semibold">
                  Notes
                  <textarea
                    className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#bdbdbd] focus:border-white focus:outline-none"
                    rows={4}
                    placeholder="Share timelines, addresses, or special requests."
                    name="notes"
                  />
                </label>
                <button type="submit" className="rounded-full bg-[#f9b233] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow hover:bg-[#eda524]">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#eee] bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-[#666] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Clear Path Estates. All rights reserved.</p>
            <p>Jacksonville • Ponte Vedra • St. Johns • Amelia Island</p>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}

