import React from 'react';

const MissionVision = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100">
        
        {/* Mission Column - Light Industrial Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-24 bg-white relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -left-10 text-[18rem] font-black text-slate-50 select-none group-hover:text-slate-100 transition-colors duration-500 leading-none">
            01
          </span>
          
          <div className="relative z-10">
            {/* Standardized Yellow Accent Bar */}
            <div className="w-12 h-1.5 bg-[#FFC107] mb-10 rounded-full"></div>
            
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
              Our <span className="text-[#0B5ED7]">Mission</span>
            </h3>
            
            <p className="text-[19px] text-slate-600 leading-relaxed font-medium">
              To empower global commerce through <span className="text-slate-900 font-black">superior structural protection</span>. 
              We innovate manufacturing processes to ensure every box we produce is a promise of 
              safety, reliability, and brand integrity.
            </p>
          </div>
        </div>

        {/* Vision Column - Preserved Blue Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-24 bg-[#051635] relative group overflow-hidden">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -right-10 text-[18rem] font-black text-white/5 select-none group-hover:text-white/10 transition-colors duration-500 leading-none">
            02
          </span>

          <div className="relative z-10">
            {/* Standardized Yellow Accent Bar for Blue contrast */}
            <div className="w-12 h-1.5 bg-[#FFC107] mb-10 rounded-full"></div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
              Our <span className="text-[#0B5ED7]">Vision</span>
            </h3>
            
            <p className="text-[19px] text-blue-100/70 leading-relaxed font-medium">
              To redefine the <span className="text-white font-black">standards of packaging</span> across India. 
              By integrating zero-waste manufacturing with global quality benchmarks, 
              we aim to lead a sustainable revolution in industrial logistics.
            </p>
          </div>
        </div>

      </div>
    
    </div>
  </section>
);

export default MissionVision;