'use client';

import { motion } from 'framer-motion';

export function PricingSection() {
  const handlePurchase = () => {
    // For demo purposes, show an alert
    alert('Funkcja płatności zostanie wkrótce aktywowana. Skontaktuj się z nami bezpośrednio!');
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan"
        >
          Cennik
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gray-800 rounded-lg p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Godzina w Bandoo Studio
          </h3>
          <p className="text-gray-300 mb-6">
            Realizacja, Mix & Master, Beaty
          </p>
          <p className="text-3xl font-bold text-cyan mb-8">
            70 zł / godzina
          </p>
          <button
            onClick={handlePurchase}
            className="px-8 py-4 bg-cyan text-black font-semibold rounded hover:bg-blue-400 transition"
          >
            Zarezerwuj sesję
          </button>
        </motion.div>
      </div>
    </section>
  );
}