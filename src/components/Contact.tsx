import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "9 Atakpame Street, Wuse 2, Abuja",
      link: "https://maps.google.com/?q=9+Atakpame+Street+Wuse+2+Abuja",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 813 469 5091",
      secondaryValue: "+234 813 688 8416",
      link: "tel:+2348134695091",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cashforgeng@gmail.com",
      link: "mailto:cashforgeng@gmail.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.cashforge.com",
      link: "https://cashforge.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us today for business enquiries or to apply for a loan.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border shadow-card animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-accent-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                        {info.label}
                      </h4>
                      <a
                        href={info.link}
                        target={info.icon === Globe || info.icon === MapPin ? "_blank" : undefined}
                        rel={info.icon === Globe || info.icon === MapPin ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {info.value}
                      </a>
                      {info.secondaryValue && (
                        <a
                          href="tel:+2348136888416"
                          className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                        >
                          {info.secondaryValue}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-gradient-primary rounded-2xl text-center">
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                Ready to Apply for a Loan?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Get fast, flexible financial solutions tailored to your needs. Contact us today to start your application.
              </p>
              <Button
                className="bg-primary-foreground text-brand-secondary hover:bg-primary-foreground/90 shadow-primary"
                onClick={() => window.location.href = "mailto:cashforgeng@gmail.com"}
              >
                Start Your Application
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
