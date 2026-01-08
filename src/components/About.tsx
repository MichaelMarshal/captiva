import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  Shield, 
  TrendingUp
} from 'lucide-react';

const About: React.FC = () => {

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



        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pioneering Cybersecurity Excellence
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Captiva Cyber was founded with a simple mission: to make advanced cybersecurity 
                accessible to businesses of all sizes. Our journey began when our founders, 
                seasoned security professionals, recognized the growing gap between evolving 
                cyber threats and traditional security approaches.
              </p>
              <p>
                We're committed to being a trusted partner for organizations of all sizes, 
                from innovative startups to enterprise companies. Our team of certified experts 
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
      </div>
    </section>
  );
};

export default About;