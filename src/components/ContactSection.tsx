'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiPhone, FiMusic, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { AnimateOnScroll } from './AnimateOnScroll';

// Define form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

type FormState = {
  name: FormField;
  email: FormField;
  message: FormField;
  phone: FormField;
  service: FormField;
};

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  
  // More detailed form state with validation
  const [formData, setFormData] = useState<FormState>({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false },
    phone: { value: '', error: '', touched: false },
    service: { value: '', error: '', touched: false }
  });

  const serviceOptions = [
    { value: '', label: 'Wybierz usługę' },
    { value: 'recording', label: 'Nagranie wokalu/instrumentu' },
    { value: 'mixing', label: 'Mix utworu' },
    { value: 'mastering', label: 'Mastering' },
    { value: 'production', label: 'Produkcja pełnego utworu' },
    { value: 'other', label: 'Inne' }
  ];

  // Validate a single field
  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Imię musi mieć co najmniej 2 znaki' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Podaj prawidłowy adres email' : '';
      case 'message':
        return value.trim().length < 10 ? 'Wiadomość musi mieć co najmniej 10 znaków' : '';
      case 'phone':
        if (value && !/^[0-9+\-\s()]*$/.test(value)) {
          return 'Podaj prawidłowy numer telefonu';
        }
        return '';
      default:
        return '';
    }
  };

  // Update a field in the form state
  const updateField = (name: keyof FormState, value: string, touch: boolean = true) => {
    const error = validateField(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: {
        value,
        error,
        touched: touch ? true : prev[name].touched
      }
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    // First validate all fields
    const newFormData = { ...formData };
    let isValid = true;
    
    (Object.keys(formData) as Array<keyof FormState>).forEach(field => {
      const value = formData[field].value;
      // Skip validation for optional fields if empty
      if ((field === 'phone' || field === 'service') && !value) {
        return;
      }
      
      const error = validateField(field, value);
      newFormData[field] = {
        ...formData[field],
        error,
        touched: true
      };
      
      if (error && (field !== 'phone' && field !== 'service')) {
        isValid = false;
      }
    });
    
    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }
    
    setStatus('loading');

    // Extract values for submission
    const submissionData = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
      phone: formData.phone.value,
      service: formData.service.value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({
          name: { value: '', error: '', touched: false },
          email: { value: '', error: '', touched: false },
          message: { value: '', error: '', touched: false },
          phone: { value: '', error: '', touched: false },
          service: { value: '', error: '', touched: false }
        });
      } else {
        setStatus('error');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  // Animation variants for form elements
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 mb-10 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Kontakt</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Masz pytania lub chcesz zarezerwować sesję? Skontaktuj się z nami już dziś i rozpocznij swoją muzyczną podróż z Bandoo Studio.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mr-4">
                  <FiPhone className="text-cyan text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <a href="tel:+48123456789" className="text-white hover:text-cyan transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mr-4">
                  <FiMail className="text-cyan text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:kontakt@bandoostudio.pl" className="text-white hover:text-cyan transition-colors">
                    kontakt@bandoostudio.pl
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan text-xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Adres</p>
                  <p className="text-white">ul. Muzyczna 42, Warszawa</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5"
          >
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Wyślij zapytanie</h3>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center"
                >
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold text-white mb-2">Dziękujemy!</h4>
                  <p className="text-gray-300">Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                  >
                    Wyślij nową wiadomość
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <motion.div custom={0} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label htmlFor="name" className="block mb-2 text-gray-300">Imię / Zespół *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        value={formData.name.value}
                        onChange={(e) => updateField('name', e.target.value)}
                        onBlur={() => updateField('name', formData.name.value)}
                        placeholder="Jan Kowalski"
                        className={`w-full pl-12 pr-4 py-3 rounded bg-gray-700 text-white border ${
                          formData.name.touched && formData.name.error ? 'border-red-500' : 'border-gray-600'
                        } focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors`}
                        aria-label="Imię lub nazwa zespołu"
                      />
                    </div>
                    {formData.name.touched && formData.name.error && (
                      <p className="mt-1 text-red-500 text-sm">{formData.name.error}</p>
                    )}
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div custom={1} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label htmlFor="email" className="block mb-2 text-gray-300">E-mail *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <FiMail className="text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={formData.email.value}
                          onChange={(e) => updateField('email', e.target.value)}
                          onBlur={() => updateField('email', formData.email.value)}
                          placeholder="mail@example.com"
                          className={`w-full pl-12 pr-4 py-3 rounded bg-gray-700 text-white border ${
                            formData.email.touched && formData.email.error ? 'border-red-500' : 'border-gray-600'
                          } focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors`}
                          aria-label="Adres email"
                        />
                      </div>
                      {formData.email.touched && formData.email.error && (
                        <p className="mt-1 text-red-500 text-sm">{formData.email.error}</p>
                      )}
                    </motion.div>
                    
                    <motion.div custom={2} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label htmlFor="phone" className="block mb-2 text-gray-300">Telefon (opcjonalnie)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <FiPhone className="text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone.value}
                          onChange={(e) => updateField('phone', e.target.value)}
                          onBlur={() => updateField('phone', formData.phone.value)}
                          placeholder="+48 123 456 789"
                          className={`w-full pl-12 pr-4 py-3 rounded bg-gray-700 text-white border ${
                            formData.phone.touched && formData.phone.error ? 'border-red-500' : 'border-gray-600'
                          } focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors`}
                          aria-label="Numer telefonu"
                        />
                      </div>
                      {formData.phone.touched && formData.phone.error && (
                        <p className="mt-1 text-red-500 text-sm">{formData.phone.error}</p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div custom={3} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label htmlFor="service" className="block mb-2 text-gray-300">Rodzaj usługi (opcjonalnie)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FiMusic className="text-gray-400" />
                      </div>
                      <select
                        id="service"
                        value={formData.service.value}
                        onChange={(e) => updateField('service', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none"
                        aria-label="Rodzaj usługi"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div custom={4} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label htmlFor="message" className="block mb-2 text-gray-300">Opis projektu *</label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none">
                        <FiMessageSquare className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        value={formData.message.value}
                        onChange={(e) => updateField('message', e.target.value)}
                        onBlur={() => updateField('message', formData.message.value)}
                        rows={4}
                        placeholder="Opisz krótko, co chcesz nagrać…"
                        className={`w-full pl-12 pr-4 py-3 rounded bg-gray-700 text-white border ${
                          formData.message.touched && formData.message.error ? 'border-red-500' : 'border-gray-600'
                        } focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors`}
                        aria-label="Opis projektu"
                      />
                    </div>
                    {formData.message.touched && formData.message.error && (
                      <p className="mt-1 text-red-500 text-sm">{formData.message.error}</p>
                    )}
                  </motion.div>
                  
                  <motion.div custom={5} variants={formAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-cyan to-blue-600 text-black font-semibold rounded hover:from-blue-400 hover:to-cyan transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:from-cyan disabled:hover:to-blue-600"
                    >
                      {status === 'loading' ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wysyłanie...
                        </div>
                      ) : (
                        'Wyślij zapytanie'
                      )}
                    </button>
                  </motion.div>
                  
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-900/30 border border-red-700 rounded text-center"
                    >
                      <p className="text-red-400">
                        Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio.
                      </p>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>    </section>
  );
}