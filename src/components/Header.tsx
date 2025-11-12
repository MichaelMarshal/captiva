import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'ASSESS - Security Assessment', href: '/services/assess' },
        { name: 'HARDEN - Defense Implementation', href: '/services/harden' },
        { name: 'MONITOR - Continuous Monitoring', href: '/services/monitor' },
        { name: 'RESPOND - Incident Response', href: '/services/respond' },
        { name: 'RECOVER - Business Continuity', href: '/services/recover' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? theme === 'light' 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200' 
            : 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ marginTop: '-30px' }}>
        <div className="flex h-56 items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  
                  src="https://michaelmarshal.github.io/captiva/logo.png" 
                  alt="Captiva Cyber Logo" 
                  className="h-48 w-auto"
                />
              </div>
              <span className={`text-xl font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                Captiva<span className={theme === 'light' ? 'text-blue-600' : 'text-cyan-400'}>Cyber</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={clsx(
                          'flex items-center px-3 py-2 text-sm font-medium transition-colors',
                          isActive(item.href)
                            ? theme === 'light' ? 'text-blue-600' : 'text-cyan-400'
                            : theme === 'light' 
                              ? 'text-slate-600 hover:text-blue-600' 
                              : 'text-gray-300 hover:text-cyan-400'
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-full left-0 mt-2 w-64 backdrop-blur-md rounded-lg shadow-xl ${
                              theme === 'light' 
                                ? 'bg-white/95 border border-blue-200' 
                                : 'bg-gray-800/95 border border-cyan-500/20'
                            }`}
                          >
                            <div className="py-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`block px-4 py-2 text-sm transition-colors ${
                                    theme === 'light'
                                      ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={clsx(
                        'px-3 py-2 text-sm font-medium transition-colors',
                        isActive(item.href)
                          ? theme === 'light' ? 'text-blue-600' : 'text-cyan-400'
                          : theme === 'light' 
                            ? 'text-slate-600 hover:text-blue-600' 
                            : 'text-gray-300 hover:text-cyan-400'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Cyber Readiness Assessment
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 ${
                theme === 'light'
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-blue-50 focus:ring-blue-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:ring-cyan-500'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden backdrop-blur-md border-t ${
              theme === 'light' 
                ? 'bg-white/95 border-blue-200' 
                : 'bg-gray-900/95 border-cyan-500/20'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={clsx(
                      'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                      isActive(item.href)
                        ? theme === 'light' 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-cyan-400 bg-gray-700/50'
                        : theme === 'light'
                          ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            theme === 'light'
                              ? 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                              : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-700/30'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 space-y-3">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  Book Cyber Readiness Assessment
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;