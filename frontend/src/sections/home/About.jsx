import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../../components/Counter';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { value: 20.5, suffix: "k", label: "Successfully Trained" },
    { value: 450, suffix: "+", label: "Students Community" },
    { value: 20.5, suffix: "k", label: "Successfully Trained" },
  ]; 

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* 1. Left Section: Vertical Stats List */}
          <div className="flex-none w-full lg:w-[250px] flex flex-col gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Numbers: Medium weight instead of bold */}
                <p className="text-5xl font-medium text-slate-900 tracking-tighter leading-none">
                  <Counter end={stat.value} decimals={1} suffix={stat.suffix} />
                </p>
                {/* Label: Normal weight, slightly larger */}
                <p className="text-[13px] font-normal text-slate-600 mt-3 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* 2. Center Section: Image with Overlay */}
          <div className="flex-1 relative">
            {/* The Floating 'ABOUT US' Circle Overlay */}
            <div className="absolute -top-6 -left-10 z-20 w-32 h-32 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full p-2 animate-[spin_10s_linear_infinite]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[10px] font-medium uppercase tracking-[0.1em] fill-slate-500">
                  <textPath href="#circlePath">ABOUT US • ABOUT US • ABOUT US • </textPath>
                </text>
              </svg>
            </div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
                className="w-full h-[580px] object-cover" 
                alt="Founder" 
              />
            </div>
          </div>

          {/* 3. Right Section: Text Content & Button */}
          <div className="flex-1 max-w-lg">
            {/* Label: Very small and thin */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-blue-600"></div>
              <span className="text-blue-600 text-[10px] font-semibold uppercase tracking-[0.4em]">
                About Company
              </span>
            </div>
            
            {/* Heading: Bold only here to define the focal point */}
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-10 tracking-tight">
              Creative agency &<br/> 
              their best solutions
            </h2>
            
            {/* Description: Normal weight for readability */}
            <p className="text-lg text-slate-600 font-normal leading-relaxed mb-16">
              Viverra gravida pretium fusce in placerat orci nulla pellentesque. Aliquet porttitor lacus luctus accumsan tortor.
            </p>
            
            {/* Button: Minimalist with subtle hover */}
            <Link 
              to="/about"
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-9 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Read More
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;