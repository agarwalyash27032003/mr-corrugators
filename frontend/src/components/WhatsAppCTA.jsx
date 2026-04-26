import React from "react";

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/916294450747"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white relative z-10"
        >
          <path d="M16.02 3C8.84 3 3 8.74 3 15.82c0 2.49.72 4.82 1.97 6.81L3 29l6.58-1.9a13.14 13.14 0 006.44 1.64H16c7.18 0 13.02-5.74 13.02-12.82C29.02 8.74 23.18 3 16.02 3zm0 23.4c-2.05 0-4.06-.55-5.82-1.59l-.42-.25-3.9 1.13 1.17-3.8-.27-.44a10.16 10.16 0 01-1.58-5.43c0-5.65 4.69-10.25 10.46-10.25 5.76 0 10.45 4.6 10.45 10.25S21.78 26.4 16.02 26.4zm5.74-7.78c-.31-.15-1.82-.89-2.1-.99-.28-.1-.48-.15-.69.15-.2.3-.79.99-.97 1.19-.18.2-.36.22-.67.07-.31-.15-1.31-.48-2.49-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.3.31-.5.1-.2.05-.37-.03-.52-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.07-.79.37-.28.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.09 3.17 5.06 4.45.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.59-.35z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppCTA;