import { skillGroups } from "../../data/skills";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

/**
 * Skills grouped by discipline. No percentage bars — proficiency is not
 * fabricated; the grouping itself communicates focus areas.
 */
export function SkillsSection() {
  return (
    <Section id="skills" ariaLabel="Technical skills" className="bg-ink-2">
      <SectionHeading
        eyebrow="Skills"
        title="A focused toolkit for applied AI/ML."
        description="Organized by discipline — every item here is something I can explain and use in a project, not a checklist decoration."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal
            key={group.group}
            delay={gi * 0.06}
            className="rounded-[var(--radius-card)] border border-line bg-graphite p-6"
          >
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}