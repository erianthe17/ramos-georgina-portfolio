import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navItems, resumeUrl } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
            GR
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.24em] text-[var(--foreground)] uppercase md:inline">
            Georgina Ramos
          </span>
        </Link>

        <nav className="order-3 flex w-full items-center justify-center gap-8 border-t border-[var(--border)] pt-3 text-xs text-[var(--muted)] md:order-none md:w-auto md:gap-7 md:border-0 md:pt-0 md:text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 md:ml-0">
          {/* ================================================================== */}
          {/* RESUME LINK: Place your resume PDF at: /public/resume.pdf          */}
          {/* Configured via resumeUrl in @/lib/constants.ts                      */}
          {/* ================================================================== */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-[var(--foreground)] uppercase transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)] sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/50 bg-[var(--accent-soft)] px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-[var(--accent-strong)] uppercase transition hover:brightness-110 sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
