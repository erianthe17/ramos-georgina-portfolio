import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navItems } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:rgba(237,246,255,0.72)] backdrop-blur-xl dark:bg-[color:rgba(7,24,39,0.72)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
            GR
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-[var(--foreground)] uppercase">
            Georgina Ramos
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/50 bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--accent-strong)] uppercase transition hover:brightness-110"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
