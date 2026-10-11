import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Loader } from "./components/layout/Loader";
import { ScrollManager } from "./components/layout/ScrollManager";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

/** Reduced-motion users skip the entrance loader entirely. */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}