"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ProductCard } from "@/components/cards/product-card";
import type { Product, ProductCategory } from "@/types/site";
import { cn } from "@/lib/utils";

type ProductCategoryTabsProps = {
  categories: ProductCategory[];
  products: Product[];
};

export function ProductCategoryTabs({
  categories,
  products,
}: ProductCategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0]);

  const visibleProducts = products.filter(
    (product) => product.category === activeCategory,
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                active
                  ? "border-emerald-300/40 bg-white/10 text-white"
                  : "border-white/10 bg-white/6 text-slate-300 hover:border-emerald-300/30 hover:text-white",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
