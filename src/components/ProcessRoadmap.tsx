export default function ProcessRoadmap() {
  const roadmapSteps = [
    {
      step: "01",
      title: "Submit Request",
      detail: "Fill out our interest form or call (904) 456-3851. Share your property address, timeline, and any special considerations. We respond within 24 hours to schedule a consultation.",
    },
    {
      step: "02",
      title: "Discuss Home Contents",
      detail: "We talk about what's in your home—furniture, antiques, collectibles, everyday items. This helps us understand the scope of your estate and plan the right approach for your property.",
    },
    {
      step: "03",
      title: "Walkthrough & Assessment",
      detail: "We tour your property in person, identify valuable items, assess condition, and discuss your goals. We'll walk through every room, attic, garage, and storage area to build a complete inventory.",
    },
    {
      step: "04",
      title: "Establish Pricing & Plan",
      detail: "We create a detailed pricing strategy for your items and outline the complete timeline. You'll receive a written plan with pricing recommendations, marketing strategy, and estimated timelines before we proceed.",
    },
    {
      step: "05",
      title: "Cataloging & Photography",
      detail: "Our team photographs and catalogs every item for sale. Professional photos, detailed descriptions, and organized inventory help attract serious buyers and maximize your returns.",
    },
    {
      step: "06",
      title: "Marketing & Buyer Outreach",
      detail: "We promote your estate sale through our buyer networks, local marketing, online listings, and targeted outreach. Buyers are notified in advance and prepared for sale day.",
    },
    {
      step: "07",
      title: "Estate Sale Weekend",
      detail: "Professional team manages the sale day—checkout, security, crowd control, and buyer assistance. We handle all logistics so you don't have to be present.",
    },
    {
      step: "08",
      title: "Cleanout & Settlement",
      detail: "After the sale, we coordinate removal of remaining items through donations or buyouts. Within 72 hours, you receive final settlement documents and a broom-swept property ready for listing or turnover.",
    },
  ];

  return (
    <section className="rounded-[40px] bg-[#0f0f0f] px-8 py-12 text-white shadow-[0_30px_70px_rgba(0,0,0,0.25)] md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f9b233]">Our Process</p>
          <h2 className="text-3xl font-semibold">A step-by-step roadmap for your estate sale.</h2>
          <p className="text-sm text-[#d6d6d6]">From initial request to final settlement, here's exactly how we handle your estate sale from start to finish.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmapSteps.map((step, idx) => (
            <article key={step.step} className="group relative rounded-[24px] border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f9b233]/20 text-sm font-semibold text-[#f9b233]">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#d1d1d1]">{step.detail}</p>
                </div>
              </div>
              {idx < roadmapSteps.length - 1 && (
                <div className="absolute -right-3 top-16 hidden h-[2px] w-6 bg-white/20 lg:block" />
              )}
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[28px] border border-white/15 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm font-semibold text-[#f9b233]">Timeline Overview</p>
          <div className="mt-4 grid gap-4 text-sm text-[#d1d1d1] md:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Initial Contact to Walkthrough</p>
              <p className="mt-1">24-48 hours</p>
            </div>
            <div>
              <p className="font-semibold text-white">Walkthrough to Sale Launch</p>
              <p className="mt-1">7-14 days</p>
            </div>
            <div>
              <p className="font-semibold text-white">Sale Weekend to Settlement</p>
              <p className="mt-1">3-5 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

