import React from 'react';

const ContactInfo = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
      
      {/* Phone Section */}
      <div className="space-y-3">
        <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          Call Us
        </h4>
        <p className="text-xl font-light text-slate-800 tracking-tight">
          +91 6294450747
        </p>
      </div>

      {/* Address Section */}
      <div className="space-y-3">
        <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          Visit Our Unit
        </h4>
        <p className="text-base font-light text-slate-500 leading-relaxed">
          Bholanath Para, Eastern Bypass Road, <br/> 
          <span className="text-slate-800 font-normal">Siliguri, West Bengal</span>
        </p>
      </div>

      {/* Email Section */}
      <div className="space-y-3">
        <h4 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          Email Address
        </h4>
        <p className="text-base font-light text-blue-600 border-b border-blue-100 inline-block pb-0.5 hover:text-blue-800 hover:border-blue-800 transition-colors cursor-pointer">
          mrcorrugators@gmail.com
        </p>
      </div>

    </div>
  </section>
);

export default ContactInfo;