import React from 'react';

const ProductHero = () => (
  <section className="bg-white py-32 border-b border-slate-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col items-center text-center">
        
        {/* Little Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-blue-600"></div>
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.5em]">
            Catalog 2026
          </span>
          <div className="h-[1px] w-8 bg-blue-600"></div>
        </div>

        {/* Big Header - Aligned Typography */}
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none mb-10">
          Manufacturing <br/> 
          <span className="text-slate-200">Solutions.</span>
        </h1>

        {/* Professional Prose */}
        <p className="text-slate-500 max-w-2xl mx-auto text-xl font-normal leading-relaxed">
          Explore our comprehensive suite of industrial packaging, engineered for 
          structural durability and designed to safeguard your brand's integrity.
        </p>
      </div>
    </div>
  </section>
);

export default ProductHero;