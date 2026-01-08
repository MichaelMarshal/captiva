import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Shield, 
  Zap, 
  Search, 
  Lock,
  Eye,
  Download,
  ExternalLink,
  Play,
  CheckCircle,
  ArrowRight,
  Globe,
  Settings,
  AlertTriangle,
  Database,
  Terminal
} from 'lucide-react';

const SecurityToolsPage: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const toolCategories = [
    {
      id: 'vulnerability',
      name: 'Vulnerability Assessment',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      tools: [
        {
          name: 'Network Vulnerability Scanner',
          description: 'Comprehensive network security assessment tool with automated vulnerability detection',
          type: 'Web Tool',
          difficulty: 'Intermediate',
          features: ['Port Scanning', 'Service Detection', 'Vulnerability Database', 'Report Generation'],
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
          badge: 'Popular'
        },
        {
          name: 'Web Application Security Tester',
          description: 'Automated web application security testing with OWASP compliance',
          type: 'Online Tool',
          difficulty: 'Beginner',
          features: ['SQL Injection Detection', 'XSS Testing', 'CSRF Protection', 'Security Headers'],
          image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop',
          badge: 'New'
        }
      ]
    },
    {
      id: 'monitoring',
      name: 'Security Monitoring',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      tools: [
        {
          name: 'Real-time Threat Monitor',
          description: 'Live monitoring dashboard for network threats and anomaly detection',
          type: 'Dashboard',
          difficulty: 'Advanced',
          features: ['Real-time Alerts', 'Threat Intelligence', 'Behavioral Analysis', 'Custom Rules'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
          badge: 'Pro'
        },
        {
          name: 'Log Analysis Platform',
          description: 'Centralized log collection and analysis with ML-powered insights',
          type: 'Platform',
          difficulty: 'Intermediate',
          features: ['Log Aggregation', 'Pattern Recognition', 'Alerting', 'Compliance Reporting'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
          badge: 'Featured'
        }
      ]
    },
    {
      id: 'encryption',
      name: 'Encryption & Privacy',
      icon: Lock,
      color: 'from-purple-500 to-indigo-600',
      tools: [
        {
          name: 'File Encryption Utility',
          description: 'Military-grade file encryption with multiple algorithm support',
          type: 'Utility',
          difficulty: 'Beginner',
          features: ['AES-256 Encryption', 'Secure Key Generation', 'Batch Processing', 'Password Protection'],
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
          badge: 'Essential'
        },
        {
          name: 'Secure Communication Suite',
          description: 'End-to-end encrypted messaging and file sharing platform',
          type: 'Platform',
          difficulty: 'Intermediate',
          features: ['E2E Encryption', 'Secure File Transfer', 'Group Chat', 'Message Expiry'],
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
          badge: 'Trusted'
        }
      ]
    },
    {
      id: 'network',
      name: 'Network Security',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      tools: [
        {
          name: 'Firewall Configuration Checker',
          description: 'Automated firewall rule analysis and security recommendation engine',
          type: 'Analyzer',
          difficulty: 'Advanced',
          features: ['Rule Analysis', 'Policy Recommendations', 'Compliance Check', 'Risk Assessment'],
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
          badge: 'Professional'
        },
        {
          name: 'WiFi Security Auditor',
          description: 'Comprehensive wireless network security assessment tool',
          type: 'Auditor',
          difficulty: 'Intermediate',
          features: ['WPA/WPA2 Testing', 'Rogue AP Detection', 'Signal Analysis', 'Security Reports'],
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          badge: 'Updated'
        }
      ]
    },
    {
      id: 'incident',
      name: 'Incident Response',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-red-600',
      tools: [
        {
          name: 'Digital Forensics Kit',
          description: 'Comprehensive digital forensics and incident response toolkit',
          type: 'Toolkit',
          difficulty: 'Expert',
          features: ['Memory Analysis', 'Disk Imaging', 'Network Forensics', 'Timeline Analysis'],
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
          badge: 'Advanced'
        },
        {
          name: 'Incident Response Playbook',
          description: 'Interactive incident response guide with automated workflows',
          type: 'Guide',
          difficulty: 'Beginner',
          features: ['Step-by-step Guides', 'Automated Tasks', 'Documentation', 'Team Coordination'],
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
          badge: 'Community'
        }
      ]
    },
    {
      id: 'assessment',
      name: 'Security Assessment',
      icon: Search,
      color: 'from-indigo-500 to-purple-600',
      tools: [
        {
          name: 'Security Posture Analyzer',
          description: 'Comprehensive organizational security assessment and scoring platform',
          type: 'Platform',
          difficulty: 'Intermediate',
          features: ['Risk Scoring', 'Compliance Mapping', 'Gap Analysis', 'Improvement Plans'],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
          badge: 'Recommended'
        },
        {
          name: 'Penetration Testing Suite',
          description: 'Automated penetration testing tools for comprehensive security evaluation',
          type: 'Suite',
          difficulty: 'Expert',
          features: ['Automated Exploitation', 'Custom Payloads', 'Report Generation', 'Remediation Guidance'],
          image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
          badge: 'Expert'
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('vulnerability');
  const [searchTerm, setSearchTerm] = React.useState('');

  const selectedCategoryData = toolCategories.find(cat => cat.id === selectedCategory);

  const filteredTools = selectedCategoryData?.tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];  const getBadgeColor = (badge: string) => {   const colors = {     'Popular': 'from-orange-500 to-red-500',     'New': 'from-green-500 to-emerald-500',      'Pro': 'from-purple-500 to-indigo-500',      'Featured': 'from-blue-500 to-cyan-500',      'Essential': 'from-gray-600 to-gray-800',      'Trusted': 'from-teal-500 to-green-500',     'Professional': 'from-indigo-600 to-purple-600',      'Updated': 'from-cyan-500 to-blue-500',      'Advanced': 'from-red-600 to-pink-600',     'Community': 'from-yellow-500 to-orange-500',      'Recommended': 'from-emerald-500 to-teal-500',      'Expert': 'from-purple-600 to-pink-600'    };    return colors[badge as keyof typeof colors] || 'from-gray-500 to-gray-700';   };    const getDifficultyColor = (difficulty: string) => {     const colors = {       'Beginner': isDarkTheme ? 'text-green-400' : 'text-green-600',       'Intermediate': isDarkTheme ? 'text-yellow-400' : 'text-yellow-600',       'Advanced': isDarkTheme ? 'text-orange-400' : 'text-orange-600',       'Expert': isDarkTheme ? 'text-red-400' : 'text-red-600'     };     return colors[difficulty as keyof typeof colors] || 'text-gray-500';   };    return (     <div className={`min-h-screen ${       isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'     }`}>       {/* Hero Section */}       <section className={`py-20 ${         isDarkTheme            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'            : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'       }`}>         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">           <motion.div             initial={{ opacity: 0, y: 30 }}             animate={{ opacity: 1, y: 0 }}             transition={{ duration: 0.8 }}             className="text-center mb-16\"           >             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${               isDarkTheme ? 'text-white' : 'text-gray-900'             }`}>               Security Tools &               <span className={`text-transparent bg-clip-text bg-gradient-to-r ${                 isDarkTheme                    ? 'from-cyan-400 to-blue-600'                    : 'from-blue-600 to-cyan-600'               }`}> Resources</span>             </h1>             <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${               isDarkTheme ? 'text-gray-300' : 'text-gray-700'             }`}>               Comprehensive collection of cybersecurity tools, utilities, and resources to strengthen                your security posture. From vulnerability assessment to incident response.             </p>             <div className="flex flex-col sm:flex-row gap-4 justify-center\">               <motion.div                 whileHover={{ scale: 1.05 }}                 whileTap={{ scale: 0.95 }}                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300\"               >                 <Download className="mr-2 h-5 w-5\" />                 Download Tool Suite               </motion.div>               <motion.div                 whileHover={{ scale: 1.05 }}                 whileTap={{ scale: 0.95 }}                 className={`inline-flex items-center px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 ${                   isDarkTheme                     ? 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'                     : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'                 }`}               >                 <Play className="mr-2 h-5 w-5\" />                 Watch Demo               </motion.div>             </div>           </motion.div>            {/* Tool Categories Navigation */}           <motion.div             initial={{ opacity: 0, y: 20 }}             animate={{ opacity: 1, y: 0 }}             transition={{ delay: 0.2, duration: 0.8 }}             className={`rounded-2xl p-8 ${               isDarkTheme                  ? 'bg-gray-800/50 border border-gray-700'                  : 'bg-white/80 border border-gray-200 shadow-lg'             }`}           >             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4\">               {toolCategories.map((category) => (                 <motion.button                   key={category.id}                   onClick={() => setSelectedCategory(category.id)}                   whileHover={{ scale: 1.05 }}                   whileTap={{ scale: 0.95 }}                   className={`p-4 rounded-xl text-center transition-all duration-300 ${                     selectedCategory === category.id                       ? `bg-gradient-to-r ${category.color} text-white shadow-lg`                       : isDarkTheme                         ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'                   }`}                 >                   <category.icon className={`h-8 w-8 mx-auto mb-2 ${                     selectedCategory === category.id ? 'text-white' : 'text-current'                   }`} />                   <div className="text-sm font-medium\">{category.name}</div>                 </motion.button>               ))}             </div>           </motion.div>         </div>       </section>        {/* Search Section */}       <section className={`py-8 border-b ${         isDarkTheme            ? 'bg-gray-800 border-gray-700'            : 'bg-white border-gray-200'       }`}>         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">           <div className="max-w-md mx-auto\">             <div className="relative\">               <Search className={`absolute left-3 top-3 h-5 w-5 ${                 isDarkTheme ? 'text-gray-400' : 'text-gray-500'               }`} />               <input                 type="text\"                 placeholder="Search tools...\"                 value={searchTerm}                 onChange={(e) => setSearchTerm(e.target.value)}                 className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-500/20 ${                   isDarkTheme                     ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'                     : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'                 }`}               />             </div>           </div>         </div>       </section>        {/* Tools Grid */}       <section className={`py-16 ${         isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'       }`}>         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">           {selectedCategoryData && (             <div className="mb-12\">               <div className="flex items-center mb-8\">                 <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedCategoryData.color} mr-4`}>                   <selectedCategoryData.icon className="h-8 w-8 text-white\" />                 </div>                 <div>                   <h2 className={`text-3xl md:text-4xl font-bold ${                     isDarkTheme ? 'text-white' : 'text-gray-900'                   }`}>                     {selectedCategoryData.name}                   </h2>                   <p className={`text-lg ${                     isDarkTheme ? 'text-gray-300' : 'text-gray-700'                   }`}>                     Professional-grade tools for {selectedCategoryData.name.toLowerCase()}                   </p>                 </div>               </div>                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8\">                 {filteredTools.map((tool, index) => (                   <motion.div                     key={tool.name}                     initial={{ opacity: 0, y: 30 }}                     whileInView={{ opacity: 1, y: 0 }}                     transition={{ delay: index * 0.1, duration: 0.6 }}                     viewport={{ once: true }}                     whileHover={{ y: -5 }}                     className={`rounded-xl overflow-hidden transition-all duration-300 ${                       isDarkTheme                         ? 'bg-gray-800 border border-gray-700 hover:border-cyan-500/50'                         : 'bg-white border border-gray-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl'                     }`}                   >                     <div className="flex\">                       <img                         src={tool.image}                         alt={tool.name}                         className="w-32 h-32 object-cover\"                       />                       <div className="flex-1 p-6\">                         <div className="flex items-start justify-between mb-3\">                           <div>                             <h3 className={`text-xl font-bold mb-1 ${                               isDarkTheme ? 'text-white' : 'text-gray-900'                             }`}>                               {tool.name}                             </h3>                             <div className="flex items-center gap-2\">                               <span className={`text-xs px-2 py-1 rounded ${                                 isDarkTheme ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'                               }`}>                                 {tool.type}                               </span>                               <span className={`text-xs font-medium ${                                 getDifficultyColor(tool.difficulty)                               }`}>                                 {tool.difficulty}                               </span>                             </div>                           </div>                           <span className={`inline-block px-2 py-1 text-xs font-bold text-white rounded bg-gradient-to-r ${                             getBadgeColor(tool.badge)                           }`}>                             {tool.badge}                           </span>                         </div>                          <p className={`text-sm mb-4 ${                           isDarkTheme ? 'text-gray-400' : 'text-gray-600'                         }`}>                           {tool.description}                         </p>                          <div className="grid grid-cols-2 gap-2 mb-4\">                           {tool.features.slice(0, 4).map((feature) => (                             <div                               key={feature}                               className={`flex items-center text-xs ${                                 isDarkTheme ? 'text-gray-300' : 'text-gray-600'                               }`}                             >                               <CheckCircle className={`h-3 w-3 mr-1 ${                                 isDarkTheme ? 'text-cyan-400' : 'text-blue-600'                               }`} />                               {feature}                             </div>                           ))}                         </div>                          <div className="flex gap-2\">                           <motion.button                             whileHover={{ scale: 1.05 }}                             whileTap={{ scale: 0.95 }}                             className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300\"                           >                             <Play className="mr-1 h-4 w-4\" />                             Launch Tool                           </motion.button>                           <motion.button                             whileHover={{ scale: 1.1 }}                             whileTap={{ scale: 0.9 }}                             className={`p-2 rounded-lg transition-colors ${                               isDarkTheme                                 ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-700'                                 : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'                             }`}                           >                             <ExternalLink className="h-4 w-4\" />                           </motion.button>                         </div>                       </div>                     </div>                   </motion.div>                 ))}               </div>                {filteredTools.length === 0 && (                 <div className="text-center py-12\">                   <p className={`text-lg ${                     isDarkTheme ? 'text-gray-400' : 'text-gray-600'                   }`}>                     No tools found matching your search criteria.                   </p>                 </div>               )}             </div>           )}         </div>       </section>        {/* Additional Resources Section */}       <section className={`py-16 ${         isDarkTheme ? 'bg-gray-800' : 'bg-white'       }`}>         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">           <motion.div             initial={{ opacity: 0, y: 30 }}             whileInView={{ opacity: 1, y: 0 }}             transition={{ duration: 0.8 }}             viewport={{ once: true }}             className="text-center mb-12\"           >             <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${               isDarkTheme ? 'text-white' : 'text-gray-900'             }`}>               Additional Resources             </h2>             <p className={`text-lg max-w-3xl mx-auto ${               isDarkTheme ? 'text-gray-300' : 'text-gray-700'             }`}>               Complementary resources to enhance your cybersecurity toolkit             </p>           </motion.div>            <div className="grid grid-cols-1 md:grid-cols-3 gap-8\">             {[               {                 icon: Terminal,                 title: 'Command Line Tools',                 description: 'Professional CLI utilities for security professionals',                 items: ['Nmap Scripts', 'Custom Payloads', 'Automation Scripts'],                 color: 'from-green-500 to-teal-600'               },               {                 icon: Database,                 title: 'Threat Intelligence',                 description: 'Real-time threat data and indicators of compromise',                 items: ['IOC Feeds', 'Malware Signatures', 'IP Reputation'],                 color: 'from-purple-500 to-indigo-600'               },               {                 icon: Settings,                 title: 'Configuration Templates',                 description: 'Security-hardened configuration templates',                 items: ['Firewall Rules', 'Server Configs', 'Policy Templates'],                 color: 'from-orange-500 to-red-600'               }             ].map((resource, index) => (               <motion.div                 key={resource.title}                 initial={{ opacity: 0, y: 30 }}                 whileInView={{ opacity: 1, y: 0 }}                 transition={{ delay: index * 0.1, duration: 0.6 }}                 viewport={{ once: true }}                 className={`p-6 rounded-xl border transition-all duration-300 ${                   isDarkTheme                     ? 'bg-gray-700/30 border-gray-600 hover:border-cyan-500/50'                     : 'bg-gray-50 border-gray-200 hover:border-blue-500/50'                 }`}               >                 <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${resource.color} mb-4`}>                   <resource.icon className="h-6 w-6 text-white\" />                 </div>                 <h3 className={`text-xl font-bold mb-3 ${                   isDarkTheme ? 'text-white' : 'text-gray-900'                 }`}>                   {resource.title}                 </h3>                 <p className={`text-sm mb-4 ${                   isDarkTheme ? 'text-gray-400' : 'text-gray-600'                 }`}>                   {resource.description}                 </p>                 <ul className="space-y-2 mb-6\">                   {resource.items.map((item) => (                     <li key={item} className={`flex items-center text-sm ${                       isDarkTheme ? 'text-gray-300' : 'text-gray-700'                     }`}>                       <CheckCircle className={`h-4 w-4 mr-2 ${                         isDarkTheme ? 'text-cyan-400' : 'text-blue-600'                       }`} />                       {item}                     </li>                   ))}                 </ul>                 <motion.button                   whileHover={{ scale: 1.05 }}                   whileTap={{ scale: 0.95 }}                   className={`w-full inline-flex items-center justify-center px-4 py-2 border-2 font-semibold rounded-lg transition-all duration-300 ${                     isDarkTheme                       ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'                       : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'                   }`}                 >                   Access Resources                   <ArrowRight className="ml-2 h-4 w-4\" />                 </motion.button>               </motion.div>             ))}           </div>         </div>       </section>        {/* CTA Section */}       <section className={`py-20 ${         isDarkTheme            ? 'bg-gradient-to-r from-gray-800 to-gray-900'            : 'bg-gradient-to-r from-blue-600 to-cyan-600'       }`}>         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">           <motion.div             initial={{ opacity: 0, y: 30 }}             whileInView={{ opacity: 1, y: 0 }}             transition={{ duration: 0.8 }}             viewport={{ once: true }}           >             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6\">               Need Custom Security Tools?             </h2>             <p className="text-lg text-white/90 mb-8\">               Our security experts can develop custom tools and solutions tailored to your                specific security requirements and infrastructure.             </p>             <motion.button               whileHover={{ scale: 1.05 }}               whileTap={{ scale: 0.95 }}               className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300\"             >               <Zap className="mr-2 h-5 w-5\" />               Request Custom Development               <ArrowRight className="ml-2 h-5 w-5\" />             </motion.button>           </motion.div>         </div>       </section>     </div>   ); };  export default SecurityToolsPage;