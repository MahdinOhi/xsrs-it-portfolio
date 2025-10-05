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
      
      <section className="relative min-h-screen bg-[#0a0a0a] py-16 md:py-24 overflow-hidden max-w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden max-w-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 border-2 border-[#00abf0] rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#00abf0] rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Content - Center Aligned */}
            <div className={`text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              
              {/* Section Header */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-audiowide leading-tight">
                  XSRS IT is more than just a digital agency
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-audiowide max-w-3xl mx-auto">
                  — we are a team of creators, developers, and innovators driven by the passion to transform ideas into impactful digital experiences. From crafting seamless software to designing meaningful user journeys, we bring together creativity and technology to help brands thrive in the digital world.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-[#00abf0] font-audiowide">
                    Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-audiowide">
                    To empower businesses of every size with innovative digital solutions that are simple, scalable, and built for real-world impact. We aim to bridge the gap between technology and creativity, making digital growth accessible to everyone.
                  </p>
                </div>
                <div className="space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-[#00abf0] font-audiowide">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-audiowide">
                    To become a global name in digital innovation — where every idea, brand, and business finds its digital voice through technology, design, and storytelling. We envision XSRS IT as a hub where creativity meets code, and ideas evolve into success stories.
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    Projects
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Completed
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    Clients
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Satisfied
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    Experience
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    Years
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
                    Support
                  </div>
                  <div className="text-sm text-gray-300 font-audiowide">
                    24/7
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="px-8 py-4 bg-[#00abf0] text-black font-bold rounded-lg shadow-lg hover:shadow-[#00abf0]/50 transition-all duration-300 font-audiowide text-sm hover:scale-105 border-2 border-[#00abf0] hover:bg-transparent hover:text-[#00abf0] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00abf0]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
