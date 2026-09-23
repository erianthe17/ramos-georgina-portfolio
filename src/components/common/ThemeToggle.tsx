"use client";

import { MoonStar, SunMedium } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-slate-500 hover:text-white"
    >
      <SunMedium className="h-4 w-4" />
    </button>
  );
}
