import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        {/* Company Bio */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white text-blue-900 rounded flex items-center justify-center font-black">
              MR
            </div>
            <span className="font-black tracking-widest uppercase">MR Corrugators</span>
          </div>
          <p className="text-blue-200 leading-relaxed font-light">
            Siliguri's leading manufacturer of premium corrugated solutions. 
            Quality packaging that guarantees safety, since 2019.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-blue-400">Navigation</h4>
          <ul className="space-y-4 text-blue-100 font-medium">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Product Catalog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-blue-400">Get In Touch</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-xs uppercase text-blue-300 font-bold tracking-tighter">Phone</p>
              <p className="text-lg font-bold">+91 6294450747</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase text-blue-300 font-bold tracking-tighter">Email</p>
              <p className="text-lg font-bold">mrcorrugators@gmail.com</p>
            </div>
            <div className="space-y-1 md:col-span-2">
              <p className="text-xs uppercase text-blue-300 font-bold tracking-tighter">Factory Unit</p>
              <p className="text-lg font-medium text-blue-100">
                Bholanath Para, Eastern Bypass Road, Siliguri, West Bengal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-blue-400 text-sm">
          © 2026 MR Corrugators. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-blue-400">
          <span>Sleek & Minimal UI/UX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;