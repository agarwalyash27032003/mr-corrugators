import React from 'react';
import './logo-slider.css';

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
    <div className="logo-slider-section">
      
      <div className="logo-slider-label">
        Selected Partners
      </div>

      <div className="logo-slider-wrapper">
        
        <div className="logo-track">
          {duplicatedBrands.map((brand, i) => (
            <div className="logo-item" key={i}>
              <img src={brand.src} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LogoSlider;