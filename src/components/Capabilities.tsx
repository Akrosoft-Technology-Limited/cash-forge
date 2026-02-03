import { ArrowRight, Zap } from "lucide-react";

const Capabilities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-[#00674E] tracking-[0.2em] uppercase mb-4">Strategic Strengths</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-[#1a1a1a]">
            The CashForge Advantage.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Feature */}
          <div className="md:col-span-7 bg-[#f8f9fa] rounded-[32px] p-12 flex flex-col justify-between border border-gray-100 hover:border-brand-primary/20 transition-all group">
            <div>
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Zap className="text-white" />
              </div>
              <h4 className="text-3xl font-bold mb-4">Hyper-Speed Funding</h4>
              <p className="text-gray-500 text-lg leading-relaxed">
                We eliminate the bureaucracy of traditional banking. Our digital-first evaluation process ensures approval and disbursement happen in a fraction of the time.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[#00674E] font-bold">
              <span>View Security Protocols</span>
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Side Stack 1 */}
          <div className="md:col-span-5 bg-[#00674E] rounded-[32px] p-10 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h4 className="text-2xl font-bold mb-4">Absolute Discretion</h4>
            <p className="text-white/70">
              High-value lending requires privacy. Our processes are confidential, protecting the reputation and identity of our esteemed clients.
            </p>
          </div>

          {/* Bottom Stack 1 */}
          <div className="md:col-span-5 bg-brand-primary rounded-[32px] p-10 text-white">
             <h4 className="text-2xl font-bold mb-4">Fair Market Valuation</h4>
             <p className="text-white/80">Expert appraisers ensure you get the maximum loan value based on the real-time worth of your luxury assets.</p>
          </div>

          {/* Bottom Stack 2 */}
          <div className="md:col-span-7 bg-[#f1f3f5] rounded-[32px] p-10 flex items-center justify-between">
             <div className="max-w-[60%]">
               <h4 className="text-2xl font-bold mb-2 font-display">Flexible Repayment</h4>
               <p className="text-gray-500">Custom cycles designed around your business cashflow or personal milestones.</p>
             </div>
             <div className="text-5xl font-black text-gray-200">0%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;