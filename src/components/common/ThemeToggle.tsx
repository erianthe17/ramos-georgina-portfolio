"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const getTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const subscribeToTheme = (onStoreChange: () => void) => {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  colorScheme.addEventListener("change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-theme-change", onStoreChange);

  return () => {
    colorScheme.removeEventListener("change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-theme-change", onStoreChange);
  };
};

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-[0_8px_24px_var(--shadow)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
    >
      {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}
