import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Sheldon Jackson", role: "Project Manager", text: "With MR Corrugators, our hotel now features durable, enduring designs that showcase the finest in manufacturing." },
    { name: "Jasickiya Anthony", role: "Supply Head", text: "They transformed our logistics with a perfect blend of elegance and structural integrity." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px]">Testimonials</span>
            <h2 className="text-6xl font-bold tracking-tighter mt-4">Craftsmanship <br/> Meets Trust</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">←</button>
            <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">→</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="bg-slate-50 p-12 rounded-[2rem] relative border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-slate-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">{r.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{r.role}</p>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-slate-600 font-light italic">"{r.text}"</p>
              <div className="absolute bottom-8 right-10 text-6xl text-blue-500/20 font-serif">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;