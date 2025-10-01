'use client';

import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';

export default function Home() {
  return (
    <>
      <style jsx>{`
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
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Our Clients Section */}
        <ClientsSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
