import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/lead-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="relative flex min-h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink(
              "Namaste, I want to get wholesale pricing and discuss retailer partnership.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-white/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-400/12"
          >
            <MessageCircleMore className="size-4" />
            Message on WhatsApp
          </a>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
