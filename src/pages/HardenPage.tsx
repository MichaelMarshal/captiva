import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Server, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Database,
  Network,
  Zap,
  Target,
  Award
} from 'lucide-react';

const HardenPage: React.FC = () => {
  const hardeningServices = [
    {
      icon: Network,
      title: 'Network Hardening',
      description: 'Secure your network infrastructure with advanced configurations, firewall optimization, and segmentation strategies.',
      features: ['Firewall Configuration', 'Network Segmentation', 'Access Control Lists', 'VPN Security']
    },
    {
      icon: Server,
      title: 'Server Hardening',
      description: 'Lock down your servers with security-focused configurations, patch management, and access controls.',
      features: ['OS Configuration', 'Patch Management', 'Service Hardening', 'User Access Control']
    },
    {
      icon: Database,
      title: 'Database Hardening',
      description: 'Protect your critical data with database-specific security measures and encryption protocols.',
      features: ['Database Encryption', 'Access Controls', 'Audit Logging', 'Backup Security']
    },
    {
      icon: Monitor,
      title: 'Endpoint Hardening',
      description: 'Secure all endpoints including workstations, mobile devices, and IoT systems across your organization.',
      features: ['Device Configuration', 'Application Control', 'USB Restrictions', 'Mobile Device Management']
    }
  ];

  const hardeningProcess = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Evaluate current security posture and develop comprehensive hardening strategy.',
      icon: Target,
      details: [
        'Current state analysis',
        'Risk identification',
        'Compliance requirements',
        'Hardening roadmap'
      ]
    },
    {
      step: 2,
      title: 'Configuration Standards',
      description: 'Develop and apply security-focused configuration standards across all systems.',
      icon: Settings,
      details: [
        'Security baselines',
        'Configuration templates',
        'Policy enforcement',
        'Standard operating procedures'
      ]
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy hardening measures systematically with minimal business disruption.',
      icon: Zap,
      details: [
        'Phased deployment',
        'Testing protocols',
        'Rollback procedures',
        'Change management'
      ]
    },
    {
      step: 4,
      title: 'Validation & Testing',
      description: 'Verify hardening effectiveness through comprehensive testing and validation.',
      icon: CheckCircle,
      details: [
        'Security testing',
        'Compliance validation',
        'Performance verification',
        'Documentation update'
      ]
    },
    {
      step: 5,
      title: 'Ongoing Maintenance',
      description: 'Maintain security posture through continuous monitoring and updates.',
      icon: Award,
      details: [
        'Regular reviews',
        'Update management',
        'Compliance monitoring',
        'Performance optimization'
      ]
    }
  ];

  const benefits = [
    'Reduced attack surface and vulnerability exposure',
    'Enhanced compliance with industry regulations',
    'Improved system performance and reliability',
    'Decreased incident response and recovery costs',
    'Strengthened defense against advanced threats',
    'Better visibility into security posture',
    'Automated security policy enforcement',
    'Reduced risk of data breaches and cyber attacks'
  ];

  const stats = [
    { value: '85%', label: 'Reduction in Security Incidents' },
    { value: '90%', label: 'Compliance Score Improvement' },
    { value: '70%', label: 'Faster Threat Detection' },
    { value: '95%', label: 'Client Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-8">
              <Lock className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              HARDEN Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"> Defenses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Strengthen your security posture with comprehensive system hardening. Our expert team implements 
              security-focused configurations across your entire infrastructure to minimize attack surfaces and 
              maximize protection against cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Hardening Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-orange-500 text-white hover:text-orange-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Hardening Guide
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center bg-gray-800/50 border border-gray-700 rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hardening Services */}
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
              Comprehensive Hardening Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure every layer of your infrastructure with our specialized hardening expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardeningServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-orange-500/50 rounded-xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardening Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Proven Hardening Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to strengthening your security posture across all systems and infrastructure.
            </p>
          </motion.div>

          <div className="space-y-8">
            {hardeningProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Hardening Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our systematic approach to system hardening delivers measurable security improvements 
                while maintaining operational efficiency and business continuity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-6">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Harden Your Security?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get started with a comprehensive hardening assessment and discover 
                  how we can strengthen your defenses.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                >
                  Schedule Hardening Consultation
                </motion.button>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
                >
                  Contact Our Security Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardenPage;