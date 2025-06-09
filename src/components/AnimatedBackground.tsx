'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particles on component mount
  useEffect(() => {
    const particlesArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(particlesArray);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update particles' positions
  useEffect(() => {
    if (!particles.length) return;

    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          // Calculate the direction to move the particle based on mouse position
          const dx = (mousePosition.x - particle.x) * 0.01;
          const dy = (mousePosition.y - particle.y) * 0.01;
          
          // Add a small amount of mouse influence to the particle's speed
          let newSpeedX = particle.speedX + dx * 0.02;
          let newSpeedY = particle.speedY + dy * 0.02;
          
          // Limit the maximum speed
          const maxSpeed = 0.3;
          newSpeedX = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedX));
          newSpeedY = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedY));
          
          // Update particle position and wrap around edges
          let newX = (particle.x + newSpeedX + 100) % 100;
          let newY = (particle.y + newSpeedY + 100) % 100;

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles, mousePosition]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-black to-blue-950 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan"
          animate={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: particle.opacity,
          }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70"></div>
    </div>
  );
}
