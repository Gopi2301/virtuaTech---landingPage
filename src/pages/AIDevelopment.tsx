import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Brain, CheckCircle2, Target, Zap, Shield, Code, Database, Cloud, Cpu } from "lucide-react";
import { scrollToContact } from '@/utils/scrollToContact';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import aiAnalyticsImg from "@/assets/projects/ai-analytics.jpg";
import nlpChatbotImg from "@/assets/projects/nlp-chatbot.jpg";
import computerVisionImg from "@/assets/projects/computer-vision.jpg";
import aiCoverImg from "@/assets/covers/ai-development-cover.jpg";

const AIDevelopment = () => {
  const projects = [
    {
      title: "Predictive Analytics Platform",
      description: "AI-powered forecasting system for a Fortune 500 retailer",
      metrics: ["40% cost reduction", "95% prediction accuracy", "Real-time insights"],
      tags: ["TensorFlow", "Python", "AWS"],
      image: aiAnalyticsImg,
    },
    {
      title: "NLP Customer Support",
      description: "Intelligent chatbot handling 10K+ daily conversations",
      metrics: ["85% automation rate", "2min avg response time", "90% satisfaction"],
      tags: ["GPT-4", "Node.js", "MongoDB"],
      image: nlpChatbotImg,
    },
    {
      title: "Computer Vision QA",
      description: "Automated quality inspection for manufacturing",
      metrics: ["99.5% defect detection", "60% faster inspection", "Zero false negatives"],
      tags: ["PyTorch", "OpenCV", "Docker"],
      image: computerVisionImg,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Their AI development expertise helped us reduce operational costs by 40% while improving accuracy. Truly transformative!",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      content: "The predictive analytics platform they built processes millions of data points daily with incredible accuracy.",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "VP Innovation, RetailCorp",
      content: "Outstanding AI implementation. The computer vision system caught defects our human inspectors missed.",
      rating: 5,
      initials: "ER",
    },
  ];

  const features = [
    "Machine Learning Model Development",
    "Natural Language Processing",
    "Computer Vision Solutions",
    "Predictive Analytics",
    "AI-Powered Automation",
    "Custom AI Integration",
  ];

  const technologies = [
    { name: "TensorFlow", icon: Code },
    { name: "PyTorch", icon: Cpu },
    { name: "Python", icon: Code },
    { name: "AWS SageMaker", icon: Cloud },
    { name: "Azure AI", icon: Cloud },
    { name: "OpenCV", icon: Brain },
    { name: "Scikit-learn", icon: Database },
    { name: "Keras", icon: Cpu },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precision AI Models",
      description: "Custom machine learning models trained specifically for your business needs with industry-leading accuracy.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Rapid deployment of AI solutions with proven frameworks and accelerated time-to-value.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards protecting your sensitive data and AI models.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={aiCoverImg} alt="AI Development" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Brain className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                AI <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Cutting-edge AI and machine learning solutions to automate processes and unlock intelligent insights from your data.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our AI Capabilities</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Services</h2>
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
        <ServiceContactForm serviceName="AI Development services" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default AIDevelopment;
