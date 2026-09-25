import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import HorizontalStrip from './components/HorizontalStrip';
import PortfolioArchive from './components/PortfolioArchive';
import ProjectViewer from './components/ProjectViewer';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects, heroPresets } from './data/projects';

export default function App() {
  const [activePreset, setActivePreset] = useState(heroPresets[0]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F7F1DF] text-[#171717] font-sans antialiased flex flex-col selection:bg-[#315FD8] selection:text-white">
      
      {/* Sticky Minimal Navbar */}
      <Navbar
        activePreset={activePreset}
        onPresetChange={setActivePreset}
      />

      <main className="flex-1 w-full">
        {/* Interactive Hero Canvas Section */}
        <Hero activePreset={activePreset} />

        {/* Dedicated Skills & Tools Section */}
        <Skills />

        {/* Horizontal Scroll Visual Strip */}
        <HorizontalStrip onSelectProject={setSelectedProject} />

        {/* Unified Visual Portfolio Archive */}
        <PortfolioArchive onSelectProject={setSelectedProject} />

        {/* Editorial About Profile */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Poster Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Lightbox Modal Viewer */}
      {selectedProject && (
        <ProjectViewer
          project={selectedProject}
          projects={projects}
          onClose={() => setSelectedProject(null)}
          onNavigate={(nextProj) => setSelectedProject(nextProj)}
        />
      )}

    </div>
  );
}
