import { Injectable, signal } from '@angular/core';
import {
  ABOUT_PARAGRAPHS,
  CASE_STUDIES,
  CERTIFICATIONS,
  CONTACT_LINKS,
  EDUCATION,
  EXPERIENCE,
  IDENTITY,
  INSIGHTS,
  MARKETPLACE_PROFILES,
  RESUME_URL,
  SERVICES,
  SKILL_GROUPS,
} from '../data/portfolio-content';

/**
 * Static, verified portfolio content exposed as signals.
 * Centralising it here means LinkedIn/Fiverr/Upwork data can be
 * refreshed later by editing core/data only — no component changes needed.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  readonly identity = signal(IDENTITY).asReadonly();
  readonly aboutParagraphs = signal(ABOUT_PARAGRAPHS).asReadonly();
  readonly experience = signal(EXPERIENCE).asReadonly();
  readonly skillGroups = signal(SKILL_GROUPS).asReadonly();
  readonly caseStudies = signal(CASE_STUDIES).asReadonly();
  readonly featuredCaseStudy = signal(CASE_STUDIES.find((c) => c.featured) ?? CASE_STUDIES[0]).asReadonly();
  readonly otherCaseStudies = signal(CASE_STUDIES.filter((c) => !c.featured)).asReadonly();
  readonly insights = signal(INSIGHTS).asReadonly();
  readonly services = signal(SERVICES).asReadonly();
  readonly marketplaceProfiles = signal(MARKETPLACE_PROFILES).asReadonly();
  readonly certifications = signal(CERTIFICATIONS).asReadonly();
  readonly education = signal(EDUCATION).asReadonly();
  readonly contactLinks = signal(CONTACT_LINKS).asReadonly();
  readonly resumeUrl = signal(RESUME_URL).asReadonly();
}
