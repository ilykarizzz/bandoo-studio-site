'use client';

import { ServicesSection } from '../components/ServicesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { VideoBackground } from '../components/VideoBackground';
import { Logo } from '../components/Logo';
import { MotionButton } from '../components/MotionButton';
import { SectionDivider } from '../components/SectionDivider';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />      {/* HERO with Video Background */}
      <main 
        ref={targetRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-16 z-10 overflow-hidden"
      >
        {/* Replace static AnimatedBackground with VideoBackground for hero */}
        <div className="absolute inset-0 z-0">
          <VideoBackground />
        </div>
        
        {/* Parallax floating shapes for visual interest */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Large gradient circle */}
          <motion.div 
            className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-cyan/20 to-purple-500/5 blur-3xl opacity-40"
            animate={{ 
              x: [20, -10, 20],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut"
            }}
          />
          
          {/* Small floating elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="hidden lg:block absolute bg-cyan/30 rounded-full blur-xl"
              style={{
                left: `${25 + i * 20}%`,
                top: `${20 + i * 15}%`,
                width: `${100 + i * 30}px`,
                height: `${100 + i * 30}px`,
              }}
              animate={{ 
                y: [20, -20, 20],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 10 + i * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
          <motion.div
          className="flex flex-col items-center z-10 px-4"
          style={{ opacity: heroOpacity, y: heroY }}
        >          <div className="flex flex-col items-center justify-center">
            <Logo />            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="-mt-4 text-[4rem] md:text-[6rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple-500 text-center drop-shadow-[0_0_15px_rgba(0,224,255,0.5)]"
            >
              Bandoo
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-white text-center max-w-lg font-light tracking-wider"
          >
            <span className="text-cyan font-normal">Nagrania</span> | <span className="text-cyan font-normal">Mix & Master</span> | <span className="text-cyan font-normal">Produkcja Beatów</span>
          </motion.p>          <div className="mt-8 flex items-center">
            <MotionButton
              variant="primary"
              size="lg"
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Zarezerwuj sesję
            </MotionButton>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>      </main>      
      {/* SEKCJE */}
      <section id="about">
        <AboutUsSection />
        <SectionDivider type="wave" fillClassName="fill-gray-50/5 dark:fill-gray-900/30" />
      </section>
      
      <section id="services">
        <ServicesSection />
        <SectionDivider type="slant" fillClassName="fill-cyan/5" />
      </section>
      
      <section id="pricing">
        <PricingSection />
        <SectionDivider type="curve" fillClassName="fill-gray-50/10 dark:fill-gray-900/50" />
      </section>
        <section id="testimonials">
        <TestimonialsSection />
        <SectionDivider type="wave" invertY={true} fillClassName="fill-cyan/5" />
      </section>
      
      <ContactSection />
    </>
  );
}