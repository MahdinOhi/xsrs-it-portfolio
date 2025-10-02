'use client';

import { useState, useEffect } from 'react';

export default function GenericHeroSection({ 
  title,
  subtitle,
  description,
  accentText,
  accentColor = "text-[#00abf0]",
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative z-10 pt-20 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className={`space-y-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`${accentColor} font-audiowide text-sm uppercase tracking-wider`}>
            {subtitle}
          </div>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white font-audiowide leading-tight">
            {title}
            {accentText && (
              <span className={`block ${accentColor}`}>
                {accentText}
              </span>
            )}
          </h1>
          {description && (
            <p className="text-lg lg:text-xl text-gray-300 font-audiowide max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
