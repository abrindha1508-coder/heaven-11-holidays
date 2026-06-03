import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

// Pages
import { Home } from './pages/Home';
import { DomesticTours } from './pages/DomesticTours';
import { InternationalTours } from './pages/InternationalTours';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Refund } from './pages/Refund';

// Scroll Restoration Hook Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg-canvas font-sans antialiased">
        {/* Sticky glassmorphism header */}
        <Navbar />

        {/* Dynamic primary content wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domestic-tours" element={<DomesticTours />} />
            <Route path="/international-tours" element={<InternationalTours />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />
          </Routes>
        </main>

        {/* SEO structured links footer */}
        <Footer />

        {/* WhatsApp + Quick Call + Back-to-Top triggers */}
        <FloatingElements />
      </div>
    </Router>
  );
}

export default App;
export { App };
