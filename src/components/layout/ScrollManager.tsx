import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollState {
  scrollTo?: string;
}

/**
 * Route-change scroll behavior:
 * - If navigation carried a "scrollTo" section id, smooth-scroll to it
 *   (used by navbar anchor links when coming from another route).
 * - Otherwise reset to the top of the page.
 */
export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const state = (location.state ?? {}) as ScrollState;

    if (state.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Clear the state so a later manual re-navigation doesn't repeat it.
        window.history.replaceState({}, "");
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.state]);

  return null;
}