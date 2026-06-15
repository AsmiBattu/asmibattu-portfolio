import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ isPlayground }) {
  const cursorRef = useRef(null);
  const [hoverType, setHoverType] = useState(null);

  useEffect(() => {
    // Only run on desktop devices with hover support
    if (window.matchMedia('(hover: none)').matches) return;

    let requestRef;
    let mouseX = 0;
    let mouseY = 0;
    
    // Smooth trailing effect variables
    let cursorX = 0;
    let cursorY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      // Smooth interpolation
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX = mouseX;
      cursorY = mouseY;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestRef = requestAnimationFrame(updateCursor);
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoverType(target.getAttribute('data-cursor'));
        // Initialize cursor instantly on first hover if it's offscreen
        if (cursorX === 0 && cursorY === 0) {
          cursorX = e.clientX;
          cursorY = e.clientY;
        }
      } else {
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    requestRef = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  // Instead of returning null, we'll keep rendering the cursor so the dot is always there.
  
  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[100] will-change-transform hidden md:block"
      style={{
        transform: `translate3d(-100px, -100px, 0)`
      }}
    >
      <div className="absolute pointer-events-none">
        {/* Default Cursor (Figma Arrow on Playground, Orange Dot elsewhere) */}
        {isPlayground ? (
          <div 
            className={`absolute top-0 left-0 transition-all duration-200 ease-out origin-top-left flex flex-col items-start ${
              !hoverType ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`} 
          >
            {/* Arrow */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm z-50" style={{ transform: 'translate(-2px, -2px)' }}>
              <path d="M2 2L20 10.5L12.5 13.5L9.5 22L2 2Z" fill="#FF4F12" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            {/* Name Tag */}
            <div className="bg-[#FF4F12] text-white font-sans text-[10px] font-bold px-1.5 py-[2px] rounded-sm rounded-tl-none whitespace-nowrap shadow-sm ml-3.5 -mt-1 z-40 relative tracking-wide">
              Visitor
            </div>
          </div>
        ) : (
          <div 
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out origin-center bg-[#FF4F12] rounded-full shadow-sm ${
              !hoverType ? 'w-3 h-3 scale-100 opacity-100' : 'w-3 h-3 scale-0 opacity-0'
            }`} 
          />
        )}

        {/* Emoji/Text Hover States */}
        <div className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out origin-center flex items-center justify-center ${hoverType ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          {hoverType === 'coming-soon' && (
            <div className="bg-white/90 backdrop-blur-md border border-[#EAE9E4] px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.05)] whitespace-nowrap">
              <span className="font-sans text-sm font-bold animate-text-shimmer bg-[linear-gradient(110deg,#FF4F12,45%,#FFA07A,55%,#FF4F12)] bg-[length:200%_auto] bg-clip-text text-transparent">
                Coming Soon
              </span>
            </div>
          )}
          {hoverType === 'view' && (
            <div className="text-6xl drop-shadow-2xl">
              👀
            </div>
          )}
          {hoverType === 'sparkle' && (
            <div className="text-6xl drop-shadow-2xl">
              ✨
            </div>
          )}
          {hoverType === 'tulip' && (
            <div className="text-6xl drop-shadow-2xl">
              🌷
            </div>
          )}
          {hoverType === 'letter' && (
            <div className="text-6xl drop-shadow-2xl">
              💌
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
