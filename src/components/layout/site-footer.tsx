import { Globe2, Mail, MapPin, Phone, Radio, Send } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerLinks, siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/lead-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <p className="font-display text-2xl text-white">{siteConfig.name}</p>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Wholesale smart gadgets, fast-moving electronics, and retailer support
              designed for shops that want better margins and stronger customer trust.
            </p>
            <a
              href={buildWhatsAppLink(
                "Namaste, I want to discuss wholesale pricing and products for my electronics shop.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-400/12"
            >
              <Radio className="size-4" />
              WhatsApp Wholesale Desk
            </a>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Quick Links
            </p>
            <div className="space-y-3">
              {footerLinks.quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Categories
            </p>
            <div className="space-y-3">
              {footerLinks.categories.map((item) => (
                <p key={item} className="text-sm text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <p className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="mt-0.5 size-4 text-emerald-300" />
              {siteConfig.address}
            </p>
            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
            >
              <Phone className="size-4 text-sky-300" />
              {siteConfig.primaryPhone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
            >
              <Mail className="size-4 text-emerald-300" />
              {siteConfig.email}
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.facebook}
                className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-emerald-300/40 hover:text-white"
                aria-label="Facebook"
              >
                <Globe2 className="size-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-sky-300/40 hover:text-white"
                aria-label="Instagram"
              >
                <Send className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} {siteConfig.name}. Built for wholesale
          electronics growth in Nepal.
        </div>
      </Container>
    </footer>
  );
}
