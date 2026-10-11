import { education } from "../../data/education";
import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  detail: string[];
  kind: "work" | "education";
}

function TimelineItem({ title, organization, period, detail, kind }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Rail dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 flex size-3 items-center justify-center rounded-full border ${
          kind === "work" ? "border-accent/70 bg-accent/20" : "border-line-2 bg-graphite-2"
        }`}
      >
        <span className={`size-1.5 rounded-full ${kind === "work" ? "bg-accent" : "bg-muted"}`} />
      </span>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-lg font-semibold text-paper">{title}</h3>
        <span className="font-mono text-xs tracking-wide text-accent">{organization}</span>
        {period ? <span className="font-mono text-xs text-faint">{period}</span> : null}
      </div>
      {detail.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {detail.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-0.5 font-mono text-accent">
                ▸
              </span>
              {d}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/**
 * Experience + education rendered as a single editorial timeline.
 * Dates render only when present in the data layer.
 */
export function TimelineSection() {
  return (
    <Section id="experience" ariaLabel="Experience and education" className="bg-ink-2">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & education."
        description="An internship focused on applied ML workflows, backed by an academic foundation in AI and Data Science."
      />
      <div className="relative mt-12 space-y-10 sm:max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-accent/60 via-line-2 to-transparent"
        />
        <Reveal>
          {experience.map((entry) => (
            <TimelineItem
              key={entry.organization + entry.title}
              title={entry.title}
              organization={entry.organization}
              period={entry.period}
              detail={entry.detail}
              kind="work"
            />
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          {education.map((entry) => (
            <TimelineItem
              key={entry.institution}
              title={entry.degree}
              organization={entry.institution}
              period={entry.period}
              detail={[entry.detail]}
              kind="education"
            />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}