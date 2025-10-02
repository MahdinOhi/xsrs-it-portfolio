'use client';

import { useState } from 'react';

export default function CEOCard({ 
  member, 
  index, 
  isVisible,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-[#00abf0]/30 overflow-hidden hover:border-[#00abf0]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#00abf0]/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CEO Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Social Links */}
        <div className={`absolute bottom-4 right-4 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* CEO Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white font-audiowide mb-2 group-hover:text-[#00abf0] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#00abf0] font-audiowide text-sm mb-3">
          {member.position}
        </p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {member.description}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {member.expertise.slice(0, 2).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30"
            >
              {skill}
            </span>
          ))}
          {member.expertise.length > 2 && (
            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-audiowide rounded border border-gray-600/30">
              +{member.expertise.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
