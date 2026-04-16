import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-6 left-0 w-full z-[100] px-6">
    <div className="container mx-auto glass-nav rounded-full px-10 py-4 flex justify-between items-center">
      {/* Logo Placeholder - Replace with your .png logo */}
      <Link to="/" className="hover:scale-105 transition-transform">
        <img src="/logo.png" alt="MR Corrugators" className="h-10 w-auto" />
      </Link>

      <div className="hidden lg:flex items-center gap-12">
        {['Home', 'About Company', 'Production', 'Products'].map((item) => (
          <Link key={item} to="/" className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600 hover:text-blue-500 transition-colors">
            {item}
          </Link>
        ))}
        <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-3">
          Contact Now <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-lg">→</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;