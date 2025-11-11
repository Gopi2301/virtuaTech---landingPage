import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Smartphone, CheckCircle2, Users, Gauge, Award, Code, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from '@/utils/scrollToContact';
import { Badge } from "@/components/ui/badge";
import healthcareAppImg from "@/assets/projects/healthcare-app.jpg";
import fitnessAppImg from "@/assets/projects/fitness-app.jpg";
import deliveryAppImg from "@/assets/projects/delivery-app.jpg";
import mobileAppsCoverImg from "@/assets/covers/mobile-apps-cover.jpg";

const MobileApps = () => {
  const projects = [
    {
      title: "Healthcare Patient App",
      description: "HIPAA-compliant telemedicine platform",
      metrics: ["100K+ downloads", "4.9★ rating", "99% appointment completion"],
      tags: ["React Native", "AWS", "HIPAA"],
      image: healthcareAppImg,
    },
    {
      title: "Fitness Tracking App",
      description: "AI-powered workout and nutrition companion",
      metrics: ["500K+ active users", "10M+ workouts tracked", "Featured by Apple"],
      tags: ["Swift", "ML Kit", "HealthKit"],
      image: fitnessAppImg,
    },
    {
      title: "Delivery Service App",
      description: "Real-time logistics and driver management",
      metrics: ["50K+ deliveries/day", "5min avg delivery time", "GPS tracking"],
      tags: ["Flutter", "Google Maps", "Firebase"],
      image: deliveryAppImg,
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Founder, HealthCare Plus",
      content: "The mobile app they built is exceptional. HIPAA-compliant, user-friendly, and patients love it!",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Sarah Martinez",
      role: "CEO, FitLife",
      content: "Our fitness app reached 500K users in 6 months. The AI features are game-changing.",
      rating: 5,
      initials: "SM",
    },
    {
      name: "Alex Turner",
      role: "Operations Director, QuickDeliver",
      content: "The logistics app streamlined our entire operation. Real-time tracking is flawless.",
      rating: 5,
      initials: "AT",
    },
  ];

  const features = [
    "iOS Development",
    "Android Development",
    "Cross-Platform Solutions",
    "App Store Optimization",
    "Push Notifications",
    "Offline Functionality",
  ];

  const technologies = [
    { name: "React Native", icon: Code },
    { name: "Flutter", icon: Code },
    { name: "Swift", icon: Code },
    { name: "Kotlin", icon: Code },
    { name: "Firebase", icon: Database },
    { name: "GraphQL", icon: Database },
    { name: "AWS Amplify", icon: Cloud },
    { name: "Expo", icon: Smartphone },
  ];

  const benefits = [
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for maximum engagement and user satisfaction.",
    },
    {
      icon: Gauge,
      title: "High Performance",
      description: "Optimized apps with smooth animations and lightning-fast load times.",
    },
    {
      icon: Award,
      title: "App Store Success",
      description: "Proven track record of apps featured and highly rated on iOS and Android.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={mobileAppsCoverImg} alt="Mobile Apps" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Mobile <span className="bg-gradient-primary bg-clip-text text-transparent">Apps</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.
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
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Development Services</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mobile Development</h2>
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
        <ServiceContactForm serviceName="Mobile App Development services" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default MobileApps;
