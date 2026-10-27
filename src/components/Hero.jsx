import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PERSONAL_INFO } from '../data';
import { Server, Activity, Cpu, Database, CheckCircle2, ShieldCheck, Zap, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPinged, setIsPinged] = useState(false);
  const [latency, setLatency] = useState('12ms');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      // Automatically mute video as soon as user starts scrolling down the portfolio
      if (window.scrollY > 80) {
        if (videoRef.current && !videoRef.current.muted) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const triggerPing = () => {
    setIsPinged(true);
    const randomLatency = Math.floor(Math.random() * 6) + 7; // 7-12ms
    setLatency(`${randomLatency}ms`);
    setTimeout(() => setIsPinged(false), 2000);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#06080d]">
      
      {/* Background Video with Mobile-Optimized Framing */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted}
          playsInline 
          className="w-full h-full object-cover object-[center_top] sm:object-center"
        >
          <source src="/kapil_intro_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layered Lighting & Contrast Masks: Reduced shadow on mobile so video is clear & bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 via-25% to-transparent sm:via-transparent sm:to-black/50 z-10 pointer-events-none" />
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#06080d] via-[#06080d]/70 sm:via-[#06080d]/30 to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none z-10" />

      {/* Floating Audio Toggle Pill (Top Right on Mobile) */}
      <div className="md:hidden absolute top-20 right-5 z-30">
        <button
          onClick={toggleSound}
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-xl active:scale-95 transition-transform"
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-gray-400" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#ff2a2a] animate-pulse" />
          )}
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>
      </div>

      {/* Subtle Animated Tech Grid Overlay (Hidden on Mobile for Maximum Clarity) */}
      <div 
        className="hidden sm:block absolute inset-0 z-10 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content Container: Anchored cleanly at bottom on mobile */}
      <div className="absolute inset-0 z-20 px-5 sm:px-6 pb-6 sm:pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Status Badge with Live Pulsing Dot */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[#ff2a2a] text-[10px] sm:text-xs font-mono font-bold mb-2 sm:mb-4 uppercase tracking-wider shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse shadow-[0_0_8px_#ff2a2a]" />
            <span>Full Stack Developer | App Developer</span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-2xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 tracking-tight leading-tight sm:leading-none drop-shadow-xl"
          >
            Hi, I'm Kapil Bisen <br /> 
            <span className="text-transparent [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:1.5px_white] drop-shadow-2xl">
              Full Stack &amp; App Developer
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-200 text-xs sm:text-base md:text-lg font-medium mb-3 sm:mb-6 max-w-xl drop-shadow-lg leading-relaxed line-clamp-2 sm:line-clamp-none">
            Engineering scalable web applications, cross-platform mobile apps, and production full-stack systems with React, React Native, Java, Spring Boot, MySQL, MongoDB, and Redis.
          </p>

          {/* Action Buttons & Quick Ping */}
          <div className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3 w-full">
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full bg-white text-black font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_25px_rgba(255,42,42,0.4)] active:scale-95"
            >
              View Projects
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact"
              className="px-5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full bg-black/60 border border-white/30 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md shadow-md active:scale-95"
            >
              Contact Me
            </a>

            {/* Resume Button (Desktop) */}
            <a 
              href="mailto:kapilbisen7231@gmail.com?subject=Kapil%20Bisen%20Resume%20Request"
              className="hidden sm:inline-block px-4 py-2 text-xs md:text-sm rounded-full bg-white/10 hover:bg-white/20 text-white font-mono transition-all duration-300 backdrop-blur-md border border-white/10"
            >
              Download CV ↓
            </a>

            {/* Mobile Quick Telemetry Pill */}
            <div 
              onClick={triggerPing}
              className="flex md:hidden items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[10px] font-mono text-gray-300 cursor-pointer active:scale-95 transition-transform"
            >
              <span className={`w-2 h-2 rounded-full ${isPinged ? 'bg-emerald-400' : 'bg-[#ff2a2a]'} animate-pulse`} />
              <span>{isPinged ? 'OK' : latency} · 99.9%</span>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive System Status HUD (Desktop Only) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="hidden md:flex flex-col items-end gap-3 cursor-pointer group"
          onClick={triggerPing}
          title="Click to ping backend telemetry"
        >
          {/* Glassmorphic Telemetry Card */}
          <div className="rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-[#ff2a2a]/60 hover:shadow-[0_0_30px_rgba(255,42,42,0.3)] transition-all duration-500 max-w-xs text-left">
            
            {/* Header with Live Heartbeat */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 gap-4">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isPinged ? 'bg-emerald-400' : 'bg-[#ff2a2a]'} animate-pulse`} />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  SYSTEM STATUS
                </span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">
                {isPinged ? 'PING: OK' : 'ONLINE'}
              </span>
            </div>

            {/* Telemetry rows */}
            <div className="mt-3 space-y-1.5 font-mono text-[11px] text-gray-300">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Stack:</span>
                <span className="text-white font-bold">React · React Native · Java</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Response Latency:</span>
                <span className="text-red-400 font-bold">{latency}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Cache Layer:</span>
                <span className="text-white">Redis L2 (80%+ Bypass)</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Reliability:</span>
                <span className="text-emerald-400">99.99% Uptime</span>
              </div>
            </div>

            {/* Click to test button prompt */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="group-hover:text-white transition-colors">
                {isPinged ? '✓ Telemetry Refreshed' : '⚡ Click to Ping API'}
              </span>
              <Activity className={`w-3.5 h-3.5 text-[#ff2a2a] ${isPinged ? 'animate-spin' : ''}`} />
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              type="button"
              className="mt-3 w-full py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-white transition-all pointer-events-auto"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#ff2a2a] animate-pulse" />}
              <span>{isMuted ? "Unmute Intro Video" : "Mute Intro Video"}</span>
            </button>

          </div>

          <span className="text-white text-[10px] font-mono font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Production Cluster Telemetry
          </span>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-label="Scroll down to About"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;
