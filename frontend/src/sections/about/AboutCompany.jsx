import React from 'react';
import { motion } from 'framer-motion';

const AboutCompany = () => {
  const galleryImages = [
    "https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/WhatsApp%20Image%202026-04-26%20at%2017.08.08.jpeg",
    "https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/WhatsApp%20Image%202026-04-26%20at%2017.08.09%20(1).jpeg",
    "https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/WhatsApp%20Image%202026-04-26%20at%2017.08.09.jpeg",
    "https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/WhatsApp%20Image%202026-04-26%20at%2017.08.08%20(1).jpeg",
  ];

  return (
    <section className="pt-32 pb-8 bg-white">
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
      </div>
    </section>
  );
};

export default AboutCompany;