import type {
  FaqItem,
  NavigationItem,
  PainPoint,
  ProcessStep,
  Product,
  ProductCategory,
  Stat,
  Testimonial,
  TrustItem,
} from "@/types/site";

export const siteConfig = {
  name: "VoltVerge Wholesale",
  tagline: "Trending electronics wholesale partner for Nepal retailers",
  description:
    "Wholesale smart gadgets, fast-moving electronics, retailer pricing, and warranty-backed supply for shops across Kathmandu and major cities of Nepal.",
  primaryPhone: "+977 9851105404",
  whatsappNumber: "9779851105404",
  email: "itsmekamal54@gmail.com",
  address: "New Road Trade District, Kathmandu, Nepal",
  warehouse: "Kathmandu distribution hub with nationwide dispatch support",
  hours: "Sun - Fri, 10:00 AM - 7:00 PM",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Retail Partner", href: "/retail-partner-program" },
  { label: "Contact", href: "/contact" },
  { label: "Wholesale Inquiry", href: "/wholesale-inquiry" },
];

export const trustIndicators = [
  "Retailer-first wholesale pricing",
  "Warranty support promise",
  "Fast trend updates",
  "Kathmandu-based supply confidence",
];

export const painPoints: PainPoint[] = [
  {
    title: "Slow-moving stock eats your cashflow",
    description:
      "You bring inventory in, but it sits too long. Capital gets blocked while faster shops keep grabbing the attention.",
    icon: "bar-chart",
  },
  {
    title: "Warranty promises break trust",
    description:
      "Customers come back with issues, but suppliers disappear, delay support, or pass blame. Your shop reputation takes the hit.",
    icon: "shield-alert",
  },
  {
    title: "Margins are squeezed from both sides",
    description:
      "Online pages, discount wars, and unstable sourcing make it harder to keep a healthy profit on each sale.",
    icon: "coins",
  },
  {
    title: "Trends change before you can react",
    description:
      "What sells this month may cool next month. Without market updates, you risk ordering yesterday’s hype.",
    icon: "zap",
  },
  {
    title: "Suppliers vanish after the first deal",
    description:
      "You need a long-term partner, not just someone who replies when stock is fresh and goes silent when support is needed.",
    icon: "users",
  },
  {
    title: "Competition is winning with newer gadgets",
    description:
      "When nearby shops show newer watches, accessories, and viral gadgets first, your walk-in sales start leaking away.",
    icon: "rocket",
  },
];

export const solutionPillars: TrustItem[] = [
  {
    title: "Trending product sourcing",
    description:
      "We track what is moving so your shelves reflect what customers are already asking for.",
  },
  {
    title: "Retailer-friendly margins",
    description:
      "Product mix is selected around turnover and resale confidence, not just flashy catalog volume.",
  },
  {
    title: "Warranty-backed support",
    description:
      "Clear handling support helps you protect trust with your own customers after the sale.",
  },
  {
    title: "Relationship-based wholesale system",
    description:
      "You get updates, guidance, and consistency designed for repeat business and long-term growth.",
  },
];

export const howItWorks: ProcessStep[] = [
  {
    step: "01",
    title: "Access Trending Gadgets",
    description:
      "Review fast-moving categories, seasonal movers, and shop-friendly picks curated for Nepal retail demand.",
  },
  {
    step: "02",
    title: "Get Retailer Pricing",
    description:
      "Share your shop profile and preferred categories to unlock wholesale rates and MOQ guidance.",
  },
  {
    step: "03",
    title: "Warranty & After-Sales Support",
    description:
      "Move with more confidence using clearer support handling instead of vague supplier promises.",
  },
  {
    step: "04",
    title: "Receive Trend Updates",
    description:
      "Stay current with new arrivals, festival pushes, and fast-changing product demand signals.",
  },
];

export const benefitStats: Stat[] = [
  {
    value: "Faster",
    label: "Inventory turnover",
    description: "Focus your buying on gadgets customers already recognize and ask for.",
  },
  {
    value: "Lower",
    label: "Dead stock risk",
    description: "Reduce guesswork with product categories selected around movement, not vanity.",
  },
  {
    value: "More",
    label: "Repeat customers",
    description: "Improve trust through better assortment, cleaner warranty handling, and faster responses.",
  },
  {
    value: "Stronger",
    label: "Retail positioning",
    description: "Compete with nearby stores using newer-looking, faster-moving product lines.",
  },
];

