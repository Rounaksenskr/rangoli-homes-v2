import { Calendar, Clock, CheckCircle, Video, MapPin, FileText } from 'lucide-react';

export default function BookingSummary({ date, time, service, consultationMode, dimensionsFile }) {
  if (!date || !time) return null;

  return (
    <div className="p-4 bg-beige/50 border border-border rounded-lg space-y-2.5">
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
        <div className="flex items-center gap-2 sm:col-span-2">
          {consultationMode === 'Virtual Consultation' ? (
            <Video className="w-3.5 h-3.5 text-[#814882]" />
          ) : (
            <MapPin className="w-3.5 h-3.5 text-[#814882]" />
          )}
          <span><strong>Mode:</strong> {consultationMode || 'Studio Consultation'}</span>
        </div>
      </div>
      <div className="text-xs text-clay pt-1.5 border-t border-border/60 flex flex-col gap-1">
        <div><strong>Service:</strong> {service}</div>
        {dimensionsFile && (
          <div className="flex items-center gap-1.5 text-charcoal/80">
            <FileText className="w-3 h-3 text-[#814882]" />
            <span><strong>Attached Plan:</strong> {dimensionsFile}</span>
          </div>
        )}
      </div>
    </div>
  );
}