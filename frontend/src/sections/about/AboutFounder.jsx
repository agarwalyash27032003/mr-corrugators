import React from 'react';

const AboutFounder = () => (
  <section className="py-24 lg:py-0 lg:h-[85vh] flex items-center bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Image Section */}
        <div className="w-full lg:w-5/12 relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square bg-slate-100 shadow-2xl shadow-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
              alt="Yash Agarwal - Founder" 
            />
          </div>

          {/* Consistent Accent styling */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#FFC107] rounded-tr-3xl z-0"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-7/12">
          
          {/* Label - Standardized Section Style */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
              Founding Leadership
            </span>
          </div>

          {/* Heading - Adjusted Font Weight/Spacing Only */}
          <h3 className="text-3xl md:text-[3.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-10">
            "Eliminating the barriers between <br/> 
            <span className="text-[var(--color-accent-yellow)]">
              industrial quality
            </span> and <br/> 
            <span className="text-[var(--color-primary-blue)]">
              market accessibility.
            </span>"
          </h3>

          {/* Body Content - Industrial Medium weight */}
          <div className="space-y-6 text-base md:text-[18px] text-slate-600 font-medium leading-relaxed max-w-2xl">
            <p>
              MR Corrugators was founded on a strategic observation: the packaging sector was saturated with inefficiencies that drove costs up while compromising material standards.
            </p>
            <p>
              By establishing a <span className="text-slate-900 font-bold">direct-to-enterprise</span> manufacturing ecosystem in Siliguri, we ensure every industrial partner accesses high-performance solutions without the traditional corporate markup.
            </p>
          </div>

          {/* Footer - Industrial Typography */}
          <div className="pt-10 mt-10 border-t border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                Yash Agarwal
              </h4>
              <p className="text-[10px] font-bold text-[var(--color-primary-blue)] uppercase tracking-[0.3em] mt-2">
                Founder & Managing Director
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default AboutFounder;