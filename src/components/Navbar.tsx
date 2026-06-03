import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    duration: '',
    travelers: '2',
    budget: 'Medium',
    message: ''
  });

  const scrollY = useScrollPosition();
  const location = useLocation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setIsQuoteOpen(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        destination: '',
        travelDate: '',
        duration: '',
        travelers: '2',
        budget: 'Medium',
        message: ''
      });
    }, 3500);
  };

  const triggerWhatsAppQuote = () => {
    const text = `Hi Heaven11 Holidays! I want to request a custom travel quote:
- *Name*: ${formData.name || 'Client'}
- *Destination*: ${formData.destination || 'Not Specified'}
- *Date*: ${formData.travelDate || 'Plan Soon'}
- *Duration*: ${formData.duration || 'Flexible'}
- *Travelers*: ${formData.travelers}
- *Budget*: ${formData.budget}
- *Message*: ${formData.message || 'Custom itinerary request'}`;
    const url = `https://wa.me/918148604780?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Domestic Tours', path: '/domestic-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 max-w-7xl mx-auto px-4 ${
          scrollY > 50
            ? 'top-2 lg:top-3'
            : 'top-3 lg:top-5'
        }`}
      >
        <div 
          className={`w-full rounded-2xl border transition-all duration-500 ${
            scrollY > 50
              ? 'backdrop-blur-xl bg-slate-950/45 border-white/15 shadow-2xl py-1.5 px-6'
              : 'backdrop-blur-lg bg-slate-950/20 border-white/10 shadow-lg py-2.5 px-6'
          }`}
        >
          <div className="flex h-12 sm:h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" title="Heaven11 Holidays">
                <div className="bg-gradient-premium px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl border border-white/15 shadow-md flex items-center justify-center">
                  <Logo className="h-9 sm:h-11 w-auto" />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:gap-8">
              <div className="flex items-center gap-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-[#00E5FF] font-bold'
                          : 'text-white/85 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#00E5FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+918148604780"
                  className="flex items-center gap-2 group text-left mr-2"
                  title="Call Us Now"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 group-hover:bg-[#00E5FF]/20 text-[#00E5FF] transition-all duration-300">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">Call Now</span>
                  </div>
                </a>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-5 py-2.5 text-xs font-black text-slate-900 bg-[#00E5FF] hover:bg-white hover:text-slate-900 rounded-full shadow-lg shadow-[#00E5FF]/10 hover:shadow-[#00E5FF]/20 transition-all duration-300 cursor-pointer"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Mobile Hamburger menu button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-3.5 py-2 text-xs font-extrabold text-slate-900 bg-[#00E5FF] rounded-full shadow-md cursor-pointer"
              >
                Quote
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`xl:hidden fixed inset-y-0 right-0 z-50 w-72 backdrop-blur-2xl bg-slate-950/95 border-l border-white/15 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <span className="font-display text-xl font-bold text-white uppercase tracking-wider">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col gap-1 px-4 py-6 overflow-y-auto max-h-[calc(100vh-80px)]">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#00E5FF]/10 text-[#00E5FF] font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-8 flex flex-col gap-3 px-4">
              <a
                href="tel:+918148604780"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="h-4.5 w-4.5 text-[#00E5FF]" /> Call Agency
              </a>
              <a
                href="https://wa.me/918148604780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 py-3 font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-current text-emerald-400" /> WhatsApp Us
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#1E8DC5] py-3 font-extrabold text-slate-900 shadow-md hover:shadow-lg transition-all cursor-pointer text-xs tracking-wider"
              >
                REQUEST FREE QUOTE
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs xl:hidden"
          />
        )}
      </nav>

      {/* Premium Get Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsQuoteOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-lg transform rounded-2xl bg-white p-6 shadow-2xl transition-all md:p-8">
            <button
              onClick={() => setIsQuoteOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            {quoteSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Quote Requested Successfully!</h3>
                <p className="mt-2 text-slate-500 max-w-sm">
                  Our travel specialist will contact you within the next 2 hours with customized packages.
                </p>
                <button
                  onClick={triggerWhatsAppQuote}
                  className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-600 transition-all cursor-pointer"
                >
                  <MessageSquare className="h-5 w-5 fill-current" /> Reach Us on WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-dark flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-accent fill-accent" /> Plan Your Custom Dream Holiday
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your travel preferences and let Heaven11 plan a bespoke travel itinerary for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 81486 04780"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Destination</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="e.g. Maldives, Kashmir"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      required
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g. 5 Nights"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary-light focus:outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3 - 5 People</option>
                      <option value="6-10">6 - 10 People</option>
                      <option value="10+">Group (10+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Estimated Budget</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Budget Friendly', 'Premium Luxury', 'Ultra Luxury'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, budget: level }))}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                          formData.budget === level
                            ? 'bg-primary-dark border-primary-dark text-white'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Additional Requirements</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g. Vegetarian food request, candlelit dinner, custom flight inclusions..."
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-primary-light focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-gradient-premium py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  >
                    Submit Quotation Form
                  </button>
                  <button
                    type="button"
                    onClick={triggerWhatsAppQuote}
                    className="rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-600 px-4 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                    title="Send via WhatsApp"
                  >
                    <MessageSquare className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
