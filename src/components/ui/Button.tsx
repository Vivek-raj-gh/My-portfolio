import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Internal route path — renders a react-router Link. */
  to?: string;
  /** External URL, mailto:, or asset path — renders an anchor. */
  href?: string;
  /** Force the anchor to open in a new tab with safe rel attributes. */
  external?: boolean;
  /** Show a download hint for asset links. */
  download?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-dim active:scale-[0.98] shadow-[0_0_0_0_transparent] hover:shadow-[0_0_28px_-6px_color-mix(in_oklab,var(--color-accent)_65%,transparent)]",
  secondary: "border border-line-2 bg-graphite text-paper hover:border-accent/60 hover:bg-graphite-3",
  ghost: "text-muted hover:text-paper",
  "outline-accent": "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/70",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] whitespace-nowrap";

/**
 * Button / link primitive. All hrefs must come from the data layer —
 * the ESLint no-restricted-syntax rule enforces this.
 */
export function Button({
  children,
  variant = "secondary",
  size = "md",
  className,
  to,
  href,
  external,
  download,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${styles[variant]} ${sizes[size]} ${className ?? ""}`;

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href ?? "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}