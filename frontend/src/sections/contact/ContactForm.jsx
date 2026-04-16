import React from 'react';

const ContactForm = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left: Strategic Content */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-blue-600"></div>
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.5em]">
              Procurement
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none mb-8">
            Request <br/> 
            <span className="text-slate-300">Quote.</span>
          </h2>
          <p className="text-lg text-slate-500 font-normal leading-relaxed">
            Our engineering team evaluates industrial requirements within 24 business hours. Provide your specifications for a comprehensive fulfillment plan.
          </p>
          
          <div className="mt-12 pt-12 border-t border-slate-100 hidden lg:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Support Direct</p>
            <p className="text-xl font-medium text-slate-900">+91 62944 50747</p>
          </div>
        </div>

        {/* Right: The Professional Form */}
        <div className="lg:w-2/3 w-full bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <form className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Yash Agarwal" 
                className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-blue-600 transition-all font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Business Email</label>
              <input 
                type="email" 
                placeholder="yash@company.com" 
                className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-blue-600 transition-all font-medium"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Project Specifications</label>
              <textarea 
                placeholder="Outline quantity, dimensions, and material requirements..." 
                rows="5" 
                className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-blue-600 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button className="md:col-span-2 bg-blue-950 text-white py-5 rounded-full font-bold text-lg hover:bg-blue-600 transition-all tracking-tight shadow-xl shadow-blue-900/10">
              Submit Requirements
            </button>
            
            <p className="md:col-span-2 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              Data protected by enterprise security standards
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default ContactForm;