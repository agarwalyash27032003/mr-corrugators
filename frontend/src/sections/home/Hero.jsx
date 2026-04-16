import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-screen flex items-center bg-white overflow-hidden">
    {/* Full Screen Banner with Softened Overlay */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000" 
        className="w-full h-full object-cover" 
        alt="Industrial Packaging"
      />
      {/* Subtle Gradient to make white text pop without looking 'blue' or 'dark' */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    <div className="container mx-auto px-10 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-[5.5rem] font-medium text-white leading-[1.1] tracking-tight mb-12">
          Precision built <br/> 
          packaging for <br/> 
          modern industry.
        </h1>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Primary Action - Pill Style */}
          <Link 
            to="/products" 
            className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Explore Catalog
            <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-white/20">
              <span className="text-lg group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>

          {/* Secondary Action - Ghost Pill */}
          <Link 
            to="/contact" 
            className="flex items-center bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Elegant Side Detail */}
    <div className="absolute bottom-12 left-10 hidden lg:block">
      <div className="flex items-center gap-4 text-white/50">
        <div className="w-12 h-px bg-white/30"></div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Siliguri • West Bengal</p>
      </div>
    </div>
  </section>
);

export default Hero;