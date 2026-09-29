import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Cpu,
    Sparkles,
    Layers,
    Terminal,
    Boxes,
    Compass
} from 'lucide-react';

const CODE_SNIPPETS = {
    react: `// Spatial Physics Hook
const { transform, velocity } = useSpringPhysics({
  damping: 24,
  stiffness: 300,
  mass: 0.8
});

return <KineticMesh transform={transform} />;`,
    glsl: `// Raymarching Fragment Shader
vec3 rayDir = normalize(vec3(uv, 1.0));
float dist = sceneSDF(rayOrigin + rayDir * depth);
if (dist < 0.001) {
  gl_FragColor = vec4(vec3(0.55, 0.36, 0.96), 1.0);
}`
};

export default function CapabilitiesBento() {
    const [activeCodeTab, setActiveCodeTab] = useState('react');
    const [activeToken, setActiveToken] = useState('violet');

    const THEME_TOKENS = [
        { id: 'violet', label: 'Hyper Violet', color: '#8B5CF6' },
        { id: 'cyan', label: 'Electric Cyan', color: '#06B6D4' },
        { id: 'rose', label: 'Molten Rose', color: '#F43F5E' },
    ];

    return (
        <section id="services" className="relative py-20 sm:py-32 2xl:py-40 px-4 sm:px-6 lg:px-12 2xl:px-24">
            {/* Background Accent Blur */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] 2xl:w-[800px] h-[500px] 2xl:h-[800px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] 2xl:max-w-[1700px] 3xl:max-w-[2000px] mx-auto space-y-10 sm:space-y-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
                    <div className="space-y-3 max-w-2xl 2xl:max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] 2xl:text-xs font-mono text-violet-400">
                            <Compass className="w-3 h-3 2xl:w-4 2xl:h-4" />
                            <span>CORE CAPABILITIES</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black uppercase tracking-tight text-white leading-none">
                            Engineered For <br />
                            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                                Extreme Precision.
                            </span>
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 max-w-md 2xl:max-w-lg leading-relaxed font-medium">
                        We operate at the convergence of computational design, custom GLSL shaders, and edge architectures to deliver zero-compromise digital experiences.
                    </p>
                </div>

                {/* Bento Grid Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 2xl:gap-8">

                    {/* Card 1: Interactive Code Sandbox (7 Cols) */}
                    <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-5 sm:p-8 2xl:p-10 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-violet-500/30 transition-all duration-300 group">
                        <div className="space-y-4">

                            {/* Header: Flex wrap fixes mobile button truncation */}
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0">
                                        <Terminal className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base 2xl:text-lg font-bold text-white">Full-Stack Kinetic Architecture</h3>
                                        <p className="text-[11px] sm:text-xs text-slate-400">Hardware-accelerated rendering hooks</p>
                                    </div>
                                </div>

                                {/* Tab Switcher */}
                                <div className="flex items-center gap-1 p-1 bg-black/40 border border-white/[0.06] rounded-xl text-xs font-mono flex-shrink-0">
                                    <button
                                        onClick={() => setActiveCodeTab('react')}
                                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs transition-all ${activeCodeTab === 'react'
                                                ? 'bg-violet-600 text-white font-bold shadow-md'
                                                : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        React.tsx
                                    </button>
                                    <button
                                        onClick={() => setActiveCodeTab('glsl')}
                                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs transition-all ${activeCodeTab === 'glsl'
                                                ? 'bg-violet-600 text-white font-bold shadow-md'
                                                : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        Shader.frag
                                    </button>
                                </div>
                            </div>

                            {/* Code Sandbox Viewport */}
                            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#04060C] border border-white/[0.06] font-mono text-xs overflow-x-auto select-all shadow-inner">
                                <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/[0.06] text-[10px] text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                    <span className="ml-2 truncate">kinesis-engine/v2/core.{activeCodeTab === 'react' ? 'tsx' : 'glsl'}</span>
                                </div>
                                <pre className="pt-3 text-slate-300 leading-relaxed text-[10.5px] sm:text-xs 2xl:text-sm">
                                    {CODE_SNIPPETS[activeCodeTab]}
                                </pre>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-slate-400">
                            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">TypeScript 5.0</span>
                            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">WebGL / Three.js</span>
                            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Card 2: 120 FPS Benchmark (5 Cols) */}
                    <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-5 sm:p-8 2xl:p-10 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/30 transition-all duration-300 group">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                                    <Cpu className="w-4 h-4" />
                                </div>
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                                    OPTIMAL TICK
                                </span>
                            </div>

                            <div>
                                <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white">Continuous Frame Velocity</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Zero jank execution pipeline</p>
                            </div>

                            {/* Animated Live Waves */}
                            <div className="p-4 rounded-2xl bg-[#04060C] border border-white/[0.06] space-y-3">
                                <div className="flex items-baseline justify-between">
                                    <span className="text-3xl 2xl:text-4xl font-black text-white font-mono">119.4 <span className="text-xs text-cyan-400">FPS</span></span>
                                    <span className="text-[10px] font-mono text-slate-400">Jitter: 0.2ms</span>
                                </div>
                                <div className="flex items-end gap-1.5 h-14 2xl:h-18 pt-2">
                                    {[40, 65, 80, 50, 95, 85, 100, 75, 90, 60, 85, 95, 70, 100, 88, 92].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${height}%`, `${Math.max(30, (height + 25) % 100)}%`, `${height}%`] }}
                                            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                                            className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-xs opacity-80"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-xs 2xl:text-sm text-slate-400 leading-relaxed">
                            Every layout shift is eradicated using GPU transform compositing and requestAnimationFrame thread scheduling.
                        </p>
                    </div>

                    {/* Card 3: Interactive Spatial Token Engine (5 Cols) */}
                    <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-5 sm:p-8 2xl:p-10 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-violet-500/30 transition-all duration-300">
                        <div className="space-y-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                                <Boxes className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white">Dynamic Brand Systems</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Multi-token state engine</p>
                            </div>

                            {/* Interactive Token Switcher with Luminous Active State */}
                            <div className="space-y-2 pt-2">
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Select Token Spectrum:</span>
                                <div className="grid grid-cols-3 gap-2">
                                    {THEME_TOKENS.map((token) => {
                                        const isSelected = activeToken === token.id;
                                        return (
                                            <button
                                                key={token.id}
                                                onClick={() => setActiveToken(token.id)}
                                                className={`relative py-2.5 px-2 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${isSelected
                                                        ? 'border-white/30 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                                                        : 'border-white/[0.06] bg-black/40 text-slate-400 hover:border-white/[0.15] hover:text-slate-200'
                                                    }`}
                                                style={{
                                                    borderColor: isSelected ? token.color : undefined,
                                                    boxShadow: isSelected ? `0 0 20px ${token.color}35` : undefined,
                                                    background: isSelected ? `linear-gradient(135deg, ${token.color}15, rgba(255,255,255,0.03))` : undefined,
                                                }}
                                            >
                                                {/* Dot with pulse when selected */}
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-300"
                                                    style={{
                                                        backgroundColor: token.color,
                                                        boxShadow: isSelected ? `0 0 8px ${token.color}` : 'none',
                                                        transform: isSelected ? 'scale(1.2)' : 'scale(1)'
                                                    }}
                                                />
                                                <span className="text-[10px] sm:text-[11px] font-bold tracking-tight truncate">
                                                    {token.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Active Token Display with Responsive Dynamic Glow */}
                        <div
                            style={{
                                borderColor: activeToken === 'violet' ? '#8B5CF6' : activeToken === 'cyan' ? '#06B6D4' : '#F43F5E',
                                boxShadow: `0 0 25px ${activeToken === 'violet' ? '#8B5CF620' : activeToken === 'cyan' ? '#06B6D420' : '#F43F5E20'}`
                            }}
                            className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border transition-all duration-500 flex items-center justify-between text-xs"
                        >
                            <span className="text-slate-400 font-mono">Active CSS Token</span>
                            <span className="font-mono font-bold text-white uppercase tracking-wider">
                                {activeToken} / 0.95 Alpha
                            </span>
                        </div>
                    </div>

                    {/* Card 4: Spatial WebGL Lab (7 Cols) */}
                    <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-5 sm:p-8 2xl:p-10 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-violet-500/30 transition-all duration-300">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-mono text-slate-400">SHADER PIPELINE 2.4</span>
                            </div>
                            <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white">Spatial WebGL & Shader Lab</h3>
                            <p className="text-xs 2xl:text-sm text-slate-400 leading-relaxed max-w-xl">
                                Custom Raymarching, fluid simulation compute shaders, and post-processing bloom kernels engineered natively for seamless 60-120hz browser rendering.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/[0.06]">
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <p className="text-xs font-bold text-white font-mono">PBR Glass</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">Real-time Fresnel</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <p className="text-xs font-bold text-white font-mono">Bloom FX</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">HDR Downsampling</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <p className="text-xs font-bold text-white font-mono">Inertia Rig</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">Spring Physics</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <p className="text-xs font-bold text-white font-mono">WebGL 2.0</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">VAO Optimized</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}