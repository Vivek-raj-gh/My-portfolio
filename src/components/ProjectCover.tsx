import type { ReactElement } from "react";
import type { CoverMotif } from "../data/types";

/**
 * Decorative technical cover art. These are abstract visual representations
 * of each project's theme — intentionally NOT screenshots, and never a claim
 * of functionality.
 */

interface CoverProps {
  motif: CoverMotif;
  className?: string;
  /** Whether to render the full-size hero version (larger, more detail). */
  hero?: boolean;
}

const LINE = "var(--color-line-2)";
const DIM = "var(--color-muted)";

function Signals() {
  return (
    <svg viewBox="0 0 220 88" className="h-full w-full" preserveAspectRatio="none">
      <path
        d="M0 60 L28 60 L38 44 L56 66 L74 34 L92 58 L108 58 L118 72 L132 26 L150 56 L168 50 L188 60 L220 60"
        fill="none"
        stroke={DIM}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 60 L28 60 L38 44 L56 66 L74 34 L92 58"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132 26 L150 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="132" cy="26" r="3" fill="currentColor" />
      <circle cx="74" cy="34" r="3" fill="currentColor" />
      <line x1="0" y1="64" x2="220" y2="64" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

function Graph() {
  const nodes: Array<[number, number]> = [
    [8, 44],
    [52, 18],
    [60, 62],
    [106, 36],
    [152, 16],
    [160, 66],
    [208, 44],
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
  ];
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={i % 2 === 0 ? LINE : DIM}
          strokeWidth="1.1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 3 ? 5 : 3.4}
          fill="var(--color-graphite-2)"
          stroke={i === 3 ? "currentColor" : LINE}
          strokeWidth="1.6"
        />
      ))}
      <circle cx={106} cy={36} r={1.8} fill="currentColor" />
    </svg>
  );
}

function Products() {
  const card = (x: number, y: number, w: number) => (
    <g>
      <rect x={x} y={y} width={w} height={34} rx={4} fill="var(--color-graphite-2)" stroke={LINE} strokeWidth="1.2" />
      <rect x={x + 8} y={y + 8} width={w - 16} height={7} rx={2} fill="currentColor" opacity={0.85} />
      <line x1={x + 8} y1={y + 20} x2={x + w - 8} y2={y + 20} stroke={DIM} strokeWidth="2" strokeLinecap="round" />
      <line x1={x + 8} y1={y + 26} x2={x + w - 22} y2={y + 26} stroke={DIM} strokeWidth="2" strokeLinecap="round" opacity={0.6} />
    </g>
  );
  return (
    <svg viewBox="0 0 220 80" className="h-full w-full" preserveAspectRatio="none">
      {card(10, 22, 52)}
      {card(84, 10, 52)}
      {card(158, 24, 52)}
      <path d="M62 46 C 80 40, 84 38, 84 34" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M136 34 C 142 38, 152 44, 158 46" fill="none" stroke="currentColor" strokeWidth="1.3" opacity={0.7} />
      <circle cx={66} cy={44} r={2} fill="currentColor" />
      <circle cx={136} cy={36} r={2} fill="currentColor" />
    </svg>
  );
}

function Api() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      {[
        [14, 30, 56],
        [82, 30, 56],
        [150, 22, 56],
      ].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={34} rx={5} fill="var(--color-graphite-2)" stroke={i === 2 ? "currentColor" : LINE} strokeWidth="1.3" />
          {i === 2 ? <circle cx={x + 8} cy={y - 6} r={4} fill="currentColor" /> : null}
          <line x1={x + 10} y1={y + 12} x2={x + w - 10} y2={y + 12} stroke={DIM} strokeWidth="2.2" strokeLinecap="round" />
          <line x1={x + 10} y1={y + 20} x2={x + w - 18} y2={y + 20} stroke={DIM} strokeWidth="2.2" strokeLinecap="round" opacity={0.6} />
        </g>
      ))}
      <path d="M70 47 H82 M138 47 H150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M150 40 V54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M158 40 L150 32 L142 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Auth() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <path
        d="M110 8 L152 20 V46 C152 62 136 70 110 76 C84 70 68 62 68 46 V20 Z"
        fill="var(--color-graphite-2)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="110" cy="42" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="108" y="42" width="4" height="12" rx="2" fill="currentColor" />
      <path d="M24 66 L60 30 M72 66 L100 36" stroke={LINE} strokeWidth="1.2" />
    </svg>
  );
}

