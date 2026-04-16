import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-[85vh] flex items-center bg-blue-900 overflow-hidden">
    {/* The Banner Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000" 
        className="w-full h-full object-cover opacity-50"
        alt="Packaging Banner"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <span className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 block">Est. 2019</span>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
          MASTERING <br/> <span className="text-blue-500">PACKAGING.</span>
        </h1>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
          High-performance corrugated solutions for global industries. 
          Direct from our manufacturing facility to your business.
        </p>
        <div className="flex flex-wrap gap-5">
          <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl">
            View Collection
          </Link>
          <Link to="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all">
            Get Quote
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;