'use client';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative rounded-full w-10 h-10 flex items-center justify-center ${
        isDark ? 'bg-gray-800 text-yellow-300' : 'bg-blue-100 text-blue-800'
      } transition-colors duration-200`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      title={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
      aria-label={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
      </motion.div>
    </motion.button>
  );
}
