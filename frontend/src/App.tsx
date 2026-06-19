import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

// Pages - Lazy loaded for code splitting & bundle reduction
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const DomesticTours = React.lazy(() => import('./pages/DomesticTours').then(module => ({ default: module.DomesticTours })));
const InternationalTours = React.lazy(() => import('./pages/InternationalTours').then(module => ({ default: module.InternationalTours })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const AdminExport = React.lazy(() => import('./pages/AdminExport').then(module => ({ default: module.AdminExport })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const Terms = React.lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Refund = React.lazy(() => import('./pages/Refund').then(module => ({ default: module.Refund })));

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
    <LazyMotion features={domAnimation} strict>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-bg-canvas font-sans antialiased">
          {/* Sticky glassmorphism header */}
          <Navbar />

          {/* Dynamic primary content wrapper */}
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen bg-bg-canvas" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/domestic-tours" element={<DomesticTours />} />
                <Route path="/international-tours" element={<InternationalTours />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin-export" element={<AdminExport />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<Terms />} />
                <Route path="/refund-policy" element={<Refund />} />
              </Routes>
            </Suspense>
          </main>

          {/* SEO structured links footer */}
          <Footer />

          {/* WhatsApp + Quick Call + Back-to-Top triggers */}
          <FloatingElements />
        </div>
      </Router>
    </LazyMotion>
  );
}

export default App;
export { App };
