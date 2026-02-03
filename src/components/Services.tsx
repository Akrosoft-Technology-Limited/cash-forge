import { BadgeDollarSign, Clock, FileCheck, TrendingUp } from "lucide-react";
import servicesImage from "../assets/services-bg.jpg";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: BadgeDollarSign,
      title: "Collateral-Backed Short-Term Loans",
      description: "Secure financing backed by movable assets like luxury cars and jewelry, providing you with fast access to funds.",
      highlights: ["Cars as Collateral", "Luxury Jewelry Accepted", "Competitive Rates"],
    },
    {
      icon: FileCheck,
      title: "Transparent Terms",
      description: "Clear, straightforward loan agreements with no hidden fees. You'll know exactly what you're signing up for.",
      highlights: ["No Hidden Fees", "Clear Documentation", "Simple Process"],
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval and disbursement process designed to get you the funds you need when you need them most.",
      highlights: ["Same-Day Approval", "Instant Disbursement", "24/7 Application"],
    },
    {
      icon: TrendingUp,
      title: "Scalability & Growth Support",
      description: "Whether you're an individual or a business, our flexible solutions scale with your financial needs and goals.",
      highlights: ["Personal Loans", "Business Expansion", "Flexible Terms"],
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-secondary/70 z-10"></div>
        <img
          src={servicesImage}
          alt="Services Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">
            Services & Offerings
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your unique needs with speed, security, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/95 backdrop-blur-sm hover:shadow-accent transition-all duration-300 animate-fade-in-up border-border/50 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-accent-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
