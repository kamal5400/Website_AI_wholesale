import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="Contact"
          title="Start the conversation with the wholesale team."
          description="This page gives retailers a low-friction way to reach out, with contact details for trust and a structured inquiry flow for better lead quality."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 rounded-[32px] border border-white/10 bg-white/6 p-8 backdrop-blur-md">
            <ContactRow icon={<MapPin className="size-5 text-emerald-300" />} title="Address">
              {siteConfig.address}
            </ContactRow>
            <ContactRow icon={<Phone className="size-5 text-sky-300" />} title="Phone">
              {siteConfig.primaryPhone}
            </ContactRow>
            <ContactRow icon={<Mail className="size-5 text-emerald-300" />} title="Email">
              {siteConfig.email}
            </ContactRow>
            <ContactRow icon={<Clock3 className="size-5 text-sky-300" />} title="Hours">
              {siteConfig.hours}
            </ContactRow>
            <div className="rounded-[24px] border border-emerald-300/20 bg-white/8 p-5 text-sm leading-7 text-slate-300">
              Fastest response channel: WhatsApp wholesale desk. Ideal for product
              pricing, availability, and retailer support questions.
            </div>
          </div>

          <LeadForm
            inquiryType="General Contact Inquiry"
            title="Tell us about your shop and product needs"
            description="Complete the fields below to prepare your inquiry, then send it through WhatsApp or email. This keeps the form frontend-ready while preserving a clean path for future backend integration."
          />
        </div>
      </Container>
    </div>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/50 p-5">
      <div className="mb-2 flex items-center gap-3">
        {icon}
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          {title}
        </p>
      </div>
      <p className="text-base leading-7 text-white">{children}</p>
    </div>
  );
}
