import { ArrowRight, FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck } from "lucide-react";
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
    description: "Volledig beheer van uw contracten.",
    color: "primary",
  },
  {
    id: "paas",
    icon: UserCheck,
    title: "Personal Assistant",
    shortTitle: "PAaaS",
    description: "Uw persoonlijke assistent op afstand.",
    color: "accent",
  },
  {
    id: "maas",
    icon: Megaphone,
    title: "Marketing",
    shortTitle: "MaaS",
    description: "Professionele marketing zonder afdeling.",
    color: "primary",
  },
  {
    id: "draas",
    icon: Shield,
    title: "Disaster Recovery",
    shortTitle: "DRaaS",
    description: "Bescherm uw bedrijfscontinuïteit.",
    color: "accent",
  },
  {
    id: "implementatie",
    icon: Settings,
    title: "Implementatie",
    shortTitle: "Migratie",
    description: "Soepele migraties zonder onderbreking.",
    color: "primary",
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit Controle",
    shortTitle: "Audit",
    description: "Volledige controle over uw audits.",
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

    const { name, email } = formData;
    if (!name || !email) {
      setServerError("Vul alle verplichte velden in.");
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
        setServerMessage("Uw aanvraag is verzonden!");
        setFormData({ name: "", email: "", company: "", message: "" });
        setSelectedService("");
      } else {
        setServerError(data.message || "Er ging iets mis.");
      }
    } catch (err) {
      setServerError("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Start Nu
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-3 md:mt-4 mb-3 md:mb-4">
            Onze Diensten
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Selecteer een service en wij nemen contact op.
          </p>
        </div>

        {/* Two Column Layout - stacks on mobile/tablet */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={cn(
                  "group relative bg-card rounded-xl p-4 md:p-5 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer border-2",
                  "animate-fade-up",
                  selectedService === service.id ? "border-primary" : "border-transparent hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                      service.color === "primary" ? "gradient-primary" : "gradient-accent"
                    )}
                  >
                    <service.icon className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-foreground text-sm leading-tight">
                      {service.title}
                    </h3>
                    <span className="text-primary text-xs font-medium">
                      ({service.shortTitle})
                    </span>
                    <p className="text-muted-foreground text-xs mt-1 leading-snug hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                </div>
                {selectedService === service.id && (
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-5 md:p-6 lg:p-8 shadow-card">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Vraag informatie aan
            </h3>
            <p className="text-muted-foreground text-sm mb-4 md:mb-6">
              Selecteer uw service en wij nemen snel contact op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 md:mb-3">
                  Selecteer een service *
                </label>
                <RadioGroup 
                  value={selectedService} 
                  onValueChange={setSelectedService} 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={cn(
                        "flex items-center gap-2 p-2 md:p-2.5 rounded-lg border cursor-pointer transition-all",
                        selectedService === service.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <RadioGroupItem value={service.id} className="flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm font-medium truncate">
                        {service.title}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="service-name" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="service-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="service-email" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="service-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service-company" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="service-company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="Uw bedrijf (optioneel)"
                />
              </div>

              <div>
                <label htmlFor="service-message" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Bericht
                </label>
                <textarea
                  id="service-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all text-sm"
                  placeholder="Uw vraag of opmerking..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Versturen..." : "Verstuur Aanvraag"}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>

              {serverMessage && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-emerald-600 text-sm text-center">{serverMessage}</p>
                </div>
              )}
              {serverError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-600 text-sm text-center">{serverError}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
