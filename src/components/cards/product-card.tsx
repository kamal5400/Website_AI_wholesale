import { ArrowUpRight, Boxes, ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import type { Product } from "@/types/site";
import { buildProductInquiryMessage, buildWhatsAppLink } from "@/lib/lead-links";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_24px_80px_rgba(8,15,32,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30">
      <div className="relative overflow-hidden border-b border-white/10 bg-radial-[at_top] from-emerald-400/16 via-slate-950 to-slate-950 p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-300/30 bg-white/8 px-3 py-1 text-xs font-semibold text-emerald-200">
            {product.badge}
          </span>
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xs transition duration-500 group-hover:scale-105">
          <Image src={product.image} alt={product.name} fill className="object-contain" />
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-200">
            {product.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
        </div>

        <div className="grid gap-3 text-sm text-slate-300">
          <p className="flex items-start gap-3">
            <ChartNoAxesCombined className="mt-0.5 size-4 shrink-0 text-emerald-300" />
            {product.highlight}
          </p>
          <p className="flex items-start gap-3">
            <Boxes className="mt-0.5 size-4 shrink-0 text-sky-300" />
            {product.moq}
          </p>
          <p className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" />
            {product.retailerEdge}
          </p>
        </div>

        <ButtonLink
          href={buildWhatsAppLink(buildProductInquiryMessage(product.name))}
          className="w-full"
        >
          Get Product Inquiry
          <ArrowUpRight className="size-4" />
        </ButtonLink>
      </div>
    </article>
  );
}
