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
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 102, 0, 0.1) 2px, rgba(255, 102, 0, 0.1) 4px)`
        }}></div>
        
        {/* Enhanced Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#ff6600] rounded-full animate-pulse"
              style={{
                left: `${(i * 4) % 100}%`,
                top: `${(i * 3.6) % 100}%`,
                animationDelay: `${(i * 0.2) % 3}s`,
                animationDuration: `${2 + (i * 0.1) % 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute opacity-20"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 12.5) % 100}%`,
                animationDelay: `${(i * 0.6) % 5}s`,
                animationDuration: `${8 + (i * 0.5) % 4}s`
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-4 h-4 border border-[#ff6600] rotate-45 animate-spin"></div>
              ) : i % 3 === 1 ? (
                <div className="w-6 h-6 border-2 border-[#ff6600] rounded-full animate-ping"></div>
              ) : (
                <div className="w-3 h-3 bg-[#ff6600] transform rotate-12 animate-bounce"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-center px-4 sm:px-8 py-4 sm:py-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 bg-black/20 backdrop-blur-sm rounded-full px-6 lg:px-8 py-3 lg:py-4 border border-[#ff6600]/30 hover:border-[#ff6600]/60 hover:bg-black/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20">
          <a 
            href="#home" 
            className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-[#ff6600]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute inset-0 bg-[#ff6600]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-[#ff6600]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </a>
          <a 
            href="#portfolio" 
            className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Portfolios</span>
            <div className="absolute inset-0 bg-[#ff6600]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-[#ff6600]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </a>
        </div>
        
        {/* Enhanced Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-[#ff6600] transition-all duration-300 p-3 rounded-lg hover:bg-[#ff6600]/10 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)] relative"
          aria-label="Toggle mobile menu"
        >
          {/* Animated Hamburger Lines */}
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span 
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'rotate-45 translate-y-1.5' 
                  : ''
              }`}
            ></span>
            <span 
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'opacity-0' 
                  : ''
              }`}
            ></span>
            <span 
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen 
                  ? '-rotate-45 -translate-y-1.5' 
                  : ''
              }`}
            ></span>
          </div>
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-lg bg-[#ff6600]/20 scale-0 transition-all duration-300 ${
            isMobileMenuOpen ? 'scale-100' : ''
          }`}></div>
        </button>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm animate-fade-in">
          {/* Mobile Menu Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff6600] rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#ff6600] rotate-45 animate-spin"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#ff6600] rounded-full animate-ping"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            {/* Menu Items with Staggered Animation */}
            <a 
              href="#home" 
              className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#ff6600]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.1s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-[#ff6600]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#ff6600]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.2s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-[#ff6600]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#ff6600]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.3s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-[#ff6600]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a 
              href="#portfolio" 
              className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#ff6600]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.4s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Portfolios</span>
              <div className="absolute inset-0 bg-[#ff6600]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#ff6600] transition-all duration-300 font-[var(--font-press-start-2p)] text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#ff6600]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.5s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#ff6600]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            
            {/* Enhanced Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 text-[#ff6600] hover:text-white transition-all duration-300 p-4 rounded-lg hover:bg-[#ff6600]/10 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] relative group transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.6s'}}
              aria-label="Close mobile menu"
            >
              {/* Animated Close Icon */}
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="block w-6 h-0.5 bg-current rotate-45 absolute transition-transform duration-300 group-hover:scale-110"></span>
                <span className="block w-6 h-0.5 bg-current -rotate-45 absolute transition-transform duration-300 group-hover:scale-110"></span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-[#ff6600]/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Retro Two Column Layout */}
      <section className="relative z-10 min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left Column - Text Content */}
            <div className={`text-white transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="space-y-2">
                  <div 
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff6600] font-[var(--font-press-start-2p)] transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-5'
                    }`}
                  >
                    Welcome to
                  </div>
                  <h1 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-[var(--font-press-start-2p)] text-white ${
              glitchActive 
                ? 'animate-pulse' 
                : ''
            }`}
          >
                    <span className="text-[#ff6600]">XSRS-IT</span>
          </h1>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-[var(--font-press-start-2p)] max-w-lg">
                  The best digital solutions for your business.
                </p>
                
                <div className="pt-4 relative">
                  {/* Animated Background Elements */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 border border-[#ff6600]/30 rotate-45 animate-spin"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#ff6600]/20 rounded-full animate-pulse"></div>
          
          <button
            onMouseEnter={handleCtaHover}
                    className={`px-6 sm:px-8 py-3 sm:py-4 bg-[#ff6600] text-black font-bold rounded-lg shadow-lg hover:shadow-[#ff6600]/50 transition-all duration-300 font-[var(--font-press-start-2p)] text-xs sm:text-sm hover:scale-105 border-2 border-[#ff6600] hover:bg-transparent hover:text-[#ff6600] relative overflow-hidden group ${
              isLoaded 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-[#ff6600]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <span className="relative z-10">Discover Now</span>
          </button>
                  
                  {/* Floating Action Elements */}
                  <div className="absolute top-1/2 -right-8 w-3 h-3 bg-[#ff6600] rounded-full animate-bounce"></div>
                  <div className="absolute -top-2 left-1/2 w-2 h-2 border border-[#ff6600] rotate-45 animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className={`relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}>
              {/* Retro Background Circle */}
              <div className="relative w-full h-80 sm:h-96 lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  
                  {/* Product Slider Container */}
                  <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                    <div className="relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/30 p-4 sm:p-6 lg:p-8">
                      
                      {/* Retro Terminal Display */}
                      <div className="bg-black rounded-lg p-4 border border-[#ff6600]/50 relative overflow-hidden">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                        <div className="text-[#ff6600] font-mono text-xs sm:text-sm">
                          <div className="animate-pulse">$ XSRS-IT v2.0.1</div>
                          <div className="text-white mt-2 flex items-center">
                            <span>Loading digital solutions</span>
                            <span className="animate-pulse ml-1">...</span>
                          </div>
                          <div className="text-[#ff6600] mt-1 animate-fade-in" style={{animationDelay: '2s'}}>✓ Web Development</div>
                          <div className="text-[#ff6600] mt-1 animate-fade-in" style={{animationDelay: '3s'}}>✓ Mobile Apps</div>
                          <div className="text-[#ff6600] mt-1 animate-fade-in" style={{animationDelay: '4s'}}>✓ Cloud Solutions</div>
                          <div className="text-white mt-2 animate-fade-in" style={{animationDelay: '5s'}}>Ready to innovate!</div>
                        </div>
                        
                        {/* Terminal Cursor */}
                        <div className="absolute bottom-4 right-4 w-2 h-4 bg-[#ff6600] animate-pulse"></div>
                      </div>
                      
                      {/* Enhanced Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff6600] rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ff6600]/50 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 -right-6 w-4 h-4 border border-[#ff6600] rotate-45 animate-spin"></div>
                      <div className="absolute -top-2 left-1/2 w-3 h-3 bg-[#ff6600] rounded-full animate-ping"></div>
                      <div className="absolute bottom-1/4 -left-2 w-5 h-5 border-2 border-[#ff6600] rounded-full animate-pulse"></div>
                      
                      {/* Animated Border Glow */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-[#ff6600]/30 animate-pulse"></div>
                      <div className="absolute inset-0 rounded-2xl border border-[#ff6600]/60 animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Additional Floating Elements Around Content */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff6600] rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#ff6600] rotate-45 animate-spin"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-[#ff6600] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-4 h-4 border-2 border-[#ff6600] rounded-full animate-ping"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-[#ff6600] rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 border border-[#ff6600] rotate-12 animate-pulse"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ff6600]/10 rounded-full mb-6 border border-[#ff6600]/30">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-press-start-2p)] mb-4">
              Our <span className="text-[#ff6600]">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-press-start-2p)] max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Software Development */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  Software Development
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Custom software solutions built with cutting-edge technology
                </p>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* App Development */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  App Development
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Native and cross-platform mobile applications
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Website Development */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  Website Development
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Responsive and modern web solutions
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* SEO */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  SEO
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Search engine optimization for better visibility
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* UI/UX */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  User-centered design for optimal experience
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Graphics Designing */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  Graphics Designing
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Creative visual solutions and branding
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Production Shoot */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  Production Shoot
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Professional photography and videography
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Additional Service Card for Grid Balance */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  Digital Marketing
                </h3>
                <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                  Strategic online marketing solutions
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ff6600]/10 rounded-full mb-6 border border-[#ff6600]/30">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-press-start-2p)] mb-4">
              Our <span className="text-[#ff6600]">Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-press-start-2p)] max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>

          {/* Clients Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Client 1 */}
              <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white font-[var(--font-press-start-2p)] mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                    TechCorp
                  </h3>
                  <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)]">
                    Technology Solutions
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>

              {/* Client 2 */}
              <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white font-[var(--font-press-start-2p)] mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                    InnovateLab
                  </h3>
                  <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)]">
                    Innovation Hub
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>

              {/* Client 3 */}
              <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white font-[var(--font-press-start-2p)] mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                    DigitalPro
                  </h3>
                  <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)]">
                    Digital Agency
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>

              {/* Client 4 */}
              <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white font-[var(--font-press-start-2p)] mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                    CloudTech
                  </h3>
                  <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)]">
                    Cloud Solutions
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>

              {/* Client 5 */}
              <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white font-[var(--font-press-start-2p)] mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                    FinanceApp
                  </h3>
                  <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)]">
                    Financial Services
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
