export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  role: string;
  period: string;
  stack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ContactMethod {
  label: string;
  href: string;
  value: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}
