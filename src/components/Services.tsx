import { FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
    description: "Professionele marketing zonder eigen afdeling.",
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

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setServerError("Vul alle verplichte velden in.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost/mail/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          selectedService: "homepage",
          selectedServiceLabel: "Homepage Contact",
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setServerMessage("Uw bericht is verzonden!");
        setFormData({ name: "", email: "", company: "", message: "" });
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
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Start Nu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Onze Diensten
          </h2>
          <p className="text-muted-foreground text-lg">
            Kies de service die bij uw organisatie past.
          </p>
        </div>

        {/* Two Column Layout: Services + Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "group relative bg-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                      service.color === "primary" ? "gradient-primary" : "gradient-accent"
                    )}
                  >
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">
                      {service.title}
                    </h3>
                    <span className="text-primary text-xs font-medium">({service.shortTitle})</span>
                    <p className="text-muted-foreground text-xs mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Neem Contact Op
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Vragen? Wij nemen snel contact met u op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium text-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="home-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="home-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="home-company" className="block text-sm font-medium text-foreground mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="home-company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Uw bedrijf (optioneel)"
                />
              </div>

              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-foreground mb-2">
                  Bericht *
                </label>
                <textarea
                  id="home-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  placeholder="Vertel ons over uw vraag..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
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
