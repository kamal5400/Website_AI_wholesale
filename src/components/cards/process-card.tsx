import type { ProcessStep } from "@/types/site";

type ProcessCardProps = {
  item: ProcessStep;
};

export function ProcessCard({ item }: ProcessCardProps) {
  return (
    <article className="relative rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_20px_70px_rgba(8,15,32,0.35)] backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-emerald-300/30 bg-white/8 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-emerald-200">
          STEP {item.step}
        </span>
        <div className="size-12 rounded-full bg-linear-to-br from-emerald-300/25 via-white/10 to-blue-500/20" />
      </div>
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
    </article>
  );
}
