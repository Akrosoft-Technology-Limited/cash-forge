// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sparkles } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";

// const Hero = () => {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-brand-secondary opacity-90 z-10"></div>
//         <img
//           src={heroImage}
//           alt="CashForge Financial Technology"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-32">
//         <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6 text-primary-foreground">
//             <Sparkles size={16} className="text-accent" />
//             <span className="text-sm font-medium">Forging Reliable Financial Aid</span>
//           </div>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
//             Fast, Flexible
//             <span className="block bg-gradient-accent bg-clip-text text-transparent">
//               Financial Solutions
//             </span>
//           </h1>

//           <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto">
//             CashForge provides accessible and reliable collateral-backed loans, helping individuals and businesses bridge financial gaps with speed and confidence.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button
//               onClick={() => scrollToSection("contact")}
//               size="lg"
//               className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent text-lg px-8 py-6 group"
//             >
//               Apply for a Loan
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//             </Button>
//             <Button
//               onClick={() => scrollToSection("about")}
//               size="lg"
//               variant="outline"
//               className="border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 text-lg px-8 py-6"
//             >
//               Learn More
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
//             <div className="text-center animate-scale-in">
//               <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-2">Fast</div>
//               <div className="text-primary-foreground/80 text-sm">Quick Approvals</div>
//             </div>
//             <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
//               <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-2">Secure</div>
//               <div className="text-primary-foreground/80 text-sm">Trusted Platform</div>
//             </div>
//             <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
//               <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-2">Flexible</div>
//               <div className="text-primary-foreground/80 text-sm">Tailored Solutions</div>
//             </div>
//             <div className="text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
//               <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-2">24/7</div>
//               <div className="text-primary-foreground/80 text-sm">Customer Support</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
//     </section>
//   );
// };

// export default Hero;