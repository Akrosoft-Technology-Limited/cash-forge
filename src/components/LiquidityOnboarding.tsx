import { motion } from "framer-motion";
import { Button } from "./ui/button";

const LiquidityOnboarding = () => (
  <div className="h-screen w-full bg-[#F8F9FA] p-8 flex flex-col justify-between overflow-hidden">
    <div className="flex justify-between items-center">
      <img src="/cashforge-logo-mark.png" className="w-12 h-12" />
      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Skip to Vault</span>
    </div>

    {/* The Phenomenon Visual: Rotating Asset Ring */}
    <div className="relative flex justify-center py-20">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] border-2 border-dashed border-[#00674E]/20 rounded-full"
      />
      {/* 3D Render Placeholder: Silhouette of a Luxury Watch & Car in high-gloss finish */}
      <div className="relative z-10 w-64 h-64 bg-gradient-to-tr from-[#00674E] to-emerald-400 rounded-full shadow-[0_30px_60px_rgba(0,103,78,0.3)] flex items-center justify-center border-8 border-white">
          <div className="text-white text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.3em]">Total Value Secured</p>
             <p className="text-4xl font-black">₦48.5M</p>
          </div>
      </div>
    </div>

    <div className="space-y-6">
      <h1 className="text-5xl font-black text-[#1A1A1A] leading-[1.1]">
        Activating <br /> 
        <span className="text-brand-primary">Idle Wealth.</span>
      </h1>
      <p className="text-gray-400 text-lg leading-relaxed">
        Your high-value assets are more than just possessions. They are your most reliable sources of strategic liquidity.
      </p>
      
      <Button className="w-full bg-[#1A1A1A] text-white py-8 rounded-[2rem] text-xl font-bold shadow-2xl transition-transform hover:scale-[1.02]">
        Open My Vault
      </Button>
      <p className="text-center text-sm font-bold text-[#00674E] underline">Access Institutional Credit</p>
    </div>
  </div>
);

export default LiquidityOnboarding;