import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
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
      
      cursorX += dx * 0.2;
      cursorY += dy * 0.2;
      
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
      <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
        {/* Default Orange Dot */}
        <div 
          className={`absolute transition-all duration-300 ease-out origin-center bg-[#FF4F12] rounded-full shadow-sm ${
            !hoverType ? 'w-3 h-3 scale-100 opacity-100' : 'w-3 h-3 scale-0 opacity-0'
          }`} 
        />
        
        {/* Emoji/Text Hover States */}
        <div className={`transition-all duration-300 ease-out origin-center ${hoverType ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          {hoverType === 'coming-soon' && (
            <div className="bg-black/80 backdrop-blur-sm text-[#FAF9F6] px-5 py-2.5 rounded-full font-sans text-sm font-medium shadow-xl whitespace-nowrap">
              Coming Soon
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
