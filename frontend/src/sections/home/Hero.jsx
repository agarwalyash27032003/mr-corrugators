import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-industrial-slate">
    {/* Background Image with Vibrant Overlay */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000" 
        className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        alt="Industrial Factory"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-industrial-slate via-transparent to-blue-500/20"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 pt-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-xs mb-6 block">
          Since 2019 • Premier Manufacturing
        </span>
        <h1 className="text-6xl md:text-[6rem] font-bold text-white leading-[0.9] tracking-tighter mb-10">
          Precision <br/> <span className="text-blue-500">Packaging</span> <br/> for Global Brands.
        </h1>

        <div className="flex flex-wrap gap-6 items-center">
          <Link to="/products" className="btn-pill bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Explore Products
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">→</div>
          </Link>
          <div className="hidden md:flex gap-10 ml-8 border-l border-white/20 pl-10">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-[10px] text-blue-300 uppercase tracking-widest">Global Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-[10px] text-blue-300 uppercase tracking-widest">Support</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;