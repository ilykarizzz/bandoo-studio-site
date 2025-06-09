'use client';

import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

export function PricingSection() {
  const packages = [
    {
      name: "Standard",
      price: "70 zł",
      duration: "za godzinę",
      features: [
        "Nagrania wokalne",
        "Nagrania instrumentów",
        "Podstawowa edycja"
      ],
      popular: false
    },
    {
      name: "Pakiet 3h",
      price: "140 zł",
      originalPrice: "210 zł",
      duration: "za sesję",
      features: [
        "3 godziny w cenie 2",
        "Dodatkowe 30 min. na setup",
        "Eksport plików w formacie WAV"
      ],
      popular: true
    },
    {
      name: "Pakiet 5h",
      price: "210 zł",
      originalPrice: "350 zł",
      duration: "za sesję",
      features: [
        "5 godzin w cenie 3",
        "Dopasowanie terminu",
        "Edycja i podstawowy mix"
      ],
      popular: false
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-b from-darkbg to-black relative">
      {/* Glowing orb background effect */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyan/5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-blue-400 to-cyan">
            Cennik
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className={`relative flex flex-col rounded-2xl overflow-hidden ${
                pkg.popular 
                  ? 'border-2 border-cyan shadow-lg shadow-cyan/20' 
                  : 'border border-gray-800'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-cyan text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  NAJPOPULARNIEJSZY
                </div>
              )}
              
              <div className="bg-gray-900/80 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="ml-2 text-gray-400 line-through text-lg">{pkg.originalPrice}</span>
                  )}
                  <span className="text-sm text-gray-400 ml-1">{pkg.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    pkg.popular 
                      ? 'bg-cyan text-black hover:bg-cyan/90' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                  onClick={() => alert('Funkcja rezerwacji wkrótce dostępna. Skontaktuj się z nami bezpośrednio!')}
                >
                  Zarezerwuj
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-gray-300 max-w-2xl mx-auto"
        >
          <p>Potrzebujesz długoterminowej współpracy lub masz specjalne wymagania?</p>
          <p className="mt-2">
            <a href="#contact" className="text-cyan hover:underline font-medium">
              Skontaktuj się z nami
            </a> aby omówić indywidualne rozwiązania.
          </p>
        </motion.div>
      </div>
    </section>
  );
}