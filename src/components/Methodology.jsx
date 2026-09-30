import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Cpu, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Pause,
  Play
} from 'lucide-react';

const PROTOCOL_PHASES = [
  {
    id: '01',
    phase: 'Phase 01',
    name: 'Architectural Discovery',
    tagline: 'Deconstructing constraints into deterministic pipelines',
    painPoint: 'Arbitrary Spec Bloat',
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
    painPoint: 'Janky Layout Reflows',
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
    painPoint: 'GPU Battery Drain',
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
    painPoint: 'Global Latency Lag',
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
  const [isPaused, setIsPaused] = useState(false);
  const activePhase = PROTOCOL_PHASES[activePhaseIndex];
  const IconComponent = activePhase.icon;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % PROTOCOL_PHASES.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="methodology" 
      className="relative py-20 sm:py-32 2xl:py-44 px-3.5 sm:px-6 lg:px-12 2xl:px-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] 2xl:w-[900px] 3xl:w-[1200px] h-[500px] 2xl:h-[900px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto space-y-10 sm:space-y-16 2xl:space-y-20">
        
        {/* Kinetic Header with Signature Jalebi-Loop Arrow */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8 2xl:pb-12">
          <div className="space-y-4 max-w-3xl 2xl:max-w-4xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] 2xl:text-xs font-mono text-cyan-400">
              <Activity className="w-3 h-3 2xl:w-4 2xl:h-4" />
              <span>CONTINUOUS EXECUTION MATRIX</span>
            </div>
            
            <div className="relative pt-2">
              
              {/* Row 1: WAVE GOODBYE TO: + Signature Jalebi-Loop Swirl */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="relative inline-flex items-center text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black uppercase tracking-tight text-white leading-none">
                  {/* Subtle Top Accent Sparkle */}
                  <svg className="absolute -top-5 -left-5 w-5 h-5 text-amber-400 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="2" x2="12" y2="7" strokeLinecap="round" />
                    <line x1="2" y1="12" x2="7" y2="12" strokeLinecap="round" />
                    <line x1="4.5" y1="4.5" x2="8" y2="8" strokeLinecap="round" />
                  </svg>
                  Wave Goodbye To:
                </span>

                {/* THE JALEBI LOOP ARROW: Curves upward, loops around like a swirl, and points right at the target text */}
                <div className="relative -mb-10 sm:-mb-14 pointer-events-none w-16 sm:w-24 h-16 sm:h-22 flex-shrink-0">
                  <svg 
                    className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]" 
                    viewBox="0 0 80 75" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* The Full Jalebi Loop Curve: starts at (4,25), arches high to (45,4), loops inside to (65,30), circles back under at (40,55), then swoops down toward (20,62) */}
                    <path
                      d="M 4 28 C 18 2, 58 -2, 66 22 C 72 38, 54 50, 42 42 C 32 34, 38 18, 54 22 C 68 26, 62 48, 36 60 L 22 64"
                      stroke="url(#jalebiGrad)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Arrowhead sharply pointing down-left right at the heading */}
                    <path
                      d="M 32 54 L 20 64 L 30 72"
                      stroke="#8B5CF6"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <defs>
                      <linearGradient id="jalebiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F43F5E" />
                        <stop offset="35%" stopColor="#FB923C" />
                        <stop offset="70%" stopColor="#EAB308" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Row 2: Dynamic Glowing Pain Point Target */}
              <div className="relative overflow-hidden py-1 sm:py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase.painPoint}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black uppercase tracking-tight bg-gradient-to-r from-rose-500 via-amber-400 to-violet-400 bg-clip-text text-transparent leading-tight"
                  >
                    {activePhase.painPoint}.
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Auto-Play Indicator */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400">
              {isPaused ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>PAUSED (HOVER)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>AUTO-STREAMING</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-14 items-start">
          
          {/* Left Column: Continuous Stepper (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 2xl:space-y-6">
            {PROTOCOL_PHASES.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;
              const PhaseIcon = phase.icon;

              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 2xl:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-500 flex items-start gap-4 2xl:gap-6 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'border-white/20 bg-white/[0.07] shadow-[0_10px_35px_rgba(0,0,0,0.7)] scale-[1.01]'
                      : 'border-white/[0.04] bg-white/[0.01] opacity-60 hover:opacity-90 hover:bg-white/[0.02]'
                  }`}
                  style={{
                    borderColor: isSelected ? `${phase.accent}60` : undefined,
                  }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeMethodologyGlowBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 2xl:w-2 rounded-r-full"
                      style={{ backgroundColor: phase.accent }}
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}

                  <div 
                    className="w-10 h-10 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 rounded-xl 2xl:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
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

                    <h3 className={`text-sm sm:text-base 2xl:text-xl font-black transition-colors ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                      {phase.name}
                    </h3>

                    <p className="text-xs 2xl:text-sm text-slate-400 line-clamp-1">
                      {phase.tagline}
                    </p>

                    {isSelected && !isPaused && (
                      <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden mt-2.5">
                        <motion.div
                          key={activePhaseIndex}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3.8, ease: 'linear' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: phase.accent }}
                        />
                      </div>
                    )}
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
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] p-5 sm:p-8 2xl:p-12 backdrop-blur-2xl space-y-6 sm:space-y-8 2xl:space-y-10 shadow-2xl"
                style={{
                  borderColor: `${activePhase.accent}30`
                }}
              >
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