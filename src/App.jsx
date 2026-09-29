import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-white relative bg-noise selection:bg-[#8B5CF6] selection:text-white overflow-hidden">
      {/* 1. Ultraviolet Magnetic Cursor & Halo */}
      <CustomCursor />

      {/* 2. Glassmorphic Navigation */}
      <Navbar />

      {/* 3. Kinetic 3D Hero */}
      <main>
        <Hero />
      </main>
    </div>
  );
}