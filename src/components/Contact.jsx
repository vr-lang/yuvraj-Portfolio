import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Share2, ExternalLink, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yuvrajsingh.design@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#171717]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#315FD8] text-[#FFF9EA] border-2 border-[#171717] shadow-tactile-lg p-8 sm:p-12 md:p-16 relative overflow-hidden"
      >
        {/* Background Dot Texture */}
        <div className="absolute inset-0 bg-dot-grid-dense opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 bg-[#F4C84A] text-[#171717] font-mono-editorial text-xs font-bold px-3 py-1 mb-6 border-2 border-[#171717] shadow-tactile-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT // OPEN FOR COMMISSIONS</span>
          </div>

          {/* BOLD TYPOGRAPHIC POSTER TITLE */}
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.9] tracking-tighter text-[#FFF9EA] drop-shadow-md">
            LET'S MAKE <br />
            <span className="font-serif-editorial italic text-[#F4C84A]">SOMETHING</span> <br />
            WORTH LOOKING AT.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FFF9EA]/90 max-w-lg mx-auto mt-6 leading-relaxed">
            Available for freelance visual identities, poster artwork, social media campaigns, and motion editing projects.
          </p>

          {/* Direct Email Action Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F05A36] text-[#FFF9EA] font-mono-editorial text-sm font-bold px-8 py-4 border-2 border-[#171717] shadow-tactile hover:bg-[#171717] transition-all transform hover:-translate-y-0.5 active-tactile"
            >
              <Mail className="w-5 h-5" />
              <span>SEND AN EMAIL →</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFF9EA] text-[#171717] font-mono-editorial text-sm font-bold px-6 py-4 border-2 border-[#171717] shadow-tactile hover:bg-[#F4C84A] transition-all transform hover:-translate-y-0.5 active-tactile"
            >
              {copied ? <Check className="w-5 h-5 text-[#277653]" /> : <Copy className="w-5 h-5 text-[#315FD8]" />}
              <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Social Links Cards */}
          <div className="mt-14 pt-8 border-t-2 border-[#FFF9EA]/30 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="mailto:yuvrajsingh.design@gmail.com"
              className="flex items-center justify-between p-3.5 bg-[#FFF9EA] text-[#171717] border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono-editorial text-xs font-bold"
            >
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#F05A36]" /> EMAIL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#FFF9EA] text-[#171717] border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono-editorial text-xs font-bold"
            >
              <span className="flex items-center gap-1.5"><Share2 className="w-4 h-4 text-[#F05A36]" /> INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#FFF9EA] text-[#171717] border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono-editorial text-xs font-bold"
            >
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#0A66C2]" /> LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#FFF9EA] text-[#171717] border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono-editorial text-xs font-bold"
            >
              <span className="flex items-center gap-1.5"><ExternalLink className="w-4 h-4 text-[#1769FF]" /> BEHANCE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
