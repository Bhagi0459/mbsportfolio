export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly kind: 'email' | 'linkedin' | 'github' | 'upwork' | 'fiverr' | 'freelancer';
}

export interface SkillItem {
  readonly name: string;
  /** 1-5, used only to size/weight the node — not shown as a fake percentage */
  readonly weight: number;
}

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly items: readonly SkillItem[];
}

export interface ExperienceEntry {
  readonly role: string;
  readonly org: string;
  readonly period: string;
  readonly current: boolean;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly kind: 'Personal project' | 'Enterprise';
  readonly org?: string;
  readonly status: 'Live' | 'Internal';
  readonly problem: string;
  readonly contribution: string;
  readonly stack: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly featured: boolean;
}

export interface InsightPost {
  readonly title: string;
  readonly excerpt: string;
  readonly url: string;
  readonly publishedLabel: string;
}

export interface ServiceOffer {
  readonly title: string;
  readonly description: string;
}

export interface MarketplaceProfile {
  readonly platform: string;
  readonly handle: string;
  readonly href: string;
}

export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly period: string;
}
