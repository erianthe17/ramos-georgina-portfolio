const projects = Array.from({ length: 4 }, (_, index) => index);

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-full bg-[var(--muted)]/15 motion-reduce:animate-none ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default function Loading() {
  return (
    <div aria-busy="true">
      <p className="sr-only" role="status">
        Loading portfolio
      </p>

      <section
        className="relative mx-auto grid min-h-[34rem] max-w-6xl items-center gap-8 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20"
        aria-hidden="true"
      >
        <div className="space-y-6 py-10">
          <Skeleton className="h-3 w-24" />
          <div className="space-y-3">
            <Skeleton className="h-12 w-4/5 rounded-xl sm:h-16" />
            <Skeleton className="h-12 w-3/5 rounded-xl sm:h-16" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full max-w-xl" />
            <Skeleton className="h-3 w-11/12 max-w-lg" />
            <Skeleton className="h-3 w-2/3 max-w-md" />
          </div>
          <div className="flex gap-4 pt-2">
            <Skeleton className="h-11 w-40 rounded-full" />
            <Skeleton className="h-11 w-28 rounded-full" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[34rem] items-center justify-center">
          <Skeleton className="aspect-square w-[78%] rounded-full" />
        </div>
      </section>

      <section className="py-20" aria-hidden="true">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-9 w-56 rounded-xl" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]"
              >
                <Skeleton className="h-56 w-full rounded-none" />
                <div className="space-y-4 p-6">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-7 w-3/4 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-5/6 rounded-md" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-14" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
