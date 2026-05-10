import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/lead-links";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(
        "Namaste, I want wholesale pricing and trending product support for my shop.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp wholesale chat"
      className="fixed bottom-24 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full border border-emerald-300/35 bg-linear-to-r from-emerald-400 via-sky-300 to-blue-600 text-slate-950 shadow-[0_22px_65px_rgba(52,211,153,0.3)] transition hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <MessageCircleMore className="size-6" />
    </a>
  );
}
