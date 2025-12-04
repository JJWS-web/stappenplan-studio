import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Analyse",
    description: "Grondige analyse van uw situatie en doelen.",
  },
  {
    number: "02",
    title: "Strategie",
    description: "Gepersonaliseerde strategie en roadmap.",
  },
  {
    number: "03",
    title: "Implementatie",
    description: "Begeleiding bij de uitvoering van het plan.",
  },
  {
    number: "04",
    title: "Evaluatie",
    description: "Monitoring en bijsturing voor optimale resultaten.",
  },
];

const Process = () => {
  return (
    <section id="time-it" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Onze Werkwijze
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Onze Werkwijze
          </h2>
          <p className="text-muted-foreground text-lg">
            Onze bewezen methodologie voor elk project.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative bg-card rounded-2xl p-8 shadow-card animate-fade-up",
                  index % 2 === 1 && "lg:mt-12"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-8">
                  <span
                    className={cn(
                      "text-5xl font-bold",
                      index % 2 === 0 ? "text-gradient" : "text-accent"
                    )}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dot */}
                <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full gradient-primary border-4 border-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;