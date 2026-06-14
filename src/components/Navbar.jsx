import React from "react";
import { motion } from "framer-motion";
import hqFlower1 from "../assets/hq_flower1.png";
import hqFlower2 from "../assets/hq_flower2.png";

function Navbar({ handleNavigate }) {
  return (
    <header className="sticky top-6 z-40 flex justify-center mb-12 pointer-events-none h-[54px]">
      <div className="flex items-center space-x-3 pointer-events-auto h-full">
        
        {/* Main Pill */}
        <div className="bg-white rounded-full px-5 flex items-center shadow-sm border border-[#EAE9E4] h-full">
          
          {/* Flowers */}
          <div className="flex space-x-1.5 mr-6 items-center">
            <motion.div whileHover={{ rotate: 15, scale: 1.15 }} className="cursor-pointer">
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
            <motion.div whileHover={{ rotate: -15, scale: 1.15 }} className="cursor-pointer">
              <img src={hqFlower2} alt="flower 2" className="w-[25px] h-[26px] object-contain" />
            </motion.div>
            <motion.div whileHover={{ rotate: 10, scale: 1.15 }} className="cursor-pointer">
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

          {/* Nav Links */}
          <nav className="flex items-center space-x-4">
            <button
              onClick={() => handleNavigate("work", "top")}
              className="font-sans text-[#333333] text-[15px] cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              hey !
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("work", "work-grid")}
              className="font-sans text-[#333333] text-[15px] hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              work
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("playground")}
              className="font-sans text-[#333333] text-[15px] hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              play
            </button>
            <span className="text-[#EAE9E4] text-sm">|</span>
            <button
              onClick={() => handleNavigate("about")}
              className="font-sans text-[#333333] text-[15px] hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              about
            </button>
          </nav>
        </div>

        {/* Let's Talk Button (Separate Pill) */}
        <button
          onClick={() => handleNavigate("contact")}
          className="bg-[#111111] text-white px-6 rounded-full font-sans text-[15px] shadow-sm hover:bg-[#333333] transition-colors h-full flex items-center whitespace-nowrap"
        >
          Let's talk
        </button>

      </div>
    </header>
  );
}

export default Navbar;
