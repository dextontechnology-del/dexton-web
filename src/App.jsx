import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Dexton Technology - Digital Innovation & Web Development Solutions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with cutting-edge web development, mobile apps, and digital solutions. Dexton Technology delivers innovative technology services that drive measurable results.');
    }

    // Update theme color
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', '#3b82f6');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
