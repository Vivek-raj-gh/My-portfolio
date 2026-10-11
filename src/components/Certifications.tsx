import { Award } from "lucide-react";

import { certifications } from "../data/certifications";
import { Section } from "./ui/Section";

/** Certifications grid — sourced from the résumé/data layer. */
export function Certifications() {
  return (
    <Section id="certifications" ariaLabel="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-graphite p-5 transition-colors hover:border-accent/40"
            style={{ transitionDelay: `${i * 20}ms` }}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Award size={18} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-paper">{cert.name}</h3>
              <p className="mt-0.5 font-mono text-xs tracking-wide text-muted">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}