import { Mail, MapPin, Phone } from "lucide-react";
import { contactMethods, profile } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build thoughtful digital experiences.</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-cyan-300" />
              <a href={`mailto:${profile.email}`} className="transition hover:text-white">{profile.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-cyan-300" />
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">{profile.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <form className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/60 focus:outline-none"
              />
            </label>
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/60 focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm text-slate-300">
            <span className="mb-2 block">Project details</span>
            <textarea
              rows={5}
              placeholder="Tell me about your idea, timeline, and goals..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/60 focus:outline-none"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send inquiry
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Email directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
