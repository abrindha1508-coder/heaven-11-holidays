import React, { useState } from 'react';
import { Clock, Star, Search, ChevronRight, X, MessageSquare, Check } from 'lucide-react';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';
import type { TourPackage } from '../types/package';
import { PageHero } from '../components/PageHero';
export const InternationalTours: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [activeDestinationId, setActiveDestinationId] = useState<string | null>(null);

  // Selected package modal state
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({ name: '', phone: '', email: '', date: '', travelers: '2' });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleOpenBooking = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsBookingOpen(true);
  };

  // Filter international destinations
  const internationalDestinations = destinations.filter(dest => {
    if (dest.type !== 'international') return false;
    if (searchQuery && !dest.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedRegion && !dest.country?.toLowerCase().includes(selectedRegion.toLowerCase())) return false;
    return true;
  });

  const activeDestination = destinations.find(d => d.id === activeDestinationId);
  const activePackages = packages.filter(p => p.destinationId === activeDestinationId);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
      setSelectedPkg(null);
      setBookingFormData({ name: '', phone: '', email: '', date: '', travelers: '2' });
    }, 3500);
  };

  const triggerWhatsAppBooking = () => {
    if (!selectedPkg) return;
    const text = `Hi Heaven11! I want to book the international tour:
- *Package*: ${selectedPkg.title}
- *Name*: ${bookingFormData.name || 'Client'}
- *Date*: ${bookingFormData.date || 'Flexible'}
- *Travelers*: ${bookingFormData.travelers}`;
    window.open(`https://wa.me/918148604780?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50 pb-20">
      <PageHero
        title="International Tour Packages"
        subtitle="Experience the World"
        description="Embark on a luxury global adventure. Handpicked resorts, fast visa filing, and private custom itineraries."
        backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
        targetAnchor="intl-content"
      />

      {/* Main Content */}
      <div id="intl-content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8">
        {/* Filters Panel */}
        <div className="rounded-2xl bg-white p-5 shadow-xs border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search international destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200/80 bg-slate-50/30 pl-11 pr-4 py-2.5 text-sm focus:border-primary-light focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            {['Thailand', 'Maldives', 'Indonesia', 'UAE'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(selectedRegion === region ? '' : region)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-primary-dark border-primary-dark text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {region === 'Indonesia' ? 'Bali' : region === 'UAE' ? 'Dubai' : region}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internationalDestinations.map((dest) => {
            const destPackages = packages.filter(p => p.destinationId === dest.id);
            return (
              <div
                key={dest.id}
                onClick={() => setActiveDestinationId(dest.id)}
                className="group rounded-2xl bg-white overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 cursor-pointer transition-all duration-300 flex flex-col h-[380px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[9px] font-bold text-accent uppercase tracking-wider">
                    {dest.weather}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-primary-light uppercase">Best Time: {dest.bestTime}</span>
                    <h3 className="font-display font-bold text-slate-800 text-lg leading-tight group-hover:text-primary-light transition-all">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{destPackages.length} Tour Packages</span>
                    <span className="font-bold text-slate-800 flex items-center gap-0.5">
                      View Packages <ChevronRight className="h-4 w-4 text-primary-light shrink-0" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PACKAGES DRAWER MODAL */}
      {activeDestinationId && activeDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setActiveDestinationId(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-4xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all overflow-y-auto max-h-[85vh]">
            <button
              onClick={() => setActiveDestinationId(null)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 space-y-1.5">
              <span className="text-xs font-bold text-primary-light tracking-widest uppercase">Select Tour Plan</span>
              <h3 className="font-display text-2xl font-bold text-primary-dark">
                Packages in {activeDestination.name}
              </h3>
              <p className="text-xs text-slate-500">
                Found {activePackages.length} international tours for {activeDestination.name}. Select a tour to view itinerary or secure bookings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePackages.map((pkg) => (
                <div key={pkg.id} className="rounded-xl border border-slate-100 p-5 bg-slate-50/50 flex flex-col justify-between h-[280px]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {pkg.duration}</span>
                      <span className="flex items-center gap-0.5 text-amber-500 font-bold"><Star className="h-3.5 w-3.5 fill-current" /> {pkg.rating}</span>
                    </div>
                    <h4 className="font-display font-bold text-slate-800 text-base leading-snug line-clamp-1">{pkg.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      Highlights: {pkg.highlights.join(', ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-150 flex items-center justify-end mt-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPkg(pkg)}
                        className="rounded-lg bg-white border border-slate-200 text-slate-700 px-3.5 py-2 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                      >
                        Itinerary
                      </button>
                      <button
                        onClick={() => handleOpenBooking(pkg)}
                        className="rounded-lg bg-gradient-premium text-white px-4 py-2 text-xs font-semibold shadow-xs hover:shadow-md cursor-pointer"
                      >
                        Book Tour
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ITINERARY VIEW */}
      {selectedPkg && !isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setSelectedPkg(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-2xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all overflow-y-auto max-h-[80vh]">
            <button onClick={() => setSelectedPkg(null)} className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-primary-dark">{selectedPkg.title}</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {selectedPkg.itinerary.map(dayObj => (
                  <div key={dayObj.day} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-bold text-primary-light">Day {dayObj.day}: {dayObj.title}</span>
                    <p className="text-xs text-slate-600 mt-1">{dayObj.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleOpenBooking(selectedPkg)}
                  className="rounded-xl bg-gradient-premium px-6 py-2.5 text-xs font-semibold text-white shadow-md cursor-pointer"
                >
                  Book Package Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {isBookingOpen && selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsBookingOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all">
            <button onClick={() => setIsBookingOpen(false)} className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"><X className="h-5 w-5" /></button>
            {bookingSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 animate-bounce"><Check className="h-6 w-6" /></div>
                <h4 className="font-display font-bold text-slate-800 text-lg">Booking Submitted!</h4>
                <p className="text-xs text-slate-500 max-w-xs mt-1">Our executive will touch base shortly. You can also trigger instant WhatsApp confirmation below.</p>
                <button onClick={triggerWhatsAppBooking} className="mt-4 flex items-center gap-1.5 bg-emerald-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md cursor-pointer"><MessageSquare className="h-4 w-4 fill-current" /> WhatsApp Book Now</button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <h4 className="font-display text-lg font-bold text-primary-dark">Secure Booking Request</h4>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={bookingFormData.name}
                  onChange={(e) => setBookingFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Contact Number"
                  value={bookingFormData.phone}
                  onChange={(e) => setBookingFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    required
                    value={bookingFormData.date}
                    onChange={(e) => setBookingFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none"
                  />
                  <select
                    value={bookingFormData.travelers}
                    onChange={(e) => setBookingFormData(prev => ({ ...prev, travelers: e.target.value }))}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none bg-white"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 - 5 People</option>
                    <option value="5+">Family (5+)</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-gradient-premium text-white font-semibold text-sm shadow-md cursor-pointer">Confirm Custom Quote Booking</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
