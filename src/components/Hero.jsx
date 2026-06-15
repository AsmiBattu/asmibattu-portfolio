import React, { useRef } from "react";
import { motion } from "framer-motion";
import doodleImage from "../assets/new_doodle.png";
import heroOrangeNote from "../assets/hero_orange_note.png";
import FlowerTrail from "./FlowerTrail";

function Hero() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  // Clear refs on every render to prevent stale DOM nodes during hot-reloads
  elementsRef.current = [];
  
  const setRef = (el) => {
    if (el) {
      elementsRef.current.push(el);
    }
  };

  const springTransition = { type: "spring", stiffness: 140, damping: 22 };

  return (
    <section ref={containerRef} className="relative min-h-[420px] md:min-h-[480px] flex flex-col justify-center items-center py-10 md:py-16 mb-32 md:mb-40 select-none overflow-visible w-full">
      
      {/* Flower Particle Trail Layer */}
      <FlowerTrail containerRef={containerRef} elementRefs={elementsRef} durationMs={1500} />

      {/* Decorative Name Label (Upper-Left) -> Slides from Left */}
      <motion.div 
        ref={setRef}
        initial={{ x: -800, y: -40, opacity: 0, rotate: 6 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: -3 }}
        transition={{ ...springTransition, delay: 0.05 }}
        whileHover={{ scale: 1.05, rotate: -1 }}
        className="absolute top-[-20px] left-4 md:left-16 lg:left-32 md:top-4 bg-[#FFDBCE] px-6 py-2 md:px-8 md:py-3 shadow-md z-30 cursor-default scale-75 md:scale-100 origin-top-left"
      >
        <h1 className="font-serif text-5xl md:text-[64px] font-normal text-[#FF4F12] tracking-wide leading-none">
          Asmi Battu
        </h1>
      </motion.div>

      {/* Green Small Post-it Note at Top-Right -> Slides from Right */}
      <motion.div 
        ref={setRef}
        initial={{ x: 800, y: -40, opacity: 0, rotate: 18 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: 10 }}
        transition={{ ...springTransition, delay: 0.0 }}
        whileHover={{ rotate: 15, scale: 1.05 }}
        className="absolute top-16 right-0 md:right-24 md:top-24 w-[120px] h-[75px] bg-[#AED635] shadow-md flex items-center justify-center text-[#FAF9F6] text-3xl font-medium z-20 cursor-pointer scale-75 md:scale-100 origin-top-right"
        style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif' }}
      >
        अस्मि
      </motion.div>

      {/* Light Blue Post-it Note (Plant Doodle) -> Slides from Left */}
      <motion.div 
        ref={setRef}
        initial={{ x: -800, y: -40, opacity: 0, rotate: -20 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: -8 }}
        transition={{ ...springTransition, delay: 0.1 }}
        whileHover={{ rotate: -5, scale: 1.05 }}
        className="absolute -bottom-8 left-0 md:left-[18%] w-28 h-28 md:w-36 md:h-36 bg-[#A1D7FF] p-3 shadow-md flex flex-col justify-between z-20 cursor-pointer scale-75 md:scale-100 origin-bottom-left"
      >
        <img
          src={doodleImage}
          alt="Hand-drawn plant doodle"
          className="w-full h-auto object-contain flex-grow"
          draggable="false"
        />
      </motion.div>

      {/* Large Orange Post-it Note -> Slides from Left */}
      <motion.div 
        ref={setRef}
        initial={{ x: -1000, y: -40, opacity: 0, rotate: -15 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
        transition={{ ...springTransition, delay: 0 }}
        whileHover={{ rotate: 2 }}
        className="relative w-full max-w-[620px] z-10 drop-shadow-xl px-2 md:px-0"
      >
        <img 
          src={heroOrangeNote} 
          alt="Asmi is a UI/UX designer who enjoys turning messy ideas into thoughtful digital experiences."
          className="w-full h-auto object-contain" 
          draggable="false"
        />
      </motion.div>

      {/* Smaller Peach Post-it Note (overlaps orange box bottom-right) -> Slides from Right */}
      <motion.div 
        ref={setRef}
        initial={{ x: 800, y: -40, opacity: 0, rotate: 25 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: 4 }}
        transition={{ ...springTransition, delay: 0.1 }}
        whileHover={{ rotate: 2 }}
        className="relative md:absolute md:bottom-2 md:right-16 w-[92%] md:w-full md:max-w-[420px] mt-6 md:mt-0 bg-[#FFDBCE] text-[#FF4F12] p-5 md:p-6 drop-shadow-lg z-20 cursor-pointer scale-95 md:scale-100 origin-top"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)" }}
      >
        <p className="font-mono text-xs md:text-sm leading-relaxed tracking-tight">
          Coffee lover, and chronic Figma tab hoarder. Usually found
          tweaking pixels, and bringing ideas to life ⋆˙⟡
        </p>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF4F12] shadow-[-3px_-3px_8px_rgba(0,0,0,0.15)] rounded-tl-sm pointer-events-none"></div>
      </motion.div>

      {/* Work Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[-80px] md:bottom-[-100px] right-0 text-right"
      >
        <a
          href="#work-grid"
          className="font-sans font-bold text-xs md:text-sm tracking-widest text-[#333333] opacity-80 hover:opacity-100 transition-opacity uppercase inline-flex items-center space-x-1"
        >
          <span>Work</span>
          <span>↓</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
