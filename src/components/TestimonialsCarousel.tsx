import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Développeuse Frontend",
    company: "TechCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    rating: 5,
    text: "Une ressource incroyable pour comprendre les salaires dans la tech. Les données sont précises et à jour."
  },
  {
    name: "Thomas Dubois",
    role: "Data Scientist",
    company: "DataHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    rating: 5,
    text: "J'ai pu négocier une meilleure offre grâce aux informations détaillées sur les salaires par région."
  },
  {
    name: "Marie Laurent",
    role: "DevOps Engineer",
    company: "CloudSys",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    rating: 4,
    text: "Interface moderne et données complètes. Un outil essentiel pour tout professionnel de la tech."
  },
  {
    name: "Alex Moreau",
    role: "Full Stack Developer",
    company: "StartupLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    rating: 5,
    text: "Les comparaisons entre villes m'ont aidé à choisir ma prochaine opportunité de carrière."
  },
  {
    name: "Julie Bernard",
    role: "Product Manager",
    company: "InnoTech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie",
    rating: 5,
    text: "Données transparentes et fiables. Exactement ce dont j'avais besoin pour mon évolution."
  }
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Ce qu'ils disent de nous
          </h2>
          <p className="text-muted-foreground text-lg">
            Rejoignez des milliers de professionnels qui nous font confiance
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-16 h-16 border-2 border-primary/30 animate-hover-lift">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-accent">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-all duration-300 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400 animate-scale-in"
                              : "fill-muted text-muted"
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground italic flex-1">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
