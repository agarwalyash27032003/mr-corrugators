import React from 'react'

import { productData } from '../../data/products';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featured = productData.slice(0, 3); // Top 3 products
  return ( 
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">Catalog</span>
          <h2 className="text-3xl font-light text-slate-800 mt-2">Popular Solutions</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className="group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-lg font-medium text-slate-800">{p.name}</h4>
              <p className="text-xs text-blue-500 font-bold uppercase mt-1">Explore Details</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts