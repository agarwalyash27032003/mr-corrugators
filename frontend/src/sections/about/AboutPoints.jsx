import React from 'react'

const AboutPoints = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-200 border border-slate-200 rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden shadow-sm mt-16 md:mt-32 max-w-7xl mx-8 md:mx-auto">
      
      <div className="bg-white p-7 sm:p-10 md:p-14 hover:bg-slate-50 transition-all group">
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">
            01. Clarity
          </span>

          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
            <span className="text-slate-300 group-hover:text-slate-900">→</span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
          Requirement <br /> First.
        </h3>

        <p className="text-slate-500 leading-relaxed font-medium text-[14px] sm:text-[15px]">
          Our process is rooted in understanding. We analyze specific logistics
          requirements to deliver high-performance corrugated solutions.
        </p>
      </div>

      
      <div className="bg-white p-7 sm:p-10 md:p-14 hover:bg-slate-50 transition-all group md:border-x border-slate-100">
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">
            02. Integrity
          </span>

          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
            <span className="text-slate-300 group-hover:text-slate-900">→</span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
          No <br /> Compromise.
        </h3>

        <p className="text-slate-500 leading-relaxed font-medium text-[14px] sm:text-[15px]">
          From customized tapes to stretch films, we maintain a zero-compromise
          policy on material density and structural integrity.
        </p>
      </div>

      
      <div className="bg-white p-7 sm:p-10 md:p-14 hover:bg-slate-50 transition-all group">
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <span className="text-[#0B5ED7] font-black text-[10px] tracking-[0.2em] uppercase">
            03. Scalability
          </span>

          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all">
            <span className="text-slate-300 group-hover:text-slate-900">→</span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
          Designed <br /> To Scale.
        </h3>

        <p className="text-slate-500 leading-relaxed font-medium text-[14px] sm:text-[15px]">
          Our facility is designed to scale production rapidly to match your
          business growth and delivery timelines without loss in quality.
        </p>
      </div>
    </div>
  )
}

export default AboutPoints