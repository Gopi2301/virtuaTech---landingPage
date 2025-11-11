import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    content: "Virtua Technologies transformed our vision into reality. Their AI development expertise helped us reduce operational costs by 40% while improving accuracy.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthCare Plus",
    company: "HealthCare",
    content: "The mobile app they built is exceptional. HIPAA-compliant, user-friendly, and our patients love it. They truly understand healthcare technology.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow",
    content: "Outstanding cloud migration and real-time analytics platform. Their team's expertise in data engineering helped us process millions of transactions seamlessly.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Park",
    role: "VP Product, RetailHub",
    company: "RetailHub",
    content: "Our eCommerce platform handles 100K+ daily transactions flawlessly. Virtua's attention to detail and scalability planning was impressive.",
    rating: 5,
    initials: "DP",
  },
  {
    name: "Lisa Thompson",
    role: "Director, SmartHome Solutions",
    company: "SmartHome",
    content: "Their IoT expertise is unmatched. They built a platform managing 50K+ devices with real-time monitoring. Professional, reliable, and innovative.",
    rating: 5,
    initials: "LT",
  },
  {
    name: "James Wilson",
    role: "Founder, StartupLaunch",
    company: "StartupLaunch",
    content: "Beyond development, they helped us with fundraising strategy and go-to-market planning. Raised $2M seed round thanks to their guidance. True partners!",
    rating: 5,
    initials: "JW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group relative overflow-hidden"
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