export const productCategories: ProductCategory[] = [
  "Smart Watches",
  "Smart Phones",
  "Smart Lenses",
  "Accessories",
  "Viral Gadgets",
];

export const products: Product[] = [
  {
    slug: "orbit-pro-watch",
    name: "Orbit Pro AMOLED Watch",
    category: "Smart Watches",
    description:
      "Premium display smart watch with calling, health tracking, and a giftable retail presentation.",
    image: "/catalog-watch.svg",
    badge: "Wholesale Favorite",
    tags: ["Trending", "Fast Moving", "Warranty Support"],
    highlight: "Popular with mobile and gadget shops looking for quick-turn giftable inventory.",
    moq: "MOQ from 10 units",
    retailerEdge: "Strong festival and daily-use demand",
  },
  {
    slug: "nova-lite-phone",
    name: "Nova Lite Smart Phone",
    category: "Smart Phones",
    description:
      "Budget-conscious smartphone model mix designed for price-sensitive fast retail movement.",
    image: "/catalog-phone.svg",
    badge: "Retail Margin Pick",
    tags: ["Hot Category", "Volume Driver", "Store Staple"],
    highlight: "Balanced for turnover, visible perceived value, and repeat walk-in demand.",
    moq: "MOQ from 5 units",
    retailerEdge: "Reliable entry-to-mid segment pull",
  },
  {
    slug: "focus-air-lens",
    name: "Focus Air Smart Lens",
    category: "Smart Lenses",
    description:
      "Smart lens accessory format built for customers who want novelty and premium gadget appeal.",
    image: "/catalog-lens.svg",
    badge: "Niche Trend",
    tags: ["New Arrival", "Premium Feel", "Impulse Interest"],
    highlight: "Helps your shop stand out with conversation-starting premium gadgets.",
    moq: "MOQ from 8 units",
    retailerEdge: "High perceived value category",
  },
  {
    slug: "magnetic-charge-kit",
    name: "Magnetic Charge Kit",
    category: "Accessories",
    description:
      "Fast-moving charging bundle with display-friendly packaging for accessory-heavy counters.",
    image: "/catalog-accessory.svg",
    badge: "Counter Bestseller",
    tags: ["Trending", "Fast Moving", "Add-On Sale"],
    highlight: "Great for upsell near billing counters and quick repeat replenishment.",
    moq: "MOQ from 25 units",
    retailerEdge: "Easy attach rate with phone sales",
  },
  {
    slug: "flash-ring-creator-kit",
    name: "Flash Ring Creator Kit",
    category: "Viral Gadgets",
    description:
      "Social-media-friendly gadget accessory line built around visible demo value and viral appeal.",
    image: "/catalog-gadget.svg",
    badge: "Viral Pick",
    tags: ["Reel-Friendly", "Impulse Buy", "Fast Moving"],
    highlight: "Designed to attract younger buyers and content-driven retail demand.",
    moq: "MOQ from 12 units",
    retailerEdge: "Strong visual merchandising potential",
  },
  {
    slug: "pulse-fit-watch",
    name: "Pulse Fit Watch SE",
    category: "Smart Watches",
    description:
      "Slim, modern smart watch line made for budget-friendly volume movement in busy retail zones.",
    image: "/catalog-watch.svg",
    badge: "Shop Utility Pick",
    tags: ["Budget Seller", "Daily Demand", "Repeat Buyer"],
    highlight: "Useful when you need a quick-moving watch option at lower entry price points.",
    moq: "MOQ from 15 units",
    retailerEdge: "Stable demand with broad age appeal",
  },
  {
    slug: "pixel-camera-phone",
    name: "Pixel Camera Phone Max",
    category: "Smart Phones",
    description:
      "Camera-forward phone bundle suited for shops targeting aspirational buyers and upgraders.",
    image: "/catalog-phone.svg",
    badge: "Premium Draw",
    tags: ["New Launch", "High Interest", "Feature-Led"],
    highlight: "Good fit for stores that want one higher-value anchor model in the lineup.",
    moq: "MOQ from 4 units",
    retailerEdge: "Supports premium shelf perception",
  },
  {
    slug: "snapgrip-stand",
    name: "SnapGrip Fold Stand",
    category: "Accessories",
    description:
      "Compact phone stand accessory with gifting appeal, impulse sale potential, and easy display value.",
    image: "/catalog-accessory.svg",
    badge: "Gift Counter Pick",
    tags: ["Impulse Buy", "Fast Moving", "Compact Display"],
    highlight: "Simple item that helps maintain frequent small-ticket movement in the shop.",
    moq: "MOQ from 30 units",
    retailerEdge: "Useful low-friction add-on product",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "Reliable warranty handling",
    description: "Support clarity that helps you answer customers confidently after the sale.",
  },
  {
    title: "Fast response support",
    description: "Retailers need quick answers on availability, models, and follow-up support.",
  },
  {
    title: "Transparent pricing",
    description: "Straightforward wholesale discussion built around repeat business, not one-off confusion.",
  },
  {
    title: "Long-term relationship focus",
    description: "We are structured to grow with retailers over time, not disappear after the first order.",
  },
];

