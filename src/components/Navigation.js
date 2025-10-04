'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <style jsx>{`
        .sticky-nav {
          position: sticky !important;
          top: 0 !important;
          z-index: 50 !important;
        }
      `}</style>
      {/* Navigation */}
      <nav className={`sticky-nav flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-5 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#00abf0]/40 shadow-lg shadow-[#00abf0]/10' 
          : 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#00abf0]/20'
      }`}>
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center justify-center space-x-6 lg:space-x-8 backdrop-blur-sm rounded-full px-6 lg:px-8 py-3 lg:py-4 border transition-all duration-300 hover:shadow-lg hover:shadow-[#00abf0]/20 ${
          isScrolled 
            ? 'bg-black/40 border-[#00abf0]/50 hover:border-[#00abf0]/70 hover:bg-black/50' 
            : 'bg-black/20 border-[#00abf0]/30 hover:border-[#00abf0]/60 hover:bg-black/30'
        }`}>
          <Link 
            href="/"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
          <Link 
            href="/#services"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
          <Link 
            href="/portfolio"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Portfolio</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
          <Link 
            href="/projects"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Projects</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
          <Link 
            href="/#about"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">About us</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
          <Link 
            href="/#contact"
            className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-xs lg:text-sm relative group hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]"
          >
            <span className="relative z-10">Contact us</span>
            <div className="absolute inset-0 bg-[#00abf0]/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
        </div>
        
        {/* Enhanced Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className={`md:hidden text-white hover:text-[#00abf0] transition-all duration-300 p-3 rounded-lg hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.6)] relative ${
            isScrolled 
              ? 'bg-black/30 border border-[#00abf0]/30 hover:bg-[#00abf0]/20' 
              : 'hover:bg-[#00abf0]/10'
          }`}
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
          <div className={`absolute inset-0 rounded-lg bg-[#00abf0]/20 scale-0 transition-all duration-300 ${
            isMobileMenuOpen ? 'scale-100' : ''
          }`}></div>
        </button>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm animate-fade-in">
          {/* Mobile Menu Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#00abf0] rounded-full animate-ping"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            {/* Menu Items with Staggered Animation */}
            <Link 
              href="/"
              className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.1s'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </Link>
             <Link 
               href="/#services"
               className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
               style={{animationDelay: '0.2s'}}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <span className="relative z-10">Services</span>
               <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
             </Link>
             <Link 
               href="/portfolio"
               className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
               style={{animationDelay: '0.3s'}}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <span className="relative z-10">Portfolio</span>
               <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
             </Link>
             <Link 
               href="/projects"
               className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
               style={{animationDelay: '0.4s'}}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <span className="relative z-10">Projects</span>
               <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
             </Link>
             <Link 
               href="/#about"
               className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
               style={{animationDelay: '0.5s'}}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <span className="relative z-10">About us</span>
               <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
             </Link>
             <Link 
               href="/#contact"
               className="text-white hover:text-[#00abf0] transition-all duration-300 font-space-mono text-lg relative group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] px-6 py-3 rounded-lg hover:bg-[#00abf0]/10 transform translate-y-4 opacity-0 animate-fade-in"
               style={{animationDelay: '0.6s'}}
               onClick={() => setIsMobileMenuOpen(false)}
             >
               <span className="relative z-10">Contact us</span>
               <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
             </Link>
            
            {/* Enhanced Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 text-[#00abf0] hover:text-white transition-all duration-300 p-4 rounded-lg hover:bg-[#00abf0]/10 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,102,0,0.8)] relative group transform translate-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '0.6s'}}
              aria-label="Close mobile menu"
            >
              {/* Animated Close Icon */}
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="block w-6 h-0.5 bg-current rotate-45 absolute transition-transform duration-300 group-hover:scale-110"></span>
                <span className="block w-6 h-0.5 bg-current -rotate-45 absolute transition-transform duration-300 group-hover:scale-110"></span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-[#00abf0]/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
