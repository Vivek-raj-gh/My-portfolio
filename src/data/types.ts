/**
 * Shared content types for the portfolio data layer.
 * Every value the site renders is typed through these structures.
 */

export interface CaseStudySection {
  /** Short heading shown in the case-study layout, e.g. "Data & preprocessing". */
  heading: string;
  /** Paragraphs of prose. */
  paragraphs: string[];
  /** Optional compact bullet list rendered below the paragraphs. */
  bullets?: string[];
}

export type CoverMotif =
  | "signals"
  | "graph"
  | "products"
  | "api"
  | "auth"
  | "travel"
  | "chat"
  | "report"
  | "weather"
  | "spam";

export interface Project {
  /** URL slug, e.g. "securepay". Used in /projects/:slug. */
  slug: string;
  /** Display index like "01" — only featured projects carry one. */
  index: string;
  /** Full project name. */
  title: string;
  /** Short label used on project cards. */
  shortTitle: string;
  /** Navigation/classification category. */
  category: string;
  /** Filter category used on the Projects page gallery. */
  filter: ProjectFilter;
  /** One-line positioning statement. */
  tagline: string;
  /** Card-level description (2–3 sentences). */
  summary: string;
  /** Technology stack as displayed tags. */
  stack: string[];
  /** URL slug of the GitHub repository. */
  repoUrl: string;
  /** Working live demo URL, or null when none is verified. */
  demoUrl: string | null;
  /** Abstract cover-art motif for the card/case-study header. */
  cover: CoverMotif;
  /** Whether the project gets a full case study route. */
  featured: boolean;
  /** Fully structured case-study content (required when featured). */
  caseStudy?: ProjectCaseStudy;
  /** Optional honesty note, e.g. "Demo URL pending confirmation." */
  statusNote?: string;
}

export interface ProjectCaseStudy {
  /** Formal problem statement. */
  problem: string;
  /** Why this problem matters. */
  motivation: string[];
  /** Data or input format used. */
  data: string[];
  /** Step-by-step system workflow. */
  workflow: string[];
  /** Architecture description rendered as a flow diagram. */
  architecture: string[];
  /** Why the chosen stack fits the problem. */
  stackRationale: string[];
  /** Implementation details. */
  implementation: string[];
  /** Evaluation methodology and verified results. */
  evaluation: string[];
  /** Limitations and trade-offs. */
  limitations: string[];
  /** Planned / potential improvements. */
  improvements: string[];
}

export type ProjectFilter =
  | "Machine Learning"
  | "Recommendation Systems"
  | "Backend Engineering"
  | "NLP"
  | "Data & Visualization";

export interface SkillGroup {
  group: string;
  skills: string[];
}

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  detail: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface NavLink {
  label: string;
  /** Internal route path (starts with "/") or anchor ("/projects#x"). */
  to: string;
  /** True when the item is an anchor into the home page section. */
  anchor?: boolean;
  sectionId?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  /** Icon key used by the SocialIcon component. */
  icon: "github" | "linkedin" | "mail";
}