import React from 'react';
import Counter from '../../components/Counter';

const About = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Side: Architectural Image Layout */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
              className="w-full h-[600px] object-cover" 
              alt="Founder" 
            />
            {/* Soft Overlay to match the reference look */}
            <div className="absolute inset-0 bg-slate-900/10"></div>
          </div>
          
          {/* Minimalist Floating Badge - Reduced size, lighter font */}
          <div className="absolute -bottom-10 -right-6 lg:right-[-10%] lg:top-1/2 lg:-translate-y-1/2 z-20">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 text-center">
              <p className="text-5xl font-light text-slate-900 tracking-tighter leading-none">
                <Counter end={7} suffix="+" />
              </p>
              <p className="uppercase text-[10px] font-bold tracking-[0.4em] text-blue-500 mt-3">
                Years Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="lg:w-1/2 lg:pl-16">
          <div className="inline-block text-blue-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-10">
            About The Company
          </div>
          
          <h2 className="text-5xl md:text-[4.5rem] font-light text-slate-900 leading-[1.1] mb-10 tracking-tight">
            Built on Trust, <br/> 
            <span className="text-slate-400 italic font-light">Delivered with Care.</span>
          </h2>
          
          <p className="text-lg text-slate-500 leading-relaxed font-light mb-16 max-w-lg">
            MR Corrugators is a premier manufacturer in Siliguri. Our founder 
            envisioned a company that bridged the gap between <span className="text-slate-900 font-normal">high-quality manufacturing</span> and 
            affordable pricing.
          </p>
          
          {/* Stats Bar - Minimalist Grid */}
          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
            <div className="space-y-2">
              <p className="text-3xl font-light text-slate-900 tracking-tight">
                <Counter end={500} suffix="+" />
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                Clients
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-light text-slate-900 tracking-tight">
                <Counter end={1000} suffix="k+" />
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                Boxes Produced
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;