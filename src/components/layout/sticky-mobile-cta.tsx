import { TrendingUp } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { buildWhatsAppLink } from "@/lib/lead-links";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/92 p-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-xl gap-3">
        <ButtonLink
          href={buildWhatsAppLink(
            "Namaste, I want to get wholesale pricing for trending electronics.",
          )}
          className="flex-1"
        >
          Get Wholesale Pricing
        </ButtonLink>
        <ButtonLink href="/products" variant="secondary" className="flex-1">
          <TrendingUp className="size-4" />
          Trending Products
        </ButtonLink>
      </div>
    </div>
  );
}
