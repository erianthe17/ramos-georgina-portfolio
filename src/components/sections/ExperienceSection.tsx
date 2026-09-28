import { Reveal } from "@/components/common/Reveal";
import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal initialVisible className="mb-10 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Turning product ideas into usable interfaces</h2>
        </Reveal>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 90} className="rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm text-[var(--muted)]">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.company}</h3>
                  <p className="mt-1 text-sm text-[var(--accent-strong)]">{item.role}</p>
                </div>
                <p className="text-sm text-[var(--muted)]">{item.location}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--foreground)]/80">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
