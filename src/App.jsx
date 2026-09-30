import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import CapabilitiesBento from './components/CapabilitiesBento';
import Methodology from './components/Methodology';
import ProjectEstimator from './components/ProjectEstimator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-white relative bg-noise selection:bg-[#8B5CF6] selection:text-white overflow-hidden">
      {/* 1. Custom Aerodynamic Precision Cursor */}
      <CustomCursor />

      {/* 2. Floating Dynamic Island Navbar */}
      <Navbar />

      {/* 3. Main Single-Page Stream */}
      <main>
        <Hero />
        <SelectedWorks />
        <CapabilitiesBento />
        <Methodology />
        <ProjectEstimator />
      </main>

      {/* 4. Studio Obsidian Signature Footer */}
      <Footer />
    </div>
  );
}