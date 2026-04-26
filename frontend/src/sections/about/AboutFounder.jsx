import React from 'react';

const AboutFounder = () => (
  <section className="mb-16 lg:py-0 flex items-center bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

        {/* Content Section */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2">

          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-8 bg-[#FFC107]"></span>
            <span className="text-[#0B5ED7] font-bold uppercase tracking-[0.25em] text-[10px]">
              Founding Leadership
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-[3.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-10">
            "Eliminating the barriers between <br />
            <span className="text-[var(--color-accent-yellow)]">
              industrial quality
            </span> and <br />
            <span className="text-[var(--color-primary-blue)]">
              market accessibility.
            </span>"
          </h3>

          <div className="space-y-6 text-base md:text-[18px] text-slate-600 font-medium leading-relaxed max-w-2xl">
            <p>
              MR Corrugators is driven by the experience and vision of Mr.
              Rajesh Kumar Agarwal, a businessman with over 35 years of
              deep-rooted industry knowledge. Born and raised in Gangtok,
              Sikkim, his journey has been built on discipline, consistency,
              and a sharp understanding of how businesses grow and sustain.
            </p>

            <p>
              Over the years, he has earned a reputation for reliability and
              long-term thinking—values that are now at the core of MR
              Corrugators. His approach is simple: focus on quality, build
              trust, and never compromise on commitments.
            </p>

            <p>
              Today, that same mindset drives the company forward—ensuring every
              product delivered stands for durability, precision, and
              dependability.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-5/12 relative group order-2 lg:order-1">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square bg-slate-100 shadow-2xl shadow-slate-200">
            <img
              src="https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/Founder.png"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              alt="Yash Agarwal - Founder"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#FFC107] rounded-tr-3xl z-0"></div>

          <div className="mt-10 border-t border-slate-100 flex items-center justify-between text-center">
            <div>
              <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                Mr. Rajesh Kumar Agarwal
              </h4>
              <p className="text-[10px] font-bold text-[var(--color-primary-blue)] uppercase tracking-[0.3em] mt-2">
                Founder & Managing Director
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutFounder;