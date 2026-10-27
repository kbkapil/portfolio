import React from 'react';
import stackImage from '../assets/about/kapil_about.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import { PERSONAL_INFO } from '../data';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[290px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 text-left border border-white/10">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              
              {/* Image Container */}
              <div className="w-full aspect-[4/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-white/10 relative">
                <img 
                  src={stackImage} 
                  alt="Kapil Bisen" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-emerald-400 font-bold">
                  ● ACTIVE DEV
                </div>
              </div>

              {/* ID Card Metadata */}
              <div className="mt-3 space-y-1 text-white">
                <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  DEV ID // 2025-KB
                </div>
                <div className="font-black text-lg tracking-tight">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-gray-300 font-medium">
                  {PERSONAL_INFO.role}
                </div>
                <div className="text-[11px] text-gray-400 font-mono pt-1 border-t border-white/10 flex justify-between">
                  <span>SVCE Indore '25</span>
                  <span>Indore, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20 text-left">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">{PERSONAL_INFO.name}</span>, a passionate Full Stack Developer and App Developer based in Indore, India, dedicated to crafting clean, high-performance, and scalable web platforms, mobile applications, and enterprise systems.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-bold text-black uppercase tracking-wider">{stat.label}</div>
                <div className="text-[10px] text-white/80 font-mono mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>

          {/* Technology Badges Row */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-black">
              CORE TECHNOLOGIES &amp; FRAMEWORKS
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-2 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-md">
                Java 17 / OOP
              </span>
              <span className="px-4 py-2 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-md">
                Spring Boot 3
              </span>
              <span className="px-4 py-2 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-md">
                MySQL &amp; MongoDB
              </span>
              <span className="px-4 py-2 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-md">
                Redis Caching
              </span>
              <span className="px-4 py-2 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-md">
                React &amp; React Native
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
