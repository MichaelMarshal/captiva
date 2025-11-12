import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  Eye,
  Zap,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'ASSESS',
      description: 'Comprehensive evaluation of your current security posture and vulnerabilities.',
      features: ['Risk Assessment', 'Vulnerability Scanning', 'Security Gap Analysis'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'HARDEN',
      description: 'Strengthen your defenses with robust security implementations and controls.',
      features: ['Endpoint & Network Defense', 'Identity Security & Access Control', 'Vulnerability & Patch Management'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Eye,
      title: 'MONITOR',
      description: 'Continuous surveillance and threat detection across your infrastructure.',
      features: ['24/7 SOC Monitoring', 'Threat Intelligence', 'Real-time Alerting'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: AlertTriangle,
      title: 'RESPOND',
      description: 'Rapid incident response and containment to minimize business impact.',
      features: ['Incident Response & Guided Recovery', 'Forensic Analysis', 'Emergency Support'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'RECOVER',
      description: 'Comprehensive recovery and business continuity planning.',
      features: ['Backup & Continuity Integrity', 'Disaster Recovery', 'Business Resumption'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Comprehensive 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Security Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            From proactive threat hunting to incident response, we provide end-to-end cybersecurity 
            services tailored to protect your business and ensure compliance.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Outcomes & Assurance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Reduce Risk Exposure',
              'Maintain Operations',
              'Executive-Level Reporting',
              'Predictable Monthly Investment'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/30 border border-cyan-500/20 rounded-lg"
              >
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h4 className="text-white font-semibold">{benefit}</h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-cyan-400 font-medium mb-2">Canadian Security Team + Vetted Tech Stack</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12 border border-gray-600">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Secure Your Organization. Book Your Cyber Readiness Assessment.
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with a comprehensive assessment of your current security posture. 
              Our experts will provide actionable recommendations tailored to your business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Assessment Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;