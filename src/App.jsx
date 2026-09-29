import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesBento from './components/CapabilitiesBento';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-white relative bg-noise selection:bg-[#8B5CF6] selection:text-white overflow-hidden">
      {/* 1. Custom Magnetic Precision Cursor */}
      <CustomCursor />

      {/* 2. Floating Dynamic Island Navbar */}
      <Navbar />

      {/* 3. Main Landing Single-Page Stream */}
      <main>
        <Hero />
        <CapabilitiesBento />
      </main>
    </div>
  );
}