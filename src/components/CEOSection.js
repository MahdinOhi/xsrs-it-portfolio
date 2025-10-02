'use client';

import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import CEOCard from './CEOCard';

export default function CEOSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ceoMembers = [
    {
      id: 1,
      name: "Ashraf",
      position: "Chief Executive Officer",
      description: "Visionary leader with 10+ years of experience in technology innovation and business strategy.",
      image: "/api/placeholder/300/300",
      expertise: ["Strategic Planning", "Business Development", "Technology Leadership"],
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Zabir",
      position: "Chief Technology Officer",
      description: "Technical architect with expertise in cloud solutions and scalable system design.",
      image: "/api/placeholder/300/300",
      expertise: ["Cloud Architecture", "System Design", "DevOps"],
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Shourov",
      position: "Chief Innovation Officer",
      description: "Innovation catalyst driving digital transformation and cutting-edge technology adoption.",
      image: "/api/placeholder/300/300",
      expertise: ["Digital Innovation", "AI/ML", "Product Development"],
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Fame",
      position: "Chief Operations Officer",
      description: "Operations excellence leader ensuring seamless project delivery and client satisfaction.",
      image: "/api/placeholder/300/300",
      expertise: ["Operations Management", "Project Delivery", "Client Relations"],
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 171, 240, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 171, 240, 0.6), 0 0 30px rgba(240, 90, 40, 0.4); }
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
      
      <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00abf0] rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#00abf0] rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 border border-[#00abf0] rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#00abf0] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="Meet Our Leadership Team"
            subtitle="Our experienced leadership team brings together decades of expertise in technology, innovation, and business excellence to drive XSRS-IT forward."
            accentColor="text-[#00abf0]"
          />

          {/* CEO Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {ceoMembers.map((member, index) => (
              <CEOCard
                key={member.id}
                member={member}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}