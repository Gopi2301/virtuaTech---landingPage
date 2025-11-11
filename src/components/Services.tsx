import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Smartphone, Cloud, ShoppingCart, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Cutting-edge AI and machine learning solutions to automate processes and unlock intelligent insights from your data.",
    link: "/services/ai-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    link: "/services/mobile-apps",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
    link: "/services/cloud-solutions",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "End-to-end eCommerce solutions with payment integration, inventory management, and optimized user experiences.",
    link: "/services/ecommerce",
  },
  {
    icon: Radio,
    title: "IoT",
    description: "Internet of Things solutions connecting devices, collecting data, and enabling smart automation for your business.",
    link: "/services/iot",
  },
  {
    icon: Code2,
    title: "Game Development",
    description: "Immersive gaming experiences built with cutting-edge engines and technologies for PC, console, and mobile platforms.",
    link: "/services/game-development",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
