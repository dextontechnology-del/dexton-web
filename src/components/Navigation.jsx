import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import Logo from '../assets/dexton-logo-png.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  // Social links - can be used in mobile menu footer or expanded navigation
  // const socialLinks = [
  //   { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
  //   { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
  //   { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
  //   { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' },
  // ];

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <img 
                src={Logo} 
                alt="Dexton Technology" 
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
              <span className="ml-3 text-xl font-bold text-neutral-900 hidden lg:block">
                Dexton Technology
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="#footer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Us
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-neutral-100/50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu className="w-6 h-6 text-neutral-600" />
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-white/95 backdrop-blur-md border-t border-neutral-200/50">
                  <div className="container mx-auto px-6 py-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-300 font-medium"
                        >
                          {item.name}
                        </motion.a>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                        className="h-px bg-neutral-200 origin-left"
                      />
                      
                      <motion.a
                        href="#footer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.2 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="block mx-4 mt-4 px-6 py-3 bg-primary-600 text-white text-center font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
                      >
                        Contact Us
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
