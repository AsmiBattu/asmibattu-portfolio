import React from "react";
import { ArrowRight } from "lucide-react";
import unlockrBanner from "../assets/new_unlockr_banner.png";
import labbuddyBanner from "../assets/new_labbuddy_banner.png";
import marutiSuzukiBanner from "../assets/new_maruti_suzuki_banner.png";
import skillcraftBanner from "../assets/new_skillcraft_banner.png";

function Work({ handleNavigate }) {
  return (
    <section id="work-grid" className="scroll-mt-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: LabBuddy Screens Redesign */}
        <div 
          data-cursor="view" 
          onClick={() => handleNavigate && handleNavigate("casestudy", "top", "labbuddy")}
          className="cursor-none group relative bg-white/60 backdrop-blur-2xl border border-white/80 hover:bg-[#FFF6F0]/90 hover:border-[#FF4F12] shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
          <div className="w-full flex-shrink-0">
            <img
              src={labbuddyBanner}
              alt="LabBuddy Screens Redesign Design Showcase"
              className="w-full h-auto block"
            />
          </div>
          <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#333333] mb-3 leading-tight">
                LabBuddy Screens Redesign
              </h3>
              <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed mb-6">
                Designed the splash, package details, and cart experience
                for a smoother user journey.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="font-sans font-semibold tracking-wide text-xs text-[#666666] bg-white/50 backdrop-blur-md border border-[#EAE9E4] px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                March 2026 - Jun 2026
              </span>
              <div className="flex items-center space-x-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="text-[#FF4F12] font-sans font-bold text-sm">Case Study</span>
                <div className="w-10 h-10 rounded-full bg-[#FF4F12] flex items-center justify-center text-white shadow-md">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Maruti Suzuki */}
        <div 
          data-cursor="view" 
          onClick={() => handleNavigate && handleNavigate("casestudy", "top", "msds")}
          className="cursor-none group relative bg-white/60 backdrop-blur-2xl border border-white/80 hover:bg-[#FFF6F0]/90 hover:border-[#FF4F12] shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
          <div className="w-full flex-shrink-0">
            <img
              src={marutiSuzukiBanner}
              alt="Maruti Suzuki Driving School Website Redesign"
              className="w-full h-auto block"
            />
          </div>
          <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#333333] mb-3 leading-tight">
                Maruti Suzuki Driving School Website Redesign
              </h3>
              <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed mb-6">
                Transformed a complex website experience into a more
                intuitive and user-friendly journey.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="font-sans font-semibold tracking-wide text-xs text-[#666666] bg-white/50 backdrop-blur-md border border-[#EAE9E4] px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                July 2025 - August 2025
              </span>
              <div className="flex items-center space-x-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="text-[#FF4F12] font-sans font-bold text-sm">Case Study</span>
                <div className="w-10 h-10 rounded-full bg-[#FF4F12] flex items-center justify-center text-white shadow-md">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Unlockr */}
        <div 
          data-cursor="coming-soon" 
          className="cursor-none group relative bg-white/60 backdrop-blur-2xl border border-white/80 hover:bg-[#FFF6F0]/90 hover:border-[#FF4F12] shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
          <div className="w-full flex-shrink-0">
            <img
              src={unlockrBanner}
              alt="Unlockr Case Study Design Showcase"
              className="w-full h-auto block"
            />
          </div>
          <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#333333] mb-3 leading-tight">
                Unlockr - Get back in. Fast.
              </h3>
              <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed mb-6">
                An upcoming product design project for finding verified locksmiths.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="font-sans font-semibold tracking-wide text-xs text-[#666666] bg-white/50 backdrop-blur-md border border-[#EAE9E4] px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                April 2026 - June 2026
              </span>
              <div className="flex items-center space-x-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="text-[#FF4F12] font-sans font-bold text-sm">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: SkillCraft Technology */}
        <div 
          data-cursor="view" 
          onClick={() => handleNavigate && handleNavigate("casestudy", "top", "skillcraft")}
          className="cursor-none group relative bg-white/60 backdrop-blur-2xl border border-white/80 hover:bg-[#FFF6F0]/90 hover:border-[#FF4F12] shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
          <div className="w-full flex-shrink-0">
            <img
              src={skillcraftBanner}
              alt="UI/UX Design Internship at SkillCraft Technology"
              className="w-full h-auto block"
            />
          </div>
          <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#333333] mb-3 leading-tight">
                UI/UX Design Internship at SkillCraft Technology
              </h3>
              <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed mb-6">
                Designed mobile and web experiences across fitness,
                e-commerce, news, and government service platforms.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="font-sans font-semibold tracking-wide text-xs text-[#666666] bg-white/50 backdrop-blur-md border border-[#EAE9E4] px-3 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                January 2025
              </span>
              <div className="flex items-center space-x-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="text-[#FF4F12] font-sans font-bold text-sm">Case Study</span>
                <div className="w-10 h-10 rounded-full bg-[#FF4F12] flex items-center justify-center text-white shadow-md">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
