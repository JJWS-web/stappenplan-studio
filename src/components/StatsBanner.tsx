import { Zap, TrendingUp, Award, Clock, Users, BarChart3, Cpu, Shield } from "lucide-react";

const stats = [
  {
    icon: Zap,
    title: "Snelle Respons",
    stat: "<24u",
    description: "Reactietijd",
    color: "bg-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Schaalbaar",
    stat: "∞",
    description: "Capaciteit",
    color: "bg-emerald-500",
  },
  {
    icon: Award,
    title: "Consistente Kwaliteit",
    stat: "99.9%",
    description: "Nauwkeurig",
    color: "bg-violet-500",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaar",
    stat: "100%",
    description: "Uptime",
    color: "bg-cyan-500",
  },
  {
    icon: Users,
    title: "Persoonlijk",
    stat: "1-op-1",
    description: "Contact",
    color: "bg-rose-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    stat: "Real-time",
    description: "Inzichten",
    color: "bg-blue-500",
  },
  {
    icon: Cpu,
    title: "Geautomatiseerd",
    stat: "Smart",
    description: "Technologie",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Veilig & Privé",
    stat: "AVG",
    description: "Compliant",
    color: "bg-teal-500",
  },
];

const StatsBanner = () => {
  return (
    <section className="py-12 bg-slate-900 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of cards */}
          {stats.map((stat, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-3 bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 min-w-[200px] border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${stat.color} p-2.5 rounded-xl`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{stat.title}</h3>
                  <p className="text-white font-bold text-lg leading-none">
                    {stat.stat}
                    <span className="text-slate-400 font-normal text-xs ml-1">{stat.description}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {stats.map((stat, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-3 bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 min-w-[200px] border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${stat.color} p-2.5 rounded-xl`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{stat.title}</h3>
                  <p className="text-white font-bold text-lg leading-none">
                    {stat.stat}
                    <span className="text-slate-400 font-normal text-xs ml-1">{stat.description}</span>
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
