import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Precision Needle Spring (Instant & Tight)
  const pointerSpring = { damping: 30, stiffness: 450, mass: 0.2 };
  const cursorX = useSpring(mouseX, pointerSpring);
  const cursorY = useSpring(mouseY, pointerSpring);

  // Trailing Ring Spring (Fluid & Floating)
  const ringSpring = { damping: 24, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  // Ambient Halo Spring (Dreamy drift)
  const haloSpring = { damping: 45, stiffness: 90, mass: 1.2 };
  const haloX = useSpring(mouseX, haloSpring);
  const haloY = useSpring(mouseY, haloSpring);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Deep Atmospheric Violet & Cyan Ambient Halo */}
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(6,182,212,0.06)_40%,transparent_70%)] blur-[90px]"
      />

      {/* 2. Trailing Outer Interactive Ring / Badge */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? (cursorText ? 2.4 : 1.6) : isClicked ? 0.8 : 1,
          borderColor: isHovered ? 'rgba(139, 92, 246, 0.8)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered 
            ? 'rgba(139, 92, 246, 0.15)' 
            : 'rgba(255, 255, 255, 0.02)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 backdrop-blur-xs flex items-center justify-center pointer-events-none"
      >
        {cursorText && (
          <span className="text-[7px] font-black tracking-widest text-[#A78BFA] uppercase select-none px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* 3. Aerodynamic Luxury Precision Needle */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-20%',
          translateY: '-20%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 0.9 : 1,
          rotate: isHovered ? -15 : 0,
        }}
        className="fixed top-0 left-0 pointer-events-none drop-shadow-[0_0_8px_rgba(139,92,246,0.9)]"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Futuristic Needle Arrow */}
          <path 
            d="M3 3L10.5 21L13.8 13.8L21 10.5L3 3Z" 
            fill="#FFFFFF" 
            stroke="#8B5CF6" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
          />
          <circle cx="13" cy="13" r="1.5" fill="#06B6D4" />
        </svg>
      </motion.div>
    </div>
  );
}