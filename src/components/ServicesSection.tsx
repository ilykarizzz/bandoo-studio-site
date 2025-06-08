'use client';

import { FaMicrophone, FaHeadphones, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          Co oferujemy
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaMicrophone,
              title: "Nagrania",
              description: "Neumann TLM 102 • AudioFuse • UAD"
            },
            {
              icon: FaHeadphones,
              title: "Mix & Master",
              description: "FabFilter • UAD • Profesjonalny dźwięk"
            },
            {
              icon: FaMusic,
              title: "Produkcja",
              description: "Beaty hip-hop, trap, lo-fi"
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <service.icon className="text-cyan text-5xl mb-4" />
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}