const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-secondary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-display font-bold text-accent-foreground">CF</span>
              </div>
              <span className="text-xl font-display font-bold">CashForge</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Forging reliable financial aid. Fast, flexible, and accessible collateral-backed loans for individuals and businesses in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>9 Atakpame Street</li>
              <li>Wuse 2, Abuja</li>
              <li className="pt-2">
                <a href="tel:+2348134695091" className="hover:text-primary-foreground transition-colors">
                  +234 813 469 5091
                </a>
              </li>
              <li>
                <a href="mailto:cashforgeng@gmail.com" className="hover:text-primary-foreground transition-colors">
                  cashforgeng@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} CashForge Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
