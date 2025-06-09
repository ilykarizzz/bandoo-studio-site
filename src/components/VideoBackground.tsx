'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../context/ReducedMotionContext';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { prefersReducedMotion } = useReducedMotion();

  useEffect(() => {
    // Set video playback rate
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down video a bit for better ambiance
      
      // Pause video if user prefers reduced motion
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log('Auto-play prevented:', err));
      }
    }
    
    // Check if we're on mobile for better performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run on mount and add resize listener
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Video overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-darkbg z-10"></div>
      
      {/* Fallback image for mobile or when video fails to load */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: 'url(/hero-fallback.jpg)' }}>
      </div>      {/* Video background - only load on non-mobile for performance */}
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-fallback.jpg"
          // HTML5 video doesn't support loading="lazy"
        >
          <source src="/videos/studio-background.mp4" type="video/mp4" />
          <source src="/videos/studio-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Animated particles overlay */}
      <motion.div 
        className="absolute inset-0 z-20 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute h-full w-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                width: `${Math.random() * 60 + 20}px`, 
                height: `${Math.random() * 60 + 20}px`,
                filter: 'blur(15px)',
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
