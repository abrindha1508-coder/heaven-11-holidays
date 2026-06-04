import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', destination: '', message: '' });
    }, 3500);
  };

  const triggerWhatsAppContact = () => {
    const text = `Hi Heaven11! I want to submit a general travel inquiry:
- *Name*: ${formData.name || 'Client'}
- *Phone*: ${formData.phone || 'N/A'}
- *Destination*: ${formData.destination || 'N/A'}
- *Message*: ${formData.message || 'Need consulting'}`;
    window.open(`https://wa.me/919159996556?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50 pb-20">
      <PageHero
        title="Contact Our Team"
        subtitle="We Are Here For You"
        description="Reach out for custom holiday quotes, flight modifications, or passport document support. We are available 24x7 on-call."
        backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        targetAnchor="contact-content"
      />

      <div id="contact-content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact info cards (Col 1) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-6"
        >
          {[
            {
              icon: <MapPin className="h-6 w-6 text-accent" />,
              title: 'HQ Office Address',
              lines: [
                '5th Floor, SBRR Square,',
                'Anna Nagar, Trichy – 620017,',
                'Tamil Nadu, India.'
              ]
            },
            {
              icon: <Phone className="h-6 w-6 text-accent" />,
              title: 'Direct Call Desk',
              lines: [
                'Primary: +91 91599 96556',
                'Alternative: +91 81486 04780',
                'Toll-Free: 1800 123 4567'
              ]
            },
            {
              icon: <Mail className="h-6 w-6 text-accent" />,
              title: 'Email Correspondence',
              lines: [
                'heaven11holidays@gmail.com'
              ]
            }
          ].map((card, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-xs border border-slate-100 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-dark/5 text-primary-dark">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-slate-800 text-sm">{card.title}</h4>
                <div className="text-xs text-slate-500 space-y-0.5 leading-relaxed">
                  {card.lines.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Operation Hours */}
          <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xs flex items-start gap-4">
            <Clock className="h-6 w-6 text-accent shrink-0" />
            <div className="space-y-1.5 text-xs">
              <h4 className="font-display font-bold text-sm">Operating Timings</h4>
              <p className="text-slate-400 leading-relaxed">
                Monday to Saturday: 9:00 AM - 7:30 PM<br />
                Sunday: 10:00 AM - 4:00 PM<br />
                <span className="text-accent font-semibold block mt-1">24x7 Emergency WhatsApp Hotline active during active guest tours.</span>
              </p>
            </div>
          </div>
        </motion.div>        {/* Lead Form (Col 2) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xs border border-slate-100">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto animate-bounce">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Thank you for writing. Our dedicated travel assistant will contact you shortly with customized tour options.
                </p>
                <button
                  onClick={triggerWhatsAppContact}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-white font-semibold text-xs px-6 py-3 shadow-md hover:bg-emerald-600 transition-all cursor-pointer mx-auto"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-current" /> Instant Support (WhatsApp)
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-dark flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-accent fill-accent" /> Custom Quote Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete the form below and let us orchestrate a stunning, bespoke itinerary for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5 uppercase">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 81486 04780"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:border-primary-light focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:border-primary-light focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5 uppercase">Intended Destination</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="e.g. Dubai, Bali, Kashmir"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:border-primary-light focus:outline-none"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1.5 uppercase">Detailed Travel Query</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Traveling with family (4 adults, 2 kids). Looking for a 5-night package with direct flights, 4-star stays, vegetarian meals..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:border-primary-light focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-gradient-premium py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer"
                  >
                    Submit Quotation Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={triggerWhatsAppContact}
                    className="rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-600 px-4 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
