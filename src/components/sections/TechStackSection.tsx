"use client";

import { Reveal } from "@/components/common/Reveal";
import {
  CSS3Icon,
  FigmaIcon,
  FramerMotionIcon,
  GitHubIcon,
  GitIcon,
  HTML5Icon,
  JavaScriptIcon,
  NestJSIcon,
  NextjsIcon,
  PostgreSQLIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  ViteIcon,
} from "@/components/common/TechIcons";

interface TechTool {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const techTools: TechTool[] = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "HTML5", Icon: HTML5Icon },
  { name: "CSS3", Icon: CSS3Icon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "Figma", Icon: FigmaIcon },
  { name: "Git", Icon: GitIcon },
  { name: "GitHub", Icon: GitHubIcon },
  { name: "Vite", Icon: ViteIcon },
  { name: "Supabase", Icon: SupabaseIcon },
  { name: "PostgreSQL", Icon: PostgreSQLIcon },
  { name: "NestJS", Icon: NestJSIcon },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Technologies &amp; Tools
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            A showcase of the modern frontend technologies, libraries, and design workflows I leverage to build fast, responsive, and polished web interfaces.
          </p>
        </Reveal>
      </div>

      {/* Infinite Auto-Scrolling Carousel with pause on hover */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge blur/fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-28"
          aria-hidden="true"
        />

        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {/* Double array for infinite, continuous seamless looping */}
          {[...techTools, ...techTools].map((tool, index) => {
            const Icon = tool.Icon;
            return (
              <div
                key={`${tool.name}-${index}`}
                className="group flex h-36 w-32 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:bg-[var(--card-strong)] hover:shadow-[0_12px_32px_var(--shadow)]"
              >
                <div className="flex h-12 w-12 items-center justify-center transition duration-300 group-hover:scale-110">
                  <Icon className="h-10 w-10 drop-shadow-sm" />
                </div>
                <span className="text-center text-xs font-semibold text-[var(--foreground)]">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
