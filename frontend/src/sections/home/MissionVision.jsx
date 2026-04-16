import React from 'react';

const MissionVision = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
        
        {/* Mission Column - Light Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-20 bg-white relative group overflow-hidden">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -left-10 text-[15rem] font-black text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-500">
            01
          </span>
          
          <div className="relative z-10">
            <div className="w-16 h-1.5 bg-blue-600 mb-10 rounded-full"></div>
            <h3 className="text-4xl font-black text-blue-900 mb-8 uppercase tracking-tighter italic">
              Our Mission
            </h3>
            <p className="text-xl text-gray-500 leading-[1.8] font-light italic">
              To empower global commerce through <span className="text-blue-900 font-semibold not-italic">superior structural protection</span>. 
              We innovate manufacturing processes to ensure every box we produce is a promise of 
              safety, reliability, and brand integrity.
            </p>
          </div>
        </div>

        {/* Vision Column - Dark Premium Aesthetic */}
        <div className="lg:w-1/2 p-12 md:p-20 bg-blue-900 relative group overflow-hidden">
          {/* Subtle Decorative Background Number */}
          <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-blue-800/30 select-none group-hover:text-blue-800/50 transition-colors duration-500">
            02
          </span>

          <div className="relative z-10">
            <div className="w-16 h-1.5 bg-blue-400 mb-10 rounded-full"></div>
            <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter italic">
              Our Vision
            </h3>
            <p className="text-xl text-blue-100/80 leading-[1.8] font-light italic">
              To redefine the <span className="text-white font-semibold not-italic">standards of packaging</span> across India. 
              By integrating zero-waste manufacturing with global quality benchmarks, 
              we aim to lead a sustainable revolution in industrial logistics.
            </p>
          </div>
        </div>

      </div>
      
      {/* Bottom Trust Line */}
      <div className="mt-16 text-center">
        <p className="text-sm font-bold text-gray-300 uppercase tracking-[0.5em]">
          Innovating Corrugation Since 2019
        </p>
      </div>
    </div>
  </section>
);

export default MissionVision;