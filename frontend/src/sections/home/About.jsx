import React from 'react';
import Counter from '../../components/Counter';

const About = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image with Layered Badge */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
              className="w-full h-[500px] object-cover" 
              alt="Founder" 
            />
          </div>
          
          {/* Fixed Floating Badge: Positioned at the 'intersection' */}
          <div className="absolute -bottom-6 -right-6 lg:right-[-20%] lg:top-1/2 lg:-translate-y-1/2 z-20">
            <div className="bg-blue-600 p-10 md:p-12 rounded-[2rem] text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] border-4 border-white">
              <p className="text-6xl font-black leading-none italic tracking-tighter">
                <Counter end={7} suffix="+" />
              </p>
              <p className="uppercase text-xs font-bold tracking-[0.2em] mt-2 opacity-90">
                Years of Excellence
              </p>
            </div>
          </div>
          
          {/* Subtle Decorative Background Element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full z-0"></div>
        </div>

        {/* Right Side: Content Area */}
        <div className="lg:w-1/2 lg:pl-12">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
            About The Company
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-[1.1] mb-8 italic">
            Built on Trust, <br/> 
            <span className="text-blue-600 not-italic">Delivered with Care.</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
            MR Corrugators is a premier manufacturer in Siliguri. Our founder 
            envisioned a company that bridged the gap between <span className="font-semibold text-blue-900">high-quality manufacturing</span> and 
            affordable pricing by eliminating middlemen entirely.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-12 pt-10 border-t border-gray-100">
            <div className="space-y-1">
              <p className="text-4xl font-black text-blue-900 tracking-tighter">
                <Counter end={500} suffix="+" />
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Clients Nationwide
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-blue-900 tracking-tighter">
                <Counter end={1000} suffix="k+" />
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
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