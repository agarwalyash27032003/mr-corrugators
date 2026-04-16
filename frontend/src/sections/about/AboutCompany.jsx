import React from 'react';
import { motion } from 'framer-motion';

const AboutCompany = () => {
  const galleryImages = [
    "/images/factory-1.jpg", "/images/factory-2.jpg", "/images/factory-3.jpg", 
    "/images/factory-4.jpg", "/images/factory-5.jpg"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section 01: The Vision Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-32">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.5em]">The Vision</span>
              <div className="h-[1px] w-12 bg-blue-100"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.95]">
              Beyond <br/>
              <span className="text-slate-200">Packaging.</span>
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pt-16">
            <p className="text-xl md:text-2xl text-slate-500 font-normal leading-relaxed mb-8">
              MR Corrugators is a solutions-driven enterprise engineered to support the scale of growing companies. We don't just manufacture boxes; we manage the responsibility of protecting your business reputation.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-slate-200"></div>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                Established 2018 • Siliguri
              </p>
            </div>
          </div>
        </div>

        {/* Section 02: The Operational Gallery (Infinite) */}
        <div className="mb-32 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden flex">
            <motion.div 
              className="flex gap-8 flex-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }}}
            >
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <div key={index} className="w-[400px] h-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                  <img 
                    src={img} 
                    alt="Industrial Operations" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section 03: Values & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden">
          
          {/* Item 01 */}
          <div className="bg-white p-12 hover:bg-slate-50/50 transition-colors group">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-10">01. Clarity of Purpose</span>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">Requirement First.</h3>
            <p className="text-slate-500 leading-relaxed font-normal">
              Our process is rooted in understanding. We analyze specific logistics requirements to deliver high-performance corrugated solutions that perform under pressure.
            </p>
          </div>

          {/* Item 02 */}
          <div className="bg-white p-12 hover:bg-slate-50/50 transition-colors group">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-10">02. Integrity of Build</span>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">No Compromise.</h3>
            <p className="text-slate-500 leading-relaxed font-normal">
              From customized tapes to bubble wraps and stretch films, we maintain a zero-compromise policy on material density and structural integrity.
            </p>
          </div>

          {/* Item 03 */}
          <div className="bg-white p-12 hover:bg-slate-50/50 transition-colors group">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-10">03. Scalable Logistics</span>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">Designed to Scale.</h3>
            <p className="text-slate-500 leading-relaxed font-normal">
              Since 2018, we have evolved with our clients. Our facility is designed to scale production rapidly to match your business growth and delivery timelines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;