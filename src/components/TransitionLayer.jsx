import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionLayer({ isTransitioning }) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background Wash */}
          <motion.div 
            className="absolute inset-0 bg-white/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Main Watercolor Blob (Originating from top-left flowers) */}
          <motion.div
            className="absolute rounded-full w-[250vw] h-[250vw] md:w-[180vw] md:h-[180vw]"
            style={{
              background: 'radial-gradient(circle at 20% 20%, #A1D7FF 10%, #FFDBCE 30%, #AED635 60%, #FF4F12 90%)',
              filter: 'blur(100px)',
              transformOrigin: 'top left'
            }}
            initial={{ scale: 0, x: '-30vw', y: '-30vh' }}
            animate={{ scale: 1, x: '-10vw', y: '-10vh' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Secondary Iridescent Blob for liquid movement */}
          <motion.div
            className="absolute rounded-full w-[200vw] h-[200vw] mix-blend-multiply opacity-50"
            style={{
              background: 'radial-gradient(circle at 80% 80%, #FF4F12 0%, #FFDBCE 40%, transparent 80%)',
              filter: 'blur(80px)'
            }}
            initial={{ scale: 0, x: '20vw', y: '20vh' }}
            animate={{ scale: 1.5, x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Shimmer/Sparkle overlays */}
          <motion.div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(white 1px, transparent 2px)',
              backgroundSize: '30px 30px'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
