'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Logo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Create parallax effect for the logo
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);  return (    <motion.div 
      ref={ref}
      className="relative w-40 h-40 md:w-64 md:h-64 mb-0 mt-4"
      style={{ y, scale, opacity }}
    ><Image 
        src="/bandologo.png" 
        alt="Bandoo Music Studio Logo" 
        fill
        className="object-contain translate-y-2"
        priority
      />{/* Enhanced glowing effect */}
      <div className="absolute inset-0 rounded-full bg-cyan blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute inset-0 -z-10 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
    </motion.div>
  );
}
