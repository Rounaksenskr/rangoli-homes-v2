/**
 * Pricing estimates and tier structures for RangoliHomes.
 * NOTE: These are indicative placeholder estimation ranges. 
 * Final quotations depend on exact floor plans, material selections, and site assessments.
 */

export const pricingPlans = [
  {
    id: "home-essential",
    category: "Home Interiors",
    title: "Essential Residential",
    priceRange: "Starting from ₹1,200",
    unit: "per sq.ft.",
    description: "Ideal for 2BHK/3BHK rental apartments or starter homes requiring functional modular woodwork and standard finishes.",
    features: [
      "Commercial-grade MR ply for dry areas",
      "Soft-close hardware & basic wire baskets",
      "Standard matte laminate finishes",
      "Basic electrical layout & modular switches",
      "Standard emulsion painting",
      "Dedicated project coordinator"
    ],
    popular: false,
    ctaText: "Get Detailed Quote",
    serviceKey: "Home Interiors"
  },
  {
    id: "home-premium",
    category: "Home Interiors",
    title: "Premium Bespoke Home",
    priceRange: "₹1,800 – ₹2,400",
    unit: "per sq.ft.",
    description: "Complete turnkey design with luxury laminates, false ceilings, architectural lighting, and designer modular storage.",
    features: [
      "Calibrated BWR / BWP marine-grade ply",
      "Blum or Hettich certified soft-close fittings",
      "Acrylic or anti-fingerprint matte laminates",
      "Custom false ceiling with magnetic track cove lights",
      "Designer vanity units & quartz kitchen counters",
      "Dedicated senior architect & site supervisor"
    ],
    popular: true,
    ctaText: "Get Detailed Quote",
    serviceKey: "Home Interiors"
  },
  {
    id: "kitchen-modular",
    category: "Modular Kitchens",
    title: "Modular Kitchen Suite",
    priceRange: "Starting from ₹1,750",
    unit: "per sq.ft.",
    description: "Ergonomic straight, L-shaped, or island layouts engineered with moisture-resistant materials and smart storage.",
    features: [
      "BWP waterproof ply carcases",
      "High-gloss acrylic or PU lacquered shutters",
      "Tandem drawers, bottle pullouts & corner carousels",
      "Seamless quartz or granite countertop prep",
      "Built-in chimney & hob provisioning",
      "10-year defect coverage on hardware"
    ],
    popular: false,
    ctaText: "Get Detailed Quote",
    serviceKey: "Modular Kitchens"
  },
  {
    id: "office-commercial",
    category: "Office Interiors",
    title: "Agile Corporate Fitout",
    priceRange: "₹1,400 – ₹2,200",
    unit: "per sq.ft.",
    description: "Modern open-plan workspaces, meeting pods, executive suites, and acoustic wall treatments.",
    features: [
      "Modular benching workstations with wire raceways",
      "Acoustic fabric panels & baffle ceilings",
      "Frameless toughened glass conference rooms",
      "Reception lounge & breakout pantry setup",
      "Server room & structured network cabling",
      "Fast-track delivery milestone schedule"
    ],
    popular: false,
    ctaText: "Get Detailed Quote",
    serviceKey: "Office Interiors"
  },
  {
    id: "paint-standard",
    category: "Paint Services",
    title: "Premium Architectural Paint",
    priceRange: "Starting from ₹18",
    unit: "per sq.ft.",
    description: "Multi-coat luxury interior or exterior wall painting with thorough sanding, putty leveling, and primer sealing.",
    features: [
      "Two coats of acrylic putty leveling",
      "Alkali-resistant primer foundation",
      "Two top coats of premium low-VOC emulsion",
      "Floor & furniture masking protection",
      "Wall moisture inspection prior to prep",
      "Post-work deep clean of drop areas"
    ],
    popular: false,
    ctaText: "Get Detailed Quote",
    serviceKey: "Paint & Textures"
  },
  {
    id: "paint-textures",
    category: "Wall Textures",
    title: "Artisan Wall Finishes",
    priceRange: "₹85 – ₹250",
    unit: "per sq.ft.",
    description: "Specialized statement feature walls crafted with Italian stucco, lime plaster, or metallic stone textures.",
    features: [
      "Hand-troweled microcement or lime plaster",
      "Metallic, velvet, or concrete brutalist finishes",
      "High abrasion & UV resistance",
      "Seamless jointless application",
      "Custom shade sample swatches beforehand",
      "Master applicator execution"
    ],
    popular: true,
    ctaText: "Get Detailed Quote",
    serviceKey: "Paint & Textures"
  },
  {
    id: "waterproofing-solutions",
    category: "Waterproofing",
    title: "Advanced Waterproof Shield",
    priceRange: "Starting from ₹45",
    unit: "per sq.ft.",
    description: "Structural barrier injections, terrace elastomeric membranes, and wet area sealants preventing dampness.",
    features: [
      "Thermal / IR crack & leak detection",
      "Fiber-reinforced elastomeric coating",
      "Polymer modified mortar joint repair",
      "Terrace, bathroom & podium floor treatments",
      "Salt efflorescence neutralization",
      "Written performance assurance"
    ],
    popular: false,
    ctaText: "Get Detailed Quote",
    serviceKey: "Waterproofing"
  }
];
