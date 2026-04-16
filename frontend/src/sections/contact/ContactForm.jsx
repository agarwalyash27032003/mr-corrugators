import React from 'react';

const ContactForm = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-blue-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
        
        <div className="relative z-10 text-center mb-12 text-white">
          <h2 className="text-4xl font-black mb-4 uppercase">Request a Quote</h2>
          <p className="text-blue-200">Our team will get back to you within 24 business hours.</p>
        </div>

        <form className="relative z-10 grid md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-300 outline-none focus:bg-white/20 transition-all"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-300 outline-none focus:bg-white/20 transition-all"
          />
          <textarea 
            placeholder="Tell us about your requirements (Quantity, Sizes, etc.)" 
            rows="5" 
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-300 outline-none focus:bg-white/20 transition-all md:col-span-2"
          ></textarea>
          <button className="md:col-span-2 bg-white text-blue-900 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all uppercase tracking-widest">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;