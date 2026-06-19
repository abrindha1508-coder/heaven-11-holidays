import React from 'react';
import { Plus, Minus, Users } from 'lucide-react';

export interface TravellersState {
  adults: number;
  children: number;
  infants: number;
  seniors: number;
}

interface TravelersSelectorProps {
  value: TravellersState;
  onChange: (value: TravellersState) => void;
}

export const TravelersSelector: React.FC<TravelersSelectorProps> = ({ value, onChange }) => {
  const totalPeople = value.adults + value.children + value.infants + value.seniors;

  const handleDecrement = () => {
    if (totalPeople > 1) {
      onChange({
        adults: totalPeople - 1,
        children: 0,
        infants: 0,
        seniors: 0
      });
    }
  };

  const handleIncrement = () => {
    onChange({
      adults: totalPeople + 1,
      children: 0,
      infants: 0,
      seniors: 0
    });
  };

  return (
    <div className="w-full space-y-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-left">
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2">
          <Users className="h-4.5 w-4.5 text-[#1E8DC5]" /> Travelers Details
        </h4>
      </div>

      {/* Stepper Card */}
      <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-md hover:border-[#1E8DC5]/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E8DC5]/5 text-[#1E8DC5]">
            <Users className="h-4.5 w-4.5 text-[#1E8DC5]" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800 tracking-tight leading-none">
              Number of People
            </h5>
            <p className="text-[10px] text-slate-400 font-light mt-1 leading-none">
              Total travelers for the tour package
            </p>
          </div>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={totalPeople <= 1}
            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-xs transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:cursor-not-allowed"
          >
            <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>
          <span className="font-display text-[11px] sm:text-xs font-extrabold text-slate-800 w-5 sm:w-6 text-center select-none">
            {totalPeople}
          </span>
          <button
            type="button"
            onClick={handleIncrement}
            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#1E8DC5]/20 bg-white text-slate-600 shadow-xs transition-all duration-200 hover:bg-[#1E8DC5]/5 hover:border-[#1E8DC5]/40 hover:text-[#1E8DC5] hover:scale-105 active:scale-95"
          >
            <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
