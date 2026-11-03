"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("online", onStoreChange);
  window.addEventListener("offline", onStoreChange);

  return () => {
    window.removeEventListener("online", onStoreChange);
    window.removeEventListener("offline", onStoreChange);
  };
};

const getSnapshot = () => navigator.onLine;

export function ConnectionStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, () => true);

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="alert"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/95 px-4 py-12 text-center backdrop-blur-xl"
    >
      <div className="max-w-lg">
        <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent-strong)] uppercase">
          Connection lost
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
          You&apos;re offline.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
          Check your internet connection. This page will be available again when you reconnect.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full border border-[var(--accent)]/70 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-soft)]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
