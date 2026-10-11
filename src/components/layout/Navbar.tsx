import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

import { site, resume } from "../../data/site";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

const ANCHOR_IDS = ["skills", "experience", "contact"];

/**
 * Sticky, scroll-aware navigation with an accessible mobile menu.
 * Navigation definitions live in src/data/site.ts — nothing is hardcoded here.
 */
export function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Adjust state during render (React-recommended pattern): close the
     mobile menu whenever the route changes, including back/forward. */
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  /* Background/border appear once the page scrolls. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track the section currently in view for the active nav indicator (home anchors). */
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const sections = ANCHOR_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  /* Escape closes the menu; return focus to the toggle button afterwards. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleMenuKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      // Lightweight focus containment for the open mobile menu.
      const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const handleNavClick = (link: (typeof site.nav)[number]) => {
    if (link.anchor) {
      if (pathname === "/") {
        document.getElementById(link.sectionId!)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: link.sectionId } });
      }
    }
    setMenuOpen(false);
  };

  const isActive = (link: (typeof site.nav)[number]) => {
    if (link.anchor) return pathname === "/" && activeAnchor === link.sectionId;
    return pathname === link.to;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[var(--duration-base)] ${
        scrolled || menuOpen
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-site flex h-16 items-center justify-between gap-3">
        {/* Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-[0.18em]"
          aria-label={`${site.name} — home`}
        >
          <span className="text-paper">{site.logoMark}</span>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((link) => (
            <span key={link.label}>
              <button
                type="button"
                onClick={() => handleNavClick(link)}
                aria-current={isActive(link) ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive(link) ? "text-paper" : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
                {isActive(link) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-px h-px bg-accent"
                  />
                ) : null}
              </button>
            </span>
          ))}
          <div className="ml-3">
            <Button href={resume.path} variant="primary" size="sm" download>
              <FileText size={14} aria-hidden="true" />
              {resume.label}
            </Button>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="items-center gap-2 max-xs:hidden xs:flex md:hidden">
          <Button href={resume.path} variant="primary" size="sm" download>
            <FileText size={14} aria-hidden="true" />
            Résumé
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line-2 bg-graphite text-paper transition-colors hover:border-accent/60"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          onKeyDown={handleMenuKeyDown}
          className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-4">
            {site.nav.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                aria-current={isActive(link) ? "true" : undefined}
                className={`rounded-lg px-4 py-3 text-left text-base transition-colors ${
                  isActive(link) ? "bg-graphite text-accent" : "text-muted hover:bg-graphite hover:text-paper"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 px-2">
              <Button href={profile.resumePath} variant="primary" size="sm" download className="w-full">
                <FileText size={14} aria-hidden="true" />
                {resume.label}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}