import React from 'react'

import { productData } from '../../data/products';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => (
  <section className="py-24 bg-blue-600 relative overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 skew-x-12 translate-x-1/2"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold text-white tracking-tighter leading-tight mb-8">
            Find your ideal <br/> packaging effortlessly.
          </h2>
          <p className="text-blue-100 text-xl font-light mb-12">
            Not sure where to start? Our experts help you discover the perfect match for your product safety.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-2xl">Start Now</button>
            <button className="px-8 py-4 bg-transparent border border-white/40 text-white rounded-full font-bold">View Services ↗</button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-[3rem] group-hover:bg-white/20 transition-all"></div>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000" className="relative rounded-[2rem] shadow-2xl scale-100 group-hover:scale-105 transition-transform" alt="Support" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProducts