import React from 'react';

const ContactForm = () => (
  <section className="py-24 bg-white mt-16">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left Column: Strategic Authority */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] text-[11px] font-black uppercase tracking-[0.4em]">
              Procurement
            </span>
          </div>
          
          <h2 className="text-5xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
            Request <br/> 
            <span className="text-[#FFC107]">Quote.</span>
          </h2>
          
          <p className="text-[18px] text-slate-500 font-medium leading-relaxed mb-12">
            Our engineering team evaluates industrial requirements within 24 business hours. Provide your specifications for a comprehensive fulfillment plan.
          </p>
        
        </div>

        {/* Right Column: Industrial Form UI */}
        <div className="lg:w-2/3 w-full bg-slate-50 p-8 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
          
          {/* Subtle Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107]/5 rounded-bl-full -mr-16 -mt-16"></div>

          <form className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Yash Agarwal" 
                className="w-full p-4 px-6 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-[#0B5ED7] focus:ring-4 focus:ring-[#0B5ED7]/5 transition-all font-bold"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Business Email</label>
              <input 
                type="email" 
                placeholder="yash@mrcorrugators.com" 
                className="w-full p-4 px-6 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-[#0B5ED7] focus:ring-4 focus:ring-[#0B5ED7]/5 transition-all font-bold"
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Industrial Specifications</label>
              <textarea 
                placeholder="Outline quantity, dimensions, and material density requirements..." 
                rows="5" 
                className="w-full p-6 rounded-3xl bg-white border border-slate-200 text-slate-900 placeholder-slate-300 outline-none focus:border-[#0B5ED7] focus:ring-4 focus:ring-[#0B5ED7]/5 transition-all font-bold resize-none"
              ></textarea>
            </div>

            <button className="md:col-span-2 bg-slate-900 text-white py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-[#0B5ED7] transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]">
              Submit Requirements →
            </button>
            
            <div className="md:col-span-2 flex items-center justify-center gap-3">
              <div className="h-[1px] w-4 bg-slate-200"></div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Enterprise Grade Security Standard
              </p>
              <div className="h-[1px] w-4 bg-slate-200"></div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default ContactForm;