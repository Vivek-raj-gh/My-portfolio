import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

/**
 * Brief home-page About section (full narrative lives on /about).
 */
export function AboutSection() {
  return (
    <Section id="about" ariaLabel="About">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title={profile.about.heading}
          description={profile.about.paragraphs[0]}
        />
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="text-[1.05rem] leading-relaxed text-muted">{profile.about.paragraphs[1]}</p>
          <ul className="mt-6 space-y-3">
            {profile.about.commitments.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}