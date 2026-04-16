import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    { name: "Sheldon Jackson", role: "Project Manager", text: "With MR Corrugators, our hotel now features durable, enduring designs that showcase manufacturing excellence." },
    { name: "Jasickiya Anthony", role: "Supply Head", text: "They transformed our logistics with a perfect blend of elegance and structural integrity. A truly reliable partner." },
    { name: "Robert Wilson", role: "Operations Director", text: "The quality and timely delivery have made them our go-to supplier for all high-end packaging needs." },
    { name: "Ananya Sharma", role: "Design Lead", text: "Exceptional attention to detail. The finish on their duplex boxes is superior to anything else in the market." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 ">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight">
              Trusted by <span className="text-blue-600">Industry</span> <br/> 
              <span className="text-slate-300 font-medium tracking-tight">Leaders Worldwide.</span>
            </h2>
          </div>
          
          <div className="flex gap-2">
            <button className="prev-test w-12 h-12 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm active:scale-90">
              <span className="text-lg">←</span>
            </button>
            <button className="next-test w-12 h-12 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm active:scale-90">
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Swiper Implementation */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          // The "autoHeight: false" and "h-full" on slides ensures uniform height
          autoHeight={false}
          autoplay={{ 
            delay: 3500, 
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.next-test',
            prevEl: '.prev-test',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible testimonials-swiper"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="!h-auto flex">
              {/* Card Container - h-full and flex-1 are key here */}
              <div className="bg-slate-50/50 p-8 rounded-2xl border-l-4 border-l-blue-600 border border-slate-100 w-full flex flex-col justify-between transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 group">
                <div className="flex-1">
                  <div className="text-5xl font-serif text-blue-600/20 leading-none mb-4">“</div>
                  <p className="text-[17px] text-slate-600 font-normal leading-relaxed mb-8">
                    {r.text}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {/* Dynamic Initial Logo */}
                  <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm tracking-tighter shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 text-base leading-none tracking-tight">
                      {r.name}
                    </h4>
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1.5">
                      {r.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;