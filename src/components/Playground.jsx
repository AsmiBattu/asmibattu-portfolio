import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import asmiPortrait from "../assets/asmi_portrait.png";
import archwayDome from "../assets/archway_dome.png";
import watercolorStorefront from "../assets/watercolor_storefront.png";

// 1. Figma Tab Hoarder Component
function TabHoarderWidget() {
  const [tabs, setTabs] = useState(["Workspace", "Styleguide", "Wireframes"]);

  const addTab = () => {
    if (tabs.length < 24) {
      setTabs([...tabs, `New Frame ${tabs.length + 1}`]);
    }
  };

  const removeTab = (index, e) => {
    e.stopPropagation();
    setTabs(tabs.filter((_, i) => i !== index));
  };

  const resetTabs = () => {
    setTabs(["Workspace", "Styleguide", "Wireframes"]);
  };

  return (
    <div className="w-full bg-[#1E1E1E] rounded-lg p-2.5 flex flex-col justify-between h-[160px] border border-[#2c2c2c] overflow-hidden select-none">
      <div className="flex bg-[#2C2C2C] p-1.5 rounded-md overflow-x-hidden space-x-1 items-center h-[42px]">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            style={{ maxWidth: `${Math.max(100 - tabs.length * 3, 28)}px` }}
            className={`flex items-center justify-between bg-[#1E1E1E] text-white px-2 py-1 text-[10px] rounded h-7 truncate border-t border-[#333333] transition-all`}
          >
            <span className="truncate">{tab}</span>
            <button
              onClick={(e) => removeTab(idx, e)}
              className="ml-1 opacity-40 hover:opacity-100 font-bold"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={addTab}
          className="text-white hover:bg-[#3E3E3E] rounded px-2 h-7 font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center pt-2">
        <span className="font-mono text-xs text-[#A2A19C]">
          Tabs: {tabs.length} {tabs.length >= 12 ? "🤯" : ""}
        </span>
        <button
          onClick={resetTabs}
          className="font-mono text-xs text-[#FF4F12] border border-[#FF4F12] hover:bg-[#FF4F12] hover:text-white transition-all px-3 py-1 rounded cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

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

  const handleDraw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (e.buttons !== 1 && !e.touches) return;

    ctx.beginPath();
    const radius = Math.random() * 16 + 10;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, hexToRgba(color, 0.15));
    grad.addColorStop(0.8, hexToRgba(color, 0.04));
    grad.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = grad;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
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
        width={400}
        height={140}
        onMouseMove={handleDraw}
        onMouseDown={handleDraw}
        onTouchMove={handleDraw}
        onTouchStart={handleDraw}
        className="w-full h-[140px] border border-[#EAE9E4] rounded-lg cursor-crosshair bg-[#FAF9F6]"
      />
    </div>
  );
}

// 3. Main Playground Canvas Component
const CANVAS_SIZE = 4000;
const CENTER = CANVAS_SIZE / 2; // 2000

