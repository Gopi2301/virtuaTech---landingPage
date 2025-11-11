import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, PenTool, Code, Rocket, TrendingUp, Target } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "Understanding your vision, market, and business goals",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description: "Creating initial layouts and user flow structures",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive user experiences",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building scalable, high-performance solutions",
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description: "Seamless deployment and go-live support",
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description: "Continuous improvement and growth support",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process takes you from concept to market success
          </p>
        </div>

        {/* Process Flow - Flowing Timeline Style */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block transform -translate-x-1/2" />
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block">
                    <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
                      <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                          <step.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                          <div className="text-xs font-bold text-primary mb-1">
                            STEP {index + 1}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block relative z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow animate-pulse" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Development Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  We're More Than Just Developers
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  At Virtua Technologies, we don't just build products – we build successful businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fundraising Support</h4>
                      <p className="opacity-90 text-sm leading-relaxed">
                        We help you craft compelling pitch decks, connect with investors, 
                        and prepare your business for successful funding rounds
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Go-to-Market Strategy</h4>
                      <p className="opacity-90 text-sm leading-relaxed">
                        Strategic guidance on product positioning, market entry, customer acquisition, 
                        and scaling your business effectively
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg font-semibold opacity-90">
                  From concept to funding to market domination – we're with you every step of the way
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;
