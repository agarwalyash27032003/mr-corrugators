import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-[100] h-20 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-12">
            MR
          </div>
          <span className="text-xl font-black tracking-tighter text-blue-900 uppercase">
            MR Corrugators
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive(link.path) ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-blue-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-800 transition-all"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>
          <div className="w-4 h-0.5 bg-blue-900"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-blue-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;