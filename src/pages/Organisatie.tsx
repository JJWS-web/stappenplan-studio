import { CheckCircle2, User, Briefcase, Calendar, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "Oprichting Mirada BV",
    description: "In 2003 richtte hij zijn eigen bedrijf op, genaamd Mirada BV.",
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

const Organisatie = () => {
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
              <span className="text-gradient">Mirada</span> BV
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              Mirada BV is een organisatie die andere bedrijven helpt met project/programma management. De eigenaar van dit bedrijf, Peter van Deutekom, is al meer dan 35 jaar werkzaam in de IT branche.
            </p>

            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
              <p className="text-primary-foreground/90 font-medium">
                Hij heeft, op basis van veel ervaring in het vakgebied, het product <span className="text-primary font-bold">Time IT</span> laten ontwikkelen.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                De Oprichter
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Peter van Deutekom
              </h2>
              <p className="text-muted-foreground text-lg">
                Meer dan 35 jaar ervaring in de IT branche, gebundeld in Time IT
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              <div className="space-y-8">
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

      {/* What We Do Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Onze Missie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Wat wij doen
              </h2>
            </div>

            <div className="space-y-4">
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

            <div className="mt-8 bg-muted/50 rounded-2xl p-6 text-center">
              <p className="text-muted-foreground italic">
                Vaak wordt Excel of andere middelen gebruikt, maar deze zijn statisch en richten zich niet op de stappen in de uitvoering (implementatie) zelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
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
                title="Mirada BV Podcast"
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
