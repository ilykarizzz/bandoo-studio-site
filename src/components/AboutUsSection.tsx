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
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan to-purple-500">About</span> Bandoo
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto">
            Where creativity meets technical excellence to bring your musical vision to life.
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
            >              <h3 className="text-2xl md:text-3xl font-bold mb-6">Studio With Soul</h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 dark:text-gray-400">
                  With over 7 years of experience, Bandoo Studio has helped bring more than 100 music projects to life, from local indie bands to internationally recognized artists.
                </p>
                <p className="text-gray-300 dark:text-gray-400">
                  Our studio is equipped with top-quality gear including Neumann microphones, Universal Audio interfaces, Adam monitors, and professional production software to ensure your music sounds its absolute best.
                </p>
                <p className="text-gray-300 dark:text-gray-400">
                  Our philosophy is simple: provide world-class recording facilities paired with engineers who are as passionate about your music as you are.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-darkbg/50 dark:bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-cyan">7+</h4>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="bg-darkbg/50 dark:bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-cyan">100+</h4>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
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
