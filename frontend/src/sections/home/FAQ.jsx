import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-slate-100 transition-colors ${isOpen ? 'bg-slate-50/50' : 'bg-transparent'}`}>
      <button
        onClick={onClick}
        className="w-full py-7 px-4 flex justify-between items-center text-left transition-all"
      >
        <span className={`text-xl md:text-2xl tracking-tight transition-colors ${isOpen ? 'text-blue-600 font-bold' : 'text-slate-900 font-medium'}`}>
          {question}
        </span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-600' : 'text-slate-300'}`}>
          +
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 text-lg leading-relaxed text-slate-500 font-normal max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your typical production lead time?",
      answer: "Our standard lead time for custom corrugated solutions is 7-10 business days. However, this may vary based on order volume and specific customization requirements."
    },
    {
      question: "Do you offer eco-friendly packaging?",
      answer: "Yes, 100% of our products are recyclable. We prioritize sustainable sourcing and use high-grade kraft paper that minimizes environmental impact without compromising durability."
    },
    {
      question: "Can I get custom printing on my boxes?",
      answer: "Absolutely. We offer high-quality flexographic and digital printing options to ensure your brand identity is prominently displayed on every package."
    },
    {
      question: "Is there a minimum order quantity (MOQ)?",
      answer: "We cater to both small businesses and large industrial clients. While some specialized products have MOQs, we offer flexible solutions to meet diverse business needs."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-blue-600"></div>
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.5em]">
              Assistance
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
            Common <br/> 
            <span className="text-slate-300">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
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