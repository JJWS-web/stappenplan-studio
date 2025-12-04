import { ArrowRight, CheckCircle2, Clock, Zap, AlertTriangle, Eye, MessageSquare, BarChart3, ExternalLink, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const timeline = [
  { year: "Start", title: "Operator tot Analist", description: "35+ jaar IT-ervaring opgebouwd" },
  { year: "2000", title: "Project Manager", description: "Stappenplan methodiek ontwikkeld" },
  { year: "2003", title: "Oprichting", description: "Eigen bedrijf gestart" },
  { year: "600+", title: "Stappenplannen", description: "Geïmplementeerd bij klanten" },
  { year: "2010", title: "Software Start", description: "Time IT ontwikkeling gestart" },
  { year: "2012", title: "Lancering", description: "Time IT op de markt" },
];

const painPoints = [
  "Tijdrovend taakbeheer",
  "Uitputtend zelf initiëren",
  "Geen terugkoppeling",
  "Overzicht ontbreekt",
  "Wijzigingen missen",
  "Continue status updates",
];

const benefits = [
  { icon: Clock, title: "40% Tijdsbesparing", desc: "Bewezen resultaat" },
  { icon: Eye, title: "Realtime Inzicht", desc: "Overal toegang" },
  { icon: MessageSquare, title: "Auto Communicatie", desc: "Automatisch aansturen" },
  { icon: BarChart3, title: "Volledig Overzicht", desc: "Gantt Chart dashboard" },
  { icon: Zap, title: "Eenvoudig", desc: "Intuïtief gebruik" },
  { icon: CheckCircle2, title: "Universeel", desc: "Elke branche" },
];

const applications = [
  "Software implementaties",
  "Migraties & verhuizingen",
  "Audits & certificeringen",
  "Disaster recovery",
  "Veranderingsprocessen",
  "Operationele processen",
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze Missie</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-4 mb-6 md:mb-8">Wat wij doen</h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4 md:space-y-6 text-center md:text-left">
              <p className="text-base md:text-lg leading-relaxed">
                Wij helpen organisaties om activiteiten en planningen <strong className="text-foreground">efficiënt te beheren en aan te sturen</strong>, waardoor gegarandeerd veel tijd en geld wordt bespaard.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Veel organisaties gebruiken Excel, maar dat is statisch en foutgevoelig. Wij voeren activiteiten <strong className="text-foreground">gestructureerd en in realtime</strong> uit met innovatieve communicatie en koppelingen met documenten.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Met ons dashboard en Gantt Chart heeft u <strong className="text-foreground">overal ter wereld controle</strong> via centrale, duidelijke communicatie en een complete audit trail.
              </p>
              <div className="border-l-4 border-primary pl-4 md:pl-6 py-2 my-6 md:my-8 bg-primary/5 rounded-r-lg text-left">
                <p className="text-foreground font-medium italic m-0 text-sm md:text-base">
                  "Time IT maakt het mogelijk om processen overal ter wereld te controleren en te volgen via centrale, duidelijke communicatie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Minimal List */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Herkenbaar?</span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mt-4">
                Frustraties van managers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 py-2 px-3 bg-primary/10 rounded-lg animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <AlertTriangle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">De Oplossing</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-4 mb-3">
                Time <span className="text-gradient">IT</span> Voordelen
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Automatische procesbeheersing
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-base">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
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
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Toepassingen</span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-4 mb-4 md:mb-6">
                  Time IT Inzet
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8">
                  Universeel inzetbaar voor elke branche
                </p>
                <Button variant="accent" size="lg" onClick={scrollToContact}>
                  Contact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-xl animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="w-6 h-6 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{app}</span>
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

            {/* Video Placeholder - Mobile First */}
            <div className="lg:hidden mb-12">
              <div className="group relative aspect-video bg-muted rounded-2xl overflow-hidden cursor-pointer max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-foreground font-semibold">Introductie Video</h3>
                  <span className="text-muted-foreground text-xs mt-1">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Timeline */}
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                        </div>
                      </div>
                      <div className="pb-6">
                        <span className="text-primary font-bold text-sm">{item.year}</span>
                        <h3 className="text-base md:text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Placeholder - Desktop */}
              <div className="hidden lg:block lg:sticky lg:top-32">
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
                  Binnenkort beschikbaar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Videos Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Video's</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-4">Bekijk meer</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <div className="group relative aspect-video bg-muted rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-foreground font-semibold">Demo Video</h3>
                  <span className="text-muted-foreground text-xs mt-1">Coming Soon</span>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group relative aspect-video bg-muted rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-foreground font-semibold">Klant Testimonial</h3>
                  <span className="text-muted-foreground text-xs mt-1">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Podcast</span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-4 mb-3 md:mb-4">
                  Luister naar onze podcast
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-6">
                  Ontdek onze visie en ervaringen
                </p>
                <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                  Time IT Website
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
