import React from 'react';
import { PERSONAL_INFO } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] text-left">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold">Full-Stack &amp; Mobile App Architecture</p>
          <p>React, React Native, Java &amp; Spring Boot</p>
          <p>MySQL, MongoDB &amp; Redis Caching</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>SVCE Indore · B.Tech in IT (2025)</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            View All Projects ({">"})
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for Full-Time Roles &amp; Contracts</p>
          <p>Indore, India · {new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[17vw] md:text-[15vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          kapil bisen
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
              Contact
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
              LinkedIn
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
              GitHub
            </a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Kapil Bisen · Full Stack &amp; App Developer
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            {PERSONAL_INFO.email}
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
