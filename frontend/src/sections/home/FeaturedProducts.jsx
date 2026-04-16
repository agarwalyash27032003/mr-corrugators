import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

const FeaturedProducts = () => {
  const featuredIds = ['kraft-box', 'duplex-box', 'plain-tape'];
  const featured = productData.filter(p => featuredIds.includes(p.id));

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Featured Range
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Best Solutions
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featured.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className="group block">
              
              {/* Image with softer rounding and subtle border */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-8">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={p.name} 
                />
              </div>
              
              {/* Text Content - Tightened Hierarchy */}
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-slate-900 leading-none">
                  {p.name}
                </h3>
                
                <p className="text-[11px] font-normal text-slate-400 uppercase tracking-[0.2em] leading-none">
                  Industrial Grade • 100% Recyclable
                </p>
                
                <div className="pt-2 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                   <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                     Explore Details
                   </span>
                   <div className="h-[1px] w-6 bg-slate-200 group-hover:w-10 group-hover:bg-blue-600 transition-all duration-300"></div>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;