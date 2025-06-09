'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutUsSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan to-purple-500">O</span> nas
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto">
            Gdzie pasja spotyka się z profesjonalizmem, aby Twoja muzyka brzmiała doskonale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content with Asymmetric Background */}
          <div className="relative p-8 md:p-12">
            {/* Asymmetric Shape Background */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan/20 to-purple-500/20 dark:from-cyan/10 dark:to-purple-500/10 -z-10"
              style={{ 
                clipPath: 'polygon(0 0, 100% 20%, 90% 100%, 0% 80%)',
                transform: 'rotate(-2deg)'
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >              <h3 className="text-2xl md:text-3xl font-bold mb-6">Witamy w <span className="text-cyan">Bandoo Studio</span></h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 dark:text-gray-400">
                  Witamy w <strong>Bandoo Studio</strong> – domowym, acz w pełni profesjonalnym studiu nagrań, w którym pasja łączy się z precyzją i nowoczesnym brzmieniem. Naszym celem jest wydobycie z każdego artysty tego, co w nim najlepsze: od pierwszych prób po ostateczny mix i mastering. Dzięki pracy na sprzęcie klasy premium (Neumann TLM 102, Arturia AudioFuse Studio, monitory KRK Rokit 5) oraz zestawowi wtyczek FabFilter i UAD, gwarantujemy czyste, dynamiczne i pełne detali nagrania.
                </p>
                <h4 className="text-xl font-bold text-cyan mt-6 mb-2">Co nas wyróżnia:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-300 dark:text-gray-400">
                    <strong>Kompleksowa obsługa:</strong> Nagrania wokalu i instrumentów, produkcja beatów, miks i mastering – wszystko pod jednym dachem.
                  </li>
                  <li className="text-gray-300 dark:text-gray-400">
                    <strong>Indywidualne podejście:</strong> Twój projekt traktujemy jak własny, doradzamy aranżacje, sugestie brzmieniowe i techniczne rozwiązania.
                  </li>
                  <li className="text-gray-300 dark:text-gray-400">
                    <strong>Elastyczne terminy & konkurencyjny cennik:</strong> Oferujemy godziny nagrań i miksów dostosowane do Twoich potrzeb, z pakietami promocyjnymi (np. 3h w cenie 2, 5h w cenie 3).
                  </li>
                </ul>
                <p className="text-gray-300 dark:text-gray-400 mt-4">
                  W Bandoo Studio <strong>twoja twórczość</strong> to nasza misja – tworzymy przestrzeń, w której każdy dźwięk zyskuje profesjonalną oprawę. Zapraszamy do rezerwacji sesji i wspólnego kreowania niepowtarzalnego brzmienia!
                </p>
              </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-darkbg/50 dark:bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-cyan">7+</h4>
                  <p className="text-gray-400 text-sm">Lat Doświadczenia</p>
                </div>
                <div className="bg-darkbg/50 dark:bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-cyan">100+</h4>
                  <p className="text-gray-400 text-sm">Zrealizowanych Projektów</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Studio Image with Asymmetric Border */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden"
                 style={{ 
                   clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)',
                 }}>
              {/* Replace with your actual studio image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/30 to-purple-500/30 mix-blend-overlay z-10"></div>
              <Image 
                src="/gallery/studio-1.jpg" 
                alt="Bandoo Studio" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-cyan"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-purple-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
