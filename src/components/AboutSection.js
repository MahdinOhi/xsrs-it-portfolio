'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 102, 0, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.6), 0 0 30px rgba(255, 102, 0, 0.4); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      
      <section className="relative min-h-screen bg-[#0a0a0a] py-16 lg:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 border-2 border-[#00abf0] rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#00abf0] rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Section Header */}
              <div className="space-y-4">
                <div className="text-[#00abf0] font-audiowide text-sm uppercase tracking-wider">
                  About XSRS-IT
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-audiowide leading-tight">
                  Where Digital Dreams 
                  <span className="text-[#00abf0] block">Take Flight</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-audiowide">
                  Empowering startups and igniting innovation through cutting-edge technology solutions. 
                  We transform ideas into digital realities that drive business success.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#00abf0] font-audiowide">
                    Our Mission
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-audiowide">
                    To democratize technology and make cutting-edge digital solutions accessible to businesses of all sizes.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#00abf0] font-audiowide">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-audiowide">
                    To be the leading force in digital transformation, creating a world where every business can thrive in the digital age.
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    50+
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    25+
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    3+
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Years Experience
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Support
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="px-8 py-4 bg-[#00abf0] text-black font-bold rounded-lg shadow-lg hover:shadow-[#00abf0]/50 transition-all duration-300 font-audiowide text-sm hover:scale-105 border-2 border-[#00abf0] hover:bg-transparent hover:text-[#00abf0] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00abf0]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              
              {/* Main Visual Container */}
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/20 to-transparent rounded-full blur-3xl"></div>
                
                {/* Central Terminal Display */}
                <div className="relative z-10 w-full max-w-md mx-auto">
                  <div className="relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-[#00abf0]/30 p-6">
                    
                    {/* Terminal Header */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Terminal Content */}
                    <div className="bg-black rounded-lg p-4 border border-[#00abf0]/50 relative overflow-hidden">
                      <div className="text-[#00abf0] font-mono text-xs">
                        <div className="animate-pulse">$ XSRS-IT v2.0.1</div>
                        <div className="text-white mt-2 flex items-center">
                          <span>Loading company info</span>
                          <span className="animate-pulse ml-1">...</span>
                        </div>
                        <div className="text-[#00abf0] mt-1 animate-fade-in-up" style={{animationDelay: '2s'}}>✓ Founded: 2021</div>
                        <div className="text-[#00abf0] mt-1 animate-fade-in-up" style={{animationDelay: '3s'}}>✓ Team: 15+ Experts</div>
                        <div className="text-[#00abf0] mt-1 animate-fade-in-up" style={{animationDelay: '4s'}}>✓ Location: San Francisco</div>
                        <div className="text-white mt-2 animate-fade-in-up" style={{animationDelay: '5s'}}>Ready to innovate!</div>
                      </div>
                      
                      {/* Terminal Cursor */}
                      <div className="absolute bottom-4 right-4 w-2 h-4 bg-[#00abf0] animate-pulse"></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00abf0] rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00abf0]/50 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -right-6 w-4 h-4 border border-[#00abf0] rotate-45 animate-spin"></div>
                    <div className="absolute -top-2 left-1/2 w-3 h-3 bg-[#00abf0] rounded-full animate-ping"></div>
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#00abf0]/30 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-2xl border border-[#00abf0]/60 animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
