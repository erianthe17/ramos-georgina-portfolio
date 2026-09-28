import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/common/Reveal";
import { projects } from "@/lib/constants";

export function ProjectGrid() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal initialVisible className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">Featured work</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Selected projects</h2>
          </div>
          <Link href="#contact" className="hidden items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] md:inline-flex">
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 80}
              className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[0_20px_70px_var(--shadow)]"
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

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--accent-strong)] uppercase">
                    {project.period}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-strong)] text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
                    >
                      <Briefcase className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-strong)] text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-[var(--muted)]">{project.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <Badge key={`${project.slug}-${stack}`} className="bg-[var(--card-strong)] text-[10px] tracking-[0.12em]">
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
