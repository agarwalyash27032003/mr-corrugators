import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../../components/Counter';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { value: 300, suffix: "+", label: "Clients" },
    { value: 10000, suffix: "+", label: "Boxes Produced Daily" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: "★", label: "Customer Satisfaction" },
  ]; 

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* 🏢 Professional Industrial Wrapper */}
        <div className="relative rounded-[2.5rem] bg-slate-100 px-8 py-16 lg:px-20 overflow-hidden border border-slate-200 shadow-sm">
          
          {/* Subtle Industrial Accent: A large, faded blue 'MR' in the bg */}
          <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-slate-200/50 select-none pointer-events-none">
            MR
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Stats Column */}
            <div className="flex-none w-full lg:w-[220px] flex flex-col gap-12 order-2 lg:order-1">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start group">
                  <p className="text-5xl font-black text-slate-900 tracking-tighter leading-none flex items-center gap-1">
                    <Counter end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                    <span className="text-[#0B5ED7]">{stat.suffix}</span>
                  </p>
                  <p className="text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                  {/* Yellow underline accent on hover */}
                  <div className="h-[2px] w-0 bg-[#FFC107] mt-1 transition-all group-hover:w-full"></div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="flex-1 relative order-1 lg:order-2 w-full lg:w-auto">
              
              {/* Rotating badge - Yellow Background for Contrast */}
              <div className="absolute -top-6 -right-6 lg:-right-10 z-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#FFC107] flex items-center justify-center shadow-xl rotate-12">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2 animate-[spin_12s_linear_infinite]">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] font-black uppercase tracking-[0.15em] fill-slate-900">
                    <textPath href="#circlePath">QUALITY • PRECISION • SCALE • </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Main Image with Industrial Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" // More industrial/factory focused image
                  className="w-full h-[400px] lg:h-[550px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                  alt="Industrial Excellence" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 max-w-xl order-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#0B5ED7]"></div>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">
                  The Legacy
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                Engineering <span className="text-[#0B5ED7]">Durability</span> <br/> 
                at Every Layer.
              </h2>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                MR Corrugators has redefined packaging in North Bengal. From heavy-duty industrial shipping to precision retail boxes, we build with a commitment to <span className="text-slate-900 font-bold">zero-defect manufacturing.</span>
              </p>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-[11px] shadow-lg hover:bg-[#0B5ED7] transition-all hover:scale-[1.02] active:scale-95 group"
              >
                Learn Our Story
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;