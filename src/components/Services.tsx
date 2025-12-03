import { ClipboardList, Clock, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: ClipboardList,
    title: "Stappenplan",
    description: "Gestructureerde plannen voor complexe projecten en doelstellingen. Van visie naar uitvoering.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Time It",
    description: "Effectief tijdsbeheer en planning. Optimaliseer uw workflow en verhoog productiviteit.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Organisatie",
    description: "Verbeter de interne organisatie en teamwork. Creëer duidelijke structuren en verantwoordelijkheden.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Doelgericht",
    description: "Focus op meetbare resultaten. Wij helpen u bij het definiëren en bereiken van concrete doelen.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="stappenplan" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Wat wij voor u kunnen betekenen
          </h2>
          <p className="text-muted-foreground text-lg">
            Met onze bewezen methodologie helpen wij u bij het structureren en realiseren van uw doelstellingen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                  service.color === "primary" ? "gradient-primary" : "gradient-accent"
                )}
              >
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
