import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Find the specific product
  const product = productData.find((p) => p.id === id);

  // Grab a few related products (different from the current one)
  const relatedProducts = productData
    .filter((p) => p.id !== id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="py-40 text-center bg-slate-50 min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tighter uppercase italic">Product Not Found</h2>
        <p className="text-gray-500 mb-8">The packaging solution you requested is currently unavailable.</p>
        <Link to="/products" className="inline-block mx-auto bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-xl">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white min-h-screen"
    >
      {/* Premium Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-6">
        <div className="container mx-auto px-6">
          <Link to="/products" className="group text-xs font-black text-blue-600 tracking-[0.2em] flex items-center gap-2">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO CATALOG
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Elite Image Showcase */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-28 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-8 border-white bg-slate-50"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Detailed Content */}
          <div className="space-y-12">
            <header>
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                {product.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-blue-900 leading-[1.1] mb-6 tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-400 font-light leading-relaxed italic">
                {product.description}
              </p>
            </header>

            {/* Premium Specs Box */}
            <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-500"></div>
              
              <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-8 text-blue-400 relative z-10">
                Technical Specifications
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-blue-50 font-medium text-lg">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Quote Action */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest text-center"
              >
                Request Quote
              </Link>
              <div className="text-center sm:text-left">
                <p className="text-xs font-black text-blue-900 uppercase tracking-widest">In Stock</p>
                <p className="text-xs text-gray-400">Customization takes 3-5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Premium Customization CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 opacity-60"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-blue-50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-black text-blue-900 mb-3 tracking-tighter leading-tight">
                Need a Different Size <br className="hidden md:block"/> 
                <span className="text-blue-600 font-medium italic">or Custom Branding?</span>
              </h4>
              <p className="text-gray-500 font-light max-w-sm">
                Our manufacturing facility specializes in custom dimensions and single/double printed solutions.
              </p>
            </div>
            <Link to="/contact" className="bg-blue-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black transition-colors shadow-xl">
              Start Customizing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-black text-blue-900 uppercase tracking-[0.5em] text-center mb-16">
            Explore Other Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group">
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-100 mb-6 border border-slate-50 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h5 className="text-xl font-black text-blue-900 tracking-tighter group-hover:text-blue-600 transition-colors uppercase italic">{p.name}</h5>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">{p.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;