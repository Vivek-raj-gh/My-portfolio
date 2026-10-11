import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { projectFilters, projects } from "../data/projects";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { ProjectGrid } from "../components/ProjectGrid";

/**
 * Filterable project gallery. Filters derive from the data layer and
 * genuinely filter — verified by test.
 */
export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.filter === filter)),
    [filter],
  );

  return (
    <Section ariaLabel="Projects" className="pt-28 sm:pt-36">
      <Eyebrow>Projects</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
        Projects & case studies.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Every project below exists as a public repository. The four featured projects
        include full case studies — problem, approach, evaluation, and limitations.
      </p>

      {/* Filter bar */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {projectFilters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                active
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line-2 bg-graphite text-muted hover:border-accent/50 hover:text-paper"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div
        key={filter}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
        className="mt-10"
      >
        <ProjectGrid projects={visible} />
      </motion.div>

      <p className="mt-8 font-mono text-xs text-faint">
        {visible.length} project{visible.length === 1 ? "" : "s"} · all repositories public on GitHub
      </p>
    </Section>
  );
}