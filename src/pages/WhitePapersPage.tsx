import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Download, 
  Eye, 
  Calendar, 
  Clock,
  ArrowRight,
  Shield,
  Users
} from 'lucide-react';

const WhitePapersPage: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const whitepapers = [
    {
      id: 1,
      title: 'The Complete Guide to Zero Trust Architecture',
      description: 'Learn how to implement Zero Trust security principles in your organization and reduce cyber risk by up to 90%.',
      category: 'Architecture',
      date: '2024-01-15',
      readTime: '25 min',
      downloads: '2.3k',
      featured: true,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['Zero Trust', 'Network Security', 'Architecture']
    },
    {
      id: 2,
      title: 'Ransomware Defense Strategies for 2024',
      description: 'Advanced tactics and technologies to protect your organization from the latest ransomware threats.',
      category: 'Threat Defense',
      date: '2023-12-20',
      readTime: '18 min',
      downloads: '1.8k',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tags: ['Ransomware', 'Incident Response', 'Backup']
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices',
      description: 'Essential security controls and configurations for AWS, Azure, and Google Cloud environments.',
      category: 'Cloud Security',
      date: '2023-11-30',
      readTime: '22 min',
      downloads: '1.5k',
      featured: false,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tags: ['Cloud', 'AWS', 'Azure', 'Compliance']
    },
    {
      id: 4,
      title: 'GDPR Compliance in Cybersecurity',
      description: 'Navigate GDPR requirements while maintaining robust cybersecurity posture.',
      category: 'Compliance',
      date: '2023-10-15',
      readTime: '20 min',
      downloads: '1.2k',
      featured: false,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      tags: ['GDPR', 'Privacy', 'Compliance']
    },
    {
      id: 5,
      title: 'AI-Powered Threat Detection',
      description: 'Leveraging artificial intelligence and machine learning for advanced threat detection.',
      category: 'Technology',
      date: '2023-09-28',
      readTime: '15 min',
      downloads: '980',
      featured: false,
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      tags: ['AI', 'Machine Learning', 'Detection']
    },
    {
      id: 6,
      title: 'Endpoint Security for Remote Work',
      description: 'Secure your distributed workforce with comprehensive endpoint protection strategies.',
      category: 'Endpoint Security',
      date: '2023-08-12',
      readTime: '16 min',
      downloads: '1.4k',
      featured: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      tags: ['Remote Work', 'Endpoints', 'MDM']
    }
  ];

  const categories = ['All', 'Architecture', 'Threat Defense', 'Cloud Security', 'Compliance', 'Technology', 'Endpoint Security'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPaper = whitepapers.find(paper => paper.featured);

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
              White Papers & 
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkTheme 
                  ? 'from-cyan-400 to-blue-600' 
                  : 'from-blue-600 to-cyan-600'
              }`}> Research</span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
            }`}>
              In-depth analysis and actionable insights on the latest cybersecurity trends, 
              technologies, and best practices from our team of experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download All Papers
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 ${
                  isDarkTheme
                    ? 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                <Eye className="mr-2 h-5 w-5" />
                Request Custom Research
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={`py-8 border-b ${
        isDarkTheme 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-cyan-500/20 ${
                  isDarkTheme
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                }`}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : isDarkTheme
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Paper */}
      {featuredPaper && (
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
              <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
                isDarkTheme ? 'text-white' : 'text-gray-900'
              }`}>
                Featured White Paper
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    isDarkTheme
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'bg-blue-100 text-blue-600 border border-blue-200'
                  }`}>
                    <Shield className="mr-2 h-4 w-4" />
                    {featuredPaper.category}
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    {featuredPaper.title}
                  </h3>
                  
                  <p className={`text-lg mb-6 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {featuredPaper.description}
                  </p>
                  
                  <div className={`flex flex-wrap items-center gap-4 mb-8 text-sm ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(featuredPaper.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {featuredPaper.readTime}
                    </div>
                    <div className="flex items-center">
                      <Download className="mr-1 h-4 w-4" />
                      {featuredPaper.downloads} downloads
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPaper.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs ${
                          isDarkTheme
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
                
                <div className="relative">
                  <img
                    src={featuredPaper.image}
                    alt={featuredPaper.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl`} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* White Papers Grid */}
      <section className={`py-16 ${
        isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitepapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
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
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 ${
                    isDarkTheme
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {paper.category}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    {paper.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {paper.description}
                  </p>
                  
                  <div className={`flex items-center gap-3 text-xs mb-4 ${
                    isDarkTheme ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(paper.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {paper.readTime}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${
                      isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {paper.downloads} downloads
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkTheme
                          ? 'text-cyan-400 hover:bg-cyan-400/10'
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <Download className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredWhitepapers.length === 0 && (
            <div className="text-center py-12">
              <p className={`text-lg ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}>
                No white papers found matching your criteria.
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
              Need Custom Research?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our experts can provide customized research and analysis tailored to your specific 
              cybersecurity challenges and industry requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Request Custom Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapersPage;