'use client';

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, input, textarea, [role="button"], nav a, nav button') ||
                           target.closest('a, button, input, textarea, [role="button"], nav a, nav button');
      setIsHovering(isInteractive);
      
      // Debug logging for navbar elements
      if (target.closest('nav')) {
        console.log('Hovering over navbar element:', target.tagName, target.className);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 102, 0, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.8), 0 0 30px rgba(255, 102, 0, 0.6); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .cursor-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .cursor-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .cursor-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
      
      {/* Main Cursor Circle */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 border-[#ff6600] bg-[#ff6600]/30 backdrop-blur-sm transition-all duration-300 ${
            isHovering 
              ? 'scale-150 bg-[#ff6600]/50 border-[#ff6600] cursor-pulse cursor-glow' 
              : 'scale-100'
          }`}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#ff6600]/40 animate-ping"></div>
        </div>
      </div>

      {/* Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-16 h-16 rounded-full border-2 border-[#ff6600]/50 transition-all duration-500 ${
            isHovering 
              ? 'scale-200 border-[#ff6600]/80 animate-pulse' 
              : 'scale-100'
          }`}
        >
          {/* Rotating border effect */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ff6600]/50 animate-spin"></div>
        </div>
      </div>

      {/* Trailing particles */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Particle 1 */}
        <div 
          className={`absolute w-1 h-1 bg-[#ff6600] rounded-full transition-all duration-1000 ${
            isHovering ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{
            left: -20,
            top: -10,
            animationDelay: '0s'
          }}
        ></div>
        
        {/* Particle 2 */}
        <div 
          className={`absolute w-1.5 h-1.5 bg-[#ff6600]/60 rounded-full transition-all duration-1200 ${
            isHovering ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{
            left: 15,
            top: -15,
            animationDelay: '0.3s'
          }}
        ></div>
        
        {/* Particle 3 */}
        <div 
          className={`absolute w-0.5 h-0.5 bg-[#ff6600]/40 rounded-full transition-all duration-800 ${
            isHovering ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{
            left: -10,
            top: 15,
            animationDelay: '0.6s'
          }}
        ></div>
      </div>

      {/* Click ripple effect */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#ff6600] cursor-ripple"></div>
        </div>
      )}
    </>
  );
}
