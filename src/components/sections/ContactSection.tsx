import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Let&apos;s build thoughtful digital experiences.</h2>
          <div className="mt-6 space-y-4 text-[var(--muted)]">
            <div className="flex min-w-0 items-start gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
              <a href={`mailto:${profile.email}`} className="min-w-0 break-all transition hover:text-[var(--foreground)]">{profile.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="transition hover:text-[var(--foreground)]">{profile.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
              <span>{profile.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-[var(--foreground)]">
              <span className="mb-2 block">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)]/60 focus:outline-none"
              />
            </label>
            <label className="block text-sm text-[var(--foreground)]">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)]/60 focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm text-[var(--foreground)]">
            <span className="mb-2 block">Project details</span>
            <textarea
              rows={5}
              placeholder="Tell me about your idea, timeline, and goals..."
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)]/60 focus:outline-none"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-110"
            >
              Send inquiry
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
            >
              Email directly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
