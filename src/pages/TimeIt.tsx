import { ArrowRight, CheckCircle2, Clock, Zap, MessageSquare, Eye, BarChart3, Link2, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Clock, text: "Tijdsbesparing bij de voorbereiding, maar ook bij de uitvoering (implementatie)" },
  { icon: MessageSquare, text: "Communicatie is altijd consistent" },
  { icon: Zap, text: "Eenvoudig, gebruiksvriendelijk, intuïtief, gemakkelijk te gebruiken" },
  { icon: Eye, text: "Duidelijk, gestructureerd, alles is realtime zichtbaar zowel op hoofdlijnen als in detail, ongeacht waar je bent" },
  { icon: BarChart3, text: "Inzetbaar voor elke branche, voor elke toepassing" },
  { icon: CheckCircle2, text: "Gegarandeerde 40% tijdsbesparing" },
  { icon: Zap, text: "En dus direct geld besparen" },
];

const usps = [
  "Realtime inzicht",
  "Digitale communicatie via e-mail en sms-berichten",
  "Delen van informatie en voortgang via het dashboard",
  "Starten van activiteiten, herinneringen en management informatie",
  "Koppelen via URL's voor werkinstructies en allerlei relevante documenten",
  "Logging voor evaluatie doeleinden/Risk Management",
  "Ook direct inzetbaar voor eenmalige processen of herhalende processen, etc!",
  "Klanten die ervaring hebben met Time IT",
];

const TimeIt = () => {
  const openTimeItWebsite = () => {
    window.open("https://www.time-it.org/en/", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Digitaal Procesbeheer
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Time <span className="text-gradient">IT</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              Time IT is een veelgebruikt digitaal programma dat mensen beheert met aanverwante activiteiten (proces) die in realtime in een bepaalde tijdsvolgorde moeten worden uitgevoerd, zodat u erop kunt vertrouwen dat het proces volgens plan verloopt.
            </p>

            <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                Ontdek Time IT
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Voordelen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Dit betekent het volgende voor jou als organisatie
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Waarom Time IT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Unieke Koop Argumenten
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {usps.map((usp, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{usp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Voor meer gedetailleerde informatie
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Bezoek de officiële Time IT website voor uitgebreide documentatie, demo's en contactmogelijkheden.
              </p>
              <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                Bezoek Time IT Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TimeIt;
