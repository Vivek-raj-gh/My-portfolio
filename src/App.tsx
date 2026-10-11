import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Loader } from "./components/layout/Loader";
import { ScrollManager } from "./components/layout/ScrollManager";

import Home from "./pages/Home";

/* Route-level code splitting: secondary routes load on demand. */
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Reduced-motion users skip the entrance loader entirely. */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Minimal, non-blank fallback while a lazy route chunk loads. */
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-label="Loading">
      <span className="size-2 animate-pulse rounded-full bg-accent" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(!prefersReducedMotion());

  useEffect(() => {
    if (!loading) return;
    // Brief, time-based welcome — no fake progress. Double safety timers
    // guarantee the loader can never outstay its welcome.
    const done = window.setTimeout(() => setLoading(false), 950);
    const failsafe = window.setTimeout(() => setLoading(false), 1600);
    return () => {
      window.clearTimeout(done);
      window.clearTimeout(failsafe);
    };
  }, [loading]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>{loading ? <Loader visible={loading} /> : null}</AnimatePresence>

      <Navbar />
      <ScrollManager />

      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}