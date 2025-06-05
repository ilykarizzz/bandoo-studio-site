'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white text-center">Kontakt</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">Imię / Zespół</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Jan Kowalski"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              aria-label="Imię lub nazwa zespołu"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">E-mail</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="mail@example.com"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              aria-label="Adres email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-300">Opis projektu</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              placeholder="Opisz krótko, co chcesz nagrać…"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              aria-label="Opis projektu"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-cyan text-black font-semibold rounded hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
          </button>
          {status === 'success' && (
            <p className="text-green-400 text-center">Wiadomość została wysłana. Dziękujemy!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Wystąpił błąd. Spróbuj ponownie później.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}