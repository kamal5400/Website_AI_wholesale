import { ArrowRight, MessageCircleMore } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { buildWhatsAppLink } from "@/lib/lead-links";

type CtaClusterProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  message?: string;
  align?: "left" | "center";
};

export function CtaCluster({
  primaryLabel = "Message Us on WhatsApp",
  secondaryLabel = "Check Trending Products",
  secondaryHref = "/products",
  message = "Namaste, I want wholesale pricing and trending product details for my electronics shop.",
  align = "left",
}: CtaClusterProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${align === "center" ? "justify-center" : ""}`}
    >
      <ButtonLink href={buildWhatsAppLink(message)}>
        <MessageCircleMore className="size-4" />
        {primaryLabel}
      </ButtonLink>
      <ButtonLink href={secondaryHref} variant="secondary">
        {secondaryLabel}
        <ArrowRight className="size-4" />
      </ButtonLink>
    </div>
  );
}
