import { ArrowRight, CheckCircle2, Clock, Shield, Users, Zap, AlertTriangle, RefreshCw, Eye, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    icon: Clock,
    text: "Dagelijks achter taken aanrennen is tijdrovend voor Managers en Ondernemers!",
  },
  {
    icon: Zap,
    text: "Het continue zelf initiëren van werk en alles regelen kan uitputtend zijn.",
  },
  {
    icon: MessageSquare,
    text: "Daarnaast is het frustrerend om geen terugkoppeling te ontvangen nadat taken zijn afgerond.",
  },
  {
    icon: Eye,
    text: "En hoe hard je ook werkt, het totale overzicht ontbreekt, ongeacht waar je bent.",
  },
  {
    icon: RefreshCw,
    text: "Weer nieuwe wijzigingen tijdens de uitvoering, ik mis real time het totale overzicht!",
  },
  {
    icon: AlertTriangle,
    text: "Elke keer word ik gebeld voor een status update, terwijl ik bezig ben met het oplossen van allerlei problemen.",
  },
];

const benefits = [
  "De manager heeft de controle, waar hij ook is",
  "De manager is er zeker van dat het proces verloopt zoals gepland",
  "De manager bespaart gegarandeerd minimaal 40% tijd (bewezen bij andere klanten)",
  "De manager kan rustig slapen omdat hij weet dat als er bijvoorbeeld een calamiteit uitbreekt in zijn organisatie, hij ervan verzekerd is dat er een actueel stappenplan in de Cloud direct beschikbaar is",
  "Beheersbaar van de stappen die te allen tijde moeten worden uitgevoerd",
  "Duidelijk en inzichtelijk van alle uit te voeren stappen",
  "De manager hoeft zich geen zorgen te maken over alle communicatie (aansturen, reclameren en informeren) want dat gebeurt automatisch",
  "De communicatie naar medewerkers, management en stakeholders is helder en consistent",
  "De manager kan meer tijd besteden aan de menselijke factor van zijn mensen!",
];

const applications = [
  "Een verzameling van activiteiten die door verschillende mensen in een bepaalde tijdsvolgorde en afhankelijkheid moeten worden uitgevoerd",
  "Audits van certificeringen zoals ISO, enz.",
  "Implementaties, zowel functioneel als technisch",
  "(Gegevens)migraties",
  "Verhuizingen",
  "Aansturing van veranderingsprocessen, transitie programma's, enz.",
  "Aansturing van processen zoals facturatie",
  "Repeterende zaken via templates, zoals implementatie van software bij een klant (die voor 80% bij verschillende klanten gebruikt kan worden)",
  "Calamiteiten zowel technisch als organisatorisch, ook een datalek!",
  "Uitvoering van diverse projecten",
  "Alles wat een stappenplan vereist en waar (direct) management voor nodig is en waar men real time, op elk willekeurig moment, elke plaats in controle wil zijn!",
];

const Stappenplan = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Op maat gemaakt voor uw organisatie
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Uw <span className="text-gradient">Stappenplan</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              "Uw stappenplan" betekent dat het stappenplan/de planning door u op maat wordt gemaakt. U bepaalt welke activiteiten moeten plaatsvinden, in welke tijd, door wie en in welke volgorde.
            </p>

            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
              <p className="text-primary-foreground/90 font-medium">
                <span className="text-primary font-bold">Time IT</span> is de programmatuur voor de beheersing en besturing van "operationele" processen/projecten.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Pain Points Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Herkenbaar?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                De dagelijkse frustraties van managers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up",
                    "border-l-4 border-accent"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8 animate-fade-up">
              <p className="text-xl text-foreground font-semibold mb-6">
                Herkent u dit ook? Voel je de frustraties?
              </p>
              <p className="text-muted-foreground mb-8">
                Ja, stuur me een bericht en we nemen direct contact met u op.
              </p>
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Ja, neem contact met me op
                <ArrowRight className="ml-2 h-5 w-5" />
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
                De Oplossing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                De flow van het proces Time IT!
              </h2>
              <p className="text-muted-foreground text-lg">
                Time IT ontlast de manager of het management van een organisatie als volgt:
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Wilt u het zien met uw eigen proces, uw eigen data?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Wij bouwen het geheel vrijblijvend voor u om en laten u dan zien hoe het anders kan! Stuur ons een berichtje.
              </p>
              <Button variant="accent" size="lg" onClick={scrollToContact}>
                Ja, bouw mijn proces om
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Toepassingen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Mogelijke toepassingen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Stappenplan;
