'use client';

import { useScrollProgress } from '../hooks/useScroll';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const scrollProgress = useScrollProgress();
  
  // Alternative way using Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <>
      {/* Fixed progress bar at the top of the viewport */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-purple-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator (optional, on right-bottom corner) */}
      <motion.div 
        className="fixed bottom-5 right-5 size-14 rounded-full border-2 border-white/10 flex items-center justify-center z-[60] hidden md:flex"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: scrollProgress > 0.05 ? 1 : 0, scale: scrollProgress > 0.05 ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-cyan to-purple-500"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        <span className="relative text-sm font-medium text-white">{Math.round(scrollProgress * 100)}%</span>
      </motion.div>
    </>
  );
}
