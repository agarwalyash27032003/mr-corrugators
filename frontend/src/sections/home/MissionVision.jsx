import React from 'react';

const MissionVision = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100">
        
        {/* Mission Column - Light Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-20 bg-white relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -left-10 text-[15rem] font-bold text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-500 leading-none">
            01
          </span>
          
          <div className="relative z-10">
            <div className="w-12 h-1 bg-blue-600 mb-10 rounded-full"></div>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 uppercase tracking-tighter">
              Our Mission
            </h3>
            <p className="text-xl text-slate-500 leading-relaxed font-normal">
              To empower global commerce through <span className="text-slate-900 font-bold">superior structural protection</span>. 
              We innovate manufacturing processes to ensure every box we produce is a promise of 
              safety, reliability, and brand integrity.
            </p>
          </div>
        </div>

        {/* Vision Column - Dark Premium Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-20 bg-blue-950 relative group overflow-hidden">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -right-10 text-[15rem] font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500 leading-none">
            02
          </span>

          <div className="relative z-10">
            <div className="w-12 h-1 bg-blue-400 mb-10 rounded-full"></div>
            <h3 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter">
              Our Vision
            </h3>
            <p className="text-xl text-blue-100/70 leading-relaxed font-normal">
              To redefine the <span className="text-white font-bold">standards of packaging</span> across India. 
              By integrating zero-waste manufacturing with global quality benchmarks, 
              we aim to lead a sustainable revolution in industrial logistics.
            </p>
          </div>
        </div>

      </div>
      
      {/* Bottom Trust Line */}
      <div className="mt-16 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.6em]">
          Innovating Corrugation Since 2019
        </p>
      </div>
    </div>
  </section>
);

export default MissionVision;