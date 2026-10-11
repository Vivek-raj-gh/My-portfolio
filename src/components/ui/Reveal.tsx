import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds, used for staggered lists. */
  delay?: number;
  className?: string;
  /** Initial vertical offset in pixels. */
  y?: number;
}

/**
 * Fade-and-rise reveal helper. Respects the user's reduced-motion
 * preference through the app-wide MotionConfig.
 */
export function Reveal({ children, delay = 0, className, y = 28 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}