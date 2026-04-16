import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-8 left-0 w-full z-[100] px-6">
    <div className="container mx-auto max-w-6xl bg-white/90 backdrop-blur-md rounded-full px-8 py-4 flex justify-between items-center shadow-sm border border-slate-100">
      <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">MR</div>
        MR CORRUGATORS
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        {['Home', 'Products', 'About', 'Contact'].map((item) => (
          <Link 
            key={item} 
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-500 transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2"
        >
          Request Project <span className="opacity-40">→</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;