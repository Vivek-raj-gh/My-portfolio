import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * Standard full-width section wrapper with the shared site container.
 * Content-only sections get the container inline instead.
 */
export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={`py-16 sm:py-20 md:py-24 ${className ?? ""}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}