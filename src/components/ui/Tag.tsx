import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

/** Mono pill used for tech stacks and filter chips. */
export function Tag({ children, active, className }: TagProps) {
  const state = active
    ? "border-accent/60 bg-accent/10 text-accent"
    : "border-line-2 bg-graphite text-muted";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.68rem] tracking-wide transition-colors ${state} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}