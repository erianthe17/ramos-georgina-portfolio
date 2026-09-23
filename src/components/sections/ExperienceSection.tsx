import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-slate-800 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Turning product ideas into usable interfaces</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div key={`${item.company}-${item.period}`} className="rounded-[26px] border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{item.role}</p>
                </div>
                <p className="text-sm text-slate-400">{item.location}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
