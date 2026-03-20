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
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HorizontalSlider />
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block mb-20"
        >
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating a strategic roadmap" },
              { step: "03", title: "Development", description: "Building your solution with expertise" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Process Section for mobile */}
        <div
          ref={mobileProcessRef}
          className="block md:hidden h-[220vh] bg-gradient-to-b from-transparent via-gray-600 to-transparent"
        >
          {/* Fixed content container */}
          <motion.div
            style={{
              opacity: contentOpacity,
            }}
            className={`${isFixed ? 'fixed top-[70px] left-0 right-0' : 'relative'} py-8`}
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