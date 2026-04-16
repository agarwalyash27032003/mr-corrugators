import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const reviews = [
    { 
      name: "Rahul Sharma", 
      role: "Logistics Manager",
      text: "The quality of the 5-ply boxes is exceptional. It has significantly reduced our transit damage. Perfect for our export needs." 
    },
    { 
      name: "Anita Desai", 
      role: "E-commerce Founder",
      text: "Timely delivery and very professional customization. They helped us design the perfect size for our unique product dimensions." 
    },
    { 
      name: "Sanjay Gupta", 
      role: "Factory Owner",
      text: "Best corrugated manufacturer in Siliguri. Great pricing, direct-from-factory rates, and excellent after-sales support." 
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">Reviews</span>
          <h2 className="text-3xl font-light text-slate-800 mt-2">What our clients say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          {/* Main Slider Window */}
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center ${
                  index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              >
                <p className="text-xl md:text-2xl text-slate-500 font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <div>
                  <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-widest">{review.name}</h5>
                  <p className="text-[10px] text-blue-500 font-bold uppercase mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Manual Controls - Arrows */}
          <button 
            onClick={() => setCurrent(current === 0 ? reviews.length - 1 : current - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-500 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={() => setCurrent(current === reviews.length - 1 ? 0 : current + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-500 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  i === current ? "w-8 bg-blue-500" : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;