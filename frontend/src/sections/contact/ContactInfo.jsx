import React from 'react';

const ContactInfo = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6 max-w-7xl">
      
      {/* Structural Industrial Grid - Matching the Footer gap and border logic */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        
        {/* Phone Column */}
        <div className="bg-white p-12 lg:p-16 transition-all hover:bg-slate-50 group">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
            <h4 className="text-[#0B5ED7] text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Direct Line
            </h4>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Support Line</p>
            <a 
              href="tel:+919382809594" 
              className="block text-3xl font-black text-slate-900 hover:bg-[#FFC107] px-1 transition-all w-fit tracking-tighter"
            >
              +91 93828 09594
            </a>
            <a 
              href="tel:+916294450747" 
              className="block text-3xl font-black text-slate-900 hover:bg-[#FFC107] px-1 transition-all w-fit tracking-tighter"
            >
              +91 62944 50747
            </a>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
            Available Mon — Sat • 09:00 — 20:00
          </p>
        </div>

        {/* Address Column */}
        <div className="bg-white p-12 lg:p-16 transition-all hover:bg-slate-50 group border-x border-slate-100">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
            <h4 className="text-[#0B5ED7] text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Factory Unit
            </h4>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Headquarters</p>
            <p className="text-[20px] font-bold text-slate-800 leading-snug tracking-tight">
              Bholanath Para, Eastern Bypass Road, <br/> 
              Siliguri, West Bengal
            </p>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
            Industrial Manufacturing Hub
          </p>
        </div>

        {/* Email Column */}
        <div className="bg-white p-12 lg:p-16 transition-all hover:bg-slate-50 group">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
            <h4 className="text-[#0B5ED7] text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Inquiries
            </h4>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Official Email</p>
            <a 
              href="mailto:mrcorrugators@gmail.com"
              className="block text-2xl font-black text-slate-900 border-b-2 border-[#FFC107] hover:bg-[#FFC107] transition-all block w-fit tracking-tighter"
            >
              mrcorrugators@gmail.com
            </a>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
            24/7 Corporate Support
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default ContactInfo;