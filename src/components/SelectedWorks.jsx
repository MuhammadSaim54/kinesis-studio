import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  X, 
  ChevronRight 
} from 'lucide-react';

const CATEGORIES = ['All', 'Spatial Web', 'FinTech', 'AI Systems'];

// ZERO ERROR KINETIC VECTOR ARTWORK (CSS Transforms instead of raw SVG attribute morphing)
const AnimatedProjectArtwork = memo(function AnimatedProjectArtwork({ type }) {
  if (type === 'telemetry') {
    return (
      <svg className="w-full h-full p-4 sm:p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="50" x2="370" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
        <line x1="30" y1="110" x2="370" y2="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
        <line x1="30" y1="170" x2="370" y2="170" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
        <line x1="30" y1="210" x2="370" y2="210" stroke="rgba(255,255,255,0.12)" />

        {/* Dynamic Static Path with GPU Transform Floating */}
        <motion.path 
          d="M 30 170 Q 80 80, 140 130 T 240 60 T 320 120 T 370 40"
          animate={{ y: [-4, 6, -4], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          stroke="#8B5CF6" 
          strokeWidth="2.5" 
          fill="none" 
        />

        {/* Pulsing Candlesticks using CSS Scale and Opacity */}
        {[
          { x: 75, y: 110, h: 55, color: '#8B5CF6', delay: 0 },
          { x: 130, y: 85, h: 45, color: '#06B6D4', delay: 0.3 },
          { x: 185, y: 125, h: 60, color: '#8B5CF6', delay: 0.6 },
          { x: 240, y: 70, h: 65, color: '#06B6D4', delay: 0.2 },
          { x: 295, y: 95, h: 50, color: '#A78BFA', delay: 0.5 },
        ].map((bar, i) => (
          <g key={i}>
            <line x1={bar.x + 4} y1={bar.y - 12} x2={bar.x + 4} y2={bar.y + bar.h + 12} stroke={bar.color} strokeWidth="1.2" opacity="0.5" />
            <motion.rect 
              x={bar.x} 
              y={bar.y} 
              width="8" 
              height={bar.h} 
              rx="2" 
              fill={bar.color}
              animate={{ opacity: [0.6, 1, 0.6], scaleY: [0.92, 1.06, 0.92] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: bar.delay, ease: "easeInOut" }}
              style={{ transformOrigin: `${bar.x}px 140px` }}
            />
          </g>
        ))}

        <circle cx="370" cy="40" r="5" fill="#06B6D4" />
        <motion.circle 
          cx="370" 
          cy="40" 
          r="12" 
          stroke="#06B6D4" 
          strokeWidth="1.5" 
          strokeDasharray="4 3" 
          animate={{ rotate: 360, scale: [0.9, 1.25, 0.9] }}
          transition={{ rotate: { duration: 6, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          style={{ transformOrigin: "370px 40px" }}
        />
        <text x="35" y="30" fill="#8B5CF6" fontSize="9" fontFamily="monospace" letterSpacing="1">FEED: 10,000 TPS</text>
      </svg>
    );
  }

  if (type === 'spatial') {
    return (
      <svg className="w-full h-full p-4 sm:p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.ellipse 
          cx="200" 
          cy="120" 
          rx="125" 
          ry="55" 
          stroke="#06B6D4" 
          strokeWidth="1.5" 
          strokeDasharray="6 4" 
          opacity="0.65" 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 120px" }}
        />
        <motion.ellipse 
          cx="200" 
          cy="120" 
          rx="105" 
          ry="65" 
          stroke="#8B5CF6" 
          strokeWidth="1.5" 
          opacity="0.5" 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 120px" }}
        />

        <motion.g 
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 200 78 L 240 101 L 200 124 L 160 101 Z" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="1.5" />
          <path d="M 160 101 L 200 124 L 200 170 L 160 147 Z" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M 200 124 L 240 101 L 240 147 L 200 170 Z" fill="#6366F1" fillOpacity="0.25" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="200" cy="124" r="3.5" fill="#FFFFFF" />
        </motion.g>

        {/* Pure Group Translation (No cx/cy undefined bugs) */}
        <motion.g
          animate={{
            x: [-110, 0, 110, 0, -110],
            y: [15, 52, -15, -52, 15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="200" cy="120" r="4" fill="#06B6D4" />
        </motion.g>

        <text x="35" y="35" fill="#06B6D4" fontSize="9" fontFamily="monospace" letterSpacing="1">SPATIAL AXIS: SYNCHRONIZED</text>
        <text x="270" y="215" fill="#8B5CF6" fontSize="9" fontFamily="monospace" letterSpacing="1">120 FPS NATIVE</text>
      </svg>
    );
  }

  if (type === 'neural') {
    return (
      <svg className="w-full h-full p-4 sm:p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="70" y1="60" x2="160" y2="100" stroke="rgba(244,63,94,0.35)" strokeWidth="1.5" />
        <line x1="70" y1="180" x2="160" y2="140" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
        <line x1="160" y1="100" x2="250" y2="70" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" />
        <line x1="160" y1="100" x2="250" y2="160" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
        <line x1="160" y1="140" x2="250" y2="160" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" />
        <line x1="250" y1="70" x2="340" y2="120" stroke="rgba(244,63,94,0.7)" strokeWidth="2" />
        <line x1="250" y1="160" x2="340" y2="120" stroke="rgba(139,92,246,0.7)" strokeWidth="2" />

        {/* Synapse Pulse 1 via Group Transform */}
        <motion.g
          animate={{
            x: [0, 90, 180, 270],
            y: [0, 40, 10, 60],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="70" cy="60" r="3" fill="#FFF" />
        </motion.g>

        {/* Synapse Pulse 2 via Group Transform */}
        <motion.g
          animate={{
            x: [0, 90, 180, 270],
            y: [0, -40, -20, -60],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.5 }}
        >
          <circle cx="70" cy="180" r="3" fill="#06B6D4" />
        </motion.g>

        {[
          { cx: 70, cy: 60, color: '#F43F5E', r: 5 },
          { cx: 70, cy: 180, color: '#8B5CF6', r: 5 },
          { cx: 160, cy: 100, color: '#F43F5E', r: 7 },
          { cx: 160, cy: 140, color: '#8B5CF6', r: 6 },
          { cx: 250, cy: 70, color: '#F43F5E', r: 7 },
          { cx: 250, cy: 160, color: '#8B5CF6', r: 7 },
        ].map((node, i) => (
          <motion.circle 
            key={i} 
            cx={node.cx} 
            cy={node.cy} 
            r={node.r} 
            fill={node.color}
            animate={{ scale: [1, 1.25, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        ))}

        <circle cx="340" cy="120" r="14" fill="#F43F5E" fillOpacity="0.2" stroke="#F43F5E" strokeWidth="2" />
        <motion.circle 
          cx="340" 
          cy="120" 
          r="6" 
          fill="#FFFFFF"
          animate={{ scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ transformOrigin: "340px 120px" }}
        />
        <text x="35" y="215" fill="#F43F5E" fontSize="9" fontFamily="monospace" letterSpacing="1">AGENT INFERENCE: 12ms</text>
      </svg>
    );
  }

  return (
    <svg className="w-full h-full p-4 sm:p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="200" 
        cy="120" 
        r="80" 
        stroke="rgba(16,185,129,0.3)" 
        strokeWidth="1.5" 
        strokeDasharray="5 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 120px" }}
      />
      <motion.circle 
        cx="200" 
        cy="120" 
        r="55" 
        stroke="#06B6D4" 
        strokeWidth="1.5" 
        strokeDasharray="8 6"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 120px" }}
      />

      <polygon points="200,85 230,102 230,138 200,155 170,138 170,102" fill="#04060E" stroke="#10B981" strokeWidth="2" />
      <motion.circle 
        cx="200" 
        cy="120" 
        r="7" 
        fill="#10B981" 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      <rect x="40" y="102" width="75" height="24" rx="6" fill="#04060E" stroke="rgba(255,255,255,0.12)" />
      <text x="47" y="118" fill="#10B981" fontSize="9" fontFamily="monospace">0x7F2...91C</text>
      
      <rect x="285" y="102" width="75" height="24" rx="6" fill="#04060E" stroke="rgba(255,255,255,0.12)" />
      <text x="292" y="118" fill="#06B6D4" fontSize="9" fontFamily="monospace">BLOCK #842</text>

      <text x="140" y="215" fill="#10B981" fontSize="9" fontFamily="monospace" letterSpacing="1">ZK-STARK SETTLED</text>
    </svg>
  );
});

const PROJECTS = [
  {
    id: 'apex-telemetry',
    title: 'Apex Telemetry',
    category: 'FinTech',
    year: '2026',
    artType: 'telemetry',
    metrics: '+412% Throughput',
    description: 'Autonomous financial infrastructure and real-time telemetry monitoring suite designed for high-frequency algorithmic clearing houses.',
    client: 'Apex Global Protocols',
    timeline: '8 Weeks',
    tags: ['React 18', 'Tailwind CSS', 'Recharts', 'Edge Compute'],
    gradient: 'from-violet-600 via-indigo-600 to-cyan-500',
    accentColor: '#8B5CF6',
    liveUrl: '#',
    highlights: [
      'Sub-millisecond packet ingest engine via WebSocket streams',
      'Client-side real-time CSV blob telemetry export pipeline',
      'Dynamic spotlight runner with instant keyboard shortcuts (Cmd+K)'
    ]
  },
  {
    id: 'lumina-spatial',
    title: 'Lumina Spatial OS',
    category: 'Spatial Web',
    year: '2026',
    artType: 'spatial',
    metrics: '120 FPS PBR',
    description: 'Immersive browser-based spatial workspace leveraging custom WebGL fragment raymarching and physics-driven gesture interaction.',
    client: 'Lumina Spatial Labs',
    timeline: '10 Weeks',
    tags: ['Three.js', 'GLSL Shaders', 'Framer Motion', 'WebAudio API'],
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    accentColor: '#06B6D4',
    liveUrl: '#',
    highlights: [
      'Zero-jank dynamic Fresnel raymarching running in browser threads',
      'Hardware-accelerated viewport depth-of-field synthesis',
      'Fluid physics drag-and-snap floating interface canvas'
    ]
  },
  {
    id: 'cortex-neural',
    title: 'Cortex Neural Mesh',
    category: 'AI Systems',
    year: '2026',
    artType: 'neural',
    metrics: '<14ms Inference',
    description: 'Enterprise synthetic intelligence pipeline delivering streaming agent workflows, neural knowledge graphs, and real-time vector search.',
    client: 'Cortex Dynamics',
    timeline: '6 Weeks',
    tags: ['Next.js', 'WebLLM', 'Vector DB', 'Tailwind CSS'],
    gradient: 'from-fuchsia-600 via-rose-600 to-amber-500',
    accentColor: '#F43F5E',
    liveUrl: '#',
    highlights: [
      'On-device local LLM inference fallback using WebGPU compute shaders',
      'Hierarchical node visualizer managing 50,000+ vector clusters',
      'Interactive multi-agent conversation graph with branch rollbacks'
    ]
  },
  {
    id: 'solstice-vault',
    title: 'Solstice Protocol',
    category: 'FinTech',
    year: '2025',
    artType: 'vault',
    metrics: '$2.8B Settled',
    description: 'Next-generation decentralized asset custody ledger with multi-party threshold signatures and audited zero-knowledge settlement rails.',
    client: 'Solstice Foundation',
    timeline: '12 Weeks',
    tags: ['Rust / WASM', 'Tailwind', 'Ethers.js', 'React'],
    gradient: 'from-emerald-500 via-teal-600 to-violet-600',
    accentColor: '#10B981',
    liveUrl: '#',
    highlights: [
      'Zero-knowledge proof verification compiled directly to WebAssembly',
      'Biometric cryptographic key rotation via WebAuthn hardware keys',
      'Ultra-dense real-time orderbook depth ladder with zero redraw lag'
    ]
  }
];

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="relative py-20 sm:py-32 2xl:py-40 px-3.5 sm:px-6 lg:px-12 2xl:px-24">
      
      <div className="absolute top-1/3 left-0 w-[500px] 2xl:w-[800px] h-[500px] 2xl:h-[800px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] 2xl:max-w-[1700px] 3xl:max-w-[2000px] mx-auto space-y-8 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8">
          
          <div className="space-y-2 sm:space-y-3 max-w-2xl 2xl:max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] 2xl:text-xs font-mono text-violet-400">
              <Sparkles className="w-3 h-3 2xl:w-4 2xl:h-4" />
              <span>CURATED ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Selected <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Works & Artifacts.
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl whitespace-nowrap min-w-max">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 sm:px-4.5 py-2 rounded-xl text-xs font-bold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="worksFilterPill"
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        className="absolute inset-0 bg-violet-600 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Glitch-Free Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 2xl:gap-10 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ 
                  duration: 0.35, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] hover:border-violet-500/40 p-4 sm:p-7 2xl:p-9 backdrop-blur-2xl transition-colors duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                <div 
                  className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`} 
                />

                <div className="relative aspect-video w-full rounded-2xl bg-[#03050B] border border-white/[0.08] overflow-hidden flex items-center justify-center group-hover:border-white/[0.2] transition-colors shadow-inner">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <AnimatedProjectArtwork type={project.artType} />
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/60 border border-white/[0.1] backdrop-blur-md flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-violet-500/50 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono">
                    <span className="text-violet-400 font-bold uppercase">{project.category}</span>
                    <span className="text-slate-400">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl 2xl:text-3xl font-black text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1.5 sm:pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] 2xl:text-xs font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Deep-Dive Project Inspection Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-40 flex justify-end">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full sm:max-w-lg lg:max-w-xl 2xl:max-w-2xl h-full bg-[#05070F] border-l border-white/[0.1] p-5 sm:p-8 2xl:p-12 overflow-y-auto space-y-6 sm:space-y-8 shadow-2xl flex flex-col justify-between z-10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span>PROJECT INSPECTION</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition cursor-pointer"
                    aria-label="Close Inspection Drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
                    <span className="text-violet-400 font-bold">{selectedProject.client}</span>
                    <span>•</span>
                    <span>{selectedProject.year}</span>
                    <span>•</span>
                    <span>{selectedProject.timeline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-black text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm 2xl:text-base text-slate-300 leading-relaxed pt-1">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="w-full aspect-[21/9] rounded-2xl bg-[#030409] border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-inner">
                  <AnimatedProjectArtwork type={selectedProject.artType} />
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">PRIMARY VELOCITY BENCHMARK</span>
                  <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-white font-mono">
                    {selectedProject.metrics}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Zero layout thrashing with WebGL frame composition.</p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">Core Engineering Deliverables</span>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                      >
                        <ChevronRight className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">Technology Matrix</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:opacity-95 transition cursor-pointer"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}