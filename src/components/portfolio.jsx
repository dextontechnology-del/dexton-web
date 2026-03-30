import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import CoutureImage from "../assets/couture.png"
import GanrayaEventImage from "../assets/ganraya-event.png"
import GlobalTradeImage from "../assets/global-trade.png"
import ShubhamImage from "../assets/shubham-insurance.png"
import BhumiputraAgroImage from "../assets/Bhumiputra-agro.png"

const portfolioItems = [
    {
        id: 1,
        title: "Shubham Insurance & Investment",
        description: "Professional with Modern UI Insurance Services Portal, made by Dexton Technology.",
        image: ShubhamImage,
        category: "Finance"
    },
    {
        id: 2,
        title: "Believe Global Trade",
        description: "Believe Global Trade- Import/Export Company's website International Trading Solution implemented by Dexton Technology.",
        image: GlobalTradeImage,
        category: "Business"
    },
    {
        id: 3,
        title: "Shree Ganraya Event",
        description: "Event Management Platform implemented by Dexton Technology.",
        image: GanrayaEventImage,
        category: "Events"
    },
    {
        id: 4,
        title: "Hansh Couture",
        description: "Fashion & Lifestyle Brand Web-Site with Attractive Styling and Designing implemented by Dexton Technology.",
        image: CoutureImage,
        category: "E-commerce"
    },
    {
        id: 5,
        title: "Bhumiputra Agro",
        description: "Agricultural solutions platform helping farmers with modern technology and sustainable farming practices.",
        image: BhumiputraAgroImage,
        category: "Agriculture"
    }
];

export default function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const goToPrevious = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentIndex(index);
    };

    const getVisibleItems = () => {
        const items = [];
        const totalItems = portfolioItems.length;
        
        for (let i = -1; i <= 2; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalItems + index;
            if (index >= totalItems) index = index - totalItems;
            items.push({ ...portfolioItems[index], position: i });
        }
        
        return items;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="text-primary-600">Portfolio</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest projects and see how we've helped businesses transform their digital presence
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 md:left-8 z-20 p-2 md:p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                    </button>
                    
                    <button
                        onClick={goToNext}
                        className="absolute right-0 md:right-8 z-20 p-2 md:p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                    </button>

                    {/* Slider Track */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                        <AnimatePresence>
                            {getVisibleItems().map((item, index) => {
                                const isCenter = item.position === 0;
                                let isLeft = item.position === -1;
                                let isFarRight = item.position === 2;

                                return (
                                    <motion.div
                                        key={`${item.id}-${currentIndex}`}
                                        initial={{
                                            scale: isCenter ? 0.8 : isFarRight ? 0.5 : 0.6,
                                            x: isCenter ? 0 : isLeft ? -400 : isFarRight ? 500 : 400,
                                            opacity: isCenter ? 1 : isFarRight ? 0.2 : 0.4,
                                            zIndex: isCenter ? 10 : isFarRight ? 3 : 5
                                        }}
                                        animate={{
                                            scale: isCenter ? 1 : isFarRight ? 0.5 : 0.7,
                                            x: isCenter ? 0 : isLeft ? -320 : isFarRight ? 450 : 320,
                                            opacity: isCenter ? 1 : isFarRight ? 0.2 : 0.6,
                                            zIndex: isCenter ? 10 : isFarRight ? 3 : 5
                                        }}
                                        exit={{
                                            scale: 0.6,
                                            x: isLeft ? 400 : isFarRight ? 500 : -400,
                                            opacity: 0.2
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut"
                                        }}
                                        className={`absolute ${isCenter ? 'w-80 md:w-120 lg:w-[28rem]' : 'w-72 md:w-80 lg:w-96'} h-80 md:h-96 lg:h-[450px] ${
                                            isCenter ? 'cursor-pointer' : 'cursor-pointer hover:scale-105'
                                        }`}
                                        onClick={() => !isCenter && goToSlide((currentIndex + item.position + portfolioItems.length) % portfolioItems.length)}
                                    >
                                        <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                                            isCenter 
                                                ? 'ring-4 ring-primary/20 ring-offset-4' 
                                                : 'brightness-75'
                                        }`}>
                                            {/* Background Image */}
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            
                                            {/* Overlay Gradient - Stronger for better text visibility */}
                                            <div className={`absolute inset-0 bg-gradient-to-t ${
                                                isCenter 
                                                    ? 'from-black/90 via-black/50 to-transparent' 
                                                    : 'from-black/95 via-black/70 to-transparent'
                                            }`} />
                                            
                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <span className="inline-block px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                                                        {item.category}
                                                    </span>
                                                    <h3 className={`font-bold mb-2 ${
                                                        isCenter ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                                                    }`}>
                                                        {item.title}
                                                    </h3>
                                                    <p className={`text-sm leading-relaxed ${
                                                        isCenter ? 'block' : 'hidden md:block'
                                                    }`}>
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            </div>

                                            {/* Hover Effect for Center Card */}
                                            {isCenter && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Controls Container */}
                    <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center gap-3 px-4">
                        {/* Dots Indicator */}
                        <div className="flex justify-center space-x-2">
                            {portfolioItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-blue-600 w-8' 
                                            : 'bg-gray-400 hover:bg-gray-600'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Auto-play Toggle */}
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group flex items-center gap-2 text-sm font-medium text-gray-700"
                            aria-label={isAutoPlay ? "Pause auto-play" : "Start auto-play"}
                        >
                            {isAutoPlay ? (
                                <>
                                    <Pause className="w-4 h-4" />
                                    <span className="hidden sm:inline">Pause</span>
                                </>
                            ) : (
                                <>
                                    <Play className="w-4 h-4" />
                                    <span className="hidden sm:inline">Play</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