function Travel() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <path
        d="M12 60 C 60 14, 120 78, 208 26"
        fill="none"
        stroke={DIM}
        strokeWidth="1.3"
        strokeDasharray="3 6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="60" r="5" fill="var(--color-graphite-2)" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="96" cy="46" r="4" fill="var(--color-graphite-2)" stroke={LINE} strokeWidth="1.6" />
      <circle cx="172" cy="34" r="4" fill="var(--color-graphite-2)" stroke={LINE} strokeWidth="1.6" />
      <circle cx="208" cy="26" r="5.5" fill="currentColor" />
    </svg>
  );
}

function Chat() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <path
        d="M16 46 h96 v28 q0 6-6 6 h-60 l-22 12 v-10 q-10-4-10-16 v-20 q0-6 6-6 z"
        fill="var(--color-graphite-2)"
        stroke={LINE}
        strokeWidth="1.3"
      />
      <path
        d="M108 18 h80 q6 0 6 6 v18 q0 6-6 6 h-62 l-16 9 v-8 q-8-3-8-9 v-16 q0-6 6-6 z"
        fill="var(--color-graphite-2)"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <line x1="34" y1="62" x2="76" y2="62" stroke={DIM} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="126" y1="40" x2="164" y2="40" stroke={DIM} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function Report() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <rect x="30" y="8" width="60" height="68" rx="4" fill="var(--color-graphite-2)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="80" y2="20" stroke={DIM} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="40" y1="30" x2="72" y2="30" stroke={DIM} strokeWidth="2.4" strokeLinecap="round" opacity={0.7} />
      <line x1="40" y1="40" x2="80" y2="40" stroke={DIM} strokeWidth="2.4" strokeLinecap="round" opacity={0.7} />
      <rect x="112" y="8" width="76" height="68" rx="4" fill="var(--color-graphite-2)" stroke={LINE} strokeWidth="1.5" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M122 56 l14 -14 l10 8 l12 -18 l10 12 l16 -10" fill="none" />
        <line x1="122" y1="66" x2="176" y2="66" />
      </g>
    </svg>
  );
}

function Weather() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="32" y1="18" x2="32" y2="8" />
        <line x1="20" y1="28" x2="13" y2="21" />
        <line x1="46" y1="28" x2="53" y2="21" />
        <line x1="26" y1="12" x2="20" y2="5" />
        <line x1="42" y1="12" x2="48" y2="5" />
      </g>
      <circle cx="33" cy="34" r="9" fill="var(--color-graphite-2)" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M92 54 a14 14 0 0 1 0-28 a18 18 0 0 1 35 4 a14 14 0 0 1 13 20 a12 12 0 0 1 2 4 z"
        fill="var(--color-graphite-2)"
        stroke={LINE}
        strokeWidth="1.4"
      />
      <line x1="150" y1="42" x2="150" y2="30" stroke={DIM} strokeWidth="1.2" />
      <line x1="158" y1="50" x2="168" y2="44" stroke={DIM} strokeWidth="1.2" />
      <line x1="160" y1="62" x2="172" y2="62" stroke={DIM} strokeWidth="1.2" />
    </svg>
  );
}

function Spam() {
  return (
    <svg viewBox="0 0 220 84" className="h-full w-full" preserveAspectRatio="none">
      <g>
        <path
          d="M40 22 h96 q6 0 6 6 v28 q0 6-6 6 h-96 q-6 0-6-6 v-28 q0-6 6-6 z"
          fill="var(--color-graphite-2)"
          stroke={LINE}
          strokeWidth="1.4"
        />
        <path d="M44 26 L90 52 L136 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <circle cx="170" cy="52" r="16" fill="var(--color-graphite-2)" stroke="currentColor" strokeWidth="1.6" />
      <line x1="170" y1="44" x2="170" y2="54" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="170" cy="60" r="1.8" fill="currentColor" />
    </svg>
  );
}

const motifs: Record<CoverMotif, () => ReactElement> = {
  signals: Signals,
  graph: Graph,
  products: Products,
  api: Api,
  auth: Auth,
  travel: Travel,
  chat: Chat,
  report: Report,
  weather: Weather,
  spam: Spam,
};

export function ProjectCover({ motif, className, hero = false }: CoverProps) {
  const Art = motifs[motif];
  return (
    <div
      className={`relative overflow-hidden bg-ink-2 text-accent ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Technical grid backdrop */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_60%)]" />
      <div className={`relative h-full w-full ${hero ? "p-8 sm:p-10" : "p-5"} opacity-90`}>
        <Art />
      </div>
    </div>
  );
}