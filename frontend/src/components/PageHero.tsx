import React, { useState, useMemo } from 'react';
import { m } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  targetAnchor: string;
  disableShadow?: boolean;
  buttonText?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  targetAnchor,
  disableShadow = false,
  buttonText = "Explore Packages Below"
}) => {
  // 1. Parallax Mouse Hover state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35; // subtle shift factor
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePosition({ x, y });
  };

  const handleScrollClick = () => {
    const target = document.getElementById(targetAnchor);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Staggered static particle setups
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50 + 40}%`, // middle to bottom of screen
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black font-sans select-none"
    >
      <link rel="preload" href={backgroundImage} as="image" fetchPriority="high" />
      {/* ================= BACKGROUND ZOOM DRONE SHOT ================= */}
      <div className="absolute inset-0 z-0">
        <m.div
          initial={{ opacity: 0, scale: 1.05, rotate: -0.5 }}
          animate={{ 
            opacity: 1.0, 
            scale: [1.05, 1.15, 1.05],
            rotate: [-0.5, 0.5, -0.5],
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 25, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 25, ease: "easeInOut" },
            x: { type: "tween", ease: "easeOut", duration: 0.8 },
            y: { type: "tween", ease: "easeOut", duration: 0.8 }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.95) contrast(1.05)'
          }}
        />
      </div>

      {/* ================= LUXURY DARK OVERLAYS ================= */}
      {/* Base black overlay with rich gradient to increase text contrast and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/50 z-1 pointer-events-none" />
      {/* Left-to-right gradient to make left-aligned text readable while keeping the right side of the background image fully clear */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1 pointer-events-none" />

      {/* ================= COMPASS & NAVIGATION GRID LINES (VECTOR OVERLAY) ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] z-1">
        <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle curved navigation pathways */}
          <path d="M 0,200 Q 500,320 1000,200 T 2000,200" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0,500 Q 450,680 900,500 T 1800,500" fill="none" stroke="currentColor" strokeWidth="1" />
          
          <path d="M 300,0 Q 400,450 300,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" />
          <path d="M 900,0 Q 1100,450 900,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" />
          
          {/* Yachting/Aviation Compass Rose in Top-Right */}
          <g transform="translate(1300, 220) scale(1.3)">
            <circle cx="0" cy="0" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="66" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="0" y1="-85" x2="0" y2="85" stroke="currentColor" strokeWidth="1" />
            <line x1="-85" y1="0" x2="85" y2="0" stroke="currentColor" strokeWidth="1" />
            <path d="M 0,0 L 8,-48 L 0,-62 L -8,-48 Z" fill="currentColor" opacity="0.8" />
            <path d="M 0,0 L 8,48 L 0,62 L -8,48 Z" fill="currentColor" opacity="0.4" />
            <path d="M 0,0 L 48,8 L 62,0 L 48,-8 Z" fill="currentColor" opacity="0.8" />
            <path d="M 0,0 L -48,8 L -62,0 L -48,-8 Z" fill="currentColor" opacity="0.4" />
            <text x="-4" y="-90" fill="currentColor" fontSize="10" fontWeight="bold">N</text>
            <text x="-4" y="99" fill="currentColor" fontSize="10" fontWeight="bold">S</text>
            <text x="91" y="3" fill="currentColor" fontSize="10" fontWeight="bold">E</text>
            <text x="-104" y="3" fill="currentColor" fontSize="10" fontWeight="bold">W</text>
          </g>
        </svg>
      </div>

      {/* ================= TWINKLING STAR PARTICLES EFFECT ================= */}
      {particles.map((p) => (
        <m.div
          key={p.id}
          className="absolute pointer-events-none z-1 flex items-center justify-center"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -320],
            x: [0, Math.sin(p.id) * 35],
            opacity: [0, 0.8, 0.2, 0.8, 0],
            scale: [0.6, 1.2, 0.8, 1.2, 0.6],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          {/* Elegant diamond-shaped twinkling star */}
          <div 
            className="bg-[#00E5FF]/30 rotate-45 rounded-xs"
            style={{
              width: p.size,
              height: p.size,
              boxShadow: '0 0 8px rgba(0, 229, 255, 0.4)'
            }}
          />
        </m.div>
      ))}

      {/* ================= CORE CONTENT WRAPPER ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col justify-between h-full pt-28 pb-12">
        {/* Empty flex spacer for centering content */}
        <div className="flex-1" />

        {/* Hero Headlines */}
        <div className="max-w-3xl space-y-6 md:space-y-8 select-none text-left flex flex-col items-start">
          {/* Subtitle / Badge with Sparkles (fade pop) */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00E5FF] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              {subtitle}
            </span>
          </m.div>

          {/* Title Staggered Reveal Slide-up */}
          <div className="overflow-hidden py-1">
            <m.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className={`font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.1] text-left ${
                disableShadow ? '' : 'drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
              }`}
            >
              {title}
            </m.h1>
          </div>

          {/* Description Fade Pop */}
          <m.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="max-w-2xl text-left"
          >
            <p className={`text-xs sm:text-sm md:text-base text-white/95 font-semibold leading-relaxed ${
              disableShadow ? '' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
            }`}>
              {description}
            </p>
          </m.div>

          {/* Action scroll trigger button */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-4"
          >
            <button
              onClick={handleScrollClick}
              className="group px-8 py-3.5 rounded-full bg-[#00E5FF] text-primary-dark font-bold text-xs tracking-wider uppercase shadow-xl shadow-[#00E5FF]/10 hover:shadow-[#00E5FF]/20 hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 cursor-pointer"
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          </m.div>
        </div>

        {/* Empty flex spacer */}
        <div className="flex-grow flex-shrink flex-1" />
      </div>
    </m.div>
  );
};
