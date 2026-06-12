import React from 'react';
import { Plus, Minus, User, Baby, Users } from 'lucide-react';

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
  
  const handleDecrement = (category: keyof TravellersState) => {
    const minVal = category === 'adults' ? 1 : 0;
    if (value[category] > minVal) {
      onChange({
        ...value,
        [category]: value[category] - 1
      });
    }
  };

  const handleIncrement = (category: keyof TravellersState) => {
    onChange({
      ...value,
      [category]: value[category] + 1
    });
  };

  const totalTravelers = value.adults + value.children + value.infants + value.seniors;

  const categories = [
    {
      key: 'adults' as const,
      label: 'Adults',
      ageLimit: 'Age 12+',
      description: 'Standard passenger',
      icon: <User className="h-4.5 w-4.5 text-[#1E8DC5]" />
    },
    {
      key: 'children' as const,
      label: 'Children',
      ageLimit: 'Age 2–11',
      description: 'Require hotel bed',
      icon: <Baby className="h-4.5 w-4.5 text-[#1E8DC5]" />
    },
    {
      key: 'infants' as const,
      label: 'Infants',
      ageLimit: 'Age 0–2',
      description: 'Lap / share bed',
      icon: <Baby className="h-4 w-4 text-[#1E8DC5] scale-90" />
    },
    {
      key: 'seniors' as const,
      label: 'Seniors',
      ageLimit: 'Age 60+',
      description: 'Special care needs',
      icon: <User className="h-4.5 w-4.5 text-[#1E8DC5] opacity-80" />
    }
  ];

  return (
    <div className="w-full space-y-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-left">
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2">
          <Users className="h-4.5 w-4.5 text-[#1E8DC5]" /> Travelers Details
        </h4>
        <span className="rounded-full bg-[#1E8DC5]/10 px-3 py-1 text-[11px] font-bold text-[#1E8DC5] tracking-wide shadow-xs">
          Total Travelers: {totalTravelers}
        </span>
      </div>

      {/* Grid containing cards */}
      <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
        {categories.map((cat) => {
          const count = value[cat.key];
          const isMinReached = cat.key === 'adults' ? count <= 1 : count <= 0;

          return (
            <div
              key={cat.key}
              className="group snap-start shrink-0 w-[125px] min-h-[145px] sm:w-auto sm:min-h-[190px] flex flex-col justify-between items-center text-center p-2.5 sm:p-4 rounded-xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-md hover:border-[#1E8DC5]/30"
            >
              {/* Top Details (Centered layout) */}
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#1E8DC5]/5 text-[#1E8DC5] mb-1.5 sm:mb-2.5 transition-all duration-300 group-hover:bg-[#1E8DC5]/10">
                  <div className="scale-90 sm:scale-100 flex items-center justify-center">
                    {cat.icon}
                  </div>
                </div>
                <h5 className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-tight leading-none">
                  {cat.label}
                </h5>
                <span className="inline-block mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                  {cat.ageLimit}
                </span>
                <p className="hidden sm:block text-[9px] text-slate-400 font-light mt-1.5 leading-normal max-w-[120px]">
                  {cat.description}
                </p>
              </div>

              {/* Stepper Controls (Bottom Center aligned) */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-auto pt-2 sm:pt-2.5 w-full border-t border-slate-50">
                <button
                  type="button"
                  onClick={() => handleDecrement(cat.key)}
                  disabled={isMinReached}
                  className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-xs transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:cursor-not-allowed"
                >
                  <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </button>
                <span className="font-display text-[11px] sm:text-xs font-extrabold text-slate-800 w-5 sm:w-6 text-center select-none">
                  {count}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncrement(cat.key)}
                  className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#1E8DC5]/20 bg-white text-slate-600 shadow-xs transition-all duration-200 hover:bg-[#1E8DC5]/5 hover:border-[#1E8DC5]/40 hover:text-[#1E8DC5] hover:scale-105 active:scale-95"
                >
                  <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
