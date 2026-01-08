import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Target,
  CheckCircle,
  TrendingUp,
  Phone,
  Mail
} from 'lucide-react';

const AboutPage: React.FC = () => {

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize robust security measures in everything we do, ensuring your data and systems remain protected.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, understanding your unique challenges and business objectives.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We stay ahead of emerging threats by continuously updating our methods and technologies.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our focus is on delivering measurable security improvements and business value for our clients.'
    }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    'PCI DSS Validated',
    'GDPR Compliant',
    'NIST Framework Aligned'
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
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Captiva Cyber</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise-Grade Cyber Defense, Built For Real-World Business. 
              Founded by cybersecurity veterans, we're dedicated to protecting businesses from 
              the evolving landscape of digital threats through innovative solutions and expert guidance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Pioneering Cybersecurity Excellence Since 2008
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Captiva Cyber was founded with a simple mission: to make advanced cybersecurity 
                  accessible to businesses of all sizes. Our journey began when our founders, 
                  seasoned security professionals, recognized the growing gap between evolving 
                  cyber threats and traditional security approaches.
                </p>
                <p>
                  Today, we're proud to be a trusted partner to over 500 organizations worldwide, 
                  from innovative startups to Fortune 500 companies. Our Canadian security team 
                  combines deep technical expertise with real-world experience to deliver solutions 
                  that truly protect.
                </p>
                <p>
                  We believe that effective cybersecurity isn't just about technology—it's about 
                  understanding your business, your risks, and your goals. That's why we take a 
                  holistic approach to security, ensuring that every solution we implement aligns 
                  with your business objectives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop"
                  alt="Cybersecurity operations center"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors"
              >
                <div className="inline-flex p-4 rounded-lg bg-gray-700/50 mb-6">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Certifications & Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Certifications & Compliance</h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6">
                Contact our team to discuss how we can help secure your organization 
                and achieve your cybersecurity goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                  <a href="mailto:getsecure@captivacyber.com" className="hover:text-cyan-400 transition-colors">
                    getsecure@captivacyber.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                  <a href="tel:+16478123668" className="hover:text-cyan-400 transition-colors">
                    647-812-3668
                  </a>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;