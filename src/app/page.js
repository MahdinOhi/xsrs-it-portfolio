'use client';

import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import BackgroundEffects from '../components/BackgroundEffects';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* Hide default cursor only on desktop devices */
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
          
          /* Ensure clickable elements are still functional */
          a, button, input, textarea, [role="button"], [onclick] {
            cursor: none !important;
          }
        }
        
        /* Show default cursor on mobile/touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
        
        /* Ensure sticky navbar works properly */
        nav {
          position: sticky !important;
          top: 0 !important;
          z-index: 50 !important;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Font family definitions */
        .font-audiowide {
          font-family: var(--font-audiowide), sans-serif;
        }
        
        .font-space-mono {
          font-family: var(--font-space-mono), monospace;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 171, 240, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 171, 240, 0.6), 0 0 30px rgba(240, 90, 40, 0.4); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen bg-[#0a0a0a] text-white relative">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 md:py-24">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-16 md:py-24">
          <ServicesSection />
        </section>

        {/* Our Clients Section */}
        <section id="clients" className="relative py-16 md:py-24">
          <ClientsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <Footer />
        </section>
      </div>
    </>
  );
}
