import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

/** Consistent section heading block: eyebrow + display title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "flex flex-col items-center text-center" : ""}>
      <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.12]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}