'use client';

import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/studiobandoo/", label: "Instagram" }
  ];
  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "ul. Swarozyca 5a, Chojnice" },
    { icon: FaPhone, text: "+48 667 530 007" },
    { icon: FaEnvelope, text: "Kornowski.karol1@gmail.com" }
  ];

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

  return (
    <footer className="bg-gradient-to-b from-darkbg to-black pt-16 pb-8 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="col-span-1"
          >            <div className="flex items-center mb-4">              <div className="relative w-10 h-10 mr-3 mt-2">
                <Image 
                  src="/bandologo.png" 
                  alt="Bandoo Studio Logo" 
                  fill
                  className="translate-y-2"
                  className="object-contain"
                />
              </div>
              <h3 className="text-cyan text-xl font-bold">Bandoo Studio</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Profesjonalne studio nagrań oferujące kompleksowe usługi produkcji muzycznej. 
              Tworzymy z pasją i dbałością o każdy detal.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-cyan hover:text-black text-gray-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="col-span-1"
          >            <h4 className="text-white text-lg font-bold mb-6">Szybki dostęp</h4>
            <ul className="space-y-3">
              {[
                { name: 'Oferta', href: '#services' },
                { name: 'Cennik', href: '#pricing' },
                { name: 'Referencje', href: '#testimonials' },
                { name: 'Kontakt', href: '#contact' }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-cyan transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="col-span-1"
          >
            <h4 className="text-white text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start">
                  <item.icon className="text-cyan mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>&copy; {currentYear} Bandoo Studio. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">Zaprojektowane z 💙 dla pasjonatów muzyki</p>
        </motion.div>
      </div>
    </footer>
  );
}