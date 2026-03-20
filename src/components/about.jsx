import React from "react";
import { motion } from 'framer-motion';
import { ChartLine, BookCheck, CalendarCheck, Lightbulb, Star, Handshake, Rocket } from 'lucide-react';

export default function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "05+", label: "Team Members" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2023", label: "Founded" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions",
      icon: <Lightbulb/>
    },
    {
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do",
      icon: <Star/>
    },
    {
      title: "Integrity",
      description: "We build trust through transparency and honesty",
      icon: <Handshake/>
    },
    {
      title: "Growth",
      description: "We help our clients and team members reach their potential",
      icon: <Rocket/>
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gray-600">Dexton Technology</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming Ideas Into Digital Reality with Passion and Precision
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Digital Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Dexton Technology, we're not just another IT company - we're your digital transformation partners on a mission to revolutionize how businesses leverage technology for exponential growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded with a vision to bridge the gap between complex technology and business needs, we specialize in creating cutting-edge digital solutions that drive measurable results. Our team of passionate developers and designers work tirelessly to transform your ideas into powerful, user-centric applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center px-4 py-2 bg-black rounded-full text-sm font-medium text-white">
                <ChartLine/>Startup Since 2025
              </div>
              <div className="flex items-center px-4 py-2 bg-black rounded-full text-sm font-medium text-white">
                <BookCheck/> Innovation Driven
              </div>
              <div className="flex items-center px-4 py-2 bg-black rounded-full text-sm font-medium text-white">
                <CalendarCheck/> Client Focused
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-6">
               {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left md:text-center">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-left md:text-center">{value.description}</p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
          <button onClick={() => scrollToSection('footer')} className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}