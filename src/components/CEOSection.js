'use client';

import { useState, useEffect } from 'react';

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
      
      <section className="relative py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff6600] rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-[#ff6600] rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#ff6600] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 border-2 border-[#ff6600] rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-[#ff6600] font-audiowide text-sm uppercase tracking-wider mb-4">
              Leadership Team
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-audiowide leading-tight mb-6">
              Meet Our
              <span className="text-[#ff6600] block">Executive Team</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-audiowide max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              innovation, and business excellence to drive XSRS-IT forward.
            </p>
          </div>

          {/* CEO Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ceoMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-[#ff6600]/30 overflow-hidden hover:border-[#ff6600]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                
                {/* Member Photo */}
                <div className="relative h-64 bg-gradient-to-br from-[#ff6600]/20 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <span className="text-3xl font-bold text-black font-audiowide">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-[#ff6600] font-audiowide text-sm">
                        {member.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff6600] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#ff6600]/50 rounded-full animate-pulse"></div>
                </div>

                {/* Member Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Name and Position */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-audiowide group-hover:text-[#ff6600] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#ff6600] text-sm font-audiowide">
                      {member.position}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-audiowide">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="space-y-2">
                    <div className="text-[#ff6600] text-xs font-audiowide uppercase tracking-wider">
                      Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-[#ff6600]/10 text-[#ff6600] text-xs rounded font-audiowide border border-[#ff6600]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-[#ff6600]/20">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-black/30 border border-[#ff6600]/30 rounded-lg flex items-center justify-center text-[#ff6600] hover:bg-[#ff6600] hover:text-black transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-black/30 border border-[#ff6600]/30 rounded-lg flex items-center justify-center text-[#ff6600] hover:bg-[#ff6600] hover:text-black transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} Twitter`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                40+
              </div>
              <div className="text-sm text-gray-300 font-audiowide">
                Years Combined Experience
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                4
              </div>
              <div className="text-sm text-gray-300 font-audiowide">
                Executive Leaders
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                15+
              </div>
              <div className="text-sm text-gray-300 font-audiowide">
                Specializations
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                100%
              </div>
              <div className="text-sm text-gray-300 font-audiowide">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
