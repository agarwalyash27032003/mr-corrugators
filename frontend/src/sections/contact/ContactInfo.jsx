import React from 'react';

const ContactInfo = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6 max-w-7xl">
      
      {/* Structural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        
        {/* Phone Column */}
        <div className="bg-white p-12 transition-colors hover:bg-slate-50/50 group">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">
              Direct Line
            </h4>
          </div>
          <p className="text-3xl font-medium text-slate-900 tracking-tighter mb-2">
            +91 62944 50747
          </p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Available Mon — Sat
          </p>
        </div>

        {/* Address Column */}
        <div className="bg-white p-12 transition-colors hover:bg-slate-50/50 group">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">
              Factory Unit
            </h4>
          </div>
          <p className="text-xl font-medium text-slate-900 leading-snug tracking-tight mb-2">
            Bholanath Para, Eastern Bypass Road, <br/> 
            Siliguri, West Bengal
          </p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Industrial Headquarters
          </p>
        </div>

        {/* Email Column */}
        <div className="bg-white p-12 transition-colors hover:bg-slate-50/50 group">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">
              Digital Inquiries
            </h4>
          </div>
          <a 
            href="mailto:mrcorrugators@gmail.com"
            className="text-2xl font-medium text-slate-900 tracking-tighter border-b border-slate-200 group-hover:text-blue-600 group-hover:border-blue-600 transition-all block w-fit mb-2"
          >
            mrcorrugators@gmail.com
          </a>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            24/7 Support Channel
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default ContactInfo;