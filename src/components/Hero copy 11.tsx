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

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#00674E]">
//       {/* Abstract Brand Pattern Overlay */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border-[40px] border-white/20"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full border-[20px] border-brand-primary/30"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8 animate-fade-in-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
//               <Zap size={14} className="text-brand-primary" />
//               <span>Institutional Grade Short-Term Credit</span>
//             </div>
            
//             <h1 className="text-6xl md:text-7xl font-display font-extrabold text-white leading-[1.1]">
//               Unlock Capital, <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
//                 Preserve Assets.
//               </span>
//             </h1>

//             <p className="text-xl text-white/80 max-w-xl leading-relaxed">
//               CashForge provides immediate liquidity secured by your high-value movable assets. Fast, discreet, and tailored for Nigeria’s elite entrepreneurs and individuals.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="xl" className="bg-brand-primary hover:bg-[#c22800] text-white px-10 py-7 rounded-xl text-lg shadow-2xl transition-all hover:scale-105">
//                 Apply for Liquidity
//                 <ArrowRight className="ml-2" />
//               </Button>
//               <div className="flex items-center gap-4 px-4 text-white/70">
//                 <ShieldCheck className="text-brand-primary" />
//                 <span className="text-sm">CBN Compliant & <br/>Secure Transactions</span>
//               </div>
//             </div>
//           </div>

//           {/* Premium Visual: Floating Glass Card */}
//           <div className="relative animate-fade-in-up hidden lg:block">
//             <div className="absolute -inset-10 bg-gradient-to-tr from-brand-primary/20 to-transparent blur-3xl"></div>
//             <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
//                   <span className="text-white/60">Accepted Collateral</span>
//                   <span className="text-brand-primary font-bold">Luxe Tier</span>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white/10 p-4 rounded-2xl text-center border border-white/5">
//                     <p className="text-2xl mb-1">🚗</p>
//                     <p className="text-white text-sm font-semibold">Luxury Cars</p>
//                   </div>
//                   <div className="bg-white/10 p-4 rounded-2xl text-center border border-white/5">
//                     <p className="text-2xl mb-1">💎</p>
//                     <p className="text-white text-sm font-semibold">Fine Jewelry</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 p-6 bg-gradient-to-br from-[#00674E] to-[#004d3b] rounded-3xl border border-white/10">
//                   <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Disbursement Time</p>
//                   <p className="text-white text-4xl font-bold font-display">60 <span className="text-xl">Mins</span></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
