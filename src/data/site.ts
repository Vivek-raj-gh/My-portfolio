import type { NavLink, SocialLink } from "./types";

/**
 * Site-level configuration: titles, metadata, navigation and social links.
 * Edit this file to change global behavior — nothing is hardcoded elsewhere.
 */
export const site = {
  name: "Vivek Vardhan Saraswathi",
  siteTitle: "Vivek Vardhan Saraswathi — AI/ML Engineer Portfolio",
  siteDescription:
    "Portfolio of Vivek Vardhan Saraswathi, an aspiring AI/ML engineer building recommendation systems, anomaly detection workflows, and Python-based applications.",
  shortName: "Vivek",
  logoMark: "VIVEK//ML",

  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/", anchor: true, sectionId: "skills" },
    { label: "Experience", to: "/", anchor: true, sectionId: "experience" },
    { label: "Contact", to: "/", anchor: true, sectionId: "contact" },
  ] satisfies NavLink[],

  footerDescriptor: "AI/ML Engineer · Python · Recommendation Systems · Anomaly Detection",

  /** Copyright holder shown in the footer (year is computed at render time). */
  copyrightHolder: "Vivek Vardhan Saraswathi",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/Vivek-raj-gh",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vivek-vardhan-saraswathi-226000270",
    icon: "linkedin",
  },
];

/** Latest post — used for the résumé CTA. */
export const resume = {
  label: "View Résumé",
  path: "/resume/VSR.pdf",
} as const;