const items = [
  // --- CENTER (Welcome) ---
  {
    id: 'intro',
    type: 'note',
    content: "Welcome to my messy workspace!\nDrag around to explore.\n\n✨",
    x: CENTER - 150,
    y: CENTER - 100,
    rotate: -3,
    color: '#FFDBCE',
    w: 300,
  },
  {
    id: 'note-center',
    type: 'note',
    content: "Scroll to zoom? Nah, just drag.",
    x: CENTER + 200,
    y: CENTER + 150,
    rotate: 8,
    color: '#FFF',
    w: 220,
  },

  // --- CLUSTER 1: UI Experiments (Top-Left) ---
  {
    id: 'ui-title',
    type: 'text',
    content: "EXPLORATIONS 01\nUI Interactions",
    x: 800,
    y: 800,
    rotate: -2,
    w: 400,
  },
  {
    id: 'hoarder',
    type: 'widget',
    title: 'Figma Tab Hoarder',
    description: 'Experiment 01',
    x: 900,
    y: 950,
    rotate: 1,
    w: 480, // Massive
    component: <TabHoarderWidget />
  },
  {
    id: 'ui-note-1',
    type: 'note',
    content: "To-do:\n- Try a new font pairing\n- Fix that one pixel",
    x: 1420,
    y: 880,
    rotate: 6,
    color: '#AED635',
    textColor: '#FAF9F6',
    w: 200,
  },
  {
    id: 'ui-note-2',
    type: 'note',
    content: "What if the nav was just... massive?",
    x: 750,
    y: 1250,
    rotate: -4,
    color: '#FFEBE1',
    w: 220,
  },

  // --- CLUSTER 2: Photography (Bottom-Left) ---
  {
    id: 'photo-title',
    type: 'text',
    content: "INSPIRATION\nTravel & Spaces",
    x: 600,
    y: 2200,
    rotate: 1,
    w: 400,
  },
  {
    id: 'pol-3',
    type: 'image',
    title: 'Taj Mahal Dome',
    src: archwayDome,
    x: 750,
    y: 2350,
    rotate: -5,
    w: 380, // Large polaroid
  },
  {
    id: 'pol-1',
    type: 'image',
    title: 'Asmi Portrait',
    src: asmiPortrait,
    x: 1200,
    y: 2650,
    rotate: 4,
    w: 320,
  },
  {
    id: 'photo-note',
    type: 'note',
    content: "Color palette here is unreal. Extract the blues.",
    x: 550,
    y: 2800,
    rotate: -9,
    color: '#A1D7FF',
    w: 240,
  },

  // --- CLUSTER 3: Art & Doodles (Right Side) ---
  {
    id: 'art-title',
    type: 'text',
    content: "CANVAS\nMessy thoughts",
    x: 2600,
    y: 1300,
    rotate: -3,
    w: 400,
  },
  {
    id: 'watercolor',
    type: 'widget',
    title: 'Digital Watercolor',
    description: 'Experiment 02',
    x: 2750,
    y: 1450,
    rotate: 2,
    w: 550, // Massive
    component: <WatercolorDoodleWidget />
  },
  {
    id: 'pol-2',
    type: 'image',
    title: 'Casa Ivona Store',
    src: watercolorStorefront,
    x: 2600,
    y: 1950,
    rotate: -6,
    w: 440,
  },
  {
    id: 'art-note',
    type: 'note',
    content: "Storefront in Split, Croatia. The green door was perfect.",
    x: 3100,
    y: 2250,
    rotate: 5,
    color: '#FFF',
    w: 260,
  }
];

function Playground() {
  const constraintsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Use a fixed initial value that feels centered on average screens to avoid SSR issues
  const initialX = -CENTER + 600;
  const initialY = -CENTER + 400;

  return (
    <>
      <div 
        ref={constraintsRef} 
        className="absolute -left-6 md:-left-12 -right-6 md:-right-12 -bottom-6 top-0 overflow-hidden bg-[#FAF9F6] border-t border-[#EAE9E4]"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          initial={{ x: initialX, y: initialY }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            width: `${CANVAS_SIZE}px`,
            height: `${CANVAS_SIZE}px`,
            backgroundImage: 'radial-gradient(#d1d1cf 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            backgroundPosition: 'center'
          }}
        >
          {items.map(item => (
            <PlaygroundItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </motion.div>
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
      whileHover={{ scale: 1.03, y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15), 0 10px 15px -3px rgba(0,0,0,0.05)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="absolute rounded-xl border border-[#EAE9E4] shadow-sm flex flex-col cursor-pointer transition-shadow"
      style={{
        left: item.x,
        top: item.y,
        width: item.w,
        rotate: item.rotate,
        backgroundColor: item.color || '#FFFFFF',
        color: item.textColor || '#FF4F12'
      }}
    >
      <div className="absolute inset-0 z-10" />
      
      {item.type === 'note' && (
        <div className="p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {item.content}
        </div>
      )}
      
      {item.type === 'image' && (
        <div className="p-3 pb-8">
           <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-sm mb-3 border border-[#EAE9E4]">
             <img src={item.src} alt={item.title} className="w-full h-full object-cover" draggable="false" />
           </div>
           <div className="text-center font-mono text-[10px] text-gray-500">{item.title}</div>
        </div>
      )}
      
      {item.type === 'widget' && (
        <div className="p-5 flex flex-col justify-between h-full text-left">
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
             <img src={item.src} className="max-h-[70vh] object-contain rounded-lg shadow-md mb-6 border border-[#EAE9E4]" alt={item.title} draggable="false" />
             <h3 className="font-mono text-sm opacity-60">{item.title}</h3>
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
