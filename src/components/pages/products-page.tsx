import { ProductCard } from "@/components/cards/product-card";
import { Container } from "@/components/ui/container";
import { CtaCluster } from "@/components/ui/cta-cluster";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { productCategories, products } from "@/data/site";

export function ProductsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="Wholesale Product Catalog"
          title="Trending electronics and accessories arranged for inquiry-first browsing."
          description="This page supports cold traffic that wants proof of product breadth before messaging on WhatsApp."
        >
          <div className="pt-3">
            <CtaCluster
              primaryLabel="Get Wholesale Pricing"
              secondaryLabel="Become a Retail Partner"
              secondaryHref="/retail-partner-program"
              message="Namaste, I want product pricing and availability details for wholesale electronics."
            />
          </div>
        </SectionHeading>

        <div className="flex flex-wrap gap-3">
          {productCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-300"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.03}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