export const retailerStats: Stat[] = [
  {
    value: "150+",
    label: "Retail inquiries supported",
    description: "Placeholder trust metric for partner pipeline proof.",
  },
  {
    value: "24 hrs",
    label: "Typical response window",
    description: "Fast support expectation for pricing and stock conversations.",
  },
  {
    value: "5 cities",
    label: "Retailer reach focus",
    description: "Kathmandu-first, with expansion across major Nepal trading cities.",
  },
  {
    value: "1 partner",
    label: "Single source simplicity",
    description: "One relationship for trending gadgets, accessories, and support updates.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Customers were asking for newer watch models and fast-selling accessories. After working with VoltVerge, our stock mix feels more current and easier to sell.",
    name: "Rabin Shrestha",
    business: "New Road Mobile Point",
    location: "Kathmandu",
    rating: 5,
  },
  {
    quote:
      "What helped us most was the quick response and honest product guidance. We could decide faster instead of guessing what would move in Pokhara.",
    name: "Sujan KC",
    business: "LakeSide Gadget Corner",
    location: "Pokhara",
    rating: 5,
  },
  {
    quote:
      "The mix of accessories and trending gadgets gave us better counter sales. Support felt practical, not just sales talk.",
    name: "Manish Thapa",
    business: "Butwal Electronics House",
    location: "Butwal",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Warranty kasari handle huncha?",
    answer:
      "We position warranty support as a clear retailer-assistance process. For each product line, we guide expected coverage and support handling so you are not left guessing in front of your customers.",
  },
  {
    question: "Yo item market ma chalcha ta?",
    answer:
      "Our product selection is framed around fast-moving demand, visible trend behavior, and retailer resale confidence. We also guide which categories fit more impulse demand and which suit steady daily movement.",
  },
  {
    question: "Duplicate ta hoina?",
    answer:
      "Trust is a major reason this site exists. The goal is transparent sourcing conversation, realistic positioning, and long-term supply relationships instead of hype or vague claims.",
  },
  {
    question: "Profit kati bascha?",
    answer:
      "Exact margins depend on category, model, and order mix, but the sales approach focuses on healthier resale room, faster turnover, and lower dead-stock risk rather than just chasing the cheapest landed price.",
  },
  {
    question: "Delivery Nepal bhar huncha?",
    answer:
      "Yes, the experience is positioned around Kathmandu supply confidence with dispatch support for major cities across Nepal. Delivery method and timeline can be aligned during inquiry.",
  },
  {
    question: "Minimum order quantity kati ho?",
    answer:
      "MOQ varies by product category. Accessories can support higher starter quantities, while selected phones and premium items can begin lower. Each product card and inquiry flow sets the expectation clearly.",
  },
];

export const footerLinks = {
  quickLinks: navigationItems,
  categories: productCategories,
};
