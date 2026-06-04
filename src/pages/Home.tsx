import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Gift, BadgePercent, Headset,
  MapPin, Clock, Star, Eye, Check,
  X, MessageSquare, Compass, Mail, Users, Phone,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PremiumHero } from '../components/PremiumHero';

// Import databases
import { packages } from '../data/packages';
import { destinations } from '../data/destinations';
import { testimonials } from '../data/testimonials';
import { blogs } from '../data/blogs';
import type { TourPackage } from '../types/package';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Search form state
  const [searchParams, setSearchParams] = useState({
    destination: '',
    budget: '',
    month: '',
    type: '',
    duration: ''
  });

  const [searchResults, setSearchResults] = useState<TourPackage[]>([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Selected package modal state
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    travelers: '2'
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = packages.filter(pkg => {
      // Filter by Destination name keyword
      if (searchParams.destination && !pkg.destinationName.toLowerCase().includes(searchParams.destination.toLowerCase())) {
        return false;
      }
      // Filter by package Type
      if (searchParams.type && pkg.type !== searchParams.type) {
        return false;
      }
      // Filter by Budget (under 30k = low, under 60k = medium, rest = high)
      if (searchParams.budget) {
        if (searchParams.budget === 'budget' && pkg.price > 30000) return false;
        if (searchParams.budget === 'premium' && (pkg.price <= 30000 || pkg.price > 60000)) return false;
        if (searchParams.budget === 'luxury' && pkg.price <= 60000) return false;
      }
      // Filter by Duration
      if (searchParams.duration) {
        const days = parseInt(pkg.duration.match(/\d+/) ? pkg.duration.match(/\d+/)![0] : '5');
        if (searchParams.duration === 'short' && days > 4) return false;
        if (searchParams.duration === 'medium' && (days <= 4 || days > 6)) return false;
        if (searchParams.duration === 'long' && days <= 6) return false;
      }
      return true;
    });

    setSearchResults(filtered);
    setIsSearchModalOpen(true);
  };

  const handleOpenBooking = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
      setSelectedPackage(null);
      setBookingFormData({ name: '', phone: '', email: '', date: '', travelers: '2' });
    }, 3000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 3000);
  };

  const triggerWhatsAppBooking = () => {
    if (!selectedPackage) return;
    const text = `Hi Heaven11 Holidays! I am interested in booking:
- *Package*: ${selectedPackage.title}
- *Duration*: ${selectedPackage.duration}
- *Name*: ${bookingFormData.name || 'Client'}
- *Phone*: ${bookingFormData.phone || 'N/A'}
- *Travel Date*: ${bookingFormData.date || 'Flexible'}
- *Travelers*: ${bookingFormData.travelers}
Please confirm availability and share details!`;
    const url = `https://wa.me/919159996556?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const triggerWhatsAppContact = () => {
    const text = `Hi Heaven11 Holidays! I want to inquire about customized travel packages:
- *Name*: ${contactFormData.name || 'Client'}
- *Phone*: ${contactFormData.phone || 'N/A'}
- *Email*: ${contactFormData.email || 'N/A'}
- *Message*: ${contactFormData.message || 'General Inquiry'}`;
    const url = `https://wa.me/919159996556?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Filter domestic and international destinations
  const popularIntl = destinations.filter(d => d.type === 'international');
  const popularDom = destinations.filter(d => d.type === 'domestic');

  // Filter Trending Packages (8)
  const trendingPackages = packages.filter(p => p.type === 'international').slice(0, 8);

  return (
    <div className="relative bg-[#F8FBFF] overflow-x-hidden">
      {/* ================= SECTION 1: PREMIUM DYNAMIC HERO SECTION ================= */}
      <PremiumHero
        searchParams={searchParams}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* ================= SECTION 2: TRUST FEATURES ROW ================= */}
      <section className="bg-white border-b border-slate-100 py-6 lg:pt-14 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100"
          >
            {[
              { icon: <BadgePercent className="h-5 w-5 text-[#1E8DC5]" />, title: 'Best Price Guarantee', subtitle: 'Get the best price' },
              { icon: <Gift className="h-5 w-5 text-[#1E8DC5]" />, title: 'Customized Packages', subtitle: 'Tailor-made tours for you' },
              { icon: <Shield className="h-5 w-5 text-[#1E8DC5]" />, title: 'Visa Assistance', subtitle: 'Hassle free visa support' },
              { icon: <Headset className="h-5 w-5 text-[#1E8DC5]" />, title: '24x7 Support', subtitle: 'We are always here' },
              { icon: <Users className="h-5 w-5 text-[#1E8DC5]" />, title: 'Trusted Travel Partner', subtitle: '1000+ happy travelers' },
              { icon: <Shield className="h-5 w-5 text-[#1E8DC5]" />, title: 'Secure Booking', subtitle: 'Safe & secure payments' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3.5 px-3 py-2 lg:py-0 text-left first:pl-0 cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E8DC5]/10 text-[#1E8DC5]">
                  {item.icon}
                </div>
                <div className="leading-tight">
                  <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{item.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: POPULAR INTERNATIONAL DESTINATIONS ================= */}
      <section className="py-16 bg-[#F8FBFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-slate-800 tracking-tight">Popular International Destinations</h2>
            <button
              onClick={() => navigate('/international-tours')}
              className="px-4 py-2 text-xs font-bold text-white bg-primary-dark hover:bg-primary-light transition-all cursor-pointer rounded-lg shadow-sm hover:shadow-md"
            >
              View All
            </button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularIntl.slice(0, 8).map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => navigate(`/international-tours?dest=${dest.id}`)}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-xs cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <h3 className="text-base font-bold tracking-tight">{dest.name}</h3>
                  <span className="text-[10px] text-accent font-semibold flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Packages →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: POPULAR DOMESTIC DESTINATIONS ================= */}
      <section className="py-8 bg-[#F8FBFF] border-b border-slate-150/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-slate-800 tracking-tight">Popular Domestic Destinations</h2>
            <button
              onClick={() => navigate('/domestic-tours')}
              className="px-4 py-2 text-xs font-bold text-white bg-primary-dark hover:bg-primary-light transition-all cursor-pointer rounded-lg shadow-sm hover:shadow-md"
            >
              View All
            </button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularDom.slice(0, 8).map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => navigate(`/domestic-tours?dest=${dest.id}`)}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-xs cursor-pointer hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <h3 className="text-base font-bold tracking-tight">{dest.name}</h3>
                  <span className="text-[10px] text-accent font-semibold flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Packages →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: STATS BANNER ================= */}
      <section className="bg-gradient-premium text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold tracking-tight text-white"
          >
            Why Choose Heaven11 Holidays?
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Users className="h-6 w-6 text-[#00E5FF]" />, count: '1000+', label: 'Happy Travelers' },
              { icon: <Gift className="h-6 w-6 text-[#00E5FF]" />, count: '500+', label: 'Tour Packages' },
              { icon: <Compass className="h-6 w-6 text-[#00E5FF]" />, count: '100+', label: 'Destinations' },
              { icon: <Headset className="h-6 w-6 text-[#00E5FF]" />, count: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs cursor-pointer"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="font-display text-xl font-extrabold text-[#00E5FF]">{stat.count}</div>
                  <div className="text-[10px] font-bold text-slate-350 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: TRENDING TOUR PACKAGES ================= */}
      <section id="trending-section" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-800 tracking-tight">Trending Tour Packages</h2>
            </div>
            <button
              onClick={() => navigate('/international-tours')}
              className="px-4 py-2 text-xs font-bold text-white bg-primary-dark hover:bg-primary-light transition-all cursor-pointer rounded-lg shadow-sm hover:shadow-md"
            >
              View All Packages
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-[350px] text-left group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-lg bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-[9px] font-bold text-white uppercase tracking-wide">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3
                      onClick={() => setSelectedPackage(pkg)}
                      className="font-display font-bold text-slate-800 text-sm leading-snug hover:text-[#1E8DC5] transition-all cursor-pointer line-clamp-1"
                    >
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">(5.0)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-[#1E8DC5] hover:text-white transition-all cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleOpenBooking(pkg)}
                        className="rounded-xl bg-primary-light hover:bg-primary-dark px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= SECTION 10: TRAVEL GALLERY ================= */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-slate-800 tracking-tight">Travel Gallery</h2>
            <button
              onClick={() => navigate('/about')}
              className="px-4 py-2 text-xs font-bold text-white bg-primary-dark hover:bg-primary-light transition-all cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', label: 'Maldives' },
              { img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=600&q=80', label: 'Bali' },
              { img: '/kashmir.jpg', label: 'Kashmir' },
              { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', label: 'Dubai' }
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl h-56 shadow-xs group cursor-pointer hover:shadow-md transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                  <span className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1">
                    <Compass className="h-4 w-4 text-[#00E5FF]" /> {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 11.5: CTA BANNER SECTION ================= */}
      <section className="py-16 bg-[#F8FBFF] px-4">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-premium p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-white text-left group">
          {/* Animated luxury background particles / lights */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,229,255,0.15),transparent_50%)] pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-xl">
            <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-[#00E5FF]" /> Luxury Travel
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Your Dream Journey <br />Starts Here
            </h2>
            <p className="text-sm text-white/90 leading-relaxed font-light">
              Plan your perfect vacation with Heaven11 Holidays. Get customized luxury experiences designed just for you.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-[#00E5FF] hover:bg-white text-primary-dark font-bold text-sm tracking-wide shadow-xl hover:shadow-[#00E5FF]/20 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              Book Your Trip
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13: LOWER SIDEBAR & FOOTER LAYOUT ================= */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">

            {/* COLUMN 1: LATEST TRAVEL BLOGS */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-800">Latest Travel Blogs</h3>
              </div>

              <div className="space-y-4">
                {blogs.slice(0, 4).map((art) => (
                  <div
                    key={art.id}
                    className="flex gap-4 group"
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-16 w-16 rounded-lg object-cover shrink-0 border border-slate-100"
                    />
                    <div className="space-y-1">
                      <span className="text-[9px] text-[#1E8DC5] font-bold uppercase">{art.category}</span>
                      <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#1E8DC5] transition-all line-clamp-2">
                        {art.title}
                      </h4>
                      <span className="text-[9px] text-slate-400 font-semibold block">{art.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: ABOUT HEAVEN11 HOLIDAYS */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-800">About Heaven11 Holidays</h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Heaven11 Holidays is a trusted travel partner offering customized holiday packages, flight bookings, hotel reservations, visa assistance and unforgettable travel experiences worldwide.
                </p>

                {/* Curved boat graphic mockup frame (Curved corners tl & br) */}
                <div className="relative overflow-hidden rounded-tl-[60px] rounded-br-[60px] border border-slate-200 shadow-md h-36">
                  <img
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
                    alt="Scenic boat view"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>

                <button
                  onClick={() => navigate('/about')}
                  className="px-5 py-2 rounded-xl border border-[#1E8DC5] text-[#1E8DC5] hover:bg-[#1E8DC5] hover:text-white transition-all text-xs font-bold w-full cursor-pointer"
                >
                  Know More About Us
                </button>
              </div>
            </div>

            {/* COLUMN 3: CONTACT US FORM & DETAILS */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-800">Contact Us</h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Office Details */}
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="h-4 w-4 text-[#1E8DC5]" />
                    <span className="font-bold">+91 91599 96556 / +91 81486 04780</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="h-4 w-4 text-[#1E8DC5]" />
                    <a href="mailto:heaven11holidays@gmail.com" className="hover:underline">heaven11holidays@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="h-4 w-4 text-[#1E8DC5] shrink-0 mt-0.5" />
                    <span>5th Floor, SBRR Square, Anna Nagar, Trichy – 620017, Tamil Nadu, India.</span>
                  </div>
                </div>

                {/* Query Form */}
                {contactSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl p-4 text-center">
                    <h5 className="font-bold">Message Sent!</h5>
                    <p className="text-[10px] mt-1">Thank you. Our travel specialist will connect with you via phone or email shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E8DC5]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={contactFormData.phone}
                      onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E8DC5]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E8DC5]"
                    />
                    <textarea
                      rows={2}
                      required
                      placeholder="Your Message"
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E8DC5]"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-2.5 rounded-xl bg-primary-light hover:bg-primary-dark font-bold text-white shadow-xs transition-all cursor-pointer"
                      >
                        Send Message
                      </button>
                      <button
                        type="button"
                        onClick={triggerWhatsAppContact}
                        className="px-3 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                        title="Send via WhatsApp"
                      >
                        <MessageSquare className="h-4.5 w-4.5 fill-current" />
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* ============================== MODALS BLOCK =========================== */}
      {/* ======================================================================= */}

      {/* SEARCH RESULTS MODAL */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsSearchModalOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-4xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all overflow-y-auto max-h-[85vh] text-left">
            <button
              onClick={() => setIsSearchModalOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-primary-dark flex items-center gap-2">
                <Compass className="h-6 w-6 text-[#00E5FF] fill-[#00E5FF] animate-spin" /> Search Match Results
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We found {searchResults.length} matching packages based on your search query preferences.
              </p>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mx-auto">
                  <Compass className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-slate-700">No Packages Match Exactly</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Don't worry! We design bespoke itineraries. Let our travel specialist craft a custom tour for you.
                </p>
                <a
                  href="https://wa.me/919159996556?text=Hi%20Heaven11!%20I'm%20looking%20for%20a%20custom%20holiday%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-emerald-600 transition-all cursor-pointer"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-current" /> Ask Custom Package via WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.map((pkg) => (
                  <div key={pkg.id} className="rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col justify-between bg-slate-50/50">
                    <div className="relative h-40">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 rounded-lg bg-slate-900/80 px-2 py-0.5 text-[9px] font-bold text-white uppercase">{pkg.type}</span>
                    </div>
                    <div className="p-4 space-y-2.5 text-left">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {pkg.destinationName}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                      </div>
                      <h4 className="font-display font-bold text-slate-800 text-sm leading-snug line-clamp-1">{pkg.title}</h4>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setIsSearchModalOpen(false);
                              setSelectedPackage(pkg);
                            }}
                            className="rounded-lg bg-slate-100 text-slate-700 px-3 py-1.5 text-xs font-semibold hover:bg-slate-200 transition-all cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => {
                              setIsSearchModalOpen(false);
                              handleOpenBooking(pkg);
                            }}
                            className="rounded-lg bg-primary-light text-white px-3.5 py-1.5 text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                          >
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* DYNAMIC PACKAGE DETAILS MODAL */}
      {selectedPackage && !isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setSelectedPackage(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-3xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all overflow-y-auto max-h-[90vh] md:p-8 text-left">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6">
              {/* Cover */}
              <div className="relative h-60 rounded-xl overflow-hidden shadow-inner">
                <img src={selectedPackage.image} alt={selectedPackage.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-widest">{selectedPackage.type} Tour</span>
                  <h3 className="font-display text-2xl font-bold mt-1 leading-snug">{selectedPackage.title}</h3>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Destination</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5"><MapPin className="h-3.5 w-3.5 text-[#1E8DC5]" /> {selectedPackage.destinationName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5"><Clock className="h-3.5 w-3.5 text-[#1E8DC5]" /> {selectedPackage.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Rating</span>
                  <span className="font-bold text-amber-500 flex items-center gap-1 mt-0.5"><Star className="h-3.5 w-3.5 fill-current" /> {selectedPackage.rating} ({selectedPackage.reviewsCount})</span>
                </div>

              </div>

              {/* Tabs / Itinerary */}
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-slate-800 border-l-3 border-[#00E5FF] pl-3">Day-Wise Itinerary Plan</h4>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2 text-left">
                  {selectedPackage.itinerary.map((dayObj) => (
                    <div key={dayObj.day} className="rounded-xl border border-slate-150 p-4 bg-slate-50/20">
                      <h5 className="text-xs font-bold text-[#1E8DC5] uppercase tracking-wider">Day {dayObj.day}: {dayObj.title}</h5>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{dayObj.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-6 text-left">
                <div>
                  <h4 className="font-display text-sm font-bold text-emerald-600 mb-3 flex items-center gap-1">✔ Tour Inclusions</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {selectedPackage.inclusions.map((inc, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-rose-600 mb-3 flex items-center gap-1">❌ Tour Exclusions</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {selectedPackage.exclusions.map((exc, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <span className="text-rose-600 shrink-0 font-bold mt-0.5">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking Actions footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                <div className="text-xs text-slate-500 max-w-sm">
                  *Rates exclude high-season peak surcharges if applicable. Dummy air ticket reservation is generated free upon flight bundle.
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const url = `https://wa.me/919159996556?text=Hi%20Heaven11%20Holidays!%20I'm%20interested%20in%20the%20package:%20${selectedPackage.title}`;
                      window.open(url, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-600 px-5 py-3 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" /> WhatsApp Query
                  </button>
                  <button
                    onClick={() => handleOpenBooking(selectedPackage)}
                    className="rounded-xl bg-primary-light px-6 py-3 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Book Package Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK BOOKING FORM MODAL */}
      {isBookingOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsBookingOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />

          <div className="relative z-10 w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all text-left">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            {bookingSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-bounce">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Booking Request Sent!</h3>
                <p className="mt-2 text-xs text-slate-500">
                  We received your booking interest for **{selectedPackage.title}**. Our agent will contact you shortly to lock down dates.
                </p>
                <button
                  onClick={triggerWhatsAppBooking}
                  className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-600 transition-all cursor-pointer"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-current" /> Instant Confirmation (WhatsApp)
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-dark">Secure Booking Request</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Book **{selectedPackage.title}**. Our team will confirm the best price for you.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-[#1E8DC5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingFormData.phone}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                      placeholder="e.g. +91 81486 04780"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-[#1E8DC5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookingFormData.email}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm focus:border-[#1E8DC5] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Travel Date</label>
                      <input
                        type="date"
                        required
                        value={bookingFormData.date}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, date: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-[#1E8DC5] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">No. of Travelers</label>
                      <select
                        value={bookingFormData.travelers}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, travelers: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-[#1E8DC5] focus:outline-none bg-white"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5+">Family (5+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-[#1E8DC5] py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Confirm Tour Booking
                  </button>
                  <button
                    type="button"
                    onClick={triggerWhatsAppBooking}
                    className="rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-600 px-4 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
