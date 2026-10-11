import { profile } from "../data/profile";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/Eyebrow";
import { TimelineSection } from "../components/sections/TimelineSection";
import { Certifications } from "../components/Certifications";
import { ContactSection } from "../components/sections/ContactSection";

export default function About() {
  return (
    <>
      <Section ariaLabel="About" className="pt-28 sm:pt-36">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {profile.positioning}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5">
              {profile.about.paragraphs.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-paper/90">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-2">
            <div className="rounded-[var(--radius-card)] border border-line bg-graphite p-6">
              <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Trajectory
              </h2>
              <ul className="mt-4 space-y-3">
                {profile.about.commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <TimelineSection />
      <Certifications />
      <ContactSection />
    </>
  );
}