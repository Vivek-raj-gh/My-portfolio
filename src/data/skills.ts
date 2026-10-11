import type { SkillGroup } from "./types";

/**
 * Technical skills, grouped by discipline.
 * Proficiency is shown as category-level context only — no fake percentages.
 */
export const skillGroups: SkillGroup[] = [
  {
    group: "Programming & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    group: "Machine Learning & Analytics",
    skills: [
      "Scikit-learn",
      "Collaborative Filtering",
      "Anomaly Detection",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },
  {
    group: "Visualization",
    skills: ["Matplotlib", "Seaborn"],
  },
  {
    group: "Backend & APIs",
    skills: ["Flask", "FastAPI", "REST APIs", "JWT Authentication", "SQLAlchemy", "SQLite", "Swagger / OpenAPI"],
  },
  {
    group: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Render", "Docker"],
  },
];