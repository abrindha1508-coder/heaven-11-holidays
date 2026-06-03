import { Shield, Sparkles, Compass, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const About: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50/50 pb-20">
      <PageHero
        title="About Heaven11 Holidays"
        subtitle="Since 2018"
        description="Fulfilling luxury global itineraries. We are dedicated to maximum comfort, verified hygiene, and personalized travel details."
        backgroundImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
        targetAnchor="about-content"
      />

      <div id="about-content" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 space-y-20">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-primary-light uppercase">Who We Are</span>
            <h2 className="font-display text-3xl font-extrabold text-primary-dark">Fulfilling Extraordinary Journeys</h2>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              Heaven11 Holidays is a premium travel agency designed for discerning travelers. We understand that travel is not just about visiting cities—it's about gathering unique lifetime stories. That's why we don't believe in standard mass-tours. 
            </p>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              Our travel curators work individually with each traveler. We plan and manage direct airport transfers, premium accommodations in hand-selected resorts, and organize private local sightseeing guides to ensure complete safety and luxury.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md h-80">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" 
              alt="About Travel Curation" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Our Mission',
              icon: <Sparkles className="h-6 w-6 text-accent" />,
              desc: 'To offer uncompromised luxury travel layouts by matching individual budgets with top accredited hotel partners and local experts globally.'
            },
            {
              title: 'Our Vision',
              icon: <Compass className="h-6 w-6 text-accent" />,
              desc: 'To build the most reliable premium travel brand in Southeast Asia, known for pristine transparency, fast visa logistics, and perfect tour executions.'
            },
            {
              title: 'Our Core Values',
              icon: <Shield className="h-6 w-6 text-accent" />,
              desc: 'Pristine transparency (no hidden markups), safety-first chauffeured transport, strict quality audits, and 24x7 guest support.'
            }
          ].map((val, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-xs border border-slate-100 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark/5 text-primary-dark">
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-lg">{val.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Trust Us Factors */}
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80')` }} />
          <div className="mx-auto max-w-4xl text-center space-y-12 relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent tracking-widest uppercase">Pristine Reputation</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white">Why Customers Trust Heaven11</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-xs">
              {[
                {
                  t: 'Accredited Safe Stays',
                  d: 'Every property is hand-audited before being integrated into our system. We ensure clean pools, premium bedding, hygiene standard checks, and prime safe locations.'
                },
                {
                  t: 'Chauffeured Direct Transfers',
                  d: 'No waiting on local taxi lines. Our packages cover dedicated air-conditioned vehicles and licensed, vetted local drivers who double as friendly coordinators.'
                },
                {
                  t: 'Expedited Logistics',
                  d: 'Our direct airline ticketing quotas and VFS passport desk access mean you get travel confirmations, VFS slots, and flight boarding coordinates at lightning speeds.'
                },
                {
                  t: 'No Hidden Surcharges',
                  d: 'Transparency is our core currency. The quotation you lock in covers all standard toll taxes, driver allowances, daily meals listed, and sightseeing tickets.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                    <Check className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1 text-sm">{item.t}</span>
                    <p className="text-slate-400 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
