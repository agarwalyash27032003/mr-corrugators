import React, { useState } from 'react';

const FAQ = () => {
  const [active, setActive] = useState(0);
  const faqs = [
    { q: "What is your minimum order quantity?", a: "We support both small scale startups and industrial giants. Contact us for custom quotes." },
    { q: "Do you offer custom printing?", a: "Yes, we specialize in high-quality single and multi-color printing on Kraft and Duplex boards." },
    { q: "What is the standard delivery time?", a: "Standard products are delivered within 3-5 business days across North Bengal." }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px]">Support</span>
          <h2 className="text-5xl font-bold tracking-tighter mt-4">Frequently Asked <br/> Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              onClick={() => setActive(i)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${active === i ? 'border-blue-500 bg-white/5' : 'border-white/10 hover:border-white/30'}`}
            >
              <h4 className="text-lg font-bold flex justify-between">
                {f.q} <span>{active === i ? '−' : '+'}</span>
              </h4>
              {active === i && <p className="mt-4 text-slate-400 leading-relaxed animate-fade-in">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;