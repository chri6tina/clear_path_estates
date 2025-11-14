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
  {
    slug: "ortega",
    name: "Ortega",
    cityLine: "Ortega • Jacksonville, FL",
    heroHeadline: "Ortega estate sales with yacht-club level service.",
    heroDescription:
      "We protect Ortega River homes, grand waterfront estates, and Ortega Forest properties with concierge sale management, donation coordination, and rapid buyouts.",
    heroStats: [
      { value: "$118K", label: "largest Ortega sale" },
      { value: "30", label: "boat slips cleared" },
      { value: "4 days", label: "average closeout" },
    ],
    serviceHighlights: [
      {
        title: "Riverfront logistics",
        detail: "Boat dock cleanouts, marine donation partners, and secure handling for nautical equipment.",
      },
      {
        title: "Collector outreach",
        detail: "Private previews for Ortega, Venetia, and Ortega Forest buyers seeking heirlooms and designer decor.",
      },
      {
        title: "House & contents buyouts",
        detail: "Expedited buyout offers for sellers coordinating relocations or estate settlements.",
      },
    ],
    localHighlights: [
      "Guard gate coordination for Ortega Forest and Admirals Walk.",
      "Preferred movers for narrow Ortega Point drives.",
      "Donation partnerships with local churches and waterfront charities.",
    ],
    recentProjects: [
      {
        title: "Ortega River estate",
        stat: "$118K weekend",
        detail: "Sold fine furniture, art, and watercraft; donated remaining patio sets to riverfront charity.",
      },
      {
        title: "Yacht Club relocation",
        stat: "5-day buyout",
        detail: "Purchased entire contents to meet cash buyer closing timeline.",
      },
    ],
    seoTitle: "Ortega Estate Sales & Waterfront Cleanouts | Clear Path Estates",
    seoDescription:
      "Ortega riverfront homeowners rely on Clear Path Estates for luxury estate sales, donation coordination, and fast buyouts.",
    keywords: [
      "Ortega estate sale",
      "Ortega Forest cleanout",
      "Jacksonville waterfront buyout",
      "Ortega donation pickup",
    ],
  },
  {
    slug: "murray-hill",
    name: "Murray Hill",
    cityLine: "Murray Hill • Jacksonville, FL",
    heroHeadline: "Murray Hill estate sales tailored to bungalows and creatives.",
    heroDescription:
      "We serve Murray Hill artists, vintage collectors, and young families with curated estate sales, donation pickups, and remnant buyouts.",
    heroStats: [
      { value: "$42K", label: "top Murray Hill sale" },
      { value: "300+", label: "buyers on call list" },
      { value: "24 hrs", label: "response time" },
    ],
    serviceHighlights: [
      {
        title: "Vintage + mid-century focus",
        detail: "Marketing to Riverside Arts Market vendors, Five Points dealers, and retro collectors.",
      },
      {
        title: "Eco donations",
        detail: "Partnerships with reuse stores and neighborhood thrift outlets for minimal waste.",
      },
      {
        title: "Rental-ready cleanouts",
        detail: "Turnkey clean sweeps for landlords or investors flipping Murray Hill properties.",
      },
    ],
    localHighlights: [
      "Permit-ready plans for Post St., Edgewood Ave., and tight alley parking.",
      "Coordination with Murray Hill Preservation Association.",
      "Donation trucks scheduled around community events.",
    ],
    recentProjects: [
      {
        title: "MCM bungalow",
        stat: "$38K sale",
        detail: "Sold mid-century furniture, repurposed art, and bought remaining studio supplies.",
      },
      {
        title: "Investor clean sweep",
        stat: "72-hour turnover",
        detail: "Cleared rental property, donated appliances, and delivered broom-swept home to GC.",
      },
    ],
    seoTitle: "Murray Hill Estate Sales & Cleanouts | Clear Path Estates",
    seoDescription:
      "Need an estate sale in Murray Hill? We handle creative collections, donations, and clean sweeps for investors.",
    keywords: [
      "Murray Hill estate sale",
      "Jacksonville bungalow cleanout",
      "Murray Hill donation pickup",
      "Riverside vintage sale",
    ],
  },
  {
    slug: "springfield",
    name: "Springfield",
    cityLine: "Historic Springfield • Jacksonville, FL",
    heroHeadline: "Springfield historic-district estate services.",
    heroDescription:
      "We respect Springfield preservation rules while cataloging antiques, coordinating donations, and providing buyouts for Victorian and Craftsman homes.",
    heroStats: [
      { value: "$55K", label: "largest Springfield sale" },
      { value: "15", label: "historic homes served yearly" },
      { value: "10-day", label: "average launch" },
    ],
    serviceHighlights: [
      {
        title: "Preservation-friendly handling",
        detail: "Protect stained glass, original millwork, and vintage fixtures during sale prep.",
      },
      {
        title: "Antique promotion",
        detail: "Targeted marketing to collectors, preservationists, and museum supporters.",
      },
      {
        title: "Donation receipts",
        detail: "Detailed documentation for Springfield Improvement Association-supported nonprofits.",
      },
    ],
    localHighlights: [
      "Compliance with Springfield Historic District signage rules.",
      "Coordination for limited off-street parking.",
      "Partnerships with local thrift boutiques and reuse centers.",
    ],
    recentProjects: [
      {
        title: "Victorian row home",
        stat: "$55K sale",
        detail: "Sold period furniture and lighting; shipped heirlooms to out-of-state heirs.",
      },
      {
        title: "Yellow house cleanout",
        stat: "4-day turnaround",
        detail: "Cleared attic archives, donated appliances, and staged home for listing.",
      },
    ],
    seoTitle: "Springfield Historic Estate Sales & Donations | Clear Path Estates",
    seoDescription:
      "Historic Springfield homeowners trust Clear Path Estates for compliant estate sales, antique marketing, and donation coordination.",
    keywords: [
      "Springfield Jacksonville estate sale",
      "Springfield historic cleanout",
      "Springfield donation receipts",
      "Springfield buyout services",
    ],
  },
  {
    slug: "downtown-jacksonville",
    name: "Downtown Jacksonville",
    cityLine: "Downtown & Southbank • Jacksonville, FL",
    heroHeadline: "Condo and urban estate services downtown.",
    heroDescription:
      "We navigate high-rise elevators, parking decks, and building managers to deliver seamless downtown Jacksonville estate sales and cleanouts.",
    heroStats: [
      { value: "$48K", label: "penthouse record" },
      { value: "12", label: "tower partners" },
      { value: "2 days", label: "average cleanout" },
    ],
    serviceHighlights: [
      {
        title: "Elevator + dock scheduling",
        detail: "Secure load-out windows at The Peninsula, The Strand, and other towers.",
      },
      {
        title: "Urban buyer lists",
        detail: "Market contemporary furniture, art, and décor to Southbank and Brooklyn residents.",
      },
      {
        title: "Donation & buyout safety net",
        detail: "Same-day donation partnerships and buyout offers to meet tight move-out deadlines.",
      },
    ],
    localHighlights: [
      "Coordination with property managers for badges, parking, and elevator holds.",
      "Preferred moving crews for high-rise logistics.",
      "Donation partners downtown for furnishings and appliances.",
    ],
    recentProjects: [
      {
        title: "Peninsula condo",
        stat: "$48K sale",
        detail: "Sold designer furnishings, art, and wine storage to local and out-of-town buyers.",
      },
      {
        title: "Southbank relocation",
        stat: "36-hour clean sweep",
        detail: "Coordinated donation truck, bought remaining items, and met closing date.",
      },
    ],
    seoTitle: "Downtown Jacksonville Estate Sales & Condo Cleanouts | Clear Path Estates",
    seoDescription:
      "High-rise estate sale? Clear Path Estates manages elevator schedules, buyer previews, and donation/buyout plans for downtown Jacksonville towers.",
    keywords: [
      "downtown Jacksonville estate sale",
      "Jacksonville condo cleanout",
      "Southbank donation pickup",
      "Peninsula estate service",
    ],
  },
  {
    slug: "southside-baymeadows",
    name: "Southside & Baymeadows",
    cityLine: "Southside/Baymeadows • Jacksonville, FL",
    heroHeadline: "Southside estate sales, senior moves, and corporate relocations.",
    heroDescription:
      "Southside families, Baymeadows executives, and senior communities use our end-to-end estate sales, donation coordination, and buyout services.",
    heroStats: [
      { value: "1,200", label: "Southside lots cataloged" },
      { value: "20", label: "senior communities partnered" },
      { value: "5 days", label: "average timeline" },
    ],
    serviceHighlights: [
      {
        title: "Senior relocation expertise",
        detail: "Trusted by Glenmoor, Cypress Village, and Baymeadows retirement communities.",
      },
      {
        title: "Corporate move support",
        detail: "Coordinate shipments, donations, and buyouts for corporate transferees.",
      },
      {
        title: "Gated community logistics",
        detail: "Approved vendor for Deerwood, Hampton Park, and other Southside communities.",
      },
    ],
    localHighlights: [
      "Access to Baymeadows CDD/HOA boards for signage.",
      "Large crew availability for multi-day condo towers.",
      "Donation partners along Southside Blvd. & Philips Hwy.",
    ],
    recentProjects: [
      {
        title: "Deerwood estate",
        stat: "$64K sale",
        detail: "Sold transitional furnishings and buyout remaining decor for staging company.",
      },
      {
        title: "Senior downsizing",
        stat: "4-day clean sweep",
        detail: "Packed heirlooms, donated goods, and coordinated move into Cypress Village.",
      },
    ],
    seoTitle: "Southside & Baymeadows Estate Sales | Clear Path Estates",
    seoDescription:
      "Southside Jacksonville trusts Clear Path Estates for senior moves, donation coordination, and buyouts in gated communities.",
    keywords: [
      "Southside Jacksonville estate sale",
      "Baymeadows cleanout",
      "Southside senior downsizing",
      "Baymeadows donation pickup",
    ],
  },
  {
    slug: "arlington-fort-caroline",
    name: "Arlington & Fort Caroline",
    cityLine: "Arlington & Fort Caroline • Jacksonville, FL",
    heroHeadline: "Arlington estate sales plus Fort Caroline cleanouts.",
    heroDescription:
      "From Hidden Hills to Fort Caroline, we run HOA-friendly estate sales, donate household goods, and buy remaining lots for quick closings.",
    heroStats: [
      { value: "$52K", label: "Hidden Hills sale" },
      { value: "8", label: "golf communities served" },
      { value: "48 hrs", label: "typical response" },
    ],
    serviceHighlights: [
      {
        title: "Gated access management",
        detail: "Badge setup for Hidden Hills, Queens Harbour, and other eastside HOAs.",
      },
      {
        title: "Fort Caroline preservation",
        detail: "Careful handling of mid-century and coastal decor for Fort Caroline homeowners.",
      },
      {
        title: "Donation + buyout backup",
        detail: "Local Arlington nonprofits and guaranteed purchase offers keep timelines short.",
      },
    ],
    localHighlights: [
      "Coordination with Fort Caroline HOA/POA boards.",
      "Preferred movers for Monument Rd. and Merrill Rd. corridors.",
      "Donation partners on Atlantic Blvd. and Regency area.",
    ],
    recentProjects: [
      {
        title: "Hidden Hills golf estate",
        stat: "$52K weekend",
        detail: "Sold golf carts, furnishings, and art; donated remaining exercise gear.",
      },
      {
        title: "Fort Caroline ranch",
        stat: "3-day cleanout",
        detail: "Cleared decades of collections, shipped heirlooms, and staged property for listing.",
      },
    ],
    seoTitle: "Arlington & Fort Caroline Estate Sales | Clear Path Estates",
    seoDescription:
      "Need an estate sale in Arlington or Fort Caroline? Clear Path Estates manages HOA approvals, donation pickups, and buyouts.",
    keywords: [
      "Arlington estate sale",
      "Fort Caroline cleanout",
      "Hidden Hills donation pickup",
      "Queens Harbour estate service",
    ],
  },
  {
    slug: "northside-oceanway",
    name: "Northside & Oceanway",
    cityLine: "Northside • Jacksonville, FL",
    heroHeadline: "Northside estate sales with warehouse-level crews.",
    heroDescription:
      "We support Northside, Oceanway, and JIA-area estates with heavy-duty cleanouts, donation coordination, and buyouts for rural + suburban homes.",
    heroStats: [
      { value: "10", label: "acre tracts cleared" },
      { value: "$49K", label: "Northside sale record" },
      { value: "6", label: "local charities partnered" },
    ],
    serviceHighlights: [
      {
        title: "Equipment-ready teams",
        detail: "Tractor, barn, and workshop estate sales for Oceanway acreage.",
      },
      {
        title: "Airport relocation support",
        detail: "Fast timelines for families relocating for JIA or military assignments.",
      },
      {
        title: "Donation & buyout options",
        detail: "We purchase remaining lots or donate them to Northside nonprofits and churches.",
      },
    ],
    localHighlights: [
      "Connections with Oceanway Community Center & HOAs.",
      "Preferred partners for large dumpsters and debris.",
      "Donation trucks covering Dunn Ave., Main St., and Lem Turner.",
    ],
    recentProjects: [
      {
        title: "Oceanway farmstead",
        stat: "8 dumpsters",
        detail: "Cleared barns, sold tractors, and donated fencing to local rescue ranch.",
      },
      {
        title: "JIA relocation",
        stat: "7-day closeout",
        detail: "Executed estate sale, clean sweep, and buyout to meet transfer orders.",
      },
    ],
    seoTitle: "Northside & Oceanway Estate Sales | Clear Path Estates",
    seoDescription:
      "Northside Jacksonville estates get dedicated crews for equipment sales, donations, and buyouts.",
    keywords: [
      "Northside Jacksonville estate sale",
      "Oceanway cleanout",
      "Northside donation pickup",
      "JIA relocation sale",
    ],
  },
  {
    slug: "intracoastal-west",
    name: "Intracoastal West",
    cityLine: "Intracoastal West • Jacksonville, FL",
    heroHeadline: "Intracoastal estate sales for Hodges, Kernan, and Tamaya.",
    heroDescription:
      "We manage HOA approvals, parking, and high-value sales for Intracoastal West communities between the Beaches and Southside.",
    heroStats: [
      { value: "$71K", label: "Tamaya sale" },
      { value: "14", label: "HOA partners" },
      { value: "2 days", label: "average response" },
    ],
    serviceHighlights: [
      {
        title: "Luxury buyer lists",
        detail: "Market to Tamaya, Pablo Bay, and Isle of Palms buyers for premium furnishings.",
      },
      {
        title: "HOA compliance",
        detail: "Approved vendor for Tamaya, Pablo Creek, and Windsor Parke with signage + parking plans.",
      },
      {
        title: "Donation & buyout",
        detail: "Remaining furniture donated to Beaches Habitat or purchased for staging partners.",
      },
    ],
    localHighlights: [
      "Coordination with Hodges Blvd. security teams.",
      "Preferred movers for marsh-side homes.",
      "Donation pickups covering Beach Blvd. and Hodges areas.",
    ],
    recentProjects: [
      {
        title: "Tamaya villa",
        stat: "$71K sale",
        detail: "Sold designer furniture, chandeliers, and outdoor packages to local buyers.",
      },
      {
        title: "Pablo Bay relocation",
        stat: "5-day buyout",
        detail: "Bought entire contents to help family relocate to Texas.",
      },
    ],
    seoTitle: "Intracoastal West Estate Sales & HOA Cleanouts | Clear Path Estates",
    seoDescription:
      "From Tamaya to Hodges Blvd., Clear Path Estates handles Intracoastal West estate sales, donations, and buyouts.",
    keywords: [
      "Intracoastal West estate sale",
      "Tamaya cleanout",
      "Hodges Blvd donation",
      "Kernan house buyout",
    ],
  },
  {
    slug: "neptune-beach",
    name: "Neptune Beach",
    cityLine: "Neptune Beach • Jacksonville Beaches",
    heroHeadline: "Neptune Beach coastal estates & clean sweeps.",
    heroDescription:
      "Beach cottages, condos, and luxury homes rely on us for HOA-friendly estate sales, donation pickups, and buyouts between Atlantic and Jacksonville Beach.",
    heroStats: [
      { value: "$62K", label: "Neptune sale record" },
      { value: "48 hrs", label: "average timeline" },
      { value: "5", label: "HOA partners" },
    ],
    serviceHighlights: [
      {
        title: "Coastal storage protection",
        detail: "Climate trucks and shrink wrap shield decor from salt air.",
      },
      {
        title: "Parking & elevator plans",
        detail: "Manage Oceanfront condos with wristbands, passes, and schedule coordination.",
      },
      {
        title: "Donation + buyout",
        detail: "Remaining items donated to Beaches-area charities or bought outright.",
      },
    ],
    localHighlights: [
      "Coordination with Neptune Beach HOA and city permit offices.",
      "Preferred moving partners for Atlantic Blvd. and Penman Rd.",
      "Donation routes serving Beaches Habitat and local ministries.",
    ],
    recentProjects: [
      {
        title: "Ocean Grove condo",
        stat: "$45K sale",
        detail: "Sold coastal furnishings, surf gear, and art to Jacksonville Beach buyers.",
      },
      {
        title: "Neptune cottage buyout",
        stat: "Closed in 3 days",
        detail: "Purchased entire contents to meet rapid closing timeline.",
      },
    ],
    seoTitle: "Neptune Beach Estate Sales & Coastal Cleanouts | Clear Path Estates",
    seoDescription:
      "Neptune Beach estate sales, donation coordination, and buyouts with HOA-compliant logistics.",
    keywords: [
      "Neptune Beach estate sale",
      "Jacksonville Beach cleanout",
      "Neptune Beach donation pickup",
      "coastal house buyout",
    ],
  },
  {
    slug: "jacksonville-beach",
    name: "Jacksonville Beach",
    cityLine: "Jacksonville Beach • Duval County, FL",
    heroHeadline: "Jacksonville Beach estate sales & investor cleanouts.",
    heroDescription:
      "We support Jax Beach investors, vacation rentals, and residents with sale marketing, donation placements, and buyouts tailored to the beaches market.",
    heroStats: [
      { value: "$66K", label: "Jax Beach record" },
      { value: "3", label: "day cleanouts" },
      { value: "400+", label: "buyers per sale" },
    ],
    serviceHighlights: [
      {
        title: "Vacation rental turnover",
        detail: "Clear and refresh Airbnbs and short-term rentals between bookings.",
      },
      {
        title: "Investor-friendly schedules",
        detail: "Weekend sales plus Monday clean sweeps to prep homes for listing.",
      },
      {
        title: "Donation + buyout options",
        detail: "Sustainability-focused donations and guaranteed buyout contracts.",
      },
    ],
    localHighlights: [
      "Permitting assistance for Beach Blvd. and 3rd St. corridors.",
      "Preferred delivery partners for buyers up the coast.",
      "Donation trucks covering Jacksonville Beach and South Ponte Vedra.",
    ],
    recentProjects: [
      {
        title: "Oceanfront rental",
        stat: "$66K sale",
        detail: "Sold coastal furniture sets and surf equipment; donated linens to local shelters.",
      },
      {
        title: "Investor flip",
        stat: "3-day cleanout",
        detail: "Cleared down-to-studs property, salvaged appliances, and arranged buyout of yard equipment.",
      },
    ],
    seoTitle: "Jacksonville Beach Estate Sales & Rental Cleanouts | Clear Path Estates",
    seoDescription:
      "Jacksonville Beach trusts Clear Path Estates for vacation rental cleanouts, estate sales, and donation/buyout coordination.",
    keywords: [
      "Jacksonville Beach estate sale",
      "Jax Beach cleanout",
      "Jacksonville Beach donation pickup",
      "beach rental buyout",
    ],
  },
  {
    slug: "orange-park",
    name: "Orange Park",
    cityLine: "Orange Park • Clay County, FL",
    heroHeadline: "Orange Park estate sales, military relocations, and buyouts.",
    heroDescription:
      "Families near NAS Jax and Clay County rely on us for compassionate estate sales, donation coordination, and buyout options.",
    heroStats: [
      { value: "$58K", label: "Orange Park sale record" },
      { value: "6", label: "military relocations monthly" },
      { value: "5 days", label: "average completion" },
    ],
    serviceHighlights: [
      {
        title: "Military-friendly timelines",
        detail: "Coordinate with NAS Jax schedules and PCS requirements.",
      },
      {
        title: "Clay County donations",
        detail: "Route goods to Quigley House, Salvation Army, and local churches.",
      },
      {
        title: "Full buyout options",
        detail: "Guaranteed purchase of remaining furniture to help homes list faster.",
      },
    ],
    localHighlights: [
      "Coordination with gated communities along Doctors Lake and Fleming Island.",
      "Preferred partners for Branan Field and Blanding Blvd.",
      "Donation truck routes across Clay County.",
    ],
    recentProjects: [
      {
        title: "Doctors Lake estate",
        stat: "$58K weekend",
        detail: "Sold boats, furnishings, and heirloom china; donated gym equipment locally.",
      },
      {
        title: "NAS Jax relocation",
        stat: "5-day clean sweep",
        detail: "Executed sale, donation pickups, and buyout to meet PCS orders.",
      },
    ],
    seoTitle: "Orange Park Estate Sales & NAS Jax Relocations | Clear Path Estates",
    seoDescription:
      "Orange Park families count on Clear Path Estates for estate sales, donation pickups, and buyouts near NAS Jax.",
    keywords: [
      "Orange Park estate sale",
      "Clay County cleanout",
      "NAS Jax relocation sale",
      "Orange Park donation pickup",
    ],
  },
  {
    slug: "fleming-island",
    name: "Fleming Island",
    cityLine: "Fleming Island • Clay County, FL",
    heroHeadline: "Fleming Island estate sales & golf community cleanouts.",
    heroDescription:
      "We handle Eagle Harbor, Pace Island, and Fleming Island Plantation with HOA-compliant estate sales, donations, and buyouts.",
    heroStats: [
      { value: "$63K", label: "Fleming sale record" },
      { value: "10", label: "golf carts sold" },
      { value: "4 days", label: "average timeline" },
    ],
    serviceHighlights: [
      {
        title: "Golf community access",
        detail: "Gate guest lists, wristbands, and shuttle plans for Eagle Harbor & Pace Island.",
      },
      {
        title: "Outdoor living sales",
        detail: "Market lanai furniture, grills, and boats to Clay + St. Johns buyers.",
      },
      {
        title: "Donation & buyout coverage",
        detail: "Local partnerships with Clay nonprofits plus guaranteed buyout offers.",
      },
    ],
    localHighlights: [
      "Coordination with HOA managers along CR-220.",
      "Preferred movers for waterfront cul-de-sacs.",
      "Donation network covering Orange Park and Green Cove Springs.",
    ],
    recentProjects: [
      {
        title: "Eagle Harbor estate",
        stat: "$63K sale",
        detail: "Sold golf carts, patio furniture, and designer furnishings.",
      },
      {
        title: "Pace Island downsizing",
        stat: "96 hr clean sweep",
        detail: "Donated remaining goods, bought leftover decor, and staged for listing.",
      },
    ],
    seoTitle: "Fleming Island Estate Sales & Golf Club Buyouts | Clear Path Estates",
    seoDescription:
      "Fleming Island estates get HOA-compliant sales, donation pickups, and guaranteed buyouts from Clear Path Estates.",
    keywords: [
      "Fleming Island estate sale",
      "Eagle Harbor cleanout",
      "Pace Island donation",
      "Fleming Island buyout",
    ],
  },
  {
    slug: "green-cove-springs",
    name: "Green Cove Springs",
    cityLine: "Green Cove Springs • Clay County, FL",
    heroHeadline: "Green Cove Springs estate services for riverfront and rural homes.",
    heroDescription:
      "We cover riverfront estates, rural acreage, and historic downtown homes in Green Cove Springs with full-service sales, donations, and buyouts.",
    heroStats: [
      { value: "$47K", label: "riverfront sale" },
      { value: "6 acres", label: "largest cleanout" },
      { value: "48 hrs", label: "response time" },
    ],
    serviceHighlights: [
      {
        title: "Riverfront care",
        detail: "Protect docks, boathouses, and marine equipment with insured crews.",
      },
      {
        title: "Rural logistics",
        detail: "Dumpsters, tractors, and heavy-duty teams for acreage cleanouts.",
      },
      {
        title: "Donation & buyout",
        detail: "Connect with Clay County shelters or issue buyout contracts for remaining items.",
      },
    ],
    localHighlights: [
      "Coordination with Green Cove Springs city permits.",
      "Preferred partners for SR-16 and SR-17 corridors.",
      "Donation network across Clay County churches.",
    ],
    recentProjects: [
      {
        title: "River Rd. estate",
        stat: "$47K sale",
        detail: "Sold antique furniture, boats, and outdoor kitchens; donated appliances locally.",
      },
      {
        title: "Acreage cleanout",
        stat: "6-acre sweep",
        detail: "Removed debris, hosted equipment sale, and bought remaining barns contents.",
      },
    ],
    seoTitle: "Green Cove Springs Estate Sales & Rural Cleanouts | Clear Path Estates",
    seoDescription:
      "Green Cove Springs estates depend on Clear Path Estates for riverfront sales, acreage cleanouts, and donation/buyout coordination.",
    keywords: [
      "Green Cove Springs estate sale",
      "Clay County acreage cleanout",
      "Green Cove donation pickup",
      "riverfront house buyout",
    ],
  },
  {
    slug: "middleburg",
    name: "Middleburg",
    cityLine: "Middleburg • Clay County, FL",
    heroHeadline: "Middleburg acreage cleanouts, estate sales, and buyouts.",
    heroDescription:
      "We bring equipment-ready crews to Middleburg ranches, farms, and subdivisions, handling estate sales, donations, and rapid buyouts.",
    heroStats: [
      { value: "12", label: "barns cleared" },
      { value: "$41K", label: "Middleburg sale record" },
      { value: "5", label: "days average project" },
    ],
    serviceHighlights: [
      {
        title: "Equipment marketing",
        detail: "Sell tractors, UTVs, and workshop tools to regional buyers.",
      },
      {
        title: "Heavy cleanouts",
        detail: "Roll-off dumpsters, skid steers, and hauling partners for acreage.",
      },
      {
        title: "Donation & buyout support",
        detail: "We route household goods to Clay County nonprofits or purchase the remainder.",
      },
    ],
    localHighlights: [
      "Coordination for Blanding Blvd. traffic and rural roads.",
      "Partners for livestock rescue donations.",
      "Donation pickups for Middleburg-area ministries.",
    ],
    recentProjects: [
      {
        title: "Trail Ridge ranch",
        stat: "12 stalls cleared",
        detail: "Auctioned farm gear, donated fencing, and bought remaining barn contents.",
      },
      {
        title: "Middleburg estate",
        stat: "$41K sale",
        detail: "Sold heirlooms, tools, and furniture; staged home for quick listing.",
      },
    ],
    seoTitle: "Middleburg Estate Sales & Acreage Cleanouts | Clear Path Estates",
    seoDescription:
      "Middleburg ranches and subdivisions rely on Clear Path Estates for heavy-duty cleanouts, donations, and buyouts.",
    keywords: [
      "Middleburg estate sale",
      "Middleburg acreage cleanout",
      "Clay County donation service",
      "Middleburg buyout",
    ],
  },
  {
    slug: "yulee-nassauville",
    name: "Yulee & Nassauville",
    cityLine: "Yulee & Nassau County, FL",
    heroHeadline: "Nassau County estate sales near I-95 and Amelia.",
    heroDescription:
      "We handle estate sales, donations, and buyouts for Yulee, Nassauville, and Wildlight homeowners—perfect for commuters and resort employees.",
    heroStats: [
      { value: "$53K", label: "Yulee sale record" },
      { value: "24 hrs", label: "response time" },
      { value: "5", label: "charity partners" },
    ],
    serviceHighlights: [
      {
        title: "Commuter-friendly schedules",
        detail: "Weekend sales and next-day cleanouts for I-95 relocations.",
      },
      {
        title: "Resort employee support",
        detail: "Discounted services for Amelia Island resort staff and retirees.",
      },
      {
        title: "Donation + buyout safety net",
        detail: "Route goods to Nassau County charities or purchase remaining contents.",
      },
    ],
    localHighlights: [
      "Coordination with Wildlight HOA and community management.",
      "Preferred movers for SR-200 corridor.",
      "Donation routes to Nassau County nonprofits.",
    ],
    recentProjects: [
      {
        title: "Wildlight relocation",
        stat: "$53K sale",
        detail: "Sold transitional furniture, tech, and outdoor gear; donated playsets to local school.",
      },
      {
        title: "Nassauville estate",
        stat: "4-day clean sweep",
        detail: "Cleared workshop, boat shed, and purchased remaining lot to meet closing.",
      },
    ],
    seoTitle: "Yulee & Nassauville Estate Sales | Clear Path Estates",
    seoDescription:
      "Nassau County residents count on Clear Path Estates for I-95-friendly estate sales, donations, and buyouts.",
    keywords: [
      "Yulee estate sale",
      "Nassauville cleanout",
      "Wildlight donation pickup",
      "Nassau County buyout",
    ],
  },
  {
    slug: "baldwin-westside",
    name: "Baldwin & Westside",
    cityLine: "Westside • Jacksonville, FL",
    heroHeadline: "Westside estate sales and Baldwin acreage cleanouts.",
    heroDescription:
      "From large Westside subdivisions to rural Baldwin acreage, we provide estate sale marketing, donation coordination, and buyouts with heavy equipment crews.",
    heroStats: [
      { value: "$39K", label: "Westside sale record" },
      { value: "10 acres", label: "largest Baldwin project" },
      { value: "72 hrs", label: "average clean sweep" },
    ],
    serviceHighlights: [
      {
        title: "Equipment-ready crews",
        detail: "Support for barns, garages, and hobby farms common on the Westside.",
      },
      {
        title: "Military + logistics partners",
        detail: "Expertise near Cecil Commerce Center and logistics facilities.",
      },
      {
        title: "Donation & buyout coverage",
        detail: "Coordinate with churches, shelters, or write buyout contracts for remaining goods.",
      },
    ],
    localHighlights: [
      "Traffic planning along Normandy Blvd., Chaffee Rd., and I-10 corridors.",
      "Preferred dumpster vendors for large debris.",
      "Donation pickups serving Westside shelters and missions.",
    ],
    recentProjects: [
      {
        title: "Westside subdivision",
        stat: "$39K sale",
        detail: "Sold household goods, tools, and RV; bought remaining furniture to meet closing.",
      },
      {
        title: "Baldwin farm",
        stat: "10-acre sweep",
        detail: "Hosted equipment sale, removed debris, and donated livestock gear.",
      },
    ],
    seoTitle: "Baldwin & Westside Estate Sales | Clear Path Estates",
    seoDescription:
      "Westside Jacksonville families rely on Clear Path Estates for estate sales, donation pickups, and acreage cleanouts.",
    keywords: [
      "Westside Jacksonville estate sale",
      "Baldwin acreage cleanout",
      "Westside donation pickup",
      "Jacksonville West buyout",
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

