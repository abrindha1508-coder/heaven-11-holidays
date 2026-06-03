import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative pt-24 min-h-screen bg-slate-50/50 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5 flex items-center gap-3">
            <div className="h-10 w-10 bg-primary-light/10 text-primary-light rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compliance Document</span>
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Privacy Policy</h1>
            </div>
          </div>

          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
            <p>
              Last Updated: June 02, 2026. At **Heaven11 Holidays Private Limited**, one of our main priorities is the privacy of our visitors and guests. This Privacy Policy document outlines the types of information we collect, record, and how we utilize it.
            </p>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">1. Information We Collect</h3>
            <p>
              When you submit an inquiry form, custom quote form, hotel/flight booking request, or subscribe to our newsletters on our portal, we collect personal data including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and contact coordinates (Phone, Email Address).</li>
              <li>Travel specifications (Desired Destination, Travel Dates, Travelers count, Budget preferences).</li>
              <li>Passport information, visa checklists, and financial records for visa filing.</li>
            </ul>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">2. How We Use Your Information</h3>
            <p>
              We utilize the collected information to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analyze travel queries and generate customized day-wise itineraries.</li>
              <li>Secure confirm room vouchers and flight seat blocks with partner airlines and hoteliers.</li>
              <li>Provide active notifications, trip guides, and emergency coordinates during tours.</li>
              <li>Submit files and secure biometric slot reservations with foreign consulates/VFS desks.</li>
            </ul>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">3. Third-Party Data Disclosures</h3>
            <p>
              We respect your data confidentiality. We only share narrow slices of personal coordinates with hoteliers, local tour captains, visa consulates, and transport coordinates strictly necessary to execute your travel logistics. We never sell traveler datasets.
            </p>

            <p>
              If you have any questions or require additional details regarding our privacy guidelines, feel free to reach out to us at **heaven11holidays@gmail.com**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
