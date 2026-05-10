"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { navigationItems } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/lead-links";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/12"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white",
                    pathname === item.href && "bg-white/10 text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5">
              <ButtonLink
                href={buildWhatsAppLink(
                  "Namaste, I want to discuss wholesale pricing and trending electronics for my shop.",
                )}
                className="w-full"
              >
                <MessageCircleMore className="size-4" />
                WhatsApp Us
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
