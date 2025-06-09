'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'zigzag' | 'slant' | 'curve';
  fillClassName?: string; // For tailwind colors
  invertY?: boolean;
  dividerHeight?: string;
}

export function SectionDivider({
  type = 'wave',
  fillClassName = 'fill-darkbg dark:fill-gray-100',
  invertY = false,
  dividerHeight = 'h-16 md:h-24'
}: SectionDividerProps) {
  // Choose SVG path based on the type
  const getDividerPath = () => {
    switch (type) {
      case 'wave':
        return (
          <path 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        );
      case 'zigzag':
        return (
          <path 
            d="M0,160L120,138.7C240,117,480,75,720,64C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        );
      case 'slant':
        return (
          <path 
            d="M0,224L1440,64L1440,320L0,320Z"
          />
        );
      case 'curve':
        return (
          <path 
            d="M0,160L1440,288L1440,320L0,320Z"
          />
        );
      default:
        return (
          <path 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        );
    }
  };

  return (
    <div className={`w-full ${dividerHeight} overflow-hidden`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        className={`h-full w-full ${invertY ? 'rotate-180' : ''}`}
      >
        <motion.g
          initial={{ 
            opacity: 0, 
            y: invertY ? -20 : 20 
          }}
          animate={{ 
            opacity: 1,
            y: 0
          }}
          transition={{ duration: 1 }}
        >
          <motion.path 
            className={fillClassName}
            initial={{ 
              d: type === 'wave' ? 
                "M0,96L48,96C96,96,192,96,288,96C384,96,480,96,576,96C672,96,768,96,864,96C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" : 
                undefined
            }}
            animate={{ 
              d: getDividerPath().props.d
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
