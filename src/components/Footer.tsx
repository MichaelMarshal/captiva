import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Github,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const services = [
    { name: 'ASSESS', href: '/services/assess' },
    { name: 'HARDEN', href: '/services/harden' },
    { name: 'MONITOR', href: '/services/monitor' },
    { name: 'RESPOND', href: '/services/respond' },
    { name: 'RECOVER', href: '/services/recover' },
    { name: 'Cyber Readiness Assessment', href: '/services/assessment' }
  ];

  const resources = [
    { name: 'Security Blog', href: '/blog' },
    { name: 'White Papers', href: '/resources/whitepapers' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Security Tools', href: '/resources/tools' },
    { name: 'Knowledge Base', href: '/resources/kb' },
    { name: 'Threat Intelligence', href: '/resources/threat-intel' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Data Processing', href: '/legal/data-processing' },
    { name: 'Security Policy', href: '/legal/security-policy' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/captivacyber', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/captivacyber', color: 'hover:text-blue-600' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/captivacyber', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/captivacyber', color: 'hover:text-gray-300' }
  ];



  return (
    <footer className={`${
      isDarkTheme 
        ? 'bg-black border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    } border-t`}>


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img 
                    src="https://michaelmarshal.github.io/captiva/logo.png" 
                    alt="Captiva Cyber Logo" 
                    className="h-48 w-auto"
                  />
                </div>
                <span className={`text-2xl font-bold ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  Captiva<span className={`${
                    isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                  }`}>Cyber</span>
                </span>
              </div>
              
              <p className={`mb-6 leading-relaxed ${
                isDarkTheme ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Enterprise-Grade Cyber Defense, Built For Real-World Business. 
                Where Cyber Security Meets Confidence. Canadian security team with vetted tech stack.
              </p>

              <div className="space-y-3">
                <div className={`flex items-center space-x-3 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Mail className={`h-4 w-4 ${
                    isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <a href="mailto:getsecure@captivacyber.com" className={`transition-colors ${
                    isDarkTheme ? 'hover:text-cyan-400' : 'hover:text-blue-600'
                  }`}>
                    getsecure@captivacyber.com
                  </a>
                </div>
                <div className={`flex items-center space-x-3 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Phone className={`h-4 w-4 ${
                    isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <a href="tel:+16478123668" className={`transition-colors ${
                    isDarkTheme ? 'hover:text-cyan-400' : 'hover:text-blue-600'
                  }`}>
                    647-812-3668
                  </a>
                </div>
                <div className={`flex items-center space-x-3 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <MapPin className={`h-4 w-4 ${
                    isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <a href="https://www.captivacyber.com" className={`transition-colors ${
                    isDarkTheme ? 'hover:text-cyan-400' : 'hover:text-blue-600'
                  }`}>
                    www.CaptivaCyber.com
                  </a>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-6 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm transition-colors ${
                      isDarkTheme 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-6 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className={`text-sm transition-colors ${
                      isDarkTheme 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-6 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>Resources</h4>
            <ul className="space-y-3 mb-8">
              {resources.slice(0, 4).map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className={`text-sm transition-colors flex items-center ${
                      isDarkTheme 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {resource.name}
                    {resource.href.startsWith('http') && (
                      <ExternalLink className="ml-1 h-3 w-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={`font-semibold mb-4 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>Legal</h4>
            <ul className="space-y-2">
              {legal.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`text-sm transition-colors ${
                      isDarkTheme 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${
        isDarkTheme 
          ? 'border-gray-800 bg-gray-900/50' 
          : 'border-gray-200 bg-gray-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-sm ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              © {new Date().getFullYear()} Captiva Cyber. All rights reserved. Built with security in mind.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-colors ${
                    isDarkTheme 
                      ? `text-gray-400 ${social.color}` 
                      : `text-gray-500 ${social.color.replace('hover:text-', 'hover:text-')}`
                  }`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className={`mt-6 pt-6 border-t text-center ${
              isDarkTheme ? 'border-gray-800' : 'border-gray-300'
            }`}
          >
            <p className={`text-xs ${
              isDarkTheme ? 'text-gray-500' : 'text-gray-600'
            }`}>
              🔒 This website uses secure encryption and follows cybersecurity best practices. 
              Your data is protected and never shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;