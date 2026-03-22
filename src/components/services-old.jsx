import React, { useRef, useState } from "react";
import HorizontalSlider from "./HorizontalSlider";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Services() {
  const mobileProcessRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: mobileProcessRef,
    offset: ["start start", "end end"]
  });

  // Track scroll progress to control fixed state
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Fix content between 10% and 85% scroll progress
    setIsFixed(latest >= 0.1 && latest < 0.85);
  });
  
  // Content fade in and out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 0.8, 0.95], [0, 1, 1, 0]);

  // Card animations based on scroll progress with smooth easing
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.3], [1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.1, 0.25, 0.3], [1, 0.98, 0.95]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.25, 0.3], [0, -10, -30]);
  
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [80, 0, 0, -30]);
  const card2Scale = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0.95, 1, 1, 0.98]);
  
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
  const card3Y = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [80, 0, 0, -30]);
  const card3Scale = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [0.95, 1, 1, 0.98]);
  
  const card4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.85], [0, 1, 1]);
  const card4Y = useTransform(scrollYProgress, [0.75, 0.8, 0.85], [80, 0, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.75, 0.8, 0.85], [0.95, 1, 1]);

  return (
    <section className="py-20 bg-gray-50">
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
            Comprehensive technology solutions tailored to transform your business and drive measurable results
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
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3.0 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold text-gray-900 text-center mb-4"
            >
              Our Process
            </motion.h3>

            <motion.div className="">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-lg w-3/5 mx-auto mb-2"></div>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-lg w-2/5 mx-auto mb-2"></div>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-lg w-1/5 mx-auto mb-2"></div>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-lg w-[5%] mx-auto mb-2"></div>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-lg w-[1.5%] mx-auto mb-2"></div>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-0.5 rounded-full w-[1%] mx-auto"></div>
            </motion.div>

            <div className="relative h-[380px] flex items-center justify-center">
              {/* Card 1 - Discovery */}
              <motion.div
                style={{
                  opacity: card1Opacity,
                  scale: card1Scale,
                  y: card1Y,
                }}
                className="absolute text-center group bg-white rounded-lg p-6 shadow-lg mx-4 w-[calc(100%-2rem)]"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h4>
                <p className="text-gray-600 text-sm">Understanding customer's needs, goals, target audience, and business objectives.</p>
              </motion.div>
              
              {/* Card 2 - Planning */}
              <motion.div
                style={{
                  opacity: card2Opacity,
                  scale: card2Scale,
                  y: card2Y,
                }}
                className="absolute text-center group bg-white rounded-lg p-6 shadow-lg mx-4 w-[calc(100%-2rem)]"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Planning</h4>
                <p className="text-gray-600 text-sm">Creating a strategic roadmap of project. for better understanding and execution.</p>
              </motion.div>
              
              {/* Card 3 - Development */}
              <motion.div
                style={{
                  opacity: card3Opacity,
                  scale: card3Scale,
                  y: card3Y,
                }}
                className="absolute text-center group bg-white rounded-lg p-6 shadow-lg mx-4 w-[calc(100%-2rem)]"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Development</h4>
                <p className="text-gray-600 text-sm">Building your solution with expertise and best practices.</p>
              </motion.div>
              
              {/* Card 4 - Launch */}
              <motion.div
                style={{
                  opacity: card4Opacity,
                  scale: card4Scale,
                  y: card4Y,
                }}
                className="absolute text-center group bg-white rounded-lg p-6 shadow-lg mx-4 w-[calc(100%-2rem)]"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  04
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Launch</h4>
                <p className="text-gray-600 text-sm">Deploying and optimizing for success.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}