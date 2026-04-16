import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

const ProductList = () => {
  // 1. Get unique categories from your data
  const categories = [...new Set(productData.map(item => item.category))];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {categories.map((category) => (
          <div key={category} className="mb-20 last:mb-0">
            {/* Dynamic Heading - Minimal & Simple */}
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-xl font-medium text-slate-800 tracking-tight uppercase">
                {category}
              </h2>
              <div className="h-px bg-slate-100 flex-grow"></div>
            </div>

            {/* Grid for this specific category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {productData
                .filter((item) => item.category === category)
                .map((product) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id} 
                    className="group block"
                  >
                    {/* Image Container - Normal Colors */}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100 shadow-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Text Details */}
                    <div className="px-2">
                      <h3 className="text-lg font-medium text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        View Product →
                      </p>
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