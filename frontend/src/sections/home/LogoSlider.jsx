import React from 'react';

const LogoSlider = () => {
  const brands = [
    { name: "METRICS", src: "/logos/brand1.svg" },
    { name: "QUANTUM", src: "/logos/brand2.svg" },
    { name: "VERTEX", src: "/logos/brand3.svg" },
    { name: "NEXUS", src: "/logos/brand4.svg" },
    { name: "AETHER", src: "/logos/brand5.svg" },
    { name: "ORBIT", src: "/logos/brand6.svg" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="py-24 bg-white overflow-hidden">
      {/* Label with "Little Big" Font - Using tracking for a premium feel */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-center text-sm md:text-base font-bold uppercase tracking-[0.4em] text-slate-400">
          Selected Partners
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]">
        
        {/* Set 1 */}
        <div className="flex whitespace-nowrap animate-loop-scroll">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`set1-${i}`} 
              className="flex items-center justify-center px-16 transition-all duration-300 group"
            >
              {/* Logo Image */}
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="h-12 w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
              {/* Optional: Minimal Text Label (Only if needed) */}
              <span className="ml-4 text-lg font-semibold tracking-tight text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (Aria-hidden for accessibility/SEO) */}
        <div className="flex whitespace-nowrap animate-loop-scroll" aria-hidden="true">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`set2-${i}`} 
              className="flex items-center justify-center px-16 group"
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="h-12 w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
              <span className="ml-4 text-lg font-semibold tracking-tight text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;