import React from 'react';
import Counter from '../../components/Counter';

const AboutCompany = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mb-20">
        <h1 className="text-6xl md:text-8xl font-black text-blue-900 tracking-tighter uppercase italic leading-none mb-8">
          The MR <br/> <span className="text-blue-600">Standard.</span>
        </h1>
        <p className="text-2xl text-gray-500 font-light leading-relaxed italic">
          Since 2019, MR Corrugators has been redefining the logistics of safety. 
          Based in the heart of Siliguri, we operate a state-of-the-art manufacturing unit 
          dedicated to the science of structural integrity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
        <div className="space-y-4">
          <h3 className="text-blue-900 font-black text-5xl tracking-tighter italic">
            <Counter end={7} suffix="+" />
          </h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years of Manufacturing Mastery</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-blue-900 font-black text-5xl tracking-tighter italic">
            <Counter end={100} suffix="%" />
          </h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">In-House Quality Control</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-blue-900 font-black text-5xl tracking-tighter italic">
            <Counter end={500} suffix="+" />
          </h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Industrial Partners Nationwide</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCompany;