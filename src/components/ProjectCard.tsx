import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, PlayCircle } from "lucide-react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";

import type { Project } from "../data/types";
import { ProjectCover } from "./ProjectCover";
import { Tag } from "./ui/Tag";

interface ProjectCardProps {
  project: Project;
}

const MAX_CARD_TAGS = 4;

/**
 * Project card with a cover-reveal interaction:
 * - cover scales and shifts on hover/focus
 * - a mask slides up revealing metadata over the artwork
 * - an accent line grows under the title
 * On touch devices all content is visible immediately (no hover dependency).
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<CSSProperties>({});
  const caseStudyPath = `/projects/${project.slug}`;
  const tags = project.stack.slice(0, MAX_CARD_TAGS);
  const extraTags = Math.max(0, project.stack.length - MAX_CARD_TAGS);

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        transform: `perspective(900px) rotateY(${dx * 3.5}deg) rotateX(${-dy * 3.5}deg)`,
      });
    }
  };

  const resetTilt = () => setTilt({});

  const actions = (
    <div className="mt-5 flex items-center gap-2.5">
      {project.featured ? (
        <Link
          to={caseStudyPath}
          className="group/act inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[0.8rem] font-medium text-accent-ink transition-colors hover:bg-accent-dim"
        >
          View Case Study
          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover/act:translate-x-0.5 group-hover/act:-translate-y-0.5" />
        </Link>
      ) : (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/act inline-flex items-center gap-1.5 rounded-full bg-graphite-3 px-4 py-2 text-[0.8rem] font-medium text-paper transition-colors hover:border hover:border-accent/60 hover:bg-graphite-2"
        >
          View on GitHub
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
      <div className="ml-auto flex items-center gap-2">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.shortTitle} — GitHub repository`}
          className="inline-flex size-9 items-center justify-center rounded-full border border-line-2 text-muted transition-colors hover:border-accent/60 hover:text-accent"
        >
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.shortTitle} — live demo`}
            className="inline-flex size-9 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors hover:bg-accent/10"
          >
            <PlayCircle size={15} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      style={{ ...tilt, transition: "transform 0.35s var(--ease-out-soft)" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="group h-full"
    >
      <article
        className={`flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-graphite transition-colors duration-[var(--duration-base)] hover:border-accent/50 ${
          project.featured ? "" : ""
        }`}
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Link
            to={project.featured ? caseStudyPath : project.repoUrl}
            aria-label={
              project.featured
                ? `${project.shortTitle} — open case study`
                : `${project.shortTitle} — GitHub repository`
            }
            className="block h-full w-full"
            {...(project.featured ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]">
              <ProjectCover motif={project.cover} className="h-full w-full" />
            </div>
          </Link>

          {/* Index badge */}
          {project.index ? (
            <span className="absolute left-3.5 top-3.5 rounded-full border border-accent/30 bg-ink/70 px-2.5 py-1 font-mono text-[0.65rem] tracking-widest text-accent backdrop-blur-sm">
              {project.index}
            </span>
          ) : null}

          {/* Category label over the cover */}
          <span className="absolute bottom-3.5 left-3.5 rounded-full border border-line-2 bg-ink/75 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted backdrop-blur-sm">
            {project.category}
          </span>

          {/* Reveal mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 translate-y-full bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold tracking-tight text-paper">
            <Link
              to={project.featured ? caseStudyPath : project.repoUrl}
              {...(project.featured ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="relative inline-block"
            >
              {project.shortTitle}
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:w-full"
              />
            </Link>
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {extraTags > 0 ? <Tag>+{extraTags}</Tag> : null}
          </div>

          {actions}
        </div>
      </article>
    </div>
  );
}