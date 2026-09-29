import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Estimator', href: '#estimator' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-10 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between pointer-events-auto">
        
        {/* 1. Brand Island */}
        <a 
          href="#" 
          data-cursor="KINESIS"
          className="group flex items-center gap-3 px-3 py-2 sm:px-3.5 sm:py-2 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full bg-[#05070E] rounded-[11px] flex items-center justify-center">
              <span className="text-xs font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-white to-slate-300 font-mono">
                K
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-[13px] font-black tracking-[0.2em] text-white uppercase font-mono">
              KINESIS<span className="text-violet-400">.</span>
            </span>
            <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
              Studio
            </span>
          </div>
        </a>

        {/* 2. Floating Dynamic Center Island (Desktop & Wide Laptops) */}
        <nav 
          onMouseLeave={() => setHoveredIdx(null)}
          className="hidden lg:flex items-center p-1.5 rounded-full bg-white/[0.025] border border-white/[0.08] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
        >
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor="NAVIGATE"
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-200"
            >
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="navPillHover"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full shadow-inner"
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* 3. Action Group */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Availability Radar Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl text-[10px] font-mono text-slate-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold tracking-wider text-slate-200">OPEN FOR Q4</span>
          </div>

          {/* Primary Magnetic CTA */}
          <a
            href="#estimator"
            data-cursor="LET'S TALK"
            className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-xs font-black uppercase tracking-wider shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] transition-all duration-300 flex items-center gap-1.5"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile & Tablet Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white lg:hidden backdrop-blur-2xl transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

      </div>

      {/* Modern Slide-Down Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mt-3 p-5 rounded-3xl bg-[#080B14]/95 border border-white/[0.1] backdrop-blur-3xl lg:hidden space-y-4 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available Q4/2026
              </span>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1"
              >
                <span>Initiate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}