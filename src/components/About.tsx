import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  Star,
  Calendar
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Protected' },
    { icon: Shield, value: '99.9%', label: 'Threat Detection Rate' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Security Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      certifications: ['CISSP', 'CISM', 'CEH'],
      experience: '12 years'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Penetration Tester',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      certifications: ['OSCP', 'GPEN', 'GCIH'],
      experience: '10 years'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Researcher',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face',
      certifications: ['PhD Security', 'CISSP', 'SANS'],
      experience: '15 years'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize robust security measures in everything we do, ensuring your data and systems remain protected.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, understanding your unique challenges and business objectives.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We stay ahead of emerging threats by continuously updating our methods and technologies.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Our 24/7 monitoring and response team ensures immediate action when threats are detected.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Captiva Cyber</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Founded by cybersecurity veterans, we're dedicated to protecting businesses from 
            the evolving landscape of digital threats through innovative solutions and expert guidance.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pioneering Cybersecurity Excellence Since 2008
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Captiva Cyber was founded with a simple mission: to make advanced cybersecurity 
                accessible to businesses of all sizes. Our journey began when our founders, 
                seasoned security professionals, recognized the growing gap between evolving 
                cyber threats and traditional security approaches.
              </p>
              <p>
                Today, we're proud to be a trusted partner to over 500 organizations worldwide, 
                from innovative startups to Fortune 500 companies. Our team of certified experts 
                combines deep technical expertise with real-world experience to deliver solutions 
                that truly protect.
              </p>
              <p>
                We believe that effective cybersecurity isn't just about technology—it's about 
                understanding your business, your risks, and your goals. That's why we take a 
                holistic approach to security, ensuring that every solution we implement aligns 
                with your business objectives.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop"
                alt="Cybersecurity operations center"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <div>
                  <div className="text-white font-bold">15+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-white font-bold">4.9/5</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Security Platform */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Security Platform
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-700/30 border border-cyan-500/20 rounded-xl p-8">
              <h4 className="text-xl font-bold text-cyan-400 mb-6">Platform Features</h4>
              <ul className="space-y-3">
                {[
                  '24/7 SOC monitoring',
                  'Endpoint & network defense',
                  'Vulnerability & patch management',
                  'Identity security & access control',
                  'Incident response & guided recovery',
                  'Backup & continuity integrity',
                  'Compliance reporting & audits'
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-700/30 border border-green-500/20 rounded-xl p-8">
              <h4 className="text-xl font-bold text-green-400 mb-6">Business Outcomes</h4>
              <ul className="space-y-3">
                {[
                  'Reduce risk exposure',
                  'Maintain operations',
                  'Executive-level reporting',
                  'Predictable monthly investment',
                  'Canadian security team + vetted tech stack'
                ].map((outcome) => (
                  <li key={outcome} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-gray-700/50 border border-gray-600 mb-4">
                  <value.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-700/30 border border-gray-600 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-500/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.experience} experience</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;