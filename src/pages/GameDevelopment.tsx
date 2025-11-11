import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Code2, CheckCircle2, Layers, Rocket, Lock, Database, Cloud, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from '@/utils/scrollToContact';
import { Badge } from "@/components/ui/badge";
import saasPlatformImg from "@/assets/projects/saas-platform.jpg";
import financialDashboardImg from "@/assets/projects/financial-dashboard.jpg";
import collaborationAppImg from "@/assets/projects/collaboration-app.jpg";
import gameDevCoverImg from "@/assets/covers/game-development-cover.jpg";

const GameDevelopment = () => {
  const projects = [
    {
      title: "Multiplayer Battle Royale",
      description: "Fast-paced 100-player BR game with cross-platform support",
      metrics: ["10M+ downloads", "50K concurrent players", "99% uptime"],
      tags: ["Unity", "Photon", "C#"],
      image: saasPlatformImg,
    },
    {
      title: "Open-World RPG",
      description: "Immersive fantasy RPG with procedural world generation",
      metrics: ["200+ hours gameplay", "4.9★ rating", "Multiple platforms"],
      tags: ["Unreal Engine", "C++", "Blueprints"],
      image: financialDashboardImg,
    },
    {
      title: "Mobile Puzzle Game",
      description: "Addictive puzzle mechanics with social features",
      metrics: ["5M+ installs", "Top 10 charts", "Daily tournaments"],
      tags: ["Unity", "Firebase", "AdMob"],
      image: collaborationAppImg,
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CEO, GameStudio Pro",
      content: "They built our multiplayer engine from scratch. Now hosting 50K concurrent players with zero lag.",
      rating: 5,
      initials: "AC",
    },
    {
      name: "Maria Rodriguez",
      role: "Creative Director, FantasyWorlds",
      content: "The RPG they developed exceeded all expectations. Players can't stop exploring the vast open world.",
      rating: 5,
      initials: "MR",
    },
    {
      name: "Tom Williams",
      role: "Founder, PuzzlePlay Games",
      content: "Our mobile game hit top 10 charts thanks to their excellent optimization and game mechanics.",
      rating: 5,
      initials: "TW",
    },
  ];

  const features = [
    "Unity & Unreal Engine",
    "Multiplayer Networking",
    "Cross-Platform Development",
    "Game Physics & AI",
    "Performance Optimization",
    "Live Operations",
  ];

  const technologies = [
    { name: "Unity", icon: Gamepad2 },
    { name: "Unreal Engine", icon: Gamepad2 },
    { name: "C#", icon: Code2 },
    { name: "C++", icon: Code2 },
    { name: "Photon", icon: Cloud },
    { name: "PlayFab", icon: Cloud },
    { name: "Firebase", icon: Database },
    { name: "Blender", icon: Layers },
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Cutting-Edge Graphics",
      description: "Stunning visuals powered by the latest rendering techniques and game engines.",
    },
    {
      icon: Rocket,
      title: "Optimized Performance",
      description: "Smooth 60+ FPS gameplay across all target platforms with minimal loading times.",
    },
    {
      icon: Lock,
      title: "Anti-Cheat & Security",
      description: "Robust anti-cheat systems and secure networking to ensure fair gameplay.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={gameDevCoverImg} alt="Game Development" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Gamepad2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Game <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Immersive gaming experiences built with cutting-edge engines and technologies for PC, console, and mobile platforms.
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
            <h2 className="text-3xl font-bold text-center mb-12">Game Development Expertise</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Game Development</h2>
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
        <ServiceContactForm serviceName="Game Development services" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default GameDevelopment;
