import { Check, TrendingUp, Shield, Zap, Target, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: TrendingUp,
    title: "Meetbare Resultaten",
    description: "Concrete KPI's en voortgangsrapportages voor grip op uw projecten.",
  },
  {
    icon: Shield,
    title: "Bewezen Methodiek",
    description: "20+ jaar ervaring vertaald naar effectieve oplossingen.",
  },
  {
    icon: Zap,
    title: "Direct Operationeel",
    description: "Geen wachttijd, direct aan de slag met uw uitdagingen.",
  },
];

const checkItems = [
  "Geen vaste contracten",
  "Flexibel opschalen",
  "24/7 Support",
  "Vaste contactpersoon",
  "Resultaatgarantie",
  "Op maat gemaakt",
];

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <section id="organisatie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Waarom Onze Diensten
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-4">
            Focus op uw core business
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-base md:text-lg">
            <Target className="h-5 w-5 text-primary" />
            <span>Wij regelen de rest</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Bespaar tijd en kosten met onze as-a-Service oplossingen. Professionele ondersteuning zonder overhead.
              </p>

              {/* Check Items Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-fit mx-auto md:mx-0">
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

              <Button 
                variant="hero" 
                className="mt-8"
                onClick={() => navigate("/organisatie")}
              >
                Over Ons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Content - Benefit Cards */}
            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 md:gap-6 bg-card rounded-2xl p-4 md:p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-up items-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 min-w-[48px] md:min-w-[56px] rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;