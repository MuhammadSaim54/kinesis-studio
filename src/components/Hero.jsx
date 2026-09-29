import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Activity, Layers, Globe } from 'lucide-react';

export default function Hero() {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[100dvh] pt-24 sm:pt-32 lg:pt-36 2xl:pt-44 pb-12 sm:pb-16 2xl:pb-24 px-4 sm:px-6 lg:px-12 2xl:px-24 flex flex-col justify-between overflow-hidden">
      
      {/* Aurora Ambient Rays (Elastic for Ultrawide) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] 2xl:w-[1400px] h-[350px] sm:h-[450px] 2xl:h-[700px] bg-gradient-to-tr from-[#8B5CF6]/20 via-[#06B6D4]/15 to-transparent blur-[120px] 2xl:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[450px] 2xl:w-[650px] h-[300px] sm:h-[450px] 2xl:h-[650px] bg-[#EC4899]/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Main Center Content Container */}
      <div className="max-w-5xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto w-full text-center space-y-6 sm:space-y-8 2xl:space-y-12 relative z-10 my-auto">
        
        {/* Kinetic Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-slate-300 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>AWWWARDS RECOGNIZED DIGITAL STUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
        </motion.div>

        {/* Hero Title */}
        <div className="space-y-3 sm:space-y-4 2xl:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[110px] 3xl:text-[130px] font-black tracking-tight uppercase leading-[0.94] select-none"
          >
            Engineering <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Spatial Futures.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg 2xl:text-2xl text-slate-400 max-w-2xl 2xl:max-w-4xl mx-auto leading-relaxed px-2"
          >
            We sculpt high-frequency digital architectures, WebGL interactions, and cinematic brand systems for elite companies that refuse to look like anyone else.
          </motion.p>
        </div>

        {/* 3D Spatial Canvas Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.12] p-4 sm:p-6 lg:p-8 2xl:p-12 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] group"
        >
          <div 
            style={{ transform: 'translateZ(35px)' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 2xl:gap-6 text-left"
          >
            <div className="p-4 sm:p-5 2xl:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] sm:text-xs 2xl:text-sm font-mono">RENDER PIPELINE</span>
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-[#8B5CF6]" />
              </div>
              <p className="text-2xl sm:text-3xl 2xl:text-5xl font-black text-white">120 FPS</p>
              <p className="text-[10px] sm:text-[11px] 2xl:text-xs text-slate-400">Zero-latency hardware acceleration</p>
            </div>

            <div className="p-4 sm:p-5 2xl:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] sm:text-xs 2xl:text-sm font-mono">FRAMEWORK</span>
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-[#06B6D4]" />
              </div>
              <p className="text-2xl sm:text-3xl 2xl:text-5xl font-black text-white">Next / React</p>
              <p className="text-[10px] sm:text-[11px] 2xl:text-xs text-slate-400">Micro-optimized edge runtime</p>
            </div>

            <div className="p-4 sm:p-5 2xl:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] sm:text-xs 2xl:text-sm font-mono">GLOBAL REACH</span>
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-[#F43F5E]" />
              </div>
              <p className="text-2xl sm:text-3xl 2xl:text-5xl font-black text-white">380+ PoPs</p>
              <p className="text-[10px] sm:text-[11px] 2xl:text-xs text-slate-400">Sub-18ms planetary distribution</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 pb-6 sm:pb-8"
        >
          <a
            href="#works"
            className="px-5 sm:px-7 2xl:px-9 py-3 2xl:py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] text-white text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Explore Works</span>
            <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5" />
          </a>

          <a
            href="#estimator"
            className="px-5 sm:px-7 2xl:px-9 py-3 2xl:py-4 rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-white text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-wider transition-all"
          >
            Calculate Project Scope
          </a>
        </motion.div>

      </div>

      {/* Bottom Live Metrics Ticker Bar */}
      <div className="max-w-6xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto w-full pt-8 sm:pt-10 2xl:pt-14 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center z-10 relative">
        <div className="space-y-0.5">
          <p className="text-xl sm:text-3xl 2xl:text-5xl font-black text-white">$450M+</p>
          <p className="text-[10px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase">Client Valuations</p>
        </div>
        <div className="space-y-0.5">
          <p className="text-xl sm:text-3xl 2xl:text-4xl font-black text-white">32</p>
          <p className="text-[10px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase">International Awards</p>
        </div>
        <div className="space-y-0.5">
          <p className="text-xl sm:text-3xl 2xl:text-4xl font-black text-white">99.8%</p>
          <p className="text-[10px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase">Lighthouse Score</p>
        </div>
        <div className="space-y-0.5">
          <p className="text-xl sm:text-3xl 2xl:text-4xl font-black text-white">100%</p>
          <p className="text-[10px] sm:text-xs 2xl:text-sm font-mono text-slate-400 uppercase">Bespoke Codebase</p>
        </div>
      </div>

    </section>
  );
}