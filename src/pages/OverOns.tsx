import { ArrowRight, CheckCircle2, Clock, Zap, AlertTriangle, Eye, MessageSquare, BarChart3, ExternalLink, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const timeline = [
  { year: "Start", title: "Van Operator tot Systeemanalist", description: "Peter van Deutekom was ooit operator, programmeur en systeemanalist. Hij maakte de overstap van \"ontwikkeling\" naar \"infrastructuur\" en bouwde meer dan dertig jaar ervaring op in het aansturen van IT-afdelingen." },
  { year: "2000", title: "Programma / Project Manager", description: "Sinds 2000 is hij actief als Programma / Project Manager bij diverse organisaties. Hij ontwikkelde op basis van Excel een methodiek om stappenplannen op te zetten voor migraties en implementaties van software." },
  { year: "2003", title: "Oprichting", description: "In 2003 richtte hij zijn eigen bedrijf op." },
  { year: "600+", title: "Stappenplannen", description: "In de jaren daarna heeft hij meer dan 600 stappenplannen opgezet en geïmplementeerd bij diverse organisaties." },
  { year: "2010", title: "Software Ontwikkeling", description: "Op basis van al zijn ervaringen en geleerde lessen besloot hij in 2010 om software te laten ontwikkelen." },
  { year: "2012", title: "Lancering Time IT", description: "Sinds 2012 is hij actief op de markt met het unieke pakket genaamd Time IT." },
];

const painPoints = [
  "Dagelijks achter taken aanrennen is tijdrovend",
  "Continue zelf initiëren van werk kan uitputtend zijn",
  "Geen terugkoppeling na afgeronde taken",
  "Het totale overzicht ontbreekt",
  "Real time wijzigingen missen",
  "Continue gebeld worden voor status updates",
];

const benefits = [
  { icon: Clock, title: "40% Tijdsbesparing", desc: "Bewezen bij andere klanten" },
  { icon: Eye, title: "Realtime Inzicht", desc: "Overal ter wereld toegang" },
  { icon: MessageSquare, title: "Automatische Communicatie", desc: "Aansturen, reclameren en informeren" },
  { icon: BarChart3, title: "Volledig Overzicht", desc: "Dashboard met Gantt Chart" },
  { icon: Zap, title: "Eenvoudig te Gebruiken", desc: "Intuïtief en gebruiksvriendelijk" },
  { icon: CheckCircle2, title: "Elke Branche", desc: "Universeel inzetbaar" },
];

const applications = [
  "Implementaties van software en systemen",
  "Migraties en verhuizingen",
  "Audits en certificeringen (ISO)",
  "Calamiteiten en disaster recovery",
  "Veranderingsprocessen en transitie programma's",
  "Facturatie en operationele processen",
];

const OverOns = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/contact");
  };

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
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground/90">Over Ons</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Over <span className="text-gradient">Onze Organisatie</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              Wij zijn een organisatie die andere bedrijven helpt met project/programma management. Onze oprichter, Peter van Deutekom, is al meer dan 35 jaar werkzaam in de IT branche.
            </p>

            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
              <p className="text-primary-foreground/90 font-medium">
                Op basis van veel ervaring in het vakgebied hebben wij het product <span className="text-primary font-bold">Time IT</span> laten ontwikkelen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Prose Style */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze Missie</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">Wat wij doen</h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Wij helpen (IT) organisaties om een verzameling van activiteiten en planningen <strong className="text-foreground">efficiënt te beheren en aan te sturen</strong>, waardoor gegarandeerd veel tijd en dus geld wordt bespaard.
              </p>
              <p className="text-lg leading-relaxed">
                Veel organisaties gebruiken Excel, maar dat is allemaal statisch, foutgevoelig en tijdrovend. Wij zijn in staat om activiteiten gestructureerd uit te voeren in <strong className="text-foreground">realtime</strong> met innovatieve communicatie en koppelingen met documenten.
              </p>
              <div className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
                <p className="text-foreground font-medium italic m-0">
                  "Het dashboard met Gantt Chart maakt het mogelijk om activiteiten overal ter wereld te controleren via centrale, duidelijke communicatie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Minimal List */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Herkenbaar?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4">
                De dagelijkse frustraties van managers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-primary/20 animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Time IT Solution - Feature Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">De Oplossing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Time <span className="text-gradient">IT</span> Voordelen
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Time IT ontlast de manager met automatische procesbeheersing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                Ontdek Time IT
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications - Two Column Layout */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Toepassingen</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Waar kan Time IT voor worden ingezet?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Time IT is universeel inzetbaar voor elke branche en toepassing waar een stappenplan vereist is.
                </p>
                <Button variant="accent" size="lg" onClick={scrollToContact}>
                  Neem contact op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-xl animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Video */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze Geschiedenis</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Onze Reis</h2>
              <p className="text-muted-foreground text-lg mt-4">35+ jaar ervaring, gebundeld in Time IT</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                        </div>
                      </div>
                      <div className="pb-6">
                        <span className="text-primary font-bold text-sm">{item.year}</span>
                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="lg:sticky lg:top-32">
                <div className="group relative aspect-video bg-muted rounded-2xl overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <Play className="h-10 w-10 text-primary-foreground ml-1" />
                    </div>
                    <h3 className="text-foreground font-semibold text-lg">Introductie Video</h3>
                    <span className="text-muted-foreground text-sm mt-2">Coming Soon</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-center mt-4 text-sm">
                  Binnenkort beschikbaar: onze introductie video over Time IT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Podcast</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                  Luister naar onze podcast
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Ontdek meer over onze visie, ervaringen en de ontwikkeling van Time IT.
                </p>
                <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                  Bezoek Time IT Website
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-4 shadow-card">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/episode/6oh4XzHcmvy8aPV2P5yGGs?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Podcast"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Wilt u het zien met uw eigen proces?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Wij bouwen het geheel vrijblijvend voor u om en laten u dan zien hoe het anders kan!
            </p>
            <Button variant="accent" size="lg" onClick={scrollToContact}>
              Neem contact op
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OverOns;
