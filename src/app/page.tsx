const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "REST APIs",
  "UI/UX Design",
  "Performance Optimization",
];

const projects = [
  {
    title: "Brand Platform Refresh",
    description:
      "Designed and launched a conversion-focused marketing platform that improved customer engagement and streamlined campaign reporting.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Operations Dashboard",
    description:
      "Built a data-rich admin dashboard for internal teams to monitor KPIs, reduce manual reporting, and simplify decision making.",
    stack: ["React", "Node.js", "API Integration"],
  },
  {
    title: "Portfolio Experience",
    description:
      "Created a storytelling-driven portfolio experience that connected case studies, services, and measurable outcomes into one polished narrative.",
    stack: ["Design Systems", "UX Writing", "Frontend"],
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Front-End Engineer",
    company: "Independent / Remote",
    description: "Leading product design and front-end implementation for client projects spanning marketing, SaaS, and digital transformation work.",
  },
  {
    period: "2019 — 2022",
    role: "Product Designer & Developer",
    company: "Creative Studio",
    description: "Partnered with startups and founders to shape product direction, UX flows, and efficient front-end systems.",
  },
  {
    period: "2017 — 2019",
    role: "Web Developer",
    company: "Digital Agency",
    description: "Built and maintained marketing sites and conversion-focused experiences for growth-oriented brands.",
  },
];

const services = [
  "Brand and product strategy",
  "Web app development",
  "UI/UX design systems",
  "Landing pages and funnels",
  "Performance optimization",
  "Technical consulting",
];

const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Projects shipped", value: "25" },
  { label: "Client satisfaction", value: "96%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-[0.2em] text-cyan-300 uppercase">
            Georgina Ramos
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
              Full-stack developer
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Building thoughtful digital experiences that turn ideas into impact.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I design and build modern web experiences with strong systems thinking,
              clean interfaces, and measurable results for brands, startups, and growing teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
              >
                Let&apos;s connect
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Currently based in</p>
                <p className="mt-1 text-xl font-semibold text-white">Remote / Worldwide</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
            </div>

            <div className="space-y-5">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-3xl font-semibold text-cyan-300">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 border-t border-slate-800 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Product-minded developer with a design eye.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I help businesses turn complex ideas into polished digital products through design,
              development, and iterative problem-solving.
            </p>
            <p>
              My work focuses on clear user journeys, scalable front-end architecture, and thoughtful
              product decisions that support real business goals.
            </p>
          </div>
        </section>

        <section id="work" className="py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Core stack</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Experience</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A track record of thoughtful product work.</h2>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">{item.period}</div>
                  <div className="text-xl font-semibold text-white">{item.role}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.company}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Services</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-200">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Featured work</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-950" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-cyan-200">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800 py-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/5 p-8 md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Let&apos;s build</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Need a polished product or portfolio presence?</h2>
            </div>
            <a
              href="mailto:hello@georginaramos.dev"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 md:mt-0"
            >
              hello@georginaramos.dev
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
