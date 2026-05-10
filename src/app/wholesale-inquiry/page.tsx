import type { Metadata } from "next";

import { WholesaleInquiryPage } from "@/components/pages/wholesale-inquiry-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wholesale Inquiry",
  description:
    "Request wholesale pricing, product support, and retailer partnership guidance for electronics shops in Kathmandu and major cities of Nepal.",
  path: "/wholesale-inquiry",
});

export default function Page() {
  return <WholesaleInquiryPage />;
}
