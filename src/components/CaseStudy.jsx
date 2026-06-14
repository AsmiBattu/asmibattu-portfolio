import React, { useEffect } from "react";

// You can add more images to each array as you upload them!
// Note: If you upload images with different names or extensions (e.g., .jpg), update them here.
const CASE_STUDY_DATA = {
  unlockr: [
    "/assets/case-studies/unlockr/01.png",
    "/assets/case-studies/unlockr/02.png"
  ],
  labbuddy: [
    "/assets/case-studies/labbuddy/MacBook%20Air%20-%201.png"
  ],
  msds: [
    "/assets/case-studies/msds/msds%201.png",
    "/assets/case-studies/msds/msds%202.png",
    "/assets/case-studies/msds/msds%203.png",
    "/assets/case-studies/msds/msds%204.png",
    "/assets/case-studies/msds/msds%205.png",
    "/assets/case-studies/msds/msds6.png",
    "/assets/case-studies/msds/msds%207.png",
    "/assets/case-studies/msds/msds%208.png",
    "/assets/case-studies/msds/msds%209.png",
    "/assets/case-studies/msds/msds%2010.png",
    "/assets/case-studies/msds/msds%2011.png"
  ],
  skillcraft: [
    "/assets/case-studies/skillcraft/craftcasestudy.png"
  ]
};

function CaseStudy({ caseStudyId }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseStudyId]);

  // Use the provided ID or fallback to empty array if not found
  const currentImages = CASE_STUDY_DATA[caseStudyId] || CASE_STUDY_DATA.msds;

  return (
    <div className="flex flex-col items-center w-full bg-[#FAF9F6] pb-12 px-6 md:px-12">
      <div className="w-full max-w-5xl flex flex-col items-center shadow-[0_0_40px_rgba(0,0,0,0.03)]">
        {currentImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${caseStudyId || 'Case Study'} Part ${index + 1}`}
            className="w-full h-auto block"
            style={{ imageRendering: 'high-quality' }}
            onError={(e) => {
              // Hide broken images gracefully if you haven't uploaded them yet
              e.target.style.display = 'none';
            }}
          />
        ))}
        {currentImages.length === 0 && (
          <div className="py-20 text-center font-sans text-[#666666]">
            Case study coming soon...
          </div>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
