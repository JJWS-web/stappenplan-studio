import { FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const services = [
  {
    id: "caas",
    icon: FileText,
    title: "Contractmanagement",
    shortTitle: "CaaS",
    description: "Volledig beheer van uw contracten, van creatie tot verlenging.",
    features: ["Beheer", "Alerts", "Compliance"],
    color: "primary",
  },
  {
    id: "paas",
    icon: UserCheck,
    title: "Personal Assistant",
    shortTitle: "PAaaS",
    description: "Uw persoonlijke assistent op afstand voor alle taken.",
    features: ["Agenda", "E-mail", "Admin"],
    color: "accent",
  },
  {
    id: "maas",
    icon: Megaphone,
    title: "Marketing",
    shortTitle: "MaaS",
    description: "Professionele marketing zonder eigen afdeling.",
    features: ["Content", "Social", "Campagnes"],
    color: "primary",
  },
  {
    id: "draas",
    icon: Shield,
    title: "Disaster Recovery",
    shortTitle: "DRaaS",
    description: "Bescherm uw bedrijfscontinuïteit met backup.",
    features: ["Backup", "Herstel", "Monitoring"],
    color: "accent",
  },
  {
    id: "implementatie",
    icon: Settings,
    title: "Implementatie",
    shortTitle: "Migratie",
    description: "Soepele migraties zonder onderbreking.",
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
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMessage(null);
    setServerError(null);

    if (!selectedService) {
      setServerError("Selecteer eerst een service.");
      return;
    }

    setIsSubmitting(true);

    try {
      const selected = services.find((s) => s.id === selectedService);
      const response = await fetch("http://localhost/mail/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          selectedService,
          selectedServiceLabel: selected?.title ?? selectedService,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setServerMessage(data.message || "Uw bericht is verzonden!");
        setFormData({ name: "", email: "", company: "", message: "" });
        setSelectedService("");
      } else {
        setServerError(data.message || "Er ging iets mis bij het verzenden.");
      }
    } catch (err) {
      console.error(err);
      setServerError("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={cn(
                "group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2",
                "animate-fade-up",
                selectedService === service.id ? "border-primary" : "border-transparent"
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

        {/* Contact Form */}
        <div id="start-nu" className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Start Nu
            </h2>
            <p className="text-muted-foreground">
              Selecteer een service en wij nemen contact met u op.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
            {/* Service Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-4">
                Selecteer een service *
              </label>
              <RadioGroup value={selectedService} onValueChange={setSelectedService} className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <RadioGroupItem value={service.id} />
                    <span className="text-sm text-foreground">{service.title}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Contact Fields */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Uw bedrijf"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Vertel ons meer over uw vraag..."
                />
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full mt-6"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Verstuur Aanvraag"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>

            {serverMessage && (
              <p className="mt-4 text-sm text-emerald-600">{serverMessage}</p>
            )}
            {serverError && (
              <p className="mt-4 text-sm text-red-600">{serverError}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services;