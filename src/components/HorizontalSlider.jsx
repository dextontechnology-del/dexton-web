import React, { useRef } from "react";
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Palette, Cloud, Code, Database } from "lucide-react";
import { useScroll, useTransform, useInView } from 'framer-motion';

export default function HorizontalSlider() {
    const ref = useRef(null);
    const titleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const isInView = useInView(titleRef, { once: false, margin: "0%" });

    // Transform values for sticky positioning with fade animation
    const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);
    // const cardsY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, -100]);
    // const cardsOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.9, 1], [0, 0, 1, 1, 0]);

    const Cards = [
        {
            title: "Web Development",
            description: "Custom web applications built with modern frameworks & libraries.",
            features: ["React/Vue/Angular", "Responsive Design", "API Integration"],
            icon: <Globe className="w-8 h-8 group-hover:text-white" />,
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
            features: ["React Native / Flutter", "Native iOS/Android", "App Store Deployment"],
            icon: <Smartphone className="w-8 h-8 group-hover:text-white" />,
        },
        {
            title: "UI/UX Design",
            description: "User-centered design solutions that delight and convert",
            features: ["User Research", "Prototyping", "Design Systems"],
            icon: <Palette className="w-8 h-8 group-hover:text-white" />,
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services",
            features: ["AWS/Azure/GCP", "DevOps", "Microservices"],
            icon: <Cloud className="w-8 h-8 group-hover:text-white" />,
        },
        {
            title: "AI & Machine Learning",
            description: "Intelligent solutions powered by cutting-edge AI technologies",
            features: ["Computer Vision", "Predictive Analytics", "Chatbots"],
            icon: <Code className="w-8 h-8 group-hover:text-white" />,
        },
        {
            title: "Social Media Marketing",
            description: "Comprehensive digital marketing strategies to grow your business",
            features: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
            icon: <Database className="w-8 h-8 group-hover:text-white" />,
        }
    ];

    return (
        <motion.div
            ref={ref}
            className="h-[220vh] bg-gradient-to-b from-transparent via-indigo-500 to-transparent relative w-full "
        >

            {/* Title Section - Fixed Center */}
            <motion.div
                ref={titleRef}
                style={{
                    position: isInView ? "fixed" : "relative",
                    top: isInView ? "13%" : "auto",
                    left: isInView ? "0%" : "auto",
                    right: isInView ? "0%" : "auto",
                    opacity: isInView ? titleOpacity : 0,
                    zIndex: isInView ? 30 : 20
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                
                className="w-full justify-center bg-white/60 backdrop-blur-sm py-2 sm:py-4 px-4 mx-auto max-w-4xl rounded-2xl"
            >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 text-center">
                    Our <span className="text-gray-600">Services</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-tight md:leading-relaxed text-center">
                    Comprehensive technology solutions tailored to transform your business and accelerate growth
                </p>
            </motion.div>

            {/* Cards Container - Fixed Center */}
            <motion.div
                style={{
                    position: isInView ? "fixed" : "relative",
                    top: isInView ? "30%" : "auto",
                    left: isInView ? "0%" : "auto",
                    transform: isInView ? "translateX(0%)" : "none",
                    opacity: isInView ? titleOpacity : 0,
                    zIndex: isInView ? 30 : 20
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full overflow-hidden pt-5"
            >
                <motion.div 
                    className="flex gap-3 sm:gap-4 items-center h-[350px] sm:h-[400px] justify-center"
                    style={{
                        x: useTransform(scrollYProgress, [0, 1], [1200, -1900])
                    }}
                >

                {Cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.03,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.15)" 
                        }}
                        className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 overflow-hidden group min-w-[250px] sm:min-w-[290px] max-w-[330px] h-[340px] sm:h-[380px] flex flex-col border border-gray-100/50"
                    >
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Animated Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                        
                        {/* Service Header */}
                        <div className="relative p-5 border-b border-gray-100/50 bg-white/80 backdrop-blur-sm">
                            
                            <div className="relative z-10">
                                {/* Icon and Heading in 1:2 Flex Ratio */}
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex-1">
                                        <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <span className="text-md md:text-2xl text-white">{card.icon}</span>
                                        </div>
                                    </div>
                                    <div className="flex-2">
                                        <h3 className="text-left text-lg sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{card.title}</h3>
                                    </div>
                                </div>
                                {/* Description Below */}
                                <p className="text-gray-600 text-xs md:text-sm leading-tight">{card.description}</p>
                            </div>
                        </div>

                        {/* Service Features */}
                        <div className="relative px-5 flex-grow flex flex-col bg-white/60 backdrop-blur-sm">
                            <ul className="space-y-3 mb-3 flex-grow">
                                {card.features.slice(0, 4).map((feature, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                                        className="flex items-center text-sm text-gray-700 group/item"
                                    >
                                        <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0 transition-transform duration-200"></div>
                                        <span className="group-hover/item:text-gray-900 italic transition-colors duration-200 hover:underline">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="border-t">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full flex items-center justify-center px-4 py-3 text-black text-sm font-semibold transition-all duration-300"
                                >
                                    Explore Service
                                    <ArrowRight className="group-hover:ml-2 w-4 h-4 transition-all duration-300" />
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </motion.div>
                ))}

                </motion.div>
            </motion.div>
        </motion.div>
    );
}
