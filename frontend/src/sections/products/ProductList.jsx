import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

const ProductList = () => {
  const categories = [...new Set(productData.map(item => item.category))];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {categories.map((category, index) => (
          <div key={category} className="mb-32 last:mb-0">
            
            {/* Standardized Industrial Category Header */}
            <div className="flex items-center gap-6 mb-16">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#FFC107]"></span>
                  <span className="text-[#0B5ED7] text-[10px] font-black uppercase tracking-[0.4em]">
                    Section 0{index + 1}
                  </span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
                  {category}.
                </h2>
              </div>
              <div className="h-[1px] bg-slate-100 w-full mt-8"></div>
            </div>

            {/* Fixed 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {productData
                .filter((item) => item.category === category)
                .map((product) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id} 
                    className="group block"
                  >
                    {/* Square Image Container with Hover Lift */}
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-200 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:-translate-y-2">
                      <img 
                        src={product.images?.[0]} 
                        alt={product.name} 
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Subtle Tint Overlay */}
                      <div className="absolute inset-0 bg-[#0B5ED7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Industrial Text Hierarchy */}
                    <div className="space-y-3 px-1">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#0B5ED7] transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Industrial Certified
                      </p>
                      
                      {/* Animated Interaction Line */}
                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
                          View Specs
                        </span>
                        <div className="relative h-[1.5px] flex-grow bg-slate-100 overflow-hidden">
                          <div className="absolute inset-0 bg-[#FFC107] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </div>
                        <span className="text-[#0B5ED7] font-black group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;