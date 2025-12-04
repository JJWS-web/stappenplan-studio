import { Check, TrendingUp, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Resultaten",
    description: "Concrete KPI's en duidelijke voortgangsrapportages.",
  },
  {
    icon: Shield,
    title: "Methodiek",
    description: "Jarenlange ervaring en onderbouwde methoden.",
  },
  {
    icon: Zap,
    title: "Implementatie",
    description: "Direct aan de slag met praktische oplossingen.",
  },
];

const checkItems = [
  "Persoonlijk",
  "Flexibel",
  "Support",
  "Transparant",
  "Resultaatgericht",
  "Maatwerk",
];

const Benefits = () => {
  return (
    <section id="organisatie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Waarom Wij
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Onze Voordelen
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Persoonlijke aanpak bij elke klant. Plan, begeleiding én tools.
            </p>

            {/* Check Items Grid */}
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-24 lg:gap-x-12 gap-y-4 w-fit mx-auto lg:mx-0">
              {checkItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefit Cards */}
          <div className="space-y-6 flex flex-col items-center lg:items-stretch">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-6 bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up w-full max-w-md lg:max-w-none text-center lg:text-left items-center lg:items-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;