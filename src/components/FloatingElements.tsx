import React from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const FloatingElements: React.FC = () => {
  const scrollY = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = '919159996556';
  const callNumber = '919159996556';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Heaven11%20Holidays!%20I'm%20interested%20in%20booking%20a%20luxury%20holiday%20package.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top */}
      {scrollY > 300 && (
        <button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-dark shadow-2xl transition-all duration-300 hover:bg-primary-light hover:text-white hover:-translate-y-1 hover:scale-115 border border-slate-100 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Call Button */}
      <a
        href={`tel:${callNumber}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl transition-all duration-300 hover:from-teal-500 hover:to-emerald-500 hover:-translate-y-1 hover:scale-115 animate-pulse"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1 hover:scale-115 animate-float"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-7 w-7 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
