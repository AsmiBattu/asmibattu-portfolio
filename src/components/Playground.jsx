import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import img1 from "../assets/new_watercolor.jpg";
import img2 from "../assets/new_travel.jpg";
import img3 from "../assets/new_portrait.jpg";
import img4 from "../assets/plant_doodle.jpg";
import img5 from "../assets/art5.jpg";

// 2. Watercolor Doodle Component
function WatercolorDoodleWidget() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#FF4F12");

  const palette = ["#FF4F12", "#FFDBCE", "#AED635", "#A1D7FF", "#333333"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const lastPosRef = useRef(null);

  const handleDraw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    if (e.touches && e.touches.length === 0) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (e.type === "mousedown" || e.type === "touchstart") {
      lastPosRef.current = { x, y };
    }

    if (e.buttons !== 1 && !e.touches) {
      lastPosRef.current = null;
      return;
    }

    if (!lastPosRef.current) {
      lastPosRef.current = { x, y };
    }

    const lastX = lastPosRef.current.x;
    const lastY = lastPosRef.current.y;
    
    const dx = x - lastX;
    const dy = y - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const steps = Math.max(1, Math.floor(distance / 2));

    for (let i = 0; i <= steps; i++) {
      const interpX = lastX + (dx * i) / steps;
      const interpY = lastY + (dy * i) / steps;

      ctx.beginPath();
      const radius = Math.random() * 10 + 12;
      const grad = ctx.createRadialGradient(interpX, interpY, 0, interpX, interpY, radius);
      grad.addColorStop(0, hexToRgba(color, 0.15));
      grad.addColorStop(0.8, hexToRgba(color, 0.04));
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = grad;
      ctx.arc(interpX, interpY, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    lastPosRef.current = { x, y };
  };

  const handleStop = () => {
    lastPosRef.current = null;
  };

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="space-y-4 select-none">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {palette.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className={`w-6 h-6 rounded-full border cursor-pointer transition-transform ${
                color === c ? "scale-125 border-gray-400 shadow-sm" : "border-gray-200"
              }`}
            />
          ))}
        </div>
        <button
          onClick={clearCanvas}
          className="font-mono text-xs text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
        >
          Clear Canvas
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        onMouseMove={handleDraw}
        onMouseDown={handleDraw}
        onTouchMove={handleDraw}
        onTouchStart={handleDraw}
        onMouseUp={handleStop}
        onMouseLeave={handleStop}
        onTouchEnd={handleStop}
        onTouchCancel={handleStop}
        className="w-full h-[400px] border border-[#EAE9E4] rounded-lg cursor-crosshair bg-[#FAF9F6]"
      />
    </div>
  );
}

// 3. Main Playground Canvas Component
const CANVAS_SIZE = 4000;
const CENTER = CANVAS_SIZE / 2; // 2000

const artImages = [
  { id: 'art-1', src: img1, title: 'Artboard 1', w: 320 },
  { id: 'art-2', src: img2, title: 'Artboard 2', w: 380 },
  { id: 'art-3', src: img3, title: 'Artboard 3', w: 300 },
  { id: 'art-4', src: img4, title: 'Artboard 4', w: 260 },
  { id: 'art-5', src: img5, title: 'Artboard 5', w: 340 },
];

