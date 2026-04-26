import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../index.css"

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">

    <div className="absolute inset-0">
      
      <motion.img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000"
        className="w-full h-full object-cover"
        alt="Industrial Factory"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-slate-950/60"></div>

      <div className="absolute inset-0"></div>

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-10 max-w-7xl mt-32">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-8 bg-[#FFC107]"></span>
          <span className="text-[#FFC107] font-bold uppercase tracking-[0.25em] text-[11px]">
            Since 2018 • Manufacturing Excellence
          </span>
        </div>

        <h1 className="hero-h font-black text-white leading-[0.95] tracking-tighter mb-8">
          One Stop <br/>
          <span className="text-[#FFC107]">Packaging</span>{" "}
          <span className="relative inline-block">
            Solutions.
            <div className="absolute bottom-1 left-0 w-full h-1.5 md:h-2 bg-[#FFC107] -z-10 shadow-[0_2px_10px_rgba(255,193,7,0.25)]"></div>
          </span>
        </h1>

        <p className="hero-text text-white font-medium leading-relaxed mb-4 md:mb-8">
          Manufacturers of high-quality packaging solutions. One Stop Packaging Solutions for all your needs. MR Corrugators is a manufacturer of Carton Boxes, Cello Tapes, Corrugated Packaging Rolls, Stretch Films, and Bubble Wrap, supporting businesses with a complete one-stop packaging solution for all their packaging needs.
        </p>

        <div className="flex flex-wrap gap-5 items-center">
          
          <Link 
            to="/products" 
            className="px-8 py-4 bg-[#FFC107] text-slate-900 rounded-full font-bold uppercase tracking-widest text-[12px] shadow-lg shadow-yellow-500/10 hover:bg-[#EAB308] active:scale-95 transition-all hover:-translate-y-0.5 flex items-center gap-3"
          >
            Explore Products
            <span className="font-black">→</span>
          </Link>

          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-[12px] hover:border-[#FFC107] hover:text-[#FFC107] transition-all"
          >
            Get a Quote
          </Link>

          {/* <div className="hidden lg:flex gap-10 ml-6 border-l border-white/20 pl-10">
            <div>
              <p className="text-2xl font-black text-[#FFC107]">500+</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                Global Shipments
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#FFC107]">24/7</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                Production Support
              </p>
            </div>
          </div> */}

        </div>
      </motion.div>

      <div className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 z-10">
        <img
          src="https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/Logo%20with%20BG.png?updatedAt=1776526210039"
          alt="Company Logo"
          className="w-40 opacity-90 object-contain"
        />
      </div>

    </div>
  </section>
);

export default Hero;