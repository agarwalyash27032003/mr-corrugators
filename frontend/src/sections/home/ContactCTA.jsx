import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden px-8 py-16 md:p-20 text-center">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
            Let's Collaborate
          </span>
          
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight mb-8">
            Ready to secure your products with <br/> 
            <span className="font-normal italic">precision packaging?</span>
          </h2>
          
          <p className="text-slate-500 font-light text-lg mb-12 leading-relaxed">
            Whether you need custom dimensions or bulk industrial supply, 
            our unit in Siliguri is equipped to deliver.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
            >
              Get a Custom Quote
            </Link>
            
            <Link 
              to="/products" 
              className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-slate-400 hover:text-slate-800 transition-all pb-1"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Line */}
      <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-30 grayscale">
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Factory Direct</span>
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Eco-Friendly</span>
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Premium Quality</span>
      </div>
    </div>
  </section>
);

export default ContactCTA;