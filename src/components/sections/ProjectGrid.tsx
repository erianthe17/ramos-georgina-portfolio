import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/common/Reveal";
import { projects } from "@/lib/constants";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function ProjectGrid() {
  return (
    <section id="work" className="project-section py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
              Featured work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Selected projects
            </h2>
          </div>
          <Link
            href="#contact"
            className="hidden items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] md:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 80}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[0_20px_70px_var(--shadow)]"
            >
              <div className="relative h-56 overflow-hidden border-b border-[var(--border)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[var(--accent-strong)] uppercase">
                    {project.role}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/50 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-strong)] transition hover:brightness-110"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-3 py-1 text-[11px] font-medium text-[var(--muted)]">
                        In development
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.stack.map((stack) => (
                    <Badge
                      key={`${project.slug}-${stack}`}
                      className="bg-[var(--card-strong)] text-[10px] tracking-[0.12em]"
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
