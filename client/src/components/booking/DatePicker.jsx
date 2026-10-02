export default function DatePicker({ selectedDate, onSelectDate }) {
  // Generate selectable dates from tomorrow up to 30 days ahead (excluding Sundays)
  const availableDates = [];
  const start = new Date();

  for (let i = 1; i <= 30; i++) {
    const d = new Date();
    d.setDate(start.getDate() + i);

    // Skip Sundays (0)
    if (d.getDay() !== 0) {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;

      availableDates.push({
        dateStr,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: d.getDate(),
        monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        1. Select Consultation Date *
      </label>
      <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar">
        {availableDates.map((item) => {
          const isSelected = selectedDate === item.dateStr;
          return (
            <button
              key={item.dateStr}
              type="button"
              onClick={() => onSelectDate(item.dateStr)}
              className={`flex flex-col items-center justify-center min-w-[70px] py-3 px-2 rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#814882] text-white border-[#814882] shadow-md scale-105'
                  : 'bg-surface text-charcoal border-border hover:border-[#814882]/50'
              }`}
            >
              <span className="text-[11px] font-medium uppercase opacity-80">{item.dayName}</span>
              <span className="text-lg font-serif font-bold my-0.5">{item.dayNumber}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">{item.monthName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}