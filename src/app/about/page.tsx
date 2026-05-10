import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about VoltVerge Wholesale, a retailer-focused electronics supplier in Nepal built around trending products, better margins, and wholesale support.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
