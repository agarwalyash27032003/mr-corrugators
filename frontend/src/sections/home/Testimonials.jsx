import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    { name: "Sheldon Jackson", role: "Project Manager", text: "With MR Corrugators, our logistics now feature durable, enduring designs that showcase true manufacturing excellence. Their commitment to quality is unparalleled in the industry." },
    { name: "Jasickiya Anthony", role: "Supply Head", text: "They transformed our supply chain with a perfect blend of structural integrity and reliability. A truly elite partner for long-term growth." },
    { name: "Robert Wilson", role: "Operations Director", text: "The quality and timely delivery have made them our go-to supplier for all industrial packaging." },
    { name: "Ananya Sharma", role: "Design Lead", text: "Exceptional attention to detail. The finish on their duplex boxes is superior to anything else." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#FFC107]"></span>
              <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
                Since 2019 • Industry Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.05]">
              Trusted by <span className="text-[#0B5ED7]">Industry</span> <br/> 
              <span className="text-slate-400">Leaders Worldwide.</span>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-3">
            <button className="prev-test w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#FFC107] hover:border-[#FFC107] transition-all duration-300 active:scale-95">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className="next-test w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#FFC107] hover:border-[#FFC107] transition-all duration-300 active:scale-95">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ nextEl: '.next-test', prevEl: '.prev-test' }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          // CRITICAL: Force Swiper to stretch slides to match tallest content
          autoHeight={false}
          className="!overflow-visible"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="!h-auto">
              {/* h-full ensures the card fills the SwiperSlide container */}
              <div className="group relative bg-white p-10 rounded-[2rem] border border-slate-200 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
                
                {/* Yellow accent */}
                <div className="absolute top-0 left-10 w-12 h-1.5 bg-[#FFC107] rounded-b-full transition-all duration-500 group-hover:w-24"></div>

                <div className="flex-1">
                  <div className="text-6xl font-black text-[#0B5ED7] opacity-10 mb-2 leading-none">“</div>
                  <p className="text-[17px] text-slate-600 font-medium leading-relaxed mb-10 italic">
                    {r.text}
                  </p>
                </div>

                {/* mt-auto pushes this footer to the bottom of the card */}
                <div className="flex items-center gap-4 pt-8 border-t border-slate-100 mt-auto">
                  <div className="w-12 h-12 bg-slate-900 shrink-0 rounded-full flex items-center justify-center text-[#FFC107] font-black text-xs transition-transform group-hover:scale-110">
                    {r.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <h4 className="font-black text-slate-900 text-base tracking-tight leading-none uppercase">
                      {r.name}
                    </h4>
                    <p className="text-[10px] font-bold text-[#0B5ED7] uppercase tracking-widest mt-2">
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