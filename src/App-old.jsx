import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './assets/dexton-logo-png.png'
// import FullLogo from './assets/dexton-fullpng.png'
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Home, Users, Zap, Palette, Lock, FileText, Monitor, Mouse, Code } from 'lucide-react';

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    number: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false); // Close mobile menu after clicking
  // };

  // Hide splash after 1.5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {
      name: '',
      number: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.number.trim()) {
      errors.number = 'Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number.replace(/\s/g, ''))) {
      errors.number = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', number: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Dexton Technology
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-white mt-6 mx-auto"
              style={{ transformOrigin: "center" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-gray-400 text-sm md:text-base mt-6 tracking-widest uppercase"
            >
              Innovation Meets Excellence
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8, delay: showSplash ? 0 : 0 }}
        className="min-h-screen bg-white"
      >
        <main className="pt-16">
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="portfolio">
            <Portfolio />
          </section>
        </main>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center mx-4 sm:mx-6 relative overflow-hidden"
        >
          {/* Animated Background Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center"
          >
            <Monitor className="w-8 h-8 text-blue-400/30" />
          </motion.div>

          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center"
          >
            <Mouse className="w-7 h-7 text-purple-400/30" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-1/4 w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center"
          >
            <Code className="w-6 h-6 text-green-400/30" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-1/4 w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center"
          >
            <Palette className="w-5 h-5 text-yellow-400/30" />
          </motion.div>

          <motion.div
            animate={{ x: [-30, 30, -30] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-16 w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center"
          >
            <Zap className="w-4 h-4 text-red-400/30" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-20 w-6 h-6 bg-indigo-500/10 rounded-full flex items-center justify-center"
          >
            <Lock className="w-3 h-3 text-indigo-400/30" />
          </motion.div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">
            Ready to Get Started?
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
            Get In Touch
          </h3>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 relative z-10">
            {/* Name Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  formErrors.name ? 'border-red-500' : 'border-white/20'
                }`}
              />
              {formErrors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 text-left"
                >
                  {formErrors.name}
                </motion.p>
              )}
            </div>

            {/* Number Input */}
            <div className="relative">
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  formErrors.number ? 'border-red-500' : 'border-white/20'
                }`}
              />
              {formErrors.number && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 text-left"
                >
                  {formErrors.number}
                </motion.p>
              )}
            </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 shadow-lg"
            >
              {isSubmitted ? 'Submitted Successfully!' : 'Submit'}
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              >
                <p className="text-green-400 text-sm">
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <Footer />
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4 group">
                  <div className="p-2 bg-gradient-to-br from-white to-gray-200 rounded-lg">
                    <img src={Logo} alt="Dexton Logo" className="h-8 w-8" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Dexton Technology</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming ideas into digital reality with innovative technology solutions. 
                  We're your trusted partner for digital excellence and growth.
                </p>
                <div className="flex space-x-3 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Available 24/7</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4 relative">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Home", icon: <Home className="w-4 h-4" /> },
                    { name: "About Us", icon: <Users className="w-4 h-4" /> },
                    { name: "Services", icon: <Zap className="w-4 h-4" /> },
                    { name: "Portfolio", icon: <Palette className="w-4 h-4" /> }
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button onClick={() => window.open(link.url, '_blank')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 text-sm group bg-transparent border-none p-0">
                        <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4 relative">
                  Contact Info
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-3 group"
                  >
                    <MapPin/>
                    <div>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">1067, Rajmahal Mall, Opp. Millenium Society, Dindoli, Surat, Gujarat 395001</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-3 group"
                  >
                      <Phone/>                    
                    <a href="tel:+918780687178" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                      +91 878 068 7178
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-3 group"
                  >
                      <Mail/>
                    <a href="mailto:dextontechnology@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                      dextontechnology@gmail.com
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4 relative">
                  Follow Us
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
                </h3>
                <div className="flex space-x-3">
                  {[
                    { name: "Instagram", href: "https://instagram.com", icon:<Instagram />, rotate: 5 },
                    { name: "Twitter", href: "https://twitter.com", icon: <Twitter />, rotate: -5 },
                    { name: "Facebook", href: "https://facebook.com", icon: <Facebook />, rotate: 5 },
                    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin />, rotate: -5 }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: social.rotate }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-400">Connect with us on social media</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-gray-700 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <span className="text-gray-400 text-sm"> 2025 Dexton Technology. All rights reserved.</span>
                </div>
                <div className="flex space-x-6">
                  {[
                    { name: "Privacy Policy", icon: <Lock className="w-3 h-3" /> },
                    { name: "Terms of Service", icon: <FileText className="w-3 h-3" /> }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-all duration-200 text-sm group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </motion.div>
    </>
  )
}

export default App;
