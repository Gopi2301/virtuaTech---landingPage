import { Badge } from "@/components/ui/badge";
import { Smartphone } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a scalable e-commerce solution handling 100K+ daily transactions",
    icon: "🛍️",
    achievements: [
      "100K+ daily transactions processed",
      "Advanced analytics and personalization",
      "99.9% uptime achieved",
      "50% increase in conversion rate"
    ],
    tags: ["React", "Node.js", "AWS", "MongoDB"],
    category: "Web Development",
  },
  {
    title: "Healthcare Mobile App",
    description: "HIPAA-compliant mobile application connecting patients with healthcare providers",
    icon: "🏥",
    achievements: [
      "HIPAA-compliant infrastructure",
      "Virtual consultations enabled",
      "10K+ active users",
      "4.8★ app store rating"
    ],
    tags: ["React Native", "Firebase", "HIPAA"],
    category: "Mobile Apps",
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial analytics platform processing millions of data points",
    icon: "💰",
    achievements: [
      "Millions of data points processed",
      "Real-time analytics visualization",
      "Advanced reporting system",
      "Enterprise-grade security"
    ],
    tags: ["Next.js", "Python", "PostgreSQL", "D3.js"],
    category: "Data Engineering",
  },
  {
    title: "IoT Management System",
    description: "Cloud-based IoT platform managing 50K+ connected devices",
    icon: "📡",
    achievements: [
      "50K+ devices managed",
      "Real-time monitoring dashboard",
      "Automated device workflows",
      "Predictive maintenance alerts"
    ],
    tags: ["Azure", "React", "MQTT", "TimescaleDB"],
    category: "Cloud Solutions",
  },
  {
    title: "Enterprise SaaS Platform",
    description: "Multi-tenant SaaS application serving 500+ organizations",
    icon: "💼",
    achievements: [
      "500+ organizations onboarded",
      "Role-based access control",
      "Advanced security features",
      "99.95% customer retention"
    ],
    tags: ["TypeScript", "GraphQL", "Kubernetes"],
    category: "Web Development",
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app with AI-powered workout recommendations",
    icon: "💪",
    achievements: [
      "AI-powered recommendations",
      "Social fitness features",
      "100K+ downloads",
      "Community of 50K+ users"
    ],
    tags: ["Flutter", "TensorFlow", "Firebase"],
    category: "Mobile Apps",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const currentProject = projects[selectedProject];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Side - Project Details */}
            <div className="space-y-8 animate-fade-in">
              {/* Category Badge */}
              <Badge variant="secondary" className="text-sm px-4 py-1">
                {currentProject.category}
              </Badge>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {currentProject.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentProject.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Key Achievements</h4>
                <div className="space-y-3">
                  {currentProject.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-base text-foreground/90">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - iPhone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[320px] h-[650px]">
                {/* iPhone Frame */}
                <div className="absolute inset-0 bg-foreground/90 rounded-[3.5rem] shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-foreground/90 rounded-b-3xl z-20"></div>
                  
                  {/* Inner Frame */}
                  <div className="absolute inset-[3px] bg-background rounded-[3.3rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="h-full bg-gradient-to-br from-background via-background to-muted/30 p-6 flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-[10px] text-foreground/60 pt-2 pb-6">
                        <span className="font-semibold">9:41</span>
                        <div className="flex gap-1 items-center">
                          <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                            <rect width="16" height="12" rx="2" opacity="0.3"/>
                            <rect width="14" height="8" x="1" y="2" rx="1"/>
                          </svg>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-fade-in">
                        {/* App Icon */}
                        <div className="w-24 h-24 rounded-3xl bg-gradient-primary flex items-center justify-center text-5xl shadow-elegant">
                          {currentProject.icon}
                        </div>

                        {/* App Name */}
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-foreground mb-1">
                            {currentProject.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {currentProject.category}
                          </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="w-full bg-card/50 backdrop-blur-sm rounded-2xl p-4 space-y-3 border border-border/50">
                          {currentProject.achievements.slice(0, 3).map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                              </div>
                              <span className="text-[11px] text-foreground/80 leading-tight">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {currentProject.tags.map((tag, index) => (
                            <span key={index} className="text-[10px] px-2 py-1 rounded-full bg-muted text-foreground/70">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-2">
                        <div className="w-32 h-1 bg-foreground/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute -left-[2px] top-24 w-[2px] h-8 bg-foreground/80 rounded-l"></div>
                  <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-foreground/80 rounded-l"></div>
                  <div className="absolute -left-[2px] top-52 w-[2px] h-14 bg-foreground/80 rounded-l"></div>
                  <div className="absolute -right-[2px] top-36 w-[2px] h-20 bg-foreground/80 rounded-r"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Switcher - App Icons */}
          <div className="flex justify-center gap-4 flex-wrap pt-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`group relative transition-all duration-300 ${
                  selectedProject === index 
                    ? 'scale-110' 
                    : 'scale-100 opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl shadow-lg transition-all duration-300 ${
                  selectedProject === index 
                    ? 'shadow-elegant ring-2 ring-primary ring-offset-2 ring-offset-background' 
                    : 'hover:shadow-xl'
                }`}>
                  {project.icon}
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
