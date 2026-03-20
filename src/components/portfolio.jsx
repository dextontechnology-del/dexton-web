import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import CoutureImage from "../assets/couture.png"
import GanrayaEventImage from "../assets/ganraya-event.png"
import GlobalTradeImage from "../assets/global-trade.png"
import ShubhamImage from "../assets/shubham-insurance.png"

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
            className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center"
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
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
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
                                // let isRight = item.position === 1;
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
                                        style={{
                                            
                                        }}
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
                                            
                                            {/* Overlay Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-t ${
                                                isCenter 
                                                    ? 'from-black/60 via-black/20 to-transparent' 
                                                    : 'from-black/80 via-black/40 to-transparent'
                                            }`} />
                                            
                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                                                        {item.category}
                                                    </span>
                                                    <h3 className={`font-bold mb-2 ${
                                                        isCenter ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                                                    }`}>
                                                        {item.title}
                                                    </h3>
                                                    <p className={`text-gray-200 ${
                                                        isCenter ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                                                    }`}>
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            </div>

                                            {/* Hover Effect for Center Card */}
                                            {isCenter && (
                                                <motion.div
                                                    className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <div className="text-center text-white">
                                                        <p className="text-lg font-semibold mb-2">View Project</p>
                                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                                            <ChevronRight className="w-6 h-6" />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
                    
                 <div className="flex justify-center items-center gap-3">
                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-3 mt-12">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentIndex
                                    ? 'w-10 h-3 bg-gradient-to-r from-primary to-secondary scale-110'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            />
                    ))}
                </div>

                {/* Auto-play Toggle */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300"
                    >
                        {isAutoPlay ? <Pause/> : <Play/> }
                    </button>
                </div>
            </div>
            </div>
        </motion.div>
    );
}
