'use client';

import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import BackgroundEffects from '../components/BackgroundEffects';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Ensure clickable elements are still functional */
        a, button, input, textarea, [role="button"], [onclick] {
          cursor: none !important;
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
          0%, 100% { box-shadow: 0 0 5px rgba(255, 102, 0, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.6), 0 0 30px rgba(255, 102, 0, 0.4); }
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
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section - We'll add this later */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#ff6600] font-[var(--font-press-start-2p)] mb-4">About Us</h2>
            <p className="text-gray-300 font-[var(--font-press-start-2p)]">Coming Soon...</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Portfolio Section - We'll add this later */}
        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#ff6600] font-[var(--font-press-start-2p)] mb-4">Our Portfolio</h2>
            <p className="text-gray-300 font-[var(--font-press-start-2p)]">Coming Soon...</p>
          </div>
        </section>

        {/* Our Clients Section */}
        <section id="clients">
          <ClientsSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
}
