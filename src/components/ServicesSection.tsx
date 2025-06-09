'use client';

import { FaMicrophone, FaHeadphones, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScroll';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ServicesSection() {
  const fadeInUp = {
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

  const services = [
    {
      icon: FaMicrophone,
      title: "Nagrania",
      description: "Neumann TLM 102 • AudioFuse • UAD",
      color: "from-cyan-500 to-blue-700"
    },
    {
      icon: FaHeadphones,
      title: "Mix & Master",
      description: "FabFilter • UAD • Profesjonalny dźwięk",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: FaMusic,
      title: "Produkcja",
      description: "Beaty hip-hop, trap, lo-fi",
      color: "from-blue-700 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-darkbg relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center space-y-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan to-blue-500">
            Co oferujemy
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              custom={index} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              key={index} 
              className="flex flex-col items-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan/30 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} shadow-lg shadow-cyan/10 mb-6 group-hover:shadow-cyan/30 transition-all duration-300`}>
                <service.icon className="text-white text-4xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              
              <motion.div 
                className="w-12 h-1 bg-cyan mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}