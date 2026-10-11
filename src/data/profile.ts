import type { SocialLink } from "./types";

/**
 * Personal profile — name, positioning, contact details.
 * Edit this file to update contact information site-wide.
 */
export const profile = {
  name: "Vivek Vardhan Saraswathi",
  headline: "Aspiring AI/ML Engineer",
  positioning: "Aspiring AI/ML Engineer | Python | Machine Learning | Data Analysis",
  tagline: "Turning data into useful intelligence.",
  heroIntro:
    "I build and explore machine-learning systems, recommendation engines, anomaly detection workflows, and Python-based applications.",
  eyebrow: "AI/ML Engineering Portfolio",
  location: "India",

  summary: [
    "I am an early-career AI/ML engineer with an academic foundation in Artificial Intelligence and Data Science and hands-on exposure to Python, data analysis, machine learning, and backend API development. I enjoy exploring how data-driven systems can solve practical problems and am focused on strengthening my implementation, evaluation, and software-development skills through project-based learning.",
    "My project interests include recommendation systems, fraud detection, product recommendation, and Python-based application development. I aim to build reliable, understandable, and useful AI/ML solutions while continuing to grow as an engineer.",
  ],

  about: {
    heading: "Curious about systems. Focused on implementation.",
    paragraphs: [
      "I am pursuing a B.Tech in Artificial Intelligence and Data Science at NBKR Institute of Science and Technology, where I have built a foundation in programming, data structures, databases, and machine learning. Alongside my coursework, I apply what I learn by building projects end to end — from data preparation and model evaluation to backend APIs that serve results.",
      "My work this far has centered on recommendation systems, anomaly detection, and Python-based tooling. I care about the details that make applied ML trustworthy: how data is cleaned, how models are evaluated, what the limits of an approach are, and how the result is actually used.",
      "I am now focused on deepening my engineering practice — writing cleaner, tested code, understanding deployment, and learning to make trade-offs that make systems reliable rather than merely impressive in a notebook.",
    ],
    commitments: [
      "Academic background in AI and Data Science, applying concepts through hands-on projects.",
      "Hands-on exposure to Python, Pandas, NumPy, Scikit-learn, Flask, and REST APIs.",
      "A focus on honest model evaluation — precision, recall, and understanding failure cases.",
      "A commitment to stronger implementation, debugging, and software-engineering skills.",
    ],
  },

  /** Open to opportunities — wording used in the contact section. */
  contact: {
    heading: "Let's build something useful.",
    copy: "I'm interested in opportunities to contribute, learn, and build practical data-driven applications.",
  },

  email: "vivekvardhan4152@gmail.com",
  phone: "+91 7893839136",

  /** Résumé document path (served from /public/resume). */
  resumePath: "/resume/VSR.pdf",
} as const;

export const profileSocials: SocialLink[] = [
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
  {
    label: "Email",
    url: `mailto:${profile.email}`,
    icon: "mail",
  },
];