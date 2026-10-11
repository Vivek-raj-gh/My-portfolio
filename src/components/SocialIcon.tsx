import { Mail } from "lucide-react";

import type { SocialLink } from "../data/types";
import { BrandGitHub, BrandLinkedIn } from "./icons";

const iconMap = {
  github: BrandGitHub,
  linkedin: BrandLinkedIn,
  mail: Mail,
} as const;

interface SocialIconProps {
  link: SocialLink;
  size?: number;
  className?: string;
}

/** Accessible social icon link. URLs come exclusively from the data layer. */
export function SocialIcon({ link, size = 18, className }: SocialIconProps) {
  const Icon = iconMap[link.icon];
  return (
    <a
      href={link.url}
      aria-label={link.label}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border border-line-2 bg-graphite p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-accent ${className ?? ""}`}
    >
      <Icon size={size} className={link.icon === "mail" ? undefined : undefined} aria-hidden="true" />
    </a>
  );
}