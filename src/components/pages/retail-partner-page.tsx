import { BadgeDollarSign, BellRing, Boxes, Handshake, ShieldCheck, Store } from "lucide-react";

import { Container } from "@/components/ui/container";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { SectionHeading } from "@/components/ui/section-heading";

const partnerBenefits = [
  {
    title: "Retailer pricing access",
    description: "Unlock product categories and price conversations built for resale, not one-off buying.",
    icon: BadgeDollarSign,
  },
  {
    title: "Trend update support",
    description: "Get visibility into what categories are heating up so your shelves stay relevant.",
    icon: BellRing,
  },
  {
    title: "Inventory mix guidance",
    description: "Build an assortment that balances premium draw, fast counters, and repeat demand.",
    icon: Boxes,
  },
  {
    title: "Warranty handling clarity",
    description: "Protect your reputation with clearer after-sales support expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Relationship-first communication",
    description: "Work with a team that wants long-term wholesale consistency rather than quick one-time deals.",
    icon: Handshake,
  },
  {
    title: "Shop growth mindset",
    description: "This page is positioned for owners who want a better system, not just a cheaper carton.",
    icon: Store,
  },
];

export function RetailPartnerPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="Retail Partner Program"
          title="A wholesale relationship for electronics retailers who want better stock movement and stronger long-term growth."
          description="The partner program page turns curiosity into a clearer business conversation around product access, margins, support, and trend alignment."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partnerBenefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-emerald-300/20 bg-white/8 p-3">
                <item.icon className="size-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="rounded-[32px] border border-emerald-300/20 bg-white/8 p-8">
          <h2 className="font-display text-3xl text-white">Who this is for</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Mobile shops, gadget retailers, accessory counters, and electronics businesses
            in Kathmandu and major cities of Nepal who want trending products, better
            profit room, dependable support, and a supplier they can keep building with.
          </p>
          <div className="mt-6">
            <CtaCluster
              primaryLabel="Become a Retail Partner"
              secondaryLabel="Message on WhatsApp"
              secondaryHref="/contact"
              message="Namaste, I want to become a retail partner and learn about wholesale pricing and support."
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
