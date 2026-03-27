import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  Shield, 
  Rocket, 
  Smartphone,
  Database,
  Cloud,
  Cpu
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Enterprise-grade custom software solutions built with cutting-edge technologies for global clients",
      features: ["React.js", "Next.js", "TypeScript", "Node.js", "Python"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with global deployment",
      features: ["React Native", "Flutter", "Swift", "Kotlin", "App Store"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions including machine learning, NLP, computer vision, and intelligent automation",
      features: ["TensorFlow", "PyTorch", "OpenAI", "ML Models", "NLP"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SaaS Development",
      description: "Full-cycle SaaS platforms with multi-tenant architecture and scalable cloud infrastructure",
      features: ["Multi-tenant", "Cloud Native", "Microservices", "APIs", "Scalable"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Cloud-native applications with CI/CD pipelines and automated deployment across major cloud providers",
      features: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security, compliance, and performance optimization for global applications",
      features: ["Security Audits", "GDPR", "SOC 2", "Performance", "Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade software development solutions for global clients. We help startups and enterprises worldwide build scalable, secure, and high-performance digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg border border-neutral-200/50 p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300"
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + featureIndex * 0.1 }}
                      className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full group-hover:bg-primary-200 transition-all duration-300"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#portfolio"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="inline-flex items-center justify-center gap-2 text-primary-600 font-semibold text-sm group-hover:bg-slate-400/30 p-2 rounded-lg filter backdrop-blur-sm hover:text-primary-700 transition-colors duration-300 group-hover:translate-x-1 mt-2"
                >
                  View Projects
                  <Cpu className="w-4 h-4 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Build Your Next Project With Us
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Partner with our global development team to build enterprise-grade software solutions that scale with your business
            </p>
            <motion.a
              href="#footer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Free Consultation
              <Rocket className="w-5 h-5 ml-2 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
