export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-6">
        <div className="h-5 w-40 rounded-full bg-white/10" />
        <div className="h-16 max-w-3xl rounded-[32px] bg-white/10" />
        <div className="h-8 max-w-2xl rounded-[20px] bg-white/8" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-72 rounded-[30px] border border-white/10 bg-white/6"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
