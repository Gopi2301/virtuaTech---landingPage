import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceProjects from "@/components/ServiceProjects";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceContactForm from "@/components/ServiceContactForm";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { ShoppingCart, CheckCircle2, TrendingUp, ShieldCheck, Scaling, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from '@/utils/scrollToContact';
import { Badge } from "@/components/ui/badge";
import fashionMarketplaceImg from "@/assets/projects/fashion-marketplace.jpg";
import b2bWholesaleImg from "@/assets/projects/b2b-wholesale.jpg";
import subscriptionBoxImg from "@/assets/projects/subscription-box.jpg";
import ecommerceCoverImg from "@/assets/covers/ecommerce-cover.jpg";

const ECommerce = () => {
  const projects = [
    {
      title: "Fashion Marketplace",
      description: "Multi-vendor platform with 1000+ sellers",
      metrics: ["$50M annual GMV", "100K+ daily orders", "35% conversion rate"],
      tags: ["Shopify Plus", "Stripe", "React"],
      image: fashionMarketplaceImg,
    },
    {
      title: "B2B Wholesale Portal",
      description: "Bulk ordering system with custom pricing",
      metrics: ["500+ corporate clients", "Automated invoicing", "60% repeat orders"],
      tags: ["WooCommerce", "SAP", "Node.js"],
      image: b2bWholesaleImg,
    },
    {
      title: "Subscription Box Service",
      description: "Recurring revenue eCommerce platform",
      metrics: ["50K subscribers", "95% retention rate", "$2M MRR"],
      tags: ["Next.js", "Stripe Billing", "PostgreSQL"],
      image: subscriptionBoxImg,
    },
  ];

  const testimonials = [
    {
      name: "David Park",
      role: "CEO, RetailHub",
      content: "Our eCommerce platform handles 100K+ daily transactions flawlessly. Conversion rates increased by 35%!",
      rating: 5,
      initials: "DP",
    },
    {
      name: "Amanda Foster",
      role: "Founder, StyleBox",
      content: "The subscription platform they built helped us reach $2M in monthly recurring revenue. Incredible work!",
      rating: 5,
      initials: "AF",
    },
    {
      name: "Marcus Johnson",
      role: "Director, WholesalePro",
      content: "B2B ordering is now completely automated. Our corporate clients love the custom pricing features.",
      rating: 5,
      initials: "MJ",
    },
  ];

  const features = [
    "Payment Gateway Integration",
    "Inventory Management",
    "Shopping Cart Systems",
    "Order Processing",
    "Customer Analytics",
    "Multi-Channel Sales",
  ];

  const technologies = [
    { name: "Shopify", icon: ShoppingCart },
    { name: "WooCommerce", icon: ShoppingCart },
    { name: "Magento", icon: ShoppingCart },
    { name: "Stripe", icon: ShieldCheck },
    { name: "PayPal", icon: ShieldCheck },
    { name: "Next.js", icon: Code },
    { name: "React", icon: Code },
    { name: "PostgreSQL", icon: Database },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Designed with UX best practices to maximize sales and reduce cart abandonment.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with support for multiple payment methods.",
    },
    {
      icon: Scaling,
      title: "Scalable Platform",
      description: "Handle growing product catalogs and traffic spikes with ease.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={ecommerceCoverImg} alt="eCommerce Solutions" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <ShoppingCart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                eCommerce <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                End-to-end eCommerce solutions with payment integration, inventory management, and optimized user experiences.
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
            <h2 className="text-3xl font-bold text-center mb-12">eCommerce Features</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our eCommerce Platform</h2>
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
        <ServiceContactForm serviceName="eCommerce Solutions" />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default ECommerce;
