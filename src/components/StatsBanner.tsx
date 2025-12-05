import { Zap, TrendingUp, Award, Clock, Users, BarChart3, Cpu, Shield } from "lucide-react";

const stats = [
  {
    icon: Zap,
    title: "Snelle Respons",
    stat: "<24u",
    description: "Reactietijd",
    gradient: "gradient-accent",
  },
  {
    icon: TrendingUp,
    title: "Schaalbaar",
    stat: "∞",
    description: "Capaciteit",
    gradient: "gradient-primary",
  },
  {
    icon: Award,
    title: "Consistente Kwaliteit",
    stat: "99.9%",
    description: "Nauwkeurig",
    gradient: "gradient-accent",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaar",
    stat: "100%",
    description: "Uptime",
    gradient: "gradient-primary",
  },
  {
    icon: Users,
    title: "Persoonlijk",
    stat: "1-op-1",
    description: "Contact",
    gradient: "gradient-accent",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    stat: "Real-time",
    description: "Inzichten",
    gradient: "gradient-primary",
  },
  {
    icon: Cpu,
    title: "Geautomatiseerd",
    stat: "Smart",
    description: "Technologie",
    gradient: "gradient-accent",
  },
  {
    icon: Shield,
    title: "Veilig & Privé",
    stat: "AVG",
    description: "Compliant",
    gradient: "gradient-primary",
  },
];

const StatsBanner = () => {
  return (
    <section className="py-12 gradient-hero overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground/95 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground/95 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of cards */}
          {stats.map((stat, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-3 bg-card/10 backdrop-blur-sm rounded-xl p-5 min-w-[200px] border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${stat.gradient} p-2.5 rounded-xl shadow-soft`}>
                  <stat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-sm mb-1">{stat.title}</h3>
                  <p className="text-primary-foreground font-bold text-lg leading-none">
                    {stat.stat}
                    <span className="text-primary-foreground/60 font-normal text-xs ml-1">{stat.description}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {stats.map((stat, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-3 bg-card/10 backdrop-blur-sm rounded-xl p-5 min-w-[200px] border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${stat.gradient} p-2.5 rounded-xl shadow-soft`}>
                  <stat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-sm mb-1">{stat.title}</h3>
                  <p className="text-primary-foreground font-bold text-lg leading-none">
                    {stat.stat}
                    <span className="text-primary-foreground/60 font-normal text-xs ml-1">{stat.description}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
