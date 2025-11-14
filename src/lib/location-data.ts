export type LocationData = {
  slug: string;
  name: string;
  cityTagline: string;
  description: string;
  stats: { value: string; label: string }[];
  serviceHighlights: string[];
  localInsights: string[];
  nearbyStreets: string[];
  faqs: { q: string; a: string }[];
};

export const locations: LocationData[] = [
  {
    slug: "san-marco",
    name: "San Marco",
    cityTagline: "Historic riverfront estates off Hendricks Avenue",
    description:
      "San Marco families lean on Clear Path Estates to catalog heirlooms, coordinate donation pickups, and prep historic homes for the market without disrupting tight HOA rules.",
    stats: [
      { value: "$112K", label: "Record San Marco sale" },
      { value: "72 hrs", label: "Average cleanout" },
      { value: "14", label: "Preferred HOA partners" },
    ],
    serviceHighlights: [
      "White-glove cataloging for antiques and art collections",
      "Donation coordination with Riverside Avondale Preservation partners",
      "House + contents buyouts for fast closings",
    ],
    localInsights: [
      "Permit planning for tight streets along River Road and Belote Place.",
      "Custom signage packages that meet San Marco Merchants Association guidelines.",
      "Reserved buyer lists that specifically target historic-home collectors.",
    ],
    nearbyStreets: ["River Road", "Largo Road", "Lasalle Street", "Belote Place"],
    faqs: [
      {
        q: "Can you move buyers through narrow San Marco streets?",
        a: "Yes. We release staggered entry windows, coordinate valet parking, and keep River Road clear per HOA requirements.",
      },
      {
        q: "How do buyouts work in San Marco?",
        a: "We evaluate the full contents, provide a written offer within 48 hours, and coordinate removal the same week.",
      },
    ],
  },
  {
    slug: "riverside",
    name: "Riverside",
    cityTagline: "Bungalows and brownstones near King Street",
    description:
      "From multi-level brownstones to boutique storefronts, our Riverside crew balances retail foot traffic with estate sale buyers for maximum turnout.",
    stats: [
      { value: "$92K", label: "King Street brownstone" },
      { value: "350+", label: "Average buyer turnout" },
      { value: "18", label: "Donation partners nearby" },
    ],
    serviceHighlights: [
      "Weekday preview appointments for local designers",
      "Partnerships with Five Points charities for second-chance donations",
      "Flexible buyouts for mixed residential + commercial properties",
    ],
    localInsights: [
      "We pull parking permits along Herschel Street when needed.",
      "Our team coordinates with independent shops to share sale flyers and QR codes.",
      "Riverside buyers respond well to curated art + vinyl collections.",
    ],
    nearbyStreets: ["King Street", "Herschel Street", "Park Street", "Cherry Street"],
    faqs: [
      {
        q: "Do you handle mixed home-and-studio estates?",
        a: "Yes. We create separate floor plans, tag inventory, and manage payment splits for Riverside artists.",
      },
      {
        q: "Can you help donate items to local nonprofits?",
        a: "We work with multiple Five Points and Murray Hill organizations to place unsold furniture, décor, and clothing same day.",
      },
    ],
  },
  {
    slug: "avondale",
    name: "Avondale",
    cityTagline: "Tree-lined streets and historic brick homes",
    description:
      "Avondale estates demand discreet marketing, curated buyer previews, and immaculate post-sale cleanouts to protect historic finishes.",
    stats: [
      { value: "48 hrs", label: "Average contract-to-sale" },
      { value: "$68K", label: "Recent Avondale net" },
      { value: "100%", label: "Post-clean photo documentation" },
    ],
    serviceHighlights: [
      "Private showings for collectors and interior designers",
      "Climate-controlled storage for heirlooms during sales",
      "Buyout options for partial estates or rental turnovers",
    ],
    localInsights: [
      "We protect original hardwoods with runner systems and shoe covers.",
      "Our marketing references Avondale Preservation rules to reassure buyers.",
      "Donation receipts arrive within 24 hours for quick tax documentation.",
    ],
    nearbyStreets: ["St Johns Avenue", "Herschel Street", "Silver Street", "Talbot Avenue"],
    faqs: [
      {
        q: "How do you protect historic finishes?",
        a: "We install protective runners, wrap banisters, and assign a floor captain to monitor traffic at all times.",
      },
      {
        q: "Do you accept partial estates?",
        a: "Yes. We offer mini-sales or direct buyouts for smaller Avondale condos and rentals.",
      },
    ],
  },
  {
    slug: "mandarin",
    name: "Mandarin",
    cityTagline: "Riverfront properties south of I-295",
    description:
      "Mandarin estates often combine acreage, workshops, and storage units. Clear Path Estates deploys multiple crews to catalog everything in a single schedule.",
    stats: [
      { value: "12 tons", label: "Largest Mandarin cleanout" },
      { value: "7 days", label: "Typical sale launch" },
      { value: "5", label: "On-site project leads" },
    ],
    serviceHighlights: [
      "Barn, workshop, and storage-unit liquidations",
      "Farm equipment marketing to regional buyers",
      "Donation + recycling programs for bulky items",
    ],
    localInsights: [
      "We coordinate gate codes and HOA approvals along Mandarin Road.",
      "Our buyer list includes boaters and landscapers for specialized equipment.",
      "We deploy separate crews for house interiors vs. outbuildings.",
    ],
    nearbyStreets: ["Mandarin Road", "Scott Mill Road", "Julington Creek Road", "Hood Landing Road"],
    faqs: [
      {
        q: "How do you handle large acreage cleanouts?",
        a: "We stage roll-off dumpsters, schedule donation trucks, and map every structure for inventory.",
      },
      {
        q: "Can you market tractors or boats?",
        a: "Yes. We capture 4K video tours and push to niche buyer groups across Florida and Georgia.",
      },
    ],
  },
  {
    slug: "ponte-vedra",
    name: "Ponte Vedra",
    cityTagline: "Coastal estates spanning Nocatee to the Beaches",
    description:
      "Luxury buyers expect seamless scheduling, secure payment processing, and designer-level staging. Our Ponte Vedra team delivers concierge service from gatehouse to cleanout.",
    stats: [
      { value: "$134K", label: "Largest Ponte Vedra sale" },
      { value: "4 days", label: "Average live sale" },
      { value: "40%", label: "Items sold via private preview" },
    ],
    serviceHighlights: [
      "Gated community coordination with Sawgrass and Marsh Landing",
      "On-site staging and lighting for designer furnishings",
      "Guaranteed buyouts for relocations with tight closings",
    ],
    localInsights: [
      "We pre-register buyers to comply with gated community requirements.",
      "High-end listings get professional photo + video assets for national reach.",
      "Donation trucks deliver to Beaches-area nonprofits the same week.",
    ],
    nearbyStreets: ["Ponte Vedra Boulevard", "A1A", "Solana Road", "Roscoe Boulevard"],
    faqs: [
      {
        q: "Do you offer private previews?",
        a: "Yes. We schedule designer + VIP walk-throughs before the public sale to move large-ticket items early.",
      },
      {
        q: "What if we need everything gone fast?",
        a: "We can structure a guaranteed buyout where our investors purchase remaining contents within 72 hours.",
      },
    ],
  },
  {
    slug: "st-johns",
    name: "St. Johns",
    cityTagline: "Master-planned communities across County Road 210",
    description:
      "St. Johns neighborhoods like Julington Creek and Durbin Crossing grow fast. Clear Path manages HOA guidelines while turning entire homes in under a week.",
    stats: [
      { value: "96%", label: "Average sell-through" },
      { value: "5 days", label: "From catalog to live sale" },
      { value: "8", label: "HOAs we coordinate with" },
    ],
    serviceHighlights: [
      "Weekend sales to capture commuter buyers",
      "Donation coordination with county-approved partners",
      "Shed and garage cleanouts bundled with house turnover",
    ],
    localInsights: [
      "We file HOA notifications for signage and traffic control within 24 hours.",
      "Our marketing targets top-rated St. Johns County Facebook groups.",
      "Families love our kids' zone pricing strategy for toys and sports gear.",
    ],
    nearbyStreets: ["CR-210", "Race Track Road", "Durbin Creek Boulevard", "Julington Creek Road"],
    faqs: [
      {
        q: "Can you help if we're relocating out of state?",
        a: "Absolutely. We offer video updates, digital approvals, and post-cleanout photo sets so you never need to fly back.",
      },
      {
        q: "Do you remove sheds or playsets?",
        a: "Yes. Our licensed partners dismantle and haul large structures with proper permits.",
      },
    ],
  },
  {
    slug: "atlantic-beach",
    name: "Atlantic Beach",
    cityTagline: "Coastal cottages east of Mayport Road",
    description:
      "Atlantic Beach estates blend surf culture with high-end design. We manage salt-air storage, seaside parking, and post-sale cleanings that meet rental standards.",
    stats: [
      { value: "420+", label: "Average buyer emails per sale" },
      { value: "3 days", label: "Live sale duration" },
      { value: "24 hrs", label: "Donation pickup" },
    ],
    serviceHighlights: [
      "Sunrise-to-noon sale windows for beach traffic",
      "Staging services for Airbnb turnovers",
      "Donations + buyouts for surf gear, bikes, and beach décor",
    ],
    localInsights: [
      "We secure parking variances along Seminole Road when needed.",
      "Our team wipes salt residue and sand from flooring after each day.",
      "Buyers respond well to bundle pricing for coastal décor.",
    ],
    nearbyStreets: ["Seminole Road", "Atlantic Boulevard", "Plaza Road", "Dutton Island Drive"],
    faqs: [
      {
        q: "Can you prep short-term rentals between guests?",
        a: "Yes. We coordinate accelerated cleanouts and deliver a ready-to-rent checklist to your property manager.",
      },
      {
        q: "Do you handle bikes and boards?",
        a: "We photograph serial numbers, price sets, and can offer direct buyouts for gear-heavy estates.",
      },
    ],
  },
  {
    slug: "amelia-island",
    name: "Amelia Island",
    cityTagline: "Resort and golf-course homes from Fernandina Beach south",
    description:
      "Second homes and golf-course estates on Amelia Island require remote coordination, secure storage, and relationships with resort security teams.",
    stats: [
      { value: "$105K", label: "Largest Amelia sale" },
      { value: "10", label: "Golf communities served" },
      { value: "1 day", label: "Average response time" },
    ],
    serviceHighlights: [
      "Remote owner communication with digital dashboards",
      "Golf cart + equipment liquidation",
      "Partnerships with Amelia Island charities for donations",
    ],
    localInsights: [
      "We badge every crew member to work inside gated resort communities.",
      "Our buyer list includes golfers and collectors from Savannah to Daytona.",
      "We offer climate-controlled storage for fine art awaiting shipment.",
    ],
    nearbyStreets: ["Amelia Island Parkway", "First Coast Highway", "Fletcher Avenue", "Scott Road"],
    faqs: [
      {
        q: "Can you manage sales if we're out of state?",
        a: "Yes. You’ll receive video walk-throughs, digital contracts, and net proceeds via ACH.",
      },
      {
        q: "Do you ship items to buyers?",
        a: "We handle white-glove packing and coordinate insured freight for high-value pieces.",
      },
    ],
  },
];

export const locationMap = Object.fromEntries(
  locations.map((entry) => [entry.slug, entry])
);

