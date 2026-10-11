import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Mono, uppercase technical label with an accent tick. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted ${className ?? ""}`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}