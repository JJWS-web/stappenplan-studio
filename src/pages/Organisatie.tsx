import { ArrowRight, CheckCircle2, Clock, Zap, AlertTriangle, RefreshCw, Eye, MessageSquare, BarChart3, ExternalLink, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const timeline = [
  {
    year: "Start",
    title: "Van Operator tot Systeemanalist",
    description: "Peter van Deutekom was ooit operator, programmeur en systeemanalist. Hij maakte de overstap van \"ontwikkeling\" naar \"infrastructuur\" en bouwde meer dan dertig jaar ervaring op in het aansturen van IT-afdelingen.",
  },
  {
    year: "2000",
    title: "Programma / Project Manager",
    description: "Sinds 2000 is hij actief als Programma / Project Manager bij diverse organisaties. Hij ontwikkelde op basis van Excel een methodiek om stappenplannen op te zetten voor migraties en implementaties van software.",
  },
  {
    year: "2003",
    title: "Oprichting",
    description: "In 2003 richtte hij zijn eigen bedrijf op.",
  },
  {
    year: "600+",
    title: "Stappenplannen",
    description: "In de jaren daarna heeft hij meer dan 600 stappenplannen opgezet en geïmplementeerd bij diverse organisaties.",
  },
  {
    year: "2010",
    title: "Software Ontwikkeling",
    description: "Op basis van al zijn ervaringen en geleerde lessen besloot hij in 2010 om software te laten ontwikkelen.",
  },
  {
    year: "2012",
    title: "Lancering Time IT",
    description: "Sinds 2012 is hij actief op de markt met het unieke pakket genaamd Time IT.",
  },
];

const whatWeDo = [
  "Wij helpen (IT) organisaties om een verzameling van activiteiten / planningen efficiënt te beheren en aan te sturen, waardoor gegarandeerd veel tijd en dus geld wordt bespaard",
  "Veel organisaties gebruiken Excel maar dat is allemaal statisch, foutgevoelig en tijdrovend",
  "Wij zijn in staat om een verzameling van activiteiten of taken gestructureerd uit te voeren, ongeacht de branche, in realtime met allerlei innovatieve communicatie, toegevoegd commentaar en koppelingen met documenten / werkinstructies",
  "Het dashboard met een Gantt Chart van het Time IT product maakt het mogelijk om de activiteiten overal ter wereld te controleren en te volgen via een centrale, duidelijke communicatie en een audit trail",
];

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

const stappenplanBenefits = [
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
  "Audits van certificeringen zoals ISO en andere standaard certificeringen",
  "Implementaties, zowel functioneel als technisch van software en systemen",
  "(Gegevens)migraties en verhuizingen van systemen en organisaties",
  "Aansturing van veranderingsprocessen, transitie programma's en transformaties",
  "Aansturing van processen zoals facturatie en andere operationele processen",
  "Repeterende zaken via templates, zoals implementatie van software bij klanten",
  "Calamiteiten zowel technisch als organisatorisch, ook een datalek",
  "Uitvoering van diverse projecten en programma's binnen organisaties",
  "Alles wat een stappenplan vereist en waar direct management voor nodig is en waar men real time, op elk willekeurig moment, elke plaats in controle wil zijn",
];

const timeItBenefits = [
  { icon: Clock, text: "Tijdsbesparing bij de voorbereiding, maar ook bij de uitvoering (implementatie)" },
  { icon: MessageSquare, text: "Communicatie is altijd consistent" },
  { icon: Zap, text: "Eenvoudig, gebruiksvriendelijk, intuïtief, gemakkelijk te gebruiken" },
  { icon: Eye, text: "Duidelijk, gestructureerd, alles is realtime zichtbaar zowel op hoofdlijnen als in detail, ongeacht waar je bent" },
  { icon: BarChart3, text: "Inzetbaar voor elke branche, voor elke toepassing" },
  { icon: CheckCircle2, text: "Gegarandeerde 40% tijdsbesparing" }
];

const videos = [
  {
    title: "Introductie Time IT",
    description: "Een korte introductie van ons Time IT platform",
  },
  {
    title: "Demo Stappenplan",
    description: "Bekijk hoe een stappenplan wordt opgezet",
  },
  {
    title: "Klant Testimonial",
    description: "Ervaringen van onze tevreden klanten",
  },
];

const Organisatie = () => {
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
              <span className="text-sm font-medium text-primary-foreground/90">
                Over Ons
              </span>
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

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Video's
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Bekijk onze video's
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ontdek meer over Time IT en onze diensten via onderstaande video's
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Video Placeholder */}
                  <div className="relative aspect-video bg-muted flex items-center justify-center cursor-pointer group-hover:bg-muted/80 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="relative w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded">
                      Coming Soon
                    </div>
                  </div>
                  {/* Video Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{video.title}</h3>
                    <p className="text-muted-foreground text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Our Mission */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Onze Missie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Wat wij doen
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 text-center">
              <p className="text-muted-foreground italic">
                Vaak wordt Excel of andere middelen gebruikt, maar deze zijn statisch en richten zich niet op de stappen in de uitvoering (implementatie) zelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stappenplan & Time IT Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Ons Aanbod
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Uw <span className="text-gradient">Stappenplan</span> met <span className="text-gradient">Time IT</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
                "Uw stappenplan" betekent dat het stappenplan/de planning door u op maat wordt gemaakt. U bepaalt welke activiteiten moeten plaatsvinden, in welke tijd, door wie en in welke volgorde.
              </p>
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-foreground font-medium">
                  <span className="text-primary font-bold">Time IT</span> is de programmatuur voor de beheersing en besturing van "operationele" processen/projecten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
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
          </div>
        </div>
      </section>

      {/* Benefits & Solutions Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                De Oplossing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Hoe wij u helpen
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Time IT ontlast de manager of het management van een organisatie als volgt:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {stappenplanBenefits.slice(0, 6).map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {stappenplanBenefits.slice(6).map((benefit, index) => (
                <div
                  key={index + 6}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card animate-fade-up"
                  style={{ animationDelay: `${(index + 6) * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Time IT Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  Digitaal Procesbeheer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Time <span className="text-gradient">IT</span> Voordelen
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
                Time IT is een veelgebruikt digitaal programma dat mensen beheert met aanverwante activiteiten (proces) die in realtime in een bepaalde tijdsvolgorde moeten worden uitgevoerd.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {timeItBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pt-1.5">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" onClick={openTimeItWebsite}>
                Ontdek Time IT
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & USPs Combined Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Toepassingen & Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Mogelijke toepassingen en unieke features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up"
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

      {/* Combined CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Wilt u het zien met uw eigen proces?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wij bouwen het geheel vrijblijvend voor u om en laten u dan zien hoe het anders kan!
                </p>
                <Button variant="accent" size="lg" onClick={scrollToContact} className="w-full">
                  Neem contact op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Meer informatie over Time IT
                </h3>
                <p className="text-muted-foreground mb-6">
                  Bezoek de officiële Time IT website voor uitgebreide documentatie en demo's.
                </p>
                <Button variant="hero" size="lg" onClick={openTimeItWebsite} className="w-full">
                  Bezoek Time IT Website
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Onze Geschiedenis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Onze Reis
              </h2>
              <p className="text-muted-foreground text-lg">
                Meer dan 35 jaar ervaring in de IT branche, gebundeld in Time IT
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 animate-fade-up ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-card">
                        <span className="text-primary font-bold text-lg">{item.year}</span>
                        <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full gradient-primary border-4 border-background" />
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Podcast
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Luister naar onze podcast
              </h2>
              <p className="text-muted-foreground">
                Ontdek meer over onze visie en ervaringen
              </p>
            </div>

            {/* Spotify Embed */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
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
      </section>

      <Footer />
    </main>
  );
};

export default Organisatie;
