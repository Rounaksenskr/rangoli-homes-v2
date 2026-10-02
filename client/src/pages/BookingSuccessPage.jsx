import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { fetchBookingDetails } from '../services/bookingApi';
import { siteConfig } from '../config/site';

export default function BookingSuccessPage() {
  const [searchParams] = useSearchParams();
  const bookingRef = searchParams.get('ref');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(Boolean(bookingRef));

  useEffect(() => {
    if (!bookingRef) return;

    fetchBookingDetails(bookingRef)
      .then((res) => setDetails(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [bookingRef]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-cream">
      <div className="max-w-lg w-full bg-surface p-8 sm:p-10 rounded-xl border border-border shadow-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto text-[#814882]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#814882]">Confirmed</span>
          <h1 className="text-3xl font-serif font-bold text-charcoal">Consultation Scheduled!</h1>
          <p className="text-xs text-clay">
            A confirmation email with session instructions has been dispatched.
          </p>
        </div>

        {loading ? (
          <div className="py-6">
            <div className="w-6 h-6 border-2 border-[#814882]/20 border-t-[#814882] rounded-full animate-spin mx-auto" />
          </div>
        ) : (
          <div className="p-4 bg-beige/50 border border-border rounded-lg text-left space-y-2.5 text-xs text-charcoal">
            <div className="flex items-center justify-between border-b border-border/80 pb-2">
              <span className="text-clay font-medium">Booking Reference</span>
              <span className="font-mono font-bold text-[#814882]">{bookingRef || 'RH-CONFIRMED'}</span>
            </div>
            {details && (
              <>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-clay" />
                  <span><strong>Client:</strong> {details.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-clay" />
                  <span><strong>Service:</strong> {details.service}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-clay" />
                  <span>
                    <strong>Scheduled For:</strong>{' '}
                    {new Date(details.startsAt).toLocaleString('en-IN', {
                      timeZone: 'Asia/Kolkata',
                      dateStyle: 'full',
                      timeStyle: 'short',
                    })}
                  </span>
                </div>
              </>
            )}
            <div className="pt-2 text-[11px] text-clay leading-relaxed">
              Studio Address: {typeof siteConfig.address === 'object' ? `${siteConfig.address.street}, ${siteConfig.address.city}` : siteConfig.address}
            </div>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link to="/" className="flex-1">
            <Button variant="outline" size="md" className="w-full">
              Return Home
            </Button>
          </Link>
          <Link to="/projects" className="flex-1">
            <Button variant="primary" size="md" className="w-full">
              Explore Projects
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}