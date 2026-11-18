import { Reveal } from "@/components/common/Reveal";
import { Palette, Sparkles, Compass, Heart } from "lucide-react";

const personalPillars = [
  {
    title: "Designing with Intent",
    description:
      "Crafting intuitive UI flows, accessible color systems, and balanced typography in Figma before writing a single line of code.",
    tag: "Design & UI/UX",
    icon: Palette,
  },
  {
    title: "Matcha-Powered Focus",
    description:
      "An iced matcha latte is my go-to companion for deep work sessions, whether architecting state or fine-tuning CSS layouts.",
    tag: "Fuel of Choice",
    icon: Sparkles,
  },
  {
    title: "Cat Companion",
    description:
      "Cats keep me grounded with quiet companionship and make for the most patient, non-judgmental rubber-ducking debuggers.",
    tag: "Moral Support",
    icon: Heart,
  },
  {
    title: "Always Exploring",
    description:
      "Curious by nature—constantly experimenting with modern web tools, interaction design patterns, and creative ways to solve real problems.",
    tag: "Curiosity & Growth",
    icon: Compass,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            A little about who I am
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            A blend of frontend engineering, design intuition, and the personal interests that keep my creative energy flowing.
          </p>
        </Reveal>

        <Reveal delay={100} className="space-y-6 text-base leading-8 text-[var(--muted)]">
          <p>
            I&apos;m a senior Computer Science student and product-minded frontend developer. I love bridging the gap between visual design and reliable, accessible frontend code—turning ideas into responsive, fluid digital products.
          </p>
          <p>
            I focus on modern React, Next.js, and TypeScript, caring deeply about visual hierarchy, clean component modularity, and micro-interactions that make web experiences feel natural and polished.
          </p>

          <div className="grid gap-3.5 pt-2 sm:grid-cols-2">
            {personalPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--card-strong)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold tracking-wider text-[var(--accent-strong)] uppercase">
                      {pillar.tag}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
