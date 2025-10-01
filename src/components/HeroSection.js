'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

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

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, [isLoaded]);

  const handleCtaHover = () => {
    // CSS hover effects will handle this
  };

  return (
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
  );
}
