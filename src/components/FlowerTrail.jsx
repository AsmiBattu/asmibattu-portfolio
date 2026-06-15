import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FlowerSVG({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="#99C83C" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="15" r="15" />
      <circle cx="75" cy="25" r="15" />
      <circle cx="85" cy="50" r="15" />
      <circle cx="75" cy="75" r="15" />
      <circle cx="50" cy="85" r="15" />
      <circle cx="25" cy="75" r="15" />
      <circle cx="15" cy="50" r="15" />
      <circle cx="25" cy="25" r="15" />
      <circle cx="50" cy="50" r="15" fill="#FAF9F6" />
    </svg>
  );
}

export default function FlowerTrail({ containerRef, elementRefs, durationMs = 1500 }) {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    let animationFrameId;
    let lastSpawn = 0;
    const startTime = Date.now();

    const checkAndSpawn = (timestamp) => {
      if (Date.now() - startTime > durationMs) return;

      // Spawn flowers every 80ms for a sparse, elegant trail
      if (timestamp - lastSpawn > 80) {
        lastSpawn = timestamp;
        
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        const newFlowers = [];
        elementRefs.current.forEach((el, index) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          
          // Calculate center of the moving element
          const cx = rect.left - containerRect.left + rect.width / 2;
          const cy = rect.top - containerRect.top + rect.height / 2;
          
          // Spawn exactly 1 flower per tick for a subtle effect
          const count = 1;
          for (let i = 0; i < count; i++) {
            newFlowers.push({
              id: `${index}-${timestamp}-${i}`,
              time: Date.now(),
              x: cx + (Math.random() - 0.5) * rect.width * 0.8,
              y: cy + (Math.random() - 0.5) * rect.height * 0.8,
              scale: 0.2 + Math.random() * 0.4,
              rotate: Math.random() * 360,
            });
          }
        });

        if (newFlowers.length > 0) {
          setFlowers(prev => [...prev, ...newFlowers].slice(-150)); // cap max flowers to prevent lag
        }
      }
      animationFrameId = requestAnimationFrame(checkAndSpawn);
    };

    animationFrameId = requestAnimationFrame(checkAndSpawn);

    // Garbage collection for old flowers
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setFlowers(prev => prev.filter(f => now - f.time < 500)); // Remove after 500ms
    }, 150);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(cleanupInterval);
    };
  }, [containerRef, elementRefs, durationMs]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {flowers.map(flower => (
          <motion.div
            key={flower.id}
            initial={{ opacity: 1, scale: flower.scale, x: flower.x, y: flower.y, rotate: flower.rotate }}
            animate={{ opacity: 1, scale: flower.scale, x: flower.x, y: flower.y, rotate: flower.rotate }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute w-8 h-8 md:w-10 md:h-10 -ml-4 -mt-4 md:-ml-5 md:-mt-5"
          >
            <FlowerSVG className="w-full h-full drop-shadow-sm" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
