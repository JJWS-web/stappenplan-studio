import { ArrowRight, FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "caas",
    icon: FileText,
    title: "Contractmanagement-as-a-Service (CaaS)",
    description: "Volledig beheer van uw contracten, van creatie tot verlenging. Nooit meer een deadline missen of ongunstige voorwaarden over het hoofd zien.",
    features: ["Contractbeheer & tracking", "Automatische herinneringen", "Compliance monitoring"],
  },
  {
    id: "paas",
    icon: UserCheck,
    title: "PersonalAssistant-as-a-Service (PAaaS)",
    description: "Uw persoonlijke assistent op afstand. Agenda beheer, correspondentie en administratieve ondersteuning wanneer u het nodig heeft.",
    features: ["Agenda & planning", "E-mail management", "Administratieve taken"],
  },
  {
    id: "maas",
    icon: Megaphone,
    title: "Marketing-as-a-Service (MaaS)",
    description: "Professionele marketing zonder eigen afdeling. Van strategie tot uitvoering, wij zorgen voor uw zichtbaarheid en groei.",
    features: ["Content creatie", "Social media beheer", "Campagne management"],
  },
  {
    id: "draas",
    icon: Shield,
    title: "DisasterRecovery-as-a-Service (DRaaS)",
    description: "Bescherm uw bedrijfscontinuïteit. Snelle recovery bij calamiteiten met geautomatiseerde backup en herstelprocessen.",
    features: ["Backup & recovery", "Calamiteitenplan", "24/7 monitoring"],
  },
  {
    id: "implementatie",
    icon: Settings,
    title: "Implementatie / Migratie",
    description: "Soepele implementaties en migraties zonder onderbreking. Van planning tot uitvoering met minimale impact op uw dagelijkse operatie.",
    features: ["Projectplanning", "Data migratie", "Training & support"],
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit Proces Controle",
    description: "Volledige controle over uw audit processen. Van voorbereiding tot afronding, altijd audit-ready met duidelijke stappenplannen.",
    features: ["ISO certificering", "Compliance audits", "Procesoptimalisatie"],
  },
];

const StartNu = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedService, ...formData });
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Start <span className="text-gradient">Nu</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Kies de service die bij uw organisatie past en ontdek hoe wij u kunnen ontzorgen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up border-2",
                  selectedService === service.id ? "border-primary" : "border-transparent"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vraag vrijblijvend informatie aan
              </h2>
              <p className="text-muted-foreground">
                Selecteer de service waarin u geïnteresseerd bent en wij nemen contact met u op.
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
                      <span className="text-sm text-foreground">{service.title.split(" (")[0]}</span>
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

              <Button variant="hero" size="lg" className="w-full mt-6" type="submit">
                Verstuur Aanvraag
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StartNu;
