import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Target,
  Headphones,
  FileText,
  Search,
  Lock,
  RefreshCw,
  MessageSquare,
  Eye
} from 'lucide-react';

const RespondPage: React.FC = () => {
  const responseServices = [
    {
      icon: Phone,
      title: 'Emergency Response',
      description: '24/7 emergency incident response with immediate containment and mitigation strategies.',
      features: ['24/7 Hotline', 'Rapid Containment', 'Emergency Coordination', 'Crisis Management']
    },
    {
      icon: Search,
      title: 'Incident Investigation',
      description: 'Comprehensive forensic investigation to understand attack vectors and impact assessment.',
      features: ['Digital Forensics', 'Root Cause Analysis', 'Attack Vector Mapping', 'Evidence Collection']
    },
    {
      icon: Lock,
      title: 'Containment & Eradication',
      description: 'Swift isolation of threats and complete eradication of malicious presence from your systems.',
      features: ['Threat Isolation', 'System Quarantine', 'Malware Removal', 'Access Revocation']
    },
    {
      icon: RefreshCw,
      title: 'Recovery & Restoration',
      description: 'Systematic recovery process to restore normal operations while maintaining security integrity.',
      features: ['System Recovery', 'Data Restoration', 'Service Resumption', 'Security Validation']
    }
  ];

  const responseProcess = [
    {
      step: 1,
      title: 'Immediate Detection',
      description: 'Rapid identification and classification of security incidents through automated monitoring and alert systems.',
      icon: Eye,
      timeframe: '< 2 minutes',
      details: [
        'Automated threat detection',
        'Alert prioritization',
        'Initial classification',
        'Stakeholder notification'
      ]
    },
    {
      step: 2,
      title: 'Rapid Assessment',
      description: 'Quick evaluation of incident scope, impact, and required response measures to guide containment strategy.',
      icon: Target,
      timeframe: '< 15 minutes',
      details: [
        'Impact assessment',
        'Scope determination',
        'Risk evaluation',
        'Response planning'
      ]
    },
    {
      step: 3,
      title: 'Immediate Containment',
      description: 'Swift action to contain the threat and prevent further damage or lateral movement within systems.',
      icon: Shield,
      timeframe: '< 30 minutes',
      details: [
        'Threat isolation',
        'Network segmentation',
        'Access control updates',
        'System quarantine'
      ]
    },
    {
      step: 4,
      title: 'Thorough Investigation',
      description: 'Comprehensive forensic analysis to understand attack methods, determine root causes, and collect evidence.',
      icon: Search,
      timeframe: '1-4 hours',
      details: [
        'Digital forensics',
        'Log analysis',
        'Attack reconstruction',
        'Evidence preservation'
      ]
    },
    {
      step: 5,
      title: 'Complete Eradication',
      description: 'Systematic removal of all malicious presence and closure of vulnerabilities that enabled the attack.',
      icon: Zap,
      timeframe: '2-8 hours',
      details: [
        'Malware removal',
        'Vulnerability patching',
        'Configuration hardening',
        'Security updates'
      ]
    },
    {
      step: 6,
      title: 'Secure Recovery',
      description: 'Careful restoration of systems and services with enhanced security measures and continuous monitoring.',
      icon: RefreshCw,
      timeframe: '4-24 hours',
      details: [
        'System restoration',
        'Service validation',
        'Security verification',
        'Monitoring enhancement'
      ]
    }
  ];

  const responseTeam = [
    {
      role: 'Incident Commander',
      description: 'Coordinates overall response effort and stakeholder communication',
      icon: Users,
      color: 'from-red-500 to-red-600'
    },
    {
      role: 'Security Analyst',
      description: 'Conducts technical analysis and threat investigation',
      icon: Search,
      color: 'from-blue-500 to-blue-600'
    },
    {
      role: 'Forensics Expert',
      description: 'Performs digital forensics and evidence collection',
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    },
    {
      role: 'Communications Lead',
      description: 'Manages internal and external communications',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600'
    }
  ];

  const stats = [
    { value: '<2min', label: 'Response Time' },
    { value: '24/7', label: 'Availability' },
    { value: '98%', label: 'Containment Success' },
    { value: '<4hrs', label: 'Average Resolution' }
  ];

  const capabilities = [
    'Rapid threat containment and isolation',
    '24/7 emergency response availability',
    'Comprehensive forensic investigation',
    'Evidence collection and preservation',
    'Regulatory compliance support',
    'Coordinated recovery operations',
    'Stakeholder communication management',
    'Post-incident security improvements'
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
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mb-8">
              <Zap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              RESPOND to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600"> Incidents</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              When security incidents occur, every second counts. Our expert incident response team provides 
              immediate containment, thorough investigation, and complete recovery services to minimize impact 
              and restore normal operations quickly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+16478123668"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: 647-812-3668
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-red-500 text-white hover:text-red-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Response Playbook
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Response Services */}
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
              Comprehensive Incident Response
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert response team delivers immediate action and comprehensive recovery services during security incidents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responseServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-red-500/50 rounded-xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 group-hover:from-red-400 group-hover:to-orange-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
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

      {/* Response Team */}
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
              Expert Response Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized incident response team combines technical expertise with proven crisis management experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responseTeam.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-xl p-8 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${member.color} mb-6`}>
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{member.role}</h3>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Process */}
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
              Rapid Response Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven incident response methodology ensures rapid containment and complete recovery from security incidents.
            </p>
          </motion.div>

          <div className="space-y-8">
            {responseProcess.map((step, index) => (
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
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-red-400" />
                        <span className="text-red-400 font-medium">{step.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-full bg-gradient-to-r from-red-500 to-orange-600">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Emergency Contact */}
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
                Why Choose Our Response Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our experienced incident response team provides rapid, professional response to minimize impact 
                and ensure complete recovery from security incidents.
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
                    <CheckCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
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
              className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-600 mb-6">
                  <Headphones className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Security Emergency?
                </h3>
                <p className="text-gray-300 mb-6">
                  Don't wait. Contact our emergency response team immediately for rapid incident containment and recovery.
                </p>
                <motion.a
                  href="tel:+16478123668"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4 inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 647-812-3668
                </motion.a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
                >
                  Alternative Contact Methods <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RespondPage;