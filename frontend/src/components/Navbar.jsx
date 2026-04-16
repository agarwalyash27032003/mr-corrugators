import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a more "pro" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className={`relative flex justify-between items-center px-8 py-3 transition-all duration-500 border border-white/20 
          ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-2xl' : 'bg-white/40 backdrop-blur-sm rounded-full'}`}>
          
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-2 group">
            <img src="/logo.png" alt="Logo" className="h-7 w-auto group-hover:rotate-[-5deg] transition-transform duration-300" />
            <span className="font-black tracking-tighter text-slate-900 text-xl">MR.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Improved Premium Button */}
            <Link to="/contact" className="group relative overflow-hidden bg-slate-900 text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all hover:pr-9 hover:bg-blue-600 active:scale-95">
              <span className="relative z-10">Start Project</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden relative z-10 p-2 text-slate-900"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[calc(100%-10px)] left-6 right-6 overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    onClick={() => setIsOpen(false)} 
                    to={link.path} 
                    className="text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-slate-100" />
              <Link 
                to="/contact" 
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;