'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Interface for testimonial data
interface Testimonial {
  name: string;
  text: string;
  role: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);    const testimonials: Testimonial[] = [    {
      name: "Jastrząb",
      text: "Profesjonalne podejście i świetna atmosfera. Nagrania brzmią fenomenalnie! Polecam każdemu artyście, który szuka miejsca do nagrania swoich utworów.",
      role: "Raper",
      rating: 5
    },
    {
      name: "Wojdes",
      text: "Współpraca z Bandoo Studio to sama przyjemność. Polecamy każdemu, kto szuka dobrego brzmienia. Studio jest wyposażone w najlepszy sprzęt, który pozwala uzyskać wyjątkowe brzmienie.",
      role: "Producent",
      rating: 5
    },
    {
      name: "Leszczu",
      text: "Mix i master na najwyższym poziomie. Będę wracać! Profesjonalizm i życzliwe podejście to coś, co wyróżnia Bandoo Studio na tle innych.",
      role: "Wokalista",
      rating: 5
    },
    {
      name: "Jacob.shawty",
      text: "Niesamowite doświadczenie! Każda minuta spędzona w Bandoo Studio była produktywna i przyjemna. Realizator pomógł mi dopracować każdy szczegół mojego utworu.",
      role: "Producent muzyczny",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  // Pause autoplay when user interacts
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  // Render stars based on rating
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Co mówią o nas
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Poznaj opinie naszych klientów, którzy zaufali Bandoo Studio przy realizacji swoich projektów muzycznych
        </motion.p>
        
        {/* Main testimonial display */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 relative"
            >
              {/* Quote mark decoration */}
              <svg 
                className="absolute top-4 left-4 w-12 h-12 text-gray-700 opacity-30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
              </svg>
              
              <div className="flex flex-col md:flex-row items-center gap-6">                {/* Initial letter avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-cyan shadow-lg shadow-cyan/20">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {testimonials[activeIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="flex-1">
                  <div className="flex mb-3">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  <p className="text-gray-100 text-lg italic mb-4">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-cyan">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-cyan scale-125' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional testimonial cards (mobile-responsive) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 hidden md:grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={`card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer transform transition-transform hover:-translate-y-2 ${
                index === activeIndex ? 'ring-2 ring-cyan' : ''
              }`}
              onClick={() => handleManualNavigation(index)}
            >
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-300 italic line-clamp-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center">                <div className="flex-shrink-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}