import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Cpu, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Activity
} from 'lucide-react';

const PROTOCOL_PHASES = [
  {
    id: '01',
    phase: 'Phase 01',
    name: 'Architectural Discovery',
    tagline: 'Deconstructing constraints into deterministic data pipelines',
    duration: 'Sprint 01-02',
    icon: GitBranch,
    accent: '#8B5CF6',
    terminalCmd: 'pnpm run audit:system-topology',
    metrics: { label: 'Audit Density', value: '100% Scope Lock' },
    deliverables: [
      'Zero-knowledge threat modeling & state hierarchy diagrams',
      'Bundle footprint limit constraint matrix (<45KB initial chunk)',
      'Sub-millisecond data-layer schema definitions'
    ],
    logOutput: [
      '[INIT] Auditing existing network latency baseline...',
      '[OK] Target render loop scheduled: 120 FPS bound',
      '[OK] Edge caching topology registered across 380+ PoPs'
    ]
  },
  {
    id: '02',
    phase: 'Phase 02',
    name: 'Computational Spatial UI',
    tagline: 'Synthesizing layout physics and precision mathematical motion',
    duration: 'Sprint 03-05',
    icon: Layers,
    accent: '#06B6D4',
    terminalCmd: 'pnpm run compile:motion-tokens',
    metrics: { label: 'Motion Fidelity', value: 'Spring Damping 28' },
    deliverables: [
      'Tailwind fluid typographic & layout token scale generation',
      'Dynamic island navigation & gesture-driven viewports',
      'Hardware-accelerated micro-interactions (zero reflow/repaint)'
    ],
    logOutput: [
      '[SYSTEM] Compiling mass-spring-damper motion vectors...',
      '[OK] Layout shifts (CLS) locked at 0.000',
      '[OK] Touch hit-test targets padded to 48px standard'
    ]
  },
  {
    id: '03',
    phase: 'Phase 03',
    name: 'Shader & Canvas Synthesis',
    tagline: 'Custom GLSL fragment shaders engineered for browser edge',
    duration: 'Sprint 06-08',
    icon: Cpu,
    accent: '#EC4899',
    terminalCmd: 'glslangValidator -V core.frag -o core.spv',
    metrics: { label: 'Shader Pass Time', value: '1.2ms / Frame' },
    deliverables: [
      'Custom WebGL 2.0 fragment raymarching and bloom kernels',
      'OffscreenCanvas worker execution for multi-threaded physics',
      'Graceful WebGPU progressive enhancement pipeline'
    ],
    logOutput: [
      '[GLSL] Linking raymarch SDF lighting program...',
      '[OK] VAO buffer instancing: 50,000 vertices at 120hz',
      '[OK] WebGL context loss recovery daemon active'
    ]
  },
  {
    id: '04',
    phase: 'Phase 04',
    name: 'Planetary Edge Deployment',
    tagline: 'Deploying sub-15ms worldwide with automated Lighthouse audits',
    duration: 'Sprint 09-10',
    icon: Globe2,
    accent: '#10B981',
    terminalCmd: 'turbo run deploy --filter=@kinesis/edge',
    metrics: { label: 'Global Edge Ingest', value: '<18ms Worldwide' },
    deliverables: [
      'Multi-region V8 isolate edge routing with zero cold-starts',
      'Strict Content Security Policy (CSP) & cryptographic headers',
      'Automated 100/100 Lighthouse benchmark CI/CD gatekeeper'
    ],
    logOutput: [
      '[EDGE] Broadcasting immutable assets to 380 global nodes...',
      '[OK] Performance score locked: 100/100 Lighthouse',
      '[SUCCESS] Production deployment verified on custom domain'
    ]
  }
];

