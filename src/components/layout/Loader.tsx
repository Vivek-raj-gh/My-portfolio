import { motion } from "motion/react";
import { site } from "../../data/site";

interface LoaderProps {
  visible: boolean;
}

/**
 * Brief non-blocking entrance loader.
 * - Geometric/typographic mark with a thin accent line.
 * - No fake percentage — the animation is time-based only.
 * - Unmounts via AnimatePresence; an onDone fallback in App guarantees
 *   it can never stay visible if animation fails.
 */
export function Loader({ visible }: LoaderProps) {
  return (
    <motion.div
      key="loader"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <motion.p
        className="font-mono text-xs uppercase tracking-[0.35em] text-muted"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        {site.logoMark}
      </motion.p>

      <div className="mt-5 h-px w-40 overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full w-1/2 bg-accent"
          initial={{ x: "-120%" }}
          animate={{ x: "240%" }}
          transition={{ duration: 0.8, ease: "easeInOut", repeat: 1 }}
        />
      </div>
    </motion.div>
  );
}