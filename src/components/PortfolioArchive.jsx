import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioArchive({ onSelectProject }) {
  return (
    <section id="archive" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#171717] relative">
      
      {/* Editorial Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 bg-[#315FD8] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-3 py-1 mb-3 border border-[#171717] shadow-tactile-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>BODY OF WORK // 001—16</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#171717] uppercase tracking-tight leading-none">
            THE VISUAL <span className="text-[#315FD8] italic font-serif-editorial">ARCHIVE</span>
          </h2>
          <p className="font-sans text-sm text-[#171717]/80 max-w-xl mt-3">
            Continuous graphic design collection showcasing original posters, editorial identity, social graphics, and visual creative work.
          </p>
        </div>

        <div className="bg-[#FFF9EA] px-3.5 py-2 border-2 border-[#171717] shadow-tactile font-mono-editorial text-xs font-bold text-[#171717]">
          <span>TOTAL WORKS // 16 DESIGNS</span>
        </div>
      </motion.div>

      {/* Asymmetric Masonry Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={onSelectProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Grid Footnote */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FFF9EA] text-[#171717] font-mono-editorial text-xs font-bold px-4 py-2 border-2 border-[#171717] shadow-tactile-sm">
          <Sparkles className="w-4 h-4 text-[#F4C84A]" />
          <span>END OF VISUAL ARCHIVE // 16 WORKS DISPLAYED</span>
        </div>
      </div>

    </section>
  );
}
