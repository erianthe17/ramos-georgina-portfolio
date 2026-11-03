import Link from "next/link";
import { Briefcase, Globe, Mail } from "lucide-react";
import { profile, socialLinks } from "@/lib/constants";

const iconMap = {
  GitHub: Briefcase,
  LinkedIn: Globe,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-elevated)]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">{profile.name}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
