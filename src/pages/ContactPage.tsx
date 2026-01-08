import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Award,
  Shield,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const offices = [
    {
      city: 'Toronto',
      address: '123 Bay Street, Suite 1500\nToronto, ON M5H 2Y4',
      phone: '647-812-3668',
      email: 'toronto@captivacyber.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST'
    },
    {
      city: 'Vancouver',
      address: '456 Granville Street, Suite 800\nVancouver, BC V6C 1V5',
      phone: '604-123-4567',
      email: 'vancouver@captivacyber.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST'
    },
    {
      city: 'Montreal',
      address: '789 Rue Saint-Jacques, Suite 600\nMontréal, QC H3C 1G1',
      phone: '514-123-4567',
      email: 'montreal@captivacyber.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST'
    }
  ];



  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to strengthen your cybersecurity posture? Our team of experts is here to help. 
              Contact us today for a free consultation and discover how we can protect your business.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Locations Across Canada
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices coast to coast, we provide local expertise and support to businesses across Canada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-cyan-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{office.city}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 whitespace-pre-line">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-gray-300">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <Contact />

      {/* Additional Contact Methods */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 border border-gray-700 rounded-xl p-8"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our security experts</p>
              <a href="tel:+16478123668" className="text-cyan-400 hover:text-cyan-300 font-medium">
                647-812-3668
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 border border-gray-700 rounded-xl p-8"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <a href="mailto:getsecure@captivacyber.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                getsecure@captivacyber.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 border border-gray-700 rounded-xl p-8"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Website</h3>
              <p className="text-gray-300 mb-4">Explore our full service offerings</p>
              <a href="https://www.captivacyber.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                www.CaptivaCyber.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 border border-gray-700 rounded-xl p-8"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Emergency Line</h3>
              <p className="text-gray-300 mb-4">24/7 incident response hotline</p>
              <a href="tel:+16478123668" className="text-cyan-400 hover:text-cyan-300 font-medium">
                647-812-3668
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner With Cybersecurity Experts
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that trust Captiva Cyber to protect their digital assets. 
              Let's discuss how we can strengthen your security posture.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Your Free Consultation
            </motion.button>
            
            <p className="text-gray-400 text-sm mt-4">
              No commitment required. Get expert advice on your cybersecurity needs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;