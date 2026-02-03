import { ArrowRight, Bell, Home, Plus, Settings, TrendingUp, Zap } from "lucide-react";

const LiquidityCockpit = () => (
  <div className="min-h-screen bg-white p-6">
    {/* User Header */}
    <div className="flex justify-between items-center mb-10">
      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 rounded-2xl bg-gray-100 border-b-4 border-[#00674E] flex items-center justify-center text-2xl">👤</div>
        <div>
          <h2 className="text-xl font-black text-[#1A1A1A]">Welcome, Chief.</h2>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Gold Tier Member</p>
        </div>
      </div>
      <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center shadow-inner">
         <Bell size={20} className="text-gray-300" />
      </div>
    </div>

    {/* Bento Grid Stats */}
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-[#00674E] p-6 rounded-[2.5rem] text-white">
        <TrendingUp size={24} className="mb-4 opacity-50" />
        <p className="text-[10px] font-bold uppercase mb-1 opacity-70">Credit Limit</p>
        <p className="text-2xl font-black leading-none">₦15.0M</p>
      </div>
      <div className="bg-[#F8F9FA] p-6 rounded-[2.5rem] border border-gray-100">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mb-4">
           <Zap size={16} className="text-brand-primary" />
        </div>
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Interest Accrued</p>
        <p className="text-2xl font-black text-[#1A1A1A]">0.04%</p>
      </div>
    </div>

    {/* The "GreenStride" Style Dial - Utilization Meter */}
    <div className="bg-[#F8F9FA] rounded-[3rem] p-8 border border-white shadow-xl relative overflow-hidden">
      <h3 className="text-center text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">Real-Time Utilization</h3>
      
      <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
        {/* Custom SVG Dial */}
        <svg className="w-full h-full -rotate-90">
          <circle cx="112" cy="112" r="100" stroke="#E9ECEF" strokeWidth="15" fill="none" />
          <circle cx="112" cy="112" r="100" stroke="#00674E" strokeWidth="15" fill="none" strokeDasharray="628" strokeDashoffset="200" strokeLinecap="round" />
        </svg>
        <div className="absolute flex flex-col items-center">
          <p className="text-5xl font-black text-[#1A1A1A]">68<span className="text-xl">%</span></p>
          <p className="text-[10px] text-gray-400 font-black uppercase">Low Usage Risk</p>
        </div>
      </div>
      
      <div className="mt-10 flex justify-between items-center bg-white p-4 rounded-3xl shadow-sm">
         <span className="text-xs font-bold text-gray-400">Total Portfolio Yield</span>
         <span className="text-sm font-black text-[#00674E]">Healthy +12.4%</span>
         <ArrowRight size={16} className="text-gray-300" />
      </div>
    </div>

    {/* Fixed Bottom Navigation (The Hub) */}
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1A1A1A] p-2 rounded-full flex gap-4 items-center shadow-2xl">
       <button className="w-14 h-14 rounded-full bg-[#00674E] text-white flex items-center justify-center"><Home size={24} /></button>
       <button className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-[0_10px_30px_rgba(227,46,0,0.5)]"><Plus size={32} /></button>
       <button className="w-14 h-14 rounded-full bg-transparent text-gray-500 flex items-center justify-center"><Settings size={24} /></button>
    </div>
  </div>
);


export default LiquidityCockpit;