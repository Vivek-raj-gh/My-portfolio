import { Link } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { usePageMeta } from "../lib/usePageMeta";
import { site } from "../data/site";

export default function NotFound() {
  usePageMeta(`Page not found — ${site.name}`);
  return (
    <Section ariaLabel="Page not found" className="pt-28 sm:pt-36">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found.</h1>
      <p className="mt-4 max-w-xl text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/" variant="primary">
          Back home
        </Button>
        <Link to="/projects" className="text-sm text-muted underline-offset-4 hover:text-accent hover:underline">
          Browse projects
        </Link>
      </div>
    </Section>
  );
}