import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

import { profile, profileSocials } from "../../data/profile";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { SocialIcon } from "../SocialIcon";

/** Decorative "data field" visual panel for the hero — abstract, not a screenshot. */
function HeroVisual() {
  const bars = [42, 68, 38, 82, 55, 74, 46, 88, 60];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-graphite/60 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,color-mix(in_oklab,var(--color-accent)_9%,transparent),transparent_60%)]" />

      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
          <span>~/ml-workspace</span>
          <span className="text-accent">● live</span>
        </div>

        {/* Animated nodes */}
        <div className="relative mt-6 aspect-[16/9]">
          <svg viewBox="0 0 240 130" className="h-full w-full" aria-hidden="true">
            <g stroke="var(--color-line-2)" strokeWidth="0.8">
              <line x1="42" y1="30" x2="120" y2="55" />
              <line x1="120" y1="55" x2="200" y2="28" />
              <line x1="120" y1="55" x2="120" y2="100" />
              <line x1="42" y1="30" x2="120" y2="100" />
              <line x1="200" y1="28" x2="120" y2="100" />
              <line x1="42" y1="30" x2="200" y2="28" />
            </g>
            {[
              [42, 30],
              [120, 55],
              [200, 28],
              [120, 100],
            ].map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="var(--color-graphite-2)"
                stroke={i === 1 ? "var(--color-accent)" : "var(--color-line-2)"}
                strokeWidth="1.6"
                animate={i === 1 ? { r: [4, 6, 4], opacity: [1, 0.5, 1] } : undefined}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>

        {/* Bar chart strip */}
        <div className="mt-4 flex h-20 items-end gap-2 border-t border-line pt-4">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="w-full rounded-sm bg-accent/70"
              style={{ height: `${h}%` }}
              initial={{ opacity: 0.25 }}
              animate={{ opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {["collaborative filtering", "anomaly detection", "REST APIs", "model evaluation"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-line-2 px-2.5 py-1 font-mono text-[0.62rem] tracking-wide text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)] opacity-70" />
        <div className="absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="container-site relative grid gap-10 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-40">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}>
            <Eyebrow>{profile.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            Turning data into{" "}
            <span className="text-accent-gradient">useful intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.19, 1, 0.22, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mt-6 font-mono text-sm text-faint">{profile.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {profile.positioning}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button to="/projects" variant="primary" size="lg">
              Explore Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href={profile.resumePath} variant="secondary" size="lg" download>
              View Résumé
              <ArrowDown size={16} aria-hidden="true" />
            </Button>
            <div className="ml-1 flex items-center gap-2">
              {profileSocials
                .filter((s) => s.icon !== "mail")
                .map((s) => (
                  <SocialIcon key={s.label} link={s} />
                ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="hidden sm:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}