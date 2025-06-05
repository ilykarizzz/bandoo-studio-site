'use client';

import { ServicesSection } from '../components/ServicesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-cyan"
        >
          Bandoo Studio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-gray-300 text-center max-w-lg"
        >
          Nagrania | Mix & Master | Produkcja Beatów
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          className="mt-8 px-8 py-4 bg-cyan text-black font-semibold rounded hover:bg-blue-400 transition"
        >
          Zarezerwuj sesję
        </motion.a>
      </main>
      
      {/* SEKCJE */}
      <section id="services">
        <ServicesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <ContactSection />
    </>
  );
}