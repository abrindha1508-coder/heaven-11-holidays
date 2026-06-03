import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Plane
} from 'lucide-react';

interface PremiumHeroProps {
  searchParams: {
    destination: string;
    budget: string;
    month: string;
    type: string;
    duration: string;
  };
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onOpenBooking: () => void;
}

const TYPEWRITER_TEXTS = [
  "Explore The World",
  "Discover New Destinations",
  "Luxury Travel Experiences",
  "Create Unforgettable Memories",
  "Travel Beyond Boundaries"
];

export const PremiumHero: React.FC<PremiumHeroProps> = (props) => {
  const { onOpenBooking } = props;

  // Parallax Mouse Hover state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35; // subtle shift factor
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePosition({ x, y });
  };

  // 2. Custom typewriter effect
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = TYPEWRITER_TEXTS[typewriterIndex];

    const handleType = () => {
      if (!isDeleting) {
        setTypewriterText(currentWord.substring(0, typewriterText.length + 1));
        setTypingSpeed(100);

        if (typewriterText === currentWord) {
          setTypingSpeed(2500); // pause at end of sentence
          setIsDeleting(true);
        }
      } else {
        setTypewriterText(currentWord.substring(0, typewriterText.length - 1));
        setTypingSpeed(50);

        if (typewriterText === "") {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
          setTypingSpeed(500); // pause before typing next sentence
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, typewriterIndex]);



  // 4. Staggered static particle setups to prevent re-generation
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50 + 40}%`, // middle to bottom of screen
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
    }));
  }, []);

  const clouds = useMemo(() => [
    { id: 1, top: '8%', scale: 0.7, duration: 90, delay: 0 },
    { id: 2, top: '22%', scale: 1.1, duration: 130, delay: -30 },
    { id: 3, top: '35%', scale: 0.8, duration: 110, delay: -60 }
  ], []);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      onMouseMove={handleMouseMove}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black font-sans"
    >
      {/* ================= BACKGROUND CINEMATIC DRONE ZOOM ================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06, rotate: -0.3 }}
          animate={{
            scale: [1.06, 1.12, 1.06],
            rotate: [0.3, -0.3, 0.3],
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{
            scale: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: "tween", ease: "easeOut", duration: 0.8 },
            y: { type: "tween", ease: "easeOut", duration: 0.8 }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            filter: 'brightness(1.10) contrast(1.10)'
          }}
        />
      </div>

      {/* ================= LUXURY DARK OVERLAYS ================= */}
      {/* Base overlay + smooth left-to-right dark gradient for flawless left-aligned typography legibility */}
      <div className="absolute inset-0 bg-black/10 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent z-1 pointer-events-none" />

      {/* ================= COMPASS & NAVIGATION GRID LINES (VECTOR MAP OVERLAY) ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08] z-1">
        <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle curved navigation pathways */}
          <path d="M 0,150 Q 400,280 800,150 T 1600,150" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0,400 Q 500,550 1000,400 T 2000,400" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0,650 Q 450,850 900,650 T 1800,650" fill="none" stroke="currentColor" strokeWidth="1" />

          <path d="M 250,0 Q 350,450 250,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" />
          <path d="M 700,0 Q 900,450 700,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" />
          <path d="M 1150,0 Q 1350,450 1150,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" />

          {/* Yachting/Aviation Compass Rose in Top-Right */}
          <g transform="translate(1350, 180) scale(1.4)">
            <circle cx="0" cy="0" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="66" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="0" y1="-85" x2="0" y2="85" stroke="currentColor" strokeWidth="1" />
            <line x1="-85" y1="0" x2="85" y2="0" stroke="currentColor" strokeWidth="1" />
            {/* North pointer */}
            <path d="M 0,0 L 8,-48 L 0,-62 L -8,-48 Z" fill="currentColor" opacity="0.8" />
            {/* South pointer */}
            <path d="M 0,0 L 8,48 L 0,62 L -8,48 Z" fill="currentColor" opacity="0.4" />
            {/* East pointer */}
            <path d="M 0,0 L 48,8 L 62,0 L 48,-8 Z" fill="currentColor" opacity="0.8" />
            {/* West pointer */}
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
        <motion.div
          key={p.id}
          className="absolute pointer-events-none z-1 flex items-center justify-center"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -320],
            x: [0, Math.sin(p.id) * 40],
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
            className="bg-[#00E5FF]/40 rotate-45 rounded-xs"
            style={{
              width: p.size,
              height: p.size,
              boxShadow: '0 0 8px rgba(0, 229, 255, 0.5)'
            }}
          />
        </motion.div>
      ))}

      {/* ================= DRIFTING CLOUDS ================= */}
      {clouds.map((c) => (
        <motion.div
          key={c.id}
          className="absolute left-0 pointer-events-none opacity-5 text-white z-1"
          style={{ top: c.top, scale: c.scale }}
          animate={{ x: ["-30vw", "110vw"] }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            delay: c.delay,
            ease: "linear",
          }}
        >
          <svg width="250" height="150" viewBox="0 0 200 120" fill="currentColor">
            <path d="M 50 80 A 30 30 0 0 1 80 50 A 45 45 0 0 1 150 50 A 35 35 0 0 1 180 80 A 20 20 0 0 1 180 100 L 50 100 A 20 20 0 0 1 50 80 Z" />
          </svg>
        </motion.div>
      ))}

      {/* ================= AIRPLANE TRANSIT ================= */}
      <motion.div
        initial={{ x: "-15vw", y: "65vh", opacity: 0, rotate: 18 }}
        animate={{
          x: "115vw",
          y: "12vh",
          opacity: [0, 0, 1, 1, 0, 0],
          rotate: [18, 14, 18]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear",
        }}
        className="absolute z-1 pointer-events-none text-white/20"
      >
        <div className="relative flex items-center">
          <Plane className="h-10 w-10 rotate-90 text-[#00E5FF]/25 drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
          <div className="absolute right-full top-1/2 -translate-y-1/2 h-[1px] w-[180px] border-t border-dashed border-[#00E5FF]/15 origin-right -rotate-8" />
        </div>
      </motion.div>

      {/* ================= CORE CONTENT WRAPPER ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full pt-28 pb-6">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
          
          {/* LEFT COLUMN: Headlines, subheadings, CTAs, and Stats (9 Cols) */}
          <div className="lg:col-span-9 xl:col-span-8 flex flex-col items-start text-left space-y-6 lg:space-y-7 select-none">
            
            {/* Elegant line badge EXPLORE. DREAM. DISCOVER. */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 select-none"
            >
              <span className="w-8 h-[1.5px] bg-[#00E5FF]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#00E5FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Explore. Dream. Discover.
              </span>
            </motion.div>

            {/* Headline Slide-up */}
            <div className="overflow-hidden py-1 text-left w-full">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight uppercase leading-[0.95]"
                style={{ filter: 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.7)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.45))' }}
              >
                Explore The World <br />
                <span 
                  className="text-[#00E5FF] font-normal lowercase tracking-wide block mt-2 text-4xl sm:text-6xl md:text-7xl leading-tight"
                  style={{ fontFamily: "'Great Vibes', 'Dancing Script', cursive", textTransform: 'none' }}
                >
                  One Journey At A Time
                </span>
              </motion.h1>
            </div>

            {/* Subheading & Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/95 font-medium leading-relaxed max-w-xl text-left"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.65))' }}
            >
              Discover amazing places at exclusive deals and make memories that last forever.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => {
                  const target = document.getElementById('trending-section');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 rounded-full bg-[#00E5FF] text-primary-dark font-black text-sm tracking-wide shadow-xl shadow-[#00E5FF]/10 hover:shadow-[#00E5FF]/30 hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                Explore Packages
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm tracking-wide bg-white/5 backdrop-blur-md hover:bg-white hover:text-primary-dark hover:border-white transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                Contact Us
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>


          </div>

        </div>

      </div>


    </motion.div>
  );
};
