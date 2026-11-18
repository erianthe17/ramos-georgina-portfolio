import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile, resumeUrl, socialLinks } from "@/lib/constants";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="hero-fade-in-up relative isolate overflow-hidden pb-12 pt-12 sm:pt-16 lg:pt-20">
      <div className="hero-particles absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[34rem] max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal initialVisible className="relative z-10 max-w-2xl py-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
            Frontend Developer &bull; UI/UX
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Hello,
            <br />
            I am <span className="text-[var(--accent-strong)]">{profile.name}</span>
            <span className="text-[var(--foreground)]">,</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/70 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-soft)]"
            >
              Let&apos;s get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* ================================================================== */}
            {/* RESUME BUTTON: Place your resume PDF at: /public/resume.pdf         */}
            {/* Configured via resumeUrl in @/lib/constants.ts                      */}
            {/* ================================================================== */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/70 hover:text-[var(--accent-strong)]"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>

            <Link
              href="#work"
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent-strong)]"
            >
              View my work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => {
              const Icon =
                link.label === "GitHub"
                  ? GitHubIcon
                  : link.label === "LinkedIn"
                  ? LinkedInIcon
                  : Mail;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)] transition hover:text-[var(--accent-strong)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center self-stretch">
          <div
            className="absolute bottom-8 left-1/2 h-[72%] w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,_var(--accent-soft),transparent_70%)] blur-2xl"
            aria-hidden="true"
          />
          <Image
            src="/georgina-portrait.png"
            alt={`${profile.name} portrait`}
            width={520}
            height={520}
            priority
            sizes="(max-width: 768px) 90vw, 42vw"
            className="relative z-10 max-h-[36rem] w-full object-contain object-bottom drop-shadow-[0_24px_56px_var(--shadow)]"
          />
        </div>
      </div>
    </section>
  );
}
