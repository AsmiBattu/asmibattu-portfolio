import React from "react";
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
          className="cursor-none group relative bg-white border border-[#EAE9E4] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
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
            <div className="flex justify-between items-center pt-4 border-t border-[#F2F1EC]">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavigate && handleNavigate("casestudy", "top", "labbuddy"); }}
                className="text-[#FF4F12] font-sans font-bold text-sm hover:translate-x-1 transition-transform inline-flex items-center space-x-1"
              >
                <span>View Case Study</span>
                <span>→</span>
              </a>
              <span className="font-mono text-xs text-[#A2A19C]">
                March 2026 - Jun 2026
              </span>
            </div>
          </div>
        </div>

        {/* Project 2: Maruti Suzuki */}
        <div 
          data-cursor="view" 
          onClick={() => handleNavigate && handleNavigate("casestudy", "top", "msds")}
          className="cursor-none group relative bg-white border border-[#EAE9E4] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
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
            <div className="flex justify-between items-center pt-4 border-t border-[#F2F1EC]">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavigate && handleNavigate("casestudy", "top", "msds"); }}
                className="text-[#FF4F12] font-sans font-bold text-sm hover:translate-x-1 transition-transform inline-flex items-center space-x-1"
              >
                <span>View Case Study</span>
                <span>→</span>
              </a>
              <span className="font-mono text-xs text-[#A2A19C]">
                July 2025 - August 2025
              </span>
            </div>
          </div>
        </div>

        {/* Project 3: Unlockr */}
        <div 
          data-cursor="coming-soon" 
          className="cursor-none group relative bg-white border border-[#EAE9E4] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float opacity-80">
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
                Designed the splash, package details, and cart experience
                for a smoother user journey.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-[#F2F1EC]">
              <span className="text-[#FF4F12] font-sans font-bold text-sm inline-flex items-center space-x-1">
                <span>Coming Soon</span>
              </span>
              <span className="font-mono text-xs text-[#A2A19C]">
                April 2026 - June 2026
              </span>
            </div>
          </div>
        </div>

        {/* Project 4: SkillCraft Technology */}
        <div 
          data-cursor="view" 
          onClick={() => handleNavigate && handleNavigate("casestudy", "top", "skillcraft")}
          className="cursor-none group relative bg-white border border-[#EAE9E4] rounded-[24px] overflow-hidden flex flex-col justify-between hover-float">
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
            <div className="flex justify-between items-center pt-4 border-t border-[#F2F1EC]">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavigate && handleNavigate("casestudy", "top", "skillcraft"); }}
                className="text-[#FF4F12] font-sans font-bold text-sm hover:translate-x-1 transition-transform inline-flex items-center space-x-1"
              >
                <span>View Case Study</span>
                <span>→</span>
              </a>
              <span className="font-mono text-xs text-[#A2A19C]">
                January 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
