import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile, socialLinks } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero-fade-in-up relative isolate overflow-hidden pb-12 pt-12 sm:pt-16 lg:pt-20">
      <div className="hero-particles absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[34rem] max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal initialVisible className="relative z-10 max-w-2xl py-10">
          <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
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
            <Link
              href="#work"
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent-strong)]"
            >
              View my work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.slice(0, 2).map((link) => {
              const Icon = link.label === "GitHub" ? Briefcase : Globe;

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
