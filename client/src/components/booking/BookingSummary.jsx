import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function BookingSummary({ date, time, service }) {
  if (!date || !time) return null;

  return (
    <div className="p-4 bg-beige/50 border border-border rounded-lg space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold text-[#814882] uppercase tracking-wider">
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Session Summary</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-clay" />
          <span><strong>Date:</strong> {date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-clay" />
          <span><strong>Time:</strong> {time} IST</span>
        </div>
      </div>
      <div className="text-xs text-clay pt-1 border-t border-border/60">
        <strong>Service:</strong> {service}
      </div>
    </div>
  );
}