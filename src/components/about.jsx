import React from "react";
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Star, 
  Handshake, 
  Rocket, 
  CheckCircle 
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: "10+", label: "Projects Delivered", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "7+", label: "Team Members", icon: <Users className="w-5 h-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "3+", label: "Years Experience", icon: <Award className="w-5 h-5" /> }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology and creative solutions to solve complex challenges",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Quality Driven",
      description: "Every solution is crafted with attention to detail and commitment to excellence",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Client Focused",
      description: "Your success is our priority - we build partnerships that last",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Growth Mindset",
      description: "Continuous learning and improvement to deliver cutting-edge solutions",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Dexton Technology</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate developers and designers dedicated to creating 
            exceptional digital experiences that drive business growth and user engagement.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900">
                  {stat.number}
                </div>
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Our Story
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Founded in 2023, Dexton Technology emerged from a simple vision: 
                to bridge the gap between innovative ideas and practical digital solutions. 
                Our journey began with a small team of passionate developers who believed 
                in the power of technology to transform businesses.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Today, we're proud to have helped over 50 clients achieve their digital goals, 
                delivering cutting-edge solutions that combine creativity, functionality, and 
                performance excellence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age. We strive to be the trusted partner 
                that turns ambitious ideas into reality through exceptional development and design.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2 text-center group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our expertise and innovative solutions.
            </p>
            <motion.a
              href="#footer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Started Today
              <Handshake className="w-5 h-5 ml-2 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}