export interface Project {
  id: string;
  name: string;
  hook: string;
  techStack: string[];
  whyItMatters: string;
  designDecisions?: string;
  tradeoffs?: string;
  constraints?: string;
  github: string;
  demo?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  hashnodeUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  section: string;
}
