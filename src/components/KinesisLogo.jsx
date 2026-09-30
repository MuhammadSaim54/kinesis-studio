import React from 'react';
import { motion } from 'framer-motion';

export default function KinesisLogo({ size = 'md', className = '' }) {
  const isLarge = size === 'lg';
  const iconSize = isLarge ? 'w-10 h-10 2xl:w-12 2xl:h-12' : 'w-8 h-8 2xl:w-9 2xl:h-9';

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Precision Geometric Kinetic Emblem */}
      <div className={`relative ${iconSize} flex items-center justify-center flex-shrink-0`}>
        {/* Ambient Hover Core Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-xl opacity-40 group-hover:opacity-100 blur-md transition-opacity duration-500" />
        
        {/* Glass Base Chassis */}
        <div className="relative w-full h-full rounded-xl bg-[#030409] border border-white/20 group-hover:border-violet-400/80 transition-colors duration-300 flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Animated Inner Lattice Line */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent opacity-80" />
          
          <svg className="w-5/6 h-5/6 p-0.5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Orbiting Kinetic Diamond */}
            <motion.path
              d="M 20 4 L 36 20 L 20 36 L 4 20 Z"
              stroke="url(#logoGrad)"
              strokeWidth="2"
              strokeDasharray="4 2"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '20px 20px' }}
            />
            {/* Inner Angular Core */}
            <polygon
              points="20,10 28,20 20,30 12,20"
              fill="#06B6D4"
              fillOpacity="0.25"
              stroke="#06B6D4"
              strokeWidth="1.5"
            />
            {/* Center Singular Quantum Spark */}
            <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" className="group-hover:scale-125 transition-transform" />

            <defs>
              <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography with Sub-Tag */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-black text-sm sm:text-base 2xl:text-lg tracking-[0.2em] uppercase text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-cyan-400 transition-all duration-300">
            KINESIS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#8B5CF6]" />
        </div>
        <span className="text-[9px] 2xl:text-[10px] font-mono tracking-widest text-slate-500 uppercase -mt-0.5">
          STUDIO LABS
        </span>
      </div>
    </div>
  );
}