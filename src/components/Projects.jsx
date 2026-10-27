import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, X, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('freelance');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.projectType === activeTab);

  return (
    <section id="projects" className="bg-[#0a0a0a] text-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Background Accent Typography */}
      <div className="absolute top-10 right-4 md:right-10 text-white/[0.03] text-[15vw] font-black uppercase tracking-tighter select-none pointer-events-none">
        WORK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-2xl">
            <div className="inline-block border border-red-500/40 rounded-full px-4 py-1 text-xs font-mono text-[#ff2a2a] font-bold mb-4 uppercase tracking-widest bg-red-950/20">
              Selected Deliverables
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              Featured <span className="text-transparent [-webkit-text-stroke:1.5px_#ff2a2a]">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 font-medium leading-relaxed">
              Real-world systems, cross-platform mobile architectures, and high-performance web platforms engineered with clean code.
            </p>
          </div>

          {/* Filter Tabs - Mobile Responsive Pill */}
          <div className="w-full sm:w-auto p-1.5 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between sm:justify-start gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('freelance')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'freelance'
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="sm:hidden">Freelance (4)</span>
              <span className="hidden sm:inline">Client &amp; Freelance (4)</span>
            </button>

            <button
              onClick={() => setActiveTab('demo')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="sm:hidden">Demo (3)</span>
              <span className="hidden sm:inline">Demo Prototypes (3)</span>
            </button>

            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All (7)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-[#121212] rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff2a2a]/60 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Project Image Frame */}
                <div 
                  className="relative w-full aspect-[16/10] overflow-hidden bg-black/60 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#ff2a2a] font-mono text-[11px] font-bold shadow-md">
                      {project.metrics}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#ff2a2a] text-white font-bold shadow-md">
                    {project.projectType === 'freelance' ? 'Client Work' : 'Demo'}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#ff2a2a] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-red-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-bold text-white group-hover:text-[#ff2a2a] flex items-center gap-1 transition-colors"
                >
                  <span>Specs &amp; Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {/* YashBharat Store buttons */}
                  {project.androidUrl && (
                    <a
                      href={project.androidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-mono font-bold transition-all"
                      title="Google Play Store"
                    >
                      Play Store
                    </a>
                  )}

                  {project.iosUrl && (
                    <a
                      href={project.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-mono font-bold transition-all"
                      title="Apple App Store"
                    >
                      App Store
                    </a>
                  )}

                  {/* Regular Live URL */}
                  {!project.androidUrl && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5"
                      title="Visit Live Website"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-[#141414] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#141414]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ff2a2a] font-bold">
                Project Detail // {selectedProject.id}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#ff2a2a] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Image Preview */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Category */}
              <div>
                <div className="font-mono text-xs text-[#ff2a2a] font-bold uppercase tracking-wider">
                  {selectedProject.category} · {selectedProject.projectType === 'freelance' ? 'Client Production' : 'Demo Prototype'}
                </div>
                <h3 className="text-3xl font-black text-white mt-1 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                    Key Features &amp; Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ff2a2a] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {selectedProject.androidUrl && (
                  <a
                    href={selectedProject.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <span>Google Play Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {selectedProject.iosUrl && (
                  <a
                    href={selectedProject.iosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    <span>Apple App Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {!selectedProject.androidUrl && selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
