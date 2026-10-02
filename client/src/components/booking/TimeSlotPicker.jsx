import { Clock, AlertCircle } from 'lucide-react';

export default function TimeSlotPicker({ slots, selectedTime, onSelectTime, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="py-8 text-center text-xs text-clay space-y-2">
        <div className="w-5 h-5 border-2 border-[#814882]/20 border-t-[#814882] rounded-full animate-spin mx-auto" />
        <p>Checking studio schedule...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
        <AlertCircle className="w-4 h-4 shrink-0" />
        <span>{error}</span>
      </div>
    );
  }

  if (!slots || slots.length === 0) {
    return (
      <div className="p-6 bg-beige/40 rounded-lg text-center border border-border">
        <p className="text-xs text-clay">No open slots available for this day. Please choose another date.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        2. Pick Time Slot (1-Hour Session) *
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {slots.map((slot) => {
          const isSelected = selectedTime === slot;
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelectTime(slot)}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-md border text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#814882] text-white border-[#814882] shadow-sm'
                  : 'bg-surface text-charcoal border-border hover:border-[#814882]/50 hover:bg-cream'
              }`}
            >
              <Clock className="w-3.5 h-3.5 opacity-70" />
              <span>{slot} IST</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}