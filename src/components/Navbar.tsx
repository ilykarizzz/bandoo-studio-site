'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'O nas', href: '#about' },
    { name: 'Usługi', href: '#services' },
    { name: 'Cennik', href: '#pricing' },
    { name: 'Referencje', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-darkbg/90 backdrop-blur-md shadow-lg shadow-cyan/5' 
          : 'bg-transparent'
      }`}
    >      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">        <a href="#" className="flex items-center space-x-2">
          <span className="text-cyan font-bold text-xl">BANDOO</span>
        </a>
          {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="px-4 py-2 text-gray-300 hover:text-cyan rounded-md transition-colors"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
          {/* Mobile menu button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-2 rounded-md bg-gray-800/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      </div>        {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-[64px] left-0 right-0 w-full z-50 bg-darkbg/95 backdrop-blur-md border-t border-gray-800 shadow-xl"
            role="navigation"
            aria-label="Mobile navigation"
          ><div className="flex flex-col space-y-1 p-4">              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="px-4 py-3 text-gray-300 hover:text-cyan hover:bg-gray-800/50 rounded-md transition-colors font-medium text-lg flex items-center justify-center"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}