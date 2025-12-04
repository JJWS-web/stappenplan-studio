import { ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Gestructureerd naar succes
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Bereik uw doel met een<br />
            <span className="text-gradient">helder stappenplan</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Van complex naar concreet en uitvoerbaar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="lg" onClick={scrollToServices}>
              Ontdek Onze Diensten
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/contact")}>
              Neem Contact Op
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-primary-foreground animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2 w-44 sm:w-auto">
              <span className="text-3xl font-bold text-primary w-20">500+</span>
              <span className="text-sm">Projecten</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
            <div className="flex items-center gap-2 w-44 sm:w-auto">
              <span className="text-3xl font-bold text-primary w-20">98%</span>
              <span className="text-sm">Tevredenheid</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
            <div className="flex items-center gap-2 w-44 sm:w-auto">
              <span className="text-3xl font-bold text-primary w-20">20+</span>
              <span className="text-sm">Jaar Ervaring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;