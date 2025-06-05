'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full top-0 bg-darkbg/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-cyan font-bold text-xl">BANDOO</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-cyan transition">Home</a>
          <a href="#services" className="text-white hover:text-cyan transition">Usługi</a>
          <a href="#pricing" className="text-white hover:text-cyan transition">Cennik</a>
          <a href="#contact" className="text-white hover:text-cyan transition">Kontakt</a>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 p-4 flex flex-col space-y-4 md:hidden">
            <a href="#" className="text-white hover:text-cyan">Home</a>
            <a href="#services" className="text-white hover:text-cyan">Usługi</a>
            <a href="#pricing" className="text-white hover:text-cyan">Cennik</a>
            <a href="#contact" className="text-white hover:text-cyan">Kontakt</a>
          </div>
        )}
      </div>
    </nav>
  );
}