import React from 'react'

const LogoSlider = () => {
  const logos = ["Brand1", "Brand2", "Brand3", "Brand4", "Brand5", "Brand6"];
  return (
    <div className="py-12 bg-white overflow-hidden border-y border-slate-50">
      <div className="animate-scroll">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center w-[250px] px-10 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-xl font-semibold text-slate-400 uppercase tracking-tighter">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider