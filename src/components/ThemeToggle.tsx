import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-3 rounded-full border transition-all duration-300 group ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 hover:border-cyan-500/50' 
          : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-blue-500/50 shadow-sm'
      }`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 180,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-slate-600'}`} />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className={`w-6 h-6 ${theme === 'light' ? 'text-amber-500 group-hover:text-amber-600' : 'text-gray-400'}`} />
        </motion.div>
      </div>
      
      {/* Tooltip */}
      <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-900 text-white shadow-lg'
      }`}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;