import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your specific business requirements.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Custom Applications", "API Development", "Database Design", "Performance Optimization"],
      technologies: ["React", "Node.js", "Python", "PostgreSQL"]
    },
    {
      title: "Web Development",
      description: "Responsive and interactive websites that provide exceptional user experiences across all devices.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Cross-browser Compatibility"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Native Performance", "Cross-platform", "Offline Support", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions to ensure your applications perform optimally.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      features: ["Auto-scaling", "Load Balancing", "Data Backup", "Security Monitoring"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
    }
  ];

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          }
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs"
          accentColor="text-[#00abf0]"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}