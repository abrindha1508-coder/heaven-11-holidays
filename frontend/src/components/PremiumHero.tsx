import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import homepageHeroImg from '../assets/homepageheroimg.png';

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

export const PremiumHero: React.FC<PremiumHeroProps> = ({
  onOpenBooking
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-900 font-sans pt-24 pb-32 sm:pb-40">

      {/* ================= BACKGROUND: PREMIUM IMAGE WITH OVERLAYS & ANIMATION ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background Image with slow zoom animation */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-zoom scale-105"
          style={{ backgroundImage: `url(${homepageHeroImg})` }}
        />

        {/* Soft cloud/fog layers moving across the background */}
        <div className="absolute inset-x-0 bottom-0 top-1/4 pointer-events-none overflow-hidden z-1">
          {/* Cloud 1 */}
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[180px] bg-white/5 blur-[100px] rounded-full animate-drift-cloud-1" />
          {/* Cloud 2 */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[140px] bg-white/4 blur-[80px] rounded-full animate-drift-cloud-2" />
          {/* Cloud 3 */}
          <div className="absolute top-10 left-1/3 w-[350px] h-[120px] bg-white/5 blur-[70px] rounded-full animate-drift-cloud-3" />
        </div>

        {/* Curved dotted flight path & airplane */}
        <svg viewBox="0 0 1200 300" className="absolute top-12 left-0 w-full h-[300px] pointer-events-none z-1 overflow-visible opacity-85">
          <path
            id="hero-flight-path"
            d="M -100,160 Q 600,20 1300,120"
            fill="none"
            stroke="rgba(0, 229, 255, 0.25)"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="animate-flight-dash"
          />
          <g>
            <g transform="rotate(90) translate(-12, -12)">
              <path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
                fill="#00E5FF"
                className="drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
              />
            </g>
            <animateMotion dur="24s" repeatCount="indefinite" rotate="auto">
              <mpath href="#hero-flight-path" />
            </animateMotion>
          </g>
        </svg>

        {/* Subtle cyan glowing particles floating slowly */}
        <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
          <div className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-[#00E5FF]/45 blur-[1.5px] shadow-[0_0_8px_#00E5FF] animate-float-particle-1" />
          <div className="absolute top-[35%] left-[75%] w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 blur-[1.5px] shadow-[0_0_6px_#00E5FF] animate-float-particle-2" />
          <div className="absolute top-[65%] left-[30%] w-2.5 h-2.5 rounded-full bg-[#00E5FF]/35 blur-[2px] shadow-[0_0_10px_#00E5FF] animate-float-particle-3" />
          <div className="absolute top-[50%] left-[10%] w-2 h-2 rounded-full bg-[#00E5FF]/50 blur-[1.5px] shadow-[0_0_8px_#00E5FF] animate-float-particle-2" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-[75%] left-[66%] w-1.5 h-1.5 rounded-full bg-[#00E5FF]/45 blur-[1.5px] shadow-[0_0_6px_#00E5FF] animate-float-particle-1" style={{ animationDelay: '-6s' }} />
          <div className="absolute top-[20%] left-[85%] w-2 h-2 rounded-full bg-[#00E5FF]/40 blur-[2px] shadow-[0_0_8px_#00E5FF] animate-float-particle-3" style={{ animationDelay: '-2s' }} />
        </div>

        {/* Deep, modern gradients overlay */}
        {/* 1. Centered dark slate overlay to maximize readability of centered headings */}
        <div className="absolute inset-0 bg-slate-950/35 z-2" />
        
        {/* 2. Modern top/bottom vignette to integrate header and bottom waves smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/60 z-2" />

        {/* 3. Radial ambient glow in the center to make the content stand out */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px] mix-blend-screen animate-pulse z-2" style={{ animationDuration: '8s' }} />
      </div>


      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex-1 flex flex-col items-start justify-center text-left">
        
        <div className="max-w-2xl w-full flex flex-col items-start text-left space-y-6 sm:space-y-8 select-none">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-accent text-xs sm:text-sm font-extrabold uppercase tracking-widest justify-start"
          >
            <Plane className="h-4.5 w-4.5 rotate-90 text-accent animate-pulse" />
            <span className="drop-shadow-md">Explore. Dream. Discover.</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] text-left"
            >
              Explore The World <br />
              With <span className="text-accent">Haven11 Holidays</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base text-white/95 font-semibold leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] text-left"
            >
              Premium domestic and international tour packages crafted for unforgettable journeys.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4 pt-2 w-full">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(30, 141, 197, 0.45)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const target = document.getElementById('trending-section');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-7 py-3.5 rounded-xl bg-[#1e8dc5] hover:bg-[#0e4d92] text-white font-extrabold text-sm tracking-wide shadow-md shadow-[#1e8dc5]/15 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              Explore Packages
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-xl border border-white/20 text-white font-extrabold text-sm tracking-wide bg-white/10 backdrop-blur-xs shadow-xs hover:border-accent hover:text-accent hover:bg-white/15 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              Get Free Quote
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
