import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-5 left-0 w-full z-[100] pt-2">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="relative flex justify-between items-center px-8 py-3 border border-white/20 bg-white/80 backdrop-blur-md shadow-lg rounded-full transition-all duration-300">

          {/* Logo + Name */}
          <Link to="/" className="relative z-10 flex items-center gap-3 group">
            <img
              src="https://ik.imagekit.io/bluepeakstudio/MR%20Corrugators/Logo%20with%20BG.png?updatedAt=1776526210039"
              alt="Logo"
              className="h-14 w-auto md:h-16 transition-transform group-hover:scale-105"
            />

            {/* Hidden on mobile, visible on md+ */}
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-[24px] font-black text-[#0B5ED7] tracking-tight">
                MR Corrugators
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-[14px] font-bold uppercase tracking-wider transition-colors duration-300"
                  style={{ color: isActive ? '#0B5ED7' : '#475569' }}
                >
                  <span className="hover:text-[#0B5ED7]">
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#FFD700] rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="group relative overflow-hidden bg-[#0B5ED7] text-white px-8 py-3 rounded-xl text-[13px] font-extrabold uppercase tracking-widest transition-all hover:bg-[#FFD700] hover:text-black active:scale-95 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10">Enquire Now!</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[calc(100%-10px)] left-6 right-6 overflow-hidden bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={link.path}
                    className={`text-xl font-bold transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#0B5ED7]'
                        : 'text-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <hr className="border-slate-100" />

              <Link
                to="/contact"
                className="w-full bg-[#0B5ED7] text-white py-4 rounded-2xl text-center font-bold uppercase tracking-widest active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Enquire Now!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;