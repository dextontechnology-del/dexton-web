import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import FAQ from './components/FAQ';
import FloatingCTA from './components/FloatingCTA';
import { SoftwareCompanySchema, ServicesSchema } from './components/SEO';

// Lazy load heavy components for better performance
// const Portfolio = lazy(() => import('./components/portfolio'));

function App() {
  const [showSplash, setShowSplash] = useState(true);

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
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Structured Data Schemas */}
      <SoftwareCompanySchema />
      <ServicesSchema />
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="pt-16">
          <section id="hero" aria-label="Hero section">
            <Hero />
          </section>
          
          <section id="about" aria-label="About section">
            <About />
          </section>
          
          <section id="services" aria-label="Services section">
            <Services />
          </section>
          
          <section id="portfolio" aria-label="Portfolio section">
            <Portfolio />
          </section>
          
          <section id="faq" aria-label="Frequently asked questions">
            <FAQ />
          </section>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Floating CTA for Lead Generation */}
        <FloatingCTA />
      </div>
    </>
  );
}

export default App;
