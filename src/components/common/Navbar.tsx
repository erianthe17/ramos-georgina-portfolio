import Link from "next/link";
import { ArrowUpRight, MoonStar, SunMedium } from "lucide-react";
import { navItems } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-sm font-semibold text-cyan-200">
            GR
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-slate-200 uppercase">
            Georgina Ramos
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            className="hidden rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 transition hover:border-slate-500 md:inline-flex"
          >
            <SunMedium className="h-4 w-4" />
          </button>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase transition hover:bg-cyan-500/15"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
