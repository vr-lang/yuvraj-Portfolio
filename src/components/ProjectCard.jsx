import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect, index }) {
  let spanClass = 'col-span-1 md:col-span-1';
  if (project.orientation === 'landscape') {
    spanClass = 'col-span-1 md:col-span-2';
  }

  const initialX = index % 3 === 0 ? -50 : index % 3 === 1 ? 50 : 0;
  const initialY = index % 3 === 2 ? 60 : 30;
  const initialRot = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: initialX, y: initialY, rotate: initialRot, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer relative bg-[#FFF9EA] border-2 border-[#171717] shadow-tactile hover:shadow-tactile-lg transition-all duration-300 transform hover:-translate-y-1.5 ${spanClass}`}
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between px-3 py-2 border-b-2 border-[#171717] bg-[#F7F1DF] text-xs font-mono-editorial font-bold">
        <span className="bg-[#171717] text-[#FFF9EA] px-2 py-0.5 text-[10px]">
          {project.tag}
        </span>
        <span className="text-[#171717]">
          {project.year}
        </span>
      </div>

      {/* Real Design Image Showcase (Preserving Original Proportions) */}
      <div className="relative overflow-hidden bg-[#E2D8C3] flex items-center justify-center p-2">
        <img
          src={project.image}
          alt={`Design Work ${project.tag}`}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#315FD8]/0 group-hover:bg-[#315FD8]/15 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#FFF9EA] text-[#171717] px-3.5 py-1.5 border-2 border-[#171717] shadow-tactile-sm font-mono-editorial text-xs font-bold flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-[#F05A36]" />
            <span>EXPAND DESIGN</span>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Metadata Bar - NO CLIENT LABELS / NO PARAGRAPHS */}
      <div className="px-3.5 py-2.5 border-t-2 border-[#171717] bg-[#FFF9EA] flex items-center justify-between font-mono-editorial text-xs font-bold text-[#171717]">
        <span>ARCHIVE // {project.tag}</span>
        <span className="bg-[#315FD8] text-[#FFF9EA] px-2 py-0.5 text-[10px]">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}
