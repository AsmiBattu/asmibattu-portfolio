import React from "react";
import { ArrowUpRight } from "lucide-react";
import newPortrait from "../assets/about_me.png";
import newTravel from "../assets/about_monument.jpeg";
import newWatercolor from "../assets/about_painting.jpeg";

function About() {
  return (
    <section className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-4 mb-8">
      {/* Bio Column */}
      <div className="space-y-6 pr-0 md:pr-4">
        <h2 className="font-serif text-[#FF4F12] text-4xl md:text-5xl leading-tight">
          About
        </h2>
        <div className="font-mono text-[13px] md:text-sm leading-relaxed text-[#555555] space-y-4">
          <p>
            Hi, I’m Asmi, a UI/UX designer driven by the{" "}
            <strong className="text-[#333333] font-bold">curiosity</strong>{" "}
            to understand people, the creativity to solve problems, and
            the{" "}
            <strong className="text-[#333333] font-bold">details</strong>{" "}
            that make digital experiences memorable.
          </p>
          <p>
            I’ve designed products across healthcare, education, fitness,
            e-commerce, and media, always aiming to create experiences
            that feel intuitive and meaningful. Most recently, I’ve been
            designing at{" "}
            <strong className="text-[#333333] font-bold">LabBuddy</strong>,
            after previously contributing to projects at{" "}
            <strong className="text-[#333333] font-bold">
              Maruti Suzuki Driving School
            </strong>{" "}
            and{" "}
            <strong className="text-[#333333] font-bold">
              SkillCraft Technology
            </strong>.
          </p>
          <p>
            When I’m away from Figma, you’ll probably find me watercolor
            painting, filming cinematic snippets of everyday places,
            creating content, or searching for inspiration in the little
            details most people walk past.
          </p>
          
          {/* Resume Button */}
          <div className="pt-4">
            <a
              href="/assets/_Asmi%20Battu_Resume%20Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FF4F12] text-white px-5 py-2 rounded-full font-serif text-lg hover:scale-105 hover:shadow-md transition-all duration-300 w-max"
            >
              <span>resume</span>
              <div className="border border-white rounded-full p-0.5 flex items-center justify-center">
                <ArrowUpRight size={16} className="text-white" strokeWidth={2} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Collage Column */}
      <div className="space-y-3 mt-2 md:mt-0">
        <div className="flex gap-3">
          {/* Portrait - Taller image */}
          <div className="flex-1 overflow-hidden rounded-xl border border-[#EAE9E4] bg-white p-1 hover-tilt-left shadow-sm">
            <img
              src={newPortrait}
              alt="Portrait of Asmi"
              className="w-full h-auto object-cover aspect-[4/5] rounded-lg"
            />
          </div>
          {/* Archway - Dome image */}
          <div className="flex-1 overflow-hidden rounded-xl border border-[#EAE9E4] bg-white p-1 hover-tilt-right shadow-sm">
            <img
              src={newTravel}
              alt="Dome monument viewed through stone arch"
              className="w-full h-auto object-cover aspect-[4/5] rounded-lg"
            />
          </div>
        </div>
        {/* Watercolor Storefront - Full-width bottom image */}
        <div className="w-full overflow-hidden rounded-xl border border-[#EAE9E4] bg-white p-1 hover-float shadow-sm">
          <img
            src={newWatercolor}
            alt="Watercolor painting of Casa Ivona storefront"
            className="w-full h-auto object-cover object-center aspect-[4/3] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
