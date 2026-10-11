import { ArrowRight } from "lucide-react";

import { featuredProjects } from "../../data/projects";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ProjectGrid } from "../ProjectGrid";

/** Home-page selection of the four flagship projects. */
export function FeaturedProjects() {
  return (
    <Section id="featured-projects" ariaLabel="Featured projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Featured work"
          title="Selected projects, explained end to end."
          description="Four case studies covering anomaly detection, recommendation systems, and backend API engineering — with evidence, evaluation, and honest limitations."
        />
        <RevealButton />
      </div>
      <div className="mt-10">
        <ProjectGrid projects={featuredProjects} />
      </div>
    </Section>
  );
}

function RevealButton() {
  return (
    <span className="shrink-0">
      <Button to="/projects" variant="secondary">
        All projects
        <ArrowRight size={15} aria-hidden="true" />
      </Button>
    </span>
  );
}