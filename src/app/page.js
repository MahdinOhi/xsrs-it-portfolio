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
      <section className="relative z-10 min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
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

        {/* Retro Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="relative h-16">
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#ff6600]/10 transform skew-y-1"></div>
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
    </div>
    </>
  );
}
