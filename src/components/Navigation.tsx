import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logos/logo";

// const Navigation = () => (
//   <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//     <div className="container mx-auto px-6 h-20 flex items-center justify-between">
//       <Logo className="h-10 w-auto" /> {/* Cashforge Logo */}
//       <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
//         <a href="#assets">Asset Tiers</a>
//         <a href="#how">How it Works</a>
//         <a href="#impact">Social Impact</a>
//       </div>
//       <div className="flex gap-4 items-center">
//         <button className="text-sm font-semibold text-emerald-900">Support</button>
//         <Button className="bg-emerald-900 text-white rounded-full px-6 py-5 hover:bg-emerald-800">
//           Get Funded
//         </Button>
//       </div>
//     </div>
//   </nav>
// );

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-center space-x-2 cursor-pointer h-48 mt-[70px]" onClick={() => scrollToSection("home")}>
            <Logo 
              width="auto" // Let height be automatic to preserve aspect ratio
              logoIconClasses="fill-brand-dark"
              logoMainTextClasses="fill-brand-primary"
              logoSubTextClasses="fill-brand-dark"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Contact
            </button>
            {/* 
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-accent hover:opacity-90 text-brand-accent shadow-accent"
              >
                Get Started
              </Button> 
            */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in bg-card/95 backdrop-blur-lg rounded-lg mt-2 px-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-brand-dark hover:text-brand-primary transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-brand-dark hover:text-brand-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="block w-full text-left text-brand-dark hover:text-brand-primary transition-colors py-2"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-brand-dark hover:text-brand-primary transition-colors py-2"
            >
              Contact
            </button>
            {/* <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground"
            >
              Get Started
            </Button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
