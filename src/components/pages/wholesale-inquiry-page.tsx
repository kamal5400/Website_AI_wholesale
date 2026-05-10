import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { SectionHeading } from "@/components/ui/section-heading";

export function WholesaleInquiryPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="Wholesale Inquiry"
          title="Get wholesale pricing, current stock direction, and partner-style support in one conversation."
          description="This page is built for serious retailer leads who want to share shop context before speaking with the wholesale team."
        >
          <div className="pt-3">
            <CtaCluster
              primaryLabel="Message Us on WhatsApp"
              secondaryLabel="Check Trending Products"
              secondaryHref="/products"
              message="Namaste, I want wholesale pricing and current stock details for my electronics shop."
            />
          </div>
        </SectionHeading>

        <LeadForm
          inquiryType="Wholesale Pricing Inquiry"
          title="Prepare your wholesale request"
          description="Share your shop details, preferred product categories, and expected order volume so the conversation starts with the right context."
        />
      </Container>
    </div>
  );
}
