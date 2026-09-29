import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Pointer Needle (Instant & Tight)
  const pointerSpring = { damping: 32, stiffness: 500, mass: 0.15 };
  const cursorX = useSpring(mouseX, pointerSpring);
  const cursorY = useSpring(mouseY, pointerSpring);

  // Magnetic Ring (Silky Smooth)
  const ringSpring = { damping: 26, stiffness: 240, mass: 0.5 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  // Ambient Halo
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
      const isInteractive = e.target.closest('button, a, input, [role="button"], .group, pre');
      setIsHovered(!!isInteractive);
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
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-999 overflow-hidden">
      {/* 1. Ultraviolet Ambient Aura */}
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-[500px] 2xl:w-[750px] h-[500px] 2xl:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(6,182,212,0.05)_45%,transparent_70%)] blur-[100px]"
      />

      {/* 2. Magnetic Interactive Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.45 : 1,
          borderColor: isHovered ? 'rgba(139, 92, 246, 0.75)' : 'rgba(255, 255, 255, 0.22)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border backdrop-blur-2xs"
      />

      {/* 3. Aerodynamic Precision Arrow Pointer (NO TEXT) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-15%',
          translateY: '-15%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.1 : 1,
          rotate: isHovered ? -12 : 0,
        }}
        className="fixed top-0 left-0 drop-shadow-[0_0_10px_rgba(139,92,246,0.85)]"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
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