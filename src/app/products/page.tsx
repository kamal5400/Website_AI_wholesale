import type { Metadata } from "next";

import { ProductsPage } from "@/components/pages/products-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description:
    "Browse smart watches, smart phones, lenses, accessories, and viral electronics products built for wholesale inquiries from Nepal retailers.",
  path: "/products",
});

export default function Page() {
  return <ProductsPage />;
}
