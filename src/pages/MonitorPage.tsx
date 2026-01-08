import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Eye, 
  AlertTriangle, 
  Activity, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Bell,
  Database,
  Network,
  Server,
  BarChart3
} from 'lucide-react';

const MonitorPage: React.FC = () => {
  const monitoringServices = [
    {
      icon: Network,
      title: 'Network Monitoring',
      description: 'Continuous surveillance of network traffic, performance, and security events to detect anomalies and threats.',
      features: ['Traffic Analysis', 'Bandwidth Monitoring', 'Intrusion Detection', 'Performance Metrics']
    },
    {
      icon: Server,
      title: 'System Monitoring',
      description: 'Real-time monitoring of servers, applications, and infrastructure components for optimal performance.',
      features: ['System Performance', 'Resource Utilization', 'Application Health', 'Hardware Status']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security event monitoring and threat detection across your entire digital infrastructure.',
      features: ['SIEM Integration', 'Threat Detection', 'Behavioral Analysis', 'Incident Alerting']
    },
    {
      icon: Database,
      title: 'Data Monitoring',
      description: 'Monitor data access patterns, integrity, and compliance to ensure data security and regulatory adherence.',
      features: ['Access Monitoring', 'Data Integrity', 'Compliance Tracking', 'Audit Trails']
    }
  ];

  const monitoringProcess = [
    {
      step: 1,
      title: 'Baseline Establishment',
      description: 'Establish normal operating parameters and performance baselines across all monitored systems.',
      icon: Target,
      details: [
        'Performance benchmarking',
        'Normal behavior mapping',
        'Threshold definition',
        'Alert rule configuration'
      ]
    },
    {
      step: 2,
      title: 'Real-Time Collection',
      description: 'Continuously collect and analyze data from all monitored systems and security tools.',
      icon: Activity,
      details: [
        'Data aggregation',
        'Event correlation',
        'Real-time processing',
        'Multi-source integration'
      ]
    },
    {
      step: 3,
      title: 'Threat Detection',
      description: 'Apply advanced analytics and machine learning to identify potential security threats and anomalies.',
      icon: Eye,
      details: [
        'Anomaly detection',
        'Pattern recognition',
        'Behavioral analysis',
        'Threat intelligence'
      ]
    },
    {
      step: 4,
      title: 'Alert & Response',
      description: 'Generate intelligent alerts and initiate appropriate response procedures for detected incidents.',
      icon: Bell,
      details: [
        'Intelligent alerting',
        'Escalation procedures',
        'Response automation',
        'Notification systems'
      ]
    },
    {
      step: 5,
      title: 'Analysis & Reporting',
      description: 'Provide comprehensive analysis and reporting for continuous improvement and compliance.',
      icon: BarChart3,
      details: [
        'Trend analysis',
        'Performance reporting',
        'Compliance dashboards',
        'Executive summaries'
      ]
    }
  ];

  const capabilities = [
    '24/7 continuous monitoring coverage',
    'Real-time threat detection and alerting',
    'Comprehensive compliance reporting',
    'Advanced behavioral analytics',
    'Automated incident response',
    'Multi-layer security visibility',
    'Performance optimization insights',
    'Proactive threat hunting'
  ];

  const stats = [
    { value: '24/7', label: 'Continuous Monitoring' },
    { value: '<2min', label: 'Average Detection Time' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '500+', label: 'Monitored Assets' }
  ];

  const alertTypes = [
    {
      icon: AlertTriangle,
      title: 'Security Alerts',
      description: 'Immediate notification of security threats and suspicious activities.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Alerts',
      description: 'System performance degradation and resource utilization warnings.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Compliance Alerts',
      description: 'Policy violations and regulatory compliance deviations.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Critical System Alerts',
      description: 'System failures, outages, and critical infrastructure issues.',
      color: 'from-purple-500 to-purple-600'
    }
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
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-8">
              <Monitor className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              MONITOR Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600"> Environment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Gain complete visibility into your cybersecurity posture with 24/7 monitoring and threat detection. 
              Our advanced monitoring services provide real-time insights, automated alerting, and proactive 
              threat hunting to keep your organization secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Monitoring Setup
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-green-500 text-white hover:text-green-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Demo Dashboard
              </motion.button>
            </div>
          </motion.div>

          
        </div>
      </section>

      {/* Monitoring Services */}
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
              Comprehensive Monitoring Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor every aspect of your infrastructure with our advanced surveillance and detection capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-green-500/50 rounded-xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
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

      {/* Alert Types */}
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
              Intelligent Alert System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Receive timely, relevant alerts categorized by severity and impact to ensure rapid response to threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alertTypes.map((alert, index) => (
              <motion.div
                key={alert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-xl p-8 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${alert.color} mb-6`}>
                  <alert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{alert.title}</h3>
                <p className="text-gray-300">{alert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Process */}
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
              Our Monitoring Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive approach to continuous monitoring that ensures complete visibility and rapid threat detection.
            </p>
          </motion.div>

          <div className="space-y-8">
            {monitoringProcess.map((step, index) => (
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
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg">
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
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
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
                Why Choose Our Monitoring Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our advanced monitoring platform provides unparalleled visibility into your security posture, 
                enabling proactive threat detection and rapid incident response.
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
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
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
              className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-6">
                  <Eye className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Enhance Your Monitoring?
                </h3>
                <p className="text-gray-300 mb-6">
                  Start monitoring your environment with our advanced detection and alerting system.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                >
                  Start Monitoring Today
                </motion.button>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
                >
                  Contact Our Monitoring Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonitorPage;