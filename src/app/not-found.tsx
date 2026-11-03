import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent-strong)] uppercase">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-110"
      >
        Back to homepage
      </Link>
    </section>
  );
}
