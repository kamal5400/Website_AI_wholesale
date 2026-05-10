import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buttonVariants(
  variant: "primary" | "secondary" | "ghost" = "primary",
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const variants = {
    primary:
      "border-emerald-300/70 bg-linear-to-r from-emerald-400 via-sky-300 to-blue-600 text-slate-950 shadow-[0_18px_45px_rgba(52,211,153,0.24)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.24)]",
    secondary:
      "border-white/15 bg-white/8 text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-emerald-300/45 hover:bg-white/12",
    ghost:
      "border-transparent bg-transparent text-sky-100 hover:bg-emerald-400/10 hover:text-white",
  } as const;

  return cn(base, variants[variant]);
}

export function absoluteUrl(path = "") {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.voltvergewholesale.com";
  return new URL(path, baseUrl).toString();
}
