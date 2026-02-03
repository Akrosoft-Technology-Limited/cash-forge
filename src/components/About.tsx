import { Shield, Zap, Users, TrendingUp, CheckCircle, Lock } from "lucide-react";
import aboutImage from "../assets/about-team.jpg";
import { Card } from "./ui/card";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast and Hassle-Free",
      description: "Quick approvals and disbursements ensuring you get funds without unnecessary delays.",
    },
    {
      icon: TrendingUp,
      title: "Flexible Options",
      description: "Tailored financial solutions for personal use or business growth to meet diverse needs.",
    },
    {
      icon: Shield,
      title: "Technology-Driven",
      description: "Digital platforms streamline applications making borrowing seamless and convenient.",
    },
    {
      icon: CheckCircle,
      title: "Transparency & Trust",
      description: "No hidden fees or unclear terms—straightforward lending process built on integrity.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Clients are at the heart of everything we do with exceptional service and guidance.",
    },
    {
      icon: Lock,
      title: "Collateral-Backed",
      description: "Secure lending process accepting movable assets like cars and luxury jewelry.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CashForge is a Nigerian lending company dedicated to providing fast, reliable, and accessible financial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-xl rounded-3xl"></div>
            <img
              src={aboutImage}
              alt="CashForge Team"
              className="relative rounded-2xl shadow-primary w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-foreground">
              About CashForge
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CashForge is a modern technology-driven lending company committed to bridging financial gaps for individuals and businesses. We provide fast, flexible, and hassle-free loan solutions designed to meet short-term and long-term financial needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At CashForge, we understand the challenges of accessing quick financial support, which is why we leverage technology and customer-centric solutions to simplify the borrowing experience. Whether it's for personal needs, business expansion, or unexpected expenses, CashForge is here to provide reliable financial assistance with ease and confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              We only accept movable assets like cars and luxury jewelry as collateral, ensuring a straightforward lending process while protecting our investors from high default risks.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-accent transition-all duration-300 animate-scale-in border-border bg-card group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-brand-accent" size={24} />
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
