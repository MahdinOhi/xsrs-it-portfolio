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
    <section className="relative z-10 min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          
          {/* Hero Content - Center Aligned */}
          <div className={`text-white transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div 
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[#00abf0] font-audiowide transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-5'
                  }`}
                >
                  Welcome to XSRS IT
                </div>
                <h1 
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-audiowide text-white ${
                    glitchActive 
                      ? 'animate-pulse' 
                      : ''
                  }`}
                >
                  Where Digital Dreams Take Flight
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-audiowide max-w-2xl mx-auto">
                  Empowering startups, Igniting innovation.
                </p>
              </div>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Animated Background Elements */}
                <div className="absolute -top-4 -left-4 w-6 h-6 border border-[#00abf0]/30 rotate-45 animate-spin"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#00abf0]/20 rounded-full animate-pulse"></div>
                
                <button
                  onMouseEnter={handleCtaHover}
                  className={`px-8 py-4 bg-[#00abf0] text-black font-bold rounded-lg shadow-lg hover:shadow-[#00abf0]/50 transition-all duration-300 font-audiowide text-sm hover:scale-105 border-2 border-[#00abf0] hover:bg-transparent hover:text-[#00abf0] relative overflow-hidden group ${
                    isLoaded 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-[#00abf0]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10">Get Started</span>
                </button>
                
                <button
                  className={`px-8 py-4 bg-transparent text-[#00abf0] font-bold rounded-lg border-2 border-[#00abf0] hover:bg-[#00abf0] hover:text-black transition-all duration-300 font-audiowide text-sm hover:scale-105 relative overflow-hidden group ${
                    isLoaded 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <span className="relative z-10">Learn More</span>
                </button>
                
                {/* Floating Action Elements */}
                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-[#00abf0] rounded-full animate-bounce"></div>
                <div className="absolute -top-2 left-1/2 w-2 h-2 border border-[#00abf0] rotate-45 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements Around Content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 border-2 border-[#00abf0] rounded-full animate-ping"></div>
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-[#00abf0] rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 border border-[#00abf0] rotate-12 animate-pulse"></div>
      </div>
    </section>
  );
}
