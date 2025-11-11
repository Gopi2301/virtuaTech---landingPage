import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  "15+ years of industry expertise",
  "Agile development methodology",
  "Dedicated project managers",
  "24/7 support and maintenance",
  "Quality-driven development",
  "Transparent communication",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Virtua Technologies
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just developers – we're your technology partners. Our team combines 
              technical excellence with business acumen to deliver solutions that drive real results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From startups to enterprise organizations, we've helped businesses across industries 
              leverage technology to achieve their goals and stay ahead of the competition.
            </p>
          </div>

          <Card className="p-8 border-border shadow-elegant">
            <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
