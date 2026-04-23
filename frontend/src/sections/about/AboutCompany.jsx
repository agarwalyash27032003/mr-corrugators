import React from 'react';
import { motion } from 'framer-motion';

const AboutCompany = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800",
    "https://images.unsplash.com/photo-1530124560676-587cad3213c3?q=80&w=800"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-8 bg-[#FFC107]"></span>
              <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
                The Vision
              </span>
            </div>

            <h2 className="text-5xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.95]">
              Beyond <br/>
              <span className="text-[#FFC107]">Packaging.</span>
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pt-16">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-slate-900 font-bold leading-snug">
                MR Corrugators is not just a packaging manufacturer—it is a solutions-driven business built to support growing companies with reliable and efficient packaging.
              </p>
              <p className="text-lg md:text-xl text-slate-900 font-bold leading-snug">
                Since 2018, we have been delivering high-quality corrugated boxes, customized tapes, stretch films, bubble wraps, and packing materials designed to protect, perform, and scale with our clients’ needs.
              </p>
              <p className="text-lg md:text-xl text-slate-900 font-bold leading-snug">
                What sets us apart is our clarity of purpose—understand the requirement, deliver the right solution, and do it consistently. No over-promising, no compromise on quality.
              </p>
              <p className="text-lg md:text-xl text-slate-900 font-bold leading-snug">
                For us, packaging is not just a product—it’s a responsibility towards our clients’ business, their goods, and their reputation.
              </p>
              
            </div>

            <div className="flex items-center gap-6 mt-12">
              <div className="w-16 h-[2px] bg-[#FFC107]"></div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest">
                Established 2018 • Siliguri Headquarters
              </p>
            </div>
          </div>
        </div>

        <div className="mb-32 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden flex">
            <motion.div 
              className="flex gap-8 flex-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }}}
            >
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <div key={index} className="w-[450px] h-[300px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <img 
                    src={img} 
                    alt="Industrial Operations" 
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className="bg-white p-14 hover:bg-slate-50 transition-all group">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">01. Clarity</span>
              <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
                <span className="text-slate-300 group-hover:text-slate-900">→</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Requirement <br/>First.</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-[15px]">Our process is rooted in understanding. We analyze specific logistics requirements to deliver high-performance corrugated solutions.</p>
          </div>

          <div className="bg-white p-14 hover:bg-slate-50 transition-all group border-x border-slate-100">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">02. Integrity</span>
              <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
                <span className="text-slate-300 group-hover:text-slate-900">→</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6">No <br/>Compromise.</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-[15px]">From customized tapes to stretch films, we maintain a zero-compromise policy on material density and structural integrity.</p>
          </div>

          <div className="bg-white p-14 hover:bg-slate-50 transition-all group">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">03. Scalability</span>
              <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
                <span className="text-slate-300 group-hover:text-slate-900">→</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Designed <br/>To Scale.</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-[15px]">Our facility is designed to scale production rapidly to match your business growth and delivery timelines without loss in quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;