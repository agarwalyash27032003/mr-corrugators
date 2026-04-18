import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

const FeaturedProducts = () => {
  // Constraining to 4 items or keeping 3 with a smaller width makes them feel more premium
  const featuredIds = ['kraft-box', 'duplex-box', 'plain-tape', 'heavy-duty-box'];
  const featured = productData.filter(p => featuredIds.includes(p.id)).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header - CONSISTENT STYLE */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
              Since 2019 • Featured Range
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Our Best <span className="text-[#FFC107]">Solutions.</span>
          </h2>
        </div>

        {/* Grid - Switched to 4 columns to make cards smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className="group block">
              
              {/* Image - More compact aspect ratio */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6 relative transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={p.name} 
                />
                
                {/* Yellow Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B5ED7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content - Scaled down for smaller cards */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#0B5ED7] transition-colors">
                  {p.name}
                </h3>
                
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Industrial Grade
                </p>
                
                <div className="pt-1 flex items-center gap-2">
                  <span className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">
                    Details
                  </span>
                  <div className="h-[1.5px] w-4 bg-[#FFC107] group-hover:w-8 transition-all duration-300"></div>
                </div>
              </div>
              
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link 
            to="/products" 
            className="group inline-flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-slate-900"
          >
            <span>View All Products</span>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;