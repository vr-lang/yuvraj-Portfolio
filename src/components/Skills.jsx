import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#171717] relative">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#F05A36] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-3 py-1 mb-3 border border-[#171717] shadow-tactile-sm">
            <Wrench className="w-3.5 h-3.5" />
            <span>CREATIVE TOOLKIT // 01—06</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#171717] uppercase tracking-tight leading-none">
            SKILLS & <span className="text-[#315FD8] italic font-serif-editorial">TOOLS</span>
          </h2>
          <p className="font-sans text-sm text-[#171717]/80 max-w-xl mt-3">
            Primary creative software and technical workflows used for poster design, video editing, social media campaigns, and brand identity systems.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFF9EA] px-3.5 py-1.5 border-2 border-[#171717] shadow-tactile-sm font-mono-editorial text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-[#277653]" />
          <span>PRODUCTION READY</span>
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
            className="group relative bg-[#FFF9EA] border-2 border-[#171717] shadow-tactile hover:shadow-tactile-lg transition-all duration-300 p-6 flex flex-col justify-between"
          >
            {/* Top Bar Label */}
            <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3 mb-5 font-mono-editorial text-xs font-bold">
              <span className="bg-[#171717] text-[#FFF9EA] px-2.5 py-0.5 text-[10px]">
                {skill.tag}
              </span>
              <span className="text-[#171717]/60 group-hover:text-[#315FD8] transition-colors">
                TOOL // 0{index + 1}
              </span>
            </div>

            {/* Logo + Name Header */}
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-14 h-14 shrink-0 rounded-lg p-2.5 border-2 border-[#171717] shadow-tactile-sm group-hover:scale-105 transition-transform bg-white flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: skill.svg }}
              />

              <div>
                <h3 className="font-display font-black text-lg text-[#171717] uppercase tracking-tight leading-tight group-hover:text-[#315FD8] transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono-editorial text-[10px] font-bold text-[#F05A36] uppercase tracking-wider block mt-0.5">
                  {skill.category}
                </span>
              </div>
            </div>

            {/* Compact Function Description */}
            <div className="pt-3 border-t border-[#171717]/20 flex items-center justify-between font-sans text-xs text-[#171717]/80">
              <span>{skill.description}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#F4C84A] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Accent Corner Flash */}
            <div 
              className="absolute top-0 right-0 w-3 h-3 border-b-2 border-l-2 border-[#171717] transition-colors"
              style={{ backgroundColor: skill.accent }}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}
