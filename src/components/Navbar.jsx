import React, { useState } from 'react';
import { Sparkles, Circle, Menu, X } from 'lucide-react';
import { heroPresets } from '../data/projects';

export default function Navbar({ activePreset, onPresetChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9EA]/90 backdrop-blur-md border-b-2 border-[#171717] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-display font-black text-xl tracking-wider text-[#171717] hover:text-[#315FD8] transition-colors flex items-center gap-2">
            <span className="bg-[#171717] text-[#FFF9EA] px-2 py-0.5 text-xs font-mono-editorial font-bold shadow-tactile-sm">YS</span>
            <span>YUVRAJ / <span className="text-[#315FD8]">VISUAL ARCHIVE</span></span>
          </a>
        </div>

        {/* Center: Theme Color Canvas Switcher */}
        <div className="hidden lg:flex items-center gap-2 bg-[#F7F1DF] px-3 py-1.5 border-2 border-[#171717] shadow-tactile-sm">
          <span className="text-[11px] font-mono-editorial font-bold uppercase text-[#171717]/70 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#F05A36]" /> CANVAS COLOR:
          </span>
          {heroPresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => onPresetChange(preset)}
              title={preset.name}
              className={`w-5 h-5 rounded-full border border-[#171717] transition-all transform hover:scale-125 ${
                activePreset.name === preset.name ? 'ring-2 ring-[#315FD8] scale-110 shadow-sm' : 'opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: preset.canvasBg }}
            />
          ))}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-mono-editorial font-bold text-[#277653] bg-[#EBF7F1] px-2.5 py-1 border-2 border-[#171717]">
            <span className="w-2 h-2 rounded-full bg-[#277653] animate-pulse"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>

          <nav className="flex items-center gap-4 text-xs font-mono-editorial font-bold">
            <button 
              onClick={() => scrollTo('hero')} 
              className="hover:text-[#315FD8] uppercase transition-colors px-2 py-1"
            >
              [ HERO ]
            </button>
            <button 
              onClick={() => scrollTo('archive')} 
              className="hover:text-[#315FD8] uppercase transition-colors px-2 py-1"
            >
              [ WORK ]
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-[#315FD8] uppercase transition-colors px-2 py-1"
            >
              [ ABOUT ]
            </button>
            <button 
              onClick={() => scrollTo('experience')} 
              className="hover:text-[#315FD8] uppercase transition-colors px-2 py-1"
            >
              [ EXPERIENCE ]
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="bg-[#315FD8] text-[#FFF9EA] px-3 py-1 border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              LET'S TALK →
            </button>
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#171717] bg-[#FFF9EA] shadow-tactile-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9EA] border-b-2 border-[#171717] px-4 py-6 space-y-4">
          <div className="flex items-center gap-2 justify-center pb-4 border-b border-[#171717]/20">
            <span className="text-xs font-mono-editorial font-bold uppercase text-[#171717]">CANVAS COLOR:</span>
            {heroPresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => onPresetChange(preset)}
                className="w-6 h-6 rounded-full border border-[#171717]"
                style={{ backgroundColor: preset.canvasBg }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3 font-mono-editorial font-bold text-center text-sm">
            <button onClick={() => scrollTo('archive')} className="py-2 border border-[#171717] bg-[#F7F1DF]">
              [ WORK ARCHIVE ]
            </button>
            <button onClick={() => scrollTo('about')} className="py-2 border border-[#171717] bg-[#F7F1DF]">
              [ ABOUT YUVRAJ ]
            </button>
            <button onClick={() => scrollTo('experience')} className="py-2 border border-[#171717] bg-[#F7F1DF]">
              [ EXPERIENCE ]
            </button>
            <button onClick={() => scrollTo('contact')} className="py-2 bg-[#315FD8] text-white border-2 border-[#171717]">
              LET'S TALK →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
