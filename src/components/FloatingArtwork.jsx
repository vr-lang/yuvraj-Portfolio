import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingArtwork({ currentProject, currentIndex, totalProjects, position, isVisible }) {
  if (!isVisible || !currentProject) return null;

  const frameLabel = `FRAME ${String(currentIndex + 1).padStart(2, '0')}`;
  const countLabel = `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalProjects).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(${position.offsetX}%, ${position.offsetY}%) rotate(${position.rotation}deg)`,
          }}
          className="w-56 sm:w-64 md:w-72 bg-[#FFF9EA] p-2.5 border-2 border-[#171717] shadow-tactile-lg"
        >
          {/* Header Bar: Minimal Frame Label & Count ONLY */}
          <div className="flex items-center justify-between border-b border-[#171717] pb-1.5 mb-2 font-mono-editorial text-[10px] font-bold">
            <span className="bg-[#171717] text-[#FFF9EA] px-2 py-0.5 tracking-wider">
              {frameLabel}
            </span>
            <span className="text-[#171717]/80">
              {countLabel}
            </span>
          </div>

          {/* High-Resolution Real Design Image Only */}
          <div className="relative overflow-hidden border border-[#171717] bg-[#F7F1DF] aspect-auto">
            <img
              src={currentProject.image}
              alt="Yuvraj Singh Design Work"
              className="w-full h-auto max-h-[260px] object-contain"
              loading="eager"
            />
          </div>

          {/* Minimal Bottom Tag Only */}
          <div className="mt-2 flex items-center justify-between font-mono-editorial text-[10px] font-bold text-[#171717]">
            <span>{currentProject.tag}</span>
            <span className="bg-[#171717] text-[#FFF9EA] px-1.5 py-0.5">
              {currentProject.year}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
