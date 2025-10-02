'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import CustomCursor from '../../components/CustomCursor';
import BackgroundEffects from '../../components/BackgroundEffects';
import CEOSection from '../../components/CEOSection';
import Footer from '../../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment gateways, automated order processing, and advanced analytics for business insights.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      status: "Completed",
      year: "2024",
      duration: "6 months",
      client: "TechCorp Solutions",
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Real-time Analytics", "Mobile Responsive"],
      results: ["300% increase in sales", "50% reduction in order processing time", "99.9% uptime achieved"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      longDescription: "A cutting-edge mobile banking application designed for security and user experience. Features include biometric authentication, real-time transaction monitoring, AI-powered fraud detection, and seamless integration with existing banking systems.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Node.js", "AWS", "Biometric Auth", "Blockchain"],
      status: "Completed",
      year: "2024",
      duration: "8 months",
      client: "SecureBank Ltd",
      features: ["Biometric Authentication", "Real-time Monitoring", "Fraud Detection", "Multi-currency Support", "Offline Capability"],
      results: ["40% increase in user engagement", "Zero security breaches", "4.8/5 app store rating"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      category: "AI/ML",
      description: "Machine learning platform for business intelligence with predictive analytics and data visualization.",
      longDescription: "An advanced AI-powered analytics platform that transforms raw data into actionable business insights. Features machine learning algorithms for predictive analytics, automated report generation, and interactive data visualization dashboards.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "Kubernetes"],
      status: "In Progress",
      year: "2024",
      duration: "10 months",
      client: "DataInsight Corp",
      features: ["Predictive Analytics", "Automated Reports", "Data Visualization", "Real-time Processing", "API Integration"],
      results: ["85% accuracy in predictions", "60% reduction in manual reporting", "Real-time insights delivery"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup with automated deployment and monitoring systems.",
      longDescription: "A robust cloud infrastructure solution designed for scalability and reliability. Features automated deployment pipelines, comprehensive monitoring systems, auto-scaling capabilities, and disaster recovery protocols.",
      image: "/api/placeholder/400/300",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      status: "Completed",
      year: "2023",
      duration: "4 months",
      client: "CloudTech Enterprises",
      features: ["Auto-scaling", "Automated Deployment", "Monitoring & Alerting", "Disaster Recovery", "Cost Optimization"],
      results: ["99.99% uptime", "50% cost reduction", "3x faster deployments"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Digital Marketing Platform",
      category: "Web Development",
      description: "Comprehensive marketing automation platform with campaign management and analytics.",
      longDescription: "A comprehensive digital marketing platform that streamlines campaign management, automates customer journeys, and provides detailed analytics. Features include email marketing, social media management, lead scoring, and ROI tracking.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch", "WebSocket"],
      status: "Completed",
      year: "2023",
      duration: "7 months",
      client: "MarketingPro Inc",
      features: ["Campaign Management", "Email Automation", "Social Media Integration", "Lead Scoring", "ROI Analytics"],
      results: ["200% increase in lead conversion", "35% improvement in campaign ROI", "50% reduction in manual tasks"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      category: "IoT Development",
      description: "Connected home automation system with mobile app control and voice integration.",
      longDescription: "An innovative IoT smart home system that connects and controls various home devices through a unified platform. Features include voice control, mobile app management, energy monitoring, and security integration.",
      image: "/api/placeholder/400/300",
      technologies: ["Arduino", "React Native", "MQTT", "Node.js", "Raspberry Pi", "AWS IoT"],
      status: "Completed",
      year: "2023",
      duration: "5 months",
      client: "SmartHome Solutions",
      features: ["Voice Control", "Mobile App", "Energy Monitoring", "Security Integration", "Remote Access"],
      results: ["30% energy savings", "95% user satisfaction", "Zero security incidents"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'Cloud Solutions', 'IoT Development'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <style jsx global>{`
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Ensure clickable elements are still functional */
        a, button, input, textarea, [role="button"], [onclick] {
          cursor: none !important;
        }
        
        /* Ensure sticky navbar works properly */
        nav {
          position: sticky !important;
          top: 0 !important;
          z-index: 50 !important;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Font family definitions */
        .font-audiowide {
          font-family: var(--font-audiowide), sans-serif;
        }
        
        .font-space-mono {
          font-family: var(--font-space-mono), monospace;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 102, 0, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.6), 0 0 30px rgba(255, 102, 0, 0.4); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white relative">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Navigation */}
        <Navigation />

        {/* Portfolio Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-[#ff6600] font-audiowide text-sm uppercase tracking-wider">
                Our Portfolio
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white font-audiowide leading-tight">
                Digital Solutions That
                <span className="text-[#ff6600] block">Drive Success</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed font-audiowide max-w-3xl mx-auto">
                Explore our portfolio of innovative projects that showcase our expertise in web development, 
                mobile apps, AI solutions, and cloud infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <CEOSection />

        {/* Category Filter */}
        <section className="relative z-10 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-audiowide text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#ff6600] text-black hover:bg-[#ff6600]/80'
                      : 'bg-black/30 text-white hover:bg-[#ff6600] hover:text-black border border-[#ff6600]/30'
                  }`}
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative z-10 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Projects Stats */}
            <div className={`mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                  {filteredProjects.length}
                </div>
                <div className="text-sm text-gray-300 font-audiowide">
                  Projects
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                  {filteredProjects.filter(p => p.status === 'Completed').length}
                </div>
                <div className="text-sm text-gray-300 font-audiowide">
                  Completed
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                  6+
                </div>
                <div className="text-sm text-gray-300 font-audiowide">
                  Technologies
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#ff6600] font-audiowide">
                  100%
                </div>
                <div className="text-sm text-gray-300 font-audiowide">
                  Success Rate
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-[#ff6600]/30 overflow-hidden hover:border-[#ff6600]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  {/* Project Image */}
                  <div className="relative h-56 bg-gradient-to-br from-[#ff6600]/20 to-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center mx-auto animate-pulse">
                          <span className="text-3xl">🚀</span>
                        </div>
                        <div className="text-[#ff6600] font-audiowide text-sm">
                          {project.category}
                        </div>
                        <div className="text-white font-audiowide text-xs">
                          {project.client}
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-audiowide ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#ff6600]/20 text-[#ff6600] text-xs rounded-full font-audiowide border border-[#ff6600]/30">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white font-audiowide group-hover:text-[#ff6600] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-audiowide">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <div className="text-[#ff6600] text-xs font-audiowide uppercase tracking-wider">
                        Key Features
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-[#ff6600]/10 text-[#ff6600] text-xs rounded font-audiowide border border-[#ff6600]/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded font-audiowide border border-gray-500/30">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <div className="text-[#ff6600] text-xs font-audiowide uppercase tracking-wider">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#ff6600]/10 text-[#ff6600] text-xs rounded font-audiowide border border-[#ff6600]/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded font-audiowide border border-gray-500/30">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Results Preview */}
                    <div className="space-y-2">
                      <div className="text-[#ff6600] text-xs font-audiowide uppercase tracking-wider">
                        Key Results
                      </div>
                      <div className="text-gray-300 text-xs font-audiowide">
                        {project.results[0]}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-[#ff6600]/20">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          className="px-3 py-1 bg-[#ff6600] text-black text-xs rounded font-audiowide hover:bg-[#ff6600]/80 transition-colors duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="px-3 py-1 bg-transparent text-[#ff6600] text-xs rounded border border-[#ff6600] font-audiowide hover:bg-[#ff6600] hover:text-black transition-colors duration-300"
                        >
                          GitHub
                        </a>
                      </div>
                      <span className="text-gray-400 text-xs font-audiowide">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-audiowide">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-300 font-audiowide">
                Let's discuss how we can bring your digital vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#ff6600] text-black font-bold rounded-lg shadow-lg hover:shadow-[#ff6600]/50 transition-all duration-300 font-audiowide text-sm hover:scale-105 border-2 border-[#ff6600] hover:bg-transparent hover:text-[#ff6600] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#ff6600]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="relative z-10">Get Started</span>
                </button>
                <a
                  href="/projects"
                  className="px-8 py-4 bg-transparent text-[#ff6600] font-bold rounded-lg border-2 border-[#ff6600] hover:bg-[#ff6600] hover:text-black transition-all duration-300 font-audiowide text-sm hover:scale-105"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
