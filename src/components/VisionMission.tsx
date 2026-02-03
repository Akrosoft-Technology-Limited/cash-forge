import { Target, Compass, Award, Heart, Lightbulb, Lock } from "lucide-react";
import { Card } from "./ui/card";

const VisionMission = () => {
  const values = [
    { icon: Lock, label: "Trust" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Heart, label: "Accessibility" },
    { icon: Award, label: "Integrity" },
    { icon: Target, label: "Empowerment" },
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-primary relative overflow-hidden group hover:shadow-primary transition-all duration-300 animate-fade-in border-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary-foreground mb-4">
                Vision Statement
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                To be Africa's most trusted and innovative digital lending platform offering collateral-backed financial solutions that empower individuals and businesses while fostering financial inclusion and long-term economic growth.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card relative overflow-hidden group hover:shadow-accent transition-all duration-300 animate-fade-in border-border" style={{ animationDelay: "0.2s" }}>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Compass className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Mission Statement
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CashForge exists to provide accessible and reliable short-term financing, helping individuals and businesses bridge financial gaps. Our goal is to build a sustainable, technology-driven lending institution that endures across generations while creating economic and social impact.
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4 animate-fade-in">
            Core Values
          </h3>
          <p className="text-lg text-muted-foreground animate-fade-in">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-accent transition-all duration-300 animate-scale-in border-border bg-card group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-accent-foreground" size={28} />
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground">
                  {value.label}
                </h4>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
