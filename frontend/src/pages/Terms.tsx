import React from 'react';
import { FileText } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  const termsKeywords = "Terms and conditions, booking policy, travel terms, Heaven11 Holidays terms, payment guidelines, cancellation rules, Heaven11 Holidays";

  const termsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://heaven11holidays.in/terms-conditions#webpage",
        "url": "https://heaven11holidays.in/terms-conditions",
        "name": "Terms & Conditions | Heaven11 Holidays",
        "description": "Review the terms and conditions of Heaven11 Holidays. Learn about booking rules, payment options, and travel guidelines.",
        "isPartOf": {
          "@id": "https://heaven11holidays.in/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://heaven11holidays.in/terms-conditions#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://heaven11holidays.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms & Conditions",
            "item": "https://heaven11holidays.in/terms-conditions"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative pt-24 min-h-screen bg-slate-50/50 pb-20">
      <SEO
        title="Terms & Conditions | Heaven11 Holidays"
        description="Review the terms and conditions of Heaven11 Holidays. Learn about booking rules, payment options, and travel guidelines."
        keywords={termsKeywords}
        schemaData={termsSchema}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5 flex items-center gap-3">
            <div className="h-10 w-10 bg-primary-light/10 text-primary-light rounded-xl flex items-center justify-center">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Legal Document</span>
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Terms & Conditions</h1>
            </div>
          </div>

          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
            <p>
              Last Updated: June 02, 2026. Welcome to **Heaven11 Holidays**. These Terms & Conditions govern your bookings, payments, cancellations, and active travel logistics booked through our agency.
            </p>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">1. Tour Bookings & Tariff Policy</h3>
            <p>
              By booking a tour, flight ticket, or hotel with Heaven11, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bookings are confirmed only upon receipt of initial non-refundable block deposits.</li>
              <li>Tariff plans quoted are dynamic and subject to active seat/room availability until confirmed.</li>
              <li>Full balance payment must be settled at least 15 days prior to the departure date.</li>
            </ul>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">2. Traveler Responsibilities</h3>
            <p>
              It is the absolute responsibility of the travelers to ensure:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Possession of a valid passport with at least 6 months validity from the date of return.</li>
              <li>Procuring valid entry visas, travel health declarations, and necessary vaccinations.</li>
              <li>Maintaining punctuality for direct private transfers and scheduled sightseeing plans.</li>
            </ul>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">3. Force Majeure & Liabilities</h3>
            <p>
              Heaven11 Holidays acts strictly as a booking agent for hoteliers, airline partners, and transport captains. We are not liable for travel changes, baggage losses, flight cancellations, or logistical delays caused by natural acts, government blockades, weather conditions, or technical failures.
            </p>

            <p>
              By accessing our services, you accept these terms in full. Write to **heaven11holidays@gmail.com** for legal inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
