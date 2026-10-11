import { ExternalLink, PlayCircle, ArrowUpRight } from "lucide-react";

import type { Project } from "../data/types";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Tag } from "./ui/Tag";
import { Reveal } from "./ui/Reveal";

function SectionBlock({
  index,
  heading,
  paragraphs = [],
  bullets,
}: {
  index: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}) {
  return (
    <Reveal>
      <div className="mt-14 first:mt-0">
        <div className="flex items-baseline gap-3">
          <span aria-hidden="true" className="font-mono text-xs tracking-widest text-accent">
            {index}
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper">
            {heading}
          </h2>
        </div>
        <div className="mt-4 space-y-3">
          {paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
          {bullets ? (
            <ul className="mt-4 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-muted">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Reusable case-study body. Maps the structured project content from
 * the data layer into an editorial section layout.
 */
export function CaseStudyContent({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  const sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    diagram?: boolean;
  }> = [
    {
      heading: "Overview",
      paragraphs: [cs.problem, ...cs.motivation],
    },
    { heading: "Data & input", paragraphs: cs.data },
    { heading: "System workflow", paragraphs: cs.workflow },
    { heading: "Architecture", paragraphs: cs.architecture, diagram: true },
    { heading: "Why this stack", paragraphs: cs.stackRationale },
    { heading: "Implementation", paragraphs: cs.implementation },
    { heading: "Evaluation", paragraphs: cs.evaluation },
    {
      heading: "Limitations",
      paragraphs: cs.limitations,
      bullets: undefined,
    },
    { heading: "Planned improvements", paragraphs: cs.improvements },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      {/* Meta row */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {project.statusNote ? (
          <p className="mt-4 rounded-lg border border-accent/25 bg-accent/[0.06] px-4 py-3 text-sm leading-relaxed text-muted">
            <span className="font-mono text-accent">note — </span>
            {project.statusNote}
          </p>
        ) : null}
      </Reveal>

      {sections.map((s, i) => (
        <div key={s.heading}>
          <SectionBlock
            index={String(i + 1).padStart(2, "0")}
            heading={s.heading}
            paragraphs={s.paragraphs}
            bullets={s.bullets}
          />
          {s.diagram ? <ArchitectureDiagram steps={cs.architecture} /> : null}
        </div>
      ))}

      {/* Repository / demo actions */}
      <Reveal>
        <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-line pt-8">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dim"
          >
            View repository
            <ExternalLink size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              <PlayCircle size={15} aria-hidden="true" />
              Live demo
            </a>
          ) : null}
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-faint">
            {project.category}
            <ArrowUpRight size={12} aria-hidden="true" />
          </span>
        </div>
      </Reveal>
    </div>
  );
}