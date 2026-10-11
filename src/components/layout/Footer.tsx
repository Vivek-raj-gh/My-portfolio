import { Link, useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";

import { site, socialLinks } from "../../data/site";
import { SocialIcon } from "../SocialIcon";

/**
 * Site footer — name, descriptor, socials, dynamic copyright year,
 * and a back-to-top control.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const handleAnchor = (sectionId: string) => {
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="mt-8 border-t border-line bg-ink-2">
      <div className="container-site py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="font-mono text-sm font-medium tracking-[0.18em] text-paper">
              {site.logoMark}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.footerDescriptor}</p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {site.nav.map((link) => (
              <Link
                key={link.label}
                to={link.anchor ? "/" : link.to}
                onClick={() => {
                  if (link.anchor) handleAnchor(link.sectionId!);
                }}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} link={s} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-faint transition-colors hover:text-accent"
            >
              <ArrowUp size={13} aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-10 hairline pt-6 text-xs text-faint">
          <p>
            © {year} {site.copyrightHolder}. Built with React, TypeScript & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}