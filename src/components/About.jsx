import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, GraduationCap, Sparkles } from 'lucide-react';
import { profileDetails } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#171717]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Editorial Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#FFF9EA] border-2 border-[#171717] shadow-tactile-lg p-6 sm:p-8 relative"
        >
          <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3 mb-6">
            <span className="font-mono-editorial text-xs font-bold text-[#FFF9EA] bg-[#171717] px-2.5 py-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#F4C84A]" /> PROFILE // YUVRAJ SINGH
            </span>
            <span className="font-mono-editorial text-xs font-bold text-[#315FD8]">2026 EDITION</span>
          </div>

          <div className="relative overflow-hidden border-2 border-[#171717] mb-6 aspect-square bg-[#E2D8C3]">
            <img
              src="/profile.jpg"
              alt="Yuvraj Singh Portrait"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none"></div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-black text-2xl text-[#171717] uppercase">YUVRAJ SINGH</h3>
            <div className="flex items-center gap-2 font-mono-editorial text-xs font-bold text-[#277653]">
              <GraduationCap className="w-4 h-4 text-[#277653]" />
              <span>{profileDetails.education}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Bio & Software Badges (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F05A36] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-3 py-1 mb-3 border border-[#171717] shadow-tactile-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DESIGN PHILOSOPHY</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#171717] uppercase tracking-tight leading-tight">
              DESIGN THAT DEMANDS <span className="text-[#F05A36] italic font-serif-editorial">ATTENTION</span>
            </h2>

            <p className="font-sans text-base text-[#171717]/90 leading-relaxed mt-4 bg-[#FFF9EA] p-6 border-2 border-[#171717] shadow-tactile">
              {profileDetails.bio}
            </p>
          </div>

          {/* Interactive Software & Creative Skill Badges */}
          <div>
            <h4 className="font-mono-editorial text-xs font-bold uppercase text-[#171717] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#315FD8]" /> CREATIVE TOOLKIT & CORE COMPETENCIES:
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {profileDetails.tools.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#FFF9EA] hover:bg-[#315FD8] hover:text-[#FFF9EA] text-[#171717] px-3.5 py-2 border-2 border-[#171717] shadow-tactile-sm font-mono-editorial text-xs font-bold transition-all cursor-default transform hover:-translate-y-0.5"
                >
                  <span>{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
