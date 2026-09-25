import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { profileDetails } from '../data/projects';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#171717]">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-[#277653] text-[#FFF9EA] font-mono-editorial text-xs font-bold px-3 py-1 mb-3 border border-[#171717] shadow-tactile-sm">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE // 2024—PRESENT</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl text-[#171717] uppercase tracking-tight leading-none">
          CREATIVE <span className="text-[#277653] italic font-serif-editorial">JOURNEY</span>
        </h2>
      </div>

      {/* Visual Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profileDetails.timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#FFF9EA] border-2 border-[#171717] shadow-tactile p-6 flex flex-col justify-between hover:shadow-tactile-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b-2 border-[#171717] pb-2">
                <span className="font-mono-editorial text-sm font-bold bg-[#171717] text-[#FFF9EA] px-2.5 py-1">
                  {item.year}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#277653]" />
              </div>

              <h3 className="font-display font-black text-lg text-[#171717] uppercase leading-tight">
                {item.title}
              </h3>

              {item.role && (
                <span className="inline-block font-mono-editorial text-xs font-bold text-[#315FD8] bg-[#EAF0FF] px-2 py-0.5 border border-[#315FD8]/40 mt-1">
                  {item.role}
                </span>
              )}

              <p className="font-sans text-xs text-[#171717]/80 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#171717]/20 flex items-center justify-between text-[10px] font-mono-editorial text-[#171717]/60 font-bold">
              <span>MILESTONE // 0{idx + 1}</span>
              <span>VERIFIED</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
