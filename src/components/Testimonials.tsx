import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marieke van den Berg",
    role: "Directeur, Van den Berg Consultancy",
    content: "Bedrijfsprocessen volledig geoptimaliseerd. Resultaten overtroffen onze verwachtingen.",
    rating: 5,
  },
  {
    name: "Peter de Vries",
    role: "Manager Operations, TechFlow BV",
    content: "Professionele aanpak met helder stappenplan en uitstekende begeleiding.",
    rating: 5,
  },
  {
    name: "Lisa Jansen",
    role: "Ondernemer",
    content: "De structuur die ik als startende ondernemer nodig had.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Ervaringen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Klantervaringen
          </h2>
          <p className="text-muted-foreground text-lg">
            Ontdek hoe wij anderen hebben geholpen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up",
                "relative overflow-hidden"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                <span className="text-muted-foreground">•</span>
                <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;