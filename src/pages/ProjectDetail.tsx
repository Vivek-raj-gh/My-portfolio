import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FolderGit2 } from "lucide-react";

import { getProjectBySlug } from "../data/projects";
import { site } from "../data/site";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCover } from "../components/ProjectCover";
import { CaseStudyContent } from "../components/CaseStudyContent";
import { usePageMeta } from "../lib/usePageMeta";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  usePageMeta(
    project ? `${project.shortTitle} — ${site.name}` : "Project not found — " + site.name,
    project?.tagline,
  );

  if (!project) {
    return (
      <Section ariaLabel="Project not found" className="pt-28 sm:pt-36">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          This case study doesn't exist.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          The project may have been renamed or the link is outdated.
        </p>
        <div className="mt-8">
          <Button to="/projects" variant="primary">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to projects
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section ariaLabel={project.title} className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All projects
            </Link>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              {project.index ? (
                <span className="font-mono text-sm tracking-widest text-accent">/{project.index}</span>
              ) : null}
              <Eyebrow>{project.category}</Eyebrow>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.tagline}</p>
          </Reveal>

          {/* Cover hero */}
          <Reveal delay={0.08}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              <ProjectCover motif={project.cover} hero className="aspect-[16/8] sm:aspect-[21/9]" />
            </div>
          </Reveal>

          <div className="mt-14">
            <CaseStudyContent project={project} />
          </div>

          <div className="mx-auto mt-16 flex max-w-3xl items-center justify-between gap-4 border-t border-line pt-8">
            <Button to="/projects" variant="secondary">
              <ArrowLeft size={15} aria-hidden="true" />
              Back to projects
            </Button>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              <FolderGit2 size={14} aria-hidden="true" />
              repository
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}