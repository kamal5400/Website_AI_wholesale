import { Building2, Handshake, ShieldCheck, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="About Us"
          title="A modern wholesale electronics brand built around retailer growth, not one-time transactions."
          description="VoltVerge Wholesale is positioned as a Kathmandu-based partner helping shops source trending gadgets, improve margins, and support customers with more confidence."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-8 backdrop-blur-md">
            <h2 className="font-display text-3xl text-white">What we stand for</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Retailers in Nepal need more than random product lists. They need a
                supplier partner who understands what moves, what builds repeat business,
                and what damages trust when warranty handling goes wrong.
              </p>
              <p>
                This brand is designed to feel premium, dependable, and modern because
                that same feeling should carry into every wholesale conversation with your
                shop.
              </p>
              <p>
                The result is a cleaner retailer journey: better product visibility,
                WhatsApp-first support, and a partnership story built for long-term
                growth.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <ValueCard
              icon={<TrendingUp className="size-6 text-emerald-300" />}
              title="Trend-led sourcing"
              description="We focus on categories that help retailers stay current in a fast-changing market."
            />
            <ValueCard
              icon={<ShieldCheck className="size-6 text-sky-300" />}
              title="Support-driven trust"
              description="Warranty and after-sales expectations are part of the relationship, not an afterthought."
            />
            <ValueCard
              icon={<Handshake className="size-6 text-emerald-300" />}
              title="Long-term relationships"
              description="The offer is intentionally framed around repeat wholesale confidence."
            />
            <ValueCard
              icon={<Building2 className="size-6 text-sky-300" />}
              title="Kathmandu trade confidence"
              description={`${siteConfig.address} supports local trust and nationwide dispatch credibility.`}
            />
          </div>
        </div>

        <div className="rounded-[32px] border border-emerald-300/20 bg-white/8 p-8">
          <h2 className="font-display text-3xl text-white">Our retailer promise</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            The goal is simple: help you access better-moving electronics, clearer support,
            and a wholesale relationship that makes your shop stronger over time.
          </p>
          <div className="mt-6">
            <CtaCluster
              primaryLabel="Message Us on WhatsApp"
              secondaryLabel="Get Wholesale Pricing"
              secondaryHref="/wholesale-inquiry"
              message="Namaste, I want to know more about your wholesale business and retailer support."
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

function ValueCard({
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
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
