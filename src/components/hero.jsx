import React from "react";
import { motion } from 'framer-motion';
import hanshLogo from "../assets/hansh-removebg-logo.png"
import ganrayaLogo from "../assets/ganraya-event-logo.png"
import shubhamLogo from "../assets/SHUBHAMLOGOFINAL.png"
import IFILogo from "../assets/IFI-logo.png"
import LeoClassesLogo from "../assets/leo-logo.png"
import BGTLogo from "../assets/bgt-logo-new.png"
import BhumiPutraLogo from "../assets/bhumiputra-logo.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                       radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-16 h-16 bg-primary-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-500/10 rounded-full blur-lg"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full mb-8 shadow-lg"
          >
            <span className="w-2 h-2 bg-success-400 rounded-full mr-2 animate-pulse"></span>
            <span>Building Digital Excellence</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
            <span className="block mb-2">Innovation Meets</span>
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering businesses with cutting-edge technology solutions that drive growth, 
            efficiency, and success in the digital age
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group relative px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 max-w-4xl mx-auto mb-12"
          >
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
              { number: "10+", label: "Projects" },
              { number: "7", label: "Team Members" },
              { number: "100%", label: "Satisfaction" },
              { number: "2023", label: "Founded" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-1">{stat.number}</div>
                <div className="text-sm text-neutral-600 whitespace-nowrap">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-neutral-200"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider">Trusted by leading companies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
              { name: "Hansh", logo: hanshLogo },
              { name: "Ganraya", logo: ganrayaLogo },
              { name: "Shubham", logo: shubhamLogo },
              { name: "IFI", logo: IFILogo },
              { name: "Leo Classes", logo: LeoClassesLogo },
              { name: "BGT", logo: BGTLogo },
              { name: "Bhumi Putra", logo: BhumiPutraLogo },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-10 sm:h-12 w-16 sm:w-20"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
