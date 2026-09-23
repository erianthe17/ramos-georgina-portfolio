import Link from "next/link";
import { ArrowRight, Briefcase, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profile, projectHighlights, socialLinks } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Badge className="border-cyan-500/40 bg-cyan-500/10 text-cyan-200">
            Frontend-focused developer
          </Badge>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building polished digital experiences with a product mindset.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#work" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.slice(0, 2).map((link) => {
              const Icon = link.label === "GitHub" ? Briefcase : Globe;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium tracking-[0.08em] text-slate-200 uppercase transition hover:border-cyan-500/60 hover:text-cyan-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.5)] backdrop-blur-sm ring-1 ring-white/5">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 text-xl font-semibold text-white">{profile.location}</p>
            </div>
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
          </div>

          <div className="space-y-4">
            {projectHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-cyan-300">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button variant="secondary" className="w-full justify-center">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
