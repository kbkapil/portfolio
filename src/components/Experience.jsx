import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#111111] text-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Background Accent Typography */}
      <div className="absolute top-10 left-4 md:left-10 text-white/[0.03] text-[15vw] font-black uppercase tracking-tighter select-none pointer-events-none">
        CAREER
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block border border-red-500/40 rounded-full px-4 py-1 text-xs font-mono text-[#ff2a2a] font-bold mb-4 uppercase tracking-widest bg-red-950/20">
            Timeline &amp; Credentials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
            Experience &amp; <span className="text-transparent [-webkit-text-stroke:1.5px_#ff2a2a]">Education</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 font-medium leading-relaxed">
            Professional internships, client delivery track record, and formal computer science engineering foundations.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-8 relative">
          
          {EXPERIENCES.map((exp, idx) => {
            const isEdu = exp.id === 'edu';
            return (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-[#181818] rounded-3xl p-7 md:p-9 border border-white/10 hover:border-[#ff2a2a]/60 transition-all duration-500 shadow-xl relative overflow-hidden group"
              >
                {/* Red Accent Bar on Hover */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
                      <span className="font-mono text-xs uppercase tracking-wider text-[#ff2a2a] font-bold">
                        {isEdu ? 'Academic Degree' : exp.id === 'freelance' ? 'Production Client Delivery' : 'Enterprise Internship'}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="text-gray-300 font-semibold text-base">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-400 shrink-0">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold">
                      {exp.period}
                    </span>
                    <span className="text-gray-400">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="pt-5 space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#ff2a2a] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-black text-xs font-mono font-bold text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;
