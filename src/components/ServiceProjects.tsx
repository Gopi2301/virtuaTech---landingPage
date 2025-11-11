import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  metrics: string[];
  tags: string[];
  image: string;
}

interface ServiceProjectsProps {
  projects: Project[];
}

const ServiceProjects = ({ projects }: ServiceProjectsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sample <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Results:</h4>
                          <ul className="space-y-1">
                            {project.metrics.map((metric, idx) => (
                              <li key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceProjects;
