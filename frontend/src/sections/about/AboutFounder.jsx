import React from 'react';

const AboutFounder = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        
        {/* Founder Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000" 
              className="w-full h-[600px] object-cover" 
              alt="Founder of MR Corrugators" 
            />
          </div>
          {/* Accent Box */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
        </div>

        {/* Founder Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-block border-l-4 border-blue-600 pl-4">
            <h4 className="text-blue-900 font-black text-sm uppercase tracking-widest">Our Leadership</h4>
            <p className="text-gray-400 text-xs font-bold uppercase">Visionary behind the brand</p>
          </div>

          <h3 className="text-5xl font-black text-blue-900 tracking-tighter italic leading-tight">
            "Eliminating barriers <br/> between <span className="text-blue-600">quality</span> and <span className="text-blue-600">affordability</span>."
          </h3>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              The journey of MR Corrugators began with a simple observation by our founder: 
              the packaging industry was cluttered with middlemen that drove costs up while 
              diluting material quality.
            </p>
            <p>
              By establishing a direct-to-business manufacturing model in Siliguri, our founder 
              ensured that every local entrepreneur and industrial giant could access 
              premium-grade packaging without the corporate markup.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-blue-900 font-black text-xl italic uppercase tracking-tighter">Yash Agarwal</p>
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest">Founder & Managing Director</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutFounder;