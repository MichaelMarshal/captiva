import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Star,
  Target
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Financial Services: Zero Trust Implementation',
      client: 'Major Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy network infrastructure vulnerable to insider threats and lateral movement attacks',
      solution: 'Complete Zero Trust architecture implementation with microsegmentation',
      results: {
        threatReduction: '90%',
        complianceScore: '99.5%',
        incidentResponse: '75% faster',
        costSavings: '$2.3M annually'
      },
      timeline: '8 months',
      teamSize: '12 engineers',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Zero Trust', 'Financial Services', 'Compliance'],
      testimonial: {
        quote: "Captiva Cyber's Zero Trust implementation transformed our security posture. We've seen a 90% reduction in potential threat vectors.",
        author: "Chief Information Security Officer",
        company: "Fortune 500 Financial Institution"
      }
    },
    {
      id: 2,
      title: 'Healthcare Network: HIPAA Compliance & Ransomware Defense',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Multiple ransomware attempts, HIPAA compliance gaps, and legacy medical device security',
      solution: 'Comprehensive cybersecurity overhaul with medical device protection and compliance framework',
      results: {
        threatReduction: '95%',
        complianceScore: '100%',
        incidentResponse: '85% faster',
        costSavings: '$1.8M annually'
      },
      timeline: '6 months',
      teamSize: '8 engineers',
      featured: false,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Ransomware Defense'],
      testimonial: {
        quote: "Our patient data is now completely secure, and we've achieved 100% HIPAA compliance.",
        author: "Chief Technology Officer",
        company: "Regional Healthcare Network"
      }
    },
    {
      id: 3,
      title: 'Manufacturing Giant: Industrial IoT Security',
      client: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Unsecured IoT devices, operational technology vulnerabilities, and supply chain risks',
      solution: 'IoT security platform with OT/IT convergence and supply chain risk management',
      results: {
        threatReduction: '88%',
        complianceScore: '98%',
        incidentResponse: '70% faster',
        costSavings: '$3.1M annually'
      },
      timeline: '10 months',
      teamSize: '15 engineers',
      featured: false,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['IoT Security', 'Manufacturing', 'Supply Chain'],
      testimonial: {
        quote: "Production efficiency improved 25% after securing our IoT infrastructure with Captiva Cyber.",
        author: "VP of Operations",
        company: "Global Manufacturing Corporation"
      }
    },
    {
      id: 4,
      title: 'E-commerce Platform: Cloud Security Transformation',
      client: 'Leading E-commerce Company',
      industry: 'E-commerce',
      challenge: 'Multi-cloud complexity, PCI DSS compliance, and DDoS attack mitigation',
      solution: 'Cloud-native security architecture with automated compliance and threat protection',
      results: {
        threatReduction: '92%',
        complianceScore: '99%',
        incidentResponse: '80% faster',
        costSavings: '$1.5M annually'
      },
      timeline: '5 months',
      teamSize: '10 engineers',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['Cloud Security', 'E-commerce', 'PCI DSS'],
      testimonial: {
        quote: "Customer trust increased significantly after implementing Captiva's cloud security solution.",
        author: "Chief Security Officer",
        company: "Leading E-commerce Company"
      }
    },
    {
      id: 5,
      title: 'Government Agency: Critical Infrastructure Protection',
      client: 'Federal Government Agency',
      industry: 'Government',
      challenge: 'Critical infrastructure vulnerabilities, insider threat detection, and compliance requirements',
      solution: 'Government-grade security framework with advanced threat detection and insider threat protection',
      results: {
        threatReduction: '96%',
        complianceScore: '100%',
        incidentResponse: '90% faster',
        costSavings: '$2.7M annually'
      },
      timeline: '12 months',
      teamSize: '20 engineers',
      featured: false,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tags: ['Government', 'Critical Infrastructure', 'Compliance'],
      testimonial: {
        quote: "National security has been significantly enhanced through this comprehensive security implementation.",
        author: "Director of Information Security",
        company: "Federal Government Agency"
      }
    },
    {
      id: 6,
      title: 'Startup Unicorn: Rapid Scaling Security',
      client: 'Tech Startup Unicorn',
      industry: 'Technology',
      challenge: 'Rapid growth outpacing security measures, DevSecOps integration, and investor compliance',
      solution: 'Scalable security architecture with DevSecOps automation and compliance framework',
      results: {
        threatReduction: '87%',
        complianceScore: '97%',
        incidentResponse: '65% faster',
        costSavings: '$900K annually'
      },
      timeline: '4 months',
      teamSize: '6 engineers',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      tags: ['Startup', 'DevSecOps', 'Scaling'],
      testimonial: {
        quote: "Captiva enabled us to scale securely without compromising our development velocity.",
        author: "Co-founder & CTO",
        company: "Tech Startup Unicorn"
      }
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'Manufacturing', 'E-commerce', 'Government', 'Technology'];
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'All' || study.industry === selectedIndustry
  );

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <div className={`min-h-screen ${
      isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Hero Section */}
      <section className={`py-20 ${
        isDarkTheme 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>
              Success Stories &
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkTheme 
                  ? 'from-cyan-400 to-blue-600' 
                  : 'from-blue-600 to-cyan-600'
              }`}> Case Studies</span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Discover how we help organizations strengthen their cybersecurity posture 
              through innovative solutions and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className={`py-8 border-b ${
        isDarkTheme 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : isDarkTheme
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className={`py-16 ${
          isDarkTheme ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  Featured Case Study
                </h2>
                <p className={`text-lg ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Our most impactful cybersecurity transformation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    isDarkTheme
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'bg-blue-100 text-blue-600 border border-blue-200'
                  }`}>
                    <Building2 className="mr-2 h-4 w-4" />
                    {featuredCaseStudy.industry}
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    {featuredCaseStudy.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                      }`}>Challenge</h4>
                      <p className={`${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {featuredCaseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                      }`}>Solution</h4>
                      <p className={`${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {featuredCaseStudy.solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className={`p-4 rounded-lg ${
                      isDarkTheme ? 'bg-gray-700/50' : 'bg-gray-50'
                    }`}>
                      <div className={`text-sm ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                      }`}>Timeline</div>
                      <div className={`text-lg font-bold ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>
                        {featuredCaseStudy.timeline}
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${
                      isDarkTheme ? 'bg-gray-700/50' : 'bg-gray-50'
                    }`}>
                      <div className={`text-sm ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                      }`}>Team Size</div>
                      <div className={`text-lg font-bold ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>
                        {featuredCaseStudy.teamSize}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>

                <div>
                  <img
                    src={featuredCaseStudy.image}
                    alt={featuredCaseStudy.title}
                    className="w-full h-80 object-cover rounded-xl mb-6"
                  />

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(featuredCaseStudy.results).map(([key, value]) => (
                      <div
                        key={key}
                        className={`p-4 text-center rounded-lg ${
                          isDarkTheme ? 'bg-gray-700/30' : 'bg-blue-50'
                        }`}
                      >
                        <div className={`text-2xl font-bold mb-1 ${
                          isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-xs ${
                          isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className={`p-6 rounded-lg ${
                    isDarkTheme ? 'bg-gray-700/30 border border-gray-600' : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${
                        isDarkTheme ? 'bg-cyan-500/10' : 'bg-blue-100'
                      }`}>
                        <Star className={`h-4 w-4 ${
                          isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className={`text-sm italic mb-3 ${
                          isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          "{featuredCaseStudy.testimonial.quote}"
                        </p>
                        <div className={`text-xs ${
                          isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <div className="font-medium">{featuredCaseStudy.testimonial.author}</div>
                          <div>{featuredCaseStudy.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className={`py-16 ${
        isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isDarkTheme
                    ? 'bg-gray-800 border border-gray-700 hover:border-cyan-500/50'
                    : 'bg-white border border-gray-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl'
                }`}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 ${
                    isDarkTheme
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {study.industry}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    {study.title}
                  </h3>

                  <p className={`text-sm mb-4 line-clamp-2 ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {study.challenge}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div
                        key={key}
                        className={`p-2 text-center rounded ${
                          isDarkTheme ? 'bg-gray-700/30' : 'bg-gray-50'
                        }`}
                      >
                        <div className={`text-sm font-bold ${
                          isDarkTheme ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {value}
                        </div>
                        <div className={`text-xs ${
                          isDarkTheme ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          {key === 'threatReduction' ? 'Threat Reduction' : 
                           key === 'complianceScore' ? 'Compliance' :
                           key === 'incidentResponse' ? 'Faster Response' :
                           key === 'costSavings' ? 'Cost Savings' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className={`text-xs ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {study.timeline}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkTheme
                          ? 'text-cyan-400 hover:bg-cyan-400/10'
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className={`text-lg ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}>
                No case studies found for the selected industry.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isDarkTheme 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-blue-600 to-cyan-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let us help you transform your cybersecurity posture with Captiva Cyber. 
              Let's discuss how we can help you achieve your security objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Request Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;