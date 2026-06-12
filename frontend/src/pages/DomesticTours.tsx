import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Star, ChevronRight, X, MessageSquare, Check } from 'lucide-react';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';
import type { TourPackage } from '../types/package';
import { PageHero } from '../components/PageHero';
import { submitEnquiryForm } from '../services/api';
import { TravelersSelector } from '../components/TravelersSelector';
import type { TravellersState } from '../components/TravelersSelector';
import domesticHeroImg from '../assets/domesticheroimg.png';

export const DomesticTours: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeDestinationId = searchParams.get('dest');

  // Selected package modal state
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({ name: '', phone: '', date: '', travelers: '1' });
  const [travellers, setTravellers] = useState<TravellersState>({
    adults: 1,
    children: 0,
    infants: 0,
    seniors: 0,
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const handleOpenBooking = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsBookingOpen(true);
  };

  // Filter domestic destinations
  const domesticDestinations = destinations.filter(dest => dest.type === 'domestic');

  const activeDestination = destinations.find(d => d.id === activeDestinationId);

  const displayPackages = useMemo(() => {
    if (!activeDestinationId || !activeDestination) return [];
    const destPackages = packages.filter(p => p.destinationId === activeDestinationId);
    if (destPackages.length > 0) return destPackages;

    return [{
      id: `${activeDestination.id}-default`,
      title: `${activeDestination.name} Deluxe Getaway`,
      destinationId: activeDestination.id,
      destinationName: activeDestination.name,
      duration: activeDestination.duration || '4 Days / 3 Nights',
      price: activeDestination.price || 9999,
      discountPrice: Math.round((activeDestination.price || 9999) * 1.25),
      rating: activeDestination.rating || 4.7,
      reviewsCount: 54,
      image: activeDestination.image,
      highlights: activeDestination.highlights || [],
      inclusions: [
        'Premium Hotel Accommodations',
        'Daily Buffet Breakfast at Hotels',
        'Sightseeing Tours in Private Vehicles',
        'Direct Airport/Station Pickups & Drops',
        'All Taxes, Parking, and Driver Fees'
      ],
      exclusions: [
        'Flights, Train, or Intercity Transport',
        'Entry tickets to monuments & activity charges',
        'Lunches, Dinners, and personal expenses',
        'Anything not listed under inclusions'
      ],
      itinerary: [
        {
          day: 1,
          title: `Welcome to ${activeDestination.name} & Check-in`,
          description: `Upon arrival at the airport or railway station, meet our representative and get transferred to your premium hotel. After check-in, rest and spend a peaceful evening exploring ${activeDestination.highlights[0] || 'local landmarks'}.`
        },
        {
          day: 2,
          title: `Full-Day Local Sightseeing Tour`,
          description: `Enjoy a wholesome breakfast at your hotel. Embark on a comprehensive tour of ${activeDestination.name}, visiting highlights like ${activeDestination.highlights.slice(1, 3).join(', ') || 'top scenic spots'}. Overnight stay at your hotel.`
        },
        {
          day: 3,
          title: 'Explore local valleys & viewpoints',
          description: `After breakfast, explore the beauty of ${activeDestination.highlights[3] || 'other popular spots'}. Enjoy local shopping and street food in the evening.`
        },
        {
          day: 4,
          title: 'Departure Flight / Train',
          description: 'Savor breakfast at the hotel, check out, and transfer back to the airport or railway station for your journey home.'
        }
      ],
      type: activeDestination.type === 'domestic' ? 'domestic' : 'international',
      popular: activeDestination.popular,
      featured: false
    }] as TourPackage[];
  }, [activeDestinationId, activeDestination]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitting(true);
    setBookingError(null);
    try {
      const totalCount = travellers.adults + travellers.children + travellers.infants + travellers.seniors;
      const travelersStr = `${totalCount} Travelers (${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants, ${travellers.seniors} Seniors)`;
      await submitEnquiryForm({
        ...bookingFormData,
        travelers: travelersStr,
        adults: travellers.adults,
        children: travellers.children,
        infants: travellers.infants,
        seniors: travellers.seniors,
        total_travelers: totalCount,
        packageId: selectedPkg?.id,
        packageTitle: selectedPkg?.title
      });
      setBookingSubmitted(true);
      setBookingError(null);
      setTimeout(() => {
        setBookingSubmitted(false);
        setIsBookingOpen(false);
        setSelectedPkg(null);
        setBookingFormData({ name: '', phone: '', date: '', travelers: '1' });
        setTravellers({ adults: 1, children: 0, infants: 0, seniors: 0 });
      }, 5000);
    } catch (err: any) {
      setBookingError(err.message || 'Failed to submit booking enquiry.');
    } finally {
      setIsBookingSubmitting(false);
    }
  };

  const triggerWhatsAppBooking = () => {
    if (!selectedPkg) return;
    const totalCount = travellers.adults + travellers.children + travellers.infants + travellers.seniors;
    const travellersText = `${totalCount} (${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants, ${travellers.seniors} Seniors)`;
    const text = `Hi Heaven11 Holidays! I want to book:
- *Package*: ${selectedPkg.title}
- *Name*: ${bookingFormData.name || 'Client'}
- *Date*: ${bookingFormData.date || 'Flexible'}
- *Travelers*: ${travellersText}`;
    window.open(`https://wa.me/919159996556?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50 pb-20">
      <PageHero
        title="Domestic Tour Packages"
        subtitle="Explore India"
        description="Experience the stunning diversity of India. From houseboats in Kashmir and tea estates in Munnar to golden beaches in Goa."
        backgroundImage={domesticHeroImg}
        targetAnchor="domestic-content"
        buttonText="Explore India Packages"
      />

      {/* Main Content */}
      <div id="domestic-content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8">

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domesticDestinations.map((dest, index) => {
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSearchParams({ dest: dest.id })}
                className="group rounded-2xl bg-white overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 cursor-pointer transition-all duration-300 flex flex-col h-[340px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-slate-800 text-lg leading-tight group-hover:text-primary-light transition-all">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end text-xs text-slate-500">
                    <span className="font-bold text-slate-800 flex items-center gap-0.5">
                      View Packages <ChevronRight className="h-4 w-4 text-primary-light shrink-0" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PACKAGES DRAWER MODAL */}
      {activeDestinationId && activeDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setSearchParams({})} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-4xl transform rounded-2xl bg-white shadow-2xl transition-all flex flex-col max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 shrink-0 bg-slate-50/50">
              <h3 className="font-display text-base sm:text-lg font-bold text-primary-dark truncate pr-4 text-left">
                {displayPackages.length === 1 ? displayPackages[0].title : `Tour Packages in ${activeDestination.name}`}
              </h3>
              <button
                onClick={() => setSearchParams({})}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all cursor-pointer border border-slate-200 shadow-xs bg-white flex items-center justify-center shrink-0"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 flex-1">
              {displayPackages.length === 1 ? (
                // DIRECT FULL DETAILS VIEW FOR SINGLE PACKAGE
                <div className="space-y-6 text-left">
                  {/* Hero Image Banner */}
                  <div className="relative h-60 w-full overflow-hidden rounded-xl">
                    <img
                      src={displayPackages[0].image || activeDestination.image}
                      alt={displayPackages[0].title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-bold text-accent tracking-widest uppercase bg-slate-950/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                        {activeDestination.type === 'domestic' ? 'Domestic Tour' : 'International Tour'}
                      </span>
                    </div>
                  </div>

                  {/* Header Section */}
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-display text-2xl font-bold text-primary-dark mt-0.5">
                      {displayPackages[0].title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg">
                        <Clock className="h-3.5 w-3.5 text-primary-light" /> {displayPackages[0].duration}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> {displayPackages[0].rating} ({displayPackages[0].reviewsCount} Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Content Body Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Highlights, Inclusions, Exclusions */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Tour Highlights</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {displayPackages[0].highlights.map((h, i) => (
                            <span key={i} className="text-[10px] font-semibold bg-primary-light/5 text-primary-light border border-primary-light/10 px-2.5 py-1 rounded-lg">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      {displayPackages[0].inclusions && displayPackages[0].inclusions.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Inclusions</h4>
                          <ul className="space-y-1.5">
                            {displayPackages[0].inclusions.map((inc, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {displayPackages[0].exclusions && displayPackages[0].exclusions.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Exclusions</h4>
                          <ul className="space-y-1.5">
                            {displayPackages[0].exclusions.map((exc, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() => handleOpenBooking(displayPackages[0])}
                        className="w-full py-3.5 rounded-xl bg-gradient-premium text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer mt-4"
                      >
                        Book Tour Package
                      </button>
                    </div>

                    {/* Right Side: Itinerary */}
                    <div className="lg:col-span-7 space-y-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Detailed Itinerary</h4>
                      <div className="space-y-3.5 max-h-[360px] overflow-y-auto pl-3 pr-3">
                        {displayPackages[0].itinerary.map((dayObj) => (
                          <div key={dayObj.day} className="relative pl-6 pb-2 border-l border-slate-100 last:border-0 last:pb-0">
                            <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-light" />
                            <div>
                              <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                                Day {dayObj.day}: {dayObj.title}
                              </span>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {dayObj.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // MULTIPLE PACKAGES LIST VIEW
                <>
                  <div className="mb-6 space-y-1.5 text-left">
                    <span className="text-xs font-bold text-primary-light tracking-widest uppercase">Select Tour Plan</span>
                    <h3 className="font-display text-2xl font-bold text-primary-dark">
                      Packages in {activeDestination.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Found {displayPackages.length} luxury tours for {activeDestination.name}. Select a tour to view itinerary or secure bookings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayPackages.map((pkg) => (
                      <div key={pkg.id} className="rounded-xl border border-slate-100 p-5 bg-slate-50/50 flex flex-col justify-between h-[280px] text-left">
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
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DETAILED PACKAGE DETAILS VIEW (used when a package is selected from a multi-package list) */}
      {selectedPkg && !isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setSelectedPkg(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-4xl transform rounded-2xl bg-white shadow-2xl transition-all flex flex-col max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 shrink-0 bg-slate-50/50">
              <h3 className="font-display text-base sm:text-lg font-bold text-primary-dark truncate pr-4 text-left">
                {selectedPkg.title}
              </h3>
              <button
                onClick={() => setSelectedPkg(null)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all cursor-pointer border border-slate-200 shadow-xs bg-white flex items-center justify-center shrink-0"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 flex-1">
              <div className="space-y-6 text-left">
                {/* Hero Image Banner */}
                <div className="relative h-60 w-full overflow-hidden rounded-xl">
                  <img
                    src={selectedPkg.image || activeDestination?.image || ''}
                    alt={selectedPkg.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold text-accent tracking-widest uppercase bg-slate-950/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                      {selectedPkg.type === 'domestic' ? 'Domestic Tour' : 'International Tour'}
                    </span>
                  </div>
                </div>

                {/* Header Section */}
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display text-2xl font-bold text-primary-dark mt-0.5">
                    {selectedPkg.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg">
                      <Clock className="h-3.5 w-3.5 text-primary-light" /> {selectedPkg.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> {selectedPkg.rating} ({selectedPkg.reviewsCount} Reviews)
                    </span>
                  </div>
                </div>

                {/* Content Body Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Side */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Tour Highlights</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedPkg.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] font-semibold bg-primary-light/5 text-primary-light border border-primary-light/10 px-2.5 py-1 rounded-lg">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedPkg.inclusions && selectedPkg.inclusions.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Inclusions</h4>
                        <ul className="space-y-1.5">
                          {selectedPkg.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedPkg.exclusions && selectedPkg.exclusions.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Exclusions</h4>
                        <ul className="space-y-1.5">
                          {selectedPkg.exclusions.map((exc, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                              <span>{exc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => handleOpenBooking(selectedPkg)}
                      className="w-full py-3.5 rounded-xl bg-gradient-premium text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer mt-4"
                    >
                      Book Tour Package
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Detailed Itinerary</h4>
                    <div className="space-y-3.5 max-h-[360px] overflow-y-auto pl-3 pr-3">
                      {selectedPkg.itinerary.map((dayObj) => (
                        <div key={dayObj.day} className="relative pl-6 pb-2 border-l border-slate-100 last:border-0 last:pb-0">
                          <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-light" />
                          <div>
                            <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                              Day {dayObj.day}: {dayObj.title}
                            </span>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {dayObj.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {isBookingOpen && selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsBookingOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-3xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all">
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
                <div className="text-left">
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-1">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={bookingFormData.date}
                    onChange={(e) => setBookingFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs focus:outline-none bg-white"
                  />
                </div>

                <TravelersSelector
                  value={travellers}
                  onChange={setTravellers}
                />
                {bookingError && (
                  <div className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 rounded-xl p-3 text-left">
                    {bookingError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isBookingSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-premium text-white font-semibold text-sm shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isBookingSubmitting ? 'Submitting Booking...' : 'Confirm Custom Quote Booking'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
