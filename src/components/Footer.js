'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

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
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
      
      <footer className="relative bg-[#0a0a0a] border-t border-[#00abf0]/20 overflow-hidden py-16 md:py-20 max-w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden max-w-full">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-float"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 border-2 border-[#00abf0] rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#00abf0] rounded-full animate-bounce"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#00abf0] font-audiowide">
                  XSRS-IT
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-audiowide">
                  Where Digital Dreams Take Flight. Empowering startups and igniting innovation through cutting-edge technology solutions.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-[#00abf0] transition-colors duration-300 group">
                  <div className="w-2 h-2 bg-[#00abf0] rounded-full animate-pulse"></div>
                  <span className="text-sm font-audiowide">hello@xsrs-it.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-[#00abf0] transition-colors duration-300 group">
                  <div className="w-2 h-2 bg-[#00abf0] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm font-audiowide">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-[#00abf0] transition-colors duration-300 group">
                  <div className="w-2 h-2 bg-[#00abf0] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm font-audiowide">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-lg font-bold text-white font-audiowide">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { name: 'Home', sectionId: 'home' },
                  { name: 'About Us', sectionId: 'about' },
                  { name: 'Services', sectionId: 'services' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', sectionId: 'contact' }
                ].map((link, index) => (
                  link.href ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-300 hover:text-[#00abf0] transition-all duration-300 font-audiowide text-sm relative group hover:translate-x-2 w-full text-left"
                      style={{transitionDelay: `${index * 0.1}s`}}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-[#00abf0] group-hover:w-full transition-all duration-300 -translate-y-1/2"></div>
                    </a>
                  ) : (
                    <button
                      key={link.name}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="block text-gray-300 hover:text-[#00abf0] transition-all duration-300 font-audiowide text-sm relative group hover:translate-x-2 w-full text-left"
                      style={{transitionDelay: `${index * 0.1}s`}}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-[#00abf0] group-hover:w-full transition-all duration-300 -translate-y-1/2"></div>
                    </button>
                  )
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-lg font-bold text-white font-audiowide">
                Our Services
              </h4>
              <div className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'Cloud Solutions',
                  'AI Integration',
                  'Digital Marketing'
                ].map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#00abf0] transition-all duration-300 group cursor-pointer"
                    style={{transitionDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-1.5 h-1.5 bg-[#00abf0] rounded-full animate-pulse"></div>
                    <span className="text-sm font-audiowide group-hover:translate-x-1 transition-transform duration-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-lg font-bold text-white font-audiowide">
                Connect With Us
              </h4>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '𝕏', href: '#' },
                  { name: 'LinkedIn', icon: 'in', href: '#' },
                  { name: 'GitHub', icon: '⚡', href: '#' },
                  { name: 'Discord', icon: '💬', href: '#' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-black/30 border border-[#00abf0]/30 rounded-lg flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-black transition-all duration-300 font-audiowide text-xs hover:scale-110 hover:shadow-lg hover:shadow-[#00abf0]/30 relative group"
                    style={{transitionDelay: `${index * 0.1}s`}}
                    aria-label={social.name}
                  >
                    <span className="relative z-10">{social.icon}</span>
                    <div className="absolute inset-0 bg-[#00abf0]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-gray-300 text-sm font-audiowide">
                  Stay updated with our latest innovations
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-black/30 border border-[#00abf0]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00abf0] focus:ring-1 focus:ring-[#ff6600]/50 transition-all duration-300 font-audiowide text-xs"
                  />
                  <button className="px-4 py-2 bg-[#00abf0] text-black rounded-lg hover:bg-[#00abf0]/80 transition-all duration-300 font-audiowide text-xs hover:scale-105 relative overflow-hidden group">
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`mt-12 pt-8 border-t border-[#00abf0]/20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm font-audiowide">
                © {currentYear} XSRS-IT. All rights reserved.
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-[#00abf0] hover:text-white transition-all duration-300 font-audiowide text-sm group"
              >
                <div className="w-6 h-6 border border-[#00abf0] rotate-45 group-hover:bg-[#00abf0] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00abf0] rotate-45 group-hover:bg-black transition-colors duration-300"></div>
                </div>
              </button>

              {/* Legal Links */}
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-[#00abf0] transition-colors duration-300 font-audiowide text-xs hover:underline"
                    style={{transitionDelay: `${index * 0.1}s`}}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
