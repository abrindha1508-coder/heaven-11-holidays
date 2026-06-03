import React from 'react';
import { BadgePercent } from 'lucide-react';

export const Refund: React.FC = () => {
  return (
    <div className="relative pt-24 min-h-screen bg-slate-50/50 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5 flex items-center gap-3">
            <div className="h-10 w-10 bg-primary-light/10 text-primary-light rounded-xl flex items-center justify-center">
              <BadgePercent className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Financial Policy</span>
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Refund & Cancellation</h1>
            </div>
          </div>

          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
            <p>
              Last Updated: June 02, 2026. At **Heaven11 Holidays**, we follow a fair, transparent, and structured cancellation refund grid. Since we pre-block rooms, flights, and guide coordinates, cancellations incur partner-surcharges.
            </p>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">1. Standard Cancellation Refund Slab</h3>
            <p>
              Cancellations requested under standard holiday packages are processed according to the following schedule:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden bg-slate-50/30">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left border-b border-slate-200">Cancellation Timing</th>
                    <th className="px-4 py-3 text-left border-b border-slate-200">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="px-4 py-3.5">30 Days or more prior to departure</td>
                    <td className="px-4 py-3.5">85% of total package cost returned</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5">15 - 29 Days prior to departure</td>
                    <td className="px-4 py-3.5">50% of total package cost returned</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5">7 - 14 Days prior to departure</td>
                    <td className="px-4 py-3.5">25% of total package cost returned</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5">Less than 7 Days prior / No-Show</td>
                    <td className="px-4 py-3.5 font-semibold text-rose-600">0% Refund (Fully Non-Refundable)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">2. Flight & Visa Surcharges Exclusions</h3>
            <p>
              Please note that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Flight bookings once ticketed follow individual airline cancel fees. Group LCC tickets are strictly non-refundable.</li>
              <li>Accreditation VFS slots and foreign embassy visa processing fees are 100% non-refundable once filed.</li>
            </ul>

            <h3 className="font-display font-bold text-slate-800 text-base pt-2">3. Return Timelines</h3>
            <p>
              Eligible refunds are processed and returned to the traveler's source bank coordinates within **7 to 10 working days** from the formal cancellation approval date.
            </p>

            <p>
              Please contact **heaven11holidays@gmail.com** to request formal cancellations or check refund statuses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
