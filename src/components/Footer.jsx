import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Send, 
  Check, 
  Terminal, 
  Radio, 
  Globe2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import KinesisLogo from './KinesisLogo';

export default function Footer() {
  const [pktTime, setPktTime] = useState('');
  const [utcTime, setUtcTime] = useState('');
  const [dispatchEmail, setDispatchEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setPktTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
      setUtcTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDispatchSubmit = (e) => {
    e.preventDefault();
    if (!dispatchEmail || !dispatchEmail.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setDispatchEmail('');
      setIsSubscribed(false);
    }, 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020308] pt-20 sm:pt-28 2xl:pt-36 pb-12 2xl:pb-16 px-4 sm:px-6 lg:px-12 2xl:px-24 overflow-hidden">
      
      {/* Background Volumetric Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] 2xl:w-[1300px] h-[350px] bg-gradient-to-b from-violet-600/15 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />
      
      {/* Massive Typographic Ambient Watermark in Background */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] whitespace-nowrap text-[18vw] font-black uppercase tracking-tighter leading-none text-white">
        KINESIS
      </div>

      <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto space-y-16 sm:space-y-20 relative z-10">
        
        {/* Tier 1: Large CTA Grid with Interactive Dispatch Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-14 border-b border-white/[0.08] items-end">
          
          {/* Left Hero Statement & Logo */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <KinesisLogo size="lg" />
            
            <h3 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Architecting <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                The Computational Edge.
              </span>
            </h3>

            <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 max-w-lg leading-relaxed">
              Synthesizing bespoke WebGL environments, high-frequency telemetry architectures, and ultra-performant interfaces for forward-thinking global engineering protocols.
            </p>
          </div>

          {/* Right Dispatch Ingest Card (Newsletter/Direct Ingestion) */}
          <div className="lg:col-span-5 p-6 sm:p-8 2xl:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl space-y-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>STUDIO DISPATCH // Q4 DEPLOYMENTS</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">ENCRYPTED</span>
            </div>

            <p className="text-xs 2xl:text-sm text-slate-300 leading-relaxed font-medium">
              Receive quarterly deep-dives into custom GLSL fragment shaders, edge latency audits, and open-source UI benchmarks.
            </p>

            <form onSubmit={handleDispatchSubmit} className="space-y-2.5">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={dispatchEmail}
                  onChange={(e) => setDispatchEmail(e.target.value)}
                  placeholder="developer@enterprise.domain"
                  disabled={isSubscribed}
                  className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-black/60 border border-white/[0.12] focus:border-violet-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 font-mono transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="absolute right-2 p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition cursor-pointer"
                  aria-label="Subscribe to dispatch"
                >
                  {isSubscribed ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
                </button>
              </div>

              {isSubscribed && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TRANSMISSION CONFIRMED. TELEMETRY SYNCED.</span>
                </motion.p>
              )}
            </form>
          </div>

        </div>

        {/* Tier 2: Precision Studio Telemetry & Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 2xl:gap-12 text-xs 2xl:text-sm">
          
          {/* Col 1: World Coordinates & Clocks */}
          <div className="space-y-3.5">
            <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] block">
              Global Clocks
            </span>
            <div className="space-y-2 font-mono">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">PKT (Karachi)</span>
                <span className="text-violet-300 font-bold">{pktTime || '06:30:00'}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">UTC (Universal)</span>
                <span className="text-cyan-300 font-bold">{utcTime || '01:30:00'}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Anchors */}
          <div className="space-y-3.5">
            <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] block">
              Studio Anchors
            </span>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li><a href="#works" className="hover:text-violet-400 transition flex items-center justify-between group"><span>Curated Works</span><span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono">01</span></a></li>
              <li><a href="#services" className="hover:text-violet-400 transition flex items-center justify-between group"><span>Capabilities</span><span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono">02</span></a></li>
              <li><a href="#methodology" className="hover:text-violet-400 transition flex items-center justify-between group"><span>Methodology</span><span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono">03</span></a></li>
              <li><a href="#estimator" className="hover:text-violet-400 transition flex items-center justify-between group"><span>Scope Calculator</span><span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono">04</span></a></li>
            </ul>
          </div>

          {/* Col 3: Research & Code */}
          <div className="space-y-3.5">
            <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] block">
              Code & Research
            </span>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1.5"><span>GitHub Enterprise</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1.5"><span>X (Dispatches)</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1.5"><span>LinkedIn Network</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries */}
          <div className="space-y-3.5">
            <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] block">
              Direct Inquiries
            </span>
            <a 
              href="mailto:inquire@kinesis.studio" 
              className="text-white hover:text-violet-400 font-mono font-bold break-all transition block text-xs sm:text-sm"
            >
              inquire@kinesis.studio
            </a>
            <p className="text-slate-400 text-xs leading-relaxed">
              Available for selective high-impact Q4 2026 partner contracts.
            </p>
          </div>

          {/* Col 5: Operational Pulse & Back to Top */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4 flex flex-col justify-between items-start lg:items-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EDGE NETWORK: HEALTHY</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3.5 2xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-violet-500/40 text-white flex items-center gap-2 text-xs font-mono tracking-wider transition cursor-pointer group"
            >
              <span>RETURN TO ORBIT</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Tier 3: Bottom Legal & Hardware Status Matrix */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] sm:text-xs font-mono text-slate-500">
          <p>© 2026 KINESIS STUDIO LABS. ALL RIGHTS RESERVED.</p>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-slate-400">
            <span className="text-emerald-400/90 font-bold">LATENCY &lt; 14MS</span>
            <span>•</span>
            <span>CLS: 0.000</span>
            <span>•</span>
            <span>V4.2-PROD</span>
            <span>•</span>
            <span className="text-violet-400">OBSIDIAN KINETIC</span>
          </div>
        </div>

      </div>
    </footer>
  );
}