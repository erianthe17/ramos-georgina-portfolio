import { Reveal } from "@/components/common/Reveal";

// EDIT THESE LINES with the personal details you want to share.
const aboutIntroduction = "Write a short introduction about yourself here.";
const aboutDetails = "Add a few details about your background, interests, strengths, or goals here.";

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
        </Reveal>

        <Reveal delay={100} className="space-y-5 text-base leading-8 text-[var(--muted)]">
          <p>{aboutIntroduction}</p>
          <p>{aboutDetails}</p>
        </Reveal>
      </div>
    </section>
  );
}
