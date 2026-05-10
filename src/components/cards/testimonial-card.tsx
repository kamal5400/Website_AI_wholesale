import { Star } from "lucide-react";

import type { Testimonial } from "@/types/site";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-[0_24px_80px_rgba(8,15,32,0.4)] backdrop-blur-md">
      <div className="flex gap-1 text-amber-300">
        {Array.from({ length: item.rating }).map((_, index) => (
          <Star key={`${item.name}-${index}`} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-slate-200">“{item.quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-white">{item.name}</p>
        <p className="text-sm text-slate-400">
          {item.business} · {item.location}
        </p>
      </div>
    </article>
  );
}
