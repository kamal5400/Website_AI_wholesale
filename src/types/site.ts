export type NavigationItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type ProductCategory =
  | "Smart Watches"
  | "Smart Phones"
  | "Smart Lenses"
  | "Accessories"
  | "Viral Gadgets";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  badge: string;
  tags: string[];
  highlight: string;
  moq: string;
  retailerEdge: string;
};

export type PainPoint = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  location: string;
  rating: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type LeadFormValues = {
  fullName: string;
  shopName: string;
  city: string;
  phone: string;
  productInterest: string;
  quantityIntent: string;
  message: string;
};
