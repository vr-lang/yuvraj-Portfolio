import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MoveRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function HorizontalStrip({ onSelectProject }) {
  const containerRef = useRef(null);

  // Track vertical scroll progress inside container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map vertical scroll progress to horizontal translation (-0% to -65%)
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '-60%']);

  // Selected horizontal showcase items
  const horizontalItems = projects.slice(0, 8);

  return (
    <section ref={containerRef} className="w-full py-16 bg-[#FFF9EA] border-t-2 border-b-2 border-[#171717] overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-[#171717] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-2.5 py-1">
            SEQUENCE // 02
          </span>
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#171717] uppercase tracking-tight flex items-center gap-2">
            <span>HORIZONTAL VISUAL STRIP</span>
            <MoveRight className="w-5 h-5 text-[#315FD8] animate-pulse" />
          </h3>
        </div>

        <span className="hidden sm:inline font-mono-editorial text-xs font-bold text-[#171717]/70">
          [ SCROLL DOWN TO MOVE STRIP → ]
        </span>
      </div>

      {/* Horizontal Moving Strip */}
      <div className="w-full overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-6 pl-4 sm:pl-8 w-max">
          {horizontalItems.map((project, idx) => (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(project)}
              whileHover={{ scale: 1.03, y: -4 }}
              className="w-72 sm:w-80 md:w-96 shrink-0 bg-[#F7F1DF] border-2 border-[#171717] shadow-tactile p-3 cursor-pointer group transition-all"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#171717] pb-1.5 mb-2 font-mono-editorial text-[10px] font-bold">
                <span className="bg-[#315FD8] text-[#FFF9EA] px-2 py-0.5">
                  {project.tag}
                </span>
                <span className="text-[#171717]">{project.year}</span>
              </div>

              {/* Artwork Frame */}
              <div className="relative overflow-hidden border border-[#171717] aspect-[4/3] bg-[#171717]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-scanlines opacity-30 pointer-events-none"></div>
              </div>

              {/* Bottom Label Only - NO LONG PARAGRAPHS */}
              <div className="mt-2.5 flex items-center justify-between font-mono-editorial text-xs font-bold text-[#171717]">
                <span className="font-display font-black uppercase text-sm group-hover:text-[#315FD8] transition-colors truncate max-w-[200px]">
                  {project.title}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 border border-[#171717] uppercase" style={{ backgroundColor: project.accent, color: '#FFF9EA' }}>
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
