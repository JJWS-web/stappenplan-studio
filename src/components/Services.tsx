import { FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const services = [
  {
    id: "caas",
    icon: FileText,
    title: "Contractmanagement",
    shortTitle: "CaaS",
    description: "Volledig beheer van uw contracten, van creatie tot verlenging.",
    features: ["Contractbeheer", "Herinneringen", "Compliance"],
    color: "primary",
  },
  {
    id: "paas",
    icon: UserCheck,
    title: "Personal Assistant",
    shortTitle: "PAaaS",
    description: "Uw persoonlijke assistent op afstand voor alle administratieve taken.",
    features: ["Agenda", "E-mail", "Administratie"],
    color: "accent",
  },
  {
    id: "maas",
    icon: Megaphone,
    title: "Marketing",
    shortTitle: "MaaS",
    description: "Professionele marketing zonder eigen afdeling.",
    features: ["Content", "Social media", "Campagnes"],
    color: "primary",
  },
  {
    id: "draas",
    icon: Shield,
    title: "Disaster Recovery",
    shortTitle: "DRaaS",
    description: "Bescherm uw bedrijfscontinuïteit met backup en recovery.",
    features: ["Backup", "Calamiteitenplan", "Monitoring"],
    color: "accent",
  },
  {
    id: "implementatie",
    icon: Settings,
    title: "Implementatie",
    shortTitle: "Migratie",
    description: "Soepele implementaties en migraties zonder onderbreking.",
    features: ["Planning", "Migratie", "Support"],
    color: "primary",
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit Controle",
    shortTitle: "Audit",
    description: "Volledige controle over uw audit processen.",
    features: ["ISO", "Compliance", "Optimalisatie"],
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
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
            Kies de service die bij uw organisatie past.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
                  service.color === "primary" ? "gradient-primary" : "gradient-accent"
                )}
              >
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-1">
                {service.title}
              </h3>
              <span className="text-primary text-sm font-medium">({service.shortTitle})</span>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/start-nu">
            <Button variant="hero" size="lg">
              Vraag informatie aan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;