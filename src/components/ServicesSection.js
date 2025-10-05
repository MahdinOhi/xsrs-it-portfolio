import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description: "Scalable, reliable, and custom-built software tailored for your business needs.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      programming: ["C++", "Java", "Python", "Node.js"],
      frameworks: [".NET", "Spring Boot", "Django"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      cloud: ["AWS", "Azure"],
      tags: ["API.json", "main.cpp", "app.jar", "schema.sql", "config.yaml"]
    },
    {
      title: "Website Development",
      description: "Engaging websites that are fast, secure, and designed to convert.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
      backend: ["PHP", "Laravel", "Node.js"],
      cms: ["WordPress", "Webflow"],
      hosting: ["SSL", "CDN", "Cloudflare"],
      tags: ["index.html", "style.css", "app.js", "functions.php", "server.conf"]
    },
    {
      title: "App Development",
      description: "High-performance mobile apps built for both Android and iOS.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      native: ["Kotlin", "Swift"],
      crossPlatform: ["Flutter", "React Native"],
      apis: ["REST", "GraphQL", "Firebase"],
      testing: ["Appium", "Selenium"],
      tags: ["MainActivity.kt", "App.swift", "pubspec.yaml", "package.json", "google-services.json"]
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Optimizing your digital presence to rank higher and reach further.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      onPage: ["Keyword Research", "Content Optimization", "Meta Tags"],
      offPage: ["Backlinking", "Guest Posting"],
      tools: ["Google Analytics", "SEMrush", "Ahrefs"],
      technical: ["Site Speed", "Mobile Optimization"],
      tags: ["sitemap.xml", "robots.txt", "analytics.js", "meta.json", "keywords.csv"]
    },
    {
      title: "UI/UX Design",
      description: "Human-centered designs that enhance user experiences and brand identity.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      tools: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
      methods: ["Wireframing", "Prototyping", "Usability Testing"],
      designSystems: ["Material UI", "TailwindCSS"],
      approach: ["Minimal", "Clean", "Intuitive"],
      tags: ["wireframe.fig", "mockup.psd", "prototype.xd", "logo.ai", "styleguide.pdf"]
    },
    {
      title: "Video Production",
      description: "Compelling video content that tells your story and engages audiences.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#00abf0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      editing: ["Adobe Premiere Pro", "Final Cut Pro"],
      motionGraphics: ["After Effects", "Blender"],
      types: ["Explainer Videos", "Ads", "Corporate Films"],
      addons: ["Scriptwriting", "Voiceovers", "Animation"],
      tags: ["final_cut.mov", "project.aep", "render.mp4", "animation.blend", "storyboard.pdf"]
    }
  ];

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] overflow-x-hidden w-full">
      <div className="content-container">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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