import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Move, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import FloatingArtwork from './FloatingArtwork';

export default function Hero({ activePreset }) {
  const containerRef = useRef(null);
  
  // Interaction states
  const [scannerStatus, setScannerStatus] = useState('STANDBY'); // 'STANDBY', 'ACTIVE', 'FRAME'
  const [hasInteracted, setHasInteracted] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Position tracking
  const targetPos = useRef({ x: 0, y: 0 });
  const lastSwitchPos = useRef({ x: 0, y: 0 });
  const lastSwitchTime = useRef(0);

  // Smooth LERP position state
  const [lerpPos, setLerpPos] = useState({ 
    x: -300, 
    y: -300, 
    offsetX: -50, 
    offsetY: -110,
    rotation: -1 
  });

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Scroll listener to hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setHasScrolled(true);
      else setHasScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Mouse/Touch Move
  const handleMove = (e) => {
    let clientX, clientY;
    if (e.touches && e.touches[0]) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    setCursorPos({ x: clientX, y: clientY });
    targetPos.current = { x: clientX, y: clientY };

    if (!hasInteracted) setHasInteracted(true);
    if (scannerStatus === 'STANDBY') setScannerStatus('ACTIVE');

    const now = Date.now();
    const distSinceLastSwitch = Math.sqrt(
      Math.pow(clientX - lastSwitchPos.current.x, 2) + 
      Math.pow(clientY - lastSwitchPos.current.y, 2)
    );

    // COOLDOWN LOGIC:
    // Only switch artwork if:
    // 1. Time since last switch > 900ms (ensures artwork remains visible long enough)
    // AND
    // 2. Cursor has traveled a meaningful distance (> 120px)
    if (now - lastSwitchTime.current > 900 && distSinceLastSwitch > 120) {
      lastSwitchTime.current = now;
      lastSwitchPos.current = { x: clientX, y: clientY };
      
      setProjectIndex((prev) => {
        const nextIdx = (prev + 1) % projects.length;
        setScannerStatus(`FRAME ${String(nextIdx + 1).padStart(2, '0')}`);
        return nextIdx;
      });
    }
  };

  const handleMouseLeave = () => {
    setScannerStatus('STANDBY');
  };

  // Smooth LERP animation loop
  useEffect(() => {
    let animationFrameId;

    const animateLerp = () => {
      setLerpPos((prev) => {
        const lerpFactor = 0.10; // Fluid trailing lag
        const nextX = prev.x + (targetPos.current.x - prev.x) * lerpFactor;
        const nextY = prev.y + (targetPos.current.y - prev.y) * lerpFactor;

        // Viewport bounds calculation
        const vW = window.innerWidth;
        const vH = window.innerHeight;

        let offX = -50;
        let offY = -110;

        // Intelligent offset: Prevent obscuring central YUVRAJ SINGH typography & viewport clipping
        const heroCenterX = vW / 2;
        const heroCenterY = vH / 2;
        const distFromCenter = Math.sqrt(
          Math.pow(targetPos.current.x - heroCenterX, 2) + 
          Math.pow(targetPos.current.y - heroCenterY, 2)
        );

        // If near center text area, push artwork to side
        if (distFromCenter < 220) {
          if (targetPos.current.x > heroCenterX) offX = 15; // Shift right
          else offX = -115; // Shift left
        } else {
          if (targetPos.current.x > vW * 0.75) offX = -105;
          else if (targetPos.current.x < vW * 0.25) offX = 10;

          if (targetPos.current.y < vH * 0.35) offY = 15;
          else if (targetPos.current.y > vH * 0.8) offY = -110;
        }

        const rot = Math.max(-3, Math.min(3, (targetPos.current.x - prev.x) * 0.12));

        return {
          x: nextX,
          y: nextY,
          offsetX: offX,
          offsetY: offY,
          rotation: rot
        };
      });

      animationFrameId = requestAnimationFrame(animateLerp);
    };

    animationFrameId = requestAnimationFrame(animateLerp);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const currentProject = projects[projectIndex];

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setScannerStatus('ACTIVE')}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMove}
      onTouchMove={handleMove}
      onTouchEnd={handleMouseLeave}
      className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden p-4 sm:p-8 cursor-none select-none transition-colors duration-500"
      style={{ backgroundColor: activePreset.bg }}
    >
      {/* Outer Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none"></div>

      {/* Main Canvas Frame */}
      <div 
        className="relative flex-1 w-full border-2 border-[#171717] shadow-tactile-lg flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: activePreset.canvasBg }}
      >
        
        {/* Top Coordinates & Tag */}
        <div className="flex items-center justify-between font-mono-editorial text-xs font-bold text-[#171717]/80 z-20">
          <div className="flex items-center gap-2 bg-[#FFF9EA] px-3 py-1 border border-[#171717] shadow-tactile-sm">
            <span className="w-2 h-2 rounded-full bg-[#F05A36]"></span>
            <span>FRAME // 001—HERO</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span>LOC: DELHI / IN</span>
            <span>LAT: 28.6139° N</span>
            <span className="bg-[#171717] text-[#FFF9EA] px-2 py-0.5">ARCHIVE 2026</span>
          </div>
        </div>

        {/* GIANT OVERSIZED BACKGROUND TYPOGRAPHY (PRESERVED) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden z-0 opacity-20 md:opacity-25">
          <motion.div 
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display font-black text-[18vw] leading-none tracking-tighter text-[#171717] uppercase whitespace-nowrap select-none -rotate-1"
          >
            PORTFOLIO
          </motion.div>
          <motion.div 
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
            className="font-display font-black text-[18vw] leading-none tracking-tighter text-[#315FD8] uppercase whitespace-nowrap select-none stroke-text"
          >
            CREATIVE
          </motion.div>
        </div>

        {/* CENTERPIECE: NAME LAYER & INTEGRATED EDITORIAL PORTRAIT (PRESERVED) */}
        <div className="relative z-10 my-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto w-full">
          
          {/* Typographic Name Layer */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block bg-[#171717] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-3 py-1 mb-4 border border-[#171717] shadow-tactile-sm">
              VISUAL DESIGNER & VIDEO EDITOR
            </div>

            <h1 className="font-serif-editorial font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#171717] leading-[0.85] tracking-tight drop-shadow-sm">
              YUVRAJ <br />
              <span className="font-display font-black text-[#315FD8] italic">SINGH</span>
            </h1>

            <p className="mt-6 max-w-md font-sans font-medium text-sm sm:text-base text-[#171717]/90 leading-relaxed bg-[#FFF9EA]/80 backdrop-blur-sm p-4 border border-[#171717] shadow-tactile-sm">
              Crafting high-impact visual identities, brutalist poster art, video edits, and editorial brand campaigns.
            </p>
          </motion.div>

          {/* Integrated Editorial Portrait */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-3 bg-[#F05A36] border-2 border-[#171717] shadow-tactile rotate-2 transition-transform group-hover:rotate-4"></div>
            
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-[#171717] border-2 border-[#171717] overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Yuvraj Singh Editorial Portrait"
                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono-editorial font-bold text-[#FFF9EA]">
                <span className="bg-[#171717]/90 px-2 py-1 border border-[#FFF9EA]/30">FIG 01 // PORTRAIT</span>
                <span className="bg-[#315FD8] px-2 py-1">2026</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM SCANNER STATUS & SCROLL PROMPT */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-[#171717] font-mono-editorial text-xs font-bold text-[#171717]">
          
          {/* REACTIVE SCANNER STATUS INDICATOR */}
          <div className="flex items-center gap-2 bg-[#FFF9EA] px-3.5 py-1.5 border-2 border-[#171717] shadow-tactile-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${scannerStatus === 'STANDBY' ? 'bg-[#171717]' : 'bg-[#277653] animate-pulse'}`}></span>
            <span className="uppercase tracking-wider">
              {scannerStatus === 'STANDBY' && 'SCANNER STANDBY // MOVE CURSOR'}
              {scannerStatus === 'ACTIVE' && 'SCANNER ACTIVE // DISCOVERING WORK'}
              {scannerStatus.startsWith('FRAME') && `SCANNER // ${scannerStatus}`}
            </span>
          </div>

          {/* ANIMATED SCROLL TO EXPLORE INDICATOR */}
          <AnimatePresence>
            {!hasScrolled && (
              <motion.a
                href="#skills"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2 bg-[#F4C84A] text-[#171717] px-4 py-2 border-2 border-[#171717] shadow-tactile-sm hover:bg-[#315FD8] hover:text-[#FFF9EA] transition-all group"
              >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform animate-bounce" />
              </motion.a>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* VISUAL-ONLY SCANNER POPUP ARTWORK */}
      <FloatingArtwork 
        currentProject={currentProject} 
        currentIndex={projectIndex}
        totalProjects={projects.length}
        position={lerpPos} 
        isVisible={scannerStatus !== 'STANDBY'} 
      />

      {/* CUSTOM CURSOR BADGE */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:flex items-center justify-center"
        animate={{
          x: cursorPos.x - 16,
          y: cursorPos.y - 16,
          scale: scannerStatus !== 'STANDBY' ? 1.2 : 0.8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
      >
        <div className="w-8 h-8 rounded-full bg-[#315FD8] text-[#FFF9EA] border border-[#171717] flex items-center justify-center text-[9px] font-mono-editorial font-bold shadow-tactile-sm">
          VIEW
        </div>
      </motion.div>

    </section>
  );
}
