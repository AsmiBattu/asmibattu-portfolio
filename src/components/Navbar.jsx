import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import hqFlower1 from "../assets/hq_flower1.png";
import hqFlower2 from "../assets/hq_flower2.png";

function Navbar({ handleNavigate, activeTab, activeCaseStudyId }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const playHoverSound = () => {
    const audio = new Audio("/assets/universfield-happy-message-ping-351298.mp3");
    audio.volume = 0.4;
    audio.play().catch((e) => console.log("Audio play prevented", e));
  };

  const handleNavClick = (tab, scrollToId) => {
    handleNavigate(tab, scrollToId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <header className="sticky top-6 z-40 flex justify-center mb-12 pointer-events-none h-[54px]">
      <div className="flex items-center space-x-3 pointer-events-auto h-full">
        
        {/* Main Pill (3-Layer Glassmorphism) */}
        <div className="relative rounded-full h-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          {/* Layer 1: Deep Backdrop Blur */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-full pointer-events-none" />
          {/* Layer 2: Frosted Gradient Tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/30 rounded-full pointer-events-none" />
          {/* Layer 3: Crisp Edge & Inner Glow */}
          <div className="absolute inset-0 border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-full pointer-events-none" />
          
          {/* Content Layer */}
          <div className="relative z-10 flex items-center px-5 h-full">
          
          {/* Flowers */}
          <div className="flex space-x-1.5 mr-6 items-center">
            <motion.div onMouseEnter={playHoverSound} whileHover={{ rotate: 15, scale: 1.15 }} className="cursor-pointer">
              <div 
                className="w-[25px] h-[26px]"
                style={{
                  backgroundColor: "#8CC63F", /* Green */
                  maskImage: `url(${hqFlower1})`,
                  WebkitMaskImage: `url(${hqFlower1})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center"
                }}
                aria-label="flower 1"
              />
            </motion.div>
            <motion.div onMouseEnter={playHoverSound} whileHover={{ rotate: -15, scale: 1.15 }} className="cursor-pointer">
              <img src={hqFlower2} alt="flower 2" className="w-[25px] h-[26px] object-contain" />
            </motion.div>
            <motion.div onMouseEnter={playHoverSound} whileHover={{ rotate: 10, scale: 1.15 }} className="cursor-pointer">
              <div 
                className="w-[25px] h-[26px]"
                style={{
                  backgroundColor: "#FF3E00",
                  maskImage: `url(${hqFlower2})`,
                  WebkitMaskImage: `url(${hqFlower2})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center"
                }}
                aria-label="flower 3"
              />
            </motion.div>
          </div>

          {/* Nav Links (Desktop Only) */}
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavigate("work", "top")}
              className="font-sans text-[#333333] text-[15px] hover:text-[#FF4F12] transition-colors whitespace-nowrap"
            >
              hey !
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("work", "work-grid")}
              className="font-sans text-[#333333] text-[15px] hover:text-[#FF4F12] transition-colors whitespace-nowrap"
            >
              work
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("playground")}
              className="font-sans text-[#333333] text-[15px] hover:text-[#FF4F12] transition-colors whitespace-nowrap"
            >
              play
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("about")}
              className="font-sans text-[#333333] text-[15px] hover:text-[#FF4F12] transition-colors whitespace-nowrap"
            >
              about
            </button>
          </nav>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden ml-2 p-1 text-[#333333] hover:text-[#FF4F12] transition-colors pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={22} />
          </button>
          </div>
        </div>

        {/* Let's Talk Button (Separate Pill) */}
        <button
          onClick={() => handleNavigate("contact")}
          className="bg-[#111111] text-white px-6 rounded-full font-sans text-[15px] shadow-sm hover:bg-[#333333] transition-colors h-full flex items-center whitespace-nowrap"
        >
          Let's talk
        </button>
      </div>

      {/* Floating Orange Back Button (Top Right) */}
      {(activeTab !== "work" || activeCaseStudyId) && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (activeTab === "casestudy") {
              handleNavigate("work", "work-grid");
            } else {
              handleNavigate("work", "top");
            }
          }}
          className="fixed top-6 left-6 md:top-8 md:left-12 z-50 w-12 h-12 bg-[#FF4F12] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover-float pointer-events-auto"
          aria-label="Go back"
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </motion.button>
      )}
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col pt-6 px-6 pb-12 pointer-events-auto">
        <div className="flex justify-between items-center mb-12 h-[54px]">
          <span className="font-serif text-[#FF4F12] text-2xl">Asmi.</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-white rounded-full border border-[#EAE9E4] shadow-sm text-[#333333] hover:text-[#FF4F12] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-8 mt-6">
          <button onClick={() => handleNavClick("work", "top")} className="text-4xl font-serif text-[#333333] hover:text-[#FF4F12] text-left transition-colors">hey !</button>
          <button onClick={() => handleNavClick("work", "work-grid")} className="text-4xl font-serif text-[#333333] hover:text-[#FF4F12] text-left transition-colors">work</button>
          <button onClick={() => handleNavClick("playground")} className="text-4xl font-serif text-[#333333] hover:text-[#FF4F12] text-left transition-colors">play</button>
          <button onClick={() => handleNavClick("about")} className="text-4xl font-serif text-[#333333] hover:text-[#FF4F12] text-left transition-colors">about</button>
        </nav>
        
        <div className="mt-auto">
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full bg-[#111111] text-white py-4 rounded-full font-sans text-lg shadow-sm hover:bg-[#333333] transition-colors"
          >
            Let's talk
          </button>
        </div>
      </div>
    )}
    </>
  );
}

export default Navbar;
