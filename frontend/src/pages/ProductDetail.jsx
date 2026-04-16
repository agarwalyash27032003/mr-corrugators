import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  const relatedProducts = productData
    .filter((p) => p.id !== id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="py-24 text-center bg-white min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">Not Found.</h2>
        <Link to="/products" className="inline-block mx-auto bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white min-h-screen">
      
      {/* Minimal Breadcrumb */}
<div className="bg-white border-b border-slate-100 py-4 mt-[70px] md:mt-[80px]"> 
  {/* mt-[70px] ensures it starts BELOW the fixed navbar on mobile */}
  <div className="container mx-auto px-5 max-w-7xl">
    <Link to="/products" className="group text-[9px] font-bold text-slate-400 tracking-[0.3em] flex items-center gap-2">
      <span>←</span> BACK TO SOLUTIONS
    </Link>
  </div>
</div>

      <div className="container mx-auto px-5 py-10 md:py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-start">
          
          {/* Image Showcase - Removed 'sticky' for mobile to prevent scrolling issues */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:sticky lg:top-32 rounded-2xl md:rounded-3xl overflow-hidden bg-slate-50 border border-slate-100"
          >
            <img src={product.image} alt={product.name} className="w-full h-auto aspect-[4/5] object-cover" />
          </motion.div>

          {/* Structured Content */}
          <div className="lg:pt-6">
            <header className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-6 bg-blue-600"></div>
                <span className="text-blue-600 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed">
                {product.description}
              </p>
            </header>

            {/* Technical Specs - Compact for Mobile */}
            <div className="mb-10 md:mb-16">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-slate-900">Specs</h3>
                <span className="text-[9px] text-slate-400 font-medium tracking-widest">2026 REV</span>
              </div>
              
              <div className="grid grid-cols-1 gap-y-0.5">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-4 px-2 rounded-lg border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-blue-600"></div>
                      <span className="text-base md:text-lg text-slate-700 font-medium tracking-tight">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar - Mobile Optimized Stacking */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-950 text-white">
              <Link to="/contact" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg text-center whitespace-nowrap">
                Request Quote
              </Link>
              <div className="text-center sm:text-left">
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">Status: Active</p>
                <p className="text-xs text-slate-400 font-medium tracking-tight">Fulfillment: 3–5 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Engineering - Responsive Padding & Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="relative overflow-hidden bg-slate-50 rounded-3xl md:rounded-[2.5rem] border border-slate-100">
            <div className="relative z-10 p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">Bespoke</span>
                </div>
                <h4 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">
                  Custom <span className="text-slate-300 font-medium">Engineering.</span>
                </h4>
                <p className="text-base md:text-xl text-slate-500 font-normal leading-relaxed">
                  Specialized custom-branded industrial solutions tailored to your unique logistics requirements.
                </p>
              </div>
              
              <Link to="/contact" className="w-full lg:w-auto bg-slate-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] text-center shadow-lg">
                Consult Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products - Grid columns adjusted */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-5 max-w-7xl">
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-12 text-center md:text-left">Related Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group">
                <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h5 className="text-xl font-bold text-slate-900 tracking-tighter mb-1 uppercase leading-none">{p.name}</h5>
                <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">{p.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;