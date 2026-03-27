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
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50"
      role="banner"
      aria-label="Dexton Technology - Global Software Development Company"
    >
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
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center py-12 md:py-14">
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
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-xs md:text-sm font-medium rounded-full mb-6 md:mb-8 shadow-lg"
            >
              <div className="w-3 h-3 bg-success-400 rounded-full mr-2 animate-pulse"> </div>
              <span>Serving Clients Worldwide</span>
            </motion.div>

            {/* Main Title - H1 for SEO */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight tracking-tight">
              <span className="block mb-2">Build Scalable Digital Products with</span>
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Global Software Development Partner
              </span>
            </h1>

            {/* Subtitle - Global value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-neutral-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              We help <strong>startups and enterprises worldwide</strong> design, develop, and scale 
              high-performance web, mobile, and AI solutions. Your <strong>remote development partner</strong> 
              for building world-class digital products with international standards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12"
            >
              <a 
                href="#footer" 
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Book a free consultation with our development team"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#services" 
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-center"
                aria-label="Explore our custom software development services"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Stats - Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 lg:gap-12 max-w-4xl mx-auto"
              role="contentinfo"
              aria-label="Company statistics"
            >
              {[/* eslint-disable @typescript-eslint/no-unused-vars */
                { number: "50+", label: "Global Projects", description: "Successfully delivered worldwide" },
                { number: "15+", label: "Expert Developers", description: "Remote team across timezones" },
                { number: "100%", label: "Client Satisfaction", description: "Happy international clients" },
                { number: "24/7", label: "Global Support", description: "Flexible timezone availability" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center flex flex-col items-center p-2"
                  role="figure"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-neutral-600 whitespace-nowrap">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Client Logos - Trust signals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 bg-white/90 backdrop-blur-md border-t border-neutral-200 py-4 md:py-6"
        role="contentinfo"
        aria-label="Our clients and partners"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-3 md:mb-4">
            <h2 className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider">Trusted by Global Companies & Startups</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
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
                className="flex items-center justify-center h-8 sm:h-10 md:h-12 w-12 sm:w-16 md:w-20"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} - Global client of Dexton Technology software development company`}
                  loading="lazy"
                  width="80"
                  height="48"
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
