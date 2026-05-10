"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/types/site";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = activeIndex === index;

        return (
          <article
            key={item.question}
            className="rounded-[26px] border border-white/10 bg-white/6 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className="text-lg font-semibold text-white">{item.question}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-emerald-300 transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
