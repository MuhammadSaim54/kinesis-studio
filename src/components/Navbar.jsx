import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import KinesisLogo from './KinesisLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const NAV_LINKS = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Estimator', href: '#estimator' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2.5 sm:px-6 lg:px-12 2xl:px-24 pt-3 sm:pt-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1400px] 2xl:max-w-[1900px] mx-auto w-full flex items-center justify-between pointer-events-auto gap-2">

        {/* 1. Brand Island (Responsive compact on 320px) */}
        <a
          href="#"
          className="group flex items-center gap-2 sm:gap-3 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all flex-shrink-0"
        >
          <a href="#" className="flex items-center">
            <KinesisLogo size="sm" />
          </a>
        </a>

        {/* 2. Floating Dynamic Center Island (Desktop & Ultrawide) */}
        <nav
          onMouseLeave={() => setHoveredIdx(null)}
          className="hidden lg:flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
        >
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative px-4 2xl:px-6 py-2 text-xs 2xl:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200"
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

        {/* 3. Action Group (No overflow on small screens) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Availability Radar Pill (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl text-[10px] 2xl:text-xs font-mono text-slate-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold tracking-wider text-slate-200">OPEN FOR Q4</span>
          </div>

          {/* Primary CTA */}
          <a
            href="#estimator"
            className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 text-white text-[10.5px] sm:text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] transition-all flex items-center gap-1 flex-shrink-0"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white lg:hidden backdrop-blur-2xl transition flex-shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

      </div>

      {/* Slide-Down Mobile Drawer */}
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