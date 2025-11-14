export type LocationContent = {
  slug: string;
  name: string;
  cityLine: string;
  heroHeadline: string;
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  serviceHighlights: { title: string; detail: string }[];
  localHighlights: string[];
  recentProjects: { title: string; stat: string; detail: string }[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const locations: LocationContent[] = [
  {
    slug: "san-marco",
    name: "San Marco",
    cityLine: "San Marco • Jacksonville, FL",
    heroHeadline: "Estate sales for San Marco’s historic riverfront homes.",
    heroDescription:
      "We protect architectural details, coordinate with HOA boards, and attract buyers for fine art, antiques, and designer furnishings popular throughout San Marco.",
    heroStats: [
      { value: "$115K", label: "record San Marco weekend sale" },
      { value: "48 hrs", label: "average cleanout timeline" },
      { value: "12", label: "historic districts served" },
    ],
    serviceHighlights: [
      {
        title: "Historic home staging",
        detail: "White-glove cataloging with museum-quality photo sets for Mediterranean, Tudor, and Art Deco interiors.",
      },
      {
        title: "Designer + collector outreach",
        detail: "Private buyer lists covering Riverside Arts Market vendors, interior designers, and out-of-state collectors.",
      },
      {
        title: "Donation & buyout options",
        detail: "Fast offers for remaining lots plus same-week donations to San Marco charities and thrift partners.",
      },
    ],
    localHighlights: [
      "HOA notice templates for Riverfront, Granada, and Southbank associations.",
      "Preferred parking plans for narrow San Marco streets and riverfront cul-de-sacs.",
      "Climate-controlled storage partners on Hendricks Ave. for staged collections.",
    ],
    recentProjects: [
      {
        title: "Riverfront estate",
        stat: "$92K | 2-day sale",
        detail: "Sold vintage Steinway, sterling sets, and fine art to national buyers with white-glove packing.",
      },
      {
        title: "San Marco Square downsizing",
        stat: "72 hr cleanout",
        detail: "Cleared three stories, documented heirloom china, and coordinated buyout of remaining furniture.",
      },
    ],
    seoTitle: "San Marco Estate Sales & Cleanouts | Clear Path Estates",
    seoDescription:
      "Clear Path Estates manages San Marco estate sales, donation coordination, and house buyouts with historic-district compliant logistics.",
    keywords: [
      "San Marco estate sales",
      "San Marco cleanout services",
      "Jacksonville historic home liquidation",
      "San Marco donation pickups",
    ],
  },
  {
    slug: "riverside",
    name: "Riverside",
    cityLine: "Riverside • Jacksonville, FL",
    heroHeadline: "Riverside and Five Points estates handled with local expertise.",
    heroDescription:
      "From bungalow collections to Craftsman mansions, we deliver transparent reporting, fast buyouts, and donation placement that fits Riverside’s creative vibe.",
    heroStats: [
      { value: "$86K", label: "highest Riverside sale" },
      { value: "350+", label: "average buyers per weekend" },
      { value: "10", label: "gallery partners nearby" },
    ],
    serviceHighlights: [
      {
        title: "Collector marketing",
        detail: "Target emails to Cummer Museum patrons, Five Points vintage dealers, and art collectors.",
      },
      {
        title: "Eco-friendly cleanouts",
        detail: "Partnerships with local reuse centers to keep Riverside’s sustainability goals intact.",
      },
      {
        title: "Studio + loft buyouts",
        detail: "Rapid offers for mixed-use properties, perfect for relocating artists or investors.",
      },
    ],
    localHighlights: [
      "City permit pull-through for Herschel St. and Oak St. parking restrictions.",
      "Coordination with neighborhood associations for signage and crowd management.",
      "Preferred movers for narrow Riverside driveways and alley access.",
    ],
    recentProjects: [
      {
        title: "Five Points artist loft",
        stat: "$48K sale",
        detail: "Sold mid-century furniture and art supplies, bought out unsold canvases for corporate staging.",
      },
      {
        title: "Riverside bungalow",
        stat: "10-day start-to-finish",
        detail: "Cataloged 450 lots, hosted a two-day sale, and donated remaining goods to a local reuse store.",
      },
    ],
    seoTitle: "Riverside Estate Sales & Donation Coordination | Clear Path Estates",
    seoDescription:
      "Need an estate sale in Riverside or Five Points? Clear Path Estates manages sales, eco cleanouts, and investor buyouts with local logistics dialed in.",
    keywords: [
      "Riverside Jacksonville estate sales",
      "Five Points cleanouts",
      "Riverside donation pickup",
      "Jacksonville investor buyouts",
    ],
  },
  {
    slug: "avondale",
    name: "Avondale",
    cityLine: "Avondale • Jacksonville, FL",
    heroHeadline: "Avondale estates marketed to high-end collectors.",
    heroDescription:
      "We preserve Avondale’s stately charm while maximizing returns on antiques, designer lighting, and curated art collections.",
    heroStats: [
      { value: "$102K", label: "top Avondale sale" },
      { value: "15", label: "designer partners" },
      { value: "3 days", label: "average cleanout" },
    ],
    serviceHighlights: [
      {
        title: "Historic preservation focus",
        detail: "Detailed cataloging for Early 20th-century architecture, ensuring fixtures and built-ins stay protected.",
      },
      {
        title: "High-net-worth buyer lists",
        detail: "Outreach to Ortega, Venetia, and Ortega Forest buyers for heirloom purchases.",
      },
      {
        title: "Estate donation concierge",
        detail: "Handle Avondale Presbyterian thrift donations, receipts, and pickup schedules.",
      },
    ],
    localHighlights: [
      "Preferred staging warehouse minutes from St. Johns Ave.",
      "Event coordination for restricted parking corridors.",
      "Partnership with local auction houses for specialty lots.",
    ],
    recentProjects: [
      {
        title: "St. Johns Ave. estate",
        stat: "$102K weekend",
        detail: "High-end furniture, bronze sculpture, and Persian rugs sold with remote bidder participation.",
      },
      {
        title: "Avondale carriage house",
        stat: "72-hour cleanout",
        detail: "Cleared carriage house, coordinated buyout of shop tools, and sold home within a week.",
      },
    ],
    seoTitle: "Avondale Estate Sales & Cleanouts | Clear Path Estates",
    seoDescription:
      "Clear Path Estates manages Avondale estate sales, charity donations, and expedited cleanouts tailored to historic homes.",
    keywords: [
      "Avondale estate sales",
      "Avondale Jacksonville cleanouts",
      "St. Johns Avenue estate services",
      "Avondale donation coordination",
    ],
  },
  {
    slug: "mandarin",
    name: "Mandarin",
    cityLine: "Mandarin • Jacksonville, FL",
    heroHeadline: "Mandarin estate sales plus large-lot cleanouts.",
    heroDescription:
      "We handle sprawling riverfront homes, barns, and outbuildings throughout Mandarin with dedicated crews, dumpsters, and donation partners.",
    heroStats: [
      { value: "8 acres", label: "largest Mandarin cleanout" },
      { value: "$76K", label: "Mandarin sale record" },
      { value: "5", label: "local charity partners" },
    ],
    serviceHighlights: [
      {
        title: "Acreage-ready logistics",
        detail: "Portable storage, tractor access, and dismissal plans for equipment on Julington Creek properties.",
      },
      {
        title: "Barn + workshop sales",
        detail: "Specialty marketing for tools, vehicles, and agricultural equipment.",
      },
      {
        title: "Donation + buyout programs",
        detail: "We buy remaining furniture lots or donate them to Mandarin-area nonprofits within 48 hours.",
      },
    ],
    localHighlights: [
      "HOA coordination for Julington Creek Plantation and gated Mandarin riverfront communities.",
      "Preferred waste partners for larger debris removal.",
      "Boat dock cleanouts and coordination with marine donation groups.",
    ],
    recentProjects: [
      {
        title: "Julington Creek estate",
        stat: "$76K | 3-day sale",
        detail: "Sold classic cars, workshop equipment, and fine furniture with secure payment processing.",
      },
      {
        title: "Old Mandarin farmhouse",
        stat: "5 dumpsters in 4 days",
        detail: "Cleared barns, transferred livestock gear, and staged home for listing.",
      },
    ],
    seoTitle: "Mandarin Estate Sales, Barn Cleanouts & Buyouts | Clear Path Estates",
    seoDescription:
      "Mandarin homeowners trust Clear Path Estates for acreage-ready estate sales, donation coordination, and guaranteed buyouts.",
    keywords: [
      "Mandarin estate sales",
      "Julington Creek cleanout",
      "Mandarin donation pickup",
      "Mandarin house buyout",
    ],
  },
  {
    slug: "ponte-vedra",
    name: "Ponte Vedra",
    cityLine: "Ponte Vedra • St. Johns County, FL",
    heroHeadline: "Luxury Ponte Vedra estates, downsizes, and buyouts.",
    heroDescription:
      "We deliver concierge-level estate services for Sawgrass, Marsh Landing, Nocatee, and coastal communities complete with white-glove crews and buyer vetting.",
    heroStats: [
      { value: "$145K", label: "largest Ponte Vedra sale" },
      { value: "24 hrs", label: "average response time" },
      { value: "6", label: "HOA partners" },
    ],
    serviceHighlights: [
      {
        title: "Luxury marketing",
        detail: "Private previews for Ponte Vedra & Nocatee buyers plus virtual catalogs for remote investors.",
      },
      {
        title: "Coastal cleanouts",
        detail: "Special handling for climate-sensitive inventory and coastal storage.",
      },
      {
        title: "Guaranteed buyouts",
        detail: "Purchase remaining designer furniture or entire house contents for fast closings.",
      },
    ],
    localHighlights: [
      "Sawgrass and Marsh Landing gate coordination and guest lists.",
      "Preferred delivery partners for coastal buyers and out-of-state shipping.",
      "Donation pickups benefitting Ponte Vedra Beaches Habitat and local charities.",
    ],
    recentProjects: [
      {
        title: "Marsh Landing estate",
        stat: "$145K sale",
        detail: "Sold designer furnishings, fine art, and wine collection with international bidders.",
      },
      {
        title: "Nocatee buyout",
        stat: "Closed in 5 days",
        detail: "Purchased entire home contents to accelerate relocation closing timeline.",
      },
    ],
    seoTitle: "Ponte Vedra Estate Sales & House Buyouts | Clear Path Estates",
    seoDescription:
      "Luxury-focused estate sales, donation coordination, and full-house buyouts for Ponte Vedra, Sawgrass, and Nocatee homeowners.",
    keywords: [
      "Ponte Vedra estate sale company",
      "Sawgrass cleanout",
      "Nocatee donation pickup",
      "Marsh Landing house buyout",
    ],
  },
  {
    slug: "st-johns",
    name: "St. Johns",
    cityLine: "St. Johns County, FL",
    heroHeadline: "St. Johns estates and senior downsizes with local crews.",
    heroDescription:
      "We support growing St. Johns communities—Julington Creek, CR-210, SilverLeaf—with schedule-driven estate sales plus donation and buyout options.",
    heroStats: [
      { value: "900+", label: "St. Johns lots cataloged" },
      { value: "15", label: "senior communities served" },
      { value: "4 days", label: "average sale launch" },
    ],
    serviceHighlights: [
      {
        title: "Community coordination",
        detail: "Approved vendor with multiple CDD and HOA boards for signage, parking, and guard gates.",
      },
      {
        title: "Senior-focused downsizing",
        detail: "Compassionate teams for active adult communities with donation planning and shipping to family.",
      },
      {
        title: "Buyout + clean sweep",
        detail: "Guaranteed offers for remaining items so closing timelines stay on track.",
      },
    ],
    localHighlights: [
      "Relationships with SilverLeaf, Shearwater, and Beacon Lake management teams.",
      "Preferred storage partners along CR-210.",
      "Donation network spanning St. Johns County charities and church programs.",
    ],
    recentProjects: [
      {
        title: "Julington Creek resale",
        stat: "$58K weekend",
        detail: "Modern furnishings and outdoor living packages sold via in-person and virtual bidders.",
      },
      {
        title: "Shearwater relocation",
        stat: "48 hr clean sweep",
        detail: "Coordinated donation truck, buyout offer, and broom-swept turnover for closing.",
      },
    ],
    seoTitle: "St. Johns Estate Sales & Clean Sweeps | Clear Path Estates",
    seoDescription:
      "St. Johns County trusts Clear Path Estates for schedule-driven estate sales, senior downsizes, and donation/buyout coordination.",
    keywords: [
      "St. Johns estate sale",
      "CR-210 cleanout service",
      "SilverLeaf downsizing",
      "St. Johns County donation pickup",
    ],
  },
  {
    slug: "atlantic-beach",
    name: "Atlantic Beach",
    cityLine: "Atlantic Beach • Jacksonville Beaches",
    heroHeadline: "Atlantic Beach estate sales and coastal cleanouts.",
    heroDescription:
      "We manage oceanfront and beachside downsizes with climate-aware storage, coastal buyers, and flexible scheduling around HOA/condo rules.",
    heroStats: [
      { value: "$68K", label: "top beach sale" },
      { value: "24 hrs", label: "response time" },
      { value: "5", label: "beach HOA partners" },
    ],
    serviceHighlights: [
      {
        title: "Coastal asset care",
        detail: "Protect art and furniture from salt air with climate trucks and shrink-wrapping.",
      },
      {
        title: "Beach parking + access",
        detail: "Plan elevator reservations, wristbands, and parking passes for condos and gated communities.",
      },
      {
        title: "Donation + buyout safety net",
        detail: "Remaining furniture routed to Beaches Habitat or bought out for fast closings.",
      },
    ],
    localHighlights: [
      "Coordination with Atlantic Beach, Neptune Beach, and Mayport HOA boards.",
      "Preferred moving teams for condos on Ocean Blvd., Seminole Rd., and Fleet Landing.",
      "Marine donation partners for fishing gear and boats.",
    ],
    recentProjects: [
      {
        title: "Ocean Blvd. penthouse",
        stat: "$68K multi-day sale",
        detail: "High-end coastal decor sold to buyers from Ponte Vedra to Fernandina.",
      },
      {
        title: "Fleet Landing buyout",
        stat: "Closed in 72 hrs",
        detail: "Purchased entire condo contents to meet quick move-in deadlines.",
      },
    ],
    seoTitle: "Atlantic Beach Estate Sales & Coastal Cleanouts | Clear Path Estates",
    seoDescription:
      "Atlantic Beach homeowners rely on Clear Path Estates for HOA-compliant estate sales, coastal donation pickups, and house buyouts.",
    keywords: [
      "Atlantic Beach estate sale company",
      "Jacksonville Beach cleanout",
      "Atlantic Beach donation pickup",
      "Fleet Landing buyout",
    ],
  },
  {
    slug: "amelia-island",
    name: "Amelia Island",
    cityLine: "Amelia Island • Nassau County, FL",
    heroHeadline: "Amelia Island estates with resort-style service.",
    heroDescription:
      "From historic Fernandina Beach cottages to golf-course homes, we provide destination-level estate sales, donation coordination, and buyout solutions.",
    heroStats: [
      { value: "$74K", label: "highest Amelia Island sale" },
      { value: "6", label: "resort communities served" },
      { value: "300+", label: "average attendees" },
    ],
    serviceHighlights: [
      {
        title: "Resort + club coordination",
        detail: "Access management for Amelia Island Plantation, Summer Beach, and Long Point communities.",
      },
      {
        title: "Destination buyers",
        detail: "Market to golf club members, vacation-home investors, and Fernandina collectors.",
      },
      {
        title: "Estate donation & buyout",
        detail: "Remaining furnishings donated to Nassau County nonprofits or purchased outright for quick turnovers.",
      },
    ],
    localHighlights: [
      "Preferred logistics partners for ferry/dock access and gated communities.",
      "Storage and shipping coordination for out-of-state heirs.",
      "Relationships with Amelia Island Museum of History and local preservationists.",
    ],
    recentProjects: [
      {
        title: "Amelia Island Plantation villa",
        stat: "$74K sale",
        detail: "Sold coastal furniture, artwork, and golf carts with worldwide bidder participation.",
      },
      {
        title: "Historic Fernandina cottage",
        stat: "One-week turnaround",
        detail: "Documented heirlooms, held a boutique sale, and arranged donation receipts for new owners.",
      },
    ],
    seoTitle: "Amelia Island Estate Sales & Donation Services | Clear Path Estates",
    seoDescription:
      "Plan an Amelia Island estate sale or donation/buyout with Clear Path Estates—trusted across Fernandina Beach, Summer Beach, and resort communities.",
    keywords: [
      "Amelia Island estate sale",
      "Fernandina Beach cleanout",
      "Amelia Island donation pickup",
      "Amelia Plantation buyout",
    ],
  },
];

export const locationMap = Object.fromEntries(
  locations.map((location) => [location.slug, location])
);
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

