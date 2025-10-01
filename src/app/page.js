'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, Math.random() * 3000 + 2000);

    // 3D image container is ready for content

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, [isLoaded]);

  const handleCtaHover = () => {
    // CSS hover effects will handle this
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 102, 0, 0.1) 2px, rgba(255, 102, 0, 0.1) 4px)`
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#ff6600] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-[#ff6600] font-[var(--font-press-start-2p)]">
          XSRS-IT
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 bg-black/20 backdrop-blur-sm rounded-full px-6 lg:px-8 py-3 lg:py-4 border border-[#ff6600]/30">
          <a href="#home" className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-xs lg:text-sm">Home</a>
          <a href="#about" className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-xs lg:text-sm">About Us</a>
          <a href="#services" className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-xs lg:text-sm">Services</a>
          <a href="#portfolio" className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-xs lg:text-sm">Portfolios</a>
          <a href="#contact" className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-xs lg:text-sm">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-[#ff6600] transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="#home" 
              className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolios
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#ff6600] transition-colors font-[var(--font-press-start-2p)] text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto w-full">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-[var(--font-press-start-2p)] text-white leading-tight transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            } ${
              glitchActive 
                ? 'animate-pulse' 
                : ''
            }`}
          >
            Welcome To <span className="text-[#ff6600]">XSRS-IT</span>
          </h1>
          
          <p 
            className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed font-[var(--font-press-start-2p)] px-4 sm:px-0 transition-all duration-800 ease-out delay-500 ${
              isLoaded 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            Empowering startups, igniting innovation. XSRS - Where Digital Dreams Take Flight.
          </p>
          
          <button
            onMouseEnter={handleCtaHover}
            className={`px-6 sm:px-8 py-3 sm:py-4 bg-[#ff6600] text-black font-bold rounded-lg shadow-lg hover:shadow-[#ff6600]/50 transition-all duration-300 font-[var(--font-press-start-2p)] text-xs sm:text-sm hover:scale-105 ${
              isLoaded 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Get in Touch
          </button>
        </div>

        
      </section>
    </div>
  );
}
