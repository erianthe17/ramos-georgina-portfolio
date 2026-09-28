import { Reveal } from "@/components/common/Reveal";
import { skills } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal initialVisible className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Thoughtful interfaces for real-world product problems.</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 80} initialVisible={index === 0} className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
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
