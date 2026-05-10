import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact VoltVerge Wholesale for product availability, wholesale pricing, WhatsApp support, and retailer partnership discussions.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
