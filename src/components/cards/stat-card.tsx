import type { Stat } from "@/types/site";

import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
  className?: string;
};

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <article
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(8,15,32,0.42)] backdrop-blur-md",
        className,
      )}
    >
      <p className="font-display text-3xl text-emerald-300">{stat.value}</p>
      <h3 className="mt-4 text-xl font-semibold text-white">{stat.label}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{stat.description}</p>
    </article>
  );
}
