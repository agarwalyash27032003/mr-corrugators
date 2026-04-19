import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img 
                src="https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/Logo%20with%20BG.png?updatedAt=1776526210039" 
                alt="MR Corrugators" 
                className="h-14 w-auto" 
              />
            </Link>
            <p className="text-slate-600 text-[16px] leading-relaxed max-w-sm font-medium">
              Precision-engineered corrugated solutions for global logistics. Committed to 
              <span className="text-slate-900 font-bold"> zero-defect manufacturing</span> and sustainability since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company</h4>
            </div>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="group flex items-center text-slate-600 hover:text-[#0B5ED7] font-bold text-[15px] transition-all"
                  >
                    <span className="w-0 h-[2px] bg-[#FFC107] transition-all group-hover:w-3 mr-0 group-hover:mr-2 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-6 lg:pl-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1.5px] w-6 bg-[#FFC107]"></span>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Connect</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Support Line</p>
                <a 
                  href="tel:+916294450747" 
                  className="block text-2xl font-black text-slate-900 hover:bg-[#FFC107] px-1 transition-all w-fit"
                >
                  +91 62944 50747
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Official Email</p>
                <a 
                  href="mailto:mrcorrugators@gmail.com" 
                  className="block text-xl font-black text-slate-900 border-b-2 border-[#FFC107] hover:bg-[#FFC107] transition-all w-fit"
                >
                  mrcorrugators@gmail.com
                </a>
              </div>

              <div className="sm:col-span-2 space-y-2 pt-4">
                <p className="text-[10px] font-black text-[#0B5ED7] uppercase tracking-widest">Factory Headquarters</p>
                <p className="text-[17px] font-bold text-slate-800 leading-snug">
                  Bholanath Para, Eastern Bypass Road,<br />
                  Siliguri, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Redesigned for Center Credit */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex flex-col items-center text-center space-y-6">
            
            

            {/* Copyright and Legal Links */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                © {currentYear} <span className="text-slate-900">MR Corrugators</span>. All rights reserved.
              </p>
              
              <div className="flex items-center gap-8">
                <Link to="/privacy" className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Managed By - Center & Larger */}
            <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.25em]">
              Developed and managed by{' '}
              <a 
                href="https://bluepeakstudio.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0B5ED7] hover:bg-[#FFC107] px-1 transition-colors"
              >
                BluePeak Studio
              </a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;