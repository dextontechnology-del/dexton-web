import React from "react";
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/white-back.jpg'
import hanshLogo from "../assets/hansh-removebg-logo.png"
import ganrayaLogo from "../assets/ganraya-event-logo.png"
import shubhamLogo from "../assets/SHUBHAMLOGOFINAL.png"
import IFILogo from "../assets/IFI-logo.png"
import LeoClassesLogo from "../assets/leo-logo.png"
import BGTLogo from "../assets/bgt-logo-new.png"
import BhumiPutraLogo from "../assets/bhumiputra-logo.png"


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-black rounded-full opacity-5"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gray-900 rounded-full opacity-5"
      />
      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/4 w-16 h-10 sm:h-12 bg-gray-800 rounded-full opacity-5"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mt-4 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Welcome to Dexton Technology
          </motion.div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block mb-2">Innovation Meets</span>
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 w-full mx-auto px-4 sm:px-6 md:px-8 max-w-3xl"
          >
            Empowering businesses with innovative technology solutions that drive growth, 
            efficiency, and success in the digital age
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-2 justify-center items-center"
          >
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
              Learn More
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">05+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="my-16 w-full"
          >
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3">Trusted by Leading Brands</h3>
              <p className="text-sm md:text-md text-gray-600 mx-auto mb-8">We're proud to partner with innovative companies across various industries</p>
           
            {/* Client Logos Marquee */}
            <div className="relative min-w-full overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50 backdrop-blur-lg rounded-3xl my-6 shadow-lg border border-slate-200/50">
              {/* Top and bottom gradient overlays for premium feel */}
              <div className="absolute left-0 right-0 top-0 h-4 bg-gradient-to-b from-gray-100 to-transparent z-10"></div>
              <div className="absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-t from-gray-100 to-transparent z-10"></div>
              
              {/* Side fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-300 via-gray-100 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-300 via-gray-100 to-transparent z-10"></div>
                            
              <div className="flex animate-marquee items-center">
                {/* First set of logos */}
                <div className="flex items-center space-x-6 px-6">
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={hanshLogo} alt="Hansh" className="sm:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={ganrayaLogo} alt="Ganraya Event" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={IFILogo} alt="IFI" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={shubhamLogo} alt="Shubham" className="sm:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={LeoClassesLogo} alt="Leo Classes" className="h-14 md:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={BGTLogo} alt="BGT" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={BhumiPutraLogo} alt="Bhumi Putra" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-6 px-6">
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={hanshLogo} alt="Hansh" className="sm:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={ganrayaLogo} alt="Ganraya Event" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={IFILogo} alt="IFI" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={shubhamLogo} alt="Shubham" className="sm:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={LeoClassesLogo} alt="Leo Classes" className="h-14 md:h-14 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={BGTLogo} alt="BGT" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-center w-40 h-20 ">
                      <img src={BhumiPutraLogo} alt="Bhumi putra" className="h-14 md:h-16 w-auto object-contain transition-all duration-500 relative z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CSS for marquee animation */}
            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: flex;
                animation: marquee 40s linear infinite;
                width: fit-content;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
