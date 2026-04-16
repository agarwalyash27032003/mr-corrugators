import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Logo & Bio - 4 Columns */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-8 group">
              {/* Logo replacing the MR Corrugators text */}
              <img 
                src="/logo.png" 
                alt="MR Corrugators" 
                className="h-10 w-auto brightness-0 invert" // Ensures logo is white on dark bg
              />
            </Link>
            <p className="text-xl text-blue-100/70 font-normal leading-relaxed max-w-sm">
              Leading the manufacturing industry in Siliguri with precision-engineered corrugated solutions since 2019.
            </p>
          </div>

          {/* Navigation - 2 Columns */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">Company</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details - 6 Columns */}
          <div className="md:col-span-6 lg:pl-12">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">Connect</h4>
            
            {/* Using items-start and equal space-y to fix alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 items-start">
              <div className="space-y-2">
                <p className="text-[10px] uppercase text-blue-300/50 font-bold tracking-widest">Phone</p>
                <p className="text-2xl font-bold text-white tracking-tight leading-none">+91 62944 50747</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] uppercase text-blue-300/50 font-bold tracking-widest">Email</p>
                <p className="text-2xl font-bold text-white tracking-tight leading-none lowercase">mrcorrugators@gmail.com</p>
              </div>
              
              <div className="sm:col-span-2 space-y-2">
                <p className="text-[10px] uppercase text-blue-300/50 font-bold tracking-widest">Factory Headquarters</p>
                <p className="text-xl font-medium text-blue-100 leading-snug max-w-md">
                  Bholanath Para, Eastern Bypass Road, Siliguri, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-blue-200/50 tracking-wide">
            © {currentYear} MR Corrugators. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200/50">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;