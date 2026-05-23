import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Handshake,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Warehouse,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { ProductCategoryTabs } from "@/components/catalog/product-category-tabs";
import { ProcessCard } from "@/components/cards/process-card";
import { StatCard } from "@/components/cards/stat-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { Container } from "@/components/ui/container";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  benefitStats,
  faqs,
  howItWorks,
  painPoints,
  productCategories,
  products,
  retailerStats,
  solutionPillars,
  testimonials,
  trustItems,
} from "@/data/site";

const painIcons = {
  "bar-chart": TrendingUp,
  "shield-alert": ShieldCheck,
  coins: BadgeDollarSign,
  zap: Zap,
  users: Handshake,
  rocket: Sparkles,
} as const;

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PainPointsSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ProductsSection />
      <TrustSection />
      <TestimonialsSection />
      <BonusSupportSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.2),_transparent_20%),radial-gradient(circle_at_20%_35%,_rgba(255,255,255,0.08),_transparent_16%),linear-gradient(180deg,_rgba(15,23,42,0.25),_rgba(2,6,23,0))]" />
      <Container className="relative grid items-center gap-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <Reveal className="space-y-7">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 sm:text-sm">
              Wholesale Growth Partner for Nepal Retailers
            </p>
            <h1 className="font-display text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Stop Losing Customers to Shops Selling More Trending Gadgets
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Get trending gadgets, better margins, warranty support, and steady
              wholesale supply.
            </p>
          </div>

          <CtaCluster
            primaryLabel="Message on WhatsApp"
            secondaryLabel="View Trending Products"
            message="Namaste, I want wholesale pricing and trending product details for my electronics shop."
          />

        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute inset-0 -translate-y-4 rounded-full bg-emerald-400/18 blur-3xl" />
            <div className="relative rounded-[36px] border border-white/10 bg-white/8 p-5 shadow-[0_30px_120px_rgba(5,15,35,0.55)] backdrop-blur-xl">
              <div className="absolute left-4 top-10 hidden max-w-[220px] rounded-[26px] border border-emerald-300/20 bg-slate-950/85 p-4 shadow-2xl md:block xl:-left-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">
                  Demand Signal
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-white">
                  Smartwatch Bestsellers
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Fast-moving styles with strong gift appeal
                </p>
              </div>

              <div className="absolute right-4 bottom-12 hidden max-w-[250px] rounded-[26px] border border-sky-300/20 bg-slate-950/85 p-4 shadow-2xl md:block xl:-right-6">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-200">
                  Margin Opportunity
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-white">
                  Balanced Product Mix
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Accessories, phones, and viral add-ons that lift basket value
                </p>
              </div>

              <div className="relative aspect-[4/4.1] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.2),_transparent_32%),radial-gradient(circle_at_75%_18%,_rgba(96,165,250,0.16),_transparent_18%),linear-gradient(180deg,_rgba(10,16,30,0.95),_rgba(2,6,23,0.98))]">
                <Image
                  src="/hero-device-stack.svg"
                  alt="Premium electronics hero visual"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <FloatingMetric label="Retail Network" value="Kathmandu and beyond" />
                <FloatingMetric label="Stock Focus" value="Fast-moving gadgets" />
                <FloatingMetric label="Support Model" value="Relationship-first" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PainPointsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Retailer Frustrations"
          title="Retail shops lose when stock, support, and trends fall behind."
          description="Slow stock, weak margins, fake warranties, and trend gaps hurt sales."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = painIcons[item.icon as keyof typeof painIcons];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_22px_70px_rgba(8,15,32,0.38)] backdrop-blur-md">
                  <div className="mb-5 inline-flex rounded-2xl border border-emerald-300/20 bg-white/8 p-3">
                    <Icon className="size-6 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(8,15,32,0.4)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200 sm:text-sm">
              The Real Problem Is Not Just Products...
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
              You need a supplier system that supports every sale.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Retailers need the right products, fair pricing, and real support.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Without that, stock slows, trust drops, and repeat sales weaken.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="grid gap-5 sm:grid-cols-2">
            <ProblemCard
              icon={<Store className="size-6 text-cyan-300" />}
              title="You need products that sell"
              description="Not every trendy item moves well in-store."
            />
            <ProblemCard
              icon={<Warehouse className="size-6 text-cyan-300" />}
              title="You need post-sale support"
              description="Trust grows when support continues after delivery."
            />
            <ProblemCard
              icon={<PackageSearch className="size-6 text-cyan-300" />}
              title="You need trend clarity"
              description="Fast markets reward retailers who update quickly."
            />
            <ProblemCard
              icon={<Handshake className="size-6 text-cyan-300" />}
              title="You need a real partner"
              description="Growth needs a supplier who stays responsive."
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="The Smart Gadget Retail Growth System"
          title="A wholesale system built for faster sales and better support."
          description="More than supply: better products, margins, and retailer support."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {solutionPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-[0_24px_80px_rgba(8,15,32,0.38)] backdrop-blur-md">
                <div className="mb-5 inline-flex rounded-2xl border border-emerald-300/20 bg-white/8 p-3">
                  <CheckCircle2 className="size-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple 4-step wholesale flow for retailers."
          description="Move from discovery to pricing and support quickly."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.06}>
              <ProcessCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Business Outcomes"
          title="Better turnover, margins, and customer trust."
          description="Clear business outcomes, not generic product hype."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefitStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Trending Products"
          title="Trending products built for faster retail movement."
          description="Explore watches, phones, accessories, and viral gadgets."
        >
          <div className="pt-3">
            <CtaCluster
              primaryLabel="Get Wholesale Pricing"
              secondaryLabel="Become a Retail Partner"
              secondaryHref="/retail-partner-program"
              message="Namaste, I want wholesale pricing and current stock details for trending electronics."
            />
          </div>
        </SectionHeading>
        <ProductCategoryTabs categories={productCategories} products={products} />
      </Container>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why Retailers Trust Us"
          title="Retailers trust clarity, fast replies, and real support."
          description="Strong trust signals reduce doubt and improve inquiries."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-[32px] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(8,15,32,0.38)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Building2 className="size-6 text-emerald-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  Warehouse & Office Trust Signals
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Kathmandu presence, quick support, and long-term wholesale focus.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {retailerStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5"
                  >
                    <p className="font-display text-3xl text-emerald-300">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Retailer Testimonials"
          title="Real retailer-style feedback builds trust faster."
          description="Short testimonials support cold traffic conversion."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BonusSupportSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Bonus Support"
            title="Beyond supply: updates, guidance, and WhatsApp support."
            description="Practical support helps retailers buy and sell smarter."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            <SupportCard
              title="Product trend updates"
              description="Stay aligned with what is moving now."
            />
            <SupportCard
              title="Festival season guidance"
              description="Plan better for gifting and seasonal demand."
            />
            <SupportCard
              title="Retail inventory recommendations"
              description="Get suggestions for your shop and buyer mix."
            />
            <SupportCard
              title="WhatsApp retailer support"
              description="Fast support for pricing and product questions."
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Retailer FAQ"
            title="Answers to common retailer questions."
            description="Clear answers reduce friction for first-time buyers."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-emerald-300/20 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_40%),radial-gradient(circle_at_75%_15%,_rgba(96,165,250,0.14),_transparent_18%),linear-gradient(180deg,_rgba(12,22,38,0.92),_rgba(4,8,20,0.98))] px-6 py-14 shadow-[0_30px_100px_rgba(2,12,27,0.55)] sm:px-10 lg:px-14">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 sm:text-sm">
              Final CTA
            </p>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              The Shops That Stay Updated Are The Shops That Grow.
            </h2>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              Trends change fast. Start now if you want faster-moving stock.
            </p>
            <CtaCluster
              primaryLabel="Get Wholesale Pricing"
              secondaryLabel="Message on WhatsApp"
              secondaryHref="/wholesale-inquiry"
              message="Namaste, I want to get wholesale pricing for trending electronics and discuss current stock."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
    </div>
  );
}

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}

function SupportCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-200">
        Retail-ready support
        <ArrowRight className="size-4" />
      </div>
    </article>
  );
}
