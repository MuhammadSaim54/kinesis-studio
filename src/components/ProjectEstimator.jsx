import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Zap, 
  Clock, 
  Check, 
  Copy, 
  ArrowUpRight,
  Shield,
  Layers,
  Cpu,
  Globe2
} from 'lucide-react';

const ARCHETYPES = [
  {
    id: 'spatial',
    name: 'Spatial WebGL Experience',
    desc: 'Custom fragment shaders, 3D product viewports, and reactive canvas physics.',
    baseCost: 14500,
    weeks: 6,
    icon: Cpu,
    accent: '#8B5CF6'
  },
  {
    id: 'saas',
    name: 'Enterprise Kinetic SaaS',
    desc: 'High-density telemetry dashboards, sub-ms state synchronization, and complex tables.',
    baseCost: 18500,
    weeks: 8,
    icon: Layers,
    accent: '#06B6D4'
  },
  {
    id: 'commerce',
    name: 'Headless Global Commerce',
    desc: 'Sub-18ms edge storefront, localized currency switches, and instant checkout orchestration.',
    baseCost: 22000,
    weeks: 10,
    icon: Globe2,
    accent: '#F43F5E'
  }
];

const MOTION_TIERS = [
  { id: 0, label: 'Subtle Precision', multiplier: 1.0, weeksAdd: 0, desc: 'Fluid layout shifts, micro-spring easing, zero CLS.' },
  { id: 1, label: 'Kinetic Physics', multiplier: 1.25, weeksAdd: 2, desc: 'Magnetic cursor traps, interactive scroll vectors, and particle rigs.' },
  { id: 2, label: 'Spatial 120 FPS', multiplier: 1.5, weeksAdd: 3, desc: 'Dedicated WebGL canvas pass, dynamic audio reactivity, and GLSL lighting.' }
];

