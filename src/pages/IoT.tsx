import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Radio, CheckCircle2, Network, BarChart3, Cog, Cloud, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from '@/utils/scrollToContact';
import { Badge } from "@/components/ui/badge";
import smartBuildingImg from "@/assets/projects/smart-building.jpg";
import predictiveMaintenanceImg from "@/assets/projects/predictive-maintenance.jpg";
import fleetTrackingImg from "@/assets/projects/fleet-tracking.jpg";
import iotCoverImg from "@/assets/covers/iot-cover.jpg";

const IoT = () => {
  const projects = [
    {
      title: "Smart Building System",
      description: "IoT platform managing 500+ commercial properties",
      metrics: ["30% energy savings", "50K+ connected devices", "Real-time monitoring"],
      tags: ["MQTT", "AWS IoT", "LoRaWAN"],
      image: smartBuildingImg,
    },
    {
      title: "Industrial Predictive Maintenance",
      description: "Sensor network preventing equipment failures",
      metrics: ["75% downtime reduction", "1000+ sensors", "AI-powered alerts"],
      tags: ["Azure IoT", "TensorFlow", "Edge Computing"],
      image: predictiveMaintenanceImg,
    },
    {
      title: "Fleet Tracking Solution",
      description: "GPS and telematics for 2000+ vehicles",
      metrics: ["Real-time location", "40% fuel savings", "Route optimization"],
      tags: ["Particle", "Google Maps", "MongoDB"],
      image: fleetTrackingImg,
    },
  ];

  const testimonials = [
    {
      name: "Lisa Thompson",
      role: "Director, SmartHome Solutions",
      content: "Their IoT expertise is unmatched. Platform managing 50K+ devices with real-time monitoring. Incredible!",
      rating: 5,
      initials: "LT",
    },
    {
      name: "Thomas Anderson",
      role: "VP Operations, ManufactureCo",
      content: "Predictive maintenance reduced our downtime by 75%. The ROI was immediate and substantial.",
      rating: 5,
      initials: "TA",
    },
    {
      name: "Rachel Green",
      role: "Fleet Manager, LogisticsPro",
      content: "Fleet tracking solution saved us 40% on fuel costs. Real-time insights transformed our operations.",
      rating: 5,
      initials: "RG",
    },
  ];

  const features = [
    "Device Connectivity",
    "Real-time Data Collection",
    "IoT Analytics Dashboard",
    "Remote Monitoring",
    "Predictive Maintenance",
    "Smart Automation",
  ];

  const technologies = [
    { name: "MQTT", icon: Network },
    { name: "AWS IoT", icon: Cloud },
    { name: "Azure IoT", icon: Cloud },
    { name: "LoRaWAN", icon: Radio },
    { name: "Arduino", icon: Cog },
    { name: "Raspberry Pi", icon: Cog },
    { name: "ThingSpeak", icon: Database },
    { name: "Particle", icon: Network },
  ];

  const benefits = [
    {
      icon: Network,
      title: "Connected Ecosystem",
      description: "Seamlessly connect and manage thousands of IoT devices from a single platform.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Transform sensor data into actionable insights with advanced analytics.",
    },
    {
      icon: Cog,
      title: "Automated Operations",
      description: "Enable smart automation and reduce manual intervention with IoT-driven workflows.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={iotCoverImg} alt="IoT Solutions" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Radio className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                IoT <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Internet of Things solutions connecting devices, collecting data, and enabling smart automation for your business.
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
            <h2 className="text-3xl font-bold text-center mb-12">IoT Capabilities</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our IoT Solutions</h2>
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
        <ServiceContactForm serviceName="IoT Solutions" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default IoT;