export default function Methodology() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PROTOCOL_PHASES[activePhaseIndex];
  const IconComponent = activePhase.icon;

  return (
    <section id="methodology" className="relative py-20 sm:py-32 2xl:py-44 px-3.5 sm:px-6 lg:px-12 2xl:px-24">
      {/* Dynamic Ambient Background Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] 2xl:w-[900px] 3xl:w-[1200px] h-[500px] 2xl:h-[900px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Fluid Ultrawide Container up to 2200px */}
      <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto space-y-10 sm:space-y-16 2xl:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8 2xl:pb-12">
          <div className="space-y-2 sm:space-y-3 2xl:space-y-4 max-w-2xl 2xl:max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] 2xl:text-xs font-mono text-cyan-400">
              <Activity className="w-3 h-3 2xl:w-4 2xl:h-4" />
              <span>EXECUTION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black uppercase tracking-tight text-white leading-none">
              Rigorous <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                Engineering Protocol.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm 2xl:text-lg 3xl:text-xl text-slate-400 max-w-md 2xl:max-w-xl leading-relaxed font-medium">
            We reject aesthetic guesswork. Every project moves through four battle-tested phases designed to eliminate technical debt before writing a single line of client UI.
          </p>
        </div>

        {/* Responsive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-14 items-start">
          
          {/* Left Column: Phase Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 2xl:space-y-6">
            {PROTOCOL_PHASES.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;
              const PhaseIcon = phase.icon;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 2xl:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex items-start gap-4 2xl:gap-6 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'border-white/20 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
                      : 'border-white/[0.06] bg-white/[0.015] hover:border-white/[0.12] hover:bg-white/[0.03]'
                  }`}
                  style={{
                    borderColor: isSelected ? `${phase.accent}50` : undefined,
                  }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePhaseStrip"
                      className="absolute left-0 top-0 bottom-0 w-1.5 2xl:w-2 rounded-r-full"
                      style={{ backgroundColor: phase.accent }}
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}

                  <div 
                    className="w-10 h-10 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 rounded-xl 2xl:rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: isSelected ? `${phase.accent}20` : 'rgba(255,255,255,0.03)',
                      color: isSelected ? phase.accent : '#94A3B8'
                    }}
                  >
                    <PhaseIcon className="w-5 h-5 2xl:w-7 2xl:h-7" />
                  </div>

                  <div className="space-y-1 2xl:space-y-2 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-xs 2xl:text-sm font-mono font-bold tracking-wider" style={{ color: isSelected ? phase.accent : '#64748B' }}>
                        {phase.phase} • {phase.duration}
                      </span>
                      <span className="text-[11px] 2xl:text-sm font-mono text-slate-400">{phase.id}</span>
                    </div>

                    <h3 className="text-sm sm:text-base 2xl:text-xl 3xl:text-2xl font-black text-white truncate">
                      {phase.name}
                    </h3>

                    <p className="text-xs 2xl:text-sm text-slate-400 line-clamp-1">
                      {phase.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Inspector Viewport (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] p-5 sm:p-8 2xl:p-12 backdrop-blur-2xl space-y-6 sm:space-y-8 2xl:space-y-10 shadow-2xl"
                style={{
                  borderColor: `${activePhase.accent}30`
                }}
              >
                {/* Header Strip with Metrics Stamp */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3 2xl:gap-4">
                    <div 
                      className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${activePhase.accent}20`, color: activePhase.accent }}
                    >
                      <IconComponent className="w-5 h-5 2xl:w-7 2xl:h-7" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg 2xl:text-2xl font-black text-white">{activePhase.name}</h4>
                      <p className="text-xs 2xl:text-sm text-slate-400 font-mono">{activePhase.duration}</p>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 2xl:px-5 2xl:py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                    <span className="text-[10px] 2xl:text-xs font-mono text-slate-400 uppercase">{activePhase.metrics.label}:</span>
                    <span className="text-xs 2xl:text-sm font-mono font-black text-white" style={{ color: activePhase.accent }}>
                      {activePhase.metrics.value}
                    </span>
                  </div>
                </div>

                {/* Core Deliverables */}
                <div className="space-y-3 2xl:space-y-4">
                  <span className="text-xs 2xl:text-sm font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald-400" />
                    Guaranteed Phase Deliverables
                  </span>
                  <div className="space-y-2.5 2xl:space-y-3">
                    {activePhase.deliverables.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 p-3.5 2xl:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                      >
                        <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 flex-shrink-0 mt-0.5" style={{ color: activePhase.accent }} />
                        <span className="text-xs sm:text-sm 2xl:text-base text-slate-200 leading-relaxed font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Verification Terminal */}
                <div className="p-4 sm:p-5 2xl:p-7 rounded-2xl bg-[#04050B] border border-white/[0.08] font-mono space-y-3 2xl:space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06] text-[10px] 2xl:text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="ml-2">kinesis-telemetry/daemon.sh</span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  <div className="text-[11px] sm:text-xs 2xl:text-sm text-slate-400">
                    <span className="text-slate-400">$ </span>
                    <span className="text-white font-bold">{activePhase.terminalCmd}</span>
                  </div>

                  <div className="space-y-1 pt-1 text-[10px] sm:text-[11px] 2xl:text-xs leading-relaxed">
                    {activePhase.logOutput.map((log, i) => (
                      <p key={i} className={log.includes('[OK]') || log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-400'}>
                        {log}
                      </p>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}