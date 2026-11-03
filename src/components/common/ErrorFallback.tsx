"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorFallbackProps {
  error?: Error & { digest?: string };
  retry: () => void;
}

export function ErrorFallback({ error, retry }: ErrorFallbackProps) {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent-strong)] uppercase">
        Something went wrong
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
        This page couldn&apos;t load.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
        An unexpected error interrupted the page. You can try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={retry}
          className="rounded-full border border-[var(--accent)]/70 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-soft)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-110"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
