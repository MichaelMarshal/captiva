import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Shield,
  AlertTriangle,
  TrendingUp,
  Lock,
  Eye,
  Target
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The State of Cybersecurity in 2025: What Canadian Businesses Need to Know',
    excerpt: 'As cyber threats continue to evolve, Canadian businesses face new challenges in protecting their digital assets. This comprehensive guide covers the latest threat landscape and essential security measures.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    author: 'Sarah Chen',
    role: 'Chief Security Officer',
    date: '2025-11-10',
    readTime: '8 min read',
    category: 'Threat Intelligence',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Implementing Zero-Trust Architecture: A Step-by-Step Guide',
      excerpt: 'Learn how to transition your organization to a zero-trust security model with practical implementation strategies and best practices.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop',
      author: 'Marcus Rodriguez',
      role: 'Lead Penetration Tester',
      date: '2025-11-08',
      readTime: '6 min read',
      category: 'Security Architecture',
      icon: Shield
    },
    {
      id: 3,
      title: 'Incident Response Planning: Preparing for the Inevitable',
      excerpt: 'Every organization will face a security incident eventually. Here\'s how to prepare an effective incident response plan.',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=300&fit=crop',
      author: 'Dr. Emily Watson',
      role: 'Cybersecurity Researcher',
      date: '2025-11-05',
      readTime: '5 min read',
      category: 'Incident Response',
      icon: AlertTriangle
    },
    {
      id: 4,
      title: 'Cloud Security Best Practices for Small and Medium Businesses',
      excerpt: 'Moving to the cloud? Ensure your data stays secure with these essential cloud security practices tailored for SMBs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
      author: 'Sarah Chen',
      role: 'Chief Security Officer',
      date: '2025-11-03',
      readTime: '7 min read',
      category: 'Cloud Security',
      icon: TrendingUp
    },
    {
      id: 5,
      title: 'Phishing Attacks in 2025: New Tactics and Defense Strategies',
      excerpt: 'Phishing attacks are becoming more sophisticated. Learn about the latest tactics and how to protect your organization.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop',
      author: 'Marcus Rodriguez',
      role: 'Lead Penetration Tester',
      date: '2025-11-01',
      readTime: '4 min read',
      category: 'Threat Prevention',
      icon: Lock
    },
    {
      id: 6,
      title: 'Compliance Made Simple: GDPR, SOC 2, and ISO 27001 Essentials',
      excerpt: 'Navigate the complex world of cybersecurity compliance with this comprehensive guide to major frameworks.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop',
      author: 'Dr. Emily Watson',
      role: 'Cybersecurity Researcher',
      date: '2025-10-28',
      readTime: '9 min read',
      category: 'Compliance',
      icon: Eye
    },
    {
      id: 7,
      title: 'The ROI of Cybersecurity: Making the Business Case',
      excerpt: 'Learn how to calculate and present the return on investment for cybersecurity initiatives to stakeholders.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      author: 'Sarah Chen',
      role: 'Chief Security Officer',
      date: '2025-10-25',
      readTime: '6 min read',
      category: 'Business Strategy',
      icon: Target
    }
  ];

  const categories = [
    'All Posts',
    'Threat Intelligence',
    'Security Architecture',
    'Incident Response',
    'Cloud Security',
    'Compliance',
    'Business Strategy'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Cybersecurity 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest cybersecurity trends, best practices, and expert insights 
              from our team of security professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-white font-medium">{featuredPost.author}</p>
                        <p className="text-gray-400 text-sm">{featuredPost.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 rounded-xl overflow-hidden group transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                    {post.icon && (
                      <post.icon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full inline-flex items-center justify-center text-cyan-400 hover:text-cyan-300 font-medium py-2"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest cybersecurity insights, threat intelligence, and best practices 
              delivered directly to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time. Join 5,000+ security professionals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;