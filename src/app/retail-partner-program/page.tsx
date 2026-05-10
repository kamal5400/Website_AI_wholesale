import type { Metadata } from "next";

import { RetailPartnerPage } from "@/components/pages/retail-partner-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Retail Partner Program",
  description:
    "Become a retail partner for wholesale smart gadgets and electronics products in Nepal with pricing support, trend updates, and long-term supplier trust.",
  path: "/retail-partner-program",
});

export default function Page() {
  return <RetailPartnerPage />;
}