export default function ProjectEstimator() {
  const [selectedArchetype, setSelectedArchetype] = useState(ARCHETYPES[0]);
  const [motionTierIndex, setMotionTierIndex] = useState(1);
  const [includeEdgeGlobal, setIncludeEdgeGlobal] = useState(true);
  const [includeDesignTokens, setIncludeDesignTokens] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const activeMotionTier = MOTION_TIERS[motionTierIndex];

  // Memoized Cost and Velocity Calculation
  const calculation = useMemo(() => {
    let cost = selectedArchetype.baseCost * activeMotionTier.multiplier;
    let weeks = selectedArchetype.weeks + activeMotionTier.weeksAdd;

    if (includeEdgeGlobal) {
      cost += 3500;
      weeks += 1;
    }
    if (includeDesignTokens) {
      cost += 2200;
    }

    return {
      totalCost: Math.round(cost),
      totalWeeks: weeks
    };
  }, [selectedArchetype, activeMotionTier, includeEdgeGlobal, includeDesignTokens]);

  const handleCopySpec = () => {
    const summary = `KINESIS STUDIO PROJECT SPECIFICATION
Archetype: ${selectedArchetype.name}
Motion Tier: ${activeMotionTier.label}
Planetary Edge: ${includeEdgeGlobal ? 'Enabled (380+ PoPs)' : 'Standard'}
Design Token System: ${includeDesignTokens ? 'Multi-Spectrum' : 'Standard'}
Estimated Investment: $${calculation.totalCost.toLocaleString()} USD
Projected Velocity: ${calculation.totalWeeks} Weeks`;

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Slider progress percentage for smooth glowing fill track
  const sliderPercentage = (motionTierIndex / (MOTION_TIERS.length - 1)) * 100;

  return (
    <section id="estimator" className="relative py-20 sm:py-32 2xl:py-44 px-3.5 sm:px-6 lg:px-12 2xl:px-24">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] 2xl:w-[1000px] h-[600px] 2xl:h-[1000px] bg-violet-600/10 blur-[170px] rounded-full pointer-events-none" />

      {/* Fluid Ultrawide Container */}
      <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto space-y-10 sm:space-y-16 2xl:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8 2xl:pb-12">
          <div className="space-y-2 sm:space-y-3 2xl:space-y-4 max-w-2xl 2xl:max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] 2xl:text-xs font-mono text-violet-400">
              <Calculator className="w-3 h-3 2xl:w-4 2xl:h-4" />
              <span>DYNAMIC SCOPE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black uppercase tracking-tight text-white leading-none">
              Calculate <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Project Scope.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm 2xl:text-lg 3xl:text-xl text-slate-400 max-w-md 2xl:max-w-xl leading-relaxed font-medium">
            Configure your technical requirements to generate instant, mathematically modeled budget and velocity forecasts. No arbitrary agency retainers.
          </p>
        </div>

        {/* Main Grid: Controls vs Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-14 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 2xl:space-y-10">
            
            {/* 01: Platform Archetype (Clean single border & glow, no duplicate shadow elements) */}
            <div className="space-y-3 2xl:space-y-4">
              <span className="text-[11px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase tracking-wider">
                01 // Select Core Architectural Archetype
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 2xl:gap-4">
                {ARCHETYPES.map((arch) => {
                  const isSelected = selectedArchetype.id === arch.id;
                  const ArchIcon = arch.icon;
                  return (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setSelectedArchetype(arch)}
                      className={`text-left p-4 2xl:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                        isSelected
                          ? 'border-violet-500 bg-violet-600/10 shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                          : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15] hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div 
                          className="p-2 2xl:p-3 rounded-xl transition-colors duration-300"
                          style={{
                            backgroundColor: isSelected ? arch.accent : 'rgba(255,255,255,0.05)',
                            color: isSelected ? '#FFFFFF' : '#94A3B8'
                          }}
                        >
                          <ArchIcon className="w-4 h-4 2xl:w-6 2xl:h-6" />
                        </div>
                        <span className="text-[10px] 2xl:text-xs font-mono text-slate-400 font-bold">{arch.weeks}w</span>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm 2xl:text-base font-bold text-white leading-tight">{arch.name}</h4>
                        <p className="text-[10px] 2xl:text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{arch.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 02: REAL Smooth Interactive Slider */}
            <div className="space-y-4 p-4 sm:p-6 2xl:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase tracking-wider">
                    02 // Interaction & Physics Intensity
                  </span>
                  <p className="text-sm 2xl:text-lg font-bold text-white mt-0.5">{activeMotionTier.label}</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-[10px] 2xl:text-xs font-mono text-violet-400 font-bold">
                  {activeMotionTier.multiplier}x Scale
                </span>
              </div>

              {/* Custom Continuous Track & Range Slider */}
              <div className="space-y-3 pt-2">
                <div className="relative flex items-center h-6">
                  {/* Background Track */}
                  <div className="absolute w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    {/* Active Glowing Violet Fill */}
                    <div 
                      className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 transition-all duration-200"
                      style={{ width: `${sliderPercentage}%` }}
                    />
                  </div>

                  {/* Hidden Native Range for Interaction */}
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={motionTierIndex}
                    onChange={(e) => setMotionTierIndex(parseInt(e.target.value))}
                    className="absolute w-full h-6 opacity-0 cursor-pointer z-20"
                    aria-label="Motion Tier Slider"
                  />

                  {/* Visual Smooth Floating Knob with Pulse */}
                  <div 
                    className="absolute w-5 h-5 2xl:w-6 2xl:h-6 rounded-full bg-white border-2 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.9)] pointer-events-none transition-all duration-200 -translate-x-1/2 z-10"
                    style={{ left: `${sliderPercentage}%` }}
                  />
                </div>

                {/* Step Labels */}
                <div className="grid grid-cols-3 text-xs 2xl:text-sm font-mono pt-1">
                  {MOTION_TIERS.map((tier, idx) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMotionTierIndex(idx)}
                      className={`cursor-pointer transition-colors text-left ${idx === 1 ? 'text-center' : idx === 2 ? 'text-right' : ''} ${
                        motionTierIndex === idx ? 'text-violet-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs 2xl:text-sm text-slate-400 font-medium leading-relaxed pt-1 border-t border-white/[0.04]">
                {activeMotionTier.desc}
              </p>
            </div>

            {/* 03: Infrastructure Add-ons */}
            <div className="space-y-3 2xl:space-y-4">
              <span className="text-[11px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase tracking-wider">
                03 // Edge & Design System Acceleration
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 2xl:gap-4">
                
                {/* Edge Addon */}
                <button
                  type="button"
                  onClick={() => setIncludeEdgeGlobal(!includeEdgeGlobal)}
                  className={`text-left p-4 2xl:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                    includeEdgeGlobal
                      ? 'border-cyan-500/60 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15]'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
                    includeEdgeGlobal 
                      ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                      : 'border-white/[0.2] bg-white/[0.02]'
                  }`}>
                    {includeEdgeGlobal && <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm 2xl:text-base font-bold text-white">Global Edge Routing</h5>
                    <p className="text-[10px] 2xl:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      380+ PoP distribution with sub-18ms planetary latency (+$3,500).
                    </p>
                  </div>
                </button>

                {/* Tokens Addon */}
                <button
                  type="button"
                  onClick={() => setIncludeDesignTokens(!includeDesignTokens)}
                  className={`text-left p-4 2xl:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                    includeDesignTokens
                      ? 'border-violet-500/60 bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15]'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 2xl:w-6 2xl:h-6 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
                    includeDesignTokens 
                      ? 'bg-violet-500 border-violet-400 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' 
                      : 'border-white/[0.2] bg-white/[0.02]'
                  }`}>
                    {includeDesignTokens && <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm 2xl:text-base font-bold text-white">Multi-Token State Engine</h5>
                    <p className="text-[10px] 2xl:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Dynamic color spectrum with runtime CSS variable switching (+$2,200).
                    </p>
                  </div>
                </button>

              </div>
            </div>

          </div>

          {/* Real-time Summary Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.12] p-5 sm:p-8 2xl:p-12 backdrop-blur-3xl space-y-6 2xl:space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 blur-3xl pointer-events-none rounded-full" />

              <div className="space-y-1">
                <span className="text-[10px] 2xl:text-xs font-mono text-slate-400 uppercase tracking-widest">
                  ESTIMATED COMMITMENT
                </span>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    key={calculation.totalCost}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl 2xl:text-6xl 3xl:text-7xl font-black text-white font-mono tracking-tight"
                  >
                    ${calculation.totalCost.toLocaleString()}
                  </motion.span>
                  <span className="text-xs 2xl:text-sm font-mono text-slate-400">USD</span>
                </div>
              </div>

              {/* Velocity Metric */}
              <div className="p-3.5 2xl:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs 2xl:text-sm text-slate-300 font-medium">Estimated Delivery Velocity</span>
                </div>
                <span className="text-xs 2xl:text-sm font-mono font-bold text-white">{calculation.totalWeeks} Weeks</span>
              </div>

              {/* Config Breakdown List */}
              <div className="space-y-2.5 2xl:space-y-3 pt-2 border-t border-white/[0.08] text-xs 2xl:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Archetype</span>
                  <span className="font-bold text-white text-right truncate ml-2">{selectedArchetype.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Motion Tier</span>
                  <span className="font-bold text-violet-400">{activeMotionTier.label}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Edge Topology</span>
                  <span className="font-bold text-slate-200">{includeEdgeGlobal ? '380+ Nodes' : 'Standard'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4">
                <button
                  type="button"
                  onClick={handleCopySpec}
                  className="w-full py-3.5 2xl:py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white text-xs 2xl:text-sm font-mono font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">SPECIFICATION COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>COPY CONFIGURATION SPEC</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:inquire@kinesis.studio?subject=Project%20Scope%20Initiation"
                  className="w-full py-3.5 sm:py-4 2xl:py-5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white text-xs 2xl:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.55)] transition-all cursor-pointer"
                >
                  <span>Initiate Partnership</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] 2xl:text-xs font-mono text-slate-400 pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>NDA & Master Services Agreement Executed First</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}