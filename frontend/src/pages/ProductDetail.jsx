import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  const relatedProducts = productData
    .filter((p) => p.id !== id)
    .slice(0, 3);

  // 🔥 Slideshow State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!product?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [product]);

  if (!product) {
    return (
      <div className="py-24 text-center bg-white min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
          Not Found.
        </h2>
        <Link
          to="/products"
          className="inline-flex mx-auto bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] shadow-lg"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white min-h-screen pt-16">
      
      {/* Back */}
      <div className="bg-white border-b border-slate-100 py-6 mt-[70px] md:mt-[80px]">
        <div className="container mx-auto px-5 max-w-7xl">
          <Link
            to="/products"
            className="group text-[10px] font-black text-slate-400 tracking-[0.3em] flex items-center gap-3 hover:text-[#0B5ED7] transition-colors"
          >
            <span className="text-[#FFC107]">←</span> BACK TO SOLUTIONS
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-5 py-10 md:py-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* 🔥 Slideshow */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:sticky lg:top-32 rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm"
          >
            <div className="relative w-full h-full aspect-[4/5]">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-400 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:pt-4">
            <header className="mb-10 md:mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#FFC107]"></div>
                <span className="text-[#0B5ED7] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-[3rem] font-black text-slate-900 tracking-tighter leading-[1.0] mb-8 uppercase">
                {product.name}
              </h1>

              <p className="text-lg md:text-lg text-slate-500 font-medium leading-relaxed">
                {product.description}
              </p>
            </header>

            {/* Features */}
            <div className="mb-12 md:mb-20">
              <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-900">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">
                  Technical Specifications
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-y-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-5 px-4 rounded-xl border border-slate-100 bg-slate-50/50 group hover:border-[#FFC107] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#0B5ED7]"></div>
                      <span className="text-base md:text-[18px] text-slate-800 font-bold tracking-tight uppercase">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-200">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#0B5ED7] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[12px] text-center whitespace-nowrap hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-lg"
              >
                Request a Quote
              </Link>
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-black text-[#FFC107] uppercase tracking-[0.2em] mb-1">
                  Status: Operational
                </p>
                <p className="text-xs text-slate-400 font-bold tracking-tight uppercase">
                  Avg Lead: 3–5 Business Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="flex items-center gap-3 mb-16">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em]">
              Related Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-8 border border-slate-200 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={p.images?.[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <h5 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 uppercase leading-none group-hover:text-[#0B5ED7] transition-colors">
                  {p.name}
                </h5>
                <p className="text-[10px] font-black text-[#FFC107] uppercase tracking-widest">
                  {p.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;