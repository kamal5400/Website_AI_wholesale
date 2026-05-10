import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="VoltVerge Wholesale home">
      <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-2xl border border-emerald-300/30 bg-white/10 shadow-[0_0_30px_rgba(52,211,153,0.18)] backdrop-blur-md">
        <Image
          src="/Logo.png"
          alt="VoltVerge Wholesale logo"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-display text-lg font-semibold tracking-wide text-white">
          VoltVerge
        </span>
        <span className="flex items-center gap-1 text-xs uppercase tracking-[0.24em] text-slate-400">
          Wholesale <Sparkles className="size-3 text-emerald-300" />
        </span>
      </div>
    </Link>
  );
}
