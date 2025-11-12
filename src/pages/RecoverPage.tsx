import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Server,
  Target,
  Clock,
  Zap,
  Award,
  HardDrive,
  Cloud,
  Network,
  Settings,
  TrendingUp,
  Lock,
  Eye
} from 'lucide-react';

const RecoverPage: React.FC = () => {
  const recoveryServices = [
    {
      icon: Database,
      title: 'Data Recovery',
      description: 'Complete restoration of critical business data from secure backups with integrity verification.',
      features: ['Backup Restoration', 'Data Integrity Verification', 'Priority Recovery', 'Point-in-Time Recovery']
    },
    {
      icon: Server,
      title: 'System Recovery',
      description: 'Full restoration of servers, applications, and infrastructure to operational status.',
      features: ['Server Restoration', 'Application Recovery', 'Configuration Rebuilding', 'Performance Optimization']
    },
    {
      icon: Network,
      title: 'Network Recovery',
      description: 'Complete restoration of network infrastructure, connectivity, and security configurations.',
      features: ['Network Rebuilding', 'Connectivity Restoration', 'Security Reconfiguration', 'Traffic Validation']
    },
    {
      icon: Cloud,
      title: 'Cloud Recovery',
      description: 'Specialized recovery services for cloud environments and hybrid infrastructure setups.',
      features: ['Cloud Restoration', 'Hybrid Recovery', 'Multi-Cloud Support', 'Container Recovery']
    }
  ];

  const recoveryProcess = [
    {
      step: 1,
      title: 'Damage Assessment',
      description: 'Comprehensive evaluation of impact scope, affected systems, and recovery requirements.',
      icon: Eye,
      timeframe: '1-2 hours',
      details: [
        'Impact analysis',
        'System inventory',
        'Priority assessment',
        'Recovery planning'
      ]
    },
    {
      step: 2,
      title: 'Recovery Strategy',
      description: 'Develop optimized recovery plan based on business priorities and technical constraints.',
      icon: Target,
      timeframe: '2-4 hours',
      details: [
        'Recovery prioritization',
        'Resource allocation',
        'Timeline development',
        'Risk mitigation'
      ]
    },
    {
      step: 3,
      title: 'Infrastructure Rebuild',
      description: 'Systematic restoration of core infrastructure components in priority order.',
      icon: Server,
      timeframe: '4-12 hours',
      details: [
        'Core system restoration',
        'Network rebuilding',
        'Security reimplementation',
        'Service validation'
      ]
    },
    {
      step: 4,
      title: 'Data Restoration',
      description: 'Secure recovery of business-critical data with integrity verification and validation.',
      icon: Database,
      timeframe: '6-24 hours',
      details: [
        'Backup validation',
        'Data restoration',
        'Integrity verification',
        'Access testing'
      ]
    },
    {
      step: 5,
      title: 'System Hardening',
      description: 'Enhanced security implementation to prevent recurrence of the security incident.',
      icon: Lock,
      timeframe: '8-16 hours',
      details: [
        'Security patches',
        'Configuration hardening',
        'Access controls',
        'Monitoring enhancement'
      ]
    },
    {
      step: 6,
      title: 'Validation & Testing',
      description: 'Comprehensive testing to ensure all systems are fully operational and secure.',
      icon: CheckCircle,
      timeframe: '4-8 hours',
      details: [
        'Functionality testing',
        'Security validation',
        'Performance verification',
        'User acceptance'
      ]
    }
  ];

  const recoveryTypes = [
    {
      icon: Zap,
      title: 'Emergency Recovery',
      description: 'Rapid restoration for critical systems requiring immediate operational capability.',
      color: 'from-red-500 to-red-600',
      rto: '< 4 hours',
      rpo: '< 1 hour'
    },
    {
      icon: TrendingUp,
      title: 'Standard Recovery',
      description: 'Comprehensive restoration following standard procedures and timelines.',
      color: 'from-blue-500 to-blue-600',
      rto: '< 24 hours',
      rpo: '< 4 hours'
    },
    {
      icon: Settings,
      title: 'Enhanced Recovery',
      description: 'Full recovery with security improvements and infrastructure upgrades.',
      color: 'from-green-500 to-green-600',
      rto: '< 72 hours',
      rpo: '< 24 hours'
    },
    {
      icon: Award,
      title: 'Complete Rebuild',
      description: 'Full infrastructure reconstruction with latest security standards.',
      color: 'from-purple-500 to-purple-600',
      rto: '< 1 week',
      rpo: '< 1 day'
    }
  ];

  const stats = [
    { value: '99.8%', label: 'Recovery Success Rate' },
    { value: '<4hrs', label: 'Average RTO' },
    { value: '<1hr', label: 'Average RPO' },
    { value: '24/7', label: 'Recovery Support' }
  ];

  const capabilities = [
    'Rapid disaster recovery operations',
    'Complete data restoration with integrity verification',
    'Infrastructure rebuilding and hardening',
    'Business continuity maintenance',
    'Regulatory compliance restoration',
    'Enhanced security implementation',
    'Performance optimization during recovery',
    'Comprehensive validation and testing'
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
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
              <RefreshCw className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              RECOVER Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Operations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              When disaster strikes, swift recovery is crucial. Our comprehensive recovery services restore 
              your systems, data, and operations quickly while implementing enhanced security measures to 
              prevent future incidents and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Recovery Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-blue-500 text-white hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Recovery Plans
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Types */}
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
              Recovery Service Levels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the recovery approach that best fits your business requirements and urgency levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-gray-600 rounded-xl p-8 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${type.color} mb-6`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">RTO:</span>
                    <span className="text-white font-medium">{type.rto}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">RPO:</span>
                    <span className="text-white font-medium">{type.rpo}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Services */}
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
              Comprehensive Recovery Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-spectrum recovery services covering all aspects of your IT infrastructure and business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recoveryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
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

      {/* Recovery Process */}
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
              Systematic Recovery Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven recovery methodology ensures comprehensive restoration with enhanced security measures.
            </p>
          </motion.div>

          <div className="space-y-8">
            {recoveryProcess.map((step, index) => (
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
                <div className="flex-1 bg-gray-900/50 border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 font-medium">{step.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Recovery Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our expert recovery team ensures rapid restoration of your operations while implementing 
                enhanced security measures to prevent future incidents and ensure long-term resilience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                  <HardDrive className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Recovery Services?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get your business back online quickly with our comprehensive recovery and restoration services.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                >
                  Start Recovery Process
                </motion.button>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Contact Recovery Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecoverPage;