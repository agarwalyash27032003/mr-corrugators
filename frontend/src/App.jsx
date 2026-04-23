import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/Contact';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

/**
 * ScrollToTop Helper: 
 * Ensures the window scrolls to (0,0) on every route change.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* 1. Logic Helpers */}
      <ScrollToTop />
      
      {/* 2. Global Navbar (Stays on every page) */}
      <Navbar />

      {/* 3. Dynamic Content Area */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={
            <div className="py-40 text-center">
              <h1 className="text-4xl font-black text-blue-900 uppercase">404</h1>
              <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </main>

      {/* 4. Global Footer (Stays on every page) */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;