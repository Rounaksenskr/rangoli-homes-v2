import SectionHeader from '../components/ui/SectionHeader';
import ConsultationForm from '../components/booking/ConsultationForm';
import { ShieldCheck, Calendar, Clock, Video } from 'lucide-react';

export default function BookConsultationPage() {
  return (
    <div className="py-16 md:py-24 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tagline="Direct Scheduling"
          title="Book Your Design Consultation"
          description="Reserve a 1-on-1 session with our principal design team to inspect plans, estimate costs, and discuss material samples."
        />

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
          <div className="p-3 bg-surface rounded-lg border border-border text-center">
            <Calendar className="w-4 h-4 text-[#814882] mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-charcoal block">60-Min Session</span>
          </div>
          <div className="p-3 bg-surface rounded-lg border border-border text-center">
            <Video className="w-4 h-4 text-[#814882] mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-charcoal block">Studio or Virtual</span>
          </div>
          <div className="p-3 bg-surface rounded-lg border border-border text-center">
            <Clock className="w-4 h-4 text-[#814882] mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-charcoal block">Instant Confirmation</span>
          </div>
          <div className="p-3 bg-surface rounded-lg border border-border text-center">
            <ShieldCheck className="w-4 h-4 text-[#814882] mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-charcoal block">100% Free Consultation</span>
          </div>
        </div>

        {/* Multi-Step Orchestrator */}
        <div className="bg-surface p-6 sm:p-10 rounded-xl border border-border shadow-sm">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}