import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { services, Service } from "@/data/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
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

    const { name, email, company } = formData;
    if (!name || !email || !company) {
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
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setServerMessage("Uw aanvraag is verzonden!");
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
          <p className="text-muted-foreground text-sm md:text-base mb-2">
            Geen personeel nodig, geen vaste lasten.<br />Professionele ondersteuning op afroep.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Klik op een service voor meer informatie.
          </p>
        </div>

        {/* Two Column Layout - stacks on mobile/tablet */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={cn(
                  "group relative bg-card rounded-xl p-4 md:p-5 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/30 flex items-center",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
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
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-5 md:p-6 lg:p-8 shadow-card">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Vraag informatie aan
            </h3>
            <p className="text-muted-foreground text-sm mb-4 md:mb-6">
              Vul het formulier in en wij nemen contact op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
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
                    placeholder="Jan Jansen"
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
                    placeholder="jan@bedrijf.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service-company" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Bedrijfsnaam *
                </label>
                <input
                  type="text"
                  id="service-company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="Uw bedrijfsnaam"
                />
              </div>

              <div>
                <label htmlFor="service-message" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Bericht (optioneel)
                </label>
                <textarea
                  id="service-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 md:px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all text-sm"
                  placeholder="Waar kunnen wij u mee helpen?"
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

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md p-5 sm:p-6 rounded-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedService && (
                <>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      selectedService.color === "primary" ? "gradient-primary" : "gradient-accent"
                    )}
                  >
                    <selectedService.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-foreground">{selectedService.title}</span>
                    <span className="text-primary text-sm font-medium ml-2">({selectedService.shortTitle})</span>
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedService && (
            <div className="mt-4">
              <p className="text-muted-foreground mb-4">{selectedService.description}</p>
              <ul className="space-y-3">
                {selectedService.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
