'use client';

import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michał K.",
      text: "Profesjonalne podejście i świetna atmosfera. Nagrania brzmią fenomenalnie!",
      role: "Raper"
    },
    {
      name: "Zespół Euforia",
      text: "Współpraca z Bandoo Studio to sama przyjemność. Polecamy każdemu, kto szuka dobrego brzmienia.",
      role: "Zespół rockowy"
    },
    {
      name: "Anna W.",
      text: "Mix i master na najwyższym poziomie. Będę wracać!",
      role: "Wokalistka"
    }
  ];

  return (
    <section className="py-20 bg-darkbg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Co mówią o nas
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-cyan text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}