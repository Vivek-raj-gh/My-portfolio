import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";

import { profile, profileSocials } from "../../data/profile";
import { resume } from "../../data/site";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/**
 * Contact section — a working email action, phone, socials, and résumé.
 * (No fake contact form: mail actions open the visitor's mail client.)
 */
export function ContactSection() {
  return (
    <Section id="contact" ariaLabel="Contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-60"
      />
      <div className="relative">
        <SectionHeading
          eyebrow="Contact"
          title={profile.contact.heading}
          description={profile.contact.copy}
          align="center"
        />

        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-2xl border border-line bg-graphite px-6 py-4 transition-colors hover:border-accent/60"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail size={18} aria-hidden="true" />
            </span>
            <span className="font-mono text-sm text-paper sm:text-base">{profile.email}</span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </a>

          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} aria-hidden="true" className="text-accent" />
              {profile.phone}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {profileSocials.map((s) => (
              <Button
                key={s.label}
                href={s.url}
                variant="secondary"
                size="sm"
                external={s.icon !== "mail"}
              >
                {s.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Button>
            ))}
            <Button href={resume.path} variant="primary" size="sm" download>
              <FileText size={14} aria-hidden="true" />
              {resume.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}