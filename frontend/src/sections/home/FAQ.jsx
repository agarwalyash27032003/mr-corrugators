import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      layout
      className={`group transition-all duration-500 ease-[0.22,1,0.36,1] rounded-2xl mb-4 border ${
        isOpen 
          ? 'bg-white border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]' 
          : 'bg-slate-50 border-transparent hover:bg-slate-100/80'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-7 px-8 flex justify-between items-start text-left outline-none"
      >
        <div className="flex gap-8 md:gap-10">
          <span 
            className="text-[10px] font-bold mt-1.5 tracking-widest transition-colors duration-500"
            style={{ color: isOpen ? '#0B5ED7' : '#94a3b8' }}
          >
            0{index + 1}
          </span>
          
          <span 
            className="text-lg md:text-xl tracking-tight transition-all duration-500"
            style={{ 
              color: isOpen ? '#0B5ED7' : '#1e293b',
              fontWeight: isOpen ? '700' : '600',
            }}
          >
            {question}
          </span>
        </div>

        <div className="relative w-5 h-5 mt-1 shrink-0">
          <div 
            className="absolute top-1/2 left-0 w-full h-[1.5px] transition-all duration-500" 
            style={{ backgroundColor: isOpen ? '#0B5ED7' : '#cbd5e1' }}
          />
          <div 
            className={`absolute top-0 left-1/2 h-full w-[1.5px] transition-all duration-500 ${
              isOpen ? 'rotate-90 opacity-0' : ''
            }`}
            style={{ backgroundColor: isOpen ? '#0B5ED7' : '#cbd5e1' }}
          />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.3 } }
            }}
            className="overflow-hidden"
          >
            <div className="pl-16 md:pl-24 pr-12 pb-10 text-[16px] leading-relaxed text-slate-500 w-full">
              <div className="h-[2px] w-10 bg-[#FFC107] mb-5 rounded-full" />
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "What is your typical production lead time?", answer: "Our standard lead time for custom corrugated solutions is 7-10 business days, depending on order volume and printing complexity." },
    { question: "Do you offer eco-friendly packaging?", answer: "Sustainability is at our core. 100% of our materials are recyclable, and we use biodegradable adhesives in all our processes." },
    { question: "Can I get custom printing on my boxes?", answer: "We provide high-fidelity flexographic printing options for logos, branding, and regulatory information." },
    { question: "Is there a minimum order quantity (MOQ)?", answer: "We support scaling businesses with flexible MOQ options tailored to your specific project size." }
  ];

  return (
    <section className="py-24 bg-white">
      {/* FIXED CONTAINER SIZE */}
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Consistent Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.2em] text-[10px]">
              Support Center
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            General <span className="text-[#FFC107]">FAQs.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;