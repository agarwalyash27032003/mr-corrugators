import React from 'react';

const AboutFounder = () => (
  <section className="py-20 lg:py-0 lg:h-[80vh] flex items-center bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Compact Image Container */}
        <div className="w-full lg:w-5/12 relative group">
          <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/5] lg:aspect-square bg-slate-100 shadow-2xl shadow-blue-900/5">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
              alt="Yash Agarwal - Founder" 
            />
          </div>
          {/* Subtle Geometric Accent */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-blue-600/30 rounded-tr-2xl z-0"></div>
        </div>

        {/* Tightened Content Column */}
        <div className="w-full lg:w-7/12">
          {/* Smaller Header Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-blue-600"></div>
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">Leadership</span>
          </div>

          {/* Compressed Quote */}
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-8">
            "Eliminating the barriers between <br/> 
            <span className="text-slate-300 font-medium">industrial quality</span> and <br/> 
            <span className="text-blue-600">market accessibility.</span>"
          </h3>

          {/* Targeted Prose - Reduced line-height and size for compact feel */}
          <div className="space-y-4 text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl">
            <p>
              MR Corrugators was founded on a strategic observation: the packaging sector was saturated with inefficiencies that drove costs up while compromising material standards.
            </p>
            <p>
              By establishing a direct-to-enterprise manufacturing ecosystem in Siliguri, we ensure every industrial partner accesses high-performance solutions without the traditional corporate markup.
            </p>
          </div>

          {/* Minimalist Signature Bar */}
          <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">Yash Agarwal</h4>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mt-1">Founder & Managing Director</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutFounder;