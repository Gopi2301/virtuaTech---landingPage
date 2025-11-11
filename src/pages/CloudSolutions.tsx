import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Cloud, CheckCircle2, DollarSign, TrendingUp, Globe, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from '@/utils/scrollToContact';
import { Badge } from "@/components/ui/badge";
import cloudMigrationImg from "@/assets/projects/cloud-migration.jpg";
import serverlessPlatformImg from "@/assets/projects/serverless-platform.jpg";
import multiRegionImg from "@/assets/projects/multi-region.jpg";
import cloudCoverImg from "@/assets/covers/cloud-solutions-cover.jpg";

const CloudSolutions = () => {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description: "Migrated legacy infrastructure to AWS for a global retailer",
      metrics: ["45% cost reduction", "99.99% uptime", "Zero downtime migration"],
      tags: ["AWS", "Kubernetes", "Terraform"],
      image: cloudMigrationImg,
    },
    {
      title: "Auto-Scaling Platform",
      description: "Serverless architecture handling traffic spikes",
      metrics: ["10x traffic capacity", "80% cost savings", "Sub-100ms response"],
      tags: ["Lambda", "API Gateway", "DynamoDB"],
      image: serverlessPlatformImg,
    },
    {
      title: "Multi-Region Deployment",
      description: "Global CDN and disaster recovery solution",
      metrics: ["5 continents", "< 50ms latency", "Automatic failover"],
      tags: ["CloudFront", "Route53", "S3"],
      image: multiRegionImg,
    },
  ];

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "CTO, GlobalCorp",
      content: "The cloud migration was seamless. We're now saving 45% on infrastructure costs with better performance.",
      rating: 5,
      initials: "ER",
    },
    {
      name: "Robert Kim",
      role: "VP Engineering, ScaleUp",
      content: "Their serverless architecture handled Black Friday traffic flawlessly. 10x our normal capacity!",
      rating: 5,
      initials: "RK",
    },
    {
      name: "Jennifer Lee",
      role: "Director IT, TechGlobal",
      content: "Multi-region deployment with automatic failover. Our users worldwide experience blazing fast speeds.",
      rating: 5,
      initials: "JL",
    },
  ];

  const features = [
    "AWS & Azure Integration",
    "Cloud Migration Services",
    "Serverless Architecture",
    "Auto-Scaling Infrastructure",
    "Disaster Recovery",
    "Cloud Security",
  ];

  const technologies = [
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "Google Cloud", icon: Cloud },
    { name: "Docker", icon: Server },
    { name: "Kubernetes", icon: Server },
    { name: "Terraform", icon: Server },
    { name: "Lambda", icon: Cloud },
    { name: "CloudFormation", icon: Database },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Pay only for what you use with optimized cloud resources and automated scaling.",
    },
    {
      icon: TrendingUp,
      title: "High Availability",
      description: "99.9% uptime with redundant systems and automatic failover capabilities.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy your applications across multiple regions for minimal latency worldwide.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={cloudCoverImg} alt="Cloud Solutions" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Cloud className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Cloud <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.
              </p>
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12">Cloud Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Badge key={index} variant="secondary" className="text-base py-3 px-6 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tech.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Cloud Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceProjects projects={projects} />
        <ServiceTestimonials testimonials={testimonials} />
        <ServiceContactForm serviceName="Cloud Solutions" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default CloudSolutions;
