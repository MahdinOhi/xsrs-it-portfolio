'use client';

import { useState } from 'react';

export default function ServiceCard({ 
  service, 
  index,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-black/20 backdrop-blur-sm rounded-2xl border border-[#00abf0]/20 p-6 sm:p-8 hover:border-[#00abf0]/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#00abf0]/20 ${
        className
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Icon */}
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#00abf0]/10 rounded-2xl mb-6 border border-[#00abf0]/30 group-hover:bg-[#00abf0]/20 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Service Content */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-audiowide group-hover:text-[#00abf0] transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Service Features */}
        {service.features && (
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-[#00abf0] rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        )}

        {/* Service Technologies */}
        {service.technologies && (
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30"
              >
                {tech}
              </span>
            ))}
            {service.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-audiowide rounded border border-gray-600/30">
                +{service.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#00abf0]/5 to-transparent rounded-2xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
}
