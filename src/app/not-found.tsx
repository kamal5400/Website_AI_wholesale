import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-xl rounded-[32px] border border-white/10 bg-white/6 p-10 text-center backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
          Page Not Found
        </p>
        <h1 className="mt-4 font-display text-4xl text-white">This page took the wrong route.</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">
          The wholesale page you were looking for is not available right now. Head back
          to the homepage and continue your inquiry from there.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-emerald-300/50 bg-white/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/12"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
