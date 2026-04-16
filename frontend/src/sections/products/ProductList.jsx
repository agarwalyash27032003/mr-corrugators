import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

const ProductList = () => {
  const categories = [...new Set(productData.map(item => item.category))];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {categories.map((category, index) => (
          <div key={category} className="mb-24 last:mb-0">
            
            {/* Minimal Category Header */}
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tighter whitespace-nowrap">
                {category}
              </h2>
              <div className="h-[1px] bg-slate-100 w-full"></div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] whitespace-nowrap">
                Sec / 0{index + 1}
              </span>
            </div>

            {/* Compact 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productData
                .filter((item) => item.category === category)
                .map((product) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id} 
                    className="group block"
                  >
                    {/* Compact Image Container */}
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-50 mb-5 border border-slate-100 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Refined Text Hierarchy */}
                    <div className="space-y-1 px-1">
                      <h3 className="text-lg font-medium text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          Explore
                        </span>
                        <div className="h-[1px] w-4 bg-slate-200 group-hover:w-8 group-hover:bg-blue-600 transition-all duration-500"></div>
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