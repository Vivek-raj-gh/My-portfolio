import { ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  steps: string[];
}

/**
 * Component-flow visualization for case studies.
 * Rendered purely with CSS — no images — and reads as a horizontal flow
 * on desktop, vertical on small screens.
 */
export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="contents">
          <div className="flex min-h-0 items-center rounded-lg border border-line-2 bg-graphite-2 px-3.5 py-2.5 font-mono text-[0.78rem] leading-snug text-paper sm:m-1">
            <span aria-hidden="true" className="mr-2 text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            {step}
          </div>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="flex items-center justify-center py-1 text-accent sm:mx-0.5 sm:py-0"
            >
              <ArrowRight size={15} className="rotate-90 sm:rotate-0" />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}