import React from 'react';

const ProductHero = () => (
  <section className="bg-white py-32 border-b border-slate-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col items-center text-center">
        
        {/* Standardized Section Label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-[2px] w-8 bg-[#FFC107]"></span>
          <span className="text-[#0B5ED7] text-[10px] font-black uppercase tracking-[0.4em]">
            Catalog 2026
          </span>
          <span className="h-[2px] w-8 bg-[#FFC107]"></span>
        </div>

        {/* Heading - Industrial Black Typography */}
        <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-12">
          Manufacturing <br/> 
          <span className="text-[#FFC107]">Solutions.</span>
        </h1>

        {/* Description - Consistent Medium Weight */}
        <p className="text-slate-500 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">
          Explore our comprehensive suite of industrial packaging, engineered for 
          <span className="text-slate-900 font-bold"> structural durability</span> and designed to safeguard your brand's integrity.
        </p>
      </div>
    </div>
  </section>
);

export default ProductHero;