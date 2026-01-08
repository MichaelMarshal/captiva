import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  BarChart3,
  Target,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AssessPage: React.FC = () => {
  const assessmentTypes = [
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive scanning and analysis of your infrastructure to identify security weaknesses.',
      features: ['Network vulnerability scanning', 'Web application testing', 'Database security review', 'Wireless network assessment']
    },
    {
      icon: FileText,
      title: 'Risk Assessment',
      description: 'Evaluate and quantify cybersecurity risks to your business operations and data.',
      features: ['Business impact analysis', 'Threat modeling', 'Risk prioritization', 'Compliance gap analysis']
    },
    {
      icon: BarChart3,
      title: 'Security Posture Review',
      description: 'Holistic evaluation of your current security controls and their effectiveness.',
      features: ['Policy and procedure review', 'Security architecture analysis', 'Incident response readiness', 'Staff security awareness']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive discussion to understand your business, current security measures, and specific concerns.',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Scope Definition',
      description: 'Together, we define the assessment scope, including systems, networks, and applications to be evaluated.',
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Technical Assessment',
      description: 'Our experts conduct thorough testing using industry-standard tools and methodologies.',
      duration: '5-10 days'
    },
    {
      step: '04',
      title: 'Analysis & Documentation',
      description: 'We analyze findings, prioritize risks, and prepare comprehensive documentation.',
      duration: '3-5 days'
    },
    {
      step: '05',
      title: 'Results Presentation',
      description: 'Detailed presentation of findings with executive summary and technical recommendations.',
      duration: '1 day'
    }
  ];

  const benefits = [
    'Identify vulnerabilities before attackers do',
    'Understand your risk exposure',
    'Prioritize security investments',
    'Meet compliance requirements',
    'Establish security baseline',
    'Improve overall security posture'
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
            className="text-center"
          >
            <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-6">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              ASSESS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Your Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive evaluation of your current security posture and vulnerabilities. 
              Know where you stand before threats find you first.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Assessment Types */}
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
              Types of Security Assessments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive assessment approach covers all critical aspects of your cybersecurity posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={assessment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-6">
                  <assessment.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{assessment.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{assessment.description}</p>
                <ul className="space-y-2">
                  {assessment.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures comprehensive coverage and actionable results.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-blue-400 mr-4">{step.step}</span>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Why Choose Our Assessment Services?
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-semibold">Did You Know?</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Organizations that conduct regular security assessments reduce their risk of 
                  successful cyber attacks by up to 70% compared to those that don't.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Assess Your Security?</h3>
              <p className="text-gray-300 mb-8">
                Start with our comprehensive Cyber Readiness Assessment to understand your 
                current security posture and identify areas for improvement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Expert security professionals</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Target className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Tailored to your business</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FileText className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Detailed actionable reports</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              >
                Book Your Assessment Now
              </motion.button>

              <Link 
                to="/contact" 
                className="block text-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Or contact us for a custom quote →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessPage;