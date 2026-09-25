import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function ProjectViewer({ project, projects, onClose, onNavigate }) {
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(prevProject);
      if (e.key === 'ArrowRight') onNavigate(nextProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects, onClose, onNavigate, prevProject, nextProject]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171717]/90 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#FFF9EA] border-2 border-[#171717] shadow-tactile-lg overflow-hidden flex flex-col my-auto max-h-[92vh]"
        >
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-[#171717] bg-[#F7F1DF]">
            <div className="flex items-center gap-3 font-mono-editorial text-xs font-bold text-[#171717]">
              <span className="bg-[#315FD8] text-[#FFF9EA] px-2.5 py-0.5 border border-[#171717]">
                WORK VIEWER // {project.tag}
              </span>
              <span className="hidden sm:inline text-[#171717]/70">INDEX ({currentIndex + 1} / {projects.length})</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#F05A36] text-[#FFF9EA] border-2 border-[#171717] shadow-tactile-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono-editorial text-xs font-bold"
            >
              <X className="w-4 h-4" />
              <span>CLOSE ×</span>
            </button>
          </div>

          {/* Main Full-Size Image Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-[#E2D8C3] relative">
            <img
              src={project.image}
              alt={`Design ${project.tag}`}
              className="max-w-full max-h-[68vh] object-contain border-2 border-[#171717] shadow-tactile bg-white"
            />
          </div>

          {/* Bottom Bar: Minimal Metadata & Navigation Controls Only */}
          <div className="p-4 sm:p-6 border-t-2 border-[#171717] bg-[#FFF9EA] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-editorial text-xs font-bold">
            <div className="flex items-center gap-3 text-[#171717]">
              <span className="bg-[#171717] text-[#FFF9EA] px-2.5 py-1">
                {project.tag}
              </span>
              <span className="bg-[#F7F1DF] px-2.5 py-1 border border-[#171717] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#315FD8]" /> {project.year}
              </span>
            </div>

            {/* Prev / Next Nav */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate(prevProject)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-[#FFF9EA] hover:bg-[#315FD8] hover:text-white border-2 border-[#171717] shadow-tactile-sm transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREVIOUS</span>
              </button>

              <button
                onClick={() => onNavigate(nextProject)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-[#FFF9EA] hover:bg-[#315FD8] hover:text-white border-2 border-[#171717] shadow-tactile-sm transition-all"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
