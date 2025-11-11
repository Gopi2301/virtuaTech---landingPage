import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => scrollToSection('contact');
  const scrollToProjects = () => scrollToSection('projects');
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Digital technology background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Digital Innovation Leader</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We deliver innovative software solutions that drive growth, enhance efficiency, 
            and create exceptional digital experiences for your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProjects}
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                300+
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                11+
              </div>
              <div className="text-sm text-muted-foreground">Startups Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                $8M+
              </div>
              <div className="text-sm text-muted-foreground">Total Fund Raised</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
