import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#171717] text-[#FFF9EA] border-t-2 border-[#171717] py-8 px-4 sm:px-6 lg:px-8 font-mono-editorial text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <span className="bg-[#315FD8] text-[#FFF9EA] px-2 py-0.5 font-bold">YS '26</span>
          <span>© 2026 YUVRAJ SINGH. DESIGN ARCHIVE & EXPERIMENTAL PORTFOLIO.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#FFF9EA]/60 hidden sm:inline">MADE WITH RECT, TAILWIND & LERP PHYSICS</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-[#FFF9EA] text-[#171717] px-3 py-1 border border-[#FFF9EA] font-bold shadow-tactile-sm hover:bg-[#F4C84A] transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