function Playground() {
  const constraintsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Frame the initial view towards the top-left where the main canvas sits
  const initialX = -CENTER + 600;
  const initialY = -CENTER + 400;

  const scale = useMotionValue(0.7);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  const [items] = useState(() => {
    // Hardcode specific non-overlapping coordinates to guarantee no overlap with each other or the Watercolor Canvas
    const fixedPositions = [
      { x: CENTER + 300, y: CENTER - 400 }, // Top Right
      { x: CENTER - 600, y: CENTER + 200 }, // Bottom Left
      { x: CENTER - 150, y: CENTER + 200 }, // Bottom Center
      { x: CENTER + 250, y: CENTER + 200 }, // Bottom Right
      { x: CENTER + 650, y: CENTER - 200 }, // Far Right
    ];

    const generatedArts = artImages.map((art, idx) => {
      return {
        id: art.id,
        type: 'image',
        title: art.title,
        src: art.src,
        x: fixedPositions[idx].x,
        y: fixedPositions[idx].y,
        rotate: 0, // Straight, no angle
        w: art.w,
      };
    });

    return [
      {
        id: 'watercolor',
        type: 'widget',
        title: 'Watercolor Canvas',
        description: 'Draw something!',
        x: CENTER - 600,
        y: CENTER - 400,
        rotate: 0,
        w: 800,
        component: <WatercolorDoodleWidget />
      },
      ...generatedArts
    ];
  });

  useEffect(() => {
    const el = constraintsRef.current;
    if (!el) return;
    
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.ctrlKey) {
        // Pinch-to-zoom
        const zoomSpeed = 0.01;
        const currentScale = scale.get();
        const newScale = Math.min(Math.max(currentScale - (e.deltaY * zoomSpeed), 0.2), 3.0);
        scale.set(newScale);
      } else {
        // Normal pan
        x.set(x.get() - e.deltaX);
        y.set(y.get() - e.deltaY);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [x, y]);

  return (
    <>
      <div 
        ref={constraintsRef} 
        className="absolute -left-6 md:-left-12 -right-6 md:-right-12 -bottom-6 top-0 overflow-hidden bg-[#F5F5F5] border-t border-[#EAE9E4]"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            scale,
            x,
            y,
            width: `${CANVAS_SIZE}px`,
            height: `${CANVAS_SIZE}px`,
            backgroundImage: 'radial-gradient(#E0E0E0 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            backgroundPosition: 'center'
          }}
        >
          {items.map(item => (
            <PlaygroundItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </motion.div>
      </div>

      {/* Playful Figma-style UI Overlays (Dark Mode) */}
      <div className="absolute inset-0 pointer-events-none z-30 hidden md:block overflow-hidden">
        
        {/* Left Panel: Layers */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-[#1E1E1E] border-r border-[#333] flex flex-col pointer-events-auto text-sm text-[#D4D4D4] shadow-2xl">
          <div className="px-4 py-3 border-b border-[#333] flex items-center justify-between cursor-pointer hover:bg-[#2C2C2C] transition-colors">
            <div className="font-sans font-medium flex items-center gap-2"><span className="text-xl">🎨</span> asmi-portfolio</div>
            <span className="opacity-50 text-[10px]">▼</span>
          </div>
          
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#888] mb-3 flex justify-between items-center">
              Pages <span className="text-lg leading-none cursor-pointer hover:text-white">+</span>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <div className="px-2 py-1.5 bg-[#333] rounded text-white flex items-center gap-2 cursor-pointer">
                <span className="text-sm">📄</span> Playground
              </div>
              <div className="px-2 py-1.5 hover:bg-[#2C2C2C] rounded text-[#A0A0A0] flex items-center gap-2 cursor-pointer transition-colors">
                <span className="text-sm">🏠</span> Home
              </div>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#888] mb-3">
              Layers
            </div>
            <div className="flex flex-col gap-1">
              {items.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => setSelectedItem(item)}
                  className="text-left px-2 py-1.5 rounded hover:bg-[#2C2C2C] hover:text-white transition-colors font-mono text-xs truncate flex items-center gap-2 cursor-pointer"
                >
                  <span className="opacity-70 text-sm">{item.type === 'widget' ? '⚙️' : '🖼️'}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Design */}
        <div className="absolute right-0 top-0 bottom-0 w-56 bg-[#1E1E1E] border-l border-[#333] flex flex-col pointer-events-auto text-sm text-[#D4D4D4] shadow-2xl">
          <div className="flex border-b border-[#333]">
            <div className="flex-1 text-center py-3 border-b-2 border-[#FF4F12] text-white font-medium cursor-pointer">Design</div>
            <div className="flex-1 text-center py-3 text-[#888] hover:text-[#D4D4D4] cursor-pointer transition-colors">Prototype</div>
          </div>
          
          <div className="p-4 space-y-6 overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Appearance</span>
                <span className="opacity-50 text-xs">👁️</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-[#2C2C2C] p-2 rounded border border-[#444] flex items-center gap-2"><span className="opacity-50 text-[10px]">W</span> 4000</div>
                <div className="bg-[#2C2C2C] p-2 rounded border border-[#444] flex items-center gap-2"><span className="opacity-50 text-[10px]">H</span> 4000</div>
                <div className="bg-[#2C2C2C] p-2 rounded border border-[#444] flex items-center gap-2"><span className="opacity-50 text-[10px]">X</span> 0</div>
                <div className="bg-[#2C2C2C] p-2 rounded border border-[#444] flex items-center gap-2"><span className="opacity-50 text-[10px]">Y</span> 0</div>
              </div>
            </div>
            
            <div className="border-t border-[#333] pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Fill</span>
                <span className="opacity-50 cursor-pointer hover:text-white">+</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="w-4 h-4 rounded-sm bg-[#F5F5F5] border border-[#444]"></div>
                <div className="flex-1">#F5F5F5</div>
                <div className="opacity-50">100%</div>
              </div>
            </div>

            <div className="border-t border-[#333] pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Stroke</span>
                <span className="opacity-50 cursor-pointer hover:text-white">+</span>
              </div>
            </div>

            <div className="border-t border-[#333] pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Effects</span>
                <span className="opacity-50 cursor-pointer hover:text-white">+</span>
              </div>
            </div>
            
            <div className="border-t border-[#333] pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Export</span>
                <span className="opacity-50 cursor-pointer hover:text-white">+</span>
              </div>
              <button className="w-full py-2 mt-2 bg-[#FF4F12] text-white rounded font-sans font-semibold text-xs hover:bg-[#E5450F] transition-colors cursor-pointer flex items-center justify-center gap-2">
                Export Frame 2 🚀
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Dock */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2C2C2C] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-[#444] p-1 flex gap-1 pointer-events-auto">
          <button className="w-9 h-9 flex items-center justify-center bg-[#FF4F12] text-white rounded-lg text-lg cursor-pointer">
            🖱️
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#333] text-white rounded-lg transition-colors text-lg cursor-pointer opacity-80 hover:opacity-100 grayscale">
            #️⃣
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#333] text-white rounded-lg transition-colors text-lg cursor-pointer opacity-80 hover:opacity-100 grayscale">
            ⏹️
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#333] text-white rounded-lg transition-colors text-lg cursor-pointer opacity-80 hover:opacity-100 grayscale">
            🖋️
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#333] text-white rounded-lg transition-colors text-lg cursor-pointer opacity-80 hover:opacity-100 grayscale font-serif">
            T
          </button>
          <div className="w-px h-5 bg-[#444] self-center mx-1"></div>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#333] text-white rounded-lg transition-colors text-lg cursor-pointer opacity-80 hover:opacity-100 grayscale">
            💬
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function PlaygroundItem({ item, onClick }) {
  if (item.type === 'text') {
    return (
      <div 
        className="absolute pointer-events-none font-sans font-bold tracking-widest text-[#A2A19C] text-2xl md:text-4xl opacity-40 uppercase whitespace-pre-wrap leading-tight"
        style={{ left: item.x, top: item.y, width: item.w, rotate: `${item.rotate || 0}deg` }}
      >
        {item.content}
      </div>
    );
  }

  return (
    <motion.div
      whileHover="hover"
      onClick={onClick}
      className="absolute flex flex-col cursor-pointer group"
      style={{
        left: item.x,
        top: item.y,
        width: item.w,
        rotate: item.rotate,
      }}
    >
      {/* Figma Frame Title */}
      {/* Figma Frame Title */}
      <motion.div 
        className="font-sans text-[10px] text-[#FF4F12] font-bold mb-1 tracking-wide whitespace-nowrap"
      >
        # {item.title}
      </motion.div>

      {/* Frame Body */}
      <motion.div
        className="relative bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] outline outline-2 outline-[#FF4F12]"
        style={{
          borderRadius: item.type === 'widget' ? '8px' : '0px',
          padding: item.type === 'widget' ? '20px' : '0px'
        }}
      >
        <div className="absolute inset-0 z-10 pointer-events-none" />

        {/* Figma corner nodes (Always Visible & Prominent) */}
        <div className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] bg-white border-2 border-[#FF4F12] z-20 pointer-events-none shadow-sm" />
        <div className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-white border-2 border-[#FF4F12] z-20 pointer-events-none shadow-sm" />
        <div className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] bg-white border-2 border-[#FF4F12] z-20 pointer-events-none shadow-sm" />
        <div className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] bg-white border-2 border-[#FF4F12] z-20 pointer-events-none shadow-sm" />

        {item.type === 'note' && (
          <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#333]">
            {item.content}
          </div>
        )}
        
        {item.type === 'image' && (
           <img src={item.src} alt={item.title} className="w-full h-auto block" draggable="false" />
        )}
        
        {item.type === 'widget' && (
          <div className="flex flex-col justify-between h-full text-left">
             <div className="mb-4">
               <span className="font-mono text-[10px] text-[#FF4F12] bg-[#FFEBE1] px-2 py-0.5 rounded-full mb-2 inline-block border border-[#FFDBCE]">
                 {item.description}
               </span>
               <h3 className="font-serif text-lg text-[#333] leading-tight mt-1">{item.title}</h3>
             </div>
             <div className="pointer-events-none">
               {item.component}
             </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Modal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#FAF9F6]/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl border border-[#EAE9E4] w-full max-w-2xl overflow-hidden p-6 md:p-10"
        style={{
          backgroundColor: item.type === 'note' ? item.color : '#FFFFFF',
          color: item.type === 'note' ? item.textColor : '#333'
        }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors z-20 cursor-pointer"
        >
          ×
        </button>
        
        {item.type === 'note' && (
           <div className="font-mono text-lg md:text-xl leading-relaxed whitespace-pre-wrap p-4">
             {item.content}
           </div>
        )}
        
        {item.type === 'image' && (
           <div className="flex flex-col items-center">
             <img src={item.src} className="max-h-[80vh] object-contain rounded-lg shadow-md border border-[#EAE9E4]" alt={item.title} draggable="false" />
           </div>
        )}
        
        {item.type === 'widget' && (
           <div className="w-full">
             <h2 className="font-serif text-2xl text-[#333] mb-2">{item.title}</h2>
             <p className="font-sans opacity-60 mb-8 text-sm">Interact with the widget below!</p>
             <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#EAE9E4] shadow-inner">
               {item.component}
             </div>
           </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Playground;
