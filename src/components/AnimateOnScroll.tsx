'use client';

import { motion, useReducedMotion as useFramerReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '../context/ReducedMotionContext';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'slide-left' | 'zoom';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function AnimateOnScroll({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  once = true,
  className = ''
}: AnimateOnScrollProps) {
  const { prefersReducedMotion } = useReducedMotion();
  const framerReducedMotion = useFramerReducedMotion();
  // Define animation variants
  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };
  // If reduced motion is preferred, just show the content without animation
  if (prefersReducedMotion || framerReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  // Otherwise, apply the animation
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
