import type {
  ContactMethod,
  Experience,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from "@/types";

export const siteConfig = {
  name: "Georgina Ramos",
  title: "Frontend Engineer Portfolio",
  description:
    "Modern portfolio for Georgina Ramos, showcasing product-minded frontend engineering, product design, and digital experiences.",
  url: "https://georginaramos.dev",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "Georgina Ramos",
  location: "San Antonio, Quezon, Philippines",
  email: "georginaramos0317@gmail.com",
  phone: "+63 949 564 3439",
  github: "github.com/erianthe17",
  linkedin: "linkedin.com/in/georgina-ramos-50b140378",
  summary:
    "A fourth-year BS Computer Science student and product-minded frontend developer specializing in accessible interfaces, modern React architecture, and polished user experiences that turn product ideas into usable digital products.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: `https://${profile.github}`,
    ariaLabel: "Visit Georgina's GitHub profile",
  },
  {
    label: "LinkedIn",
    href: `https://${profile.linkedin}`,
    ariaLabel: "Visit Georgina's LinkedIn profile",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    ariaLabel: "Email Georgina",
  },
];

export const projectHighlights: Stat[] = [
  { label: "Core focus", value: "Frontend" },
  { label: "Current study", value: "BS CS" },
  { label: "Stack", value: "React + TypeScript" },
];

export const skills: SkillGroup[] = [
  {
    title: "Core strengths",
    items: ["UI/UX thinking", "Responsive design", "Design systems", "Web accessibility"],
  },
  {
    title: "Frontend tools",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Workflow",
    items: ["Figma", "Git", "API integration", "Testing", "Product collaboration"],
  },
];

export const projects: Project[] = [
  {
    title: "LGR Auto-Supply Inventory System",
    slug: "lgr-auto-supply",
    summary: "Inventory operations dashboard",
    description:
      "An inventory management system for tracking products, monitoring stock levels, and organizing day-to-day auto-supply operations.",
    role: "Full-Stack Developer",
    period: "Mar 2026 - Present",
    stack: ["React", "TypeScript", "Tailwind", "NestJS", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TaskBuddy",
    slug: "taskbuddy",
    summary: "Home services marketplace",
    description:
      "A home services marketplace where homeowners can find service providers, post jobs, and review applications.",
    role: "Frontend Developer",
    period: "Jul 2026 - Oct 2026",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/erianthe17/taskbuddy",
  },
  {
    title: "CITE Thesis Management System",
    slug: "cite-thesis-management",
    summary: "Academic workflow system",
    description:
      "A thesis management system for submitting academic work, reviewing thesis documents, and managing access requests.",
    role: "Frontend Developer",
    period: "Feb 2026 - May 2026",
    stack: ["React", "Vite", "Tailwind", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/gncrlatienza-eng/cite-tms-frontend",
    liveUrl: "https://cite-tms-frontend.vercel.app/",
  },
  {
    title: "AnimoMart",
    slug: "animomart",
    summary: "Campus e-commerce experience",
    description:
      "A campus marketplace for browsing products, managing wishlists, and completing purchases.",
    role: "Frontend Developer",
    period: "2025",
    stack: ["React", "Vite", "JavaScript", "Tailwind", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const experiences: Experience[] = [
  {
    company: "LGR Auto-Supply",
    role: "Full-Stack Developer",
    period: "Mar 2026 - Present",
    location: "Remote / On-site",
    highlights: [
      "Built a responsive operations dashboard to centralize stock visibility and inventory workflows.",
      "Collaborated on architecture decisions for a scalable full-stack product using React and NestJS.",
      "Improved usability with modular, reusable UI patterns and clearer information hierarchy.",
    ],
  },
  {
    company: "Freelance / University Projects",
    role: "Frontend Developer",
    period: "2024 - 2026",
    location: "Philippines",
    highlights: [
      "Delivered product-facing interfaces for academic and operational tools to improve clarity and usability.",
      "Turned user workflows and requirements into polished, responsive experiences with strong attention to detail.",
      "Produced maintainable front-end codebases using TypeScript, React, and Tailwind CSS.",
    ],
  },
];

export const contactMethods: ContactMethod[] = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: `https://${profile.github}`, value: profile.github },
  { label: "LinkedIn", href: `https://${profile.linkedin}`, value: profile.linkedin },
];
